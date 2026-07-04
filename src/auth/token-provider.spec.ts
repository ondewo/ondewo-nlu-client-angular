import { InjectionToken } from "@angular/core";
import { TOKEN_PROVIDER } from "./token-provider";

/**
 * Unit tests for the {@link TOKEN_PROVIDER} dependency-injection token: it must
 * be a real `InjectionToken` carrying the library-scoped description so it never
 * collides with another token in the consuming application's injector.
 */
describe("TOKEN_PROVIDER", () => {
  /** The token is an actual `InjectionToken` and exposes its descriptive name. */
  it("is an InjectionToken with a descriptive name", (): void => {
    expect(TOKEN_PROVIDER).toBeInstanceOf(InjectionToken);
    expect(TOKEN_PROVIDER.toString()).toContain("ONDEWO_NLU_TOKEN_PROVIDER");
  });
});
