import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as ondewoNlu012 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/ccai-project.pb';
import * as ondewoNlu015 from '../../ondewo/nlu/session.pb';
export declare enum Mode {
    UNSPECIFIED = 0,
    EXCLUSIVE = 1,
    INCLUSIVE = 2
}
export declare enum IntentAlgorithms {
    OndewoIntentExactContextDetector = 0,
    OndewoIntentExactMatch = 1,
    OndewoIntentNamedExactMatch = 2,
    OndewoIntentSimilarityMatch = 3,
    OndewoIntentNamedSimilarityMatch = 4,
    OndewoIntentBertClassifier = 7,
    OndewoIntentMetaClassifier = 8,
    IntentExitDetector = 10,
    OndewoIntentRankingMatch = 11,
    OndewoWeightedEnsemble = 13,
    OndewoIntentExitDetector = 14,
    OndewoIntentParameterMatch = 15
}
/**
 * Message implementation for ondewo.nlu.ListLlmModelsRequest
 */
export declare class ListLlmModelsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListLlmModelsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListLlmModelsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListLlmModelsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListLlmModelsRequest, _writer: BinaryWriter): void;
    private _ccaiServiceName;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListLlmModelsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListLlmModelsRequest.AsObject>);
    get ccaiServiceName(): string;
    set ccaiServiceName(value: string);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListLlmModelsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListLlmModelsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListLlmModelsRequest.AsProtobufJSON;
}
export declare namespace ListLlmModelsRequest {
    /**
     * Standard JavaScript object representation for ListLlmModelsRequest
     */
    interface AsObject {
        ccaiServiceName: string;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for ListLlmModelsRequest
     */
    interface AsProtobufJSON {
        ccaiServiceName: string;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ListLlmModelsResponse
 */
export declare class ListLlmModelsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListLlmModelsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListLlmModelsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListLlmModelsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListLlmModelsResponse, _writer: BinaryWriter): void;
    private _llmModels?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListLlmModelsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListLlmModelsResponse.AsObject>);
    get llmModels(): LlmModel[] | undefined;
    set llmModels(value: LlmModel[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListLlmModelsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListLlmModelsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListLlmModelsResponse.AsProtobufJSON;
}
export declare namespace ListLlmModelsResponse {
    /**
     * Standard JavaScript object representation for ListLlmModelsResponse
     */
    interface AsObject {
        llmModels?: LlmModel.AsObject[];
    }
    /**
     * Protobuf JSON representation for ListLlmModelsResponse
     */
    interface AsProtobufJSON {
        llmModels: LlmModel.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.LlmModel
 */
export declare class LlmModel implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LlmModel;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LlmModel): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LlmModel, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LlmModel, _writer: BinaryWriter): void;
    private _name;
    private _displayName;
    private _description;
    private _ccaiServiceName;
    private _ccaiServiceProvider;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LlmModel to deeply clone from
     */
    constructor(_value?: RecursivePartial<LlmModel.AsObject>);
    get name(): string;
    set name(value: string);
    get displayName(): string;
    set displayName(value: string);
    get description(): string;
    set description(value: string);
    get ccaiServiceName(): string;
    set ccaiServiceName(value: string);
    get ccaiServiceProvider(): ondewoNlu014.CcaiServiceProvider;
    set ccaiServiceProvider(value: ondewoNlu014.CcaiServiceProvider);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LlmModel.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LlmModel.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LlmModel.AsProtobufJSON;
}
export declare namespace LlmModel {
    /**
     * Standard JavaScript object representation for LlmModel
     */
    interface AsObject {
        name: string;
        displayName: string;
        description: string;
        ccaiServiceName: string;
        ccaiServiceProvider: ondewoNlu014.CcaiServiceProvider;
    }
    /**
     * Protobuf JSON representation for LlmModel
     */
    interface AsProtobufJSON {
        name: string;
        displayName: string;
        description: string;
        ccaiServiceName: string;
        ccaiServiceProvider: string;
    }
}
/**
 * Message implementation for ondewo.nlu.LlmGenerateRequest
 */
export declare class LlmGenerateRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LlmGenerateRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LlmGenerateRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LlmGenerateRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LlmGenerateRequest, _writer: BinaryWriter): void;
    private _llmGenerationRequest?;
    private _ccaiServiceName;
    private _fileResources?;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LlmGenerateRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<LlmGenerateRequest.AsObject>);
    get llmGenerationRequest(): googleProtobuf003.Struct | undefined;
    set llmGenerationRequest(value: googleProtobuf003.Struct | undefined);
    get ccaiServiceName(): string;
    set ccaiServiceName(value: string);
    get fileResources(): ondewoNlu015.FileResource[] | undefined;
    set fileResources(value: ondewoNlu015.FileResource[] | undefined);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LlmGenerateRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LlmGenerateRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LlmGenerateRequest.AsProtobufJSON;
}
export declare namespace LlmGenerateRequest {
    /**
     * Standard JavaScript object representation for LlmGenerateRequest
     */
    interface AsObject {
        llmGenerationRequest?: googleProtobuf003.Struct.AsObject;
        ccaiServiceName: string;
        fileResources?: ondewoNlu015.FileResource.AsObject[];
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for LlmGenerateRequest
     */
    interface AsProtobufJSON {
        llmGenerationRequest: googleProtobuf003.Struct.AsProtobufJSON | null;
        ccaiServiceName: string;
        fileResources: ondewoNlu015.FileResource.AsProtobufJSON[] | null;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.LlmGenerateResponse
 */
export declare class LlmGenerateResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LlmGenerateResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LlmGenerateResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LlmGenerateResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LlmGenerateResponse, _writer: BinaryWriter): void;
    private _llmGenerationResponse?;
    private _fileResources?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LlmGenerateResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<LlmGenerateResponse.AsObject>);
    get llmGenerationResponse(): googleProtobuf003.Struct | undefined;
    set llmGenerationResponse(value: googleProtobuf003.Struct | undefined);
    get fileResources(): ondewoNlu015.FileResource[] | undefined;
    set fileResources(value: ondewoNlu015.FileResource[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LlmGenerateResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LlmGenerateResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LlmGenerateResponse.AsProtobufJSON;
}
export declare namespace LlmGenerateResponse {
    /**
     * Standard JavaScript object representation for LlmGenerateResponse
     */
    interface AsObject {
        llmGenerationResponse?: googleProtobuf003.Struct.AsObject;
        fileResources?: ondewoNlu015.FileResource.AsObject[];
    }
    /**
     * Protobuf JSON representation for LlmGenerateResponse
     */
    interface AsProtobufJSON {
        llmGenerationResponse: googleProtobuf003.Struct.AsProtobufJSON | null;
        fileResources: ondewoNlu015.FileResource.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.StreamingLlmGenerateResponse
 */
export declare class StreamingLlmGenerateResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): StreamingLlmGenerateResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: StreamingLlmGenerateResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: StreamingLlmGenerateResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: StreamingLlmGenerateResponse, _writer: BinaryWriter): void;
    private _llmGenerationStreamResponse?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingLlmGenerateResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<StreamingLlmGenerateResponse.AsObject>);
    get llmGenerationStreamResponse(): googleProtobuf003.Struct | undefined;
    set llmGenerationStreamResponse(value: googleProtobuf003.Struct | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): StreamingLlmGenerateResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): StreamingLlmGenerateResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): StreamingLlmGenerateResponse.AsProtobufJSON;
}
export declare namespace StreamingLlmGenerateResponse {
    /**
     * Standard JavaScript object representation for StreamingLlmGenerateResponse
     */
    interface AsObject {
        llmGenerationStreamResponse?: googleProtobuf003.Struct.AsObject;
    }
    /**
     * Protobuf JSON representation for StreamingLlmGenerateResponse
     */
    interface AsProtobufJSON {
        llmGenerationStreamResponse: googleProtobuf003.Struct.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesRequest
 */
export declare class ExtractEntitiesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExtractEntitiesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExtractEntitiesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExtractEntitiesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExtractEntitiesRequest, _writer: BinaryWriter): void;
    private _parent;
    private _text;
    private _languageCode;
    private _intentName;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExtractEntitiesRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get text(): string;
    set text(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get intentName(): string;
    set intentName(value: string);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExtractEntitiesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExtractEntitiesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExtractEntitiesRequest.AsProtobufJSON;
}
export declare namespace ExtractEntitiesRequest {
    /**
     * Standard JavaScript object representation for ExtractEntitiesRequest
     */
    interface AsObject {
        parent: string;
        text: string;
        languageCode: string;
        intentName: string;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for ExtractEntitiesRequest
     */
    interface AsProtobufJSON {
        parent: string;
        text: string;
        languageCode: string;
        intentName: string;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesFuzzyRequest
 */
export declare class ExtractEntitiesFuzzyRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExtractEntitiesFuzzyRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExtractEntitiesFuzzyRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExtractEntitiesFuzzyRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExtractEntitiesFuzzyRequest, _writer: BinaryWriter): void;
    private _parent;
    private _text;
    private _potentialEntities?;
    private _minimalScore;
    private _allowOverlaps;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesFuzzyRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExtractEntitiesFuzzyRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get text(): string;
    set text(value: string);
    get potentialEntities(): EntityTypeFuzzyNerConfig[] | undefined;
    set potentialEntities(value: EntityTypeFuzzyNerConfig[] | undefined);
    get minimalScore(): number;
    set minimalScore(value: number);
    get allowOverlaps(): boolean;
    set allowOverlaps(value: boolean);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExtractEntitiesFuzzyRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExtractEntitiesFuzzyRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExtractEntitiesFuzzyRequest.AsProtobufJSON;
}
export declare namespace ExtractEntitiesFuzzyRequest {
    /**
     * Standard JavaScript object representation for ExtractEntitiesFuzzyRequest
     */
    interface AsObject {
        parent: string;
        text: string;
        potentialEntities?: EntityTypeFuzzyNerConfig.AsObject[];
        minimalScore: number;
        allowOverlaps: boolean;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for ExtractEntitiesFuzzyRequest
     */
    interface AsProtobufJSON {
        parent: string;
        text: string;
        potentialEntities: EntityTypeFuzzyNerConfig.AsProtobufJSON[] | null;
        minimalScore: number;
        allowOverlaps: boolean;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityTypeFuzzyNerConfig
 */
export declare class EntityTypeFuzzyNerConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityTypeFuzzyNerConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityTypeFuzzyNerConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityTypeFuzzyNerConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityTypeFuzzyNerConfig, _writer: BinaryWriter): void;
    private _entityType?;
    private _minimalScore;
    private _entityValues;
    private _algorithm;
    private _allowOverlaps;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeFuzzyNerConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityTypeFuzzyNerConfig.AsObject>);
    get entityType(): ondewoNlu013.EntityType | undefined;
    set entityType(value: ondewoNlu013.EntityType | undefined);
    get minimalScore(): number;
    set minimalScore(value: number);
    get entityValues(): string[];
    set entityValues(value: string[]);
    get algorithm(): EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm;
    set algorithm(value: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm);
    get allowOverlaps(): boolean;
    set allowOverlaps(value: boolean);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityTypeFuzzyNerConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityTypeFuzzyNerConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityTypeFuzzyNerConfig.AsProtobufJSON;
}
export declare namespace EntityTypeFuzzyNerConfig {
    /**
     * Standard JavaScript object representation for EntityTypeFuzzyNerConfig
     */
    interface AsObject {
        entityType?: ondewoNlu013.EntityType.AsObject;
        minimalScore: number;
        entityValues: string[];
        algorithm: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm;
        allowOverlaps: boolean;
    }
    /**
     * Protobuf JSON representation for EntityTypeFuzzyNerConfig
     */
    interface AsProtobufJSON {
        entityType: ondewoNlu013.EntityType.AsProtobufJSON | null;
        minimalScore: number;
        entityValues: string[];
        algorithm: string;
        allowOverlaps: boolean;
    }
    enum FuzzyNerAlgorithm {
        PREFILTER_LEVENSHTEIN = 0,
        LOCAL_MAXIMUM = 1
    }
}
/**
 * Message implementation for ondewo.nlu.EntityDetected
 */
export declare class EntityDetected implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityDetected;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityDetected): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityDetected, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityDetected, _writer: BinaryWriter): void;
    private _entity?;
    private _extractionMethod;
    private _score;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityDetected to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityDetected.AsObject>);
    get entity(): ondewoNlu012.Intent.TrainingPhrase.Entity | undefined;
    set entity(value: ondewoNlu012.Intent.TrainingPhrase.Entity | undefined);
    get extractionMethod(): string;
    set extractionMethod(value: string);
    get score(): number;
    set score(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityDetected.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityDetected.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityDetected.AsProtobufJSON;
}
export declare namespace EntityDetected {
    /**
     * Standard JavaScript object representation for EntityDetected
     */
    interface AsObject {
        entity?: ondewoNlu012.Intent.TrainingPhrase.Entity.AsObject;
        extractionMethod: string;
        score: number;
    }
    /**
     * Protobuf JSON representation for EntityDetected
     */
    interface AsProtobufJSON {
        entity: ondewoNlu012.Intent.TrainingPhrase.Entity.AsProtobufJSON | null;
        extractionMethod: string;
        score: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesResponse
 */
export declare class ExtractEntitiesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ExtractEntitiesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ExtractEntitiesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ExtractEntitiesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ExtractEntitiesResponse, _writer: BinaryWriter): void;
    private _entitiesDetected?;
    private _text;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ExtractEntitiesResponse.AsObject>);
    get entitiesDetected(): EntityDetected[] | undefined;
    set entitiesDetected(value: EntityDetected[] | undefined);
    get text(): string;
    set text(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ExtractEntitiesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ExtractEntitiesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ExtractEntitiesResponse.AsProtobufJSON;
}
export declare namespace ExtractEntitiesResponse {
    /**
     * Standard JavaScript object representation for ExtractEntitiesResponse
     */
    interface AsObject {
        entitiesDetected?: EntityDetected.AsObject[];
        text: string;
    }
    /**
     * Protobuf JSON representation for ExtractEntitiesResponse
     */
    interface AsProtobufJSON {
        entitiesDetected: EntityDetected.AsProtobufJSON[] | null;
        text: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesRequest
 */
export declare class GetAlternativeSentencesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAlternativeSentencesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAlternativeSentencesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAlternativeSentencesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAlternativeSentencesRequest, _writer: BinaryWriter): void;
    private _config?;
    private _sentence;
    private _languageCode;
    private _parent;
    private _protectedWords;
    private _wordsToChange;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeSentencesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAlternativeSentencesRequest.AsObject>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get sentence(): string;
    set sentence(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get parent(): string;
    set parent(value: string);
    get protectedWords(): string[];
    set protectedWords(value: string[]);
    get wordsToChange(): string[];
    set wordsToChange(value: string[]);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAlternativeSentencesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAlternativeSentencesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAlternativeSentencesRequest.AsProtobufJSON;
}
export declare namespace GetAlternativeSentencesRequest {
    /**
     * Standard JavaScript object representation for GetAlternativeSentencesRequest
     */
    interface AsObject {
        config?: DataEnrichmentConfig.AsObject;
        sentence: string;
        languageCode: string;
        parent: string;
        protectedWords: string[];
        wordsToChange: string[];
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for GetAlternativeSentencesRequest
     */
    interface AsProtobufJSON {
        config: DataEnrichmentConfig.AsProtobufJSON | null;
        sentence: string;
        languageCode: string;
        parent: string;
        protectedWords: string[];
        wordsToChange: string[];
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GenerateUserSaysRequest
 */
export declare class GenerateUserSaysRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GenerateUserSaysRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GenerateUserSaysRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GenerateUserSaysRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GenerateUserSaysRequest, _writer: BinaryWriter): void;
    private _languageCode;
    private _parent;
    private _nRepeatSynonym;
    private _branch;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateUserSaysRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GenerateUserSaysRequest.AsObject>);
    get languageCode(): string;
    set languageCode(value: string);
    get parent(): string;
    set parent(value: string);
    get nRepeatSynonym(): number;
    set nRepeatSynonym(value: number);
    get branch(): string;
    set branch(value: string);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GenerateUserSaysRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GenerateUserSaysRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GenerateUserSaysRequest.AsProtobufJSON;
}
export declare namespace GenerateUserSaysRequest {
    /**
     * Standard JavaScript object representation for GenerateUserSaysRequest
     */
    interface AsObject {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for GenerateUserSaysRequest
     */
    interface AsProtobufJSON {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GenerateResponsesRequest
 */
export declare class GenerateResponsesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GenerateResponsesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GenerateResponsesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GenerateResponsesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GenerateResponsesRequest, _writer: BinaryWriter): void;
    private _languageCode;
    private _parent;
    private _nRepeatSynonym;
    private _branch;
    private _dropUnknownParameters;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateResponsesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GenerateResponsesRequest.AsObject>);
    get languageCode(): string;
    set languageCode(value: string);
    get parent(): string;
    set parent(value: string);
    get nRepeatSynonym(): number;
    set nRepeatSynonym(value: number);
    get branch(): string;
    set branch(value: string);
    get dropUnknownParameters(): boolean;
    set dropUnknownParameters(value: boolean);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GenerateResponsesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GenerateResponsesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GenerateResponsesRequest.AsProtobufJSON;
}
export declare namespace GenerateResponsesRequest {
    /**
     * Standard JavaScript object representation for GenerateResponsesRequest
     */
    interface AsObject {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        dropUnknownParameters: boolean;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for GenerateResponsesRequest
     */
    interface AsProtobufJSON {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        dropUnknownParameters: boolean;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesRequest
 */
export declare class GetAlternativeTrainingPhrasesRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAlternativeTrainingPhrasesRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAlternativeTrainingPhrasesRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAlternativeTrainingPhrasesRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAlternativeTrainingPhrasesRequest, _writer: BinaryWriter): void;
    private _config?;
    private _trainingPhrase?;
    private _intentName;
    private _languageCode;
    private _parent;
    private _detectEntities;
    private _similarityThreshold;
    private _protectedWords;
    private _wordsToChange;
    private _branch;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAlternativeTrainingPhrasesRequest.AsObject>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get trainingPhrase(): ondewoNlu012.Intent.TrainingPhrase | undefined;
    set trainingPhrase(value: ondewoNlu012.Intent.TrainingPhrase | undefined);
    get intentName(): string;
    set intentName(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get parent(): string;
    set parent(value: string);
    get detectEntities(): boolean;
    set detectEntities(value: boolean);
    get similarityThreshold(): number;
    set similarityThreshold(value: number);
    get protectedWords(): string[];
    set protectedWords(value: string[]);
    get wordsToChange(): string[];
    set wordsToChange(value: string[]);
    get branch(): string;
    set branch(value: string);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAlternativeTrainingPhrasesRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAlternativeTrainingPhrasesRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAlternativeTrainingPhrasesRequest.AsProtobufJSON;
}
export declare namespace GetAlternativeTrainingPhrasesRequest {
    /**
     * Standard JavaScript object representation for GetAlternativeTrainingPhrasesRequest
     */
    interface AsObject {
        config?: DataEnrichmentConfig.AsObject;
        trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase.AsObject;
        intentName: string;
        languageCode: string;
        parent: string;
        detectEntities: boolean;
        similarityThreshold: number;
        protectedWords: string[];
        wordsToChange: string[];
        branch: string;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for GetAlternativeTrainingPhrasesRequest
     */
    interface AsProtobufJSON {
        config: DataEnrichmentConfig.AsProtobufJSON | null;
        trainingPhrase: ondewoNlu012.Intent.TrainingPhrase.AsProtobufJSON | null;
        intentName: string;
        languageCode: string;
        parent: string;
        detectEntities: boolean;
        similarityThreshold: number;
        protectedWords: string[];
        wordsToChange: string[];
        branch: string;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GetSynonymsRequest
 */
export declare class GetSynonymsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSynonymsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSynonymsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSynonymsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSynonymsRequest, _writer: BinaryWriter): void;
    private _config?;
    private _word;
    private _languageCode;
    private _parent;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSynonymsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSynonymsRequest.AsObject>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get word(): string;
    set word(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get parent(): string;
    set parent(value: string);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSynonymsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSynonymsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSynonymsRequest.AsProtobufJSON;
}
export declare namespace GetSynonymsRequest {
    /**
     * Standard JavaScript object representation for GetSynonymsRequest
     */
    interface AsObject {
        config?: DataEnrichmentConfig.AsObject;
        word: string;
        languageCode: string;
        parent: string;
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for GetSynonymsRequest
     */
    interface AsProtobufJSON {
        config: DataEnrichmentConfig.AsProtobufJSON | null;
        word: string;
        languageCode: string;
        parent: string;
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GetSynonymsResponse
 */
export declare class GetSynonymsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetSynonymsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetSynonymsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetSynonymsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetSynonymsResponse, _writer: BinaryWriter): void;
    private _synonyms?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSynonymsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetSynonymsResponse.AsObject>);
    get synonyms(): Synonym[] | undefined;
    set synonyms(value: Synonym[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetSynonymsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetSynonymsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetSynonymsResponse.AsProtobufJSON;
}
export declare namespace GetSynonymsResponse {
    /**
     * Standard JavaScript object representation for GetSynonymsResponse
     */
    interface AsObject {
        synonyms?: Synonym.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetSynonymsResponse
     */
    interface AsProtobufJSON {
        synonyms: Synonym.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.Synonym
 */
export declare class Synonym implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Synonym;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Synonym): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Synonym, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Synonym, _writer: BinaryWriter): void;
    private _synonym;
    private _score;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Synonym to deeply clone from
     */
    constructor(_value?: RecursivePartial<Synonym.AsObject>);
    get synonym(): string;
    set synonym(value: string);
    get score(): number;
    set score(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Synonym.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Synonym.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Synonym.AsProtobufJSON;
}
export declare namespace Synonym {
    /**
     * Standard JavaScript object representation for Synonym
     */
    interface AsObject {
        synonym: string;
        score: number;
    }
    /**
     * Protobuf JSON representation for Synonym
     */
    interface AsProtobufJSON {
        synonym: string;
        score: number;
    }
}
/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesResponse
 */
export declare class GetAlternativeSentencesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAlternativeSentencesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAlternativeSentencesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAlternativeSentencesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAlternativeSentencesResponse, _writer: BinaryWriter): void;
    private _alternativeSentences?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeSentencesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAlternativeSentencesResponse.AsObject>);
    get alternativeSentences(): AltSentence[] | undefined;
    set alternativeSentences(value: AltSentence[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAlternativeSentencesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAlternativeSentencesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAlternativeSentencesResponse.AsProtobufJSON;
}
export declare namespace GetAlternativeSentencesResponse {
    /**
     * Standard JavaScript object representation for GetAlternativeSentencesResponse
     */
    interface AsObject {
        alternativeSentences?: AltSentence.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetAlternativeSentencesResponse
     */
    interface AsProtobufJSON {
        alternativeSentences: AltSentence.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.GenerateResponsesResponse
 */
export declare class GenerateResponsesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GenerateResponsesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GenerateResponsesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GenerateResponsesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GenerateResponsesResponse, _writer: BinaryWriter): void;
    private _responses;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateResponsesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GenerateResponsesResponse.AsObject>);
    get responses(): string[];
    set responses(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GenerateResponsesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GenerateResponsesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GenerateResponsesResponse.AsProtobufJSON;
}
export declare namespace GenerateResponsesResponse {
    /**
     * Standard JavaScript object representation for GenerateResponsesResponse
     */
    interface AsObject {
        responses: string[];
    }
    /**
     * Protobuf JSON representation for GenerateResponsesResponse
     */
    interface AsProtobufJSON {
        responses: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.GenerateUserSaysResponse
 */
export declare class GenerateUserSaysResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GenerateUserSaysResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GenerateUserSaysResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GenerateUserSaysResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GenerateUserSaysResponse, _writer: BinaryWriter): void;
    private _userSays;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateUserSaysResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GenerateUserSaysResponse.AsObject>);
    get userSays(): string[];
    set userSays(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GenerateUserSaysResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GenerateUserSaysResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GenerateUserSaysResponse.AsProtobufJSON;
}
export declare namespace GenerateUserSaysResponse {
    /**
     * Standard JavaScript object representation for GenerateUserSaysResponse
     */
    interface AsObject {
        userSays: string[];
    }
    /**
     * Protobuf JSON representation for GenerateUserSaysResponse
     */
    interface AsProtobufJSON {
        userSays: string[];
    }
}
/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesResponse
 */
export declare class GetAlternativeTrainingPhrasesResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAlternativeTrainingPhrasesResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAlternativeTrainingPhrasesResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAlternativeTrainingPhrasesResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAlternativeTrainingPhrasesResponse, _writer: BinaryWriter): void;
    private _alternativeTrainingPhrases?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAlternativeTrainingPhrasesResponse.AsObject>);
    get alternativeTrainingPhrases(): AltTrainingPhrase[] | undefined;
    set alternativeTrainingPhrases(value: AltTrainingPhrase[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAlternativeTrainingPhrasesResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAlternativeTrainingPhrasesResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAlternativeTrainingPhrasesResponse.AsProtobufJSON;
}
export declare namespace GetAlternativeTrainingPhrasesResponse {
    /**
     * Standard JavaScript object representation for GetAlternativeTrainingPhrasesResponse
     */
    interface AsObject {
        alternativeTrainingPhrases?: AltTrainingPhrase.AsObject[];
    }
    /**
     * Protobuf JSON representation for GetAlternativeTrainingPhrasesResponse
     */
    interface AsProtobufJSON {
        alternativeTrainingPhrases: AltTrainingPhrase.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.AltSentence
 */
export declare class AltSentence implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AltSentence;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AltSentence): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AltSentence, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AltSentence, _writer: BinaryWriter): void;
    private _sentence;
    private _score;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AltSentence to deeply clone from
     */
    constructor(_value?: RecursivePartial<AltSentence.AsObject>);
    get sentence(): string;
    set sentence(value: string);
    get score(): number;
    set score(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AltSentence.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AltSentence.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AltSentence.AsProtobufJSON;
}
export declare namespace AltSentence {
    /**
     * Standard JavaScript object representation for AltSentence
     */
    interface AsObject {
        sentence: string;
        score: number;
    }
    /**
     * Protobuf JSON representation for AltSentence
     */
    interface AsProtobufJSON {
        sentence: string;
        score: number;
    }
}
/**
 * Message implementation for ondewo.nlu.AltTrainingPhrase
 */
export declare class AltTrainingPhrase implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): AltTrainingPhrase;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: AltTrainingPhrase): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: AltTrainingPhrase, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: AltTrainingPhrase, _writer: BinaryWriter): void;
    private _trainingPhrase?;
    private _score;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AltTrainingPhrase to deeply clone from
     */
    constructor(_value?: RecursivePartial<AltTrainingPhrase.AsObject>);
    get trainingPhrase(): ondewoNlu012.Intent.TrainingPhrase | undefined;
    set trainingPhrase(value: ondewoNlu012.Intent.TrainingPhrase | undefined);
    get score(): number;
    set score(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): AltTrainingPhrase.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): AltTrainingPhrase.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): AltTrainingPhrase.AsProtobufJSON;
}
export declare namespace AltTrainingPhrase {
    /**
     * Standard JavaScript object representation for AltTrainingPhrase
     */
    interface AsObject {
        trainingPhrase?: ondewoNlu012.Intent.TrainingPhrase.AsObject;
        score: number;
    }
    /**
     * Protobuf JSON representation for AltTrainingPhrase
     */
    interface AsProtobufJSON {
        trainingPhrase: ondewoNlu012.Intent.TrainingPhrase.AsProtobufJSON | null;
        score: number;
    }
}
/**
 * Message implementation for ondewo.nlu.DataEnrichmentConfig
 */
export declare class DataEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DataEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DataEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DataEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DataEnrichmentConfig, _writer: BinaryWriter): void;
    private _entityEnrichment?;
    private _thesaurusEnrichment?;
    private _word2vecEnrichment?;
    private _wordNetEnrichment?;
    private _gpt2Enrichment?;
    private _gloveEnrichment?;
    private _bertEnrichment?;
    private _xlnetEnrichment?;
    private _llmEnrichment?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DataEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<DataEnrichmentConfig.AsObject>);
    get entityEnrichment(): EntityEnrichmentConfig | undefined;
    set entityEnrichment(value: EntityEnrichmentConfig | undefined);
    get thesaurusEnrichment(): ThesaurusEnrichmentConfig | undefined;
    set thesaurusEnrichment(value: ThesaurusEnrichmentConfig | undefined);
    get word2vecEnrichment(): Word2VecEnrichmentConfig | undefined;
    set word2vecEnrichment(value: Word2VecEnrichmentConfig | undefined);
    get wordNetEnrichment(): WordNetAugEnrichmentConfig | undefined;
    set wordNetEnrichment(value: WordNetAugEnrichmentConfig | undefined);
    get gpt2Enrichment(): GPT2EnrichmentConfig | undefined;
    set gpt2Enrichment(value: GPT2EnrichmentConfig | undefined);
    get gloveEnrichment(): GloVeEnrichmentConfig | undefined;
    set gloveEnrichment(value: GloVeEnrichmentConfig | undefined);
    get bertEnrichment(): BertAugEnrichmentConfig | undefined;
    set bertEnrichment(value: BertAugEnrichmentConfig | undefined);
    get xlnetEnrichment(): XLNetAugEnrichmentConfig | undefined;
    set xlnetEnrichment(value: XLNetAugEnrichmentConfig | undefined);
    get llmEnrichment(): LlmEnrichmentConfig | undefined;
    set llmEnrichment(value: LlmEnrichmentConfig | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DataEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DataEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DataEnrichmentConfig.AsProtobufJSON;
}
export declare namespace DataEnrichmentConfig {
    /**
     * Standard JavaScript object representation for DataEnrichmentConfig
     */
    interface AsObject {
        entityEnrichment?: EntityEnrichmentConfig.AsObject;
        thesaurusEnrichment?: ThesaurusEnrichmentConfig.AsObject;
        word2vecEnrichment?: Word2VecEnrichmentConfig.AsObject;
        wordNetEnrichment?: WordNetAugEnrichmentConfig.AsObject;
        gpt2Enrichment?: GPT2EnrichmentConfig.AsObject;
        gloveEnrichment?: GloVeEnrichmentConfig.AsObject;
        bertEnrichment?: BertAugEnrichmentConfig.AsObject;
        xlnetEnrichment?: XLNetAugEnrichmentConfig.AsObject;
        llmEnrichment?: LlmEnrichmentConfig.AsObject;
    }
    /**
     * Protobuf JSON representation for DataEnrichmentConfig
     */
    interface AsProtobufJSON {
        entityEnrichment: EntityEnrichmentConfig.AsProtobufJSON | null;
        thesaurusEnrichment: ThesaurusEnrichmentConfig.AsProtobufJSON | null;
        word2vecEnrichment: Word2VecEnrichmentConfig.AsProtobufJSON | null;
        wordNetEnrichment: WordNetAugEnrichmentConfig.AsProtobufJSON | null;
        gpt2Enrichment: GPT2EnrichmentConfig.AsProtobufJSON | null;
        gloveEnrichment: GloVeEnrichmentConfig.AsProtobufJSON | null;
        bertEnrichment: BertAugEnrichmentConfig.AsProtobufJSON | null;
        xlnetEnrichment: XLNetAugEnrichmentConfig.AsProtobufJSON | null;
        llmEnrichment: LlmEnrichmentConfig.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.EntityEnrichmentConfig
 */
export declare class EntityEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): EntityEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: EntityEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: EntityEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: EntityEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<EntityEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): EntityEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): EntityEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): EntityEnrichmentConfig.AsProtobufJSON;
}
export declare namespace EntityEnrichmentConfig {
    /**
     * Standard JavaScript object representation for EntityEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for EntityEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ThesaurusEnrichmentConfig
 */
export declare class ThesaurusEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ThesaurusEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ThesaurusEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ThesaurusEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ThesaurusEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ThesaurusEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<ThesaurusEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ThesaurusEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ThesaurusEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ThesaurusEnrichmentConfig.AsProtobufJSON;
}
export declare namespace ThesaurusEnrichmentConfig {
    /**
     * Standard JavaScript object representation for ThesaurusEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for ThesaurusEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.BertAugEnrichmentConfig
 */
export declare class BertAugEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BertAugEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BertAugEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BertAugEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BertAugEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BertAugEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<BertAugEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BertAugEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BertAugEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BertAugEnrichmentConfig.AsProtobufJSON;
}
export declare namespace BertAugEnrichmentConfig {
    /**
     * Standard JavaScript object representation for BertAugEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for BertAugEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.GloVeEnrichmentConfig
 */
export declare class GloVeEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GloVeEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GloVeEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GloVeEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GloVeEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GloVeEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<GloVeEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GloVeEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GloVeEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GloVeEnrichmentConfig.AsProtobufJSON;
}
export declare namespace GloVeEnrichmentConfig {
    /**
     * Standard JavaScript object representation for GloVeEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for GloVeEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.GPT2EnrichmentConfig
 */
export declare class GPT2EnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GPT2EnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GPT2EnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GPT2EnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GPT2EnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GPT2EnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<GPT2EnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GPT2EnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GPT2EnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GPT2EnrichmentConfig.AsProtobufJSON;
}
export declare namespace GPT2EnrichmentConfig {
    /**
     * Standard JavaScript object representation for GPT2EnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for GPT2EnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.Word2VecEnrichmentConfig
 */
export declare class Word2VecEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Word2VecEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Word2VecEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Word2VecEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Word2VecEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Word2VecEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<Word2VecEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Word2VecEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Word2VecEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Word2VecEnrichmentConfig.AsProtobufJSON;
}
export declare namespace Word2VecEnrichmentConfig {
    /**
     * Standard JavaScript object representation for Word2VecEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for Word2VecEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.WordNetAugEnrichmentConfig
 */
export declare class WordNetAugEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): WordNetAugEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: WordNetAugEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: WordNetAugEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: WordNetAugEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordNetAugEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<WordNetAugEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): WordNetAugEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): WordNetAugEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): WordNetAugEnrichmentConfig.AsProtobufJSON;
}
export declare namespace WordNetAugEnrichmentConfig {
    /**
     * Standard JavaScript object representation for WordNetAugEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for WordNetAugEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.XLNetAugEnrichmentConfig
 */
export declare class XLNetAugEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): XLNetAugEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: XLNetAugEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: XLNetAugEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: XLNetAugEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of XLNetAugEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<XLNetAugEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): XLNetAugEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): XLNetAugEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): XLNetAugEnrichmentConfig.AsProtobufJSON;
}
export declare namespace XLNetAugEnrichmentConfig {
    /**
     * Standard JavaScript object representation for XLNetAugEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
    /**
     * Protobuf JSON representation for XLNetAugEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    }
}
/**
 * Message implementation for ondewo.nlu.LlmEnrichmentConfig
 */
export declare class LlmEnrichmentConfig implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): LlmEnrichmentConfig;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LlmEnrichmentConfig): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: LlmEnrichmentConfig, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: LlmEnrichmentConfig, _writer: BinaryWriter): void;
    private _isActive;
    private _enrichmentFactor;
    private _executionOrder;
    private _ccaiServiceName;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LlmEnrichmentConfig to deeply clone from
     */
    constructor(_value?: RecursivePartial<LlmEnrichmentConfig.AsObject>);
    get isActive(): boolean;
    set isActive(value: boolean);
    get enrichmentFactor(): number;
    set enrichmentFactor(value: number);
    get executionOrder(): number;
    set executionOrder(value: number);
    get ccaiServiceName(): string;
    set ccaiServiceName(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LlmEnrichmentConfig.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): LlmEnrichmentConfig.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): LlmEnrichmentConfig.AsProtobufJSON;
}
export declare namespace LlmEnrichmentConfig {
    /**
     * Standard JavaScript object representation for LlmEnrichmentConfig
     */
    interface AsObject {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
        ccaiServiceName: string;
    }
    /**
     * Protobuf JSON representation for LlmEnrichmentConfig
     */
    interface AsProtobufJSON {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
        ccaiServiceName: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ClassifyIntentsRequest
 */
export declare class ClassifyIntentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClassifyIntentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClassifyIntentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClassifyIntentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClassifyIntentsRequest, _writer: BinaryWriter): void;
    private _parent;
    private _text;
    private _languageCode;
    private _activeContexts;
    private _contextNames;
    private _mode;
    private _algorithms;
    private _fieldMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClassifyIntentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClassifyIntentsRequest.AsObject>);
    get parent(): string;
    set parent(value: string);
    get text(): string;
    set text(value: string);
    get languageCode(): string;
    set languageCode(value: string);
    get activeContexts(): boolean;
    set activeContexts(value: boolean);
    get contextNames(): string[];
    set contextNames(value: string[]);
    get mode(): Mode;
    set mode(value: Mode);
    get algorithms(): IntentAlgorithms[];
    set algorithms(value: IntentAlgorithms[]);
    get fieldMask(): googleProtobuf002.FieldMask | undefined;
    set fieldMask(value: googleProtobuf002.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClassifyIntentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClassifyIntentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClassifyIntentsRequest.AsProtobufJSON;
}
export declare namespace ClassifyIntentsRequest {
    /**
     * Standard JavaScript object representation for ClassifyIntentsRequest
     */
    interface AsObject {
        parent: string;
        text: string;
        languageCode: string;
        activeContexts: boolean;
        contextNames: string[];
        mode: Mode;
        algorithms: IntentAlgorithms[];
        fieldMask?: googleProtobuf002.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for ClassifyIntentsRequest
     */
    interface AsProtobufJSON {
        parent: string;
        text: string;
        languageCode: string;
        activeContexts: boolean;
        contextNames: string[];
        mode: string;
        algorithms: string[];
        fieldMask: googleProtobuf002.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.IntentClassified
 */
export declare class IntentClassified implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IntentClassified;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentClassified): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IntentClassified, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IntentClassified, _writer: BinaryWriter): void;
    private _intentName;
    private _intentDisplayName;
    private _classifier;
    private _score;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentClassified to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentClassified.AsObject>);
    get intentName(): string;
    set intentName(value: string);
    get intentDisplayName(): string;
    set intentDisplayName(value: string);
    get classifier(): string;
    set classifier(value: string);
    get score(): number;
    set score(value: number);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentClassified.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IntentClassified.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IntentClassified.AsProtobufJSON;
}
export declare namespace IntentClassified {
    /**
     * Standard JavaScript object representation for IntentClassified
     */
    interface AsObject {
        intentName: string;
        intentDisplayName: string;
        classifier: string;
        score: number;
    }
    /**
     * Protobuf JSON representation for IntentClassified
     */
    interface AsProtobufJSON {
        intentName: string;
        intentDisplayName: string;
        classifier: string;
        score: number;
    }
}
/**
 * Message implementation for ondewo.nlu.ClassifyIntentsResponse
 */
export declare class ClassifyIntentsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ClassifyIntentsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ClassifyIntentsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ClassifyIntentsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ClassifyIntentsResponse, _writer: BinaryWriter): void;
    private _intentsClassified?;
    private _text;
    private _activeContexts;
    private _contextNames;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClassifyIntentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ClassifyIntentsResponse.AsObject>);
    get intentsClassified(): IntentClassified[] | undefined;
    set intentsClassified(value: IntentClassified[] | undefined);
    get text(): string;
    set text(value: string);
    get activeContexts(): boolean;
    set activeContexts(value: boolean);
    get contextNames(): string[];
    set contextNames(value: string[]);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ClassifyIntentsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ClassifyIntentsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ClassifyIntentsResponse.AsProtobufJSON;
}
export declare namespace ClassifyIntentsResponse {
    /**
     * Standard JavaScript object representation for ClassifyIntentsResponse
     */
    interface AsObject {
        intentsClassified?: IntentClassified.AsObject[];
        text: string;
        activeContexts: boolean;
        contextNames: string[];
    }
    /**
     * Protobuf JSON representation for ClassifyIntentsResponse
     */
    interface AsProtobufJSON {
        intentsClassified: IntentClassified.AsProtobufJSON[] | null;
        text: string;
        activeContexts: boolean;
        contextNames: string[];
    }
}
