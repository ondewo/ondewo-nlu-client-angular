import * as authApi from "./index";

/**
 * Unit tests for the public auth barrel (`./index`): every hand-written symbol of
 * the auth surface must remain re-exported so consumers importing from
 * `@ondewo/nlu-client-angular` keep a stable public API.
 */
describe("auth public API barrel", () => {
  /** All interceptors, helpers, constants and the DI token are re-exported. */
  it("re-exports the full hand-written auth surface", (): void => {
    expect(typeof authApi.authHttpInterceptor).toBe("function");
    expect(typeof authApi.AuthGrpcInterceptor).toBe("function");
    expect(typeof authApi.provideOndewoNluAuth).toBe("function");
    expect(typeof authApi.resolveToken).toBe("function");
    expect(typeof authApi.resolveBearerValue).toBe("function");
    expect(typeof authApi.buildBearerValue).toBe("function");
    expect(authApi.AUTHORIZATION_HEADER).toBe("authorization");
    expect(authApi.BEARER_PREFIX).toBe("Bearer ");
    expect(authApi.TOKEN_PROVIDER).toBeDefined();
  });
});
