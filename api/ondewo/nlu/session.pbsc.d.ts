import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './session.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
/**
 * Service client implementation for ondewo.nlu.Sessions
 */
export declare class SessionsClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.Sessions/DetectIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.DetectIntentResponse>>
         */
        detectIntent: (requestData: thisProto.DetectIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.DetectIntentResponse>>;
        /**
         * Server streaming RPC for /ondewo.nlu.Sessions/StreamingDetectIntent
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
         */
        streamingDetectIntent: (requestData: thisProto.StreamingDetectIntentRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/ListSessions
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionsResponse>>
         */
        listSessions: (requestData: thisProto.ListSessionsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/GetSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        getSession: (requestData: thisProto.GetSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/TrackSessionStep
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        trackSessionStep: (requestData: thisProto.TrackSessionStepRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/DeleteSession
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        deleteSession: (requestData: thisProto.DeleteSessionRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/ListSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
         */
        listSessionLabels: (requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/AddSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        addSessionLabels: (requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/RemoveSessionLabels
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.Session>>
         */
        removeSessionLabels: (requestData: thisProto.RemoveSessionLabelsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.Session>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/ListSessionReviews
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
         */
        listSessionReviews: (requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/GetSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        getSessionReview: (requestData: thisProto.GetSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/GetLatestSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        getLatestSessionReview: (requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
        /**
         * Unary RPC for /ondewo.nlu.Sessions/CreateSessionReview
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.SessionReview>>
         */
        createSessionReview: (requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.SessionReview>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.Sessions/DetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.DetectIntentResponse>
     */
    detectIntent(requestData: thisProto.DetectIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.DetectIntentResponse>;
    /**
     * Server streaming RPC for /ondewo.nlu.Sessions/StreamingDetectIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.StreamingDetectIntentResponse>
     */
    streamingDetectIntent(requestData: thisProto.StreamingDetectIntentRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.StreamingDetectIntentResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/ListSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionsResponse>
     */
    listSessions(requestData: thisProto.ListSessionsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/GetSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    getSession(requestData: thisProto.GetSessionRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/TrackSessionStep
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    trackSessionStep(requestData: thisProto.TrackSessionStepRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/DeleteSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteSession(requestData: thisProto.DeleteSessionRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/ListSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabels(requestData: thisProto.ListSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionLabelsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/AddSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    addSessionLabels(requestData: thisProto.AddSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/RemoveSessionLabels
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Session>
     */
    removeSessionLabels(requestData: thisProto.RemoveSessionLabelsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.Session>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/ListSessionReviews
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListSessionReviewsResponse>
     */
    listSessionReviews(requestData: thisProto.ListSessionReviewsRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListSessionReviewsResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/GetSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    getSessionReview(requestData: thisProto.GetSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/GetLatestSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    getLatestSessionReview(requestData: thisProto.GetLatestSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
    /**
     * Unary RPC for /ondewo.nlu.Sessions/CreateSessionReview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.SessionReview>
     */
    createSessionReview(requestData: thisProto.CreateSessionReviewRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.SessionReview>;
}
