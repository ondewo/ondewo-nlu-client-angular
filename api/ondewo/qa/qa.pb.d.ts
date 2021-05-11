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
    private _containerName?;
    private _containerId?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunScraperResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<RunScraperResponse.AsObject>);
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
        containerName?: string;
        containerId?: string;
    }
    /**
     * Protobuf JSON representation for RunScraperResponse
     */
    interface AsProtobufJSON {
        containerName?: string;
        containerId?: string;
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
