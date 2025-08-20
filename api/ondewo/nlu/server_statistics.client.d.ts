import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetUserProjectCountRequest } from "./server_statistics";
import type { StatResponse } from "./common";
import type { Empty } from "../../google/protobuf/empty";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Server project statistics
 *
 * @generated from protobuf service ondewo.nlu.ServerStatistics
 */
export interface IServerStatisticsClient {
    /**
     * Returns the count of projects in the CAI server
     *
     * @generated from protobuf rpc: GetProjectCount(google.protobuf.Empty) returns (ondewo.nlu.StatResponse);
     */
    getProjectCount(input: Empty, options?: RpcOptions): UnaryCall<Empty, StatResponse>;
    /**
     * Returns the count of projects of a user
     *
     * @generated from protobuf rpc: GetUserProjectCount(ondewo.nlu.GetUserProjectCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getUserProjectCount(input: GetUserProjectCountRequest, options?: RpcOptions): UnaryCall<GetUserProjectCountRequest, StatResponse>;
    /**
     * Returns the users count within a project
     *
     * @generated from protobuf rpc: GetUserCount(google.protobuf.Empty) returns (ondewo.nlu.StatResponse);
     */
    getUserCount(input: Empty, options?: RpcOptions): UnaryCall<Empty, StatResponse>;
}
/**
 * Server project statistics
 *
 * @generated from protobuf service ondewo.nlu.ServerStatistics
 */
export declare class ServerStatisticsClient implements IServerStatisticsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Returns the count of projects in the CAI server
     *
     * @generated from protobuf rpc: GetProjectCount(google.protobuf.Empty) returns (ondewo.nlu.StatResponse);
     */
    getProjectCount(input: Empty, options?: RpcOptions): UnaryCall<Empty, StatResponse>;
    /**
     * Returns the count of projects of a user
     *
     * @generated from protobuf rpc: GetUserProjectCount(ondewo.nlu.GetUserProjectCountRequest) returns (ondewo.nlu.StatResponse);
     */
    getUserProjectCount(input: GetUserProjectCountRequest, options?: RpcOptions): UnaryCall<GetUserProjectCountRequest, StatResponse>;
    /**
     * Returns the users count within a project
     *
     * @generated from protobuf rpc: GetUserCount(google.protobuf.Empty) returns (ondewo.nlu.StatResponse);
     */
    getUserCount(input: Empty, options?: RpcOptions): UnaryCall<Empty, StatResponse>;
}
