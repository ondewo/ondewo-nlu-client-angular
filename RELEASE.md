# Release History

*****************

## Release ONDEWO NLU Angular Client 7.3.2

### Bug Fixes

* Removed the service-client methods of the client-streaming and bidirectional-streaming RPCs, because they never
  worked in a browser: gRPC-web, the protocol this library speaks, carries unary and server-streaming calls only. The
  methods (plain and `$raw`) are gone from `SessionsClient.streamingDetectIntent` and `RagsClient.ragUploadDocument`.
  Their request and response messages are still exported, and every unary and server-streaming method (e.g.
  `streamingLlmGenerate`) is unchanged. **Migration:** use `detectIntent` from a browser; a client that has to send a
  request stream uses a native SDK such as `ondewo-nlu-client` (python, PyPI) or `@ondewo/nlu-client-nodejs`. The js
  and typescript SDKs never generated these methods.
* Generated with ondewo-proto-compiler [5.15.7](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.7),
  which omits these methods for the angular target. `src/auth/no-client-streaming.spec.ts` fails if the public
  typings (`index.d.ts`) expose a method whose request is an `Observable`.
* Release automation: the GitHub and npm tokens no longer reach a process argv. The release `docker run` passes
  `-e GITHUB_GH_TOKEN` / `-e NPM_AUTOMATION_TOKEN` by name, `gh auth login` reads the token from the environment, npm
  substitutes `${NPM_AUTOMATION_TOKEN}` from its config instead of receiving the value, and the NPM user name is no
  longer echoed. Pinned by `src/auth/release-credentials.spec.ts`.

*****************

## Release ONDEWO NLU Angular Client 7.3.1

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` /
  `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL (the `host` setting of
  `@ngx-grpc/grpc-web-client`): `https://` by default; `http://` only with `useSecureChannel: false`, and then a
  `console.warn` naming `host:port`. A bare IPv6 literal is bracketed (`https://[::1]:8443`); a host that already
  carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is
  refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the
  TLS handshake: it trusts its own certificate store and presents a client certificate only from the browser / OS
  store, so application code can neither add a CA nor attach a client identity. A non-empty `grpcCert`,
  `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`)
  throws a `GrpcWebEndpointError`; a private key is never shipped to a browser. An empty host, a `host:port` string,
  and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* Mutual TLS works through the browser's certificate store, or by letting the gRPC-web proxy (Envoy) terminate the
  browser's TLS and use mutual TLS upstream. Node.js callers that need certificates in code use the nodejs client.
* README: new section "TLS, mutual TLS and certificates" (modes table, Angular example, openssl test PKI, security
  notes, troubleshooting of the browser's handshake errors).

### Tests

* Unit tests for every rule above; real-handshake tests run the built URL against an HTTPS server with an in-test
  openssl PKI (trusted CA, CRLF-encoded CA, unrelated CA, client certificate required, `[::1]`).
* A jest spec pins the release-notes slice: the Makefile's slice command, the spelling of every heading, the closing
  `*****` separators, one section per version, non-empty notes for the released version, and `src/RELEASE.md`
  identical to `RELEASE.md`.

### Documentation

* RELEASE.md regains the sections and bullets that only the GitHub release bodies or the tags carried, and
  misspelled headings now match the Makefile's slice.

*****************

## Release ONDEWO NLU Angular Client 7.3.0

### Improvements

* Tracking API Version [7.3.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.3.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 7.2.0

### Improvements

* Tracking API Version [7.2.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.2.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

*****************

## Release ONDEWO NLU Angular Client 7.1.2

### Bug fixes

* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) **The retry cadence introduced
  in 7.1.1 polled the token endpoint once a second for the whole of an outage.** Re-arming the loop
  fixed the dead-timer half of the defect and exposed a second one: the re-arm went through
  `scheduleRefresh(undefined)`, which falls back to `MIN_REFRESH_DELAY_IN_S` (1 s). One client at
  1 Hz is harmless; ondewo runs **one client per call container**, so the clients whose refreshes
  fail together then retry together -- the same thundering-herd shape as the login burst the
  offline-token hand-off exists to remove.
* **The failure path now backs off, and it jitters.** The ceiling grows `5 s * 2 ** (failures - 1)`
  up to a `300 s` cap, and the actual wait is drawn uniformly from `[base, ceiling]`. The jitter is
  the load-bearing half -- a shared ladder without it keeps N clients in lockstep however long the
  delays get. A successful refresh resets the counter, and the `stopped` and deadline guards still
  bound every re-arm.
* **An `onRefreshError` handler that throws no longer kills the refresh loop**, and its error no
  longer escapes the timer callback as an `unhandledRejection` -- which Node terminates the process
  on by default.
* The healthy schedule is untouched: the counter is zero unless a refresh has actually failed, so a
  client that never fails computes exactly the delays 7.1.1 did. The login options take a new
  optional `randomFraction` for the jitter, defaulting to `Math.random`, so a test can make a retry
  delay exact.

*****************

## Release ONDEWO NLU Angular Client 7.1.1

### Bug fixes

* [[OND211-2418]](https://ondewo.atlassian.net/browse/OND211-2418) **A single failed background refresh permanently ended proactive token renewal.** `refresh()` re-arms the timer on its last line — after the `await` that performs the token request — so when that request threw, `scheduleRefresh()` was never reached and the timer callback's `catch` returned without re-arming. One transient answer from the token endpoint (a 502 from a proxy, a DNS blip, a restarting Keycloak) therefore ended background renewal for the life of the provider, leaving every later token to the stale-token/`UNAUTHENTICATED` fallback. The `catch` now re-arms via `scheduleRefresh(undefined)`, bounded by `MIN_REFRESH_DELAY_IN_S` so a persistently failing endpoint is retried at a floor rather than in a hot loop; the `stopped` and deadline guards still apply, so a stopped provider re-arms nothing.
* The spec now asserts the re-arm and the recovery, and is verified falsifiable — removing the re-arm fails exactly that test. The same defect and fix landed in the python, typescript, js, nodejs and angular NLU clients.

*****************

## Release ONDEWO NLU Angular Client 7.1.0

### Improvements

* Tracking API Version [7.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.1.0) ( [Documentation](https://ondewo.github.io/ondewo-nlu-api/) )

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

* Bug fix and track version 2.9.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/2.9.0)

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

## Release ONDEWO NLU Angular Client 1.1.0

* Update to NLU client version tag 1.1.0
* Fixed build script

*****************

## Release ONDEWO NLU Angular Client 1.0.3

* Track version 1.0.3 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.3)
* Release on [NPM](https://www.npmjs.com/package/@ondewo/nlu-client-angular)

*****************

## Release ONDEWO NLU Angular Client 1.0.2

Skipped version due to NPM registry issues

*****************

## Release ONDEWO NLU Angular Client 1.0.1

* Track version 1.0.1 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.1)
* Upgraded ngx-grpc from 0.3.1 to 2.1.0
* Release on [NPM](https://www.npmjs.com/package/@ondewo/nlu-client-angular)

*****************

## Release ONDEWO NLU Angular Client 1.0.0

* Track version 1.0.0 of [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.0)

*****************
