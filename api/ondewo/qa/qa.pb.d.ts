import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu010 from '../../ondewo/nlu/session.pb';
/**
 * Message implementation for ondewo.qa.GetAnswerRequest
 */
export declare class GetAnswerRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAnswerRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAnswerRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAnswerRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAnswerRequest, _writer: BinaryWriter): void;
    private _sessionId?;
    private _text?;
    private _maxNumAnswers?;
    private _thresholdReader?;
    private _thresholdRetriever?;
    private _thresholdOverall?;
    private _readerModelName?;
    private _urlFilter?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAnswerRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAnswerRequest.AsObject>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get text(): ondewoNlu010.TextInput | undefined;
    set text(value: ondewoNlu010.TextInput | undefined);
    get maxNumAnswers(): number | undefined;
    set maxNumAnswers(value: number | undefined);
    get thresholdReader(): number | undefined;
    set thresholdReader(value: number | undefined);
    get thresholdRetriever(): number | undefined;
    set thresholdRetriever(value: number | undefined);
    get thresholdOverall(): number | undefined;
    set thresholdOverall(value: number | undefined);
    get readerModelName(): string | undefined;
    set readerModelName(value: string | undefined);
    get urlFilter(): UrlFilter | undefined;
    set urlFilter(value: UrlFilter | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAnswerRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAnswerRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAnswerRequest.AsProtobufJSON;
}
export declare module GetAnswerRequest {
    /**
     * Standard JavaScript object representation for GetAnswerRequest
     */
    interface AsObject {
        sessionId?: string;
        text?: ondewoNlu010.TextInput.AsObject;
        maxNumAnswers?: number;
        thresholdReader?: number;
        thresholdRetriever?: number;
        thresholdOverall?: number;
        readerModelName?: string;
        urlFilter?: UrlFilter.AsObject;
    }
    /**
     * Protobuf JSON representation for GetAnswerRequest
     */
    interface AsProtobufJSON {
        sessionId?: string;
        text?: ondewoNlu010.TextInput.AsProtobufJSON | null;
        maxNumAnswers?: number;
        thresholdReader?: number;
        thresholdRetriever?: number;
        thresholdOverall?: number;
        readerModelName?: string;
        urlFilter?: UrlFilter.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.qa.GetAnswerResponse
 */
export declare class GetAnswerResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetAnswerResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetAnswerResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetAnswerResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetAnswerResponse, _writer: BinaryWriter): void;
    private _queryResult?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAnswerResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetAnswerResponse.AsObject>);
    get queryResult(): ondewoNlu010.DetectIntentResponse | undefined;
    set queryResult(value: ondewoNlu010.DetectIntentResponse | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetAnswerResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetAnswerResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetAnswerResponse.AsProtobufJSON;
}
export declare module GetAnswerResponse {
    /**
     * Standard JavaScript object representation for GetAnswerResponse
     */
    interface AsObject {
        queryResult?: ondewoNlu010.DetectIntentResponse.AsObject;
    }
    /**
     * Protobuf JSON representation for GetAnswerResponse
     */
    interface AsProtobufJSON {
        queryResult?: ondewoNlu010.DetectIntentResponse.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.qa.RunScraperRequest
 */
export declare class RunScraperRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RunScraperRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RunScraperRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RunScraperRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RunScraperRequest, _writer: BinaryWriter): void;
    private _projectIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunScraperRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<RunScraperRequest.AsObject>);
    get projectIds(): string[] | undefined;
    set projectIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RunScraperRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RunScraperRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RunScraperRequest.AsProtobufJSON;
}
export declare module RunScraperRequest {
    /**
     * Standard JavaScript object representation for RunScraperRequest
     */
    interface AsObject {
        projectIds?: string[];
    }
    /**
     * Protobuf JSON representation for RunScraperRequest
     */
    interface AsProtobufJSON {
        projectIds?: string[];
    }
}
/**
 * Message implementation for ondewo.qa.RunScraperResponse
 */
export declare class RunScraperResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RunScraperResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RunScraperResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RunScraperResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RunScraperResponse, _writer: BinaryWriter): void;
    private _scraperContainers?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunScraperResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<RunScraperResponse.AsObject>);
    get scraperContainers(): RunScraperResponse.ScraperContainer[] | undefined;
    set scraperContainers(value: RunScraperResponse.ScraperContainer[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RunScraperResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RunScraperResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RunScraperResponse.AsProtobufJSON;
}
export declare module RunScraperResponse {
    /**
     * Standard JavaScript object representation for RunScraperResponse
     */
    interface AsObject {
        scraperContainers?: RunScraperResponse.ScraperContainer.AsObject[];
    }
    /**
     * Protobuf JSON representation for RunScraperResponse
     */
    interface AsProtobufJSON {
        scraperContainers?: RunScraperResponse.ScraperContainer.AsProtobufJSON[] | null;
    }
    /**
     * Message implementation for ondewo.qa.ScraperContainer
     */
    class ScraperContainer implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): ScraperContainer;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: ScraperContainer): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: ScraperContainer, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: ScraperContainer, _writer: BinaryWriter): void;
        private _containerName?;
        private _containerId?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ScraperContainer to deeply clone from
         */
        constructor(_value?: RecursivePartial<ScraperContainer.AsObject>);
        get containerName(): string | undefined;
        set containerName(value: string | undefined);
        get containerId(): string | undefined;
        set containerId(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): ScraperContainer.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): ScraperContainer.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): ScraperContainer.AsProtobufJSON;
    }
    module ScraperContainer {
        /**
         * Standard JavaScript object representation for ScraperContainer
         */
        interface AsObject {
            containerName?: string;
            containerId?: string;
        }
        /**
         * Protobuf JSON representation for ScraperContainer
         */
        interface AsProtobufJSON {
            containerName?: string;
            containerId?: string;
        }
    }
}
/**
 * Message implementation for ondewo.qa.RunTrainingResponse
 */
export declare class RunTrainingResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): RunTrainingResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RunTrainingResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: RunTrainingResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: RunTrainingResponse, _writer: BinaryWriter): void;
    private _f1?;
    private _accuracy?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunTrainingResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<RunTrainingResponse.AsObject>);
    get f1(): number | undefined;
    set f1(value: number | undefined);
    get accuracy(): number | undefined;
    set accuracy(value: number | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RunTrainingResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): RunTrainingResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): RunTrainingResponse.AsProtobufJSON;
}
export declare module RunTrainingResponse {
    /**
     * Standard JavaScript object representation for RunTrainingResponse
     */
    interface AsObject {
        f1?: number;
        accuracy?: number;
    }
    /**
     * Protobuf JSON representation for RunTrainingResponse
     */
    interface AsProtobufJSON {
        f1?: number;
        accuracy?: number;
    }
}
/**
 * Message implementation for ondewo.qa.UrlFilter
 */
export declare class UrlFilter implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UrlFilter;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UrlFilter): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UrlFilter, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UrlFilter, _writer: BinaryWriter): void;
    private _allowedValues?;
    private _regexFilterInclude?;
    private _regexFilterExclude?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UrlFilter to deeply clone from
     */
    constructor(_value?: RecursivePartial<UrlFilter.AsObject>);
    get allowedValues(): string[] | undefined;
    set allowedValues(value: string[] | undefined);
    get regexFilterInclude(): string | undefined;
    set regexFilterInclude(value: string | undefined);
    get regexFilterExclude(): string | undefined;
    set regexFilterExclude(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UrlFilter.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UrlFilter.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UrlFilter.AsProtobufJSON;
}
export declare module UrlFilter {
    /**
     * Standard JavaScript object representation for UrlFilter
     */
    interface AsObject {
        allowedValues?: string[];
        regexFilterInclude?: string;
        regexFilterExclude?: string;
    }
    /**
     * Protobuf JSON representation for UrlFilter
     */
    interface AsProtobufJSON {
        allowedValues?: string[];
        regexFilterInclude?: string;
        regexFilterExclude?: string;
    }
}
/**
 * Message implementation for ondewo.qa.GetServerStateResponse
 */
export declare class GetServerStateResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetServerStateResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetServerStateResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetServerStateResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetServerStateResponse, _writer: BinaryWriter): void;
    private _serverIsReady?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetServerStateResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetServerStateResponse.AsObject>);
    get serverIsReady(): boolean | undefined;
    set serverIsReady(value: boolean | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetServerStateResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetServerStateResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetServerStateResponse.AsProtobufJSON;
}
export declare module GetServerStateResponse {
    /**
     * Standard JavaScript object representation for GetServerStateResponse
     */
    interface AsObject {
        serverIsReady?: boolean;
    }
    /**
     * Protobuf JSON representation for GetServerStateResponse
     */
    interface AsProtobufJSON {
        serverIsReady?: boolean;
    }
}
/**
 * Message implementation for ondewo.qa.ListProjectIdsResponse
 */
export declare class ListProjectIdsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListProjectIdsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListProjectIdsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListProjectIdsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListProjectIdsResponse, _writer: BinaryWriter): void;
    private _projectIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectIdsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListProjectIdsResponse.AsObject>);
    get projectIds(): string[] | undefined;
    set projectIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListProjectIdsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListProjectIdsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListProjectIdsResponse.AsProtobufJSON;
}
export declare module ListProjectIdsResponse {
    /**
     * Standard JavaScript object representation for ListProjectIdsResponse
     */
    interface AsObject {
        projectIds?: string[];
    }
    /**
     * Protobuf JSON representation for ListProjectIdsResponse
     */
    interface AsProtobufJSON {
        projectIds?: string[];
    }
}
/**
 * Message implementation for ondewo.qa.GetProjectConfigRequest
 */
export declare class GetProjectConfigRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetProjectConfigRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetProjectConfigRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetProjectConfigRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetProjectConfigRequest, _writer: BinaryWriter): void;
    private _projectId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectConfigRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetProjectConfigRequest.AsObject>);
    get projectId(): string | undefined;
    set projectId(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetProjectConfigRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetProjectConfigRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectConfigRequest.AsProtobufJSON;
}
export declare module GetProjectConfigRequest {
    /**
     * Standard JavaScript object representation for GetProjectConfigRequest
     */
    interface AsObject {
        projectId?: string;
    }
    /**
     * Protobuf JSON representation for GetProjectConfigRequest
     */
    interface AsProtobufJSON {
        projectId?: string;
    }
}
/**
 * Message implementation for ondewo.qa.GetProjectConfigResponse
 */
export declare class GetProjectConfigResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetProjectConfigResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetProjectConfigResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetProjectConfigResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetProjectConfigResponse, _writer: BinaryWriter): void;
    private _configSerialized?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectConfigResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetProjectConfigResponse.AsObject>);
    get configSerialized(): string | undefined;
    set configSerialized(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetProjectConfigResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetProjectConfigResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetProjectConfigResponse.AsProtobufJSON;
}
export declare module GetProjectConfigResponse {
    /**
     * Standard JavaScript object representation for GetProjectConfigResponse
     */
    interface AsObject {
        configSerialized?: string;
    }
    /**
     * Protobuf JSON representation for GetProjectConfigResponse
     */
    interface AsProtobufJSON {
        configSerialized?: string;
    }
}
/**
 * Message implementation for ondewo.qa.UpdateDatabaseRequest
 */
export declare class UpdateDatabaseRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateDatabaseRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateDatabaseRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateDatabaseRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateDatabaseRequest, _writer: BinaryWriter): void;
    private _projectIds?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateDatabaseRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateDatabaseRequest.AsObject>);
    get projectIds(): string[] | undefined;
    set projectIds(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateDatabaseRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateDatabaseRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateDatabaseRequest.AsProtobufJSON;
}
export declare module UpdateDatabaseRequest {
    /**
     * Standard JavaScript object representation for UpdateDatabaseRequest
     */
    interface AsObject {
        projectIds?: string[];
    }
    /**
     * Protobuf JSON representation for UpdateDatabaseRequest
     */
    interface AsProtobufJSON {
        projectIds?: string[];
    }
}
/**
 * Message implementation for ondewo.qa.UpdateDatabaseResponse
 */
export declare class UpdateDatabaseResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateDatabaseResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateDatabaseResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateDatabaseResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateDatabaseResponse, _writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateDatabaseResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateDatabaseResponse.AsObject>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateDatabaseResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateDatabaseResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateDatabaseResponse.AsProtobufJSON;
}
export declare module UpdateDatabaseResponse {
    /**
     * Standard JavaScript object representation for UpdateDatabaseResponse
     */
    interface AsObject {
        errorMessages?: string[];
    }
    /**
     * Protobuf JSON representation for UpdateDatabaseResponse
     */
    interface AsProtobufJSON {
        errorMessages?: string[];
    }
}
