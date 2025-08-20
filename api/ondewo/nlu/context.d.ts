import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * Represents a context.
 *
 * @generated from protobuf message ondewo.nlu.Context
 */
export interface Context {
    /**
     * Required. The display name of the context (must be unique per session).
     *
     * Note: we are deviating from the dialogflow format
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/contexts/&lt;context_uuid&gt;`.
     *
     * - DetectIntent only returns
     *    - the short display name in the "name" field in query_result.output_contexts
     *    - only expects the short display name in the "name" field in query_parameters.contexts
     * - Also inside the persisted session object only the short display name is used.
     *    - SessionStep.contexts only contains the short display name
     *    - SessionReviewStep.contexts only contains the short display name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. The number of conversational query requests after which the
     * context expires. If set to `0` (the default) the context expires
     * immediately. Contexts expire automatically after 10 minutes even if there
     * are no matching queries.
     *
     * @generated from protobuf field: int32 lifespan_count = 2;
     */
    lifespanCount: number;
    /**
     * Optional. The collection of parameters associated with this context.
     * Refer to [this doc](https://dialogflow.com/docs/actions-and-parameters) for
     * syntax.
     * Keys are the display names of context parameters.
     *
     * @generated from protobuf field: map<string, ondewo.nlu.Context.Parameter> parameters = 3;
     */
    parameters: {
        [key: string]: Context_Parameter;
    };
    /**
     * Optional. The time span in seconds after which the context expires. By default it does not expire.
     *
     * @generated from protobuf field: float lifespan_time = 4;
     */
    lifespanTime: number;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 6;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 7;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 8;
     */
    modifiedBy: string;
}
/**
 * @generated from protobuf message ondewo.nlu.Context.Parameter
 */
export interface Context_Parameter {
    /**
     * The name of the context parameter.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The display name of the context parameter.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * The value(s) of the context parameter.
     *
     * @generated from protobuf field: string value = 3;
     */
    value: string;
    /**
     * The original value(s) of the context parameter.
     *
     * @generated from protobuf field: string value_original = 4;
     */
    valueOriginal: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 6;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 7;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 8;
     */
    modifiedBy: string;
}
/**
 * The request message for [Contexts.ListContexts][google.cloud.dialogflow.v2.Contexts.ListContexts].
 *
 * @generated from protobuf message ondewo.nlu.ListContextsRequest
 */
export interface ListContextsRequest {
    /**
     * Required. The session to list all contexts from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * The page token to support pagination.
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
 * The response message for [Contexts.ListContexts][google.cloud.dialogflow.v2.Contexts.ListContexts].
 *
 * @generated from protobuf message ondewo.nlu.ListContextsResponse
 */
export interface ListContextsResponse {
    /**
     * The list of contexts. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 1;
     */
    contexts: Context[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for [Contexts.GetContext][google.cloud.dialogflow.v2.Contexts.GetContext].
 *
 * @generated from protobuf message ondewo.nlu.GetContextRequest
 */
export interface GetContextRequest {
    /**
     * Required. The name of the context. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/contexts/&lt;context_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [Contexts.CreateContext][google.cloud.dialogflow.v2.Contexts.CreateContext].
 *
 * @generated from protobuf message ondewo.nlu.CreateContextRequest
 */
export interface CreateContextRequest {
    /**
     * Required. The session to create a context for.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Required. The context to create.
     *
     * @generated from protobuf field: ondewo.nlu.Context context = 2;
     */
    context?: Context;
}
/**
 * The request message for [Contexts.UpdateContext][google.cloud.dialogflow.v2.Contexts.UpdateContext].
 *
 * @generated from protobuf message ondewo.nlu.UpdateContextRequest
 */
export interface UpdateContextRequest {
    /**
     * Required. The context to update.
     *
     * @generated from protobuf field: ondewo.nlu.Context context = 1;
     */
    context?: Context;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
}
/**
 * The request message for [Contexts.DeleteContext][google.cloud.dialogflow.v2.Contexts.DeleteContext].
 *
 * @generated from protobuf message ondewo.nlu.DeleteContextRequest
 */
export interface DeleteContextRequest {
    /**
     * Required. The name of the context to delete. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/contexts/&lt;context_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [Contexts.DeleteAllContexts][google.cloud.dialogflow.v2.Contexts.DeleteAllContexts].
 *
 * Required. The name of the session to delete all contexts from.
 * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
 *
 * @generated from protobuf message ondewo.nlu.DeleteAllContextsRequest
 */
export interface DeleteAllContextsRequest {
    /**
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
}
declare class Context$Type extends MessageType<Context> {
    constructor();
    create(value?: PartialMessage<Context>): Context;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Context): Context;
    private binaryReadMap3;
    internalBinaryWrite(message: Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Context
 */
export declare const Context: Context$Type;
declare class Context_Parameter$Type extends MessageType<Context_Parameter> {
    constructor();
    create(value?: PartialMessage<Context_Parameter>): Context_Parameter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Context_Parameter): Context_Parameter;
    internalBinaryWrite(message: Context_Parameter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Context.Parameter
 */
export declare const Context_Parameter: Context_Parameter$Type;
declare class ListContextsRequest$Type extends MessageType<ListContextsRequest> {
    constructor();
    create(value?: PartialMessage<ListContextsRequest>): ListContextsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListContextsRequest): ListContextsRequest;
    internalBinaryWrite(message: ListContextsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListContextsRequest
 */
export declare const ListContextsRequest: ListContextsRequest$Type;
declare class ListContextsResponse$Type extends MessageType<ListContextsResponse> {
    constructor();
    create(value?: PartialMessage<ListContextsResponse>): ListContextsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListContextsResponse): ListContextsResponse;
    internalBinaryWrite(message: ListContextsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListContextsResponse
 */
export declare const ListContextsResponse: ListContextsResponse$Type;
declare class GetContextRequest$Type extends MessageType<GetContextRequest> {
    constructor();
    create(value?: PartialMessage<GetContextRequest>): GetContextRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetContextRequest): GetContextRequest;
    internalBinaryWrite(message: GetContextRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetContextRequest
 */
export declare const GetContextRequest: GetContextRequest$Type;
declare class CreateContextRequest$Type extends MessageType<CreateContextRequest> {
    constructor();
    create(value?: PartialMessage<CreateContextRequest>): CreateContextRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateContextRequest): CreateContextRequest;
    internalBinaryWrite(message: CreateContextRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateContextRequest
 */
export declare const CreateContextRequest: CreateContextRequest$Type;
declare class UpdateContextRequest$Type extends MessageType<UpdateContextRequest> {
    constructor();
    create(value?: PartialMessage<UpdateContextRequest>): UpdateContextRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateContextRequest): UpdateContextRequest;
    internalBinaryWrite(message: UpdateContextRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateContextRequest
 */
export declare const UpdateContextRequest: UpdateContextRequest$Type;
declare class DeleteContextRequest$Type extends MessageType<DeleteContextRequest> {
    constructor();
    create(value?: PartialMessage<DeleteContextRequest>): DeleteContextRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteContextRequest): DeleteContextRequest;
    internalBinaryWrite(message: DeleteContextRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteContextRequest
 */
export declare const DeleteContextRequest: DeleteContextRequest$Type;
declare class DeleteAllContextsRequest$Type extends MessageType<DeleteAllContextsRequest> {
    constructor();
    create(value?: PartialMessage<DeleteAllContextsRequest>): DeleteAllContextsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteAllContextsRequest): DeleteAllContextsRequest;
    internalBinaryWrite(message: DeleteAllContextsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteAllContextsRequest
 */
export declare const DeleteAllContextsRequest: DeleteAllContextsRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Contexts
 */
export declare const Contexts: ServiceType;
export {};
