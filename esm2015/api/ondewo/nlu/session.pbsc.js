/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './session.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
import { GRPC_SESSIONS_CLIENT_SETTINGS } from './session.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./session.pbconf";
import * as i2 from "@ngx-grpc/core";
export class SessionsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Sessions', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.DetectIntentResponse>
     */
    detectIntent(requestData, requestMetadata = {}) {
        return this.detectIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.DetectIntentResponse>>
     */
    detectIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/DetectIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.DetectIntentRequest,
            responseClass: thisProto.DetectIntentResponse
        });
    }
    /**
     * Server streaming RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.StreamingDetectIntentResponse>
     */
    streamingDetectIntent(requestData, requestMetadata = {}) {
        return this.streamingDetectIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Server streaming RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.StreamingDetectIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.StreamingDetectIntentResponse>>
     */
    streamingDetectIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.serverStream,
            client: this.client,
            path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.StreamingDetectIntentRequest,
            responseClass: thisProto.StreamingDetectIntentResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionsResponse>
     */
    listSessions(requestData, requestMetadata = {}) {
        return this.listSessions$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionsResponse>>
     */
    listSessions$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessions',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListSessionsRequest,
            responseClass: thisProto.ListSessionsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    getSession(requestData, requestMetadata = {}) {
        return this.getSession$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    getSession$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetSession',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetSessionRequest,
            responseClass: thisProto.Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    trackSessionStep(requestData, requestMetadata = {}) {
        return this.trackSessionStep$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TrackSessionStepRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    trackSessionStep$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/TrackSessionStep',
            requestData,
            requestMetadata,
            requestClass: thisProto.TrackSessionStepRequest,
            responseClass: thisProto.Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteSession(requestData, requestMetadata = {}) {
        return this.deleteSession$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteSessionRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteSession$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/DeleteSession',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteSessionRequest,
            responseClass: googleProtobuf001.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionLabelsResponse>
     */
    listSessionLabels(requestData, requestMetadata = {}) {
        return this.listSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionLabelsResponse>>
     */
    listSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessionLabels',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListSessionLabelsRequest,
            responseClass: thisProto.ListSessionLabelsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    addSessionLabels(requestData, requestMetadata = {}) {
        return this.addSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    addSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/AddSessionLabels',
            requestData,
            requestMetadata,
            requestClass: thisProto.AddSessionLabelsRequest,
            responseClass: thisProto.Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Session>
     */
    removeSessionLabels(requestData, requestMetadata = {}) {
        return this.removeSessionLabels$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RemoveSessionLabelsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Session>>
     */
    removeSessionLabels$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/RemoveSessionLabels',
            requestData,
            requestMetadata,
            requestClass: thisProto.RemoveSessionLabelsRequest,
            responseClass: thisProto.Session
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListSessionReviewsResponse>
     */
    listSessionReviews(requestData, requestMetadata = {}) {
        return this.listSessionReviews$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListSessionReviewsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListSessionReviewsResponse>>
     */
    listSessionReviews$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/ListSessionReviews',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListSessionReviewsRequest,
            responseClass: thisProto.ListSessionReviewsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getSessionReview(requestData, requestMetadata = {}) {
        return this.getSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetSessionReview',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetSessionReviewRequest,
            responseClass: thisProto.SessionReview
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    getLatestSessionReview(requestData, requestMetadata = {}) {
        return this.getLatestSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetLatestSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    getLatestSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetLatestSessionReviewRequest,
            responseClass: thisProto.SessionReview
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.SessionReview>
     */
    createSessionReview(requestData, requestMetadata = {}) {
        return this.createSessionReview$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateSessionReviewRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.SessionReview>>
     */
    createSessionReview$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Sessions/CreateSessionReview',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateSessionReviewRequest,
            responseClass: thisProto.SessionReview
        });
    }
}
SessionsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function SessionsClient_Factory() { return new SessionsClient(i0.ɵɵinject(i1.GRPC_SESSIONS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: SessionsClient, providedIn: "root" });
SessionsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SessionsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SESSIONS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvc2Vzc2lvbi5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBS2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFFMUMsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdDQUFnQyxDQUFDO0FBT3BFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSWpFLE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBR0UsUUFBNEIsRUFDQyxhQUFnQyxFQUNyRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZLENBQ1YsV0FBMEMsRUFDMUMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDckUsaUJBQWlCLEVBQUUsRUFDbkIsWUFBWSxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUF3QixDQUN0QixXQUEwQyxFQUMxQyxrQkFBNEIsRUFB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LGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLCtCQUErQixDQUN6QyxXQUFXLEVBQ1gsZUFBZSxDQUNoQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsK0JBQStCLENBQzdCLFdBQWlELEVBQ2pELGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsMENBQTBDO1lBQ2hELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQywwQkFBMEI7WUFDbEQsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUEvZUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBS0ksUUFBUSxZQUNSLE1BQU0sU0FBQyw2QkFBNkI7NENBRXBDLE1BQU0sU0FBQyxtQkFBbUI7WUExQjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNDbGllbnRTZXR0aW5ncyxcbiAgR3JwY0V2ZW50XG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdncnBjLXdlYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9zZXNzaW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvc3RydWN0LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwMyBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVUeXBlMDA0IGZyb20gJy4uLy4uL2dvb2dsZS90eXBlL2xhdGxuZy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDUgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNiBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5pbXBvcnQgeyBHUlBDX1NFU1NJT05TX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vc2Vzc2lvbi5wYmNvbmYnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvbnNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoR1JQQ19TRVNTSU9OU19DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudCgnb25kZXdvLm5sdS5TZXNzaW9ucycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkRldGVjdEludGVudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5EZXRlY3RJbnRlbnRSZXNwb25zZT5cbiAgICovXG4gIGRldGVjdEludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRldGVjdEludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkRldGVjdEludGVudFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuZGV0ZWN0SW50ZW50JGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkRldGVjdEludGVudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVzcG9uc2U+PlxuICAgKi9cbiAgZGV0ZWN0SW50ZW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkRldGVjdEludGVudFJlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvRGV0ZWN0SW50ZW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5EZXRlY3RJbnRlbnRSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcnZlciBzdHJlYW1pbmcgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2U+XG4gICAqL1xuICBzdHJlYW1pbmdEZXRlY3RJbnRlbnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnN0cmVhbWluZ0RldGVjdEludGVudCRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJ2ZXIgc3RyZWFtaW5nIFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLlN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2U+PlxuICAgKi9cbiAgc3RyZWFtaW5nRGV0ZWN0SW50ZW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS5zZXJ2ZXJTdHJlYW0sXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL1N0cmVhbWluZ0RldGVjdEludGVudCcsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2Vzc2lvbnNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXNzaW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXNzaW9uc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFNlc3Npb25zJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RTZXNzaW9uc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlc3Npb25zUmVzcG9uc2U+PlxuICAgKi9cbiAgbGlzdFNlc3Npb25zJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTZXNzaW9uc1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25zJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25zUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbnNSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0U2Vzc2lvblJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPlxuICAgKi9cbiAgZ2V0U2Vzc2lvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlc3Npb25SZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2Vzc2lvbiRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRTZXNzaW9uUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uPj5cbiAgICovXG4gIGdldFNlc3Npb24kZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXNzaW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9HZXRTZXNzaW9uJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0U2Vzc2lvblJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPlxuICAgKi9cbiAgdHJhY2tTZXNzaW9uU3RlcChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2tTZXNzaW9uU3RlcCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5UcmFja1Nlc3Npb25TdGVwUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uPj5cbiAgICovXG4gIHRyYWNrU2Vzc2lvblN0ZXAkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5UcmFja1Nlc3Npb25TdGVwUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9UcmFja1Nlc3Npb25TdGVwJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlU2Vzc2lvblJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlU2Vzc2lvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVNlc3Npb25SZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlU2Vzc2lvbiRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5EZWxldGVTZXNzaW9uUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5Pj5cbiAgICovXG4gIGRlbGV0ZVNlc3Npb24kZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVTZXNzaW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9EZWxldGVTZXNzaW9uJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlU2Vzc2lvblJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RTZXNzaW9uTGFiZWxzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFNlc3Npb25MYWJlbHMkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2U+PlxuICAgKi9cbiAgbGlzdFNlc3Npb25MYWJlbHMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuU2Vzc2lvbnMvTGlzdFNlc3Npb25MYWJlbHMnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPlxuICAgKi9cbiAgYWRkU2Vzc2lvbkxhYmVscyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRkU2Vzc2lvbkxhYmVscyRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5BZGRTZXNzaW9uTGFiZWxzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uPj5cbiAgICovXG4gIGFkZFNlc3Npb25MYWJlbHMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9BZGRTZXNzaW9uTGFiZWxzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPlxuICAgKi9cbiAgcmVtb3ZlU2Vzc2lvbkxhYmVscyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXNzaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlU2Vzc2lvbkxhYmVscyRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5SZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXNzaW9uPj5cbiAgICovXG4gIHJlbW92ZVNlc3Npb25MYWJlbHMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5SZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9SZW1vdmVTZXNzaW9uTGFiZWxzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2Vzc2lvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFNlc3Npb25SZXZpZXdzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5saXN0U2Vzc2lvblJldmlld3MkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZT4+XG4gICAqL1xuICBsaXN0U2Vzc2lvblJldmlld3MkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXNzaW9ucy9MaXN0U2Vzc2lvblJldmlld3MnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+XG4gICAqL1xuICBnZXRTZXNzaW9uUmV2aWV3KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0U2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXNzaW9uUmV2aWV3JGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFNlc3Npb25SZXZpZXdSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PlxuICAgKi9cbiAgZ2V0U2Vzc2lvblJldmlldyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvblJldmlldz4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0dldFNlc3Npb25SZXZpZXcnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZXNzaW9uUmV2aWV3XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+XG4gICAqL1xuICBnZXRMYXRlc3RTZXNzaW9uUmV2aWV3KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRMYXRlc3RTZXNzaW9uUmV2aWV3JGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PlxuICAgKi9cbiAgZ2V0TGF0ZXN0U2Vzc2lvblJldmlldyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvblJldmlldz4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0dldExhdGVzdFNlc3Npb25SZXZpZXcnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZXNzaW9uUmV2aWV3XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+XG4gICAqL1xuICBjcmVhdGVTZXNzaW9uUmV2aWV3KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTZXNzaW9uUmV2aWV3JGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkNyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlc3Npb25SZXZpZXc+PlxuICAgKi9cbiAgY3JlYXRlU2Vzc2lvblJldmlldyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uU2Vzc2lvblJldmlldz4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlc3Npb25zL0NyZWF0ZVNlc3Npb25SZXZpZXcnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5TZXNzaW9uUmV2aWV3XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==