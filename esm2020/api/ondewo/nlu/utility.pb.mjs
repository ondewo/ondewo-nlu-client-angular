/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { uint8ArrayToBase64 } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu008 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/entity-type.pb';
export var ReannotateEntitiesOptions;
(function (ReannotateEntitiesOptions) {
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["REANNOTATE_NEVER"] = 0] = "REANNOTATE_NEVER";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["REANNOTATE_ALWAYS"] = 1] = "REANNOTATE_ALWAYS";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["REANNOTATE_IF_EMPTY"] = 2] = "REANNOTATE_IF_EMPTY";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["REANNOTATE_AFTER_DELETION"] = 3] = "REANNOTATE_AFTER_DELETION";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["REANNOTATE_IF_EMPTY_OR_AFTER_DELETION"] = 4] = "REANNOTATE_IF_EMPTY_OR_AFTER_DELETION";
})(ReannotateEntitiesOptions || (ReannotateEntitiesOptions = {}));
/**
 * Message implementation for ondewo.nlu.ValidateRegexRequest
 */
export class ValidateRegexRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ValidateRegexRequest();
        ValidateRegexRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.regex = _instance.regex || '';
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
                    _instance.regex = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ValidateRegexRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.regex) {
            _writer.writeString(1, _instance.regex);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateRegexRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.regex = _value.regex;
        ValidateRegexRequest.refineValues(this);
    }
    get regex() {
        return this._regex;
    }
    set regex(value) {
        this._regex = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ValidateRegexRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            regex: this.regex
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
            regex: this.regex
        };
    }
}
ValidateRegexRequest.id = 'ondewo.nlu.ValidateRegexRequest';
/**
 * Message implementation for ondewo.nlu.ValidateRegexResponse
 */
export class ValidateRegexResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ValidateRegexResponse();
        ValidateRegexResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        ValidateRegexResponse.refineValues(_instance);
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
     * @param _value initial values object or instance of ValidateRegexResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.errorMessages = (_value.errorMessages || []).slice();
        ValidateRegexResponse.refineValues(this);
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
        ValidateRegexResponse.serializeBinaryToWriter(this, writer);
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
ValidateRegexResponse.id = 'ondewo.nlu.ValidateRegexResponse';
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export class ValidateEmbeddedRegexRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ValidateEmbeddedRegexRequest();
        ValidateEmbeddedRegexRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entityType = _instance.entityType || undefined;
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
                    _instance.entityType = new ondewoNlu009.EntityType.Entity();
                    _reader.readMessage(_instance.entityType, ondewoNlu009.EntityType.Entity.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ValidateEmbeddedRegexRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entityType) {
            _writer.writeMessage(1, _instance.entityType, ondewoNlu009.EntityType.Entity.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ValidateEmbeddedRegexRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entityType = _value.entityType
            ? new ondewoNlu009.EntityType.Entity(_value.entityType)
            : undefined;
        ValidateEmbeddedRegexRequest.refineValues(this);
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ValidateEmbeddedRegexRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entityType: this.entityType ? this.entityType.toObject() : undefined
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
                : null
        };
    }
}
ValidateEmbeddedRegexRequest.id = 'ondewo.nlu.ValidateEmbeddedRegexRequest';
/**
 * Message implementation for ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export class ValidateEmbeddedRegexResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ValidateEmbeddedRegexResponse();
        ValidateEmbeddedRegexResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        ValidateEmbeddedRegexResponse.refineValues(_instance);
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
     * @param _value initial values object or instance of ValidateEmbeddedRegexResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.errorMessages = (_value.errorMessages || []).slice();
        ValidateEmbeddedRegexResponse.refineValues(this);
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
        ValidateEmbeddedRegexResponse.serializeBinaryToWriter(this, writer);
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
ValidateEmbeddedRegexResponse.id = 'ondewo.nlu.ValidateEmbeddedRegexResponse';
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsRequest
 */
export class CleanAllIntentsRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanAllIntentsRequest();
        CleanAllIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.substringWhiteList = _instance.substringWhiteList || [];
        _instance.dryRun = _instance.dryRun || false;
        _instance.trainingPhraseCleanerOptions =
            _instance.trainingPhraseCleanerOptions || undefined;
        _instance.reannotateEntitiesOptions =
            _instance.reannotateEntitiesOptions || 0;
        _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 4:
                    (_instance.substringWhiteList =
                        _instance.substringWhiteList || []).push(_reader.readString());
                    break;
                case 5:
                    _instance.dryRun = _reader.readBool();
                    break;
                case 6:
                    _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    _reader.readMessage(_instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.reannotateEntitiesOptions = _reader.readEnum();
                    break;
                case 8:
                    _instance.numberOfWorkers = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanAllIntentsRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(3, _instance.specialCharacters);
        }
        if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
            _writer.writeRepeatedString(4, _instance.substringWhiteList);
        }
        if (_instance.dryRun) {
            _writer.writeBool(5, _instance.dryRun);
        }
        if (_instance.trainingPhraseCleanerOptions) {
            _writer.writeMessage(6, _instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.serializeBinaryToWriter);
        }
        if (_instance.reannotateEntitiesOptions) {
            _writer.writeEnum(7, _instance.reannotateEntitiesOptions);
        }
        if (_instance.numberOfWorkers) {
            _writer.writeInt32(8, _instance.numberOfWorkers);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllIntentsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.specialCharacters = _value.specialCharacters;
        this.substringWhiteList = (_value.substringWhiteList || []).slice();
        this.dryRun = _value.dryRun;
        this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
            : undefined;
        this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
        this.numberOfWorkers = _value.numberOfWorkers;
        CleanAllIntentsRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get substringWhiteList() {
        return this._substringWhiteList;
    }
    set substringWhiteList(value) {
        this._substringWhiteList = value;
    }
    get dryRun() {
        return this._dryRun;
    }
    set dryRun(value) {
        this._dryRun = value;
    }
    get trainingPhraseCleanerOptions() {
        return this._trainingPhraseCleanerOptions;
    }
    set trainingPhraseCleanerOptions(value) {
        this._trainingPhraseCleanerOptions = value;
    }
    get reannotateEntitiesOptions() {
        return this._reannotateEntitiesOptions;
    }
    set reannotateEntitiesOptions(value) {
        this._reannotateEntitiesOptions = value;
    }
    get numberOfWorkers() {
        return this._numberOfWorkers;
    }
    set numberOfWorkers(value) {
        this._numberOfWorkers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanAllIntentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            dryRun: this.dryRun,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toObject()
                : undefined,
            reannotateEntitiesOptions: this.reannotateEntitiesOptions,
            numberOfWorkers: this.numberOfWorkers
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
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            dryRun: this.dryRun,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
                : null,
            reannotateEntitiesOptions: ReannotateEntitiesOptions[this.reannotateEntitiesOptions === null ||
                this.reannotateEntitiesOptions === undefined
                ? 0
                : this.reannotateEntitiesOptions],
            numberOfWorkers: this.numberOfWorkers
        };
    }
}
CleanAllIntentsRequest.id = 'ondewo.nlu.CleanAllIntentsRequest';
/**
 * Message implementation for ondewo.nlu.CleanAllIntentsResponse
 */
export class CleanAllIntentsResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanAllIntentsResponse();
        CleanAllIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.cleanedIntents = _instance.cleanedIntents || [];
        _instance.intentUpdateList = _instance.intentUpdateList || [];
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
                    const messageInitializer1 = new ondewoNlu008.Intent();
                    _reader.readMessage(messageInitializer1, ondewoNlu008.Intent.deserializeBinaryFromReader);
                    (_instance.cleanedIntents = _instance.cleanedIntents || []).push(messageInitializer1);
                    break;
                case 2:
                    const messageInitializer2 = new IntentUpdate();
                    _reader.readMessage(messageInitializer2, IntentUpdate.deserializeBinaryFromReader);
                    (_instance.intentUpdateList = _instance.intentUpdateList || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanAllIntentsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.cleanedIntents && _instance.cleanedIntents.length) {
            _writer.writeRepeatedMessage(1, _instance.cleanedIntents, ondewoNlu008.Intent.serializeBinaryToWriter);
        }
        if (_instance.intentUpdateList && _instance.intentUpdateList.length) {
            _writer.writeRepeatedMessage(2, _instance.intentUpdateList, IntentUpdate.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllIntentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.cleanedIntents = (_value.cleanedIntents || []).map(m => new ondewoNlu008.Intent(m));
        this.intentUpdateList = (_value.intentUpdateList || []).map(m => new IntentUpdate(m));
        CleanAllIntentsResponse.refineValues(this);
    }
    get cleanedIntents() {
        return this._cleanedIntents;
    }
    set cleanedIntents(value) {
        this._cleanedIntents = value;
    }
    get intentUpdateList() {
        return this._intentUpdateList;
    }
    set intentUpdateList(value) {
        this._intentUpdateList = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanAllIntentsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            cleanedIntents: (this.cleanedIntents || []).map(m => m.toObject()),
            intentUpdateList: (this.intentUpdateList || []).map(m => m.toObject())
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
            cleanedIntents: (this.cleanedIntents || []).map(m => m.toProtobufJSON(options)),
            intentUpdateList: (this.intentUpdateList || []).map(m => m.toProtobufJSON(options))
        };
    }
}
CleanAllIntentsResponse.id = 'ondewo.nlu.CleanAllIntentsResponse';
/**
 * Message implementation for ondewo.nlu.CleanIntentRequest
 */
export class CleanIntentRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanIntentRequest();
        CleanIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.intentName = _instance.intentName || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.substringWhiteList = _instance.substringWhiteList || [];
        _instance.dryRun = _instance.dryRun || false;
        _instance.trainingPhraseCleanerOptions =
            _instance.trainingPhraseCleanerOptions || undefined;
        _instance.reannotateEntitiesOptions =
            _instance.reannotateEntitiesOptions || 0;
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
                    _instance.intentName = _reader.readString();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 5:
                    (_instance.substringWhiteList =
                        _instance.substringWhiteList || []).push(_reader.readString());
                    break;
                case 6:
                    _instance.dryRun = _reader.readBool();
                    break;
                case 7:
                    _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    _reader.readMessage(_instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.reannotateEntitiesOptions = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanIntentRequest.refineValues(_instance);
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
        if (_instance.intentName) {
            _writer.writeString(2, _instance.intentName);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(4, _instance.specialCharacters);
        }
        if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
            _writer.writeRepeatedString(5, _instance.substringWhiteList);
        }
        if (_instance.dryRun) {
            _writer.writeBool(6, _instance.dryRun);
        }
        if (_instance.trainingPhraseCleanerOptions) {
            _writer.writeMessage(7, _instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.serializeBinaryToWriter);
        }
        if (_instance.reannotateEntitiesOptions) {
            _writer.writeEnum(8, _instance.reannotateEntitiesOptions);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.intentName = _value.intentName;
        this.languageCode = _value.languageCode;
        this.specialCharacters = _value.specialCharacters;
        this.substringWhiteList = (_value.substringWhiteList || []).slice();
        this.dryRun = _value.dryRun;
        this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
            : undefined;
        this.reannotateEntitiesOptions = _value.reannotateEntitiesOptions;
        CleanIntentRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
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
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get substringWhiteList() {
        return this._substringWhiteList;
    }
    set substringWhiteList(value) {
        this._substringWhiteList = value;
    }
    get dryRun() {
        return this._dryRun;
    }
    set dryRun(value) {
        this._dryRun = value;
    }
    get trainingPhraseCleanerOptions() {
        return this._trainingPhraseCleanerOptions;
    }
    set trainingPhraseCleanerOptions(value) {
        this._trainingPhraseCleanerOptions = value;
    }
    get reannotateEntitiesOptions() {
        return this._reannotateEntitiesOptions;
    }
    set reannotateEntitiesOptions(value) {
        this._reannotateEntitiesOptions = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            intentName: this.intentName,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            dryRun: this.dryRun,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toObject()
                : undefined,
            reannotateEntitiesOptions: this.reannotateEntitiesOptions
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
            intentName: this.intentName,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            dryRun: this.dryRun,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
                : null,
            reannotateEntitiesOptions: ReannotateEntitiesOptions[this.reannotateEntitiesOptions === null ||
                this.reannotateEntitiesOptions === undefined
                ? 0
                : this.reannotateEntitiesOptions]
        };
    }
}
CleanIntentRequest.id = 'ondewo.nlu.CleanIntentRequest';
/**
 * Message implementation for ondewo.nlu.CleanIntentResponse
 */
export class CleanIntentResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanIntentResponse();
        CleanIntentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.cleanedIntent = _instance.cleanedIntent || undefined;
        _instance.intentUpdate = _instance.intentUpdate || undefined;
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
                    _instance.cleanedIntent = new ondewoNlu008.Intent();
                    _reader.readMessage(_instance.cleanedIntent, ondewoNlu008.Intent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.intentUpdate = new IntentUpdate();
                    _reader.readMessage(_instance.intentUpdate, IntentUpdate.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanIntentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.cleanedIntent) {
            _writer.writeMessage(1, _instance.cleanedIntent, ondewoNlu008.Intent.serializeBinaryToWriter);
        }
        if (_instance.intentUpdate) {
            _writer.writeMessage(2, _instance.intentUpdate, IntentUpdate.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanIntentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.cleanedIntent = _value.cleanedIntent
            ? new ondewoNlu008.Intent(_value.cleanedIntent)
            : undefined;
        this.intentUpdate = _value.intentUpdate
            ? new IntentUpdate(_value.intentUpdate)
            : undefined;
        CleanIntentResponse.refineValues(this);
    }
    get cleanedIntent() {
        return this._cleanedIntent;
    }
    set cleanedIntent(value) {
        this._cleanedIntent = value;
    }
    get intentUpdate() {
        return this._intentUpdate;
    }
    set intentUpdate(value) {
        this._intentUpdate = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanIntentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            cleanedIntent: this.cleanedIntent
                ? this.cleanedIntent.toObject()
                : undefined,
            intentUpdate: this.intentUpdate ? this.intentUpdate.toObject() : undefined
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
            cleanedIntent: this.cleanedIntent
                ? this.cleanedIntent.toProtobufJSON(options)
                : null,
            intentUpdate: this.intentUpdate
                ? this.intentUpdate.toProtobufJSON(options)
                : null
        };
    }
}
CleanIntentResponse.id = 'ondewo.nlu.CleanIntentResponse';
/**
 * Message implementation for ondewo.nlu.TrainingPhraseCleanerOptions
 */
export class TrainingPhraseCleanerOptions {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TrainingPhraseCleanerOptions();
        TrainingPhraseCleanerOptions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.deleteRepeatedWhitespaces =
            _instance.deleteRepeatedWhitespaces || false;
        _instance.deleteLeadingSpecialCharacters =
            _instance.deleteLeadingSpecialCharacters || false;
        _instance.deleteTrailingSpecialCharacters =
            _instance.deleteTrailingSpecialCharacters || false;
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
                    _instance.deleteRepeatedWhitespaces = _reader.readBool();
                    break;
                case 2:
                    _instance.deleteLeadingSpecialCharacters = _reader.readBool();
                    break;
                case 3:
                    _instance.deleteTrailingSpecialCharacters = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TrainingPhraseCleanerOptions.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.deleteRepeatedWhitespaces) {
            _writer.writeBool(1, _instance.deleteRepeatedWhitespaces);
        }
        if (_instance.deleteLeadingSpecialCharacters) {
            _writer.writeBool(2, _instance.deleteLeadingSpecialCharacters);
        }
        if (_instance.deleteTrailingSpecialCharacters) {
            _writer.writeBool(3, _instance.deleteTrailingSpecialCharacters);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhraseCleanerOptions to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.deleteRepeatedWhitespaces = _value.deleteRepeatedWhitespaces;
        this.deleteLeadingSpecialCharacters = _value.deleteLeadingSpecialCharacters;
        this.deleteTrailingSpecialCharacters =
            _value.deleteTrailingSpecialCharacters;
        TrainingPhraseCleanerOptions.refineValues(this);
    }
    get deleteRepeatedWhitespaces() {
        return this._deleteRepeatedWhitespaces;
    }
    set deleteRepeatedWhitespaces(value) {
        this._deleteRepeatedWhitespaces = value;
    }
    get deleteLeadingSpecialCharacters() {
        return this._deleteLeadingSpecialCharacters;
    }
    set deleteLeadingSpecialCharacters(value) {
        this._deleteLeadingSpecialCharacters = value;
    }
    get deleteTrailingSpecialCharacters() {
        return this._deleteTrailingSpecialCharacters;
    }
    set deleteTrailingSpecialCharacters(value) {
        this._deleteTrailingSpecialCharacters = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TrainingPhraseCleanerOptions.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
            deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
            deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
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
            deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
            deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
            deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
        };
    }
}
TrainingPhraseCleanerOptions.id = 'ondewo.nlu.TrainingPhraseCleanerOptions';
/**
 * Message implementation for ondewo.nlu.StringUpdate
 */
export class StringUpdate {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new StringUpdate();
        StringUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.new = _instance.new || '';
        _instance.old = _instance.old || '';
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
                    _instance.new = _reader.readString();
                    break;
                case 2:
                    _instance.old = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        StringUpdate.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.new) {
            _writer.writeString(1, _instance.new);
        }
        if (_instance.old) {
            _writer.writeString(2, _instance.old);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of StringUpdate to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.new = _value.new;
        this.old = _value.old;
        StringUpdate.refineValues(this);
    }
    get new() {
        return this._new;
    }
    set new(value) {
        this._new = value;
    }
    get old() {
        return this._old;
    }
    set old(value) {
        this._old = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        StringUpdate.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            new: this.new,
            old: this.old
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
            new: this.new,
            old: this.old
        };
    }
}
StringUpdate.id = 'ondewo.nlu.StringUpdate';
/**
 * Message implementation for ondewo.nlu.IntentUpdate
 */
export class IntentUpdate {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new IntentUpdate();
        IntentUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentDisplayName = _instance.intentDisplayName || '';
        _instance.trainingPhraseUpdateList =
            _instance.trainingPhraseUpdateList || [];
        _instance.deletedParameters = _instance.deletedParameters || [];
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
                    _instance.intentDisplayName = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new IntentUpdate.TrainingPhraseUpdate();
                    _reader.readMessage(messageInitializer2, IntentUpdate.TrainingPhraseUpdate.deserializeBinaryFromReader);
                    (_instance.trainingPhraseUpdateList =
                        _instance.trainingPhraseUpdateList || []).push(messageInitializer2);
                    break;
                case 3:
                    (_instance.deletedParameters =
                        _instance.deletedParameters || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        IntentUpdate.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intentDisplayName) {
            _writer.writeString(1, _instance.intentDisplayName);
        }
        if (_instance.trainingPhraseUpdateList &&
            _instance.trainingPhraseUpdateList.length) {
            _writer.writeRepeatedMessage(2, _instance.trainingPhraseUpdateList, IntentUpdate.TrainingPhraseUpdate.serializeBinaryToWriter);
        }
        if (_instance.deletedParameters && _instance.deletedParameters.length) {
            _writer.writeRepeatedString(3, _instance.deletedParameters);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentUpdate to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentDisplayName = _value.intentDisplayName;
        this.trainingPhraseUpdateList = (_value.trainingPhraseUpdateList || []).map(m => new IntentUpdate.TrainingPhraseUpdate(m));
        this.deletedParameters = (_value.deletedParameters || []).slice();
        IntentUpdate.refineValues(this);
    }
    get intentDisplayName() {
        return this._intentDisplayName;
    }
    set intentDisplayName(value) {
        this._intentDisplayName = value;
    }
    get trainingPhraseUpdateList() {
        return this._trainingPhraseUpdateList;
    }
    set trainingPhraseUpdateList(value) {
        this._trainingPhraseUpdateList = value;
    }
    get deletedParameters() {
        return this._deletedParameters;
    }
    set deletedParameters(value) {
        this._deletedParameters = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        IntentUpdate.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentDisplayName: this.intentDisplayName,
            trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map(m => m.toObject()),
            deletedParameters: (this.deletedParameters || []).slice()
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
            intentDisplayName: this.intentDisplayName,
            trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map(m => m.toProtobufJSON(options)),
            deletedParameters: (this.deletedParameters || []).slice()
        };
    }
}
IntentUpdate.id = 'ondewo.nlu.IntentUpdate';
(function (IntentUpdate) {
    /**
     * Message implementation for ondewo.nlu.IntentUpdate.TrainingPhraseUpdate
     */
    class TrainingPhraseUpdate {
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TrainingPhraseUpdate();
            TrainingPhraseUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.trainingPhraseUpdate =
                _instance.trainingPhraseUpdate || undefined;
            _instance.entityUpdates = _instance.entityUpdates || [];
            _instance.entitiesReannotated = _instance.entitiesReannotated || [];
            _instance.containsUpdateVariable =
                _instance.containsUpdateVariable || false;
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
                        _instance.trainingPhraseUpdate = new StringUpdate();
                        _reader.readMessage(_instance.trainingPhraseUpdate, StringUpdate.deserializeBinaryFromReader);
                        break;
                    case 2:
                        const messageInitializer2 = new StringUpdate();
                        _reader.readMessage(messageInitializer2, StringUpdate.deserializeBinaryFromReader);
                        (_instance.entityUpdates = _instance.entityUpdates || []).push(messageInitializer2);
                        break;
                    case 3:
                        (_instance.entitiesReannotated =
                            _instance.entitiesReannotated || []).push(_reader.readString());
                        break;
                    case 4:
                        _instance.containsUpdateVariable = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TrainingPhraseUpdate.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.trainingPhraseUpdate) {
                _writer.writeMessage(1, _instance.trainingPhraseUpdate, StringUpdate.serializeBinaryToWriter);
            }
            if (_instance.entityUpdates && _instance.entityUpdates.length) {
                _writer.writeRepeatedMessage(2, _instance.entityUpdates, StringUpdate.serializeBinaryToWriter);
            }
            if (_instance.entitiesReannotated &&
                _instance.entitiesReannotated.length) {
                _writer.writeRepeatedString(3, _instance.entitiesReannotated);
            }
            if (_instance.containsUpdateVariable) {
                _writer.writeBool(4, _instance.containsUpdateVariable);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhraseUpdate to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.trainingPhraseUpdate = _value.trainingPhraseUpdate
                ? new StringUpdate(_value.trainingPhraseUpdate)
                : undefined;
            this.entityUpdates = (_value.entityUpdates || []).map(m => new StringUpdate(m));
            this.entitiesReannotated = (_value.entitiesReannotated || []).slice();
            this.containsUpdateVariable = _value.containsUpdateVariable;
            TrainingPhraseUpdate.refineValues(this);
        }
        get trainingPhraseUpdate() {
            return this._trainingPhraseUpdate;
        }
        set trainingPhraseUpdate(value) {
            this._trainingPhraseUpdate = value;
        }
        get entityUpdates() {
            return this._entityUpdates;
        }
        set entityUpdates(value) {
            this._entityUpdates = value;
        }
        get entitiesReannotated() {
            return this._entitiesReannotated;
        }
        set entitiesReannotated(value) {
            this._entitiesReannotated = value;
        }
        get containsUpdateVariable() {
            return this._containsUpdateVariable;
        }
        set containsUpdateVariable(value) {
            this._containsUpdateVariable = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            TrainingPhraseUpdate.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                trainingPhraseUpdate: this.trainingPhraseUpdate
                    ? this.trainingPhraseUpdate.toObject()
                    : undefined,
                entityUpdates: (this.entityUpdates || []).map(m => m.toObject()),
                entitiesReannotated: (this.entitiesReannotated || []).slice(),
                containsUpdateVariable: this.containsUpdateVariable
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
                trainingPhraseUpdate: this.trainingPhraseUpdate
                    ? this.trainingPhraseUpdate.toProtobufJSON(options)
                    : null,
                entityUpdates: (this.entityUpdates || []).map(m => m.toProtobufJSON(options)),
                entitiesReannotated: (this.entitiesReannotated || []).slice(),
                containsUpdateVariable: this.containsUpdateVariable
            };
        }
    }
    TrainingPhraseUpdate.id = 'ondewo.nlu.IntentUpdate.TrainingPhraseUpdate';
    IntentUpdate.TrainingPhraseUpdate = TrainingPhraseUpdate;
})(IntentUpdate || (IntentUpdate = {}));
/**
 * Message implementation for ondewo.nlu.EntityTypeUpdate
 */
export class EntityTypeUpdate {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new EntityTypeUpdate();
        EntityTypeUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.entityTypeName = _instance.entityTypeName || '';
        _instance.valuesUpdateList = _instance.valuesUpdateList || [];
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
                    _instance.entityTypeName = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityTypeUpdate.EntityUpdate();
                    _reader.readMessage(messageInitializer2, EntityTypeUpdate.EntityUpdate.deserializeBinaryFromReader);
                    (_instance.valuesUpdateList = _instance.valuesUpdateList || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        EntityTypeUpdate.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.entityTypeName) {
            _writer.writeString(1, _instance.entityTypeName);
        }
        if (_instance.valuesUpdateList && _instance.valuesUpdateList.length) {
            _writer.writeRepeatedMessage(2, _instance.valuesUpdateList, EntityTypeUpdate.EntityUpdate.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of EntityTypeUpdate to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.entityTypeName = _value.entityTypeName;
        this.valuesUpdateList = (_value.valuesUpdateList || []).map(m => new EntityTypeUpdate.EntityUpdate(m));
        EntityTypeUpdate.refineValues(this);
    }
    get entityTypeName() {
        return this._entityTypeName;
    }
    set entityTypeName(value) {
        this._entityTypeName = value;
    }
    get valuesUpdateList() {
        return this._valuesUpdateList;
    }
    set valuesUpdateList(value) {
        this._valuesUpdateList = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        EntityTypeUpdate.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            entityTypeName: this.entityTypeName,
            valuesUpdateList: (this.valuesUpdateList || []).map(m => m.toObject())
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
            entityTypeName: this.entityTypeName,
            valuesUpdateList: (this.valuesUpdateList || []).map(m => m.toProtobufJSON(options))
        };
    }
}
EntityTypeUpdate.id = 'ondewo.nlu.EntityTypeUpdate';
(function (EntityTypeUpdate) {
    /**
     * Message implementation for ondewo.nlu.EntityTypeUpdate.EntityUpdate
     */
    class EntityUpdate {
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new EntityUpdate();
            EntityUpdate.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.entityValueUpdate = _instance.entityValueUpdate || undefined;
            _instance.entitySynonymUpdates = _instance.entitySynonymUpdates || [];
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
                        _instance.entityValueUpdate = new StringUpdate();
                        _reader.readMessage(_instance.entityValueUpdate, StringUpdate.deserializeBinaryFromReader);
                        break;
                    case 2:
                        const messageInitializer2 = new StringUpdate();
                        _reader.readMessage(messageInitializer2, StringUpdate.deserializeBinaryFromReader);
                        (_instance.entitySynonymUpdates =
                            _instance.entitySynonymUpdates || []).push(messageInitializer2);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            EntityUpdate.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.entityValueUpdate) {
                _writer.writeMessage(1, _instance.entityValueUpdate, StringUpdate.serializeBinaryToWriter);
            }
            if (_instance.entitySynonymUpdates &&
                _instance.entitySynonymUpdates.length) {
                _writer.writeRepeatedMessage(2, _instance.entitySynonymUpdates, StringUpdate.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EntityUpdate to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.entityValueUpdate = _value.entityValueUpdate
                ? new StringUpdate(_value.entityValueUpdate)
                : undefined;
            this.entitySynonymUpdates = (_value.entitySynonymUpdates || []).map(m => new StringUpdate(m));
            EntityUpdate.refineValues(this);
        }
        get entityValueUpdate() {
            return this._entityValueUpdate;
        }
        set entityValueUpdate(value) {
            this._entityValueUpdate = value;
        }
        get entitySynonymUpdates() {
            return this._entitySynonymUpdates;
        }
        set entitySynonymUpdates(value) {
            this._entitySynonymUpdates = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            EntityUpdate.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                entityValueUpdate: this.entityValueUpdate
                    ? this.entityValueUpdate.toObject()
                    : undefined,
                entitySynonymUpdates: (this.entitySynonymUpdates || []).map(m => m.toObject())
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
                entityValueUpdate: this.entityValueUpdate
                    ? this.entityValueUpdate.toProtobufJSON(options)
                    : null,
                entitySynonymUpdates: (this.entitySynonymUpdates || []).map(m => m.toProtobufJSON(options))
            };
        }
    }
    EntityUpdate.id = 'ondewo.nlu.EntityTypeUpdate.EntityUpdate';
    EntityTypeUpdate.EntityUpdate = EntityUpdate;
})(EntityTypeUpdate || (EntityTypeUpdate = {}));
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesRequest
 */
export class CleanAllEntityTypesRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanAllEntityTypesRequest();
        CleanAllEntityTypesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.substringWhiteList = _instance.substringWhiteList || [];
        _instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
        _instance.forbiddenEntityTypePatterns =
            _instance.forbiddenEntityTypePatterns || [];
        _instance.dryRun = _instance.dryRun || false;
        _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 4:
                    (_instance.substringWhiteList =
                        _instance.substringWhiteList || []).push(_reader.readString());
                    break;
                case 5:
                    _instance.maxEntityCountUpdate = _reader.readInt32();
                    break;
                case 6:
                    (_instance.forbiddenEntityTypePatterns =
                        _instance.forbiddenEntityTypePatterns || []).push(_reader.readString());
                    break;
                case 7:
                    _instance.dryRun = _reader.readBool();
                    break;
                case 8:
                    _instance.numberOfWorkers = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanAllEntityTypesRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(3, _instance.specialCharacters);
        }
        if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
            _writer.writeRepeatedString(4, _instance.substringWhiteList);
        }
        if (_instance.maxEntityCountUpdate) {
            _writer.writeInt32(5, _instance.maxEntityCountUpdate);
        }
        if (_instance.forbiddenEntityTypePatterns &&
            _instance.forbiddenEntityTypePatterns.length) {
            _writer.writeRepeatedString(6, _instance.forbiddenEntityTypePatterns);
        }
        if (_instance.dryRun) {
            _writer.writeBool(7, _instance.dryRun);
        }
        if (_instance.numberOfWorkers) {
            _writer.writeInt32(8, _instance.numberOfWorkers);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllEntityTypesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.specialCharacters = _value.specialCharacters;
        this.substringWhiteList = (_value.substringWhiteList || []).slice();
        this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
        this.forbiddenEntityTypePatterns = (_value.forbiddenEntityTypePatterns || []).slice();
        this.dryRun = _value.dryRun;
        this.numberOfWorkers = _value.numberOfWorkers;
        CleanAllEntityTypesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get substringWhiteList() {
        return this._substringWhiteList;
    }
    set substringWhiteList(value) {
        this._substringWhiteList = value;
    }
    get maxEntityCountUpdate() {
        return this._maxEntityCountUpdate;
    }
    set maxEntityCountUpdate(value) {
        this._maxEntityCountUpdate = value;
    }
    get forbiddenEntityTypePatterns() {
        return this._forbiddenEntityTypePatterns;
    }
    set forbiddenEntityTypePatterns(value) {
        this._forbiddenEntityTypePatterns = value;
    }
    get dryRun() {
        return this._dryRun;
    }
    set dryRun(value) {
        this._dryRun = value;
    }
    get numberOfWorkers() {
        return this._numberOfWorkers;
    }
    set numberOfWorkers(value) {
        this._numberOfWorkers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanAllEntityTypesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            maxEntityCountUpdate: this.maxEntityCountUpdate,
            forbiddenEntityTypePatterns: (this.forbiddenEntityTypePatterns || []).slice(),
            dryRun: this.dryRun,
            numberOfWorkers: this.numberOfWorkers
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
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            maxEntityCountUpdate: this.maxEntityCountUpdate,
            forbiddenEntityTypePatterns: (this.forbiddenEntityTypePatterns || []).slice(),
            dryRun: this.dryRun,
            numberOfWorkers: this.numberOfWorkers
        };
    }
}
CleanAllEntityTypesRequest.id = 'ondewo.nlu.CleanAllEntityTypesRequest';
/**
 * Message implementation for ondewo.nlu.CleanAllEntityTypesResponse
 */
export class CleanAllEntityTypesResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanAllEntityTypesResponse();
        CleanAllEntityTypesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.cleanedEntityTypes = _instance.cleanedEntityTypes || [];
        _instance.deletedEntityTypes = _instance.deletedEntityTypes || [];
        _instance.entityTypeUpdates = _instance.entityTypeUpdates || [];
        _instance.entityTypeDeletions = _instance.entityTypeDeletions || [];
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
                    const messageInitializer1 = new ondewoNlu009.EntityType();
                    _reader.readMessage(messageInitializer1, ondewoNlu009.EntityType.deserializeBinaryFromReader);
                    (_instance.cleanedEntityTypes =
                        _instance.cleanedEntityTypes || []).push(messageInitializer1);
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu009.EntityType();
                    _reader.readMessage(messageInitializer2, ondewoNlu009.EntityType.deserializeBinaryFromReader);
                    (_instance.deletedEntityTypes =
                        _instance.deletedEntityTypes || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new EntityTypeUpdate();
                    _reader.readMessage(messageInitializer3, EntityTypeUpdate.deserializeBinaryFromReader);
                    (_instance.entityTypeUpdates =
                        _instance.entityTypeUpdates || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new EntityTypeUpdate();
                    _reader.readMessage(messageInitializer4, EntityTypeUpdate.deserializeBinaryFromReader);
                    (_instance.entityTypeDeletions =
                        _instance.entityTypeDeletions || []).push(messageInitializer4);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanAllEntityTypesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.cleanedEntityTypes && _instance.cleanedEntityTypes.length) {
            _writer.writeRepeatedMessage(1, _instance.cleanedEntityTypes, ondewoNlu009.EntityType.serializeBinaryToWriter);
        }
        if (_instance.deletedEntityTypes && _instance.deletedEntityTypes.length) {
            _writer.writeRepeatedMessage(2, _instance.deletedEntityTypes, ondewoNlu009.EntityType.serializeBinaryToWriter);
        }
        if (_instance.entityTypeUpdates && _instance.entityTypeUpdates.length) {
            _writer.writeRepeatedMessage(3, _instance.entityTypeUpdates, EntityTypeUpdate.serializeBinaryToWriter);
        }
        if (_instance.entityTypeDeletions && _instance.entityTypeDeletions.length) {
            _writer.writeRepeatedMessage(4, _instance.entityTypeDeletions, EntityTypeUpdate.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanAllEntityTypesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.cleanedEntityTypes = (_value.cleanedEntityTypes || []).map(m => new ondewoNlu009.EntityType(m));
        this.deletedEntityTypes = (_value.deletedEntityTypes || []).map(m => new ondewoNlu009.EntityType(m));
        this.entityTypeUpdates = (_value.entityTypeUpdates || []).map(m => new EntityTypeUpdate(m));
        this.entityTypeDeletions = (_value.entityTypeDeletions || []).map(m => new EntityTypeUpdate(m));
        CleanAllEntityTypesResponse.refineValues(this);
    }
    get cleanedEntityTypes() {
        return this._cleanedEntityTypes;
    }
    set cleanedEntityTypes(value) {
        this._cleanedEntityTypes = value;
    }
    get deletedEntityTypes() {
        return this._deletedEntityTypes;
    }
    set deletedEntityTypes(value) {
        this._deletedEntityTypes = value;
    }
    get entityTypeUpdates() {
        return this._entityTypeUpdates;
    }
    set entityTypeUpdates(value) {
        this._entityTypeUpdates = value;
    }
    get entityTypeDeletions() {
        return this._entityTypeDeletions;
    }
    set entityTypeDeletions(value) {
        this._entityTypeDeletions = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanAllEntityTypesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            cleanedEntityTypes: (this.cleanedEntityTypes || []).map(m => m.toObject()),
            deletedEntityTypes: (this.deletedEntityTypes || []).map(m => m.toObject()),
            entityTypeUpdates: (this.entityTypeUpdates || []).map(m => m.toObject()),
            entityTypeDeletions: (this.entityTypeDeletions || []).map(m => m.toObject())
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
            cleanedEntityTypes: (this.cleanedEntityTypes || []).map(m => m.toProtobufJSON(options)),
            deletedEntityTypes: (this.deletedEntityTypes || []).map(m => m.toProtobufJSON(options)),
            entityTypeUpdates: (this.entityTypeUpdates || []).map(m => m.toProtobufJSON(options)),
            entityTypeDeletions: (this.entityTypeDeletions || []).map(m => m.toProtobufJSON(options))
        };
    }
}
CleanAllEntityTypesResponse.id = 'ondewo.nlu.CleanAllEntityTypesResponse';
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeRequest
 */
export class CleanEntityTypeRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanEntityTypeRequest();
        CleanEntityTypeRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.entityTypeName = _instance.entityTypeName || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.substringWhiteList = _instance.substringWhiteList || [];
        _instance.maxEntityCountUpdate = _instance.maxEntityCountUpdate || 0;
        _instance.dryRun = _instance.dryRun || false;
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
                    _instance.entityTypeName = _reader.readString();
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 5:
                    (_instance.substringWhiteList =
                        _instance.substringWhiteList || []).push(_reader.readString());
                    break;
                case 6:
                    _instance.maxEntityCountUpdate = _reader.readInt32();
                    break;
                case 7:
                    _instance.dryRun = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanEntityTypeRequest.refineValues(_instance);
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
        if (_instance.entityTypeName) {
            _writer.writeString(2, _instance.entityTypeName);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(4, _instance.specialCharacters);
        }
        if (_instance.substringWhiteList && _instance.substringWhiteList.length) {
            _writer.writeRepeatedString(5, _instance.substringWhiteList);
        }
        if (_instance.maxEntityCountUpdate) {
            _writer.writeInt32(6, _instance.maxEntityCountUpdate);
        }
        if (_instance.dryRun) {
            _writer.writeBool(7, _instance.dryRun);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanEntityTypeRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.entityTypeName = _value.entityTypeName;
        this.languageCode = _value.languageCode;
        this.specialCharacters = _value.specialCharacters;
        this.substringWhiteList = (_value.substringWhiteList || []).slice();
        this.maxEntityCountUpdate = _value.maxEntityCountUpdate;
        this.dryRun = _value.dryRun;
        CleanEntityTypeRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityTypeName() {
        return this._entityTypeName;
    }
    set entityTypeName(value) {
        this._entityTypeName = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get substringWhiteList() {
        return this._substringWhiteList;
    }
    set substringWhiteList(value) {
        this._substringWhiteList = value;
    }
    get maxEntityCountUpdate() {
        return this._maxEntityCountUpdate;
    }
    set maxEntityCountUpdate(value) {
        this._maxEntityCountUpdate = value;
    }
    get dryRun() {
        return this._dryRun;
    }
    set dryRun(value) {
        this._dryRun = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanEntityTypeRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            entityTypeName: this.entityTypeName,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            maxEntityCountUpdate: this.maxEntityCountUpdate,
            dryRun: this.dryRun
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
            entityTypeName: this.entityTypeName,
            languageCode: this.languageCode,
            specialCharacters: this.specialCharacters,
            substringWhiteList: (this.substringWhiteList || []).slice(),
            maxEntityCountUpdate: this.maxEntityCountUpdate,
            dryRun: this.dryRun
        };
    }
}
CleanEntityTypeRequest.id = 'ondewo.nlu.CleanEntityTypeRequest';
/**
 * Message implementation for ondewo.nlu.CleanEntityTypeResponse
 */
export class CleanEntityTypeResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CleanEntityTypeResponse();
        CleanEntityTypeResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.cleanedEntityType = _instance.cleanedEntityType || undefined;
        _instance.entityTypeUpdate = _instance.entityTypeUpdate || undefined;
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
                    _instance.cleanedEntityType = new ondewoNlu009.EntityType();
                    _reader.readMessage(_instance.cleanedEntityType, ondewoNlu009.EntityType.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.entityTypeUpdate = new EntityTypeUpdate();
                    _reader.readMessage(_instance.entityTypeUpdate, EntityTypeUpdate.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        CleanEntityTypeResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.cleanedEntityType) {
            _writer.writeMessage(1, _instance.cleanedEntityType, ondewoNlu009.EntityType.serializeBinaryToWriter);
        }
        if (_instance.entityTypeUpdate) {
            _writer.writeMessage(2, _instance.entityTypeUpdate, EntityTypeUpdate.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CleanEntityTypeResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.cleanedEntityType = _value.cleanedEntityType
            ? new ondewoNlu009.EntityType(_value.cleanedEntityType)
            : undefined;
        this.entityTypeUpdate = _value.entityTypeUpdate
            ? new EntityTypeUpdate(_value.entityTypeUpdate)
            : undefined;
        CleanEntityTypeResponse.refineValues(this);
    }
    get cleanedEntityType() {
        return this._cleanedEntityType;
    }
    set cleanedEntityType(value) {
        this._cleanedEntityType = value;
    }
    get entityTypeUpdate() {
        return this._entityTypeUpdate;
    }
    set entityTypeUpdate(value) {
        this._entityTypeUpdate = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CleanEntityTypeResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            cleanedEntityType: this.cleanedEntityType
                ? this.cleanedEntityType.toObject()
                : undefined,
            entityTypeUpdate: this.entityTypeUpdate
                ? this.entityTypeUpdate.toObject()
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
            cleanedEntityType: this.cleanedEntityType
                ? this.cleanedEntityType.toProtobufJSON(options)
                : null,
            entityTypeUpdate: this.entityTypeUpdate
                ? this.entityTypeUpdate.toProtobufJSON(options)
                : null
        };
    }
}
CleanEntityTypeResponse.id = 'ondewo.nlu.CleanEntityTypeResponse';
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest
 */
export class AddTrainingPhrasesRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddTrainingPhrasesRequest();
        AddTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.trainingPhraseList = _instance.trainingPhraseList || [];
        _instance.extractEntities = _instance.extractEntities || false;
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.trainingPhraseCleanerOptions =
            _instance.trainingPhraseCleanerOptions || undefined;
        _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new AddTrainingPhrasesRequest.TrainingPhraseForIntent();
                    _reader.readMessage(messageInitializer3, AddTrainingPhrasesRequest.TrainingPhraseForIntent
                        .deserializeBinaryFromReader);
                    (_instance.trainingPhraseList =
                        _instance.trainingPhraseList || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.extractEntities = _reader.readBool();
                    break;
                case 5:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 6:
                    _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    _reader.readMessage(_instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.numberOfWorkers = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddTrainingPhrasesRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.trainingPhraseList && _instance.trainingPhraseList.length) {
            _writer.writeRepeatedMessage(3, _instance.trainingPhraseList, AddTrainingPhrasesRequest.TrainingPhraseForIntent
                .serializeBinaryToWriter);
        }
        if (_instance.extractEntities) {
            _writer.writeBool(4, _instance.extractEntities);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(5, _instance.specialCharacters);
        }
        if (_instance.trainingPhraseCleanerOptions) {
            _writer.writeMessage(6, _instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.serializeBinaryToWriter);
        }
        if (_instance.numberOfWorkers) {
            _writer.writeInt32(7, _instance.numberOfWorkers);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.trainingPhraseList = (_value.trainingPhraseList || []).map(m => new AddTrainingPhrasesRequest.TrainingPhraseForIntent(m));
        this.extractEntities = _value.extractEntities;
        this.specialCharacters = _value.specialCharacters;
        this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
            : undefined;
        this.numberOfWorkers = _value.numberOfWorkers;
        AddTrainingPhrasesRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get trainingPhraseList() {
        return this._trainingPhraseList;
    }
    set trainingPhraseList(value) {
        this._trainingPhraseList = value;
    }
    get extractEntities() {
        return this._extractEntities;
    }
    set extractEntities(value) {
        this._extractEntities = value;
    }
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get trainingPhraseCleanerOptions() {
        return this._trainingPhraseCleanerOptions;
    }
    set trainingPhraseCleanerOptions(value) {
        this._trainingPhraseCleanerOptions = value;
    }
    get numberOfWorkers() {
        return this._numberOfWorkers;
    }
    set numberOfWorkers(value) {
        this._numberOfWorkers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            trainingPhraseList: (this.trainingPhraseList || []).map(m => m.toObject()),
            extractEntities: this.extractEntities,
            specialCharacters: this.specialCharacters,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toObject()
                : undefined,
            numberOfWorkers: this.numberOfWorkers
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
            languageCode: this.languageCode,
            trainingPhraseList: (this.trainingPhraseList || []).map(m => m.toProtobufJSON(options)),
            extractEntities: this.extractEntities,
            specialCharacters: this.specialCharacters,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
                : null,
            numberOfWorkers: this.numberOfWorkers
        };
    }
}
AddTrainingPhrasesRequest.id = 'ondewo.nlu.AddTrainingPhrasesRequest';
(function (AddTrainingPhrasesRequest) {
    /**
     * Message implementation for ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent
     */
    class TrainingPhraseForIntent {
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TrainingPhraseForIntent();
            TrainingPhraseForIntent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.trainingPhrase = _instance.trainingPhrase || '';
            _instance.intentDisplayName = _instance.intentDisplayName || '';
            _instance.entities = _instance.entities || [];
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
                        _instance.trainingPhrase = _reader.readString();
                        break;
                    case 2:
                        _instance.intentDisplayName = _reader.readString();
                        break;
                    case 3:
                        const messageInitializer3 = new ondewoNlu008.Intent.TrainingPhrase.Entity();
                        _reader.readMessage(messageInitializer3, ondewoNlu008.Intent.TrainingPhrase.Entity
                            .deserializeBinaryFromReader);
                        (_instance.entities = _instance.entities || []).push(messageInitializer3);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TrainingPhraseForIntent.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.trainingPhrase) {
                _writer.writeString(1, _instance.trainingPhrase);
            }
            if (_instance.intentDisplayName) {
                _writer.writeString(2, _instance.intentDisplayName);
            }
            if (_instance.entities && _instance.entities.length) {
                _writer.writeRepeatedMessage(3, _instance.entities, ondewoNlu008.Intent.TrainingPhrase.Entity.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhraseForIntent to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.trainingPhrase = _value.trainingPhrase;
            this.intentDisplayName = _value.intentDisplayName;
            this.entities = (_value.entities || []).map(m => new ondewoNlu008.Intent.TrainingPhrase.Entity(m));
            TrainingPhraseForIntent.refineValues(this);
        }
        get trainingPhrase() {
            return this._trainingPhrase;
        }
        set trainingPhrase(value) {
            this._trainingPhrase = value;
        }
        get intentDisplayName() {
            return this._intentDisplayName;
        }
        set intentDisplayName(value) {
            this._intentDisplayName = value;
        }
        get entities() {
            return this._entities;
        }
        set entities(value) {
            this._entities = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            TrainingPhraseForIntent.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                trainingPhrase: this.trainingPhrase,
                intentDisplayName: this.intentDisplayName,
                entities: (this.entities || []).map(m => m.toObject())
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
                trainingPhrase: this.trainingPhrase,
                intentDisplayName: this.intentDisplayName,
                entities: (this.entities || []).map(m => m.toProtobufJSON(options))
            };
        }
    }
    TrainingPhraseForIntent.id = 'ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent';
    AddTrainingPhrasesRequest.TrainingPhraseForIntent = TrainingPhraseForIntent;
})(AddTrainingPhrasesRequest || (AddTrainingPhrasesRequest = {}));
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesResponse
 */
export class AddTrainingPhrasesResponse {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddTrainingPhrasesResponse();
        AddTrainingPhrasesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        AddTrainingPhrasesResponse.refineValues(_instance);
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
     * @param _value initial values object or instance of AddTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.errorMessages = (_value.errorMessages || []).slice();
        AddTrainingPhrasesResponse.refineValues(this);
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
        AddTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
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
AddTrainingPhrasesResponse.id = 'ondewo.nlu.AddTrainingPhrasesResponse';
/**
 * Message implementation for ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export class AddTrainingPhrasesFromCSVRequest {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new AddTrainingPhrasesFromCSVRequest();
        AddTrainingPhrasesFromCSVRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.csvContents = _instance.csvContents || new Uint8Array();
        _instance.extractEntities = _instance.extractEntities || false;
        _instance.specialCharacters = _instance.specialCharacters || '';
        _instance.trainingPhraseCleanerOptions =
            _instance.trainingPhraseCleanerOptions || undefined;
        _instance.numberOfWorkers = _instance.numberOfWorkers || 0;
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
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.csvContents = _reader.readBytes();
                    break;
                case 4:
                    _instance.extractEntities = _reader.readBool();
                    break;
                case 5:
                    _instance.specialCharacters = _reader.readString();
                    break;
                case 6:
                    _instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    _reader.readMessage(_instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.numberOfWorkers = _reader.readInt32();
                    break;
                default:
                    _reader.skipField();
            }
        }
        AddTrainingPhrasesFromCSVRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.csvContents && _instance.csvContents.length) {
            _writer.writeBytes(3, _instance.csvContents);
        }
        if (_instance.extractEntities) {
            _writer.writeBool(4, _instance.extractEntities);
        }
        if (_instance.specialCharacters) {
            _writer.writeString(5, _instance.specialCharacters);
        }
        if (_instance.trainingPhraseCleanerOptions) {
            _writer.writeMessage(6, _instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.serializeBinaryToWriter);
        }
        if (_instance.numberOfWorkers) {
            _writer.writeInt32(7, _instance.numberOfWorkers);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of AddTrainingPhrasesFromCSVRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.csvContents = _value.csvContents;
        this.extractEntities = _value.extractEntities;
        this.specialCharacters = _value.specialCharacters;
        this.trainingPhraseCleanerOptions = _value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(_value.trainingPhraseCleanerOptions)
            : undefined;
        this.numberOfWorkers = _value.numberOfWorkers;
        AddTrainingPhrasesFromCSVRequest.refineValues(this);
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get csvContents() {
        return this._csvContents;
    }
    set csvContents(value) {
        this._csvContents = value;
    }
    get extractEntities() {
        return this._extractEntities;
    }
    set extractEntities(value) {
        this._extractEntities = value;
    }
    get specialCharacters() {
        return this._specialCharacters;
    }
    set specialCharacters(value) {
        this._specialCharacters = value;
    }
    get trainingPhraseCleanerOptions() {
        return this._trainingPhraseCleanerOptions;
    }
    set trainingPhraseCleanerOptions(value) {
        this._trainingPhraseCleanerOptions = value;
    }
    get numberOfWorkers() {
        return this._numberOfWorkers;
    }
    set numberOfWorkers(value) {
        this._numberOfWorkers = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        AddTrainingPhrasesFromCSVRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            csvContents: this.csvContents
                ? this.csvContents.subarray(0)
                : new Uint8Array(),
            extractEntities: this.extractEntities,
            specialCharacters: this.specialCharacters,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toObject()
                : undefined,
            numberOfWorkers: this.numberOfWorkers
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
            languageCode: this.languageCode,
            csvContents: this.csvContents ? uint8ArrayToBase64(this.csvContents) : '',
            extractEntities: this.extractEntities,
            specialCharacters: this.specialCharacters,
            trainingPhraseCleanerOptions: this.trainingPhraseCleanerOptions
                ? this.trainingPhraseCleanerOptions.toProtobufJSON(options)
                : null,
            numberOfWorkers: this.numberOfWorkers
        };
    }
}
AddTrainingPhrasesFromCSVRequest.id = 'ondewo.nlu.AddTrainingPhrasesFromCSVRequest';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3V0aWxpdHkucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUlMLGtCQUFrQixFQUNuQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFTekUsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEtBQUssWUFBWSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE1BQU0sQ0FBTixJQUFZLHlCQU1YO0FBTkQsV0FBWSx5QkFBeUI7SUFDbkMsaUdBQW9CLENBQUE7SUFDcEIsbUdBQXFCLENBQUE7SUFDckIsdUdBQXVCLENBQUE7SUFDdkIsbUhBQTZCLENBQUE7SUFDN0IsMklBQXlDLENBQUE7QUFDM0MsQ0FBQyxFQU5XLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFNcEM7QUFDRDs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBb0I7SUFHL0I7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWlCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FDOUMsUUFBUSxFQUNSLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBK0I7UUFDakQsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7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LENBQUMsNEJBQTRCLENBQUMsUUFBUSxFQUFFO2dCQUM5QyxDQUFDLENBQUMsU0FBUztZQUNiLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztJQUNaLGFBQWE7SUFDYixPQUErQjtRQUUvQixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLDRCQUE0QixFQUFFLElBQUksQ0FBQyw0QkFBNEI7Z0JBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLElBQUk7WUFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBaFBNLG1DQUFFLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zLFxuICB1aW50OEFycmF5VG9CYXNlNjRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMiBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbW1vbi5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9vcGVyYXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA2IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA3IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwOCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDkgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5leHBvcnQgZW51bSBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHtcbiAgUkVBTk5PVEFURV9ORVZFUiA9IDAsXG4gIFJFQU5OT1RBVEVfQUxXQVlTID0gMSxcbiAgUkVBTk5PVEFURV9JRl9FTVBUWSA9IDIsXG4gIFJFQU5OT1RBVEVfQUZURVJfREVMRVRJT04gPSAzLFxuICBSRUFOTk9UQVRFX0lGX0VNUFRZX09SX0FGVEVSX0RFTEVUSU9OID0gNFxufVxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlZhbGlkYXRlUmVnZXhSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuVmFsaWRhdGVSZWdleFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucmVnZXggPSBfaW5zdGFuY2UucmVnZXggfHwgJyc7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucmVnZXggPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucmVnZXgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnJlZ2V4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWdleDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgVmFsaWRhdGVSZWdleFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVSZWdleFJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmVnZXggPSBfdmFsdWUucmVnZXg7XG4gICAgVmFsaWRhdGVSZWdleFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCByZWdleCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yZWdleDtcbiAgfVxuICBzZXQgcmVnZXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2V4ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVmFsaWRhdGVSZWdleFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogVmFsaWRhdGVSZWdleFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICByZWdleDogdGhpcy5yZWdleFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFZhbGlkYXRlUmVnZXhSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IHRoaXMucmVnZXhcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFZhbGlkYXRlUmVnZXhSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZVJlZ2V4UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcmVnZXg6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZVJlZ2V4UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcmVnZXg6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVmFsaWRhdGVSZWdleFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlZhbGlkYXRlUmVnZXhSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZhbGlkYXRlUmVnZXhSZXNwb25zZSgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbGlkYXRlUmVnZXhSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVSZWdleFJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSAoX3ZhbHVlLmVycm9yTWVzc2FnZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgVmFsaWRhdGVSZWdleFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZXM7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogVmFsaWRhdGVSZWdleFJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVSZWdleFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGVycm9yTWVzc2FnZXM6IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFZhbGlkYXRlUmVnZXhSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0KCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZSA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGUgPSBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuRW50aXR5KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuRW50aXR5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGUgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZT86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkVudGl0eTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5Bc09iamVjdD5cbiAgKSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZW50aXR5VHlwZSA9IF92YWx1ZS5lbnRpdHlUeXBlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkoX3ZhbHVlLmVudGl0eVR5cGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZSgpOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlKHZhbHVlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZTogdGhpcy5lbnRpdHlUeXBlID8gdGhpcy5lbnRpdHlUeXBlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZTogdGhpcy5lbnRpdHlUeXBlXG4gICAgICAgID8gdGhpcy5lbnRpdHlUeXBlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZW50aXR5VHlwZT86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkVudGl0eS5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlUeXBlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5FbnRpdHkuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5WYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UoKTtcbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgPSBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzICYmIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lcnJvck1lc3NhZ2VzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLkFzT2JqZWN0PlxuICApIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gKF92YWx1ZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZXM7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNsZWFuQWxsSW50ZW50c1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuQWxsSW50ZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuQWxsSW50ZW50c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkFsbEludGVudHNSZXF1ZXN0KCk7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9IF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLmRyeVJ1biA9IF9pbnN0YW5jZS5kcnlSdW4gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHx8IDA7XG4gICAgX2luc3RhbmNlLm51bWJlck9mV29ya2VycyA9IF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAoX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLFxuICAgICAgICAgICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuQWxsSW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg0LCBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kcnlSdW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDUsIF9pbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNywgX2luc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDgsIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZHJ5UnVuOiBib29sZWFuO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgcHJpdmF0ZSBfcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZXb3JrZXJzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBDbGVhbkFsbEludGVudHNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsSW50ZW50c1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gX3ZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCA9IChfdmFsdWUuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZHJ5UnVuID0gX3ZhbHVlLmRyeVJ1bjtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgPyBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IF92YWx1ZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuICAgIHRoaXMubnVtYmVyT2ZXb3JrZXJzID0gX3ZhbHVlLm51bWJlck9mV29ya2VycztcbiAgICBDbGVhbkFsbEludGVudHNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucygpOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgfVxuICBzZXQgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyh2YWx1ZTogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucykge1xuICAgIHRoaXMuX3JlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZXb3JrZXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mV29ya2VycztcbiAgfVxuICBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkFsbEludGVudHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuQWxsSW50ZW50c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgc3Vic3RyaW5nV2hpdGVMaXN0OiAodGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCksXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zOiB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMsXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6ICh0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczpcbiAgICAgICAgUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uc1tcbiAgICAgICAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uc1xuICAgICAgICBdLFxuICAgICAgbnVtYmVyT2ZXb3JrZXJzOiB0aGlzLm51bWJlck9mV29ya2Vyc1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6IHN0cmluZ1tdO1xuICAgIGRyeVJ1bjogYm9vbGVhbjtcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc09iamVjdDtcbiAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuICAgIG51bWJlck9mV29ya2VyczogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsZWFuQWxsSW50ZW50c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgICBkcnlSdW46IGJvb2xlYW47XG4gICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczogc3RyaW5nO1xuICAgIG51bWJlck9mV29ya2VyczogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkFsbEludGVudHNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuQWxsSW50ZW50c1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UoKTtcbiAgICBDbGVhbkFsbEludGVudHNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzID0gX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5pbnRlbnRVcGRhdGVMaXN0ID0gX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IG9uZGV3b05sdTAwOC5JbnRlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwOC5JbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzID0gX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEludGVudFVwZGF0ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgSW50ZW50VXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5pbnRlbnRVcGRhdGVMaXN0ID0gX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2xlYW5lZEludGVudHMgJiYgX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA4LkludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRVcGRhdGVMaXN0ICYmIF9pbnN0YW5jZS5pbnRlbnRVcGRhdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgYXMgYW55LFxuICAgICAgICBJbnRlbnRVcGRhdGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW5lZEludGVudHM/OiBvbmRld29ObHUwMDguSW50ZW50W107XG4gIHByaXZhdGUgX2ludGVudFVwZGF0ZUxpc3Q/OiBJbnRlbnRVcGRhdGVbXTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNsZWFuZWRJbnRlbnRzID0gKF92YWx1ZS5jbGVhbmVkSW50ZW50cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA4LkludGVudChtKVxuICAgICk7XG4gICAgdGhpcy5pbnRlbnRVcGRhdGVMaXN0ID0gKF92YWx1ZS5pbnRlbnRVcGRhdGVMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnRVcGRhdGUobSlcbiAgICApO1xuICAgIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEludGVudHMoKTogb25kZXdvTmx1MDA4LkludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lZEludGVudHM7XG4gIH1cbiAgc2V0IGNsZWFuZWRJbnRlbnRzKHZhbHVlOiBvbmRld29ObHUwMDguSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVkSW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRVcGRhdGVMaXN0KCk6IEludGVudFVwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50VXBkYXRlTGlzdDtcbiAgfVxuICBzZXQgaW50ZW50VXBkYXRlTGlzdCh2YWx1ZTogSW50ZW50VXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRVcGRhdGVMaXN0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhbmVkSW50ZW50czogKHRoaXMuY2xlYW5lZEludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBpbnRlbnRVcGRhdGVMaXN0OiAodGhpcy5pbnRlbnRVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhbmVkSW50ZW50czogKHRoaXMuY2xlYW5lZEludGVudHMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBpbnRlbnRVcGRhdGVMaXN0OiAodGhpcy5pbnRlbnRVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkFsbEludGVudHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNsZWFuZWRJbnRlbnRzPzogb25kZXdvTmx1MDA4LkludGVudC5Bc09iamVjdFtdO1xuICAgIGludGVudFVwZGF0ZUxpc3Q/OiBJbnRlbnRVcGRhdGUuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEludGVudHNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2xlYW5lZEludGVudHM6IG9uZGV3b05sdTAwOC5JbnRlbnQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgaW50ZW50VXBkYXRlTGlzdDogSW50ZW50VXBkYXRlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkludGVudFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuSW50ZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5JbnRlbnRSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5JbnRlbnRSZXF1ZXN0KCk7XG4gICAgQ2xlYW5JbnRlbnRSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmludGVudE5hbWUgPSBfaW5zdGFuY2UuaW50ZW50TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9IF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgX2luc3RhbmNlLmRyeVJ1biA9IF9pbnN0YW5jZS5kcnlSdW4gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID1cbiAgICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkludGVudFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuZHJ5UnVuID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICAgICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5JbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5pbnRlbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg1LCBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kcnlSdW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDYsIF9pbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oOCwgX2luc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9pbnRlbnROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZTogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVyczogc3RyaW5nO1xuICBwcml2YXRlIF9zdWJzdHJpbmdXaGl0ZUxpc3Q6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9kcnlSdW46IGJvb2xlYW47XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICBwcml2YXRlIF9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5JbnRlbnRSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuSW50ZW50UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMuaW50ZW50TmFtZSA9IF92YWx1ZS5pbnRlbnROYW1lO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzID0gX3ZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0ID0gKF92YWx1ZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5kcnlSdW4gPSBfdmFsdWUuZHJ5UnVuO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICA/IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKF92YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gX3ZhbHVlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gICAgQ2xlYW5JbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnROYW1lO1xuICB9XG4gIHNldCBpbnRlbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxDaGFyYWN0ZXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBzcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3Vic3RyaW5nV2hpdGVMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0O1xuICB9XG4gIHNldCBzdWJzdHJpbmdXaGl0ZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRyeVJ1bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZHJ5UnVuO1xuICB9XG4gIHNldCBkcnlSdW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kcnlSdW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhcbiAgICB2YWx1ZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMoKTogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gIH1cbiAgc2V0IHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnModmFsdWU6IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpIHtcbiAgICB0aGlzLl9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5JbnRlbnRSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuSW50ZW50UmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBpbnRlbnROYW1lOiB0aGlzLmludGVudE5hbWUsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6ICh0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM6IHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENsZWFuSW50ZW50UmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBpbnRlbnROYW1lOiB0aGlzLmludGVudE5hbWUsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6ICh0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczpcbiAgICAgICAgUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uc1tcbiAgICAgICAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPT09IG51bGwgfHxcbiAgICAgICAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uc1xuICAgICAgICBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkludGVudFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENsZWFuSW50ZW50UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgaW50ZW50TmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgICBkcnlSdW46IGJvb2xlYW47XG4gICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNPYmplY3Q7XG4gICAgcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9uczogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIGludGVudE5hbWU6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBzcGVjaWFsQ2hhcmFjdGVyczogc3RyaW5nO1xuICAgIHN1YnN0cmluZ1doaXRlTGlzdDogc3RyaW5nW107XG4gICAgZHJ5UnVuOiBib29sZWFuO1xuICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM6IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5JbnRlbnRSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQ2xlYW5JbnRlbnRSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5JbnRlbnRSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuSW50ZW50UmVzcG9uc2UoKTtcbiAgICBDbGVhbkludGVudFJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5jbGVhbmVkSW50ZW50ID0gX2luc3RhbmNlLmNsZWFuZWRJbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pbnRlbnRVcGRhdGUgPSBfaW5zdGFuY2UuaW50ZW50VXBkYXRlIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuSW50ZW50UmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRJbnRlbnQgPSBuZXcgb25kZXdvTmx1MDA4LkludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEludGVudCxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwOC5JbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnRVcGRhdGUgPSBuZXcgSW50ZW50VXBkYXRlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnRVcGRhdGUsXG4gICAgICAgICAgICBJbnRlbnRVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuSW50ZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkludGVudFJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZWRJbnRlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEludGVudCBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwOC5JbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50VXBkYXRlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmludGVudFVwZGF0ZSBhcyBhbnksXG4gICAgICAgIEludGVudFVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbmVkSW50ZW50Pzogb25kZXdvTmx1MDA4LkludGVudDtcbiAgcHJpdmF0ZSBfaW50ZW50VXBkYXRlPzogSW50ZW50VXBkYXRlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5JbnRlbnRSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkludGVudFJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNsZWFuZWRJbnRlbnQgPSBfdmFsdWUuY2xlYW5lZEludGVudFxuICAgICAgPyBuZXcgb25kZXdvTmx1MDA4LkludGVudChfdmFsdWUuY2xlYW5lZEludGVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50VXBkYXRlID0gX3ZhbHVlLmludGVudFVwZGF0ZVxuICAgICAgPyBuZXcgSW50ZW50VXBkYXRlKF92YWx1ZS5pbnRlbnRVcGRhdGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBDbGVhbkludGVudFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEludGVudCgpOiBvbmRld29ObHUwMDguSW50ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lZEludGVudDtcbiAgfVxuICBzZXQgY2xlYW5lZEludGVudCh2YWx1ZTogb25kZXdvTmx1MDA4LkludGVudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsZWFuZWRJbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50VXBkYXRlKCk6IEludGVudFVwZGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFVwZGF0ZTtcbiAgfVxuICBzZXQgaW50ZW50VXBkYXRlKHZhbHVlOiBJbnRlbnRVcGRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkludGVudFJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuSW50ZW50UmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhbmVkSW50ZW50OiB0aGlzLmNsZWFuZWRJbnRlbnRcbiAgICAgICAgPyB0aGlzLmNsZWFuZWRJbnRlbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudFVwZGF0ZTogdGhpcy5pbnRlbnRVcGRhdGUgPyB0aGlzLmludGVudFVwZGF0ZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5JbnRlbnRSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnQ6IHRoaXMuY2xlYW5lZEludGVudFxuICAgICAgICA/IHRoaXMuY2xlYW5lZEludGVudC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBpbnRlbnRVcGRhdGU6IHRoaXMuaW50ZW50VXBkYXRlXG4gICAgICAgID8gdGhpcy5pbnRlbnRVcGRhdGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkludGVudFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkludGVudFJlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBjbGVhbmVkSW50ZW50Pzogb25kZXdvTmx1MDA4LkludGVudC5Bc09iamVjdDtcbiAgICBpbnRlbnRVcGRhdGU/OiBJbnRlbnRVcGRhdGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5JbnRlbnRSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2xlYW5lZEludGVudDogb25kZXdvTmx1MDA4LkludGVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaW50ZW50VXBkYXRlOiBJbnRlbnRVcGRhdGUuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5UcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5UcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgX2luc3RhbmNlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgPVxuICAgICAgX2luc3RhbmNlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyA9XG4gICAgICBfaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzID1cbiAgICAgIF9pbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDEsIF9pbnN0YW5jZS5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDIsIF9pbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMsIF9pbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzOiBib29sZWFuO1xuICBwcml2YXRlIF9kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgPSBfdmFsdWUuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcztcbiAgICB0aGlzLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzID1cbiAgICAgIF92YWx1ZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzO1xuICB9XG4gIHNldCBkZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycztcbiAgfVxuICBzZXQgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlczogdGhpcy5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzLFxuICAgICAgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzOiB0aGlzLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMsXG4gICAgICBkZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBkZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzOiBib29sZWFuO1xuICAgIGRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbjtcbiAgICBkZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXM6IGJvb2xlYW47XG4gICAgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiBib29sZWFuO1xuICAgIGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlN0cmluZ1VwZGF0ZVxuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nVXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TdHJpbmdVcGRhdGUnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICBTdHJpbmdVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTdHJpbmdVcGRhdGUpIHtcbiAgICBfaW5zdGFuY2UubmV3ID0gX2luc3RhbmNlLm5ldyB8fCAnJztcbiAgICBfaW5zdGFuY2Uub2xkID0gX2luc3RhbmNlLm9sZCB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IFN0cmluZ1VwZGF0ZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmV3ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2Uub2xkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTdHJpbmdVcGRhdGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBTdHJpbmdVcGRhdGUsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubmV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uZXcpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9sZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uub2xkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uZXc6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2xkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdHJpbmdVcGRhdGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3RyaW5nVXBkYXRlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5ldyA9IF92YWx1ZS5uZXc7XG4gICAgdGhpcy5vbGQgPSBfdmFsdWUub2xkO1xuICAgIFN0cmluZ1VwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5ldygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uZXc7XG4gIH1cbiAgc2V0IG5ldyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9sZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vbGQ7XG4gIH1cbiAgc2V0IG9sZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2xkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyaW5nVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IFN0cmluZ1VwZGF0ZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ldzogdGhpcy5uZXcsXG4gICAgICBvbGQ6IHRoaXMub2xkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogU3RyaW5nVXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3OiB0aGlzLm5ldyxcbiAgICAgIG9sZDogdGhpcy5vbGRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFN0cmluZ1VwZGF0ZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU3RyaW5nVXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuZXc6IHN0cmluZztcbiAgICBvbGQ6IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTdHJpbmdVcGRhdGVcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5ldzogc3RyaW5nO1xuICAgIG9sZDogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnRlbnRVcGRhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVudFVwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuSW50ZW50VXBkYXRlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW50ZW50VXBkYXRlKCk7XG4gICAgSW50ZW50VXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSW50ZW50VXBkYXRlKSB7XG4gICAgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lID0gX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgPVxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCB8fCBbXTtcbiAgICBfaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMgPSBfaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBJbnRlbnRVcGRhdGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIChfaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEludGVudFVwZGF0ZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEludGVudFVwZGF0ZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0ICYmXG4gICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0Lmxlbmd0aFxuICAgICkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCBhcyBhbnksXG4gICAgICAgIEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyAmJiBfaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMywgX2luc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnREaXNwbGF5TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3Q/OiBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGVbXTtcbiAgcHJpdmF0ZSBfZGVsZXRlZFBhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSW50ZW50VXBkYXRlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEludGVudFVwZGF0ZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnREaXNwbGF5TmFtZSA9IF92YWx1ZS5pbnRlbnREaXNwbGF5TmFtZTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IChfdmFsdWUudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUobSlcbiAgICApO1xuICAgIHRoaXMuZGVsZXRlZFBhcmFtZXRlcnMgPSAoX3ZhbHVlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIEludGVudFVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudERpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudERpc3BsYXlOYW1lO1xuICB9XG4gIHNldCBpbnRlbnREaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW50ZW50RGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0KCk6XG4gICAgfCBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGVbXVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0O1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QoXG4gICAgdmFsdWU6IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVtdIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVkUGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWRQYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBkZWxldGVkUGFyYW1ldGVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kZWxldGVkUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEludGVudFVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBJbnRlbnRVcGRhdGUuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBkZWxldGVkUGFyYW1ldGVyczogKHRoaXMuZGVsZXRlZFBhcmFtZXRlcnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBJbnRlbnRVcGRhdGUuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgZGVsZXRlZFBhcmFtZXRlcnM6ICh0aGlzLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbnRlbnRVcGRhdGUge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEludGVudFVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgaW50ZW50RGlzcGxheU5hbWU6IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3Q/OiBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUuQXNPYmplY3RbXTtcbiAgICBkZWxldGVkUGFyYW1ldGVyczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSW50ZW50VXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpbnRlbnREaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDpcbiAgICAgIHwgSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlLkFzUHJvdG9idWZKU09OW11cbiAgICAgIHwgbnVsbDtcbiAgICBkZWxldGVkUGFyYW1ldGVyczogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGVcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZVVwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5JbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGUnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFpbmluZ1BocmFzZVVwZGF0ZSgpO1xuICAgICAgVHJhaW5pbmdQaHJhc2VVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlVXBkYXRlKSB7XG4gICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgPVxuICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgfHwgdW5kZWZpbmVkO1xuICAgICAgX2luc3RhbmNlLmVudGl0eVVwZGF0ZXMgPSBfaW5zdGFuY2UuZW50aXR5VXBkYXRlcyB8fCBbXTtcbiAgICAgIF9pbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkID0gX2luc3RhbmNlLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW107XG4gICAgICBfaW5zdGFuY2UuY29udGFpbnNVcGRhdGVWYXJpYWJsZSA9XG4gICAgICAgIF9pbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlVXBkYXRlLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlID0gbmV3IFN0cmluZ1VwZGF0ZSgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlLFxuICAgICAgICAgICAgICBTdHJpbmdVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICAgIFN0cmluZ1VwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2luc3RhbmNlLmVudGl0eVVwZGF0ZXMgPSBfaW5zdGFuY2UuZW50aXR5VXBkYXRlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIChfaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCA9XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkIHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgVHJhaW5pbmdQaHJhc2VVcGRhdGUucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgIF9pbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VVcGRhdGUsXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMSxcbiAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlVcGRhdGVzICYmIF9pbnN0YW5jZS5lbnRpdHlVcGRhdGVzLmxlbmd0aCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eVVwZGF0ZXMgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBfaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCAmJlxuICAgICAgICBfaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZC5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMywgX2luc3RhbmNlLmVudGl0aWVzUmVhbm5vdGF0ZWQpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFpbmluZ1BocmFzZVVwZGF0ZT86IFN0cmluZ1VwZGF0ZTtcbiAgICBwcml2YXRlIF9lbnRpdHlVcGRhdGVzPzogU3RyaW5nVXBkYXRlW107XG4gICAgcHJpdmF0ZSBfZW50aXRpZXNSZWFubm90YXRlZDogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfY29udGFpbnNVcGRhdGVWYXJpYWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRyYWluaW5nUGhyYXNlVXBkYXRlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFpbmluZ1BocmFzZVVwZGF0ZS5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGUgPSBfdmFsdWUudHJhaW5pbmdQaHJhc2VVcGRhdGVcbiAgICAgICAgPyBuZXcgU3RyaW5nVXBkYXRlKF92YWx1ZS50cmFpbmluZ1BocmFzZVVwZGF0ZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmVudGl0eVVwZGF0ZXMgPSAoX3ZhbHVlLmVudGl0eVVwZGF0ZXMgfHwgW10pLm1hcChcbiAgICAgICAgbSA9PiBuZXcgU3RyaW5nVXBkYXRlKG0pXG4gICAgICApO1xuICAgICAgdGhpcy5lbnRpdGllc1JlYW5ub3RhdGVkID0gKF92YWx1ZS5lbnRpdGllc1JlYW5ub3RhdGVkIHx8IFtdKS5zbGljZSgpO1xuICAgICAgdGhpcy5jb250YWluc1VwZGF0ZVZhcmlhYmxlID0gX3ZhbHVlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGU7XG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCB0cmFpbmluZ1BocmFzZVVwZGF0ZSgpOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlO1xuICAgIH1cbiAgICBzZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGUodmFsdWU6IFN0cmluZ1VwZGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VVcGRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0eVVwZGF0ZXMoKTogU3RyaW5nVXBkYXRlW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eVVwZGF0ZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdHlVcGRhdGVzKHZhbHVlOiBTdHJpbmdVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXR5VXBkYXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW50aXRpZXNSZWFubm90YXRlZCgpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXNSZWFubm90YXRlZDtcbiAgICB9XG4gICAgc2V0IGVudGl0aWVzUmVhbm5vdGF0ZWQodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgICB0aGlzLl9lbnRpdGllc1JlYW5ub3RhdGVkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjb250YWluc1VwZGF0ZVZhcmlhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5zVXBkYXRlVmFyaWFibGU7XG4gICAgfVxuICAgIHNldCBjb250YWluc1VwZGF0ZVZhcmlhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9jb250YWluc1VwZGF0ZVZhcmlhYmxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IFRyYWluaW5nUGhyYXNlVXBkYXRlLkFzT2JqZWN0IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlOiB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlLnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgZW50aXR5VXBkYXRlczogKHRoaXMuZW50aXR5VXBkYXRlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgICAgZW50aXRpZXNSZWFubm90YXRlZDogKHRoaXMuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgY29udGFpbnNVcGRhdGVWYXJpYWJsZTogdGhpcy5jb250YWluc1VwZGF0ZVZhcmlhYmxlXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFRyYWluaW5nUGhyYXNlVXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlOiB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBlbnRpdHlVcGRhdGVzOiAodGhpcy5lbnRpdHlVcGRhdGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgKSxcbiAgICAgICAgZW50aXRpZXNSZWFubm90YXRlZDogKHRoaXMuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgY29udGFpbnNVcGRhdGVWYXJpYWJsZTogdGhpcy5jb250YWluc1VwZGF0ZVZhcmlhYmxlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFRyYWluaW5nUGhyYXNlVXBkYXRlIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhaW5pbmdQaHJhc2VVcGRhdGVcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlPzogU3RyaW5nVXBkYXRlLkFzT2JqZWN0O1xuICAgICAgZW50aXR5VXBkYXRlcz86IFN0cmluZ1VwZGF0ZS5Bc09iamVjdFtdO1xuICAgICAgZW50aXRpZXNSZWFubm90YXRlZDogc3RyaW5nW107XG4gICAgICBjb250YWluc1VwZGF0ZVZhcmlhYmxlOiBib29sZWFuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICB0cmFpbmluZ1BocmFzZVVwZGF0ZTogU3RyaW5nVXBkYXRlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIGVudGl0eVVwZGF0ZXM6IFN0cmluZ1VwZGF0ZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICAgIGVudGl0aWVzUmVhbm5vdGF0ZWQ6IHN0cmluZ1tdO1xuICAgICAgY29udGFpbnNVcGRhdGVWYXJpYWJsZTogYm9vbGVhbjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkVudGl0eVR5cGVVcGRhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEVudGl0eVR5cGVVcGRhdGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkVudGl0eVR5cGVVcGRhdGUnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlUeXBlVXBkYXRlKCk7XG4gICAgRW50aXR5VHlwZVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUpIHtcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgPSBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgPSBfaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCA9IF9pbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0IHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnRpdHlUeXBlVXBkYXRlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogRW50aXR5VHlwZVVwZGF0ZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgJiYgX2luc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eVR5cGVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZhbHVlc1VwZGF0ZUxpc3Q/OiBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgRW50aXR5VHlwZVVwZGF0ZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnRpdHlUeXBlVXBkYXRlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gX3ZhbHVlLmVudGl0eVR5cGVOYW1lO1xuICAgIHRoaXMudmFsdWVzVXBkYXRlTGlzdCA9IChfdmFsdWUudmFsdWVzVXBkYXRlTGlzdCB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUobSlcbiAgICApO1xuICAgIEVudGl0eVR5cGVVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlc1VwZGF0ZUxpc3QoKTogRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlc1VwZGF0ZUxpc3Q7XG4gIH1cbiAgc2V0IHZhbHVlc1VwZGF0ZUxpc3QodmFsdWU6IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92YWx1ZXNVcGRhdGVMaXN0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRW50aXR5VHlwZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBFbnRpdHlUeXBlVXBkYXRlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5VHlwZU5hbWU6IHRoaXMuZW50aXR5VHlwZU5hbWUsXG4gICAgICB2YWx1ZXNVcGRhdGVMaXN0OiAodGhpcy52YWx1ZXNVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogRW50aXR5VHlwZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eVR5cGVOYW1lOiB0aGlzLmVudGl0eVR5cGVOYW1lLFxuICAgICAgdmFsdWVzVXBkYXRlTGlzdDogKHRoaXMudmFsdWVzVXBkYXRlTGlzdCB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRW50aXR5VHlwZVVwZGF0ZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5VHlwZVVwZGF0ZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgZW50aXR5VHlwZU5hbWU6IHN0cmluZztcbiAgICB2YWx1ZXNVcGRhdGVMaXN0PzogRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUuQXNPYmplY3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBFbnRpdHlUeXBlVXBkYXRlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBlbnRpdHlUeXBlTmFtZTogc3RyaW5nO1xuICAgIHZhbHVlc1VwZGF0ZUxpc3Q6IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGVcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBFbnRpdHlVcGRhdGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUnO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlVcGRhdGUoKTtcbiAgICAgIEVudGl0eVVwZGF0ZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRW50aXR5VXBkYXRlKSB7XG4gICAgICBfaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUgPSBfaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUgfHwgdW5kZWZpbmVkO1xuICAgICAgX2luc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzID0gX2luc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IEVudGl0eVVwZGF0ZSxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSxcbiAgICAgICAgICAgICAgU3RyaW5nVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgU3RyaW5nVXBkYXRlKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgICBTdHJpbmdVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKF9pbnN0YW5jZS5lbnRpdHlTeW5vbnltVXBkYXRlcyA9XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEVudGl0eVVwZGF0ZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBFbnRpdHlVcGRhdGUsXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMSxcbiAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBfaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgJiZcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgMixcbiAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2VudGl0eVZhbHVlVXBkYXRlPzogU3RyaW5nVXBkYXRlO1xuICAgIHByaXZhdGUgX2VudGl0eVN5bm9ueW1VcGRhdGVzPzogU3RyaW5nVXBkYXRlW107XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFbnRpdHlVcGRhdGUgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVVwZGF0ZS5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZW50aXR5VmFsdWVVcGRhdGUgPSBfdmFsdWUuZW50aXR5VmFsdWVVcGRhdGVcbiAgICAgICAgPyBuZXcgU3RyaW5nVXBkYXRlKF92YWx1ZS5lbnRpdHlWYWx1ZVVwZGF0ZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmVudGl0eVN5bm9ueW1VcGRhdGVzID0gKF92YWx1ZS5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkubWFwKFxuICAgICAgICBtID0+IG5ldyBTdHJpbmdVcGRhdGUobSlcbiAgICAgICk7XG4gICAgICBFbnRpdHlVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZW50aXR5VmFsdWVVcGRhdGUoKTogU3RyaW5nVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlWYWx1ZVVwZGF0ZTtcbiAgICB9XG4gICAgc2V0IGVudGl0eVZhbHVlVXBkYXRlKHZhbHVlOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVZhbHVlVXBkYXRlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdHlTeW5vbnltVXBkYXRlcygpOiBTdHJpbmdVcGRhdGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3lub255bVVwZGF0ZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdHlTeW5vbnltVXBkYXRlcyh2YWx1ZTogU3RyaW5nVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVN5bm9ueW1VcGRhdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIEVudGl0eVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBFbnRpdHlVcGRhdGUuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW50aXR5VmFsdWVVcGRhdGU6IHRoaXMuZW50aXR5VmFsdWVVcGRhdGVcbiAgICAgICAgICA/IHRoaXMuZW50aXR5VmFsdWVVcGRhdGUudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBlbnRpdHlTeW5vbnltVXBkYXRlczogKHRoaXMuZW50aXR5U3lub255bVVwZGF0ZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgICAgbS50b09iamVjdCgpXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogRW50aXR5VXBkYXRlLkFzUHJvdG9idWZKU09OIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVudGl0eVZhbHVlVXBkYXRlOiB0aGlzLmVudGl0eVZhbHVlVXBkYXRlXG4gICAgICAgICAgPyB0aGlzLmVudGl0eVZhbHVlVXBkYXRlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBlbnRpdHlTeW5vbnltVXBkYXRlczogKHRoaXMuZW50aXR5U3lub255bVVwZGF0ZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICApXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIEVudGl0eVVwZGF0ZSB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEVudGl0eVVwZGF0ZVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgZW50aXR5VmFsdWVVcGRhdGU/OiBTdHJpbmdVcGRhdGUuQXNPYmplY3Q7XG4gICAgICBlbnRpdHlTeW5vbnltVXBkYXRlcz86IFN0cmluZ1VwZGF0ZS5Bc09iamVjdFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEVudGl0eVVwZGF0ZVxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgZW50aXR5VmFsdWVVcGRhdGU6IFN0cmluZ1VwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBlbnRpdHlTeW5vbnltVXBkYXRlczogU3RyaW5nVXBkYXRlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0KCk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID0gX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXTtcbiAgICBfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgPSBfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgfHwgMDtcbiAgICBfaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zID1cbiAgICAgIF9pbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgfHwgW107XG4gICAgX2luc3RhbmNlLmRyeVJ1biA9IF9pbnN0YW5jZS5kcnlSdW4gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLm51bWJlck9mV29ya2VycyA9IF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgKF9pbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCAmJiBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoNSwgX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyAmJlxuICAgICAgX2luc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucy5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg2LCBfaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kcnlSdW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDcsIF9pbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDgsIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbWF4RW50aXR5Q291bnRVcGRhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZHJ5UnVuOiBib29sZWFuO1xuICBwcml2YXRlIF9udW1iZXJPZldvcmtlcnM6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlcnMgPSBfdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgPSAoX3ZhbHVlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1heEVudGl0eUNvdW50VXBkYXRlID0gX3ZhbHVlLm1heEVudGl0eUNvdW50VXBkYXRlO1xuICAgIHRoaXMuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zID0gKFxuICAgICAgX3ZhbHVlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXVxuICAgICkuc2xpY2UoKTtcbiAgICB0aGlzLmRyeVJ1biA9IF92YWx1ZS5kcnlSdW47XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSBfdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4RW50aXR5Q291bnRVcGRhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGU7XG4gIH1cbiAgc2V0IG1heEVudGl0eUNvdW50VXBkYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM7XG4gIH1cbiAgc2V0IGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJPZldvcmtlcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG4gIHNldCBudW1iZXJPZldvcmtlcnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mV29ya2VycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM6IChcbiAgICAgICAgdGhpcy5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgfHwgW11cbiAgICAgICkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgc3Vic3RyaW5nV2hpdGVMaXN0OiAodGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogdGhpcy5tYXhFbnRpdHlDb3VudFVwZGF0ZSxcbiAgICAgIGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJuczogKFxuICAgICAgICB0aGlzLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXVxuICAgICAgKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6IHN0cmluZ1tdO1xuICAgIG1heEVudGl0eUNvdW50VXBkYXRlOiBudW1iZXI7XG4gICAgZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zOiBzdHJpbmdbXTtcbiAgICBkcnlSdW46IGJvb2xlYW47XG4gICAgbnVtYmVyT2ZXb3JrZXJzOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudDogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogbnVtYmVyO1xuICAgIGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJuczogc3RyaW5nW107XG4gICAgZHJ5UnVuOiBib29sZWFuO1xuICAgIG51bWJlck9mV29ya2VyczogbnVtYmVyO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlKCk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyA9IF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyA9IF9pbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzID0gX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zID0gX2luc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBFbnRpdHlUeXBlVXBkYXRlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IEVudGl0eVR5cGVVcGRhdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgIEVudGl0eVR5cGVVcGRhdGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgPVxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyNCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzICYmIF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzICYmIF9pbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBfaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZXMgJiYgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zICYmIF9pbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFuZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlW107XG4gIHByaXZhdGUgX2RlbGV0ZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlW107XG4gIHByaXZhdGUgX2VudGl0eVR5cGVVcGRhdGVzPzogRW50aXR5VHlwZVVwZGF0ZVtdO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlRGVsZXRpb25zPzogRW50aXR5VHlwZVVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5jbGVhbmVkRW50aXR5VHlwZXMgPSAoX3ZhbHVlLmNsZWFuZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUobSlcbiAgICApO1xuICAgIHRoaXMuZGVsZXRlZEVudGl0eVR5cGVzID0gKF92YWx1ZS5kZWxldGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlKG0pXG4gICAgKTtcbiAgICB0aGlzLmVudGl0eVR5cGVVcGRhdGVzID0gKF92YWx1ZS5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRW50aXR5VHlwZVVwZGF0ZShtKVxuICAgICk7XG4gICAgdGhpcy5lbnRpdHlUeXBlRGVsZXRpb25zID0gKF92YWx1ZS5lbnRpdHlUeXBlRGVsZXRpb25zIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBFbnRpdHlUeXBlVXBkYXRlKG0pXG4gICAgKTtcbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjbGVhbmVkRW50aXR5VHlwZXMoKTogb25kZXdvTmx1MDA5LkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuZWRFbnRpdHlUeXBlcztcbiAgfVxuICBzZXQgY2xlYW5lZEVudGl0eVR5cGVzKHZhbHVlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lZEVudGl0eVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlbGV0ZWRFbnRpdHlUeXBlcygpOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlZEVudGl0eVR5cGVzO1xuICB9XG4gIHNldCBkZWxldGVkRW50aXR5VHlwZXModmFsdWU6IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWxldGVkRW50aXR5VHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZVVwZGF0ZXMoKTogRW50aXR5VHlwZVVwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZVVwZGF0ZXM7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGVVcGRhdGVzKHZhbHVlOiBFbnRpdHlUeXBlVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlVXBkYXRlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlRGVsZXRpb25zKCk6IEVudGl0eVR5cGVVcGRhdGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVEZWxldGlvbnM7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGVEZWxldGlvbnModmFsdWU6IEVudGl0eVR5cGVVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVEZWxldGlvbnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEVudGl0eVR5cGVzOiAodGhpcy5jbGVhbmVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIGRlbGV0ZWRFbnRpdHlUeXBlczogKHRoaXMuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBlbnRpdHlUeXBlVXBkYXRlczogKHRoaXMuZW50aXR5VHlwZVVwZGF0ZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBlbnRpdHlUeXBlRGVsZXRpb25zOiAodGhpcy5lbnRpdHlUeXBlRGVsZXRpb25zIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhbmVkRW50aXR5VHlwZXM6ICh0aGlzLmNsZWFuZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGRlbGV0ZWRFbnRpdHlUeXBlczogKHRoaXMuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgZW50aXR5VHlwZVVwZGF0ZXM6ICh0aGlzLmVudGl0eVR5cGVVcGRhdGVzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgZW50aXR5VHlwZURlbGV0aW9uczogKHRoaXMuZW50aXR5VHlwZURlbGV0aW9ucyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNsZWFuZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkFzT2JqZWN0W107XG4gICAgZGVsZXRlZEVudGl0eVR5cGVzPzogb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuQXNPYmplY3RbXTtcbiAgICBlbnRpdHlUeXBlVXBkYXRlcz86IEVudGl0eVR5cGVVcGRhdGUuQXNPYmplY3RbXTtcbiAgICBlbnRpdHlUeXBlRGVsZXRpb25zPzogRW50aXR5VHlwZVVwZGF0ZS5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgY2xlYW5lZEVudGl0eVR5cGVzOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBkZWxldGVkRW50aXR5VHlwZXM6IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGVudGl0eVR5cGVVcGRhdGVzOiBFbnRpdHlUeXBlVXBkYXRlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGVudGl0eVR5cGVEZWxldGlvbnM6IEVudGl0eVR5cGVVcGRhdGUuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkNsZWFuRW50aXR5VHlwZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuRW50aXR5VHlwZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkNsZWFuRW50aXR5VHlwZVJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0KCk7XG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgPSBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPSBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdO1xuICAgIF9pbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IF9pbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5kcnlSdW4gPSBfaW5zdGFuY2UuZHJ5UnVuIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPVxuICAgICAgICAgICAgX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmRyeVJ1biA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCAmJiBfaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDUsIF9pbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoNiwgX2luc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kcnlSdW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDcsIF9pbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbWF4RW50aXR5Q291bnRVcGRhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZHJ5UnVuOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5lbnRpdHlUeXBlTmFtZSA9IF92YWx1ZS5lbnRpdHlUeXBlTmFtZTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCA9IChfdmFsdWUuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUgPSBfdmFsdWUubWF4RW50aXR5Q291bnRVcGRhdGU7XG4gICAgdGhpcy5kcnlSdW4gPSBfdmFsdWUuZHJ5UnVuO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxDaGFyYWN0ZXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBzcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3Vic3RyaW5nV2hpdGVMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0O1xuICB9XG4gIHNldCBzdWJzdHJpbmdXaGl0ZUxpc3QodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heEVudGl0eUNvdW50VXBkYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heEVudGl0eUNvdW50VXBkYXRlO1xuICB9XG4gIHNldCBtYXhFbnRpdHlDb3VudFVwZGF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBlbnRpdHlUeXBlTmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogbnVtYmVyO1xuICAgIGRyeVJ1bjogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBlbnRpdHlUeXBlTmFtZTogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZTogc3RyaW5nO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgc3Vic3RyaW5nV2hpdGVMaXN0OiBzdHJpbmdbXTtcbiAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogbnVtYmVyO1xuICAgIGRyeVJ1bjogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DbGVhbkVudGl0eVR5cGVSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlKCk7XG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSA9IF9pbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGUgPSBfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGUgPSBuZXcgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlID0gbmV3IEVudGl0eVR5cGVVcGRhdGUoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVVcGRhdGUsXG4gICAgICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbmVkRW50aXR5VHlwZT86IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlVXBkYXRlPzogRW50aXR5VHlwZVVwZGF0ZTtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlID0gX3ZhbHVlLmNsZWFuZWRFbnRpdHlUeXBlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMDkuRW50aXR5VHlwZShfdmFsdWUuY2xlYW5lZEVudGl0eVR5cGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVudGl0eVR5cGVVcGRhdGUgPSBfdmFsdWUuZW50aXR5VHlwZVVwZGF0ZVxuICAgICAgPyBuZXcgRW50aXR5VHlwZVVwZGF0ZShfdmFsdWUuZW50aXR5VHlwZVVwZGF0ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEVudGl0eVR5cGUoKTogb25kZXdvTmx1MDA5LkVudGl0eVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVkRW50aXR5VHlwZTtcbiAgfVxuICBzZXQgY2xlYW5lZEVudGl0eVR5cGUodmFsdWU6IG9uZGV3b05sdTAwOS5FbnRpdHlUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lZEVudGl0eVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZVVwZGF0ZSgpOiBFbnRpdHlUeXBlVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZVVwZGF0ZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZVVwZGF0ZSh2YWx1ZTogRW50aXR5VHlwZVVwZGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRFbnRpdHlUeXBlOiB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlXG4gICAgICAgID8gdGhpcy5jbGVhbmVkRW50aXR5VHlwZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZW50aXR5VHlwZVVwZGF0ZTogdGhpcy5lbnRpdHlUeXBlVXBkYXRlXG4gICAgICAgID8gdGhpcy5lbnRpdHlUeXBlVXBkYXRlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRFbnRpdHlUeXBlOiB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlXG4gICAgICAgID8gdGhpcy5jbGVhbmVkRW50aXR5VHlwZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBlbnRpdHlUeXBlVXBkYXRlOiB0aGlzLmVudGl0eVR5cGVVcGRhdGVcbiAgICAgICAgPyB0aGlzLmVudGl0eVR5cGVVcGRhdGUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkVudGl0eVR5cGVSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGNsZWFuZWRFbnRpdHlUeXBlPzogb25kZXdvTmx1MDA5LkVudGl0eVR5cGUuQXNPYmplY3Q7XG4gICAgZW50aXR5VHlwZVVwZGF0ZT86IEVudGl0eVR5cGVVcGRhdGUuQXNPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGNsZWFuZWRFbnRpdHlUeXBlOiBvbmRld29ObHUwMDkuRW50aXR5VHlwZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZW50aXR5VHlwZVVwZGF0ZTogRW50aXR5VHlwZVVwZGF0ZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0ID0gX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdCB8fCBbXTtcbiAgICBfaW5zdGFuY2UuZXh0cmFjdEVudGl0aWVzID0gX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFxuICAgICAgICAgICAgICAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdCA9XG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICAgICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QgJiYgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdC5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QgYXMgYW55LFxuICAgICAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50XG4gICAgICAgICAgLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDcsIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VMaXN0PzogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFtdO1xuICBwcml2YXRlIF9leHRyYWN0RW50aXRpZXM6IGJvb2xlYW47XG4gIHByaXZhdGUgX3NwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICBwcml2YXRlIF9udW1iZXJPZldvcmtlcnM6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSBfdmFsdWUucGFyZW50O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlTGlzdCA9IChfdmFsdWUudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLmV4dHJhY3RFbnRpdGllcyA9IF92YWx1ZS5leHRyYWN0RW50aXRpZXM7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IF92YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgPyBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhfdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyT2ZXb3JrZXJzID0gX3ZhbHVlLm51bWJlck9mV29ya2VycztcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VMaXN0KCk6XG4gICAgfCBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50W11cbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlTGlzdDtcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VMaXN0KFxuICAgIHZhbHVlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50W10gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4dHJhY3RFbnRpdGllcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdEVudGl0aWVzO1xuICB9XG4gIHNldCBleHRyYWN0RW50aXRpZXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHRyYWN0RW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZXb3JrZXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mV29ya2VycztcbiAgfVxuICBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBleHRyYWN0RW50aXRpZXM6IHRoaXMuZXh0cmFjdEVudGl0aWVzLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB0cmFpbmluZ1BocmFzZUxpc3Q6ICh0aGlzLnRyYWluaW5nUGhyYXNlTGlzdCB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIGV4dHJhY3RFbnRpdGllczogdGhpcy5leHRyYWN0RW50aXRpZXMsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUxpc3Q/OiBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50LkFzT2JqZWN0W107XG4gICAgZXh0cmFjdEVudGl0aWVzOiBib29sZWFuO1xuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmc7XG4gICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuQXNPYmplY3Q7XG4gICAgbnVtYmVyT2ZXb3JrZXJzOiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgdHJhaW5pbmdQaHJhc2VMaXN0OlxuICAgICAgfCBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50LkFzUHJvdG9idWZKU09OW11cbiAgICAgIHwgbnVsbDtcbiAgICBleHRyYWN0RW50aXRpZXM6IGJvb2xlYW47XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBudW1iZXJPZldvcmtlcnM6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnRcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZUZvckludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50JztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUZvckludGVudCkge1xuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lID0gX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmVudGl0aWVzID0gX2luc3RhbmNlLmVudGl0aWVzIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjMsXG4gICAgICAgICAgICAgIG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5XG4gICAgICAgICAgICAgICAgLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIChfaW5zdGFuY2UuZW50aXRpZXMgPSBfaW5zdGFuY2UuZW50aXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZUZvckludGVudCxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmludGVudERpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZW50aXRpZXMgJiYgX2luc3RhbmNlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDMsXG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgICBvbmRld29ObHUwMDguSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaW50ZW50RGlzcGxheU5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9lbnRpdGllcz86IG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5W107XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFpbmluZ1BocmFzZUZvckludGVudCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLnRyYWluaW5nUGhyYXNlID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlO1xuICAgICAgdGhpcy5pbnRlbnREaXNwbGF5TmFtZSA9IF92YWx1ZS5pbnRlbnREaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMuZW50aXRpZXMgPSAoX3ZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAoXG4gICAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5KG0pXG4gICAgICApO1xuICAgICAgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdHJhaW5pbmdQaHJhc2UoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZTtcbiAgICB9XG4gICAgc2V0IHRyYWluaW5nUGhyYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBpbnRlbnREaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVudERpc3BsYXlOYW1lO1xuICAgIH1cbiAgICBzZXQgaW50ZW50RGlzcGxheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5faW50ZW50RGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0aWVzKCk6IG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5W10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzO1xuICAgIH1cbiAgICBzZXQgZW50aXRpZXMoXG4gICAgICB2YWx1ZTogb25kZXdvTmx1MDA4LkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXSB8IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICovXG4gICAgdG9PYmplY3QoKTogVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhaW5pbmdQaHJhc2U6IHRoaXMudHJhaW5pbmdQaHJhc2UsXG4gICAgICAgIGludGVudERpc3BsYXlOYW1lOiB0aGlzLmludGVudERpc3BsYXlOYW1lLFxuICAgICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhaW5pbmdQaHJhc2U6IHRoaXMudHJhaW5pbmdQaHJhc2UsXG4gICAgICAgIGludGVudERpc3BsYXlOYW1lOiB0aGlzLmludGVudERpc3BsYXlOYW1lLFxuICAgICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50IHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnRcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIHRyYWluaW5nUGhyYXNlOiBzdHJpbmc7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgICAgZW50aXRpZXM/OiBvbmRld29ObHUwMDguSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5Bc09iamVjdFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50XG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICB0cmFpbmluZ1BocmFzZTogc3RyaW5nO1xuICAgICAgaW50ZW50RGlzcGxheU5hbWU6IHN0cmluZztcbiAgICAgIGVudGl0aWVzOlxuICAgICAgICB8IG9uZGV3b05sdTAwOC5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5LkFzUHJvdG9idWZKU09OW11cbiAgICAgICAgfCBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5BZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlKCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSkge1xuICAgIF9pbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoX2luc3RhbmNlLmVycm9yTWVzc2FnZXMgPSBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gKF92YWx1ZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZXM7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlcyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgZXJyb3JNZXNzYWdlczogc3RyaW5nW107XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCgpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuY3N2Q29udGVudHMgPSBfaW5zdGFuY2UuY3N2Q29udGVudHMgfHwgbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICBfaW5zdGFuY2UuZXh0cmFjdEVudGl0aWVzID0gX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuY3N2Q29udGVudHMgPSBfcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICAgICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNzdkNvbnRlbnRzICYmIF9pbnN0YW5jZS5jc3ZDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVCeXRlcygzLCBfaW5zdGFuY2UuY3N2Q29udGVudHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcykge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNCwgX2luc3RhbmNlLmV4dHJhY3RFbnRpdGllcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgYXMgYW55LFxuICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDcsIF9pbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3N2Q29udGVudHM6IFVpbnQ4QXJyYXk7XG4gIHByaXZhdGUgX2V4dHJhY3RFbnRpdGllczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2VyczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QuQXNPYmplY3Q+XG4gICkge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuY3N2Q29udGVudHMgPSBfdmFsdWUuY3N2Q29udGVudHM7XG4gICAgdGhpcy5leHRyYWN0RW50aXRpZXMgPSBfdmFsdWUuZXh0cmFjdEVudGl0aWVzO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlcnMgPSBfdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgID8gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoX3ZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlck9mV29ya2VycyA9IF92YWx1ZS5udW1iZXJPZldvcmtlcnM7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBjc3ZDb250ZW50cygpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Q29udGVudHM7XG4gIH1cbiAgc2V0IGNzdkNvbnRlbnRzKHZhbHVlOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5fY3N2Q29udGVudHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXh0cmFjdEVudGl0aWVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHRyYWN0RW50aXRpZXM7XG4gIH1cbiAgc2V0IGV4dHJhY3RFbnRpdGllcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4dHJhY3RFbnRpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsQ2hhcmFjdGVycygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycztcbiAgfVxuICBzZXQgc3BlY2lhbENoYXJhY3RlcnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoXG4gICAgdmFsdWU6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJPZldvcmtlcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG4gIHNldCBudW1iZXJPZldvcmtlcnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mV29ya2VycyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBjc3ZDb250ZW50czogdGhpcy5jc3ZDb250ZW50c1xuICAgICAgICA/IHRoaXMuY3N2Q29udGVudHMuc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgZXh0cmFjdEVudGl0aWVzOiB0aGlzLmV4dHJhY3RFbnRpdGllcyxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIGNzdkNvbnRlbnRzOiB0aGlzLmNzdkNvbnRlbnRzID8gdWludDhBcnJheVRvQmFzZTY0KHRoaXMuY3N2Q29udGVudHMpIDogJycsXG4gICAgICBleHRyYWN0RW50aXRpZXM6IHRoaXMuZXh0cmFjdEVudGl0aWVzLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgbnVtYmVyT2ZXb3JrZXJzOiB0aGlzLm51bWJlck9mV29ya2Vyc1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ6IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU6IHN0cmluZztcbiAgICBjc3ZDb250ZW50czogVWludDhBcnJheTtcbiAgICBleHRyYWN0RW50aXRpZXM6IGJvb2xlYW47XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zPzogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5Bc09iamVjdDtcbiAgICBudW1iZXJPZldvcmtlcnM6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XG4gICAgY3N2Q29udGVudHM6IHN0cmluZztcbiAgICBleHRyYWN0RW50aXRpZXM6IGJvb2xlYW47XG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZztcbiAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBudW1iZXJPZldvcmtlcnM6IG51bWJlcjtcbiAgfVxufVxuIl19