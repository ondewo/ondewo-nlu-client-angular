import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './operations.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
export declare class OperationsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData: thisProto.ListOperationsRequest, requestMetadata?: Metadata): Observable<thisProto.ListOperationsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListOperationsResponse>>
     */
    listOperations$eventStream(requestData: thisProto.ListOperationsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListOperationsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Operation>
     */
    getOperation(requestData: thisProto.GetOperationRequest, requestMetadata?: Metadata): Observable<thisProto.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Operation>>
     */
    getOperation$eventStream(requestData: thisProto.GetOperationRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteOperation(requestData: thisProto.DeleteOperationRequest, requestMetadata?: Metadata): Observable<googleProtobuf002.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteOperation$eventStream(requestData: thisProto.DeleteOperationRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf002.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    cancelOperation(requestData: thisProto.CancelOperationRequest, requestMetadata?: Metadata): Observable<googleProtobuf002.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    cancelOperation$eventStream(requestData: thisProto.CancelOperationRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf002.Empty>>;
}
