import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Intent_Message_Platform } from "./intent";
import { SortingMode } from "./common";
import { ContextFilter } from "./session";
import { SessionFilter } from "./session";
import { ListTrainingPhrasesResponse } from "./intent";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ProjectRole } from "./project_role";
import { User } from "./user";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Struct } from "../../google/protobuf/struct";
/**
 * Project/Agent messages
 *
 * @generated from protobuf message ondewo.nlu.Agent
 */
export interface Agent {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     * Read-only in the Agent message
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The name of this agent.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Required. The default language of the agent as a language tag. See
     * [Language Support](https://dialogflow.com/docs/reference/language) for a
     * list of the currently supported language codes.
     * This field cannot be set by the `Update` method.
     *
     * @generated from protobuf field: string default_language_code = 3;
     */
    defaultLanguageCode: string;
    /**
     * Optional. The list of all languages supported by this agent (except for the
     * `default_language_code`).
     *
     * @generated from protobuf field: repeated string supported_language_codes = 4;
     */
    supportedLanguageCodes: string[];
    /**
     * Required. The time zone of this agent from the
     * [time zone database](https://www.iana.org/time-zones), e.g.,
     * America/New_York, Europe/Paris.
     *
     * @generated from protobuf field: string time_zone = 5;
     */
    timeZone: string;
    /**
     * Required. Specifies the format of the agent data.
     *
     * @generated from protobuf field: string nlu_platform = 6;
     */
    nluPlatform: string;
    /**
     * Optional. Agent configuration as OndewoConfig converted to Struct format.
     *
     * @generated from protobuf field: google.protobuf.Struct configs = 7;
     */
    configs?: Struct;
    /**
     * Optional. User id of the project owner. If empty, in CreateAgent call it is set to user id in the call
     * metadata.
     * Read-only in the Agent message
     *
     * @generated from protobuf field: string owner_id = 8;
     */
    ownerId: string;
    /**
     * Optional. Status of the agent
     * Read-only in the Agent message
     *
     * @generated from protobuf field: ondewo.nlu.AgentStatus status = 9;
     */
    status: AgentStatus;
    /**
     * @generated from protobuf field: string description = 10;
     */
    description: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 11;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 12;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 13;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 14;
     */
    modifiedBy: string;
}
/**
 * This message contains the agent with owner
 *
 * @generated from protobuf message ondewo.nlu.AgentWithOwner
 */
export interface AgentWithOwner {
    /**
     * The agent
     *
     * @generated from protobuf field: ondewo.nlu.Agent agent = 1;
     */
    agent?: Agent;
    /**
     * User who created the agent
     *
     * @generated from protobuf field: ondewo.nlu.User owner = 2;
     */
    owner?: User;
}
/**
 * This message contains the agent of user with owner
 *
 * @generated from protobuf message ondewo.nlu.AgentOfUserWithOwner
 */
export interface AgentOfUserWithOwner {
    /**
     * Required. Agent message and User message of its owner.
     *
     * @generated from protobuf field: ondewo.nlu.AgentWithOwner agent_with_owner = 1;
     */
    agentWithOwner?: AgentWithOwner;
    /**
     * Required. The role of the user in the project in SHALLOW view (only ID and name fields are populated)
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRole project_role = 2;
     */
    projectRole?: ProjectRole;
}
/**
 * Request to create an agent
 *
 * @generated from protobuf message ondewo.nlu.CreateAgentRequest
 */
export interface CreateAgentRequest {
    /**
     * The agent
     *
     * @generated from protobuf field: ondewo.nlu.Agent agent = 1;
     */
    agent?: Agent;
    /**
     * Optional. Specify the view of the returned agent (sparse view by default)
     *
     * @generated from protobuf field: ondewo.nlu.AgentView agent_view = 2;
     */
    agentView: AgentView;
}
/**
 * Request to update the agent
 *
 * @generated from protobuf message ondewo.nlu.UpdateAgentRequest
 */
export interface UpdateAgentRequest {
    /**
     * The agent
     *
     * @generated from protobuf field: ondewo.nlu.Agent agent = 1;
     */
    agent?: Agent;
    /**
     * Optional. Specify the view of the returned agent (sparse view by default)
     *
     * @generated from protobuf field: ondewo.nlu.AgentView agent_view = 2;
     */
    agentView: AgentView;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
}
/**
 * Request to delete the agent
 *
 * @generated from protobuf message ondewo.nlu.DeleteAgentRequest
 */
export interface DeleteAgentRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
}
/**
 * The request message for [Agents.GetAgent][google.cloud.dialogflow.v2.Agents.GetAgent].
 *
 * @generated from protobuf message ondewo.nlu.GetAgentRequest
 */
export interface GetAgentRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. Specify the view of the returned agent (full view by default)
     *
     * @generated from protobuf field: ondewo.nlu.AgentView agent_view = 2;
     */
    agentView: AgentView;
}
/**
 * Request to get the list of agents
 *
 * @generated from protobuf message ondewo.nlu.ListAgentsRequest
 */
export interface ListAgentsRequest {
    /**
     * Optional. Specify the view of the returned agent (full view by default)
     *
     * @generated from protobuf field: ondewo.nlu.AgentView agent_view = 1;
     */
    agentView: AgentView;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     *
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
    /**
     * Optional. Defines the sorting of the list. Default, no sorting.
     *
     * @generated from protobuf field: ondewo.nlu.AgentSorting sort_by_field = 3;
     */
    sortByField?: AgentSorting;
}
/**
 * Get list of agents
 *
 * @generated from protobuf message ondewo.nlu.ListAgentsResponse
 */
export interface ListAgentsResponse {
    /**
     * The list of agent and their owners. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.AgentWithOwner agents_with_owners = 1;
     */
    agentsWithOwners: AgentWithOwner[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Get list of agents of user
 *
 * @generated from protobuf message ondewo.nlu.ListAgentsOfUserResponse
 */
export interface ListAgentsOfUserResponse {
    /**
     * The list of agents with their owners of the given user. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.AgentOfUserWithOwner agents_of_user_with_owners = 1;
     */
    agentsOfUserWithOwners: AgentOfUserWithOwner[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for [Agents.TrainAgent][google.cloud.dialogflow.v2.Agents.TrainAgent].
 *
 * @generated from protobuf message ondewo.nlu.TrainAgentRequest
 */
export interface TrainAgentRequest {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Name of the branch of the agent for versioning. The default branch name is <code>develop</code>.
     *
     * @generated from protobuf field: string branch = 2;
     */
    branch: string;
    /**
     * Defines when to initiate newly created agent when training started
     *
     * @generated from protobuf field: ondewo.nlu.InitiationProtocol initiation_protocol = 3;
     */
    initiationProtocol: InitiationProtocol;
}
/**
 * The request message for [Agents.TrainAgentBuildCache][google.cloud.dialogflow.v2.Agents.BuildCache].
 *
 * @generated from protobuf message ondewo.nlu.BuildCacheRequest
 */
export interface BuildCacheRequest {
    /**
     * Required. The project that the agent to build cache is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Name of the branch of the agent for versioning. The default branch name is <code>develop</code>.
     *
     * @generated from protobuf field: string branch = 2;
     */
    branch: string;
}
/**
 * The request message for [Agents.ExportAgent][google.cloud.dialogflow.v2.Agents.ExportAgent].
 *
 * @generated from protobuf message ondewo.nlu.ExportAgentRequest
 */
export interface ExportAgentRequest {
    /**
     * Required. The project that the agent to export is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The Google Cloud Storage URI to export the agent to.
     * Note: The URI must start with
     * "gs://". If left unspecified, the serialized agent is returned inline.
     *
     * @generated from protobuf field: string agent_uri = 2;
     */
    agentUri: string;
    /**
     * Optional. The compression level of the zip file created.
     * Valid range 1-9; the grpc-default value 0 will be mapped to 1,
     * other values cause an error in the request validation handler.
     *
     * @generated from protobuf field: int32 compression_level = 3;
     */
    compressionLevel: number;
}
/**
 * The response message for [Agents.ExportAgent][google.cloud.dialogflow.v2.Agents.ExportAgent].
 *
 * @generated from protobuf message ondewo.nlu.ExportAgentResponse
 */
export interface ExportAgentResponse {
    /**
     * @generated from protobuf oneof: agent
     */
    agent: {
        oneofKind: "agentUri";
        /**
         * The URI to a file containing the exported agent. This field is populated
         * only if `agent_uri` is specified in `ExportAgentRequest`.
         *
         * @generated from protobuf field: string agent_uri = 1;
         */
        agentUri: string;
    } | {
        oneofKind: "agentContent";
        /**
         * The exported agent.
         *
         * Example for how to export an agent to a zip file via a command line:
         *
         * curl \
         *   'https://dialogflow.googleapis.com/v2/projects/<project_name>/agent:export'\
         *   -X POST \
         *   -H 'Authorization: Bearer '$(gcloud auth print-access-token) \
         *   -H 'Accept: application/json' \
         *   -H 'Content-Type: application/json' \
         *   --compressed \
         *   --data-binary '{}' \
         * | grep agentContent | sed -e 's/.*"agentContent": "\([^"]*\)".*\/\1/' \
         * | base64 --decode > <agent zip file>
         *
         * @generated from protobuf field: bytes agent_content = 2;
         */
        agentContent: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request to export benchmark agent
 *
 * @generated from protobuf message ondewo.nlu.ExportBenchmarkAgentRequest
 */
export interface ExportBenchmarkAgentRequest {
    /**
     * Agent related info
     * Required. The project that the agent to export is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The compression level of the zip file created.
     * Valid range 1-9; the grpc-default value 0 will be mapped to 1,
     * other values cause an error in the request validation handler.
     *
     * @generated from protobuf field: int32 compression_level = 2;
     */
    compressionLevel: number;
    /**
     * Train-test split related parameters, for further info,
     * check https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html
     * default values come from API definition above
     * Optional: bigger than zero
     *
     * @generated from protobuf field: float test_size = 3;
     */
    testSize: number;
    /**
     * Optional: bigger than zero
     *
     * @generated from protobuf field: float train_size = 4;
     */
    trainSize: number;
    /**
     * Optional: random seed
     *
     * @generated from protobuf field: int32 random_state = 5;
     */
    randomState: number;
}
/**
 * Response to export benchmark agent
 *
 * @generated from protobuf message ondewo.nlu.ExportBenchmarkAgentResponse
 */
export interface ExportBenchmarkAgentResponse {
    /**
     * Agent responses as zip file
     *
     * @generated from protobuf field: bytes agent_content = 1;
     */
    agentContent: Uint8Array;
    /**
     * Key is the language code, value is the corresponding ListTrainingPhrasesResponse
     *
     * @generated from protobuf field: map<string, ondewo.nlu.ListTrainingPhrasesResponse> training_phrases = 2;
     */
    trainingPhrases: {
        [key: string]: ListTrainingPhrasesResponse;
    };
}
/**
 * This message is a request to run Optimize Ranking Match
 *
 * @generated from protobuf message ondewo.nlu.OptimizeRankingMatchRequest
 */
export interface OptimizeRankingMatchRequest {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * languages that should be optimized
     *
     * @generated from protobuf field: repeated string language_codes = 2;
     */
    languageCodes: string[];
    /**
     * optimization config will contain all possible optimizations, with which we will come up in the future
     *
     * @generated from protobuf field: repeated ondewo.nlu.RankingMatchOptimizationConfig optimization_configs = 3;
     */
    optimizationConfigs: RankingMatchOptimizationConfig[];
    /**
     * if in_place is true then the config of the agent on the server will be updated, if False then config
     * with optimized thresholds will be returned but not updated on the server
     *
     * @generated from protobuf field: bool in_place = 4;
     */
    inPlace: boolean;
}
/**
 * This message contains the configuration to run Optimize Ranking Match
 *
 * @generated from protobuf message ondewo.nlu.RankingMatchOptimizationConfig
 */
export interface RankingMatchOptimizationConfig {
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 1;
     */
    languageCode: string;
    /**
     * number of splits for optimization
     *
     * @generated from protobuf field: int32 n_splits = 2;
     */
    nSplits: number;
    /**
     * random seed number for defining the split of train and test of training phrases for optimization
     *
     * @generated from protobuf field: int32 random_seed = 3;
     */
    randomSeed: number;
    /**
     * initial thresholds are optional, if not given will be taken from the current config
     * example {'OndewoIntentSimilarityMatch': 0.59, 'OndewoIntentNamedSimilarityMatch': 0.39}
     *
     * @generated from protobuf field: google.protobuf.Struct initial_thresholds = 4;
     */
    initialThresholds?: Struct;
}
/**
 * This message is a response of Optimize Ranking Match
 *
 * @generated from protobuf message ondewo.nlu.OptimizeRankingMatchResponse
 */
export interface OptimizeRankingMatchResponse {
    /**
     * info about optimization
     *
     * @generated from protobuf field: google.protobuf.Struct optimization_info = 1;
     */
    optimizationInfo?: Struct;
    /**
     * the optimized configuration of the ondewo agent e.g., optimized parameters
     *
     * @generated from protobuf field: google.protobuf.Struct optimized_ondewo_config = 3;
     */
    optimizedOndewoConfig?: Struct;
}
/**
 * The request message for [Agents.ImportAgent][google.cloud.dialogflow.v2.Agents.ImportAgent].
 *
 * @generated from protobuf message ondewo.nlu.ImportAgentRequest
 */
export interface ImportAgentRequest {
    /**
     * Required. The project that the agent to import is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf oneof: agent
     */
    agent: {
        oneofKind: "agentUri";
        /**
         * The URI to a Google Cloud Storage file containing the agent to import.
         * Note: The URI must start with "gs://".
         *
         * @generated from protobuf field: string agent_uri = 2;
         */
        agentUri: string;
    } | {
        oneofKind: "agentContent";
        /**
         * The agent to import.
         *
         * Example for how to import an agent via the command line:
         *
         * curl \
         *   'https://dialogflow.googleapis.com/v2/projects/<project_name>/agent:import\
         *    -X POST \
         *    -H 'Authorization: Bearer '$(gcloud auth print-access-token) \
         *    -H 'Accept: application/json' \
         *    -H 'Content-Type: application/json' \
         *    --compressed \
         *    --data-binary "{
         *       'agentContent': '$(cat <agent zip file> | base64 -w 0)'
         *    }"
         *
         * @generated from protobuf field: bytes agent_content = 3;
         */
        agentContent: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The request message for [Agents.RestoreAgent][google.cloud.dialogflow.v2.Agents.RestoreAgent].
 *
 * @generated from protobuf message ondewo.nlu.RestoreAgentRequest
 */
export interface RestoreAgentRequest {
    /**
     * Required. The project that the agent to restore is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf oneof: agent
     */
    agent: {
        oneofKind: "agentUri";
        /**
         * The URI to a Google Cloud Storage file containing the agent to restore.
         * Note: The URI must start with "gs://".
         *
         * @generated from protobuf field: string agent_uri = 2;
         */
        agentUri: string;
    } | {
        oneofKind: "agentContent";
        /**
         * The agent to restore.
         *
         * Example for how to restore an agent via the command line:
         *
         * curl \
         *   'https://dialogflow.googleapis.com/v2/projects/<project_name>/agent:restore\
         *    -X POST \
         *    -H 'Authorization: Bearer '$(gcloud auth print-access-token) \
         *    -H 'Accept: application/json' \
         *    -H 'Content-Type: application/json' \
         *    --compressed \
         *    --data-binary "{
         *        'agentContent': '$(cat <agent zip file> | base64 -w 0)'
         *    }" \
         *
         * @generated from protobuf field: bytes agent_content = 3;
         */
        agentContent: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request statistics of the agent
 *
 * @generated from protobuf message ondewo.nlu.GetAgentStatisticsRequest
 */
export interface GetAgentStatisticsRequest {
    /**
     * Required. The project to get statistics from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * File formats for reports
     *
     * @generated from protobuf field: ondewo.nlu.ReportFormat format = 2;
     */
    format: ReportFormat;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     * the language to calculate statistics about
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Type of reports about the domain of the agent
     *
     * @generated from protobuf field: ondewo.nlu.ReportType type = 4;
     */
    type: ReportType;
}
/**
 * Response to get statistics of the agent
 *
 * @generated from protobuf message ondewo.nlu.GetAgentStatisticsResponse
 */
export interface GetAgentStatisticsResponse {
    /**
     * Statistic info.
     *
     * @generated from protobuf field: bytes reports = 1;
     */
    reports: Uint8Array;
    /**
     * File formats for reports
     *
     * @generated from protobuf field: ondewo.nlu.ReportFormat format = 2;
     */
    format: ReportFormat;
    /**
     * Type of reports about the domain of the agent
     *
     * @generated from protobuf field: ondewo.nlu.ReportType type = 3;
     */
    type: ReportType;
}
/**
 * Request of the report of the statistics about sessions
 *
 * @generated from protobuf message ondewo.nlu.GetSessionsStatisticsRequest
 */
export interface GetSessionsStatisticsRequest {
    /**
     * Required. The project to get statistics from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * File formats for reports
     *
     * @generated from protobuf field: ondewo.nlu.ReportFormat format = 2;
     */
    format: ReportFormat;
    /**
     * Type of reports about the domain of the agent
     *
     * @generated from protobuf field: ondewo.nlu.SessionsReportType type = 3;
     */
    type: SessionsReportType;
    /**
     * Optional. A filter to narrow reports based on sessions
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 4;
     */
    sessionFilter?: SessionFilter;
    /**
     * Optional. A filter to narrow reports based on contextual information (Coming soon! Not yet implemented)
     *
     * @generated from protobuf field: repeated ondewo.nlu.ContextFilter context_filters = 5;
     */
    contextFilters: ContextFilter[];
    /**
     * Optional. limit the returned number of results
     *
     * @generated from protobuf field: int32 limit = 6;
     */
    limit: number;
    /**
     * Optional. Grouping based on named properties
     *
     * @generated from protobuf field: repeated string group_bys = 7;
     */
    groupBys: string[];
    /**
     * Optional. Order based on named properties
     *
     * @generated from protobuf field: repeated string order_bys = 8;
     */
    orderBys: string[];
    /**
     * Optional. The mask to control which data fields will be added to the returned data.
     * Example: paths=["duration_in_s_min", "id", "session_id", "project_id"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 9;
     */
    fieldMask?: FieldMask;
    /**
     * SQL Query - only usable with specific SessionsReportType such as SessionsReportType.SESSION_SQL_QUERY
     *
     * @generated from protobuf field: string sql_query = 10;
     */
    sqlQuery: string;
}
/**
 * Report of the statistics about sessions
 *
 * @generated from protobuf message ondewo.nlu.GetSessionsStatisticsResponse
 */
export interface GetSessionsStatisticsResponse {
    /**
     * Statistic info.
     *
     * @generated from protobuf field: bytes reports = 1;
     */
    reports: Uint8Array;
    /**
     * File formats for reports
     *
     * @generated from protobuf field: ondewo.nlu.ReportFormat format = 2;
     */
    format: ReportFormat;
    /**
     * Type of reports about the domain of the agent
     *
     * @generated from protobuf field: ondewo.nlu.SessionsReportType type = 3;
     */
    type: SessionsReportType;
}
/**
 * Request to add user to project.
 *
 * @generated from protobuf message ondewo.nlu.AddUserToProjectRequest
 */
export interface AddUserToProjectRequest {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * id of the user
     *
     * @generated from protobuf field: string user_id = 2;
     */
    userId: string;
    /**
     * ID of the project role of the user
     *
     * @generated from protobuf field: uint32 project_role_id = 4;
     */
    projectRoleId: number;
}
/**
 * Request to remove user from the project.
 *
 * @generated from protobuf message ondewo.nlu.RemoveUserFromProjectRequest
 */
export interface RemoveUserFromProjectRequest {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * id of the user
     *
     * @generated from protobuf field: string user_id = 2;
     */
    userId: string;
}
/**
 * Request to list users in the project
 *
 * @generated from protobuf message ondewo.nlu.ListUsersInProjectRequest
 */
export interface ListUsersInProjectRequest {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
}
/**
 * Request to get user in project
 *
 * @generated from protobuf message ondewo.nlu.UserInProject
 */
export interface UserInProject {
    /**
     * Required. The project that the agent to train is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * User object
     *
     * @generated from protobuf field: ondewo.nlu.User user = 2;
     */
    user?: User;
    /**
     * ID of the project role of the user
     *
     * @generated from protobuf field: uint32 role_id = 3;
     */
    roleId: number;
}
/**
 * List the users in a project
 *
 * @generated from protobuf message ondewo.nlu.ListUsersInProjectResponse
 */
export interface ListUsersInProjectResponse {
    /**
     * The list of users in a project. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.UserInProject users = 1;
     */
    users: UserInProject[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * GIT information about the version of the server
 *
 * @generated from protobuf message ondewo.nlu.GetPlatformInfoResponse
 */
export interface GetPlatformInfoResponse {
    /**
     * version of the server build
     *
     * @generated from protobuf field: string version = 1;
     */
    version: string;
    /**
     * git commit hash of the server build
     *
     * @generated from protobuf field: string commit_hash = 2;
     */
    commitHash: string;
}
/**
 * Project permissions
 *
 * @generated from protobuf message ondewo.nlu.ListProjectPermissionsRequest
 */
export interface ListProjectPermissionsRequest {
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 1;
     */
    pageToken: string;
}
/**
 * List project permissions
 *
 * @generated from protobuf message ondewo.nlu.ListProjectPermissionsResponse
 */
export interface ListProjectPermissionsResponse {
    /**
     * The list of project permissions. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated string permissions = 1;
     */
    permissions: string[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Request to set status of the agent
 *
 * @generated from protobuf message ondewo.nlu.SetAgentStatusRequest
 */
export interface SetAgentStatusRequest {
    /**
     * Required. The project of which to set the status.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. Status of the agent
     *
     * @generated from protobuf field: ondewo.nlu.AgentStatus status = 2;
     */
    status: AgentStatus;
    /**
     * Optional. View of the returned agent
     *
     * @generated from protobuf field: ondewo.nlu.AgentView agent_view = 3;
     */
    agentView: AgentView;
}
/**
 * Sorting order of agent
 *
 * @generated from protobuf message ondewo.nlu.AgentSorting
 */
export interface AgentSorting {
    /**
     * sorting field for agent sorting
     *
     * @generated from protobuf field: ondewo.nlu.AgentSorting.AgentSortingField sorting_field = 1;
     */
    sortingField: AgentSorting_AgentSortingField;
    /**
     * Sorting mode
     *
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 2;
     */
    sortingMode: SortingMode;
}
/**
 * Sorting field
 *
 * @generated from protobuf enum ondewo.nlu.AgentSorting.AgentSortingField
 */
export declare enum AgentSorting_AgentSortingField {
    /**
     * no sorting
     *
     * @generated from protobuf enum value: NO_AGENT_SORTING = 0;
     */
    NO_AGENT_SORTING = 0,
    /**
     * sorting by name
     *
     * @generated from protobuf enum value: SORT_AGENT_BY_NAME = 1;
     */
    SORT_AGENT_BY_NAME = 1,
    /**
     * sorting by creation date
     *
     * @generated from protobuf enum value: SORT_AGENT_BY_CREATION_DATE = 2;
     */
    SORT_AGENT_BY_CREATION_DATE = 2,
    /**
     * sorting by last updated date
     *
     * @generated from protobuf enum value: SORT_AGENT_BY_LAST_UPDATED = 3;
     */
    SORT_AGENT_BY_LAST_UPDATED = 3,
    /**
     * sorting by owner, i.e. user who owns the agent which is usually the creator of the agent
     *
     * @generated from protobuf enum value: SORT_AGENT_BY_OWNER_NAME = 4;
     */
    SORT_AGENT_BY_OWNER_NAME = 4
}
/**
 * Request to set resources
 *
 * @generated from protobuf message ondewo.nlu.SetResourcesRequest
 */
export interface SetResourcesRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * @generated from protobuf field: bytes resource_file = 4;
     */
    resourceFile: Uint8Array;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 5;
     */
    languageCode: string;
}
/**
 * Request to delete resources
 *
 * @generated from protobuf message ondewo.nlu.DeleteResourcesRequest
 */
export interface DeleteResourcesRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
}
/**
 * Request to export resources
 *
 * @generated from protobuf message ondewo.nlu.ExportResourcesRequest
 */
export interface ExportResourcesRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
}
/**
 * Response to export resources
 *
 * @generated from protobuf message ondewo.nlu.ExportResourcesResponse
 */
export interface ExportResourcesResponse {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: bytes resource_file = 5;
     */
    resourceFile: Uint8Array;
}
/**
 * Request to get model statuses
 *
 * @generated from protobuf message ondewo.nlu.GetModelStatusesRequest
 */
export interface GetModelStatusesRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf field: int32 cache_version = 2;
     */
    cacheVersion: number;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: string model_name = 4;
     */
    modelName: string;
}
/**
 * Status of model
 *
 * @generated from protobuf message ondewo.nlu.ModelStatus
 */
export interface ModelStatus {
    /**
     * Cache version that contains the correspondent model
     *
     * @generated from protobuf field: int32 cache_version = 1;
     */
    cacheVersion: number;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * The model name
     *
     * @generated from protobuf field: string model_name = 3;
     */
    modelName: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp status_set_time = 4;
     */
    statusSetTime?: Timestamp;
    /**
     * @generated from protobuf field: string config = 5;
     */
    config: string;
    /**
     * @generated from protobuf field: ondewo.nlu.ModelStatus.StatusName status = 6;
     */
    status: ModelStatus_StatusName;
}
/**
 * @generated from protobuf enum ondewo.nlu.ModelStatus.StatusName
 */
export declare enum ModelStatus_StatusName {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: INITIALIZING = 1;
     */
    INITIALIZING = 1,
    /**
     * @generated from protobuf enum value: INITIALIZED = 2;
     */
    INITIALIZED = 2,
    /**
     * @generated from protobuf enum value: LOADING_DATA = 3;
     */
    LOADING_DATA = 3,
    /**
     * @generated from protobuf enum value: TRAINING = 4;
     */
    TRAINING = 4,
    /**
     * @generated from protobuf enum value: TESTING = 5;
     */
    TESTING = 5,
    /**
     * @generated from protobuf enum value: TRAINED = 6;
     */
    TRAINED = 6
}
/**
 * Response to get model statuses
 *
 * @generated from protobuf message ondewo.nlu.GetModelStatusesResponse
 */
export interface GetModelStatusesResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.ModelStatus model_statuses = 1;
     */
    modelStatuses: ModelStatus[];
}
/**
 * This message contains the information of custom platform
 *
 * @generated from protobuf message ondewo.nlu.CustomPlatformInfo
 */
export interface CustomPlatformInfo {
    /**
     * Required. ID of the Platform.
     * Custom Intent.Message.Platform placeholder. Note: it will not work with non-placeholders values
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.Platform platform = 1;
     */
    platform: Intent_Message_Platform;
    /**
     * Required.
     * Name to be displayed.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Optional.
     * Sorting position of the GetPlatformMappingRequest.
     *
     * @generated from protobuf field: uint32 position = 3;
     */
    position: number;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 5;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 6;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 7;
     */
    modifiedBy: string;
}
/**
 * Request to get platform mapping
 *
 * @generated from protobuf message ondewo.nlu.GetPlatformMappingRequest
 */
export interface GetPlatformMappingRequest {
    /**
     * Required. The project that the agent is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
}
/**
 * This message contains the mapping of platform
 *
 * @generated from protobuf message ondewo.nlu.PlatformMapping
 */
export interface PlatformMapping {
    /**
     * Required. The project that the agent is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. If not set, it will set it empty.
     *
     * @generated from protobuf field: repeated ondewo.nlu.CustomPlatformInfo platform_info = 2;
     */
    platformInfo: CustomPlatformInfo[];
}
/**
 * This message is a request to run full text search
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchRequest
 */
export interface FullTextSearchRequest {
    /**
     * Required. The project that the agent is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * What to search for in the elastic server
     *
     * @generated from protobuf field: string term = 3;
     */
    term: string;
    /**
     * Composite string: current_index-0--page_size-10
     * The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 4;
     */
    pageToken: string;
}
/**
 * Type of query
 *
 * @generated from protobuf enum ondewo.nlu.FullTextSearchRequest.QueryType
 */
export declare enum FullTextSearchRequest_QueryType {
    /**
     * just a placeholder, has to start with zero
     *
     * @generated from protobuf enum value: ALL = 0;
     */
    ALL = 0,
    /**
     * @generated from protobuf enum value: OndewoEntityQuery = 1;
     */
    OndewoEntityQuery = 1,
    /**
     * @generated from protobuf enum value: OndewoEntityTypeQuery = 2;
     */
    OndewoEntityTypeQuery = 2,
    /**
     * @generated from protobuf enum value: OndewoEntitySynonymQuery = 3;
     */
    OndewoEntitySynonymQuery = 3,
    /**
     * @generated from protobuf enum value: OndewoIntentQuery = 4;
     */
    OndewoIntentQuery = 4,
    /**
     * @generated from protobuf enum value: OndewoIntentContextInQuery = 5;
     */
    OndewoIntentContextInQuery = 5,
    /**
     * @generated from protobuf enum value: OndewoIntentContextOutQuery = 6;
     */
    OndewoIntentContextOutQuery = 6,
    /**
     * @generated from protobuf enum value: OndewoIntentUsersaysQuery = 7;
     */
    OndewoIntentUsersaysQuery = 7,
    /**
     * @generated from protobuf enum value: OndewoIntentTagsQuery = 8;
     */
    OndewoIntentTagsQuery = 8,
    /**
     * @generated from protobuf enum value: OndewoIntentParametersQuery = 9;
     */
    OndewoIntentParametersQuery = 9,
    /**
     * @generated from protobuf enum value: OndewoIntentResponseQuery = 10;
     */
    OndewoIntentResponseQuery = 10
}
/**
 * This message is a response of full text search of entity type
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntityType
 */
export interface FullTextSearchResponseEntityType {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult entity_type_results = 3;
     */
    entityTypeResults: FullTextSearchResponseEntityType_EntityTypeSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult
 */
export interface FullTextSearchResponseEntityType_EntityTypeSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string language = 3;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 5;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 6;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 7;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of entity
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntity
 */
export interface FullTextSearchResponseEntity {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult entity_results = 3;
     */
    entityResults: FullTextSearchResponseEntity_EntitySearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult
 */
export interface FullTextSearchResponseEntity_EntitySearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string entity_type_name = 3;
     */
    entityTypeName: string;
    /**
     * @generated from protobuf field: string entity_type_display_name = 4;
     */
    entityTypeDisplayName: string;
    /**
     * @generated from protobuf field: string language = 5;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of synonym entity
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntitySynonym
 */
export interface FullTextSearchResponseEntitySynonym {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult entity_synonym_results = 3;
     */
    entitySynonymResults: FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
 */
export interface FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string entity_type_name = 3;
     */
    entityTypeName: string;
    /**
     * @generated from protobuf field: string entity_type_display_name = 4;
     */
    entityTypeDisplayName: string;
    /**
     * @generated from protobuf field: string entity_name = 5;
     */
    entityName: string;
    /**
     * @generated from protobuf field: string entity_display_name = 6;
     */
    entityDisplayName: string;
    /**
     * @generated from protobuf field: string language = 7;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 9;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 10;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 11;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntent
 */
export interface FullTextSearchResponseIntent {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult intent_results = 3;
     */
    intentResults: FullTextSearchResponseIntent_IntentSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult
 */
export interface FullTextSearchResponseIntent_IntentSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * @generated from protobuf field: string domain_name = 3;
     */
    domainName: string;
    /**
     * @generated from protobuf field: repeated string tags = 4;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 5;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent with context in
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentContextIn
 */
export interface FullTextSearchResponseIntentContextIn {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult intent_context_in_results = 3;
     */
    intentContextInResults: FullTextSearchResponseIntentContextIn_IntentContextInSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
 */
export interface FullTextSearchResponseIntentContextIn_IntentContextInSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string intent_name = 2;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 3;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 4;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 5;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent with context out
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentContextOut
 */
export interface FullTextSearchResponseIntentContextOut {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult intent_context_out_results = 3;
     */
    intentContextOutResults: FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
 */
export interface FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string intent_name = 2;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 3;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 4;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 5;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent with sentence
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentUsersays
 */
export interface FullTextSearchResponseIntentUsersays {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult intent_usersays_results = 3;
     */
    intentUsersaysResults: FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
 */
export interface FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * @generated from protobuf field: string text_as_entity_types = 3;
     */
    textAsEntityTypes: string;
    /**
     * @generated from protobuf field: string text_as_entity_values = 4;
     */
    textAsEntityValues: string;
    /**
     * @generated from protobuf field: string type = 5;
     */
    type: string;
    /**
     * @generated from protobuf field: string intent_name = 6;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 7;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 8;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 9;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 11;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 12;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 13;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent with tags
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentTags
 */
export interface FullTextSearchResponseIntentTags {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult intent_tags_results = 3;
     */
    intentTagsResults: FullTextSearchResponseIntentTags_IntentTagsSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult
 */
export interface FullTextSearchResponseIntentTags_IntentTagsSearchResult {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * @generated from protobuf field: string intent_name = 3;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 4;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 5;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 6;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 8;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 9;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 10;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent response
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentResponse
 */
export interface FullTextSearchResponseIntentResponse {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult intent_response_results = 3;
     */
    intentResponseResults: FullTextSearchResponseIntentResponse_IntentResponseSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result.
     * The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult
 */
export interface FullTextSearchResponseIntentResponse_IntentResponseSearchResult {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * @generated from protobuf field: string platform = 2;
     */
    platform: string;
    /**
     * @generated from protobuf field: string response_type = 3;
     */
    responseType: string;
    /**
     * @generated from protobuf field: string intent_name = 4;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 5;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 6;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 7;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 9;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 10;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 11;
     */
    modifiedBy: string;
}
/**
 * This message is a response of full text search of intent with parameters
 *
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentParameters
 */
export interface FullTextSearchResponseIntentParameters {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult intent_parameters_results = 3;
     */
    intentParametersResults: FullTextSearchResponseIntentParameters_IntentParametersSearchResult[];
    /**
     * @generated from protobuf field: string term = 4;
     */
    term: string;
    /**
     * @generated from protobuf field: string elastic_query = 5;
     */
    elasticQuery: string;
    /**
     * @generated from protobuf field: float time = 6;
     */
    time: number;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 7;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult
 */
export interface FullTextSearchResponseIntentParameters_IntentParametersSearchResult {
    /**
     * @generated from protobuf field: string parameter_name = 1;
     */
    parameterName: string;
    /**
     * @generated from protobuf field: string parameter_display_name = 2;
     */
    parameterDisplayName: string;
    /**
     * @generated from protobuf field: string intent_name = 3;
     */
    intentName: string;
    /**
     * @generated from protobuf field: string intent_display_name = 4;
     */
    intentDisplayName: string;
    /**
     * @generated from protobuf field: repeated string tags = 5;
     */
    tags: string[];
    /**
     * @generated from protobuf field: string language = 6;
     */
    language: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 8;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 9;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 10;
     */
    modifiedBy: string;
}
/**
 * This message is a request to reindex agent
 *
 * @generated from protobuf message ondewo.nlu.ReindexAgentRequest
 */
export interface ReindexAgentRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional, useful for versioning reasons of the agent data
     *
     * @generated from protobuf field: string branch_name = 2;
     */
    branchName: string;
    /**
     * Optional, useful for reindexing specific indices in the future
     *
     * @generated from protobuf field: repeated ondewo.nlu.FullTextSearchRequest.QueryType index_types = 3;
     */
    indexTypes: FullTextSearchRequest_QueryType[];
}
/**
 * Structure of agent view
 *
 * @generated from protobuf enum ondewo.nlu.AgentView
 */
export declare enum AgentView {
    /**
     * Unspecified agent view: the view is defined by the call:
     * - CreateAgent: AGENT_VIEW_SHALLOW
     * - UpdateAgent: AGENT_VIEW_SHALLOW
     * - GetAgent: AGENT_VIEW_FULL
     * - ListAgents: AGENT_VIEW_SHALLOW
     *
     * @generated from protobuf enum value: AGENT_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Full agent view: populate all the fields of the Agent message including configs.
     *
     * @generated from protobuf enum value: AGENT_VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * Shallow agent view: populates all the fields except configs.
     *
     * @generated from protobuf enum value: AGENT_VIEW_SHALLOW = 2;
     */
    SHALLOW = 2,
    /**
     * Minimum view including only agent UUID and agent display name
     *
     * @generated from protobuf enum value: AGENT_VIEW_MINIMUM = 3;
     */
    MINIMUM = 3
}
/**
 * Defines when to initiate newly created agent when training started
 *
 * @generated from protobuf enum ondewo.nlu.InitiationProtocol
 */
export declare enum InitiationProtocol {
    /**
     * after cache successfully built and after each model trained the agent will be updated
     *
     * @generated from protobuf enum value: AS_SOON_AS_POSSIBLE = 0;
     */
    AS_SOON_AS_POSSIBLE = 0,
    /**
     * after cache successfully built and all the active models successfully trained
     *
     * @generated from protobuf enum value: WHEN_TRAINED = 1;
     */
    WHEN_TRAINED = 1,
    /**
     * do not initiate
     *
     * @generated from protobuf enum value: NEVER = 2;
     */
    NEVER = 2
}
/**
 * Type of reports about the domain of the agent
 *
 * @generated from protobuf enum ondewo.nlu.ReportType
 */
export declare enum ReportType {
    /**
     * will return all reports as files of specified format compressed into a single zipfile
     *
     * @generated from protobuf enum value: ALL = 0;
     */
    ALL = 0,
    /**
     * statistics of the language specific part of the intent database
     *
     * @generated from protobuf enum value: INTENT_PER_LANGUAGE = 1;
     */
    INTENT_PER_LANGUAGE = 1,
    /**
     * statistics of the language specific part of the entity database
     *
     * @generated from protobuf enum value: ENTITY_PER_LANGUAGE = 2;
     */
    ENTITY_PER_LANGUAGE = 2,
    /**
     * report on collision of the entity synonyms
     *
     * @generated from protobuf enum value: ENTITY_COLLISION = 3;
     */
    ENTITY_COLLISION = 3,
    /**
     * report of statistics of the general (relevant to all supported languages) part of intent database
     *
     * @generated from protobuf enum value: INTENT_GENERAL = 4;
     */
    INTENT_GENERAL = 4
}
/**
 * Type of reports about the domain of the agent
 *
 * @generated from protobuf enum ondewo.nlu.SessionsReportType
 */
export declare enum SessionsReportType {
    /**
     * report on sessions. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSIONS = 0;
     */
    SESSIONS = 0,
    /**
     * report on session steps. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_STEPS = 1;
     */
    SESSION_STEPS = 1,
    /**
     * report top x detected intents in session. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_TOP_X_INTENTS = 2;
     */
    SESSION_TOP_X_INTENTS = 2,
    /**
     * report top x detected entity types. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_TOP_X_ENTITY_TYPES = 3;
     */
    SESSION_TOP_X_ENTITY_TYPES = 3,
    /**
     * report top x detected entity values Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_TOP_X_ENTITY_VALUES = 4;
     */
    SESSION_TOP_X_ENTITY_VALUES = 4,
    /**
     * report top x users. Supports SessionFilter to filter (Coming soon! Not yet implemented)
     *
     * @generated from protobuf enum value: SESSION_TOP_X_USERS = 5;
     */
    SESSION_TOP_X_USERS = 5,
    /**
     * report top x labels. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_TOP_X_LABELS = 6;
     */
    SESSION_TOP_X_LABELS = 6,
    /**
     * report top x tags. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_TOP_X_TAGS = 7;
     */
    SESSION_TOP_X_TAGS = 7,
    /**
     * report top x phone_numbers. Supports SessionFilter to filter (Coming soon! Not yet implemented)
     *
     * @generated from protobuf enum value: SESSION_TOP_X_PHONE_NUMBERS = 8;
     */
    SESSION_TOP_X_PHONE_NUMBERS = 8,
    /**
     * report on human handovers. Supports SessionFilter to filter (Coming soon! Not yet implemented)
     *
     * @generated from protobuf enum value: SESSION_HUMAN_HANDOVERS = 9;
     */
    SESSION_HUMAN_HANDOVERS = 9,
    /**
     * report based on a query issued tables with session information.
     * Requires to define <code>sql_query</code> in request.
     *
     * Allowed tables to query are:
     * * session
     * * session_context
     * * session_step
     * * session_step_context
     * * session_step_detect_entity
     * * session_step_detect_intent
     * * session_step_detect_intent_context_in
     * * session_step_detect_intent_context_out
     * * session_step_detect_intent_context_out
     * * session_step_detect_intent_label
     * * session_step_detect_intent_tag
     *
     * Example:
     *   <code>SELECT ... FROM session</code>
     *   <code>SELECT ... FROM session, session_steps</code>
     *
     * @generated from protobuf enum value: SESSION_SQL_QUERY = 10;
     */
    SESSION_SQL_QUERY = 10,
    /**
     * report least x detected intents in session. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_INTENTS = 11;
     */
    SESSION_LEAST_X_INTENTS = 11,
    /**
     * report least x detected entity types. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_ENTITY_TYPES = 12;
     */
    SESSION_LEAST_X_ENTITY_TYPES = 12,
    /**
     * report least x detected entity values Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_ENTITY_VALUES = 13;
     */
    SESSION_LEAST_X_ENTITY_VALUES = 13,
    /**
     * report least x users. Supports SessionFilter to filter (Coming soon! Not yet implemented)
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_USERS = 14;
     */
    SESSION_LEAST_X_USERS = 14,
    /**
     * report least x labels. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_LABELS = 15;
     */
    SESSION_LEAST_X_LABELS = 15,
    /**
     * report least x tags. Supports SessionFilter to filter
     *
     * @generated from protobuf enum value: SESSION_LEAST_X_TAGS = 16;
     */
    SESSION_LEAST_X_TAGS = 16,
    /**
     * report total numbers of e.g. sessions, session steps, etc.
     *
     * @generated from protobuf enum value: TOTAL_STATISTICS = 17;
     */
    TOTAL_STATISTICS = 17
}
/**
 * File formats for reports
 *
 * @generated from protobuf enum ondewo.nlu.ReportFormat
 */
export declare enum ReportFormat {
    /**
     * CSV (comma separated values) file format
     *
     * @generated from protobuf enum value: CSV = 0;
     */
    CSV = 0,
    /**
     * HTML file format
     *
     * @generated from protobuf enum value: HTML = 1;
     */
    HTML = 1,
    /**
     * JSON file format
     *
     * @generated from protobuf enum value: JSON = 2;
     */
    JSON = 2
}
/**
 * Type of Agent / Project status
 *
 * @generated from protobuf enum ondewo.nlu.AgentStatus
 */
export declare enum AgentStatus {
    /**
     * If project is active, all its endpoints are active
     *
     * @generated from protobuf enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * If project is inactive:
     * * members of the project do not see the project anymore except users with project role "PROJECT_ADMIN" and users with server role "SERVER_ADMIN"
     * * nothing is allowed (no endpoint) on the project except "SetAgentStatus" by PROJECT_ADMIN or SERVER_ADMIN
     *
     * @generated from protobuf enum value: INACTIVE = 1;
     */
    INACTIVE = 1
}
declare class Agent$Type extends MessageType<Agent> {
    constructor();
    create(value?: PartialMessage<Agent>): Agent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Agent): Agent;
    internalBinaryWrite(message: Agent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Agent
 */
export declare const Agent: Agent$Type;
declare class AgentWithOwner$Type extends MessageType<AgentWithOwner> {
    constructor();
    create(value?: PartialMessage<AgentWithOwner>): AgentWithOwner;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentWithOwner): AgentWithOwner;
    internalBinaryWrite(message: AgentWithOwner, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AgentWithOwner
 */
export declare const AgentWithOwner: AgentWithOwner$Type;
declare class AgentOfUserWithOwner$Type extends MessageType<AgentOfUserWithOwner> {
    constructor();
    create(value?: PartialMessage<AgentOfUserWithOwner>): AgentOfUserWithOwner;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentOfUserWithOwner): AgentOfUserWithOwner;
    internalBinaryWrite(message: AgentOfUserWithOwner, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AgentOfUserWithOwner
 */
export declare const AgentOfUserWithOwner: AgentOfUserWithOwner$Type;
declare class CreateAgentRequest$Type extends MessageType<CreateAgentRequest> {
    constructor();
    create(value?: PartialMessage<CreateAgentRequest>): CreateAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateAgentRequest): CreateAgentRequest;
    internalBinaryWrite(message: CreateAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateAgentRequest
 */
export declare const CreateAgentRequest: CreateAgentRequest$Type;
declare class UpdateAgentRequest$Type extends MessageType<UpdateAgentRequest> {
    constructor();
    create(value?: PartialMessage<UpdateAgentRequest>): UpdateAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAgentRequest): UpdateAgentRequest;
    internalBinaryWrite(message: UpdateAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateAgentRequest
 */
export declare const UpdateAgentRequest: UpdateAgentRequest$Type;
declare class DeleteAgentRequest$Type extends MessageType<DeleteAgentRequest> {
    constructor();
    create(value?: PartialMessage<DeleteAgentRequest>): DeleteAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteAgentRequest): DeleteAgentRequest;
    internalBinaryWrite(message: DeleteAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteAgentRequest
 */
export declare const DeleteAgentRequest: DeleteAgentRequest$Type;
declare class GetAgentRequest$Type extends MessageType<GetAgentRequest> {
    constructor();
    create(value?: PartialMessage<GetAgentRequest>): GetAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAgentRequest): GetAgentRequest;
    internalBinaryWrite(message: GetAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAgentRequest
 */
export declare const GetAgentRequest: GetAgentRequest$Type;
declare class ListAgentsRequest$Type extends MessageType<ListAgentsRequest> {
    constructor();
    create(value?: PartialMessage<ListAgentsRequest>): ListAgentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAgentsRequest): ListAgentsRequest;
    internalBinaryWrite(message: ListAgentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAgentsRequest
 */
export declare const ListAgentsRequest: ListAgentsRequest$Type;
declare class ListAgentsResponse$Type extends MessageType<ListAgentsResponse> {
    constructor();
    create(value?: PartialMessage<ListAgentsResponse>): ListAgentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAgentsResponse): ListAgentsResponse;
    internalBinaryWrite(message: ListAgentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAgentsResponse
 */
export declare const ListAgentsResponse: ListAgentsResponse$Type;
declare class ListAgentsOfUserResponse$Type extends MessageType<ListAgentsOfUserResponse> {
    constructor();
    create(value?: PartialMessage<ListAgentsOfUserResponse>): ListAgentsOfUserResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAgentsOfUserResponse): ListAgentsOfUserResponse;
    internalBinaryWrite(message: ListAgentsOfUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAgentsOfUserResponse
 */
export declare const ListAgentsOfUserResponse: ListAgentsOfUserResponse$Type;
declare class TrainAgentRequest$Type extends MessageType<TrainAgentRequest> {
    constructor();
    create(value?: PartialMessage<TrainAgentRequest>): TrainAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrainAgentRequest): TrainAgentRequest;
    internalBinaryWrite(message: TrainAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.TrainAgentRequest
 */
export declare const TrainAgentRequest: TrainAgentRequest$Type;
declare class BuildCacheRequest$Type extends MessageType<BuildCacheRequest> {
    constructor();
    create(value?: PartialMessage<BuildCacheRequest>): BuildCacheRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuildCacheRequest): BuildCacheRequest;
    internalBinaryWrite(message: BuildCacheRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BuildCacheRequest
 */
export declare const BuildCacheRequest: BuildCacheRequest$Type;
declare class ExportAgentRequest$Type extends MessageType<ExportAgentRequest> {
    constructor();
    create(value?: PartialMessage<ExportAgentRequest>): ExportAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportAgentRequest): ExportAgentRequest;
    internalBinaryWrite(message: ExportAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportAgentRequest
 */
export declare const ExportAgentRequest: ExportAgentRequest$Type;
declare class ExportAgentResponse$Type extends MessageType<ExportAgentResponse> {
    constructor();
    create(value?: PartialMessage<ExportAgentResponse>): ExportAgentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportAgentResponse): ExportAgentResponse;
    internalBinaryWrite(message: ExportAgentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportAgentResponse
 */
export declare const ExportAgentResponse: ExportAgentResponse$Type;
declare class ExportBenchmarkAgentRequest$Type extends MessageType<ExportBenchmarkAgentRequest> {
    constructor();
    create(value?: PartialMessage<ExportBenchmarkAgentRequest>): ExportBenchmarkAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportBenchmarkAgentRequest): ExportBenchmarkAgentRequest;
    internalBinaryWrite(message: ExportBenchmarkAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportBenchmarkAgentRequest
 */
export declare const ExportBenchmarkAgentRequest: ExportBenchmarkAgentRequest$Type;
declare class ExportBenchmarkAgentResponse$Type extends MessageType<ExportBenchmarkAgentResponse> {
    constructor();
    create(value?: PartialMessage<ExportBenchmarkAgentResponse>): ExportBenchmarkAgentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportBenchmarkAgentResponse): ExportBenchmarkAgentResponse;
    private binaryReadMap2;
    internalBinaryWrite(message: ExportBenchmarkAgentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportBenchmarkAgentResponse
 */
export declare const ExportBenchmarkAgentResponse: ExportBenchmarkAgentResponse$Type;
declare class OptimizeRankingMatchRequest$Type extends MessageType<OptimizeRankingMatchRequest> {
    constructor();
    create(value?: PartialMessage<OptimizeRankingMatchRequest>): OptimizeRankingMatchRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OptimizeRankingMatchRequest): OptimizeRankingMatchRequest;
    internalBinaryWrite(message: OptimizeRankingMatchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.OptimizeRankingMatchRequest
 */
export declare const OptimizeRankingMatchRequest: OptimizeRankingMatchRequest$Type;
declare class RankingMatchOptimizationConfig$Type extends MessageType<RankingMatchOptimizationConfig> {
    constructor();
    create(value?: PartialMessage<RankingMatchOptimizationConfig>): RankingMatchOptimizationConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RankingMatchOptimizationConfig): RankingMatchOptimizationConfig;
    internalBinaryWrite(message: RankingMatchOptimizationConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.RankingMatchOptimizationConfig
 */
export declare const RankingMatchOptimizationConfig: RankingMatchOptimizationConfig$Type;
declare class OptimizeRankingMatchResponse$Type extends MessageType<OptimizeRankingMatchResponse> {
    constructor();
    create(value?: PartialMessage<OptimizeRankingMatchResponse>): OptimizeRankingMatchResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OptimizeRankingMatchResponse): OptimizeRankingMatchResponse;
    internalBinaryWrite(message: OptimizeRankingMatchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.OptimizeRankingMatchResponse
 */
export declare const OptimizeRankingMatchResponse: OptimizeRankingMatchResponse$Type;
declare class ImportAgentRequest$Type extends MessageType<ImportAgentRequest> {
    constructor();
    create(value?: PartialMessage<ImportAgentRequest>): ImportAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ImportAgentRequest): ImportAgentRequest;
    internalBinaryWrite(message: ImportAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ImportAgentRequest
 */
export declare const ImportAgentRequest: ImportAgentRequest$Type;
declare class RestoreAgentRequest$Type extends MessageType<RestoreAgentRequest> {
    constructor();
    create(value?: PartialMessage<RestoreAgentRequest>): RestoreAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RestoreAgentRequest): RestoreAgentRequest;
    internalBinaryWrite(message: RestoreAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.RestoreAgentRequest
 */
export declare const RestoreAgentRequest: RestoreAgentRequest$Type;
declare class GetAgentStatisticsRequest$Type extends MessageType<GetAgentStatisticsRequest> {
    constructor();
    create(value?: PartialMessage<GetAgentStatisticsRequest>): GetAgentStatisticsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAgentStatisticsRequest): GetAgentStatisticsRequest;
    internalBinaryWrite(message: GetAgentStatisticsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAgentStatisticsRequest
 */
export declare const GetAgentStatisticsRequest: GetAgentStatisticsRequest$Type;
declare class GetAgentStatisticsResponse$Type extends MessageType<GetAgentStatisticsResponse> {
    constructor();
    create(value?: PartialMessage<GetAgentStatisticsResponse>): GetAgentStatisticsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAgentStatisticsResponse): GetAgentStatisticsResponse;
    internalBinaryWrite(message: GetAgentStatisticsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAgentStatisticsResponse
 */
export declare const GetAgentStatisticsResponse: GetAgentStatisticsResponse$Type;
declare class GetSessionsStatisticsRequest$Type extends MessageType<GetSessionsStatisticsRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionsStatisticsRequest>): GetSessionsStatisticsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionsStatisticsRequest): GetSessionsStatisticsRequest;
    internalBinaryWrite(message: GetSessionsStatisticsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionsStatisticsRequest
 */
export declare const GetSessionsStatisticsRequest: GetSessionsStatisticsRequest$Type;
declare class GetSessionsStatisticsResponse$Type extends MessageType<GetSessionsStatisticsResponse> {
    constructor();
    create(value?: PartialMessage<GetSessionsStatisticsResponse>): GetSessionsStatisticsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionsStatisticsResponse): GetSessionsStatisticsResponse;
    internalBinaryWrite(message: GetSessionsStatisticsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionsStatisticsResponse
 */
export declare const GetSessionsStatisticsResponse: GetSessionsStatisticsResponse$Type;
declare class AddUserToProjectRequest$Type extends MessageType<AddUserToProjectRequest> {
    constructor();
    create(value?: PartialMessage<AddUserToProjectRequest>): AddUserToProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddUserToProjectRequest): AddUserToProjectRequest;
    internalBinaryWrite(message: AddUserToProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddUserToProjectRequest
 */
export declare const AddUserToProjectRequest: AddUserToProjectRequest$Type;
declare class RemoveUserFromProjectRequest$Type extends MessageType<RemoveUserFromProjectRequest> {
    constructor();
    create(value?: PartialMessage<RemoveUserFromProjectRequest>): RemoveUserFromProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemoveUserFromProjectRequest): RemoveUserFromProjectRequest;
    internalBinaryWrite(message: RemoveUserFromProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.RemoveUserFromProjectRequest
 */
export declare const RemoveUserFromProjectRequest: RemoveUserFromProjectRequest$Type;
declare class ListUsersInProjectRequest$Type extends MessageType<ListUsersInProjectRequest> {
    constructor();
    create(value?: PartialMessage<ListUsersInProjectRequest>): ListUsersInProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersInProjectRequest): ListUsersInProjectRequest;
    internalBinaryWrite(message: ListUsersInProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUsersInProjectRequest
 */
export declare const ListUsersInProjectRequest: ListUsersInProjectRequest$Type;
declare class UserInProject$Type extends MessageType<UserInProject> {
    constructor();
    create(value?: PartialMessage<UserInProject>): UserInProject;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserInProject): UserInProject;
    internalBinaryWrite(message: UserInProject, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UserInProject
 */
export declare const UserInProject: UserInProject$Type;
declare class ListUsersInProjectResponse$Type extends MessageType<ListUsersInProjectResponse> {
    constructor();
    create(value?: PartialMessage<ListUsersInProjectResponse>): ListUsersInProjectResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersInProjectResponse): ListUsersInProjectResponse;
    internalBinaryWrite(message: ListUsersInProjectResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUsersInProjectResponse
 */
export declare const ListUsersInProjectResponse: ListUsersInProjectResponse$Type;
declare class GetPlatformInfoResponse$Type extends MessageType<GetPlatformInfoResponse> {
    constructor();
    create(value?: PartialMessage<GetPlatformInfoResponse>): GetPlatformInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlatformInfoResponse): GetPlatformInfoResponse;
    internalBinaryWrite(message: GetPlatformInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetPlatformInfoResponse
 */
export declare const GetPlatformInfoResponse: GetPlatformInfoResponse$Type;
declare class ListProjectPermissionsRequest$Type extends MessageType<ListProjectPermissionsRequest> {
    constructor();
    create(value?: PartialMessage<ListProjectPermissionsRequest>): ListProjectPermissionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListProjectPermissionsRequest): ListProjectPermissionsRequest;
    internalBinaryWrite(message: ListProjectPermissionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListProjectPermissionsRequest
 */
export declare const ListProjectPermissionsRequest: ListProjectPermissionsRequest$Type;
declare class ListProjectPermissionsResponse$Type extends MessageType<ListProjectPermissionsResponse> {
    constructor();
    create(value?: PartialMessage<ListProjectPermissionsResponse>): ListProjectPermissionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListProjectPermissionsResponse): ListProjectPermissionsResponse;
    internalBinaryWrite(message: ListProjectPermissionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListProjectPermissionsResponse
 */
export declare const ListProjectPermissionsResponse: ListProjectPermissionsResponse$Type;
declare class SetAgentStatusRequest$Type extends MessageType<SetAgentStatusRequest> {
    constructor();
    create(value?: PartialMessage<SetAgentStatusRequest>): SetAgentStatusRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetAgentStatusRequest): SetAgentStatusRequest;
    internalBinaryWrite(message: SetAgentStatusRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetAgentStatusRequest
 */
export declare const SetAgentStatusRequest: SetAgentStatusRequest$Type;
declare class AgentSorting$Type extends MessageType<AgentSorting> {
    constructor();
    create(value?: PartialMessage<AgentSorting>): AgentSorting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentSorting): AgentSorting;
    internalBinaryWrite(message: AgentSorting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AgentSorting
 */
export declare const AgentSorting: AgentSorting$Type;
declare class SetResourcesRequest$Type extends MessageType<SetResourcesRequest> {
    constructor();
    create(value?: PartialMessage<SetResourcesRequest>): SetResourcesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetResourcesRequest): SetResourcesRequest;
    internalBinaryWrite(message: SetResourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetResourcesRequest
 */
export declare const SetResourcesRequest: SetResourcesRequest$Type;
declare class DeleteResourcesRequest$Type extends MessageType<DeleteResourcesRequest> {
    constructor();
    create(value?: PartialMessage<DeleteResourcesRequest>): DeleteResourcesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteResourcesRequest): DeleteResourcesRequest;
    internalBinaryWrite(message: DeleteResourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteResourcesRequest
 */
export declare const DeleteResourcesRequest: DeleteResourcesRequest$Type;
declare class ExportResourcesRequest$Type extends MessageType<ExportResourcesRequest> {
    constructor();
    create(value?: PartialMessage<ExportResourcesRequest>): ExportResourcesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportResourcesRequest): ExportResourcesRequest;
    internalBinaryWrite(message: ExportResourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportResourcesRequest
 */
export declare const ExportResourcesRequest: ExportResourcesRequest$Type;
declare class ExportResourcesResponse$Type extends MessageType<ExportResourcesResponse> {
    constructor();
    create(value?: PartialMessage<ExportResourcesResponse>): ExportResourcesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExportResourcesResponse): ExportResourcesResponse;
    internalBinaryWrite(message: ExportResourcesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExportResourcesResponse
 */
export declare const ExportResourcesResponse: ExportResourcesResponse$Type;
declare class GetModelStatusesRequest$Type extends MessageType<GetModelStatusesRequest> {
    constructor();
    create(value?: PartialMessage<GetModelStatusesRequest>): GetModelStatusesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetModelStatusesRequest): GetModelStatusesRequest;
    internalBinaryWrite(message: GetModelStatusesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetModelStatusesRequest
 */
export declare const GetModelStatusesRequest: GetModelStatusesRequest$Type;
declare class ModelStatus$Type extends MessageType<ModelStatus> {
    constructor();
    create(value?: PartialMessage<ModelStatus>): ModelStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModelStatus): ModelStatus;
    internalBinaryWrite(message: ModelStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ModelStatus
 */
export declare const ModelStatus: ModelStatus$Type;
declare class GetModelStatusesResponse$Type extends MessageType<GetModelStatusesResponse> {
    constructor();
    create(value?: PartialMessage<GetModelStatusesResponse>): GetModelStatusesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetModelStatusesResponse): GetModelStatusesResponse;
    internalBinaryWrite(message: GetModelStatusesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetModelStatusesResponse
 */
export declare const GetModelStatusesResponse: GetModelStatusesResponse$Type;
declare class CustomPlatformInfo$Type extends MessageType<CustomPlatformInfo> {
    constructor();
    create(value?: PartialMessage<CustomPlatformInfo>): CustomPlatformInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomPlatformInfo): CustomPlatformInfo;
    internalBinaryWrite(message: CustomPlatformInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CustomPlatformInfo
 */
export declare const CustomPlatformInfo: CustomPlatformInfo$Type;
declare class GetPlatformMappingRequest$Type extends MessageType<GetPlatformMappingRequest> {
    constructor();
    create(value?: PartialMessage<GetPlatformMappingRequest>): GetPlatformMappingRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlatformMappingRequest): GetPlatformMappingRequest;
    internalBinaryWrite(message: GetPlatformMappingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetPlatformMappingRequest
 */
export declare const GetPlatformMappingRequest: GetPlatformMappingRequest$Type;
declare class PlatformMapping$Type extends MessageType<PlatformMapping> {
    constructor();
    create(value?: PartialMessage<PlatformMapping>): PlatformMapping;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlatformMapping): PlatformMapping;
    internalBinaryWrite(message: PlatformMapping, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.PlatformMapping
 */
export declare const PlatformMapping: PlatformMapping$Type;
declare class FullTextSearchRequest$Type extends MessageType<FullTextSearchRequest> {
    constructor();
    create(value?: PartialMessage<FullTextSearchRequest>): FullTextSearchRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchRequest): FullTextSearchRequest;
    internalBinaryWrite(message: FullTextSearchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchRequest
 */
export declare const FullTextSearchRequest: FullTextSearchRequest$Type;
declare class FullTextSearchResponseEntityType$Type extends MessageType<FullTextSearchResponseEntityType> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntityType>): FullTextSearchResponseEntityType;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntityType): FullTextSearchResponseEntityType;
    internalBinaryWrite(message: FullTextSearchResponseEntityType, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntityType
 */
export declare const FullTextSearchResponseEntityType: FullTextSearchResponseEntityType$Type;
declare class FullTextSearchResponseEntityType_EntityTypeSearchResult$Type extends MessageType<FullTextSearchResponseEntityType_EntityTypeSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntityType_EntityTypeSearchResult>): FullTextSearchResponseEntityType_EntityTypeSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntityType_EntityTypeSearchResult): FullTextSearchResponseEntityType_EntityTypeSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseEntityType_EntityTypeSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult
 */
export declare const FullTextSearchResponseEntityType_EntityTypeSearchResult: FullTextSearchResponseEntityType_EntityTypeSearchResult$Type;
declare class FullTextSearchResponseEntity$Type extends MessageType<FullTextSearchResponseEntity> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntity>): FullTextSearchResponseEntity;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntity): FullTextSearchResponseEntity;
    internalBinaryWrite(message: FullTextSearchResponseEntity, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntity
 */
export declare const FullTextSearchResponseEntity: FullTextSearchResponseEntity$Type;
declare class FullTextSearchResponseEntity_EntitySearchResult$Type extends MessageType<FullTextSearchResponseEntity_EntitySearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntity_EntitySearchResult>): FullTextSearchResponseEntity_EntitySearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntity_EntitySearchResult): FullTextSearchResponseEntity_EntitySearchResult;
    internalBinaryWrite(message: FullTextSearchResponseEntity_EntitySearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult
 */
export declare const FullTextSearchResponseEntity_EntitySearchResult: FullTextSearchResponseEntity_EntitySearchResult$Type;
declare class FullTextSearchResponseEntitySynonym$Type extends MessageType<FullTextSearchResponseEntitySynonym> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntitySynonym>): FullTextSearchResponseEntitySynonym;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntitySynonym): FullTextSearchResponseEntitySynonym;
    internalBinaryWrite(message: FullTextSearchResponseEntitySynonym, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntitySynonym
 */
export declare const FullTextSearchResponseEntitySynonym: FullTextSearchResponseEntitySynonym$Type;
declare class FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult$Type extends MessageType<FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult>): FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult): FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult
 */
export declare const FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult: FullTextSearchResponseEntitySynonym_EntitySynonymSearchResult$Type;
declare class FullTextSearchResponseIntent$Type extends MessageType<FullTextSearchResponseIntent> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntent>): FullTextSearchResponseIntent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntent): FullTextSearchResponseIntent;
    internalBinaryWrite(message: FullTextSearchResponseIntent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntent
 */
export declare const FullTextSearchResponseIntent: FullTextSearchResponseIntent$Type;
declare class FullTextSearchResponseIntent_IntentSearchResult$Type extends MessageType<FullTextSearchResponseIntent_IntentSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntent_IntentSearchResult>): FullTextSearchResponseIntent_IntentSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntent_IntentSearchResult): FullTextSearchResponseIntent_IntentSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntent_IntentSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult
 */
export declare const FullTextSearchResponseIntent_IntentSearchResult: FullTextSearchResponseIntent_IntentSearchResult$Type;
declare class FullTextSearchResponseIntentContextIn$Type extends MessageType<FullTextSearchResponseIntentContextIn> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentContextIn>): FullTextSearchResponseIntentContextIn;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentContextIn): FullTextSearchResponseIntentContextIn;
    internalBinaryWrite(message: FullTextSearchResponseIntentContextIn, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentContextIn
 */
export declare const FullTextSearchResponseIntentContextIn: FullTextSearchResponseIntentContextIn$Type;
declare class FullTextSearchResponseIntentContextIn_IntentContextInSearchResult$Type extends MessageType<FullTextSearchResponseIntentContextIn_IntentContextInSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentContextIn_IntentContextInSearchResult>): FullTextSearchResponseIntentContextIn_IntentContextInSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentContextIn_IntentContextInSearchResult): FullTextSearchResponseIntentContextIn_IntentContextInSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentContextIn_IntentContextInSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult
 */
export declare const FullTextSearchResponseIntentContextIn_IntentContextInSearchResult: FullTextSearchResponseIntentContextIn_IntentContextInSearchResult$Type;
declare class FullTextSearchResponseIntentContextOut$Type extends MessageType<FullTextSearchResponseIntentContextOut> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentContextOut>): FullTextSearchResponseIntentContextOut;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentContextOut): FullTextSearchResponseIntentContextOut;
    internalBinaryWrite(message: FullTextSearchResponseIntentContextOut, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentContextOut
 */
export declare const FullTextSearchResponseIntentContextOut: FullTextSearchResponseIntentContextOut$Type;
declare class FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult$Type extends MessageType<FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult>): FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult): FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult
 */
export declare const FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult: FullTextSearchResponseIntentContextOut_IntentContextOutSearchResult$Type;
declare class FullTextSearchResponseIntentUsersays$Type extends MessageType<FullTextSearchResponseIntentUsersays> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentUsersays>): FullTextSearchResponseIntentUsersays;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentUsersays): FullTextSearchResponseIntentUsersays;
    internalBinaryWrite(message: FullTextSearchResponseIntentUsersays, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentUsersays
 */
export declare const FullTextSearchResponseIntentUsersays: FullTextSearchResponseIntentUsersays$Type;
declare class FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult$Type extends MessageType<FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult>): FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult): FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult
 */
export declare const FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult: FullTextSearchResponseIntentUsersays_IntentUsersaysSearchResult$Type;
declare class FullTextSearchResponseIntentTags$Type extends MessageType<FullTextSearchResponseIntentTags> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentTags>): FullTextSearchResponseIntentTags;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentTags): FullTextSearchResponseIntentTags;
    internalBinaryWrite(message: FullTextSearchResponseIntentTags, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentTags
 */
export declare const FullTextSearchResponseIntentTags: FullTextSearchResponseIntentTags$Type;
declare class FullTextSearchResponseIntentTags_IntentTagsSearchResult$Type extends MessageType<FullTextSearchResponseIntentTags_IntentTagsSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentTags_IntentTagsSearchResult>): FullTextSearchResponseIntentTags_IntentTagsSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentTags_IntentTagsSearchResult): FullTextSearchResponseIntentTags_IntentTagsSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentTags_IntentTagsSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult
 */
export declare const FullTextSearchResponseIntentTags_IntentTagsSearchResult: FullTextSearchResponseIntentTags_IntentTagsSearchResult$Type;
declare class FullTextSearchResponseIntentResponse$Type extends MessageType<FullTextSearchResponseIntentResponse> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentResponse>): FullTextSearchResponseIntentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentResponse): FullTextSearchResponseIntentResponse;
    internalBinaryWrite(message: FullTextSearchResponseIntentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentResponse
 */
export declare const FullTextSearchResponseIntentResponse: FullTextSearchResponseIntentResponse$Type;
declare class FullTextSearchResponseIntentResponse_IntentResponseSearchResult$Type extends MessageType<FullTextSearchResponseIntentResponse_IntentResponseSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentResponse_IntentResponseSearchResult>): FullTextSearchResponseIntentResponse_IntentResponseSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentResponse_IntentResponseSearchResult): FullTextSearchResponseIntentResponse_IntentResponseSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentResponse_IntentResponseSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult
 */
export declare const FullTextSearchResponseIntentResponse_IntentResponseSearchResult: FullTextSearchResponseIntentResponse_IntentResponseSearchResult$Type;
declare class FullTextSearchResponseIntentParameters$Type extends MessageType<FullTextSearchResponseIntentParameters> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentParameters>): FullTextSearchResponseIntentParameters;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentParameters): FullTextSearchResponseIntentParameters;
    internalBinaryWrite(message: FullTextSearchResponseIntentParameters, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentParameters
 */
export declare const FullTextSearchResponseIntentParameters: FullTextSearchResponseIntentParameters$Type;
declare class FullTextSearchResponseIntentParameters_IntentParametersSearchResult$Type extends MessageType<FullTextSearchResponseIntentParameters_IntentParametersSearchResult> {
    constructor();
    create(value?: PartialMessage<FullTextSearchResponseIntentParameters_IntentParametersSearchResult>): FullTextSearchResponseIntentParameters_IntentParametersSearchResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FullTextSearchResponseIntentParameters_IntentParametersSearchResult): FullTextSearchResponseIntentParameters_IntentParametersSearchResult;
    internalBinaryWrite(message: FullTextSearchResponseIntentParameters_IntentParametersSearchResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult
 */
export declare const FullTextSearchResponseIntentParameters_IntentParametersSearchResult: FullTextSearchResponseIntentParameters_IntentParametersSearchResult$Type;
declare class ReindexAgentRequest$Type extends MessageType<ReindexAgentRequest> {
    constructor();
    create(value?: PartialMessage<ReindexAgentRequest>): ReindexAgentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReindexAgentRequest): ReindexAgentRequest;
    internalBinaryWrite(message: ReindexAgentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ReindexAgentRequest
 */
export declare const ReindexAgentRequest: ReindexAgentRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Agents
 */
export declare const Agents: ServiceType;
export {};
