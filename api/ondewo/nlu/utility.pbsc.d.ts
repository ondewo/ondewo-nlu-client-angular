import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './utility.pb';
/**
 * Service client implementation for ondewo.nlu.Utilities
 */
export declare class UtilitiesClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.Utilities/ValidateRegex
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ValidateRegexResponse>>
         */
        validateRegex: (requestData: thisProto.ValidateRegexRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ValidateRegexResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/ValidateEmbeddedRegex
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>
         */
        validateEmbeddedRegex: (requestData: thisProto.ValidateEmbeddedRegexRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/CleanAllIntents
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>
         */
        cleanAllIntents: (requestData: thisProto.CleanAllIntentsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/CleanIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CleanIntentResponse>>
         */
        cleanIntent: (requestData: thisProto.CleanIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CleanIntentResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/CleanAllEntityTypes
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>
         */
        cleanAllEntityTypes: (requestData: thisProto.CleanAllEntityTypesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/CleanEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>
         */
        cleanEntityType: (requestData: thisProto.CleanEntityTypeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/AddTrainingPhrases
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
         */
        addTrainingPhrases: (requestData: thisProto.AddTrainingPhrasesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
         */
        addTrainingPhrasesFromCSV: (requestData: thisProto.AddTrainingPhrasesFromCSVRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.Utilities/ValidateRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ValidateRegexResponse>
     */
    validateRegex(requestData: thisProto.ValidateRegexRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ValidateRegexResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/ValidateEmbeddedRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ValidateEmbeddedRegexResponse>
     */
    validateEmbeddedRegex(requestData: thisProto.ValidateEmbeddedRegexRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ValidateEmbeddedRegexResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/CleanAllIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanAllIntentsResponse>
     */
    cleanAllIntents(requestData: thisProto.CleanAllIntentsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CleanAllIntentsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/CleanIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanIntentResponse>
     */
    cleanIntent(requestData: thisProto.CleanIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CleanIntentResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/CleanAllEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanAllEntityTypesResponse>
     */
    cleanAllEntityTypes(requestData: thisProto.CleanAllEntityTypesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CleanAllEntityTypesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/CleanEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanEntityTypeResponse>
     */
    cleanEntityType(requestData: thisProto.CleanEntityTypeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.CleanEntityTypeResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/AddTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrases(requestData: thisProto.AddTrainingPhrasesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AddTrainingPhrasesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrasesFromCSV(requestData: thisProto.AddTrainingPhrasesFromCSVRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.AddTrainingPhrasesResponse>;
}
