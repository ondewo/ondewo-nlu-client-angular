/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu006 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
import * as googleRpc011 from '../../google/rpc/status.pb';
import * as googleType012 from '../../google/type/latlng.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/entity-type.pb';
export var AudioEncoding;
(function (AudioEncoding) {
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_LINEAR_16"] = 1] = "AUDIO_ENCODING_LINEAR_16";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_FLAC"] = 2] = "AUDIO_ENCODING_FLAC";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_MULAW"] = 3] = "AUDIO_ENCODING_MULAW";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_AMR"] = 4] = "AUDIO_ENCODING_AMR";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_AMR_WB"] = 5] = "AUDIO_ENCODING_AMR_WB";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_OGG_OPUS"] = 6] = "AUDIO_ENCODING_OGG_OPUS";
    AudioEncoding[AudioEncoding["AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] = 7] = "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE";
})(AudioEncoding || (AudioEncoding = {}));
/**
 * Message implementation for ondewo.nlu.DetectIntentRequest
 */
export class DetectIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DetectIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.session = _value.session;
        this.queryParams = _value.queryParams
            ? new QueryParameters(_value.queryParams)
            : undefined;
        this.queryInput = _value.queryInput
            ? new QueryInput(_value.queryInput)
            : undefined;
        this.inputAudio = _value.inputAudio;
        DetectIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DetectIntentRequest();
        DetectIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.session = _instance.session || '';
        _instance.queryParams = _instance.queryParams || undefined;
        _instance.queryInput = _instance.queryInput || undefined;
        _instance.inputAudio = _instance.inputAudio || new Uint8Array();
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.session = _reader.readString();
                    break;
                case 2:
                    _instance.queryParams = new QueryParameters();
                    _reader.readMessage(_instance.queryParams, QueryParameters.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.queryInput = new QueryInput();
                    _reader.readMessage(_instance.queryInput, QueryInput.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.inputAudio = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DetectIntentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.session) {
            _writer.writeString(1, _instance.session);
        }
        if (_instance.queryParams) {
            _writer.writeMessage(2, _instance.queryParams, QueryParameters.serializeBinaryToWriter);
        }
        if (_instance.queryInput) {
            _writer.writeMessage(3, _instance.queryInput, QueryInput.serializeBinaryToWriter);
        }
        if (_instance.inputAudio && _instance.inputAudio.length) {
            _writer.writeBytes(5, _instance.inputAudio);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get queryParams() {
        return this._queryParams;
    }
    set queryParams(value) {
        this._queryParams = value;
    }
    get queryInput() {
        return this._queryInput;
    }
    set queryInput(value) {
        this._queryInput = value;
    }
    get inputAudio() {
        return this._inputAudio;
    }
    set inputAudio(value) {
        this._inputAudio = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DetectIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            session: this.session,
            queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
            queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
            inputAudio: this.inputAudio
                ? this.inputAudio.subarray(0)
                : new Uint8Array()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            session: this.session,
            queryParams: this.queryParams
                ? this.queryParams.toProtobufJSON(options)
                : null,
            queryInput: this.queryInput
                ? this.queryInput.toProtobufJSON(options)
                : null,
            inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
        };
    }
}
DetectIntentRequest.id = 'ondewo.nlu.DetectIntentRequest';
/**
 * Message implementation for ondewo.nlu.DetectIntentResponse
 */
export class DetectIntentResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DetectIntentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseId = _value.responseId;
        this.queryResult = _value.queryResult
            ? new QueryResult(_value.queryResult)
            : undefined;
        this.webhookStatus = _value.webhookStatus
            ? new googleRpc011.Status(_value.webhookStatus)
            : undefined;
        DetectIntentResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DetectIntentResponse();
        DetectIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseId = _instance.responseId || '';
        _instance.queryResult = _instance.queryResult || undefined;
        _instance.webhookStatus = _instance.webhookStatus || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.responseId = _reader.readString();
                    break;
                case 2:
                    _instance.queryResult = new QueryResult();
                    _reader.readMessage(_instance.queryResult, QueryResult.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.webhookStatus = new googleRpc011.Status();
                    _reader.readMessage(_instance.webhookStatus, googleRpc011.Status.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        DetectIntentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseId) {
            _writer.writeString(1, _instance.responseId);
        }
        if (_instance.queryResult) {
            _writer.writeMessage(2, _instance.queryResult, QueryResult.serializeBinaryToWriter);
        }
        if (_instance.webhookStatus) {
            _writer.writeMessage(3, _instance.webhookStatus, googleRpc011.Status.serializeBinaryToWriter);
        }
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get webhookStatus() {
        return this._webhookStatus;
    }
    set webhookStatus(value) {
        this._webhookStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DetectIntentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseId: this.responseId,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            responseId: this.responseId,
            queryResult: this.queryResult
                ? this.queryResult.toProtobufJSON(options)
                : null,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toProtobufJSON(options)
                : null
        };
    }
}
DetectIntentResponse.id = 'ondewo.nlu.DetectIntentResponse';
/**
 * Message implementation for ondewo.nlu.QueryParameters
 */
export class QueryParameters {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of QueryParameters to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.timeZone = _value.timeZone;
        this.geoLocation = _value.geoLocation
            ? new googleType012.LatLng(_value.geoLocation)
            : undefined;
        this.contexts = (_value.contexts || []).map(m => new ondewoNlu006.Context(m));
        this.resetContexts = _value.resetContexts;
        this.payload = _value.payload
            ? new googleProtobuf010.Struct(_value.payload)
            : undefined;
        QueryParameters.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new QueryParameters();
        QueryParameters.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.timeZone = _instance.timeZone || '';
        _instance.geoLocation = _instance.geoLocation || undefined;
        _instance.contexts = _instance.contexts || [];
        _instance.resetContexts = _instance.resetContexts || false;
        _instance.payload = _instance.payload || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.timeZone = _reader.readString();
                    break;
                case 2:
                    _instance.geoLocation = new googleType012.LatLng();
                    _reader.readMessage(_instance.geoLocation, googleType012.LatLng.deserializeBinaryFromReader);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu006.Context();
                    _reader.readMessage(messageInitializer3, ondewoNlu006.Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.resetContexts = _reader.readBool();
                    break;
                case 6:
                    _instance.payload = new googleProtobuf010.Struct();
                    _reader.readMessage(_instance.payload, googleProtobuf010.Struct.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        QueryParameters.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.timeZone) {
            _writer.writeString(1, _instance.timeZone);
        }
        if (_instance.geoLocation) {
            _writer.writeMessage(2, _instance.geoLocation, googleType012.LatLng.serializeBinaryToWriter);
        }
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(3, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
        }
        if (_instance.resetContexts) {
            _writer.writeBool(4, _instance.resetContexts);
        }
        if (_instance.payload) {
            _writer.writeMessage(6, _instance.payload, googleProtobuf010.Struct.serializeBinaryToWriter);
        }
    }
    get timeZone() {
        return this._timeZone;
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    get geoLocation() {
        return this._geoLocation;
    }
    set geoLocation(value) {
        this._geoLocation = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get resetContexts() {
        return this._resetContexts;
    }
    set resetContexts(value) {
        this._resetContexts = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        QueryParameters.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            timeZone: this.timeZone,
            geoLocation: this.geoLocation ? this.geoLocation.toObject() : undefined,
            contexts: (this.contexts || []).map(m => m.toObject()),
            resetContexts: this.resetContexts,
            payload: this.payload ? this.payload.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            timeZone: this.timeZone,
            geoLocation: this.geoLocation
                ? this.geoLocation.toProtobufJSON(options)
                : null,
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
            resetContexts: this.resetContexts,
            payload: this.payload ? this.payload.toProtobufJSON(options) : null
        };
    }
}
QueryParameters.id = 'ondewo.nlu.QueryParameters';
/**
 * Message implementation for ondewo.nlu.QueryInput
 */
export class QueryInput {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of QueryInput to deeply clone from
     */
    constructor(_value) {
        this._input = QueryInput.InputCase.none;
        _value = _value || {};
        this.audioConfig = _value.audioConfig
            ? new InputAudioConfig(_value.audioConfig)
            : undefined;
        this.text = _value.text ? new TextInput(_value.text) : undefined;
        this.event = _value.event ? new EventInput(_value.event) : undefined;
        QueryInput.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new QueryInput();
        QueryInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) { }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.audioConfig = new InputAudioConfig();
                    _reader.readMessage(_instance.audioConfig, InputAudioConfig.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.text = new TextInput();
                    _reader.readMessage(_instance.text, TextInput.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.event = new EventInput();
                    _reader.readMessage(_instance.event, EventInput.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        QueryInput.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.audioConfig) {
            _writer.writeMessage(1, _instance.audioConfig, InputAudioConfig.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeMessage(2, _instance.text, TextInput.serializeBinaryToWriter);
        }
        if (_instance.event) {
            _writer.writeMessage(3, _instance.event, EventInput.serializeBinaryToWriter);
        }
    }
    get audioConfig() {
        return this._audioConfig;
    }
    set audioConfig(value) {
        if (value !== undefined && value !== null) {
            this._text = this._event = undefined;
            this._input = QueryInput.InputCase.audioConfig;
        }
        this._audioConfig = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value !== undefined && value !== null) {
            this._audioConfig = this._event = undefined;
            this._input = QueryInput.InputCase.text;
        }
        this._text = value;
    }
    get event() {
        return this._event;
    }
    set event(value) {
        if (value !== undefined && value !== null) {
            this._audioConfig = this._text = undefined;
            this._input = QueryInput.InputCase.event;
        }
        this._event = value;
    }
    get input() {
        return this._input;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        QueryInput.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            audioConfig: this.audioConfig ? this.audioConfig.toObject() : undefined,
            text: this.text ? this.text.toObject() : undefined,
            event: this.event ? this.event.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            audioConfig: this.audioConfig
                ? this.audioConfig.toProtobufJSON(options)
                : null,
            text: this.text ? this.text.toProtobufJSON(options) : null,
            event: this.event ? this.event.toProtobufJSON(options) : null
        };
    }
}
QueryInput.id = 'ondewo.nlu.QueryInput';
(function (QueryInput) {
    let InputCase;
    (function (InputCase) {
        InputCase[InputCase["none"] = 0] = "none";
        InputCase[InputCase["audioConfig"] = 1] = "audioConfig";
        InputCase[InputCase["text"] = 2] = "text";
        InputCase[InputCase["event"] = 3] = "event";
    })(InputCase = QueryInput.InputCase || (QueryInput.InputCase = {}));
})(QueryInput || (QueryInput = {}));
/**
 * Message implementation for ondewo.nlu.QueryResult
 */
export class QueryResult {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of QueryResult to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.queryText = _value.queryText;
        this.languageCode = _value.languageCode;
        this.speechRecognitionConfidence = _value.speechRecognitionConfidence;
        this.action = _value.action;
        this.parameters = _value.parameters
            ? new googleProtobuf010.Struct(_value.parameters)
            : undefined;
        this.allRequiredParamsPresent = _value.allRequiredParamsPresent;
        this.fulfillmentText = _value.fulfillmentText;
        this.fulfillmentMessages = (_value.fulfillmentMessages || []).map(m => new ondewoNlu013.Intent.Message(m));
        this.webhookSource = _value.webhookSource;
        this.webhookPayload = _value.webhookPayload
            ? new googleProtobuf010.Struct(_value.webhookPayload)
            : undefined;
        this.outputContexts = (_value.outputContexts || []).map(m => new ondewoNlu006.Context(m));
        this.intent = _value.intent
            ? new ondewoNlu013.Intent(_value.intent)
            : undefined;
        this.intentDetectionConfidence = _value.intentDetectionConfidence;
        this.diagnosticInfo = _value.diagnosticInfo
            ? new googleProtobuf010.Struct(_value.diagnosticInfo)
            : undefined;
        QueryResult.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new QueryResult();
        QueryResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.queryText = _instance.queryText || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.speechRecognitionConfidence =
            _instance.speechRecognitionConfidence || 0;
        _instance.action = _instance.action || '';
        _instance.parameters = _instance.parameters || undefined;
        _instance.allRequiredParamsPresent =
            _instance.allRequiredParamsPresent || false;
        _instance.fulfillmentText = _instance.fulfillmentText || '';
        _instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
        _instance.webhookSource = _instance.webhookSource || '';
        _instance.webhookPayload = _instance.webhookPayload || undefined;
        _instance.outputContexts = _instance.outputContexts || [];
        _instance.intent = _instance.intent || undefined;
        _instance.intentDetectionConfidence =
            _instance.intentDetectionConfidence || 0;
        _instance.diagnosticInfo = _instance.diagnosticInfo || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.queryText = _reader.readString();
                    break;
                case 15:
                    _instance.languageCode = _reader.readString();
                    break;
                case 2:
                    _instance.speechRecognitionConfidence = _reader.readFloat();
                    break;
                case 3:
                    _instance.action = _reader.readString();
                    break;
                case 4:
                    _instance.parameters = new googleProtobuf010.Struct();
                    _reader.readMessage(_instance.parameters, googleProtobuf010.Struct.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.allRequiredParamsPresent = _reader.readBool();
                    break;
                case 6:
                    _instance.fulfillmentText = _reader.readString();
                    break;
                case 7:
                    const messageInitializer7 = new ondewoNlu013.Intent.Message();
                    _reader.readMessage(messageInitializer7, ondewoNlu013.Intent.Message.deserializeBinaryFromReader);
                    (_instance.fulfillmentMessages =
                        _instance.fulfillmentMessages || []).push(messageInitializer7);
                    break;
                case 8:
                    _instance.webhookSource = _reader.readString();
                    break;
                case 9:
                    _instance.webhookPayload = new googleProtobuf010.Struct();
                    _reader.readMessage(_instance.webhookPayload, googleProtobuf010.Struct.deserializeBinaryFromReader);
                    break;
                case 10:
                    const messageInitializer10 = new ondewoNlu006.Context();
                    _reader.readMessage(messageInitializer10, ondewoNlu006.Context.deserializeBinaryFromReader);
                    (_instance.outputContexts = _instance.outputContexts || []).push(messageInitializer10);
                    break;
                case 11:
                    _instance.intent = new ondewoNlu013.Intent();
                    _reader.readMessage(_instance.intent, ondewoNlu013.Intent.deserializeBinaryFromReader);
                    break;
                case 12:
                    _instance.intentDetectionConfidence = _reader.readFloat();
                    break;
                case 14:
                    _instance.diagnosticInfo = new googleProtobuf010.Struct();
                    _reader.readMessage(_instance.diagnosticInfo, googleProtobuf010.Struct.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        QueryResult.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.queryText) {
            _writer.writeString(1, _instance.queryText);
        }
        if (_instance.languageCode) {
            _writer.writeString(15, _instance.languageCode);
        }
        if (_instance.speechRecognitionConfidence) {
            _writer.writeFloat(2, _instance.speechRecognitionConfidence);
        }
        if (_instance.action) {
            _writer.writeString(3, _instance.action);
        }
        if (_instance.parameters) {
            _writer.writeMessage(4, _instance.parameters, googleProtobuf010.Struct.serializeBinaryToWriter);
        }
        if (_instance.allRequiredParamsPresent) {
            _writer.writeBool(5, _instance.allRequiredParamsPresent);
        }
        if (_instance.fulfillmentText) {
            _writer.writeString(6, _instance.fulfillmentText);
        }
        if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
            _writer.writeRepeatedMessage(7, _instance.fulfillmentMessages, ondewoNlu013.Intent.Message.serializeBinaryToWriter);
        }
        if (_instance.webhookSource) {
            _writer.writeString(8, _instance.webhookSource);
        }
        if (_instance.webhookPayload) {
            _writer.writeMessage(9, _instance.webhookPayload, googleProtobuf010.Struct.serializeBinaryToWriter);
        }
        if (_instance.outputContexts && _instance.outputContexts.length) {
            _writer.writeRepeatedMessage(10, _instance.outputContexts, ondewoNlu006.Context.serializeBinaryToWriter);
        }
        if (_instance.intent) {
            _writer.writeMessage(11, _instance.intent, ondewoNlu013.Intent.serializeBinaryToWriter);
        }
        if (_instance.intentDetectionConfidence) {
            _writer.writeFloat(12, _instance.intentDetectionConfidence);
        }
        if (_instance.diagnosticInfo) {
            _writer.writeMessage(14, _instance.diagnosticInfo, googleProtobuf010.Struct.serializeBinaryToWriter);
        }
    }
    get queryText() {
        return this._queryText;
    }
    set queryText(value) {
        this._queryText = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get speechRecognitionConfidence() {
        return this._speechRecognitionConfidence;
    }
    set speechRecognitionConfidence(value) {
        this._speechRecognitionConfidence = value;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get allRequiredParamsPresent() {
        return this._allRequiredParamsPresent;
    }
    set allRequiredParamsPresent(value) {
        this._allRequiredParamsPresent = value;
    }
    get fulfillmentText() {
        return this._fulfillmentText;
    }
    set fulfillmentText(value) {
        this._fulfillmentText = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get webhookSource() {
        return this._webhookSource;
    }
    set webhookSource(value) {
        this._webhookSource = value;
    }
    get webhookPayload() {
        return this._webhookPayload;
    }
    set webhookPayload(value) {
        this._webhookPayload = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get intentDetectionConfidence() {
        return this._intentDetectionConfidence;
    }
    set intentDetectionConfidence(value) {
        this._intentDetectionConfidence = value;
    }
    get diagnosticInfo() {
        return this._diagnosticInfo;
    }
    set diagnosticInfo(value) {
        this._diagnosticInfo = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        QueryResult.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            queryText: this.queryText,
            languageCode: this.languageCode,
            speechRecognitionConfidence: this.speechRecognitionConfidence,
            action: this.action,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            allRequiredParamsPresent: this.allRequiredParamsPresent,
            fulfillmentText: this.fulfillmentText,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            webhookSource: this.webhookSource,
            webhookPayload: this.webhookPayload
                ? this.webhookPayload.toObject()
                : undefined,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            intent: this.intent ? this.intent.toObject() : undefined,
            intentDetectionConfidence: this.intentDetectionConfidence,
            diagnosticInfo: this.diagnosticInfo
                ? this.diagnosticInfo.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            queryText: this.queryText,
            languageCode: this.languageCode,
            speechRecognitionConfidence: this.speechRecognitionConfidence,
            action: this.action,
            parameters: this.parameters
                ? this.parameters.toProtobufJSON(options)
                : null,
            allRequiredParamsPresent: this.allRequiredParamsPresent,
            fulfillmentText: this.fulfillmentText,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toProtobufJSON(options)),
            webhookSource: this.webhookSource,
            webhookPayload: this.webhookPayload
                ? this.webhookPayload.toProtobufJSON(options)
                : null,
            outputContexts: (this.outputContexts || []).map(m => m.toProtobufJSON(options)),
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            intentDetectionConfidence: this.intentDetectionConfidence,
            diagnosticInfo: this.diagnosticInfo
                ? this.diagnosticInfo.toProtobufJSON(options)
                : null
        };
    }
}
QueryResult.id = 'ondewo.nlu.QueryResult';
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentRequest
 */
export class StreamingDetectIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingDetectIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.session = _value.session;
        this.queryParams = _value.queryParams
            ? new QueryParameters(_value.queryParams)
            : undefined;
        this.queryInput = _value.queryInput
            ? new QueryInput(_value.queryInput)
            : undefined;
        this.singleUtterance = _value.singleUtterance;
        this.inputAudio = _value.inputAudio;
        StreamingDetectIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingDetectIntentRequest();
        StreamingDetectIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.session = _instance.session || '';
        _instance.queryParams = _instance.queryParams || undefined;
        _instance.queryInput = _instance.queryInput || undefined;
        _instance.singleUtterance = _instance.singleUtterance || false;
        _instance.inputAudio = _instance.inputAudio || new Uint8Array();
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.session = _reader.readString();
                    break;
                case 2:
                    _instance.queryParams = new QueryParameters();
                    _reader.readMessage(_instance.queryParams, QueryParameters.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.queryInput = new QueryInput();
                    _reader.readMessage(_instance.queryInput, QueryInput.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.singleUtterance = _reader.readBool();
                    break;
                case 6:
                    _instance.inputAudio = _reader.readBytes();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StreamingDetectIntentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.session) {
            _writer.writeString(1, _instance.session);
        }
        if (_instance.queryParams) {
            _writer.writeMessage(2, _instance.queryParams, QueryParameters.serializeBinaryToWriter);
        }
        if (_instance.queryInput) {
            _writer.writeMessage(3, _instance.queryInput, QueryInput.serializeBinaryToWriter);
        }
        if (_instance.singleUtterance) {
            _writer.writeBool(4, _instance.singleUtterance);
        }
        if (_instance.inputAudio && _instance.inputAudio.length) {
            _writer.writeBytes(6, _instance.inputAudio);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get queryParams() {
        return this._queryParams;
    }
    set queryParams(value) {
        this._queryParams = value;
    }
    get queryInput() {
        return this._queryInput;
    }
    set queryInput(value) {
        this._queryInput = value;
    }
    get singleUtterance() {
        return this._singleUtterance;
    }
    set singleUtterance(value) {
        this._singleUtterance = value;
    }
    get inputAudio() {
        return this._inputAudio;
    }
    set inputAudio(value) {
        this._inputAudio = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StreamingDetectIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            session: this.session,
            queryParams: this.queryParams ? this.queryParams.toObject() : undefined,
            queryInput: this.queryInput ? this.queryInput.toObject() : undefined,
            singleUtterance: this.singleUtterance,
            inputAudio: this.inputAudio
                ? this.inputAudio.subarray(0)
                : new Uint8Array()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            session: this.session,
            queryParams: this.queryParams
                ? this.queryParams.toProtobufJSON(options)
                : null,
            queryInput: this.queryInput
                ? this.queryInput.toProtobufJSON(options)
                : null,
            singleUtterance: this.singleUtterance,
            inputAudio: this.inputAudio ? uint8ArrayToBase64(this.inputAudio) : ''
        };
    }
}
StreamingDetectIntentRequest.id = 'ondewo.nlu.StreamingDetectIntentRequest';
/**
 * Message implementation for ondewo.nlu.StreamingDetectIntentResponse
 */
export class StreamingDetectIntentResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingDetectIntentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseId = _value.responseId;
        this.recognitionResult = _value.recognitionResult
            ? new StreamingRecognitionResult(_value.recognitionResult)
            : undefined;
        this.queryResult = _value.queryResult
            ? new QueryResult(_value.queryResult)
            : undefined;
        this.webhookStatus = _value.webhookStatus
            ? new googleRpc011.Status(_value.webhookStatus)
            : undefined;
        StreamingDetectIntentResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingDetectIntentResponse();
        StreamingDetectIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseId = _instance.responseId || '';
        _instance.recognitionResult = _instance.recognitionResult || undefined;
        _instance.queryResult = _instance.queryResult || undefined;
        _instance.webhookStatus = _instance.webhookStatus || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.responseId = _reader.readString();
                    break;
                case 2:
                    _instance.recognitionResult = new StreamingRecognitionResult();
                    _reader.readMessage(_instance.recognitionResult, StreamingRecognitionResult.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.queryResult = new QueryResult();
                    _reader.readMessage(_instance.queryResult, QueryResult.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.webhookStatus = new googleRpc011.Status();
                    _reader.readMessage(_instance.webhookStatus, googleRpc011.Status.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        StreamingDetectIntentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseId) {
            _writer.writeString(1, _instance.responseId);
        }
        if (_instance.recognitionResult) {
            _writer.writeMessage(2, _instance.recognitionResult, StreamingRecognitionResult.serializeBinaryToWriter);
        }
        if (_instance.queryResult) {
            _writer.writeMessage(3, _instance.queryResult, QueryResult.serializeBinaryToWriter);
        }
        if (_instance.webhookStatus) {
            _writer.writeMessage(4, _instance.webhookStatus, googleRpc011.Status.serializeBinaryToWriter);
        }
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get recognitionResult() {
        return this._recognitionResult;
    }
    set recognitionResult(value) {
        this._recognitionResult = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get webhookStatus() {
        return this._webhookStatus;
    }
    set webhookStatus(value) {
        this._webhookStatus = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StreamingDetectIntentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseId: this.responseId,
            recognitionResult: this.recognitionResult
                ? this.recognitionResult.toObject()
                : undefined,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            responseId: this.responseId,
            recognitionResult: this.recognitionResult
                ? this.recognitionResult.toProtobufJSON(options)
                : null,
            queryResult: this.queryResult
                ? this.queryResult.toProtobufJSON(options)
                : null,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toProtobufJSON(options)
                : null
        };
    }
}
StreamingDetectIntentResponse.id = 'ondewo.nlu.StreamingDetectIntentResponse';
/**
 * Message implementation for ondewo.nlu.StreamingRecognitionResult
 */
export class StreamingRecognitionResult {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StreamingRecognitionResult to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.messageType = _value.messageType;
        this.transcript = _value.transcript;
        this.isFinal = _value.isFinal;
        this.confidence = _value.confidence;
        StreamingRecognitionResult.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StreamingRecognitionResult();
        StreamingRecognitionResult.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.messageType = _instance.messageType || 0;
        _instance.transcript = _instance.transcript || '';
        _instance.isFinal = _instance.isFinal || false;
        _instance.confidence = _instance.confidence || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.messageType = _reader.readEnum();
                    break;
                case 2:
                    _instance.transcript = _reader.readString();
                    break;
                case 3:
                    _instance.isFinal = _reader.readBool();
                    break;
                case 4:
                    _instance.confidence = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StreamingRecognitionResult.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.messageType) {
            _writer.writeEnum(1, _instance.messageType);
        }
        if (_instance.transcript) {
            _writer.writeString(2, _instance.transcript);
        }
        if (_instance.isFinal) {
            _writer.writeBool(3, _instance.isFinal);
        }
        if (_instance.confidence) {
            _writer.writeFloat(4, _instance.confidence);
        }
    }
    get messageType() {
        return this._messageType;
    }
    set messageType(value) {
        this._messageType = value;
    }
    get transcript() {
        return this._transcript;
    }
    set transcript(value) {
        this._transcript = value;
    }
    get isFinal() {
        return this._isFinal;
    }
    set isFinal(value) {
        this._isFinal = value;
    }
    get confidence() {
        return this._confidence;
    }
    set confidence(value) {
        this._confidence = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StreamingRecognitionResult.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            messageType: this.messageType,
            transcript: this.transcript,
            isFinal: this.isFinal,
            confidence: this.confidence
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            messageType: StreamingRecognitionResult.MessageType[this.messageType === null || this.messageType === undefined
                ? 0
                : this.messageType],
            transcript: this.transcript,
            isFinal: this.isFinal,
            confidence: this.confidence
        };
    }
}
StreamingRecognitionResult.id = 'ondewo.nlu.StreamingRecognitionResult';
(function (StreamingRecognitionResult) {
    let MessageType;
    (function (MessageType) {
        MessageType[MessageType["MESSAGE_TYPE_UNSPECIFIED"] = 0] = "MESSAGE_TYPE_UNSPECIFIED";
        MessageType[MessageType["TRANSCRIPT"] = 1] = "TRANSCRIPT";
        MessageType[MessageType["END_OF_SINGLE_UTTERANCE"] = 2] = "END_OF_SINGLE_UTTERANCE";
    })(MessageType = StreamingRecognitionResult.MessageType || (StreamingRecognitionResult.MessageType = {}));
})(StreamingRecognitionResult || (StreamingRecognitionResult = {}));
/**
 * Message implementation for ondewo.nlu.InputAudioConfig
 */
export class InputAudioConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of InputAudioConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.audioEncoding = _value.audioEncoding;
        this.sampleRateHertz = _value.sampleRateHertz;
        this.languageCode = _value.languageCode;
        this.phraseHints = (_value.phraseHints || []).slice();
        InputAudioConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new InputAudioConfig();
        InputAudioConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.audioEncoding = _instance.audioEncoding || 0;
        _instance.sampleRateHertz = _instance.sampleRateHertz || 0;
        _instance.languageCode = _instance.languageCode || '';
        _instance.phraseHints = _instance.phraseHints || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.audioEncoding = _reader.readEnum();
                    break;
                case 2:
                    _instance.sampleRateHertz = _reader.readInt32();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    (_instance.phraseHints = _instance.phraseHints || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        InputAudioConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.audioEncoding) {
            _writer.writeEnum(1, _instance.audioEncoding);
        }
        if (_instance.sampleRateHertz) {
            _writer.writeInt32(2, _instance.sampleRateHertz);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.phraseHints && _instance.phraseHints.length) {
            _writer.writeRepeatedString(4, _instance.phraseHints);
        }
    }
    get audioEncoding() {
        return this._audioEncoding;
    }
    set audioEncoding(value) {
        this._audioEncoding = value;
    }
    get sampleRateHertz() {
        return this._sampleRateHertz;
    }
    set sampleRateHertz(value) {
        this._sampleRateHertz = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get phraseHints() {
        return this._phraseHints;
    }
    set phraseHints(value) {
        this._phraseHints = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        InputAudioConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            audioEncoding: this.audioEncoding,
            sampleRateHertz: this.sampleRateHertz,
            languageCode: this.languageCode,
            phraseHints: (this.phraseHints || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            audioEncoding: AudioEncoding[this.audioEncoding === null || this.audioEncoding === undefined
                ? 0
                : this.audioEncoding],
            sampleRateHertz: this.sampleRateHertz,
            languageCode: this.languageCode,
            phraseHints: (this.phraseHints || []).slice()
        };
    }
}
InputAudioConfig.id = 'ondewo.nlu.InputAudioConfig';
/**
 * Message implementation for ondewo.nlu.TextInput
 */
export class TextInput {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TextInput to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.text = _value.text;
        this.languageCode = _value.languageCode;
        TextInput.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TextInput();
        TextInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.text = _instance.text || '';
        _instance.languageCode = _instance.languageCode || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.text = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TextInput.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.text) {
            _writer.writeString(1, _instance.text);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TextInput.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            text: this.text,
            languageCode: this.languageCode
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            text: this.text,
            languageCode: this.languageCode
        };
    }
}
TextInput.id = 'ondewo.nlu.TextInput';
/**
 * Message implementation for ondewo.nlu.EventInput
 */
export class EventInput {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EventInput to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.parameters = _value.parameters
            ? new googleProtobuf010.Struct(_value.parameters)
            : undefined;
        this.languageCode = _value.languageCode;
        EventInput.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EventInput();
        EventInput.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.parameters = _instance.parameters || undefined;
        _instance.languageCode = _instance.languageCode || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.parameters = new googleProtobuf010.Struct();
                    _reader.readMessage(_instance.parameters, googleProtobuf010.Struct.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        EventInput.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.parameters) {
            _writer.writeMessage(2, _instance.parameters, googleProtobuf010.Struct.serializeBinaryToWriter);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EventInput.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            languageCode: this.languageCode
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            name: this.name,
            parameters: this.parameters
                ? this.parameters.toProtobufJSON(options)
                : null,
            languageCode: this.languageCode
        };
    }
}
EventInput.id = 'ondewo.nlu.EventInput';
/**
 * Message implementation for ondewo.nlu.Session
 */
export class Session {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Session to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.sessionSteps = (_value.sessionSteps || []).map(m => new SessionStep(m));
        this.sessionInfo = _value.sessionInfo
            ? new SessionInfo(_value.sessionInfo)
            : undefined;
        Session.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Session();
        Session.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.sessionSteps = _instance.sessionSteps || [];
        _instance.sessionInfo = _instance.sessionInfo || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionStep();
                    _reader.readMessage(messageInitializer2, SessionStep.deserializeBinaryFromReader);
                    (_instance.sessionSteps = _instance.sessionSteps || []).push(messageInitializer2);
                    break;
                case 3:
                    _instance.sessionInfo = new SessionInfo();
                    _reader.readMessage(_instance.sessionInfo, SessionInfo.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Session.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.sessionSteps && _instance.sessionSteps.length) {
            _writer.writeRepeatedMessage(2, _instance.sessionSteps, SessionStep.serializeBinaryToWriter);
        }
        if (_instance.sessionInfo) {
            _writer.writeMessage(3, _instance.sessionInfo, SessionInfo.serializeBinaryToWriter);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionSteps() {
        return this._sessionSteps;
    }
    set sessionSteps(value) {
        this._sessionSteps = value;
    }
    get sessionInfo() {
        return this._sessionInfo;
    }
    set sessionInfo(value) {
        this._sessionInfo = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Session.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionSteps: (this.sessionSteps || []).map(m => m.toObject()),
            sessionInfo: this.sessionInfo ? this.sessionInfo.toObject() : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            sessionSteps: (this.sessionSteps || []).map(m => m.toProtobufJSON(options)),
            sessionInfo: this.sessionInfo
                ? this.sessionInfo.toProtobufJSON(options)
                : null
        };
    }
}
Session.id = 'ondewo.nlu.Session';
(function (Session) {
    let View;
    (function (View) {
        View[View["VIEW_UNSPECIFIED"] = 0] = "VIEW_UNSPECIFIED";
        View[View["VIEW_FULL"] = 1] = "VIEW_FULL";
        View[View["VIEW_SPARSE"] = 2] = "VIEW_SPARSE";
    })(View = Session.View || (Session.View = {}));
})(Session || (Session = {}));
/**
 * Message implementation for ondewo.nlu.SessionStep
 */
export class SessionStep {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SessionStep to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.detectIntentRequest = _value.detectIntentRequest
            ? new DetectIntentRequest(_value.detectIntentRequest)
            : undefined;
        this.detectIntentResponse = _value.detectIntentResponse
            ? new DetectIntentResponse(_value.detectIntentResponse)
            : undefined;
        this.contexts = (_value.contexts || []).map(m => new ondewoNlu006.Context(m));
        SessionStep.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SessionStep();
        SessionStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.detectIntentRequest = _instance.detectIntentRequest || undefined;
        _instance.detectIntentResponse =
            _instance.detectIntentResponse || undefined;
        _instance.contexts = _instance.contexts || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.detectIntentRequest = new DetectIntentRequest();
                    _reader.readMessage(_instance.detectIntentRequest, DetectIntentRequest.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.detectIntentResponse = new DetectIntentResponse();
                    _reader.readMessage(_instance.detectIntentResponse, DetectIntentResponse.deserializeBinaryFromReader);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu006.Context();
                    _reader.readMessage(messageInitializer3, ondewoNlu006.Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer3);
                    break;
                default:
                    _reader.skipField();
            }
        }
        SessionStep.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.detectIntentRequest) {
            _writer.writeMessage(1, _instance.detectIntentRequest, DetectIntentRequest.serializeBinaryToWriter);
        }
        if (_instance.detectIntentResponse) {
            _writer.writeMessage(2, _instance.detectIntentResponse, DetectIntentResponse.serializeBinaryToWriter);
        }
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(3, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
        }
    }
    get detectIntentRequest() {
        return this._detectIntentRequest;
    }
    set detectIntentRequest(value) {
        this._detectIntentRequest = value;
    }
    get detectIntentResponse() {
        return this._detectIntentResponse;
    }
    set detectIntentResponse(value) {
        this._detectIntentResponse = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SessionStep.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            detectIntentRequest: this.detectIntentRequest
                ? this.detectIntentRequest.toObject()
                : undefined,
            detectIntentResponse: this.detectIntentResponse
                ? this.detectIntentResponse.toObject()
                : undefined,
            contexts: (this.contexts || []).map(m => m.toObject())
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            detectIntentRequest: this.detectIntentRequest
                ? this.detectIntentRequest.toProtobufJSON(options)
                : null,
            detectIntentResponse: this.detectIntentResponse
                ? this.detectIntentResponse.toProtobufJSON(options)
                : null,
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SessionStep.id = 'ondewo.nlu.SessionStep';
/**
 * Message implementation for ondewo.nlu.TrackSessionStepRequest
 */
export class TrackSessionStepRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrackSessionStepRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.sessionStep = _value.sessionStep
            ? new SessionStep(_value.sessionStep)
            : undefined;
        this.sessionView = _value.sessionView;
        TrackSessionStepRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TrackSessionStepRequest();
        TrackSessionStepRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.sessionStep = _instance.sessionStep || undefined;
        _instance.sessionView = _instance.sessionView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionStep = new SessionStep();
                    _reader.readMessage(_instance.sessionStep, SessionStep.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.sessionView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TrackSessionStepRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.sessionStep) {
            _writer.writeMessage(2, _instance.sessionStep, SessionStep.serializeBinaryToWriter);
        }
        if (_instance.sessionView) {
            _writer.writeEnum(3, _instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionStep() {
        return this._sessionStep;
    }
    set sessionStep(value) {
        this._sessionStep = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TrackSessionStepRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
            sessionView: this.sessionView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            sessionStep: this.sessionStep
                ? this.sessionStep.toProtobufJSON(options)
                : null,
            sessionView: Session.View[this.sessionView === null || this.sessionView === undefined
                ? 0
                : this.sessionView]
        };
    }
}
TrackSessionStepRequest.id = 'ondewo.nlu.TrackSessionStepRequest';
/**
 * Message implementation for ondewo.nlu.ListSessionsRequest
 */
export class ListSessionsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.sessionView = _value.sessionView;
        this.pageToken = _value.pageToken;
        this.sessionFilter = _value.sessionFilter
            ? new SessionFilter(_value.sessionFilter)
            : undefined;
        ListSessionsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionsRequest();
        ListSessionsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.sessionView = _instance.sessionView || 0;
        _instance.pageToken = _instance.pageToken || '';
        _instance.sessionFilter = _instance.sessionFilter || undefined;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.sessionView = _reader.readEnum();
                    break;
                case 4:
                    _instance.pageToken = _reader.readString();
                    break;
                case 5:
                    _instance.sessionFilter = new SessionFilter();
                    _reader.readMessage(_instance.sessionFilter, SessionFilter.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.sessionView) {
            _writer.writeEnum(2, _instance.sessionView);
        }
        if (_instance.pageToken) {
            _writer.writeString(4, _instance.pageToken);
        }
        if (_instance.sessionFilter) {
            _writer.writeMessage(5, _instance.sessionFilter, SessionFilter.serializeBinaryToWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get sessionFilter() {
        return this._sessionFilter;
    }
    set sessionFilter(value) {
        this._sessionFilter = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            sessionView: this.sessionView,
            pageToken: this.pageToken,
            sessionFilter: this.sessionFilter
                ? this.sessionFilter.toObject()
                : undefined
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            parent: this.parent,
            sessionView: Session.View[this.sessionView === null || this.sessionView === undefined
                ? 0
                : this.sessionView],
            pageToken: this.pageToken,
            sessionFilter: this.sessionFilter
                ? this.sessionFilter.toProtobufJSON(options)
                : null
        };
    }
}
ListSessionsRequest.id = 'ondewo.nlu.ListSessionsRequest';
/**
 * Message implementation for ondewo.nlu.SessionFilter
 */
export class SessionFilter {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SessionFilter to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCodes = (_value.languageCodes || []).slice();
        this.matchedIntents = (_value.matchedIntents || []).map(m => new ondewoNlu013.Intent(m));
        this.matchedEntityTypes = (_value.matchedEntityTypes || []).map(m => new ondewoNlu014.EntityType(m));
        this.minIntentsConfidenceMin = _value.minIntentsConfidenceMin;
        this.minIntentsConfidenceMax = _value.minIntentsConfidenceMax;
        this.minEntityTypesConfidenceMin = _value.minEntityTypesConfidenceMin;
        this.minEntityTypesConfidenceMax = _value.minEntityTypesConfidenceMax;
        this.earliest = _value.earliest;
        this.latest = _value.latest;
        this.minNumberTurns = _value.minNumberTurns;
        this.maxNumberTurns = _value.maxNumberTurns;
        this.labels = (_value.labels || []).slice();
        this.userIds = (_value.userIds || []).slice();
        SessionFilter.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SessionFilter();
        SessionFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCodes = _instance.languageCodes || [];
        _instance.matchedIntents = _instance.matchedIntents || [];
        _instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
        _instance.minIntentsConfidenceMin = _instance.minIntentsConfidenceMin || 0;
        _instance.minIntentsConfidenceMax = _instance.minIntentsConfidenceMax || 0;
        _instance.minEntityTypesConfidenceMin =
            _instance.minEntityTypesConfidenceMin || 0;
        _instance.minEntityTypesConfidenceMax =
            _instance.minEntityTypesConfidenceMax || 0;
        _instance.earliest = _instance.earliest || 0;
        _instance.latest = _instance.latest || 0;
        _instance.minNumberTurns = _instance.minNumberTurns || 0;
        _instance.maxNumberTurns = _instance.maxNumberTurns || 0;
        _instance.labels = _instance.labels || [];
        _instance.userIds = _instance.userIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu013.Intent();
                    _reader.readMessage(messageInitializer2, ondewoNlu013.Intent.deserializeBinaryFromReader);
                    (_instance.matchedIntents = _instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu014.EntityType();
                    _reader.readMessage(messageInitializer3, ondewoNlu014.EntityType.deserializeBinaryFromReader);
                    (_instance.matchedEntityTypes =
                        _instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.minIntentsConfidenceMin = _reader.readFloat();
                    break;
                case 5:
                    _instance.minIntentsConfidenceMax = _reader.readFloat();
                    break;
                case 6:
                    _instance.minEntityTypesConfidenceMin = _reader.readFloat();
                    break;
                case 7:
                    _instance.minEntityTypesConfidenceMax = _reader.readFloat();
                    break;
                case 8:
                    _instance.earliest = _reader.readFloat();
                    break;
                case 9:
                    _instance.latest = _reader.readFloat();
                    break;
                case 10:
                    _instance.minNumberTurns = _reader.readInt32();
                    break;
                case 11:
                    _instance.maxNumberTurns = _reader.readInt32();
                    break;
                case 12:
                    (_instance.labels = _instance.labels || []).push(_reader.readString());
                    break;
                case 13:
                    (_instance.userIds = _instance.userIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        SessionFilter.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCodes && _instance.languageCodes.length) {
            _writer.writeRepeatedString(1, _instance.languageCodes);
        }
        if (_instance.matchedIntents && _instance.matchedIntents.length) {
            _writer.writeRepeatedMessage(2, _instance.matchedIntents, ondewoNlu013.Intent.serializeBinaryToWriter);
        }
        if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
            _writer.writeRepeatedMessage(3, _instance.matchedEntityTypes, ondewoNlu014.EntityType.serializeBinaryToWriter);
        }
        if (_instance.minIntentsConfidenceMin) {
            _writer.writeFloat(4, _instance.minIntentsConfidenceMin);
        }
        if (_instance.minIntentsConfidenceMax) {
            _writer.writeFloat(5, _instance.minIntentsConfidenceMax);
        }
        if (_instance.minEntityTypesConfidenceMin) {
            _writer.writeFloat(6, _instance.minEntityTypesConfidenceMin);
        }
        if (_instance.minEntityTypesConfidenceMax) {
            _writer.writeFloat(7, _instance.minEntityTypesConfidenceMax);
        }
        if (_instance.earliest) {
            _writer.writeFloat(8, _instance.earliest);
        }
        if (_instance.latest) {
            _writer.writeFloat(9, _instance.latest);
        }
        if (_instance.minNumberTurns) {
            _writer.writeInt32(10, _instance.minNumberTurns);
        }
        if (_instance.maxNumberTurns) {
            _writer.writeInt32(11, _instance.maxNumberTurns);
        }
        if (_instance.labels && _instance.labels.length) {
            _writer.writeRepeatedString(12, _instance.labels);
        }
        if (_instance.userIds && _instance.userIds.length) {
            _writer.writeRepeatedString(13, _instance.userIds);
        }
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get matchedIntents() {
        return this._matchedIntents;
    }
    set matchedIntents(value) {
        this._matchedIntents = value;
    }
    get matchedEntityTypes() {
        return this._matchedEntityTypes;
    }
    set matchedEntityTypes(value) {
        this._matchedEntityTypes = value;
    }
    get minIntentsConfidenceMin() {
        return this._minIntentsConfidenceMin;
    }
    set minIntentsConfidenceMin(value) {
        this._minIntentsConfidenceMin = value;
    }
    get minIntentsConfidenceMax() {
        return this._minIntentsConfidenceMax;
    }
    set minIntentsConfidenceMax(value) {
        this._minIntentsConfidenceMax = value;
    }
    get minEntityTypesConfidenceMin() {
        return this._minEntityTypesConfidenceMin;
    }
    set minEntityTypesConfidenceMin(value) {
        this._minEntityTypesConfidenceMin = value;
    }
    get minEntityTypesConfidenceMax() {
        return this._minEntityTypesConfidenceMax;
    }
    set minEntityTypesConfidenceMax(value) {
        this._minEntityTypesConfidenceMax = value;
    }
    get earliest() {
        return this._earliest;
    }
    set earliest(value) {
        this._earliest = value;
    }
    get latest() {
        return this._latest;
    }
    set latest(value) {
        this._latest = value;
    }
    get minNumberTurns() {
        return this._minNumberTurns;
    }
    set minNumberTurns(value) {
        this._minNumberTurns = value;
    }
    get maxNumberTurns() {
        return this._maxNumberTurns;
    }
    set maxNumberTurns(value) {
        this._maxNumberTurns = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get userIds() {
        return this._userIds;
    }
    set userIds(value) {
        this._userIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SessionFilter.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toObject()),
            minIntentsConfidenceMin: this.minIntentsConfidenceMin,
            minIntentsConfidenceMax: this.minIntentsConfidenceMax,
            minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
            minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
            earliest: this.earliest,
            latest: this.latest,
            minNumberTurns: this.minNumberTurns,
            maxNumberTurns: this.maxNumberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toProtobufJSON(options)),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toProtobufJSON(options)),
            minIntentsConfidenceMin: this.minIntentsConfidenceMin,
            minIntentsConfidenceMax: this.minIntentsConfidenceMax,
            minEntityTypesConfidenceMin: this.minEntityTypesConfidenceMin,
            minEntityTypesConfidenceMax: this.minEntityTypesConfidenceMax,
            earliest: this.earliest,
            latest: this.latest,
            minNumberTurns: this.minNumberTurns,
            maxNumberTurns: this.maxNumberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
}
SessionFilter.id = 'ondewo.nlu.SessionFilter';
/**
 * Message implementation for ondewo.nlu.SessionInfo
 */
export class SessionInfo {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SessionInfo to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCodes = (_value.languageCodes || []).slice();
        this.matchedIntents = (_value.matchedIntents || []).map(m => new ondewoNlu013.Intent(m));
        this.matchedEntityTypes = (_value.matchedEntityTypes || []).map(m => new ondewoNlu014.EntityType(m));
        this.minIntentsConfidence = _value.minIntentsConfidence;
        this.minEntityTypesConfidence = _value.minEntityTypesConfidence;
        this.earliest = _value.earliest;
        this.latest = _value.latest;
        this.numberTurns = _value.numberTurns;
        this.labels = (_value.labels || []).slice();
        this.userIds = (_value.userIds || []).slice();
        SessionInfo.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SessionInfo();
        SessionInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCodes = _instance.languageCodes || [];
        _instance.matchedIntents = _instance.matchedIntents || [];
        _instance.matchedEntityTypes = _instance.matchedEntityTypes || [];
        _instance.minIntentsConfidence = _instance.minIntentsConfidence || 0;
        _instance.minEntityTypesConfidence =
            _instance.minEntityTypesConfidence || 0;
        _instance.earliest = _instance.earliest || 0;
        _instance.latest = _instance.latest || 0;
        _instance.numberTurns = _instance.numberTurns || 0;
        _instance.labels = _instance.labels || [];
        _instance.userIds = _instance.userIds || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.languageCodes = _instance.languageCodes || []).push(_reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu013.Intent();
                    _reader.readMessage(messageInitializer2, ondewoNlu013.Intent.deserializeBinaryFromReader);
                    (_instance.matchedIntents = _instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu014.EntityType();
                    _reader.readMessage(messageInitializer3, ondewoNlu014.EntityType.deserializeBinaryFromReader);
                    (_instance.matchedEntityTypes =
                        _instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.minIntentsConfidence = _reader.readFloat();
                    break;
                case 5:
                    _instance.minEntityTypesConfidence = _reader.readFloat();
                    break;
                case 6:
                    _instance.earliest = _reader.readFloat();
                    break;
                case 7:
                    _instance.latest = _reader.readFloat();
                    break;
                case 8:
                    _instance.numberTurns = _reader.readInt32();
                    break;
                case 9:
                    (_instance.labels = _instance.labels || []).push(_reader.readString());
                    break;
                case 10:
                    (_instance.userIds = _instance.userIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        SessionInfo.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCodes && _instance.languageCodes.length) {
            _writer.writeRepeatedString(1, _instance.languageCodes);
        }
        if (_instance.matchedIntents && _instance.matchedIntents.length) {
            _writer.writeRepeatedMessage(2, _instance.matchedIntents, ondewoNlu013.Intent.serializeBinaryToWriter);
        }
        if (_instance.matchedEntityTypes && _instance.matchedEntityTypes.length) {
            _writer.writeRepeatedMessage(3, _instance.matchedEntityTypes, ondewoNlu014.EntityType.serializeBinaryToWriter);
        }
        if (_instance.minIntentsConfidence) {
            _writer.writeFloat(4, _instance.minIntentsConfidence);
        }
        if (_instance.minEntityTypesConfidence) {
            _writer.writeFloat(5, _instance.minEntityTypesConfidence);
        }
        if (_instance.earliest) {
            _writer.writeFloat(6, _instance.earliest);
        }
        if (_instance.latest) {
            _writer.writeFloat(7, _instance.latest);
        }
        if (_instance.numberTurns) {
            _writer.writeInt32(8, _instance.numberTurns);
        }
        if (_instance.labels && _instance.labels.length) {
            _writer.writeRepeatedString(9, _instance.labels);
        }
        if (_instance.userIds && _instance.userIds.length) {
            _writer.writeRepeatedString(10, _instance.userIds);
        }
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get matchedIntents() {
        return this._matchedIntents;
    }
    set matchedIntents(value) {
        this._matchedIntents = value;
    }
    get matchedEntityTypes() {
        return this._matchedEntityTypes;
    }
    set matchedEntityTypes(value) {
        this._matchedEntityTypes = value;
    }
    get minIntentsConfidence() {
        return this._minIntentsConfidence;
    }
    set minIntentsConfidence(value) {
        this._minIntentsConfidence = value;
    }
    get minEntityTypesConfidence() {
        return this._minEntityTypesConfidence;
    }
    set minEntityTypesConfidence(value) {
        this._minEntityTypesConfidence = value;
    }
    get earliest() {
        return this._earliest;
    }
    set earliest(value) {
        this._earliest = value;
    }
    get latest() {
        return this._latest;
    }
    set latest(value) {
        this._latest = value;
    }
    get numberTurns() {
        return this._numberTurns;
    }
    set numberTurns(value) {
        this._numberTurns = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get userIds() {
        return this._userIds;
    }
    set userIds(value) {
        this._userIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SessionInfo.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toObject()),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toObject()),
            minIntentsConfidence: this.minIntentsConfidence,
            minEntityTypesConfidence: this.minEntityTypesConfidence,
            earliest: this.earliest,
            latest: this.latest,
            numberTurns: this.numberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            languageCodes: (this.languageCodes || []).slice(),
            matchedIntents: (this.matchedIntents || []).map(m => m.toProtobufJSON(options)),
            matchedEntityTypes: (this.matchedEntityTypes || []).map(m => m.toProtobufJSON(options)),
            minIntentsConfidence: this.minIntentsConfidence,
            minEntityTypesConfidence: this.minEntityTypesConfidence,
            earliest: this.earliest,
            latest: this.latest,
            numberTurns: this.numberTurns,
            labels: (this.labels || []).slice(),
            userIds: (this.userIds || []).slice()
        };
    }
}
SessionInfo.id = 'ondewo.nlu.SessionInfo';
/**
 * Message implementation for ondewo.nlu.ListSessionsResponse
 */
export class ListSessionsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessions = (_value.sessions || []).map(m => new Session(m));
        this.nextPageToken = _value.nextPageToken;
        ListSessionsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionsResponse();
        ListSessionsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessions = _instance.sessions || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Session();
                    _reader.readMessage(messageInitializer1, Session.deserializeBinaryFromReader);
                    (_instance.sessions = _instance.sessions || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessions && _instance.sessions.length) {
            _writer.writeRepeatedMessage(1, _instance.sessions, Session.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    get sessions() {
        return this._sessions;
    }
    set sessions(value) {
        this._sessions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessions: (this.sessions || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessions: (this.sessions || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
ListSessionsResponse.id = 'ondewo.nlu.ListSessionsResponse';
/**
 * Message implementation for ondewo.nlu.GetSessionRequest
 */
export class GetSessionRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.sessionView = _value.sessionView;
        GetSessionRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionRequest();
        GetSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.sessionView = _instance.sessionView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.sessionView) {
            _writer.writeEnum(2, _instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSessionRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionView: this.sessionView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            sessionView: Session.View[this.sessionView === null || this.sessionView === undefined
                ? 0
                : this.sessionView]
        };
    }
}
GetSessionRequest.id = 'ondewo.nlu.GetSessionRequest';
/**
 * Message implementation for ondewo.nlu.CreateSessionRequest
 */
export class CreateSessionRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateSessionRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.sessionUuid = _value.sessionUuid;
        CreateSessionRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateSessionRequest();
        CreateSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.sessionUuid = _instance.sessionUuid || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.sessionUuid = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateSessionRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
        if (_instance.sessionUuid) {
            _writer.writeString(2, _instance.sessionUuid);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get sessionUuid() {
        return this._sessionUuid;
    }
    set sessionUuid(value) {
        this._sessionUuid = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateSessionRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            sessionUuid: this.sessionUuid
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            parent: this.parent,
            sessionUuid: this.sessionUuid
        };
    }
}
CreateSessionRequest.id = 'ondewo.nlu.CreateSessionRequest';
/**
 * Message implementation for ondewo.nlu.DeleteSessionRequest
 */
export class DeleteSessionRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteSessionRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        DeleteSessionRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteSessionRequest();
        DeleteSessionRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DeleteSessionRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteSessionRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId
        };
    }
}
DeleteSessionRequest.id = 'ondewo.nlu.DeleteSessionRequest';
/**
 * Message implementation for ondewo.nlu.CreateSessionReviewRequest
 */
export class CreateSessionReviewRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateSessionReviewRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.parentReviewId = _value.parentReviewId;
        this.sessionReview = _value.sessionReview
            ? new SessionReview(_value.sessionReview)
            : undefined;
        this.sessionReviewView = _value.sessionReviewView;
        CreateSessionReviewRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateSessionReviewRequest();
        CreateSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.parentReviewId = _instance.parentReviewId || '';
        _instance.sessionReview = _instance.sessionReview || undefined;
        _instance.sessionReviewView = _instance.sessionReviewView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    _instance.parentReviewId = _reader.readString();
                    break;
                case 3:
                    _instance.sessionReview = new SessionReview();
                    _reader.readMessage(_instance.sessionReview, SessionReview.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.sessionReviewView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateSessionReviewRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.parentReviewId) {
            _writer.writeString(2, _instance.parentReviewId);
        }
        if (_instance.sessionReview) {
            _writer.writeMessage(3, _instance.sessionReview, SessionReview.serializeBinaryToWriter);
        }
        if (_instance.sessionReviewView) {
            _writer.writeEnum(4, _instance.sessionReviewView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get parentReviewId() {
        return this._parentReviewId;
    }
    set parentReviewId(value) {
        this._parentReviewId = value;
    }
    get sessionReview() {
        return this._sessionReview;
    }
    set sessionReview(value) {
        this._sessionReview = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateSessionReviewRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            parentReviewId: this.parentReviewId,
            sessionReview: this.sessionReview
                ? this.sessionReview.toObject()
                : undefined,
            sessionReviewView: this.sessionReviewView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            parentReviewId: this.parentReviewId,
            sessionReview: this.sessionReview
                ? this.sessionReview.toProtobufJSON(options)
                : null,
            sessionReviewView: SessionReview.View[this.sessionReviewView === null ||
                this.sessionReviewView === undefined
                ? 0
                : this.sessionReviewView]
        };
    }
}
CreateSessionReviewRequest.id = 'ondewo.nlu.CreateSessionReviewRequest';
/**
 * Message implementation for ondewo.nlu.SessionReview
 */
export class SessionReview {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SessionReview to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionReviewId = _value.sessionReviewId;
        this.sessionReviewSteps = (_value.sessionReviewSteps || []).map(m => new SessionReviewStep(m));
        SessionReview.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SessionReview();
        SessionReview.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionReviewId = _instance.sessionReviewId || '';
        _instance.sessionReviewSteps = _instance.sessionReviewSteps || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionReviewId = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionReviewStep();
                    _reader.readMessage(messageInitializer2, SessionReviewStep.deserializeBinaryFromReader);
                    (_instance.sessionReviewSteps =
                        _instance.sessionReviewSteps || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        SessionReview.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionReviewId) {
            _writer.writeString(1, _instance.sessionReviewId);
        }
        if (_instance.sessionReviewSteps && _instance.sessionReviewSteps.length) {
            _writer.writeRepeatedMessage(2, _instance.sessionReviewSteps, SessionReviewStep.serializeBinaryToWriter);
        }
    }
    get sessionReviewId() {
        return this._sessionReviewId;
    }
    set sessionReviewId(value) {
        this._sessionReviewId = value;
    }
    get sessionReviewSteps() {
        return this._sessionReviewSteps;
    }
    set sessionReviewSteps(value) {
        this._sessionReviewSteps = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SessionReview.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewSteps: (this.sessionReviewSteps || []).map(m => m.toObject())
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewSteps: (this.sessionReviewSteps || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SessionReview.id = 'ondewo.nlu.SessionReview';
(function (SessionReview) {
    let View;
    (function (View) {
        View[View["VIEW_UNSPECIFIED"] = 0] = "VIEW_UNSPECIFIED";
        View[View["VIEW_FULL"] = 1] = "VIEW_FULL";
        View[View["VIEW_SPARSE"] = 2] = "VIEW_SPARSE";
    })(View = SessionReview.View || (SessionReview.View = {}));
})(SessionReview || (SessionReview = {}));
/**
 * Message implementation for ondewo.nlu.SessionReviewStep
 */
export class SessionReviewStep {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of SessionReviewStep to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.annotatedUsersays = _value.annotatedUsersays
            ? new ondewoNlu013.Intent.TrainingPhrase(_value.annotatedUsersays)
            : undefined;
        this.languageCode = _value.languageCode;
        this.detectedIntents = (_value.detectedIntents || []).map(m => new DetectedIntent(m));
        this.contexts = (_value.contexts || []).map(m => new ondewoNlu006.Context(m));
        this.contextsOut = (_value.contextsOut || []).map(m => new ondewoNlu006.Context(m));
        SessionReviewStep.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new SessionReviewStep();
        SessionReviewStep.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.annotatedUsersays = _instance.annotatedUsersays || undefined;
        _instance.languageCode = _instance.languageCode || '';
        _instance.detectedIntents = _instance.detectedIntents || [];
        _instance.contexts = _instance.contexts || [];
        _instance.contextsOut = _instance.contextsOut || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.annotatedUsersays = new ondewoNlu013.Intent.TrainingPhrase();
                    _reader.readMessage(_instance.annotatedUsersays, ondewoNlu013.Intent.TrainingPhrase.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new DetectedIntent();
                    _reader.readMessage(messageInitializer3, DetectedIntent.deserializeBinaryFromReader);
                    (_instance.detectedIntents = _instance.detectedIntents || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new ondewoNlu006.Context();
                    _reader.readMessage(messageInitializer4, ondewoNlu006.Context.deserializeBinaryFromReader);
                    (_instance.contexts = _instance.contexts || []).push(messageInitializer4);
                    break;
                case 5:
                    const messageInitializer5 = new ondewoNlu006.Context();
                    _reader.readMessage(messageInitializer5, ondewoNlu006.Context.deserializeBinaryFromReader);
                    (_instance.contextsOut = _instance.contextsOut || []).push(messageInitializer5);
                    break;
                default:
                    _reader.skipField();
            }
        }
        SessionReviewStep.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.annotatedUsersays) {
            _writer.writeMessage(1, _instance.annotatedUsersays, ondewoNlu013.Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.detectedIntents && _instance.detectedIntents.length) {
            _writer.writeRepeatedMessage(3, _instance.detectedIntents, DetectedIntent.serializeBinaryToWriter);
        }
        if (_instance.contexts && _instance.contexts.length) {
            _writer.writeRepeatedMessage(4, _instance.contexts, ondewoNlu006.Context.serializeBinaryToWriter);
        }
        if (_instance.contextsOut && _instance.contextsOut.length) {
            _writer.writeRepeatedMessage(5, _instance.contextsOut, ondewoNlu006.Context.serializeBinaryToWriter);
        }
    }
    get annotatedUsersays() {
        return this._annotatedUsersays;
    }
    set annotatedUsersays(value) {
        this._annotatedUsersays = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get detectedIntents() {
        return this._detectedIntents;
    }
    set detectedIntents(value) {
        this._detectedIntents = value;
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get contextsOut() {
        return this._contextsOut;
    }
    set contextsOut(value) {
        this._contextsOut = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        SessionReviewStep.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            annotatedUsersays: this.annotatedUsersays
                ? this.annotatedUsersays.toObject()
                : undefined,
            languageCode: this.languageCode,
            detectedIntents: (this.detectedIntents || []).map(m => m.toObject()),
            contexts: (this.contexts || []).map(m => m.toObject()),
            contextsOut: (this.contextsOut || []).map(m => m.toObject())
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            annotatedUsersays: this.annotatedUsersays
                ? this.annotatedUsersays.toProtobufJSON(options)
                : null,
            languageCode: this.languageCode,
            detectedIntents: (this.detectedIntents || []).map(m => m.toProtobufJSON(options)),
            contexts: (this.contexts || []).map(m => m.toProtobufJSON(options)),
            contextsOut: (this.contextsOut || []).map(m => m.toProtobufJSON(options))
        };
    }
}
SessionReviewStep.id = 'ondewo.nlu.SessionReviewStep';
/**
 * Message implementation for ondewo.nlu.DetectedIntent
 */
export class DetectedIntent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DetectedIntent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intent = _value.intent
            ? new ondewoNlu013.Intent(_value.intent)
            : undefined;
        this.score = _value.score;
        this.algorithm = _value.algorithm;
        this.fulfillmentMessages = (_value.fulfillmentMessages || []).map(m => new ondewoNlu013.Intent.Message(m));
        this.requiredParamMissing = _value.requiredParamMissing;
        DetectedIntent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DetectedIntent();
        DetectedIntent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intent = _instance.intent || undefined;
        _instance.score = _instance.score || 0;
        _instance.algorithm = _instance.algorithm || '';
        _instance.fulfillmentMessages = _instance.fulfillmentMessages || [];
        _instance.requiredParamMissing = _instance.requiredParamMissing || false;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.intent = new ondewoNlu013.Intent();
                    _reader.readMessage(_instance.intent, ondewoNlu013.Intent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.score = _reader.readFloat();
                    break;
                case 3:
                    _instance.algorithm = _reader.readString();
                    break;
                case 4:
                    const messageInitializer4 = new ondewoNlu013.Intent.Message();
                    _reader.readMessage(messageInitializer4, ondewoNlu013.Intent.Message.deserializeBinaryFromReader);
                    (_instance.fulfillmentMessages =
                        _instance.fulfillmentMessages || []).push(messageInitializer4);
                    break;
                case 5:
                    _instance.requiredParamMissing = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        DetectedIntent.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intent) {
            _writer.writeMessage(1, _instance.intent, ondewoNlu013.Intent.serializeBinaryToWriter);
        }
        if (_instance.score) {
            _writer.writeFloat(2, _instance.score);
        }
        if (_instance.algorithm) {
            _writer.writeString(3, _instance.algorithm);
        }
        if (_instance.fulfillmentMessages && _instance.fulfillmentMessages.length) {
            _writer.writeRepeatedMessage(4, _instance.fulfillmentMessages, ondewoNlu013.Intent.Message.serializeBinaryToWriter);
        }
        if (_instance.requiredParamMissing) {
            _writer.writeBool(5, _instance.requiredParamMissing);
        }
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    get algorithm() {
        return this._algorithm;
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get requiredParamMissing() {
        return this._requiredParamMissing;
    }
    set requiredParamMissing(value) {
        this._requiredParamMissing = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DetectedIntent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            score: this.score,
            algorithm: this.algorithm,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            requiredParamMissing: this.requiredParamMissing
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            score: this.score,
            algorithm: this.algorithm,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toProtobufJSON(options)),
            requiredParamMissing: this.requiredParamMissing
        };
    }
}
DetectedIntent.id = 'ondewo.nlu.DetectedIntent';
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsRequest
 */
export class ListSessionLabelsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionLabelsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        ListSessionLabelsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionLabelsRequest();
        ListSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.parent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionLabelsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parent) {
            _writer.writeString(1, _instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionLabelsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            parent: this.parent
        };
    }
}
ListSessionLabelsRequest.id = 'ondewo.nlu.ListSessionLabelsRequest';
/**
 * Message implementation for ondewo.nlu.ListSessionLabelsResponse
 */
export class ListSessionLabelsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionLabelsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.labels = (_value.labels || []).slice();
        ListSessionLabelsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionLabelsResponse();
        ListSessionLabelsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.labels = _instance.labels || [];
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.labels = _instance.labels || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionLabelsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.labels && _instance.labels.length) {
            _writer.writeRepeatedString(1, _instance.labels);
        }
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionLabelsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            labels: (this.labels || []).slice()
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            labels: (this.labels || []).slice()
        };
    }
}
ListSessionLabelsResponse.id = 'ondewo.nlu.ListSessionLabelsResponse';
/**
 * Message implementation for ondewo.nlu.AddSessionLabelsRequest
 */
export class AddSessionLabelsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddSessionLabelsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.labels = (_value.labels || []).slice();
        this.sessionView = _value.sessionView;
        AddSessionLabelsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddSessionLabelsRequest();
        AddSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.labels = _instance.labels || [];
        _instance.sessionView = _instance.sessionView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    (_instance.labels = _instance.labels || []).push(_reader.readString());
                    break;
                case 3:
                    _instance.sessionView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddSessionLabelsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.labels && _instance.labels.length) {
            _writer.writeRepeatedString(2, _instance.labels);
        }
        if (_instance.sessionView) {
            _writer.writeEnum(3, _instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddSessionLabelsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: Session.View[this.sessionView === null || this.sessionView === undefined
                ? 0
                : this.sessionView]
        };
    }
}
AddSessionLabelsRequest.id = 'ondewo.nlu.AddSessionLabelsRequest';
/**
 * Message implementation for ondewo.nlu.RemoveSessionLabelsRequest
 */
export class RemoveSessionLabelsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RemoveSessionLabelsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.labels = (_value.labels || []).slice();
        this.sessionView = _value.sessionView;
        RemoveSessionLabelsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RemoveSessionLabelsRequest();
        RemoveSessionLabelsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.labels = _instance.labels || [];
        _instance.sessionView = _instance.sessionView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    (_instance.labels = _instance.labels || []).push(_reader.readString());
                    break;
                case 3:
                    _instance.sessionView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RemoveSessionLabelsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.labels && _instance.labels.length) {
            _writer.writeRepeatedString(2, _instance.labels);
        }
        if (_instance.sessionView) {
            _writer.writeEnum(3, _instance.sessionView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    get sessionView() {
        return this._sessionView;
    }
    set sessionView(value) {
        this._sessionView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RemoveSessionLabelsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: Session.View[this.sessionView === null || this.sessionView === undefined
                ? 0
                : this.sessionView]
        };
    }
}
RemoveSessionLabelsRequest.id = 'ondewo.nlu.RemoveSessionLabelsRequest';
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsRequest
 */
export class ListSessionReviewsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionReviewsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.sessionReviewView = _value.sessionReviewView;
        this.pageToken = _value.pageToken;
        ListSessionReviewsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionReviewsRequest();
        ListSessionReviewsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.sessionReviewView = _instance.sessionReviewView || 0;
        _instance.pageToken = _instance.pageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionReviewView = _reader.readEnum();
                    break;
                case 4:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionReviewsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.sessionReviewView) {
            _writer.writeEnum(2, _instance.sessionReviewView);
        }
        if (_instance.pageToken) {
            _writer.writeString(4, _instance.pageToken);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionReviewsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView,
            pageToken: this.pageToken
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            sessionReviewView: SessionReview.View[this.sessionReviewView === null ||
                this.sessionReviewView === undefined
                ? 0
                : this.sessionReviewView],
            pageToken: this.pageToken
        };
    }
}
ListSessionReviewsRequest.id = 'ondewo.nlu.ListSessionReviewsRequest';
/**
 * Message implementation for ondewo.nlu.ListSessionReviewsResponse
 */
export class ListSessionReviewsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListSessionReviewsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionReviews = (_value.sessionReviews || []).map(m => new SessionReview(m));
        this.nextPageToken = _value.nextPageToken;
        ListSessionReviewsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListSessionReviewsResponse();
        ListSessionReviewsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionReviews = _instance.sessionReviews || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SessionReview();
                    _reader.readMessage(messageInitializer1, SessionReview.deserializeBinaryFromReader);
                    (_instance.sessionReviews = _instance.sessionReviews || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListSessionReviewsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionReviews && _instance.sessionReviews.length) {
            _writer.writeRepeatedMessage(1, _instance.sessionReviews, SessionReview.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    get sessionReviews() {
        return this._sessionReviews;
    }
    set sessionReviews(value) {
        this._sessionReviews = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListSessionReviewsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionReviews: (this.sessionReviews || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionReviews: (this.sessionReviews || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
ListSessionReviewsResponse.id = 'ondewo.nlu.ListSessionReviewsResponse';
/**
 * Message implementation for ondewo.nlu.GetSessionReviewRequest
 */
export class GetSessionReviewRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSessionReviewRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionReviewId = _value.sessionReviewId;
        this.sessionReviewView = _value.sessionReviewView;
        GetSessionReviewRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSessionReviewRequest();
        GetSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionReviewId = _instance.sessionReviewId || '';
        _instance.sessionReviewView = _instance.sessionReviewView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionReviewId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionReviewView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSessionReviewRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionReviewId) {
            _writer.writeString(1, _instance.sessionReviewId);
        }
        if (_instance.sessionReviewView) {
            _writer.writeEnum(2, _instance.sessionReviewView);
        }
    }
    get sessionReviewId() {
        return this._sessionReviewId;
    }
    set sessionReviewId(value) {
        this._sessionReviewId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSessionReviewRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewView: this.sessionReviewView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewView: SessionReview.View[this.sessionReviewView === null ||
                this.sessionReviewView === undefined
                ? 0
                : this.sessionReviewView]
        };
    }
}
GetSessionReviewRequest.id = 'ondewo.nlu.GetSessionReviewRequest';
/**
 * Message implementation for ondewo.nlu.GetLatestSessionReviewRequest
 */
export class GetLatestSessionReviewRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetLatestSessionReviewRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.sessionReviewView = _value.sessionReviewView;
        GetLatestSessionReviewRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetLatestSessionReviewRequest();
        GetLatestSessionReviewRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.sessionReviewView = _instance.sessionReviewView || 0;
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.sessionId = _reader.readString();
                    break;
                case 2:
                    _instance.sessionReviewView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetLatestSessionReviewRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sessionId) {
            _writer.writeString(1, _instance.sessionId);
        }
        if (_instance.sessionReviewView) {
            _writer.writeEnum(2, _instance.sessionReviewView);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get sessionReviewView() {
        return this._sessionReviewView;
    }
    set sessionReviewView(value) {
        this._sessionReviewView = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetLatestSessionReviewRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            sessionId: this.sessionId,
            sessionReviewView: SessionReview.View[this.sessionReviewView === null ||
                this.sessionReviewView === undefined
                ? 0
                : this.sessionReviewView]
        };
    }
}
GetLatestSessionReviewRequest.id = 'ondewo.nlu.GetLatestSessionReviewRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3Nlc3Npb24ucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUlMLGtCQUFrQixFQUNuQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFPekUsT0FBTyxLQUFLLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUk1RCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEtBQUssYUFBYSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxLQUFLLFlBQVksTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxNQUFNLENBQU4sSUFBWSxhQVNYO0FBVEQsV0FBWSxhQUFhO0lBQ3ZCLDZGQUE4QixDQUFBO0lBQzlCLHlGQUE0QixDQUFBO0lBQzVCLCtFQUF1QixDQUFBO0lBQ3ZCLGlGQUF3QixDQUFBO0lBQ3hCLDZFQUFzQixDQUFBO0lBQ3RCLG1GQUF5QixDQUFBO0lBQ3pCLHVGQUEyQixDQUFBO0lBQzNCLG1IQUF5QyxDQUFBO0FBQzNDLENBQUMsRUFUVyxhQUFhLEtBQWIsYUFBYSxRQVN4QjtBQUNEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQXdHOUI7OztPQUdHO0lBQ0gsWUFBWSxNQUF1RDtRQUNqRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7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SCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyw2QkFBNkIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGlCQUFpQixFQUNmLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0I7U0FDSixDQUFDO0lBQ0osQ0FBQzs7QUE5SU0sZ0NBQUUsR0FBRywwQ0FBMEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnMsXG4gIHVpbnQ4QXJyYXlUb0Jhc2U2NFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDIgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDUgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA2IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlTG9uZ3J1bm5pbmcwMDggZnJvbSAnLi4vLi4vZ29vZ2xlL2xvbmdydW5uaW5nL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDkgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMTAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUnBjMDExIGZyb20gJy4uLy4uL2dvb2dsZS9ycGMvc3RhdHVzLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVR5cGUwMTIgZnJvbSAnLi4vLi4vZ29vZ2xlL3R5cGUvbGF0bG5nLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTQgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5leHBvcnQgZW51bSBBdWRpb0VuY29kaW5nIHtcbiAgQVVESU9fRU5DT0RJTkdfVU5TUEVDSUZJRUQgPSAwLFxuICBBVURJT19FTkNPRElOR19MSU5FQVJfMTYgPSAxLFxuICBBVURJT19FTkNPRElOR19GTEFDID0gMixcbiAgQVVESU9fRU5DT0RJTkdfTVVMQVcgPSAzLFxuICBBVURJT19FTkNPRElOR19BTVIgPSA0LFxuICBBVURJT19FTkNPRElOR19BTVJfV0IgPSA1LFxuICBBVURJT19FTkNPRElOR19PR0dfT1BVUyA9IDYsXG4gIEFVRElPX0VOQ09ESU5HX1NQRUVYX1dJVEhfSEVBREVSX0JZVEUgPSA3XG59XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRGV0ZWN0SW50ZW50UmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgRGV0ZWN0SW50ZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRGV0ZWN0SW50ZW50UmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERldGVjdEludGVudFJlcXVlc3QoKTtcbiAgICBEZXRlY3RJbnRlbnRSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uID0gX2luc3RhbmNlLnNlc3Npb24gfHwgJyc7XG4gICAgX2luc3RhbmNlLnF1ZXJ5UGFyYW1zID0gX2luc3RhbmNlLnF1ZXJ5UGFyYW1zIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UucXVlcnlJbnB1dCA9IF9pbnN0YW5jZS5xdWVyeUlucHV0IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaW5wdXRBdWRpbyA9IF9pbnN0YW5jZS5pbnB1dEF1ZGlvIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucXVlcnlQYXJhbXMgPSBuZXcgUXVlcnlQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIFF1ZXJ5UGFyYW1ldGVycy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnF1ZXJ5SW5wdXQgPSBuZXcgUXVlcnlJbnB1dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucXVlcnlJbnB1dCxcbiAgICAgICAgICAgIFF1ZXJ5SW5wdXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnB1dEF1ZGlvID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBEZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnNlc3Npb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnF1ZXJ5UGFyYW1zIGFzIGFueSxcbiAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnF1ZXJ5SW5wdXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UucXVlcnlJbnB1dCBhcyBhbnksXG4gICAgICAgIFF1ZXJ5SW5wdXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW5wdXRBdWRpbyAmJiBfaW5zdGFuY2UuaW5wdXRBdWRpby5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCeXRlcyg1LCBfaW5zdGFuY2UuaW5wdXRBdWRpbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXM/OiBRdWVyeVBhcmFtZXRlcnM7XG4gIHByaXZhdGUgX3F1ZXJ5SW5wdXQ/OiBRdWVyeUlucHV0O1xuICBwcml2YXRlIF9pbnB1dEF1ZGlvPzogVWludDhBcnJheTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIERldGVjdEludGVudFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGV0ZWN0SW50ZW50UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uID0gX3ZhbHVlLnNlc3Npb247XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IF92YWx1ZS5xdWVyeVBhcmFtc1xuICAgICAgPyBuZXcgUXVlcnlQYXJhbWV0ZXJzKF92YWx1ZS5xdWVyeVBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucXVlcnlJbnB1dCA9IF92YWx1ZS5xdWVyeUlucHV0XG4gICAgICA/IG5ldyBRdWVyeUlucHV0KF92YWx1ZS5xdWVyeUlucHV0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbnB1dEF1ZGlvID0gX3ZhbHVlLmlucHV0QXVkaW87XG4gICAgRGV0ZWN0SW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbjtcbiAgfVxuICBzZXQgc2Vzc2lvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBxdWVyeVBhcmFtcygpOiBRdWVyeVBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVBhcmFtcztcbiAgfVxuICBzZXQgcXVlcnlQYXJhbXModmFsdWU6IFF1ZXJ5UGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXJ5UGFyYW1zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1ZXJ5SW5wdXQoKTogUXVlcnlJbnB1dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5SW5wdXQ7XG4gIH1cbiAgc2V0IHF1ZXJ5SW5wdXQodmFsdWU6IFF1ZXJ5SW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeUlucHV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlucHV0QXVkaW8oKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0QXVkaW87XG4gIH1cbiAgc2V0IGlucHV0QXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnB1dEF1ZGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGV0ZWN0SW50ZW50UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZXRlY3RJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucXVlcnlQYXJhbXMgPyB0aGlzLnF1ZXJ5UGFyYW1zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBxdWVyeUlucHV0OiB0aGlzLnF1ZXJ5SW5wdXQgPyB0aGlzLnF1ZXJ5SW5wdXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGlucHV0QXVkaW86IHRoaXMuaW5wdXRBdWRpb1xuICAgICAgICA/IHRoaXMuaW5wdXRBdWRpby5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZXRlY3RJbnRlbnRSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucXVlcnlQYXJhbXNcbiAgICAgICAgPyB0aGlzLnF1ZXJ5UGFyYW1zLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHF1ZXJ5SW5wdXQ6IHRoaXMucXVlcnlJbnB1dFxuICAgICAgICA/IHRoaXMucXVlcnlJbnB1dC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBpbnB1dEF1ZGlvOiB0aGlzLmlucHV0QXVkaW8gPyB1aW50OEFycmF5VG9CYXNlNjQodGhpcy5pbnB1dEF1ZGlvKSA6ICcnXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RJbnRlbnRSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEZXRlY3RJbnRlbnRSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzZXNzaW9uPzogc3RyaW5nO1xuICAgIHF1ZXJ5UGFyYW1zPzogUXVlcnlQYXJhbWV0ZXJzLkFzT2JqZWN0O1xuICAgIHF1ZXJ5SW5wdXQ/OiBRdWVyeUlucHV0LkFzT2JqZWN0O1xuICAgIGlucHV0QXVkaW8/OiBVaW50OEFycmF5O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERldGVjdEludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlc3Npb24/OiBzdHJpbmc7XG4gICAgcXVlcnlQYXJhbXM/OiBRdWVyeVBhcmFtZXRlcnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHF1ZXJ5SW5wdXQ/OiBRdWVyeUlucHV0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpbnB1dEF1ZGlvPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5EZXRlY3RJbnRlbnRSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgRGV0ZWN0SW50ZW50UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkRldGVjdEludGVudFJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGV0ZWN0SW50ZW50UmVzcG9uc2UoKTtcbiAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERldGVjdEludGVudFJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnJlc3BvbnNlSWQgPSBfaW5zdGFuY2UucmVzcG9uc2VJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQgPSBfaW5zdGFuY2UucXVlcnlSZXN1bHQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53ZWJob29rU3RhdHVzID0gX2luc3RhbmNlLndlYmhvb2tTdGF0dXMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnJlc3BvbnNlSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeVJlc3VsdCA9IG5ldyBRdWVyeVJlc3VsdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQsXG4gICAgICAgICAgICBRdWVyeVJlc3VsdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLndlYmhvb2tTdGF0dXMgPSBuZXcgZ29vZ2xlUnBjMDExLlN0YXR1cygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uud2ViaG9va1N0YXR1cyxcbiAgICAgICAgICAgIGdvb2dsZVJwYzAxMS5TdGF0dXMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERldGVjdEludGVudFJlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmVzcG9uc2VJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucmVzcG9uc2VJZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucXVlcnlSZXN1bHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQgYXMgYW55LFxuICAgICAgICBRdWVyeVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53ZWJob29rU3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLndlYmhvb2tTdGF0dXMgYXMgYW55LFxuICAgICAgICBnb29nbGVScGMwMTEuU3RhdHVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3BvbnNlSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3F1ZXJ5UmVzdWx0PzogUXVlcnlSZXN1bHQ7XG4gIHByaXZhdGUgX3dlYmhvb2tTdGF0dXM/OiBnb29nbGVScGMwMTEuU3RhdHVzO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRGV0ZWN0SW50ZW50UmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGV0ZWN0SW50ZW50UmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmVzcG9uc2VJZCA9IF92YWx1ZS5yZXNwb25zZUlkO1xuICAgIHRoaXMucXVlcnlSZXN1bHQgPSBfdmFsdWUucXVlcnlSZXN1bHRcbiAgICAgID8gbmV3IFF1ZXJ5UmVzdWx0KF92YWx1ZS5xdWVyeVJlc3VsdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud2ViaG9va1N0YXR1cyA9IF92YWx1ZS53ZWJob29rU3RhdHVzXG4gICAgICA/IG5ldyBnb29nbGVScGMwMTEuU3RhdHVzKF92YWx1ZS53ZWJob29rU3RhdHVzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgRGV0ZWN0SW50ZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCByZXNwb25zZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlSWQ7XG4gIH1cbiAgc2V0IHJlc3BvbnNlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc3BvbnNlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlcnlSZXN1bHQoKTogUXVlcnlSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVJlc3VsdDtcbiAgfVxuICBzZXQgcXVlcnlSZXN1bHQodmFsdWU6IFF1ZXJ5UmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVlcnlSZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2ViaG9va1N0YXR1cygpOiBnb29nbGVScGMwMTEuU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViaG9va1N0YXR1cztcbiAgfVxuICBzZXQgd2ViaG9va1N0YXR1cyh2YWx1ZTogZ29vZ2xlUnBjMDExLlN0YXR1cyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dlYmhvb2tTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZXRlY3RJbnRlbnRSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlSWQ6IHRoaXMucmVzcG9uc2VJZCxcbiAgICAgIHF1ZXJ5UmVzdWx0OiB0aGlzLnF1ZXJ5UmVzdWx0ID8gdGhpcy5xdWVyeVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgd2ViaG9va1N0YXR1czogdGhpcy53ZWJob29rU3RhdHVzXG4gICAgICAgID8gdGhpcy53ZWJob29rU3RhdHVzLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZXRlY3RJbnRlbnRSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlSWQ6IHRoaXMucmVzcG9uc2VJZCxcbiAgICAgIHF1ZXJ5UmVzdWx0OiB0aGlzLnF1ZXJ5UmVzdWx0XG4gICAgICAgID8gdGhpcy5xdWVyeVJlc3VsdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB3ZWJob29rU3RhdHVzOiB0aGlzLndlYmhvb2tTdGF0dXNcbiAgICAgICAgPyB0aGlzLndlYmhvb2tTdGF0dXMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RJbnRlbnRSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRGV0ZWN0SW50ZW50UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHJlc3BvbnNlSWQ/OiBzdHJpbmc7XG4gICAgcXVlcnlSZXN1bHQ/OiBRdWVyeVJlc3VsdC5Bc09iamVjdDtcbiAgICB3ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDExLlN0YXR1cy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBEZXRlY3RJbnRlbnRSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcmVzcG9uc2VJZD86IHN0cmluZztcbiAgICBxdWVyeVJlc3VsdD86IFF1ZXJ5UmVzdWx0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB3ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDExLlN0YXR1cy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlF1ZXJ5UGFyYW1ldGVyc1xuICovXG5leHBvcnQgY2xhc3MgUXVlcnlQYXJhbWV0ZXJzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5RdWVyeVBhcmFtZXRlcnMnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBRdWVyeVBhcmFtZXRlcnMoKTtcbiAgICBRdWVyeVBhcmFtZXRlcnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBRdWVyeVBhcmFtZXRlcnMpIHtcbiAgICBfaW5zdGFuY2UudGltZVpvbmUgPSBfaW5zdGFuY2UudGltZVpvbmUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmdlb0xvY2F0aW9uID0gX2luc3RhbmNlLmdlb0xvY2F0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuY29udGV4dHMgPSBfaW5zdGFuY2UuY29udGV4dHMgfHwgW107XG4gICAgX2luc3RhbmNlLnJlc2V0Q29udGV4dHMgPSBfaW5zdGFuY2UucmVzZXRDb250ZXh0cyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UucGF5bG9hZCA9IF9pbnN0YW5jZS5wYXlsb2FkIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFF1ZXJ5UGFyYW1ldGVycyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGltZVpvbmUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5nZW9Mb2NhdGlvbiA9IG5ldyBnb29nbGVUeXBlMDEyLkxhdExuZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ2VvTG9jYXRpb24sXG4gICAgICAgICAgICBnb29nbGVUeXBlMDEyLkxhdExuZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMDYuQ29udGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkNvbnRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNvbnRleHRzID0gX2luc3RhbmNlLmNvbnRleHRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyM1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UucmVzZXRDb250ZXh0cyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXlsb2FkID0gbmV3IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucGF5bG9hZCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUXVlcnlQYXJhbWV0ZXJzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUXVlcnlQYXJhbWV0ZXJzLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnRpbWVab25lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aW1lWm9uZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ2VvTG9jYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuZ2VvTG9jYXRpb24gYXMgYW55LFxuICAgICAgICBnb29nbGVUeXBlMDEyLkxhdExuZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb250ZXh0cyAmJiBfaW5zdGFuY2UuY29udGV4dHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuY29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuQ29udGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXNldENvbnRleHRzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg0LCBfaW5zdGFuY2UucmVzZXRDb250ZXh0cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGF5bG9hZCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5wYXlsb2FkIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RpbWVab25lPzogc3RyaW5nO1xuICBwcml2YXRlIF9nZW9Mb2NhdGlvbj86IGdvb2dsZVR5cGUwMTIuTGF0TG5nO1xuICBwcml2YXRlIF9jb250ZXh0cz86IG9uZGV3b05sdTAwNi5Db250ZXh0W107XG4gIHByaXZhdGUgX3Jlc2V0Q29udGV4dHM/OiBib29sZWFuO1xuICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUXVlcnlQYXJhbWV0ZXJzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFF1ZXJ5UGFyYW1ldGVycy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy50aW1lWm9uZSA9IF92YWx1ZS50aW1lWm9uZTtcbiAgICB0aGlzLmdlb0xvY2F0aW9uID0gX3ZhbHVlLmdlb0xvY2F0aW9uXG4gICAgICA/IG5ldyBnb29nbGVUeXBlMDEyLkxhdExuZyhfdmFsdWUuZ2VvTG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRleHRzID0gKF92YWx1ZS5jb250ZXh0cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA2LkNvbnRleHQobSlcbiAgICApO1xuICAgIHRoaXMucmVzZXRDb250ZXh0cyA9IF92YWx1ZS5yZXNldENvbnRleHRzO1xuICAgIHRoaXMucGF5bG9hZCA9IF92YWx1ZS5wYXlsb2FkXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoX3ZhbHVlLnBheWxvYWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBRdWVyeVBhcmFtZXRlcnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0aW1lWm9uZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90aW1lWm9uZTtcbiAgfVxuICBzZXQgdGltZVpvbmUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RpbWVab25lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdlb0xvY2F0aW9uKCk6IGdvb2dsZVR5cGUwMTIuTGF0TG5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvTG9jYXRpb247XG4gIH1cbiAgc2V0IGdlb0xvY2F0aW9uKHZhbHVlOiBnb29nbGVUeXBlMDEyLkxhdExuZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dlb0xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbnRleHRzKCk6IG9uZGV3b05sdTAwNi5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0cztcbiAgfVxuICBzZXQgY29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwNi5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCByZXNldENvbnRleHRzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXNldENvbnRleHRzO1xuICB9XG4gIHNldCByZXNldENvbnRleHRzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzZXRDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXlsb2FkKCk6IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheWxvYWQ7XG4gIH1cbiAgc2V0IHBheWxvYWQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BheWxvYWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBRdWVyeVBhcmFtZXRlcnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUXVlcnlQYXJhbWV0ZXJzLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZVpvbmU6IHRoaXMudGltZVpvbmUsXG4gICAgICBnZW9Mb2NhdGlvbjogdGhpcy5nZW9Mb2NhdGlvbiA/IHRoaXMuZ2VvTG9jYXRpb24udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRleHRzOiAodGhpcy5jb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIHJlc2V0Q29udGV4dHM6IHRoaXMucmVzZXRDb250ZXh0cyxcbiAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCA/IHRoaXMucGF5bG9hZC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUXVlcnlQYXJhbWV0ZXJzLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZVpvbmU6IHRoaXMudGltZVpvbmUsXG4gICAgICBnZW9Mb2NhdGlvbjogdGhpcy5nZW9Mb2NhdGlvblxuICAgICAgICA/IHRoaXMuZ2VvTG9jYXRpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY29udGV4dHM6ICh0aGlzLmNvbnRleHRzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIHJlc2V0Q29udGV4dHM6IHRoaXMucmVzZXRDb250ZXh0cyxcbiAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCA/IHRoaXMucGF5bG9hZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFF1ZXJ5UGFyYW1ldGVycyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUXVlcnlQYXJhbWV0ZXJzXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICB0aW1lWm9uZT86IHN0cmluZztcbiAgICBnZW9Mb2NhdGlvbj86IGdvb2dsZVR5cGUwMTIuTGF0TG5nLkFzT2JqZWN0O1xuICAgIGNvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHQuQXNPYmplY3RbXTtcbiAgICByZXNldENvbnRleHRzPzogYm9vbGVhbjtcbiAgICBwYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFF1ZXJ5UGFyYW1ldGVyc1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgdGltZVpvbmU/OiBzdHJpbmc7XG4gICAgZ2VvTG9jYXRpb24/OiBnb29nbGVUeXBlMDEyLkxhdExuZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgY29udGV4dHM/OiBvbmRld29ObHUwMDYuQ29udGV4dC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICByZXNldENvbnRleHRzPzogYm9vbGVhbjtcbiAgICBwYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuUXVlcnlJbnB1dFxuICovXG5leHBvcnQgY2xhc3MgUXVlcnlJbnB1dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuUXVlcnlJbnB1dCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1ZXJ5SW5wdXQoKTtcbiAgICBRdWVyeUlucHV0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUXVlcnlJbnB1dCkge31cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBRdWVyeUlucHV0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpb0NvbmZpZyA9IG5ldyBJbnB1dEF1ZGlvQ29uZmlnKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5hdWRpb0NvbmZpZyxcbiAgICAgICAgICAgIElucHV0QXVkaW9Db25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gbmV3IFRleHRJbnB1dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGV4dCxcbiAgICAgICAgICAgIFRleHRJbnB1dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmV2ZW50ID0gbmV3IEV2ZW50SW5wdXQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmV2ZW50LFxuICAgICAgICAgICAgRXZlbnRJbnB1dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUXVlcnlJbnB1dC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFF1ZXJ5SW5wdXQsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2UuYXVkaW9Db25maWcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuYXVkaW9Db25maWcgYXMgYW55LFxuICAgICAgICBJbnB1dEF1ZGlvQ29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UudGV4dCBhcyBhbnksXG4gICAgICAgIFRleHRJbnB1dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5ldmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5ldmVudCBhcyBhbnksXG4gICAgICAgIEV2ZW50SW5wdXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXVkaW9Db25maWc/OiBJbnB1dEF1ZGlvQ29uZmlnO1xuICBwcml2YXRlIF90ZXh0PzogVGV4dElucHV0O1xuICBwcml2YXRlIF9ldmVudD86IEV2ZW50SW5wdXQ7XG5cbiAgcHJpdmF0ZSBfaW5wdXQ6IFF1ZXJ5SW5wdXQuSW5wdXRDYXNlID0gUXVlcnlJbnB1dC5JbnB1dENhc2Uubm9uZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFF1ZXJ5SW5wdXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UXVlcnlJbnB1dC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5hdWRpb0NvbmZpZyA9IF92YWx1ZS5hdWRpb0NvbmZpZ1xuICAgICAgPyBuZXcgSW5wdXRBdWRpb0NvbmZpZyhfdmFsdWUuYXVkaW9Db25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dCA/IG5ldyBUZXh0SW5wdXQoX3ZhbHVlLnRleHQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZXZlbnQgPSBfdmFsdWUuZXZlbnQgPyBuZXcgRXZlbnRJbnB1dChfdmFsdWUuZXZlbnQpIDogdW5kZWZpbmVkO1xuICAgIFF1ZXJ5SW5wdXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhdWRpb0NvbmZpZygpOiBJbnB1dEF1ZGlvQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Db25maWc7XG4gIH1cbiAgc2V0IGF1ZGlvQ29uZmlnKHZhbHVlOiBJbnB1dEF1ZGlvQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9ldmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0ID0gUXVlcnlJbnB1dC5JbnB1dENhc2UuYXVkaW9Db25maWc7XG4gICAgfVxuICAgIHRoaXMuX2F1ZGlvQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogVGV4dElucHV0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogVGV4dElucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2F1ZGlvQ29uZmlnID0gdGhpcy5fZXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnB1dCA9IFF1ZXJ5SW5wdXQuSW5wdXRDYXNlLnRleHQ7XG4gICAgfVxuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXZlbnQoKTogRXZlbnRJbnB1dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50O1xuICB9XG4gIHNldCBldmVudCh2YWx1ZTogRXZlbnRJbnB1dCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9hdWRpb0NvbmZpZyA9IHRoaXMuX3RleHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnB1dCA9IFF1ZXJ5SW5wdXQuSW5wdXRDYXNlLmV2ZW50O1xuICAgIH1cbiAgICB0aGlzLl9ldmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVlcnlJbnB1dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBRdWVyeUlucHV0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9Db25maWc6IHRoaXMuYXVkaW9Db25maWcgPyB0aGlzLmF1ZGlvQ29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiB0aGlzLmV2ZW50ID8gdGhpcy5ldmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUXVlcnlJbnB1dC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvQ29uZmlnOiB0aGlzLmF1ZGlvQ29uZmlnXG4gICAgICAgID8gdGhpcy5hdWRpb0NvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQgPyB0aGlzLmV2ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVlcnlJbnB1dCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUXVlcnlJbnB1dFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXVkaW9Db25maWc/OiBJbnB1dEF1ZGlvQ29uZmlnLkFzT2JqZWN0O1xuICAgIHRleHQ/OiBUZXh0SW5wdXQuQXNPYmplY3Q7XG4gICAgZXZlbnQ/OiBFdmVudElucHV0LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFF1ZXJ5SW5wdXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGF1ZGlvQ29uZmlnPzogSW5wdXRBdWRpb0NvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgdGV4dD86IFRleHRJbnB1dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZXZlbnQ/OiBFdmVudElucHV0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBJbnB1dENhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIGF1ZGlvQ29uZmlnID0gMSxcbiAgICB0ZXh0ID0gMixcbiAgICBldmVudCA9IDNcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuUXVlcnlSZXN1bHRcbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5UmVzdWx0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5RdWVyeVJlc3VsdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1ZXJ5UmVzdWx0KCk7XG4gICAgUXVlcnlSZXN1bHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBRdWVyeVJlc3VsdCkge1xuICAgIF9pbnN0YW5jZS5xdWVyeVRleHQgPSBfaW5zdGFuY2UucXVlcnlUZXh0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2UgPVxuICAgICAgX2luc3RhbmNlLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5hY3Rpb24gPSBfaW5zdGFuY2UuYWN0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJzID0gX2luc3RhbmNlLnBhcmFtZXRlcnMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQgPVxuICAgICAgX2luc3RhbmNlLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZnVsZmlsbG1lbnRUZXh0ID0gX2luc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyA9IF9pbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS53ZWJob29rU291cmNlID0gX2luc3RhbmNlLndlYmhvb2tTb3VyY2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLndlYmhvb2tQYXlsb2FkID0gX2luc3RhbmNlLndlYmhvb2tQYXlsb2FkIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgPSBfaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgfHwgW107XG4gICAgX2luc3RhbmNlLmludGVudCA9IF9pbnN0YW5jZS5pbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlID1cbiAgICAgIF9pbnN0YW5jZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlIHx8IDA7XG4gICAgX2luc3RhbmNlLmRpYWdub3N0aWNJbmZvID0gX2luc3RhbmNlLmRpYWdub3N0aWNJbmZvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFF1ZXJ5UmVzdWx0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeVRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJzID0gbmV3IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UucGFyYW1ldGVycyxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5mdWxmaWxsbWVudFRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjcgPSBuZXcgb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjcsXG4gICAgICAgICAgICBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2Uud2ViaG9va1NvdXJjZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgX2luc3RhbmNlLndlYmhvb2tQYXlsb2FkID0gbmV3IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uud2ViaG9va1BheWxvYWQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxMCA9IG5ldyBvbmRld29ObHUwMDYuQ29udGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxMCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNi5Db250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyA9IF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50ID0gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmludGVudCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxMy5JbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLmRpYWdub3N0aWNJbmZvID0gbmV3IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZGlhZ25vc3RpY0luZm8sXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFF1ZXJ5UmVzdWx0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUXVlcnlSZXN1bHQsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucXVlcnlUZXh0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5xdWVyeVRleHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxNSwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWN0aW9uKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5hY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmFtZXRlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UucGFyYW1ldGVycyBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2UuZnVsZmlsbG1lbnRUZXh0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzICYmIF9pbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud2ViaG9va1NvdXJjZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2Uud2ViaG9va1NvdXJjZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud2ViaG9va1BheWxvYWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBfaW5zdGFuY2Uud2ViaG9va1BheWxvYWQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgJiYgX2luc3RhbmNlLm91dHB1dENvbnRleHRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMTAsXG4gICAgICAgIF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNi5Db250ZXh0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2UuaW50ZW50IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMTIsIF9pbnN0YW5jZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kaWFnbm9zdGljSW5mbykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UuZGlhZ25vc3RpY0luZm8gYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcXVlcnlUZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3NwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWN0aW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0O1xuICBwcml2YXRlIF9hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9mdWxmaWxsbWVudFRleHQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z1bGZpbGxtZW50TWVzc2FnZXM/OiBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2VbXTtcbiAgcHJpdmF0ZSBfd2ViaG9va1NvdXJjZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfd2ViaG9va1BheWxvYWQ/OiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3Q7XG4gIHByaXZhdGUgX291dHB1dENvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHRbXTtcbiAgcHJpdmF0ZSBfaW50ZW50Pzogb25kZXdvTmx1MDEzLkludGVudDtcbiAgcHJpdmF0ZSBfaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZGlhZ25vc3RpY0luZm8/OiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBRdWVyeVJlc3VsdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxRdWVyeVJlc3VsdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5xdWVyeVRleHQgPSBfdmFsdWUucXVlcnlUZXh0O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSA9IF92YWx1ZS5zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2U7XG4gICAgdGhpcy5hY3Rpb24gPSBfdmFsdWUuYWN0aW9uO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IF92YWx1ZS5wYXJhbWV0ZXJzXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoX3ZhbHVlLnBhcmFtZXRlcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCA9IF92YWx1ZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQ7XG4gICAgdGhpcy5mdWxmaWxsbWVudFRleHQgPSBfdmFsdWUuZnVsZmlsbG1lbnRUZXh0O1xuICAgIHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyA9IChfdmFsdWUuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlKG0pXG4gICAgKTtcbiAgICB0aGlzLndlYmhvb2tTb3VyY2UgPSBfdmFsdWUud2ViaG9va1NvdXJjZTtcbiAgICB0aGlzLndlYmhvb2tQYXlsb2FkID0gX3ZhbHVlLndlYmhvb2tQYXlsb2FkXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoX3ZhbHVlLndlYmhvb2tQYXlsb2FkKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5vdXRwdXRDb250ZXh0cyA9IChfdmFsdWUub3V0cHV0Q29udGV4dHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNi5Db250ZXh0KG0pXG4gICAgKTtcbiAgICB0aGlzLmludGVudCA9IF92YWx1ZS5pbnRlbnRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQoX3ZhbHVlLmludGVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSA9IF92YWx1ZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlO1xuICAgIHRoaXMuZGlhZ25vc3RpY0luZm8gPSBfdmFsdWUuZGlhZ25vc3RpY0luZm9cbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdChfdmFsdWUuZGlhZ25vc3RpY0luZm8pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBRdWVyeVJlc3VsdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHF1ZXJ5VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVRleHQ7XG4gIH1cbiAgc2V0IHF1ZXJ5VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVlcnlUZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2U7XG4gIH1cbiAgc2V0IHNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gIH1cbiAgc2V0IGFjdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtZXRlcnMoKTogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVycztcbiAgfVxuICBzZXQgcGFyYW1ldGVycyh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBhbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFJlcXVpcmVkUGFyYW1zUHJlc2VudDtcbiAgfVxuICBzZXQgYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZ1bGZpbGxtZW50VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudFRleHQ7XG4gIH1cbiAgc2V0IGZ1bGZpbGxtZW50VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRUZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZ1bGZpbGxtZW50TWVzc2FnZXMoKTogb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudE1lc3NhZ2VzO1xuICB9XG4gIHNldCBmdWxmaWxsbWVudE1lc3NhZ2VzKHZhbHVlOiBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50TWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2ViaG9va1NvdXJjZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93ZWJob29rU291cmNlO1xuICB9XG4gIHNldCB3ZWJob29rU291cmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93ZWJob29rU291cmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdlYmhvb2tQYXlsb2FkKCk6IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYmhvb2tQYXlsb2FkO1xuICB9XG4gIHNldCB3ZWJob29rUGF5bG9hZCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2ViaG9va1BheWxvYWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3V0cHV0Q29udGV4dHMoKTogb25kZXdvTmx1MDA2LkNvbnRleHRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dENvbnRleHRzO1xuICB9XG4gIHNldCBvdXRwdXRDb250ZXh0cyh2YWx1ZTogb25kZXdvTmx1MDA2LkNvbnRleHRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX291dHB1dENvbnRleHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudCgpOiBvbmRld29ObHUwMTMuSW50ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50O1xuICB9XG4gIHNldCBpbnRlbnQodmFsdWU6IG9uZGV3b05sdTAxMy5JbnRlbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlO1xuICB9XG4gIHNldCBpbnRlbnREZXRlY3Rpb25Db25maWRlbmNlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRpYWdub3N0aWNJbmZvKCk6IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWdub3N0aWNJbmZvO1xuICB9XG4gIHNldCBkaWFnbm9zdGljSW5mbyh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGlhZ25vc3RpY0luZm8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBRdWVyeVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBRdWVyeVJlc3VsdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5VGV4dDogdGhpcy5xdWVyeVRleHQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlOiB0aGlzLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSxcbiAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMgPyB0aGlzLnBhcmFtZXRlcnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudDogdGhpcy5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQsXG4gICAgICBmdWxmaWxsbWVudFRleHQ6IHRoaXMuZnVsZmlsbG1lbnRUZXh0LFxuICAgICAgZnVsZmlsbG1lbnRNZXNzYWdlczogKHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgd2ViaG9va1NvdXJjZTogdGhpcy53ZWJob29rU291cmNlLFxuICAgICAgd2ViaG9va1BheWxvYWQ6IHRoaXMud2ViaG9va1BheWxvYWRcbiAgICAgICAgPyB0aGlzLndlYmhvb2tQYXlsb2FkLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBvdXRwdXRDb250ZXh0czogKHRoaXMub3V0cHV0Q29udGV4dHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudERldGVjdGlvbkNvbmZpZGVuY2U6IHRoaXMuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSxcbiAgICAgIGRpYWdub3N0aWNJbmZvOiB0aGlzLmRpYWdub3N0aWNJbmZvXG4gICAgICAgID8gdGhpcy5kaWFnbm9zdGljSW5mby50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUXVlcnlSZXN1bHQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeVRleHQ6IHRoaXMucXVlcnlUZXh0LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZTogdGhpcy5zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2UsXG4gICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzXG4gICAgICAgID8gdGhpcy5wYXJhbWV0ZXJzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudDogdGhpcy5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQsXG4gICAgICBmdWxmaWxsbWVudFRleHQ6IHRoaXMuZnVsZmlsbG1lbnRUZXh0LFxuICAgICAgZnVsZmlsbG1lbnRNZXNzYWdlczogKHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIHdlYmhvb2tTb3VyY2U6IHRoaXMud2ViaG9va1NvdXJjZSxcbiAgICAgIHdlYmhvb2tQYXlsb2FkOiB0aGlzLndlYmhvb2tQYXlsb2FkXG4gICAgICAgID8gdGhpcy53ZWJob29rUGF5bG9hZC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBvdXRwdXRDb250ZXh0czogKHRoaXMub3V0cHV0Q29udGV4dHMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZTogdGhpcy5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlLFxuICAgICAgZGlhZ25vc3RpY0luZm86IHRoaXMuZGlhZ25vc3RpY0luZm9cbiAgICAgICAgPyB0aGlzLmRpYWdub3N0aWNJbmZvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUXVlcnlSZXN1bHQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFF1ZXJ5UmVzdWx0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVyeVRleHQ/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgICBhY3Rpb24/OiBzdHJpbmc7XG4gICAgcGFyYW1ldGVycz86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5Bc09iamVjdDtcbiAgICBhbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQ/OiBib29sZWFuO1xuICAgIGZ1bGZpbGxtZW50VGV4dD86IHN0cmluZztcbiAgICBmdWxmaWxsbWVudE1lc3NhZ2VzPzogb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlLkFzT2JqZWN0W107XG4gICAgd2ViaG9va1NvdXJjZT86IHN0cmluZztcbiAgICB3ZWJob29rUGF5bG9hZD86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5Bc09iamVjdDtcbiAgICBvdXRwdXRDb250ZXh0cz86IG9uZGV3b05sdTAwNi5Db250ZXh0LkFzT2JqZWN0W107XG4gICAgaW50ZW50Pzogb25kZXdvTmx1MDEzLkludGVudC5Bc09iamVjdDtcbiAgICBpbnRlbnREZXRlY3Rpb25Db25maWRlbmNlPzogbnVtYmVyO1xuICAgIGRpYWdub3N0aWNJbmZvPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFF1ZXJ5UmVzdWx0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBxdWVyeVRleHQ/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIHNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgICBhY3Rpb24/OiBzdHJpbmc7XG4gICAgcGFyYW1ldGVycz86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50PzogYm9vbGVhbjtcbiAgICBmdWxmaWxsbWVudFRleHQ/OiBzdHJpbmc7XG4gICAgZnVsZmlsbG1lbnRNZXNzYWdlcz86IG9uZGV3b05sdTAxMy5JbnRlbnQuTWVzc2FnZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICB3ZWJob29rU291cmNlPzogc3RyaW5nO1xuICAgIHdlYmhvb2tQYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBvdXRwdXRDb250ZXh0cz86IG9uZGV3b05sdTAwNi5Db250ZXh0LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGludGVudD86IG9uZGV3b05sdTAxMy5JbnRlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGludGVudERldGVjdGlvbkNvbmZpZGVuY2U/OiBudW1iZXI7XG4gICAgZGlhZ25vc3RpY0luZm8/OiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCgpO1xuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnNlc3Npb24gPSBfaW5zdGFuY2Uuc2Vzc2lvbiB8fCAnJztcbiAgICBfaW5zdGFuY2UucXVlcnlQYXJhbXMgPSBfaW5zdGFuY2UucXVlcnlQYXJhbXMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5xdWVyeUlucHV0ID0gX2luc3RhbmNlLnF1ZXJ5SW5wdXQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5zaW5nbGVVdHRlcmFuY2UgPSBfaW5zdGFuY2Uuc2luZ2xlVXR0ZXJhbmNlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5pbnB1dEF1ZGlvID0gX2luc3RhbmNlLmlucHV0QXVkaW8gfHwgbmV3IFVpbnQ4QXJyYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeVBhcmFtcyA9IG5ldyBRdWVyeVBhcmFtZXRlcnMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucXVlcnlJbnB1dCA9IG5ldyBRdWVyeUlucHV0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeUlucHV0LFxuICAgICAgICAgICAgUXVlcnlJbnB1dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnNpbmdsZVV0dGVyYW5jZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnB1dEF1ZGlvID0gX3JlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnNlc3Npb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnF1ZXJ5UGFyYW1zIGFzIGFueSxcbiAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnF1ZXJ5SW5wdXQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UucXVlcnlJbnB1dCBhcyBhbnksXG4gICAgICAgIFF1ZXJ5SW5wdXQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2luZ2xlVXR0ZXJhbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg0LCBfaW5zdGFuY2Uuc2luZ2xlVXR0ZXJhbmNlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnB1dEF1ZGlvICYmIF9pbnN0YW5jZS5pbnB1dEF1ZGlvLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZUJ5dGVzKDYsIF9pbnN0YW5jZS5pbnB1dEF1ZGlvKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9xdWVyeVBhcmFtcz86IFF1ZXJ5UGFyYW1ldGVycztcbiAgcHJpdmF0ZSBfcXVlcnlJbnB1dD86IFF1ZXJ5SW5wdXQ7XG4gIHByaXZhdGUgX3NpbmdsZVV0dGVyYW5jZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2lucHV0QXVkaW8/OiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uID0gX3ZhbHVlLnNlc3Npb247XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IF92YWx1ZS5xdWVyeVBhcmFtc1xuICAgICAgPyBuZXcgUXVlcnlQYXJhbWV0ZXJzKF92YWx1ZS5xdWVyeVBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucXVlcnlJbnB1dCA9IF92YWx1ZS5xdWVyeUlucHV0XG4gICAgICA/IG5ldyBRdWVyeUlucHV0KF92YWx1ZS5xdWVyeUlucHV0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaW5nbGVVdHRlcmFuY2UgPSBfdmFsdWUuc2luZ2xlVXR0ZXJhbmNlO1xuICAgIHRoaXMuaW5wdXRBdWRpbyA9IF92YWx1ZS5pbnB1dEF1ZGlvO1xuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb247XG4gIH1cbiAgc2V0IHNlc3Npb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlcnlQYXJhbXMoKTogUXVlcnlQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlQYXJhbXM7XG4gIH1cbiAgc2V0IHF1ZXJ5UGFyYW1zKHZhbHVlOiBRdWVyeVBhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeVBhcmFtcyA9IHZhbHVlO1xuICB9XG4gIGdldCBxdWVyeUlucHV0KCk6IFF1ZXJ5SW5wdXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUlucHV0O1xuICB9XG4gIHNldCBxdWVyeUlucHV0KHZhbHVlOiBRdWVyeUlucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVlcnlJbnB1dCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaW5nbGVVdHRlcmFuY2UoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZVV0dGVyYW5jZTtcbiAgfVxuICBzZXQgc2luZ2xlVXR0ZXJhbmNlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2luZ2xlVXR0ZXJhbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlucHV0QXVkaW8oKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0QXVkaW87XG4gIH1cbiAgc2V0IGlucHV0QXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnB1dEF1ZGlvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucXVlcnlQYXJhbXMgPyB0aGlzLnF1ZXJ5UGFyYW1zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBxdWVyeUlucHV0OiB0aGlzLnF1ZXJ5SW5wdXQgPyB0aGlzLnF1ZXJ5SW5wdXQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNpbmdsZVV0dGVyYW5jZTogdGhpcy5zaW5nbGVVdHRlcmFuY2UsXG4gICAgICBpbnB1dEF1ZGlvOiB0aGlzLmlucHV0QXVkaW9cbiAgICAgICAgPyB0aGlzLmlucHV0QXVkaW8uc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLnF1ZXJ5UGFyYW1zXG4gICAgICAgID8gdGhpcy5xdWVyeVBhcmFtcy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBxdWVyeUlucHV0OiB0aGlzLnF1ZXJ5SW5wdXRcbiAgICAgICAgPyB0aGlzLnF1ZXJ5SW5wdXQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgc2luZ2xlVXR0ZXJhbmNlOiB0aGlzLnNpbmdsZVV0dGVyYW5jZSxcbiAgICAgIGlucHV0QXVkaW86IHRoaXMuaW5wdXRBdWRpbyA/IHVpbnQ4QXJyYXlUb0Jhc2U2NCh0aGlzLmlucHV0QXVkaW8pIDogJydcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb24/OiBzdHJpbmc7XG4gICAgcXVlcnlQYXJhbXM/OiBRdWVyeVBhcmFtZXRlcnMuQXNPYmplY3Q7XG4gICAgcXVlcnlJbnB1dD86IFF1ZXJ5SW5wdXQuQXNPYmplY3Q7XG4gICAgc2luZ2xlVXR0ZXJhbmNlPzogYm9vbGVhbjtcbiAgICBpbnB1dEF1ZGlvPzogVWludDhBcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uPzogc3RyaW5nO1xuICAgIHF1ZXJ5UGFyYW1zPzogUXVlcnlQYXJhbWV0ZXJzLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBxdWVyeUlucHV0PzogUXVlcnlJbnB1dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2luZ2xlVXR0ZXJhbmNlPzogYm9vbGVhbjtcbiAgICBpbnB1dEF1ZGlvPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UoKTtcbiAgICBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnJlc3BvbnNlSWQgPSBfaW5zdGFuY2UucmVzcG9uc2VJZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucmVjb2duaXRpb25SZXN1bHQgPSBfaW5zdGFuY2UucmVjb2duaXRpb25SZXN1bHQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5xdWVyeVJlc3VsdCA9IF9pbnN0YW5jZS5xdWVyeVJlc3VsdCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLndlYmhvb2tTdGF0dXMgPSBfaW5zdGFuY2Uud2ViaG9va1N0YXR1cyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucmVzcG9uc2VJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnJlY29nbml0aW9uUmVzdWx0ID0gbmV3IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5yZWNvZ25pdGlvblJlc3VsdCxcbiAgICAgICAgICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQgPSBuZXcgUXVlcnlSZXN1bHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgUXVlcnlSZXN1bHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS53ZWJob29rU3RhdHVzID0gbmV3IGdvb2dsZVJwYzAxMS5TdGF0dXMoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndlYmhvb2tTdGF0dXMsXG4gICAgICAgICAgICBnb29nbGVScGMwMTEuU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnJlc3BvbnNlSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnJlc3BvbnNlSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlY29nbml0aW9uUmVzdWx0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnJlY29nbml0aW9uUmVzdWx0IGFzIGFueSxcbiAgICAgICAgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucXVlcnlSZXN1bHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQgYXMgYW55LFxuICAgICAgICBRdWVyeVJlc3VsdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53ZWJob29rU3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLndlYmhvb2tTdGF0dXMgYXMgYW55LFxuICAgICAgICBnb29nbGVScGMwMTEuU3RhdHVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3BvbnNlSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlY29nbml0aW9uUmVzdWx0PzogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQ7XG4gIHByaXZhdGUgX3F1ZXJ5UmVzdWx0PzogUXVlcnlSZXN1bHQ7XG4gIHByaXZhdGUgX3dlYmhvb2tTdGF0dXM/OiBnb29nbGVScGMwMTEuU3RhdHVzO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJlc3BvbnNlSWQgPSBfdmFsdWUucmVzcG9uc2VJZDtcbiAgICB0aGlzLnJlY29nbml0aW9uUmVzdWx0ID0gX3ZhbHVlLnJlY29nbml0aW9uUmVzdWx0XG4gICAgICA/IG5ldyBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdChfdmFsdWUucmVjb2duaXRpb25SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnF1ZXJ5UmVzdWx0ID0gX3ZhbHVlLnF1ZXJ5UmVzdWx0XG4gICAgICA/IG5ldyBRdWVyeVJlc3VsdChfdmFsdWUucXVlcnlSZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndlYmhvb2tTdGF0dXMgPSBfdmFsdWUud2ViaG9va1N0YXR1c1xuICAgICAgPyBuZXcgZ29vZ2xlUnBjMDExLlN0YXR1cyhfdmFsdWUud2ViaG9va1N0YXR1cylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcmVzcG9uc2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUlkO1xuICB9XG4gIHNldCByZXNwb25zZUlkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXNwb25zZUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlY29nbml0aW9uUmVzdWx0KCk6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb2duaXRpb25SZXN1bHQ7XG4gIH1cbiAgc2V0IHJlY29nbml0aW9uUmVzdWx0KHZhbHVlOiBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlY29nbml0aW9uUmVzdWx0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1ZXJ5UmVzdWx0KCk6IFF1ZXJ5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlSZXN1bHQ7XG4gIH1cbiAgc2V0IHF1ZXJ5UmVzdWx0KHZhbHVlOiBRdWVyeVJlc3VsdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXJ5UmVzdWx0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdlYmhvb2tTdGF0dXMoKTogZ29vZ2xlUnBjMDExLlN0YXR1cyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYmhvb2tTdGF0dXM7XG4gIH1cbiAgc2V0IHdlYmhvb2tTdGF0dXModmFsdWU6IGdvb2dsZVJwYzAxMS5TdGF0dXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93ZWJob29rU3RhdHVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZUlkOiB0aGlzLnJlc3BvbnNlSWQsXG4gICAgICByZWNvZ25pdGlvblJlc3VsdDogdGhpcy5yZWNvZ25pdGlvblJlc3VsdFxuICAgICAgICA/IHRoaXMucmVjb2duaXRpb25SZXN1bHQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHF1ZXJ5UmVzdWx0OiB0aGlzLnF1ZXJ5UmVzdWx0ID8gdGhpcy5xdWVyeVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgd2ViaG9va1N0YXR1czogdGhpcy53ZWJob29rU3RhdHVzXG4gICAgICAgID8gdGhpcy53ZWJob29rU3RhdHVzLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlSWQ6IHRoaXMucmVzcG9uc2VJZCxcbiAgICAgIHJlY29nbml0aW9uUmVzdWx0OiB0aGlzLnJlY29nbml0aW9uUmVzdWx0XG4gICAgICAgID8gdGhpcy5yZWNvZ25pdGlvblJlc3VsdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBxdWVyeVJlc3VsdDogdGhpcy5xdWVyeVJlc3VsdFxuICAgICAgICA/IHRoaXMucXVlcnlSZXN1bHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgd2ViaG9va1N0YXR1czogdGhpcy53ZWJob29rU3RhdHVzXG4gICAgICAgID8gdGhpcy53ZWJob29rU3RhdHVzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICByZXNwb25zZUlkPzogc3RyaW5nO1xuICAgIHJlY29nbml0aW9uUmVzdWx0PzogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuQXNPYmplY3Q7XG4gICAgcXVlcnlSZXN1bHQ/OiBRdWVyeVJlc3VsdC5Bc09iamVjdDtcbiAgICB3ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDExLlN0YXR1cy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcmVzcG9uc2VJZD86IHN0cmluZztcbiAgICByZWNvZ25pdGlvblJlc3VsdD86IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBxdWVyeVJlc3VsdD86IFF1ZXJ5UmVzdWx0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB3ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDExLlN0YXR1cy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCgpO1xuICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQpIHtcbiAgICBfaW5zdGFuY2UubWVzc2FnZVR5cGUgPSBfaW5zdGFuY2UubWVzc2FnZVR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UudHJhbnNjcmlwdCA9IF9pbnN0YW5jZS50cmFuc2NyaXB0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pc0ZpbmFsID0gX2luc3RhbmNlLmlzRmluYWwgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNvbmZpZGVuY2UgPSBfaW5zdGFuY2UuY29uZmlkZW5jZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm1lc3NhZ2VUeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYW5zY3JpcHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0ZpbmFsID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZGVuY2UgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5tZXNzYWdlVHlwZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLm1lc3NhZ2VUeXBlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFuc2NyaXB0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS50cmFuc2NyaXB0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc0ZpbmFsKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgzLCBfaW5zdGFuY2UuaXNGaW5hbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29uZmlkZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5jb25maWRlbmNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZXNzYWdlVHlwZT86IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0Lk1lc3NhZ2VUeXBlO1xuICBwcml2YXRlIF90cmFuc2NyaXB0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9pc0ZpbmFsPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY29uZmlkZW5jZT86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm1lc3NhZ2VUeXBlID0gX3ZhbHVlLm1lc3NhZ2VUeXBlO1xuICAgIHRoaXMudHJhbnNjcmlwdCA9IF92YWx1ZS50cmFuc2NyaXB0O1xuICAgIHRoaXMuaXNGaW5hbCA9IF92YWx1ZS5pc0ZpbmFsO1xuICAgIHRoaXMuY29uZmlkZW5jZSA9IF92YWx1ZS5jb25maWRlbmNlO1xuICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbWVzc2FnZVR5cGUoKTogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuTWVzc2FnZVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlVHlwZTtcbiAgfVxuICBzZXQgbWVzc2FnZVR5cGUodmFsdWU6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0Lk1lc3NhZ2VUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWVzc2FnZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhbnNjcmlwdCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2NyaXB0O1xuICB9XG4gIHNldCB0cmFuc2NyaXB0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFuc2NyaXB0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlzRmluYWwoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmluYWw7XG4gIH1cbiAgc2V0IGlzRmluYWwodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc0ZpbmFsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZGVuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlkZW5jZTtcbiAgfVxuICBzZXQgY29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlkZW5jZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZVR5cGU6IHRoaXMubWVzc2FnZVR5cGUsXG4gICAgICB0cmFuc2NyaXB0OiB0aGlzLnRyYW5zY3JpcHQsXG4gICAgICBpc0ZpbmFsOiB0aGlzLmlzRmluYWwsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2VUeXBlOlxuICAgICAgICBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdC5NZXNzYWdlVHlwZVtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VUeXBlID09PSBudWxsIHx8IHRoaXMubWVzc2FnZVR5cGUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMubWVzc2FnZVR5cGVcbiAgICAgICAgXSxcbiAgICAgIHRyYW5zY3JpcHQ6IHRoaXMudHJhbnNjcmlwdCxcbiAgICAgIGlzRmluYWw6IHRoaXMuaXNGaW5hbCxcbiAgICAgIGNvbmZpZGVuY2U6IHRoaXMuY29uZmlkZW5jZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBtZXNzYWdlVHlwZT86IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0Lk1lc3NhZ2VUeXBlO1xuICAgIHRyYW5zY3JpcHQ/OiBzdHJpbmc7XG4gICAgaXNGaW5hbD86IGJvb2xlYW47XG4gICAgY29uZmlkZW5jZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbWVzc2FnZVR5cGU/OiBzdHJpbmc7XG4gICAgdHJhbnNjcmlwdD86IHN0cmluZztcbiAgICBpc0ZpbmFsPzogYm9vbGVhbjtcbiAgICBjb25maWRlbmNlPzogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBNRVNTQUdFX1RZUEVfVU5TUEVDSUZJRUQgPSAwLFxuICAgIFRSQU5TQ1JJUFQgPSAxLFxuICAgIEVORF9PRl9TSU5HTEVfVVRURVJBTkNFID0gMlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnB1dEF1ZGlvQ29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dEF1ZGlvQ29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5JbnB1dEF1ZGlvQ29uZmlnJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW5wdXRBdWRpb0NvbmZpZygpO1xuICAgIElucHV0QXVkaW9Db25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBJbnB1dEF1ZGlvQ29uZmlnKSB7XG4gICAgX2luc3RhbmNlLmF1ZGlvRW5jb2RpbmcgPSBfaW5zdGFuY2UuYXVkaW9FbmNvZGluZyB8fCAwO1xuICAgIF9pbnN0YW5jZS5zYW1wbGVSYXRlSGVydHogPSBfaW5zdGFuY2Uuc2FtcGxlUmF0ZUhlcnR6IHx8IDA7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBocmFzZUhpbnRzID0gX2luc3RhbmNlLnBocmFzZUhpbnRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSW5wdXRBdWRpb0NvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuYXVkaW9FbmNvZGluZyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zYW1wbGVSYXRlSGVydHogPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5waHJhc2VIaW50cyA9IF9pbnN0YW5jZS5waHJhc2VIaW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIElucHV0QXVkaW9Db25maWcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBJbnB1dEF1ZGlvQ29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmF1ZGlvRW5jb2RpbmcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5hdWRpb0VuY29kaW5nKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zYW1wbGVSYXRlSGVydHopIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyLCBfaW5zdGFuY2Uuc2FtcGxlUmF0ZUhlcnR6KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGhyYXNlSGludHMgJiYgX2luc3RhbmNlLnBocmFzZUhpbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5waHJhc2VIaW50cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXVkaW9FbmNvZGluZz86IEF1ZGlvRW5jb2Rpbmc7XG4gIHByaXZhdGUgX3NhbXBsZVJhdGVIZXJ0ej86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9waHJhc2VIaW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSW5wdXRBdWRpb0NvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbnB1dEF1ZGlvQ29uZmlnLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmF1ZGlvRW5jb2RpbmcgPSBfdmFsdWUuYXVkaW9FbmNvZGluZztcbiAgICB0aGlzLnNhbXBsZVJhdGVIZXJ0eiA9IF92YWx1ZS5zYW1wbGVSYXRlSGVydHo7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMucGhyYXNlSGludHMgPSAoX3ZhbHVlLnBocmFzZUhpbnRzIHx8IFtdKS5zbGljZSgpO1xuICAgIElucHV0QXVkaW9Db25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhdWRpb0VuY29kaW5nKCk6IEF1ZGlvRW5jb2RpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0VuY29kaW5nO1xuICB9XG4gIHNldCBhdWRpb0VuY29kaW5nKHZhbHVlOiBBdWRpb0VuY29kaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9FbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBzYW1wbGVSYXRlSGVydHooKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZUhlcnR6O1xuICB9XG4gIHNldCBzYW1wbGVSYXRlSGVydHoodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NhbXBsZVJhdGVIZXJ0eiA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaHJhc2VIaW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BocmFzZUhpbnRzO1xuICB9XG4gIHNldCBwaHJhc2VIaW50cyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waHJhc2VIaW50cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIElucHV0QXVkaW9Db25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSW5wdXRBdWRpb0NvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvRW5jb2Rpbmc6IHRoaXMuYXVkaW9FbmNvZGluZyxcbiAgICAgIHNhbXBsZVJhdGVIZXJ0ejogdGhpcy5zYW1wbGVSYXRlSGVydHosXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGhyYXNlSGludHM6ICh0aGlzLnBocmFzZUhpbnRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogSW5wdXRBdWRpb0NvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1ZGlvRW5jb2Rpbmc6XG4gICAgICAgIEF1ZGlvRW5jb2RpbmdbXG4gICAgICAgICAgdGhpcy5hdWRpb0VuY29kaW5nID09PSBudWxsIHx8IHRoaXMuYXVkaW9FbmNvZGluZyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5hdWRpb0VuY29kaW5nXG4gICAgICAgIF0sXG4gICAgICBzYW1wbGVSYXRlSGVydHo6IHRoaXMuc2FtcGxlUmF0ZUhlcnR6LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHBocmFzZUhpbnRzOiAodGhpcy5waHJhc2VIaW50cyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSW5wdXRBdWRpb0NvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSW5wdXRBdWRpb0NvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYXVkaW9FbmNvZGluZz86IEF1ZGlvRW5jb2Rpbmc7XG4gICAgc2FtcGxlUmF0ZUhlcnR6PzogbnVtYmVyO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBwaHJhc2VIaW50cz86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIElucHV0QXVkaW9Db25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGF1ZGlvRW5jb2Rpbmc/OiBzdHJpbmc7XG4gICAgc2FtcGxlUmF0ZUhlcnR6PzogbnVtYmVyO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBwaHJhc2VIaW50cz86IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5UZXh0SW5wdXRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuVGV4dElucHV0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dElucHV0KCk7XG4gICAgVGV4dElucHV0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVGV4dElucHV0KSB7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFRleHRJbnB1dCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGV4dElucHV0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogVGV4dElucHV0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUZXh0SW5wdXQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dElucHV0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgVGV4dElucHV0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dElucHV0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRleHRJbnB1dC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBUZXh0SW5wdXQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0SW5wdXQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRleHRJbnB1dFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVGV4dElucHV0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRXZlbnRJbnB1dFxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRJbnB1dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRXZlbnRJbnB1dCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV2ZW50SW5wdXQoKTtcbiAgICBFdmVudElucHV0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRXZlbnRJbnB1dCkge1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBhcmFtZXRlcnMgPSBfaW5zdGFuY2UucGFyYW1ldGVycyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFdmVudElucHV0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5uYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyYW1ldGVycyA9IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV2ZW50SW5wdXQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBFdmVudElucHV0LCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmFtZXRlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UucGFyYW1ldGVycyBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVycz86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdDtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRXZlbnRJbnB1dCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFdmVudElucHV0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBfdmFsdWUucGFyYW1ldGVyc1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0KF92YWx1ZS5wYXJhbWV0ZXJzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIEV2ZW50SW5wdXQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyYW1ldGVycygpOiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBwYXJhbWV0ZXJzKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXZlbnRJbnB1dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFdmVudElucHV0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzID8gdGhpcy5wYXJhbWV0ZXJzLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXZlbnRJbnB1dC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVyc1xuICAgICAgICA/IHRoaXMucGFyYW1ldGVycy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFdmVudElucHV0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFdmVudElucHV0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHBhcmFtZXRlcnM/OiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuQXNPYmplY3Q7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEV2ZW50SW5wdXRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGFyYW1ldGVycz86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TZXNzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXNzaW9uJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Vzc2lvbigpO1xuICAgIFNlc3Npb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXNzaW9uKSB7XG4gICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9pbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNlc3Npb25TdGVwcyA9IF9pbnN0YW5jZS5zZXNzaW9uU3RlcHMgfHwgW107XG4gICAgX2luc3RhbmNlLnNlc3Npb25JbmZvID0gX2luc3RhbmNlLnNlc3Npb25JbmZvIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb24sXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTZXNzaW9uU3RlcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgU2Vzc2lvblN0ZXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnNlc3Npb25TdGVwcyA9IF9pbnN0YW5jZS5zZXNzaW9uU3RlcHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSW5mbyA9IG5ldyBTZXNzaW9uSW5mbygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvbkluZm8sXG4gICAgICAgICAgICBTZXNzaW9uSW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFNlc3Npb24sIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25TdGVwcyAmJiBfaW5zdGFuY2Uuc2Vzc2lvblN0ZXBzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnNlc3Npb25TdGVwcyBhcyBhbnksXG4gICAgICAgIFNlc3Npb25TdGVwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25JbmZvKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JbmZvIGFzIGFueSxcbiAgICAgICAgU2Vzc2lvbkluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uU3RlcHM/OiBTZXNzaW9uU3RlcFtdO1xuICBwcml2YXRlIF9zZXNzaW9uSW5mbz86IFNlc3Npb25JbmZvO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2Vzc2lvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXNzaW9uLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25JZCA9IF92YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uU3RlcHMgPSAoX3ZhbHVlLnNlc3Npb25TdGVwcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU2Vzc2lvblN0ZXAobSlcbiAgICApO1xuICAgIHRoaXMuc2Vzc2lvbkluZm8gPSBfdmFsdWUuc2Vzc2lvbkluZm9cbiAgICAgID8gbmV3IFNlc3Npb25JbmZvKF92YWx1ZS5zZXNzaW9uSW5mbylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFNlc3Npb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uU3RlcHMoKTogU2Vzc2lvblN0ZXBbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25TdGVwcztcbiAgfVxuICBzZXQgc2Vzc2lvblN0ZXBzKHZhbHVlOiBTZXNzaW9uU3RlcFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblN0ZXBzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25JbmZvKCk6IFNlc3Npb25JbmZvIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbkluZm87XG4gIH1cbiAgc2V0IHNlc3Npb25JbmZvKHZhbHVlOiBTZXNzaW9uSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JbmZvID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXNzaW9uLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25TdGVwczogKHRoaXMuc2Vzc2lvblN0ZXBzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgc2Vzc2lvbkluZm86IHRoaXMuc2Vzc2lvbkluZm8gPyB0aGlzLnNlc3Npb25JbmZvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTZXNzaW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25TdGVwczogKHRoaXMuc2Vzc2lvblN0ZXBzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgc2Vzc2lvbkluZm86IHRoaXMuc2Vzc2lvbkluZm9cbiAgICAgICAgPyB0aGlzLnNlc3Npb25JbmZvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2Vzc2lvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIHNlc3Npb25TdGVwcz86IFNlc3Npb25TdGVwLkFzT2JqZWN0W107XG4gICAgc2Vzc2lvbkluZm8/OiBTZXNzaW9uSW5mby5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZXNzaW9uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblN0ZXBzPzogU2Vzc2lvblN0ZXAuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgc2Vzc2lvbkluZm8/OiBTZXNzaW9uSW5mby5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbiAgZXhwb3J0IGVudW0gVmlldyB7XG4gICAgVklFV19VTlNQRUNJRklFRCA9IDAsXG4gICAgVklFV19GVUxMID0gMSxcbiAgICBWSUVXX1NQQVJTRSA9IDJcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU2Vzc2lvblN0ZXBcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGVwIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXNzaW9uU3RlcCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25TdGVwKCk7XG4gICAgU2Vzc2lvblN0ZXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXNzaW9uU3RlcCkge1xuICAgIF9pbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXF1ZXN0ID0gX2luc3RhbmNlLmRldGVjdEludGVudFJlcXVlc3QgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXNwb25zZSA9XG4gICAgICBfaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVzcG9uc2UgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5jb250ZXh0cyA9IF9pbnN0YW5jZS5jb250ZXh0cyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25TdGVwLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXF1ZXN0ID0gbmV3IERldGVjdEludGVudFJlcXVlc3QoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRldGVjdEludGVudFJlcXVlc3QsXG4gICAgICAgICAgICBEZXRlY3RJbnRlbnRSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVzcG9uc2UgPSBuZXcgRGV0ZWN0SW50ZW50UmVzcG9uc2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmRldGVjdEludGVudFJlc3BvbnNlLFxuICAgICAgICAgICAgRGV0ZWN0SW50ZW50UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgb25kZXdvTmx1MDA2LkNvbnRleHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNi5Db250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5jb250ZXh0cyA9IF9pbnN0YW5jZS5jb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvblN0ZXAucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTZXNzaW9uU3RlcCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXF1ZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmRldGVjdEludGVudFJlcXVlc3QgYXMgYW55LFxuICAgICAgICBEZXRlY3RJbnRlbnRSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRldGVjdEludGVudFJlc3BvbnNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmRldGVjdEludGVudFJlc3BvbnNlIGFzIGFueSxcbiAgICAgICAgRGV0ZWN0SW50ZW50UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29udGV4dHMgJiYgX2luc3RhbmNlLmNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmNvbnRleHRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA2LkNvbnRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGV0ZWN0SW50ZW50UmVxdWVzdD86IERldGVjdEludGVudFJlcXVlc3Q7XG4gIHByaXZhdGUgX2RldGVjdEludGVudFJlc3BvbnNlPzogRGV0ZWN0SW50ZW50UmVzcG9uc2U7XG4gIHByaXZhdGUgX2NvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHRbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNlc3Npb25TdGVwIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlc3Npb25TdGVwLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRldGVjdEludGVudFJlcXVlc3QgPSBfdmFsdWUuZGV0ZWN0SW50ZW50UmVxdWVzdFxuICAgICAgPyBuZXcgRGV0ZWN0SW50ZW50UmVxdWVzdChfdmFsdWUuZGV0ZWN0SW50ZW50UmVxdWVzdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZGV0ZWN0SW50ZW50UmVzcG9uc2UgPSBfdmFsdWUuZGV0ZWN0SW50ZW50UmVzcG9uc2VcbiAgICAgID8gbmV3IERldGVjdEludGVudFJlc3BvbnNlKF92YWx1ZS5kZXRlY3RJbnRlbnRSZXNwb25zZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGV4dHMgPSAoX3ZhbHVlLmNvbnRleHRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDYuQ29udGV4dChtKVxuICAgICk7XG4gICAgU2Vzc2lvblN0ZXAucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkZXRlY3RJbnRlbnRSZXF1ZXN0KCk6IERldGVjdEludGVudFJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXRlY3RJbnRlbnRSZXF1ZXN0O1xuICB9XG4gIHNldCBkZXRlY3RJbnRlbnRSZXF1ZXN0KHZhbHVlOiBEZXRlY3RJbnRlbnRSZXF1ZXN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGV0ZWN0SW50ZW50UmVxdWVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXRlY3RJbnRlbnRSZXNwb25zZSgpOiBEZXRlY3RJbnRlbnRSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGVjdEludGVudFJlc3BvbnNlO1xuICB9XG4gIHNldCBkZXRlY3RJbnRlbnRSZXNwb25zZSh2YWx1ZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXRlY3RJbnRlbnRSZXNwb25zZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjb250ZXh0cygpOiBvbmRld29ObHUwMDYuQ29udGV4dFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dHM7XG4gIH1cbiAgc2V0IGNvbnRleHRzKHZhbHVlOiBvbmRld29ObHUwMDYuQ29udGV4dFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29udGV4dHMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXNzaW9uU3RlcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXNzaW9uU3RlcC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldGVjdEludGVudFJlcXVlc3Q6IHRoaXMuZGV0ZWN0SW50ZW50UmVxdWVzdFxuICAgICAgICA/IHRoaXMuZGV0ZWN0SW50ZW50UmVxdWVzdC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZGV0ZWN0SW50ZW50UmVzcG9uc2U6IHRoaXMuZGV0ZWN0SW50ZW50UmVzcG9uc2VcbiAgICAgICAgPyB0aGlzLmRldGVjdEludGVudFJlc3BvbnNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBjb250ZXh0czogKHRoaXMuY29udGV4dHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBTZXNzaW9uU3RlcC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldGVjdEludGVudFJlcXVlc3Q6IHRoaXMuZGV0ZWN0SW50ZW50UmVxdWVzdFxuICAgICAgICA/IHRoaXMuZGV0ZWN0SW50ZW50UmVxdWVzdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBkZXRlY3RJbnRlbnRSZXNwb25zZTogdGhpcy5kZXRlY3RJbnRlbnRSZXNwb25zZVxuICAgICAgICA/IHRoaXMuZGV0ZWN0SW50ZW50UmVzcG9uc2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgY29udGV4dHM6ICh0aGlzLmNvbnRleHRzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2Vzc2lvblN0ZXAge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25TdGVwXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBkZXRlY3RJbnRlbnRSZXF1ZXN0PzogRGV0ZWN0SW50ZW50UmVxdWVzdC5Bc09iamVjdDtcbiAgICBkZXRlY3RJbnRlbnRSZXNwb25zZT86IERldGVjdEludGVudFJlc3BvbnNlLkFzT2JqZWN0O1xuICAgIGNvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHQuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZXNzaW9uU3RlcFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZGV0ZWN0SW50ZW50UmVxdWVzdD86IERldGVjdEludGVudFJlcXVlc3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGRldGVjdEludGVudFJlc3BvbnNlPzogRGV0ZWN0SW50ZW50UmVzcG9uc2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGNvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCgpO1xuICAgIFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblN0ZXAgPSBfaW5zdGFuY2Uuc2Vzc2lvblN0ZXAgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uVmlldyA9IF9pbnN0YW5jZS5zZXNzaW9uVmlldyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25TdGVwID0gbmV3IFNlc3Npb25TdGVwKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uU3RlcCxcbiAgICAgICAgICAgIFNlc3Npb25TdGVwLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZXNzaW9uU3RlcCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uU3RlcCBhcyBhbnksXG4gICAgICAgIFNlc3Npb25TdGVwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25WaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblN0ZXA/OiBTZXNzaW9uU3RlcDtcbiAgcHJpdmF0ZSBfc2Vzc2lvblZpZXc/OiBTZXNzaW9uLlZpZXc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFja1Nlc3Npb25TdGVwUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBfdmFsdWUuc2Vzc2lvbklkO1xuICAgIHRoaXMuc2Vzc2lvblN0ZXAgPSBfdmFsdWUuc2Vzc2lvblN0ZXBcbiAgICAgID8gbmV3IFNlc3Npb25TdGVwKF92YWx1ZS5zZXNzaW9uU3RlcClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vzc2lvblZpZXcgPSBfdmFsdWUuc2Vzc2lvblZpZXc7XG4gICAgVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uU3RlcCgpOiBTZXNzaW9uU3RlcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25TdGVwO1xuICB9XG4gIHNldCBzZXNzaW9uU3RlcCh2YWx1ZTogU2Vzc2lvblN0ZXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uU3RlcCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uVmlldygpOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uVmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblZpZXcodmFsdWU6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25WaWV3ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgc2Vzc2lvblN0ZXA6IHRoaXMuc2Vzc2lvblN0ZXAgPyB0aGlzLnNlc3Npb25TdGVwLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZXNzaW9uVmlldzogdGhpcy5zZXNzaW9uVmlld1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25TdGVwOiB0aGlzLnNlc3Npb25TdGVwXG4gICAgICAgID8gdGhpcy5zZXNzaW9uU3RlcC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzZXNzaW9uVmlldzpcbiAgICAgICAgU2Vzc2lvbi5WaWV3W1xuICAgICAgICAgIHRoaXMuc2Vzc2lvblZpZXcgPT09IG51bGwgfHwgdGhpcy5zZXNzaW9uVmlldyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5zZXNzaW9uVmlld1xuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb25JZD86IHN0cmluZztcbiAgICBzZXNzaW9uU3RlcD86IFNlc3Npb25TdGVwLkFzT2JqZWN0O1xuICAgIHNlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblN0ZXA/OiBTZXNzaW9uU3RlcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2Vzc2lvblZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lkxpc3RTZXNzaW9uc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkxpc3RTZXNzaW9uc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0U2Vzc2lvbnNSZXF1ZXN0KCk7XG4gICAgTGlzdFNlc3Npb25zUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTZXNzaW9uc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgICBfaW5zdGFuY2UucGFnZVRva2VuID0gX2luc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlciA9IF9pbnN0YW5jZS5zZXNzaW9uRmlsdGVyIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTZXNzaW9uc1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25WaWV3ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnBhZ2VUb2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25GaWx0ZXIgPSBuZXcgU2Vzc2lvbkZpbHRlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlcixcbiAgICAgICAgICAgIFNlc3Npb25GaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0U2Vzc2lvbnNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZXNzaW9uVmlldykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLnNlc3Npb25WaWV3KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uRmlsdGVyIGFzIGFueSxcbiAgICAgICAgU2Vzc2lvbkZpbHRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25GaWx0ZXI/OiBTZXNzaW9uRmlsdGVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFNlc3Npb25zUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2Vzc2lvbnNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IF92YWx1ZS5zZXNzaW9uVmlldztcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IF92YWx1ZS5wYWdlVG9rZW47XG4gICAgdGhpcy5zZXNzaW9uRmlsdGVyID0gX3ZhbHVlLnNlc3Npb25GaWx0ZXJcbiAgICAgID8gbmV3IFNlc3Npb25GaWx0ZXIoX3ZhbHVlLnNlc3Npb25GaWx0ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBMaXN0U2Vzc2lvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblZpZXcoKTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25WaWV3KHZhbHVlOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uVmlldyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uRmlsdGVyKCk6IFNlc3Npb25GaWx0ZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uRmlsdGVyO1xuICB9XG4gIHNldCBzZXNzaW9uRmlsdGVyKHZhbHVlOiBTZXNzaW9uRmlsdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkZpbHRlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFNlc3Npb25zUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBzZXNzaW9uVmlldzogdGhpcy5zZXNzaW9uVmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBzZXNzaW9uRmlsdGVyOiB0aGlzLnNlc3Npb25GaWx0ZXJcbiAgICAgICAgPyB0aGlzLnNlc3Npb25GaWx0ZXIudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTZXNzaW9uc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgc2Vzc2lvblZpZXc6XG4gICAgICAgIFNlc3Npb24uVmlld1tcbiAgICAgICAgICB0aGlzLnNlc3Npb25WaWV3ID09PSBudWxsIHx8IHRoaXMuc2Vzc2lvblZpZXcgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICAgICAgXSxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBzZXNzaW9uRmlsdGVyOiB0aGlzLnNlc3Npb25GaWx0ZXJcbiAgICAgICAgPyB0aGlzLnNlc3Npb25GaWx0ZXIudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0U2Vzc2lvbnNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U2Vzc2lvbnNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblZpZXc/OiBTZXNzaW9uLlZpZXc7XG4gICAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAgIHNlc3Npb25GaWx0ZXI/OiBTZXNzaW9uRmlsdGVyLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBzZXNzaW9uVmlldz86IHN0cmluZztcbiAgICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gICAgc2Vzc2lvbkZpbHRlcj86IFNlc3Npb25GaWx0ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TZXNzaW9uRmlsdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uRmlsdGVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXNzaW9uRmlsdGVyJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Vzc2lvbkZpbHRlcigpO1xuICAgIFNlc3Npb25GaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXNzaW9uRmlsdGVyKSB7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgfHwgW107XG4gICAgX2luc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcyA9IF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWluID0gX2luc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWluIHx8IDA7XG4gICAgX2luc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWF4ID0gX2luc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWF4IHx8IDA7XG4gICAgX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbiA9XG4gICAgICBfaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluIHx8IDA7XG4gICAgX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCA9XG4gICAgICBfaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4IHx8IDA7XG4gICAgX2luc3RhbmNlLmVhcmxpZXN0ID0gX2luc3RhbmNlLmVhcmxpZXN0IHx8IDA7XG4gICAgX2luc3RhbmNlLmxhdGVzdCA9IF9pbnN0YW5jZS5sYXRlc3QgfHwgMDtcbiAgICBfaW5zdGFuY2UubWluTnVtYmVyVHVybnMgPSBfaW5zdGFuY2UubWluTnVtYmVyVHVybnMgfHwgMDtcbiAgICBfaW5zdGFuY2UubWF4TnVtYmVyVHVybnMgPSBfaW5zdGFuY2UubWF4TnVtYmVyVHVybnMgfHwgMDtcbiAgICBfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXTtcbiAgICBfaW5zdGFuY2UudXNlcklkcyA9IF9pbnN0YW5jZS51c2VySWRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2Vzc2lvbkZpbHRlcixcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgb25kZXdvTmx1MDEzLkludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgb25kZXdvTmx1MDE0LkVudGl0eVR5cGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxNC5FbnRpdHlUeXBlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbiA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXggPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbiA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4ID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5lYXJsaWVzdCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UubGF0ZXN0ID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBfaW5zdGFuY2UubWluTnVtYmVyVHVybnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhOdW1iZXJUdXJucyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sYWJlbHMgPSBfaW5zdGFuY2UubGFiZWxzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIChfaW5zdGFuY2UudXNlcklkcyA9IF9pbnN0YW5jZS51c2VySWRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvbkZpbHRlci5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25GaWx0ZXIsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgJiYgX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgJiYgX2luc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMTQuRW50aXR5VHlwZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbikge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg1LCBfaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbikge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDYsIF9pbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDcsIF9pbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXgpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVhcmxpZXN0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoOCwgX2luc3RhbmNlLmVhcmxpZXN0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYXRlc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg5LCBfaW5zdGFuY2UubGF0ZXN0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5OdW1iZXJUdXJucykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDEwLCBfaW5zdGFuY2UubWluTnVtYmVyVHVybnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heE51bWJlclR1cm5zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMTEsIF9pbnN0YW5jZS5tYXhOdW1iZXJUdXJucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFiZWxzICYmIF9pbnN0YW5jZS5sYWJlbHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMTIsIF9pbnN0YW5jZS5sYWJlbHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJJZHMgJiYgX2luc3RhbmNlLnVzZXJJZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMTMsIF9pbnN0YW5jZS51c2VySWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZUNvZGVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX21hdGNoZWRJbnRlbnRzPzogb25kZXdvTmx1MDEzLkludGVudFtdO1xuICBwcml2YXRlIF9tYXRjaGVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMTQuRW50aXR5VHlwZVtdO1xuICBwcml2YXRlIF9taW5JbnRlbnRzQ29uZmlkZW5jZU1pbj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluSW50ZW50c0NvbmZpZGVuY2VNYXg/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4PzogbnVtYmVyO1xuICBwcml2YXRlIF9lYXJsaWVzdD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGF0ZXN0PzogbnVtYmVyO1xuICBwcml2YXRlIF9taW5OdW1iZXJUdXJucz86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4TnVtYmVyVHVybnM/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xhYmVscz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF91c2VySWRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXNzaW9uRmlsdGVyIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlc3Npb25GaWx0ZXIuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlcyA9IChfdmFsdWUubGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1hdGNoZWRJbnRlbnRzID0gKF92YWx1ZS5tYXRjaGVkSW50ZW50cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDEzLkludGVudChtKVxuICAgICk7XG4gICAgdGhpcy5tYXRjaGVkRW50aXR5VHlwZXMgPSAoX3ZhbHVlLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDE0LkVudGl0eVR5cGUobSlcbiAgICApO1xuICAgIHRoaXMubWluSW50ZW50c0NvbmZpZGVuY2VNaW4gPSBfdmFsdWUubWluSW50ZW50c0NvbmZpZGVuY2VNaW47XG4gICAgdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZU1heCA9IF92YWx1ZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1heDtcbiAgICB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbiA9IF92YWx1ZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW47XG4gICAgdGhpcy5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXggPSBfdmFsdWUubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4O1xuICAgIHRoaXMuZWFybGllc3QgPSBfdmFsdWUuZWFybGllc3Q7XG4gICAgdGhpcy5sYXRlc3QgPSBfdmFsdWUubGF0ZXN0O1xuICAgIHRoaXMubWluTnVtYmVyVHVybnMgPSBfdmFsdWUubWluTnVtYmVyVHVybnM7XG4gICAgdGhpcy5tYXhOdW1iZXJUdXJucyA9IF92YWx1ZS5tYXhOdW1iZXJUdXJucztcbiAgICB0aGlzLmxhYmVscyA9IChfdmFsdWUubGFiZWxzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMudXNlcklkcyA9IChfdmFsdWUudXNlcklkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBTZXNzaW9uRmlsdGVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXRjaGVkSW50ZW50cygpOiBvbmRld29ObHUwMTMuSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVkSW50ZW50cztcbiAgfVxuICBzZXQgbWF0Y2hlZEludGVudHModmFsdWU6IG9uZGV3b05sdTAxMy5JbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hdGNoZWRJbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hdGNoZWRFbnRpdHlUeXBlcygpOiBvbmRld29ObHUwMTQuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlZEVudGl0eVR5cGVzO1xuICB9XG4gIHNldCBtYXRjaGVkRW50aXR5VHlwZXModmFsdWU6IG9uZGV3b05sdTAxNC5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXRjaGVkRW50aXR5VHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluSW50ZW50c0NvbmZpZGVuY2VNaW4oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluSW50ZW50c0NvbmZpZGVuY2VNaW47XG4gIH1cbiAgc2V0IG1pbkludGVudHNDb25maWRlbmNlTWluKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5JbnRlbnRzQ29uZmlkZW5jZU1pbiA9IHZhbHVlO1xuICB9XG4gIGdldCBtaW5JbnRlbnRzQ29uZmlkZW5jZU1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5JbnRlbnRzQ29uZmlkZW5jZU1heDtcbiAgfVxuICBzZXQgbWluSW50ZW50c0NvbmZpZGVuY2VNYXgodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21pbkludGVudHNDb25maWRlbmNlTWF4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW47XG4gIH1cbiAgc2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXg7XG4gIH1cbiAgc2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVhcmxpZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VhcmxpZXN0O1xuICB9XG4gIHNldCBlYXJsaWVzdCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWFybGllc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGF0ZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGVzdDtcbiAgfVxuICBzZXQgbGF0ZXN0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXRlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluTnVtYmVyVHVybnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluTnVtYmVyVHVybnM7XG4gIH1cbiAgc2V0IG1pbk51bWJlclR1cm5zKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5OdW1iZXJUdXJucyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhOdW1iZXJUdXJucygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXhOdW1iZXJUdXJucztcbiAgfVxuICBzZXQgbWF4TnVtYmVyVHVybnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21heE51bWJlclR1cm5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhYmVscygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuICBzZXQgbGFiZWxzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkcztcbiAgfVxuICBzZXQgdXNlcklkcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VySWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvbkZpbHRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBTZXNzaW9uRmlsdGVyLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VDb2RlczogKHRoaXMubGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG1hdGNoZWRJbnRlbnRzOiAodGhpcy5tYXRjaGVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG1hdGNoZWRFbnRpdHlUeXBlczogKHRoaXMubWF0Y2hlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBtaW5JbnRlbnRzQ29uZmlkZW5jZU1pbjogdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbixcbiAgICAgIG1pbkludGVudHNDb25maWRlbmNlTWF4OiB0aGlzLm1pbkludGVudHNDb25maWRlbmNlTWF4LFxuICAgICAgbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluOiB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbixcbiAgICAgIG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heDogdGhpcy5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXgsXG4gICAgICBlYXJsaWVzdDogdGhpcy5lYXJsaWVzdCxcbiAgICAgIGxhdGVzdDogdGhpcy5sYXRlc3QsXG4gICAgICBtaW5OdW1iZXJUdXJuczogdGhpcy5taW5OdW1iZXJUdXJucyxcbiAgICAgIG1heE51bWJlclR1cm5zOiB0aGlzLm1heE51bWJlclR1cm5zLFxuICAgICAgbGFiZWxzOiAodGhpcy5sYWJlbHMgfHwgW10pLnNsaWNlKCksXG4gICAgICB1c2VySWRzOiAodGhpcy51c2VySWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2Vzc2lvbkZpbHRlci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXRjaGVkSW50ZW50czogKHRoaXMubWF0Y2hlZEludGVudHMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBtYXRjaGVkRW50aXR5VHlwZXM6ICh0aGlzLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIG1pbkludGVudHNDb25maWRlbmNlTWluOiB0aGlzLm1pbkludGVudHNDb25maWRlbmNlTWluLFxuICAgICAgbWluSW50ZW50c0NvbmZpZGVuY2VNYXg6IHRoaXMubWluSW50ZW50c0NvbmZpZGVuY2VNYXgsXG4gICAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW46IHRoaXMubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluLFxuICAgICAgbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4OiB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCxcbiAgICAgIGVhcmxpZXN0OiB0aGlzLmVhcmxpZXN0LFxuICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdCxcbiAgICAgIG1pbk51bWJlclR1cm5zOiB0aGlzLm1pbk51bWJlclR1cm5zLFxuICAgICAgbWF4TnVtYmVyVHVybnM6IHRoaXMubWF4TnVtYmVyVHVybnMsXG4gICAgICBsYWJlbHM6ICh0aGlzLmxhYmVscyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHVzZXJJZHM6ICh0aGlzLnVzZXJJZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNlc3Npb25GaWx0ZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25GaWx0ZXJcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGxhbmd1YWdlQ29kZXM/OiBzdHJpbmdbXTtcbiAgICBtYXRjaGVkSW50ZW50cz86IG9uZGV3b05sdTAxMy5JbnRlbnQuQXNPYmplY3RbXTtcbiAgICBtYXRjaGVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMTQuRW50aXR5VHlwZS5Bc09iamVjdFtdO1xuICAgIG1pbkludGVudHNDb25maWRlbmNlTWluPzogbnVtYmVyO1xuICAgIG1pbkludGVudHNDb25maWRlbmNlTWF4PzogbnVtYmVyO1xuICAgIG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbj86IG51bWJlcjtcbiAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXg/OiBudW1iZXI7XG4gICAgZWFybGllc3Q/OiBudW1iZXI7XG4gICAgbGF0ZXN0PzogbnVtYmVyO1xuICAgIG1pbk51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIG1heE51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHVzZXJJZHM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZXNzaW9uRmlsdGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBsYW5ndWFnZUNvZGVzPzogc3RyaW5nW107XG4gICAgbWF0Y2hlZEludGVudHM/OiBvbmRld29ObHUwMTMuSW50ZW50LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIG1hdGNoZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAxNC5FbnRpdHlUeXBlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIG1pbkludGVudHNDb25maWRlbmNlTWluPzogbnVtYmVyO1xuICAgIG1pbkludGVudHNDb25maWRlbmNlTWF4PzogbnVtYmVyO1xuICAgIG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbj86IG51bWJlcjtcbiAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXg/OiBudW1iZXI7XG4gICAgZWFybGllc3Q/OiBudW1iZXI7XG4gICAgbGF0ZXN0PzogbnVtYmVyO1xuICAgIG1pbk51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIG1heE51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHVzZXJJZHM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU2Vzc2lvbkluZm9cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25JbmZvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TZXNzaW9uSW5mbyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25JbmZvKCk7XG4gICAgU2Vzc2lvbkluZm8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTZXNzaW9uSW5mbykge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzID0gX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgPSBfaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSA9IF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UgPVxuICAgICAgX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5lYXJsaWVzdCA9IF9pbnN0YW5jZS5lYXJsaWVzdCB8fCAwO1xuICAgIF9pbnN0YW5jZS5sYXRlc3QgPSBfaW5zdGFuY2UubGF0ZXN0IHx8IDA7XG4gICAgX2luc3RhbmNlLm51bWJlclR1cm5zID0gX2luc3RhbmNlLm51bWJlclR1cm5zIHx8IDA7XG4gICAgX2luc3RhbmNlLmxhYmVscyA9IF9pbnN0YW5jZS5sYWJlbHMgfHwgW107XG4gICAgX2luc3RhbmNlLnVzZXJJZHMgPSBfaW5zdGFuY2UudXNlcklkcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25JbmZvLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBvbmRld29ObHUwMTMuSW50ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBvbmRld29ObHUwMTMuSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5tYXRjaGVkSW50ZW50cyA9IF9pbnN0YW5jZS5tYXRjaGVkSW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMTQuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgb25kZXdvTmx1MDE0LkVudGl0eVR5cGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmVhcmxpZXN0ID0gX3JlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYXRlc3QgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLm51bWJlclR1cm5zID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIChfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAoX2luc3RhbmNlLnVzZXJJZHMgPSBfaW5zdGFuY2UudXNlcklkcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNlc3Npb25JbmZvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogU2Vzc2lvbkluZm8sXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWF0Y2hlZEludGVudHMgJiYgX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLm1hdGNoZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgJiYgX2luc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMTQuRW50aXR5VHlwZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNSwgX2luc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZWFybGllc3QpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg2LCBfaW5zdGFuY2UuZWFybGllc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhdGVzdCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDcsIF9pbnN0YW5jZS5sYXRlc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bWJlclR1cm5zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoOCwgX2luc3RhbmNlLm51bWJlclR1cm5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYWJlbHMgJiYgX2luc3RhbmNlLmxhYmVscy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg5LCBfaW5zdGFuY2UubGFiZWxzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWRzICYmIF9pbnN0YW5jZS51c2VySWRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEwLCBfaW5zdGFuY2UudXNlcklkcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2Rlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9tYXRjaGVkSW50ZW50cz86IG9uZGV3b05sdTAxMy5JbnRlbnRbXTtcbiAgcHJpdmF0ZSBfbWF0Y2hlZEVudGl0eVR5cGVzPzogb25kZXdvTmx1MDE0LkVudGl0eVR5cGVbXTtcbiAgcHJpdmF0ZSBfbWluSW50ZW50c0NvbmZpZGVuY2U/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkVudGl0eVR5cGVzQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWFybGllc3Q/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xhdGVzdD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbnVtYmVyVHVybnM/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xhYmVscz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF91c2VySWRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZXNzaW9uSW5mbyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXNzaW9uSW5mby5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZUNvZGVzID0gKF92YWx1ZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubWF0Y2hlZEludGVudHMgPSAoX3ZhbHVlLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMTMuSW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLm1hdGNoZWRFbnRpdHlUeXBlcyA9IChfdmFsdWUubWF0Y2hlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMTQuRW50aXR5VHlwZShtKVxuICAgICk7XG4gICAgdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZSA9IF92YWx1ZS5taW5JbnRlbnRzQ29uZmlkZW5jZTtcbiAgICB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSA9IF92YWx1ZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2U7XG4gICAgdGhpcy5lYXJsaWVzdCA9IF92YWx1ZS5lYXJsaWVzdDtcbiAgICB0aGlzLmxhdGVzdCA9IF92YWx1ZS5sYXRlc3Q7XG4gICAgdGhpcy5udW1iZXJUdXJucyA9IF92YWx1ZS5udW1iZXJUdXJucztcbiAgICB0aGlzLmxhYmVscyA9IChfdmFsdWUubGFiZWxzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMudXNlcklkcyA9IChfdmFsdWUudXNlcklkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBTZXNzaW9uSW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGVzO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF0Y2hlZEludGVudHMoKTogb25kZXdvTmx1MDEzLkludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlZEludGVudHM7XG4gIH1cbiAgc2V0IG1hdGNoZWRJbnRlbnRzKHZhbHVlOiBvbmRld29ObHUwMTMuSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXRjaGVkSW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXRjaGVkRW50aXR5VHlwZXMoKTogb25kZXdvTmx1MDE0LkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZWRFbnRpdHlUeXBlcztcbiAgfVxuICBzZXQgbWF0Y2hlZEVudGl0eVR5cGVzKHZhbHVlOiBvbmRld29ObHUwMTQuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF0Y2hlZEVudGl0eVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkludGVudHNDb25maWRlbmNlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkludGVudHNDb25maWRlbmNlO1xuICB9XG4gIHNldCBtaW5JbnRlbnRzQ29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluSW50ZW50c0NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluRW50aXR5VHlwZXNDb25maWRlbmNlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkVudGl0eVR5cGVzQ29uZmlkZW5jZTtcbiAgfVxuICBzZXQgbWluRW50aXR5VHlwZXNDb25maWRlbmNlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZWFybGllc3QoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWFybGllc3Q7XG4gIH1cbiAgc2V0IGVhcmxpZXN0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lYXJsaWVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYXRlc3QoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGF0ZXN0O1xuICB9XG4gIHNldCBsYXRlc3QodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhdGVzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJUdXJucygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJUdXJucztcbiAgfVxuICBzZXQgbnVtYmVyVHVybnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX251bWJlclR1cm5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhYmVscygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuICBzZXQgbGFiZWxzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkcztcbiAgfVxuICBzZXQgdXNlcklkcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VySWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvbkluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2Vzc2lvbkluZm8uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGVzOiAodGhpcy5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF0Y2hlZEludGVudHM6ICh0aGlzLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbWF0Y2hlZEVudGl0eVR5cGVzOiAodGhpcy5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIG1pbkludGVudHNDb25maWRlbmNlOiB0aGlzLm1pbkludGVudHNDb25maWRlbmNlLFxuICAgICAgbWluRW50aXR5VHlwZXNDb25maWRlbmNlOiB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSxcbiAgICAgIGVhcmxpZXN0OiB0aGlzLmVhcmxpZXN0LFxuICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdCxcbiAgICAgIG51bWJlclR1cm5zOiB0aGlzLm51bWJlclR1cm5zLFxuICAgICAgbGFiZWxzOiAodGhpcy5sYWJlbHMgfHwgW10pLnNsaWNlKCksXG4gICAgICB1c2VySWRzOiAodGhpcy51c2VySWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU2Vzc2lvbkluZm8uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGVzOiAodGhpcy5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF0Y2hlZEludGVudHM6ICh0aGlzLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgbWF0Y2hlZEVudGl0eVR5cGVzOiAodGhpcy5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBtaW5JbnRlbnRzQ29uZmlkZW5jZTogdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZSxcbiAgICAgIG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZTogdGhpcy5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UsXG4gICAgICBlYXJsaWVzdDogdGhpcy5lYXJsaWVzdCxcbiAgICAgIGxhdGVzdDogdGhpcy5sYXRlc3QsXG4gICAgICBudW1iZXJUdXJuczogdGhpcy5udW1iZXJUdXJucyxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgdXNlcklkczogKHRoaXMudXNlcklkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2Vzc2lvbkluZm8ge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25JbmZvXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZUNvZGVzPzogc3RyaW5nW107XG4gICAgbWF0Y2hlZEludGVudHM/OiBvbmRld29ObHUwMTMuSW50ZW50LkFzT2JqZWN0W107XG4gICAgbWF0Y2hlZEVudGl0eVR5cGVzPzogb25kZXdvTmx1MDE0LkVudGl0eVR5cGUuQXNPYmplY3RbXTtcbiAgICBtaW5JbnRlbnRzQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2U/OiBudW1iZXI7XG4gICAgZWFybGllc3Q/OiBudW1iZXI7XG4gICAgbGF0ZXN0PzogbnVtYmVyO1xuICAgIG51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHVzZXJJZHM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZXNzaW9uSW5mb1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VDb2Rlcz86IHN0cmluZ1tdO1xuICAgIG1hdGNoZWRJbnRlbnRzPzogb25kZXdvTmx1MDEzLkludGVudC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBtYXRjaGVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMTQuRW50aXR5VHlwZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBtaW5JbnRlbnRzQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2U/OiBudW1iZXI7XG4gICAgZWFybGllc3Q/OiBudW1iZXI7XG4gICAgbGF0ZXN0PzogbnVtYmVyO1xuICAgIG51bWJlclR1cm5zPzogbnVtYmVyO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHVzZXJJZHM/OiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdFNlc3Npb25zUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0U2Vzc2lvbnNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXNzaW9uc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFNlc3Npb25zUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0U2Vzc2lvbnNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5zZXNzaW9ucyA9IF9pbnN0YW5jZS5zZXNzaW9ucyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFNlc3Npb25zUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTZXNzaW9uKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTZXNzaW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5zZXNzaW9ucyA9IF9pbnN0YW5jZS5zZXNzaW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFNlc3Npb25zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbnMgJiYgX2luc3RhbmNlLnNlc3Npb25zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnNlc3Npb25zIGFzIGFueSxcbiAgICAgICAgU2Vzc2lvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9ucz86IFNlc3Npb25bXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RTZXNzaW9uc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXNzaW9uc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25zID0gKF92YWx1ZS5zZXNzaW9ucyB8fCBbXSkubWFwKG0gPT4gbmV3IFNlc3Npb24obSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IF92YWx1ZS5uZXh0UGFnZVRva2VuO1xuICAgIExpc3RTZXNzaW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbnMoKTogU2Vzc2lvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbnM7XG4gIH1cbiAgc2V0IHNlc3Npb25zKHZhbHVlOiBTZXNzaW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0U2Vzc2lvbnNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0U2Vzc2lvbnNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25zOiAodGhpcy5zZXNzaW9ucyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTZXNzaW9uc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbnM6ICh0aGlzLnNlc3Npb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFNlc3Npb25zUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzZXNzaW9ucz86IFNlc3Npb24uQXNPYmplY3RbXTtcbiAgICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9ucz86IFNlc3Npb24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2V0U2Vzc2lvblJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEdldFNlc3Npb25SZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5HZXRTZXNzaW9uUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldFNlc3Npb25SZXF1ZXN0KCk7XG4gICAgR2V0U2Vzc2lvblJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRTZXNzaW9uUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfaW5zdGFuY2Uuc2Vzc2lvbklkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uVmlldyA9IF9pbnN0YW5jZS5zZXNzaW9uVmlldyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0U2Vzc2lvblJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25WaWV3ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0U2Vzc2lvblJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRTZXNzaW9uUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvblZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS5zZXNzaW9uVmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uVmlldz86IFNlc3Npb24uVmlldztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldFNlc3Npb25SZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldFNlc3Npb25SZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25JZCA9IF92YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IF92YWx1ZS5zZXNzaW9uVmlldztcbiAgICBHZXRTZXNzaW9uUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25WaWV3KCk6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25WaWV3O1xuICB9XG4gIHNldCBzZXNzaW9uVmlldyh2YWx1ZTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblZpZXcgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRTZXNzaW9uUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRTZXNzaW9uUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBzZXNzaW9uVmlldzogdGhpcy5zZXNzaW9uVmlld1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldFNlc3Npb25SZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25WaWV3OlxuICAgICAgICBTZXNzaW9uLlZpZXdbXG4gICAgICAgICAgdGhpcy5zZXNzaW9uVmlldyA9PT0gbnVsbCB8fCB0aGlzLnNlc3Npb25WaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnNlc3Npb25WaWV3XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldFNlc3Npb25SZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTZXNzaW9uUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIHNlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldFNlc3Npb25SZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNyZWF0ZVNlc3Npb25SZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVTZXNzaW9uUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ3JlYXRlU2Vzc2lvblJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVTZXNzaW9uUmVxdWVzdCgpO1xuICAgIENyZWF0ZVNlc3Npb25SZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ3JlYXRlU2Vzc2lvblJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblV1aWQgPSBfaW5zdGFuY2Uuc2Vzc2lvblV1aWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVTZXNzaW9uUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvblV1aWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZVNlc3Npb25SZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlU2Vzc2lvblJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25VdWlkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5zZXNzaW9uVXVpZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uVXVpZD86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENyZWF0ZVNlc3Npb25SZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENyZWF0ZVNlc3Npb25SZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5zZXNzaW9uVXVpZCA9IF92YWx1ZS5zZXNzaW9uVXVpZDtcbiAgICBDcmVhdGVTZXNzaW9uUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25VdWlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25VdWlkO1xuICB9XG4gIHNldCBzZXNzaW9uVXVpZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblV1aWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVTZXNzaW9uUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDcmVhdGVTZXNzaW9uUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBzZXNzaW9uVXVpZDogdGhpcy5zZXNzaW9uVXVpZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZVNlc3Npb25SZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHNlc3Npb25VdWlkOiB0aGlzLnNlc3Npb25VdWlkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVTZXNzaW9uUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlU2Vzc2lvblJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBzZXNzaW9uVXVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDcmVhdGVTZXNzaW9uUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIHNlc3Npb25VdWlkPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5EZWxldGVTZXNzaW9uUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgRGVsZXRlU2Vzc2lvblJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkRlbGV0ZVNlc3Npb25SZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlU2Vzc2lvblJlcXVlc3QoKTtcbiAgICBEZWxldGVTZXNzaW9uUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IERlbGV0ZVNlc3Npb25SZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9pbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVTZXNzaW9uUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWxldGVTZXNzaW9uUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZVNlc3Npb25SZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEZWxldGVTZXNzaW9uUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVTZXNzaW9uUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSBfdmFsdWUuc2Vzc2lvbklkO1xuICAgIERlbGV0ZVNlc3Npb25SZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVTZXNzaW9uUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEZWxldGVTZXNzaW9uUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZWxldGVTZXNzaW9uUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVNlc3Npb25SZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVTZXNzaW9uUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZVNlc3Npb25SZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCgpO1xuICAgIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucGFyZW50UmV2aWV3SWQgPSBfaW5zdGFuY2UucGFyZW50UmV2aWV3SWQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblJldmlldyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3IHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50UmV2aWV3SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3ID0gbmV3IFNlc3Npb25SZXZpZXcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXcsXG4gICAgICAgICAgICBTZXNzaW9uUmV2aWV3LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnRSZXZpZXdJZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGFyZW50UmV2aWV3SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlldyBhcyBhbnksXG4gICAgICAgIFNlc3Npb25SZXZpZXcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDQsIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnRSZXZpZXdJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlldz86IFNlc3Npb25SZXZpZXc7XG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdWaWV3PzogU2Vzc2lvblJldmlldy5WaWV3O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gX3ZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLnBhcmVudFJldmlld0lkID0gX3ZhbHVlLnBhcmVudFJldmlld0lkO1xuICAgIHRoaXMuc2Vzc2lvblJldmlldyA9IF92YWx1ZS5zZXNzaW9uUmV2aWV3XG4gICAgICA/IG5ldyBTZXNzaW9uUmV2aWV3KF92YWx1ZS5zZXNzaW9uUmV2aWV3KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9IF92YWx1ZS5zZXNzaW9uUmV2aWV3VmlldztcbiAgICBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudFJldmlld0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudFJldmlld0lkO1xuICB9XG4gIHNldCBwYXJlbnRSZXZpZXdJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50UmV2aWV3SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlldygpOiBTZXNzaW9uUmV2aWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlldyh2YWx1ZTogU2Vzc2lvblJldmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHBhcmVudFJldmlld0lkOiB0aGlzLnBhcmVudFJldmlld0lkLFxuICAgICAgc2Vzc2lvblJldmlldzogdGhpcy5zZXNzaW9uUmV2aWV3XG4gICAgICAgID8gdGhpcy5zZXNzaW9uUmV2aWV3LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBzZXNzaW9uUmV2aWV3VmlldzogdGhpcy5zZXNzaW9uUmV2aWV3Vmlld1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHBhcmVudFJldmlld0lkOiB0aGlzLnBhcmVudFJldmlld0lkLFxuICAgICAgc2Vzc2lvblJldmlldzogdGhpcy5zZXNzaW9uUmV2aWV3XG4gICAgICAgID8gdGhpcy5zZXNzaW9uUmV2aWV3LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNlc3Npb25SZXZpZXdWaWV3OlxuICAgICAgICBTZXNzaW9uUmV2aWV3LlZpZXdbXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMuc2Vzc2lvblJldmlld1ZpZXcgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc2Vzc2lvblJldmlld1ZpZXdcbiAgICAgICAgXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgcGFyZW50UmV2aWV3SWQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblJldmlldz86IFNlc3Npb25SZXZpZXcuQXNPYmplY3Q7XG4gICAgc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlc3Npb25JZD86IHN0cmluZztcbiAgICBwYXJlbnRSZXZpZXdJZD86IHN0cmluZztcbiAgICBzZXNzaW9uUmV2aWV3PzogU2Vzc2lvblJldmlldy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2Vzc2lvblJldmlld1ZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlNlc3Npb25SZXZpZXdcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25SZXZpZXcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlNlc3Npb25SZXZpZXcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXNzaW9uUmV2aWV3KCk7XG4gICAgU2Vzc2lvblJldmlldy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNlc3Npb25SZXZpZXcpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkID0gX2luc3RhbmNlLnNlc3Npb25SZXZpZXdJZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1N0ZXBzID0gX2luc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25SZXZpZXcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdJZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTZXNzaW9uUmV2aWV3U3RlcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgU2Vzc2lvblJldmlld1N0ZXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1N0ZXBzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvblJldmlldy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25SZXZpZXcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyAmJiBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1N0ZXBzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyBhcyBhbnksXG4gICAgICAgIFNlc3Npb25SZXZpZXdTdGVwLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1N0ZXBzPzogU2Vzc2lvblJldmlld1N0ZXBbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFNlc3Npb25SZXZpZXcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2Vzc2lvblJldmlldy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3SWQgPSBfdmFsdWUuc2Vzc2lvblJldmlld0lkO1xuICAgIHRoaXMuc2Vzc2lvblJldmlld1N0ZXBzID0gKF92YWx1ZS5zZXNzaW9uUmV2aWV3U3RlcHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFNlc3Npb25SZXZpZXdTdGVwKG0pXG4gICAgKTtcbiAgICBTZXNzaW9uUmV2aWV3LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25SZXZpZXdJZDtcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1N0ZXBzKCk6IFNlc3Npb25SZXZpZXdTdGVwW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3U3RlcHM7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdTdGVwcyh2YWx1ZTogU2Vzc2lvblJldmlld1N0ZXBbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdTdGVwcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlc3Npb25SZXZpZXcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2Vzc2lvblJldmlldy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25SZXZpZXdJZDogdGhpcy5zZXNzaW9uUmV2aWV3SWQsXG4gICAgICBzZXNzaW9uUmV2aWV3U3RlcHM6ICh0aGlzLnNlc3Npb25SZXZpZXdTdGVwcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNlc3Npb25SZXZpZXcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uUmV2aWV3SWQ6IHRoaXMuc2Vzc2lvblJldmlld0lkLFxuICAgICAgc2Vzc2lvblJldmlld1N0ZXBzOiAodGhpcy5zZXNzaW9uUmV2aWV3U3RlcHMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNlc3Npb25SZXZpZXcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25SZXZpZXdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgICBzZXNzaW9uUmV2aWV3U3RlcHM/OiBTZXNzaW9uUmV2aWV3U3RlcC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25SZXZpZXdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgICBzZXNzaW9uUmV2aWV3U3RlcHM/OiBTZXNzaW9uUmV2aWV3U3RlcC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxuICBleHBvcnQgZW51bSBWaWV3IHtcbiAgICBWSUVXX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBWSUVXX0ZVTEwgPSAxLFxuICAgIFZJRVdfU1BBUlNFID0gMlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TZXNzaW9uUmV2aWV3U3RlcFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblJldmlld1N0ZXAgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlNlc3Npb25SZXZpZXdTdGVwJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Vzc2lvblJldmlld1N0ZXAoKTtcbiAgICBTZXNzaW9uUmV2aWV3U3RlcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFNlc3Npb25SZXZpZXdTdGVwKSB7XG4gICAgX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzID0gX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGV0ZWN0ZWRJbnRlbnRzID0gX2luc3RhbmNlLmRldGVjdGVkSW50ZW50cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UuY29udGV4dHMgPSBfaW5zdGFuY2UuY29udGV4dHMgfHwgW107XG4gICAgX2luc3RhbmNlLmNvbnRleHRzT3V0ID0gX2luc3RhbmNlLmNvbnRleHRzT3V0IHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogU2Vzc2lvblJldmlld1N0ZXAsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzID0gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQuVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzLFxuICAgICAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5UcmFpbmluZ1BocmFzZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBEZXRlY3RlZEludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgRGV0ZWN0ZWRJbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmRldGVjdGVkSW50ZW50cyA9IF9pbnN0YW5jZS5kZXRlY3RlZEludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjQgPSBuZXcgb25kZXdvTmx1MDA2LkNvbnRleHQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNi5Db250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5jb250ZXh0cyA9IF9pbnN0YW5jZS5jb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNSA9IG5ldyBvbmRld29ObHUwMDYuQ29udGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI1LFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkNvbnRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNvbnRleHRzT3V0ID0gX2luc3RhbmNlLmNvbnRleHRzT3V0IHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXNzaW9uUmV2aWV3U3RlcC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFNlc3Npb25SZXZpZXdTdGVwLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5UcmFpbmluZ1BocmFzZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGV0ZWN0ZWRJbnRlbnRzICYmIF9pbnN0YW5jZS5kZXRlY3RlZEludGVudHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2UuZGV0ZWN0ZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgRGV0ZWN0ZWRJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29udGV4dHMgJiYgX2luc3RhbmNlLmNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmNvbnRleHRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA2LkNvbnRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29udGV4dHNPdXQgJiYgX2luc3RhbmNlLmNvbnRleHRzT3V0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgX2luc3RhbmNlLmNvbnRleHRzT3V0IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA2LkNvbnRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYW5ub3RhdGVkVXNlcnNheXM/OiBvbmRld29ObHUwMTMuSW50ZW50LlRyYWluaW5nUGhyYXNlO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RldGVjdGVkSW50ZW50cz86IERldGVjdGVkSW50ZW50W107XG4gIHByaXZhdGUgX2NvbnRleHRzPzogb25kZXdvTmx1MDA2LkNvbnRleHRbXTtcbiAgcHJpdmF0ZSBfY29udGV4dHNPdXQ/OiBvbmRld29ObHUwMDYuQ29udGV4dFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2Vzc2lvblJldmlld1N0ZXAgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2Vzc2lvblJldmlld1N0ZXAuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYW5ub3RhdGVkVXNlcnNheXMgPSBfdmFsdWUuYW5ub3RhdGVkVXNlcnNheXNcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQuVHJhaW5pbmdQaHJhc2UoX3ZhbHVlLmFubm90YXRlZFVzZXJzYXlzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuZGV0ZWN0ZWRJbnRlbnRzID0gKF92YWx1ZS5kZXRlY3RlZEludGVudHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IERldGVjdGVkSW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLmNvbnRleHRzID0gKF92YWx1ZS5jb250ZXh0cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA2LkNvbnRleHQobSlcbiAgICApO1xuICAgIHRoaXMuY29udGV4dHNPdXQgPSAoX3ZhbHVlLmNvbnRleHRzT3V0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDYuQ29udGV4dChtKVxuICAgICk7XG4gICAgU2Vzc2lvblJldmlld1N0ZXAucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhbm5vdGF0ZWRVc2Vyc2F5cygpOiBvbmRld29ObHUwMTMuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYW5ub3RhdGVkVXNlcnNheXM7XG4gIH1cbiAgc2V0IGFubm90YXRlZFVzZXJzYXlzKHZhbHVlOiBvbmRld29ObHUwMTMuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYW5ub3RhdGVkVXNlcnNheXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGV0ZWN0ZWRJbnRlbnRzKCk6IERldGVjdGVkSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXRlY3RlZEludGVudHM7XG4gIH1cbiAgc2V0IGRldGVjdGVkSW50ZW50cyh2YWx1ZTogRGV0ZWN0ZWRJbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RldGVjdGVkSW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBjb250ZXh0cygpOiBvbmRld29ObHUwMDYuQ29udGV4dFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dHM7XG4gIH1cbiAgc2V0IGNvbnRleHRzKHZhbHVlOiBvbmRld29ObHUwMDYuQ29udGV4dFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29udGV4dHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29udGV4dHNPdXQoKTogb25kZXdvTmx1MDA2LkNvbnRleHRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRzT3V0O1xuICB9XG4gIHNldCBjb250ZXh0c091dCh2YWx1ZTogb25kZXdvTmx1MDA2LkNvbnRleHRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHRzT3V0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvblJldmlld1N0ZXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogU2Vzc2lvblJldmlld1N0ZXAuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhbm5vdGF0ZWRVc2Vyc2F5czogdGhpcy5hbm5vdGF0ZWRVc2Vyc2F5c1xuICAgICAgICA/IHRoaXMuYW5ub3RhdGVkVXNlcnNheXMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBkZXRlY3RlZEludGVudHM6ICh0aGlzLmRldGVjdGVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGNvbnRleHRzOiAodGhpcy5jb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGNvbnRleHRzT3V0OiAodGhpcy5jb250ZXh0c091dCB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFNlc3Npb25SZXZpZXdTdGVwLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5ub3RhdGVkVXNlcnNheXM6IHRoaXMuYW5ub3RhdGVkVXNlcnNheXNcbiAgICAgICAgPyB0aGlzLmFubm90YXRlZFVzZXJzYXlzLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBkZXRlY3RlZEludGVudHM6ICh0aGlzLmRldGVjdGVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGNvbnRleHRzOiAodGhpcy5jb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSksXG4gICAgICBjb250ZXh0c091dDogKHRoaXMuY29udGV4dHNPdXQgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXNzaW9uUmV2aWV3U3RlcCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2Vzc2lvblJldmlld1N0ZXBcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGFubm90YXRlZFVzZXJzYXlzPzogb25kZXdvTmx1MDEzLkludGVudC5UcmFpbmluZ1BocmFzZS5Bc09iamVjdDtcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgZGV0ZWN0ZWRJbnRlbnRzPzogRGV0ZWN0ZWRJbnRlbnQuQXNPYmplY3RbXTtcbiAgICBjb250ZXh0cz86IG9uZGV3b05sdTAwNi5Db250ZXh0LkFzT2JqZWN0W107XG4gICAgY29udGV4dHNPdXQ/OiBvbmRld29ObHUwMDYuQ29udGV4dC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFNlc3Npb25SZXZpZXdTdGVwXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhbm5vdGF0ZWRVc2Vyc2F5cz86IG9uZGV3b05sdTAxMy5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBkZXRlY3RlZEludGVudHM/OiBEZXRlY3RlZEludGVudC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBjb250ZXh0cz86IG9uZGV3b05sdTAwNi5Db250ZXh0LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGNvbnRleHRzT3V0Pzogb25kZXdvTmx1MDA2LkNvbnRleHQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkRldGVjdGVkSW50ZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBEZXRlY3RlZEludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRGV0ZWN0ZWRJbnRlbnQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZXRlY3RlZEludGVudCgpO1xuICAgIERldGVjdGVkSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRGV0ZWN0ZWRJbnRlbnQpIHtcbiAgICBfaW5zdGFuY2UuaW50ZW50ID0gX2luc3RhbmNlLmludGVudCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnNjb3JlID0gX2luc3RhbmNlLnNjb3JlIHx8IDA7XG4gICAgX2luc3RhbmNlLmFsZ29yaXRobSA9IF9pbnN0YW5jZS5hbGdvcml0aG0gfHwgJyc7XG4gICAgX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgPSBfaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucmVxdWlyZWRQYXJhbU1pc3NpbmcgPSBfaW5zdGFuY2UucmVxdWlyZWRQYXJhbU1pc3NpbmcgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBEZXRlY3RlZEludGVudCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50ID0gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmludGVudCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxMy5JbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zY29yZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuYWxnb3JpdGhtID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQuTWVzc2FnZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnJlcXVpcmVkUGFyYW1NaXNzaW5nID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGV0ZWN0ZWRJbnRlbnQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBEZXRlY3RlZEludGVudCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuaW50ZW50IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDIsIF9pbnN0YW5jZS5zY29yZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWxnb3JpdGhtKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5hbGdvcml0aG0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgJiYgX2luc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAxMy5JbnRlbnQuTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXF1aXJlZFBhcmFtTWlzc2luZykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNSwgX2luc3RhbmNlLnJlcXVpcmVkUGFyYW1NaXNzaW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnQ/OiBvbmRld29ObHUwMTMuSW50ZW50O1xuICBwcml2YXRlIF9zY29yZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWxnb3JpdGhtPzogc3RyaW5nO1xuICBwcml2YXRlIF9mdWxmaWxsbWVudE1lc3NhZ2VzPzogb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlW107XG4gIHByaXZhdGUgX3JlcXVpcmVkUGFyYW1NaXNzaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIERldGVjdGVkSW50ZW50IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERldGVjdGVkSW50ZW50LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmludGVudCA9IF92YWx1ZS5pbnRlbnRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMy5JbnRlbnQoX3ZhbHVlLmludGVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NvcmUgPSBfdmFsdWUuc2NvcmU7XG4gICAgdGhpcy5hbGdvcml0aG0gPSBfdmFsdWUuYWxnb3JpdGhtO1xuICAgIHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyA9IChfdmFsdWUuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlKG0pXG4gICAgKTtcbiAgICB0aGlzLnJlcXVpcmVkUGFyYW1NaXNzaW5nID0gX3ZhbHVlLnJlcXVpcmVkUGFyYW1NaXNzaW5nO1xuICAgIERldGVjdGVkSW50ZW50LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaW50ZW50KCk6IG9uZGV3b05sdTAxMy5JbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnQ7XG4gIH1cbiAgc2V0IGludGVudCh2YWx1ZTogb25kZXdvTmx1MDEzLkludGVudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBzY29yZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zY29yZTtcbiAgfVxuICBzZXQgc2NvcmUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Njb3JlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFsZ29yaXRobSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbGdvcml0aG07XG4gIH1cbiAgc2V0IGFsZ29yaXRobSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZ1bGZpbGxtZW50TWVzc2FnZXMoKTogb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudE1lc3NhZ2VzO1xuICB9XG4gIHNldCBmdWxmaWxsbWVudE1lc3NhZ2VzKHZhbHVlOiBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50TWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVxdWlyZWRQYXJhbU1pc3NpbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkUGFyYW1NaXNzaW5nO1xuICB9XG4gIHNldCByZXF1aXJlZFBhcmFtTWlzc2luZyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlcXVpcmVkUGFyYW1NaXNzaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGV0ZWN0ZWRJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRGV0ZWN0ZWRJbnRlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgIGZ1bGZpbGxtZW50TWVzc2FnZXM6ICh0aGlzLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIHJlcXVpcmVkUGFyYW1NaXNzaW5nOiB0aGlzLnJlcXVpcmVkUGFyYW1NaXNzaW5nXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRGV0ZWN0ZWRJbnRlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICBhbGdvcml0aG06IHRoaXMuYWxnb3JpdGhtLFxuICAgICAgZnVsZmlsbG1lbnRNZXNzYWdlczogKHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIHJlcXVpcmVkUGFyYW1NaXNzaW5nOiB0aGlzLnJlcXVpcmVkUGFyYW1NaXNzaW5nXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RlZEludGVudCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRGV0ZWN0ZWRJbnRlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGludGVudD86IG9uZGV3b05sdTAxMy5JbnRlbnQuQXNPYmplY3Q7XG4gICAgc2NvcmU/OiBudW1iZXI7XG4gICAgYWxnb3JpdGhtPzogc3RyaW5nO1xuICAgIGZ1bGZpbGxtZW50TWVzc2FnZXM/OiBvbmRld29ObHUwMTMuSW50ZW50Lk1lc3NhZ2UuQXNPYmplY3RbXTtcbiAgICByZXF1aXJlZFBhcmFtTWlzc2luZz86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRGV0ZWN0ZWRJbnRlbnRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudD86IG9uZGV3b05sdTAxMy5JbnRlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHNjb3JlPzogbnVtYmVyO1xuICAgIGFsZ29yaXRobT86IHN0cmluZztcbiAgICBmdWxmaWxsbWVudE1lc3NhZ2VzPzogb25kZXdvTmx1MDEzLkludGVudC5NZXNzYWdlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIHJlcXVpcmVkUGFyYW1NaXNzaW5nPzogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkxpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCgpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSgpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmxhYmVscyA9IF9pbnN0YW5jZS5sYWJlbHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhYmVscyAmJiBfaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5sYWJlbHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhYmVscz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhYmVscyA9IChfdmFsdWUubGFiZWxzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYWJlbHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHM7XG4gIH1cbiAgc2V0IGxhYmVscyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbHM6ICh0aGlzLmxhYmVscyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbHM6ICh0aGlzLmxhYmVscyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFiZWxzPzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFiZWxzPzogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdCgpO1xuICAgIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uVmlldyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhYmVscyAmJiBfaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5sYWJlbHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25WaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFiZWxzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3Nlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gX3ZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLmxhYmVscyA9IChfdmFsdWUubGFiZWxzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc2Vzc2lvblZpZXcgPSBfdmFsdWUuc2Vzc2lvblZpZXc7XG4gICAgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYWJlbHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHM7XG4gIH1cbiAgc2V0IGxhYmVscyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblZpZXcoKTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25WaWV3KHZhbHVlOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uVmlldyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBsYWJlbHM6ICh0aGlzLmxhYmVscyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNlc3Npb25WaWV3OlxuICAgICAgICBTZXNzaW9uLlZpZXdbXG4gICAgICAgICAgdGhpcy5zZXNzaW9uVmlldyA9PT0gbnVsbCB8fCB0aGlzLnNlc3Npb25WaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnNlc3Npb25WaWV3XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHNlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgbGFiZWxzPzogc3RyaW5nW107XG4gICAgc2Vzc2lvblZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdCgpO1xuICAgIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChfaW5zdGFuY2UubGFiZWxzID0gX2luc3RhbmNlLmxhYmVscyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uVmlldyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhYmVscyAmJiBfaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIF9pbnN0YW5jZS5sYWJlbHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25WaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzLCBfaW5zdGFuY2Uuc2Vzc2lvblZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFiZWxzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3Nlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gX3ZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLmxhYmVscyA9IChfdmFsdWUubGFiZWxzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuc2Vzc2lvblZpZXcgPSBfdmFsdWUuc2Vzc2lvblZpZXc7XG4gICAgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYWJlbHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHM7XG4gIH1cbiAgc2V0IGxhYmVscyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblZpZXcoKTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25WaWV3KHZhbHVlOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uVmlldyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBsYWJlbHM6ICh0aGlzLmxhYmVscyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHNlc3Npb25WaWV3OlxuICAgICAgICBTZXNzaW9uLlZpZXdbXG4gICAgICAgICAgdGhpcy5zZXNzaW9uVmlldyA9PT0gbnVsbCB8fCB0aGlzLnNlc3Npb25WaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnNlc3Npb25WaWV3XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIGxhYmVscz86IHN0cmluZ1tdO1xuICAgIHNlc3Npb25WaWV3PzogU2Vzc2lvbi5WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uSWQ/OiBzdHJpbmc7XG4gICAgbGFiZWxzPzogc3RyaW5nW107XG4gICAgc2Vzc2lvblZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lkxpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkxpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0KCk7XG4gICAgTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgfHwgMDtcbiAgICBfaW5zdGFuY2UucGFnZVRva2VuID0gX2luc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLnBhZ2VUb2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhZ2VUb2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdWaWV3PzogU2Vzc2lvblJldmlldy5WaWV3O1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gX3ZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLnNlc3Npb25SZXZpZXdWaWV3ID0gX3ZhbHVlLnNlc3Npb25SZXZpZXdWaWV3O1xuICAgIHRoaXMucGFnZVRva2VuID0gX3ZhbHVlLnBhZ2VUb2tlbjtcbiAgICBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBzZXNzaW9uUmV2aWV3VmlldzogdGhpcy5zZXNzaW9uUmV2aWV3VmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25SZXZpZXdWaWV3OlxuICAgICAgICBTZXNzaW9uUmV2aWV3LlZpZXdbXG4gICAgICAgICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9PT0gbnVsbCB8fFxuICAgICAgICAgIHRoaXMuc2Vzc2lvblJldmlld1ZpZXcgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMuc2Vzc2lvblJldmlld1ZpZXdcbiAgICAgICAgXSxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb25JZD86IHN0cmluZztcbiAgICBzZXNzaW9uUmV2aWV3Vmlldz86IFNlc3Npb25SZXZpZXcuVmlldztcbiAgICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIHNlc3Npb25SZXZpZXdWaWV3Pzogc3RyaW5nO1xuICAgIHBhZ2VUb2tlbj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlKCk7XG4gICAgTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyA9IF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTZXNzaW9uUmV2aWV3KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTZXNzaW9uUmV2aWV3LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyA9IF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvblJldmlld3MgJiYgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnNlc3Npb25SZXZpZXdzIGFzIGFueSxcbiAgICAgICAgU2Vzc2lvblJldmlldy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uUmV2aWV3cz86IFNlc3Npb25SZXZpZXdbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25SZXZpZXdzID0gKF92YWx1ZS5zZXNzaW9uUmV2aWV3cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU2Vzc2lvblJldmlldyhtKVxuICAgICk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gX3ZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uUmV2aWV3cygpOiBTZXNzaW9uUmV2aWV3W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3cztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld3ModmFsdWU6IFNlc3Npb25SZXZpZXdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvblJldmlld3M6ICh0aGlzLnNlc3Npb25SZXZpZXdzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uUmV2aWV3czogKHRoaXMuc2Vzc2lvblJldmlld3MgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvblJldmlld3M/OiBTZXNzaW9uUmV2aWV3LkFzT2JqZWN0W107XG4gICAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc2Vzc2lvblJldmlld3M/OiBTZXNzaW9uUmV2aWV3LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdldFNlc3Npb25SZXZpZXdSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0U2Vzc2lvblJldmlld1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCgpO1xuICAgIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkID0gX2luc3RhbmNlLnNlc3Npb25SZXZpZXdJZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3VmlldyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0U2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3SWQgPSBfdmFsdWUuc2Vzc2lvblJldmlld0lkO1xuICAgIHRoaXMuc2Vzc2lvblJldmlld1ZpZXcgPSBfdmFsdWUuc2Vzc2lvblJldmlld1ZpZXc7XG4gICAgR2V0U2Vzc2lvblJldmlld1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uUmV2aWV3SWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld0lkO1xuICB9XG4gIHNldCBzZXNzaW9uUmV2aWV3SWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uUmV2aWV3VmlldygpOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld1ZpZXcodmFsdWU6IFNlc3Npb25SZXZpZXcuVmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdWaWV3ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0U2Vzc2lvblJldmlld1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0U2Vzc2lvblJldmlld1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uUmV2aWV3SWQ6IHRoaXMuc2Vzc2lvblJldmlld0lkLFxuICAgICAgc2Vzc2lvblJldmlld1ZpZXc6IHRoaXMuc2Vzc2lvblJldmlld1ZpZXdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25SZXZpZXdJZDogdGhpcy5zZXNzaW9uUmV2aWV3SWQsXG4gICAgICBzZXNzaW9uUmV2aWV3VmlldzpcbiAgICAgICAgU2Vzc2lvblJldmlldy5WaWV3W1xuICAgICAgICAgIHRoaXMuc2Vzc2lvblJldmlld1ZpZXcgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLnNlc3Npb25SZXZpZXdWaWV3ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLnNlc3Npb25SZXZpZXdWaWV3XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2Vzc2lvblJldmlld0lkPzogc3RyaW5nO1xuICAgIHNlc3Npb25SZXZpZXdWaWV3PzogU2Vzc2lvblJldmlldy5WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzZXNzaW9uUmV2aWV3SWQ/OiBzdHJpbmc7XG4gICAgc2Vzc2lvblJldmlld1ZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCgpO1xuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvbklkID0gX2luc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZXNzaW9uUmV2aWV3VmlldyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgyLCBfaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gX3ZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLnNlc3Npb25SZXZpZXdWaWV3ID0gX3ZhbHVlLnNlc3Npb25SZXZpZXdWaWV3O1xuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25SZXZpZXdWaWV3OiB0aGlzLnNlc3Npb25SZXZpZXdWaWV3XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgc2Vzc2lvblJldmlld1ZpZXc6XG4gICAgICAgIFNlc3Npb25SZXZpZXcuVmlld1tcbiAgICAgICAgICB0aGlzLnNlc3Npb25SZXZpZXdWaWV3ID09PSBudWxsIHx8XG4gICAgICAgICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5zZXNzaW9uUmV2aWV3Vmlld1xuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb25JZD86IHN0cmluZztcbiAgICBzZXNzaW9uUmV2aWV3Vmlldz86IFNlc3Npb25SZXZpZXcuVmlldztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc2Vzc2lvbklkPzogc3RyaW5nO1xuICAgIHNlc3Npb25SZXZpZXdWaWV3Pzogc3RyaW5nO1xuICB9XG59XG4iXX0=