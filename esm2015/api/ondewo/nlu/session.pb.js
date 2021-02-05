import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/struct.pb';
import * as googleRpc003 from '../../google/rpc/status.pb';
import * as googleType004 from '../../google/type/latlng.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/entity-type.pb';
export var AudioEncoding;
(function (AudioEncoding) {
    AudioEncoding[AudioEncoding["audioEncodingUnspecified"] = 0] = "audioEncodingUnspecified";
    AudioEncoding[AudioEncoding["audioEncodingLinear16"] = 1] = "audioEncodingLinear16";
    AudioEncoding[AudioEncoding["audioEncodingFlac"] = 2] = "audioEncodingFlac";
    AudioEncoding[AudioEncoding["audioEncodingMulaw"] = 3] = "audioEncodingMulaw";
    AudioEncoding[AudioEncoding["audioEncodingAmr"] = 4] = "audioEncodingAmr";
    AudioEncoding[AudioEncoding["audioEncodingAmrWb"] = 5] = "audioEncodingAmrWb";
    AudioEncoding[AudioEncoding["audioEncodingOggOpus"] = 6] = "audioEncodingOggOpus";
    AudioEncoding[AudioEncoding["audioEncodingSpeexWithHeaderByte"] = 7] = "audioEncodingSpeexWithHeaderByte";
})(AudioEncoding || (AudioEncoding = {}));
export class DetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.queryParams = value.queryParams
            ? new QueryParameters(value.queryParams)
            : undefined;
        this.queryInput = value.queryInput
            ? new QueryInput(value.queryInput)
            : undefined;
        this.inputAudio = value.inputAudio;
        DetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectIntentRequest();
        DetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.queryParams = instance.queryParams || undefined;
        instance.queryInput = instance.queryInput || undefined;
        instance.inputAudio = instance.inputAudio || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                case 2:
                    instance.queryParams = new QueryParameters();
                    reader.readMessage(instance.queryParams, QueryParameters.fromBinaryReader);
                    break;
                case 3:
                    instance.queryInput = new QueryInput();
                    reader.readMessage(instance.queryInput, QueryInput.fromBinaryReader);
                    break;
                case 5:
                    instance.inputAudio = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
        if (instance.queryParams) {
            writer.writeMessage(2, instance.queryParams, QueryParameters.toBinaryWriter);
        }
        if (instance.queryInput) {
            writer.writeMessage(3, instance.queryInput, QueryInput.toBinaryWriter);
        }
        if (instance.inputAudio && instance.inputAudio.length) {
            writer.writeBytes(5, instance.inputAudio);
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
    toJSON() {
        return this.toObject();
    }
}
export class DetectIntentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentResponse value
     */
    constructor(value) {
        value = value || {};
        this.responseId = value.responseId;
        this.queryResult = value.queryResult
            ? new QueryResult(value.queryResult)
            : undefined;
        this.webhookStatus = value.webhookStatus
            ? new googleRpc003.Status(value.webhookStatus)
            : undefined;
        DetectIntentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectIntentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectIntentResponse();
        DetectIntentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responseId = instance.responseId || '';
        instance.queryResult = instance.queryResult || undefined;
        instance.webhookStatus = instance.webhookStatus || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.queryResult = new QueryResult();
                    reader.readMessage(instance.queryResult, QueryResult.fromBinaryReader);
                    break;
                case 3:
                    instance.webhookStatus = new googleRpc003.Status();
                    reader.readMessage(instance.webhookStatus, googleRpc003.Status.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectIntentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.queryResult) {
            writer.writeMessage(2, instance.queryResult, QueryResult.toBinaryWriter);
        }
        if (instance.webhookStatus) {
            writer.writeMessage(3, instance.webhookStatus, googleRpc003.Status.toBinaryWriter);
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
    toObject() {
        return {
            responseId: this.responseId,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            webhookStatus: this.webhookStatus
                ? this.webhookStatus.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class QueryParameters {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryParameters value
     */
    constructor(value) {
        value = value || {};
        this.timeZone = value.timeZone;
        this.geoLocation = value.geoLocation
            ? new googleType004.LatLng(value.geoLocation)
            : undefined;
        this.contexts = (value.contexts || []).map(m => new ondewoNlu005.Context(m));
        this.resetContexts = value.resetContexts;
        this.payload = value.payload
            ? new googleProtobuf002.Struct(value.payload)
            : undefined;
        QueryParameters.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryParameters.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryParameters();
        QueryParameters.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.timeZone = instance.timeZone || '';
        instance.geoLocation = instance.geoLocation || undefined;
        instance.contexts = instance.contexts || [];
        instance.resetContexts = instance.resetContexts || false;
        instance.payload = instance.payload || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.timeZone = reader.readString();
                    break;
                case 2:
                    instance.geoLocation = new googleType004.LatLng();
                    reader.readMessage(instance.geoLocation, googleType004.LatLng.fromBinaryReader);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu005.Context();
                    reader.readMessage(messageInitializer3, ondewoNlu005.Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.resetContexts = reader.readBool();
                    break;
                case 6:
                    instance.payload = new googleProtobuf002.Struct();
                    reader.readMessage(instance.payload, googleProtobuf002.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryParameters.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.timeZone) {
            writer.writeString(1, instance.timeZone);
        }
        if (instance.geoLocation) {
            writer.writeMessage(2, instance.geoLocation, googleType004.LatLng.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(3, instance.contexts, ondewoNlu005.Context.toBinaryWriter);
        }
        if (instance.resetContexts) {
            writer.writeBool(4, instance.resetContexts);
        }
        if (instance.payload) {
            writer.writeMessage(6, instance.payload, googleProtobuf002.Struct.toBinaryWriter);
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
    toObject() {
        return {
            timeZone: this.timeZone,
            geoLocation: this.geoLocation ? this.geoLocation.toObject() : undefined,
            contexts: (this.contexts || []).map(m => m.toObject()),
            resetContexts: this.resetContexts,
            payload: this.payload ? this.payload.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class QueryInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryInput value
     */
    constructor(value) {
        this._input = QueryInput.InputCase.none;
        value = value || {};
        this.audioConfig = value.audioConfig
            ? new InputAudioConfig(value.audioConfig)
            : undefined;
        this.text = value.text ? new TextInput(value.text) : undefined;
        this.event = value.event ? new EventInput(value.event) : undefined;
        QueryInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryInput();
        QueryInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.audioConfig = new InputAudioConfig();
                    reader.readMessage(instance.audioConfig, InputAudioConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.text = new TextInput();
                    reader.readMessage(instance.text, TextInput.fromBinaryReader);
                    break;
                case 3:
                    instance.event = new EventInput();
                    reader.readMessage(instance.event, EventInput.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.audioConfig) {
            writer.writeMessage(1, instance.audioConfig, InputAudioConfig.toBinaryWriter);
        }
        if (instance.text) {
            writer.writeMessage(2, instance.text, TextInput.toBinaryWriter);
        }
        if (instance.event) {
            writer.writeMessage(3, instance.event, EventInput.toBinaryWriter);
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
    toObject() {
        return {
            audioConfig: this.audioConfig ? this.audioConfig.toObject() : undefined,
            text: this.text ? this.text.toObject() : undefined,
            event: this.event ? this.event.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (QueryInput) {
    let InputCase;
    (function (InputCase) {
        InputCase[InputCase["none"] = 0] = "none";
        InputCase[InputCase["audioConfig"] = 1] = "audioConfig";
        InputCase[InputCase["text"] = 2] = "text";
        InputCase[InputCase["event"] = 3] = "event";
    })(InputCase = QueryInput.InputCase || (QueryInput.InputCase = {}));
})(QueryInput || (QueryInput = {}));
export class QueryResult {
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryResult value
     */
    constructor(value) {
        value = value || {};
        this.queryText = value.queryText;
        this.languageCode = value.languageCode;
        this.speechRecognitionConfidence = value.speechRecognitionConfidence;
        this.action = value.action;
        this.parameters = value.parameters
            ? new googleProtobuf002.Struct(value.parameters)
            : undefined;
        this.allRequiredParamsPresent = value.allRequiredParamsPresent;
        this.fulfillmentText = value.fulfillmentText;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new ondewoNlu006.Intent.Message(m));
        this.webhookSource = value.webhookSource;
        this.webhookPayload = value.webhookPayload
            ? new googleProtobuf002.Struct(value.webhookPayload)
            : undefined;
        this.outputContexts = (value.outputContexts || []).map(m => new ondewoNlu005.Context(m));
        this.intent = value.intent
            ? new ondewoNlu006.Intent(value.intent)
            : undefined;
        this.intentDetectionConfidence = value.intentDetectionConfidence;
        this.diagnosticInfo = value.diagnosticInfo
            ? new googleProtobuf002.Struct(value.diagnosticInfo)
            : undefined;
        QueryResult.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        QueryResult.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new QueryResult();
        QueryResult.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.queryText = instance.queryText || '';
        instance.languageCode = instance.languageCode || '';
        instance.speechRecognitionConfidence =
            instance.speechRecognitionConfidence || 0;
        instance.action = instance.action || '';
        instance.parameters = instance.parameters || undefined;
        instance.allRequiredParamsPresent =
            instance.allRequiredParamsPresent || false;
        instance.fulfillmentText = instance.fulfillmentText || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.webhookSource = instance.webhookSource || '';
        instance.webhookPayload = instance.webhookPayload || undefined;
        instance.outputContexts = instance.outputContexts || [];
        instance.intent = instance.intent || undefined;
        instance.intentDetectionConfidence =
            instance.intentDetectionConfidence || 0;
        instance.diagnosticInfo = instance.diagnosticInfo || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.queryText = reader.readString();
                    break;
                case 15:
                    instance.languageCode = reader.readString();
                    break;
                case 2:
                    instance.speechRecognitionConfidence = reader.readFloat();
                    break;
                case 3:
                    instance.action = reader.readString();
                    break;
                case 4:
                    instance.parameters = new googleProtobuf002.Struct();
                    reader.readMessage(instance.parameters, googleProtobuf002.Struct.fromBinaryReader);
                    break;
                case 5:
                    instance.allRequiredParamsPresent = reader.readBool();
                    break;
                case 6:
                    instance.fulfillmentText = reader.readString();
                    break;
                case 7:
                    const messageInitializer7 = new ondewoNlu006.Intent.Message();
                    reader.readMessage(messageInitializer7, ondewoNlu006.Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer7);
                    break;
                case 8:
                    instance.webhookSource = reader.readString();
                    break;
                case 9:
                    instance.webhookPayload = new googleProtobuf002.Struct();
                    reader.readMessage(instance.webhookPayload, googleProtobuf002.Struct.fromBinaryReader);
                    break;
                case 10:
                    const messageInitializer10 = new ondewoNlu005.Context();
                    reader.readMessage(messageInitializer10, ondewoNlu005.Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer10);
                    break;
                case 11:
                    instance.intent = new ondewoNlu006.Intent();
                    reader.readMessage(instance.intent, ondewoNlu006.Intent.fromBinaryReader);
                    break;
                case 12:
                    instance.intentDetectionConfidence = reader.readFloat();
                    break;
                case 14:
                    instance.diagnosticInfo = new googleProtobuf002.Struct();
                    reader.readMessage(instance.diagnosticInfo, googleProtobuf002.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        QueryResult.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.queryText) {
            writer.writeString(1, instance.queryText);
        }
        if (instance.languageCode) {
            writer.writeString(15, instance.languageCode);
        }
        if (instance.speechRecognitionConfidence) {
            writer.writeFloat(2, instance.speechRecognitionConfidence);
        }
        if (instance.action) {
            writer.writeString(3, instance.action);
        }
        if (instance.parameters) {
            writer.writeMessage(4, instance.parameters, googleProtobuf002.Struct.toBinaryWriter);
        }
        if (instance.allRequiredParamsPresent) {
            writer.writeBool(5, instance.allRequiredParamsPresent);
        }
        if (instance.fulfillmentText) {
            writer.writeString(6, instance.fulfillmentText);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(7, instance.fulfillmentMessages, ondewoNlu006.Intent.Message.toBinaryWriter);
        }
        if (instance.webhookSource) {
            writer.writeString(8, instance.webhookSource);
        }
        if (instance.webhookPayload) {
            writer.writeMessage(9, instance.webhookPayload, googleProtobuf002.Struct.toBinaryWriter);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(10, instance.outputContexts, ondewoNlu005.Context.toBinaryWriter);
        }
        if (instance.intent) {
            writer.writeMessage(11, instance.intent, ondewoNlu006.Intent.toBinaryWriter);
        }
        if (instance.intentDetectionConfidence) {
            writer.writeFloat(12, instance.intentDetectionConfidence);
        }
        if (instance.diagnosticInfo) {
            writer.writeMessage(14, instance.diagnosticInfo, googleProtobuf002.Struct.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
export class StreamingDetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.queryParams = value.queryParams
            ? new QueryParameters(value.queryParams)
            : undefined;
        this.queryInput = value.queryInput
            ? new QueryInput(value.queryInput)
            : undefined;
        this.singleUtterance = value.singleUtterance;
        this.inputAudio = value.inputAudio;
        StreamingDetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingDetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingDetectIntentRequest();
        StreamingDetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.queryParams = instance.queryParams || undefined;
        instance.queryInput = instance.queryInput || undefined;
        instance.singleUtterance = instance.singleUtterance || false;
        instance.inputAudio = instance.inputAudio || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                case 2:
                    instance.queryParams = new QueryParameters();
                    reader.readMessage(instance.queryParams, QueryParameters.fromBinaryReader);
                    break;
                case 3:
                    instance.queryInput = new QueryInput();
                    reader.readMessage(instance.queryInput, QueryInput.fromBinaryReader);
                    break;
                case 4:
                    instance.singleUtterance = reader.readBool();
                    break;
                case 6:
                    instance.inputAudio = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingDetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
        if (instance.queryParams) {
            writer.writeMessage(2, instance.queryParams, QueryParameters.toBinaryWriter);
        }
        if (instance.queryInput) {
            writer.writeMessage(3, instance.queryInput, QueryInput.toBinaryWriter);
        }
        if (instance.singleUtterance) {
            writer.writeBool(4, instance.singleUtterance);
        }
        if (instance.inputAudio && instance.inputAudio.length) {
            writer.writeBytes(6, instance.inputAudio);
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
    toJSON() {
        return this.toObject();
    }
}
export class StreamingDetectIntentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentResponse value
     */
    constructor(value) {
        value = value || {};
        this.responseId = value.responseId;
        this.recognitionResult = value.recognitionResult
            ? new StreamingRecognitionResult(value.recognitionResult)
            : undefined;
        this.queryResult = value.queryResult
            ? new QueryResult(value.queryResult)
            : undefined;
        this.webhookStatus = value.webhookStatus
            ? new googleRpc003.Status(value.webhookStatus)
            : undefined;
        StreamingDetectIntentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingDetectIntentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingDetectIntentResponse();
        StreamingDetectIntentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responseId = instance.responseId || '';
        instance.recognitionResult = instance.recognitionResult || undefined;
        instance.queryResult = instance.queryResult || undefined;
        instance.webhookStatus = instance.webhookStatus || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.recognitionResult = new StreamingRecognitionResult();
                    reader.readMessage(instance.recognitionResult, StreamingRecognitionResult.fromBinaryReader);
                    break;
                case 3:
                    instance.queryResult = new QueryResult();
                    reader.readMessage(instance.queryResult, QueryResult.fromBinaryReader);
                    break;
                case 4:
                    instance.webhookStatus = new googleRpc003.Status();
                    reader.readMessage(instance.webhookStatus, googleRpc003.Status.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingDetectIntentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.recognitionResult) {
            writer.writeMessage(2, instance.recognitionResult, StreamingRecognitionResult.toBinaryWriter);
        }
        if (instance.queryResult) {
            writer.writeMessage(3, instance.queryResult, QueryResult.toBinaryWriter);
        }
        if (instance.webhookStatus) {
            writer.writeMessage(4, instance.webhookStatus, googleRpc003.Status.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
export class StreamingRecognitionResult {
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingRecognitionResult value
     */
    constructor(value) {
        value = value || {};
        this.messageType = value.messageType;
        this.transcript = value.transcript;
        this.isFinal = value.isFinal;
        this.confidence = value.confidence;
        StreamingRecognitionResult.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StreamingRecognitionResult.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StreamingRecognitionResult();
        StreamingRecognitionResult.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.messageType = instance.messageType || 0;
        instance.transcript = instance.transcript || '';
        instance.isFinal = instance.isFinal || false;
        instance.confidence = instance.confidence || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.messageType = reader.readEnum();
                    break;
                case 2:
                    instance.transcript = reader.readString();
                    break;
                case 3:
                    instance.isFinal = reader.readBool();
                    break;
                case 4:
                    instance.confidence = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        StreamingRecognitionResult.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.messageType) {
            writer.writeEnum(1, instance.messageType);
        }
        if (instance.transcript) {
            writer.writeString(2, instance.transcript);
        }
        if (instance.isFinal) {
            writer.writeBool(3, instance.isFinal);
        }
        if (instance.confidence) {
            writer.writeFloat(4, instance.confidence);
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
    toObject() {
        return {
            messageType: this.messageType,
            transcript: this.transcript,
            isFinal: this.isFinal,
            confidence: this.confidence
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (StreamingRecognitionResult) {
    let MessageType;
    (function (MessageType) {
        MessageType[MessageType["messageTypeUnspecified"] = 0] = "messageTypeUnspecified";
        MessageType[MessageType["transcript"] = 1] = "transcript";
        MessageType[MessageType["endOfSingleUtterance"] = 2] = "endOfSingleUtterance";
    })(MessageType = StreamingRecognitionResult.MessageType || (StreamingRecognitionResult.MessageType = {}));
})(StreamingRecognitionResult || (StreamingRecognitionResult = {}));
export class InputAudioConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param InputAudioConfig value
     */
    constructor(value) {
        value = value || {};
        this.audioEncoding = value.audioEncoding;
        this.sampleRateHertz = value.sampleRateHertz;
        this.languageCode = value.languageCode;
        this.phraseHints = (value.phraseHints || []).slice();
        InputAudioConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        InputAudioConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new InputAudioConfig();
        InputAudioConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.audioEncoding = instance.audioEncoding || 0;
        instance.sampleRateHertz = instance.sampleRateHertz || 0;
        instance.languageCode = instance.languageCode || '';
        instance.phraseHints = instance.phraseHints || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.audioEncoding = reader.readEnum();
                    break;
                case 2:
                    instance.sampleRateHertz = reader.readInt32();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    (instance.phraseHints = instance.phraseHints || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        InputAudioConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.audioEncoding) {
            writer.writeEnum(1, instance.audioEncoding);
        }
        if (instance.sampleRateHertz) {
            writer.writeInt32(2, instance.sampleRateHertz);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.phraseHints && instance.phraseHints.length) {
            writer.writeRepeatedString(4, instance.phraseHints);
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
    toObject() {
        return {
            audioEncoding: this.audioEncoding,
            sampleRateHertz: this.sampleRateHertz,
            languageCode: this.languageCode,
            phraseHints: (this.phraseHints || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class TextInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param TextInput value
     */
    constructor(value) {
        value = value || {};
        this.text = value.text;
        this.languageCode = value.languageCode;
        TextInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TextInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TextInput();
        TextInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.text = instance.text || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.text = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        TextInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.text) {
            writer.writeString(1, instance.text);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
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
    toObject() {
        return {
            text: this.text,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EventInput {
    /**
     * Creates an object and applies default Protobuf values
     * @param EventInput value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.parameters = value.parameters
            ? new googleProtobuf002.Struct(value.parameters)
            : undefined;
        this.languageCode = value.languageCode;
        EventInput.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EventInput.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EventInput();
        EventInput.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.parameters = instance.parameters || undefined;
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.parameters = new googleProtobuf002.Struct();
                    reader.readMessage(instance.parameters, googleProtobuf002.Struct.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        EventInput.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.parameters) {
            writer.writeMessage(2, instance.parameters, googleProtobuf002.Struct.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
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
    toObject() {
        return {
            name: this.name,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class Session {
    /**
     * Creates an object and applies default Protobuf values
     * @param Session value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionSteps = (value.sessionSteps || []).map(m => new SessionStep(m));
        this.sessionInfo = value.sessionInfo
            ? new SessionInfo(value.sessionInfo)
            : undefined;
        Session.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Session.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Session();
        Session.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionSteps = instance.sessionSteps || [];
        instance.sessionInfo = instance.sessionInfo || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionStep();
                    reader.readMessage(messageInitializer2, SessionStep.fromBinaryReader);
                    (instance.sessionSteps = instance.sessionSteps || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.sessionInfo = new SessionInfo();
                    reader.readMessage(instance.sessionInfo, SessionInfo.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Session.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionSteps && instance.sessionSteps.length) {
            writer.writeRepeatedMessage(2, instance.sessionSteps, SessionStep.toBinaryWriter);
        }
        if (instance.sessionInfo) {
            writer.writeMessage(3, instance.sessionInfo, SessionInfo.toBinaryWriter);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionSteps: (this.sessionSteps || []).map(m => m.toObject()),
            sessionInfo: this.sessionInfo ? this.sessionInfo.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Session) {
    let View;
    (function (View) {
        View[View["viewUnspecified"] = 0] = "viewUnspecified";
        View[View["viewFull"] = 1] = "viewFull";
        View[View["viewSparse"] = 2] = "viewSparse";
    })(View = Session.View || (Session.View = {}));
})(Session || (Session = {}));
export class SessionStep {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionStep value
     */
    constructor(value) {
        value = value || {};
        this.detectIntentRequest = value.detectIntentRequest
            ? new DetectIntentRequest(value.detectIntentRequest)
            : undefined;
        this.detectIntentResponse = value.detectIntentResponse
            ? new DetectIntentResponse(value.detectIntentResponse)
            : undefined;
        this.contexts = (value.contexts || []).map(m => new ondewoNlu005.Context(m));
        SessionStep.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionStep.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionStep();
        SessionStep.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.detectIntentRequest = instance.detectIntentRequest || undefined;
        instance.detectIntentResponse = instance.detectIntentResponse || undefined;
        instance.contexts = instance.contexts || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.detectIntentRequest = new DetectIntentRequest();
                    reader.readMessage(instance.detectIntentRequest, DetectIntentRequest.fromBinaryReader);
                    break;
                case 2:
                    instance.detectIntentResponse = new DetectIntentResponse();
                    reader.readMessage(instance.detectIntentResponse, DetectIntentResponse.fromBinaryReader);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu005.Context();
                    reader.readMessage(messageInitializer3, ondewoNlu005.Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer3);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionStep.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.detectIntentRequest) {
            writer.writeMessage(1, instance.detectIntentRequest, DetectIntentRequest.toBinaryWriter);
        }
        if (instance.detectIntentResponse) {
            writer.writeMessage(2, instance.detectIntentResponse, DetectIntentResponse.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(3, instance.contexts, ondewoNlu005.Context.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
export class TrackSessionStepRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TrackSessionStepRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionStep = value.sessionStep
            ? new SessionStep(value.sessionStep)
            : undefined;
        this.sessionView = value.sessionView;
        TrackSessionStepRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TrackSessionStepRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TrackSessionStepRequest();
        TrackSessionStepRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionStep = instance.sessionStep || undefined;
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionStep = new SessionStep();
                    reader.readMessage(instance.sessionStep, SessionStep.fromBinaryReader);
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        TrackSessionStepRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionStep) {
            writer.writeMessage(2, instance.sessionStep, SessionStep.toBinaryWriter);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionStep: this.sessionStep ? this.sessionStep.toObject() : undefined,
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.sessionView = value.sessionView;
        this.pageToken = value.pageToken;
        this.sessionFilter = value.sessionFilter
            ? new SessionFilter(value.sessionFilter)
            : undefined;
        ListSessionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionsRequest();
        ListSessionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.sessionView = instance.sessionView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.sessionFilter = instance.sessionFilter || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.sessionView = reader.readEnum();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                case 5:
                    instance.sessionFilter = new SessionFilter();
                    reader.readMessage(instance.sessionFilter, SessionFilter.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.sessionView) {
            writer.writeEnum(2, instance.sessionView);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
        }
        if (instance.sessionFilter) {
            writer.writeMessage(5, instance.sessionFilter, SessionFilter.toBinaryWriter);
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
    toJSON() {
        return this.toObject();
    }
}
export class SessionFilter {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionFilter value
     */
    constructor(value) {
        value = value || {};
        this.languageCodes = (value.languageCodes || []).slice();
        this.matchedIntents = (value.matchedIntents || []).map(m => new ondewoNlu006.Intent(m));
        this.matchedEntityTypes = (value.matchedEntityTypes || []).map(m => new ondewoNlu007.EntityType(m));
        this.minIntentsConfidenceMin = value.minIntentsConfidenceMin;
        this.minIntentsConfidenceMax = value.minIntentsConfidenceMax;
        this.minEntityTypesConfidenceMin = value.minEntityTypesConfidenceMin;
        this.minEntityTypesConfidenceMax = value.minEntityTypesConfidenceMax;
        this.earliest = value.earliest;
        this.latest = value.latest;
        this.minNumberTurns = value.minNumberTurns;
        this.maxNumberTurns = value.maxNumberTurns;
        this.labels = (value.labels || []).slice();
        this.userIds = (value.userIds || []).slice();
        SessionFilter.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionFilter.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionFilter();
        SessionFilter.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCodes = instance.languageCodes || [];
        instance.matchedIntents = instance.matchedIntents || [];
        instance.matchedEntityTypes = instance.matchedEntityTypes || [];
        instance.minIntentsConfidenceMin = instance.minIntentsConfidenceMin || 0;
        instance.minIntentsConfidenceMax = instance.minIntentsConfidenceMax || 0;
        instance.minEntityTypesConfidenceMin =
            instance.minEntityTypesConfidenceMin || 0;
        instance.minEntityTypesConfidenceMax =
            instance.minEntityTypesConfidenceMax || 0;
        instance.earliest = instance.earliest || 0;
        instance.latest = instance.latest || 0;
        instance.minNumberTurns = instance.minNumberTurns || 0;
        instance.maxNumberTurns = instance.maxNumberTurns || 0;
        instance.labels = instance.labels || [];
        instance.userIds = instance.userIds || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu006.Intent();
                    reader.readMessage(messageInitializer2, ondewoNlu006.Intent.fromBinaryReader);
                    (instance.matchedIntents = instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu007.EntityType();
                    reader.readMessage(messageInitializer3, ondewoNlu007.EntityType.fromBinaryReader);
                    (instance.matchedEntityTypes =
                        instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.minIntentsConfidenceMin = reader.readFloat();
                    break;
                case 5:
                    instance.minIntentsConfidenceMax = reader.readFloat();
                    break;
                case 6:
                    instance.minEntityTypesConfidenceMin = reader.readFloat();
                    break;
                case 7:
                    instance.minEntityTypesConfidenceMax = reader.readFloat();
                    break;
                case 8:
                    instance.earliest = reader.readFloat();
                    break;
                case 9:
                    instance.latest = reader.readFloat();
                    break;
                case 10:
                    instance.minNumberTurns = reader.readInt32();
                    break;
                case 11:
                    instance.maxNumberTurns = reader.readInt32();
                    break;
                case 12:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 13:
                    (instance.userIds = instance.userIds || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionFilter.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(1, instance.languageCodes);
        }
        if (instance.matchedIntents && instance.matchedIntents.length) {
            writer.writeRepeatedMessage(2, instance.matchedIntents, ondewoNlu006.Intent.toBinaryWriter);
        }
        if (instance.matchedEntityTypes && instance.matchedEntityTypes.length) {
            writer.writeRepeatedMessage(3, instance.matchedEntityTypes, ondewoNlu007.EntityType.toBinaryWriter);
        }
        if (instance.minIntentsConfidenceMin) {
            writer.writeFloat(4, instance.minIntentsConfidenceMin);
        }
        if (instance.minIntentsConfidenceMax) {
            writer.writeFloat(5, instance.minIntentsConfidenceMax);
        }
        if (instance.minEntityTypesConfidenceMin) {
            writer.writeFloat(6, instance.minEntityTypesConfidenceMin);
        }
        if (instance.minEntityTypesConfidenceMax) {
            writer.writeFloat(7, instance.minEntityTypesConfidenceMax);
        }
        if (instance.earliest) {
            writer.writeFloat(8, instance.earliest);
        }
        if (instance.latest) {
            writer.writeFloat(9, instance.latest);
        }
        if (instance.minNumberTurns) {
            writer.writeInt32(10, instance.minNumberTurns);
        }
        if (instance.maxNumberTurns) {
            writer.writeInt32(11, instance.maxNumberTurns);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(12, instance.labels);
        }
        if (instance.userIds && instance.userIds.length) {
            writer.writeRepeatedString(13, instance.userIds);
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
    toJSON() {
        return this.toObject();
    }
}
export class SessionInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionInfo value
     */
    constructor(value) {
        value = value || {};
        this.languageCodes = (value.languageCodes || []).slice();
        this.matchedIntents = (value.matchedIntents || []).map(m => new ondewoNlu006.Intent(m));
        this.matchedEntityTypes = (value.matchedEntityTypes || []).map(m => new ondewoNlu007.EntityType(m));
        this.minIntentsConfidence = value.minIntentsConfidence;
        this.minEntityTypesConfidence = value.minEntityTypesConfidence;
        this.earliest = value.earliest;
        this.latest = value.latest;
        this.numberTurns = value.numberTurns;
        this.labels = (value.labels || []).slice();
        this.userIds = (value.userIds || []).slice();
        SessionInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionInfo();
        SessionInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCodes = instance.languageCodes || [];
        instance.matchedIntents = instance.matchedIntents || [];
        instance.matchedEntityTypes = instance.matchedEntityTypes || [];
        instance.minIntentsConfidence = instance.minIntentsConfidence || 0;
        instance.minEntityTypesConfidence = instance.minEntityTypesConfidence || 0;
        instance.earliest = instance.earliest || 0;
        instance.latest = instance.latest || 0;
        instance.numberTurns = instance.numberTurns || 0;
        instance.labels = instance.labels || [];
        instance.userIds = instance.userIds || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu006.Intent();
                    reader.readMessage(messageInitializer2, ondewoNlu006.Intent.fromBinaryReader);
                    (instance.matchedIntents = instance.matchedIntents || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new ondewoNlu007.EntityType();
                    reader.readMessage(messageInitializer3, ondewoNlu007.EntityType.fromBinaryReader);
                    (instance.matchedEntityTypes =
                        instance.matchedEntityTypes || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.minIntentsConfidence = reader.readFloat();
                    break;
                case 5:
                    instance.minEntityTypesConfidence = reader.readFloat();
                    break;
                case 6:
                    instance.earliest = reader.readFloat();
                    break;
                case 7:
                    instance.latest = reader.readFloat();
                    break;
                case 8:
                    instance.numberTurns = reader.readInt32();
                    break;
                case 9:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 10:
                    (instance.userIds = instance.userIds || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(1, instance.languageCodes);
        }
        if (instance.matchedIntents && instance.matchedIntents.length) {
            writer.writeRepeatedMessage(2, instance.matchedIntents, ondewoNlu006.Intent.toBinaryWriter);
        }
        if (instance.matchedEntityTypes && instance.matchedEntityTypes.length) {
            writer.writeRepeatedMessage(3, instance.matchedEntityTypes, ondewoNlu007.EntityType.toBinaryWriter);
        }
        if (instance.minIntentsConfidence) {
            writer.writeFloat(4, instance.minIntentsConfidence);
        }
        if (instance.minEntityTypesConfidence) {
            writer.writeFloat(5, instance.minEntityTypesConfidence);
        }
        if (instance.earliest) {
            writer.writeFloat(6, instance.earliest);
        }
        if (instance.latest) {
            writer.writeFloat(7, instance.latest);
        }
        if (instance.numberTurns) {
            writer.writeInt32(8, instance.numberTurns);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(9, instance.labels);
        }
        if (instance.userIds && instance.userIds.length) {
            writer.writeRepeatedString(10, instance.userIds);
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
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.sessions = (value.sessions || []).map(m => new Session(m));
        this.nextPageToken = value.nextPageToken;
        ListSessionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionsResponse();
        ListSessionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessions = instance.sessions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Session();
                    reader.readMessage(messageInitializer1, Session.fromBinaryReader);
                    (instance.sessions = instance.sessions || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessions && instance.sessions.length) {
            writer.writeRepeatedMessage(1, instance.sessions, Session.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
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
    toObject() {
        return {
            sessions: (this.sessions || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetSessionRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionView = value.sessionView;
        GetSessionRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSessionRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSessionRequest();
        GetSessionRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSessionRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionView) {
            writer.writeEnum(2, instance.sessionView);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteSessionRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteSessionRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        DeleteSessionRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteSessionRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteSessionRequest();
        DeleteSessionRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteSessionRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    toObject() {
        return {
            sessionId: this.sessionId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CreateSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.parentReviewId = value.parentReviewId;
        this.sessionReview = value.sessionReview
            ? new SessionReview(value.sessionReview)
            : undefined;
        this.sessionReviewView = value.sessionReviewView;
        CreateSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateSessionReviewRequest();
        CreateSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.parentReviewId = instance.parentReviewId || '';
        instance.sessionReview = instance.sessionReview || undefined;
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.parentReviewId = reader.readString();
                    break;
                case 3:
                    instance.sessionReview = new SessionReview();
                    reader.readMessage(instance.sessionReview, SessionReview.fromBinaryReader);
                    break;
                case 4:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.parentReviewId) {
            writer.writeString(2, instance.parentReviewId);
        }
        if (instance.sessionReview) {
            writer.writeMessage(3, instance.sessionReview, SessionReview.toBinaryWriter);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(4, instance.sessionReviewView);
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
    toJSON() {
        return this.toObject();
    }
}
export class SessionReview {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReview value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviewId = value.sessionReviewId;
        this.sessionReviewSteps = (value.sessionReviewSteps || []).map(m => new SessionReviewStep(m));
        SessionReview.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionReview.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionReview();
        SessionReview.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviewId = instance.sessionReviewId || '';
        instance.sessionReviewSteps = instance.sessionReviewSteps || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionReviewId = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new SessionReviewStep();
                    reader.readMessage(messageInitializer2, SessionReviewStep.fromBinaryReader);
                    (instance.sessionReviewSteps =
                        instance.sessionReviewSteps || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionReview.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviewId) {
            writer.writeString(1, instance.sessionReviewId);
        }
        if (instance.sessionReviewSteps && instance.sessionReviewSteps.length) {
            writer.writeRepeatedMessage(2, instance.sessionReviewSteps, SessionReviewStep.toBinaryWriter);
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
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewSteps: (this.sessionReviewSteps || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (SessionReview) {
    let View;
    (function (View) {
        View[View["viewUnspecified"] = 0] = "viewUnspecified";
        View[View["viewFull"] = 1] = "viewFull";
        View[View["viewSparse"] = 2] = "viewSparse";
    })(View = SessionReview.View || (SessionReview.View = {}));
})(SessionReview || (SessionReview = {}));
export class SessionReviewStep {
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReviewStep value
     */
    constructor(value) {
        value = value || {};
        this.annotatedUsersays = value.annotatedUsersays
            ? new ondewoNlu006.Intent.TrainingPhrase(value.annotatedUsersays)
            : undefined;
        this.languageCode = value.languageCode;
        this.detectedIntents = (value.detectedIntents || []).map(m => new DetectedIntent(m));
        this.contexts = (value.contexts || []).map(m => new ondewoNlu005.Context(m));
        SessionReviewStep.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SessionReviewStep.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SessionReviewStep();
        SessionReviewStep.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.annotatedUsersays = instance.annotatedUsersays || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.detectedIntents = instance.detectedIntents || [];
        instance.contexts = instance.contexts || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.annotatedUsersays = new ondewoNlu006.Intent.TrainingPhrase();
                    reader.readMessage(instance.annotatedUsersays, ondewoNlu006.Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new DetectedIntent();
                    reader.readMessage(messageInitializer3, DetectedIntent.fromBinaryReader);
                    (instance.detectedIntents = instance.detectedIntents || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new ondewoNlu005.Context();
                    reader.readMessage(messageInitializer4, ondewoNlu005.Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer4);
                    break;
                default:
                    reader.skipField();
            }
        }
        SessionReviewStep.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.annotatedUsersays) {
            writer.writeMessage(1, instance.annotatedUsersays, ondewoNlu006.Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.detectedIntents && instance.detectedIntents.length) {
            writer.writeRepeatedMessage(3, instance.detectedIntents, DetectedIntent.toBinaryWriter);
        }
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(4, instance.contexts, ondewoNlu005.Context.toBinaryWriter);
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
    toObject() {
        return {
            annotatedUsersays: this.annotatedUsersays
                ? this.annotatedUsersays.toObject()
                : undefined,
            languageCode: this.languageCode,
            detectedIntents: (this.detectedIntents || []).map(m => m.toObject()),
            contexts: (this.contexts || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DetectedIntent {
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectedIntent value
     */
    constructor(value) {
        value = value || {};
        this.intent = value.intent
            ? new ondewoNlu006.Intent(value.intent)
            : undefined;
        this.score = value.score;
        this.algorithm = value.algorithm;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new ondewoNlu006.Intent.Message(m));
        this.requiredParamMissing = value.requiredParamMissing;
        DetectedIntent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DetectedIntent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DetectedIntent();
        DetectedIntent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intent = instance.intent || undefined;
        instance.score = instance.score || 0;
        instance.algorithm = instance.algorithm || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.requiredParamMissing = instance.requiredParamMissing || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.intent = new ondewoNlu006.Intent();
                    reader.readMessage(instance.intent, ondewoNlu006.Intent.fromBinaryReader);
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                case 3:
                    instance.algorithm = reader.readString();
                    break;
                case 4:
                    const messageInitializer4 = new ondewoNlu006.Intent.Message();
                    reader.readMessage(messageInitializer4, ondewoNlu006.Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer4);
                    break;
                case 5:
                    instance.requiredParamMissing = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        DetectedIntent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intent) {
            writer.writeMessage(1, instance.intent, ondewoNlu006.Intent.toBinaryWriter);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
        }
        if (instance.algorithm) {
            writer.writeString(3, instance.algorithm);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(4, instance.fulfillmentMessages, ondewoNlu006.Intent.Message.toBinaryWriter);
        }
        if (instance.requiredParamMissing) {
            writer.writeBool(5, instance.requiredParamMissing);
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
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            score: this.score,
            algorithm: this.algorithm,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            requiredParamMissing: this.requiredParamMissing
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        ListSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionLabelsRequest();
        ListSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionLabelsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsResponse value
     */
    constructor(value) {
        value = value || {};
        this.labels = (value.labels || []).slice();
        ListSessionLabelsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionLabelsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionLabelsResponse();
        ListSessionLabelsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.labels = instance.labels || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionLabelsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(1, instance.labels);
        }
    }
    get labels() {
        return this._labels;
    }
    set labels(value) {
        this._labels = value;
    }
    toObject() {
        return {
            labels: (this.labels || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AddSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.labels = (value.labels || []).slice();
        this.sessionView = value.sessionView;
        AddSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddSessionLabelsRequest();
        AddSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.labels = instance.labels || [];
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(2, instance.labels);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class RemoveSessionLabelsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveSessionLabelsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.labels = (value.labels || []).slice();
        this.sessionView = value.sessionView;
        RemoveSessionLabelsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RemoveSessionLabelsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RemoveSessionLabelsRequest();
        RemoveSessionLabelsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.labels = instance.labels || [];
        instance.sessionView = instance.sessionView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    (instance.labels = instance.labels || []).push(reader.readString());
                    break;
                case 3:
                    instance.sessionView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        RemoveSessionLabelsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.labels && instance.labels.length) {
            writer.writeRepeatedString(2, instance.labels);
        }
        if (instance.sessionView) {
            writer.writeEnum(3, instance.sessionView);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            labels: (this.labels || []).slice(),
            sessionView: this.sessionView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionReviewsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionReviewView = value.sessionReviewView;
        this.pageToken = value.pageToken;
        ListSessionReviewsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionReviewsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionReviewsRequest();
        ListSessionReviewsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionReviewsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListSessionReviewsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsResponse value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviews = (value.sessionReviews || []).map(m => new SessionReview(m));
        this.nextPageToken = value.nextPageToken;
        ListSessionReviewsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListSessionReviewsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListSessionReviewsResponse();
        ListSessionReviewsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviews = instance.sessionReviews || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SessionReview();
                    reader.readMessage(messageInitializer1, SessionReview.fromBinaryReader);
                    (instance.sessionReviews = instance.sessionReviews || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListSessionReviewsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviews && instance.sessionReviews.length) {
            writer.writeRepeatedMessage(1, instance.sessionReviews, SessionReview.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
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
    toObject() {
        return {
            sessionReviews: (this.sessionReviews || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionReviewId = value.sessionReviewId;
        this.sessionReviewView = value.sessionReviewView;
        GetSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSessionReviewRequest();
        GetSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionReviewId = instance.sessionReviewId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionReviewId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionReviewId) {
            writer.writeString(1, instance.sessionReviewId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
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
    toObject() {
        return {
            sessionReviewId: this.sessionReviewId,
            sessionReviewView: this.sessionReviewView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetLatestSessionReviewRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetLatestSessionReviewRequest value
     */
    constructor(value) {
        value = value || {};
        this.sessionId = value.sessionId;
        this.sessionReviewView = value.sessionReviewView;
        GetLatestSessionReviewRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetLatestSessionReviewRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetLatestSessionReviewRequest();
        GetLatestSessionReviewRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sessionId = instance.sessionId || '';
        instance.sessionReviewView = instance.sessionReviewView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sessionId = reader.readString();
                    break;
                case 2:
                    instance.sessionReviewView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetLatestSessionReviewRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sessionId) {
            writer.writeString(1, instance.sessionId);
        }
        if (instance.sessionReviewView) {
            writer.writeEnum(2, instance.sessionReviewView);
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
    toObject() {
        return {
            sessionId: this.sessionId,
            sessionReviewView: this.sessionReviewView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3Nlc3Npb24ucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RSxPQUFPLEtBQUssaUJBQWlCLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEtBQUssYUFBYSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sS0FBSyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEtBQUssWUFBWSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE1BQU0sQ0FBTixJQUFZLGFBU1g7QUFURCxXQUFZLGFBQWE7SUFDdkIseUZBQTRCLENBQUE7SUFDNUIsbUZBQXlCLENBQUE7SUFDekIsMkVBQXFCLENBQUE7SUFDckIsNkVBQXNCLENBQUE7SUFDdEIseUVBQW9CLENBQUE7SUFDcEIsNkVBQXNCLENBQUE7SUFDdEIsaUZBQXdCLENBQUE7SUFDeEIseUdBQW9DLENBQUE7QUFDdEMsQ0FBQyxFQVRXLGFBQWEsS0FBYixhQUFhLFFBU3hCO0FBQ0QsTUFBTSxPQUFPLG1CQUFtQjtJQThFOUI7OztPQUdHO0lBQ0gsWUFBWSxLQUE2QztRQUN2RCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVztZQUNsQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxD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LElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxLQUFxQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQzFDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvc3RydWN0LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwMyBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVUeXBlMDA0IGZyb20gJy4uLy4uL2dvb2dsZS90eXBlL2xhdGxuZy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDUgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNiBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5leHBvcnQgZW51bSBBdWRpb0VuY29kaW5nIHtcbiAgYXVkaW9FbmNvZGluZ1Vuc3BlY2lmaWVkID0gMCxcbiAgYXVkaW9FbmNvZGluZ0xpbmVhcjE2ID0gMSxcbiAgYXVkaW9FbmNvZGluZ0ZsYWMgPSAyLFxuICBhdWRpb0VuY29kaW5nTXVsYXcgPSAzLFxuICBhdWRpb0VuY29kaW5nQW1yID0gNCxcbiAgYXVkaW9FbmNvZGluZ0FtcldiID0gNSxcbiAgYXVkaW9FbmNvZGluZ09nZ09wdXMgPSA2LFxuICBhdWRpb0VuY29kaW5nU3BlZXhXaXRoSGVhZGVyQnl0ZSA9IDdcbn1cbmV4cG9ydCBjbGFzcyBEZXRlY3RJbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IERldGVjdEludGVudFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGV0ZWN0SW50ZW50UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZXRlY3RJbnRlbnRSZXF1ZXN0KCk7XG4gICAgRGV0ZWN0SW50ZW50UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnNlc3Npb24gPSBpbnN0YW5jZS5zZXNzaW9uIHx8ICcnO1xuICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gaW5zdGFuY2UucXVlcnlQYXJhbXMgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnF1ZXJ5SW5wdXQgPSBpbnN0YW5jZS5xdWVyeUlucHV0IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5pbnB1dEF1ZGlvID0gaW5zdGFuY2UuaW5wdXRBdWRpbyB8fCBuZXcgVWludDhBcnJheSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IERldGVjdEludGVudFJlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gbmV3IFF1ZXJ5UGFyYW1ldGVycygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UucXVlcnlJbnB1dCA9IG5ldyBRdWVyeUlucHV0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnF1ZXJ5SW5wdXQsIFF1ZXJ5SW5wdXQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5pbnB1dEF1ZGlvID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZXRlY3RJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IERldGVjdEludGVudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5xdWVyeVBhcmFtcyBhcyBhbnksXG4gICAgICAgIFF1ZXJ5UGFyYW1ldGVycy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnF1ZXJ5SW5wdXQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLnF1ZXJ5SW5wdXQgYXMgYW55LFxuICAgICAgICBRdWVyeUlucHV0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaW5wdXRBdWRpbyAmJiBpbnN0YW5jZS5pbnB1dEF1ZGlvLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlQnl0ZXMoNSwgaW5zdGFuY2UuaW5wdXRBdWRpbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXM/OiBRdWVyeVBhcmFtZXRlcnM7XG4gIHByaXZhdGUgX3F1ZXJ5SW5wdXQ/OiBRdWVyeUlucHV0O1xuICBwcml2YXRlIF9pbnB1dEF1ZGlvPzogVWludDhBcnJheTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIERldGVjdEludGVudFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZXRlY3RJbnRlbnRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uID0gdmFsdWUuc2Vzc2lvbjtcbiAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gdmFsdWUucXVlcnlQYXJhbXNcbiAgICAgID8gbmV3IFF1ZXJ5UGFyYW1ldGVycyh2YWx1ZS5xdWVyeVBhcmFtcylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucXVlcnlJbnB1dCA9IHZhbHVlLnF1ZXJ5SW5wdXRcbiAgICAgID8gbmV3IFF1ZXJ5SW5wdXQodmFsdWUucXVlcnlJbnB1dClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5wdXRBdWRpbyA9IHZhbHVlLmlucHV0QXVkaW87XG4gICAgRGV0ZWN0SW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbjtcbiAgfVxuICBzZXQgc2Vzc2lvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBxdWVyeVBhcmFtcygpOiBRdWVyeVBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVBhcmFtcztcbiAgfVxuICBzZXQgcXVlcnlQYXJhbXModmFsdWU6IFF1ZXJ5UGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXJ5UGFyYW1zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHF1ZXJ5SW5wdXQoKTogUXVlcnlJbnB1dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5SW5wdXQ7XG4gIH1cbiAgc2V0IHF1ZXJ5SW5wdXQodmFsdWU6IFF1ZXJ5SW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeUlucHV0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlucHV0QXVkaW8oKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0QXVkaW87XG4gIH1cbiAgc2V0IGlucHV0QXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnB1dEF1ZGlvID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLnF1ZXJ5UGFyYW1zID8gdGhpcy5xdWVyeVBhcmFtcy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcXVlcnlJbnB1dDogdGhpcy5xdWVyeUlucHV0ID8gdGhpcy5xdWVyeUlucHV0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpbnB1dEF1ZGlvOiB0aGlzLmlucHV0QXVkaW9cbiAgICAgICAgPyB0aGlzLmlucHV0QXVkaW8uc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RJbnRlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGV0ZWN0SW50ZW50UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGV0ZWN0SW50ZW50UmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGV0ZWN0SW50ZW50UmVzcG9uc2UoKTtcbiAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5yZXNwb25zZUlkID0gaW5zdGFuY2UucmVzcG9uc2VJZCB8fCAnJztcbiAgICBpbnN0YW5jZS5xdWVyeVJlc3VsdCA9IGluc3RhbmNlLnF1ZXJ5UmVzdWx0IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS53ZWJob29rU3RhdHVzID0gaW5zdGFuY2Uud2ViaG9va1N0YXR1cyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRGV0ZWN0SW50ZW50UmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5yZXNwb25zZUlkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0ID0gbmV3IFF1ZXJ5UmVzdWx0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucXVlcnlSZXN1bHQsXG4gICAgICAgICAgICBRdWVyeVJlc3VsdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLndlYmhvb2tTdGF0dXMgPSBuZXcgZ29vZ2xlUnBjMDAzLlN0YXR1cygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLndlYmhvb2tTdGF0dXMsXG4gICAgICAgICAgICBnb29nbGVScGMwMDMuU3RhdHVzLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZXRlY3RJbnRlbnRSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVzcG9uc2VJZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnJlc3BvbnNlSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucXVlcnlSZXN1bHQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0IGFzIGFueSxcbiAgICAgICAgUXVlcnlSZXN1bHQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53ZWJob29rU3RhdHVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS53ZWJob29rU3RhdHVzIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUnBjMDAzLlN0YXR1cy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNwb25zZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9xdWVyeVJlc3VsdD86IFF1ZXJ5UmVzdWx0O1xuICBwcml2YXRlIF93ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDAzLlN0YXR1cztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIERldGVjdEludGVudFJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGV0ZWN0SW50ZW50UmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJlc3BvbnNlSWQgPSB2YWx1ZS5yZXNwb25zZUlkO1xuICAgIHRoaXMucXVlcnlSZXN1bHQgPSB2YWx1ZS5xdWVyeVJlc3VsdFxuICAgICAgPyBuZXcgUXVlcnlSZXN1bHQodmFsdWUucXVlcnlSZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndlYmhvb2tTdGF0dXMgPSB2YWx1ZS53ZWJob29rU3RhdHVzXG4gICAgICA/IG5ldyBnb29nbGVScGMwMDMuU3RhdHVzKHZhbHVlLndlYmhvb2tTdGF0dXMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VJZDtcbiAgfVxuICBzZXQgcmVzcG9uc2VJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBxdWVyeVJlc3VsdCgpOiBRdWVyeVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5UmVzdWx0O1xuICB9XG4gIHNldCBxdWVyeVJlc3VsdCh2YWx1ZTogUXVlcnlSZXN1bHQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeVJlc3VsdCA9IHZhbHVlO1xuICB9XG4gIGdldCB3ZWJob29rU3RhdHVzKCk6IGdvb2dsZVJwYzAwMy5TdGF0dXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93ZWJob29rU3RhdHVzO1xuICB9XG4gIHNldCB3ZWJob29rU3RhdHVzKHZhbHVlOiBnb29nbGVScGMwMDMuU3RhdHVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2ViaG9va1N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZUlkOiB0aGlzLnJlc3BvbnNlSWQsXG4gICAgICBxdWVyeVJlc3VsdDogdGhpcy5xdWVyeVJlc3VsdCA/IHRoaXMucXVlcnlSZXN1bHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdlYmhvb2tTdGF0dXM6IHRoaXMud2ViaG9va1N0YXR1c1xuICAgICAgICA/IHRoaXMud2ViaG9va1N0YXR1cy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RJbnRlbnRSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFF1ZXJ5UGFyYW1ldGVycyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBRdWVyeVBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUXVlcnlQYXJhbWV0ZXJzLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1ZXJ5UGFyYW1ldGVycygpO1xuICAgIFF1ZXJ5UGFyYW1ldGVycy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgaW5zdGFuY2UudGltZVpvbmUgPSBpbnN0YW5jZS50aW1lWm9uZSB8fCAnJztcbiAgICBpbnN0YW5jZS5nZW9Mb2NhdGlvbiA9IGluc3RhbmNlLmdlb0xvY2F0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5jb250ZXh0cyA9IGluc3RhbmNlLmNvbnRleHRzIHx8IFtdO1xuICAgIGluc3RhbmNlLnJlc2V0Q29udGV4dHMgPSBpbnN0YW5jZS5yZXNldENvbnRleHRzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnBheWxvYWQgPSBpbnN0YW5jZS5wYXlsb2FkIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBRdWVyeVBhcmFtZXRlcnMsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS50aW1lWm9uZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5nZW9Mb2NhdGlvbiA9IG5ldyBnb29nbGVUeXBlMDA0LkxhdExuZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmdlb0xvY2F0aW9uLFxuICAgICAgICAgICAgZ29vZ2xlVHlwZTAwNC5MYXRMbmcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IG9uZGV3b05sdTAwNS5Db250ZXh0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNS5Db250ZXh0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5jb250ZXh0cyA9IGluc3RhbmNlLmNvbnRleHRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyM1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5yZXNldENvbnRleHRzID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5wYXlsb2FkID0gbmV3IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnBheWxvYWQsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFF1ZXJ5UGFyYW1ldGVycy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBRdWVyeVBhcmFtZXRlcnMsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnRpbWVab25lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudGltZVpvbmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZ2VvTG9jYXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLmdlb0xvY2F0aW9uIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlVHlwZTAwNC5MYXRMbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb250ZXh0cyAmJiBpbnN0YW5jZS5jb250ZXh0cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UuY29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDUuQ29udGV4dC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc2V0Q29udGV4dHMpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNCwgaW5zdGFuY2UucmVzZXRDb250ZXh0cyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYXlsb2FkKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBpbnN0YW5jZS5wYXlsb2FkIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RpbWVab25lPzogc3RyaW5nO1xuICBwcml2YXRlIF9nZW9Mb2NhdGlvbj86IGdvb2dsZVR5cGUwMDQuTGF0TG5nO1xuICBwcml2YXRlIF9jb250ZXh0cz86IG9uZGV3b05sdTAwNS5Db250ZXh0W107XG4gIHByaXZhdGUgX3Jlc2V0Q29udGV4dHM/OiBib29sZWFuO1xuICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUXVlcnlQYXJhbWV0ZXJzIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UXVlcnlQYXJhbWV0ZXJzPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy50aW1lWm9uZSA9IHZhbHVlLnRpbWVab25lO1xuICAgIHRoaXMuZ2VvTG9jYXRpb24gPSB2YWx1ZS5nZW9Mb2NhdGlvblxuICAgICAgPyBuZXcgZ29vZ2xlVHlwZTAwNC5MYXRMbmcodmFsdWUuZ2VvTG9jYXRpb24pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRleHRzID0gKHZhbHVlLmNvbnRleHRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDUuQ29udGV4dChtKVxuICAgICk7XG4gICAgdGhpcy5yZXNldENvbnRleHRzID0gdmFsdWUucmVzZXRDb250ZXh0cztcbiAgICB0aGlzLnBheWxvYWQgPSB2YWx1ZS5wYXlsb2FkXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QodmFsdWUucGF5bG9hZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFF1ZXJ5UGFyYW1ldGVycy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRpbWVab25lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVab25lO1xuICB9XG4gIHNldCB0aW1lWm9uZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGltZVpvbmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ2VvTG9jYXRpb24oKTogZ29vZ2xlVHlwZTAwNC5MYXRMbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nZW9Mb2NhdGlvbjtcbiAgfVxuICBzZXQgZ2VvTG9jYXRpb24odmFsdWU6IGdvb2dsZVR5cGUwMDQuTGF0TG5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2VvTG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29udGV4dHMoKTogb25kZXdvTmx1MDA1LkNvbnRleHRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRzO1xuICB9XG4gIHNldCBjb250ZXh0cyh2YWx1ZTogb25kZXdvTmx1MDA1LkNvbnRleHRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc2V0Q29udGV4dHMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2V0Q29udGV4dHM7XG4gIH1cbiAgc2V0IHJlc2V0Q29udGV4dHModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXNldENvbnRleHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBheWxvYWQoKTogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGF5bG9hZDtcbiAgfVxuICBzZXQgcGF5bG9hZCh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGF5bG9hZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lWm9uZTogdGhpcy50aW1lWm9uZSxcbiAgICAgIGdlb0xvY2F0aW9uOiB0aGlzLmdlb0xvY2F0aW9uID8gdGhpcy5nZW9Mb2NhdGlvbi50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dHM6ICh0aGlzLmNvbnRleHRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgcmVzZXRDb250ZXh0czogdGhpcy5yZXNldENvbnRleHRzLFxuICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkID8gdGhpcy5wYXlsb2FkLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFF1ZXJ5UGFyYW1ldGVycyB7fVxuZXhwb3J0IGNsYXNzIFF1ZXJ5SW5wdXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogUXVlcnlJbnB1dCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBRdWVyeUlucHV0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFF1ZXJ5SW5wdXQoKTtcbiAgICBRdWVyeUlucHV0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBRdWVyeUlucHV0KSB7fVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBRdWVyeUlucHV0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYXVkaW9Db25maWcgPSBuZXcgSW5wdXRBdWRpb0NvbmZpZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmF1ZGlvQ29uZmlnLFxuICAgICAgICAgICAgSW5wdXRBdWRpb0NvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnRleHQgPSBuZXcgVGV4dElucHV0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnRleHQsIFRleHRJbnB1dC5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmV2ZW50ID0gbmV3IEV2ZW50SW5wdXQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UuZXZlbnQsIEV2ZW50SW5wdXQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFF1ZXJ5SW5wdXQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogUXVlcnlJbnB1dCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYXVkaW9Db25maWcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmF1ZGlvQ29uZmlnIGFzIGFueSxcbiAgICAgICAgSW5wdXRBdWRpb0NvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRleHQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMiwgaW5zdGFuY2UudGV4dCBhcyBhbnksIFRleHRJbnB1dC50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5ldmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgzLCBpbnN0YW5jZS5ldmVudCBhcyBhbnksIEV2ZW50SW5wdXQudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvQ29uZmlnPzogSW5wdXRBdWRpb0NvbmZpZztcbiAgcHJpdmF0ZSBfdGV4dD86IFRleHRJbnB1dDtcbiAgcHJpdmF0ZSBfZXZlbnQ/OiBFdmVudElucHV0O1xuXG4gIHByaXZhdGUgX2lucHV0OiBRdWVyeUlucHV0LklucHV0Q2FzZSA9IFF1ZXJ5SW5wdXQuSW5wdXRDYXNlLm5vbmU7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUXVlcnlJbnB1dCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFF1ZXJ5SW5wdXQ+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmF1ZGlvQ29uZmlnID0gdmFsdWUuYXVkaW9Db25maWdcbiAgICAgID8gbmV3IElucHV0QXVkaW9Db25maWcodmFsdWUuYXVkaW9Db25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZS50ZXh0ID8gbmV3IFRleHRJbnB1dCh2YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV2ZW50ID0gdmFsdWUuZXZlbnQgPyBuZXcgRXZlbnRJbnB1dCh2YWx1ZS5ldmVudCkgOiB1bmRlZmluZWQ7XG4gICAgUXVlcnlJbnB1dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGF1ZGlvQ29uZmlnKCk6IElucHV0QXVkaW9Db25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0NvbmZpZztcbiAgfVxuICBzZXQgYXVkaW9Db25maWcodmFsdWU6IElucHV0QXVkaW9Db25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2V2ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5wdXQgPSBRdWVyeUlucHV0LklucHV0Q2FzZS5hdWRpb0NvbmZpZztcbiAgICB9XG4gICAgdGhpcy5fYXVkaW9Db25maWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBUZXh0SW5wdXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBUZXh0SW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYXVkaW9Db25maWcgPSB0aGlzLl9ldmVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0ID0gUXVlcnlJbnB1dC5JbnB1dENhc2UudGV4dDtcbiAgICB9XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBldmVudCgpOiBFdmVudElucHV0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnQ7XG4gIH1cbiAgc2V0IGV2ZW50KHZhbHVlOiBFdmVudElucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2F1ZGlvQ29uZmlnID0gdGhpcy5fdGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0ID0gUXVlcnlJbnB1dC5JbnB1dENhc2UuZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVkaW9Db25maWc6IHRoaXMuYXVkaW9Db25maWcgPyB0aGlzLmF1ZGlvQ29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiB0aGlzLmV2ZW50ID8gdGhpcy5ldmVudC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBRdWVyeUlucHV0IHtcbiAgZXhwb3J0IGVudW0gSW5wdXRDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBhdWRpb0NvbmZpZyA9IDEsXG4gICAgdGV4dCA9IDIsXG4gICAgZXZlbnQgPSAzXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBRdWVyeVJlc3VsdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBRdWVyeVJlc3VsdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBRdWVyeVJlc3VsdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBRdWVyeVJlc3VsdCgpO1xuICAgIFF1ZXJ5UmVzdWx0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBRdWVyeVJlc3VsdCkge1xuICAgIGluc3RhbmNlLnF1ZXJ5VGV4dCA9IGluc3RhbmNlLnF1ZXJ5VGV4dCB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlID1cbiAgICAgIGluc3RhbmNlLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSB8fCAwO1xuICAgIGluc3RhbmNlLmFjdGlvbiA9IGluc3RhbmNlLmFjdGlvbiB8fCAnJztcbiAgICBpbnN0YW5jZS5wYXJhbWV0ZXJzID0gaW5zdGFuY2UucGFyYW1ldGVycyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50ID1cbiAgICAgIGluc3RhbmNlLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5mdWxmaWxsbWVudFRleHQgPSBpbnN0YW5jZS5mdWxmaWxsbWVudFRleHQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyA9IGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW107XG4gICAgaW5zdGFuY2Uud2ViaG9va1NvdXJjZSA9IGluc3RhbmNlLndlYmhvb2tTb3VyY2UgfHwgJyc7XG4gICAgaW5zdGFuY2Uud2ViaG9va1BheWxvYWQgPSBpbnN0YW5jZS53ZWJob29rUGF5bG9hZCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgPSBpbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXTtcbiAgICBpbnN0YW5jZS5pbnRlbnQgPSBpbnN0YW5jZS5pbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmludGVudERldGVjdGlvbkNvbmZpZGVuY2UgPVxuICAgICAgaW5zdGFuY2UuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSB8fCAwO1xuICAgIGluc3RhbmNlLmRpYWdub3N0aWNJbmZvID0gaW5zdGFuY2UuZGlhZ25vc3RpY0luZm8gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFF1ZXJ5UmVzdWx0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucXVlcnlUZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuYWN0aW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnBhcmFtZXRlcnMgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVycyxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuZnVsZmlsbG1lbnRUZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjcgPSBuZXcgb25kZXdvTmx1MDA2LkludGVudC5NZXNzYWdlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNyxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaW5zdGFuY2Uud2ViaG9va1NvdXJjZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBpbnN0YW5jZS53ZWJob29rUGF5bG9hZCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS53ZWJob29rUGF5bG9hZCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxMCA9IG5ldyBvbmRld29ObHUwMDUuQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEwLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA1LkNvbnRleHQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLm91dHB1dENvbnRleHRzID0gaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxMFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50ID0gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5pbnRlbnQsXG4gICAgICAgICAgICBvbmRld29ObHUwMDYuSW50ZW50LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIGluc3RhbmNlLmludGVudERldGVjdGlvbkNvbmZpZGVuY2UgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgaW5zdGFuY2UuZGlhZ25vc3RpY0luZm8gPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZGlhZ25vc3RpY0luZm8sXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFF1ZXJ5UmVzdWx0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFF1ZXJ5UmVzdWx0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5xdWVyeVRleHQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5xdWVyeVRleHQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTUsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDIsIGluc3RhbmNlLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5hY3Rpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5hY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyYW1ldGVycykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVycyBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg1LCBpbnN0YW5jZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZnVsZmlsbG1lbnRUZXh0KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNiwgaW5zdGFuY2UuZnVsZmlsbG1lbnRUZXh0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgJiYgaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndlYmhvb2tTb3VyY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg4LCBpbnN0YW5jZS53ZWJob29rU291cmNlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndlYmhvb2tQYXlsb2FkKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBpbnN0YW5jZS53ZWJob29rUGF5bG9hZCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm91dHB1dENvbnRleHRzICYmIGluc3RhbmNlLm91dHB1dENvbnRleHRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMCxcbiAgICAgICAgaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDUuQ29udGV4dC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIGluc3RhbmNlLmludGVudCBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNi5JbnRlbnQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgxMiwgaW5zdGFuY2UuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kaWFnbm9zdGljSW5mbykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIGluc3RhbmNlLmRpYWdub3N0aWNJbmZvIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3F1ZXJ5VGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2U/OiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyYW1ldGVycz86IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdDtcbiAgcHJpdmF0ZSBfYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZnVsZmlsbG1lbnRUZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9mdWxmaWxsbWVudE1lc3NhZ2VzPzogb25kZXdvTmx1MDA2LkludGVudC5NZXNzYWdlW107XG4gIHByaXZhdGUgX3dlYmhvb2tTb3VyY2U/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3dlYmhvb2tQYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0O1xuICBwcml2YXRlIF9vdXRwdXRDb250ZXh0cz86IG9uZGV3b05sdTAwNS5Db250ZXh0W107XG4gIHByaXZhdGUgX2ludGVudD86IG9uZGV3b05sdTAwNi5JbnRlbnQ7XG4gIHByaXZhdGUgX2ludGVudERldGVjdGlvbkNvbmZpZGVuY2U/OiBudW1iZXI7XG4gIHByaXZhdGUgX2RpYWdub3N0aWNJbmZvPzogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUXVlcnlSZXN1bHQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxRdWVyeVJlc3VsdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucXVlcnlUZXh0ID0gdmFsdWUucXVlcnlUZXh0O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlID0gdmFsdWUuc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlO1xuICAgIHRoaXMuYWN0aW9uID0gdmFsdWUuYWN0aW9uO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHZhbHVlLnBhcmFtZXRlcnNcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCh2YWx1ZS5wYXJhbWV0ZXJzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQgPSB2YWx1ZS5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQ7XG4gICAgdGhpcy5mdWxmaWxsbWVudFRleHQgPSB2YWx1ZS5mdWxmaWxsbWVudFRleHQ7XG4gICAgdGhpcy5mdWxmaWxsbWVudE1lc3NhZ2VzID0gKHZhbHVlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZShtKVxuICAgICk7XG4gICAgdGhpcy53ZWJob29rU291cmNlID0gdmFsdWUud2ViaG9va1NvdXJjZTtcbiAgICB0aGlzLndlYmhvb2tQYXlsb2FkID0gdmFsdWUud2ViaG9va1BheWxvYWRcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCh2YWx1ZS53ZWJob29rUGF5bG9hZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMub3V0cHV0Q29udGV4dHMgPSAodmFsdWUub3V0cHV0Q29udGV4dHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNS5Db250ZXh0KG0pXG4gICAgKTtcbiAgICB0aGlzLmludGVudCA9IHZhbHVlLmludGVudFxuICAgICAgPyBuZXcgb25kZXdvTmx1MDA2LkludGVudCh2YWx1ZS5pbnRlbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmludGVudERldGVjdGlvbkNvbmZpZGVuY2UgPSB2YWx1ZS5pbnRlbnREZXRlY3Rpb25Db25maWRlbmNlO1xuICAgIHRoaXMuZGlhZ25vc3RpY0luZm8gPSB2YWx1ZS5kaWFnbm9zdGljSW5mb1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0KHZhbHVlLmRpYWdub3N0aWNJbmZvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgUXVlcnlSZXN1bHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBxdWVyeVRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlUZXh0O1xuICB9XG4gIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXJ5VGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlO1xuICB9XG4gIHNldCBzcGVlY2hSZWNvZ25pdGlvbkNvbmZpZGVuY2UodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG4gIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJhbWV0ZXJzKCk6IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnM7XG4gIH1cbiAgc2V0IHBhcmFtZXRlcnModmFsdWU6IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWxsUmVxdWlyZWRQYXJhbXNQcmVzZW50KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQ7XG4gIH1cbiAgc2V0IGFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FsbFJlcXVpcmVkUGFyYW1zUHJlc2VudCA9IHZhbHVlO1xuICB9XG4gIGdldCBmdWxmaWxsbWVudFRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsZmlsbG1lbnRUZXh0O1xuICB9XG4gIHNldCBmdWxmaWxsbWVudFRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50VGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBmdWxmaWxsbWVudE1lc3NhZ2VzKCk6IG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsZmlsbG1lbnRNZXNzYWdlcztcbiAgfVxuICBzZXQgZnVsZmlsbG1lbnRNZXNzYWdlcyh2YWx1ZTogb25kZXdvTmx1MDA2LkludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mdWxmaWxsbWVudE1lc3NhZ2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdlYmhvb2tTb3VyY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViaG9va1NvdXJjZTtcbiAgfVxuICBzZXQgd2ViaG9va1NvdXJjZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2ViaG9va1NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIGdldCB3ZWJob29rUGF5bG9hZCgpOiBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93ZWJob29rUGF5bG9hZDtcbiAgfVxuICBzZXQgd2ViaG9va1BheWxvYWQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dlYmhvb2tQYXlsb2FkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG91dHB1dENvbnRleHRzKCk6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRDb250ZXh0cztcbiAgfVxuICBzZXQgb3V0cHV0Q29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vdXRwdXRDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnQoKTogb25kZXdvTmx1MDA2LkludGVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudDtcbiAgfVxuICBzZXQgaW50ZW50KHZhbHVlOiBvbmRld29ObHUwMDYuSW50ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudERldGVjdGlvbkNvbmZpZGVuY2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZTtcbiAgfVxuICBzZXQgaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkaWFnbm9zdGljSW5mbygpOiBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kaWFnbm9zdGljSW5mbztcbiAgfVxuICBzZXQgZGlhZ25vc3RpY0luZm8odmFsdWU6IGdvb2dsZVByb3RvYnVmMDAyLlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RpYWdub3N0aWNJbmZvID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5VGV4dDogdGhpcy5xdWVyeVRleHQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlZWNoUmVjb2duaXRpb25Db25maWRlbmNlOiB0aGlzLnNwZWVjaFJlY29nbml0aW9uQ29uZmlkZW5jZSxcbiAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMgPyB0aGlzLnBhcmFtZXRlcnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGFsbFJlcXVpcmVkUGFyYW1zUHJlc2VudDogdGhpcy5hbGxSZXF1aXJlZFBhcmFtc1ByZXNlbnQsXG4gICAgICBmdWxmaWxsbWVudFRleHQ6IHRoaXMuZnVsZmlsbG1lbnRUZXh0LFxuICAgICAgZnVsZmlsbG1lbnRNZXNzYWdlczogKHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgd2ViaG9va1NvdXJjZTogdGhpcy53ZWJob29rU291cmNlLFxuICAgICAgd2ViaG9va1BheWxvYWQ6IHRoaXMud2ViaG9va1BheWxvYWRcbiAgICAgICAgPyB0aGlzLndlYmhvb2tQYXlsb2FkLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBvdXRwdXRDb250ZXh0czogKHRoaXMub3V0cHV0Q29udGV4dHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudERldGVjdGlvbkNvbmZpZGVuY2U6IHRoaXMuaW50ZW50RGV0ZWN0aW9uQ29uZmlkZW5jZSxcbiAgICAgIGRpYWdub3N0aWNJbmZvOiB0aGlzLmRpYWdub3N0aWNJbmZvXG4gICAgICAgID8gdGhpcy5kaWFnbm9zdGljSW5mby50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBRdWVyeVJlc3VsdCB7fVxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QoKTtcbiAgICBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbiA9IGluc3RhbmNlLnNlc3Npb24gfHwgJyc7XG4gICAgaW5zdGFuY2UucXVlcnlQYXJhbXMgPSBpbnN0YW5jZS5xdWVyeVBhcmFtcyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UucXVlcnlJbnB1dCA9IGluc3RhbmNlLnF1ZXJ5SW5wdXQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnNpbmdsZVV0dGVyYW5jZSA9IGluc3RhbmNlLnNpbmdsZVV0dGVyYW5jZSB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5pbnB1dEF1ZGlvID0gaW5zdGFuY2UuaW5wdXRBdWRpbyB8fCBuZXcgVWludDhBcnJheSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gbmV3IFF1ZXJ5UGFyYW1ldGVycygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UucXVlcnlJbnB1dCA9IG5ldyBRdWVyeUlucHV0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnF1ZXJ5SW5wdXQsIFF1ZXJ5SW5wdXQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5zaW5nbGVVdHRlcmFuY2UgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmlucHV0QXVkaW8gPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnNlc3Npb24pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnF1ZXJ5UGFyYW1zIGFzIGFueSxcbiAgICAgICAgUXVlcnlQYXJhbWV0ZXJzLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucXVlcnlJbnB1dCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UucXVlcnlJbnB1dCBhcyBhbnksXG4gICAgICAgIFF1ZXJ5SW5wdXQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zaW5nbGVVdHRlcmFuY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNCwgaW5zdGFuY2Uuc2luZ2xlVXR0ZXJhbmNlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmlucHV0QXVkaW8gJiYgaW5zdGFuY2UuaW5wdXRBdWRpby5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDYsIGluc3RhbmNlLmlucHV0QXVkaW8pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb24/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3F1ZXJ5UGFyYW1zPzogUXVlcnlQYXJhbWV0ZXJzO1xuICBwcml2YXRlIF9xdWVyeUlucHV0PzogUXVlcnlJbnB1dDtcbiAgcHJpdmF0ZSBfc2luZ2xlVXR0ZXJhbmNlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaW5wdXRBdWRpbz86IFVpbnQ4QXJyYXk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbiA9IHZhbHVlLnNlc3Npb247XG4gICAgdGhpcy5xdWVyeVBhcmFtcyA9IHZhbHVlLnF1ZXJ5UGFyYW1zXG4gICAgICA/IG5ldyBRdWVyeVBhcmFtZXRlcnModmFsdWUucXVlcnlQYXJhbXMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnF1ZXJ5SW5wdXQgPSB2YWx1ZS5xdWVyeUlucHV0XG4gICAgICA/IG5ldyBRdWVyeUlucHV0KHZhbHVlLnF1ZXJ5SW5wdXQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpbmdsZVV0dGVyYW5jZSA9IHZhbHVlLnNpbmdsZVV0dGVyYW5jZTtcbiAgICB0aGlzLmlucHV0QXVkaW8gPSB2YWx1ZS5pbnB1dEF1ZGlvO1xuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb247XG4gIH1cbiAgc2V0IHNlc3Npb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlcnlQYXJhbXMoKTogUXVlcnlQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlQYXJhbXM7XG4gIH1cbiAgc2V0IHF1ZXJ5UGFyYW1zKHZhbHVlOiBRdWVyeVBhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeVBhcmFtcyA9IHZhbHVlO1xuICB9XG4gIGdldCBxdWVyeUlucHV0KCk6IFF1ZXJ5SW5wdXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeUlucHV0O1xuICB9XG4gIHNldCBxdWVyeUlucHV0KHZhbHVlOiBRdWVyeUlucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVlcnlJbnB1dCA9IHZhbHVlO1xuICB9XG4gIGdldCBzaW5nbGVVdHRlcmFuY2UoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbmdsZVV0dGVyYW5jZTtcbiAgfVxuICBzZXQgc2luZ2xlVXR0ZXJhbmNlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2luZ2xlVXR0ZXJhbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlucHV0QXVkaW8oKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0QXVkaW87XG4gIH1cbiAgc2V0IGlucHV0QXVkaW8odmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnB1dEF1ZGlvID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLnF1ZXJ5UGFyYW1zID8gdGhpcy5xdWVyeVBhcmFtcy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcXVlcnlJbnB1dDogdGhpcy5xdWVyeUlucHV0ID8gdGhpcy5xdWVyeUlucHV0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzaW5nbGVVdHRlcmFuY2U6IHRoaXMuc2luZ2xlVXR0ZXJhbmNlLFxuICAgICAgaW5wdXRBdWRpbzogdGhpcy5pbnB1dEF1ZGlvXG4gICAgICAgID8gdGhpcy5pbnB1dEF1ZGlvLnN1YmFycmF5KDApXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlKCk7XG4gICAgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UucmVzcG9uc2VJZCA9IGluc3RhbmNlLnJlc3BvbnNlSWQgfHwgJyc7XG4gICAgaW5zdGFuY2UucmVjb2duaXRpb25SZXN1bHQgPSBpbnN0YW5jZS5yZWNvZ25pdGlvblJlc3VsdCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UucXVlcnlSZXN1bHQgPSBpbnN0YW5jZS5xdWVyeVJlc3VsdCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uud2ViaG9va1N0YXR1cyA9IGluc3RhbmNlLndlYmhvb2tTdGF0dXMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucmVzcG9uc2VJZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5yZWNvZ25pdGlvblJlc3VsdCA9IG5ldyBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnJlY29nbml0aW9uUmVzdWx0LFxuICAgICAgICAgICAgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5xdWVyeVJlc3VsdCA9IG5ldyBRdWVyeVJlc3VsdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgUXVlcnlSZXN1bHQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS53ZWJob29rU3RhdHVzID0gbmV3IGdvb2dsZVJwYzAwMy5TdGF0dXMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS53ZWJob29rU3RhdHVzLFxuICAgICAgICAgICAgZ29vZ2xlUnBjMDAzLlN0YXR1cy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlc3BvbnNlSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5yZXNwb25zZUlkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlY29nbml0aW9uUmVzdWx0KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5yZWNvZ25pdGlvblJlc3VsdCBhcyBhbnksXG4gICAgICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucXVlcnlSZXN1bHQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0IGFzIGFueSxcbiAgICAgICAgUXVlcnlSZXN1bHQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53ZWJob29rU3RhdHVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBpbnN0YW5jZS53ZWJob29rU3RhdHVzIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUnBjMDAzLlN0YXR1cy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNwb25zZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9yZWNvZ25pdGlvblJlc3VsdD86IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0O1xuICBwcml2YXRlIF9xdWVyeVJlc3VsdD86IFF1ZXJ5UmVzdWx0O1xuICBwcml2YXRlIF93ZWJob29rU3RhdHVzPzogZ29vZ2xlUnBjMDAzLlN0YXR1cztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFN0cmVhbWluZ0RldGVjdEludGVudFJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJlc3BvbnNlSWQgPSB2YWx1ZS5yZXNwb25zZUlkO1xuICAgIHRoaXMucmVjb2duaXRpb25SZXN1bHQgPSB2YWx1ZS5yZWNvZ25pdGlvblJlc3VsdFxuICAgICAgPyBuZXcgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQodmFsdWUucmVjb2duaXRpb25SZXN1bHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnF1ZXJ5UmVzdWx0ID0gdmFsdWUucXVlcnlSZXN1bHRcbiAgICAgID8gbmV3IFF1ZXJ5UmVzdWx0KHZhbHVlLnF1ZXJ5UmVzdWx0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy53ZWJob29rU3RhdHVzID0gdmFsdWUud2ViaG9va1N0YXR1c1xuICAgICAgPyBuZXcgZ29vZ2xlUnBjMDAzLlN0YXR1cyh2YWx1ZS53ZWJob29rU3RhdHVzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgU3RyZWFtaW5nRGV0ZWN0SW50ZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCByZXNwb25zZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlSWQ7XG4gIH1cbiAgc2V0IHJlc3BvbnNlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc3BvbnNlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVjb2duaXRpb25SZXN1bHQoKTogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZWNvZ25pdGlvblJlc3VsdDtcbiAgfVxuICBzZXQgcmVjb2duaXRpb25SZXN1bHQodmFsdWU6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVjb2duaXRpb25SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlcnlSZXN1bHQoKTogUXVlcnlSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVJlc3VsdDtcbiAgfVxuICBzZXQgcXVlcnlSZXN1bHQodmFsdWU6IFF1ZXJ5UmVzdWx0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcXVlcnlSZXN1bHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2ViaG9va1N0YXR1cygpOiBnb29nbGVScGMwMDMuU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViaG9va1N0YXR1cztcbiAgfVxuICBzZXQgd2ViaG9va1N0YXR1cyh2YWx1ZTogZ29vZ2xlUnBjMDAzLlN0YXR1cyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dlYmhvb2tTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2VJZDogdGhpcy5yZXNwb25zZUlkLFxuICAgICAgcmVjb2duaXRpb25SZXN1bHQ6IHRoaXMucmVjb2duaXRpb25SZXN1bHRcbiAgICAgICAgPyB0aGlzLnJlY29nbml0aW9uUmVzdWx0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBxdWVyeVJlc3VsdDogdGhpcy5xdWVyeVJlc3VsdCA/IHRoaXMucXVlcnlSZXN1bHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdlYmhvb2tTdGF0dXM6IHRoaXMud2ViaG9va1N0YXR1c1xuICAgICAgICA/IHRoaXMud2ViaG9va1N0YXR1cy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTdHJlYW1pbmdEZXRlY3RJbnRlbnRSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0KCk7XG4gICAgU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0KSB7XG4gICAgaW5zdGFuY2UubWVzc2FnZVR5cGUgPSBpbnN0YW5jZS5tZXNzYWdlVHlwZSB8fCAwO1xuICAgIGluc3RhbmNlLnRyYW5zY3JpcHQgPSBpbnN0YW5jZS50cmFuc2NyaXB0IHx8ICcnO1xuICAgIGluc3RhbmNlLmlzRmluYWwgPSBpbnN0YW5jZS5pc0ZpbmFsIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbmZpZGVuY2UgPSBpbnN0YW5jZS5jb25maWRlbmNlIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5tZXNzYWdlVHlwZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudHJhbnNjcmlwdCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5pc0ZpbmFsID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWRlbmNlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubWVzc2FnZVR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMSwgaW5zdGFuY2UubWVzc2FnZVR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJhbnNjcmlwdCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnRyYW5zY3JpcHQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaXNGaW5hbCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzLCBpbnN0YW5jZS5pc0ZpbmFsKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbmZpZGVuY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDQsIGluc3RhbmNlLmNvbmZpZGVuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21lc3NhZ2VUeXBlPzogU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQuTWVzc2FnZVR5cGU7XG4gIHByaXZhdGUgX3RyYW5zY3JpcHQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lzRmluYWw/OiBib29sZWFuO1xuICBwcml2YXRlIF9jb25maWRlbmNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU3RyZWFtaW5nUmVjb2duaXRpb25SZXN1bHQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubWVzc2FnZVR5cGUgPSB2YWx1ZS5tZXNzYWdlVHlwZTtcbiAgICB0aGlzLnRyYW5zY3JpcHQgPSB2YWx1ZS50cmFuc2NyaXB0O1xuICAgIHRoaXMuaXNGaW5hbCA9IHZhbHVlLmlzRmluYWw7XG4gICAgdGhpcy5jb25maWRlbmNlID0gdmFsdWUuY29uZmlkZW5jZTtcbiAgICBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VUeXBlKCk6IFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0Lk1lc3NhZ2VUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZVR5cGU7XG4gIH1cbiAgc2V0IG1lc3NhZ2VUeXBlKHZhbHVlOiBTdHJlYW1pbmdSZWNvZ25pdGlvblJlc3VsdC5NZXNzYWdlVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYW5zY3JpcHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNjcmlwdDtcbiAgfVxuICBzZXQgdHJhbnNjcmlwdCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhbnNjcmlwdCA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0ZpbmFsKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc0ZpbmFsO1xuICB9XG4gIHNldCBpc0ZpbmFsKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNGaW5hbCA9IHZhbHVlO1xuICB9XG4gIGdldCBjb25maWRlbmNlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZGVuY2U7XG4gIH1cbiAgc2V0IGNvbmZpZGVuY2UodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZGVuY2UgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZVR5cGU6IHRoaXMubWVzc2FnZVR5cGUsXG4gICAgICB0cmFuc2NyaXB0OiB0aGlzLnRyYW5zY3JpcHQsXG4gICAgICBpc0ZpbmFsOiB0aGlzLmlzRmluYWwsXG4gICAgICBjb25maWRlbmNlOiB0aGlzLmNvbmZpZGVuY2VcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmVhbWluZ1JlY29nbml0aW9uUmVzdWx0IHtcbiAgZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICAgIG1lc3NhZ2VUeXBlVW5zcGVjaWZpZWQgPSAwLFxuICAgIHRyYW5zY3JpcHQgPSAxLFxuICAgIGVuZE9mU2luZ2xlVXR0ZXJhbmNlID0gMlxuICB9XG59XG5leHBvcnQgY2xhc3MgSW5wdXRBdWRpb0NvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBJbnB1dEF1ZGlvQ29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIElucHV0QXVkaW9Db25maWcudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW5wdXRBdWRpb0NvbmZpZygpO1xuICAgIElucHV0QXVkaW9Db25maWcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IElucHV0QXVkaW9Db25maWcpIHtcbiAgICBpbnN0YW5jZS5hdWRpb0VuY29kaW5nID0gaW5zdGFuY2UuYXVkaW9FbmNvZGluZyB8fCAwO1xuICAgIGluc3RhbmNlLnNhbXBsZVJhdGVIZXJ0eiA9IGluc3RhbmNlLnNhbXBsZVJhdGVIZXJ0eiB8fCAwO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5waHJhc2VIaW50cyA9IGluc3RhbmNlLnBocmFzZUhpbnRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IElucHV0QXVkaW9Db25maWcsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hdWRpb0VuY29kaW5nID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zYW1wbGVSYXRlSGVydHogPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKGluc3RhbmNlLnBocmFzZUhpbnRzID0gaW5zdGFuY2UucGhyYXNlSGludHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSW5wdXRBdWRpb0NvbmZpZy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBJbnB1dEF1ZGlvQ29uZmlnLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5hdWRpb0VuY29kaW5nKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDEsIGluc3RhbmNlLmF1ZGlvRW5jb2RpbmcpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2FtcGxlUmF0ZUhlcnR6KSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5zYW1wbGVSYXRlSGVydHopO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBocmFzZUhpbnRzICYmIGluc3RhbmNlLnBocmFzZUhpbnRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgaW5zdGFuY2UucGhyYXNlSGludHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvRW5jb2Rpbmc/OiBBdWRpb0VuY29kaW5nO1xuICBwcml2YXRlIF9zYW1wbGVSYXRlSGVydHo/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGhyYXNlSGludHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIElucHV0QXVkaW9Db25maWcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbnB1dEF1ZGlvQ29uZmlnPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hdWRpb0VuY29kaW5nID0gdmFsdWUuYXVkaW9FbmNvZGluZztcbiAgICB0aGlzLnNhbXBsZVJhdGVIZXJ0eiA9IHZhbHVlLnNhbXBsZVJhdGVIZXJ0ejtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBocmFzZUhpbnRzID0gKHZhbHVlLnBocmFzZUhpbnRzIHx8IFtdKS5zbGljZSgpO1xuICAgIElucHV0QXVkaW9Db25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhdWRpb0VuY29kaW5nKCk6IEF1ZGlvRW5jb2RpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0VuY29kaW5nO1xuICB9XG4gIHNldCBhdWRpb0VuY29kaW5nKHZhbHVlOiBBdWRpb0VuY29kaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXVkaW9FbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBzYW1wbGVSYXRlSGVydHooKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlUmF0ZUhlcnR6O1xuICB9XG4gIHNldCBzYW1wbGVSYXRlSGVydHoodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NhbXBsZVJhdGVIZXJ0eiA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwaHJhc2VIaW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BocmFzZUhpbnRzO1xuICB9XG4gIHNldCBwaHJhc2VIaW50cyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waHJhc2VIaW50cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdWRpb0VuY29kaW5nOiB0aGlzLmF1ZGlvRW5jb2RpbmcsXG4gICAgICBzYW1wbGVSYXRlSGVydHo6IHRoaXMuc2FtcGxlUmF0ZUhlcnR6LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHBocmFzZUhpbnRzOiAodGhpcy5waHJhc2VIaW50cyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSW5wdXRBdWRpb0NvbmZpZyB7fVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBUZXh0SW5wdXQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGV4dElucHV0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRleHRJbnB1dCgpO1xuICAgIFRleHRJbnB1dC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVGV4dElucHV0KSB7XG4gICAgaW5zdGFuY2UudGV4dCA9IGluc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFRleHRJbnB1dCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnRleHQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGV4dElucHV0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFRleHRJbnB1dCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudGV4dCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUZXh0SW5wdXQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUZXh0SW5wdXQ+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZS50ZXh0O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIFRleHRJbnB1dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUZXh0SW5wdXQge31cbmV4cG9ydCBjbGFzcyBFdmVudElucHV0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEV2ZW50SW5wdXQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXZlbnRJbnB1dC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFdmVudElucHV0KCk7XG4gICAgRXZlbnRJbnB1dC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRXZlbnRJbnB1dCkge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhcmFtZXRlcnMgPSBpbnN0YW5jZS5wYXJhbWV0ZXJzIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRXZlbnRJbnB1dCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVycyA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5TdHJ1Y3QoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRJbnB1dC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFdmVudElucHV0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYXJhbWV0ZXJzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5wYXJhbWV0ZXJzIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0O1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBFdmVudElucHV0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXZlbnRJbnB1dD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gdmFsdWUucGFyYW1ldGVyc1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0KHZhbHVlLnBhcmFtZXRlcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICBFdmVudElucHV0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmFtZXRlcnMoKTogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVycztcbiAgfVxuICBzZXQgcGFyYW1ldGVycyh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDIuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMgPyB0aGlzLnBhcmFtZXRlcnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV2ZW50SW5wdXQge31cbmV4cG9ydCBjbGFzcyBTZXNzaW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNlc3Npb24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXNzaW9uKCk7XG4gICAgU2Vzc2lvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU2Vzc2lvbikge1xuICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IGluc3RhbmNlLnNlc3Npb25JZCB8fCAnJztcbiAgICBpbnN0YW5jZS5zZXNzaW9uU3RlcHMgPSBpbnN0YW5jZS5zZXNzaW9uU3RlcHMgfHwgW107XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbkluZm8gPSBpbnN0YW5jZS5zZXNzaW9uSW5mbyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU2Vzc2lvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IFNlc3Npb25TdGVwKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKG1lc3NhZ2VJbml0aWFsaXplcjIsIFNlc3Npb25TdGVwLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5zZXNzaW9uU3RlcHMgPSBpbnN0YW5jZS5zZXNzaW9uU3RlcHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JbmZvID0gbmV3IFNlc3Npb25JbmZvKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbkluZm8sXG4gICAgICAgICAgICBTZXNzaW9uSW5mby5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXNzaW9uLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblN0ZXBzICYmIGluc3RhbmNlLnNlc3Npb25TdGVwcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblN0ZXBzIGFzIGFueSxcbiAgICAgICAgU2Vzc2lvblN0ZXAudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uSW5mbykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbkluZm8gYXMgYW55LFxuICAgICAgICBTZXNzaW9uSW5mby50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nlc3Npb25TdGVwcz86IFNlc3Npb25TdGVwW107XG4gIHByaXZhdGUgX3Nlc3Npb25JbmZvPzogU2Vzc2lvbkluZm87XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTZXNzaW9uIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2Vzc2lvbj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbklkID0gdmFsdWUuc2Vzc2lvbklkO1xuICAgIHRoaXMuc2Vzc2lvblN0ZXBzID0gKHZhbHVlLnNlc3Npb25TdGVwcyB8fCBbXSkubWFwKG0gPT4gbmV3IFNlc3Npb25TdGVwKG0pKTtcbiAgICB0aGlzLnNlc3Npb25JbmZvID0gdmFsdWUuc2Vzc2lvbkluZm9cbiAgICAgID8gbmV3IFNlc3Npb25JbmZvKHZhbHVlLnNlc3Npb25JbmZvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgU2Vzc2lvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25TdGVwcygpOiBTZXNzaW9uU3RlcFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblN0ZXBzO1xuICB9XG4gIHNldCBzZXNzaW9uU3RlcHModmFsdWU6IFNlc3Npb25TdGVwW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uU3RlcHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvbkluZm8oKTogU2Vzc2lvbkluZm8gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSW5mbztcbiAgfVxuICBzZXQgc2Vzc2lvbkluZm8odmFsdWU6IFNlc3Npb25JbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkluZm8gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25TdGVwczogKHRoaXMuc2Vzc2lvblN0ZXBzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgc2Vzc2lvbkluZm86IHRoaXMuc2Vzc2lvbkluZm8gPyB0aGlzLnNlc3Npb25JbmZvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFNlc3Npb24ge1xuICBleHBvcnQgZW51bSBWaWV3IHtcbiAgICB2aWV3VW5zcGVjaWZpZWQgPSAwLFxuICAgIHZpZXdGdWxsID0gMSxcbiAgICB2aWV3U3BhcnNlID0gMlxuICB9XG59XG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0ZXAgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2Vzc2lvblN0ZXApIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2Vzc2lvblN0ZXAudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Vzc2lvblN0ZXAoKTtcbiAgICBTZXNzaW9uU3RlcC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU2Vzc2lvblN0ZXApIHtcbiAgICBpbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXF1ZXN0ID0gaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVzcG9uc2UgPSBpbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXNwb25zZSB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuY29udGV4dHMgPSBpbnN0YW5jZS5jb250ZXh0cyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTZXNzaW9uU3RlcCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmRldGVjdEludGVudFJlcXVlc3QgPSBuZXcgRGV0ZWN0SW50ZW50UmVxdWVzdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmRldGVjdEludGVudFJlcXVlc3QsXG4gICAgICAgICAgICBEZXRlY3RJbnRlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVzcG9uc2UgPSBuZXcgRGV0ZWN0SW50ZW50UmVzcG9uc2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXNwb25zZSxcbiAgICAgICAgICAgIERldGVjdEludGVudFJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMDUuQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBvbmRld29ObHUwMDUuQ29udGV4dC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuY29udGV4dHMgPSBpbnN0YW5jZS5jb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXNzaW9uU3RlcC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXNzaW9uU3RlcCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVxdWVzdCBhcyBhbnksXG4gICAgICAgIERldGVjdEludGVudFJlcXVlc3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kZXRlY3RJbnRlbnRSZXNwb25zZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuZGV0ZWN0SW50ZW50UmVzcG9uc2UgYXMgYW55LFxuICAgICAgICBEZXRlY3RJbnRlbnRSZXNwb25zZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbnRleHRzICYmIGluc3RhbmNlLmNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5jb250ZXh0cyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNS5Db250ZXh0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RldGVjdEludGVudFJlcXVlc3Q/OiBEZXRlY3RJbnRlbnRSZXF1ZXN0O1xuICBwcml2YXRlIF9kZXRlY3RJbnRlbnRSZXNwb25zZT86IERldGVjdEludGVudFJlc3BvbnNlO1xuICBwcml2YXRlIF9jb250ZXh0cz86IG9uZGV3b05sdTAwNS5Db250ZXh0W107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTZXNzaW9uU3RlcCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlc3Npb25TdGVwPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5kZXRlY3RJbnRlbnRSZXF1ZXN0ID0gdmFsdWUuZGV0ZWN0SW50ZW50UmVxdWVzdFxuICAgICAgPyBuZXcgRGV0ZWN0SW50ZW50UmVxdWVzdCh2YWx1ZS5kZXRlY3RJbnRlbnRSZXF1ZXN0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXRlY3RJbnRlbnRSZXNwb25zZSA9IHZhbHVlLmRldGVjdEludGVudFJlc3BvbnNlXG4gICAgICA/IG5ldyBEZXRlY3RJbnRlbnRSZXNwb25zZSh2YWx1ZS5kZXRlY3RJbnRlbnRSZXNwb25zZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGV4dHMgPSAodmFsdWUuY29udGV4dHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNS5Db250ZXh0KG0pXG4gICAgKTtcbiAgICBTZXNzaW9uU3RlcC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGRldGVjdEludGVudFJlcXVlc3QoKTogRGV0ZWN0SW50ZW50UmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGVjdEludGVudFJlcXVlc3Q7XG4gIH1cbiAgc2V0IGRldGVjdEludGVudFJlcXVlc3QodmFsdWU6IERldGVjdEludGVudFJlcXVlc3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXRlY3RJbnRlbnRSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRldGVjdEludGVudFJlc3BvbnNlKCk6IERldGVjdEludGVudFJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGV0ZWN0SW50ZW50UmVzcG9uc2U7XG4gIH1cbiAgc2V0IGRldGVjdEludGVudFJlc3BvbnNlKHZhbHVlOiBEZXRlY3RJbnRlbnRSZXNwb25zZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RldGVjdEludGVudFJlc3BvbnNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbnRleHRzKCk6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0cztcbiAgfVxuICBzZXQgY29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXRlY3RJbnRlbnRSZXF1ZXN0OiB0aGlzLmRldGVjdEludGVudFJlcXVlc3RcbiAgICAgICAgPyB0aGlzLmRldGVjdEludGVudFJlcXVlc3QudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGRldGVjdEludGVudFJlc3BvbnNlOiB0aGlzLmRldGVjdEludGVudFJlc3BvbnNlXG4gICAgICAgID8gdGhpcy5kZXRlY3RJbnRlbnRSZXNwb25zZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dHM6ICh0aGlzLmNvbnRleHRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXNzaW9uU3RlcCB7fVxuZXhwb3J0IGNsYXNzIFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0KCk7XG4gICAgVHJhY2tTZXNzaW9uU3RlcFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbklkID0gaW5zdGFuY2Uuc2Vzc2lvbklkIHx8ICcnO1xuICAgIGluc3RhbmNlLnNlc3Npb25TdGVwID0gaW5zdGFuY2Uuc2Vzc2lvblN0ZXAgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnNlc3Npb25WaWV3ID0gaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uU3RlcCA9IG5ldyBTZXNzaW9uU3RlcCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25TdGVwLFxuICAgICAgICAgICAgU2Vzc2lvblN0ZXAuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uVmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25TdGVwKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5zZXNzaW9uU3RlcCBhcyBhbnksXG4gICAgICAgIFNlc3Npb25TdGVwLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMywgaW5zdGFuY2Uuc2Vzc2lvblZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblN0ZXA/OiBTZXNzaW9uU3RlcDtcbiAgcHJpdmF0ZSBfc2Vzc2lvblZpZXc/OiBTZXNzaW9uLlZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uU3RlcCA9IHZhbHVlLnNlc3Npb25TdGVwXG4gICAgICA/IG5ldyBTZXNzaW9uU3RlcCh2YWx1ZS5zZXNzaW9uU3RlcClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vzc2lvblZpZXcgPSB2YWx1ZS5zZXNzaW9uVmlldztcbiAgICBUcmFja1Nlc3Npb25TdGVwUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25TdGVwKCk6IFNlc3Npb25TdGVwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblN0ZXA7XG4gIH1cbiAgc2V0IHNlc3Npb25TdGVwKHZhbHVlOiBTZXNzaW9uU3RlcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25TdGVwID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25WaWV3KCk6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25WaWV3O1xuICB9XG4gIHNldCBzZXNzaW9uVmlldyh2YWx1ZTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblZpZXcgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIHNlc3Npb25TdGVwOiB0aGlzLnNlc3Npb25TdGVwID8gdGhpcy5zZXNzaW9uU3RlcC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRyYWNrU2Vzc2lvblN0ZXBSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFNlc3Npb25zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2Vzc2lvbnNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlc3Npb25zUmVxdWVzdCgpO1xuICAgIExpc3RTZXNzaW9uc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXNzaW9uc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBpbnN0YW5jZS5zZXNzaW9uVmlldyB8fCAwO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgICBpbnN0YW5jZS5zZXNzaW9uRmlsdGVyID0gaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlciB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTGlzdFNlc3Npb25zUmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uVmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UucGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25GaWx0ZXIgPSBuZXcgU2Vzc2lvbkZpbHRlcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25GaWx0ZXIsXG4gICAgICAgICAgICBTZXNzaW9uRmlsdGVyLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0U2Vzc2lvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IExpc3RTZXNzaW9uc1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uVmlldykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgyLCBpbnN0YW5jZS5zZXNzaW9uVmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlcikge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbkZpbHRlciBhcyBhbnksXG4gICAgICAgIFNlc3Npb25GaWx0ZXIudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uVmlldz86IFNlc3Npb24uVmlldztcbiAgcHJpdmF0ZSBfcGFnZVRva2VuPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uRmlsdGVyPzogU2Vzc2lvbkZpbHRlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTZXNzaW9uc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2Vzc2lvbnNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IHZhbHVlLnNlc3Npb25WaWV3O1xuICAgIHRoaXMucGFnZVRva2VuID0gdmFsdWUucGFnZVRva2VuO1xuICAgIHRoaXMuc2Vzc2lvbkZpbHRlciA9IHZhbHVlLnNlc3Npb25GaWx0ZXJcbiAgICAgID8gbmV3IFNlc3Npb25GaWx0ZXIodmFsdWUuc2Vzc2lvbkZpbHRlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIExpc3RTZXNzaW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uVmlldygpOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uVmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblZpZXcodmFsdWU6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25WaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25GaWx0ZXIoKTogU2Vzc2lvbkZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25GaWx0ZXI7XG4gIH1cbiAgc2V0IHNlc3Npb25GaWx0ZXIodmFsdWU6IFNlc3Npb25GaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uRmlsdGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBzZXNzaW9uVmlldzogdGhpcy5zZXNzaW9uVmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBzZXNzaW9uRmlsdGVyOiB0aGlzLnNlc3Npb25GaWx0ZXJcbiAgICAgICAgPyB0aGlzLnNlc3Npb25GaWx0ZXIudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFNlc3Npb25zUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFNlc3Npb25GaWx0ZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2Vzc2lvbkZpbHRlcikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXNzaW9uRmlsdGVyLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25GaWx0ZXIoKTtcbiAgICBTZXNzaW9uRmlsdGVyLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTZXNzaW9uRmlsdGVyKSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW107XG4gICAgaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyB8fCBbXTtcbiAgICBpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgPSBpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNaW4gPSBpbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbiB8fCAwO1xuICAgIGluc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWF4ID0gaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXggfHwgMDtcbiAgICBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4gPVxuICAgICAgaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluIHx8IDA7XG4gICAgaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4ID1cbiAgICAgIGluc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCB8fCAwO1xuICAgIGluc3RhbmNlLmVhcmxpZXN0ID0gaW5zdGFuY2UuZWFybGllc3QgfHwgMDtcbiAgICBpbnN0YW5jZS5sYXRlc3QgPSBpbnN0YW5jZS5sYXRlc3QgfHwgMDtcbiAgICBpbnN0YW5jZS5taW5OdW1iZXJUdXJucyA9IGluc3RhbmNlLm1pbk51bWJlclR1cm5zIHx8IDA7XG4gICAgaW5zdGFuY2UubWF4TnVtYmVyVHVybnMgPSBpbnN0YW5jZS5tYXhOdW1iZXJUdXJucyB8fCAwO1xuICAgIGluc3RhbmNlLmxhYmVscyA9IGluc3RhbmNlLmxhYmVscyB8fCBbXTtcbiAgICBpbnN0YW5jZS51c2VySWRzID0gaW5zdGFuY2UudXNlcklkcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTZXNzaW9uRmlsdGVyLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkludGVudC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMDcuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBvbmRld29ObHUwMDcuRW50aXR5VHlwZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzID1cbiAgICAgICAgICAgIGluc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWluID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXggPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4gPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXggPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5lYXJsaWVzdCA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGluc3RhbmNlLmxhdGVzdCA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBpbnN0YW5jZS5taW5OdW1iZXJUdXJucyA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBpbnN0YW5jZS5tYXhOdW1iZXJUdXJucyA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAoaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIChpbnN0YW5jZS51c2VySWRzID0gaW5zdGFuY2UudXNlcklkcyB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvbkZpbHRlci5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXNzaW9uRmlsdGVyLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGVzICYmIGluc3RhbmNlLmxhbmd1YWdlQ29kZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1hdGNoZWRJbnRlbnRzICYmIGluc3RhbmNlLm1hdGNoZWRJbnRlbnRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNi5JbnRlbnQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgJiYgaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDcuRW50aXR5VHlwZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlTWluKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg0LCBpbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1pbik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZU1heCkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNSwgaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2VNYXgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg2LCBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4KSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg3LCBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZWFybGllc3QpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDgsIGluc3RhbmNlLmVhcmxpZXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhdGVzdCkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoOSwgaW5zdGFuY2UubGF0ZXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1pbk51bWJlclR1cm5zKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigxMCwgaW5zdGFuY2UubWluTnVtYmVyVHVybnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWF4TnVtYmVyVHVybnMpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDExLCBpbnN0YW5jZS5tYXhOdW1iZXJUdXJucyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYWJlbHMgJiYgaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMTIsIGluc3RhbmNlLmxhYmVscyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51c2VySWRzICYmIGluc3RhbmNlLnVzZXJJZHMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxMywgaW5zdGFuY2UudXNlcklkcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2Rlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9tYXRjaGVkSW50ZW50cz86IG9uZGV3b05sdTAwNi5JbnRlbnRbXTtcbiAgcHJpdmF0ZSBfbWF0Y2hlZEVudGl0eVR5cGVzPzogb25kZXdvTmx1MDA3LkVudGl0eVR5cGVbXTtcbiAgcHJpdmF0ZSBfbWluSW50ZW50c0NvbmZpZGVuY2VNaW4/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkludGVudHNDb25maWRlbmNlTWF4PzogbnVtYmVyO1xuICBwcml2YXRlIF9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWFybGllc3Q/OiBudW1iZXI7XG4gIHByaXZhdGUgX2xhdGVzdD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluTnVtYmVyVHVybnM/OiBudW1iZXI7XG4gIHByaXZhdGUgX21heE51bWJlclR1cm5zPzogbnVtYmVyO1xuICBwcml2YXRlIF9sYWJlbHM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfdXNlcklkcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU2Vzc2lvbkZpbHRlciB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlc3Npb25GaWx0ZXI+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZXMgPSAodmFsdWUubGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1hdGNoZWRJbnRlbnRzID0gKHZhbHVlLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDYuSW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLm1hdGNoZWRFbnRpdHlUeXBlcyA9ICh2YWx1ZS5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNy5FbnRpdHlUeXBlKG0pXG4gICAgKTtcbiAgICB0aGlzLm1pbkludGVudHNDb25maWRlbmNlTWluID0gdmFsdWUubWluSW50ZW50c0NvbmZpZGVuY2VNaW47XG4gICAgdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZU1heCA9IHZhbHVlLm1pbkludGVudHNDb25maWRlbmNlTWF4O1xuICAgIHRoaXMubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluID0gdmFsdWUubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluO1xuICAgIHRoaXMubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4ID0gdmFsdWUubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4O1xuICAgIHRoaXMuZWFybGllc3QgPSB2YWx1ZS5lYXJsaWVzdDtcbiAgICB0aGlzLmxhdGVzdCA9IHZhbHVlLmxhdGVzdDtcbiAgICB0aGlzLm1pbk51bWJlclR1cm5zID0gdmFsdWUubWluTnVtYmVyVHVybnM7XG4gICAgdGhpcy5tYXhOdW1iZXJUdXJucyA9IHZhbHVlLm1heE51bWJlclR1cm5zO1xuICAgIHRoaXMubGFiZWxzID0gKHZhbHVlLmxhYmVscyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnVzZXJJZHMgPSAodmFsdWUudXNlcklkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBTZXNzaW9uRmlsdGVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZXM7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXRjaGVkSW50ZW50cygpOiBvbmRld29ObHUwMDYuSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVkSW50ZW50cztcbiAgfVxuICBzZXQgbWF0Y2hlZEludGVudHModmFsdWU6IG9uZGV3b05sdTAwNi5JbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hdGNoZWRJbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hdGNoZWRFbnRpdHlUeXBlcygpOiBvbmRld29ObHUwMDcuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlZEVudGl0eVR5cGVzO1xuICB9XG4gIHNldCBtYXRjaGVkRW50aXR5VHlwZXModmFsdWU6IG9uZGV3b05sdTAwNy5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXRjaGVkRW50aXR5VHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluSW50ZW50c0NvbmZpZGVuY2VNaW4oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluSW50ZW50c0NvbmZpZGVuY2VNaW47XG4gIH1cbiAgc2V0IG1pbkludGVudHNDb25maWRlbmNlTWluKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5JbnRlbnRzQ29uZmlkZW5jZU1pbiA9IHZhbHVlO1xuICB9XG4gIGdldCBtaW5JbnRlbnRzQ29uZmlkZW5jZU1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5JbnRlbnRzQ29uZmlkZW5jZU1heDtcbiAgfVxuICBzZXQgbWluSW50ZW50c0NvbmZpZGVuY2VNYXgodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21pbkludGVudHNDb25maWRlbmNlTWF4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW47XG4gIH1cbiAgc2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWluID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXg7XG4gIH1cbiAgc2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1heCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVhcmxpZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VhcmxpZXN0O1xuICB9XG4gIHNldCBlYXJsaWVzdCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWFybGllc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGF0ZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGVzdDtcbiAgfVxuICBzZXQgbGF0ZXN0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXRlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluTnVtYmVyVHVybnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluTnVtYmVyVHVybnM7XG4gIH1cbiAgc2V0IG1pbk51bWJlclR1cm5zKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9taW5OdW1iZXJUdXJucyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhOdW1iZXJUdXJucygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXhOdW1iZXJUdXJucztcbiAgfVxuICBzZXQgbWF4TnVtYmVyVHVybnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21heE51bWJlclR1cm5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhYmVscygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuICBzZXQgbGFiZWxzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhYmVscyA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkcztcbiAgfVxuICBzZXQgdXNlcklkcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VySWRzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXRjaGVkSW50ZW50czogKHRoaXMubWF0Y2hlZEludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBtYXRjaGVkRW50aXR5VHlwZXM6ICh0aGlzLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgbWluSW50ZW50c0NvbmZpZGVuY2VNaW46IHRoaXMubWluSW50ZW50c0NvbmZpZGVuY2VNaW4sXG4gICAgICBtaW5JbnRlbnRzQ29uZmlkZW5jZU1heDogdGhpcy5taW5JbnRlbnRzQ29uZmlkZW5jZU1heCxcbiAgICAgIG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZU1pbjogdGhpcy5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNaW4sXG4gICAgICBtaW5FbnRpdHlUeXBlc0NvbmZpZGVuY2VNYXg6IHRoaXMubWluRW50aXR5VHlwZXNDb25maWRlbmNlTWF4LFxuICAgICAgZWFybGllc3Q6IHRoaXMuZWFybGllc3QsXG4gICAgICBsYXRlc3Q6IHRoaXMubGF0ZXN0LFxuICAgICAgbWluTnVtYmVyVHVybnM6IHRoaXMubWluTnVtYmVyVHVybnMsXG4gICAgICBtYXhOdW1iZXJUdXJuczogdGhpcy5tYXhOdW1iZXJUdXJucyxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgdXNlcklkczogKHRoaXMudXNlcklkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2Vzc2lvbkZpbHRlciB7fVxuZXhwb3J0IGNsYXNzIFNlc3Npb25JbmZvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNlc3Npb25JbmZvKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlc3Npb25JbmZvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25JbmZvKCk7XG4gICAgU2Vzc2lvbkluZm8uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFNlc3Npb25JbmZvKSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW107XG4gICAgaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyB8fCBbXTtcbiAgICBpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgPSBpbnN0YW5jZS5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2UgPSBpbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSB8fCAwO1xuICAgIGluc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSA9IGluc3RhbmNlLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSB8fCAwO1xuICAgIGluc3RhbmNlLmVhcmxpZXN0ID0gaW5zdGFuY2UuZWFybGllc3QgfHwgMDtcbiAgICBpbnN0YW5jZS5sYXRlc3QgPSBpbnN0YW5jZS5sYXRlc3QgfHwgMDtcbiAgICBpbnN0YW5jZS5udW1iZXJUdXJucyA9IGluc3RhbmNlLm51bWJlclR1cm5zIHx8IDA7XG4gICAgaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdO1xuICAgIGluc3RhbmNlLnVzZXJJZHMgPSBpbnN0YW5jZS51c2VySWRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFNlc3Npb25JbmZvLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkludGVudC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UubWF0Y2hlZEludGVudHMgPSBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMDcuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBvbmRld29ObHUwMDcuRW50aXR5VHlwZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzID1cbiAgICAgICAgICAgIGluc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLm1pbkludGVudHNDb25maWRlbmNlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuZWFybGllc3QgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5sYXRlc3QgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5udW1iZXJUdXJucyA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIChpbnN0YW5jZS5sYWJlbHMgPSBpbnN0YW5jZS5sYWJlbHMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgKGluc3RhbmNlLnVzZXJJZHMgPSBpbnN0YW5jZS51c2VySWRzIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXNzaW9uSW5mby5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXNzaW9uSW5mbywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tYXRjaGVkSW50ZW50cyAmJiBpbnN0YW5jZS5tYXRjaGVkSW50ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UubWF0Y2hlZEludGVudHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuSW50ZW50LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzICYmIGluc3RhbmNlLm1hdGNoZWRFbnRpdHlUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UubWF0Y2hlZEVudGl0eVR5cGVzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA3LkVudGl0eVR5cGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5taW5JbnRlbnRzQ29uZmlkZW5jZSkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNCwgaW5zdGFuY2UubWluSW50ZW50c0NvbmZpZGVuY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWluRW50aXR5VHlwZXNDb25maWRlbmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg1LCBpbnN0YW5jZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZWFybGllc3QpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDYsIGluc3RhbmNlLmVhcmxpZXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhdGVzdCkge1xuICAgICAgd3JpdGVyLndyaXRlRmxvYXQoNywgaW5zdGFuY2UubGF0ZXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm51bWJlclR1cm5zKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig4LCBpbnN0YW5jZS5udW1iZXJUdXJucyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYWJlbHMgJiYgaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoOSwgaW5zdGFuY2UubGFiZWxzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVzZXJJZHMgJiYgaW5zdGFuY2UudXNlcklkcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEwLCBpbnN0YW5jZS51c2VySWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZUNvZGVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX21hdGNoZWRJbnRlbnRzPzogb25kZXdvTmx1MDA2LkludGVudFtdO1xuICBwcml2YXRlIF9tYXRjaGVkRW50aXR5VHlwZXM/OiBvbmRld29ObHUwMDcuRW50aXR5VHlwZVtdO1xuICBwcml2YXRlIF9taW5JbnRlbnRzQ29uZmlkZW5jZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluRW50aXR5VHlwZXNDb25maWRlbmNlPzogbnVtYmVyO1xuICBwcml2YXRlIF9lYXJsaWVzdD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGF0ZXN0PzogbnVtYmVyO1xuICBwcml2YXRlIF9udW1iZXJUdXJucz86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGFiZWxzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3VzZXJJZHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFNlc3Npb25JbmZvIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2Vzc2lvbkluZm8+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZXMgPSAodmFsdWUubGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1hdGNoZWRJbnRlbnRzID0gKHZhbHVlLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDYuSW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLm1hdGNoZWRFbnRpdHlUeXBlcyA9ICh2YWx1ZS5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNy5FbnRpdHlUeXBlKG0pXG4gICAgKTtcbiAgICB0aGlzLm1pbkludGVudHNDb25maWRlbmNlID0gdmFsdWUubWluSW50ZW50c0NvbmZpZGVuY2U7XG4gICAgdGhpcy5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2UgPSB2YWx1ZS5taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2U7XG4gICAgdGhpcy5lYXJsaWVzdCA9IHZhbHVlLmVhcmxpZXN0O1xuICAgIHRoaXMubGF0ZXN0ID0gdmFsdWUubGF0ZXN0O1xuICAgIHRoaXMubnVtYmVyVHVybnMgPSB2YWx1ZS5udW1iZXJUdXJucztcbiAgICB0aGlzLmxhYmVscyA9ICh2YWx1ZS5sYWJlbHMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy51c2VySWRzID0gKHZhbHVlLnVzZXJJZHMgfHwgW10pLnNsaWNlKCk7XG4gICAgU2Vzc2lvbkluZm8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2Rlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hdGNoZWRJbnRlbnRzKCk6IG9uZGV3b05sdTAwNi5JbnRlbnRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZWRJbnRlbnRzO1xuICB9XG4gIHNldCBtYXRjaGVkSW50ZW50cyh2YWx1ZTogb25kZXdvTmx1MDA2LkludGVudFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWF0Y2hlZEludGVudHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF0Y2hlZEVudGl0eVR5cGVzKCk6IG9uZGV3b05sdTAwNy5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVkRW50aXR5VHlwZXM7XG4gIH1cbiAgc2V0IG1hdGNoZWRFbnRpdHlUeXBlcyh2YWx1ZTogb25kZXdvTmx1MDA3LkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21hdGNoZWRFbnRpdHlUeXBlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBtaW5JbnRlbnRzQ29uZmlkZW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5JbnRlbnRzQ29uZmlkZW5jZTtcbiAgfVxuICBzZXQgbWluSW50ZW50c0NvbmZpZGVuY2UodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21pbkludGVudHNDb25maWRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5FbnRpdHlUeXBlc0NvbmZpZGVuY2U7XG4gIH1cbiAgc2V0IG1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWluRW50aXR5VHlwZXNDb25maWRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVhcmxpZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VhcmxpZXN0O1xuICB9XG4gIHNldCBlYXJsaWVzdCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZWFybGllc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGF0ZXN0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdGVzdDtcbiAgfVxuICBzZXQgbGF0ZXN0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYXRlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyVHVybnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyVHVybnM7XG4gIH1cbiAgc2V0IG51bWJlclR1cm5zKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXJUdXJucyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYWJlbHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbHM7XG4gIH1cbiAgc2V0IGxhYmVscyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYWJlbHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlcklkcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZHM7XG4gIH1cbiAgc2V0IHVzZXJJZHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlcklkcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGVzOiAodGhpcy5sYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF0Y2hlZEludGVudHM6ICh0aGlzLm1hdGNoZWRJbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbWF0Y2hlZEVudGl0eVR5cGVzOiAodGhpcy5tYXRjaGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIG1pbkludGVudHNDb25maWRlbmNlOiB0aGlzLm1pbkludGVudHNDb25maWRlbmNlLFxuICAgICAgbWluRW50aXR5VHlwZXNDb25maWRlbmNlOiB0aGlzLm1pbkVudGl0eVR5cGVzQ29uZmlkZW5jZSxcbiAgICAgIGVhcmxpZXN0OiB0aGlzLmVhcmxpZXN0LFxuICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdCxcbiAgICAgIG51bWJlclR1cm5zOiB0aGlzLm51bWJlclR1cm5zLFxuICAgICAgbGFiZWxzOiAodGhpcy5sYWJlbHMgfHwgW10pLnNsaWNlKCksXG4gICAgICB1c2VySWRzOiAodGhpcy51c2VySWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXNzaW9uSW5mbyB7fVxuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RTZXNzaW9uc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXNzaW9uc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFNlc3Npb25zUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXNzaW9uc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbnMgPSBpbnN0YW5jZS5zZXNzaW9ucyB8fCBbXTtcbiAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0U2Vzc2lvbnNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgU2Vzc2lvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBTZXNzaW9uLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5zZXNzaW9ucyA9IGluc3RhbmNlLnNlc3Npb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFNlc3Npb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdFNlc3Npb25zUmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25zICYmIGluc3RhbmNlLnNlc3Npb25zLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5zZXNzaW9ucyBhcyBhbnksXG4gICAgICAgIFNlc3Npb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbnM/OiBTZXNzaW9uW107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0U2Vzc2lvbnNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXNzaW9uc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9ucyA9ICh2YWx1ZS5zZXNzaW9ucyB8fCBbXSkubWFwKG0gPT4gbmV3IFNlc3Npb24obSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFNlc3Npb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9ucygpOiBTZXNzaW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9ucztcbiAgfVxuICBzZXQgc2Vzc2lvbnModmFsdWU6IFNlc3Npb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uczogKHRoaXMuc2Vzc2lvbnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXNzaW9uc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0U2Vzc2lvblJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0U2Vzc2lvblJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0U2Vzc2lvblJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0U2Vzc2lvblJlcXVlc3QoKTtcbiAgICBHZXRTZXNzaW9uUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0U2Vzc2lvblJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSBpbnN0YW5jZS5zZXNzaW9uVmlldyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEdldFNlc3Npb25SZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25WaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFNlc3Npb25SZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdldFNlc3Npb25SZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2Uuc2Vzc2lvblZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblZpZXc/OiBTZXNzaW9uLlZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRTZXNzaW9uUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldFNlc3Npb25SZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IHZhbHVlLnNlc3Npb25WaWV3O1xuICAgIEdldFNlc3Npb25SZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblZpZXcoKTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25WaWV3KHZhbHVlOiBTZXNzaW9uLlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uVmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldFNlc3Npb25SZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlU2Vzc2lvblJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRGVsZXRlU2Vzc2lvblJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlU2Vzc2lvblJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlU2Vzc2lvblJlcXVlc3QoKTtcbiAgICBEZWxldGVTZXNzaW9uUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGVsZXRlU2Vzc2lvblJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlU2Vzc2lvblJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWxldGVTZXNzaW9uUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZWxldGVTZXNzaW9uUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvbklkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uuc2Vzc2lvbklkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZWxldGVTZXNzaW9uUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlbGV0ZVNlc3Npb25SZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgRGVsZXRlU2Vzc2lvblJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVTZXNzaW9uUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0KCk7XG4gICAgQ3JlYXRlU2Vzc2lvblJldmlld1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbklkID0gaW5zdGFuY2Uuc2Vzc2lvbklkIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhcmVudFJldmlld0lkID0gaW5zdGFuY2UucGFyZW50UmV2aWV3SWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlldyA9IGluc3RhbmNlLnNlc3Npb25SZXZpZXcgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnRSZXZpZXdJZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3ID0gbmV3IFNlc3Npb25SZXZpZXcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3LFxuICAgICAgICAgICAgU2Vzc2lvblJldmlldy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyZW50UmV2aWV3SWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5wYXJlbnRSZXZpZXdJZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uUmV2aWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3IGFzIGFueSxcbiAgICAgICAgU2Vzc2lvblJldmlldy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDQsIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudFJldmlld0lkPzogc3RyaW5nO1xuICBwcml2YXRlIF9zZXNzaW9uUmV2aWV3PzogU2Vzc2lvblJldmlldztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENyZWF0ZVNlc3Npb25SZXZpZXdSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5wYXJlbnRSZXZpZXdJZCA9IHZhbHVlLnBhcmVudFJldmlld0lkO1xuICAgIHRoaXMuc2Vzc2lvblJldmlldyA9IHZhbHVlLnNlc3Npb25SZXZpZXdcbiAgICAgID8gbmV3IFNlc3Npb25SZXZpZXcodmFsdWUuc2Vzc2lvblJldmlldylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vzc2lvblJldmlld1ZpZXcgPSB2YWx1ZS5zZXNzaW9uUmV2aWV3VmlldztcbiAgICBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudFJldmlld0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudFJldmlld0lkO1xuICB9XG4gIHNldCBwYXJlbnRSZXZpZXdJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50UmV2aWV3SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlldygpOiBTZXNzaW9uUmV2aWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlldyh2YWx1ZTogU2Vzc2lvblJldmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgcGFyZW50UmV2aWV3SWQ6IHRoaXMucGFyZW50UmV2aWV3SWQsXG4gICAgICBzZXNzaW9uUmV2aWV3OiB0aGlzLnNlc3Npb25SZXZpZXdcbiAgICAgICAgPyB0aGlzLnNlc3Npb25SZXZpZXcudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNlc3Npb25SZXZpZXdWaWV3OiB0aGlzLnNlc3Npb25SZXZpZXdWaWV3XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVTZXNzaW9uUmV2aWV3UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFNlc3Npb25SZXZpZXcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2Vzc2lvblJldmlldykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXNzaW9uUmV2aWV3LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25SZXZpZXcoKTtcbiAgICBTZXNzaW9uUmV2aWV3LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTZXNzaW9uUmV2aWV3KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkID0gaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkIHx8ICcnO1xuICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyA9IGluc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTZXNzaW9uUmV2aWV3LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgU2Vzc2lvblJldmlld1N0ZXAoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgU2Vzc2lvblJldmlld1N0ZXAuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3U3RlcHMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNlc3Npb25SZXZpZXcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU2Vzc2lvblJldmlldywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyAmJiBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3U3RlcHMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdTdGVwcyBhcyBhbnksXG4gICAgICAgIFNlc3Npb25SZXZpZXdTdGVwLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1N0ZXBzPzogU2Vzc2lvblJldmlld1N0ZXBbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFNlc3Npb25SZXZpZXcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXNzaW9uUmV2aWV3Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3SWQgPSB2YWx1ZS5zZXNzaW9uUmV2aWV3SWQ7XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3U3RlcHMgPSAodmFsdWUuc2Vzc2lvblJldmlld1N0ZXBzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBTZXNzaW9uUmV2aWV3U3RlcChtKVxuICAgICk7XG4gICAgU2Vzc2lvblJldmlldy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25SZXZpZXdJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3SWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblJldmlld0lkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25SZXZpZXdTdGVwcygpOiBTZXNzaW9uUmV2aWV3U3RlcFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1N0ZXBzO1xuICB9XG4gIHNldCBzZXNzaW9uUmV2aWV3U3RlcHModmFsdWU6IFNlc3Npb25SZXZpZXdTdGVwW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3U3RlcHMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvblJldmlld0lkOiB0aGlzLnNlc3Npb25SZXZpZXdJZCxcbiAgICAgIHNlc3Npb25SZXZpZXdTdGVwczogKHRoaXMuc2Vzc2lvblJldmlld1N0ZXBzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXNzaW9uUmV2aWV3IHtcbiAgZXhwb3J0IGVudW0gVmlldyB7XG4gICAgdmlld1Vuc3BlY2lmaWVkID0gMCxcbiAgICB2aWV3RnVsbCA9IDEsXG4gICAgdmlld1NwYXJzZSA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFNlc3Npb25SZXZpZXdTdGVwIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNlc3Npb25SZXZpZXdTdGVwKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlc3Npb25SZXZpZXdTdGVwLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlc3Npb25SZXZpZXdTdGVwKCk7XG4gICAgU2Vzc2lvblJldmlld1N0ZXAuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFNlc3Npb25SZXZpZXdTdGVwKSB7XG4gICAgaW5zdGFuY2UuYW5ub3RhdGVkVXNlcnNheXMgPSBpbnN0YW5jZS5hbm5vdGF0ZWRVc2Vyc2F5cyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLmRldGVjdGVkSW50ZW50cyA9IGluc3RhbmNlLmRldGVjdGVkSW50ZW50cyB8fCBbXTtcbiAgICBpbnN0YW5jZS5jb250ZXh0cyA9IGluc3RhbmNlLmNvbnRleHRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFNlc3Npb25SZXZpZXdTdGVwLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYW5ub3RhdGVkVXNlcnNheXMgPSBuZXcgb25kZXdvTmx1MDA2LkludGVudC5UcmFpbmluZ1BocmFzZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkludGVudC5UcmFpbmluZ1BocmFzZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IERldGVjdGVkSW50ZW50KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIERldGVjdGVkSW50ZW50LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5kZXRlY3RlZEludGVudHMgPSBpbnN0YW5jZS5kZXRlY3RlZEludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjQgPSBuZXcgb25kZXdvTmx1MDA1LkNvbnRleHQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgb25kZXdvTmx1MDA1LkNvbnRleHQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmNvbnRleHRzID0gaW5zdGFuY2UuY29udGV4dHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Vzc2lvblJldmlld1N0ZXAucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU2Vzc2lvblJldmlld1N0ZXAsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmFubm90YXRlZFVzZXJzYXlzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5hbm5vdGF0ZWRVc2Vyc2F5cyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwNi5JbnRlbnQuVHJhaW5pbmdQaHJhc2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGV0ZWN0ZWRJbnRlbnRzICYmIGluc3RhbmNlLmRldGVjdGVkSW50ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UuZGV0ZWN0ZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgRGV0ZWN0ZWRJbnRlbnQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb250ZXh0cyAmJiBpbnN0YW5jZS5jb250ZXh0cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UuY29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDUuQ29udGV4dC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hbm5vdGF0ZWRVc2Vyc2F5cz86IG9uZGV3b05sdTAwNi5JbnRlbnQuVHJhaW5pbmdQaHJhc2U7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGV0ZWN0ZWRJbnRlbnRzPzogRGV0ZWN0ZWRJbnRlbnRbXTtcbiAgcHJpdmF0ZSBfY29udGV4dHM/OiBvbmRld29ObHUwMDUuQ29udGV4dFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU2Vzc2lvblJldmlld1N0ZXAgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXNzaW9uUmV2aWV3U3RlcD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYW5ub3RhdGVkVXNlcnNheXMgPSB2YWx1ZS5hbm5vdGF0ZWRVc2Vyc2F5c1xuICAgICAgPyBuZXcgb25kZXdvTmx1MDA2LkludGVudC5UcmFpbmluZ1BocmFzZSh2YWx1ZS5hbm5vdGF0ZWRVc2Vyc2F5cylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuZGV0ZWN0ZWRJbnRlbnRzID0gKHZhbHVlLmRldGVjdGVkSW50ZW50cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRGV0ZWN0ZWRJbnRlbnQobSlcbiAgICApO1xuICAgIHRoaXMuY29udGV4dHMgPSAodmFsdWUuY29udGV4dHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwNS5Db250ZXh0KG0pXG4gICAgKTtcbiAgICBTZXNzaW9uUmV2aWV3U3RlcC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFubm90YXRlZFVzZXJzYXlzKCk6IG9uZGV3b05sdTAwNi5JbnRlbnQuVHJhaW5pbmdQaHJhc2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbm5vdGF0ZWRVc2Vyc2F5cztcbiAgfVxuICBzZXQgYW5ub3RhdGVkVXNlcnNheXModmFsdWU6IG9uZGV3b05sdTAwNi5JbnRlbnQuVHJhaW5pbmdQaHJhc2UgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbm5vdGF0ZWRVc2Vyc2F5cyA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXRlY3RlZEludGVudHMoKTogRGV0ZWN0ZWRJbnRlbnRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RldGVjdGVkSW50ZW50cztcbiAgfVxuICBzZXQgZGV0ZWN0ZWRJbnRlbnRzKHZhbHVlOiBEZXRlY3RlZEludGVudFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGV0ZWN0ZWRJbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbnRleHRzKCk6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0cztcbiAgfVxuICBzZXQgY29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwNS5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbm5vdGF0ZWRVc2Vyc2F5czogdGhpcy5hbm5vdGF0ZWRVc2Vyc2F5c1xuICAgICAgICA/IHRoaXMuYW5ub3RhdGVkVXNlcnNheXMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBkZXRlY3RlZEludGVudHM6ICh0aGlzLmRldGVjdGVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGNvbnRleHRzOiAodGhpcy5jb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2Vzc2lvblJldmlld1N0ZXAge31cbmV4cG9ydCBjbGFzcyBEZXRlY3RlZEludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZXRlY3RlZEludGVudCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZXRlY3RlZEludGVudC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBEZXRlY3RlZEludGVudCgpO1xuICAgIERldGVjdGVkSW50ZW50LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBEZXRlY3RlZEludGVudCkge1xuICAgIGluc3RhbmNlLmludGVudCA9IGluc3RhbmNlLmludGVudCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uuc2NvcmUgPSBpbnN0YW5jZS5zY29yZSB8fCAwO1xuICAgIGluc3RhbmNlLmFsZ29yaXRobSA9IGluc3RhbmNlLmFsZ29yaXRobSB8fCAnJztcbiAgICBpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzID0gaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5yZXF1aXJlZFBhcmFtTWlzc2luZyA9IGluc3RhbmNlLnJlcXVpcmVkUGFyYW1NaXNzaW5nIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IERldGVjdGVkSW50ZW50LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50ID0gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5pbnRlbnQsXG4gICAgICAgICAgICBvbmRld29ObHUwMDYuSW50ZW50LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uuc2NvcmUgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5hbGdvcml0aG0gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBvbmRld29ObHUwMDYuSW50ZW50Lk1lc3NhZ2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgb25kZXdvTmx1MDA2LkludGVudC5NZXNzYWdlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzID1cbiAgICAgICAgICAgIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyNCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5yZXF1aXJlZFBhcmFtTWlzc2luZyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZXRlY3RlZEludGVudC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZXRlY3RlZEludGVudCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaW50ZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5pbnRlbnQgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuSW50ZW50LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2NvcmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDIsIGluc3RhbmNlLnNjb3JlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmFsZ29yaXRobSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmFsZ29yaXRobSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzICYmIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuSW50ZW50Lk1lc3NhZ2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5yZXF1aXJlZFBhcmFtTWlzc2luZykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg1LCBpbnN0YW5jZS5yZXF1aXJlZFBhcmFtTWlzc2luZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50Pzogb25kZXdvTmx1MDA2LkludGVudDtcbiAgcHJpdmF0ZSBfc2NvcmU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2FsZ29yaXRobT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZnVsZmlsbG1lbnRNZXNzYWdlcz86IG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZVtdO1xuICBwcml2YXRlIF9yZXF1aXJlZFBhcmFtTWlzc2luZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZXRlY3RlZEludGVudCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERldGVjdGVkSW50ZW50Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnQgPSB2YWx1ZS5pbnRlbnRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwNi5JbnRlbnQodmFsdWUuaW50ZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY29yZSA9IHZhbHVlLnNjb3JlO1xuICAgIHRoaXMuYWxnb3JpdGhtID0gdmFsdWUuYWxnb3JpdGhtO1xuICAgIHRoaXMuZnVsZmlsbG1lbnRNZXNzYWdlcyA9ICh2YWx1ZS5mdWxmaWxsbWVudE1lc3NhZ2VzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDYuSW50ZW50Lk1lc3NhZ2UobSlcbiAgICApO1xuICAgIHRoaXMucmVxdWlyZWRQYXJhbU1pc3NpbmcgPSB2YWx1ZS5yZXF1aXJlZFBhcmFtTWlzc2luZztcbiAgICBEZXRlY3RlZEludGVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudCgpOiBvbmRld29ObHUwMDYuSW50ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50O1xuICB9XG4gIHNldCBpbnRlbnQodmFsdWU6IG9uZGV3b05sdTAwNi5JbnRlbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG4gIGdldCBhbGdvcml0aG0oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWxnb3JpdGhtO1xuICB9XG4gIHNldCBhbGdvcml0aG0odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FsZ29yaXRobSA9IHZhbHVlO1xuICB9XG4gIGdldCBmdWxmaWxsbWVudE1lc3NhZ2VzKCk6IG9uZGV3b05sdTAwNi5JbnRlbnQuTWVzc2FnZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsZmlsbG1lbnRNZXNzYWdlcztcbiAgfVxuICBzZXQgZnVsZmlsbG1lbnRNZXNzYWdlcyh2YWx1ZTogb25kZXdvTmx1MDA2LkludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mdWxmaWxsbWVudE1lc3NhZ2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkUGFyYW1NaXNzaW5nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZFBhcmFtTWlzc2luZztcbiAgfVxuICBzZXQgcmVxdWlyZWRQYXJhbU1pc3NpbmcodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXF1aXJlZFBhcmFtTWlzc2luZyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgIGZ1bGZpbGxtZW50TWVzc2FnZXM6ICh0aGlzLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIHJlcXVpcmVkUGFyYW1NaXNzaW5nOiB0aGlzLnJlcXVpcmVkUGFyYW1NaXNzaW5nXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZXRlY3RlZEludGVudCB7fVxuZXhwb3J0IGNsYXNzIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCgpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFNlc3Npb25MYWJlbHNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSgpO1xuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5sYWJlbHMgPSBpbnN0YW5jZS5sYWJlbHMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5sYWJlbHMgPSBpbnN0YW5jZS5sYWJlbHMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uTGFiZWxzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubGFiZWxzICYmIGluc3RhbmNlLmxhYmVscy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIGluc3RhbmNlLmxhYmVscyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFiZWxzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFNlc3Npb25MYWJlbHNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFiZWxzID0gKHZhbHVlLmxhYmVscyB8fCBbXSkuc2xpY2UoKTtcbiAgICBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFiZWxzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxzO1xuICB9XG4gIHNldCBsYWJlbHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFiZWxzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0U2Vzc2lvbkxhYmVsc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QoKTtcbiAgICBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdO1xuICAgIGluc3RhbmNlLnNlc3Npb25WaWV3ID0gaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBBZGRTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYWJlbHMgJiYgaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UubGFiZWxzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25WaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLnNlc3Npb25WaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhYmVscz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zZXNzaW9uVmlldz86IFNlc3Npb24uVmlldztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkU2Vzc2lvbkxhYmVsc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25JZCA9IHZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLmxhYmVscyA9ICh2YWx1ZS5sYWJlbHMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IHZhbHVlLnNlc3Npb25WaWV3O1xuICAgIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFiZWxzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxzO1xuICB9XG4gIHNldCBsYWJlbHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFiZWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25WaWV3KCk6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25WaWV3O1xuICB9XG4gIHNldCBzZXNzaW9uVmlldyh2YWx1ZTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblZpZXcgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZFNlc3Npb25MYWJlbHNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QoKTtcbiAgICBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdO1xuICAgIGluc3RhbmNlLnNlc3Npb25WaWV3ID0gaW5zdGFuY2Uuc2Vzc2lvblZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBSZW1vdmVTZXNzaW9uTGFiZWxzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25JZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoaW5zdGFuY2UubGFiZWxzID0gaW5zdGFuY2UubGFiZWxzIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogUmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYWJlbHMgJiYgaW5zdGFuY2UubGFiZWxzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UubGFiZWxzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25WaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLnNlc3Npb25WaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uSWQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhYmVscz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9zZXNzaW9uVmlldz86IFNlc3Npb24uVmlldztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmVtb3ZlU2Vzc2lvbkxhYmVsc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25JZCA9IHZhbHVlLnNlc3Npb25JZDtcbiAgICB0aGlzLmxhYmVscyA9ICh2YWx1ZS5sYWJlbHMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5zZXNzaW9uVmlldyA9IHZhbHVlLnNlc3Npb25WaWV3O1xuICAgIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFiZWxzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxzO1xuICB9XG4gIHNldCBsYWJlbHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFiZWxzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlc3Npb25WaWV3KCk6IFNlc3Npb24uVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25WaWV3O1xuICB9XG4gIHNldCBzZXNzaW9uVmlldyh2YWx1ZTogU2Vzc2lvbi5WaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvblZpZXcgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbklkOiB0aGlzLnNlc3Npb25JZCxcbiAgICAgIGxhYmVsczogKHRoaXMubGFiZWxzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgc2Vzc2lvblZpZXc6IHRoaXMuc2Vzc2lvblZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFJlbW92ZVNlc3Npb25MYWJlbHNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlc3Npb25SZXZpZXdzUmVxdWVzdCgpO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3VmlldyB8fCAwO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb25JZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uUmV2aWV3Vmlldykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgyLCBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3Vmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2Vzc2lvblJldmlld3NSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlLnNlc3Npb25SZXZpZXdWaWV3O1xuICAgIHRoaXMucGFnZVRva2VuID0gdmFsdWUucGFnZVRva2VuO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uSWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklkO1xuICB9XG4gIHNldCBzZXNzaW9uSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25JZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXNzaW9uUmV2aWV3VmlldygpOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld1ZpZXcodmFsdWU6IFNlc3Npb25SZXZpZXcuVmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb25JZDogdGhpcy5zZXNzaW9uSWQsXG4gICAgICBzZXNzaW9uUmV2aWV3VmlldzogdGhpcy5zZXNzaW9uUmV2aWV3VmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXNzaW9uUmV2aWV3c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSgpO1xuICAgIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdzID0gaW5zdGFuY2Uuc2Vzc2lvblJldmlld3MgfHwgW107XG4gICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IGluc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFNlc3Npb25SZXZpZXcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgU2Vzc2lvblJldmlldy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2Uuc2Vzc2lvblJldmlld3MgPSBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uUmV2aWV3cyAmJiBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld3MgYXMgYW55LFxuICAgICAgICBTZXNzaW9uUmV2aWV3LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm5leHRQYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdzPzogU2Vzc2lvblJldmlld1tdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2Vzc2lvblJldmlld3NSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvblJldmlld3MgPSAodmFsdWUuc2Vzc2lvblJldmlld3MgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFNlc3Npb25SZXZpZXcobSlcbiAgICApO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFNlc3Npb25SZXZpZXdzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uUmV2aWV3cygpOiBTZXNzaW9uUmV2aWV3W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uUmV2aWV3cztcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld3ModmFsdWU6IFNlc3Npb25SZXZpZXdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb25SZXZpZXdzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uUmV2aWV3czogKHRoaXMuc2Vzc2lvblJldmlld3MgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXNzaW9uUmV2aWV3c1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0U2Vzc2lvblJldmlld1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0U2Vzc2lvblJldmlld1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0U2Vzc2lvblJldmlld1JlcXVlc3QoKTtcbiAgICBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQgPSBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3VmlldyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld0lkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3SWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25SZXZpZXdJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRTZXNzaW9uUmV2aWV3UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3SWQgPSB2YWx1ZS5zZXNzaW9uUmV2aWV3SWQ7XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlLnNlc3Npb25SZXZpZXdWaWV3O1xuICAgIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld0lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25SZXZpZXdJZDtcbiAgfVxuICBzZXQgc2Vzc2lvblJldmlld0lkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3SWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uUmV2aWV3SWQ6IHRoaXMuc2Vzc2lvblJldmlld0lkLFxuICAgICAgc2Vzc2lvblJldmlld1ZpZXc6IHRoaXMuc2Vzc2lvblJldmlld1ZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldFNlc3Npb25SZXZpZXdSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QoKTtcbiAgICBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0TGF0ZXN0U2Vzc2lvblJldmlld1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5zZXNzaW9uSWQgPSBpbnN0YW5jZS5zZXNzaW9uSWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcgPSBpbnN0YW5jZS5zZXNzaW9uUmV2aWV3VmlldyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNlc3Npb25SZXZpZXdWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2Uuc2Vzc2lvblJldmlld1ZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25JZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2Vzc2lvblJldmlld1ZpZXc/OiBTZXNzaW9uUmV2aWV3LlZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRMYXRlc3RTZXNzaW9uUmV2aWV3UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXNzaW9uSWQgPSB2YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy5zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlLnNlc3Npb25SZXZpZXdWaWV3O1xuICAgIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2Vzc2lvbklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JZDtcbiAgfVxuICBzZXQgc2Vzc2lvbklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2Vzc2lvblJldmlld1ZpZXcoKTogU2Vzc2lvblJldmlldy5WaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblJldmlld1ZpZXc7XG4gIH1cbiAgc2V0IHNlc3Npb25SZXZpZXdWaWV3KHZhbHVlOiBTZXNzaW9uUmV2aWV3LlZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zZXNzaW9uUmV2aWV3VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgc2Vzc2lvblJldmlld1ZpZXc6IHRoaXMuc2Vzc2lvblJldmlld1ZpZXdcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldExhdGVzdFNlc3Npb25SZXZpZXdSZXF1ZXN0IHt9XG4iXX0=