import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './project-statistics.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
export declare class ProjectStatisticsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getIntentCount(requestData: thisProto.GetIntentCountRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getIntentCount$eventStream(requestData: thisProto.GetIntentCountRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityTypeCount(requestData: thisProto.GetEntityTypeCountRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityTypeCount$eventStream(requestData: thisProto.GetEntityTypeCountRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData: thisProto.GetProjectStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData: thisProto.GetProjectStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getSessionCount(requestData: thisProto.GetProjectStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getSessionCount$eventStream(requestData: thisProto.GetProjectStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getTrainingPhraseCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getTrainingPhraseCount$eventStream(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getResponseCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getResponseCount$eventStream(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityValueCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityValueCount$eventStream(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntitySynonymCount(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntitySynonymCount$eventStream(requestData: thisProto.GetProjectElementStatRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
}
