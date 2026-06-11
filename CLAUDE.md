# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role in the ONDEWO repo family

This is a **generated SDK repo**: the npm package `@ondewo/nlu-client-angular` (grpc-web TypeScript
bindings `api/**/*.pb.ts` + `.pbsc.ts` service clients + `fesm2022/` bundles + `npm/` publishable
output), compiled from the protos in **ondewo-nlu-api**, vendored as the git submodule
`src/ondewo-nlu-api`. Consumed by **ondewo-aim** (Angular frontend), which talks grpc-web through an
envoy proxy to the **ondewo-cai** backend.

```
ondewo-nlu-api (.proto, submodule at src/ondewo-nlu-api) → THIS REPO (generated) → ondewo-aim (node_modules)
```

**Never hand-edit generated files** — change the protos and regenerate. Hand-maintained: `Makefile`,
`src/package.json` scripts, packaging metadata.

## Regenerating after a proto change

Pins live in the `Makefile`: `ONDEWO_NLU_VERSION` (major.minor matches the API),
`NLU_API_GIT_BRANCH` (submodule ref), `ONDEWO_PROTO_COMPILER_GIT_BRANCH` (e.g. `tags/5.9.0`).
Docker required (compiler image `ondewo-angular-proto-compiler`).

1. Point the submodule at the API commit:
   - pushed ref: `git -C src/ondewo-nlu-api fetch --all && git -C src/ondewo-nlu-api checkout <ref>`
   - **unpushed local API work**:
     `git -C src/ondewo-nlu-api fetch /home/arath/ondewo/ondewo-nlu-api <branch> && git -C src/ondewo-nlu-api checkout FETCH_HEAD`
2. Update the Makefile vars. **Do NOT run plain `make build`** against a ref that isn't on GitHub
   (its submodule-checkout step fetches origin). Run instead:
   `make build_compiler update_package npm_run_build`
   (skip `build_compiler` if the image was built recently — `build.sh` uses `--no-cache` and takes
   minutes; generation itself takes ~30 s).
3. Headless caveat: `src/package.json`'s `generate` script uses `docker run -it`, which fails without
   a TTY. If `npm_run_build` fails on that, run the identical docker command manually with `--rm` and
   without `-it`, then replicate the postbuild steps (README/RELEASE copies, chown of root-owned
   output, restoring compiler-mutated submodule `.proto` files).
4. Verify: new message classes in `api/ondewo/nlu/<file>.pb.ts`, new RPC methods in the `.pbsc.ts`
   service client, symbols in `npm/index.d.ts`, version bumped in `npm/package.json`.

## Wiring into ondewo-aim (local dev)

From `src/`:
- `npm run test-in-ondewo-aim` — full rebuild + copy `npm/` into
  `ondewo-aim/node_modules/@ondewo/nlu-client-angular`
- `npm run test-in-ondewo-aim-copy-only` — copy only (after a `make` build)

⚠️ ondewo-aim's `package-lock.json` pins the published registry version — any `npm install`/`npm ci`
in aim **reverts the copied package**; re-run the copy script afterwards. After an official release,
aim switches to the published `@ondewo/nlu-client-angular@X.Y.Z` instead.

aim needs no interceptor work for new `ondewo.nlu.*` services: `GrpcMetadataInterceptor` matches the
`/ondewo.nlu` path prefix and injects `Authorization` + `cai-token` automatically.

## Git

- This repo has a **giticket hook** (don't type the ticket in the subject — it's prepended from the
  branch name) and a **husky pre-commit running `make eslint`**, which needs dev tooling that is NOT
  in `package.json`: run `make install_dependencies` once per checkout or the commit fails with
  `node_modules/.bin/eslint: No such file`.
- Hooks may reformat/normalize files during the commit — if the post-commit working tree shows
  whole-file churn on `index.d.ts`/`package.json`, the committed state is the normalized one;
  `git checkout --` the leftovers.
- Commit the submodule bump together with all regenerated output (`api/`, `fesm2022/`, `npm/`,
  `index.d.ts`, `public-api.ts`, `package.json`, `src/package.json`). Same `feature/<TICKET>-…`
  branch name as the sibling repos.
