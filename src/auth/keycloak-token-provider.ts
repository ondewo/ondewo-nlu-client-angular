import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, InjectionToken, OnDestroy } from "@angular/core";
import { catchError, firstValueFrom, Observable, throwError } from "rxjs";
import { TokenProvider, TokenResult } from "./token-provider";

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the background
 * refresh fires *before* the access token actually lapses (covers clock skew and
 * the round-trip to Keycloak). Mirrors the node SDK's `REFRESH_SKEW_IN_S` and the
 * python SDK's `_EXPIRY_LEEWAY_S`.
 */
export const REFRESH_SKEW_IN_S: number = 30;

/**
 * Lower bound (in seconds) for the scheduled refresh delay so a tiny / zero
 * `expires_in` cannot spin a hot loop. Mirrors the node SDK's
 * `MIN_REFRESH_DELAY_IN_S`.
 */
export const MIN_REFRESH_DELAY_IN_S: number = 1;

/** Options accepted by {@link KeycloakTokenProvider.ensureFreshToken}. */
export interface EnsureFreshTokenOptions {
  /**
   * Renew unconditionally, even when the cached access token still looks valid.
   *
   * Set this after the server has rejected a request with `UNAUTHENTICATED`: the
   * token may have been revoked, or the local clock may be ahead of Keycloak's,
   * in which case the cached expiry cannot be trusted.
   */
  force?: boolean;
}

/**
 * Runtime configuration for {@link KeycloakTokenProvider}.
 *
 * Authentication is performed against the *public* SDK Keycloak client (no
 * `client_secret` is ever sent). Supply **either** a long-lived offline /
 * refresh token (`offlineToken`) **or** a username + password pair for a
 * one-time Resource-Owner-Password-Credentials (ROPC) login — the technical
 * user must be 2FA-exempt for the ROPC grant to succeed.
 */
export interface KeycloakTokenProviderConfig {
  /** Base Keycloak URL, e.g. `https://auth.example.com/auth` (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. `ondewo-ccai-platform`. */
  realm: string;
  /** Public SDK client id, e.g. `ondewo-nlu-cai-sdk-public` (no `client_secret`). */
  clientId: string;
  /**
   * A long-lived offline / refresh token. When set, the provider skips the
   * password login and bootstraps directly from this token. Takes precedence
   * over `username` / `password`.
   */
  offlineToken?: string;
  /** Technical-user email / username for the ROPC grant (ignored when `offlineToken` is set). */
  username?: string;
  /** Technical-user password for the ROPC grant (ignored when `offlineToken` is set). */
  password?: string;
  /**
   * Optional cap (seconds) on how long the background auto-refresh runs after the
   * first login. Once it elapses the loop stops and the access token is allowed
   * to lapse (a re-login is then required). Omit to keep refreshing until the
   * offline session itself expires.
   */
  tokenExpirationInS?: number;
  /**
   * Whether to verify the Keycloak server's TLS certificate on the
   * token-endpoint call. Defaults to `true` (secure).
   *
   * NO-OP IN THIS ANGULAR/BROWSER CLIENT. The token request is made with
   * Angular's `HttpClient` (an XHR/fetch call), and in a browser the TLS
   * handshake is owned by the user agent — there is no `https.Agent`, undici
   * dispatcher, or `rejectUnauthorized` hook that app code can reach, and
   * `HttpClient`'s request options expose no certificate-verification slot. The
   * value is therefore stored on the provider for cross-SDK config parity with
   * the Python/Node.js clients (where it does disable TLS verification) but has
   * no effect on the outgoing request here. For a self-signed Keycloak/Envoy
   * endpoint, the certificate must be trusted at the browser/OS level instead.
   */
  keycloakVerifySsl?: boolean;
}

/**
 * DI token under which the consuming application supplies the
 * {@link KeycloakTokenProviderConfig} for {@link KeycloakTokenProvider}.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   {
 *     provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
 *     useValue: {
 *       keycloakUrl: "https://auth.example.com/auth",
 *       realm: "ondewo-ccai-platform",
 *       clientId: "ondewo-nlu-cai-sdk-public",
 *       username: "technical-user@example.com",
 *       password: "…",
 *     } satisfies KeycloakTokenProviderConfig,
 *   },
 *   provideOndewoNluAuth(KeycloakTokenProvider),
 * ]
 * ```
 */
export const KEYCLOAK_TOKEN_PROVIDER_CONFIG: InjectionToken<KeycloakTokenProviderConfig> =
  new InjectionToken<KeycloakTokenProviderConfig>("ONDEWO_NLU_KEYCLOAK_TOKEN_PROVIDER_CONFIG");

/** Raised on any token-endpoint failure or unusable token-endpoint response. */
export class KeycloakAuthenticationError extends Error {
  /**
   * @param message a human-readable description of the authentication failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "KeycloakAuthenticationError";
  }
}

/** The subset of a Keycloak token-endpoint response this provider consumes. */
interface KeycloakTokenResponse {
  /** The short-lived bearer access token. */
  access_token?: string;
  /** The (optionally rotated) offline / refresh token. */
  refresh_token?: string;
  /** The access-token lifetime in seconds, as reported by Keycloak. */
  expires_in?: number;
}

/**
 * Concrete, ready-to-use {@link TokenProvider} that logs in once against the
 * public Keycloak SDK client and keeps the access token fresh in the background.
 *
 * Flow (modelled on the node `OfflineTokenProvider` and python
 * `KeycloakTokenProvider`):
 *
 * 1. **Login once** — either an offline / refresh-token grant (when
 *    `offlineToken` is configured) or a `grant_type=password` ROPC login with
 *    `scope=offline_access`. Both yield a short-lived `access_token` and a
 *    long-lived `refresh_token`.
 * 2. **Refresh ahead of expiry** — a single background timer is armed for
 *    `expires_in − {@link REFRESH_SKEW_IN_S}` seconds (floored at
 *    {@link MIN_REFRESH_DELAY_IN_S}, clamped to the optional
 *    `tokenExpirationInS` deadline) and exchanges the refresh token for a new
 *    access token, then re-arms itself.
 * 3. **Serve the current token** — {@link getToken} returns the freshest access
 *    token synchronously (`null` before the first login completes / after the
 *    bounded loop has lapsed), so the auth interceptors never block on the
 *    network.
 *
 * Register it through `provideOndewoNluAuth` after supplying a
 * {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}. The first login is kicked off lazily on
 * construction; call {@link whenReady} to await it explicitly (e.g. in an
 * `APP_INITIALIZER`).
 */
@Injectable({ providedIn: "root" })
export class KeycloakTokenProvider implements TokenProvider, OnDestroy {
  /** Angular HTTP client used for the token-endpoint calls. */
  private readonly http: HttpClient = inject(HttpClient);
  /**
   * The resolved runtime configuration, or `null` until {@link configure} supplies
   * one. Injected optionally so an application that only learns its credentials at
   * runtime (e.g. an embedded widget reading them from its URL) can register the
   * provider at bootstrap and configure it later.
   */
  private config: KeycloakTokenProviderConfig | null = inject(KEYCLOAK_TOKEN_PROVIDER_CONFIG, {
    optional: true
  });
  /** Pre-computed OIDC token-endpoint URL for the configured realm, or `null` while unconfigured. */
  private tokenEndpoint: string | null = null;

  /**
   * Whether TLS-certificate verification is requested for the token-endpoint
   * call. Defaults to `true`. Stored for cross-SDK config parity only — it is a
   * NO-OP in this browser client (the browser owns the TLS handshake), so the
   * outgoing {@link postTokenRequest} call is unaffected by its value. See
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl}.
   */
  private verifySsl: boolean = true;

  /** The current access token, or `null` before login / after the bounded loop lapses. */
  private accessToken: string | null = null;
  /** The current offline / refresh token, or `null` before login. */
  private refreshToken: string | null = null;
  /** Handle of the armed refresh timer, or `null` when no refresh is scheduled. */
  private timer: ReturnType<typeof setTimeout> | null = null;
  /** Whether {@link ngOnDestroy} has run; suppresses any further (re-)scheduling. */
  private stopped: boolean = false;
  /** Absolute epoch-ms deadline for the bounded loop, or `null` when unbounded. */
  private deadlineInMs: number | null = null;
  /** Epoch-ms at which the current access token lapses, or `null` when unknown. */
  private accessTokenExpiresAtInMs: number | null = null;
  /** In-flight {@link ensureFreshToken} renewal, shared so concurrent callers issue one grant. */
  private inFlightRenewal: Promise<void> | null = null;
  /**
   * Promise settled by the *first* login attempt — the one started by the constructor when a
   * config was injected, otherwise the one started by the first {@link configure} call. It
   * resolves when that login succeeds and rejects when it fails; later attempts leave it as-is
   * (a settled promise cannot be re-settled), so callers tracking a re-{@link configure} must
   * await the promise `configure()` returns rather than {@link whenReady}.
   */
  private readonly ready: Promise<void>;
  /** Settles {@link ready} on the first successful login. */
  private resolveReady!: () => void;
  /** Settles {@link ready} when the first login fails. */
  private rejectReady!: (reason: unknown) => void;

  /**
   * Build the provider and kick off the first login in the background.
   *
   * No network call is awaited here; {@link getToken} returns `null` until the
   * login resolves. Await {@link whenReady} to block until the first token is
   * available.
   */
  public constructor() {
    this.ready = new Promise<void>((resolve: () => void, reject: (reason: unknown) => void): void => {
      this.resolveReady = resolve;
      this.rejectReady = reject;
    });
    // Nothing is obliged to call whenReady(), so mark `ready` as observed here: a rejected login
    // that no one awaits would otherwise surface as an unhandled promise rejection (a console
    // error in the browser, a process warning under node). whenReady() callers still see it.
    void this.ready.catch((): void => undefined);
    if (this.config === null) {
      // No config at construction: stay idle until configure() supplies credentials.
      return;
    }
    this.applyConfig(this.config);
    void this.bootstrap().then(
      (): void => this.resolveReady(),
      (error: unknown): void => this.rejectReady(error)
    );
  }

  /**
   * Supply (or replace) the runtime configuration and log in with it.
   *
   * This is the entry point for credentials that are only known after the
   * application has bootstrapped — an embedded widget that reads a technical
   * user and secret from its own URL, for example. Any previously scheduled
   * refresh is cancelled and the cached tokens are discarded before the new
   * login runs, so a provider can be re-pointed at a different technical user
   * without being re-created.
   *
   * When this is the provider's first login attempt it also settles {@link whenReady}; a later
   * re-configure does not, so track those through the promise returned here.
   *
   * @param config the configuration to adopt, replacing any earlier one.
   * @returns a promise that resolves once the login with `config` has completed.
   * @throws KeycloakAuthenticationError when the login fails (the provider is
   *   left unauthenticated; {@link getToken} returns `null`).
   */
  public async configure(config: KeycloakTokenProviderConfig): Promise<void> {
    this.clearTimer();
    this.stopped = false;
    this.accessToken = null;
    this.refreshToken = null;
    this.accessTokenExpiresAtInMs = null;
    this.deadlineInMs = null;
    this.inFlightRenewal = null;
    this.applyConfig(config);
    try {
      await this.bootstrap();
    } catch (error: unknown) {
      // A provider constructed without a config has its first login here, so `ready` is still
      // pending; reject it rather than leaving every whenReady() awaiter hanging forever.
      this.rejectReady(error);
      throw error;
    }
    this.resolveReady();
  }

  /**
   * Return an access token that is safe to send right now, renewing first when
   * the cached one has lapsed (or is within {@link REFRESH_SKEW_IN_S} of doing so).
   *
   * Concurrent calls share a single renewal, so a burst of requests arriving on
   * an expired token issues one grant rather than one per request.
   *
   * Two call sites are intended:
   *
   * - **pre-flight**, before attaching the bearer to an outgoing request, so a
   *   token that is already dead is never sent;
   * - **recovery**, with `{ force: true }`, after the server answered
   *   `UNAUTHENTICATED`, so a revoked token (or one the local clock still
   *   believes in) is replaced and the request can be replayed once.
   *
   * @param options renewal options; `force` renews even when the cached token
   *   still looks valid.
   * @returns the usable access token, or `null` when the provider has no config
   *   yet (nothing to renew with).
   * @throws KeycloakAuthenticationError when the renewal — and the full re-login
   *   it falls back to — both fail.
   */
  public async ensureFreshToken(options: EnsureFreshTokenOptions = {}): Promise<string | null> {
    const force: boolean = options.force ?? false;
    if (this.config === null) {
      return null;
    }
    if (!force && this.hasUsableAccessToken()) {
      return this.accessToken;
    }
    if (this.inFlightRenewal === null) {
      this.inFlightRenewal = this.renew().finally((): void => {
        this.inFlightRenewal = null;
      });
    }
    await this.inFlightRenewal;
    return this.accessToken;
  }

  /**
   * Return the current access token for the auth interceptors.
   *
   * @returns the freshest access token, or `null` before the first login
   *   completes / after the bounded refresh window has elapsed.
   */
  public getToken(): TokenResult {
    return this.accessToken;
  }

  /**
   * The resolved TLS-verification setting from
   * {@link KeycloakTokenProviderConfig.keycloakVerifySsl} (defaults to `true`).
   *
   * Exposed for cross-SDK config parity and introspection only. It is a NO-OP in
   * this browser client — the browser owns the TLS handshake, so the value never
   * reaches {@link postTokenRequest} and does not change the outgoing request.
   *
   * @returns `true` when TLS verification is requested (the default), `false`
   *   when the config explicitly opted out (still inert here).
   */
  public get keycloakVerifySsl(): boolean {
    return this.verifySsl;
  }

  /**
   * Await the first login so callers can guarantee a token is present before
   * issuing requests (e.g. from an `APP_INITIALIZER`).
   *
   * The first login is the constructor's when a config was injected, otherwise the
   * first {@link configure} call's. Subsequent re-configures do not re-arm this
   * promise — await the one `configure()` returns for those.
   *
   * @returns a promise that resolves once the first access token is stored, or
   *   rejects with the {@link KeycloakAuthenticationError} from a failed login.
   */
  public whenReady(): Promise<void> {
    return this.ready;
  }

  /** Stop the background refresh loop. Invoked automatically when the root injector is destroyed. */
  public ngOnDestroy(): void {
    this.stopped = true;
    this.clearTimer();
  }

  /** Cancel any armed refresh timer, leaving {@link stopped} untouched. */
  private clearTimer(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  /**
   * Adopt `config` as the active configuration and recompute everything derived
   * from it.
   *
   * @param config the configuration to adopt.
   */
  private applyConfig(config: KeycloakTokenProviderConfig): void {
    this.config = config;
    // Stored for cross-SDK config parity; a no-op on the browser transport (see field doc).
    this.verifySsl = config.keycloakVerifySsl ?? true;
    const base: string = config.keycloakUrl.replace(/\/+$/, "");
    this.tokenEndpoint = `${base}/realms/${encodeURIComponent(config.realm)}/protocol/openid-connect/token`;
  }

  /**
   * Whether the cached access token exists and is not within
   * {@link REFRESH_SKEW_IN_S} of lapsing.
   *
   * @returns `true` when the cached token can still be sent as-is.
   */
  private hasUsableAccessToken(): boolean {
    if (this.accessToken === null) {
      return false;
    }
    if (this.accessTokenExpiresAtInMs === null) {
      return true;
    }
    return Date.now() < this.accessTokenExpiresAtInMs - (REFRESH_SKEW_IN_S * 1000);
  }

  /**
   * Renew the access token on demand: refresh-token grant when one is held,
   * falling back to a full re-login when no refresh token is available or the
   * refresh itself is rejected (a revoked or expired offline session).
   *
   * @returns a promise that resolves once a new token is stored, or rejects with
   *   the {@link KeycloakAuthenticationError} from the failed re-login.
   */
  private async renew(): Promise<void> {
    if (this.refreshToken !== null) {
      try {
        await this.refresh();
        return;
      } catch {
        // The refresh token is unusable (revoked / expired); fall through to a
        // full re-login with the configured credentials.
        this.refreshToken = null;
      }
    }
    await this.bootstrap();
  }

  /**
   * Perform the one-time login (offline-token or ROPC password grant), store the
   * tokens and arm the first refresh.
   *
   * @returns a promise that resolves once the first token is stored.
   * @throws KeycloakAuthenticationError when neither an offline token nor a
   *   username + password pair is configured, the token endpoint fails, or the
   *   response carries no `access_token` / `refresh_token`.
   */
  private async bootstrap(): Promise<void> {
    // Every call site (the constructor, configure(), and renew() via ensureFreshToken())
    // establishes a config before reaching here, so this is safe.
    // The assertion is REQUIRED by the strict jest/ts-jest config; the release eslint runs
    // under a non-strict tsconfig (no strictNullChecks) where it looks redundant.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const config: KeycloakTokenProviderConfig = this.config as KeycloakTokenProviderConfig;
    let params: Record<string, string>;
    if (config.offlineToken !== undefined && config.offlineToken.length > 0) {
      params = {
        grant_type: "refresh_token",
        client_id: config.clientId,
        refresh_token: config.offlineToken
      };
    } else if (
      config.username !== undefined &&
      config.username.length > 0 &&
      config.password !== undefined &&
      config.password.length > 0
    ) {
      params = {
        grant_type: "password",
        client_id: config.clientId,
        username: config.username,
        password: config.password,
        scope: "offline_access"
      };
    } else {
      throw new KeycloakAuthenticationError(
        "KeycloakTokenProvider requires either an offlineToken or a username + password pair"
      );
    }

    const response: KeycloakTokenResponse = await this.postTokenRequest(params, "login");
    this.storeTokens(response);
    if (this.refreshToken === null) {
      throw new KeycloakAuthenticationError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope (ondewo-nlu-cai-sdk-public)"
      );
    }

    if (config.tokenExpirationInS !== undefined) {
      this.deadlineInMs = Date.now() + (config.tokenExpirationInS * 1000);
    }
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Exchange the current refresh token for a fresh access token and re-arm the
   * next refresh. No-ops once the bounded deadline has elapsed (in which case it
   * stops the loop).
   *
   * @returns a promise that resolves once the token is refreshed and the next
   *   refresh is armed (or once the loop has been stopped).
   */
  private async refresh(): Promise<void> {
    // Re-check the bounded deadline at fire time: once elapsed the loop stops with
    // no further renewal -> the access token lapses -> a re-login is required.
    if (this.deadlineInMs !== null && Date.now() >= this.deadlineInMs) {
      this.ngOnDestroy();
      return;
    }

    const response: KeycloakTokenResponse = await this.postTokenRequest(
      {
        grant_type: "refresh_token",
        // configure()/bootstrap() always set config before any refresh can be armed or requested.
        // Assertion required by the strict jest tsconfig; redundant under the release one.
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        client_id: (this.config as KeycloakTokenProviderConfig).clientId,
        // The refresh timer is only armed after bootstrap() proves refreshToken non-null
        // (storeTokens preserves it), so this is safe. The assertion is REQUIRED by the
        // strict jest/ts-jest config (refreshToken is `string | null`); the release eslint
        // runs under a non-strict tsconfig (no strictNullChecks) where it looks redundant.
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        refresh_token: this.refreshToken as string
      },
      "refresh"
    );
    this.storeTokens(response);
    this.scheduleRefresh(response.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the optional bounded
   * deadline. The delay is `expiresInRaw − {@link REFRESH_SKEW_IN_S}`, floored at
   * {@link MIN_REFRESH_DELAY_IN_S}, then clamped to the time remaining before the
   * deadline. Stops silently once the deadline has elapsed.
   *
   * @param expiresInRaw the `expires_in` (seconds) from the latest token
   *   response; a missing or non-positive value falls back to
   *   {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    // An on-demand ensureFreshToken() renewal can land while the previous timer is
    // still armed; drop it so only one refresh is ever scheduled.
    this.clearTimer();
    if (this.stopped) {
      return;
    }
    let expiresInS: number = MIN_REFRESH_DELAY_IN_S;
    if (expiresInRaw !== undefined && expiresInRaw > 0) {
      expiresInS = expiresInRaw;
    }
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - Date.now();
      if (remainingInMs <= 0) {
        this.ngOnDestroy();
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      void this.refresh().catch((): void => {
        // Swallow a transient background-refresh failure: the next interceptor read
        // gets the stale (possibly expired) token and the server replies
        // UNAUTHENTICATED, prompting the consumer to re-login.
      });
    }, delayInS * 1000);
  }

  /**
   * POST an `application/x-www-form-urlencoded` body to the token endpoint and
   * return the parsed JSON.
   *
   * @param params form fields to URL-encode into the request body.
   * @param action human-readable action name (`"login"` / `"refresh"`) for error messages.
   * @returns the parsed {@link KeycloakTokenResponse}.
   * @throws KeycloakAuthenticationError on a non-2xx response.
   */
  private async postTokenRequest(
    params: Record<string, string>,
    action: string
  ): Promise<KeycloakTokenResponse> {
    const body: string = new URLSearchParams(params).toString();
    const headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });

    const request$: Observable<KeycloakTokenResponse> = this.http
      // tokenEndpoint is set by applyConfig() before any token request can be issued.
      // Assertion required by the strict jest tsconfig; redundant under the release one.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      .post<KeycloakTokenResponse>(this.tokenEndpoint as string, body, { headers })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<never> => {
          return throwError(
            (): KeycloakAuthenticationError =>
              new KeycloakAuthenticationError(
                `Keycloak token ${action} failed with status ${error.status}: ${error.message}`
              )
          );
        })
      );
    return firstValueFrom(request$);
  }

  /**
   * Store the access token, refresh token and computed expiry from a token
   * response.
   *
   * @param response the parsed token-endpoint response.
   * @throws KeycloakAuthenticationError if the response carries no `access_token`.
   */
  private storeTokens(response: KeycloakTokenResponse): void {
    if (response.access_token === undefined || response.access_token.length === 0) {
      throw new KeycloakAuthenticationError("Keycloak token response did not contain an access_token");
    }
    this.accessToken = response.access_token;
    // Track the lapse point so ensureFreshToken() can answer without a network call.
    // Keycloak omits expires_in only in degenerate responses; treat that as unknown.
    if (response.expires_in !== undefined && response.expires_in > 0) {
      this.accessTokenExpiresAtInMs = Date.now() + (response.expires_in * 1000);
    } else {
      this.accessTokenExpiresAtInMs = null;
    }
    // Keycloak may rotate the refresh token; keep the previous one when the
    // response omits it so a same-token refresh does not blank out the offline token.
    if (response.refresh_token !== undefined && response.refresh_token.length > 0) {
      this.refreshToken = response.refresh_token;
    }
  }
}
