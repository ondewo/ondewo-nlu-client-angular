import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './utility.pb';
export declare class UtilitiesClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ValidateRegexRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ValidateRegexResponse>
     */
    validateRegex(requestData: thisProto.ValidateRegexRequest, requestMetadata?: Metadata): Observable<thisProto.ValidateRegexResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ValidateRegexRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ValidateRegexResponse>>
     */
    validateRegex$eventStream(requestData: thisProto.ValidateRegexRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ValidateRegexResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ValidateEmbeddedRegexRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ValidateEmbeddedRegexResponse>
     */
    validateEmbeddedRegex(requestData: thisProto.ValidateEmbeddedRegexRequest, requestMetadata?: Metadata): Observable<thisProto.ValidateEmbeddedRegexResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ValidateEmbeddedRegexRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>
     */
    validateEmbeddedRegex$eventStream(requestData: thisProto.ValidateEmbeddedRegexRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CleanAllIntentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.CleanAllIntentsResponse>
     */
    cleanAllIntents(requestData: thisProto.CleanAllIntentsRequest, requestMetadata?: Metadata): Observable<thisProto.CleanAllIntentsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CleanAllIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>
     */
    cleanAllIntents$eventStream(requestData: thisProto.CleanAllIntentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CleanIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.CleanIntentResponse>
     */
    cleanIntent(requestData: thisProto.CleanIntentRequest, requestMetadata?: Metadata): Observable<thisProto.CleanIntentResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CleanIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.CleanIntentResponse>>
     */
    cleanIntent$eventStream(requestData: thisProto.CleanIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.CleanIntentResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CleanAllEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.CleanAllEntityTypesResponse>
     */
    cleanAllEntityTypes(requestData: thisProto.CleanAllEntityTypesRequest, requestMetadata?: Metadata): Observable<thisProto.CleanAllEntityTypesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CleanAllEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>
     */
    cleanAllEntityTypes$eventStream(requestData: thisProto.CleanAllEntityTypesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CleanEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.CleanEntityTypeResponse>
     */
    cleanEntityType(requestData: thisProto.CleanEntityTypeRequest, requestMetadata?: Metadata): Observable<thisProto.CleanEntityTypeResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CleanEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>
     */
    cleanEntityType$eventStream(requestData: thisProto.CleanEntityTypeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrases(requestData: thisProto.AddTrainingPhrasesRequest, requestMetadata?: Metadata): Observable<thisProto.AddTrainingPhrasesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
     */
    addTrainingPhrases$eventStream(requestData: thisProto.AddTrainingPhrasesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddTrainingPhrasesFromCSVRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrasesFromCSV(requestData: thisProto.AddTrainingPhrasesFromCSVRequest, requestMetadata?: Metadata): Observable<thisProto.AddTrainingPhrasesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddTrainingPhrasesFromCSVRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
     */
    addTrainingPhrasesFromCSV$eventStream(requestData: thisProto.AddTrainingPhrasesFromCSVRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>;
}
