import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DetectIntentResponse } from "../nlu/session";
import { TextInput } from "../nlu/session";
/**
 * The request message
 *
 * @generated from protobuf message ondewo.qa.GetAnswerRequest
 */
export interface GetAnswerRequest {
    /**
     * Required. The name of the session this query is sent to. Format:
     * `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API
     * caller to choose an appropriate session ID. It can be a random number or
     * some type of user identifier (preferably hashed). The length of the session
     * ID must not exceed 36 bytes.
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Required. The context of the request. A message containing a string (in the form of a sentence) and a
     * language code.
     *
     * @generated from protobuf field: ondewo.nlu.TextInput text = 2;
     */
    text?: TextInput;
    /**
     * Maximal number of answers returned
     *
     * @generated from protobuf field: int32 max_num_answers = 3;
     */
    maxNumAnswers: number;
    /**
     * Threshold (minimal score) to give back reader result
     *
     * @generated from protobuf field: float threshold_reader = 4;
     */
    thresholdReader: number;
    /**
     * Threshold (minimal score) to give back retriever result
     *
     * @generated from protobuf field: float threshold_retriever = 5;
     */
    thresholdRetriever: number;
    /**
     * Threshold (minimal score) overall probability
     *
     * @generated from protobuf field: float threshold_overall = 6;
     */
    thresholdOverall: number;
    /**
     * Reader model name
     *
     * @generated from protobuf field: string reader_model_name = 7;
     */
    readerModelName: string;
    /**
     * Optional. Filters applied to the urls, to restrict the retrieved documents.
     *
     * @generated from protobuf field: ondewo.qa.UrlFilter url_filter = 8;
     */
    urlFilter?: UrlFilter;
}
/**
 * Message containing the response for retrieving answers.
 *
 * @generated from protobuf message ondewo.qa.GetAnswerResponse
 */
export interface GetAnswerResponse {
    /**
     * The results of the conversational query or event processing.
     *
     * @generated from protobuf field: ondewo.nlu.DetectIntentResponse query_result = 2;
     */
    queryResult?: DetectIntentResponse;
}
/**
 * Message for running a web scraper job.
 *
 * @generated from protobuf message ondewo.qa.RunScraperRequest
 */
export interface RunScraperRequest {
    /**
     * List of project IDs to run the scraper on.
     *
     * @generated from protobuf field: repeated string project_ids = 1;
     */
    projectIds: string[];
}
/**
 * Message containing the response for running a web scraper job.
 *
 * @generated from protobuf message ondewo.qa.RunScraperResponse
 */
export interface RunScraperResponse {
    /**
     * List of scraper containers running the jobs.
     *
     * @generated from protobuf field: repeated ondewo.qa.RunScraperResponse.ScraperContainer scraper_containers = 1;
     */
    scraperContainers: RunScraperResponse_ScraperContainer[];
}
/**
 * Message representing a scraper container.
 *
 * @generated from protobuf message ondewo.qa.RunScraperResponse.ScraperContainer
 */
export interface RunScraperResponse_ScraperContainer {
    /**
     * Name of the Docker container running the job.
     *
     * @generated from protobuf field: string container_name = 1;
     */
    containerName: string;
    /**
     * ID of the Docker container running the scraping job.
     *
     * @generated from protobuf field: string container_id = 2;
     */
    containerId: string;
}
/**
 * Message containing the response for running a training job.
 *
 * @generated from protobuf message ondewo.qa.RunTrainingResponse
 */
export interface RunTrainingResponse {
    /**
     * F1 score as a response of the training.
     *
     * @generated from protobuf field: float f1 = 1;
     */
    f1: number;
    /**
     * Accuracy as a response of the training.
     *
     * @generated from protobuf field: float accuracy = 2;
     */
    accuracy: number;
}
/**
 * Message for defining URL filters to include and exclude from the scraping process.
 *
 * @generated from protobuf message ondewo.qa.UrlFilter
 */
export interface UrlFilter {
    /**
     * Optional. List of allowed values for the metadata field 'url'.
     *
     * @generated from protobuf field: repeated string allowed_values = 1;
     */
    allowedValues: string[];
    /**
     * Optional. Regular expression that must be matched by the metadata.
     *
     * @generated from protobuf field: string regex_filter_include = 2;
     */
    regexFilterInclude: string;
    /**
     * Optional. Regular expression that must not be matched by the metadata.
     *
     * @generated from protobuf field: string regex_filter_exclude = 3;
     */
    regexFilterExclude: string;
}
/**
 * Message containing the response for checking the server state.
 *
 * @generated from protobuf message ondewo.qa.GetServerStateResponse
 */
export interface GetServerStateResponse {
    /**
     * Indicates whether the server is ready to accept requests.
     *
     * @generated from protobuf field: bool server_is_ready = 1;
     */
    serverIsReady: boolean;
}
/**
 * Message for listing project IDs in the response.
 *
 * @generated from protobuf message ondewo.qa.ListProjectIdsResponse
 */
export interface ListProjectIdsResponse {
    /**
     * List of project IDs.
     *
     * @generated from protobuf field: repeated string project_ids = 1;
     */
    projectIds: string[];
}
/**
 * Message for requesting the configuration of a specific project.
 *
 * @generated from protobuf message ondewo.qa.GetProjectConfigRequest
 */
export interface GetProjectConfigRequest {
    /**
     * The ID of the project for which to retrieve the configuration.
     *
     * @generated from protobuf field: string project_id = 1;
     */
    projectId: string;
}
/**
 * Message containing the response for getting the configuration of a project.
 *
 * @generated from protobuf message ondewo.qa.GetProjectConfigResponse
 */
export interface GetProjectConfigResponse {
    /**
     * Serialized configuration of the project.
     *
     * @generated from protobuf field: string config_serialized = 1;
     */
    configSerialized: string;
}
/**
 * Message for requesting a database update for specific projects.
 *
 * @generated from protobuf message ondewo.qa.UpdateDatabaseRequest
 */
export interface UpdateDatabaseRequest {
    /**
     * List of project IDs for which to update the database.
     *
     * @generated from protobuf field: repeated string project_ids = 1;
     */
    projectIds: string[];
}
/**
 * Message containing the response for updating the database of specific projects.
 *
 * @generated from protobuf message ondewo.qa.UpdateDatabaseResponse
 */
export interface UpdateDatabaseResponse {
    /**
     * List of error messages encountered during the database update.
     *
     * @generated from protobuf field: repeated string error_messages = 1;
     */
    errorMessages: string[];
}
declare class GetAnswerRequest$Type extends MessageType<GetAnswerRequest> {
    constructor();
    create(value?: PartialMessage<GetAnswerRequest>): GetAnswerRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAnswerRequest): GetAnswerRequest;
    internalBinaryWrite(message: GetAnswerRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.GetAnswerRequest
 */
export declare const GetAnswerRequest: GetAnswerRequest$Type;
declare class GetAnswerResponse$Type extends MessageType<GetAnswerResponse> {
    constructor();
    create(value?: PartialMessage<GetAnswerResponse>): GetAnswerResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAnswerResponse): GetAnswerResponse;
    internalBinaryWrite(message: GetAnswerResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.GetAnswerResponse
 */
export declare const GetAnswerResponse: GetAnswerResponse$Type;
declare class RunScraperRequest$Type extends MessageType<RunScraperRequest> {
    constructor();
    create(value?: PartialMessage<RunScraperRequest>): RunScraperRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RunScraperRequest): RunScraperRequest;
    internalBinaryWrite(message: RunScraperRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.RunScraperRequest
 */
export declare const RunScraperRequest: RunScraperRequest$Type;
declare class RunScraperResponse$Type extends MessageType<RunScraperResponse> {
    constructor();
    create(value?: PartialMessage<RunScraperResponse>): RunScraperResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RunScraperResponse): RunScraperResponse;
    internalBinaryWrite(message: RunScraperResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.RunScraperResponse
 */
export declare const RunScraperResponse: RunScraperResponse$Type;
declare class RunScraperResponse_ScraperContainer$Type extends MessageType<RunScraperResponse_ScraperContainer> {
    constructor();
    create(value?: PartialMessage<RunScraperResponse_ScraperContainer>): RunScraperResponse_ScraperContainer;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RunScraperResponse_ScraperContainer): RunScraperResponse_ScraperContainer;
    internalBinaryWrite(message: RunScraperResponse_ScraperContainer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.RunScraperResponse.ScraperContainer
 */
export declare const RunScraperResponse_ScraperContainer: RunScraperResponse_ScraperContainer$Type;
declare class RunTrainingResponse$Type extends MessageType<RunTrainingResponse> {
    constructor();
    create(value?: PartialMessage<RunTrainingResponse>): RunTrainingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RunTrainingResponse): RunTrainingResponse;
    internalBinaryWrite(message: RunTrainingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.RunTrainingResponse
 */
export declare const RunTrainingResponse: RunTrainingResponse$Type;
declare class UrlFilter$Type extends MessageType<UrlFilter> {
    constructor();
    create(value?: PartialMessage<UrlFilter>): UrlFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UrlFilter): UrlFilter;
    internalBinaryWrite(message: UrlFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.UrlFilter
 */
export declare const UrlFilter: UrlFilter$Type;
declare class GetServerStateResponse$Type extends MessageType<GetServerStateResponse> {
    constructor();
    create(value?: PartialMessage<GetServerStateResponse>): GetServerStateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetServerStateResponse): GetServerStateResponse;
    internalBinaryWrite(message: GetServerStateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.GetServerStateResponse
 */
export declare const GetServerStateResponse: GetServerStateResponse$Type;
declare class ListProjectIdsResponse$Type extends MessageType<ListProjectIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListProjectIdsResponse>): ListProjectIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListProjectIdsResponse): ListProjectIdsResponse;
    internalBinaryWrite(message: ListProjectIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.ListProjectIdsResponse
 */
export declare const ListProjectIdsResponse: ListProjectIdsResponse$Type;
declare class GetProjectConfigRequest$Type extends MessageType<GetProjectConfigRequest> {
    constructor();
    create(value?: PartialMessage<GetProjectConfigRequest>): GetProjectConfigRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProjectConfigRequest): GetProjectConfigRequest;
    internalBinaryWrite(message: GetProjectConfigRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.GetProjectConfigRequest
 */
export declare const GetProjectConfigRequest: GetProjectConfigRequest$Type;
declare class GetProjectConfigResponse$Type extends MessageType<GetProjectConfigResponse> {
    constructor();
    create(value?: PartialMessage<GetProjectConfigResponse>): GetProjectConfigResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProjectConfigResponse): GetProjectConfigResponse;
    internalBinaryWrite(message: GetProjectConfigResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.GetProjectConfigResponse
 */
export declare const GetProjectConfigResponse: GetProjectConfigResponse$Type;
declare class UpdateDatabaseRequest$Type extends MessageType<UpdateDatabaseRequest> {
    constructor();
    create(value?: PartialMessage<UpdateDatabaseRequest>): UpdateDatabaseRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateDatabaseRequest): UpdateDatabaseRequest;
    internalBinaryWrite(message: UpdateDatabaseRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.UpdateDatabaseRequest
 */
export declare const UpdateDatabaseRequest: UpdateDatabaseRequest$Type;
declare class UpdateDatabaseResponse$Type extends MessageType<UpdateDatabaseResponse> {
    constructor();
    create(value?: PartialMessage<UpdateDatabaseResponse>): UpdateDatabaseResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateDatabaseResponse): UpdateDatabaseResponse;
    internalBinaryWrite(message: UpdateDatabaseResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.qa.UpdateDatabaseResponse
 */
export declare const UpdateDatabaseResponse: UpdateDatabaseResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.qa.QA
 */
export declare const QA: ServiceType;
export {};
