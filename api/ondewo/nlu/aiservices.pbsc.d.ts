import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './aiservices.pb';
export declare class AiServicesClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExtractEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ExtractEntitiesResponse>
     */
    extractEntities(requestData: thisProto.ExtractEntitiesRequest, requestMetadata?: Metadata): Observable<thisProto.ExtractEntitiesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExtractEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>
     */
    extractEntities$eventStream(requestData: thisProto.ExtractEntitiesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ExtractEntitiesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GenerateUserSaysRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GenerateUserSaysResponse>
     */
    generateUserSays(requestData: thisProto.GenerateUserSaysRequest, requestMetadata?: Metadata): Observable<thisProto.GenerateUserSaysResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GenerateUserSaysRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>
     */
    generateUserSays$eventStream(requestData: thisProto.GenerateUserSaysRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GenerateUserSaysResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GenerateResponsesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GenerateResponsesResponse>
     */
    generateResponses(requestData: thisProto.GenerateResponsesRequest, requestMetadata?: Metadata): Observable<thisProto.GenerateResponsesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GenerateResponsesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>
     */
    generateResponses$eventStream(requestData: thisProto.GenerateResponsesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GenerateResponsesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAlternativeSentencesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAlternativeSentencesResponse>
     */
    getAlternativeSentences(requestData: thisProto.GetAlternativeSentencesRequest, requestMetadata?: Metadata): Observable<thisProto.GetAlternativeSentencesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAlternativeSentencesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>
     */
    getAlternativeSentences$eventStream(requestData: thisProto.GetAlternativeSentencesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetAlternativeSentencesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAlternativeTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAlternativeTrainingPhrasesResponse>
     */
    getAlternativeTrainingPhrases(requestData: thisProto.GetAlternativeTrainingPhrasesRequest, requestMetadata?: Metadata): Observable<thisProto.GetAlternativeTrainingPhrasesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAlternativeTrainingPhrasesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>
     */
    getAlternativeTrainingPhrases$eventStream(requestData: thisProto.GetAlternativeTrainingPhrasesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetAlternativeTrainingPhrasesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSynonymsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetSynonymsResponse>
     */
    getSynonyms(requestData: thisProto.GetSynonymsRequest, requestMetadata?: Metadata): Observable<thisProto.GetSynonymsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSynonymsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetSynonymsResponse>>
     */
    getSynonyms$eventStream(requestData: thisProto.GetSynonymsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetSynonymsResponse>>;
}
