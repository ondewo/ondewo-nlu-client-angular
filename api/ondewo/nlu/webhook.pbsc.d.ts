import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './webhook.pb';
/**
 * Service client implementation for ondewo.nlu.Webhook
 */
export declare class WebhookClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.Webhook/ResponseRefinement
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
         */
        responseRefinement: (requestData: thisProto.WebhookRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.WebhookResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Webhook/SlotFilling
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.WebhookResponse>>
         */
        slotFilling: (requestData: thisProto.WebhookRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.WebhookResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.Webhook/Ping
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.PingResponse>>
         */
        ping: (requestData: thisProto.PingRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.PingResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.Webhook/ResponseRefinement
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.WebhookResponse>
     */
    responseRefinement(requestData: thisProto.WebhookRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.WebhookResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Webhook/SlotFilling
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.WebhookResponse>
     */
    slotFilling(requestData: thisProto.WebhookRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.WebhookResponse>;
    /**
     * Unary RPC for /ondewo.nlu.Webhook/Ping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.PingResponse>
     */
    ping(requestData: thisProto.PingRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.PingResponse>;
}
