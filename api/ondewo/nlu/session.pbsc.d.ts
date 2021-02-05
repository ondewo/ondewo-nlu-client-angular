import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './session.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
export declare class SessionsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.DetectIntentResponse>
     */
    detectIntent(requestData: thisProto.DetectIntentRequest, requestMetadata?: Metadata): Observable<thisProto.DetectIntentResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.DetectIntentResponse>>
     */
    detectIntent$eventStream(requestData: thisProto.DetectIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.DetectIntentResponse>>;
    /**
     * Server streaming RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.StreamingDetectIntentResponse>
     */
    streamingDetectIntent(requestData: thisProto.StreamingDetectIntentRequest, requestMetadata?: Metadata): Observable<thisProto.StreamingDetectIntentResponse>;
    /**
     * Server streaming RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
     */
    streamingDetectIntent$eventStream(requestData: thisProto.StreamingDetectIntentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionsResponse>
     */
    listSessions(requestData: thisProto.ListSessionsRequest, requestMetadata?: Metadata): Observable<thisProto.ListSessionsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionsResponse>>
     */
    listSessions$eventStream(requestData: thisProto.ListSessionsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListSessionsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    getSession(requestData: thisProto.GetSessionRequest, requestMetadata?: Metadata): Observable<thisProto.Session>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    getSession$eventStream(requestData: thisProto.GetSessionRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Session>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    trackSessionStep(requestData: thisProto.TrackSessionStepRequest, requestMetadata?: Metadata): Observable<thisProto.Session>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    trackSessionStep$eventStream(requestData: thisProto.TrackSessionStepRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Session>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteSession(requestData: thisProto.DeleteSessionRequest, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteSession$eventStream(requestData: thisProto.DeleteSessionRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabels(requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: Metadata): Observable<thisProto.ListSessionLabelsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
     */
    listSessionLabels$eventStream(requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    addSessionLabels(requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: Metadata): Observable<thisProto.Session>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    addSessionLabels$eventStream(requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Session>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    removeSessionLabels(requestData: thisProto.RemoveSessionLabelsRequest, requestMetadata?: Metadata): Observable<thisProto.Session>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    removeSessionLabels$eventStream(requestData: thisProto.RemoveSessionLabelsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Session>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionReviewsResponse>
     */
    listSessionReviews(requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: Metadata): Observable<thisProto.ListSessionReviewsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
     */
    listSessionReviews$eventStream(requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getSessionReview(requestData: thisProto.GetSessionReviewRequest, requestMetadata?: Metadata): Observable<thisProto.SessionReview>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getSessionReview$eventStream(requestData: thisProto.GetSessionReviewRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.SessionReview>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getLatestSessionReview(requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: Metadata): Observable<thisProto.SessionReview>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getLatestSessionReview$eventStream(requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.SessionReview>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    createSessionReview(requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: Metadata): Observable<thisProto.SessionReview>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    createSessionReview$eventStream(requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.SessionReview>>;
}
