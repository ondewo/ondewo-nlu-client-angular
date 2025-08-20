import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetProjectConfigResponse } from "./qa";
import type { GetProjectConfigRequest } from "./qa";
import type { ListProjectIdsResponse } from "./qa";
import type { GetServerStateResponse } from "./qa";
import type { RunTrainingResponse } from "./qa";
import type { Empty } from "../../google/protobuf/empty";
import type { UpdateDatabaseResponse } from "./qa";
import type { UpdateDatabaseRequest } from "./qa";
import type { RunScraperResponse } from "./qa";
import type { RunScraperRequest } from "./qa";
import type { GetAnswerResponse } from "./qa";
import type { GetAnswerRequest } from "./qa";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * gRPC service for QA functionalities.
 *
 * @generated from protobuf service ondewo.qa.QA
 */
export interface IQAClient {
    /**
     * Retrieves an answer based on the provided request.
     *
     * @generated from protobuf rpc: GetAnswer(ondewo.qa.GetAnswerRequest) returns (ondewo.qa.GetAnswerResponse);
     */
    getAnswer(input: GetAnswerRequest, options?: RpcOptions): UnaryCall<GetAnswerRequest, GetAnswerResponse>;
    /**
     * Runs a web scraper job for specified project IDs.
     *
     * @generated from protobuf rpc: RunScraper(ondewo.qa.RunScraperRequest) returns (ondewo.qa.RunScraperResponse);
     */
    runScraper(input: RunScraperRequest, options?: RpcOptions): UnaryCall<RunScraperRequest, RunScraperResponse>;
    /**
     * Updates the database for specified project IDs.
     *
     * @generated from protobuf rpc: UpdateDatabase(ondewo.qa.UpdateDatabaseRequest) returns (ondewo.qa.UpdateDatabaseResponse);
     */
    updateDatabase(input: UpdateDatabaseRequest, options?: RpcOptions): UnaryCall<UpdateDatabaseRequest, UpdateDatabaseResponse>;
    /**
     * Runs a training job for the QA system.
     *
     * @generated from protobuf rpc: RunTraining(google.protobuf.Empty) returns (ondewo.qa.RunTrainingResponse);
     */
    runTraining(input: Empty, options?: RpcOptions): UnaryCall<Empty, RunTrainingResponse>;
    /**
     * Retrieves the server state for QA.
     *
     * @generated from protobuf rpc: GetServerState(google.protobuf.Empty) returns (ondewo.qa.GetServerStateResponse);
     */
    getServerState(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetServerStateResponse>;
    /**
     * Lists project IDs associated with QA.
     *
     * @generated from protobuf rpc: ListProjectIds(google.protobuf.Empty) returns (ondewo.qa.ListProjectIdsResponse);
     */
    listProjectIds(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListProjectIdsResponse>;
    /**
     * Retrieves the configuration of a specific project.
     *
     * @generated from protobuf rpc: GetProjectConfig(ondewo.qa.GetProjectConfigRequest) returns (ondewo.qa.GetProjectConfigResponse);
     */
    getProjectConfig(input: GetProjectConfigRequest, options?: RpcOptions): UnaryCall<GetProjectConfigRequest, GetProjectConfigResponse>;
}
/**
 * gRPC service for QA functionalities.
 *
 * @generated from protobuf service ondewo.qa.QA
 */
export declare class QAClient implements IQAClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Retrieves an answer based on the provided request.
     *
     * @generated from protobuf rpc: GetAnswer(ondewo.qa.GetAnswerRequest) returns (ondewo.qa.GetAnswerResponse);
     */
    getAnswer(input: GetAnswerRequest, options?: RpcOptions): UnaryCall<GetAnswerRequest, GetAnswerResponse>;
    /**
     * Runs a web scraper job for specified project IDs.
     *
     * @generated from protobuf rpc: RunScraper(ondewo.qa.RunScraperRequest) returns (ondewo.qa.RunScraperResponse);
     */
    runScraper(input: RunScraperRequest, options?: RpcOptions): UnaryCall<RunScraperRequest, RunScraperResponse>;
    /**
     * Updates the database for specified project IDs.
     *
     * @generated from protobuf rpc: UpdateDatabase(ondewo.qa.UpdateDatabaseRequest) returns (ondewo.qa.UpdateDatabaseResponse);
     */
    updateDatabase(input: UpdateDatabaseRequest, options?: RpcOptions): UnaryCall<UpdateDatabaseRequest, UpdateDatabaseResponse>;
    /**
     * Runs a training job for the QA system.
     *
     * @generated from protobuf rpc: RunTraining(google.protobuf.Empty) returns (ondewo.qa.RunTrainingResponse);
     */
    runTraining(input: Empty, options?: RpcOptions): UnaryCall<Empty, RunTrainingResponse>;
    /**
     * Retrieves the server state for QA.
     *
     * @generated from protobuf rpc: GetServerState(google.protobuf.Empty) returns (ondewo.qa.GetServerStateResponse);
     */
    getServerState(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetServerStateResponse>;
    /**
     * Lists project IDs associated with QA.
     *
     * @generated from protobuf rpc: ListProjectIds(google.protobuf.Empty) returns (ondewo.qa.ListProjectIdsResponse);
     */
    listProjectIds(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListProjectIdsResponse>;
    /**
     * Retrieves the configuration of a specific project.
     *
     * @generated from protobuf rpc: GetProjectConfig(ondewo.qa.GetProjectConfigRequest) returns (ondewo.qa.GetProjectConfigResponse);
     */
    getProjectConfig(input: GetProjectConfigRequest, options?: RpcOptions): UnaryCall<GetProjectConfigRequest, GetProjectConfigResponse>;
}
