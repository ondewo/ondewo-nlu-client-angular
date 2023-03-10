import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu010 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/entity-type.pb';
export var Mode;
(function (Mode) {
    Mode[Mode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Mode[Mode["EXCLUSIVE"] = 1] = "EXCLUSIVE";
    Mode[Mode["INCLUSIVE"] = 2] = "INCLUSIVE";
})(Mode || (Mode = {}));
export var IntentAlgorithms;
(function (IntentAlgorithms) {
    IntentAlgorithms[IntentAlgorithms["OndewoIntentExactContextDetector"] = 0] = "OndewoIntentExactContextDetector";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentExactMatch"] = 1] = "OndewoIntentExactMatch";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentNamedExactMatch"] = 2] = "OndewoIntentNamedExactMatch";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentSimilarityMatch"] = 3] = "OndewoIntentSimilarityMatch";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentNamedSimilarityMatch"] = 4] = "OndewoIntentNamedSimilarityMatch";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentBertClassifier"] = 7] = "OndewoIntentBertClassifier";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentMetaClassifier"] = 8] = "OndewoIntentMetaClassifier";
    IntentAlgorithms[IntentAlgorithms["IntentExitDetector"] = 10] = "IntentExitDetector";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentRankingMatch"] = 11] = "OndewoIntentRankingMatch";
    IntentAlgorithms[IntentAlgorithms["OndewoWeightedEnsemble"] = 13] = "OndewoWeightedEnsemble";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentExitDetector"] = 14] = "OndewoIntentExitDetector";
    IntentAlgorithms[IntentAlgorithms["OndewoIntentParameterMatch"] = 15] = "OndewoIntentParameterMatch";
})(IntentAlgorithms || (IntentAlgorithms = {}));
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesRequest
 */
export class ExtractEntitiesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.text = _value.text;
        this.languageCode = _value.languageCode;
        this.intentName = _value.intentName;
        ExtractEntitiesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExtractEntitiesRequest();
        ExtractEntitiesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.text = _instance.text || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentName = _instance.intentName || '';
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
                    _instance.text = _reader.readString();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.intentName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExtractEntitiesRequest.refineValues(_instance);
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
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.intentName) {
            _writer.writeString(4, _instance.intentName);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
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
    get intentName() {
        return this._intentName;
    }
    set intentName(value) {
        this._intentName = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExtractEntitiesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            text: this.text,
            languageCode: this.languageCode,
            intentName: this.intentName
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
            text: this.text,
            languageCode: this.languageCode,
            intentName: this.intentName
        };
    }
}
ExtractEntitiesRequest.id = 'ondewo.nlu.ExtractEntitiesRequest';
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesFuzzyRequest
 */
export class ExtractEntitiesFuzzyRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesFuzzyRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.text = _value.text;
        this.potentialEntities = (_value.potentialEntities || []).map(m => new EntityTypeFuzzyNerConfig(m));
        this.minimalScore = _value.minimalScore;
        this.allowOverlaps = _value.allowOverlaps;
        ExtractEntitiesFuzzyRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExtractEntitiesFuzzyRequest();
        ExtractEntitiesFuzzyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.text = _instance.text || '';
        _instance.potentialEntities = _instance.potentialEntities || [];
        _instance.minimalScore = _instance.minimalScore || 0;
        _instance.allowOverlaps = _instance.allowOverlaps || false;
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
                    _instance.text = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new EntityTypeFuzzyNerConfig();
                    _reader.readMessage(messageInitializer3, EntityTypeFuzzyNerConfig.deserializeBinaryFromReader);
                    (_instance.potentialEntities =
                        _instance.potentialEntities || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.minimalScore = _reader.readFloat();
                    break;
                case 5:
                    _instance.allowOverlaps = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExtractEntitiesFuzzyRequest.refineValues(_instance);
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
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
        if (_instance.potentialEntities && _instance.potentialEntities.length) {
            _writer.writeRepeatedMessage(3, _instance.potentialEntities, EntityTypeFuzzyNerConfig.serializeBinaryToWriter);
        }
        if (_instance.minimalScore) {
            _writer.writeFloat(4, _instance.minimalScore);
        }
        if (_instance.allowOverlaps) {
            _writer.writeBool(5, _instance.allowOverlaps);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get potentialEntities() {
        return this._potentialEntities;
    }
    set potentialEntities(value) {
        this._potentialEntities = value;
    }
    get minimalScore() {
        return this._minimalScore;
    }
    set minimalScore(value) {
        this._minimalScore = value;
    }
    get allowOverlaps() {
        return this._allowOverlaps;
    }
    set allowOverlaps(value) {
        this._allowOverlaps = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExtractEntitiesFuzzyRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            text: this.text,
            potentialEntities: (this.potentialEntities || []).map(m => m.toObject()),
            minimalScore: this.minimalScore,
            allowOverlaps: this.allowOverlaps
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
            text: this.text,
            potentialEntities: (this.potentialEntities || []).map(m => m.toProtobufJSON(options)),
            minimalScore: this.minimalScore,
            allowOverlaps: this.allowOverlaps
        };
    }
}
ExtractEntitiesFuzzyRequest.id = 'ondewo.nlu.ExtractEntitiesFuzzyRequest';
/**
 * Message implementation for ondewo.nlu.EntityTypeFuzzyNerConfig
 */
export class EntityTypeFuzzyNerConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeFuzzyNerConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entityType = _value.entityType
            ? new ondewoNlu011.EntityType(_value.entityType)
            : undefined;
        this.minimalScore = _value.minimalScore;
        this.entityValues = (_value.entityValues || []).slice();
        this.algorithm = _value.algorithm;
        this.allowOverlaps = _value.allowOverlaps;
        EntityTypeFuzzyNerConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EntityTypeFuzzyNerConfig();
        EntityTypeFuzzyNerConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entityType = _instance.entityType || undefined;
        _instance.minimalScore = _instance.minimalScore || 0;
        _instance.entityValues = _instance.entityValues || [];
        _instance.algorithm = _instance.algorithm || 0;
        _instance.allowOverlaps = _instance.allowOverlaps || false;
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
                    _instance.entityType = new ondewoNlu011.EntityType();
                    _reader.readMessage(_instance.entityType, ondewoNlu011.EntityType.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.minimalScore = _reader.readFloat();
                    break;
                case 3:
                    (_instance.entityValues = _instance.entityValues || []).push(_reader.readString());
                    break;
                case 4:
                    _instance.algorithm = _reader.readEnum();
                    break;
                case 5:
                    _instance.allowOverlaps = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        EntityTypeFuzzyNerConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entityType) {
            _writer.writeMessage(1, _instance.entityType, ondewoNlu011.EntityType.serializeBinaryToWriter);
        }
        if (_instance.minimalScore) {
            _writer.writeFloat(2, _instance.minimalScore);
        }
        if (_instance.entityValues && _instance.entityValues.length) {
            _writer.writeRepeatedString(3, _instance.entityValues);
        }
        if (_instance.algorithm) {
            _writer.writeEnum(4, _instance.algorithm);
        }
        if (_instance.allowOverlaps) {
            _writer.writeBool(5, _instance.allowOverlaps);
        }
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    get minimalScore() {
        return this._minimalScore;
    }
    set minimalScore(value) {
        this._minimalScore = value;
    }
    get entityValues() {
        return this._entityValues;
    }
    set entityValues(value) {
        this._entityValues = value;
    }
    get algorithm() {
        return this._algorithm;
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    get allowOverlaps() {
        return this._allowOverlaps;
    }
    set allowOverlaps(value) {
        this._allowOverlaps = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EntityTypeFuzzyNerConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entityType: this.entityType ? this.entityType.toObject() : undefined,
            minimalScore: this.minimalScore,
            entityValues: (this.entityValues || []).slice(),
            algorithm: this.algorithm,
            allowOverlaps: this.allowOverlaps
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
            entityType: this.entityType
                ? this.entityType.toProtobufJSON(options)
                : null,
            minimalScore: this.minimalScore,
            entityValues: (this.entityValues || []).slice(),
            algorithm: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm[this.algorithm === null || this.algorithm === undefined
                ? 0
                : this.algorithm],
            allowOverlaps: this.allowOverlaps
        };
    }
}
EntityTypeFuzzyNerConfig.id = 'ondewo.nlu.EntityTypeFuzzyNerConfig';
(function (EntityTypeFuzzyNerConfig) {
    let FuzzyNerAlgorithm;
    (function (FuzzyNerAlgorithm) {
        FuzzyNerAlgorithm[FuzzyNerAlgorithm["PREFILTER_LEVENSHTEIN"] = 0] = "PREFILTER_LEVENSHTEIN";
        FuzzyNerAlgorithm[FuzzyNerAlgorithm["LOCAL_MAXIMUM"] = 1] = "LOCAL_MAXIMUM";
    })(FuzzyNerAlgorithm = EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm || (EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm = {}));
})(EntityTypeFuzzyNerConfig || (EntityTypeFuzzyNerConfig = {}));
/**
 * Message implementation for ondewo.nlu.EntityDetected
 */
export class EntityDetected {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityDetected to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entity = _value.entity
            ? new ondewoNlu010.Intent.TrainingPhrase.Entity(_value.entity)
            : undefined;
        this.extractionMethod = _value.extractionMethod;
        this.score = _value.score;
        EntityDetected.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EntityDetected();
        EntityDetected.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entity = _instance.entity || undefined;
        _instance.extractionMethod = _instance.extractionMethod || '';
        _instance.score = _instance.score || 0;
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
                    _instance.entity = new ondewoNlu010.Intent.TrainingPhrase.Entity();
                    _reader.readMessage(_instance.entity, ondewoNlu010.Intent.TrainingPhrase.Entity
                        .deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.extractionMethod = _reader.readString();
                    break;
                case 3:
                    _instance.score = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        EntityDetected.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entity) {
            _writer.writeMessage(1, _instance.entity, ondewoNlu010.Intent.TrainingPhrase.Entity.serializeBinaryToWriter);
        }
        if (_instance.extractionMethod) {
            _writer.writeString(2, _instance.extractionMethod);
        }
        if (_instance.score) {
            _writer.writeFloat(3, _instance.score);
        }
    }
    get entity() {
        return this._entity;
    }
    set entity(value) {
        this._entity = value;
    }
    get extractionMethod() {
        return this._extractionMethod;
    }
    set extractionMethod(value) {
        this._extractionMethod = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EntityDetected.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entity: this.entity ? this.entity.toObject() : undefined,
            extractionMethod: this.extractionMethod,
            score: this.score
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
            entity: this.entity ? this.entity.toProtobufJSON(options) : null,
            extractionMethod: this.extractionMethod,
            score: this.score
        };
    }
}
EntityDetected.id = 'ondewo.nlu.EntityDetected';
/**
 * Message implementation for ondewo.nlu.ExtractEntitiesResponse
 */
export class ExtractEntitiesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ExtractEntitiesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entitiesDetected = (_value.entitiesDetected || []).map(m => new EntityDetected(m));
        this.text = _value.text;
        ExtractEntitiesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ExtractEntitiesResponse();
        ExtractEntitiesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entitiesDetected = _instance.entitiesDetected || [];
        _instance.text = _instance.text || '';
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
                    const messageInitializer1 = new EntityDetected();
                    _reader.readMessage(messageInitializer1, EntityDetected.deserializeBinaryFromReader);
                    (_instance.entitiesDetected = _instance.entitiesDetected || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.text = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ExtractEntitiesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entitiesDetected && _instance.entitiesDetected.length) {
            _writer.writeRepeatedMessage(1, _instance.entitiesDetected, EntityDetected.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
    }
    get entitiesDetected() {
        return this._entitiesDetected;
    }
    set entitiesDetected(value) {
        this._entitiesDetected = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ExtractEntitiesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entitiesDetected: (this.entitiesDetected || []).map(m => m.toObject()),
            text: this.text
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
            entitiesDetected: (this.entitiesDetected || []).map(m => m.toProtobufJSON(options)),
            text: this.text
        };
    }
}
ExtractEntitiesResponse.id = 'ondewo.nlu.ExtractEntitiesResponse';
/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesRequest
 */
export class GetAlternativeSentencesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeSentencesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.config = _value.config
            ? new DataEnrichmentConfig(_value.config)
            : undefined;
        this.sentence = _value.sentence;
        this.languageCode = _value.languageCode;
        this.parent = _value.parent;
        this.protectedWords = (_value.protectedWords || []).slice();
        this.wordsToChange = (_value.wordsToChange || []).slice();
        GetAlternativeSentencesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAlternativeSentencesRequest();
        GetAlternativeSentencesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.config = _instance.config || undefined;
        _instance.sentence = _instance.sentence || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.parent = _instance.parent || '';
        _instance.protectedWords = _instance.protectedWords || [];
        _instance.wordsToChange = _instance.wordsToChange || [];
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
                    _instance.config = new DataEnrichmentConfig();
                    _reader.readMessage(_instance.config, DataEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.sentence = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.parent = _reader.readString();
                    break;
                case 6:
                    (_instance.protectedWords = _instance.protectedWords || []).push(_reader.readString());
                    break;
                case 7:
                    (_instance.wordsToChange = _instance.wordsToChange || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAlternativeSentencesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.config) {
            _writer.writeMessage(1, _instance.config, DataEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.sentence) {
            _writer.writeString(2, _instance.sentence);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.parent) {
            _writer.writeString(5, _instance.parent);
        }
        if (_instance.protectedWords && _instance.protectedWords.length) {
            _writer.writeRepeatedString(6, _instance.protectedWords);
        }
        if (_instance.wordsToChange && _instance.wordsToChange.length) {
            _writer.writeRepeatedString(7, _instance.wordsToChange);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get sentence() {
        return this._sentence;
    }
    set sentence(value) {
        this._sentence = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get protectedWords() {
        return this._protectedWords;
    }
    set protectedWords(value) {
        this._protectedWords = value;
    }
    get wordsToChange() {
        return this._wordsToChange;
    }
    set wordsToChange(value) {
        this._wordsToChange = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAlternativeSentencesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            sentence: this.sentence,
            languageCode: this.languageCode,
            parent: this.parent,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice()
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
            config: this.config ? this.config.toProtobufJSON(options) : null,
            sentence: this.sentence,
            languageCode: this.languageCode,
            parent: this.parent,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice()
        };
    }
}
GetAlternativeSentencesRequest.id = 'ondewo.nlu.GetAlternativeSentencesRequest';
/**
 * Message implementation for ondewo.nlu.GenerateUserSaysRequest
 */
export class GenerateUserSaysRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateUserSaysRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCode = _value.languageCode;
        this.parent = _value.parent;
        this.nRepeatSynonym = _value.nRepeatSynonym;
        this.branch = _value.branch;
        GenerateUserSaysRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GenerateUserSaysRequest();
        GenerateUserSaysRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCode = _instance.languageCode || '';
        _instance.parent = _instance.parent || '';
        _instance.nRepeatSynonym = _instance.nRepeatSynonym || 0;
        _instance.branch = _instance.branch || '';
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
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.parent = _reader.readString();
                    break;
                case 6:
                    _instance.nRepeatSynonym = _reader.readInt32();
                    break;
                case 8:
                    _instance.branch = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GenerateUserSaysRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.parent) {
            _writer.writeString(5, _instance.parent);
        }
        if (_instance.nRepeatSynonym) {
            _writer.writeInt32(6, _instance.nRepeatSynonym);
        }
        if (_instance.branch) {
            _writer.writeString(8, _instance.branch);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get nRepeatSynonym() {
        return this._nRepeatSynonym;
    }
    set nRepeatSynonym(value) {
        this._nRepeatSynonym = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GenerateUserSaysRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch
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
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch
        };
    }
}
GenerateUserSaysRequest.id = 'ondewo.nlu.GenerateUserSaysRequest';
/**
 * Message implementation for ondewo.nlu.GenerateResponsesRequest
 */
export class GenerateResponsesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateResponsesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.languageCode = _value.languageCode;
        this.parent = _value.parent;
        this.nRepeatSynonym = _value.nRepeatSynonym;
        this.branch = _value.branch;
        this.dropUnknownParameters = _value.dropUnknownParameters;
        GenerateResponsesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GenerateResponsesRequest();
        GenerateResponsesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.languageCode = _instance.languageCode || '';
        _instance.parent = _instance.parent || '';
        _instance.nRepeatSynonym = _instance.nRepeatSynonym || 0;
        _instance.branch = _instance.branch || '';
        _instance.dropUnknownParameters = _instance.dropUnknownParameters || false;
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
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.parent = _reader.readString();
                    break;
                case 7:
                    _instance.nRepeatSynonym = _reader.readInt32();
                    break;
                case 8:
                    _instance.branch = _reader.readString();
                    break;
                case 9:
                    _instance.dropUnknownParameters = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GenerateResponsesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.parent) {
            _writer.writeString(5, _instance.parent);
        }
        if (_instance.nRepeatSynonym) {
            _writer.writeInt32(7, _instance.nRepeatSynonym);
        }
        if (_instance.branch) {
            _writer.writeString(8, _instance.branch);
        }
        if (_instance.dropUnknownParameters) {
            _writer.writeBool(9, _instance.dropUnknownParameters);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get nRepeatSynonym() {
        return this._nRepeatSynonym;
    }
    set nRepeatSynonym(value) {
        this._nRepeatSynonym = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    get dropUnknownParameters() {
        return this._dropUnknownParameters;
    }
    set dropUnknownParameters(value) {
        this._dropUnknownParameters = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GenerateResponsesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch,
            dropUnknownParameters: this.dropUnknownParameters
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
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch,
            dropUnknownParameters: this.dropUnknownParameters
        };
    }
}
GenerateResponsesRequest.id = 'ondewo.nlu.GenerateResponsesRequest';
/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesRequest
 */
export class GetAlternativeTrainingPhrasesRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.config = _value.config
            ? new DataEnrichmentConfig(_value.config)
            : undefined;
        this.trainingPhrase = _value.trainingPhrase
            ? new ondewoNlu010.Intent.TrainingPhrase(_value.trainingPhrase)
            : undefined;
        this.intentName = _value.intentName;
        this.languageCode = _value.languageCode;
        this.parent = _value.parent;
        this.detectEntities = _value.detectEntities;
        this.similarityThreshold = _value.similarityThreshold;
        this.protectedWords = (_value.protectedWords || []).slice();
        this.wordsToChange = (_value.wordsToChange || []).slice();
        this.branch = _value.branch;
        GetAlternativeTrainingPhrasesRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesRequest();
        GetAlternativeTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.config = _instance.config || undefined;
        _instance.trainingPhrase = _instance.trainingPhrase || undefined;
        _instance.intentName = _instance.intentName || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.parent = _instance.parent || '';
        _instance.detectEntities = _instance.detectEntities || false;
        _instance.similarityThreshold = _instance.similarityThreshold || 0;
        _instance.protectedWords = _instance.protectedWords || [];
        _instance.wordsToChange = _instance.wordsToChange || [];
        _instance.branch = _instance.branch || '';
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
                    _instance.config = new DataEnrichmentConfig();
                    _reader.readMessage(_instance.config, DataEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.trainingPhrase = new ondewoNlu010.Intent.TrainingPhrase();
                    _reader.readMessage(_instance.trainingPhrase, ondewoNlu010.Intent.TrainingPhrase.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.intentName = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.parent = _reader.readString();
                    break;
                case 6:
                    _instance.detectEntities = _reader.readBool();
                    break;
                case 7:
                    _instance.similarityThreshold = _reader.readFloat();
                    break;
                case 8:
                    (_instance.protectedWords = _instance.protectedWords || []).push(_reader.readString());
                    break;
                case 9:
                    (_instance.wordsToChange = _instance.wordsToChange || []).push(_reader.readString());
                    break;
                case 10:
                    _instance.branch = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.config) {
            _writer.writeMessage(1, _instance.config, DataEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.trainingPhrase) {
            _writer.writeMessage(2, _instance.trainingPhrase, ondewoNlu010.Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.intentName) {
            _writer.writeString(3, _instance.intentName);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.parent) {
            _writer.writeString(5, _instance.parent);
        }
        if (_instance.detectEntities) {
            _writer.writeBool(6, _instance.detectEntities);
        }
        if (_instance.similarityThreshold) {
            _writer.writeFloat(7, _instance.similarityThreshold);
        }
        if (_instance.protectedWords && _instance.protectedWords.length) {
            _writer.writeRepeatedString(8, _instance.protectedWords);
        }
        if (_instance.wordsToChange && _instance.wordsToChange.length) {
            _writer.writeRepeatedString(9, _instance.wordsToChange);
        }
        if (_instance.branch) {
            _writer.writeString(10, _instance.branch);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get trainingPhrase() {
        return this._trainingPhrase;
    }
    set trainingPhrase(value) {
        this._trainingPhrase = value;
    }
    get intentName() {
        return this._intentName;
    }
    set intentName(value) {
        this._intentName = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get detectEntities() {
        return this._detectEntities;
    }
    set detectEntities(value) {
        this._detectEntities = value;
    }
    get similarityThreshold() {
        return this._similarityThreshold;
    }
    set similarityThreshold(value) {
        this._similarityThreshold = value;
    }
    get protectedWords() {
        return this._protectedWords;
    }
    set protectedWords(value) {
        this._protectedWords = value;
    }
    get wordsToChange() {
        return this._wordsToChange;
    }
    set wordsToChange(value) {
        this._wordsToChange = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toObject()
                : undefined,
            intentName: this.intentName,
            languageCode: this.languageCode,
            parent: this.parent,
            detectEntities: this.detectEntities,
            similarityThreshold: this.similarityThreshold,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice(),
            branch: this.branch
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
            config: this.config ? this.config.toProtobufJSON(options) : null,
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toProtobufJSON(options)
                : null,
            intentName: this.intentName,
            languageCode: this.languageCode,
            parent: this.parent,
            detectEntities: this.detectEntities,
            similarityThreshold: this.similarityThreshold,
            protectedWords: (this.protectedWords || []).slice(),
            wordsToChange: (this.wordsToChange || []).slice(),
            branch: this.branch
        };
    }
}
GetAlternativeTrainingPhrasesRequest.id = 'ondewo.nlu.GetAlternativeTrainingPhrasesRequest';
/**
 * Message implementation for ondewo.nlu.GetSynonymsRequest
 */
export class GetSynonymsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSynonymsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.config = _value.config
            ? new DataEnrichmentConfig(_value.config)
            : undefined;
        this.word = _value.word;
        this.languageCode = _value.languageCode;
        this.parent = _value.parent;
        GetSynonymsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSynonymsRequest();
        GetSynonymsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.config = _instance.config || undefined;
        _instance.word = _instance.word || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.config = new DataEnrichmentConfig();
                    _reader.readMessage(_instance.config, DataEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.word = _reader.readString();
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.parent = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSynonymsRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.config) {
            _writer.writeMessage(1, _instance.config, DataEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.word) {
            _writer.writeString(2, _instance.word);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.parent) {
            _writer.writeString(5, _instance.parent);
        }
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get word() {
        return this._word;
    }
    set word(value) {
        this._word = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
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
        GetSynonymsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            word: this.word,
            languageCode: this.languageCode,
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
            config: this.config ? this.config.toProtobufJSON(options) : null,
            word: this.word,
            languageCode: this.languageCode,
            parent: this.parent
        };
    }
}
GetSynonymsRequest.id = 'ondewo.nlu.GetSynonymsRequest';
/**
 * Message implementation for ondewo.nlu.GetSynonymsResponse
 */
export class GetSynonymsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetSynonymsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.synonyms = (_value.synonyms || []).map(m => new Synonym(m));
        GetSynonymsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetSynonymsResponse();
        GetSynonymsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.synonyms = _instance.synonyms || [];
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
                    const messageInitializer1 = new Synonym();
                    _reader.readMessage(messageInitializer1, Synonym.deserializeBinaryFromReader);
                    (_instance.synonyms = _instance.synonyms || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetSynonymsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.synonyms && _instance.synonyms.length) {
            _writer.writeRepeatedMessage(1, _instance.synonyms, Synonym.serializeBinaryToWriter);
        }
    }
    get synonyms() {
        return this._synonyms;
    }
    set synonyms(value) {
        this._synonyms = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetSynonymsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            synonyms: (this.synonyms || []).map(m => m.toObject())
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
            synonyms: (this.synonyms || []).map(m => m.toProtobufJSON(options))
        };
    }
}
GetSynonymsResponse.id = 'ondewo.nlu.GetSynonymsResponse';
/**
 * Message implementation for ondewo.nlu.Synonym
 */
export class Synonym {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Synonym to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.synonym = _value.synonym;
        this.score = _value.score;
        Synonym.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Synonym();
        Synonym.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.synonym = _instance.synonym || '';
        _instance.score = _instance.score || 0;
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
                    _instance.synonym = _reader.readString();
                    break;
                case 2:
                    _instance.score = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Synonym.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.synonym) {
            _writer.writeString(1, _instance.synonym);
        }
        if (_instance.score) {
            _writer.writeInt32(2, _instance.score);
        }
    }
    get synonym() {
        return this._synonym;
    }
    set synonym(value) {
        this._synonym = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Synonym.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            synonym: this.synonym,
            score: this.score
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
            synonym: this.synonym,
            score: this.score
        };
    }
}
Synonym.id = 'ondewo.nlu.Synonym';
/**
 * Message implementation for ondewo.nlu.GetAlternativeSentencesResponse
 */
export class GetAlternativeSentencesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeSentencesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.alternativeSentences = (_value.alternativeSentences || []).map(m => new AltSentence(m));
        GetAlternativeSentencesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAlternativeSentencesResponse();
        GetAlternativeSentencesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.alternativeSentences = _instance.alternativeSentences || [];
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
                    const messageInitializer1 = new AltSentence();
                    _reader.readMessage(messageInitializer1, AltSentence.deserializeBinaryFromReader);
                    (_instance.alternativeSentences =
                        _instance.alternativeSentences || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAlternativeSentencesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.alternativeSentences &&
            _instance.alternativeSentences.length) {
            _writer.writeRepeatedMessage(1, _instance.alternativeSentences, AltSentence.serializeBinaryToWriter);
        }
    }
    get alternativeSentences() {
        return this._alternativeSentences;
    }
    set alternativeSentences(value) {
        this._alternativeSentences = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAlternativeSentencesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            alternativeSentences: (this.alternativeSentences || []).map(m => m.toObject())
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
            alternativeSentences: (this.alternativeSentences || []).map(m => m.toProtobufJSON(options))
        };
    }
}
GetAlternativeSentencesResponse.id = 'ondewo.nlu.GetAlternativeSentencesResponse';
/**
 * Message implementation for ondewo.nlu.GenerateResponsesResponse
 */
export class GenerateResponsesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateResponsesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responses = (_value.responses || []).slice();
        GenerateResponsesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GenerateResponsesResponse();
        GenerateResponsesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responses = _instance.responses || [];
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
                    (_instance.responses = _instance.responses || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GenerateResponsesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responses && _instance.responses.length) {
            _writer.writeRepeatedString(1, _instance.responses);
        }
    }
    get responses() {
        return this._responses;
    }
    set responses(value) {
        this._responses = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GenerateResponsesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responses: (this.responses || []).slice()
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
            responses: (this.responses || []).slice()
        };
    }
}
GenerateResponsesResponse.id = 'ondewo.nlu.GenerateResponsesResponse';
/**
 * Message implementation for ondewo.nlu.GenerateUserSaysResponse
 */
export class GenerateUserSaysResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GenerateUserSaysResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.userSays = (_value.userSays || []).slice();
        GenerateUserSaysResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GenerateUserSaysResponse();
        GenerateUserSaysResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.userSays = _instance.userSays || [];
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
                    (_instance.userSays = _instance.userSays || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GenerateUserSaysResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.userSays && _instance.userSays.length) {
            _writer.writeRepeatedString(1, _instance.userSays);
        }
    }
    get userSays() {
        return this._userSays;
    }
    set userSays(value) {
        this._userSays = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GenerateUserSaysResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            userSays: (this.userSays || []).slice()
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
            userSays: (this.userSays || []).slice()
        };
    }
}
GenerateUserSaysResponse.id = 'ondewo.nlu.GenerateUserSaysResponse';
/**
 * Message implementation for ondewo.nlu.GetAlternativeTrainingPhrasesResponse
 */
export class GetAlternativeTrainingPhrasesResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAlternativeTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.alternativeTrainingPhrases = (_value.alternativeTrainingPhrases || []).map(m => new AltTrainingPhrase(m));
        GetAlternativeTrainingPhrasesResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesResponse();
        GetAlternativeTrainingPhrasesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.alternativeTrainingPhrases =
            _instance.alternativeTrainingPhrases || [];
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
                    const messageInitializer1 = new AltTrainingPhrase();
                    _reader.readMessage(messageInitializer1, AltTrainingPhrase.deserializeBinaryFromReader);
                    (_instance.alternativeTrainingPhrases =
                        _instance.alternativeTrainingPhrases || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.alternativeTrainingPhrases &&
            _instance.alternativeTrainingPhrases.length) {
            _writer.writeRepeatedMessage(1, _instance.alternativeTrainingPhrases, AltTrainingPhrase.serializeBinaryToWriter);
        }
    }
    get alternativeTrainingPhrases() {
        return this._alternativeTrainingPhrases;
    }
    set alternativeTrainingPhrases(value) {
        this._alternativeTrainingPhrases = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            alternativeTrainingPhrases: (this.alternativeTrainingPhrases || []).map(m => m.toObject())
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
            alternativeTrainingPhrases: (this.alternativeTrainingPhrases || []).map(m => m.toProtobufJSON(options))
        };
    }
}
GetAlternativeTrainingPhrasesResponse.id = 'ondewo.nlu.GetAlternativeTrainingPhrasesResponse';
/**
 * Message implementation for ondewo.nlu.AltSentence
 */
export class AltSentence {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AltSentence to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sentence = _value.sentence;
        this.score = _value.score;
        AltSentence.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AltSentence();
        AltSentence.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sentence = _instance.sentence || '';
        _instance.score = _instance.score || 0;
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
                    _instance.sentence = _reader.readString();
                    break;
                case 2:
                    _instance.score = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AltSentence.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sentence) {
            _writer.writeString(1, _instance.sentence);
        }
        if (_instance.score) {
            _writer.writeFloat(2, _instance.score);
        }
    }
    get sentence() {
        return this._sentence;
    }
    set sentence(value) {
        this._sentence = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AltSentence.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sentence: this.sentence,
            score: this.score
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
            sentence: this.sentence,
            score: this.score
        };
    }
}
AltSentence.id = 'ondewo.nlu.AltSentence';
/**
 * Message implementation for ondewo.nlu.AltTrainingPhrase
 */
export class AltTrainingPhrase {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AltTrainingPhrase to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhrase = _value.trainingPhrase
            ? new ondewoNlu010.Intent.TrainingPhrase(_value.trainingPhrase)
            : undefined;
        this.score = _value.score;
        AltTrainingPhrase.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AltTrainingPhrase();
        AltTrainingPhrase.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhrase = _instance.trainingPhrase || undefined;
        _instance.score = _instance.score || 0;
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
                    _instance.trainingPhrase = new ondewoNlu010.Intent.TrainingPhrase();
                    _reader.readMessage(_instance.trainingPhrase, ondewoNlu010.Intent.TrainingPhrase.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.score = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AltTrainingPhrase.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhrase) {
            _writer.writeMessage(1, _instance.trainingPhrase, ondewoNlu010.Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.score) {
            _writer.writeFloat(2, _instance.score);
        }
    }
    get trainingPhrase() {
        return this._trainingPhrase;
    }
    set trainingPhrase(value) {
        this._trainingPhrase = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AltTrainingPhrase.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toObject()
                : undefined,
            score: this.score
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
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toProtobufJSON(options)
                : null,
            score: this.score
        };
    }
}
AltTrainingPhrase.id = 'ondewo.nlu.AltTrainingPhrase';
/**
 * Message implementation for ondewo.nlu.DataEnrichmentConfig
 */
export class DataEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DataEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entityEnrichment = _value.entityEnrichment
            ? new EntityEnrichmentConfig(_value.entityEnrichment)
            : undefined;
        this.thesaurusEnrichment = _value.thesaurusEnrichment
            ? new ThesaurusEnrichmentConfig(_value.thesaurusEnrichment)
            : undefined;
        this.word2vecEnrichment = _value.word2vecEnrichment
            ? new Word2VecEnrichmentConfig(_value.word2vecEnrichment)
            : undefined;
        this.wordNetEnrichment = _value.wordNetEnrichment
            ? new WordNetAugEnrichmentConfig(_value.wordNetEnrichment)
            : undefined;
        this.gpt2Enrichment = _value.gpt2Enrichment
            ? new GPT2EnrichmentConfig(_value.gpt2Enrichment)
            : undefined;
        this.gloveEnrichment = _value.gloveEnrichment
            ? new GloVeEnrichmentConfig(_value.gloveEnrichment)
            : undefined;
        this.bertEnrichment = _value.bertEnrichment
            ? new BertAugEnrichmentConfig(_value.bertEnrichment)
            : undefined;
        this.xlnetEnrichment = _value.xlnetEnrichment
            ? new XLNetAugEnrichmentConfig(_value.xlnetEnrichment)
            : undefined;
        DataEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DataEnrichmentConfig();
        DataEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entityEnrichment = _instance.entityEnrichment || undefined;
        _instance.thesaurusEnrichment = _instance.thesaurusEnrichment || undefined;
        _instance.word2vecEnrichment = _instance.word2vecEnrichment || undefined;
        _instance.wordNetEnrichment = _instance.wordNetEnrichment || undefined;
        _instance.gpt2Enrichment = _instance.gpt2Enrichment || undefined;
        _instance.gloveEnrichment = _instance.gloveEnrichment || undefined;
        _instance.bertEnrichment = _instance.bertEnrichment || undefined;
        _instance.xlnetEnrichment = _instance.xlnetEnrichment || undefined;
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
                    _instance.entityEnrichment = new EntityEnrichmentConfig();
                    _reader.readMessage(_instance.entityEnrichment, EntityEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.thesaurusEnrichment = new ThesaurusEnrichmentConfig();
                    _reader.readMessage(_instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.word2vecEnrichment = new Word2VecEnrichmentConfig();
                    _reader.readMessage(_instance.word2vecEnrichment, Word2VecEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.wordNetEnrichment = new WordNetAugEnrichmentConfig();
                    _reader.readMessage(_instance.wordNetEnrichment, WordNetAugEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.gpt2Enrichment = new GPT2EnrichmentConfig();
                    _reader.readMessage(_instance.gpt2Enrichment, GPT2EnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.gloveEnrichment = new GloVeEnrichmentConfig();
                    _reader.readMessage(_instance.gloveEnrichment, GloVeEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.bertEnrichment = new BertAugEnrichmentConfig();
                    _reader.readMessage(_instance.bertEnrichment, BertAugEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.xlnetEnrichment = new XLNetAugEnrichmentConfig();
                    _reader.readMessage(_instance.xlnetEnrichment, XLNetAugEnrichmentConfig.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        DataEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entityEnrichment) {
            _writer.writeMessage(1, _instance.entityEnrichment, EntityEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.thesaurusEnrichment) {
            _writer.writeMessage(2, _instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.word2vecEnrichment) {
            _writer.writeMessage(3, _instance.word2vecEnrichment, Word2VecEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.wordNetEnrichment) {
            _writer.writeMessage(4, _instance.wordNetEnrichment, WordNetAugEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.gpt2Enrichment) {
            _writer.writeMessage(5, _instance.gpt2Enrichment, GPT2EnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.gloveEnrichment) {
            _writer.writeMessage(6, _instance.gloveEnrichment, GloVeEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.bertEnrichment) {
            _writer.writeMessage(8, _instance.bertEnrichment, BertAugEnrichmentConfig.serializeBinaryToWriter);
        }
        if (_instance.xlnetEnrichment) {
            _writer.writeMessage(9, _instance.xlnetEnrichment, XLNetAugEnrichmentConfig.serializeBinaryToWriter);
        }
    }
    get entityEnrichment() {
        return this._entityEnrichment;
    }
    set entityEnrichment(value) {
        this._entityEnrichment = value;
    }
    get thesaurusEnrichment() {
        return this._thesaurusEnrichment;
    }
    set thesaurusEnrichment(value) {
        this._thesaurusEnrichment = value;
    }
    get word2vecEnrichment() {
        return this._word2vecEnrichment;
    }
    set word2vecEnrichment(value) {
        this._word2vecEnrichment = value;
    }
    get wordNetEnrichment() {
        return this._wordNetEnrichment;
    }
    set wordNetEnrichment(value) {
        this._wordNetEnrichment = value;
    }
    get gpt2Enrichment() {
        return this._gpt2Enrichment;
    }
    set gpt2Enrichment(value) {
        this._gpt2Enrichment = value;
    }
    get gloveEnrichment() {
        return this._gloveEnrichment;
    }
    set gloveEnrichment(value) {
        this._gloveEnrichment = value;
    }
    get bertEnrichment() {
        return this._bertEnrichment;
    }
    set bertEnrichment(value) {
        this._bertEnrichment = value;
    }
    get xlnetEnrichment() {
        return this._xlnetEnrichment;
    }
    set xlnetEnrichment(value) {
        this._xlnetEnrichment = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DataEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entityEnrichment: this.entityEnrichment
                ? this.entityEnrichment.toObject()
                : undefined,
            thesaurusEnrichment: this.thesaurusEnrichment
                ? this.thesaurusEnrichment.toObject()
                : undefined,
            word2vecEnrichment: this.word2vecEnrichment
                ? this.word2vecEnrichment.toObject()
                : undefined,
            wordNetEnrichment: this.wordNetEnrichment
                ? this.wordNetEnrichment.toObject()
                : undefined,
            gpt2Enrichment: this.gpt2Enrichment
                ? this.gpt2Enrichment.toObject()
                : undefined,
            gloveEnrichment: this.gloveEnrichment
                ? this.gloveEnrichment.toObject()
                : undefined,
            bertEnrichment: this.bertEnrichment
                ? this.bertEnrichment.toObject()
                : undefined,
            xlnetEnrichment: this.xlnetEnrichment
                ? this.xlnetEnrichment.toObject()
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
            entityEnrichment: this.entityEnrichment
                ? this.entityEnrichment.toProtobufJSON(options)
                : null,
            thesaurusEnrichment: this.thesaurusEnrichment
                ? this.thesaurusEnrichment.toProtobufJSON(options)
                : null,
            word2vecEnrichment: this.word2vecEnrichment
                ? this.word2vecEnrichment.toProtobufJSON(options)
                : null,
            wordNetEnrichment: this.wordNetEnrichment
                ? this.wordNetEnrichment.toProtobufJSON(options)
                : null,
            gpt2Enrichment: this.gpt2Enrichment
                ? this.gpt2Enrichment.toProtobufJSON(options)
                : null,
            gloveEnrichment: this.gloveEnrichment
                ? this.gloveEnrichment.toProtobufJSON(options)
                : null,
            bertEnrichment: this.bertEnrichment
                ? this.bertEnrichment.toProtobufJSON(options)
                : null,
            xlnetEnrichment: this.xlnetEnrichment
                ? this.xlnetEnrichment.toProtobufJSON(options)
                : null
        };
    }
}
DataEnrichmentConfig.id = 'ondewo.nlu.DataEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.EntityEnrichmentConfig
 */
export class EntityEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        EntityEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EntityEnrichmentConfig();
        EntityEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        EntityEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EntityEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
EntityEnrichmentConfig.id = 'ondewo.nlu.EntityEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.ThesaurusEnrichmentConfig
 */
export class ThesaurusEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ThesaurusEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        ThesaurusEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ThesaurusEnrichmentConfig();
        ThesaurusEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ThesaurusEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ThesaurusEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
ThesaurusEnrichmentConfig.id = 'ondewo.nlu.ThesaurusEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.BertAugEnrichmentConfig
 */
export class BertAugEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BertAugEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        BertAugEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BertAugEnrichmentConfig();
        BertAugEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BertAugEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BertAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
BertAugEnrichmentConfig.id = 'ondewo.nlu.BertAugEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.GloVeEnrichmentConfig
 */
export class GloVeEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GloVeEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        GloVeEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GloVeEnrichmentConfig();
        GloVeEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GloVeEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GloVeEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
GloVeEnrichmentConfig.id = 'ondewo.nlu.GloVeEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.GPT2EnrichmentConfig
 */
export class GPT2EnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GPT2EnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        GPT2EnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GPT2EnrichmentConfig();
        GPT2EnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GPT2EnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GPT2EnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
GPT2EnrichmentConfig.id = 'ondewo.nlu.GPT2EnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.Word2VecEnrichmentConfig
 */
export class Word2VecEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Word2VecEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        Word2VecEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Word2VecEnrichmentConfig();
        Word2VecEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Word2VecEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Word2VecEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
Word2VecEnrichmentConfig.id = 'ondewo.nlu.Word2VecEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.WordNetAugEnrichmentConfig
 */
export class WordNetAugEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of WordNetAugEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        WordNetAugEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new WordNetAugEnrichmentConfig();
        WordNetAugEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        WordNetAugEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        WordNetAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
WordNetAugEnrichmentConfig.id = 'ondewo.nlu.WordNetAugEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.XLNetAugEnrichmentConfig
 */
export class XLNetAugEnrichmentConfig {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of XLNetAugEnrichmentConfig to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.isActive = _value.isActive;
        this.enrichmentFactor = _value.enrichmentFactor;
        this.executionOrder = _value.executionOrder;
        XLNetAugEnrichmentConfig.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new XLNetAugEnrichmentConfig();
        XLNetAugEnrichmentConfig.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.isActive = _instance.isActive || false;
        _instance.enrichmentFactor = _instance.enrichmentFactor || 0;
        _instance.executionOrder = _instance.executionOrder || 0;
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
                    _instance.isActive = _reader.readBool();
                    break;
                case 2:
                    _instance.enrichmentFactor = _reader.readInt32();
                    break;
                case 3:
                    _instance.executionOrder = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        XLNetAugEnrichmentConfig.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.isActive) {
            _writer.writeBool(1, _instance.isActive);
        }
        if (_instance.enrichmentFactor) {
            _writer.writeInt32(2, _instance.enrichmentFactor);
        }
        if (_instance.executionOrder) {
            _writer.writeInt32(3, _instance.executionOrder);
        }
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get enrichmentFactor() {
        return this._enrichmentFactor;
    }
    set enrichmentFactor(value) {
        this._enrichmentFactor = value;
    }
    get executionOrder() {
        return this._executionOrder;
    }
    set executionOrder(value) {
        this._executionOrder = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        XLNetAugEnrichmentConfig.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
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
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
}
XLNetAugEnrichmentConfig.id = 'ondewo.nlu.XLNetAugEnrichmentConfig';
/**
 * Message implementation for ondewo.nlu.ClassifyIntentsRequest
 */
export class ClassifyIntentsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClassifyIntentsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.text = _value.text;
        this.languageCode = _value.languageCode;
        this.activeContexts = _value.activeContexts;
        this.contextNames = (_value.contextNames || []).slice();
        this.mode = _value.mode;
        this.algorithms = (_value.algorithms || []).slice();
        ClassifyIntentsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ClassifyIntentsRequest();
        ClassifyIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.text = _instance.text || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.activeContexts = _instance.activeContexts || false;
        _instance.contextNames = _instance.contextNames || [];
        _instance.mode = _instance.mode || 0;
        _instance.algorithms = _instance.algorithms || [];
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
                    _instance.text = _reader.readString();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.activeContexts = _reader.readBool();
                    break;
                case 5:
                    (_instance.contextNames = _instance.contextNames || []).push(_reader.readString());
                    break;
                case 6:
                    _instance.mode = _reader.readEnum();
                    break;
                case 7:
                    (_instance.algorithms = _instance.algorithms || []).push(...(_reader.readPackedEnum() || []));
                    break;
                default:
                    _reader.skipField();
            }
        }
        ClassifyIntentsRequest.refineValues(_instance);
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
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.activeContexts) {
            _writer.writeBool(4, _instance.activeContexts);
        }
        if (_instance.contextNames && _instance.contextNames.length) {
            _writer.writeRepeatedString(5, _instance.contextNames);
        }
        if (_instance.mode) {
            _writer.writeEnum(6, _instance.mode);
        }
        if (_instance.algorithms && _instance.algorithms.length) {
            _writer.writePackedEnum(7, _instance.algorithms);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
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
    get activeContexts() {
        return this._activeContexts;
    }
    set activeContexts(value) {
        this._activeContexts = value;
    }
    get contextNames() {
        return this._contextNames;
    }
    set contextNames(value) {
        this._contextNames = value;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
    get algorithms() {
        return this._algorithms;
    }
    set algorithms(value) {
        this._algorithms = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ClassifyIntentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            text: this.text,
            languageCode: this.languageCode,
            activeContexts: this.activeContexts,
            contextNames: (this.contextNames || []).slice(),
            mode: this.mode,
            algorithms: (this.algorithms || []).slice()
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
            text: this.text,
            languageCode: this.languageCode,
            activeContexts: this.activeContexts,
            contextNames: (this.contextNames || []).slice(),
            mode: Mode[this.mode === null || this.mode === undefined ? 0 : this.mode],
            algorithms: (this.algorithms || []).map(v => IntentAlgorithms[v])
        };
    }
}
ClassifyIntentsRequest.id = 'ondewo.nlu.ClassifyIntentsRequest';
/**
 * Message implementation for ondewo.nlu.IntentClassified
 */
export class IntentClassified {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentClassified to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        this.intentDisplayName = _value.intentDisplayName;
        this.classifier = _value.classifier;
        this.score = _value.score;
        IntentClassified.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new IntentClassified();
        IntentClassified.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentName = _instance.intentName || '';
        _instance.intentDisplayName = _instance.intentDisplayName || '';
        _instance.classifier = _instance.classifier || '';
        _instance.score = _instance.score || 0;
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
                    _instance.intentName = _reader.readString();
                    break;
                case 2:
                    _instance.intentDisplayName = _reader.readString();
                    break;
                case 3:
                    _instance.classifier = _reader.readString();
                    break;
                case 4:
                    _instance.score = _reader.readFloat();
                    break;
                default:
                    _reader.skipField();
            }
        }
        IntentClassified.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intentName) {
            _writer.writeString(1, _instance.intentName);
        }
        if (_instance.intentDisplayName) {
            _writer.writeString(2, _instance.intentDisplayName);
        }
        if (_instance.classifier) {
            _writer.writeString(3, _instance.classifier);
        }
        if (_instance.score) {
            _writer.writeFloat(4, _instance.score);
        }
    }
    get intentName() {
        return this._intentName;
    }
    set intentName(value) {
        this._intentName = value;
    }
    get intentDisplayName() {
        return this._intentDisplayName;
    }
    set intentDisplayName(value) {
        this._intentDisplayName = value;
    }
    get classifier() {
        return this._classifier;
    }
    set classifier(value) {
        this._classifier = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        IntentClassified.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentName: this.intentName,
            intentDisplayName: this.intentDisplayName,
            classifier: this.classifier,
            score: this.score
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
            intentName: this.intentName,
            intentDisplayName: this.intentDisplayName,
            classifier: this.classifier,
            score: this.score
        };
    }
}
IntentClassified.id = 'ondewo.nlu.IntentClassified';
/**
 * Message implementation for ondewo.nlu.ClassifyIntentsResponse
 */
export class ClassifyIntentsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ClassifyIntentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentsClassified = (_value.intentsClassified || []).map(m => new IntentClassified(m));
        this.text = _value.text;
        this.activeContexts = _value.activeContexts;
        this.contextNames = (_value.contextNames || []).slice();
        ClassifyIntentsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ClassifyIntentsResponse();
        ClassifyIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentsClassified = _instance.intentsClassified || [];
        _instance.text = _instance.text || '';
        _instance.activeContexts = _instance.activeContexts || false;
        _instance.contextNames = _instance.contextNames || [];
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
                    const messageInitializer1 = new IntentClassified();
                    _reader.readMessage(messageInitializer1, IntentClassified.deserializeBinaryFromReader);
                    (_instance.intentsClassified =
                        _instance.intentsClassified || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.text = _reader.readString();
                    break;
                case 3:
                    _instance.activeContexts = _reader.readBool();
                    break;
                case 4:
                    (_instance.contextNames = _instance.contextNames || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        ClassifyIntentsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intentsClassified && _instance.intentsClassified.length) {
            _writer.writeRepeatedMessage(1, _instance.intentsClassified, IntentClassified.serializeBinaryToWriter);
        }
        if (_instance.text) {
            _writer.writeString(2, _instance.text);
        }
        if (_instance.activeContexts) {
            _writer.writeBool(3, _instance.activeContexts);
        }
        if (_instance.contextNames && _instance.contextNames.length) {
            _writer.writeRepeatedString(4, _instance.contextNames);
        }
    }
    get intentsClassified() {
        return this._intentsClassified;
    }
    set intentsClassified(value) {
        this._intentsClassified = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get activeContexts() {
        return this._activeContexts;
    }
    set activeContexts(value) {
        this._activeContexts = value;
    }
    get contextNames() {
        return this._contextNames;
    }
    set contextNames(value) {
        this._contextNames = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ClassifyIntentsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentsClassified: (this.intentsClassified || []).map(m => m.toObject()),
            text: this.text,
            activeContexts: this.activeContexts,
            contextNames: (this.contextNames || []).slice()
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
            intentsClassified: (this.intentsClassified || []).map(m => m.toProtobufJSON(options)),
            text: this.text,
            activeContexts: this.activeContexts,
            contextNames: (this.contextNames || []).slice()
        };
    }
}
ClassifyIntentsResponse.id = 'ondewo.nlu.ClassifyIntentsResponse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlzZXJ2aWNlcy5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2Fpc2VydmljZXMucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQVd6RSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sS0FBSyxZQUFZLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsTUFBTSxDQUFOLElBQVksSUFJWDtBQUpELFdBQVksSUFBSTtJQUNkLDZDQUFlLENBQUE7SUFDZix5Q0FBYSxDQUFBO0lBQ2IseUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxJQUFJLEtBQUosSUFBSSxRQUlmO0FBQ0QsTUFBTSxDQUFOLElBQVksZ0JBYVg7QUFiRCxXQUFZLGdCQUFnQjtJQUMxQiwrR0FBb0MsQ0FBQTtJQUNwQywyRkFBMEIsQ0FBQTtJQUMxQixxR0FBK0IsQ0FBQTtJQUMvQixxR0FBK0IsQ0FBQTtJQUMvQiwrR0FBb0MsQ0FBQTtJQUNwQyxtR0FBOEIsQ0FBQTtJQUM5QixtR0FBOEIsQ0FBQTtJQUM5QixvRkFBdUIsQ0FBQTtJQUN2QixnR0FBNkIsQ0FBQTtJQUM3Qiw0RkFBMkIsQ0FBQTtJQUMzQixnR0FBNkIsQ0FBQTtJQUM3QixvR0FBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBYlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWEzQjtBQUNEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHNCQUFzQjtJQXdGakM7OztPQUdHO0lBQ0gsWUFBWSxNQUEwRDtRQUNwRSxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZ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Q0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ2hELENBQUM7SUFDSixDQUFDOztBQXhMTSwwQkFBRSxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAzIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDQgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA1IGZyb20gJy4uLy4uL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNiBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNyBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwOCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwOSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTAgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9pbnRlbnQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDExIGZyb20gJy4uLy4uL29uZGV3by9ubHUvZW50aXR5LXR5cGUucGInO1xuZXhwb3J0IGVudW0gTW9kZSB7XG4gIFVOU1BFQ0lGSUVEID0gMCxcbiAgRVhDTFVTSVZFID0gMSxcbiAgSU5DTFVTSVZFID0gMlxufVxuZXhwb3J0IGVudW0gSW50ZW50QWxnb3JpdGhtcyB7XG4gIE9uZGV3b0ludGVudEV4YWN0Q29udGV4dERldGVjdG9yID0gMCxcbiAgT25kZXdvSW50ZW50RXhhY3RNYXRjaCA9IDEsXG4gIE9uZGV3b0ludGVudE5hbWVkRXhhY3RNYXRjaCA9IDIsXG4gIE9uZGV3b0ludGVudFNpbWlsYXJpdHlNYXRjaCA9IDMsXG4gIE9uZGV3b0ludGVudE5hbWVkU2ltaWxhcml0eU1hdGNoID0gNCxcbiAgT25kZXdvSW50ZW50QmVydENsYXNzaWZpZXIgPSA3LFxuICBPbmRld29JbnRlbnRNZXRhQ2xhc3NpZmllciA9IDgsXG4gIEludGVudEV4aXREZXRlY3RvciA9IDEwLFxuICBPbmRld29JbnRlbnRSYW5raW5nTWF0Y2ggPSAxMSxcbiAgT25kZXdvV2VpZ2h0ZWRFbnNlbWJsZSA9IDEzLFxuICBPbmRld29JbnRlbnRFeGl0RGV0ZWN0b3IgPSAxNCxcbiAgT25kZXdvSW50ZW50UGFyYW1ldGVyTWF0Y2ggPSAxNVxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkV4dHJhY3RFbnRpdGllc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEV4dHJhY3RFbnRpdGllc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkV4dHJhY3RFbnRpdGllc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0KCk7XG4gICAgRXh0cmFjdEVudGl0aWVzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pbnRlbnROYW1lID0gX2luc3RhbmNlLmludGVudE5hbWUgfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXh0cmFjdEVudGl0aWVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5pbnRlbnROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRXh0cmFjdEVudGl0aWVzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFeHRyYWN0RW50aXRpZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuaW50ZW50TmFtZSA9IF92YWx1ZS5pbnRlbnROYW1lO1xuICAgIEV4dHJhY3RFbnRpdGllc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnROYW1lO1xuICB9XG4gIHNldCBpbnRlbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlbnROYW1lID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXh0cmFjdEVudGl0aWVzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBpbnRlbnROYW1lOiB0aGlzLmludGVudE5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBpbnRlbnROYW1lOiB0aGlzLmludGVudE5hbWVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4dHJhY3RFbnRpdGllc1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEV4dHJhY3RFbnRpdGllc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBpbnRlbnROYW1lOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXh0cmFjdEVudGl0aWVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIGludGVudE5hbWU6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRXh0cmFjdEVudGl0aWVzRnV6enlSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRyYWN0RW50aXRpZXNGdXp6eVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCgpO1xuICAgIEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBvdGVudGlhbEVudGl0aWVzID0gX2luc3RhbmNlLnBvdGVudGlhbEVudGl0aWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5taW5pbWFsU2NvcmUgPSBfaW5zdGFuY2UubWluaW1hbFNjb3JlIHx8IDA7XG4gICAgX2luc3RhbmNlLmFsbG93T3ZlcmxhcHMgPSBfaW5zdGFuY2UuYWxsb3dPdmVybGFwcyB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBFbnRpdHlUeXBlRnV6enlOZXJDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UucG90ZW50aWFsRW50aXRpZXMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnBvdGVudGlhbEVudGl0aWVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLm1pbmltYWxTY29yZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UuYWxsb3dPdmVybGFwcyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucG90ZW50aWFsRW50aXRpZXMgJiYgX2luc3RhbmNlLnBvdGVudGlhbEVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLnBvdGVudGlhbEVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbmltYWxTY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDQsIF9pbnN0YW5jZS5taW5pbWFsU2NvcmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFsbG93T3ZlcmxhcHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS5hbGxvd092ZXJsYXBzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF9wb3RlbnRpYWxFbnRpdGllcz86IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZ1tdO1xuICBwcml2YXRlIF9taW5pbWFsU2NvcmU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWxsb3dPdmVybGFwczogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFeHRyYWN0RW50aXRpZXNGdXp6eVJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gX3ZhbHVlLnBhcmVudDtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICB0aGlzLnBvdGVudGlhbEVudGl0aWVzID0gKF92YWx1ZS5wb3RlbnRpYWxFbnRpdGllcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnKG0pXG4gICAgKTtcbiAgICB0aGlzLm1pbmltYWxTY29yZSA9IF92YWx1ZS5taW5pbWFsU2NvcmU7XG4gICAgdGhpcy5hbGxvd092ZXJsYXBzID0gX3ZhbHVlLmFsbG93T3ZlcmxhcHM7XG4gICAgRXh0cmFjdEVudGl0aWVzRnV6enlSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvdGVudGlhbEVudGl0aWVzKCk6IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG90ZW50aWFsRW50aXRpZXM7XG4gIH1cbiAgc2V0IHBvdGVudGlhbEVudGl0aWVzKHZhbHVlOiBFbnRpdHlUeXBlRnV6enlOZXJDb25maWdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BvdGVudGlhbEVudGl0aWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1pbmltYWxTY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5pbWFsU2NvcmU7XG4gIH1cbiAgc2V0IG1pbmltYWxTY29yZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluaW1hbFNjb3JlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFsbG93T3ZlcmxhcHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93T3ZlcmxhcHM7XG4gIH1cbiAgc2V0IGFsbG93T3ZlcmxhcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd092ZXJsYXBzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXh0cmFjdEVudGl0aWVzRnV6enlSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBwb3RlbnRpYWxFbnRpdGllczogKHRoaXMucG90ZW50aWFsRW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBtaW5pbWFsU2NvcmU6IHRoaXMubWluaW1hbFNjb3JlLFxuICAgICAgYWxsb3dPdmVybGFwczogdGhpcy5hbGxvd092ZXJsYXBzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRXh0cmFjdEVudGl0aWVzRnV6enlSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHBvdGVudGlhbEVudGl0aWVzOiAodGhpcy5wb3RlbnRpYWxFbnRpdGllcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIG1pbmltYWxTY29yZTogdGhpcy5taW5pbWFsU2NvcmUsXG4gICAgICBhbGxvd092ZXJsYXBzOiB0aGlzLmFsbG93T3ZlcmxhcHNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRXh0cmFjdEVudGl0aWVzRnV6enlSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcG90ZW50aWFsRW50aXRpZXM/OiBFbnRpdHlUeXBlRnV6enlOZXJDb25maWcuQXNPYmplY3RbXTtcbiAgICBtaW5pbWFsU2NvcmU6IG51bWJlcjtcbiAgICBhbGxvd092ZXJsYXBzOiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEV4dHJhY3RFbnRpdGllc0Z1enp5UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHBvdGVudGlhbEVudGl0aWVzOiBFbnRpdHlUeXBlRnV6enlOZXJDb25maWcuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbWluaW1hbFNjb3JlOiBudW1iZXI7XG4gICAgYWxsb3dPdmVybGFwczogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlRnV6enlOZXJDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkVudGl0eVR5cGVGdXp6eU5lckNvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZygpO1xuICAgIEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZykge1xuICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlID0gX2luc3RhbmNlLmVudGl0eVR5cGUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5taW5pbWFsU2NvcmUgPSBfaW5zdGFuY2UubWluaW1hbFNjb3JlIHx8IDA7XG4gICAgX2luc3RhbmNlLmVudGl0eVZhbHVlcyA9IF9pbnN0YW5jZS5lbnRpdHlWYWx1ZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmFsZ29yaXRobSA9IF9pbnN0YW5jZS5hbGdvcml0aG0gfHwgMDtcbiAgICBfaW5zdGFuY2UuYWxsb3dPdmVybGFwcyA9IF9pbnN0YW5jZS5hbGxvd092ZXJsYXBzIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlID0gbmV3IG9uZGV3b05sdTAxMS5FbnRpdHlUeXBlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDExLkVudGl0eVR5cGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5taW5pbWFsU2NvcmUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5lbnRpdHlWYWx1ZXMgPSBfaW5zdGFuY2UuZW50aXR5VmFsdWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmFsZ29yaXRobSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5hbGxvd092ZXJsYXBzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eVR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuZW50aXR5VHlwZSBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAxMS5FbnRpdHlUeXBlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1pbmltYWxTY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDIsIF9pbnN0YW5jZS5taW5pbWFsU2NvcmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eVZhbHVlcyAmJiBfaW5zdGFuY2UuZW50aXR5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmFsZ29yaXRobSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNCwgX2luc3RhbmNlLmFsZ29yaXRobSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWxsb3dPdmVybGFwcykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNSwgX2luc3RhbmNlLmFsbG93T3ZlcmxhcHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eVR5cGU/OiBvbmRld29ObHUwMTEuRW50aXR5VHlwZTtcbiAgcHJpdmF0ZSBfbWluaW1hbFNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgX2VudGl0eVZhbHVlczogc3RyaW5nW107XG4gIHByaXZhdGUgX2FsZ29yaXRobTogRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLkZ1enp5TmVyQWxnb3JpdGhtO1xuICBwcml2YXRlIF9hbGxvd092ZXJsYXBzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lbnRpdHlUeXBlID0gX3ZhbHVlLmVudGl0eVR5cGVcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMS5FbnRpdHlUeXBlKF92YWx1ZS5lbnRpdHlUeXBlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5pbWFsU2NvcmUgPSBfdmFsdWUubWluaW1hbFNjb3JlO1xuICAgIHRoaXMuZW50aXR5VmFsdWVzID0gKF92YWx1ZS5lbnRpdHlWYWx1ZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5hbGdvcml0aG0gPSBfdmFsdWUuYWxnb3JpdGhtO1xuICAgIHRoaXMuYWxsb3dPdmVybGFwcyA9IF92YWx1ZS5hbGxvd092ZXJsYXBzO1xuICAgIEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGUoKTogb25kZXdvTmx1MDExLkVudGl0eVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlKHZhbHVlOiBvbmRld29ObHUwMTEuRW50aXR5VHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWluaW1hbFNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltYWxTY29yZTtcbiAgfVxuICBzZXQgbWluaW1hbFNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5pbWFsU2NvcmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VmFsdWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VmFsdWVzO1xuICB9XG4gIHNldCBlbnRpdHlWYWx1ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZW50aXR5VmFsdWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFsZ29yaXRobSgpOiBFbnRpdHlUeXBlRnV6enlOZXJDb25maWcuRnV6enlOZXJBbGdvcml0aG0ge1xuICAgIHJldHVybiB0aGlzLl9hbGdvcml0aG07XG4gIH1cbiAgc2V0IGFsZ29yaXRobSh2YWx1ZTogRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLkZ1enp5TmVyQWxnb3JpdGhtKSB7XG4gICAgdGhpcy5fYWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFsbG93T3ZlcmxhcHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93T3ZlcmxhcHM7XG4gIH1cbiAgc2V0IGFsbG93T3ZlcmxhcHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd092ZXJsYXBzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eVR5cGU6IHRoaXMuZW50aXR5VHlwZSA/IHRoaXMuZW50aXR5VHlwZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbWluaW1hbFNjb3JlOiB0aGlzLm1pbmltYWxTY29yZSxcbiAgICAgIGVudGl0eVZhbHVlczogKHRoaXMuZW50aXR5VmFsdWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgYWxnb3JpdGhtOiB0aGlzLmFsZ29yaXRobSxcbiAgICAgIGFsbG93T3ZlcmxhcHM6IHRoaXMuYWxsb3dPdmVybGFwc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eVR5cGU6IHRoaXMuZW50aXR5VHlwZVxuICAgICAgICA/IHRoaXMuZW50aXR5VHlwZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBtaW5pbWFsU2NvcmU6IHRoaXMubWluaW1hbFNjb3JlLFxuICAgICAgZW50aXR5VmFsdWVzOiAodGhpcy5lbnRpdHlWYWx1ZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBhbGdvcml0aG06XG4gICAgICAgIEVudGl0eVR5cGVGdXp6eU5lckNvbmZpZy5GdXp6eU5lckFsZ29yaXRobVtcbiAgICAgICAgICB0aGlzLmFsZ29yaXRobSA9PT0gbnVsbCB8fCB0aGlzLmFsZ29yaXRobSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5hbGdvcml0aG1cbiAgICAgICAgXSxcbiAgICAgIGFsbG93T3ZlcmxhcHM6IHRoaXMuYWxsb3dPdmVybGFwc1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFbnRpdHlUeXBlRnV6enlOZXJDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVudGl0eVR5cGU/OiBvbmRld29ObHUwMTEuRW50aXR5VHlwZS5Bc09iamVjdDtcbiAgICBtaW5pbWFsU2NvcmU6IG51bWJlcjtcbiAgICBlbnRpdHlWYWx1ZXM6IHN0cmluZ1tdO1xuICAgIGFsZ29yaXRobTogRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnLkZ1enp5TmVyQWxnb3JpdGhtO1xuICAgIGFsbG93T3ZlcmxhcHM6IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5VHlwZUZ1enp5TmVyQ29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlUeXBlOiBvbmRld29ObHUwMTEuRW50aXR5VHlwZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbWluaW1hbFNjb3JlOiBudW1iZXI7XG4gICAgZW50aXR5VmFsdWVzOiBzdHJpbmdbXTtcbiAgICBhbGdvcml0aG06IHN0cmluZztcbiAgICBhbGxvd092ZXJsYXBzOiBib29sZWFuO1xuICB9XG4gIGV4cG9ydCBlbnVtIEZ1enp5TmVyQWxnb3JpdGhtIHtcbiAgICBQUkVGSUxURVJfTEVWRU5TSFRFSU4gPSAwLFxuICAgIExPQ0FMX01BWElNVU0gPSAxXG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkVudGl0eURldGVjdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlEZXRlY3RlZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRW50aXR5RGV0ZWN0ZWQnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlEZXRlY3RlZCgpO1xuICAgIEVudGl0eURldGVjdGVkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRW50aXR5RGV0ZWN0ZWQpIHtcbiAgICBfaW5zdGFuY2UuZW50aXR5ID0gX2luc3RhbmNlLmVudGl0eSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmV4dHJhY3Rpb25NZXRob2QgPSBfaW5zdGFuY2UuZXh0cmFjdGlvbk1ldGhvZCB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2NvcmUgPSBfaW5zdGFuY2Uuc2NvcmUgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEVudGl0eURldGVjdGVkLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHkgPSBuZXcgb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5XG4gICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmV4dHJhY3Rpb25NZXRob2QgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zY29yZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnRpdHlEZXRlY3RlZC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEVudGl0eURldGVjdGVkLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHkgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leHRyYWN0aW9uTWV0aG9kKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5leHRyYWN0aW9uTWV0aG9kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zY29yZSkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDMsIF9pbnN0YW5jZS5zY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5Pzogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHk7XG4gIHByaXZhdGUgX2V4dHJhY3Rpb25NZXRob2Q6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEVudGl0eURldGVjdGVkIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eURldGVjdGVkLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0eSA9IF92YWx1ZS5lbnRpdHlcbiAgICAgID8gbmV3IG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5KF92YWx1ZS5lbnRpdHkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV4dHJhY3Rpb25NZXRob2QgPSBfdmFsdWUuZXh0cmFjdGlvbk1ldGhvZDtcbiAgICB0aGlzLnNjb3JlID0gX3ZhbHVlLnNjb3JlO1xuICAgIEVudGl0eURldGVjdGVkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5KCk6IG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5O1xuICB9XG4gIHNldCBlbnRpdHkodmFsdWU6IG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4dHJhY3Rpb25NZXRob2QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdGlvbk1ldGhvZDtcbiAgfVxuICBzZXQgZXh0cmFjdGlvbk1ldGhvZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0cmFjdGlvbk1ldGhvZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY29yZTtcbiAgfVxuICBzZXQgc2NvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Njb3JlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRW50aXR5RGV0ZWN0ZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRW50aXR5RGV0ZWN0ZWQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHk6IHRoaXMuZW50aXR5ID8gdGhpcy5lbnRpdHkudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGV4dHJhY3Rpb25NZXRob2Q6IHRoaXMuZXh0cmFjdGlvbk1ldGhvZCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRW50aXR5RGV0ZWN0ZWQuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHk6IHRoaXMuZW50aXR5ID8gdGhpcy5lbnRpdHkudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZXh0cmFjdGlvbk1ldGhvZDogdGhpcy5leHRyYWN0aW9uTWV0aG9kLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVudGl0eURldGVjdGVkIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBFbnRpdHlEZXRlY3RlZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZW50aXR5Pzogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkuQXNPYmplY3Q7XG4gICAgZXh0cmFjdGlvbk1ldGhvZDogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5RGV0ZWN0ZWRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGVudGl0eTogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGV4dHJhY3Rpb25NZXRob2Q6IHN0cmluZztcbiAgICBzY29yZTogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5FeHRyYWN0RW50aXRpZXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UoKTtcbiAgICBFeHRyYWN0RW50aXRpZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmVudGl0aWVzRGV0ZWN0ZWQgPSBfaW5zdGFuY2UuZW50aXRpZXNEZXRlY3RlZCB8fCBbXTtcbiAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBFbnRpdHlEZXRlY3RlZCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgRW50aXR5RGV0ZWN0ZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmVudGl0aWVzRGV0ZWN0ZWQgPSBfaW5zdGFuY2UuZW50aXRpZXNEZXRlY3RlZCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZW50aXRpZXNEZXRlY3RlZCAmJiBfaW5zdGFuY2UuZW50aXRpZXNEZXRlY3RlZC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdGllc0RldGVjdGVkIGFzIGFueSxcbiAgICAgICAgRW50aXR5RGV0ZWN0ZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXRpZXNEZXRlY3RlZD86IEVudGl0eURldGVjdGVkW107XG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0aWVzRGV0ZWN0ZWQgPSAoX3ZhbHVlLmVudGl0aWVzRGV0ZWN0ZWQgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEVudGl0eURldGVjdGVkKG0pXG4gICAgKTtcbiAgICB0aGlzLnRleHQgPSBfdmFsdWUudGV4dDtcbiAgICBFeHRyYWN0RW50aXRpZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0aWVzRGV0ZWN0ZWQoKTogRW50aXR5RGV0ZWN0ZWRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzRGV0ZWN0ZWQ7XG4gIH1cbiAgc2V0IGVudGl0aWVzRGV0ZWN0ZWQodmFsdWU6IEVudGl0eURldGVjdGVkW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdGllc0RldGVjdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXRpZXNEZXRlY3RlZDogKHRoaXMuZW50aXRpZXNEZXRlY3RlZCB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXRpZXNEZXRlY3RlZDogKHRoaXMuZW50aXRpZXNEZXRlY3RlZCB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXh0cmFjdEVudGl0aWVzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlbnRpdGllc0RldGVjdGVkPzogRW50aXR5RGV0ZWN0ZWQuQXNPYmplY3RbXTtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRXh0cmFjdEVudGl0aWVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGVudGl0aWVzRGV0ZWN0ZWQ6IEVudGl0eURldGVjdGVkLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIHRleHQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCgpO1xuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5jb25maWcgPSBfaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uuc2VudGVuY2UgPSBfaW5zdGFuY2Uuc2VudGVuY2UgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnByb3RlY3RlZFdvcmRzID0gX2luc3RhbmNlLnByb3RlY3RlZFdvcmRzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlID0gX2luc3RhbmNlLndvcmRzVG9DaGFuZ2UgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyA9IG5ldyBEYXRhRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgRGF0YUVucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5zZW50ZW5jZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgKF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyA9IF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIChfaW5zdGFuY2Uud29yZHNUb0NoYW5nZSA9IF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNvbmZpZykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBEYXRhRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zZW50ZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc2VudGVuY2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJvdGVjdGVkV29yZHMgJiYgX2luc3RhbmNlLnByb3RlY3RlZFdvcmRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDYsIF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3Jkcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud29yZHNUb0NoYW5nZSAmJiBfaW5zdGFuY2Uud29yZHNUb0NoYW5nZS5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg3LCBfaW5zdGFuY2Uud29yZHNUb0NoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnPzogRGF0YUVucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3NlbnRlbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJvdGVjdGVkV29yZHM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF93b3Jkc1RvQ2hhbmdlOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKF92YWx1ZS5jb25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbnRlbmNlID0gX3ZhbHVlLnNlbnRlbmNlO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5wcm90ZWN0ZWRXb3JkcyA9IChfdmFsdWUucHJvdGVjdGVkV29yZHMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy53b3Jkc1RvQ2hhbmdlID0gKF92YWx1ZS53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5zbGljZSgpO1xuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCBzZW50ZW5jZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZW50ZW5jZTtcbiAgfVxuICBzZXQgc2VudGVuY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlbnRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByb3RlY3RlZFdvcmRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdGVjdGVkV29yZHM7XG4gIH1cbiAgc2V0IHByb3RlY3RlZFdvcmRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Byb3RlY3RlZFdvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmRzVG9DaGFuZ2UoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93b3Jkc1RvQ2hhbmdlO1xuICB9XG4gIHNldCB3b3Jkc1RvQ2hhbmdlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dvcmRzVG9DaGFuZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZW50ZW5jZTogdGhpcy5zZW50ZW5jZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgcHJvdGVjdGVkV29yZHM6ICh0aGlzLnByb3RlY3RlZFdvcmRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgd29yZHNUb0NoYW5nZTogKHRoaXMud29yZHNUb0NoYW5nZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBzZW50ZW5jZTogdGhpcy5zZW50ZW5jZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgcHJvdGVjdGVkV29yZHM6ICh0aGlzLnByb3RlY3RlZFdvcmRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgd29yZHNUb0NoYW5nZTogKHRoaXMud29yZHNUb0NoYW5nZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZz86IERhdGFFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIHNlbnRlbmNlOiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkV29yZHM6IHN0cmluZ1tdO1xuICAgIHdvcmRzVG9DaGFuZ2U6IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY29uZmlnOiBEYXRhRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2VudGVuY2U6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWRXb3Jkczogc3RyaW5nW107XG4gICAgd29yZHNUb0NoYW5nZTogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdlbmVyYXRlVXNlclNheXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdCgpO1xuICAgIEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0gPSBfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0gfHwgMDtcbiAgICBfaW5zdGFuY2UuYnJhbmNoID0gX2luc3RhbmNlLmJyYW5jaCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5uUmVwZWF0U3lub255bSA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuYnJhbmNoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig2LCBfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJyYW5jaCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2UuYnJhbmNoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50OiBzdHJpbmc7XG4gIHByaXZhdGUgX25SZXBlYXRTeW5vbnltOiBudW1iZXI7XG4gIHByaXZhdGUgX2JyYW5jaDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5uUmVwZWF0U3lub255bSA9IF92YWx1ZS5uUmVwZWF0U3lub255bTtcbiAgICB0aGlzLmJyYW5jaCA9IF92YWx1ZS5icmFuY2g7XG4gICAgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBuUmVwZWF0U3lub255bSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uUmVwZWF0U3lub255bTtcbiAgfVxuICBzZXQgblJlcGVhdFN5bm9ueW0odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25SZXBlYXRTeW5vbnltID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJyYW5jaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9icmFuY2g7XG4gIH1cbiAgc2V0IGJyYW5jaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJhbmNoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5SZXBlYXRTeW5vbnltOiB0aGlzLm5SZXBlYXRTeW5vbnltLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBuUmVwZWF0U3lub255bTogdGhpcy5uUmVwZWF0U3lub255bSxcbiAgICAgIGJyYW5jaDogdGhpcy5icmFuY2hcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgblJlcGVhdFN5bm9ueW06IG51bWJlcjtcbiAgICBicmFuY2g6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgblJlcGVhdFN5bm9ueW06IG51bWJlcjtcbiAgICBicmFuY2g6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCgpO1xuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5uUmVwZWF0U3lub255bSA9IF9pbnN0YW5jZS5uUmVwZWF0U3lub255bSB8fCAwO1xuICAgIF9pbnN0YW5jZS5icmFuY2ggPSBfaW5zdGFuY2UuYnJhbmNoIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMgPSBfaW5zdGFuY2UuZHJvcFVua25vd25QYXJhbWV0ZXJzIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5uUmVwZWF0U3lub255bSA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UuYnJhbmNoID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UuZHJvcFVua25vd25QYXJhbWV0ZXJzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMig3LCBfaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJyYW5jaCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg4LCBfaW5zdGFuY2UuYnJhbmNoKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDksIF9pbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZTogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfblJlcGVhdFN5bm9ueW06IG51bWJlcjtcbiAgcHJpdmF0ZSBfYnJhbmNoOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Ryb3BVbmtub3duUGFyYW1ldGVyczogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5uUmVwZWF0U3lub255bSA9IF92YWx1ZS5uUmVwZWF0U3lub255bTtcbiAgICB0aGlzLmJyYW5jaCA9IF92YWx1ZS5icmFuY2g7XG4gICAgdGhpcy5kcm9wVW5rbm93blBhcmFtZXRlcnMgPSBfdmFsdWUuZHJvcFVua25vd25QYXJhbWV0ZXJzO1xuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5SZXBlYXRTeW5vbnltKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25SZXBlYXRTeW5vbnltO1xuICB9XG4gIHNldCBuUmVwZWF0U3lub255bSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fblJlcGVhdFN5bm9ueW0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnJhbmNoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaDtcbiAgfVxuICBzZXQgYnJhbmNoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9icmFuY2ggPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJvcFVua25vd25QYXJhbWV0ZXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcm9wVW5rbm93blBhcmFtZXRlcnM7XG4gIH1cbiAgc2V0IGRyb3BVbmtub3duUGFyYW1ldGVycyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Ryb3BVbmtub3duUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5SZXBlYXRTeW5vbnltOiB0aGlzLm5SZXBlYXRTeW5vbnltLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaCxcbiAgICAgIGRyb3BVbmtub3duUGFyYW1ldGVyczogdGhpcy5kcm9wVW5rbm93blBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5SZXBlYXRTeW5vbnltOiB0aGlzLm5SZXBlYXRTeW5vbnltLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaCxcbiAgICAgIGRyb3BVbmtub3duUGFyYW1ldGVyczogdGhpcy5kcm9wVW5rbm93blBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBuUmVwZWF0U3lub255bTogbnVtYmVyO1xuICAgIGJyYW5jaDogc3RyaW5nO1xuICAgIGRyb3BVbmtub3duUGFyYW1ldGVyczogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIG5SZXBlYXRTeW5vbnltOiBudW1iZXI7XG4gICAgYnJhbmNoOiBzdHJpbmc7XG4gICAgZHJvcFVua25vd25QYXJhbWV0ZXJzOiBib29sZWFuO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5HZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KCk7XG4gICAgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLmNvbmZpZyA9IF9pbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSA9IF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmludGVudE5hbWUgPSBfaW5zdGFuY2UuaW50ZW50TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGV0ZWN0RW50aXRpZXMgPSBfaW5zdGFuY2UuZGV0ZWN0RW50aXRpZXMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQgPSBfaW5zdGFuY2Uuc2ltaWxhcml0eVRocmVzaG9sZCB8fCAwO1xuICAgIF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyA9IF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uud29yZHNUb0NoYW5nZSA9IF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5icmFuY2ggPSBfaW5zdGFuY2UuYnJhbmNoIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcgPSBuZXcgRGF0YUVucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNvbmZpZyxcbiAgICAgICAgICAgIERhdGFFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgPSBuZXcgb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UsXG4gICAgICAgICAgICBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmRldGVjdEVudGl0aWVzID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgKF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyA9IF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIChfaW5zdGFuY2Uud29yZHNUb0NoYW5nZSA9IF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5icmFuY2ggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY29uZmlnIGFzIGFueSxcbiAgICAgICAgRGF0YUVucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmludGVudE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGV0ZWN0RW50aXRpZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS5kZXRlY3RFbnRpdGllcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2ltaWxhcml0eVRocmVzaG9sZCkge1xuICAgICAgX3dyaXRlci53cml0ZUZsb2F0KDcsIF9pbnN0YW5jZS5zaW1pbGFyaXR5VGhyZXNob2xkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyAmJiBfaW5zdGFuY2UucHJvdGVjdGVkV29yZHMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoOCwgX2luc3RhbmNlLnByb3RlY3RlZFdvcmRzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlICYmIF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDksIF9pbnN0YW5jZS53b3Jkc1RvQ2hhbmdlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5icmFuY2gpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTAsIF9pbnN0YW5jZS5icmFuY2gpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZz86IERhdGFFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZT86IG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2U7XG4gIHByaXZhdGUgX2ludGVudE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9kZXRlY3RFbnRpdGllczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc2ltaWxhcml0eVRocmVzaG9sZDogbnVtYmVyO1xuICBwcml2YXRlIF9wcm90ZWN0ZWRXb3Jkczogc3RyaW5nW107XG4gIHByaXZhdGUgX3dvcmRzVG9DaGFuZ2U6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9icmFuY2g6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKF92YWx1ZS5jb25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlKF92YWx1ZS50cmFpbmluZ1BocmFzZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50TmFtZSA9IF92YWx1ZS5pbnRlbnROYW1lO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5kZXRlY3RFbnRpdGllcyA9IF92YWx1ZS5kZXRlY3RFbnRpdGllcztcbiAgICB0aGlzLnNpbWlsYXJpdHlUaHJlc2hvbGQgPSBfdmFsdWUuc2ltaWxhcml0eVRocmVzaG9sZDtcbiAgICB0aGlzLnByb3RlY3RlZFdvcmRzID0gKF92YWx1ZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLndvcmRzVG9DaGFuZ2UgPSAoX3ZhbHVlLndvcmRzVG9DaGFuZ2UgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5icmFuY2ggPSBfdmFsdWUuYnJhbmNoO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZSgpOiBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2U7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlKHZhbHVlOiBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnROYW1lO1xuICB9XG4gIHNldCBpbnRlbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRldGVjdEVudGl0aWVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZXRlY3RFbnRpdGllcztcbiAgfVxuICBzZXQgZGV0ZWN0RW50aXRpZXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZXRlY3RFbnRpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCBzaW1pbGFyaXR5VGhyZXNob2xkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbWlsYXJpdHlUaHJlc2hvbGQ7XG4gIH1cbiAgc2V0IHNpbWlsYXJpdHlUaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpbWlsYXJpdHlUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJvdGVjdGVkV29yZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9wcm90ZWN0ZWRXb3JkcztcbiAgfVxuICBzZXQgcHJvdGVjdGVkV29yZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJvdGVjdGVkV29yZHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZHNUb0NoYW5nZSgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmRzVG9DaGFuZ2U7XG4gIH1cbiAgc2V0IHdvcmRzVG9DaGFuZ2UodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd29yZHNUb0NoYW5nZSA9IHZhbHVlO1xuICB9XG4gIGdldCBicmFuY2goKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmNoO1xuICB9XG4gIHNldCBicmFuY2godmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JyYW5jaCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHRyYWluaW5nUGhyYXNlOiB0aGlzLnRyYWluaW5nUGhyYXNlXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZW50TmFtZTogdGhpcy5pbnRlbnROYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBkZXRlY3RFbnRpdGllczogdGhpcy5kZXRlY3RFbnRpdGllcyxcbiAgICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IHRoaXMuc2ltaWxhcml0eVRocmVzaG9sZCxcbiAgICAgIHByb3RlY3RlZFdvcmRzOiAodGhpcy5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHdvcmRzVG9DaGFuZ2U6ICh0aGlzLndvcmRzVG9DaGFuZ2UgfHwgW10pLnNsaWNlKCksXG4gICAgICBicmFuY2g6IHRoaXMuYnJhbmNoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIHRyYWluaW5nUGhyYXNlOiB0aGlzLnRyYWluaW5nUGhyYXNlXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBpbnRlbnROYW1lOiB0aGlzLmludGVudE5hbWUsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGRldGVjdEVudGl0aWVzOiB0aGlzLmRldGVjdEVudGl0aWVzLFxuICAgICAgc2ltaWxhcml0eVRocmVzaG9sZDogdGhpcy5zaW1pbGFyaXR5VGhyZXNob2xkLFxuICAgICAgcHJvdGVjdGVkV29yZHM6ICh0aGlzLnByb3RlY3RlZFdvcmRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgd29yZHNUb0NoYW5nZTogKHRoaXMud29yZHNUb0NoYW5nZSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGJyYW5jaDogdGhpcy5icmFuY2hcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjb25maWc/OiBEYXRhRW5yaWNobWVudENvbmZpZy5Bc09iamVjdDtcbiAgICB0cmFpbmluZ1BocmFzZT86IG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuQXNPYmplY3Q7XG4gICAgaW50ZW50TmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIGRldGVjdEVudGl0aWVzOiBib29sZWFuO1xuICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWRXb3Jkczogc3RyaW5nW107XG4gICAgd29yZHNUb0NoYW5nZTogc3RyaW5nW107XG4gICAgYnJhbmNoOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBjb25maWc6IERhdGFFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0cmFpbmluZ1BocmFzZTogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaW50ZW50TmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIGRldGVjdEVudGl0aWVzOiBib29sZWFuO1xuICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWRXb3Jkczogc3RyaW5nW107XG4gICAgd29yZHNUb0NoYW5nZTogc3RyaW5nW107XG4gICAgYnJhbmNoOiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdldFN5bm9ueW1zUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgR2V0U3lub255bXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5HZXRTeW5vbnltc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRTeW5vbnltc1JlcXVlc3QoKTtcbiAgICBHZXRTeW5vbnltc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBHZXRTeW5vbnltc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuY29uZmlnID0gX2luc3RhbmNlLmNvbmZpZyB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLndvcmQgPSBfaW5zdGFuY2Uud29yZCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY29uZmlnID0gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jb25maWcsXG4gICAgICAgICAgICBEYXRhRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLndvcmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFN5bm9ueW1zUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY29uZmlnIGFzIGFueSxcbiAgICAgICAgRGF0YUVucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uud29yZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uud29yZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWc/OiBEYXRhRW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfd29yZDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRTeW5vbnltc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0U3lub255bXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IF92YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKF92YWx1ZS5jb25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndvcmQgPSBfdmFsdWUud29yZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIEdldFN5bm9ueW1zUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCB3b3JkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmQ7XG4gIH1cbiAgc2V0IHdvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRTeW5vbnltc1JlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0U3lub255bXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldFN5bm9ueW1zUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICB3b3JkOiB0aGlzLndvcmQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0U3lub255bXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTeW5vbnltc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNvbmZpZz86IERhdGFFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIHdvcmQ6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRTeW5vbnltc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNvbmZpZzogRGF0YUVucmljaG1lbnRDb25maWcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHdvcmQ6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2V0U3lub255bXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgR2V0U3lub255bXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0U3lub255bXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldFN5bm9ueW1zUmVzcG9uc2UoKTtcbiAgICBHZXRTeW5vbnltc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0U3lub255bXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5zeW5vbnltcyA9IF9pbnN0YW5jZS5zeW5vbnltcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBTeW5vbnltKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBTeW5vbnltLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5zeW5vbnltcyA9IF9pbnN0YW5jZS5zeW5vbnltcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0U3lub255bXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc3lub255bXMgJiYgX2luc3RhbmNlLnN5bm9ueW1zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLnN5bm9ueW1zIGFzIGFueSxcbiAgICAgICAgU3lub255bS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zeW5vbnltcz86IFN5bm9ueW1bXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldFN5bm9ueW1zUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0U3lub255bXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW5vbnltcyA9IChfdmFsdWUuc3lub255bXMgfHwgW10pLm1hcChtID0+IG5ldyBTeW5vbnltKG0pKTtcbiAgICBHZXRTeW5vbnltc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3lub255bXMoKTogU3lub255bVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3lub255bXM7XG4gIH1cbiAgc2V0IHN5bm9ueW1zKHZhbHVlOiBTeW5vbnltW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zeW5vbnltcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldFN5bm9ueW1zUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0U3lub255bXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bm9ueW1zOiAodGhpcy5zeW5vbnltcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldFN5bm9ueW1zUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzeW5vbnltczogKHRoaXMuc3lub255bXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTeW5vbnltc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRTeW5vbnltc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzeW5vbnltcz86IFN5bm9ueW0uQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRTeW5vbnltc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzeW5vbnltczogU3lub255bS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU3lub255bVxuICovXG5leHBvcnQgY2xhc3MgU3lub255bSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU3lub255bSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bm9ueW0oKTtcbiAgICBTeW5vbnltLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU3lub255bSkge1xuICAgIF9pbnN0YW5jZS5zeW5vbnltID0gX2luc3RhbmNlLnN5bm9ueW0gfHwgJyc7XG4gICAgX2luc3RhbmNlLnNjb3JlID0gX2luc3RhbmNlLnNjb3JlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBTeW5vbnltLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zeW5vbnltID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2NvcmUgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3lub255bS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFN5bm9ueW0sIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChfaW5zdGFuY2Uuc3lub255bSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc3lub255bSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2NvcmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyLCBfaW5zdGFuY2Uuc2NvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N5bm9ueW06IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFN5bm9ueW0gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3lub255bS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW5vbnltID0gX3ZhbHVlLnN5bm9ueW07XG4gICAgdGhpcy5zY29yZSA9IF92YWx1ZS5zY29yZTtcbiAgICBTeW5vbnltLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3lub255bSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zeW5vbnltO1xuICB9XG4gIHNldCBzeW5vbnltKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zeW5vbnltID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xuICB9XG4gIHNldCBzY29yZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2NvcmUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTeW5vbnltLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN5bm9ueW0uQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzeW5vbnltOiB0aGlzLnN5bm9ueW0sXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFN5bm9ueW0uQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzeW5vbnltOiB0aGlzLnN5bm9ueW0sXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3lub255bSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3lub255bVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3lub255bTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3lub255bVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3lub255bTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlKCk7XG4gICAgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgPSBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgQWx0U2VudGVuY2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIEFsdFNlbnRlbmNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5hbHRlcm5hdGl2ZVNlbnRlbmNlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLmFsdGVybmF0aXZlU2VudGVuY2VzICYmXG4gICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgYXMgYW55LFxuICAgICAgICBBbHRTZW50ZW5jZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hbHRlcm5hdGl2ZVNlbnRlbmNlcz86IEFsdFNlbnRlbmNlW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFsdGVybmF0aXZlU2VudGVuY2VzID0gKF92YWx1ZS5hbHRlcm5hdGl2ZVNlbnRlbmNlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgQWx0U2VudGVuY2UobSlcbiAgICApO1xuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhbHRlcm5hdGl2ZVNlbnRlbmNlcygpOiBBbHRTZW50ZW5jZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWx0ZXJuYXRpdmVTZW50ZW5jZXM7XG4gIH1cbiAgc2V0IGFsdGVybmF0aXZlU2VudGVuY2VzKHZhbHVlOiBBbHRTZW50ZW5jZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWx0ZXJuYXRpdmVTZW50ZW5jZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhbHRlcm5hdGl2ZVNlbnRlbmNlczogKHRoaXMuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhbHRlcm5hdGl2ZVNlbnRlbmNlczogKHRoaXMuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGFsdGVybmF0aXZlU2VudGVuY2VzPzogQWx0U2VudGVuY2UuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBhbHRlcm5hdGl2ZVNlbnRlbmNlczogQWx0U2VudGVuY2UuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlKCk7XG4gICAgR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UucmVzcG9uc2VzID0gX2luc3RhbmNlLnJlc3BvbnNlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5yZXNwb25zZXMgPSBfaW5zdGFuY2UucmVzcG9uc2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmVzcG9uc2VzICYmIF9pbnN0YW5jZS5yZXNwb25zZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnJlc3BvbnNlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzcG9uc2VzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5yZXNwb25zZXMgPSAoX3ZhbHVlLnJlc3BvbnNlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcmVzcG9uc2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VzO1xuICB9XG4gIHNldCByZXNwb25zZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2VzOiAodGhpcy5yZXNwb25zZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzcG9uc2VzOiAodGhpcy5yZXNwb25zZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHJlc3BvbnNlczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcmVzcG9uc2VzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkdlbmVyYXRlVXNlclNheXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSgpO1xuICAgIEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS51c2VyU2F5cyA9IF9pbnN0YW5jZS51c2VyU2F5cyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLnVzZXJTYXlzID0gX2luc3RhbmNlLnVzZXJTYXlzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnVzZXJTYXlzICYmIF9pbnN0YW5jZS51c2VyU2F5cy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UudXNlclNheXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJTYXlzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMudXNlclNheXMgPSAoX3ZhbHVlLnVzZXJTYXlzIHx8IFtdKS5zbGljZSgpO1xuICAgIEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZXJTYXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclNheXM7XG4gIH1cbiAgc2V0IHVzZXJTYXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3VzZXJTYXlzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJTYXlzOiAodGhpcy51c2VyU2F5cyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJTYXlzOiAodGhpcy51c2VyU2F5cyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHVzZXJTYXlzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHVzZXJTYXlzOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UoKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyA9XG4gICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgQWx0VHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIEFsdFRyYWluaW5nUGhyYXNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoXG4gICAgICBfaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgJiZcbiAgICAgIF9pbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyBhcyBhbnksXG4gICAgICAgIEFsdFRyYWluaW5nUGhyYXNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzPzogQWx0VHJhaW5pbmdQaHJhc2VbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgPSAoXG4gICAgICBfdmFsdWUuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW11cbiAgICApLm1hcChtID0+IG5ldyBBbHRUcmFpbmluZ1BocmFzZShtKSk7XG4gICAgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzKCk6IEFsdFRyYWluaW5nUGhyYXNlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcztcbiAgfVxuICBzZXQgYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXModmFsdWU6IEFsdFRyYWluaW5nUGhyYXNlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW11cbiAgICAgICkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBhbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlczogKFxuICAgICAgICB0aGlzLmFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzIHx8IFtdXG4gICAgICApLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBhbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcz86IEFsdFRyYWluaW5nUGhyYXNlLkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXM6IEFsdFRyYWluaW5nUGhyYXNlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5BbHRTZW50ZW5jZVxuICovXG5leHBvcnQgY2xhc3MgQWx0U2VudGVuY2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkFsdFNlbnRlbmNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWx0U2VudGVuY2UoKTtcbiAgICBBbHRTZW50ZW5jZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFsdFNlbnRlbmNlKSB7XG4gICAgX2luc3RhbmNlLnNlbnRlbmNlID0gX2luc3RhbmNlLnNlbnRlbmNlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zY29yZSA9IF9pbnN0YW5jZS5zY29yZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQWx0U2VudGVuY2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnNlbnRlbmNlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2NvcmUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWx0U2VudGVuY2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBbHRTZW50ZW5jZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zZW50ZW5jZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2Uuc2VudGVuY2UpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNjb3JlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoMiwgX2luc3RhbmNlLnNjb3JlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZW50ZW5jZTogc3RyaW5nO1xuICBwcml2YXRlIF9zY29yZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWx0U2VudGVuY2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWx0U2VudGVuY2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2VudGVuY2UgPSBfdmFsdWUuc2VudGVuY2U7XG4gICAgdGhpcy5zY29yZSA9IF92YWx1ZS5zY29yZTtcbiAgICBBbHRTZW50ZW5jZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlbnRlbmNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbnRlbmNlO1xuICB9XG4gIHNldCBzZW50ZW5jZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VudGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFsdFNlbnRlbmNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFsdFNlbnRlbmNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VudGVuY2U6IHRoaXMuc2VudGVuY2UsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFsdFNlbnRlbmNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VudGVuY2U6IHRoaXMuc2VudGVuY2UsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWx0U2VudGVuY2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFsdFNlbnRlbmNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzZW50ZW5jZTogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQWx0U2VudGVuY2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHNlbnRlbmNlOiBzdHJpbmc7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQWx0VHJhaW5pbmdQaHJhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEFsdFRyYWluaW5nUGhyYXNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BbHRUcmFpbmluZ1BocmFzZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFsdFRyYWluaW5nUGhyYXNlKCk7XG4gICAgQWx0VHJhaW5pbmdQaHJhc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBbHRUcmFpbmluZ1BocmFzZSkge1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSA9IF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnNjb3JlID0gX2luc3RhbmNlLnNjb3JlIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBbHRUcmFpbmluZ1BocmFzZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgPSBuZXcgb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UsXG4gICAgICAgICAgICBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uuc2NvcmUgPSBfcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWx0VHJhaW5pbmdQaHJhc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBbHRUcmFpbmluZ1BocmFzZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAxMC5JbnRlbnQuVHJhaW5pbmdQaHJhc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc2NvcmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVGbG9hdCgyLCBfaW5zdGFuY2Uuc2NvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlPzogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZTtcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFsdFRyYWluaW5nUGhyYXNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFsdFRyYWluaW5nUGhyYXNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlKF92YWx1ZS50cmFpbmluZ1BocmFzZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NvcmUgPSBfdmFsdWUuc2NvcmU7XG4gICAgQWx0VHJhaW5pbmdQaHJhc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZSgpOiBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2U7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlKHZhbHVlOiBvbmRld29ObHUwMTAuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFsdFRyYWluaW5nUGhyYXNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFsdFRyYWluaW5nUGhyYXNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhaW5pbmdQaHJhc2U6IHRoaXMudHJhaW5pbmdQaHJhc2VcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFsdFRyYWluaW5nUGhyYXNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhaW5pbmdQaHJhc2U6IHRoaXMudHJhaW5pbmdQaHJhc2VcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbHRUcmFpbmluZ1BocmFzZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQWx0VHJhaW5pbmdQaHJhc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIHRyYWluaW5nUGhyYXNlPzogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5Bc09iamVjdDtcbiAgICBzY29yZTogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEFsdFRyYWluaW5nUGhyYXNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICB0cmFpbmluZ1BocmFzZTogb25kZXdvTmx1MDEwLkludGVudC5UcmFpbmluZ1BocmFzZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc2NvcmU6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRGF0YUVucmljaG1lbnRDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5EYXRhRW5yaWNobWVudENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgRGF0YUVucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBEYXRhRW5yaWNobWVudENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5lbnRpdHlFbnJpY2htZW50ID0gX2luc3RhbmNlLmVudGl0eUVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50ID0gX2luc3RhbmNlLnRoZXNhdXJ1c0VucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQgPSBfaW5zdGFuY2Uud29yZDJ2ZWNFbnJpY2htZW50IHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2Uud29yZE5ldEVucmljaG1lbnQgPSBfaW5zdGFuY2Uud29yZE5ldEVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5ncHQyRW5yaWNobWVudCA9IF9pbnN0YW5jZS5ncHQyRW5yaWNobWVudCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmdsb3ZlRW5yaWNobWVudCA9IF9pbnN0YW5jZS5nbG92ZUVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5iZXJ0RW5yaWNobWVudCA9IF9pbnN0YW5jZS5iZXJ0RW5yaWNobWVudCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnhsbmV0RW5yaWNobWVudCA9IF9pbnN0YW5jZS54bG5ldEVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogRGF0YUVucmljaG1lbnRDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eUVucmljaG1lbnQgPSBuZXcgRW50aXR5RW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5RW5yaWNobWVudCxcbiAgICAgICAgICAgIEVudGl0eUVucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50ID0gbmV3IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnRoZXNhdXJ1c0VucmljaG1lbnQsXG4gICAgICAgICAgICBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2Uud29yZDJ2ZWNFbnJpY2htZW50ID0gbmV3IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uud29yZDJ2ZWNFbnJpY2htZW50LFxuICAgICAgICAgICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2Uud29yZE5ldEVucmljaG1lbnQgPSBuZXcgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLndvcmROZXRFbnJpY2htZW50LFxuICAgICAgICAgICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5ncHQyRW5yaWNobWVudCA9IG5ldyBHUFQyRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZ3B0MkVucmljaG1lbnQsXG4gICAgICAgICAgICBHUFQyRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmdsb3ZlRW5yaWNobWVudCA9IG5ldyBHbG9WZUVucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmdsb3ZlRW5yaWNobWVudCxcbiAgICAgICAgICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmJlcnRFbnJpY2htZW50ID0gbmV3IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5iZXJ0RW5yaWNobWVudCxcbiAgICAgICAgICAgIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UueGxuZXRFbnJpY2htZW50ID0gbmV3IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UueGxuZXRFbnJpY2htZW50LFxuICAgICAgICAgICAgWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEYXRhRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IERhdGFFbnJpY2htZW50Q29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmVudGl0eUVucmljaG1lbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuZW50aXR5RW5yaWNobWVudCBhcyBhbnksXG4gICAgICAgIEVudGl0eUVucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGhlc2F1cnVzRW5yaWNobWVudCkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBfaW5zdGFuY2Uud29yZDJ2ZWNFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndvcmROZXRFbnJpY2htZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLndvcmROZXRFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZ3B0MkVucmljaG1lbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UuZ3B0MkVucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBHUFQyRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5nbG92ZUVucmljaG1lbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuZ2xvdmVFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgR2xvVmVFbnJpY2htZW50Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmJlcnRFbnJpY2htZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgX2luc3RhbmNlLmJlcnRFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgQmVydEF1Z0VucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UueGxuZXRFbnJpY2htZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgX2luc3RhbmNlLnhsbmV0RW5yaWNobWVudCBhcyBhbnksXG4gICAgICAgIFhMTmV0QXVnRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlFbnJpY2htZW50PzogRW50aXR5RW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfdGhlc2F1cnVzRW5yaWNobWVudD86IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3dvcmQydmVjRW5yaWNobWVudD86IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfd29yZE5ldEVucmljaG1lbnQ/OiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfZ3B0MkVucmljaG1lbnQ/OiBHUFQyRW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfZ2xvdmVFbnJpY2htZW50PzogR2xvVmVFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF9iZXJ0RW5yaWNobWVudD86IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF94bG5ldEVucmljaG1lbnQ/OiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEYXRhRW5yaWNobWVudENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEYXRhRW5yaWNobWVudENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lbnRpdHlFbnJpY2htZW50ID0gX3ZhbHVlLmVudGl0eUVucmljaG1lbnRcbiAgICAgID8gbmV3IEVudGl0eUVucmljaG1lbnRDb25maWcoX3ZhbHVlLmVudGl0eUVucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRoZXNhdXJ1c0VucmljaG1lbnQgPSBfdmFsdWUudGhlc2F1cnVzRW5yaWNobWVudFxuICAgICAgPyBuZXcgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyhfdmFsdWUudGhlc2F1cnVzRW5yaWNobWVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud29yZDJ2ZWNFbnJpY2htZW50ID0gX3ZhbHVlLndvcmQydmVjRW5yaWNobWVudFxuICAgICAgPyBuZXcgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnKF92YWx1ZS53b3JkMnZlY0VucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndvcmROZXRFbnJpY2htZW50ID0gX3ZhbHVlLndvcmROZXRFbnJpY2htZW50XG4gICAgICA/IG5ldyBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyhfdmFsdWUud29yZE5ldEVucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdwdDJFbnJpY2htZW50ID0gX3ZhbHVlLmdwdDJFbnJpY2htZW50XG4gICAgICA/IG5ldyBHUFQyRW5yaWNobWVudENvbmZpZyhfdmFsdWUuZ3B0MkVucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdsb3ZlRW5yaWNobWVudCA9IF92YWx1ZS5nbG92ZUVucmljaG1lbnRcbiAgICAgID8gbmV3IEdsb1ZlRW5yaWNobWVudENvbmZpZyhfdmFsdWUuZ2xvdmVFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5iZXJ0RW5yaWNobWVudCA9IF92YWx1ZS5iZXJ0RW5yaWNobWVudFxuICAgICAgPyBuZXcgQmVydEF1Z0VucmljaG1lbnRDb25maWcoX3ZhbHVlLmJlcnRFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy54bG5ldEVucmljaG1lbnQgPSBfdmFsdWUueGxuZXRFbnJpY2htZW50XG4gICAgICA/IG5ldyBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcoX3ZhbHVlLnhsbmV0RW5yaWNobWVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIERhdGFFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5RW5yaWNobWVudCgpOiBFbnRpdHlFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5RW5yaWNobWVudDtcbiAgfVxuICBzZXQgZW50aXR5RW5yaWNobWVudCh2YWx1ZTogRW50aXR5RW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eUVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGhlc2F1cnVzRW5yaWNobWVudCgpOiBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlc2F1cnVzRW5yaWNobWVudDtcbiAgfVxuICBzZXQgdGhlc2F1cnVzRW5yaWNobWVudCh2YWx1ZTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RoZXNhdXJ1c0VucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZDJ2ZWNFbnJpY2htZW50KCk6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmQydmVjRW5yaWNobWVudDtcbiAgfVxuICBzZXQgd29yZDJ2ZWNFbnJpY2htZW50KHZhbHVlOiBXb3JkMlZlY0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93b3JkMnZlY0VucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd29yZE5ldEVucmljaG1lbnQoKTogV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkTmV0RW5yaWNobWVudDtcbiAgfVxuICBzZXQgd29yZE5ldEVucmljaG1lbnQodmFsdWU6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd29yZE5ldEVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ3B0MkVucmljaG1lbnQoKTogR1BUMkVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ncHQyRW5yaWNobWVudDtcbiAgfVxuICBzZXQgZ3B0MkVucmljaG1lbnQodmFsdWU6IEdQVDJFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ3B0MkVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ2xvdmVFbnJpY2htZW50KCk6IEdsb1ZlRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb3ZlRW5yaWNobWVudDtcbiAgfVxuICBzZXQgZ2xvdmVFbnJpY2htZW50KHZhbHVlOiBHbG9WZUVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nbG92ZUVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYmVydEVucmljaG1lbnQoKTogQmVydEF1Z0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9iZXJ0RW5yaWNobWVudDtcbiAgfVxuICBzZXQgYmVydEVucmljaG1lbnQodmFsdWU6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYmVydEVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgeGxuZXRFbnJpY2htZW50KCk6IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3hsbmV0RW5yaWNobWVudDtcbiAgfVxuICBzZXQgeGxuZXRFbnJpY2htZW50KHZhbHVlOiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl94bG5ldEVucmljaG1lbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEYXRhRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBEYXRhRW5yaWNobWVudENvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eUVucmljaG1lbnQ6IHRoaXMuZW50aXR5RW5yaWNobWVudFxuICAgICAgICA/IHRoaXMuZW50aXR5RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGhlc2F1cnVzRW5yaWNobWVudDogdGhpcy50aGVzYXVydXNFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy50aGVzYXVydXNFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB3b3JkMnZlY0VucmljaG1lbnQ6IHRoaXMud29yZDJ2ZWNFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy53b3JkMnZlY0VucmljaG1lbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHdvcmROZXRFbnJpY2htZW50OiB0aGlzLndvcmROZXRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy53b3JkTmV0RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZ3B0MkVucmljaG1lbnQ6IHRoaXMuZ3B0MkVucmljaG1lbnRcbiAgICAgICAgPyB0aGlzLmdwdDJFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBnbG92ZUVucmljaG1lbnQ6IHRoaXMuZ2xvdmVFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy5nbG92ZUVucmljaG1lbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGJlcnRFbnJpY2htZW50OiB0aGlzLmJlcnRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy5iZXJ0RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgeGxuZXRFbnJpY2htZW50OiB0aGlzLnhsbmV0RW5yaWNobWVudFxuICAgICAgICA/IHRoaXMueGxuZXRFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEYXRhRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eUVucmljaG1lbnQ6IHRoaXMuZW50aXR5RW5yaWNobWVudFxuICAgICAgICA/IHRoaXMuZW50aXR5RW5yaWNobWVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB0aGVzYXVydXNFbnJpY2htZW50OiB0aGlzLnRoZXNhdXJ1c0VucmljaG1lbnRcbiAgICAgICAgPyB0aGlzLnRoZXNhdXJ1c0VucmljaG1lbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgd29yZDJ2ZWNFbnJpY2htZW50OiB0aGlzLndvcmQydmVjRW5yaWNobWVudFxuICAgICAgICA/IHRoaXMud29yZDJ2ZWNFbnJpY2htZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHdvcmROZXRFbnJpY2htZW50OiB0aGlzLndvcmROZXRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy53b3JkTmV0RW5yaWNobWVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBncHQyRW5yaWNobWVudDogdGhpcy5ncHQyRW5yaWNobWVudFxuICAgICAgICA/IHRoaXMuZ3B0MkVucmljaG1lbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgZ2xvdmVFbnJpY2htZW50OiB0aGlzLmdsb3ZlRW5yaWNobWVudFxuICAgICAgICA/IHRoaXMuZ2xvdmVFbnJpY2htZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGJlcnRFbnJpY2htZW50OiB0aGlzLmJlcnRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy5iZXJ0RW5yaWNobWVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICB4bG5ldEVucmljaG1lbnQ6IHRoaXMueGxuZXRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy54bG5ldEVucmljaG1lbnQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEYXRhRW5yaWNobWVudENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRGF0YUVucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVudGl0eUVucmljaG1lbnQ/OiBFbnRpdHlFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIHRoZXNhdXJ1c0VucmljaG1lbnQ/OiBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIHdvcmQydmVjRW5yaWNobWVudD86IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZy5Bc09iamVjdDtcbiAgICB3b3JkTmV0RW5yaWNobWVudD86IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIGdwdDJFbnJpY2htZW50PzogR1BUMkVucmljaG1lbnRDb25maWcuQXNPYmplY3Q7XG4gICAgZ2xvdmVFbnJpY2htZW50PzogR2xvVmVFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICAgIGJlcnRFbnJpY2htZW50PzogQmVydEF1Z0VucmljaG1lbnRDb25maWcuQXNPYmplY3Q7XG4gICAgeGxuZXRFbnJpY2htZW50PzogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERhdGFFbnJpY2htZW50Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlFbnJpY2htZW50OiBFbnRpdHlFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB0aGVzYXVydXNFbnJpY2htZW50OiBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICB3b3JkMnZlY0VucmljaG1lbnQ6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgd29yZE5ldEVucmljaG1lbnQ6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBncHQyRW5yaWNobWVudDogR1BUMkVucmljaG1lbnRDb25maWcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGdsb3ZlRW5yaWNobWVudDogR2xvVmVFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBiZXJ0RW5yaWNobWVudDogQmVydEF1Z0VucmljaG1lbnRDb25maWcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHhsbmV0RW5yaWNobWVudDogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRW50aXR5RW5yaWNobWVudENvbmZpZ1xuICovXG5leHBvcnQgY2xhc3MgRW50aXR5RW5yaWNobWVudENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRW50aXR5RW5yaWNobWVudENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudGl0eUVucmljaG1lbnRDb25maWcoKTtcbiAgICBFbnRpdHlFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRW50aXR5RW5yaWNobWVudENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9pbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yIHx8IDA7XG4gICAgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBFbnRpdHlFbnJpY2htZW50Q29uZmlnLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnRpdHlFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRW50aXR5RW5yaWNobWVudENvbmZpZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLmlzQWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMiwgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMywgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRW50aXR5RW5yaWNobWVudENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnRpdHlFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gX3ZhbHVlLmlzQWN0aXZlO1xuICAgIHRoaXMuZW5yaWNobWVudEZhY3RvciA9IF92YWx1ZS5lbnJpY2htZW50RmFjdG9yO1xuICAgIHRoaXMuZXhlY3V0aW9uT3JkZXIgPSBfdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgRW50aXR5RW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnJpY2htZW50RmFjdG9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VucmljaG1lbnRGYWN0b3I7XG4gIH1cbiAgc2V0IGVucmljaG1lbnRGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VucmljaG1lbnRGYWN0b3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXhlY3V0aW9uT3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uT3JkZXI7XG4gIH1cbiAgc2V0IGV4ZWN1dGlvbk9yZGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9leGVjdXRpb25PcmRlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVudGl0eUVucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogRW50aXR5RW5yaWNobWVudENvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBFbnRpdHlFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRW50aXR5RW5yaWNobWVudENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5RW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5RW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlRoZXNhdXJ1c0VucmljaG1lbnRDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIsIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDMsIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pc0FjdGl2ZSA9IF92YWx1ZS5pc0FjdGl2ZTtcbiAgICB0aGlzLmVucmljaG1lbnRGYWN0b3IgPSBfdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gX3ZhbHVlLmV4ZWN1dGlvbk9yZGVyO1xuICAgIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIGVucmljaG1lbnRGYWN0b3I6IHRoaXMuZW5yaWNobWVudEZhY3RvcixcbiAgICAgIGV4ZWN1dGlvbk9yZGVyOiB0aGlzLmV4ZWN1dGlvbk9yZGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5CZXJ0QXVnRW5yaWNobWVudENvbmZpZ1xuICovXG5leHBvcnQgY2xhc3MgQmVydEF1Z0VucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJlcnRBdWdFbnJpY2htZW50Q29uZmlnJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmVydEF1Z0VucmljaG1lbnRDb25maWcoKTtcbiAgICBCZXJ0QXVnRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgX2luc3RhbmNlLmlzQWN0aXZlID0gX2luc3RhbmNlLmlzQWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCZXJ0QXVnRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlzQWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyLCBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigzLCBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIF9lbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gIHByaXZhdGUgX2V4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCZXJ0QXVnRW5yaWNobWVudENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCZXJ0QXVnRW5yaWNobWVudENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pc0FjdGl2ZSA9IF92YWx1ZS5pc0FjdGl2ZTtcbiAgICB0aGlzLmVucmljaG1lbnRGYWN0b3IgPSBfdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gX3ZhbHVlLmV4ZWN1dGlvbk9yZGVyO1xuICAgIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmVydEF1Z0VucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQmVydEF1Z0VucmljaG1lbnRDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIGVucmljaG1lbnRGYWN0b3I6IHRoaXMuZW5yaWNobWVudEZhY3RvcixcbiAgICAgIGV4ZWN1dGlvbk9yZGVyOiB0aGlzLmV4ZWN1dGlvbk9yZGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQmVydEF1Z0VucmljaG1lbnRDb25maWcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIGVucmljaG1lbnRGYWN0b3I6IHRoaXMuZW5yaWNobWVudEZhY3RvcixcbiAgICAgIGV4ZWN1dGlvbk9yZGVyOiB0aGlzLmV4ZWN1dGlvbk9yZGVyXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCZXJ0QXVnRW5yaWNobWVudENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQmVydEF1Z0VucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBlbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2xvVmVFbnJpY2htZW50Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9WZUVucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1Lkdsb1ZlRW5yaWNobWVudENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdsb1ZlRW5yaWNobWVudENvbmZpZygpO1xuICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEdsb1ZlRW5yaWNobWVudENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9pbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yIHx8IDA7XG4gICAgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBHbG9WZUVucmljaG1lbnRDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQWN0aXZlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdsb1ZlRW5yaWNobWVudENvbmZpZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLmlzQWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMiwgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMywgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgR2xvVmVFbnJpY2htZW50Q29uZmlnIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdsb1ZlRW5yaWNobWVudENvbmZpZy5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pc0FjdGl2ZSA9IF92YWx1ZS5pc0FjdGl2ZTtcbiAgICB0aGlzLmVucmljaG1lbnRGYWN0b3IgPSBfdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gX3ZhbHVlLmV4ZWN1dGlvbk9yZGVyO1xuICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnJpY2htZW50RmFjdG9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VucmljaG1lbnRGYWN0b3I7XG4gIH1cbiAgc2V0IGVucmljaG1lbnRGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VucmljaG1lbnRGYWN0b3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXhlY3V0aW9uT3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uT3JkZXI7XG4gIH1cbiAgc2V0IGV4ZWN1dGlvbk9yZGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9leGVjdXRpb25PcmRlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHbG9WZUVucmljaG1lbnRDb25maWcuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIGVucmljaG1lbnRGYWN0b3I6IHRoaXMuZW5yaWNobWVudEZhY3RvcixcbiAgICAgIGV4ZWN1dGlvbk9yZGVyOiB0aGlzLmV4ZWN1dGlvbk9yZGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogR2xvVmVFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2xvVmVFbnJpY2htZW50Q29uZmlnIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHbG9WZUVucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdsb1ZlRW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkdQVDJFbnJpY2htZW50Q29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBHUFQyRW5yaWNobWVudENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR1BUMkVucmljaG1lbnRDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHUFQyRW5yaWNobWVudENvbmZpZygpO1xuICAgIEdQVDJFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR1BUMkVucmljaG1lbnRDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR1BUMkVucmljaG1lbnRDb25maWcsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQWN0aXZlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdQVDJFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogR1BUMkVucmljaG1lbnRDb25maWcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIsIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDMsIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdQVDJFbnJpY2htZW50Q29uZmlnIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdQVDJFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gX3ZhbHVlLmlzQWN0aXZlO1xuICAgIHRoaXMuZW5yaWNobWVudEZhY3RvciA9IF92YWx1ZS5lbnJpY2htZW50RmFjdG9yO1xuICAgIHRoaXMuZXhlY3V0aW9uT3JkZXIgPSBfdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgR1BUMkVucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHUFQyRW5yaWNobWVudENvbmZpZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHUFQyRW5yaWNobWVudENvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHUFQyRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdQVDJFbnJpY2htZW50Q29uZmlnIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBHUFQyRW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgR1BUMkVucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5Xb3JkMlZlY0VucmljaG1lbnRDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuV29yZDJWZWNFbnJpY2htZW50Q29uZmlnJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogV29yZDJWZWNFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgX2luc3RhbmNlLmlzQWN0aXZlID0gX2luc3RhbmNlLmlzQWN0aXZlIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmlzQWN0aXZlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxLCBfaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigyLCBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigzLCBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIF9lbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gIHByaXZhdGUgX2V4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBXb3JkMlZlY0VucmljaG1lbnRDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V29yZDJWZWNFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gX3ZhbHVlLmlzQWN0aXZlO1xuICAgIHRoaXMuZW5yaWNobWVudEZhY3RvciA9IF92YWx1ZS5lbnJpY2htZW50RmFjdG9yO1xuICAgIHRoaXMuZXhlY3V0aW9uT3JkZXIgPSBfdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBXb3JkMlZlY0VucmljaG1lbnRDb25maWcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZTogdGhpcy5pc0FjdGl2ZSxcbiAgICAgIGVucmljaG1lbnRGYWN0b3I6IHRoaXMuZW5yaWNobWVudEZhY3RvcixcbiAgICAgIGV4ZWN1dGlvbk9yZGVyOiB0aGlzLmV4ZWN1dGlvbk9yZGVyXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXb3JkMlZlY0VucmljaG1lbnRDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFdvcmQyVmVjRW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBlbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWdcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5Xb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZykge1xuICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9pbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yIHx8IDA7XG4gICAgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMSwgX2luc3RhbmNlLmlzQWN0aXZlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMiwgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMywgX2luc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBY3RpdmUgPSBfdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gX3ZhbHVlLmVucmljaG1lbnRGYWN0b3I7XG4gICAgdGhpcy5leGVjdXRpb25PcmRlciA9IF92YWx1ZS5leGVjdXRpb25PcmRlcjtcbiAgICBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnJpY2htZW50RmFjdG9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2VucmljaG1lbnRGYWN0b3I7XG4gIH1cbiAgc2V0IGVucmljaG1lbnRGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2VucmljaG1lbnRGYWN0b3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXhlY3V0aW9uT3JkZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uT3JkZXI7XG4gIH1cbiAgc2V0IGV4ZWN1dGlvbk9yZGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9leGVjdXRpb25PcmRlciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBlbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZ1xuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgZW5yaWNobWVudEZhY3RvcjogbnVtYmVyO1xuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlhMTmV0QXVnRW5yaWNobWVudENvbmZpZ1xuICovXG5leHBvcnQgY2xhc3MgWExOZXRBdWdFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5YTE5ldEF1Z0VucmljaG1lbnRDb25maWcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcoKTtcbiAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcpIHtcbiAgICBfaW5zdGFuY2UuaXNBY3RpdmUgPSBfaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSBfaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0FjdGl2ZSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDIsIF9pbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDMsIF9pbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxYTE5ldEF1Z0VucmljaG1lbnRDb25maWcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBY3RpdmUgPSBfdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gX3ZhbHVlLmVucmljaG1lbnRGYWN0b3I7XG4gICAgdGhpcy5leGVjdXRpb25PcmRlciA9IF92YWx1ZS5leGVjdXRpb25PcmRlcjtcbiAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgWExOZXRBdWdFbnJpY2htZW50Q29uZmlnXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBlbnJpY2htZW50RmFjdG9yOiBudW1iZXI7XG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBYTE5ldEF1Z0VucmljaG1lbnRDb25maWdcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGVucmljaG1lbnRGYWN0b3I6IG51bWJlcjtcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGFzc2lmeUludGVudHNSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGFzc2lmeUludGVudHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DbGFzc2lmeUludGVudHNSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdCgpO1xuICAgIENsYXNzaWZ5SW50ZW50c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGFzc2lmeUludGVudHNSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgPSBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNvbnRleHROYW1lcyA9IF9pbnN0YW5jZS5jb250ZXh0TmFtZXMgfHwgW107XG4gICAgX2luc3RhbmNlLm1vZGUgPSBfaW5zdGFuY2UubW9kZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5hbGdvcml0aG1zID0gX2luc3RhbmNlLmFsZ29yaXRobXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGFzc2lmeUludGVudHNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoX2luc3RhbmNlLmNvbnRleHROYW1lcyA9IF9pbnN0YW5jZS5jb250ZXh0TmFtZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubW9kZSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIChfaW5zdGFuY2UuYWxnb3JpdGhtcyA9IF9pbnN0YW5jZS5hbGdvcml0aG1zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgLi4uKF9yZWFkZXIucmVhZFBhY2tlZEVudW0oKSB8fCBbXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsYXNzaWZ5SW50ZW50c1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRleHQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3RpdmVDb250ZXh0cykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmFjdGl2ZUNvbnRleHRzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jb250ZXh0TmFtZXMgJiYgX2luc3RhbmNlLmNvbnRleHROYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg1LCBfaW5zdGFuY2UuY29udGV4dE5hbWVzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg2LCBfaW5zdGFuY2UubW9kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWxnb3JpdGhtcyAmJiBfaW5zdGFuY2UuYWxnb3JpdGhtcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDcsIF9pbnN0YW5jZS5hbGdvcml0aG1zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWN0aXZlQ29udGV4dHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NvbnRleHROYW1lczogc3RyaW5nW107XG4gIHByaXZhdGUgX21vZGU6IE1vZGU7XG4gIHByaXZhdGUgX2FsZ29yaXRobXM6IEludGVudEFsZ29yaXRobXNbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsYXNzaWZ5SW50ZW50c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xhc3NpZnlJbnRlbnRzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLmFjdGl2ZUNvbnRleHRzID0gX3ZhbHVlLmFjdGl2ZUNvbnRleHRzO1xuICAgIHRoaXMuY29udGV4dE5hbWVzID0gKF92YWx1ZS5jb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5tb2RlID0gX3ZhbHVlLm1vZGU7XG4gICAgdGhpcy5hbGdvcml0aG1zID0gKF92YWx1ZS5hbGdvcml0aG1zIHx8IFtdKS5zbGljZSgpO1xuICAgIENsYXNzaWZ5SW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWN0aXZlQ29udGV4dHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbnRleHRzO1xuICB9XG4gIHNldCBhY3RpdmVDb250ZXh0cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZUNvbnRleHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbnRleHROYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHROYW1lcztcbiAgfVxuICBzZXQgY29udGV4dE5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NvbnRleHROYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBtb2RlKCk6IE1vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG4gIHNldCBtb2RlKHZhbHVlOiBNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBhbGdvcml0aG1zKCk6IEludGVudEFsZ29yaXRobXNbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZ29yaXRobXM7XG4gIH1cbiAgc2V0IGFsZ29yaXRobXModmFsdWU6IEludGVudEFsZ29yaXRobXNbXSkge1xuICAgIHRoaXMuX2FsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGFzc2lmeUludGVudHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsYXNzaWZ5SW50ZW50c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIGFjdGl2ZUNvbnRleHRzOiB0aGlzLmFjdGl2ZUNvbnRleHRzLFxuICAgICAgY29udGV4dE5hbWVzOiAodGhpcy5jb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhbGdvcml0aG1zOiAodGhpcy5hbGdvcml0aG1zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgYWN0aXZlQ29udGV4dHM6IHRoaXMuYWN0aXZlQ29udGV4dHMsXG4gICAgICBjb250ZXh0TmFtZXM6ICh0aGlzLmNvbnRleHROYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIG1vZGU6IE1vZGVbdGhpcy5tb2RlID09PSBudWxsIHx8IHRoaXMubW9kZSA9PT0gdW5kZWZpbmVkID8gMCA6IHRoaXMubW9kZV0sXG4gICAgICBhbGdvcml0aG1zOiAodGhpcy5hbGdvcml0aG1zIHx8IFtdKS5tYXAodiA9PiBJbnRlbnRBbGdvcml0aG1zW3ZdKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIGFjdGl2ZUNvbnRleHRzOiBib29sZWFuO1xuICAgIGNvbnRleHROYW1lczogc3RyaW5nW107XG4gICAgbW9kZTogTW9kZTtcbiAgICBhbGdvcml0aG1zOiBJbnRlbnRBbGdvcml0aG1zW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xhc3NpZnlJbnRlbnRzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIGFjdGl2ZUNvbnRleHRzOiBib29sZWFuO1xuICAgIGNvbnRleHROYW1lczogc3RyaW5nW107XG4gICAgbW9kZTogc3RyaW5nO1xuICAgIGFsZ29yaXRobXM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnRlbnRDbGFzc2lmaWVkXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlbnRDbGFzc2lmaWVkIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5JbnRlbnRDbGFzc2lmaWVkJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW50ZW50Q2xhc3NpZmllZCgpO1xuICAgIEludGVudENsYXNzaWZpZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBJbnRlbnRDbGFzc2lmaWVkKSB7XG4gICAgX2luc3RhbmNlLmludGVudE5hbWUgPSBfaW5zdGFuY2UuaW50ZW50TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUgPSBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmNsYXNzaWZpZXIgPSBfaW5zdGFuY2UuY2xhc3NpZmllciB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc2NvcmUgPSBfaW5zdGFuY2Uuc2NvcmUgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEludGVudENsYXNzaWZpZWQsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmNsYXNzaWZpZXIgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5zY29yZSA9IF9yZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBJbnRlbnRDbGFzc2lmaWVkLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogSW50ZW50Q2xhc3NpZmllZCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pbnRlbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNsYXNzaWZpZXIpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmNsYXNzaWZpZXIpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNjb3JlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRmxvYXQoNCwgX2luc3RhbmNlLnNjb3JlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudERpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NsYXNzaWZpZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEludGVudENsYXNzaWZpZWQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SW50ZW50Q2xhc3NpZmllZC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnROYW1lID0gX3ZhbHVlLmludGVudE5hbWU7XG4gICAgdGhpcy5pbnRlbnREaXNwbGF5TmFtZSA9IF92YWx1ZS5pbnRlbnREaXNwbGF5TmFtZTtcbiAgICB0aGlzLmNsYXNzaWZpZXIgPSBfdmFsdWUuY2xhc3NpZmllcjtcbiAgICB0aGlzLnNjb3JlID0gX3ZhbHVlLnNjb3JlO1xuICAgIEludGVudENsYXNzaWZpZWQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpbnRlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudE5hbWU7XG4gIH1cbiAgc2V0IGludGVudE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVudE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50RGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50RGlzcGxheU5hbWU7XG4gIH1cbiAgc2V0IGludGVudERpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlbnREaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjbGFzc2lmaWVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzaWZpZXI7XG4gIH1cbiAgc2V0IGNsYXNzaWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEludGVudENsYXNzaWZpZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSW50ZW50Q2xhc3NpZmllZC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVudE5hbWU6IHRoaXMuaW50ZW50TmFtZSxcbiAgICAgIGludGVudERpc3BsYXlOYW1lOiB0aGlzLmludGVudERpc3BsYXlOYW1lLFxuICAgICAgY2xhc3NpZmllcjogdGhpcy5jbGFzc2lmaWVyLFxuICAgICAgc2NvcmU6IHRoaXMuc2NvcmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBJbnRlbnRDbGFzc2lmaWVkLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZW50TmFtZTogdGhpcy5pbnRlbnROYW1lLFxuICAgICAgaW50ZW50RGlzcGxheU5hbWU6IHRoaXMuaW50ZW50RGlzcGxheU5hbWUsXG4gICAgICBjbGFzc2lmaWVyOiB0aGlzLmNsYXNzaWZpZXIsXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSW50ZW50Q2xhc3NpZmllZCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSW50ZW50Q2xhc3NpZmllZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW50ZW50TmFtZTogc3RyaW5nO1xuICAgIGludGVudERpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgY2xhc3NpZmllcjogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSW50ZW50Q2xhc3NpZmllZFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgaW50ZW50TmFtZTogc3RyaW5nO1xuICAgIGludGVudERpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgY2xhc3NpZmllcjogc3RyaW5nO1xuICAgIHNjb3JlOiBudW1iZXI7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGFzc2lmeUludGVudHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xhc3NpZnlJbnRlbnRzUmVzcG9uc2UnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGFzc2lmeUludGVudHNSZXNwb25zZSgpO1xuICAgIENsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xhc3NpZnlJbnRlbnRzUmVzcG9uc2UpIHtcbiAgICBfaW5zdGFuY2UuaW50ZW50c0NsYXNzaWZpZWQgPSBfaW5zdGFuY2UuaW50ZW50c0NsYXNzaWZpZWQgfHwgW107XG4gICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCAnJztcbiAgICBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgPSBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNvbnRleHROYW1lcyA9IF9pbnN0YW5jZS5jb250ZXh0TmFtZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGFzc2lmeUludGVudHNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEludGVudENsYXNzaWZpZWQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIEludGVudENsYXNzaWZpZWQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmludGVudHNDbGFzc2lmaWVkID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnRzQ2xhc3NpZmllZCB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAoX2luc3RhbmNlLmNvbnRleHROYW1lcyA9IF9pbnN0YW5jZS5jb250ZXh0TmFtZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGFzc2lmeUludGVudHNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmludGVudHNDbGFzc2lmaWVkICYmIF9pbnN0YW5jZS5pbnRlbnRzQ2xhc3NpZmllZC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIF9pbnN0YW5jZS5pbnRlbnRzQ2xhc3NpZmllZCBhcyBhbnksXG4gICAgICAgIEludGVudENsYXNzaWZpZWQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuYWN0aXZlQ29udGV4dHMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5hY3RpdmVDb250ZXh0cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY29udGV4dE5hbWVzICYmIF9pbnN0YW5jZS5jb250ZXh0TmFtZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgX2luc3RhbmNlLmNvbnRleHROYW1lcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50c0NsYXNzaWZpZWQ/OiBJbnRlbnRDbGFzc2lmaWVkW107XG4gIHByaXZhdGUgX3RleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWN0aXZlQ29udGV4dHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NvbnRleHROYW1lczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDbGFzc2lmeUludGVudHNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGFzc2lmeUludGVudHNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnRzQ2xhc3NpZmllZCA9IChfdmFsdWUuaW50ZW50c0NsYXNzaWZpZWQgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEludGVudENsYXNzaWZpZWQobSlcbiAgICApO1xuICAgIHRoaXMudGV4dCA9IF92YWx1ZS50ZXh0O1xuICAgIHRoaXMuYWN0aXZlQ29udGV4dHMgPSBfdmFsdWUuYWN0aXZlQ29udGV4dHM7XG4gICAgdGhpcy5jb250ZXh0TmFtZXMgPSAoX3ZhbHVlLmNvbnRleHROYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBDbGFzc2lmeUludGVudHNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudHNDbGFzc2lmaWVkKCk6IEludGVudENsYXNzaWZpZWRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudHNDbGFzc2lmaWVkO1xuICB9XG4gIHNldCBpbnRlbnRzQ2xhc3NpZmllZCh2YWx1ZTogSW50ZW50Q2xhc3NpZmllZFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50c0NsYXNzaWZpZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG4gIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGl2ZUNvbnRleHRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb250ZXh0cztcbiAgfVxuICBzZXQgYWN0aXZlQ29udGV4dHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmVDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBjb250ZXh0TmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0TmFtZXM7XG4gIH1cbiAgc2V0IGNvbnRleHROYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jb250ZXh0TmFtZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGFzc2lmeUludGVudHNSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDbGFzc2lmeUludGVudHNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVudHNDbGFzc2lmaWVkOiAodGhpcy5pbnRlbnRzQ2xhc3NpZmllZCB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGFjdGl2ZUNvbnRleHRzOiB0aGlzLmFjdGl2ZUNvbnRleHRzLFxuICAgICAgY29udGV4dE5hbWVzOiAodGhpcy5jb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGFzc2lmeUludGVudHNSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVudHNDbGFzc2lmaWVkOiAodGhpcy5pbnRlbnRzQ2xhc3NpZmllZCB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGFjdGl2ZUNvbnRleHRzOiB0aGlzLmFjdGl2ZUNvbnRleHRzLFxuICAgICAgY29udGV4dE5hbWVzOiAodGhpcy5jb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsYXNzaWZ5SW50ZW50c1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGFzc2lmeUludGVudHNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW50ZW50c0NsYXNzaWZpZWQ/OiBJbnRlbnRDbGFzc2lmaWVkLkFzT2JqZWN0W107XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGFjdGl2ZUNvbnRleHRzOiBib29sZWFuO1xuICAgIGNvbnRleHROYW1lczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xhc3NpZnlJbnRlbnRzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudHNDbGFzc2lmaWVkOiBJbnRlbnRDbGFzc2lmaWVkLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBhY3RpdmVDb250ZXh0czogYm9vbGVhbjtcbiAgICBjb250ZXh0TmFtZXM6IHN0cmluZ1tdO1xuICB9XG59XG4iXX0=