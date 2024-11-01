import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.Context
 */
export declare class Context implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Context;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Context): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Context, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Context, _writer: BinaryWriter): void;
    private _name;
    private _lifespanCount;
    private _parameters;
    private _lifespanTime;
    private _createdAt?;
    private _modifiedAt?;
    private _createdBy;
    private _modifiedBy;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Context to deeply clone from
     */
    constructor(_value?: RecursivePartial<Context.AsObject>);
    get name(): string;
    set name(value: string);
    get lifespanCount(): number;
    set lifespanCount(value: number);
    get parameters(): {
        [prop: string]: Context.Parameter;
    };
    set parameters(value: {
        [prop: string]: Context.Parameter;
    });
    get lifespanTime(): number;
    set lifespanTime(value: number);
    get createdAt(): googleProtobuf005.Timestamp | undefined;
    set createdAt(value: googleProtobuf005.Timestamp | undefined);
    get modifiedAt(): googleProtobuf005.Timestamp | undefined;
    set modifiedAt(value: googleProtobuf005.Timestamp | undefined);
    get createdBy(): string;
    set createdBy(value: string);
    get modifiedBy(): string;
    set modifiedBy(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Context.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Context.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Context.AsProtobufJSON;
}
export declare namespace Context {
    /**
     * Standard JavaScript object representation for Context
     */
    interface AsObject {
        name: string;
        lifespanCount: number;
        parameters: {
            [prop: string]: Context.Parameter;
        };
        lifespanTime: number;
        createdAt?: googleProtobuf005.Timestamp.AsObject;
        modifiedAt?: googleProtobuf005.Timestamp.AsObject;
        createdBy: string;
        modifiedBy: string;
    }
    /**
     * Protobuf JSON representation for Context
     */
    interface AsProtobufJSON {
        name: string;
        lifespanCount: number;
        parameters: {
            [prop: string]: Context.Parameter;
        };
        lifespanTime: number;
        createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
        createdBy: string;
        modifiedBy: string;
    }
    /**
     * Message implementation for ondewo.nlu.Context.Parameter
     */
    class Parameter implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Parameter;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Parameter): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Parameter, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Parameter, _writer: BinaryWriter): void;
        private _name;
        private _displayName;
        private _value;
        private _valueOriginal;
        private _createdAt?;
        private _modifiedAt?;
        private _createdBy;
        private _modifiedBy;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Parameter to deeply clone from
         */
        constructor(_value?: RecursivePartial<Parameter.AsObject>);
        get name(): string;
        set name(value: string);
        get displayName(): string;
        set displayName(value: string);
        get value(): string;
        set value(value: string);
        get valueOriginal(): string;
        set valueOriginal(value: string);
        get createdAt(): googleProtobuf005.Timestamp | undefined;
        set createdAt(value: googleProtobuf005.Timestamp | undefined);
        get modifiedAt(): googleProtobuf005.Timestamp | undefined;
        set modifiedAt(value: googleProtobuf005.Timestamp | undefined);
        get createdBy(): string;
        set createdBy(value: string);
        get modifiedBy(): string;
        set modifiedBy(value: string);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Parameter.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Parameter.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Parameter.AsProtobufJSON;
    }
    namespace Parameter {
        /**
         * Standard JavaScript object representation for Parameter
         */
        interface AsObject {
            name: string;
            displayName: string;
            value: string;
            valueOriginal: string;
            createdAt?: googleProtobuf005.Timestamp.AsObject;
            modifiedAt?: googleProtobuf005.Timestamp.AsObject;
            createdBy: string;
            modifiedBy: string;
        }
        /**
         * Protobuf JSON representation for Parameter
         */
        interface AsProtobufJSON {
            name: string;
            displayName: string;
            value: string;
            valueOriginal: string;
            createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
            modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
            createdBy: string;
            modifiedBy: string;
        }
    }
    /**
     * Message implementation for ondewo.nlu.Context.ParametersEntry
     */
    class ParametersEntry implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ParametersEntry;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ParametersEntry): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ParametersEntry, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ParametersEntry, _writer: BinaryWriter): void;
        private _key;
        private _value?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ParametersEntry to deeply clone from
         */
        constructor(_value?: RecursivePartial<ParametersEntry.AsObject>);
        get key(): string;
        set key(value: string);
        get value(): Context.Parameter | undefined;
        set value(value: Context.Parameter | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): ParametersEntry.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ParametersEntry.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ParametersEntry.AsProtobufJSON;
    }
    namespace ParametersEntry {
        /**
         * Standard JavaScript object representation for ParametersEntry
         */
        interface AsObject {
            key: string;
            value?: Context.Parameter.AsObject;
        }
        /**
         * Protobuf JSON representation for ParametersEntry
         */
        interface AsProtobufJSON {
            key: string;
            value: Context.Parameter.AsProtobufJSON | null;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.ListContextsRequest
 */
export declare class ListContextsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListContextsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListContextsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListContextsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListContextsRequest, _writer: BinaryWriter): void;
    private _sessionId;
    private _pageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListContextsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListContextsRequest.AsObject>);
    get sessionId(): string;
    set sessionId(value: string);
    get pageToken(): string;
    set pageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListContextsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListContextsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListContextsRequest.AsProtobufJSON;
}
export declare namespace ListContextsRequest {
    /**
     * Standard JavaScript object representation for ListContextsRequest
     */
    interface AsObject {
        sessionId: string;
        pageToken: string;
    }
    /**
     * Protobuf JSON representation for ListContextsRequest
     */
    interface AsProtobufJSON {
        sessionId: string;
        pageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.ListContextsResponse
 */
export declare class ListContextsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListContextsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListContextsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListContextsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListContextsResponse, _writer: BinaryWriter): void;
    private _contexts?;
    private _nextPageToken;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListContextsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListContextsResponse.AsObject>);
    get contexts(): Context[] | undefined;
    set contexts(value: Context[] | undefined);
    get nextPageToken(): string;
    set nextPageToken(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListContextsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListContextsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListContextsResponse.AsProtobufJSON;
}
export declare namespace ListContextsResponse {
    /**
     * Standard JavaScript object representation for ListContextsResponse
     */
    interface AsObject {
        contexts?: Context.AsObject[];
        nextPageToken: string;
    }
    /**
     * Protobuf JSON representation for ListContextsResponse
     */
    interface AsProtobufJSON {
        contexts: Context.AsProtobufJSON[] | null;
        nextPageToken: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetContextRequest
 */
export declare class GetContextRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetContextRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetContextRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetContextRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetContextRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetContextRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetContextRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetContextRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetContextRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetContextRequest.AsProtobufJSON;
}
export declare namespace GetContextRequest {
    /**
     * Standard JavaScript object representation for GetContextRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for GetContextRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateContextRequest
 */
export declare class CreateContextRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateContextRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateContextRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateContextRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateContextRequest, _writer: BinaryWriter): void;
    private _sessionId;
    private _context?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateContextRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateContextRequest.AsObject>);
    get sessionId(): string;
    set sessionId(value: string);
    get context(): Context | undefined;
    set context(value: Context | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateContextRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateContextRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateContextRequest.AsProtobufJSON;
}
export declare namespace CreateContextRequest {
    /**
     * Standard JavaScript object representation for CreateContextRequest
     */
    interface AsObject {
        sessionId: string;
        context?: Context.AsObject;
    }
    /**
     * Protobuf JSON representation for CreateContextRequest
     */
    interface AsProtobufJSON {
        sessionId: string;
        context: Context.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateContextRequest
 */
export declare class UpdateContextRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateContextRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateContextRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateContextRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateContextRequest, _writer: BinaryWriter): void;
    private _context?;
    private _updateMask?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateContextRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateContextRequest.AsObject>);
    get context(): Context | undefined;
    set context(value: Context | undefined);
    get updateMask(): googleProtobuf004.FieldMask | undefined;
    set updateMask(value: googleProtobuf004.FieldMask | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateContextRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateContextRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateContextRequest.AsProtobufJSON;
}
export declare namespace UpdateContextRequest {
    /**
     * Standard JavaScript object representation for UpdateContextRequest
     */
    interface AsObject {
        context?: Context.AsObject;
        updateMask?: googleProtobuf004.FieldMask.AsObject;
    }
    /**
     * Protobuf JSON representation for UpdateContextRequest
     */
    interface AsProtobufJSON {
        context: Context.AsProtobufJSON | null;
        updateMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteContextRequest
 */
export declare class DeleteContextRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteContextRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteContextRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteContextRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteContextRequest, _writer: BinaryWriter): void;
    private _name;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteContextRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteContextRequest.AsObject>);
    get name(): string;
    set name(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteContextRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteContextRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteContextRequest.AsProtobufJSON;
}
export declare namespace DeleteContextRequest {
    /**
     * Standard JavaScript object representation for DeleteContextRequest
     */
    interface AsObject {
        name: string;
    }
    /**
     * Protobuf JSON representation for DeleteContextRequest
     */
    interface AsProtobufJSON {
        name: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteAllContextsRequest
 */
export declare class DeleteAllContextsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteAllContextsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteAllContextsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteAllContextsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteAllContextsRequest, _writer: BinaryWriter): void;
    private _sessionId;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteAllContextsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteAllContextsRequest.AsObject>);
    get sessionId(): string;
    set sessionId(value: string);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteAllContextsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteAllContextsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteAllContextsRequest.AsProtobufJSON;
}
export declare namespace DeleteAllContextsRequest {
    /**
     * Standard JavaScript object representation for DeleteAllContextsRequest
     */
    interface AsObject {
        sessionId: string;
    }
    /**
     * Protobuf JSON representation for DeleteAllContextsRequest
     */
    interface AsProtobufJSON {
        sessionId: string;
    }
}
