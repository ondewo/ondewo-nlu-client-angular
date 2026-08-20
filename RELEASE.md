# Release History

*****************

## Release ONDEWO NLU Angular Client 7.0.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written auth surface is exported from the package entry point. `src/auth` was compiled but never bundled, because the generated `public-api.ts` listed only the proto stubs — `import { KeycloakTokenProvider } from "@ondewo/nlu-client-angular"` did not resolve for any consumer, and applications had to re-implement token acquisition and refresh themselves. The barrel is emitted by the proto compiler from [5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0) on, so it survives a regeneration of the stubs.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `KeycloakTokenProvider.configure()` accepts the Keycloak credentials at runtime, for an application that only learns them after bootstrap (an embedded widget reading a technical user from its own URL). Registered without a `KEYCLOAK_TOKEN_PROVIDER_CONFIG` the provider stays idle — no request is issued and `getToken()` returns `null` — until `configure()` is called; calling it again re-points the provider at different credentials, cancelling the pending refresh and dropping the cached tokens first so no stale bearer is served in between.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `KeycloakTokenProvider.ensureFreshToken()` renews the access token on demand: without arguments it renews only a token that has lapsed or is within `REFRESH_SKEW_IN_S` of doing so, and with `{ force: true }` it renews unconditionally, which is what a transport needs after the server answered `UNAUTHENTICATED` and the cached expiry can no longer be trusted. Concurrent calls are single-flighted into one grant, and a revoked refresh token falls back to a full re-login.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `whenReady()` no longer hangs forever when the first login is started by `configure()` and fails — it now rejects with the `KeycloakAuthenticationError`, and a login failure that nothing awaits no longer surfaces as an unhandled promise rejection.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `EnsureFreshTokenOptions` is re-exported from the auth barrel, so a consumer can name the argument type of `ensureFreshToken()`.

*****************

## Release ONDEWO NLU Angular Client 7.0.0

### Breaking Changes

* Tracking API Version [7.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )
* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) The `Login` RPC is removed from the API, and with it `UsersClient.login()` and the `LoginRequest` / `LoginResponse` messages. Authentication is Keycloak-only: this library reads the host application's current Keycloak access token through a `TokenProvider` and attaches it as `Authorization: Bearer <token>` to every call. See the Authentication section of the README for the `keycloak-js` / `keycloak-angular` wiring.
* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) `CheckLogin` is not affected and remains the way to probe whether a token is still valid.

*****************

## Release ONDEWO NLU Angular Client 6.14.0

### Improvements

* Tracking API Version [6.14.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.14.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.13.0

### Improvements

* Tracking API Version [6.13.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.13.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.12.0

### Improvements

* Tracking API Version [6.12.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.12.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.11.0

### Improvements

* Tracking API Version [6.11.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.11.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.10.0

### Improvements

* Tracking API Version [6.10.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.10.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.10.0

### Improvements

* Tracking API Version [6.10.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.10.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.9.0

### Improvements

* Tracking API Version [6.9.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.9.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.8.0

### Improvements

* Tracking API Version [6.8.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.8.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.7.0

### Improvements

* Tracking API Version [6.7.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.7.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.6.0

### Improvements

* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.5.0

### Improvements

* Tracking API Version [6.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.4.0

### Improvements

* Tracking API Version [6.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.3.0

### Improvements

* Tracking API Version [6.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.3.0

### Improvements

* Tracking API Version [6.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.2.0

### Improvements

* Tracking API Version [6.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.1.0

### Improvements

* Tracking API Version [6.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 6.0.0

### Improvements

* Tracking API Version [6.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/6.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.9.0

### Improvements

* Tracking API Version [4.9.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.9.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.8.0

### Improvements

* Tracking API Version [4.8.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.8.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.7.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API
  Version [4.7.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.7.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.7.0

### Improvements

* Tracking API
  Version [4.7.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.7.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.6.0

### Improvements

* Tracking API
  Version [4.6.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.6.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.5.0

### Improvements

* Tracking API
  Version [4.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.4.0

### Improvements

* Tracking API
  Version [4.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.3.0

### Improvements

* Tracking API
  Version [4.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.2.0

### Improvements

* Tracking API
  Version [4.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 4.0.0

### Improvements

* Tracking API
  Version [4.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.5.2

### Improvements

* Tracking API
  Version [3.5.2](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.5.2) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.5.0

### Improvements

* Tracking API
  Version [3.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.5.0

### Improvements

* Tracking API
  Version [3.5.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.5.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.4.0

### Improvements

* Tracking API
  Version [3.4.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.4.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.3.0

### Improvements

* Tracking API
  Version [3.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.2.0

### Improvements

* Tracking API
  Version [3.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.1.0

### Improvements

* Tracking API
  Version [3.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 3.0.0

### Improvements

* Tracking API
  Version [3.0.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/3.0.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 2.15.0

* Track version 2.15.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.15.0)

*****************

## Release ONDEWO NLU Angular Client 2.14.0

* Track version 2.14.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.14.0)

*****************

## Release ONDEWO NLU Angular Client 2.13.0

* Track version 2.13.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.13.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO NLU Angular Client 2.11.0

* Track version 2.11.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.11.0)

*****************

## Release ONDEWO NLU Angular Client 2.10.0

* Track version 2.10.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.10.0)

*****************

## Release ONDEWO NLU Angular Client 2.9.1

* Track version 2.9.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.9.0)

*****************

## Release ONDEWO NLU Angular Client 2.9.0

* Track version 2.9.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.9.0)

*****************

## Release ONDEWO NLU Angular Client 2.8.0

* Track version 2.8.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.8.0)

*****************

## Release ONDEWO NLU Angular Client 2.6.0

* Track version 2.6.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.6.0)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO NLU Angular Client 2.5.0

* Track version 2.5.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.5.0)

*****************

## Release ONDEWO NLU Angular Client 2.4.0

* Track version 2.4.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.4.0)

*****************

## Release ONDEWO NLU Angular Client 2.3.1

* Track version 2.3.1 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.4.0)

*****************

## Release ONDEWO NLU Angular Client 2.3.0

* Track version 2.3.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.3.0)

*****************

## Release ONDEWO NLU Angular Client 2.2.0

* Track version 2.2.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.2.0)

*****************

## Release ONDEWO NLU Angular Client 2.1.0

* Track version 2.1.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.1.0)

*****************

## Release ONDEWO NLU Angular Client 2.0.1

* Track version 2.0.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.0.1)

*****************

## Release ONDEWO NLU Angular Client 2.0.0

* Track version 2.0.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.0.0)

*****************

## Release ONDEWO NLU Angular Client 1.0.3

* Track version 1.0.3 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.3)

*****************

## Release ONDEWO NLU Angular Client 1.0.2

Skipped version due to NPM registry issues

*****************

## Release ONDEWO NLU Angular Client 1.0.1

* Track version 1.0.1 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.1)

*****************

## Release ONDEWO NLU Angular Client 1.0.0

* Track version 1.0.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.0)
