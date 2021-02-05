import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './webhook.pb';
export declare class WebhookClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    responseRefinement(requestData: thisProto.WebhookRequest, requestMetadata?: Metadata): Observable<thisProto.WebhookResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    responseRefinement$eventStream(requestData: thisProto.WebhookRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.WebhookResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    slotFilling(requestData: thisProto.WebhookRequest, requestMetadata?: Metadata): Observable<thisProto.WebhookResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    slotFilling$eventStream(requestData: thisProto.WebhookRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.WebhookResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.PingResponse>
     */
    ping(requestData: thisProto.PingRequest, requestMetadata?: Metadata): Observable<thisProto.PingResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.PingResponse>>
     */
    ping$eventStream(requestData: thisProto.PingRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.PingResponse>>;
}
