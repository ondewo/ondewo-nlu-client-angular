import { firstValueFrom, Observable, of, throwError } from "rxjs";

import { Agent, GetAgentRequest } from "../../api/ondewo/nlu/agent.pb";
import { AgentsClient } from "../../api/ondewo/nlu/agent.pbsc";
import { GetAgentExampleService } from "./get-agent.example";

/** A well-formed agent resource name used across the example tests. */
const AGENT_PARENT: string = "projects/00000000-0000-0000-0000-000000000000/agents";

/** The display name carried by the mocked `GetAgent` response. */
const DISPLAY_NAME: string = "Demo Agent";

/**
 * Wrap a `getAgent` test double as an {@link AgentsClient}. Only the single RPC
 * the example calls is implemented; everything else is intentionally absent so a
 * stray call would fail loudly.
 *
 * @param getAgent the mock standing in for `AgentsClient.getAgent`.
 * @returns a structural `AgentsClient` backed by the mock.
 */
function buildClient(getAgent: jest.Mock): AgentsClient {
  return { getAgent } as unknown as AgentsClient;
}

/**
 * Unit tests for {@link GetAgentExampleService}. They prove the example builds
 * the correct `GetAgentRequest` and correctly maps / propagates the client's
 * response — entirely against a mocked gRPC client, with no live server.
 */
describe("GetAgentExampleService", () => {
  /** The happy path: build a `GetAgentRequest` with the given parent and map the display name. */
  it("requests the configured agent and maps its display name", async (): Promise<void> => {
    let capturedRequest: GetAgentRequest | undefined;
    const getAgent: jest.Mock = jest.fn((request: GetAgentRequest): Observable<Agent> => {
      capturedRequest = request;
      return of(new Agent({ displayName: DISPLAY_NAME }));
    });
    const service: GetAgentExampleService = new GetAgentExampleService(buildClient(getAgent));

    const displayName: string = await firstValueFrom(service.getAgentDisplayName(AGENT_PARENT));

    expect(displayName).toBe(DISPLAY_NAME);
    expect(getAgent).toHaveBeenCalledTimes(1);
    expect(capturedRequest).toBeInstanceOf(GetAgentRequest);
    expect(capturedRequest?.parent).toBe(AGENT_PARENT);
  });

  /** The failure path: a gRPC error from the client surfaces unchanged to the caller. */
  it("propagates a gRPC error raised by the client", async (): Promise<void> => {
    const notFound: Error = new Error("5 NOT_FOUND: agent does not exist");
    const getAgent: jest.Mock = jest.fn((): Observable<Agent> => throwError((): Error => notFound));
    const service: GetAgentExampleService = new GetAgentExampleService(buildClient(getAgent));

    await expect(firstValueFrom(service.getAgentDisplayName(AGENT_PARENT))).rejects.toBe(notFound);
  });
});
