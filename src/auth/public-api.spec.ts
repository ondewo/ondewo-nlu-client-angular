import { readFileSync } from "fs";
import { join } from "path";

/**
 * Regression guard for the package entry point.
 *
 * The auth surface used to exist under `src/auth` while `public-api.ts` listed only the
 * proto-compiler output, so nothing under `src/auth` ever reached the emitted `index.d.ts` /
 * `fesm2022` bundle: `import { KeycloakTokenProvider } from "@ondewo/nlu-client-angular"` did not
 * resolve for any consumer, and applications were forced to re-implement token refresh themselves.
 *
 * `public-api.ts` is deleted and rewritten whenever the stubs are regenerated, so the line is only
 * there because the proto compiler emits it (5.13.0+ star-exports `auth/index.ts`). This asserts the
 * artifact as text rather than importing it -- importing would pull in every generated protobuf
 * module for no added signal -- and fails if a compiler downgrade drops the barrel again.
 */
describe("package public API entry point", (): void => {
  /** The auth barrel must stay re-exported from the entry point the build bundles. */
  it("re-exports the hand-written auth barrel from public-api.ts", (): void => {
    const entryPoint: string = readFileSync(join(__dirname, "..", "..", "public-api.ts"), "utf8");

    expect(entryPoint).toMatch(/export \* from ['"]\.\/src\/auth['"];/);
  });

  /**
   * The auth barrel re-exports an explicit list of names, so a type added to
   * `keycloak-token-provider.ts` but forgotten here never reaches consumers — the same
   * declared-but-not-exported failure this entry-point guard exists for, one level down.
   * Types are erased at runtime, so the barrel is asserted as text.
   */
  it("re-exports every public type of the Keycloak provider from the auth barrel", (): void => {
    const barrel: string = readFileSync(join(__dirname, "index.ts"), "utf8");

    for (const name of [
      "KeycloakTokenProvider",
      "KeycloakTokenProviderConfig",
      "KEYCLOAK_TOKEN_PROVIDER_CONFIG",
      "KeycloakAuthenticationError",
      "EnsureFreshTokenOptions",
      "REFRESH_SKEW_IN_S",
      "MIN_REFRESH_DELAY_IN_S"
    ]) {
      expect(barrel).toContain(name);
    }
  });
});
