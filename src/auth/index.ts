/**
 * Public auth surface for `@ondewo/nlu-client-angular`.
 *
 * The current Keycloak access token is served by a {@link TokenProvider} and
 * attached as an `Authorization: Bearer <token>` credential to outgoing gRPC-web
 * and HTTP requests. For a technical user the built-in
 * {@link KeycloakTokenProvider} logs in and refreshes the token itself; for an
 * interactive (2FA) user the consuming application implements
 * {@link TokenProvider} on top of `keycloak-js` / `keycloak-angular`.
 */
export { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";
export {
  EnsureFreshTokenOptions,
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakAuthenticationError,
  KeycloakTokenProvider,
  KeycloakTokenProviderConfig,
  MIN_REFRESH_DELAY_IN_S,
  REFRESH_SKEW_IN_S
} from "./keycloak-token-provider";
export {
  acquireKeycloakTokenSession,
  backoffDelayInS,
  CONSOLE_KEYCLOAK_LOGGER,
  DEFAULT_KEYCLOAK_TIMINGS,
  GLOBAL_KEYCLOAK_SCHEDULER,
  HTTP_TIMEOUT_IN_S,
  KeycloakAccessTokenOptions,
  KeycloakCredentialFields,
  KeycloakLogger,
  KeycloakScheduler,
  keycloakSessionRegistryKey,
  KeycloakTimings,
  KeycloakTokenHttpResponse,
  KeycloakTokenRequest,
  KeycloakTokenSession,
  KeycloakTokenSessionLease,
  KeycloakTokenSessionOptions,
  KeycloakTokenTransport,
  KeycloakTransportError,
  MAX_ERROR_BODY_CHARS,
  MAX_REFRESH_RETRY_EXPONENT,
  REDACTED,
  redactSecret,
  REFRESH_RETRY_BASE_DELAY_IN_S,
  REFRESH_RETRY_MAX_DELAY_IN_S
} from "./keycloak-token-session";
export {
  AUTHORIZATION_HEADER,
  BEARER_PREFIX,
  buildBearerValue,
  resolveBearerValue,
  resolveToken
} from "./resolve-token";
export { authHttpInterceptor } from "./auth-http.interceptor";
export { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
export { provideOndewoNluAuth } from "./auth.providers";
export {
  BROWSER_UNSUPPORTED_TLS_FIELDS,
  buildGrpcWebHost,
  GrpcWebEndpointConfig,
  GrpcWebEndpointError
} from "./grpc-web-endpoint";
