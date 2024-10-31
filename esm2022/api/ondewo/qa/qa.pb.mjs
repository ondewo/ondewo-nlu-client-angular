import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu013 from '../../ondewo/nlu/session.pb';
/**
 * Message implementation for ondewo.qa.GetAnswerRequest
 */
export class GetAnswerRequest {
    static { this.id = 'ondewo.qa.GetAnswerRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAnswerRequest();
        GetAnswerRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sessionId = _instance.sessionId || '';
        _instance.text = _instance.text || undefined;
        _instance.maxNumAnswers = _instance.maxNumAnswers || 0;
        _instance.thresholdReader = _instance.thresholdReader || 0;
        _instance.thresholdRetriever = _instance.thresholdRetriever || 0;
        _instance.thresholdOverall = _instance.thresholdOverall || 0;
        _instance.readerModelName = _instance.readerModelName || '';
        _instance.urlFilter = _instance.urlFilter || undefined;
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
                    _instance.text = new ondewoNlu013.TextInput();
                    _reader.readMessage(_instance.text, ondewoNlu013.TextInput.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.maxNumAnswers = _reader.readInt32();
                    break;
                case 4:
                    _instance.thresholdReader = _reader.readFloat();
                    break;
                case 5:
                    _instance.thresholdRetriever = _reader.readFloat();
                    break;
                case 6:
                    _instance.thresholdOverall = _reader.readFloat();
                    break;
                case 7:
                    _instance.readerModelName = _reader.readString();
                    break;
                case 8:
                    _instance.urlFilter = new UrlFilter();
                    _reader.readMessage(_instance.urlFilter, UrlFilter.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAnswerRequest.refineValues(_instance);
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
        if (_instance.text) {
            _writer.writeMessage(2, _instance.text, ondewoNlu013.TextInput.serializeBinaryToWriter);
        }
        if (_instance.maxNumAnswers) {
            _writer.writeInt32(3, _instance.maxNumAnswers);
        }
        if (_instance.thresholdReader) {
            _writer.writeFloat(4, _instance.thresholdReader);
        }
        if (_instance.thresholdRetriever) {
            _writer.writeFloat(5, _instance.thresholdRetriever);
        }
        if (_instance.thresholdOverall) {
            _writer.writeFloat(6, _instance.thresholdOverall);
        }
        if (_instance.readerModelName) {
            _writer.writeString(7, _instance.readerModelName);
        }
        if (_instance.urlFilter) {
            _writer.writeMessage(8, _instance.urlFilter, UrlFilter.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAnswerRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sessionId = _value.sessionId;
        this.text = _value.text
            ? new ondewoNlu013.TextInput(_value.text)
            : undefined;
        this.maxNumAnswers = _value.maxNumAnswers;
        this.thresholdReader = _value.thresholdReader;
        this.thresholdRetriever = _value.thresholdRetriever;
        this.thresholdOverall = _value.thresholdOverall;
        this.readerModelName = _value.readerModelName;
        this.urlFilter = _value.urlFilter
            ? new UrlFilter(_value.urlFilter)
            : undefined;
        GetAnswerRequest.refineValues(this);
    }
    get sessionId() {
        return this._sessionId;
    }
    set sessionId(value) {
        this._sessionId = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get maxNumAnswers() {
        return this._maxNumAnswers;
    }
    set maxNumAnswers(value) {
        this._maxNumAnswers = value;
    }
    get thresholdReader() {
        return this._thresholdReader;
    }
    set thresholdReader(value) {
        this._thresholdReader = value;
    }
    get thresholdRetriever() {
        return this._thresholdRetriever;
    }
    set thresholdRetriever(value) {
        this._thresholdRetriever = value;
    }
    get thresholdOverall() {
        return this._thresholdOverall;
    }
    set thresholdOverall(value) {
        this._thresholdOverall = value;
    }
    get readerModelName() {
        return this._readerModelName;
    }
    set readerModelName(value) {
        this._readerModelName = value;
    }
    get urlFilter() {
        return this._urlFilter;
    }
    set urlFilter(value) {
        this._urlFilter = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAnswerRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sessionId: this.sessionId,
            text: this.text ? this.text.toObject() : undefined,
            maxNumAnswers: this.maxNumAnswers,
            thresholdReader: this.thresholdReader,
            thresholdRetriever: this.thresholdRetriever,
            thresholdOverall: this.thresholdOverall,
            readerModelName: this.readerModelName,
            urlFilter: this.urlFilter ? this.urlFilter.toObject() : undefined
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
            text: this.text ? this.text.toProtobufJSON(options) : null,
            maxNumAnswers: this.maxNumAnswers,
            thresholdReader: this.thresholdReader,
            thresholdRetriever: this.thresholdRetriever,
            thresholdOverall: this.thresholdOverall,
            readerModelName: this.readerModelName,
            urlFilter: this.urlFilter ? this.urlFilter.toProtobufJSON(options) : null
        };
    }
}
/**
 * Message implementation for ondewo.qa.GetAnswerResponse
 */
export class GetAnswerResponse {
    static { this.id = 'ondewo.qa.GetAnswerResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAnswerResponse();
        GetAnswerResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.queryResult = _instance.queryResult || undefined;
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
                case 2:
                    _instance.queryResult = new ondewoNlu013.DetectIntentResponse();
                    _reader.readMessage(_instance.queryResult, ondewoNlu013.DetectIntentResponse.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAnswerResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.queryResult) {
            _writer.writeMessage(2, _instance.queryResult, ondewoNlu013.DetectIntentResponse.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAnswerResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.queryResult = _value.queryResult
            ? new ondewoNlu013.DetectIntentResponse(_value.queryResult)
            : undefined;
        GetAnswerResponse.refineValues(this);
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAnswerResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined
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
            queryResult: this.queryResult
                ? this.queryResult.toProtobufJSON(options)
                : null
        };
    }
}
/**
 * Message implementation for ondewo.qa.RunScraperRequest
 */
export class RunScraperRequest {
    static { this.id = 'ondewo.qa.RunScraperRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RunScraperRequest();
        RunScraperRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.projectIds = _instance.projectIds || [];
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
                    (_instance.projectIds = _instance.projectIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        RunScraperRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.projectIds && _instance.projectIds.length) {
            _writer.writeRepeatedString(1, _instance.projectIds);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunScraperRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.projectIds = (_value.projectIds || []).slice();
        RunScraperRequest.refineValues(this);
    }
    get projectIds() {
        return this._projectIds;
    }
    set projectIds(value) {
        this._projectIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RunScraperRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            projectIds: (this.projectIds || []).slice()
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
            projectIds: (this.projectIds || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.qa.RunScraperResponse
 */
export class RunScraperResponse {
    static { this.id = 'ondewo.qa.RunScraperResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RunScraperResponse();
        RunScraperResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.scraperContainers = _instance.scraperContainers || [];
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
                    const messageInitializer1 = new RunScraperResponse.ScraperContainer();
                    _reader.readMessage(messageInitializer1, RunScraperResponse.ScraperContainer.deserializeBinaryFromReader);
                    (_instance.scraperContainers =
                        _instance.scraperContainers || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        RunScraperResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.scraperContainers && _instance.scraperContainers.length) {
            _writer.writeRepeatedMessage(1, _instance.scraperContainers, RunScraperResponse.ScraperContainer.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunScraperResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.scraperContainers = (_value.scraperContainers || []).map(m => new RunScraperResponse.ScraperContainer(m));
        RunScraperResponse.refineValues(this);
    }
    get scraperContainers() {
        return this._scraperContainers;
    }
    set scraperContainers(value) {
        this._scraperContainers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RunScraperResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            scraperContainers: (this.scraperContainers || []).map(m => m.toObject())
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
            scraperContainers: (this.scraperContainers || []).map(m => m.toProtobufJSON(options))
        };
    }
}
(function (RunScraperResponse) {
    /**
     * Message implementation for ondewo.qa.RunScraperResponse.ScraperContainer
     */
    class ScraperContainer {
        static { this.id = 'ondewo.qa.RunScraperResponse.ScraperContainer'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ScraperContainer();
            ScraperContainer.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.containerName = _instance.containerName || '';
            _instance.containerId = _instance.containerId || '';
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
                        _instance.containerName = _reader.readString();
                        break;
                    case 2:
                        _instance.containerId = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ScraperContainer.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.containerName) {
                _writer.writeString(1, _instance.containerName);
            }
            if (_instance.containerId) {
                _writer.writeString(2, _instance.containerId);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ScraperContainer to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.containerName = _value.containerName;
            this.containerId = _value.containerId;
            ScraperContainer.refineValues(this);
        }
        get containerName() {
            return this._containerName;
        }
        set containerName(value) {
            this._containerName = value;
        }
        get containerId() {
            return this._containerId;
        }
        set containerId(value) {
            this._containerId = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            ScraperContainer.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                containerName: this.containerName,
                containerId: this.containerId
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
                containerName: this.containerName,
                containerId: this.containerId
            };
        }
    }
    RunScraperResponse.ScraperContainer = ScraperContainer;
})(RunScraperResponse || (RunScraperResponse = {}));
/**
 * Message implementation for ondewo.qa.RunTrainingResponse
 */
export class RunTrainingResponse {
    static { this.id = 'ondewo.qa.RunTrainingResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new RunTrainingResponse();
        RunTrainingResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.f1 = _instance.f1 || 0;
        _instance.accuracy = _instance.accuracy || 0;
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
                    _instance.f1 = _reader.readFloat();
                    break;
                case 2:
                    _instance.accuracy = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        RunTrainingResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.f1) {
            _writer.writeFloat(1, _instance.f1);
        }
        if (_instance.accuracy) {
            _writer.writeFloat(2, _instance.accuracy);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RunTrainingResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.f1 = _value.f1;
        this.accuracy = _value.accuracy;
        RunTrainingResponse.refineValues(this);
    }
    get f1() {
        return this._f1;
    }
    set f1(value) {
        this._f1 = value;
    }
    get accuracy() {
        return this._accuracy;
    }
    set accuracy(value) {
        this._accuracy = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        RunTrainingResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            f1: this.f1,
            accuracy: this.accuracy
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
            f1: this.f1,
            accuracy: this.accuracy
        };
    }
}
/**
 * Message implementation for ondewo.qa.UrlFilter
 */
export class UrlFilter {
    static { this.id = 'ondewo.qa.UrlFilter'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UrlFilter();
        UrlFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.allowedValues = _instance.allowedValues || [];
        _instance.regexFilterInclude = _instance.regexFilterInclude || '';
        _instance.regexFilterExclude = _instance.regexFilterExclude || '';
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
                    (_instance.allowedValues = _instance.allowedValues || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.regexFilterInclude = _reader.readString();
                    break;
                case 3:
                    _instance.regexFilterExclude = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UrlFilter.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.allowedValues && _instance.allowedValues.length) {
            _writer.writeRepeatedString(1, _instance.allowedValues);
        }
        if (_instance.regexFilterInclude) {
            _writer.writeString(2, _instance.regexFilterInclude);
        }
        if (_instance.regexFilterExclude) {
            _writer.writeString(3, _instance.regexFilterExclude);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UrlFilter to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.allowedValues = (_value.allowedValues || []).slice();
        this.regexFilterInclude = _value.regexFilterInclude;
        this.regexFilterExclude = _value.regexFilterExclude;
        UrlFilter.refineValues(this);
    }
    get allowedValues() {
        return this._allowedValues;
    }
    set allowedValues(value) {
        this._allowedValues = value;
    }
    get regexFilterInclude() {
        return this._regexFilterInclude;
    }
    set regexFilterInclude(value) {
        this._regexFilterInclude = value;
    }
    get regexFilterExclude() {
        return this._regexFilterExclude;
    }
    set regexFilterExclude(value) {
        this._regexFilterExclude = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UrlFilter.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            allowedValues: (this.allowedValues || []).slice(),
            regexFilterInclude: this.regexFilterInclude,
            regexFilterExclude: this.regexFilterExclude
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
            allowedValues: (this.allowedValues || []).slice(),
            regexFilterInclude: this.regexFilterInclude,
            regexFilterExclude: this.regexFilterExclude
        };
    }
}
/**
 * Message implementation for ondewo.qa.GetServerStateResponse
 */
export class GetServerStateResponse {
    static { this.id = 'ondewo.qa.GetServerStateResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetServerStateResponse();
        GetServerStateResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.serverIsReady = _instance.serverIsReady || false;
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
                    _instance.serverIsReady = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetServerStateResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.serverIsReady) {
            _writer.writeBool(1, _instance.serverIsReady);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetServerStateResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.serverIsReady = _value.serverIsReady;
        GetServerStateResponse.refineValues(this);
    }
    get serverIsReady() {
        return this._serverIsReady;
    }
    set serverIsReady(value) {
        this._serverIsReady = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetServerStateResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            serverIsReady: this.serverIsReady
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
            serverIsReady: this.serverIsReady
        };
    }
}
/**
 * Message implementation for ondewo.qa.ListProjectIdsResponse
 */
export class ListProjectIdsResponse {
    static { this.id = 'ondewo.qa.ListProjectIdsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListProjectIdsResponse();
        ListProjectIdsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.projectIds = _instance.projectIds || [];
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
                    (_instance.projectIds = _instance.projectIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListProjectIdsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.projectIds && _instance.projectIds.length) {
            _writer.writeRepeatedString(1, _instance.projectIds);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListProjectIdsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.projectIds = (_value.projectIds || []).slice();
        ListProjectIdsResponse.refineValues(this);
    }
    get projectIds() {
        return this._projectIds;
    }
    set projectIds(value) {
        this._projectIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListProjectIdsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            projectIds: (this.projectIds || []).slice()
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
            projectIds: (this.projectIds || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.qa.GetProjectConfigRequest
 */
export class GetProjectConfigRequest {
    static { this.id = 'ondewo.qa.GetProjectConfigRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetProjectConfigRequest();
        GetProjectConfigRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.projectId = _instance.projectId || '';
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
                    _instance.projectId = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetProjectConfigRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.projectId) {
            _writer.writeString(1, _instance.projectId);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectConfigRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.projectId = _value.projectId;
        GetProjectConfigRequest.refineValues(this);
    }
    get projectId() {
        return this._projectId;
    }
    set projectId(value) {
        this._projectId = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetProjectConfigRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            projectId: this.projectId
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
            projectId: this.projectId
        };
    }
}
/**
 * Message implementation for ondewo.qa.GetProjectConfigResponse
 */
export class GetProjectConfigResponse {
    static { this.id = 'ondewo.qa.GetProjectConfigResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetProjectConfigResponse();
        GetProjectConfigResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.configSerialized = _instance.configSerialized || '';
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
                    _instance.configSerialized = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetProjectConfigResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.configSerialized) {
            _writer.writeString(1, _instance.configSerialized);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetProjectConfigResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.configSerialized = _value.configSerialized;
        GetProjectConfigResponse.refineValues(this);
    }
    get configSerialized() {
        return this._configSerialized;
    }
    set configSerialized(value) {
        this._configSerialized = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetProjectConfigResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            configSerialized: this.configSerialized
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
            configSerialized: this.configSerialized
        };
    }
}
/**
 * Message implementation for ondewo.qa.UpdateDatabaseRequest
 */
export class UpdateDatabaseRequest {
    static { this.id = 'ondewo.qa.UpdateDatabaseRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateDatabaseRequest();
        UpdateDatabaseRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.projectIds = _instance.projectIds || [];
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
                    (_instance.projectIds = _instance.projectIds || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateDatabaseRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.projectIds && _instance.projectIds.length) {
            _writer.writeRepeatedString(1, _instance.projectIds);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateDatabaseRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.projectIds = (_value.projectIds || []).slice();
        UpdateDatabaseRequest.refineValues(this);
    }
    get projectIds() {
        return this._projectIds;
    }
    set projectIds(value) {
        this._projectIds = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateDatabaseRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            projectIds: (this.projectIds || []).slice()
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
            projectIds: (this.projectIds || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.qa.UpdateDatabaseResponse
 */
export class UpdateDatabaseResponse {
    static { this.id = 'ondewo.qa.UpdateDatabaseResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateDatabaseResponse();
        UpdateDatabaseResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.errorMessages = _instance.errorMessages || [];
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
                    (_instance.errorMessages = _instance.errorMessages || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateDatabaseResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.errorMessages && _instance.errorMessages.length) {
            _writer.writeRepeatedString(1, _instance.errorMessages);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateDatabaseResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.errorMessages = (_value.errorMessages || []).slice();
        UpdateDatabaseResponse.refineValues(this);
    }
    get errorMessages() {
        return this._errorMessages;
    }
    set errorMessages(value) {
        this._errorMessages = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateDatabaseResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            errorMessages: (this.errorMessages || []).slice()
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
            errorMessages: (this.errorMessages || []).slice()
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWEucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL3FhL3FhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFjekUsT0FBTyxLQUFLLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUM1RDs7R0FFRztBQUNILE1BQU0sT0FBTyxnQkFBZ0I7YUFDcEIsT0FBRSxHQUFHLDRCQUE0QixDQUFDO0lBRXpDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQzFDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTJCO1FBQzdDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUM3QyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDM0QsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUM7UUFDakUsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDN0QsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQztRQUM1RCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUEyQixFQUMzQixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLElBQUksRUFDZCxZQUFZLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUNuRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM5QyxNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2pELE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FDakIsU0FBUyxDQUFDLFNBQVMsRUFDbkIsU0FBUyxDQUFDLDJCQUEyQixDQUN0QyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO1FBRUQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUEyQixFQUMzQixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsSUFBVyxFQUNyQixZQUFZLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUMvQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM5QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxZQUFZLENBQ2xCLENBQUMsRUFDRCxTQUFTLENBQUMsU0FBZ0IsRUFDMUIsU0FBUyxDQUFDLHVCQUF1QixDQUNsQyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFXRDs7O09BR0c7SUFDSCxZQUFZLE1BQW9EO1FBQzlELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXlDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBNEI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNsRCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDbEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDMUQsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMxRSxDQUFDO0lBQ0osQ0FBQzs7QUFnQ0g7O0dBRUc7QUFDSCxNQUFNLE9BQU8saUJBQWlCO2FBQ3JCLE9BQUUsR0FBRyw2QkFBNkIsQ0FBQztJQUUxQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE0QjtRQUM5QyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO0lBQzdELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUE0QixFQUM1QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ2hFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLFNBQVMsQ0FBQyxXQUFXLEVBQ3JCLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FDOUQsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUVELGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBNEIsRUFDNUIsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxFQUNELFNBQVMsQ0FBQyxXQUFrQixFQUM1QixZQUFZLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQzFELENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBcUQ7UUFDL0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVztZQUNuQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUMzRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQW9EO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN4RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBaUI7YUFDckIsT0FBRSxHQUFHLDZCQUE2QixDQUFDO0lBRTFDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDekMsaUJBQWlCLENBQUMsMkJBQTJCLENBQzNDLFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQTRCO1FBQzlDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQTRCLEVBQzVCLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxDQUFDO29CQUNKLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUNyQixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO1FBRUQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUE0QixFQUM1QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RCxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxDQUFDO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBcUQ7UUFDL0QsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUM1QyxDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sa0JBQWtCO2FBQ3RCLE9BQUUsR0FBRyw4QkFBOEIsQ0FBQztJQUUzQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUM1QyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE2QjtRQUMvQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBNkIsRUFDN0IsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osTUFBTSxtQkFBbUIsR0FBRyxJQUFJLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxXQUFXLENBQ2pCLG1CQUFtQixFQUNuQixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FDaEUsQ0FBQztvQkFDRixDQUFDLFNBQVMsQ0FBQyxpQkFBaUI7d0JBQzFCLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDL0QsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFFRCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTZCLEVBQzdCLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGlCQUFpQixJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0RSxPQUFPLENBQUMsb0JBQW9CLENBQzFCLENBQUMsRUFDRCxTQUFTLENBQUMsaUJBQXdCLEVBQ2xDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUM1RCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFJRDs7O09BR0c7SUFDSCxZQUFZLE1BQXNEO1FBQ2hFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQzNELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUNGLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQ25CLEtBQXdEO1FBRXhELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3hELENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBRUgsV0FBYyxrQkFBa0I7SUFpQjlCOztPQUVHO0lBQ0gsTUFBYSxnQkFBZ0I7aUJBQ3BCLE9BQUUsR0FBRywrQ0FBK0MsQ0FBQztRQUU1RDs7O1dBR0c7UUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7WUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hDLGdCQUFnQixDQUFDLDJCQUEyQixDQUMxQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7WUFDRixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUEyQjtZQUM3QyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1lBQ3hELFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDdEQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQTJCLEVBQzNCLE9BQXFCO1lBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7Z0JBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtvQkFBRSxNQUFNO2dCQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO29CQUNqQyxLQUFLLENBQUM7d0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQy9DLE1BQU07b0JBQ1IsS0FBSyxDQUFDO3dCQUNKLFNBQVMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM3QyxNQUFNO29CQUNSO3dCQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUM7WUFFRCxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQTJCLEVBQzNCLE9BQXFCO1lBRXJCLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUNELElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsQ0FBQztRQUNILENBQUM7UUFLRDs7O1dBR0c7UUFDSCxZQUFZLE1BQW9EO1lBQzlELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdEMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLGFBQWE7WUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksYUFBYSxDQUFDLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksV0FBVztZQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxXQUFXLENBQUMsS0FBYTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsZUFBZTtZQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDbEMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFFRDs7V0FFRztRQUNILFFBQVE7WUFDTixPQUFPO2dCQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQzlCLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxNQUFNO1lBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCxjQUFjO1FBQ1osYUFBYTtRQUNiLE9BQStCO1lBRS9CLE9BQU87Z0JBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDOUIsQ0FBQztRQUNKLENBQUM7O0lBdklVLG1DQUFnQixtQkF3STVCLENBQUE7QUFrQkgsQ0FBQyxFQTlLYSxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBOEsvQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLG1CQUFtQjthQUN2QixPQUFFLEdBQUcsK0JBQStCLENBQUM7SUFFNUM7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUMzQyxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FDN0MsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBOEI7UUFDaEQsU0FBUyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUE4QixFQUM5QixPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkMsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO1FBRUQsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUE4QixFQUM5QixPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUtEOzs7T0FHRztJQUNILFlBQVksTUFBdUQ7UUFDakUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO0lBQ0osQ0FBQzs7QUFvQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBUzthQUNiLE9BQUUsR0FBRyxxQkFBcUIsQ0FBQztJQUVsQzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNqQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBb0I7UUFDdEMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztRQUN4RCxTQUFTLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztRQUNsRSxTQUFTLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBb0IsRUFDcEIsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFFRCxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQW9CLEVBQUUsT0FBcUI7UUFDeEUsSUFBSSxTQUFTLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFNRDs7O09BR0c7SUFDSCxZQUFZLE1BQTZDO1FBQ3ZELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksa0JBQWtCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDakQsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNqRCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7U0FDNUMsQ0FBQztJQUNKLENBQUM7O0FBc0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHNCQUFzQjthQUMxQixPQUFFLEdBQUcsa0NBQWtDLENBQUM7SUFFL0M7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FDaEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUM7UUFDbkQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osU0FBUyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO1FBRUQsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLHVCQUF1QixDQUM1QixTQUFpQyxFQUNqQyxPQUFxQjtRQUVyQixJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFJRDs7O09BR0c7SUFDSCxZQUFZLE1BQTBEO1FBQ3BFLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCO1FBRS9CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztJQUNKLENBQUM7O0FBa0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHNCQUFzQjthQUMxQixPQUFFLEdBQUcsa0NBQWtDLENBQUM7SUFFL0M7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FDaEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUM7UUFDbkQsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN0RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFFRCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWlDLEVBQ2pDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUEwRDtRQUNwRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBZTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQzVDLENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyx1QkFBdUI7YUFDM0IsT0FBRSxHQUFHLG1DQUFtQyxDQUFDO0lBRWhEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDL0MsdUJBQXVCLENBQUMsMkJBQTJCLENBQ2pELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQWtDO1FBQ3BELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsMkJBQTJCLENBQ2hDLFNBQWtDLEVBQ2xDLE9BQXFCO1FBRXJCLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUFFLE1BQU07WUFFaEMsUUFBUSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxDQUFDO29CQUNKLFNBQVMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUVELHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBa0MsRUFDbEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUEyRDtRQUNyRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxPQUFPLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDOztBQWtCSDs7R0FFRztBQUNILE1BQU0sT0FBTyx3QkFBd0I7YUFDNUIsT0FBRSxHQUFHLG9DQUFvQyxDQUFDO0lBRWpEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFpQjtRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7UUFDaEQsd0JBQXdCLENBQUMsMkJBQTJCLENBQ2xELFFBQVEsRUFDUixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW1DO1FBQ3JELFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFtQyxFQUNuQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUVELHdCQUF3QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBbUMsRUFDbkMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0gsQ0FBQztJQUlEOzs7T0FHRztJQUNILFlBQVksTUFBNEQ7UUFDdEUsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDO0lBQ0osQ0FBQzs7QUFrQkg7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXFCO2FBQ3pCLE9BQUUsR0FBRyxpQ0FBaUMsQ0FBQztJQUU5Qzs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQzdDLHFCQUFxQixDQUFDLDJCQUEyQixDQUMvQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFnQztRQUNsRCxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLDJCQUEyQixDQUNoQyxTQUFnQyxFQUNoQyxPQUFxQjtRQUVyQixPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRWhDLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3RELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FDckIsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUVELHFCQUFxQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyx1QkFBdUIsQ0FDNUIsU0FBZ0MsRUFDaEMsT0FBcUI7UUFFckIsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEQsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNILENBQUM7SUFJRDs7O09BR0c7SUFDSCxZQUFZLE1BQXlEO1FBQ25FLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BELHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDNUMsQ0FBQztJQUNKLENBQUM7O0FBa0JIOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHNCQUFzQjthQUMxQixPQUFFLEdBQUcsa0NBQWtDLENBQUM7SUFFL0M7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FDaEQsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBaUM7UUFDbkQsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQywyQkFBMkIsQ0FDaEMsU0FBaUMsRUFDakMsT0FBcUI7UUFFckIsT0FBTyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQUUsTUFBTTtZQUVoQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUM7b0JBQ0osQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1RCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7b0JBQ0YsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7UUFFRCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQzVCLFNBQWlDLEVBQ2pDLE9BQXFCO1FBRXJCLElBQUksU0FBUyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsWUFBWSxNQUEwRDtRQUNwRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRCxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7SUFDWixhQUFhO0lBQ2IsT0FBK0I7UUFFL0IsT0FBTztZQUNMLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ2xELENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDUgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDYgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUnBjMDA3IGZyb20gJy4uLy4uL2dvb2dsZS9ycGMvc3RhdHVzLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVR5cGUwMDggZnJvbSAnLi4vLi4vZ29vZ2xlL3R5cGUvbGF0bG5nLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwOSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbW1vbi5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTAgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxMSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTIgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9zZXNzaW9uLnBiJztcbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnFhLkdldEFuc3dlclJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEdldEFuc3dlclJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ucWEuR2V0QW5zd2VyUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFuc3dlclJlcXVlc3QoKTtcbiAgICBHZXRBbnN3ZXJSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0QW5zd2VyUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5zZXNzaW9uSWQgPSBfaW5zdGFuY2Uuc2Vzc2lvbklkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5tYXhOdW1BbnN3ZXJzID0gX2luc3RhbmNlLm1heE51bUFuc3dlcnMgfHwgMDtcbiAgICBfaW5zdGFuY2UudGhyZXNob2xkUmVhZGVyID0gX2luc3RhbmNlLnRocmVzaG9sZFJlYWRlciB8fCAwO1xuICAgIF9pbnN0YW5jZS50aHJlc2hvbGRSZXRyaWV2ZXIgPSBfaW5zdGFuY2UudGhyZXNob2xkUmV0cmlldmVyIHx8IDA7XG4gICAgX2luc3RhbmNlLnRocmVzaG9sZE92ZXJhbGwgPSBfaW5zdGFuY2UudGhyZXNob2xkT3ZlcmFsbCB8fCAwO1xuICAgIF9pbnN0YW5jZS5yZWFkZXJNb2RlbE5hbWUgPSBfaW5zdGFuY2UucmVhZGVyTW9kZWxOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51cmxGaWx0ZXIgPSBfaW5zdGFuY2UudXJsRmlsdGVyIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldEFuc3dlclJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlc3Npb25JZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBuZXcgb25kZXdvTmx1MDEzLlRleHRJbnB1dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudGV4dCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxMy5UZXh0SW5wdXQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhOdW1BbnN3ZXJzID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS50aHJlc2hvbGRSZWFkZXIgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnRocmVzaG9sZFJldHJpZXZlciA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudGhyZXNob2xkT3ZlcmFsbCA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBfaW5zdGFuY2UucmVhZGVyTW9kZWxOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UudXJsRmlsdGVyID0gbmV3IFVybEZpbHRlcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXJsRmlsdGVyLFxuICAgICAgICAgICAgVXJsRmlsdGVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRBbnN3ZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0QW5zd2VyUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zZXNzaW9uSWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS50ZXh0IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDEzLlRleHRJbnB1dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhOdW1BbnN3ZXJzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMywgX2luc3RhbmNlLm1heE51bUFuc3dlcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVzaG9sZFJlYWRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS50aHJlc2hvbGRSZWFkZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVzaG9sZFJldHJpZXZlcikge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDUsIF9pbnN0YW5jZS50aHJlc2hvbGRSZXRyaWV2ZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRocmVzaG9sZE92ZXJhbGwpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCg2LCBfaW5zdGFuY2UudGhyZXNob2xkT3ZlcmFsbCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVhZGVyTW9kZWxOYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDcsIF9pbnN0YW5jZS5yZWFkZXJNb2RlbE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVybEZpbHRlcikge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIF9pbnN0YW5jZS51cmxGaWx0ZXIgYXMgYW55LFxuICAgICAgICBVcmxGaWx0ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHQ/OiBvbmRld29ObHUwMTMuVGV4dElucHV0O1xuICBwcml2YXRlIF9tYXhOdW1BbnN3ZXJzOiBudW1iZXI7XG4gIHByaXZhdGUgX3RocmVzaG9sZFJlYWRlcjogbnVtYmVyO1xuICBwcml2YXRlIF90aHJlc2hvbGRSZXRyaWV2ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGhyZXNob2xkT3ZlcmFsbDogbnVtYmVyO1xuICBwcml2YXRlIF9yZWFkZXJNb2RlbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXJsRmlsdGVyPzogVXJsRmlsdGVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0QW5zd2VyUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRBbnN3ZXJSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlc3Npb25JZCA9IF92YWx1ZS5zZXNzaW9uSWQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMy5UZXh0SW5wdXQoX3ZhbHVlLnRleHQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heE51bUFuc3dlcnMgPSBfdmFsdWUubWF4TnVtQW5zd2VycztcbiAgICB0aGlzLnRocmVzaG9sZFJlYWRlciA9IF92YWx1ZS50aHJlc2hvbGRSZWFkZXI7XG4gICAgdGhpcy50aHJlc2hvbGRSZXRyaWV2ZXIgPSBfdmFsdWUudGhyZXNob2xkUmV0cmlldmVyO1xuICAgIHRoaXMudGhyZXNob2xkT3ZlcmFsbCA9IF92YWx1ZS50aHJlc2hvbGRPdmVyYWxsO1xuICAgIHRoaXMucmVhZGVyTW9kZWxOYW1lID0gX3ZhbHVlLnJlYWRlck1vZGVsTmFtZTtcbiAgICB0aGlzLnVybEZpbHRlciA9IF92YWx1ZS51cmxGaWx0ZXJcbiAgICAgID8gbmV3IFVybEZpbHRlcihfdmFsdWUudXJsRmlsdGVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgR2V0QW5zd2VyUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uSWQ7XG4gIH1cbiAgc2V0IHNlc3Npb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogb25kZXdvTmx1MDEzLlRleHRJbnB1dCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IG9uZGV3b05sdTAxMy5UZXh0SW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heE51bUFuc3dlcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TnVtQW5zd2VycztcbiAgfVxuICBzZXQgbWF4TnVtQW5zd2Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TnVtQW5zd2VycyA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlc2hvbGRSZWFkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkUmVhZGVyO1xuICB9XG4gIHNldCB0aHJlc2hvbGRSZWFkZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RocmVzaG9sZFJlYWRlciA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlc2hvbGRSZXRyaWV2ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkUmV0cmlldmVyO1xuICB9XG4gIHNldCB0aHJlc2hvbGRSZXRyaWV2ZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RocmVzaG9sZFJldHJpZXZlciA9IHZhbHVlO1xuICB9XG4gIGdldCB0aHJlc2hvbGRPdmVyYWxsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZE92ZXJhbGw7XG4gIH1cbiAgc2V0IHRocmVzaG9sZE92ZXJhbGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RocmVzaG9sZE92ZXJhbGwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVhZGVyTW9kZWxOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRlck1vZGVsTmFtZTtcbiAgfVxuICBzZXQgcmVhZGVyTW9kZWxOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWFkZXJNb2RlbE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXJsRmlsdGVyKCk6IFVybEZpbHRlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VybEZpbHRlcjtcbiAgfVxuICBzZXQgdXJsRmlsdGVyKHZhbHVlOiBVcmxGaWx0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cmxGaWx0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBbnN3ZXJSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldEFuc3dlclJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBtYXhOdW1BbnN3ZXJzOiB0aGlzLm1heE51bUFuc3dlcnMsXG4gICAgICB0aHJlc2hvbGRSZWFkZXI6IHRoaXMudGhyZXNob2xkUmVhZGVyLFxuICAgICAgdGhyZXNob2xkUmV0cmlldmVyOiB0aGlzLnRocmVzaG9sZFJldHJpZXZlcixcbiAgICAgIHRocmVzaG9sZE92ZXJhbGw6IHRoaXMudGhyZXNob2xkT3ZlcmFsbCxcbiAgICAgIHJlYWRlck1vZGVsTmFtZTogdGhpcy5yZWFkZXJNb2RlbE5hbWUsXG4gICAgICB1cmxGaWx0ZXI6IHRoaXMudXJsRmlsdGVyID8gdGhpcy51cmxGaWx0ZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFuc3dlclJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXNzaW9uSWQ6IHRoaXMuc2Vzc2lvbklkLFxuICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIG1heE51bUFuc3dlcnM6IHRoaXMubWF4TnVtQW5zd2VycyxcbiAgICAgIHRocmVzaG9sZFJlYWRlcjogdGhpcy50aHJlc2hvbGRSZWFkZXIsXG4gICAgICB0aHJlc2hvbGRSZXRyaWV2ZXI6IHRoaXMudGhyZXNob2xkUmV0cmlldmVyLFxuICAgICAgdGhyZXNob2xkT3ZlcmFsbDogdGhpcy50aHJlc2hvbGRPdmVyYWxsLFxuICAgICAgcmVhZGVyTW9kZWxOYW1lOiB0aGlzLnJlYWRlck1vZGVsTmFtZSxcbiAgICAgIHVybEZpbHRlcjogdGhpcy51cmxGaWx0ZXIgPyB0aGlzLnVybEZpbHRlci50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEFuc3dlclJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdldEFuc3dlclJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHNlc3Npb25JZDogc3RyaW5nO1xuICAgIHRleHQ/OiBvbmRld29ObHUwMTMuVGV4dElucHV0LkFzT2JqZWN0O1xuICAgIG1heE51bUFuc3dlcnM6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRSZWFkZXI6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRSZXRyaWV2ZXI6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRPdmVyYWxsOiBudW1iZXI7XG4gICAgcmVhZGVyTW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgdXJsRmlsdGVyPzogVXJsRmlsdGVyLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldEFuc3dlclJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlc3Npb25JZDogc3RyaW5nO1xuICAgIHRleHQ6IG9uZGV3b05sdTAxMy5UZXh0SW5wdXQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIG1heE51bUFuc3dlcnM6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRSZWFkZXI6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRSZXRyaWV2ZXI6IG51bWJlcjtcbiAgICB0aHJlc2hvbGRPdmVyYWxsOiBudW1iZXI7XG4gICAgcmVhZGVyTW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgdXJsRmlsdGVyOiBVcmxGaWx0ZXIuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnFhLkdldEFuc3dlclJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRBbnN3ZXJSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5HZXRBbnN3ZXJSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFuc3dlclJlc3BvbnNlKCk7XG4gICAgR2V0QW5zd2VyUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRBbnN3ZXJSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5xdWVyeVJlc3VsdCA9IF9pbnN0YW5jZS5xdWVyeVJlc3VsdCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbnN3ZXJSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucXVlcnlSZXN1bHQgPSBuZXcgb25kZXdvTmx1MDEzLkRldGVjdEludGVudFJlc3BvbnNlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5xdWVyeVJlc3VsdCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0QW5zd2VyUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbnN3ZXJSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5xdWVyeVJlc3VsdCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5xdWVyeVJlc3VsdCBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9xdWVyeVJlc3VsdD86IG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldEFuc3dlclJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldEFuc3dlclJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnF1ZXJ5UmVzdWx0ID0gX3ZhbHVlLnF1ZXJ5UmVzdWx0XG4gICAgICA/IG5ldyBvbmRld29ObHUwMTMuRGV0ZWN0SW50ZW50UmVzcG9uc2UoX3ZhbHVlLnF1ZXJ5UmVzdWx0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgR2V0QW5zd2VyUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBxdWVyeVJlc3VsdCgpOiBvbmRld29ObHUwMTMuRGV0ZWN0SW50ZW50UmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVJlc3VsdDtcbiAgfVxuICBzZXQgcXVlcnlSZXN1bHQodmFsdWU6IG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3F1ZXJ5UmVzdWx0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0QW5zd2VyUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0QW5zd2VyUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeVJlc3VsdDogdGhpcy5xdWVyeVJlc3VsdCA/IHRoaXMucXVlcnlSZXN1bHQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFuc3dlclJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlSZXN1bHQ6IHRoaXMucXVlcnlSZXN1bHRcbiAgICAgICAgPyB0aGlzLnF1ZXJ5UmVzdWx0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QW5zd2VyUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdldEFuc3dlclJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBxdWVyeVJlc3VsdD86IG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbnN3ZXJSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcXVlcnlSZXN1bHQ6IG9uZGV3b05sdTAxMy5EZXRlY3RJbnRlbnRSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ucWEuUnVuU2NyYXBlclJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1blNjcmFwZXJSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnFhLlJ1blNjcmFwZXJSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUnVuU2NyYXBlclJlcXVlc3QoKTtcbiAgICBSdW5TY3JhcGVyUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFJ1blNjcmFwZXJSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnByb2plY3RJZHMgPSBfaW5zdGFuY2UucHJvamVjdElkcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFJ1blNjcmFwZXJSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UucHJvamVjdElkcyA9IF9pbnN0YW5jZS5wcm9qZWN0SWRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUnVuU2NyYXBlclJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBSdW5TY3JhcGVyUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wcm9qZWN0SWRzICYmIF9pbnN0YW5jZS5wcm9qZWN0SWRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5wcm9qZWN0SWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9qZWN0SWRzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFJ1blNjcmFwZXJSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJ1blNjcmFwZXJSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnByb2plY3RJZHMgPSAoX3ZhbHVlLnByb2plY3RJZHMgfHwgW10pLnNsaWNlKCk7XG4gICAgUnVuU2NyYXBlclJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwcm9qZWN0SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdElkcztcbiAgfVxuICBzZXQgcHJvamVjdElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcm9qZWN0SWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUnVuU2NyYXBlclJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUnVuU2NyYXBlclJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0SWRzOiAodGhpcy5wcm9qZWN0SWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUnVuU2NyYXBlclJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0SWRzOiAodGhpcy5wcm9qZWN0SWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSdW5TY3JhcGVyUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUnVuU2NyYXBlclJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHByb2plY3RJZHM6IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJ1blNjcmFwZXJSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwcm9qZWN0SWRzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5SdW5TY3JhcGVyUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFJ1blNjcmFwZXJSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5SdW5TY3JhcGVyUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSdW5TY3JhcGVyUmVzcG9uc2UoKTtcbiAgICBSdW5TY3JhcGVyUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBSdW5TY3JhcGVyUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2Uuc2NyYXBlckNvbnRhaW5lcnMgPSBfaW5zdGFuY2Uuc2NyYXBlckNvbnRhaW5lcnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBSdW5TY3JhcGVyUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBSdW5TY3JhcGVyUmVzcG9uc2UuU2NyYXBlckNvbnRhaW5lcigpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgUnVuU2NyYXBlclJlc3BvbnNlLlNjcmFwZXJDb250YWluZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnNjcmFwZXJDb250YWluZXJzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5zY3JhcGVyQ29udGFpbmVycyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJ1blNjcmFwZXJSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFJ1blNjcmFwZXJSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zY3JhcGVyQ29udGFpbmVycyAmJiBfaW5zdGFuY2Uuc2NyYXBlckNvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2Uuc2NyYXBlckNvbnRhaW5lcnMgYXMgYW55LFxuICAgICAgICBSdW5TY3JhcGVyUmVzcG9uc2UuU2NyYXBlckNvbnRhaW5lci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zY3JhcGVyQ29udGFpbmVycz86IFJ1blNjcmFwZXJSZXNwb25zZS5TY3JhcGVyQ29udGFpbmVyW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBSdW5TY3JhcGVyUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UnVuU2NyYXBlclJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNjcmFwZXJDb250YWluZXJzID0gKF92YWx1ZS5zY3JhcGVyQ29udGFpbmVycyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgUnVuU2NyYXBlclJlc3BvbnNlLlNjcmFwZXJDb250YWluZXIobSlcbiAgICApO1xuICAgIFJ1blNjcmFwZXJSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNjcmFwZXJDb250YWluZXJzKCk6IFJ1blNjcmFwZXJSZXNwb25zZS5TY3JhcGVyQ29udGFpbmVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zY3JhcGVyQ29udGFpbmVycztcbiAgfVxuICBzZXQgc2NyYXBlckNvbnRhaW5lcnMoXG4gICAgdmFsdWU6IFJ1blNjcmFwZXJSZXNwb25zZS5TY3JhcGVyQ29udGFpbmVyW10gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fc2NyYXBlckNvbnRhaW5lcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBSdW5TY3JhcGVyUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUnVuU2NyYXBlclJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NyYXBlckNvbnRhaW5lcnM6ICh0aGlzLnNjcmFwZXJDb250YWluZXJzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogUnVuU2NyYXBlclJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NyYXBlckNvbnRhaW5lcnM6ICh0aGlzLnNjcmFwZXJDb250YWluZXJzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSdW5TY3JhcGVyUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFJ1blNjcmFwZXJSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc2NyYXBlckNvbnRhaW5lcnM/OiBSdW5TY3JhcGVyUmVzcG9uc2UuU2NyYXBlckNvbnRhaW5lci5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJ1blNjcmFwZXJSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc2NyYXBlckNvbnRhaW5lcnM6XG4gICAgICB8IFJ1blNjcmFwZXJSZXNwb25zZS5TY3JhcGVyQ29udGFpbmVyLkFzUHJvdG9idWZKU09OW11cbiAgICAgIHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ucWEuUnVuU2NyYXBlclJlc3BvbnNlLlNjcmFwZXJDb250YWluZXJcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBTY3JhcGVyQ29udGFpbmVyIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdvbmRld28ucWEuUnVuU2NyYXBlclJlc3BvbnNlLlNjcmFwZXJDb250YWluZXInO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTY3JhcGVyQ29udGFpbmVyKCk7XG4gICAgICBTY3JhcGVyQ29udGFpbmVyLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTY3JhcGVyQ29udGFpbmVyKSB7XG4gICAgICBfaW5zdGFuY2UuY29udGFpbmVyTmFtZSA9IF9pbnN0YW5jZS5jb250YWluZXJOYW1lIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmNvbnRhaW5lcklkID0gX2luc3RhbmNlLmNvbnRhaW5lcklkIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFNjcmFwZXJDb250YWluZXIsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBfaW5zdGFuY2UuY29udGFpbmVyTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbnRhaW5lcklkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBTY3JhcGVyQ29udGFpbmVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICBfaW5zdGFuY2U6IFNjcmFwZXJDb250YWluZXIsXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UuY29udGFpbmVyTmFtZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5jb250YWluZXJOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuY29udGFpbmVySWQpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuY29udGFpbmVySWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbnRhaW5lck5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9jb250YWluZXJJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2NyYXBlckNvbnRhaW5lciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2NyYXBlckNvbnRhaW5lci5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuY29udGFpbmVyTmFtZSA9IF92YWx1ZS5jb250YWluZXJOYW1lO1xuICAgICAgdGhpcy5jb250YWluZXJJZCA9IF92YWx1ZS5jb250YWluZXJJZDtcbiAgICAgIFNjcmFwZXJDb250YWluZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgY29udGFpbmVyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lck5hbWU7XG4gICAgfVxuICAgIHNldCBjb250YWluZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lck5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvbnRhaW5lcklkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVySWQ7XG4gICAgfVxuICAgIHNldCBjb250YWluZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJJZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBTY3JhcGVyQ29udGFpbmVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IFNjcmFwZXJDb250YWluZXIuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFpbmVyTmFtZTogdGhpcy5jb250YWluZXJOYW1lLFxuICAgICAgICBjb250YWluZXJJZDogdGhpcy5jb250YWluZXJJZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBTY3JhcGVyQ29udGFpbmVyLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lck5hbWU6IHRoaXMuY29udGFpbmVyTmFtZSxcbiAgICAgICAgY29udGFpbmVySWQ6IHRoaXMuY29udGFpbmVySWRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgU2NyYXBlckNvbnRhaW5lciB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNjcmFwZXJDb250YWluZXJcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGNvbnRhaW5lck5hbWU6IHN0cmluZztcbiAgICAgIGNvbnRhaW5lcklkOiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2NyYXBlckNvbnRhaW5lclxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgY29udGFpbmVyTmFtZTogc3RyaW5nO1xuICAgICAgY29udGFpbmVySWQ6IHN0cmluZztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ucWEuUnVuVHJhaW5pbmdSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgUnVuVHJhaW5pbmdSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5SdW5UcmFpbmluZ1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUnVuVHJhaW5pbmdSZXNwb25zZSgpO1xuICAgIFJ1blRyYWluaW5nUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBSdW5UcmFpbmluZ1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmYxID0gX2luc3RhbmNlLmYxIHx8IDA7XG4gICAgX2luc3RhbmNlLmFjY3VyYWN5ID0gX2luc3RhbmNlLmFjY3VyYWN5IHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBSdW5UcmFpbmluZ1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5mMSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuYWNjdXJhY3kgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUnVuVHJhaW5pbmdSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFJ1blRyYWluaW5nUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZjEpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgxLCBfaW5zdGFuY2UuZjEpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFjY3VyYWN5KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLmFjY3VyYWN5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mMTogbnVtYmVyO1xuICBwcml2YXRlIF9hY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgUnVuVHJhaW5pbmdSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxSdW5UcmFpbmluZ1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmYxID0gX3ZhbHVlLmYxO1xuICAgIHRoaXMuYWNjdXJhY3kgPSBfdmFsdWUuYWNjdXJhY3k7XG4gICAgUnVuVHJhaW5pbmdSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGYxKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2YxO1xuICB9XG4gIHNldCBmMSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZjEgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWNjdXJhY3koKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjdXJhY3k7XG4gIH1cbiAgc2V0IGFjY3VyYWN5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hY2N1cmFjeSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJ1blRyYWluaW5nUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogUnVuVHJhaW5pbmdSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGYxOiB0aGlzLmYxLFxuICAgICAgYWNjdXJhY3k6IHRoaXMuYWNjdXJhY3lcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBSdW5UcmFpbmluZ1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZjE6IHRoaXMuZjEsXG4gICAgICBhY2N1cmFjeTogdGhpcy5hY2N1cmFjeVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUnVuVHJhaW5pbmdSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUnVuVHJhaW5pbmdSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZjE6IG51bWJlcjtcbiAgICBhY2N1cmFjeTogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFJ1blRyYWluaW5nUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGYxOiBudW1iZXI7XG4gICAgYWNjdXJhY3k6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5VcmxGaWx0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFVybEZpbHRlciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5VcmxGaWx0ZXInO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVcmxGaWx0ZXIoKTtcbiAgICBVcmxGaWx0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVcmxGaWx0ZXIpIHtcbiAgICBfaW5zdGFuY2UuYWxsb3dlZFZhbHVlcyA9IF9pbnN0YW5jZS5hbGxvd2VkVmFsdWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5yZWdleEZpbHRlckluY2x1ZGUgPSBfaW5zdGFuY2UucmVnZXhGaWx0ZXJJbmNsdWRlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5yZWdleEZpbHRlckV4Y2x1ZGUgPSBfaW5zdGFuY2UucmVnZXhGaWx0ZXJFeGNsdWRlIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVXJsRmlsdGVyLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuYWxsb3dlZFZhbHVlcyA9IF9pbnN0YW5jZS5hbGxvd2VkVmFsdWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnJlZ2V4RmlsdGVySW5jbHVkZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnJlZ2V4RmlsdGVyRXhjbHVkZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXJsRmlsdGVyLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogVXJsRmlsdGVyLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoX2luc3RhbmNlLmFsbG93ZWRWYWx1ZXMgJiYgX2luc3RhbmNlLmFsbG93ZWRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLmFsbG93ZWRWYWx1ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnJlZ2V4RmlsdGVySW5jbHVkZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucmVnZXhGaWx0ZXJJbmNsdWRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZWdleEZpbHRlckV4Y2x1ZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnJlZ2V4RmlsdGVyRXhjbHVkZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWxsb3dlZFZhbHVlczogc3RyaW5nW107XG4gIHByaXZhdGUgX3JlZ2V4RmlsdGVySW5jbHVkZTogc3RyaW5nO1xuICBwcml2YXRlIF9yZWdleEZpbHRlckV4Y2x1ZGU6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFVybEZpbHRlciB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVcmxGaWx0ZXIuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWxsb3dlZFZhbHVlcyA9IChfdmFsdWUuYWxsb3dlZFZhbHVlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnJlZ2V4RmlsdGVySW5jbHVkZSA9IF92YWx1ZS5yZWdleEZpbHRlckluY2x1ZGU7XG4gICAgdGhpcy5yZWdleEZpbHRlckV4Y2x1ZGUgPSBfdmFsdWUucmVnZXhGaWx0ZXJFeGNsdWRlO1xuICAgIFVybEZpbHRlci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFsbG93ZWRWYWx1ZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkVmFsdWVzO1xuICB9XG4gIHNldCBhbGxvd2VkVmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FsbG93ZWRWYWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVnZXhGaWx0ZXJJbmNsdWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2V4RmlsdGVySW5jbHVkZTtcbiAgfVxuICBzZXQgcmVnZXhGaWx0ZXJJbmNsdWRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdleEZpbHRlckluY2x1ZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVnZXhGaWx0ZXJFeGNsdWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2V4RmlsdGVyRXhjbHVkZTtcbiAgfVxuICBzZXQgcmVnZXhGaWx0ZXJFeGNsdWRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdleEZpbHRlckV4Y2x1ZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVcmxGaWx0ZXIuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVXJsRmlsdGVyLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dlZFZhbHVlczogKHRoaXMuYWxsb3dlZFZhbHVlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHJlZ2V4RmlsdGVySW5jbHVkZTogdGhpcy5yZWdleEZpbHRlckluY2x1ZGUsXG4gICAgICByZWdleEZpbHRlckV4Y2x1ZGU6IHRoaXMucmVnZXhGaWx0ZXJFeGNsdWRlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVXJsRmlsdGVyLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dlZFZhbHVlczogKHRoaXMuYWxsb3dlZFZhbHVlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHJlZ2V4RmlsdGVySW5jbHVkZTogdGhpcy5yZWdleEZpbHRlckluY2x1ZGUsXG4gICAgICByZWdleEZpbHRlckV4Y2x1ZGU6IHRoaXMucmVnZXhGaWx0ZXJFeGNsdWRlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVcmxGaWx0ZXIge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVybEZpbHRlclxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgYWxsb3dlZFZhbHVlczogc3RyaW5nW107XG4gICAgcmVnZXhGaWx0ZXJJbmNsdWRlOiBzdHJpbmc7XG4gICAgcmVnZXhGaWx0ZXJFeGNsdWRlOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVXJsRmlsdGVyXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhbGxvd2VkVmFsdWVzOiBzdHJpbmdbXTtcbiAgICByZWdleEZpbHRlckluY2x1ZGU6IHN0cmluZztcbiAgICByZWdleEZpbHRlckV4Y2x1ZGU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5HZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLnFhLkdldFNlcnZlclN0YXRlUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlKCk7XG4gICAgR2V0U2VydmVyU3RhdGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdldFNlcnZlclN0YXRlUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2Uuc2VydmVySXNSZWFkeSA9IF9pbnN0YW5jZS5zZXJ2ZXJJc1JlYWR5IHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0U2VydmVyU3RhdGVSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2VydmVySXNSZWFkeSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFNlcnZlclN0YXRlUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnNlcnZlcklzUmVhZHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5zZXJ2ZXJJc1JlYWR5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXJ2ZXJJc1JlYWR5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0U2VydmVyU3RhdGVSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNlcnZlcklzUmVhZHkgPSBfdmFsdWUuc2VydmVySXNSZWFkeTtcbiAgICBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc2VydmVySXNSZWFkeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVySXNSZWFkeTtcbiAgfVxuICBzZXQgc2VydmVySXNSZWFkeSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlcnZlcklzUmVhZHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldFNlcnZlclN0YXRlUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJ2ZXJJc1JlYWR5OiB0aGlzLnNlcnZlcklzUmVhZHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VydmVySXNSZWFkeTogdGhpcy5zZXJ2ZXJJc1JlYWR5XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzZXJ2ZXJJc1JlYWR5OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldFNlcnZlclN0YXRlUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlcnZlcklzUmVhZHk6IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ucWEuTGlzdFByb2plY3RJZHNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgTGlzdFByb2plY3RJZHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5MaXN0UHJvamVjdElkc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFByb2plY3RJZHNSZXNwb25zZSgpO1xuICAgIExpc3RQcm9qZWN0SWRzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0UHJvamVjdElkc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLnByb2plY3RJZHMgPSBfaW5zdGFuY2UucHJvamVjdElkcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RQcm9qZWN0SWRzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5wcm9qZWN0SWRzID0gX2luc3RhbmNlLnByb2plY3RJZHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0UHJvamVjdElkc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdFByb2plY3RJZHNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wcm9qZWN0SWRzICYmIF9pbnN0YW5jZS5wcm9qZWN0SWRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5wcm9qZWN0SWRzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9qZWN0SWRzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIExpc3RQcm9qZWN0SWRzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFByb2plY3RJZHNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wcm9qZWN0SWRzID0gKF92YWx1ZS5wcm9qZWN0SWRzIHx8IFtdKS5zbGljZSgpO1xuICAgIExpc3RQcm9qZWN0SWRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwcm9qZWN0SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdElkcztcbiAgfVxuICBzZXQgcHJvamVjdElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcm9qZWN0SWRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFByb2plY3RJZHNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBMaXN0UHJvamVjdElkc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdElkczogKHRoaXMucHJvamVjdElkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IExpc3RQcm9qZWN0SWRzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0SWRzOiAodGhpcy5wcm9qZWN0SWRzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UHJvamVjdElkc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UHJvamVjdElkc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwcm9qZWN0SWRzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0UHJvamVjdElkc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwcm9qZWN0SWRzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5HZXRQcm9qZWN0Q29uZmlnUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ucWEuR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRQcm9qZWN0Q29uZmlnUmVxdWVzdCgpO1xuICAgIEdldFByb2plY3RDb25maWdSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucHJvamVjdElkID0gX2luc3RhbmNlLnByb2plY3RJZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldFByb2plY3RDb25maWdSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9qZWN0SWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFByb2plY3RDb25maWdSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucHJvamVjdElkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wcm9qZWN0SWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Byb2plY3RJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0UHJvamVjdENvbmZpZ1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucHJvamVjdElkID0gX3ZhbHVlLnByb2plY3RJZDtcbiAgICBHZXRQcm9qZWN0Q29uZmlnUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHByb2plY3RJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0SWQ7XG4gIH1cbiAgc2V0IHByb2plY3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvamVjdElkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0UHJvamVjdENvbmZpZ1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0UHJvamVjdENvbmZpZ1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0SWQ6IHRoaXMucHJvamVjdElkXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRQcm9qZWN0Q29uZmlnUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0UHJvamVjdENvbmZpZ1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHByb2plY3RJZDogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldFByb2plY3RDb25maWdSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5HZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEdldFByb2plY3RDb25maWdSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5HZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UoKTtcbiAgICBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuY29uZmlnU2VyaWFsaXplZCA9IF9pbnN0YW5jZS5jb25maWdTZXJpYWxpemVkIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWdTZXJpYWxpemVkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY29uZmlnU2VyaWFsaXplZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuY29uZmlnU2VyaWFsaXplZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnU2VyaWFsaXplZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldFByb2plY3RDb25maWdSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jb25maWdTZXJpYWxpemVkID0gX3ZhbHVlLmNvbmZpZ1NlcmlhbGl6ZWQ7XG4gICAgR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29uZmlnU2VyaWFsaXplZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdTZXJpYWxpemVkO1xuICB9XG4gIHNldCBjb25maWdTZXJpYWxpemVkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25maWdTZXJpYWxpemVkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldFByb2plY3RDb25maWdSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1NlcmlhbGl6ZWQ6IHRoaXMuY29uZmlnU2VyaWFsaXplZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldFByb2plY3RDb25maWdSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ1NlcmlhbGl6ZWQ6IHRoaXMuY29uZmlnU2VyaWFsaXplZFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZ1NlcmlhbGl6ZWQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNvbmZpZ1NlcmlhbGl6ZWQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5VcGRhdGVEYXRhYmFzZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZURhdGFiYXNlUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5xYS5VcGRhdGVEYXRhYmFzZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVcGRhdGVEYXRhYmFzZVJlcXVlc3QoKTtcbiAgICBVcGRhdGVEYXRhYmFzZVJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBVcGRhdGVEYXRhYmFzZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucHJvamVjdElkcyA9IF9pbnN0YW5jZS5wcm9qZWN0SWRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVXBkYXRlRGF0YWJhc2VSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UucHJvamVjdElkcyA9IF9pbnN0YW5jZS5wcm9qZWN0SWRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlRGF0YWJhc2VSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVXBkYXRlRGF0YWJhc2VSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnByb2plY3RJZHMgJiYgX2luc3RhbmNlLnByb2plY3RJZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnByb2plY3RJZHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Byb2plY3RJZHM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVXBkYXRlRGF0YWJhc2VSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZURhdGFiYXNlUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wcm9qZWN0SWRzID0gKF92YWx1ZS5wcm9qZWN0SWRzIHx8IFtdKS5zbGljZSgpO1xuICAgIFVwZGF0ZURhdGFiYXNlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHByb2plY3RJZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0SWRzO1xuICB9XG4gIHNldCBwcm9qZWN0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Byb2plY3RJZHMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVcGRhdGVEYXRhYmFzZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVXBkYXRlRGF0YWJhc2VSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdElkczogKHRoaXMucHJvamVjdElkcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFVwZGF0ZURhdGFiYXNlUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RJZHM6ICh0aGlzLnByb2plY3RJZHMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZURhdGFiYXNlUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlRGF0YWJhc2VSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwcm9qZWN0SWRzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVEYXRhYmFzZVJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHByb2plY3RJZHM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLnFhLlVwZGF0ZURhdGFiYXNlUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZURhdGFiYXNlUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ucWEuVXBkYXRlRGF0YWJhc2VSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVwZGF0ZURhdGFiYXNlUmVzcG9uc2UoKTtcbiAgICBVcGRhdGVEYXRhYmFzZVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVXBkYXRlRGF0YWJhc2VSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBVcGRhdGVEYXRhYmFzZVJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlRGF0YWJhc2VSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFVwZGF0ZURhdGFiYXNlUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBVcGRhdGVEYXRhYmFzZVJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZURhdGFiYXNlUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IChfdmFsdWUuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBVcGRhdGVEYXRhYmFzZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZXM7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZURhdGFiYXNlUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVXBkYXRlRGF0YWJhc2VSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yTWVzc2FnZXM6ICh0aGlzLmVycm9yTWVzc2FnZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBVcGRhdGVEYXRhYmFzZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXBkYXRlRGF0YWJhc2VSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlRGF0YWJhc2VSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgVXBkYXRlRGF0YWJhc2VSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG4gIH1cbn1cbiJdfQ==