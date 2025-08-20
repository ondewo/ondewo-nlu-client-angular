import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FieldMask } from "../../google/protobuf/field_mask";
import { EntityType_Entity } from "./entity_type";
import { EventInput } from "./session";
import { Context } from "./context";
import { Intent_Message } from "./intent";
import { Struct } from "../../google/protobuf/struct";
import { QueryResult } from "./session";
/**
 * request sent for webhook ping
 *
 * @generated from protobuf message ondewo.nlu.PingRequest
 */
export interface PingRequest {
    /**
     * session ID for webhook ping
     *
     * @generated from protobuf field: string session = 1;
     */
    session: string;
}
/**
 * The request message for a webhook call.
 *
 * @generated from protobuf message ondewo.nlu.WebhookRequest
 */
export interface WebhookRequest {
    /**
     * The unique identifier of the response. Contains the same value as
     * `[Streaming]DetectIntentResponse.response_id`.
     *
     * @generated from protobuf field: string response_id = 1;
     */
    responseId: string;
    /**
     * The result of the conversational query or event processing. Contains the
     * same value as `[Streaming]DetectIntentResponse.query_result`.
     *
     * @generated from protobuf field: ondewo.nlu.QueryResult query_result = 2;
     */
    queryResult?: QueryResult;
    /**
     * Optional. The contents of the original request that was passed to
     * `[Streaming]DetectIntent` call.
     *
     * @generated from protobuf field: ondewo.nlu.OriginalDetectIntentRequest original_detect_intent_request = 3;
     */
    originalDetectIntentRequest?: OriginalDetectIntentRequest;
    /**
     * The unique identifier of detectIntent request session.
     * Can be used to identify end-user inside webhook implementation.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session = 4;
     */
    session: string;
    /**
     * Optional. The headers of the request message
     *
     * @generated from protobuf field: google.protobuf.Struct headers = 5;
     */
    headers?: Struct;
}
/**
 * The response message for a webhook call.
 *
 * @generated from protobuf message ondewo.nlu.WebhookResponse
 */
export interface WebhookResponse {
    /**
     * Optional. The text to be shown on the screen. This value is passed directly
     * to `QueryResult.fulfillment_text`.
     *
     * @generated from protobuf field: string fulfillment_text = 1;
     */
    fulfillmentText: string;
    /**
     * Optional. The collection of rich messages to present to the user. This
     * value is passed directly to `QueryResult.fulfillment_messages`.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message fulfillment_messages = 2;
     */
    fulfillmentMessages: Intent_Message[];
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_source`.
     *
     * @generated from protobuf field: string source = 3;
     */
    source: string;
    /**
     * Optional. This value is passed directly to `QueryResult.webhook_payload`.
     * See the related `fulfillment_messages[i].payload field`, which may be used
     * as an alternative to this field.
     *
     * This field can be used for Actions on Google responses.
     * It should have a structure similar to the JSON message shown here. For more
     * information, see
     * [Actions on Google Webhook
     * Format](https://developers.google.com/actions/dialogflow/webhook)
     * <pre>{
     *   "google": {
     *     "expectUserResponse": true,
     *     "richResponse": {
     *       "items": [
     *         {
     *           "simpleResponse": {
     *             "textToSpeech": "this is a simple response"
     *           }
     *         }
     *       ]
     *     }
     *   }
     * }</pre>
     *
     * @generated from protobuf field: google.protobuf.Struct payload = 4;
     */
    payload?: Struct;
    /**
     * Optional. The collection of output contexts. This value is passed directly
     * to `QueryResult.output_contexts`.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context output_contexts = 5;
     */
    outputContexts: Context[];
    /**
     * Optional. Makes the platform immediately invoke another `DetectIntent` call
     * internally with the specified event as input.
     *
     * @generated from protobuf field: ondewo.nlu.EventInput followup_event_input = 6;
     */
    followupEventInput?: EventInput;
    /**
     * Optional. Additional session entity types to replace or extend developer
     * entity types with. The entity synonyms apply to all languages and persist
     * for the session. Setting this data from a webhook overwrites
     * the session entity types that have been set using `detectIntent` method.
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionEntityType session_entity_types = 10;
     */
    sessionEntityTypes: SessionEntityType[];
}
/**
 * Represents the contents of the original request that was passed to
 * the `[Streaming]DetectIntent` call.
 *
 * @generated from protobuf message ondewo.nlu.OriginalDetectIntentRequest
 */
export interface OriginalDetectIntentRequest {
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack` or other "platforms". .
     * Used to identify the "platform"
     *
     * @generated from protobuf field: string source = 1;
     */
    source: string;
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload`
     * field passed in the request. Some integrations that query an
     * agent may provide additional data in the payload.
     *
     * In particular this can be of the form:
     * <pre>{
     *  "a": {
     *    "b": "c"
     *  }
     * }</pre>
     *
     * @generated from protobuf field: google.protobuf.Struct payload = 3;
     */
    payload?: Struct;
}
/**
 * This message is a response of pinging
 *
 * @generated from protobuf message ondewo.nlu.PingResponse
 */
export interface PingResponse {
    /**
     * This is the response message of a Ping request.
     * It's purpose is to report the reachability of a Webhook server.
     *
     * @generated from protobuf field: bool is_reachable = 1;
     */
    isReachable: boolean;
}
/**
 * A session represents a conversation between a Dialogflow agent and an
 * end-user. You can create special entities, called session entities, during a
 * session. Session entities can extend or replace custom entity types and only
 * exist during the session that they were created for. All session data,
 * including session entities, is stored by Dialogflow for 20 minutes.
 *
 * For more information, see the [session entity
 * guide](https://cloud.google.com/dialogflow/docs/entities-session).
 *
 * @generated from protobuf message ondewo.nlu.SessionEntityType
 */
export interface SessionEntityType {
    /**
     * Required. The unique identifier of this session entity type. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type
     * Display Name>`, or `projects/&lt;project_uuid&gt;/agent/environments/
     * <&lt;environment_uuid&gt;/users/&lt;user_uuid&gt;/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type Display
     * Name>`.
     * If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     *
     * `<Entity Type Display Name>` must be the display name of an existing entity
     * type in the same agent that will be overridden or supplemented.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. Indicates whether the additional data should override or
     * supplement the custom entity type definition.
     *
     * @generated from protobuf field: ondewo.nlu.SessionEntityType.EntityOverrideMode entity_override_mode = 2;
     */
    entityOverrideMode: SessionEntityType_EntityOverrideMode;
    /**
     * Required. The collection of entities associated with this session entity
     * type.
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType.Entity entities = 3;
     */
    entities: EntityType_Entity[];
}
/**
 * The types of modifications for a session entity type.
 *
 * @generated from protobuf enum ondewo.nlu.SessionEntityType.EntityOverrideMode
 */
export declare enum SessionEntityType_EntityOverrideMode {
    /**
     * Not specified. This value should be never used.
     *
     * @generated from protobuf enum value: ENTITY_OVERRIDE_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The collection of session entities overrides the collection of entities
     * in the corresponding custom entity type.
     *
     * @generated from protobuf enum value: ENTITY_OVERRIDE_MODE_OVERRIDE = 1;
     */
    OVERRIDE = 1,
    /**
     * The collection of session entities extends the collection of entities in
     * the corresponding custom entity type.
     *
     * Note: Even in this override mode calls to `ListSessionEntityTypes`,
     * `GetSessionEntityType`, `CreateSessionEntityType` and
     * `UpdateSessionEntityType` only return the additional entities added in
     * this session entity type. If you want to get the supplemented list,
     * please call
     * [EntityTypes.GetEntityType][google.cloud.dialogflow.v2.EntityTypes.GetEntityType]
     * on the custom entity type and merge.
     *
     * @generated from protobuf enum value: ENTITY_OVERRIDE_MODE_SUPPLEMENT = 2;
     */
    SUPPLEMENT = 2
}
/**
 * The request message for
 * [SessionEntityTypes.ListSessionEntityTypes][google.cloud.dialogflow.v2.SessionEntityTypes.ListSessionEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.ListSessionEntityTypesRequest
 */
export interface ListSessionEntityTypesRequest {
    /**
     * Required. The session to list all session entity types from.
     * Format: `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;` or
     * `projects/&lt;project_uuid&gt;/agent/environments/&lt;environment_uuid&gt;/users/&lt;user_uuid&gt;/
     * sessions/&lt;session_uuid&gt;`.
     * If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The maximum number of items to return in a single page. By
     * default 100 and at most 1000.
     *
     * @generated from protobuf field: int32 page_size = 2;
     */
    pageSize: number;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
}
/**
 * The response message for
 * [SessionEntityTypes.ListSessionEntityTypes][google.cloud.dialogflow.v2.SessionEntityTypes.ListSessionEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.ListSessionEntityTypesResponse
 */
export interface ListSessionEntityTypesResponse {
    /**
     * The list of session entity types. There will be a maximum number of items
     * returned based on the page_size field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionEntityType session_entity_types = 1;
     */
    sessionEntityTypes: SessionEntityType[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for
 * [SessionEntityTypes.GetSessionEntityType][google.cloud.dialogflow.v2.SessionEntityTypes.GetSessionEntityType].
 *
 * @generated from protobuf message ondewo.nlu.GetSessionEntityTypeRequest
 */
export interface GetSessionEntityTypeRequest {
    /**
     * Required. The name of the session entity type. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type
     * Display Name>` or `projects/&lt;project_uuid&gt;/agent/environments/
     * <&lt;environment_uuid&gt;/users/&lt;user_uuid&gt;/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type Display
     * Name>`.
     * If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for
 * [SessionEntityTypes.CreateSessionEntityType][google.cloud.dialogflow.v2.SessionEntityTypes.CreateSessionEntityType].
 *
 * @generated from protobuf message ondewo.nlu.CreateSessionEntityTypeRequest
 */
export interface CreateSessionEntityTypeRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The session entity type to create.
     *
     * @generated from protobuf field: ondewo.nlu.SessionEntityType session_entity_type = 2;
     */
    sessionEntityType?: SessionEntityType;
    /**
     * Required. The session to create a session entity type for.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents/sessions/&lt;session_uuid&gt;</code></pre>
     * or
     * <pre><code>projects/&lt;project_uuid&gt;/agents/sessions/&lt;session_uuid&gt;</code></pre>
     * `projects/&lt;project_uuid&gt;/agent/environments/&lt;environment_uuid&gt;/users/&lt;user_uuid&gt;/
     * sessions/&lt;session_uuid&gt;`.
     * If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     * Required. The project that the agent to fetch is associated with.
     * The session to create a session entity type for.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 3;
     */
    sessionId: string;
}
/**
 * The request message for
 * [SessionEntityTypes.UpdateSessionEntityType][google.cloud.dialogflow.v2.SessionEntityTypes.UpdateSessionEntityType].
 *
 * @generated from protobuf message ondewo.nlu.UpdateSessionEntityTypeRequest
 */
export interface UpdateSessionEntityTypeRequest {
    /**
     * Required. The session entity type to update.
     *
     * @generated from protobuf field: ondewo.nlu.SessionEntityType session_entity_type = 1;
     */
    sessionEntityType?: SessionEntityType;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
}
/**
 * The request message for
 * [SessionEntityTypes.DeleteSessionEntityType][google.cloud.dialogflow.v2.SessionEntityTypes.DeleteSessionEntityType].
 *
 * @generated from protobuf message ondewo.nlu.DeleteSessionEntityTypeRequest
 */
export interface DeleteSessionEntityTypeRequest {
    /**
     * Required. The name of the entity type to delete. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type
     * Display Name>` or `projects/&lt;project_uuid&gt;/agent/environments/
     * <&lt;environment_uuid&gt;/users/&lt;user_uuid&gt;/sessions/&lt;session_uuid&gt;/entityTypes/<Entity Type Display
     * Name>`.
     * If `Environment ID` is not specified, we assume default 'draft'
     * environment. If `User ID` is not specified, we assume default '-' user.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
declare class PingRequest$Type extends MessageType<PingRequest> {
    constructor();
    create(value?: PartialMessage<PingRequest>): PingRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PingRequest): PingRequest;
    internalBinaryWrite(message: PingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.PingRequest
 */
export declare const PingRequest: PingRequest$Type;
declare class WebhookRequest$Type extends MessageType<WebhookRequest> {
    constructor();
    create(value?: PartialMessage<WebhookRequest>): WebhookRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebhookRequest): WebhookRequest;
    internalBinaryWrite(message: WebhookRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.WebhookRequest
 */
export declare const WebhookRequest: WebhookRequest$Type;
declare class WebhookResponse$Type extends MessageType<WebhookResponse> {
    constructor();
    create(value?: PartialMessage<WebhookResponse>): WebhookResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WebhookResponse): WebhookResponse;
    internalBinaryWrite(message: WebhookResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.WebhookResponse
 */
export declare const WebhookResponse: WebhookResponse$Type;
declare class OriginalDetectIntentRequest$Type extends MessageType<OriginalDetectIntentRequest> {
    constructor();
    create(value?: PartialMessage<OriginalDetectIntentRequest>): OriginalDetectIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OriginalDetectIntentRequest): OriginalDetectIntentRequest;
    internalBinaryWrite(message: OriginalDetectIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.OriginalDetectIntentRequest
 */
export declare const OriginalDetectIntentRequest: OriginalDetectIntentRequest$Type;
declare class PingResponse$Type extends MessageType<PingResponse> {
    constructor();
    create(value?: PartialMessage<PingResponse>): PingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PingResponse): PingResponse;
    internalBinaryWrite(message: PingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.PingResponse
 */
export declare const PingResponse: PingResponse$Type;
declare class SessionEntityType$Type extends MessageType<SessionEntityType> {
    constructor();
    create(value?: PartialMessage<SessionEntityType>): SessionEntityType;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionEntityType): SessionEntityType;
    internalBinaryWrite(message: SessionEntityType, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionEntityType
 */
export declare const SessionEntityType: SessionEntityType$Type;
declare class ListSessionEntityTypesRequest$Type extends MessageType<ListSessionEntityTypesRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionEntityTypesRequest>): ListSessionEntityTypesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionEntityTypesRequest): ListSessionEntityTypesRequest;
    internalBinaryWrite(message: ListSessionEntityTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionEntityTypesRequest
 */
export declare const ListSessionEntityTypesRequest: ListSessionEntityTypesRequest$Type;
declare class ListSessionEntityTypesResponse$Type extends MessageType<ListSessionEntityTypesResponse> {
    constructor();
    create(value?: PartialMessage<ListSessionEntityTypesResponse>): ListSessionEntityTypesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionEntityTypesResponse): ListSessionEntityTypesResponse;
    internalBinaryWrite(message: ListSessionEntityTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionEntityTypesResponse
 */
export declare const ListSessionEntityTypesResponse: ListSessionEntityTypesResponse$Type;
declare class GetSessionEntityTypeRequest$Type extends MessageType<GetSessionEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionEntityTypeRequest>): GetSessionEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionEntityTypeRequest): GetSessionEntityTypeRequest;
    internalBinaryWrite(message: GetSessionEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionEntityTypeRequest
 */
export declare const GetSessionEntityTypeRequest: GetSessionEntityTypeRequest$Type;
declare class CreateSessionEntityTypeRequest$Type extends MessageType<CreateSessionEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<CreateSessionEntityTypeRequest>): CreateSessionEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateSessionEntityTypeRequest): CreateSessionEntityTypeRequest;
    internalBinaryWrite(message: CreateSessionEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateSessionEntityTypeRequest
 */
export declare const CreateSessionEntityTypeRequest: CreateSessionEntityTypeRequest$Type;
declare class UpdateSessionEntityTypeRequest$Type extends MessageType<UpdateSessionEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<UpdateSessionEntityTypeRequest>): UpdateSessionEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSessionEntityTypeRequest): UpdateSessionEntityTypeRequest;
    internalBinaryWrite(message: UpdateSessionEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateSessionEntityTypeRequest
 */
export declare const UpdateSessionEntityTypeRequest: UpdateSessionEntityTypeRequest$Type;
declare class DeleteSessionEntityTypeRequest$Type extends MessageType<DeleteSessionEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<DeleteSessionEntityTypeRequest>): DeleteSessionEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteSessionEntityTypeRequest): DeleteSessionEntityTypeRequest;
    internalBinaryWrite(message: DeleteSessionEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteSessionEntityTypeRequest
 */
export declare const DeleteSessionEntityTypeRequest: DeleteSessionEntityTypeRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Webhook
 */
export declare const Webhook: ServiceType;
export {};
