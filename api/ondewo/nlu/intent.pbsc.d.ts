import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './intent.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleLongrunning009 from '../../google/longrunning/operations.pb';
import * as i0 from "@angular/core";
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
        /**
         * Unary RPC for /ondewo.nlu.Intents/TagIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        tagIntent: (requestData: thisProto.IntentTagMessage, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/DeleteIntentTag
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
         */
        deleteIntentTag: (requestData: thisProto.IntentTagMessage, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf003.Empty>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchCreateTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
         */
        batchCreateTrainingPhrases: (requestData: thisProto.BatchCreateTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchGetTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
         */
        batchGetTrainingPhrases: (requestData: thisProto.BatchGetTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchUpdateTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>
         */
        batchUpdateTrainingPhrases: (requestData: thisProto.BatchUpdateTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchTrainingPhrasesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchDeleteTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>
         */
        batchDeleteTrainingPhrases: (requestData: thisProto.BatchDeleteTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchDeleteTrainingPhrasesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/ListTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>
         */
        listTrainingPhrases: (requestData: thisProto.ListTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListTrainingPhrasesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchCreateResponseMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
         */
        batchCreateResponseMessages: (requestData: thisProto.BatchCreateResponseMessagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchGetResponseMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
         */
        batchGetResponseMessages: (requestData: thisProto.BatchGetResponseMessagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchUpdateResponseMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>
         */
        batchUpdateResponseMessages: (requestData: thisProto.BatchUpdateResponseMessagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchResponseMessagesStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchDeleteResponseMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>
         */
        batchDeleteResponseMessages: (requestData: thisProto.BatchDeleteResponseMessagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchDeleteResponseMessagesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/ListResponseMessages
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>
         */
        listResponseMessages: (requestData: thisProto.ListResponseMessagesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListResponseMessagesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchCreateParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
         */
        batchCreateParameters: (requestData: thisProto.BatchCreateParametersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchGetParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
         */
        batchGetParameters: (requestData: thisProto.BatchGetParametersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchUpdateParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>
         */
        batchUpdateParameters: (requestData: thisProto.BatchUpdateParametersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchParametersStatusResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/BatchDeleteParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>
         */
        batchDeleteParameters: (requestData: thisProto.BatchDeleteParametersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchDeleteParametersResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Intents/ListParameters
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListParametersResponse>>
         */
        listParameters: (requestData: thisProto.ListParametersRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListParametersResponse>>;
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
    /**
     * Unary RPC for /ondewo.nlu.Intents/TagIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    tagIntent(requestData: thisProto.IntentTagMessage, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/DeleteIntentTag
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf003.Empty>
     */
    deleteIntentTag(requestData: thisProto.IntentTagMessage, requestMetadata?: GrpcMetadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchCreateTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
     */
    batchCreateTrainingPhrases(requestData: thisProto.BatchCreateTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchGetTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
     */
    batchGetTrainingPhrases(requestData: thisProto.BatchGetTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchUpdateTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchTrainingPhrasesStatusResponse>
     */
    batchUpdateTrainingPhrases(requestData: thisProto.BatchUpdateTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchTrainingPhrasesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchDeleteTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteTrainingPhrasesResponse>
     */
    batchDeleteTrainingPhrases(requestData: thisProto.BatchDeleteTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchDeleteTrainingPhrasesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/ListTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListTrainingPhrasesResponse>
     */
    listTrainingPhrases(requestData: thisProto.ListTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListTrainingPhrasesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchCreateResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
     */
    batchCreateResponseMessages(requestData: thisProto.BatchCreateResponseMessagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchResponseMessagesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchGetResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
     */
    batchGetResponseMessages(requestData: thisProto.BatchGetResponseMessagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchResponseMessagesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchUpdateResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchResponseMessagesStatusResponse>
     */
    batchUpdateResponseMessages(requestData: thisProto.BatchUpdateResponseMessagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchResponseMessagesStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchDeleteResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteResponseMessagesResponse>
     */
    batchDeleteResponseMessages(requestData: thisProto.BatchDeleteResponseMessagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchDeleteResponseMessagesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/ListResponseMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListResponseMessagesResponse>
     */
    listResponseMessages(requestData: thisProto.ListResponseMessagesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListResponseMessagesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchCreateParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchParametersStatusResponse>
     */
    batchCreateParameters(requestData: thisProto.BatchCreateParametersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchParametersStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchGetParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchParametersStatusResponse>
     */
    batchGetParameters(requestData: thisProto.BatchGetParametersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchParametersStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchUpdateParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchParametersStatusResponse>
     */
    batchUpdateParameters(requestData: thisProto.BatchUpdateParametersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchParametersStatusResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/BatchDeleteParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteParametersResponse>
     */
    batchDeleteParameters(requestData: thisProto.BatchDeleteParametersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchDeleteParametersResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Intents/ListParameters
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListParametersResponse>
     */
    listParameters(requestData: thisProto.ListParametersRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListParametersResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntentsClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntentsClient>;
}
//# sourceMappingURL=intent.pbsc.d.ts.map