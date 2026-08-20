<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fnlu-client-angular"><img src="https://badge.fury.io/js/%40ondewo%2Fnlu-client-angular.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO NLU Client Angular
  </h1>
</div>

## Overview

`@ondewo/nlu-client-angular` is a compiled version of the [ONDEWO NLU API](https://github.com/ondewo/ondewo-nlu-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the NLU API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/nlu-client-angular
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-nlu-client-angular.git ## Clone repository
cd ondewo-nlu-client-angular                                      ## Change into repo-directoy
make setup_developer_environment_locally                          ## Install dependencies
```

## Package structure

```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations.pb.d.ts
│   │   │   └── http.pb.d.ts
│   │   ├── rpc
│   │   │   └── status.pb.d.ts
│   │   └── type
│   │       └── latlng.pb.d.ts
│   └── ondewo
│       ├── nlu
│       │   ├── agent.pbconf.d.ts
│       │   ├── agent.pb.d.ts
│       │   ├── agent.pbsc.d.ts
│       │   ├── aiservices.pbconf.d.ts
│       │   ├── aiservices.pb.d.ts
│       │   ├── aiservices.pbsc.d.ts
│       │   ├── ...
│       └── qa
│           ├── qa.pbconf.d.ts
│           ├── qa.pb.d.ts
│           └── qa.pbsc.d.ts
├── esm2022
│   ├── api
│   │   ├── google
│   │   │   ├── api
│   │   │   │   ├── annotations.pb.mjs
│   │   │   │   └── http.pb.mjs
│   │   │   ├── rpc
│   │   │   │   └── status.pb.mjs
│   │   │   └── type
│   │   │       └── latlng.pb.mjs
│   │   └── ondewo
│   │       ├── nlu
│   │       │   ├── agent.pbconf.mjs
│   │       │   ├── agent.pb.mjs
│   │       │   ├── agent.pbsc.mjs
│   │       │   ├── ...
│   │       └── qa
│   │           ├── qa.pbconf.mjs
│   │           ├── qa.pb.mjs
│   │           └── qa.pbsc.mjs
│   ├── ondewo-nlu-client-angular.mjs
│   └── public-api.mjs
├── fesm2022
│   ├── ondewo-nlu-client-angular.mjs
│   └── ondewo-nlu-client-angular.mjs.map
├── index.d.ts
├── LICENSE.MD
├── package.json
├── public-api.d.ts
└── README.md
```

## Authentication (Keycloak bearer token)

The hand-written auth surface lives in [`src/auth/`](src/auth) and attaches the current Keycloak access
token as an `Authorization: Bearer <token>` credential to every outgoing gRPC-web and HTTP request. It is
exported from the package entry point, so consumers never re-implement token acquisition or refresh.

There are two ways to feed it a token; pick the one that matches the account type.

### Technical users — let this library log in and refresh

A technical user is a service account with 2FA disabled, so the Resource Owner Password Credentials grant
is usable. `KeycloakTokenProvider` performs that login once against the public SDK client, then refreshes
the access token in the background `REFRESH_SKEW_IN_S` (30s) before it expires, for as long as the
application lives. Nothing else has to run a timer.

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
  authHttpInterceptor,
  KEYCLOAK_TOKEN_PROVIDER_CONFIG,
  KeycloakTokenProvider,
  provideOndewoNluAuth
} from "@ondewo/nlu-client-angular";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: KEYCLOAK_TOKEN_PROVIDER_CONFIG,
      useValue: {
        keycloakUrl: "https://keycloak.example.com",
        realm: "ondewo",
        clientId: "ondewo-nlu-cai-sdk-public",
        username: "technical-user",
        password: "..."
      }
    },
    provideOndewoNluAuth(KeycloakTokenProvider),
    provideHttpClient(withInterceptors([authHttpInterceptor]))
  ]
});
```

A long-lived `offlineToken` can be supplied instead of `username` + `password`; `tokenExpirationInS`
bounds the refresh loop when the session must not outlive a fixed window. The Keycloak client must have
direct access grants and the `offline_access` scope enabled, otherwise the token response carries no
refresh token and `KeycloakTokenProvider` reports a `KeycloakAuthenticationError`.

The password grant is deliberately limited to technical users: for a human account with 2FA enabled it
cannot work, and sending a human's password to the token endpoint from the browser is not acceptable.

#### Credentials that are only known at runtime

An embedded widget usually learns its technical user from its own URL, long after the application has
bootstrapped, so there is nothing to put in `KEYCLOAK_TOKEN_PROVIDER_CONFIG` at startup. In that case
register the provider without a config and call `configure()` once the credentials are known:

```ts
await tokenProvider.configure({
  keycloakUrl: issuerFromQueryParams,
  realm: "ondewo-ccai-platform",
  clientId: "ondewo-nlu-cai-sdk-public",
  username: techUserFromQueryParams,
  password: techSecretFromQueryParams
});
```

Registered without a config the provider stays idle — it issues no request and `getToken()` returns
`null` — until `configure()` is called. Calling `configure()` again re-points the provider at different
credentials: the pending refresh is cancelled and the cached tokens are dropped before the new login
runs, so no stale bearer can be served in between and the provider need not be re-created.

#### Renewing on demand

The background timer keeps the token fresh on its own, but a transport that must never send a dead
bearer — and must recover when the server rejects one — can drive the renewal directly:

```ts
// Pre-flight: renews only if the token has lapsed or is within REFRESH_SKEW_IN_S of doing so.
const bearer = await tokenProvider.ensureFreshToken();

// Recovery: after the server answered UNAUTHENTICATED, renew unconditionally and replay once.
const renewed = await tokenProvider.ensureFreshToken({ force: true });
```

`force` matters because a cached expiry cannot be trusted after a rejection — the token may have been
revoked, or the local clock may run ahead of Keycloak's. Concurrent calls are single-flighted, so a burst
of requests arriving on an expired token issues one grant rather than one per request. If the refresh
token itself has been revoked, `ensureFreshToken` falls back to a full re-login with the configured
credentials; it returns `null` when the provider has no config yet.

### Interactive users — supply the token from the host application

When a real person logs in (2FA, authorization-code flow), the host application owns the OIDC session and
only hands the current token over through a `TokenProvider`:

```ts
import { Injectable } from "@angular/core";
import Keycloak from "keycloak-js";
import { TokenProvider, TokenResult } from "@ondewo/nlu-client-angular";

@Injectable({ providedIn: "root" })
export class HostSessionTokenProvider implements TokenProvider {
  constructor(private readonly keycloak: Keycloak) {}

  // Refresh the token if it expires within 30s, then return the current one.
  // Returning a Promise lets the interceptor await the refresh before sending.
  getToken(): TokenResult {
    return this.keycloak
      .updateToken(30)
      .then(() => this.keycloak.token ?? null)
      .catch(() => null);
  }
}
```

Register it the same way: `provideOndewoNluAuth(HostSessionTokenProvider)`.

`getToken()` may return a `string`, `null` (unauthenticated — the request is sent without an `Authorization`
header), a `Promise<string | null>`, or an `Observable<string | null>`. With `keycloak-angular` you would
instead inject `KeycloakService` and call `this.keycloakService.getToken()`.

### What the registration does

`provideOndewoNluAuth` binds `TOKEN_PROVIDER` to your implementation and registers the `@ngx-grpc`
`AuthGrpcInterceptor` for all generated `*.pbsc.ts` clients. Adding `authHttpInterceptor` covers plain
HTTP requests. Every request then carries `authorization: Bearer <token>` whenever a token is available,
and is sent unchanged when it is not.

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-nlu-api](https://github.com/ondewo/ondewo-nlu-api) -- `NLU_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-files from `root` to the `current user`.

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- Checkout master

  ```shell
  git checkout master
  ```

- Pull newest state

  ```shell
  git pull
  ```

- Adjust `ONDEWO_NLU_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO NLU Angular Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- Release

  ```shell
  make ondewo_release
  ```

  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-nlu-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
