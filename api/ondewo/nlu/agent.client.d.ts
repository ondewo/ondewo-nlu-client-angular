import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ReindexAgentRequest } from "./agent";
import type { FullTextSearchResponseIntentParameters } from "./agent";
import type { FullTextSearchResponseIntentResponse } from "./agent";
import type { FullTextSearchResponseIntentTags } from "./agent";
import type { FullTextSearchResponseIntentUsersays } from "./agent";
import type { FullTextSearchResponseIntentContextOut } from "./agent";
import type { FullTextSearchResponseIntentContextIn } from "./agent";
import type { FullTextSearchResponseIntent } from "./agent";
import type { FullTextSearchResponseEntitySynonym } from "./agent";
import type { FullTextSearchResponseEntity } from "./agent";
import type { FullTextSearchResponseEntityType } from "./agent";
import type { FullTextSearchRequest } from "./agent";
import type { PlatformMapping } from "./agent";
import type { GetPlatformMappingRequest } from "./agent";
import type { GetModelStatusesResponse } from "./agent";
import type { GetModelStatusesRequest } from "./agent";
import type { ExportResourcesResponse } from "./agent";
import type { ExportResourcesRequest } from "./agent";
import type { DeleteResourcesRequest } from "./agent";
import type { SetResourcesRequest } from "./agent";
import type { SetAgentStatusRequest } from "./agent";
import type { GetSessionsStatisticsResponse } from "./agent";
import type { GetSessionsStatisticsRequest } from "./agent";
import type { GetAgentStatisticsResponse } from "./agent";
import type { GetAgentStatisticsRequest } from "./agent";
import type { RestoreAgentRequest } from "./agent";
import type { OptimizeRankingMatchRequest } from "./agent";
import type { ImportAgentRequest } from "./agent";
import type { ExportBenchmarkAgentRequest } from "./agent";
import type { ExportAgentRequest } from "./agent";
import type { BuildCacheRequest } from "./agent";
import type { Operation } from "./operations";
import type { TrainAgentRequest } from "./agent";
import type { ListProjectPermissionsResponse } from "./agent";
import type { ListProjectPermissionsRequest } from "./agent";
import type { GetPlatformInfoResponse } from "./agent";
import type { ListUsersInProjectResponse } from "./agent";
import type { ListUsersInProjectRequest } from "./agent";
import type { RemoveUserFromProjectRequest } from "./agent";
import type { AddUserToProjectRequest } from "./agent";
import type { ListAgentsOfUserResponse } from "./agent";
import type { ListAgentsResponse } from "./agent";
import type { ListAgentsRequest } from "./agent";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteAgentRequest } from "./agent";
import type { GetAgentRequest } from "./agent";
import type { UpdateAgentRequest } from "./agent";
import type { Agent } from "./agent";
import type { CreateAgentRequest } from "./agent";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way.
 *
 * After you create an agent, you can add [Intents][google.cloud.dialogflow.v2.Intents], [Contexts][google.cloud.dialogflow.v2.Contexts], [Entity Types][google.cloud.dialogflow.v2.EntityTypes], [Webhooks][google.cloud.dialogflow.v2.WebhookRequest], and so on to manage the flow of a conversation and match user input to predefined intents and actions.
 *
 * You can create an agent using both Dialogflow Standard Edition and Dialogflow Enterprise Edition. For details, see [Dialogflow Editions](/dialogflow-enterprise/docs/editions).
 *
 * You can save your agent for backup or versioning by exporting the agent by using the [ExportAgent][google.cloud.dialogflow.v2.Agents.ExportAgent] method. You can import a saved agent by using the [ImportAgent][google.cloud.dialogflow.v2.Agents.ImportAgent] method.
 *
 * Dialogflow provides several [prebuilt agents](https://dialogflow.com/docs/prebuilt-agents) for common conversation scenarios such as determining a date and time, converting currency, and so on.
 *
 * For more information about agents, see the [Dialogflow documentation](https://dialogflow.com/docs/agents).
 *
 * @generated from protobuf service ondewo.nlu.Agents
 */
export interface IAgentsClient {
    /**
     * Creates the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "agent": {
     *     "display_name": "My Pizza Bot",
     *     "default_language_code": "en",
     *     "supported_language_codes": ["en"],
     *     "time_zone": "Europe/Vienna",
     *     "nlu_platform": "ONDEWO"
     *   }
     * }' localhost:50055 ondewo.nlu.Agents.CreateAgent
     * </pre>
     *
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: CreateAgent(ondewo.nlu.CreateAgentRequest) returns (ondewo.nlu.Agent);
     */
    createAgent(input: CreateAgentRequest, options?: RpcOptions): UnaryCall<CreateAgentRequest, Agent>;
    /**
     * Updates the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "agent": {
     *     "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *     "display_name": "Pizza Bot 2",
     *     "supported_language_codes": ["en", "de"]
     *   },
     *   "update_mask": {
     *     "paths": [
     *       "agent.display_name",
     *       "agent.supported_language_codes"
     *     ]
     *   }
     * }' localhost:50055 ondewo.nlu.Agents.UpdateAgent
     * </pre>
     *
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot 2",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en",
     *     "de"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: UpdateAgent(ondewo.nlu.UpdateAgentRequest) returns (ondewo.nlu.Agent);
     */
    updateAgent(input: UpdateAgentRequest, options?: RpcOptions): UnaryCall<UpdateAgentRequest, Agent>;
    /**
     * Retrieves the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
     * }' localhost:50055 ondewo.nlu.Agents.GetAgent
     * </pre>
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot 2",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en",
     *     "de"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "configs": {...},
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: GetAgent(ondewo.nlu.GetAgentRequest) returns (ondewo.nlu.Agent);
     */
    getAgent(input: GetAgentRequest, options?: RpcOptions): UnaryCall<GetAgentRequest, Agent>;
    /**
     * Deletes the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
     * }' localhost:50055 ondewo.nlu.Agents.DeleteAgent
     * </pre>
     * <samp>{}</samp>
     *
     * @generated from protobuf rpc: DeleteAgent(ondewo.nlu.DeleteAgentRequest) returns (google.protobuf.Empty);
     */
    deleteAgent(input: DeleteAgentRequest, options?: RpcOptions): UnaryCall<DeleteAgentRequest, Empty>;
    /**
     * Deletes all agents in the server (for development purposes only).
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.DeleteAllAgents
     * </pre>
     * <samp>{}</samp>
     *
     * @generated from protobuf rpc: DeleteAllAgents(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    deleteAllAgents(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * Lists agents in the server associated to the current user
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgents
     * </pre>
     * <samp>{
     *   "agents_with_owners": [
     *     {
     *       "agent": {
     *         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *         "display_name": "Pizza Bot 2",
     *         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *       },
     *       "owner": {
     *         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *         "display_name": "admin",
     *         "server_role_id": 3,
     *         "user_email": "admin@ondewo.com"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAgents(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsResponse);
     */
    listAgents(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsResponse>;
    /**
     * Lists agents in the server associated to the given user
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgentsOfUser
     * </pre>
     * <samp>{
     *   "agents_of_user_with_owners": [
     *     {
     *       "agent_with_owner": {
     *         "agent": {
     *           "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *           "display_name": "Pizza Bot 2",
     *           "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *         },
     *         "owner": {
     *           "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *           "display_name": "admin",
     *           "server_role_id": 3,
     *           "user_email": "admin@ondewo.com"
     *         }
     *       },
     *       "project_role": {
     *         "role_id": 4,
     *         "name": "ADMIN"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAgentsOfUser(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsOfUserResponse);
     */
    listAgentsOfUser(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsOfUserResponse>;
    /**
     * Lists all agents in the server
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAllAgents
     * </pre>
     * <samp>{
     *   "agents_with_owners": [
     *     {
     *       "agent": {
     *         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *         "display_name": "Pizza Bot 2",
     *         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *       },
     *       "owner": {
     *         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *         "display_name": "admin",
     *         "server_role_id": 3,
     *         "user_email": "admin@ondewo.com"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAllAgents(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsResponse);
     */
    listAllAgents(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsResponse>;
    /**
     * Adds a user with specified id to the project (agent)
     *
     * @generated from protobuf rpc: AddUserToProject(ondewo.nlu.AddUserToProjectRequest) returns (google.protobuf.Empty);
     */
    addUserToProject(input: AddUserToProjectRequest, options?: RpcOptions): UnaryCall<AddUserToProjectRequest, Empty>;
    /**
     * Removes a user with specified id from the project (agent)
     *
     * @generated from protobuf rpc: RemoveUserFromProject(ondewo.nlu.RemoveUserFromProjectRequest) returns (google.protobuf.Empty);
     */
    removeUserFromProject(input: RemoveUserFromProjectRequest, options?: RpcOptions): UnaryCall<RemoveUserFromProjectRequest, Empty>;
    /**
     * Lists users in the project (agent)
     *
     * @generated from protobuf rpc: ListUsersInProject(ondewo.nlu.ListUsersInProjectRequest) returns (ondewo.nlu.ListUsersInProjectResponse);
     */
    listUsersInProject(input: ListUsersInProjectRequest, options?: RpcOptions): UnaryCall<ListUsersInProjectRequest, ListUsersInProjectResponse>;
    /**
     * Gets information from the platform
     *
     * @generated from protobuf rpc: GetPlatformInfo(google.protobuf.Empty) returns (ondewo.nlu.GetPlatformInfoResponse);
     */
    getPlatformInfo(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetPlatformInfoResponse>;
    /**
     * List permissions from the project (agent)
     *
     * @generated from protobuf rpc: ListProjectPermissions(ondewo.nlu.ListProjectPermissionsRequest) returns (ondewo.nlu.ListProjectPermissionsResponse);
     */
    listProjectPermissions(input: ListProjectPermissionsRequest, options?: RpcOptions): UnaryCall<ListProjectPermissionsRequest, ListProjectPermissionsResponse>;
    /**
     * Trains the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: TrainAgent(ondewo.nlu.TrainAgentRequest) returns (ondewo.nlu.Operation);
     */
    trainAgent(input: TrainAgentRequest, options?: RpcOptions): UnaryCall<TrainAgentRequest, Operation>;
    /**
     * Builds cache for the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BuildCache(ondewo.nlu.BuildCacheRequest) returns (ondewo.nlu.Operation);
     */
    buildCache(input: BuildCacheRequest, options?: RpcOptions): UnaryCall<BuildCacheRequest, Operation>;
    /**
     * Exports the specified agent to a ZIP file.
     *
     * Operation <response: [ExportAgentResponse][google.cloud.dialogflow.v2.ExportAgentResponse],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: ExportAgent(ondewo.nlu.ExportAgentRequest) returns (ondewo.nlu.Operation);
     */
    exportAgent(input: ExportAgentRequest, options?: RpcOptions): UnaryCall<ExportAgentRequest, Operation>;
    /**
     * Exports the specified train agent to a ZIP file after train-test split, returns the test TrainingPhrase list.
     *
     *
     * @generated from protobuf rpc: ExportBenchmarkAgent(ondewo.nlu.ExportBenchmarkAgentRequest) returns (ondewo.nlu.Operation);
     */
    exportBenchmarkAgent(input: ExportBenchmarkAgentRequest, options?: RpcOptions): UnaryCall<ExportBenchmarkAgentRequest, Operation>;
    /**
     * Imports the specified agent from a ZIP file.
     *
     * Uploads new intents and entity types without deleting the existing ones.
     * Intents and entity types with the same name are replaced with the new
     * versions from ImportAgentRequest.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: ImportAgent(ondewo.nlu.ImportAgentRequest) returns (ondewo.nlu.Operation);
     */
    importAgent(input: ImportAgentRequest, options?: RpcOptions): UnaryCall<ImportAgentRequest, Operation>;
    /**
     * Runs optimize ranking match
     *
     * @generated from protobuf rpc: OptimizeRankingMatch(ondewo.nlu.OptimizeRankingMatchRequest) returns (ondewo.nlu.Operation);
     */
    optimizeRankingMatch(input: OptimizeRankingMatchRequest, options?: RpcOptions): UnaryCall<OptimizeRankingMatchRequest, Operation>;
    /**
     * Restores the specified agent from a ZIP file.
     *
     * Replaces the current agent version with a new one. All the intents and
     * entity types in the older version are deleted.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: RestoreAgent(ondewo.nlu.RestoreAgentRequest) returns (ondewo.nlu.Operation);
     */
    restoreAgent(input: RestoreAgentRequest, options?: RpcOptions): UnaryCall<RestoreAgentRequest, Operation>;
    /**
     * Gets statistics for the agent
     *
     * @generated from protobuf rpc: GetAgentStatistics(ondewo.nlu.GetAgentStatisticsRequest) returns (ondewo.nlu.GetAgentStatisticsResponse);
     */
    getAgentStatistics(input: GetAgentStatisticsRequest, options?: RpcOptions): UnaryCall<GetAgentStatisticsRequest, GetAgentStatisticsResponse>;
    /**
     * @generated from protobuf rpc: GetSessionsStatistics(ondewo.nlu.GetSessionsStatisticsRequest) returns (ondewo.nlu.GetSessionsStatisticsResponse);
     */
    getSessionsStatistics(input: GetSessionsStatisticsRequest, options?: RpcOptions): UnaryCall<GetSessionsStatisticsRequest, GetSessionsStatisticsResponse>;
    /**
     * Sets status for the agent
     *
     * @generated from protobuf rpc: SetAgentStatus(ondewo.nlu.SetAgentStatusRequest) returns (ondewo.nlu.Agent);
     */
    setAgentStatus(input: SetAgentStatusRequest, options?: RpcOptions): UnaryCall<SetAgentStatusRequest, Agent>;
    /**
     * Sets resources
     *
     * @generated from protobuf rpc: SetResources(ondewo.nlu.SetResourcesRequest) returns (google.protobuf.Empty);
     */
    setResources(input: SetResourcesRequest, options?: RpcOptions): UnaryCall<SetResourcesRequest, Empty>;
    /**
     * Deletes resources
     *
     * @generated from protobuf rpc: DeleteResources(ondewo.nlu.DeleteResourcesRequest) returns (google.protobuf.Empty);
     */
    deleteResources(input: DeleteResourcesRequest, options?: RpcOptions): UnaryCall<DeleteResourcesRequest, Empty>;
    /**
     * Exports resources
     *
     * @generated from protobuf rpc: ExportResources(ondewo.nlu.ExportResourcesRequest) returns (ondewo.nlu.ExportResourcesResponse);
     */
    exportResources(input: ExportResourcesRequest, options?: RpcOptions): UnaryCall<ExportResourcesRequest, ExportResourcesResponse>;
    /**
     * Get statuses of models related to project
     *
     * @generated from protobuf rpc: GetModelStatuses(ondewo.nlu.GetModelStatusesRequest) returns (ondewo.nlu.GetModelStatusesResponse);
     */
    getModelStatuses(input: GetModelStatusesRequest, options?: RpcOptions): UnaryCall<GetModelStatusesRequest, GetModelStatusesResponse>;
    /**
     * Get all set platform name mappings for an Agent
     *
     * @generated from protobuf rpc: GetPlatformMapping(ondewo.nlu.GetPlatformMappingRequest) returns (ondewo.nlu.PlatformMapping);
     */
    getPlatformMapping(input: GetPlatformMappingRequest, options?: RpcOptions): UnaryCall<GetPlatformMappingRequest, PlatformMapping>;
    /**
     * Set platform name mappings for an Agent
     *
     * @generated from protobuf rpc: SetPlatformMapping(ondewo.nlu.PlatformMapping) returns (ondewo.nlu.PlatformMapping);
     */
    setPlatformMapping(input: PlatformMapping, options?: RpcOptions): UnaryCall<PlatformMapping, PlatformMapping>;
    /**
     * Full text search endpoint in entity types
     *
     * @generated from protobuf rpc: GetFullTextSearchEntityType(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntityType);
     */
    getFullTextSearchEntityType(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntityType>;
    /**
     * Full text search endpoint in entities
     *
     * @generated from protobuf rpc: GetFullTextSearchEntity(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntity);
     */
    getFullTextSearchEntity(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntity>;
    /**
     * Full text search endpoint in entity synonyms
     *
     * @generated from protobuf rpc: GetFullTextSearchEntitySynonym(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntitySynonym);
     */
    getFullTextSearchEntitySynonym(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntitySynonym>;
    /**
     * Full text search endpoint in intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntent(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntent);
     */
    getFullTextSearchIntent(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntent>;
    /**
     * Full text search endpoint in context ins of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentContextIn(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentContextIn);
     */
    getFullTextSearchIntentContextIn(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentContextIn>;
    /**
     * Full text search endpoint in context outs of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentContextOut(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentContextOut);
     */
    getFullTextSearchIntentContextOut(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentContextOut>;
    /**
     * Full text search endpoint in user says of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentUsersays(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentUsersays);
     */
    getFullTextSearchIntentUsersays(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentUsersays>;
    /**
     * Full text search endpoint in tags of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentTags(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentTags);
     */
    getFullTextSearchIntentTags(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentTags>;
    /**
     * Full text search endpoint in responses of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentResponse(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentResponse);
     */
    getFullTextSearchIntentResponse(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentResponse>;
    /**
     * Full text search endpoint in parameters of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentParameters(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentParameters);
     */
    getFullTextSearchIntentParameters(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentParameters>;
    /**
     * Force reindexing Intent and Entity data of Agent
     *
     * @generated from protobuf rpc: ReindexAgent(ondewo.nlu.ReindexAgentRequest) returns (ondewo.nlu.Operation);
     */
    reindexAgent(input: ReindexAgentRequest, options?: RpcOptions): UnaryCall<ReindexAgentRequest, Operation>;
}
/**
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way.
 *
 * After you create an agent, you can add [Intents][google.cloud.dialogflow.v2.Intents], [Contexts][google.cloud.dialogflow.v2.Contexts], [Entity Types][google.cloud.dialogflow.v2.EntityTypes], [Webhooks][google.cloud.dialogflow.v2.WebhookRequest], and so on to manage the flow of a conversation and match user input to predefined intents and actions.
 *
 * You can create an agent using both Dialogflow Standard Edition and Dialogflow Enterprise Edition. For details, see [Dialogflow Editions](/dialogflow-enterprise/docs/editions).
 *
 * You can save your agent for backup or versioning by exporting the agent by using the [ExportAgent][google.cloud.dialogflow.v2.Agents.ExportAgent] method. You can import a saved agent by using the [ImportAgent][google.cloud.dialogflow.v2.Agents.ImportAgent] method.
 *
 * Dialogflow provides several [prebuilt agents](https://dialogflow.com/docs/prebuilt-agents) for common conversation scenarios such as determining a date and time, converting currency, and so on.
 *
 * For more information about agents, see the [Dialogflow documentation](https://dialogflow.com/docs/agents).
 *
 * @generated from protobuf service ondewo.nlu.Agents
 */
export declare class AgentsClient implements IAgentsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Creates the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "agent": {
     *     "display_name": "My Pizza Bot",
     *     "default_language_code": "en",
     *     "supported_language_codes": ["en"],
     *     "time_zone": "Europe/Vienna",
     *     "nlu_platform": "ONDEWO"
     *   }
     * }' localhost:50055 ondewo.nlu.Agents.CreateAgent
     * </pre>
     *
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: CreateAgent(ondewo.nlu.CreateAgentRequest) returns (ondewo.nlu.Agent);
     */
    createAgent(input: CreateAgentRequest, options?: RpcOptions): UnaryCall<CreateAgentRequest, Agent>;
    /**
     * Updates the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "agent": {
     *     "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *     "display_name": "Pizza Bot 2",
     *     "supported_language_codes": ["en", "de"]
     *   },
     *   "update_mask": {
     *     "paths": [
     *       "agent.display_name",
     *       "agent.supported_language_codes"
     *     ]
     *   }
     * }' localhost:50055 ondewo.nlu.Agents.UpdateAgent
     * </pre>
     *
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot 2",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en",
     *     "de"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: UpdateAgent(ondewo.nlu.UpdateAgentRequest) returns (ondewo.nlu.Agent);
     */
    updateAgent(input: UpdateAgentRequest, options?: RpcOptions): UnaryCall<UpdateAgentRequest, Agent>;
    /**
     * Retrieves the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
     * }' localhost:50055 ondewo.nlu.Agents.GetAgent
     * </pre>
     * <samp>{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *   "display_name": "Pizza Bot 2",
     *   "default_language_code": "en",
     *   "supported_language_codes": [
     *     "en",
     *     "de"
     *   ],
     *   "time_zone": "Europe/Vienna",
     *   "nlu_platform": "ONDEWO",
     *   "configs": {...},
     *   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: GetAgent(ondewo.nlu.GetAgentRequest) returns (ondewo.nlu.Agent);
     */
    getAgent(input: GetAgentRequest, options?: RpcOptions): UnaryCall<GetAgentRequest, Agent>;
    /**
     * Deletes the specified agent.
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' -d '{
     *   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
     * }' localhost:50055 ondewo.nlu.Agents.DeleteAgent
     * </pre>
     * <samp>{}</samp>
     *
     * @generated from protobuf rpc: DeleteAgent(ondewo.nlu.DeleteAgentRequest) returns (google.protobuf.Empty);
     */
    deleteAgent(input: DeleteAgentRequest, options?: RpcOptions): UnaryCall<DeleteAgentRequest, Empty>;
    /**
     * Deletes all agents in the server (for development purposes only).
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.DeleteAllAgents
     * </pre>
     * <samp>{}</samp>
     *
     * @generated from protobuf rpc: DeleteAllAgents(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    deleteAllAgents(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * Lists agents in the server associated to the current user
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgents
     * </pre>
     * <samp>{
     *   "agents_with_owners": [
     *     {
     *       "agent": {
     *         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *         "display_name": "Pizza Bot 2",
     *         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *       },
     *       "owner": {
     *         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *         "display_name": "admin",
     *         "server_role_id": 3,
     *         "user_email": "admin@ondewo.com"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAgents(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsResponse);
     */
    listAgents(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsResponse>;
    /**
     * Lists agents in the server associated to the given user
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgentsOfUser
     * </pre>
     * <samp>{
     *   "agents_of_user_with_owners": [
     *     {
     *       "agent_with_owner": {
     *         "agent": {
     *           "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *           "display_name": "Pizza Bot 2",
     *           "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *         },
     *         "owner": {
     *           "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *           "display_name": "admin",
     *           "server_role_id": 3,
     *           "user_email": "admin@ondewo.com"
     *         }
     *       },
     *       "project_role": {
     *         "role_id": 4,
     *         "name": "ADMIN"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAgentsOfUser(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsOfUserResponse);
     */
    listAgentsOfUser(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsOfUserResponse>;
    /**
     * Lists all agents in the server
     *
     * <p>Examples:</p>
     *
     * <pre>
     * grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAllAgents
     * </pre>
     * <samp>{
     *   "agents_with_owners": [
     *     {
     *       "agent": {
     *         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
     *         "display_name": "Pizza Bot 2",
     *         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
     *       },
     *       "owner": {
     *         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
     *         "display_name": "admin",
     *         "server_role_id": 3,
     *         "user_email": "admin@ondewo.com"
     *       }
     *     }
     *   ],
     *   "next_page_token": "current_index-1"
     * }
     * </samp>
     *
     * @generated from protobuf rpc: ListAllAgents(ondewo.nlu.ListAgentsRequest) returns (ondewo.nlu.ListAgentsResponse);
     */
    listAllAgents(input: ListAgentsRequest, options?: RpcOptions): UnaryCall<ListAgentsRequest, ListAgentsResponse>;
    /**
     * Adds a user with specified id to the project (agent)
     *
     * @generated from protobuf rpc: AddUserToProject(ondewo.nlu.AddUserToProjectRequest) returns (google.protobuf.Empty);
     */
    addUserToProject(input: AddUserToProjectRequest, options?: RpcOptions): UnaryCall<AddUserToProjectRequest, Empty>;
    /**
     * Removes a user with specified id from the project (agent)
     *
     * @generated from protobuf rpc: RemoveUserFromProject(ondewo.nlu.RemoveUserFromProjectRequest) returns (google.protobuf.Empty);
     */
    removeUserFromProject(input: RemoveUserFromProjectRequest, options?: RpcOptions): UnaryCall<RemoveUserFromProjectRequest, Empty>;
    /**
     * Lists users in the project (agent)
     *
     * @generated from protobuf rpc: ListUsersInProject(ondewo.nlu.ListUsersInProjectRequest) returns (ondewo.nlu.ListUsersInProjectResponse);
     */
    listUsersInProject(input: ListUsersInProjectRequest, options?: RpcOptions): UnaryCall<ListUsersInProjectRequest, ListUsersInProjectResponse>;
    /**
     * Gets information from the platform
     *
     * @generated from protobuf rpc: GetPlatformInfo(google.protobuf.Empty) returns (ondewo.nlu.GetPlatformInfoResponse);
     */
    getPlatformInfo(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetPlatformInfoResponse>;
    /**
     * List permissions from the project (agent)
     *
     * @generated from protobuf rpc: ListProjectPermissions(ondewo.nlu.ListProjectPermissionsRequest) returns (ondewo.nlu.ListProjectPermissionsResponse);
     */
    listProjectPermissions(input: ListProjectPermissionsRequest, options?: RpcOptions): UnaryCall<ListProjectPermissionsRequest, ListProjectPermissionsResponse>;
    /**
     * Trains the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: TrainAgent(ondewo.nlu.TrainAgentRequest) returns (ondewo.nlu.Operation);
     */
    trainAgent(input: TrainAgentRequest, options?: RpcOptions): UnaryCall<TrainAgentRequest, Operation>;
    /**
     * Builds cache for the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BuildCache(ondewo.nlu.BuildCacheRequest) returns (ondewo.nlu.Operation);
     */
    buildCache(input: BuildCacheRequest, options?: RpcOptions): UnaryCall<BuildCacheRequest, Operation>;
    /**
     * Exports the specified agent to a ZIP file.
     *
     * Operation <response: [ExportAgentResponse][google.cloud.dialogflow.v2.ExportAgentResponse],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: ExportAgent(ondewo.nlu.ExportAgentRequest) returns (ondewo.nlu.Operation);
     */
    exportAgent(input: ExportAgentRequest, options?: RpcOptions): UnaryCall<ExportAgentRequest, Operation>;
    /**
     * Exports the specified train agent to a ZIP file after train-test split, returns the test TrainingPhrase list.
     *
     *
     * @generated from protobuf rpc: ExportBenchmarkAgent(ondewo.nlu.ExportBenchmarkAgentRequest) returns (ondewo.nlu.Operation);
     */
    exportBenchmarkAgent(input: ExportBenchmarkAgentRequest, options?: RpcOptions): UnaryCall<ExportBenchmarkAgentRequest, Operation>;
    /**
     * Imports the specified agent from a ZIP file.
     *
     * Uploads new intents and entity types without deleting the existing ones.
     * Intents and entity types with the same name are replaced with the new
     * versions from ImportAgentRequest.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: ImportAgent(ondewo.nlu.ImportAgentRequest) returns (ondewo.nlu.Operation);
     */
    importAgent(input: ImportAgentRequest, options?: RpcOptions): UnaryCall<ImportAgentRequest, Operation>;
    /**
     * Runs optimize ranking match
     *
     * @generated from protobuf rpc: OptimizeRankingMatch(ondewo.nlu.OptimizeRankingMatchRequest) returns (ondewo.nlu.Operation);
     */
    optimizeRankingMatch(input: OptimizeRankingMatchRequest, options?: RpcOptions): UnaryCall<OptimizeRankingMatchRequest, Operation>;
    /**
     * Restores the specified agent from a ZIP file.
     *
     * Replaces the current agent version with a new one. All the intents and
     * entity types in the older version are deleted.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: RestoreAgent(ondewo.nlu.RestoreAgentRequest) returns (ondewo.nlu.Operation);
     */
    restoreAgent(input: RestoreAgentRequest, options?: RpcOptions): UnaryCall<RestoreAgentRequest, Operation>;
    /**
     * Gets statistics for the agent
     *
     * @generated from protobuf rpc: GetAgentStatistics(ondewo.nlu.GetAgentStatisticsRequest) returns (ondewo.nlu.GetAgentStatisticsResponse);
     */
    getAgentStatistics(input: GetAgentStatisticsRequest, options?: RpcOptions): UnaryCall<GetAgentStatisticsRequest, GetAgentStatisticsResponse>;
    /**
     * @generated from protobuf rpc: GetSessionsStatistics(ondewo.nlu.GetSessionsStatisticsRequest) returns (ondewo.nlu.GetSessionsStatisticsResponse);
     */
    getSessionsStatistics(input: GetSessionsStatisticsRequest, options?: RpcOptions): UnaryCall<GetSessionsStatisticsRequest, GetSessionsStatisticsResponse>;
    /**
     * Sets status for the agent
     *
     * @generated from protobuf rpc: SetAgentStatus(ondewo.nlu.SetAgentStatusRequest) returns (ondewo.nlu.Agent);
     */
    setAgentStatus(input: SetAgentStatusRequest, options?: RpcOptions): UnaryCall<SetAgentStatusRequest, Agent>;
    /**
     * Sets resources
     *
     * @generated from protobuf rpc: SetResources(ondewo.nlu.SetResourcesRequest) returns (google.protobuf.Empty);
     */
    setResources(input: SetResourcesRequest, options?: RpcOptions): UnaryCall<SetResourcesRequest, Empty>;
    /**
     * Deletes resources
     *
     * @generated from protobuf rpc: DeleteResources(ondewo.nlu.DeleteResourcesRequest) returns (google.protobuf.Empty);
     */
    deleteResources(input: DeleteResourcesRequest, options?: RpcOptions): UnaryCall<DeleteResourcesRequest, Empty>;
    /**
     * Exports resources
     *
     * @generated from protobuf rpc: ExportResources(ondewo.nlu.ExportResourcesRequest) returns (ondewo.nlu.ExportResourcesResponse);
     */
    exportResources(input: ExportResourcesRequest, options?: RpcOptions): UnaryCall<ExportResourcesRequest, ExportResourcesResponse>;
    /**
     * Get statuses of models related to project
     *
     * @generated from protobuf rpc: GetModelStatuses(ondewo.nlu.GetModelStatusesRequest) returns (ondewo.nlu.GetModelStatusesResponse);
     */
    getModelStatuses(input: GetModelStatusesRequest, options?: RpcOptions): UnaryCall<GetModelStatusesRequest, GetModelStatusesResponse>;
    /**
     * Get all set platform name mappings for an Agent
     *
     * @generated from protobuf rpc: GetPlatformMapping(ondewo.nlu.GetPlatformMappingRequest) returns (ondewo.nlu.PlatformMapping);
     */
    getPlatformMapping(input: GetPlatformMappingRequest, options?: RpcOptions): UnaryCall<GetPlatformMappingRequest, PlatformMapping>;
    /**
     * Set platform name mappings for an Agent
     *
     * @generated from protobuf rpc: SetPlatformMapping(ondewo.nlu.PlatformMapping) returns (ondewo.nlu.PlatformMapping);
     */
    setPlatformMapping(input: PlatformMapping, options?: RpcOptions): UnaryCall<PlatformMapping, PlatformMapping>;
    /**
     * Full text search endpoint in entity types
     *
     * @generated from protobuf rpc: GetFullTextSearchEntityType(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntityType);
     */
    getFullTextSearchEntityType(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntityType>;
    /**
     * Full text search endpoint in entities
     *
     * @generated from protobuf rpc: GetFullTextSearchEntity(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntity);
     */
    getFullTextSearchEntity(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntity>;
    /**
     * Full text search endpoint in entity synonyms
     *
     * @generated from protobuf rpc: GetFullTextSearchEntitySynonym(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseEntitySynonym);
     */
    getFullTextSearchEntitySynonym(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseEntitySynonym>;
    /**
     * Full text search endpoint in intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntent(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntent);
     */
    getFullTextSearchIntent(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntent>;
    /**
     * Full text search endpoint in context ins of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentContextIn(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentContextIn);
     */
    getFullTextSearchIntentContextIn(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentContextIn>;
    /**
     * Full text search endpoint in context outs of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentContextOut(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentContextOut);
     */
    getFullTextSearchIntentContextOut(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentContextOut>;
    /**
     * Full text search endpoint in user says of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentUsersays(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentUsersays);
     */
    getFullTextSearchIntentUsersays(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentUsersays>;
    /**
     * Full text search endpoint in tags of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentTags(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentTags);
     */
    getFullTextSearchIntentTags(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentTags>;
    /**
     * Full text search endpoint in responses of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentResponse(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentResponse);
     */
    getFullTextSearchIntentResponse(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentResponse>;
    /**
     * Full text search endpoint in parameters of intents
     *
     * @generated from protobuf rpc: GetFullTextSearchIntentParameters(ondewo.nlu.FullTextSearchRequest) returns (ondewo.nlu.FullTextSearchResponseIntentParameters);
     */
    getFullTextSearchIntentParameters(input: FullTextSearchRequest, options?: RpcOptions): UnaryCall<FullTextSearchRequest, FullTextSearchResponseIntentParameters>;
    /**
     * Force reindexing Intent and Entity data of Agent
     *
     * @generated from protobuf rpc: ReindexAgent(ondewo.nlu.ReindexAgentRequest) returns (ondewo.nlu.Operation);
     */
    reindexAgent(input: ReindexAgentRequest, options?: RpcOptions): UnaryCall<ReindexAgentRequest, Operation>;
}
