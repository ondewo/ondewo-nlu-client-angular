import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DeleteAllContextsRequest } from "./context";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteContextRequest } from "./context";
import type { UpdateContextRequest } from "./context";
import type { CreateContextRequest } from "./context";
import type { Context } from "./context";
import type { GetContextRequest } from "./context";
import type { ListContextsResponse } from "./context";
import type { ListContextsRequest } from "./context";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * A context represents additional information included with user input or with
 * an intent returned by the Dialogflow API. Contexts are helpful for
 * differentiating user input which may be vague or have a different meaning
 * depending on additional details from your application such as user setting
 * and preferences, previous user input, where the user is in your application,
 * geographic location, and so on.
 *
 * You can include contexts as input parameters of a
 * [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) request,
 * or as output contexts included in the returned intent.
 * Contexts expire when an intent is matched, after the number of `DetectIntent`
 * requests specified by the `lifespan_count` parameter, or after 10 minutes
 * if no intents are matched for a `DetectIntent` request.
 *
 * For more information about contexts, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/contexts).
 *
 * @generated from protobuf service ondewo.nlu.Contexts
 */
export interface IContextsClient {
    /**
     * Returns the list of all contexts in the specified session.
     *
     * @generated from protobuf rpc: ListContexts(ondewo.nlu.ListContextsRequest) returns (ondewo.nlu.ListContextsResponse);
     */
    listContexts(input: ListContextsRequest, options?: RpcOptions): UnaryCall<ListContextsRequest, ListContextsResponse>;
    /**
     * Retrieves the specified context.
     *
     * @generated from protobuf rpc: GetContext(ondewo.nlu.GetContextRequest) returns (ondewo.nlu.Context);
     */
    getContext(input: GetContextRequest, options?: RpcOptions): UnaryCall<GetContextRequest, Context>;
    /**
     * Creates a context.
     *
     * @generated from protobuf rpc: CreateContext(ondewo.nlu.CreateContextRequest) returns (ondewo.nlu.Context);
     */
    createContext(input: CreateContextRequest, options?: RpcOptions): UnaryCall<CreateContextRequest, Context>;
    /**
     * Updates the specified context.
     *
     * @generated from protobuf rpc: UpdateContext(ondewo.nlu.UpdateContextRequest) returns (ondewo.nlu.Context);
     */
    updateContext(input: UpdateContextRequest, options?: RpcOptions): UnaryCall<UpdateContextRequest, Context>;
    /**
     * Deletes the specified context.
     *
     * @generated from protobuf rpc: DeleteContext(ondewo.nlu.DeleteContextRequest) returns (google.protobuf.Empty);
     */
    deleteContext(input: DeleteContextRequest, options?: RpcOptions): UnaryCall<DeleteContextRequest, Empty>;
    /**
     * Deletes all active contexts in the specified session.
     *
     * @generated from protobuf rpc: DeleteAllContexts(ondewo.nlu.DeleteAllContextsRequest) returns (google.protobuf.Empty);
     */
    deleteAllContexts(input: DeleteAllContextsRequest, options?: RpcOptions): UnaryCall<DeleteAllContextsRequest, Empty>;
}
/**
 * A context represents additional information included with user input or with
 * an intent returned by the Dialogflow API. Contexts are helpful for
 * differentiating user input which may be vague or have a different meaning
 * depending on additional details from your application such as user setting
 * and preferences, previous user input, where the user is in your application,
 * geographic location, and so on.
 *
 * You can include contexts as input parameters of a
 * [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) request,
 * or as output contexts included in the returned intent.
 * Contexts expire when an intent is matched, after the number of `DetectIntent`
 * requests specified by the `lifespan_count` parameter, or after 10 minutes
 * if no intents are matched for a `DetectIntent` request.
 *
 * For more information about contexts, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/contexts).
 *
 * @generated from protobuf service ondewo.nlu.Contexts
 */
export declare class ContextsClient implements IContextsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Returns the list of all contexts in the specified session.
     *
     * @generated from protobuf rpc: ListContexts(ondewo.nlu.ListContextsRequest) returns (ondewo.nlu.ListContextsResponse);
     */
    listContexts(input: ListContextsRequest, options?: RpcOptions): UnaryCall<ListContextsRequest, ListContextsResponse>;
    /**
     * Retrieves the specified context.
     *
     * @generated from protobuf rpc: GetContext(ondewo.nlu.GetContextRequest) returns (ondewo.nlu.Context);
     */
    getContext(input: GetContextRequest, options?: RpcOptions): UnaryCall<GetContextRequest, Context>;
    /**
     * Creates a context.
     *
     * @generated from protobuf rpc: CreateContext(ondewo.nlu.CreateContextRequest) returns (ondewo.nlu.Context);
     */
    createContext(input: CreateContextRequest, options?: RpcOptions): UnaryCall<CreateContextRequest, Context>;
    /**
     * Updates the specified context.
     *
     * @generated from protobuf rpc: UpdateContext(ondewo.nlu.UpdateContextRequest) returns (ondewo.nlu.Context);
     */
    updateContext(input: UpdateContextRequest, options?: RpcOptions): UnaryCall<UpdateContextRequest, Context>;
    /**
     * Deletes the specified context.
     *
     * @generated from protobuf rpc: DeleteContext(ondewo.nlu.DeleteContextRequest) returns (google.protobuf.Empty);
     */
    deleteContext(input: DeleteContextRequest, options?: RpcOptions): UnaryCall<DeleteContextRequest, Empty>;
    /**
     * Deletes all active contexts in the specified session.
     *
     * @generated from protobuf rpc: DeleteAllContexts(ondewo.nlu.DeleteAllContextsRequest) returns (google.protobuf.Empty);
     */
    deleteAllContexts(input: DeleteAllContextsRequest, options?: RpcOptions): UnaryCall<DeleteAllContextsRequest, Empty>;
}
