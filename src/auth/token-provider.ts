import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

/**
 * The set of shapes a {@link TokenProvider} is allowed to return for the current
 * access token.
 *
 * - `string` — a ready, synchronous token.
 * - `null` — there is no token right now (the user is unauthenticated). The
 *   request must be sent unchanged, never with an empty `Bearer` header.
 * - `Promise<...>` / `Observable<...>` — an asynchronous source (e.g.
 *   `keycloak.updateToken()` from `keycloak-js`, or `KeycloakService` from
 *   `keycloak-angular`) that resolves to a token or `null`.
 */
export type TokenResult = string | null | Promise<string | null> | Observable<string | null>;

/**
 * Contract the consuming application implements to feed the current Keycloak
 * access token into this library's auth interceptors.
 *
 * Two kinds of implementation are expected:
 *
 * - **Interactive users** — the host application owns the OIDC flow (an
 *   authorization-code login through `keycloak-js` / `keycloak-angular`, the
 *   only browser-safe option once 2FA is enforced) and implements this interface
 *   to hand the current token over. Nothing is acquired or stored here.
 * - **Technical users** — the built-in `KeycloakTokenProvider` performs the
 *   Resource Owner Password Credentials grant itself and keeps the token fresh
 *   in the background, so consumers do not re-implement token refresh. It is
 *   meant ONLY for service accounts that have 2FA disabled; never point it at a
 *   human user's credentials.
 *
 * No client secret is ever used: both paths rely on a public Keycloak client.
 *
 * Implementations should return the freshest token they have. Returning a
 * `Promise`/`Observable` lets the implementation refresh a soon-to-expire token
 * before the request is sent (e.g. `keycloak.updateToken(30)`).
 */
export interface TokenProvider {
  /**
   * Return the current access token, or `null` when the user is not
   * authenticated. May be synchronous or asynchronous.
   *
   * @returns the current token as a `string`, `null`, or a `Promise` /
   *   `Observable` resolving to either.
   */
  getToken(): TokenResult;
}

/**
 * DI token under which the consuming application registers its
 * {@link TokenProvider} implementation.
 *
 * Example:
 *
 * ```ts
 * providers: [
 *   { provide: TOKEN_PROVIDER, useExisting: KeycloakTokenProvider },
 * ]
 * ```
 */
export const TOKEN_PROVIDER: InjectionToken<TokenProvider> = new InjectionToken<TokenProvider>("ONDEWO_NLU_TOKEN_PROVIDER");
