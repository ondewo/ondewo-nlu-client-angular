import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { EntityTypeCategory } from "./entity_type";
import { IntentCategory } from "./intent";
/**
 * Request to get the intent count
 *
 * @generated from protobuf message ondewo.nlu.GetIntentCountRequest
 */
export interface GetIntentCountRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. Applies a filter to the list to be counted. Default, no filter.
     *
     * @generated from protobuf field: ondewo.nlu.IntentCategory filter_by_category = 2;
     */
    filterByCategory: IntentCategory;
}
/**
 * Request to get entity type count
 *
 * @generated from protobuf message ondewo.nlu.GetEntityTypeCountRequest
 */
export interface GetEntityTypeCountRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. Applies a filter to the list to be counted. Default, no filter.
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeCategory filter_by_category = 2;
     */
    filterByCategory: EntityTypeCategory;
}
/**
 * Request to get project statistics
 *
 * @generated from protobuf message ondewo.nlu.GetProjectStatRequest
 */
export interface GetProjectStatRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
}
/**
 * Request to get project element statistics
 *
 * @generated from protobuf message ondewo.nlu.GetProjectElementStatRequest
 */
export interface GetProjectElementStatRequest {
    /**
     * Required. The name/path of the concept to get the statistic from.
     * Example:
     * <pre><code>
     * * projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;
     * * projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;
     * * projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entityValues&lt;entity_value_uuid&gt;
     * </code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Language code
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
}
declare class GetIntentCountRequest$Type extends MessageType<GetIntentCountRequest> {
    constructor();
    create(value?: PartialMessage<GetIntentCountRequest>): GetIntentCountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetIntentCountRequest): GetIntentCountRequest;
    internalBinaryWrite(message: GetIntentCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetIntentCountRequest
 */
export declare const GetIntentCountRequest: GetIntentCountRequest$Type;
declare class GetEntityTypeCountRequest$Type extends MessageType<GetEntityTypeCountRequest> {
    constructor();
    create(value?: PartialMessage<GetEntityTypeCountRequest>): GetEntityTypeCountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEntityTypeCountRequest): GetEntityTypeCountRequest;
    internalBinaryWrite(message: GetEntityTypeCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetEntityTypeCountRequest
 */
export declare const GetEntityTypeCountRequest: GetEntityTypeCountRequest$Type;
declare class GetProjectStatRequest$Type extends MessageType<GetProjectStatRequest> {
    constructor();
    create(value?: PartialMessage<GetProjectStatRequest>): GetProjectStatRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProjectStatRequest): GetProjectStatRequest;
    internalBinaryWrite(message: GetProjectStatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetProjectStatRequest
 */
export declare const GetProjectStatRequest: GetProjectStatRequest$Type;
declare class GetProjectElementStatRequest$Type extends MessageType<GetProjectElementStatRequest> {
    constructor();
    create(value?: PartialMessage<GetProjectElementStatRequest>): GetProjectElementStatRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProjectElementStatRequest): GetProjectElementStatRequest;
    internalBinaryWrite(message: GetProjectElementStatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetProjectElementStatRequest
 */
export declare const GetProjectElementStatRequest: GetProjectElementStatRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.ProjectStatistics
 */
export declare const ProjectStatistics: ServiceType;
export {};
