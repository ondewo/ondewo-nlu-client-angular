import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
export declare enum EntityTypeView {
    ENTITY_TYPE_VIEW_UNSPECIFIED = 0,
    ENTITY_TYPE_VIEW_FULL = 1,
    ENTITY_TYPE_VIEW_PARTIAL = 2,
    ENTITY_TYPE_VIEW_SHALLOW = 3
}
export declare enum EntityTypeCategory {
    ALL_ENTITY_TYPES = 0,
    DEFAULT_ENTITY_TYPES = 1,
    USER_DEFINED_ENTITY_TYPES = 2
}
/**
 * Message implementation for ondewo.nlu.EntityType
 */
export declare class EntityType implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityType;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityType): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityType, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityType, _writer: BinaryWriter): void;
    private _name?;
    private _displayName?;
    private _kind?;
    private _autoExpansionMode?;
    private _entities?;
    private _nextPageToken?;
    private _entityCount?;
    private _status?;
    private _synonymCount?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityType to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityType.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get kind(): EntityType.Kind | undefined;
    set kind(value: EntityType.Kind | undefined);
    get autoExpansionMode(): EntityType.AutoExpansionMode | undefined;
    set autoExpansionMode(value: EntityType.AutoExpansionMode | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    get entityCount(): number | undefined;
    set entityCount(value: number | undefined);
    get status(): EntityType.EntityTypeStatus | undefined;
    set status(value: EntityType.EntityTypeStatus | undefined);
    get synonymCount(): number | undefined;
    set synonymCount(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityType.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityType.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityType.AsProtobufJSON;
}
export declare module EntityType {
    /**
     * Standard JavaScript object representation for EntityType
     */
    interface AsObject {
        name?: string;
        displayName?: string;
        kind?: EntityType.Kind;
        autoExpansionMode?: EntityType.AutoExpansionMode;
        entities?: EntityType.Entity.AsObject[];
        nextPageToken?: string;
        entityCount?: number;
        status?: EntityType.EntityTypeStatus;
        synonymCount?: number;
    }
    /**
     * Protobuf JSON representation for EntityType
     */
    interface AsProtobufJSON {
        name?: string;
        displayName?: string;
        kind?: string;
        autoExpansionMode?: string;
        entities?: EntityType.Entity.AsProtobufJSON[] | null;
        nextPageToken?: string;
        entityCount?: number;
        status?: string;
        synonymCount?: number;
    }
    enum Kind {
        KIND_UNSPECIFIED = 0,
        KIND_MAP = 1,
        KIND_LIST = 2
    }
    enum EntityTypeStatus {
        ACTIVE = 0,
        INACTIVE = 1
    }
    enum AutoExpansionMode {
        AUTO_EXPANSION_MODE_UNSPECIFIED = 0,
        AUTO_EXPANSION_MODE_DEFAULT = 1
    }
    /**
     * Message implementation for ondewo.nlu.Entity
     */
    class Entity implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Entity;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Entity): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Entity, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter): void;
        private _value?;
        private _synonyms?;
        private _name?;
        private _displayName?;
        private _synonymCount?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Entity to deeply clone from
         */
        constructor(_value?: RecursivePartial<Entity.AsObject>);
        get value(): string | undefined;
        set value(value: string | undefined);
        get synonyms(): string[] | undefined;
        set synonyms(value: string[] | undefined);
        get name(): string | undefined;
        set name(value: string | undefined);
        get displayName(): string | undefined;
        set displayName(value: string | undefined);
        get synonymCount(): number | undefined;
        set synonymCount(value: number | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Entity.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Entity.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Entity.AsProtobufJSON;
    }
    module Entity {
        /**
         * Standard JavaScript object representation for Entity
         */
        interface AsObject {
            value?: string;
            synonyms?: string[];
            name?: string;
            displayName?: string;
            synonymCount?: number;
        }
        /**
         * Protobuf JSON representation for Entity
         */
        interface AsProtobufJSON {
            value?: string;
            synonyms?: string[];
            name?: string;
            displayName?: string;
            synonymCount?: number;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntityTypesRequest
 */
export declare class ListEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _pageToken?;
    private _entityTypeView?;
    private _filterByCategory?;
    private _sortByField?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntityTypesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get entityTypeView(): EntityTypeView | undefined;
    set entityTypeView(value: EntityTypeView | undefined);
    get filterByCategory(): EntityTypeCategory | undefined;
    set filterByCategory(value: EntityTypeCategory | undefined);
    get sortByField(): EntityTypeSorting | undefined;
    set sortByField(value: EntityTypeSorting | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntityTypesRequest.AsProtobufJSON;
}
export declare module ListEntityTypesRequest {
    /**
     * Standard JavaScript object representation for ListEntityTypesRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        pageToken?: string;
        entityTypeView?: EntityTypeView;
        filterByCategory?: EntityTypeCategory;
        sortByField?: EntityTypeSorting.AsObject;
    }
    /**
     * Protobuf JSON representation for ListEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        pageToken?: string;
        entityTypeView?: string;
        filterByCategory?: string;
        sortByField?: EntityTypeSorting.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ListEntityTypesResponse
 */
export declare class ListEntityTypesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListEntityTypesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListEntityTypesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListEntityTypesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListEntityTypesResponse, _writer: BinaryWriter): void;
    private _entityTypes?;
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListEntityTypesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListEntityTypesResponse.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListEntityTypesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListEntityTypesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListEntityTypesResponse.AsProtobufJSON;
}
export declare module ListEntityTypesResponse {
    /**
     * Standard JavaScript object representation for ListEntityTypesResponse
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListEntityTypesResponse
     */
    interface AsProtobufJSON {
        entityTypes?: EntityType.AsProtobufJSON[] | null;
        nextPageToken?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetEntityTypeRequest
 */
export declare class GetEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetEntityTypeRequest, _writer: BinaryWriter): void;
    private _name?;
    private _languageCode?;
    private _pageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetEntityTypeRequest.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetEntityTypeRequest.AsProtobufJSON;
}
export declare module GetEntityTypeRequest {
    /**
     * Standard JavaScript object representation for GetEntityTypeRequest
     */
    interface AsObject {
        name?: string;
        languageCode?: string;
        pageToken?: string;
    }
    /**
     * Protobuf JSON representation for GetEntityTypeRequest
     */
    interface AsProtobufJSON {
        name?: string;
        languageCode?: string;
        pageToken?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateEntityTypeRequest
 */
export declare class CreateEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateEntityTypeRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entityType?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateEntityTypeRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateEntityTypeRequest.AsProtobufJSON;
}
export declare module CreateEntityTypeRequest {
    /**
     * Standard JavaScript object representation for CreateEntityTypeRequest
     */
    interface AsObject {
        parent?: string;
        entityType?: EntityType.AsObject;
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for CreateEntityTypeRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entityType?: EntityType.AsProtobufJSON | null;
        languageCode?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateEntityTypeRequest
 */
export declare class UpdateEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateEntityTypeRequest, _writer: BinaryWriter): void;
    private _entityType?;
    private _languageCode?;
    private _updateMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateEntityTypeRequest.AsObject>);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf007.FieldMask | undefined;
    set updateMask(value: googleProtobuf007.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateEntityTypeRequest.AsProtobufJSON;
}
export declare module UpdateEntityTypeRequest {
    /**
     * Standard JavaScript object representation for UpdateEntityTypeRequest
     */
    interface AsObject {
        entityType?: EntityType.AsObject;
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateEntityTypeRequest
     */
    interface AsProtobufJSON {
        entityType?: EntityType.AsProtobufJSON | null;
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteEntityTypeRequest
 */
export declare class DeleteEntityTypeRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteEntityTypeRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteEntityTypeRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteEntityTypeRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteEntityTypeRequest, _writer: BinaryWriter): void;
    private _name?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteEntityTypeRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteEntityTypeRequest.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteEntityTypeRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteEntityTypeRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteEntityTypeRequest.AsProtobufJSON;
}
export declare module DeleteEntityTypeRequest {
    /**
     * Standard JavaScript object representation for DeleteEntityTypeRequest
     */
    interface AsObject {
        name?: string;
    }
    /**
     * Protobuf JSON representation for DeleteEntityTypeRequest
     */
    interface AsProtobufJSON {
        name?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesRequest
 */
export declare class BatchUpdateEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeBatchUri?;
    private _entityTypeBatchInline?;
    private _languageCode?;
    private _updateMask?;
    private _entityTypeBatch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntityTypesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeBatchUri(): string | undefined;
    set entityTypeBatchUri(value: string | undefined);
    get entityTypeBatchInline(): EntityTypeBatch | undefined;
    set entityTypeBatchInline(value: EntityTypeBatch | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf007.FieldMask | undefined;
    set updateMask(value: googleProtobuf007.FieldMask | undefined);
    get entityTypeBatch(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntityTypesRequest.AsProtobufJSON;
}
export declare module BatchUpdateEntityTypesRequest {
    /**
     * Standard JavaScript object representation for BatchUpdateEntityTypesRequest
     */
    interface AsObject {
        parent?: string;
        entityTypeBatchUri?: string;
        entityTypeBatchInline?: EntityTypeBatch.AsObject;
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entityTypeBatchUri?: string | null;
        entityTypeBatchInline?: EntityTypeBatch.AsProtobufJSON | null;
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    }
    enum EntityTypeBatchCase {
        none = 0,
        entityTypeBatchUri = 1,
        entityTypeBatchInline = 2
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntityTypesResponse
 */
export declare class BatchUpdateEntityTypesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntityTypesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntityTypesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntityTypesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntityTypesResponse, _writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntityTypesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntityTypesResponse.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntityTypesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntityTypesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntityTypesResponse.AsProtobufJSON;
}
export declare module BatchUpdateEntityTypesResponse {
    /**
     * Standard JavaScript object representation for BatchUpdateEntityTypesResponse
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntityTypesResponse
     */
    interface AsProtobufJSON {
        entityTypes?: EntityType.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteEntityTypesRequest
 */
export declare class BatchDeleteEntityTypesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteEntityTypesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteEntityTypesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteEntityTypesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteEntityTypesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeNames?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteEntityTypesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteEntityTypesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeNames(): string[] | undefined;
    set entityTypeNames(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchDeleteEntityTypesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteEntityTypesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteEntityTypesRequest.AsProtobufJSON;
}
export declare module BatchDeleteEntityTypesRequest {
    /**
     * Standard JavaScript object representation for BatchDeleteEntityTypesRequest
     */
    interface AsObject {
        parent?: string;
        entityTypeNames?: string[];
    }
    /**
     * Protobuf JSON representation for BatchDeleteEntityTypesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entityTypeNames?: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.BatchCreateEntitiesRequest
 */
export declare class BatchCreateEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchCreateEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchCreateEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchCreateEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchCreateEntitiesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entities?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchCreateEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchCreateEntitiesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchCreateEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchCreateEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchCreateEntitiesRequest.AsProtobufJSON;
}
export declare module BatchCreateEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchCreateEntitiesRequest
     */
    interface AsObject {
        parent?: string;
        entities?: EntityType.Entity.AsObject[];
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for BatchCreateEntitiesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entities?: EntityType.Entity.AsProtobufJSON[] | null;
        languageCode?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateEntitiesRequest
 */
export declare class BatchUpdateEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateEntitiesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entities?;
    private _languageCode?;
    private _updateMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateEntitiesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf007.FieldMask | undefined;
    set updateMask(value: googleProtobuf007.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateEntitiesRequest.AsProtobufJSON;
}
export declare module BatchUpdateEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchUpdateEntitiesRequest
     */
    interface AsObject {
        parent?: string;
        entities?: EntityType.Entity.AsObject[];
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for BatchUpdateEntitiesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entities?: EntityType.Entity.AsProtobufJSON[] | null;
        languageCode?: string;
        updateMask?: googleProtobuf007.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteEntitiesRequest
 */
export declare class BatchDeleteEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteEntitiesRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _entityValues?;
    private _languageCode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteEntitiesRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityValues(): string[] | undefined;
    set entityValues(value: string[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchDeleteEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteEntitiesRequest.AsProtobufJSON;
}
export declare module BatchDeleteEntitiesRequest {
    /**
     * Standard JavaScript object representation for BatchDeleteEntitiesRequest
     */
    interface AsObject {
        parent?: string;
        entityValues?: string[];
        languageCode?: string;
    }
    /**
     * Protobuf JSON representation for BatchDeleteEntitiesRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        entityValues?: string[];
        languageCode?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeBatch
 */
export declare class EntityTypeBatch implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeBatch;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeBatch): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeBatch, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeBatch, _writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeBatch to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeBatch.AsObject>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeBatch.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeBatch.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeBatch.AsProtobufJSON;
}
export declare module EntityTypeBatch {
    /**
     * Standard JavaScript object representation for EntityTypeBatch
     */
    interface AsObject {
        entityTypes?: EntityType.AsObject[];
    }
    /**
     * Protobuf JSON representation for EntityTypeBatch
     */
    interface AsProtobufJSON {
        entityTypes?: EntityType.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeSorting
 */
export declare class EntityTypeSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeSorting, _writer: BinaryWriter): void;
    private _sortingField?;
    private _sortingMode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeSorting.AsObject>);
    get sortingField(): EntityTypeSorting.EntityTypeSortingField | undefined;
    set sortingField(value: EntityTypeSorting.EntityTypeSortingField | undefined);
    get sortingMode(): ondewoNlu008.SortingMode | undefined;
    set sortingMode(value: ondewoNlu008.SortingMode | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeSorting.AsProtobufJSON;
}
export declare module EntityTypeSorting {
    /**
     * Standard JavaScript object representation for EntityTypeSorting
     */
    interface AsObject {
        sortingField?: EntityTypeSorting.EntityTypeSortingField;
        sortingMode?: ondewoNlu008.SortingMode;
    }
    /**
     * Protobuf JSON representation for EntityTypeSorting
     */
    interface AsProtobufJSON {
        sortingField?: string;
        sortingMode?: string;
    }
    enum EntityTypeSortingField {
        NO_ENTITY_TYPE_SORTING = 0,
        SORT_ENTITY_TYPE_BY_NAME = 1,
        SORT_ENTITY_TYPE_BY_CREATION_DATE = 2,
        SORT_ENTITY_TYPE_BY_LAST_UPDATED = 3,
        SORT_ENTITY_TYPE_BY_ENTITY_VALUE_COUNT = 4,
        SORT_ENTITY_TYPE_BY_SYNONYM_COUNT = 5
    }
}
