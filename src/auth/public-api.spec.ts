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
 * `public-api.ts` is rewritten whenever the stubs are regenerated, which is exactly how the export
 * was lost, so the entry point is asserted as text here rather than imported (importing it would
 * pull in every generated protobuf module for no added signal).
 */
describe("package public API entry point", (): void => {
  /** The auth barrel must stay re-exported from the entry point the build bundles. */
  it("re-exports the hand-written auth barrel from public-api.ts", (): void => {
    const entryPoint: string = readFileSync(join(__dirname, "..", "..", "public-api.ts"), "utf8");

    expect(entryPoint).toMatch(/export \* from ['"]\.\/src\/auth['"];/);
  });
});
