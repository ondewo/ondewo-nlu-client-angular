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

The hand-written auth surface lives in [`src/auth/`](src/auth) and attaches the consumer's current
Keycloak access token as an `Authorization: Bearer <token>` credential to every outgoing gRPC-web and HTTP
request. This library performs **no** OAuth/OIDC flow itself — it never sees a password and never stores a
token. Acquiring and refreshing the token is the responsibility of `keycloak-js` / `keycloak-angular` in the
host application; this client only reads the current token through a `TokenProvider` and forwards it.

### 1. Implement a `TokenProvider` backed by `keycloak-js`

```ts
import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { TokenProvider, TokenResult } from '@ondewo/nlu-client-angular';

@Injectable({ providedIn: 'root' })
export class KeycloakTokenProvider implements TokenProvider {
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

`getToken()` may return a `string`, `null` (unauthenticated — the request is sent without an `Authorization`
header), a `Promise<string | null>`, or an `Observable<string | null>`. With `keycloak-angular` you would
instead inject `KeycloakService` and call `this.keycloakService.getToken()`.

### 2. Register the provider and the interceptors

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authHttpInterceptor, provideOndewoNluAuth } from '@ondewo/nlu-client-angular';
import { KeycloakTokenProvider } from './keycloak-token-provider';

bootstrapApplication(AppComponent, {
	providers: [
		// Binds TOKEN_PROVIDER to your implementation and registers the
		// @ngx-grpc AuthGrpcInterceptor for all generated *.pbsc.ts clients.
		provideOndewoNluAuth(KeycloakTokenProvider),
		// For plain HTTP requests, also register the functional HTTP interceptor.
		provideHttpClient(withInterceptors([authHttpInterceptor]))
	]
});
```

That is all the wiring required: every NLU service client request now carries `authorization: Bearer <token>`
whenever a token is available, and is sent unchanged when it is not.

[comment]: <> 'START OF GITHUB README'

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

[comment]: <> 'END OF GITHUB README'
