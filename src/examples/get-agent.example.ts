/**
 * Minimal, idiomatic usage example for `@ondewo/nlu-client-angular`.
 *
 * It shows the three things every consumer needs: construct a generated gRPC-web
 * service client, call a representative unary RPC, and map the response — while
 * the Keycloak **bearer** token is attached transparently by this library's auth
 * interceptors (see below). Under the Keycloak migration the only supported auth
 * is an `Authorization: Bearer <token>` credential fed from `keycloak-js` /
 * `keycloak-angular` through a {@link TokenProvider}.
 *
 * Wiring the auth once at application bootstrap is all that is required — every
 * generated `*Client` (here {@link AgentsClient}) then carries the bearer
 * credential automatically:
 *
 * ```ts
 * import { bootstrapApplication } from "@angular/platform-browser";
 * import { provideHttpClient, withInterceptors } from "@angular/common/http";
 * import { authHttpInterceptor, provideOndewoNluAuth } from "@ondewo/nlu-client-angular";
 * import { KeycloakTokenProvider } from "./keycloak-token-provider"; // your TokenProvider
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideOndewoNluAuth(KeycloakTokenProvider),
 *     provideHttpClient(withInterceptors([authHttpInterceptor])),
 *   ],
 * });
 * ```
 *
 * The service below is deliberately transport-agnostic: it depends only on the
 * generated {@link AgentsClient}, so it can be unit-tested with the client mocked
 * (see `get-agent.example.spec.ts`) and needs no live gRPC backend.
 */
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { Agent, GetAgentRequest } from "../../api/ondewo/nlu/agent.pb";
import { AgentsClient } from "../../api/ondewo/nlu/agent.pbsc";

/**
 * Example service that fetches a single agent through the generated
 * {@link AgentsClient} and exposes just its display name.
 */
@Injectable({ providedIn: "root" })
export class GetAgentExampleService {
  /**
   * @param agentsClient the generated `Agents` gRPC-web service client, injected
   *   by Angular. The auth interceptor registered via `provideOndewoNluAuth`
   *   attaches the current Keycloak bearer token to each call it makes.
   */
  public constructor(private readonly agentsClient: AgentsClient) {}

  /**
   * Fetch an agent and return its human-readable display name.
   *
   * @param agentParent the agent resource name to fetch, in the format
   *   `projects/<project_uuid>/agents`.
   * @returns an observable emitting the agent's `displayName` once the unary
   *   `GetAgent` RPC responds, or erroring with the gRPC status the server
   *   returned (e.g. `NOT_FOUND` for an unknown project).
   */
  public getAgentDisplayName(agentParent: string): Observable<string> {
    const request: GetAgentRequest = new GetAgentRequest({ parent: agentParent });
    return this.agentsClient.getAgent(request).pipe(map((agent: Agent): string => agent.displayName));
  }
}
