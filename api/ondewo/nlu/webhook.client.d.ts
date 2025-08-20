import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteSessionEntityTypeRequest } from "./webhook";
import type { UpdateSessionEntityTypeRequest } from "./webhook";
import type { SessionEntityType } from "./webhook";
import type { CreateSessionEntityTypeRequest } from "./webhook";
import type { PingResponse } from "./webhook";
import type { PingRequest } from "./webhook";
import type { WebhookResponse } from "./webhook";
import type { WebhookRequest } from "./webhook";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * service to send requests to a webhook server
 *
 * @generated from protobuf service ondewo.nlu.Webhook
 */
export interface IWebhookClient {
    /**
     * send a request for /response_refinement/ to the webhook server
     * fulfillment messages can be overwritten by the webhook server
     *
     * @generated from protobuf rpc: ResponseRefinement(ondewo.nlu.WebhookRequest) returns (ondewo.nlu.WebhookResponse);
     */
    responseRefinement(input: WebhookRequest, options?: RpcOptions): UnaryCall<WebhookRequest, WebhookResponse>;
    /**
     * send a request for /slot_filling/ to the webhook server
     * parameter values can be provided &
     * context information can be changed by the webhook server
     *
     * @generated from protobuf rpc: SlotFilling(ondewo.nlu.WebhookRequest) returns (ondewo.nlu.WebhookResponse);
     */
    slotFilling(input: WebhookRequest, options?: RpcOptions): UnaryCall<WebhookRequest, WebhookResponse>;
    /**
     * send a Ping to the webhook server to verify server health
     * will return True if http status_code==200 is detected in the response
     *
     * @generated from protobuf rpc: Ping(ondewo.nlu.PingRequest) returns (ondewo.nlu.PingResponse);
     */
    ping(input: PingRequest, options?: RpcOptions): UnaryCall<PingRequest, PingResponse>;
    /**
     * Creates a session entity type.
     *
     * If the specified session entity type already exists, overrides the session
     * entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: CreateSessionEntityType(ondewo.nlu.CreateSessionEntityTypeRequest) returns (ondewo.nlu.SessionEntityType);
     */
    createSessionEntityType(input: CreateSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<CreateSessionEntityTypeRequest, SessionEntityType>;
    /**
     * Updates the specified session entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: UpdateSessionEntityType(ondewo.nlu.UpdateSessionEntityTypeRequest) returns (ondewo.nlu.SessionEntityType);
     */
    updateSessionEntityType(input: UpdateSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<UpdateSessionEntityTypeRequest, SessionEntityType>;
    /**
     * Deletes the specified session entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: DeleteSessionEntityType(ondewo.nlu.DeleteSessionEntityTypeRequest) returns (google.protobuf.Empty);
     */
    deleteSessionEntityType(input: DeleteSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<DeleteSessionEntityTypeRequest, Empty>;
}
/**
 * service to send requests to a webhook server
 *
 * @generated from protobuf service ondewo.nlu.Webhook
 */
export declare class WebhookClient implements IWebhookClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * send a request for /response_refinement/ to the webhook server
     * fulfillment messages can be overwritten by the webhook server
     *
     * @generated from protobuf rpc: ResponseRefinement(ondewo.nlu.WebhookRequest) returns (ondewo.nlu.WebhookResponse);
     */
    responseRefinement(input: WebhookRequest, options?: RpcOptions): UnaryCall<WebhookRequest, WebhookResponse>;
    /**
     * send a request for /slot_filling/ to the webhook server
     * parameter values can be provided &
     * context information can be changed by the webhook server
     *
     * @generated from protobuf rpc: SlotFilling(ondewo.nlu.WebhookRequest) returns (ondewo.nlu.WebhookResponse);
     */
    slotFilling(input: WebhookRequest, options?: RpcOptions): UnaryCall<WebhookRequest, WebhookResponse>;
    /**
     * send a Ping to the webhook server to verify server health
     * will return True if http status_code==200 is detected in the response
     *
     * @generated from protobuf rpc: Ping(ondewo.nlu.PingRequest) returns (ondewo.nlu.PingResponse);
     */
    ping(input: PingRequest, options?: RpcOptions): UnaryCall<PingRequest, PingResponse>;
    /**
     * Creates a session entity type.
     *
     * If the specified session entity type already exists, overrides the session
     * entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: CreateSessionEntityType(ondewo.nlu.CreateSessionEntityTypeRequest) returns (ondewo.nlu.SessionEntityType);
     */
    createSessionEntityType(input: CreateSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<CreateSessionEntityTypeRequest, SessionEntityType>;
    /**
     * Updates the specified session entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: UpdateSessionEntityType(ondewo.nlu.UpdateSessionEntityTypeRequest) returns (ondewo.nlu.SessionEntityType);
     */
    updateSessionEntityType(input: UpdateSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<UpdateSessionEntityTypeRequest, SessionEntityType>;
    /**
     * Deletes the specified session entity type.
     *
     * This method doesn't work with Google Assistant integration.
     * Contact Dialogflow support if you need to use session entities
     * with Google Assistant integration.
     *
     * @generated from protobuf rpc: DeleteSessionEntityType(ondewo.nlu.DeleteSessionEntityTypeRequest) returns (google.protobuf.Empty);
     */
    deleteSessionEntityType(input: DeleteSessionEntityTypeRequest, options?: RpcOptions): UnaryCall<DeleteSessionEntityTypeRequest, Empty>;
}
