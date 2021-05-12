import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './intent.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleLongrunning009 from '../../google/longrunning/operations.pb';
/**
 * Service client implementation for ondewo.nlu.Intents
 */
export declare class IntentsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.Intents/ListIntents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListIntentsResponse>>
         */
        listIntents: (requestData: thisProto.ListIntentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListIntentsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/GetIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Intent>>
         */
        getIntent: (requestData: thisProto.GetIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Intent>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/CreateIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Intent>>
         */
        createIntent: (requestData: thisProto.CreateIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Intent>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/UpdateIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Intent>>
         */
        updateIntent: (requestData: thisProto.UpdateIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Intent>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/DeleteIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        deleteIntent: (requestData: thisProto.DeleteIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchUpdateIntents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleLongrunning009.Operation>>
         */
        batchUpdateIntents: (requestData: thisProto.BatchUpdateIntentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleLongrunning009.Operation>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchDeleteIntents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleLongrunning009.Operation>>
         */
        batchDeleteIntents: (requestData: thisProto.BatchDeleteIntentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleLongrunning009.Operation>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.Intents/ListIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListIntentsResponse>
     */
    listIntents(requestData: thisProto.ListIntentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListIntentsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/GetIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Intent>
     */
    getIntent(requestData: thisProto.GetIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/CreateIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Intent>
     */
    createIntent(requestData: thisProto.CreateIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/UpdateIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Intent>
     */
    updateIntent(requestData: thisProto.UpdateIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Intent>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/DeleteIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteIntent(requestData: thisProto.DeleteIntentRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchUpdateIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning009.Operation>
     */
    batchUpdateIntents(requestData: thisProto.BatchUpdateIntentsRequest, requestMetadata?: GrpcMetadata): Observable<googleLongrunning009.Operation>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchDeleteIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning009.Operation>
     */
    batchDeleteIntents(requestData: thisProto.BatchDeleteIntentsRequest, requestMetadata?: GrpcMetadata): Observable<googleLongrunning009.Operation>;
}
