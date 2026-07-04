import { EnvironmentProviders, Provider } from "@angular/core";
import { GRPC_INTERCEPTORS } from "@ngx-grpc/core";
import { AuthGrpcInterceptor } from "./auth-grpc.interceptor";
import { provideOndewoNluAuth } from "./auth.providers";
import { TOKEN_PROVIDER, TokenProvider, TokenResult } from "./token-provider";

/**
 * A concrete `TokenProvider` implementation standing in for one the consumer
 * would register (e.g. a `keycloak-js` / `keycloak-angular` wrapper).
 */
class KeycloakTokenProvider implements TokenProvider {
  /**
   * @returns a fixed sample access token.
   */
  public getToken(): TokenResult {
    return "token-from-keycloak";
  }
}

/**
 * `makeEnvironmentProviders` wraps the provider array in an opaque
 * `EnvironmentProviders` whose flat list lives under the internal `ɵproviders`
 * field. Reading it lets us assert the exact wiring without bootstrapping a full
 * Angular environment injector (which would need zone.js / TestBed).
 *
 * @param environmentProviders the opaque providers returned by `provideOndewoNluAuth`.
 * @returns the underlying flat provider array.
 */
function flatten(environmentProviders: EnvironmentProviders): Provider[] {
  return (environmentProviders as unknown as { ɵproviders: Provider[] }).ɵproviders;
}

/**
 * Unit tests for {@link provideOndewoNluAuth}: it must register the supplied
 * `TokenProvider` class, alias {@link TOKEN_PROVIDER} to it via `useExisting`,
 * and register {@link AuthGrpcInterceptor} as a multi `GRPC_INTERCEPTORS`
 * provider — the exact wiring a consuming application relies on.
 */
describe("provideOndewoNluAuth", () => {
  /** The supplied provider class is registered so Angular can instantiate it. */
  it("registers the supplied TokenProvider class so it is instantiable", (): void => {
    const providers: Provider[] = flatten(provideOndewoNluAuth(KeycloakTokenProvider));
    expect(providers).toContain(KeycloakTokenProvider);
  });

  /** `TOKEN_PROVIDER` aliases the supplied class via `useExisting` (single instance). */
  it("aliases TOKEN_PROVIDER to the supplied implementation via useExisting", (): void => {
    const providers: Provider[] = flatten(provideOndewoNluAuth(KeycloakTokenProvider));
    const tokenBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" && provider !== null && "provide" in provider && provider.provide === TOKEN_PROVIDER
    );
    expect(tokenBinding).toEqual({ provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider });
  });

  /** The gRPC interceptor is registered as a `multi` `GRPC_INTERCEPTORS` provider. */
  it("registers AuthGrpcInterceptor as a multi GRPC_INTERCEPTORS provider", (): void => {
    const providers: Provider[] = flatten(provideOndewoNluAuth(KeycloakTokenProvider));
    const interceptorBinding: Provider | undefined = providers.find(
      (provider: Provider): boolean =>
        typeof provider === "object" &&
        provider !== null &&
        "provide" in provider &&
        provider.provide === GRPC_INTERCEPTORS
    );
    expect(interceptorBinding).toEqual({
      provide: GRPC_INTERCEPTORS,
      useClass: AuthGrpcInterceptor,
      multi: true
    });
  });
});
