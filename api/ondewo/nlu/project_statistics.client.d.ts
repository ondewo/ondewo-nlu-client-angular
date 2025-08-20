import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetProjectElementStatRequest } from "./project_statistics";
import type { GetProjectStatRequest } from "./project_statistics";
import type { GetEntityTypeCountRequest } from "./project_statistics";
import type { StatResponse } from "./common";
import type { GetIntentCountRequest } from "./project_statistics";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Project Root Statistics
 *
 * @generated from protobuf service ondewo.nlu.ProjectStatistics
 */
export interface IProjectStatisticsClient {
    /**
     * Returns the intent count within a project
     *
     * @generated from protobuf rpc: GetIntentCount(ondewo.nlu.GetIntentCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getIntentCount(input: GetIntentCountRequest, options?: RpcOptions): UnaryCall<GetIntentCountRequest, StatResponse>;
    /**
     * Returns the entity types count within a project
     *
     * @generated from protobuf rpc: GetEntityTypeCount(ondewo.nlu.GetEntityTypeCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntityTypeCount(input: GetEntityTypeCountRequest, options?: RpcOptions): UnaryCall<GetEntityTypeCountRequest, StatResponse>;
    /**
     * Returns the users count within a project
     *
     * @generated from protobuf rpc: GetUserCount(ondewo.nlu.GetProjectStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getUserCount(input: GetProjectStatRequest, options?: RpcOptions): UnaryCall<GetProjectStatRequest, StatResponse>;
    /**
     * Returns the sessions count within a project
     *
     * @generated from protobuf rpc: GetSessionCount(ondewo.nlu.GetProjectStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getSessionCount(input: GetProjectStatRequest, options?: RpcOptions): UnaryCall<GetProjectStatRequest, StatResponse>;
    /**
     * Returns the training phrases count within a project
     *
     * @generated from protobuf rpc: GetTrainingPhraseCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getTrainingPhraseCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the responses count within a project
     *
     * @generated from protobuf rpc: GetResponseCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getResponseCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the entity value count within a project
     *
     * @generated from protobuf rpc: GetEntityValueCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntityValueCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the entity synonyms count within a project
     *
     * @generated from protobuf rpc: GetEntitySynonymCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntitySynonymCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
}
/**
 * Project Root Statistics
 *
 * @generated from protobuf service ondewo.nlu.ProjectStatistics
 */
export declare class ProjectStatisticsClient implements IProjectStatisticsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Returns the intent count within a project
     *
     * @generated from protobuf rpc: GetIntentCount(ondewo.nlu.GetIntentCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getIntentCount(input: GetIntentCountRequest, options?: RpcOptions): UnaryCall<GetIntentCountRequest, StatResponse>;
    /**
     * Returns the entity types count within a project
     *
     * @generated from protobuf rpc: GetEntityTypeCount(ondewo.nlu.GetEntityTypeCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntityTypeCount(input: GetEntityTypeCountRequest, options?: RpcOptions): UnaryCall<GetEntityTypeCountRequest, StatResponse>;
    /**
     * Returns the users count within a project
     *
     * @generated from protobuf rpc: GetUserCount(ondewo.nlu.GetProjectStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getUserCount(input: GetProjectStatRequest, options?: RpcOptions): UnaryCall<GetProjectStatRequest, StatResponse>;
    /**
     * Returns the sessions count within a project
     *
     * @generated from protobuf rpc: GetSessionCount(ondewo.nlu.GetProjectStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getSessionCount(input: GetProjectStatRequest, options?: RpcOptions): UnaryCall<GetProjectStatRequest, StatResponse>;
    /**
     * Returns the training phrases count within a project
     *
     * @generated from protobuf rpc: GetTrainingPhraseCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getTrainingPhraseCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the responses count within a project
     *
     * @generated from protobuf rpc: GetResponseCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getResponseCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the entity value count within a project
     *
     * @generated from protobuf rpc: GetEntityValueCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntityValueCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
    /**
     * Returns the entity synonyms count within a project
     *
     * @generated from protobuf rpc: GetEntitySynonymCount(ondewo.nlu.GetProjectElementStatRequest) returns (ondewo.nlu.StatResponse);
     */
    getEntitySynonymCount(input: GetProjectElementStatRequest, options?: RpcOptions): UnaryCall<GetProjectElementStatRequest, StatResponse>;
}
