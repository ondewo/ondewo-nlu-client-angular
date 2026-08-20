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

/** The captured result of standing up a `TestBed` for the provider under test. */
interface SetupResult {
  /** The provider instantiated through DI with the supplied config. */
  provider: KeycloakTokenProvider;
  /** The testing HTTP controller backing the provider's token-endpoint calls. */
  httpMock: HttpTestingController;
}

/**
 * Stand up a fresh `TestBed` configured with the testing HTTP backend and the
 * given provider config, then instantiate the provider through DI.
 *
 * @param config the runtime config to register under {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG}.
 * @returns the instantiated provider and the `HttpTestingController`.
 */
function setup(config: KeycloakTokenProviderConfig): SetupResult {
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

/**
 * Stand up a `TestBed` with NO {@link KEYCLOAK_TOKEN_PROVIDER_CONFIG} registered, so the
 * provider is constructed idle and awaits a runtime `configure()` call.
 *
 * @returns the instantiated provider and the `HttpTestingController`.
 */
function setupUnconfigured(): SetupResult {
  const providers: (Provider | EnvironmentProviders)[] = [provideHttpClient(), provideHttpClientTesting()];
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
describe("KeycloakTokenProvider", (): void => {
  /** Drive the provider's setTimeout-based refresh schedule with Jest fake timers. */
  beforeEach((): void => {
    jest.useFakeTimers();
  });

  /** Clear any armed refresh timer and hand the clock back to the real timers. */
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
   * @returns a promise that resolves once the login response has been flushed and the provider is ready.
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

  /**
   * Drain the microtask queue so a promise chain that spans several `await`s (a
   * rejected refresh falling through to a full re-login) reaches its next HTTP call.
   *
   * @returns a promise that resolves once the queued microtasks have run.
   */
  async function flushMicrotasks(): Promise<void> {
    for (let i: number = 0; i < 10; i++) {
      await Promise.resolve();
    }
  }

  /** Before the login resolves, `getToken` reports no token (interceptors must not block). */
  it("returns null before the first login completes", (): void => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    expect(provider.getToken()).toBeNull();
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
  });

  /** A ROPC login POSTs `grant_type=password` + `scope=offline_access` and stores the token. */
  it("logs in with username + password and serves the access token", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
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
    const { provider, httpMock }: SetupResult = setup({
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

  /** An empty `offlineToken` is no token at all: it falls through to the ROPC branch. */
  it("falls through to the password grant when the offlineToken is empty", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup({ ...PASSWORD_CONFIG, offlineToken: "" });
    const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    const body: string = request.request.body as string;
    expect(body).toContain("grant_type=password");
    expect(body).toContain("scope=offline_access");
    // No blank `refresh_token` grant was attempted for the empty offline token.
    expect(body).not.toContain("grant_type=refresh_token");
    request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await provider.whenReady();
    expect(provider.getToken()).toBe(ACCESS_TOKEN);
  });

  /** A background refresh fires `REFRESH_SKEW_IN_S` before expiry and swaps in the new token. */
  it("refreshes the access token shortly before it expires", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
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
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
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

  /** A blank rotated `refresh_token` must not wipe the stored offline token either. */
  it("retains the previous refresh token when a refresh response carries an empty one", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    httpMock
      .expectOne(TOKEN_ENDPOINT)
      .flush({ access_token: ACCESS_TOKEN_2, refresh_token: "", expires_in: EXPIRES_IN });
    await Promise.resolve();

    // The blank rotation was discarded: the next refresh still carries the original token.
    jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
    const next: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    expect(next.request.body as string).toContain(`refresh_token=${REFRESH_TOKEN}`);
    next.flush({ access_token: "access-token-3", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe("access-token-3");
  });

  /** A missing / non-positive `expires_in` floors the refresh delay at `MIN_REFRESH_DELAY_IN_S`. */
  it("floors the refresh delay when expires_in is absent", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    const login: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    login.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    await provider.whenReady();

    jest.advanceTimersByTime(MIN_REFRESH_DELAY_IN_S * 1000);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
  });

  /** An `expires_in` of 0 is non-positive and must floor the delay, not arm a zero-delay hot loop. */
  it("floors the refresh delay when expires_in is zero", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    const login: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    login.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: 0 });
    await provider.whenReady();

    // Nothing fires before the floor elapses (a zero delay would already have refreshed).
    jest.advanceTimersByTime((MIN_REFRESH_DELAY_IN_S * 1000) - 1);
    httpMock.expectNone(TOKEN_ENDPOINT);

    jest.advanceTimersByTime(1);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
  });

  /** A negative `expires_in` is likewise discarded in favour of `MIN_REFRESH_DELAY_IN_S`. */
  it("floors the refresh delay when expires_in is negative", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    const login: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    login.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: -5 });
    await provider.whenReady();

    // A negative delay would fire on the first tick; the floor holds the refresh back.
    jest.advanceTimersByTime((MIN_REFRESH_DELAY_IN_S * 1000) - 1);
    httpMock.expectNone(TOKEN_ENDPOINT);

    jest.advanceTimersByTime(1);
    const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
    refreshRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: "refresh-token-2", expires_in: EXPIRES_IN });
    await Promise.resolve();
    expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
  });

  /** The bounded deadline clamps the scheduled delay below the skew-based delay. */
  it("clamps the refresh delay to the bounded tokenExpirationInS deadline", async (): Promise<void> => {
    // tokenExpirationInS (10s) is shorter than (expires_in - skew) so the timer is clamped to ~10s.
    const { provider, httpMock }: SetupResult = setup({ ...PASSWORD_CONFIG, tokenExpirationInS: 10 });
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
    const { provider, httpMock }: SetupResult = setup({ ...PASSWORD_CONFIG, tokenExpirationInS: 0 });
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
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
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
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush("bad credentials", { status: 401, statusText: "Unauthorized" });
    await expect(provider.whenReady()).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    expect(provider.getToken()).toBeNull();
  });

  /** A login response without an `access_token` rejects with a descriptive error. */
  it("rejects when the login response carries no access_token", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain an access_token/);
  });

  /** An empty-string `access_token` is as unusable as an absent one and must not be stored. */
  it("rejects when the login response carries an empty access_token", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock
      .expectOne(TOKEN_ENDPOINT)
      .flush({ access_token: "", refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain an access_token/);
    expect(provider.getToken()).toBeNull();
  });

  /** A login response without a `refresh_token` rejects (the client lacks offline_access). */
  it("rejects when the login response carries no refresh_token", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain a refresh_token/);
  });

  /** An empty-string `refresh_token` leaves nothing to refresh with and rejects likewise. */
  it("rejects when the login response carries an empty refresh_token", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock
      .expectOne(TOKEN_ENDPOINT)
      .flush({ access_token: ACCESS_TOKEN, refresh_token: "", expires_in: EXPIRES_IN });
    await expect(provider.whenReady()).rejects.toThrow(/did not contain a refresh_token/);
  });

  /** Neither an offline token nor a username + password pair is configured. */
  it("rejects when no credentials are configured", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup({ keycloakUrl: KEYCLOAK_URL, realm: REALM, clientId: CLIENT_ID });
    // Probed before the await: a wrongly-issued POST is already registered when `setup` returns,
    // and it would never be flushed, so `whenReady` would hang instead of failing this assertion.
    httpMock.expectNone(TOKEN_ENDPOINT);
    await expect(provider.whenReady()).rejects.toThrow(/requires either an offlineToken or a username/);
  });

  /** An empty username is not a credential, even alongside a password. */
  it("rejects when the configured username is empty", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup({
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      username: "",
      password: "s3cret"
    });
    httpMock.expectNone(TOKEN_ENDPOINT);
    await expect(provider.whenReady()).rejects.toThrow(/requires either an offlineToken or a username/);
  });

  /** A username without any password cannot drive the ROPC grant. */
  it("rejects when the password is omitted", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup({
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      username: "u@e.com"
    });
    httpMock.expectNone(TOKEN_ENDPOINT);
    await expect(provider.whenReady()).rejects.toThrow(/requires either an offlineToken or a username/);
  });

  /** An empty password is rejected rather than sent as a blank ROPC credential. */
  it("rejects when the configured password is empty", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup({
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      username: "u@e.com",
      password: ""
    });
    httpMock.expectNone(TOKEN_ENDPOINT);
    await expect(provider.whenReady()).rejects.toThrow(/requires either an offlineToken or a username/);
  });

  /** ngOnDestroy stops the refresh loop so an armed timer never fires. */
  it("stops the refresh loop on destroy", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    await completeLogin(provider, httpMock, "password");

    provider.ngOnDestroy();
    jest.advanceTimersByTime(EXPIRES_IN * 1000);
    httpMock.expectNone(TOKEN_ENDPOINT);
    // Idempotent: a second destroy is a no-op.
    provider.ngOnDestroy();
  });

  /** A destroy mid-refresh skips re-arming the next timer once the in-flight call resolves. */
  it("does not re-arm the timer when destroyed while a refresh is in flight", async (): Promise<void> => {
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
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

  /**
   * The `keycloakVerifySsl` flag is carried for cross-SDK config parity with the
   * Python/Node.js clients but is inert in the browser (the user agent owns the
   * TLS handshake). These tests pin the config -> provider threading for every
   * value and prove the flag never reaches — or breaks — the token request.
   */
  describe("keycloakVerifySsl (browser no-op, config -> provider parity)", (): void => {
    /** An offline-token config that logs in via a `refresh_token` grant. */
    const OFFLINE_CONFIG: KeycloakTokenProviderConfig = {
      keycloakUrl: KEYCLOAK_URL,
      realm: REALM,
      clientId: CLIENT_ID,
      offlineToken: "configured-offline-token"
    };

    /** Omitting the field defaults the stored flag to verification-ON (secure). */
    it("defaults the stored flag to true when keycloakVerifySsl is omitted", (): void => {
      const { provider, httpMock }: SetupResult = setup(OFFLINE_CONFIG);
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    });

    /** An explicit true is stored as true. */
    it("stores an explicit keycloakVerifySsl: true as true", (): void => {
      const { provider, httpMock }: SetupResult = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: true });
      expect(provider.keycloakVerifySsl).toBe(true);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
    });

    /** An explicit false is threaded from config through to the provider field. */
    it("stores keycloakVerifySsl: false as false (threaded config -> provider)", (): void => {
      const { provider, httpMock }: SetupResult = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: false });
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
      const { provider, httpMock }: SetupResult = setup({ ...OFFLINE_CONFIG, keycloakVerifySsl: false });
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
    const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
    httpMock.expectOne(TOKEN_ENDPOINT).flush("server error", { status: 500, statusText: "Server Error" });
    await expect(provider.whenReady()).rejects.toThrow(/failed with status 500/);
  });

  describe("configure (credentials supplied at runtime)", (): void => {
    /** Without a config the provider stays idle: no login is attempted and no token is served. */
    it("stays idle and issues no request when constructed without a config", (): void => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      expect(provider.getToken()).toBeNull();
      httpMock.expectNone(TOKEN_ENDPOINT);
    });

    /** configure() supplies the credentials after bootstrap and performs the login. */
    it("logs in with a config supplied after construction", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(request.request.body as string).toContain("grant_type=password");
      request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await configured;
      expect(provider.getToken()).toBe(ACCESS_TOKEN);
      await provider.whenReady();
    });

    /** Re-configuring re-points the provider at different credentials and discards the old token. */
    it("replaces an earlier config and re-logs in with the new credentials", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");
      expect(provider.getToken()).toBe(ACCESS_TOKEN);

      const configured: Promise<void> = provider.configure({
        ...PASSWORD_CONFIG,
        username: "other-technical-user@example.com"
      });
      // The previous token is dropped immediately, so nothing stale can be sent.
      expect(provider.getToken()).toBeNull();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(request.request.body as string).toContain("username=other-technical-user");
      request.flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await configured;
      expect(provider.getToken()).toBe(ACCESS_TOKEN_2);
    });

    /** Re-configuring cancels the timer armed by the previous config (only one refresh stays armed). */
    it("cancels the refresh armed by the previous config", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await configured;

      // Advancing past the schedule must fire exactly ONE refresh (the new config's).
      // If the timer armed by the previous config had survived, expectOne() would see two.
      jest.advanceTimersByTime((EXPIRES_IN - REFRESH_SKEW_IN_S) * 1000);
      await Promise.resolve();
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: "access-token-3", refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
    });

    /** A configure() whose login fails leaves the provider unauthenticated and reports the error. */
    it("rejects and serves no token when the runtime login fails", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(configured).rejects.toBeInstanceOf(KeycloakAuthenticationError);
      expect(provider.getToken()).toBeNull();
    });

    /**
     * A provider constructed without a config has its first login in configure(), so a failure
     * there must settle whenReady() too — otherwise every awaiter hangs forever.
     */
    it("rejects whenReady() when the first runtime login fails", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(configured).rejects.toBeInstanceOf(KeycloakAuthenticationError);

      await expect(provider.whenReady()).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    });

    /** The first successful runtime login resolves whenReady() for an initially idle provider. */
    it("resolves whenReady() once the first runtime login succeeds", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await configured;

      await expect(provider.whenReady()).resolves.toBeUndefined();
    });
  });

  describe("ensureFreshToken (pre-flight and forced renewal)", (): void => {
    /** An unconfigured provider has nothing to renew and must not attempt a grant. */
    it("returns null and issues no request when unconfigured", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      await expect(provider.ensureFreshToken()).resolves.toBeNull();
      httpMock.expectNone(TOKEN_ENDPOINT);
    });

    /** A token comfortably inside its lifetime is served straight back, with no network call. */
    it("returns the cached token without a request while it is still valid", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");
      await expect(provider.ensureFreshToken()).resolves.toBe(ACCESS_TOKEN);
      httpMock.expectNone(TOKEN_ENDPOINT);
    });

    /** A response without expires_in leaves the expiry unknown; the cached token is still served. */
    it("serves the cached token when the expiry is unknown", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      httpMock.expectOne(TOKEN_ENDPOINT).flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN });
      await provider.whenReady();
      await expect(provider.ensureFreshToken()).resolves.toBe(ACCESS_TOKEN);
      httpMock.expectNone(TOKEN_ENDPOINT);
    });

    /** Inside the skew window the token counts as spent and is renewed before being handed out. */
    it("renews a token that is within the refresh skew of expiring", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      // Sit just inside the skew window, before the scheduled timer would have fired.
      jest.setSystemTime(Date.now() + ((EXPIRES_IN - REFRESH_SKEW_IN_S + 1) * 1000));
      const fresh: Promise<string | null> = provider.ensureFreshToken();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(request.request.body as string).toContain("grant_type=refresh_token");
      request.flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(fresh).resolves.toBe(ACCESS_TOKEN_2);
    });

    /** force renews even a token that still looks perfectly valid (post-UNAUTHENTICATED recovery). */
    it("renews unconditionally when force is set", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const fresh: Promise<string | null> = provider.ensureFreshToken({ force: true });
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(fresh).resolves.toBe(ACCESS_TOKEN_2);
    });

    /** Concurrent callers share one renewal rather than stampeding the token endpoint. */
    it("single-flights concurrent renewals into one grant", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const first: Promise<string | null> = provider.ensureFreshToken({ force: true });
      const second: Promise<string | null> = provider.ensureFreshToken({ force: true });
      const third: Promise<string | null> = provider.ensureFreshToken({ force: true });
      // expectOne() fails outright if the burst produced more than a single request.
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(Promise.all([first, second, third])).resolves.toEqual([
        ACCESS_TOKEN_2,
        ACCESS_TOKEN_2,
        ACCESS_TOKEN_2
      ]);
    });

    /** A renewal after a completed one issues a fresh grant (the single-flight slot is released). */
    it("allows a further renewal once the in-flight one has settled", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const first: Promise<string | null> = provider.ensureFreshToken({ force: true });
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await first;

      const second: Promise<string | null> = provider.ensureFreshToken({ force: true });
      httpMock
        .expectOne(TOKEN_ENDPOINT)
        .flush({ access_token: "access-token-3", refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(second).resolves.toBe("access-token-3");
    });

    /** A dead refresh token falls back to a full re-login with the configured credentials. */
    it("falls back to a full re-login when the refresh grant is rejected", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const fresh: Promise<string | null> = provider.ensureFreshToken({ force: true });
      const refreshRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(refreshRequest.request.body as string).toContain("grant_type=refresh_token");
      refreshRequest.flush("revoked", { status: 400, statusText: "Bad Request" });
      await flushMicrotasks();

      const loginRequest: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(loginRequest.request.body as string).toContain("grant_type=password");
      loginRequest.flush({ access_token: ACCESS_TOKEN_2, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(fresh).resolves.toBe(ACCESS_TOKEN_2);
    });

    /**
     * With a config present but no token yet cached (an earlier login failed), a
     * plain pre-flight call has nothing usable to serve and logs in from scratch.
     */
    it("logs in from scratch when configured but holding no token", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setupUnconfigured();
      const configured: Promise<void> = provider.configure(PASSWORD_CONFIG);
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(configured).rejects.toBeInstanceOf(KeycloakAuthenticationError);
      expect(provider.getToken()).toBeNull();

      // No force: the cached token is absent, so this must still trigger a login.
      const fresh: Promise<string | null> = provider.ensureFreshToken();
      const request: TestRequest = httpMock.expectOne(TOKEN_ENDPOINT);
      expect(request.request.body as string).toContain("grant_type=password");
      request.flush({ access_token: ACCESS_TOKEN, refresh_token: REFRESH_TOKEN, expires_in: EXPIRES_IN });
      await expect(fresh).resolves.toBe(ACCESS_TOKEN);
    });

    /** When even the re-login fails the caller sees the authentication error. */
    it("rejects when the fallback re-login also fails", async (): Promise<void> => {
      const { provider, httpMock }: SetupResult = setup(PASSWORD_CONFIG);
      await completeLogin(provider, httpMock, "password");

      const fresh: Promise<string | null> = provider.ensureFreshToken({ force: true });
      httpMock.expectOne(TOKEN_ENDPOINT).flush("revoked", { status: 400, statusText: "Bad Request" });
      await flushMicrotasks();
      httpMock.expectOne(TOKEN_ENDPOINT).flush("nope", { status: 401, statusText: "Unauthorized" });
      await expect(fresh).rejects.toBeInstanceOf(KeycloakAuthenticationError);
    });
  });

});
