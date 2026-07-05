import { provideHttpClient } from "@angular/common/http";
import { HttpTestingController, provideHttpClientTesting, TestRequest } from "@angular/common/http/testing";
import { EnvironmentProviders, Provider } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  REFRESH_SKEW_IN_S
} from "./keycloak-token-provider";

/** Base Keycloak URL used across the tests; a trailing slash exercises the URL normalisation. */
const KEYCLOAK_URL: string = "https://auth.example.com/auth/";

/** Realm name with a character that must be URL-encoded into the token-endpoint path. */
const REALM: string = "ondewo ccai";

/** The public SDK client id sent on every token request (no `client_secret`). */
const CLIENT_ID: string = "ondewo-nlu-cai-sdk-public";

/** The fully-resolved token endpoint the provider is expected to POST to. */
const TOKEN_ENDPOINT: string = "https://auth.example.com/auth/realms/ondewo%20ccai/protocol/openid-connect/token";

/** The access token returned by the initial login. */
const ACCESS_TOKEN: string = "access-token-1";

/** The refresh token returned by the initial login. */
const REFRESH_TOKEN: string = "refresh-token-1";

/** The access token returned by the first background refresh. */
const ACCESS_TOKEN_2: string = "access-token-2";

/** The access-token lifetime (seconds) reported by Keycloak in the test responses. */
const EXPIRES_IN: number = 300;

/**
 * Stand up a fresh `TestBed` configured with the testing HTTP backend and the
 * given provider config, then instantiate the provider through DI.
 *
 * @param config the runtime config to register under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 * @returns the instantiated provider and the `HttpTestingController`.
 */
function setup(config: KeycloakTokenProviderConfig): {
  provider: KeycloakTokenProvider;
  httpMock: HttpTestingController;
} {
  const providers: (Provider | EnvironmentProviders)[] = [
    provideHttpClient(),
    provideHttpClientTesting(),
    { provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG, useValue: config }
  ];
  TestBed.configureTestingModule({ providers });
  const provider: KeycloakTokenProvider = TestBed.inject(KeycloakTokenProvider);
  const httpMock: HttpTestingController = TestBed.inject(HttpTestingController);
  return { provider, httpMock };
}

/** A password-grant config (ROPC login). */
const PASSWORD_CONFIG: KeycloakTokenProviderConfig = {
  keycloakUrl: KEYCLOAK_URL,
  realm: REALM,
  clientId: CLIENT_ID,
  username: "technical-user@example.com",
  password: "s3cret"
};

/**
 * Unit tests for {@link KeycloakTokenProvider}: it logs in once (offline-token or
 * ROPC password grant) against the public Keycloak client, serves the current
 * access token synchronously through `getToken`, and refreshes it on a background
 * timer shortly before expiry — clamped to an optional bounded deadline. Network
 * is mocked with the Angular HTTP testing backend; the refresh schedule is driven
 * with Jest fake timers.
 */
describe("KeycloakTokenProvider", () => {
  beforeEach((): void => {
    jest.useFakeTimers();
  });

  afterEach((): void => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  /**
   * Flush the initial login request, assert its shape, respond with tokens and
   * await the provider's readiness.
   *
   * @param provider the provider under test.
   * @param httpMock the testing HTTP controller.
   * @param grant the expected `grant_type` of the login request.
   */
  async function completeLogin(
    provider: KeycloakTokenProvider,
    httpMock: HttpTestingController,
    grant: string
  ): Promise<void> {
    const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    expect(request.request.method).toBe("POST");
    expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
    expect(request.request.body as string).toContain(`grant_type=${grant}`);
    request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await provider.whenReady();
  }

  /** Before the login resolves, `getToken` reports no token (interceptors must not block). */
  it("returns null before the first login completes", (): void => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    expect(provider.getToken()).toBeNull();
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
  });

  /** A ROPC login POSTs `grant_type=password` + `scope=offline_access` and stores the token. */
  it("logs in with username + password and serves the access token", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    const body: string = request.request.body as string;
    expect(body).toContain("grant_type=password");
    expect(body).toContain("scope=offline_access");
    expect(body).toContain(`client_id=${CLIENT_ID}`);
    expect(body).toContain("username=technical-user");
    expect(body).not.toContain("client_secret");
    request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await provider.whenReady();
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A configured offline token bootstraps directly via a `refresh_token` grant (no password). */
  it("bootstraps from a configured offline token via the refresh_token grant", async (): Promise<void> => {
    const { provider, httpMock } = setup({
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      offlineToken: "configured-offline-token"
    });
    const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    const body: string = request.request.body as string;
    expect(body).toContain("grant_type=refresh_token");
    expect(body).toContain("refresh_token=configured-offline-token");
    expect(body).not.toContain("grant_type=password");
    request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await provider.whenReady();
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A background refresh fires `REFRESH_SKEW_IN_S` before expiry and swaps in the new token. */
  it("refreshes the access token shortly before it expires", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");
    expect(provider.getToken()).toBe(ACCESS_TOKEN);

    // The refresh is armed for (EXPIRES_IN - REFRESH_SKEW_IN_S) seconds.
    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    const body: string = refreshRequest.request.body as string;
    expect(body).toContain("grant_type=refresh_token");
    expect(body).toContain(`refresh_token=${REFRESH_TOKEN}`);
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    // Let the awaited postTokenRequest promise settle so the new token is stored.
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
  });

  /** A refresh response that omits `refresh_token` keeps the previous one for the next refresh. */
  it("retains the previous refresh token when a refresh response omits it", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN_2, expires_in: EXPIRES_IN });
    await Promise.resolve();

    // The next refresh must reuse the original (un-rotated) refresh token.
    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    const next: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    expect(next.request.body as string).toContain(`refresh_token=${REFRESH_TOKEN}`);
    next.flush({ access_token: "access-token-3", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe("access-token-3");
  });

  /** A missing / non-positive `expires_in` floors the refresh delay at `MIN_REFRESH_DELAY_IN_S`. */
  it("floors the refresh delay when expires_in is absent", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    const login: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    login.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    await provider.whenReady();

    jest.advanceTimersByTime(MIN_REFRESH_DELAY_IN_S * 1000);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
  });

  /** The bounded deadline clamps the scheduled delay below the skew-based delay. */
  it("clamps the refresh delay to the bounded tokenExpirationInS deadline", async (): Promise<void> => {
    // tokenExpirationInS (10s) is shorter than (expires_in - skew) so the timer is clamped to ~10s.
    const { provider, httpMock } = setup({ ...PASSWORD_CONFIG, tokenExpirationInS: 10 });
    await completeLogin(provider, httpMock, "password");

    // No refresh yet at 9s (the un-clamped delay would be 270s).
    jest.advanceTimersByTime(9 * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);

    // At ~10s the clamped timer fires; the deadline has now elapsed so the loop stops with no HTTP call.
    jest.advanceTimersByTime(2 * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);
    // The previously-issued access token is still served (it has not been cleared).
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A bounded deadline already in the past at schedule time stops the loop immediately. */
  it("stops scheduling when the deadline is already in the past after login", async (): Promise<void> => {
    const { provider, httpMock } = setup({ ...PASSWORD_CONFIG, tokenExpirationInS: 0 });
    const login: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    login.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await provider.whenReady();

    // deadlineInMs == now at schedule time -> remainingInMs <= 0 -> no timer armed.
    jest.advanceTimersByTime(EXPIRES_IN * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A background-refresh HTTP failure is swallowed; the previous token stays served. */
  it("swallows a failed background refresh and keeps the previous token", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    refreshRequest.flush("nope", { status: 401, statusText: "Unauthorized" });
    // Drain the rejected refresh promise + its swallowing catch handler.
    await Promise.resolve();
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A failed initial login rejects `whenReady` with a `KeycloakAuthenticationError`. */
  it("rejects whenReady with KeycloakAuthenticationError on a failed login", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush("bad credentials", { status: 401, statusText: "Unauthorized" });
    await expect(provider.whenReady()).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    expect(provider.getToken()).toBeNull();
  });

  /** A login response without an `access_token` rejects with a descriptive error. */
  it("rejects when the login response carries no access_token", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain an access_token/);
  });

  /** A login response without a `refresh_token` rejects (the client lacks offline_access). */
  it("rejects when the login response carries no refresh_token", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain a refresh_token/);
  });

  /** Neither an offline token nor a username + password pair is configured. */
  it("rejects when no credentials are configured", async (): Promise<void> => {
    const { provider, httpMock } = setup({ keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID });
    await expect(provider.whenReady()).rejects.toThrow(/requires either an offlineToken or a username/);
    httpMock.expectNone(TOKEN_ENDPOINT);
  });

  /** ngOnDestroy stops the refresh loop so an armed timer never fires. */
  it("stops the refresh loop on destroy", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    provider.ngOnDestroy();
    jest.advanceTimersByTime(EXPIRES_IN * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);
    // Idempotent: a second destroy is a no-op.
    provider.ngOnDestroy();
  });

  /** A destroy mid-refresh skips re-arming the next timer once the in-flight call resolves. */
  it("does not re-arm the timer when destroyed while a refresh is in flight", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    // Fire the armed refresh; it issues the HTTP call and awaits the response.
    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

    // Destroy while the refresh is awaiting the network, then let it resolve: storeTokens
    // runs but scheduleRefresh sees `stopped` and arms no further timer.
    provider.ngOnDestroy();
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    await Promise.resolve();

    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
    jest.advanceTimersByTime(EXPIRES_IN * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);
  });

  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", () => {
    /** An offline-token config that logs in via a `refresh_token` grant. */
    const OFFLINE_CONFIG: KeycloakTokenProviderConfig = {
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      offlineToken: "configured-offline-token"
    };

    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", (): void => {
      const { provider, httpMock } = setup(OFFLINE_CONFIG);
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", (): void => {
      const { provider, httpMock } = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: true });
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", (): void => {
      const { provider, httpMock } = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: false });
      expect(provider.keycloakVerifySsl).toBe(false);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    });

    /**
     * The flag is inert at the transport layer: with keycloakVerifySsl: false the
     * provider issues the SAME single POST (same URL, method, headers, body) and
     * logs in exactly as with the field omitted — proving it is a no-op, not wired
     * to TLS.
     */
    it("does not alter or break the token request when keycloakVerifySsl is false", async (): Promise<void> => {
      const { provider, httpMock } = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: false });
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);

      expect(request.request.method).toBe("POST");
      expect(request.request.headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
      const body: string = request.request.body as string;
      expect(body).toContain("grant_type=refresh_token");
      expect(body).toContain(`client_id=${CLIENT_ID}`);
      expect(body).toContain("refresh_token=configured-offline-token");

      request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await provider.whenReady();

      expect(provider.getToken()).toBe(ACCESS_TOKEN);
      provider.ngOnDestroy();
    });
  });

  /** KeycloakAuthenticationError carries the expected name + message. */
  it("KeycloakAuthenticationError exposes its name and message", (): void => {
    const error: KeycloakAuthenticationError = new KeycloakAuthenticationError("boom");
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("KeycloakAuthenticationError");
    expect(error.message).toBe("boom");
  });

  /** The error message includes the HTTP status from a failed token request. */
  it("includes the HTTP status in the authentication error message", async (): Promise<void> => {
    const { provider, httpMock } = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush("server error", { status: 500, statusText: "Server Error" });
    await expect(provider.whenReady()).rejects.toThrow(/failed with status 500/);
  });
});
