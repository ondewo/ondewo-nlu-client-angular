import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './operations.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for google.longrunning.Operations
 */
export declare class OperationsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /google.longrunning.Operations/ListOperations
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListOperationsResponse>>
         */
        listOperations: (requestData: thisProto.ListOperationsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListOperationsResponse>>;
        /**
         * Unary call: /google.longrunning.Operations/GetOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Operation>>
         */
        getOperation: (requestData: thisProto.GetOperationRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Operation>>;
        /**
         * Unary call: /google.longrunning.Operations/DeleteOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        deleteOperation: (requestData: thisProto.DeleteOperationRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
        /**
         * Unary call: /google.longrunning.Operations/CancelOperation
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        cancelOperation: (requestData: thisProto.CancelOperationRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/google.longrunning.Operations/ListOperations
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData: thisProto.ListOperationsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListOperationsResponse>;
    /**
     * Unary call @/google.longrunning.Operations/GetOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Operation>
     */
    getOperation(requestData: thisProto.GetOperationRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Operation>;
    /**
     * Unary call @/google.longrunning.Operations/DeleteOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteOperation(requestData: thisProto.DeleteOperationRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary call @/google.longrunning.Operations/CancelOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    cancelOperation(requestData: thisProto.CancelOperationRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OperationsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OperationsClient>;
}
