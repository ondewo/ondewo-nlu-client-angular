import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { CancelOperationRequest } from "./operations";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteOperationRequest } from "./operations";
import type { Operation } from "./operations";
import type { GetOperationRequest } from "./operations";
import type { ListOperationsResponse } from "./operations";
import type { ListOperationsRequest } from "./operations";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][ondewo.nlu.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from protobuf service ondewo.nlu.Operations
 */
export interface IOperationsClient {
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding below allows API services to override the binding
     * to use different resource name schemes, such as `users/*\/operations`.
     *
     * @generated from protobuf rpc: ListOperations(ondewo.nlu.ListOperationsRequest) returns (ondewo.nlu.ListOperationsResponse);
     */
    listOperations(input: ListOperationsRequest, options?: RpcOptions): UnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     *
     * @generated from protobuf rpc: GetOperation(ondewo.nlu.GetOperationRequest) returns (ondewo.nlu.Operation);
     */
    getOperation(input: GetOperationRequest, options?: RpcOptions): UnaryCall<GetOperationRequest, Operation>;
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @generated from protobuf rpc: DeleteOperation(ondewo.nlu.DeleteOperationRequest) returns (google.protobuf.Empty);
     */
    deleteOperation(input: DeleteOperationRequest, options?: RpcOptions): UnaryCall<DeleteOperationRequest, Empty>;
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][ondewo.nlu.Operations.GetOperation] or
     * other methods to verify whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][ondewo.nlu.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code]
     * of 1, corresponding to `Code.CANCELLED`.
     *
     * @generated from protobuf rpc: CancelOperation(ondewo.nlu.CancelOperationRequest) returns (google.protobuf.Empty);
     */
    cancelOperation(input: CancelOperationRequest, options?: RpcOptions): UnaryCall<CancelOperationRequest, Empty>;
}
/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][ondewo.nlu.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from protobuf service ondewo.nlu.Operations
 */
export declare class OperationsClient implements IOperationsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding below allows API services to override the binding
     * to use different resource name schemes, such as `users/*\/operations`.
     *
     * @generated from protobuf rpc: ListOperations(ondewo.nlu.ListOperationsRequest) returns (ondewo.nlu.ListOperationsResponse);
     */
    listOperations(input: ListOperationsRequest, options?: RpcOptions): UnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     *
     * @generated from protobuf rpc: GetOperation(ondewo.nlu.GetOperationRequest) returns (ondewo.nlu.Operation);
     */
    getOperation(input: GetOperationRequest, options?: RpcOptions): UnaryCall<GetOperationRequest, Operation>;
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @generated from protobuf rpc: DeleteOperation(ondewo.nlu.DeleteOperationRequest) returns (google.protobuf.Empty);
     */
    deleteOperation(input: DeleteOperationRequest, options?: RpcOptions): UnaryCall<DeleteOperationRequest, Empty>;
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][ondewo.nlu.Operations.GetOperation] or
     * other methods to verify whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][ondewo.nlu.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code]
     * of 1, corresponding to `Code.CANCELLED`.
     *
     * @generated from protobuf rpc: CancelOperation(ondewo.nlu.CancelOperationRequest) returns (google.protobuf.Empty);
     */
    cancelOperation(input: CancelOperationRequest, options?: RpcOptions): UnaryCall<CancelOperationRequest, Empty>;
}
