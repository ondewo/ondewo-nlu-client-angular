import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FieldMask } from "../../google/protobuf/field_mask";
import { SortingMode } from "./common";
import { Struct } from "../../google/protobuf/struct";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * Message representing a CCAI service project
 *
 * @generated from protobuf message ondewo.nlu.CcaiProject
 */
export interface CcaiProject {
    /**
     * Resource name of the CCAI service project
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The display name of this ccai project.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Optional. Resource name of the user who is the owner of the project.
     *
     * @generated from protobuf field: string owner_name = 3;
     */
    ownerName: string;
    /**
     * Map of two letter language codes to lists of CcaiServiceList
     * Two-letter language codes following ISO 639-1 (see https://en.wikipedia.org/wiki/ISO_639-1)
     *
     * @generated from protobuf field: map<string, ondewo.nlu.CcaiServiceList> ccai_services_map = 4;
     */
    ccaiServicesMap: {
        [key: string]: CcaiServiceList;
    };
    /**
     * The status of the ccai project.
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProjectStatus ccai_project_status = 5;
     */
    ccaiProjectStatus: CcaiProjectStatus;
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
     * User id in the form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in the form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
    /**
     * Required. Associated NLU agent
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 10;
     */
    nluProjectName: string;
}
/**
 * Message representing a list of CCAI service services
 *
 * @generated from protobuf message ondewo.nlu.CcaiServiceList
 */
export interface CcaiServiceList {
    /**
     * CCAI service services
     *
     * @generated from protobuf field: repeated ondewo.nlu.CcaiService ccai_services = 1;
     */
    ccaiServices: CcaiService[];
}
/**
 * Definition of a Call Center AI (CCAI service) Service.
 *
 * @generated from protobuf message ondewo.nlu.CcaiService
 */
export interface CcaiService {
    /**
     * Resource name of the service. Must be unique.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Display name for better identification.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Language code representing the service language
     * Format (e.g., "en" for English, "de" for German).
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * gRPC host for communication with the specified port.
     *
     * @generated from protobuf field: string grpc_host = 4;
     */
    grpcHost: string;
    /**
     * Port for gRPC communication.
     *
     * @generated from protobuf field: int32 grpc_port = 5;
     */
    grpcPort: number;
    /**
     * Web gRPC host for web-based communication with the specified port.
     *
     * @generated from protobuf field: string webgrpc_host = 6;
     */
    webgrpcHost: string;
    /**
     * Port for web gRPC communication.
     *
     * @generated from protobuf field: int32 webgrpc_port = 7;
     */
    webgrpcPort: number;
    /**
     * Path to the gRPC certificate for secure communication.
     *
     * @generated from protobuf field: string grpc_cert = 8;
     */
    grpcCert: string;
    /**
     * Additional host for communication, if needed.
     *
     * @generated from protobuf field: string host = 9;
     */
    host: string;
    /**
     * Port for additional communication.
     *
     * @generated from protobuf field: int32 port = 10;
     */
    port: number;
    /**
     * Another additional port for communication if required.
     *
     * @generated from protobuf field: int32 port2 = 11;
     */
    port2: number;
    /**
     * Http basic auth token
     *
     * @generated from protobuf field: string http_basic_auth_token = 12;
     */
    httpBasicAuthToken: string;
    /**
     * Account name for authentication.
     *
     * @generated from protobuf field: string account_name = 13;
     */
    accountName: string;
    /**
     * Password for the specified account for authentication.
     *
     * @generated from protobuf field: string account_password = 14;
     */
    accountPassword: string;
    /**
     * API key for accessing the service, if applicable.
     *
     * @generated from protobuf field: string api_key = 15;
     */
    apiKey: string;
    /**
     * Type of CCAI service service (e.g., TEXT_TO_SPEECH, SPEECH_TO_TEXT).
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceType ccai_service_type = 16;
     */
    ccaiServiceType: CcaiServiceType;
    /**
     * Resource name of the ccai_project the ccai_service belongs to
     *
     * @generated from protobuf field: string ccai_project_name = 17;
     */
    ccaiProjectName: string;
    /**
     * Detailed configuration of the CcaiService
     *
     * @generated from protobuf field: google.protobuf.Struct ccai_service_config = 18;
     */
    ccaiServiceConfig?: Struct;
    /**
     * Creation date and time of the service. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 19;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time of the service. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 20;
     */
    modifiedAt?: Timestamp;
    /**
     * User ID of the creator in the form of a valid UUID. Read-only field.
     *
     * @generated from protobuf field: string created_by = 21;
     */
    createdBy: string;
    /**
     * User ID of the last modifier in the form of a valid UUID. Read-only field.
     *
     * @generated from protobuf field: string modified_by = 22;
     */
    modifiedBy: string;
    /**
     * Optional. The headers of the request message
     *
     * @generated from protobuf field: google.protobuf.Struct headers = 23;
     */
    headers?: Struct;
    /**
     * Provider of the ccai service
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceProvider ccai_service_provider = 24;
     */
    ccaiServiceProvider: CcaiServiceProvider;
    /**
     * Index indicating the hierarchical position of a service within the service hierarchy.
     * The index follows a tree-like structure, where each level of depth is separated by a "_".
     * For example:
     * - "1" represents a top-level service
     * - "1_1" represents a sub-service under "1"
     * - "1_1_1" represents a sub-service under "1.1"
     * This structure allows for easy representation and organization of services in nested workflows.
     *
     * If CcaiService have the same service_hierarchy they are executed in parallel.
     * For example:
     * - "1" Service A
     * - "1_1" Service B
     * - "1_1" Service C
     *
     * Service B and C will be executed in parallel and the Service A receives both results of service B and C.
     * The variable for the return value of a service is {{OUTPUT_SERVICE_service_hierarchy}}. So in the example
     * above the outputs of the services are {{OUTPUT_SERVICE_1}}, {{OUTPUT_SERVICE_1_1}}, and {{OUTPUT_SERVICE_1_2}}.
     *
     * @generated from protobuf field: string service_hierarchy = 25;
     */
    serviceHierarchy: string;
}
/**
 * Request to create a Call Center AI (CCAI service) project.
 *
 * @generated from protobuf message ondewo.nlu.CreateCcaiProjectRequest
 */
export interface CreateCcaiProjectRequest {
    /**
     * The CCAI service project to be created.
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProject ccai_project = 1;
     */
    ccaiProject?: CcaiProject;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Response after attempting to create a Call Center AI (CCAI service) project.
 *
 * @generated from protobuf message ondewo.nlu.CreateCcaiProjectResponse
 */
export interface CreateCcaiProjectResponse {
    /**
     * The created CCAI service project.
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProject ccai_project = 1;
     */
    ccaiProject?: CcaiProject;
    /**
     * Error message if the creation is unsuccessful.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
/**
 * Request to retrieve a CCAI service project
 *
 * @generated from protobuf message ondewo.nlu.GetCcaiProjectRequest
 */
export interface GetCcaiProjectRequest {
    /**
     * CCAI service project name with which to perform the call of the form <pre><code>projects/&lt;project_uuid&gt;/project</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. Specify the view of the returned CcaiProject (full view by default)
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProjectView ccai_project_view = 2;
     */
    ccaiProjectView: CcaiProjectView;
    /**
     * Filter which services should be included in the returned CcaiProject
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceFilter ccai_service_filter = 3;
     */
    ccaiServiceFilter?: CcaiServiceFilter;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Request to retrieve a CCAI service project
 *
 * @generated from protobuf message ondewo.nlu.GetCcaiServiceRequest
 */
export interface GetCcaiServiceRequest {
    /**
     * CCAI service project name with which to perform the call of the form
     * <pre><code>projects/&lt;project_uuid&gt;/ccai/services/&lt;service_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Request to get the list of agents
 *
 * @generated from protobuf message ondewo.nlu.ListCcaiProjectsRequest
 */
export interface ListCcaiProjectsRequest {
    /**
     * Optional. Specify the view of the returned CcaiProject (full view by default)
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProjectView ccai_project_view = 1;
     */
    ccaiProjectView: CcaiProjectView;
    /**
     * Filter which services should be included in the CcaiProject
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceFilter ccai_service_filter = 2;
     */
    ccaiServiceFilter?: CcaiServiceFilter;
    /**
     * Optional. Field to define the sorting of the list of CCAI service projects in the response.
     * If not specified, the default behavior is to have no sorting.
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProjectSorting ccai_project_sorting = 3;
     */
    ccaiProjectSorting?: CcaiProjectSorting;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * Example: "current_index-1--page_size-20"
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
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 5;
     */
    nluProjectName: string;
}
/**
 * This is a protobuf message definition for the response of getting a list of CCAI service projects.
 *
 * @generated from protobuf message ondewo.nlu.ListCcaiProjectsResponse
 */
export interface ListCcaiProjectsResponse {
    /**
     * The list of CCAI service projects returned in the response.
     * Use the 'repeated' keyword to indicate that this field can contain multiple instances of CcaiProject.
     *
     * @generated from protobuf field: repeated ondewo.nlu.CcaiProject ccai_projects = 1;
     */
    ccaiProjects: CcaiProject[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * This protobuf message defines the sorting order for CCAI service (Virtual Test System Infrastructure) projects.
 *
 * @generated from protobuf message ondewo.nlu.CcaiProjectSorting
 */
export interface CcaiProjectSorting {
    /**
     * sorting field for ccai projects sorting
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProjectSorting.CcaiProjectSortingField sorting_field = 1;
     */
    sortingField: CcaiProjectSorting_CcaiProjectSortingField;
    /**
     * Sorting mode
     *
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 2;
     */
    sortingMode: SortingMode;
}
/**
 * Enum to specify the sorting field for CCAI service projects.
 *
 * @generated from protobuf enum ondewo.nlu.CcaiProjectSorting.CcaiProjectSortingField
 */
export declare enum CcaiProjectSorting_CcaiProjectSortingField {
    /**
     * No sorting
     *
     * @generated from protobuf enum value: NO_CCAI_PROJECT_SORTING = 0;
     */
    NO_CCAI_PROJECT_SORTING = 0,
    /**
     * Sort by project name such as <pre><code>projects/&lt;project_uuid&gt;/project</code></pre>.
     *
     * @generated from protobuf enum value: SORT_CCAI_PROJECT_BY_NAME = 1;
     */
    SORT_CCAI_PROJECT_BY_NAME = 1,
    /**
     * Sort by display name
     *
     * @generated from protobuf enum value: SORT_CCAI_PROJECT_BY_DISPLAY_NAME = 2;
     */
    SORT_CCAI_PROJECT_BY_DISPLAY_NAME = 2,
    /**
     * Sort by creation date
     *
     * @generated from protobuf enum value: SORT_CCAI_PROJECT_BY_CREATION_DATE = 3;
     */
    SORT_CCAI_PROJECT_BY_CREATION_DATE = 3,
    /**
     * Sort by last modified date
     *
     * @generated from protobuf enum value: SORT_CCAI_PROJECT_BY_LAST_MODIFIED = 4;
     */
    SORT_CCAI_PROJECT_BY_LAST_MODIFIED = 4
}
/**
 * Filter which services should be included in the returned CcaiProject
 *
 * @generated from protobuf message ondewo.nlu.CcaiServiceFilter
 */
export interface CcaiServiceFilter {
    /**
     * Language codes of the projects for which services are filtered.
     *
     * @generated from protobuf field: repeated string language_codes = 1;
     */
    languageCodes: string[];
    /**
     * Type of CCAI service service
     *
     * @generated from protobuf field: repeated ondewo.nlu.CcaiServiceType ccai_service_types = 2;
     */
    ccaiServiceTypes: CcaiServiceType[];
}
/**
 * Request to updated CCAI service project
 *
 * @generated from protobuf message ondewo.nlu.UpdateCcaiProjectRequest
 */
export interface UpdateCcaiProjectRequest {
    /**
     * The CcaiProject that should be updated
     *
     * @generated from protobuf field: ondewo.nlu.CcaiProject ccai_project = 1;
     */
    ccaiProject?: CcaiProject;
    /**
     * Filter which services should be updated in the CcaiProject
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceFilter ccai_service_filter = 2;
     */
    ccaiServiceFilter?: CcaiServiceFilter;
    /**
     * Optional. The mask to control which fields get updated.
     * Note: Not implemented yet
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Request to updated CCAI service project
 *
 * @generated from protobuf message ondewo.nlu.UpdateCcaiProjectResponse
 */
export interface UpdateCcaiProjectResponse {
    /**
     * CCAI service project name with which to perform the call of the form <pre><code>projects/&lt;project_uuid&gt;/project</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
/**
 * Request to delete a CCAI service project
 * If a deployed CCAI service project was deleted then it was undeployed beforehand automatically
 *
 * @generated from protobuf message ondewo.nlu.DeleteCcaiProjectRequest
 */
export interface DeleteCcaiProjectRequest {
    /**
     * CCAI service project name with which to perform the call of the form <pre><code>projects/&lt;project_uuid&gt;/project</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Response to delete a CCAI service project
 * If a deployed CCAI service project was deleted then it was undeployed beforehand automatically
 *
 * @generated from protobuf message ondewo.nlu.DeleteCcaiProjectResponse
 */
export interface DeleteCcaiProjectResponse {
    /**
     * CCAI service project name with which to perform the call of the form <pre><code>projects/&lt;project_uuid&gt;/project</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
    /**
     * Required. The nlu agent project of this CcaiProject.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string nlu_project_name = 4;
     */
    nluProjectName: string;
}
/**
 * Status of a Call Center AI (CCAI service) Project.
 *
 * @generated from protobuf enum ondewo.nlu.CcaiProjectStatus
 */
export declare enum CcaiProjectStatus {
    /**
     * No status specified
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Project successfully created and undeployed
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_UNDEPLOYED = 1;
     */
    UNDEPLOYED = 1,
    /**
     * Project configuration is updating
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_UPDATING = 2;
     */
    UPDATING = 2,
    /**
     * Project is deploying
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_DEPLOYING = 3;
     */
    DEPLOYING = 3,
    /**
     * Project is deployed
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_DEPLOYED = 4;
     */
    DEPLOYED = 4,
    /**
     * Project is un-deploying
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_UNDEPLOYING = 5;
     */
    UNDEPLOYING = 5,
    /**
     * Project is currently deleting
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_DELETING = 6;
     */
    DELETING = 6,
    /**
     * Project is deleted
     *
     * @generated from protobuf enum value: CCAI_PROJECT_STATUS_DELETED = 7;
     */
    DELETED = 7
}
/**
 * @generated from protobuf enum ondewo.nlu.CcaiServiceType
 */
export declare enum CcaiServiceType {
    /**
     * unspecified
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ondewo-aim service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_AIM = 1;
     */
    ONDEWO_AIM = 1,
    /**
     * ondewo-bpi service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_BPI = 2;
     */
    ONDEWO_BPI = 2,
    /**
     * ondewo-csi service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_CSI = 3;
     */
    ONDEWO_CSI = 3,
    /**
     * ondewo-nlu service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU = 4;
     */
    ONDEWO_NLU = 4,
    /**
     * ondewo-s2t service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_S2T = 5;
     */
    ONDEWO_S2T = 5,
    /**
     * ondewo-sip service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_SIP = 6;
     */
    ONDEWO_SIP = 6,
    /**
     * ondewo-t2s service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_T2S = 7;
     */
    ONDEWO_T2S = 7,
    /**
     * ondewo-vtsi service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_VTSI = 8;
     */
    ONDEWO_VTSI = 8,
    /**
     * ondewo-vtsi service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_VTSI_RABBITMQ = 9;
     */
    ONDEWO_VTSI_RABBITMQ = 9,
    /**
     * ondewo-nlu-qa service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU_QA = 10;
     */
    ONDEWO_NLU_QA = 10,
    /**
     * ondewo-nlu-webhook service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBHOOK = 11;
     */
    ONDEWO_NLU_WEBHOOK = 11,
    /**
     * ondewo-survey service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_SURVEY = 12;
     */
    ONDEWO_SURVEY = 12,
    /**
     * ondewo-nlu-llm service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU_LLM = 13;
     */
    ONDEWO_NLU_LLM = 13,
    /**
     * ondewo-nlu-websearch service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBSEARCH = 14;
     */
    ONDEWO_NLU_WEBSEARCH = 14,
    /**
     * ondewo-aim-webchat service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_AIM_WEBCHAT = 15;
     */
    ONDEWO_AIM_WEBCHAT = 15,
    /**
     * ondewo-aim-webphone service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_AIM_WEBPHONE = 16;
     */
    ONDEWO_AIM_WEBPHONE = 16,
    /**
     * ondewo-nlu-vectorstore service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_TYPE_ONDEWO_NLU_VECTORSTORE = 17;
     */
    ONDEWO_NLU_VECTORSTORE = 17
}
/**
 * @generated from protobuf enum ondewo.nlu.CcaiServiceProvider
 */
export declare enum CcaiServiceProvider {
    /**
     * No specified provider or placeholder
     *
     * @generated from protobuf enum value: NO_CCAI_SERVICE_PROVIDER = 0;
     */
    NO_CCAI_SERVICE_PROVIDER = 0,
    /**
     * ONDEWO provider for CCAI service services
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_ONDEWO = 1;
     */
    CCAI_SERVICE_PROVIDER_ONDEWO = 1,
    /**
     * Google as the CCAI service provider, utilizing Google’s conversational AI capabilities
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_GOOGLE_GEMINI = 2;
     */
    CCAI_SERVICE_PROVIDER_GOOGLE_GEMINI = 2,
    /**
     * Microsoft Azure as the CCAI service provider, using Microsoft's Azure cognitive services
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_MICROSOFT_AZURE_OPENAI = 3;
     */
    CCAI_SERVICE_PROVIDER_MICROSOFT_AZURE_OPENAI = 3,
    /**
     * LangChain as the CCAI service provider
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_MICROSOFT_AUTOGEN = 4;
     */
    CCAI_SERVICE_PROVIDER_MICROSOFT_AUTOGEN = 4,
    /**
     * Ollama as the CCAI service provider, typically associated with specific OLLAMA AI tools
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_OLLAMA = 5;
     */
    CCAI_SERVICE_PROVIDER_OLLAMA = 5,
    /**
     * OpenAI as the CCAI service provider, commonly used for models such as GPT
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_OPENAI = 6;
     */
    CCAI_SERVICE_PROVIDER_OPENAI = 6,
    /**
     * Anthropic as the CCAI service provider, used with AI models from Anthropic
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_ANTHROPIC = 7;
     */
    CCAI_SERVICE_PROVIDER_ANTHROPIC = 7,
    /**
     * Hugging Face as the CCAI service provider, often used for open-source NLP models
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_HUGGINGFACE = 8;
     */
    CCAI_SERVICE_PROVIDER_HUGGINGFACE = 8,
    /**
     * IBM as the CCAI service provider, such as IBM Watson for conversational AI
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_IBM = 9;
     */
    CCAI_SERVICE_PROVIDER_IBM = 9,
    /**
     * Haystack as the CCAI service provider, e.g. for question and answering, conversations
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_HAYSTACK = 10;
     */
    CCAI_SERVICE_PROVIDER_HAYSTACK = 10,
    /**
     * LangChain as the CCAI service provider
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_LANGCHAIN = 11;
     */
    CCAI_SERVICE_PROVIDER_LANGCHAIN = 11,
    /**
     * Amazon AWS as the CCAI service provider, using Amazon's AI/ML services
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_AMAZON = 12;
     */
    CCAI_SERVICE_PROVIDER_AMAZON = 12,
    /**
     * Mistral as the CCAI service provider, using Mistrals services
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_MISTRAL = 13;
     */
    CCAI_SERVICE_PROVIDER_MISTRAL = 13,
    /**
     * DuckDuckGo Websearch API
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_DUCKDUCKGO = 14;
     */
    CCAI_SERVICE_PROVIDER_DUCKDUCKGO = 14,
    /**
     * Google PSE Websearch API
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_GOOGLE_PSE = 15;
     */
    CCAI_SERVICE_PROVIDER_GOOGLE_PSE = 15,
    /**
     * Jina Websearch API
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_JINA = 16;
     */
    CCAI_SERVICE_PROVIDER_JINA = 16,
    /**
     * Tavily Websearch API
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_TAVILY = 17;
     */
    CCAI_SERVICE_PROVIDER_TAVILY = 17,
    /**
     * Elastic Search vector database service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_ELASTICSEARCH = 18;
     */
    CCAI_SERVICE_PROVIDER_ELASTICSEARCH = 18,
    /**
     * Milvus vector database service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_MILVUS = 19;
     */
    CCAI_SERVICE_PROVIDER_MILVUS = 19,
    /**
     * Qdrant vector database service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_QDRANT = 20;
     */
    CCAI_SERVICE_PROVIDER_QDRANT = 20,
    /**
     * Chroma vector database service
     *
     * @generated from protobuf enum value: CCAI_SERVICE_PROVIDER_CHROMA = 21;
     */
    CCAI_SERVICE_PROVIDER_CHROMA = 21
}
/**
 * CcaiProjectView defines what the CcaiProject message contains
 *
 * @generated from protobuf enum ondewo.nlu.CcaiProjectView
 */
export declare enum CcaiProjectView {
    /**
     * Unspecified CCAI_PROJECT view: the view is defined by the call:
     *
     * @generated from protobuf enum value: CCAI_PROJECT_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Full CCAI_PROJECT view: populate all the fields of the CCAI_PROJECT message including configs.
     *
     * @generated from protobuf enum value: CCAI_PROJECT_VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * Shallow CCAI_PROJECT view: populates all the fields except configs.
     *
     * @generated from protobuf enum value: CCAI_PROJECT_VIEW_SHALLOW = 2;
     */
    SHALLOW = 2,
    /**
     * Minimum view including only CCAI_PROJECT UUID and CCAI_PROJECT display name
     *
     * @generated from protobuf enum value: CCAI_PROJECT_VIEW_MINIMUM = 3;
     */
    MINIMUM = 3
}
declare class CcaiProject$Type extends MessageType<CcaiProject> {
    constructor();
    create(value?: PartialMessage<CcaiProject>): CcaiProject;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CcaiProject): CcaiProject;
    private binaryReadMap4;
    internalBinaryWrite(message: CcaiProject, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CcaiProject
 */
export declare const CcaiProject: CcaiProject$Type;
declare class CcaiServiceList$Type extends MessageType<CcaiServiceList> {
    constructor();
    create(value?: PartialMessage<CcaiServiceList>): CcaiServiceList;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CcaiServiceList): CcaiServiceList;
    internalBinaryWrite(message: CcaiServiceList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CcaiServiceList
 */
export declare const CcaiServiceList: CcaiServiceList$Type;
declare class CcaiService$Type extends MessageType<CcaiService> {
    constructor();
    create(value?: PartialMessage<CcaiService>): CcaiService;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CcaiService): CcaiService;
    internalBinaryWrite(message: CcaiService, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CcaiService
 */
export declare const CcaiService: CcaiService$Type;
declare class CreateCcaiProjectRequest$Type extends MessageType<CreateCcaiProjectRequest> {
    constructor();
    create(value?: PartialMessage<CreateCcaiProjectRequest>): CreateCcaiProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCcaiProjectRequest): CreateCcaiProjectRequest;
    internalBinaryWrite(message: CreateCcaiProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateCcaiProjectRequest
 */
export declare const CreateCcaiProjectRequest: CreateCcaiProjectRequest$Type;
declare class CreateCcaiProjectResponse$Type extends MessageType<CreateCcaiProjectResponse> {
    constructor();
    create(value?: PartialMessage<CreateCcaiProjectResponse>): CreateCcaiProjectResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateCcaiProjectResponse): CreateCcaiProjectResponse;
    internalBinaryWrite(message: CreateCcaiProjectResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateCcaiProjectResponse
 */
export declare const CreateCcaiProjectResponse: CreateCcaiProjectResponse$Type;
declare class GetCcaiProjectRequest$Type extends MessageType<GetCcaiProjectRequest> {
    constructor();
    create(value?: PartialMessage<GetCcaiProjectRequest>): GetCcaiProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCcaiProjectRequest): GetCcaiProjectRequest;
    internalBinaryWrite(message: GetCcaiProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetCcaiProjectRequest
 */
export declare const GetCcaiProjectRequest: GetCcaiProjectRequest$Type;
declare class GetCcaiServiceRequest$Type extends MessageType<GetCcaiServiceRequest> {
    constructor();
    create(value?: PartialMessage<GetCcaiServiceRequest>): GetCcaiServiceRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCcaiServiceRequest): GetCcaiServiceRequest;
    internalBinaryWrite(message: GetCcaiServiceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetCcaiServiceRequest
 */
export declare const GetCcaiServiceRequest: GetCcaiServiceRequest$Type;
declare class ListCcaiProjectsRequest$Type extends MessageType<ListCcaiProjectsRequest> {
    constructor();
    create(value?: PartialMessage<ListCcaiProjectsRequest>): ListCcaiProjectsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListCcaiProjectsRequest): ListCcaiProjectsRequest;
    internalBinaryWrite(message: ListCcaiProjectsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListCcaiProjectsRequest
 */
export declare const ListCcaiProjectsRequest: ListCcaiProjectsRequest$Type;
declare class ListCcaiProjectsResponse$Type extends MessageType<ListCcaiProjectsResponse> {
    constructor();
    create(value?: PartialMessage<ListCcaiProjectsResponse>): ListCcaiProjectsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListCcaiProjectsResponse): ListCcaiProjectsResponse;
    internalBinaryWrite(message: ListCcaiProjectsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListCcaiProjectsResponse
 */
export declare const ListCcaiProjectsResponse: ListCcaiProjectsResponse$Type;
declare class CcaiProjectSorting$Type extends MessageType<CcaiProjectSorting> {
    constructor();
    create(value?: PartialMessage<CcaiProjectSorting>): CcaiProjectSorting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CcaiProjectSorting): CcaiProjectSorting;
    internalBinaryWrite(message: CcaiProjectSorting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CcaiProjectSorting
 */
export declare const CcaiProjectSorting: CcaiProjectSorting$Type;
declare class CcaiServiceFilter$Type extends MessageType<CcaiServiceFilter> {
    constructor();
    create(value?: PartialMessage<CcaiServiceFilter>): CcaiServiceFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CcaiServiceFilter): CcaiServiceFilter;
    internalBinaryWrite(message: CcaiServiceFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CcaiServiceFilter
 */
export declare const CcaiServiceFilter: CcaiServiceFilter$Type;
declare class UpdateCcaiProjectRequest$Type extends MessageType<UpdateCcaiProjectRequest> {
    constructor();
    create(value?: PartialMessage<UpdateCcaiProjectRequest>): UpdateCcaiProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateCcaiProjectRequest): UpdateCcaiProjectRequest;
    internalBinaryWrite(message: UpdateCcaiProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateCcaiProjectRequest
 */
export declare const UpdateCcaiProjectRequest: UpdateCcaiProjectRequest$Type;
declare class UpdateCcaiProjectResponse$Type extends MessageType<UpdateCcaiProjectResponse> {
    constructor();
    create(value?: PartialMessage<UpdateCcaiProjectResponse>): UpdateCcaiProjectResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateCcaiProjectResponse): UpdateCcaiProjectResponse;
    internalBinaryWrite(message: UpdateCcaiProjectResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateCcaiProjectResponse
 */
export declare const UpdateCcaiProjectResponse: UpdateCcaiProjectResponse$Type;
declare class DeleteCcaiProjectRequest$Type extends MessageType<DeleteCcaiProjectRequest> {
    constructor();
    create(value?: PartialMessage<DeleteCcaiProjectRequest>): DeleteCcaiProjectRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteCcaiProjectRequest): DeleteCcaiProjectRequest;
    internalBinaryWrite(message: DeleteCcaiProjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteCcaiProjectRequest
 */
export declare const DeleteCcaiProjectRequest: DeleteCcaiProjectRequest$Type;
declare class DeleteCcaiProjectResponse$Type extends MessageType<DeleteCcaiProjectResponse> {
    constructor();
    create(value?: PartialMessage<DeleteCcaiProjectResponse>): DeleteCcaiProjectResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteCcaiProjectResponse): DeleteCcaiProjectResponse;
    internalBinaryWrite(message: DeleteCcaiProjectResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteCcaiProjectResponse
 */
export declare const DeleteCcaiProjectResponse: DeleteCcaiProjectResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.CcaiProjects
 */
export declare const CcaiProjects: ServiceType;
export {};
