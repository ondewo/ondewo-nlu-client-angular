import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './intent.pb';
import * as googleLongrunning003 from '../../google/longrunning/operations.pb';
import * as googleProtobuf004 from '../../google/protobuf/empty.pb';
export declare class IntentsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListIntentsResponse>
     */
    listIntents(requestData: thisProto.ListIntentsRequest, requestMetadata?: Metadata): Observable<thisProto.ListIntentsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListIntentsResponse>>
     */
    listIntents$eventStream(requestData: thisProto.ListIntentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListIntentsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    getIntent(requestData: thisProto.GetIntentRequest, requestMetadata?: Metadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    getIntent$eventStream(requestData: thisProto.GetIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Intent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    createIntent(requestData: thisProto.CreateIntentRequest, requestMetadata?: Metadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    createIntent$eventStream(requestData: thisProto.CreateIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Intent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    updateIntent(requestData: thisProto.UpdateIntentRequest, requestMetadata?: Metadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    updateIntent$eventStream(requestData: thisProto.UpdateIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Intent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf004.Empty>
     */
    deleteIntent(requestData: thisProto.DeleteIntentRequest, requestMetadata?: Metadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf004.Empty>>
     */
    deleteIntent$eventStream(requestData: thisProto.DeleteIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf004.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchUpdateIntents(requestData: thisProto.BatchUpdateIntentsRequest, requestMetadata?: Metadata): Observable<googleLongrunning003.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchUpdateIntents$eventStream(requestData: thisProto.BatchUpdateIntentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning003.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchDeleteIntents(requestData: thisProto.BatchDeleteIntentsRequest, requestMetadata?: Metadata): Observable<googleLongrunning003.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchDeleteIntents$eventStream(requestData: thisProto.BatchDeleteIntentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning003.Operation>>;
}
