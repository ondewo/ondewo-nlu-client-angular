import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu000 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/entity-type.pb';
export var ReannotateEntitiesOptions;
(function (ReannotateEntitiesOptions) {
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["reannotateNever"] = 0] = "reannotateNever";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["reannotateAlways"] = 1] = "reannotateAlways";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["reannotateIfEmpty"] = 2] = "reannotateIfEmpty";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["reannotateAfterDeletion"] = 3] = "reannotateAfterDeletion";
    ReannotateEntitiesOptions[ReannotateEntitiesOptions["reannotateIfEmptyOrAfterDeletion"] = 4] = "reannotateIfEmptyOrAfterDeletion";
})(ReannotateEntitiesOptions || (ReannotateEntitiesOptions = {}));
export class ValidateRegexRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateRegexRequest value
     */
    constructor(value) {
        value = value || {};
        this.regex = value.regex;
        ValidateRegexRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ValidateRegexRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ValidateRegexRequest();
        ValidateRegexRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.regex = instance.regex || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.regex = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ValidateRegexRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.regex) {
            writer.writeString(1, instance.regex);
        }
    }
    get regex() {
        return this._regex;
    }
    set regex(value) {
        this._regex = value;
    }
    toObject() {
        return {
            regex: this.regex
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ValidateRegexResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateRegexResponse value
     */
    constructor(value) {
        value = value || {};
        this.errorMessages = (value.errorMessages || []).slice();
        ValidateRegexResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ValidateRegexResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ValidateRegexResponse();
        ValidateRegexResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.errorMessages = instance.errorMessages || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.errorMessages = instance.errorMessages || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ValidateRegexResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.errorMessages && instance.errorMessages.length) {
            writer.writeRepeatedString(1, instance.errorMessages);
        }
    }
    get errorMessages() {
        return this._errorMessages;
    }
    set errorMessages(value) {
        this._errorMessages = value;
    }
    toObject() {
        return {
            errorMessages: (this.errorMessages || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ValidateEmbeddedRegexRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateEmbeddedRegexRequest value
     */
    constructor(value) {
        value = value || {};
        this.entityType = value.entityType
            ? new ondewoNlu001.EntityType.Entity(value.entityType)
            : undefined;
        ValidateEmbeddedRegexRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ValidateEmbeddedRegexRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ValidateEmbeddedRegexRequest();
        ValidateEmbeddedRegexRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityType = instance.entityType || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityType = new ondewoNlu001.EntityType.Entity();
                    reader.readMessage(instance.entityType, ondewoNlu001.EntityType.Entity.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ValidateEmbeddedRegexRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityType) {
            writer.writeMessage(1, instance.entityType, ondewoNlu001.EntityType.Entity.toBinaryWriter);
        }
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    toObject() {
        return {
            entityType: this.entityType ? this.entityType.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ValidateEmbeddedRegexResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateEmbeddedRegexResponse value
     */
    constructor(value) {
        value = value || {};
        this.errorMessages = (value.errorMessages || []).slice();
        ValidateEmbeddedRegexResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ValidateEmbeddedRegexResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ValidateEmbeddedRegexResponse();
        ValidateEmbeddedRegexResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.errorMessages = instance.errorMessages || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.errorMessages = instance.errorMessages || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ValidateEmbeddedRegexResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.errorMessages && instance.errorMessages.length) {
            writer.writeRepeatedString(1, instance.errorMessages);
        }
    }
    get errorMessages() {
        return this._errorMessages;
    }
    set errorMessages(value) {
        this._errorMessages = value;
    }
    toObject() {
        return {
            errorMessages: (this.errorMessages || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CleanAllIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllIntentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.specialCharacters = value.specialCharacters;
        this.substringWhiteList = (value.substringWhiteList || []).slice();
        this.dryRun = value.dryRun;
        this.trainingPhraseCleanerOptions = value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(value.trainingPhraseCleanerOptions)
            : undefined;
        this.reannotateEntitiesOptions = value.reannotateEntitiesOptions;
        this.numberOfWorkers = value.numberOfWorkers;
        CleanAllIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanAllIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanAllIntentsRequest();
        CleanAllIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.specialCharacters = instance.specialCharacters || '';
        instance.substringWhiteList = instance.substringWhiteList || [];
        instance.dryRun = instance.dryRun || false;
        instance.trainingPhraseCleanerOptions =
            instance.trainingPhraseCleanerOptions || undefined;
        instance.reannotateEntitiesOptions =
            instance.reannotateEntitiesOptions || 0;
        instance.numberOfWorkers = instance.numberOfWorkers || 0;
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
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.specialCharacters = reader.readString();
                    break;
                case 4:
                    (instance.substringWhiteList =
                        instance.substringWhiteList || []).push(reader.readString());
                    break;
                case 5:
                    instance.dryRun = reader.readBool();
                    break;
                case 6:
                    instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    reader.readMessage(instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.fromBinaryReader);
                    break;
                case 7:
                    instance.reannotateEntitiesOptions = reader.readEnum();
                    break;
                case 8:
                    instance.numberOfWorkers = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanAllIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.specialCharacters) {
            writer.writeString(3, instance.specialCharacters);
        }
        if (instance.substringWhiteList && instance.substringWhiteList.length) {
            writer.writeRepeatedString(4, instance.substringWhiteList);
        }
        if (instance.dryRun) {
            writer.writeBool(5, instance.dryRun);
        }
        if (instance.trainingPhraseCleanerOptions) {
            writer.writeMessage(6, instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.toBinaryWriter);
        }
        if (instance.reannotateEntitiesOptions) {
            writer.writeEnum(7, instance.reannotateEntitiesOptions);
        }
        if (instance.numberOfWorkers) {
            writer.writeInt32(8, instance.numberOfWorkers);
        }
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
    toJSON() {
        return this.toObject();
    }
}
export class CleanAllIntentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllIntentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.cleanedIntents = (value.cleanedIntents || []).map(m => new ondewoNlu000.Intent(m));
        this.intentUpdateList = (value.intentUpdateList || []).map(m => new IntentUpdate(m));
        CleanAllIntentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanAllIntentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanAllIntentsResponse();
        CleanAllIntentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.cleanedIntents = instance.cleanedIntents || [];
        instance.intentUpdateList = instance.intentUpdateList || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ondewoNlu000.Intent();
                    reader.readMessage(messageInitializer1, ondewoNlu000.Intent.fromBinaryReader);
                    (instance.cleanedIntents = instance.cleanedIntents || []).push(messageInitializer1);
                    break;
                case 2:
                    const messageInitializer2 = new IntentUpdate();
                    reader.readMessage(messageInitializer2, IntentUpdate.fromBinaryReader);
                    (instance.intentUpdateList = instance.intentUpdateList || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanAllIntentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.cleanedIntents && instance.cleanedIntents.length) {
            writer.writeRepeatedMessage(1, instance.cleanedIntents, ondewoNlu000.Intent.toBinaryWriter);
        }
        if (instance.intentUpdateList && instance.intentUpdateList.length) {
            writer.writeRepeatedMessage(2, instance.intentUpdateList, IntentUpdate.toBinaryWriter);
        }
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
    toObject() {
        return {
            cleanedIntents: (this.cleanedIntents || []).map(m => m.toObject()),
            intentUpdateList: (this.intentUpdateList || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CleanIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.intentName = value.intentName;
        this.languageCode = value.languageCode;
        this.specialCharacters = value.specialCharacters;
        this.substringWhiteList = (value.substringWhiteList || []).slice();
        this.dryRun = value.dryRun;
        this.trainingPhraseCleanerOptions = value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(value.trainingPhraseCleanerOptions)
            : undefined;
        this.reannotateEntitiesOptions = value.reannotateEntitiesOptions;
        CleanIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanIntentRequest();
        CleanIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.intentName = instance.intentName || '';
        instance.languageCode = instance.languageCode || '';
        instance.specialCharacters = instance.specialCharacters || '';
        instance.substringWhiteList = instance.substringWhiteList || [];
        instance.dryRun = instance.dryRun || false;
        instance.trainingPhraseCleanerOptions =
            instance.trainingPhraseCleanerOptions || undefined;
        instance.reannotateEntitiesOptions =
            instance.reannotateEntitiesOptions || 0;
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
                    instance.intentName = reader.readString();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.specialCharacters = reader.readString();
                    break;
                case 5:
                    (instance.substringWhiteList =
                        instance.substringWhiteList || []).push(reader.readString());
                    break;
                case 6:
                    instance.dryRun = reader.readBool();
                    break;
                case 7:
                    instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    reader.readMessage(instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.fromBinaryReader);
                    break;
                case 8:
                    instance.reannotateEntitiesOptions = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intentName) {
            writer.writeString(2, instance.intentName);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.specialCharacters) {
            writer.writeString(4, instance.specialCharacters);
        }
        if (instance.substringWhiteList && instance.substringWhiteList.length) {
            writer.writeRepeatedString(5, instance.substringWhiteList);
        }
        if (instance.dryRun) {
            writer.writeBool(6, instance.dryRun);
        }
        if (instance.trainingPhraseCleanerOptions) {
            writer.writeMessage(7, instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.toBinaryWriter);
        }
        if (instance.reannotateEntitiesOptions) {
            writer.writeEnum(8, instance.reannotateEntitiesOptions);
        }
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
    toJSON() {
        return this.toObject();
    }
}
export class CleanIntentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanIntentResponse value
     */
    constructor(value) {
        value = value || {};
        this.cleanedIntent = value.cleanedIntent
            ? new ondewoNlu000.Intent(value.cleanedIntent)
            : undefined;
        this.intentUpdate = value.intentUpdate
            ? new IntentUpdate(value.intentUpdate)
            : undefined;
        CleanIntentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanIntentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanIntentResponse();
        CleanIntentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.cleanedIntent = instance.cleanedIntent || undefined;
        instance.intentUpdate = instance.intentUpdate || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.cleanedIntent = new ondewoNlu000.Intent();
                    reader.readMessage(instance.cleanedIntent, ondewoNlu000.Intent.fromBinaryReader);
                    break;
                case 2:
                    instance.intentUpdate = new IntentUpdate();
                    reader.readMessage(instance.intentUpdate, IntentUpdate.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanIntentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.cleanedIntent) {
            writer.writeMessage(1, instance.cleanedIntent, ondewoNlu000.Intent.toBinaryWriter);
        }
        if (instance.intentUpdate) {
            writer.writeMessage(2, instance.intentUpdate, IntentUpdate.toBinaryWriter);
        }
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
    toObject() {
        return {
            cleanedIntent: this.cleanedIntent
                ? this.cleanedIntent.toObject()
                : undefined,
            intentUpdate: this.intentUpdate ? this.intentUpdate.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class TrainingPhraseCleanerOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param TrainingPhraseCleanerOptions value
     */
    constructor(value) {
        value = value || {};
        this.deleteRepeatedWhitespaces = value.deleteRepeatedWhitespaces;
        this.deleteLeadingSpecialCharacters = value.deleteLeadingSpecialCharacters;
        this.deleteTrailingSpecialCharacters =
            value.deleteTrailingSpecialCharacters;
        TrainingPhraseCleanerOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TrainingPhraseCleanerOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TrainingPhraseCleanerOptions();
        TrainingPhraseCleanerOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deleteRepeatedWhitespaces =
            instance.deleteRepeatedWhitespaces || false;
        instance.deleteLeadingSpecialCharacters =
            instance.deleteLeadingSpecialCharacters || false;
        instance.deleteTrailingSpecialCharacters =
            instance.deleteTrailingSpecialCharacters || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.deleteRepeatedWhitespaces = reader.readBool();
                    break;
                case 2:
                    instance.deleteLeadingSpecialCharacters = reader.readBool();
                    break;
                case 3:
                    instance.deleteTrailingSpecialCharacters = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        TrainingPhraseCleanerOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deleteRepeatedWhitespaces) {
            writer.writeBool(1, instance.deleteRepeatedWhitespaces);
        }
        if (instance.deleteLeadingSpecialCharacters) {
            writer.writeBool(2, instance.deleteLeadingSpecialCharacters);
        }
        if (instance.deleteTrailingSpecialCharacters) {
            writer.writeBool(3, instance.deleteTrailingSpecialCharacters);
        }
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
    toObject() {
        return {
            deleteRepeatedWhitespaces: this.deleteRepeatedWhitespaces,
            deleteLeadingSpecialCharacters: this.deleteLeadingSpecialCharacters,
            deleteTrailingSpecialCharacters: this.deleteTrailingSpecialCharacters
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class StringUpdate {
    /**
     * Creates an object and applies default Protobuf values
     * @param StringUpdate value
     */
    constructor(value) {
        value = value || {};
        this.new = value.new;
        this.old = value.old;
        StringUpdate.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        StringUpdate.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new StringUpdate();
        StringUpdate.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.new = instance.new || '';
        instance.old = instance.old || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.new = reader.readString();
                    break;
                case 2:
                    instance.old = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        StringUpdate.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.new) {
            writer.writeString(1, instance.new);
        }
        if (instance.old) {
            writer.writeString(2, instance.old);
        }
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
    toObject() {
        return {
            new: this.new,
            old: this.old
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class IntentUpdate {
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentUpdate value
     */
    constructor(value) {
        value = value || {};
        this.intentDisplayName = value.intentDisplayName;
        this.trainingPhraseUpdateList = (value.trainingPhraseUpdateList || []).map(m => new IntentUpdate.TrainingPhraseUpdate(m));
        this.deletedParameters = (value.deletedParameters || []).slice();
        IntentUpdate.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        IntentUpdate.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new IntentUpdate();
        IntentUpdate.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intentDisplayName = instance.intentDisplayName || '';
        instance.trainingPhraseUpdateList = instance.trainingPhraseUpdateList || [];
        instance.deletedParameters = instance.deletedParameters || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.intentDisplayName = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new IntentUpdate.TrainingPhraseUpdate();
                    reader.readMessage(messageInitializer2, IntentUpdate.TrainingPhraseUpdate.fromBinaryReader);
                    (instance.trainingPhraseUpdateList =
                        instance.trainingPhraseUpdateList || []).push(messageInitializer2);
                    break;
                case 3:
                    (instance.deletedParameters = instance.deletedParameters || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        IntentUpdate.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intentDisplayName) {
            writer.writeString(1, instance.intentDisplayName);
        }
        if (instance.trainingPhraseUpdateList &&
            instance.trainingPhraseUpdateList.length) {
            writer.writeRepeatedMessage(2, instance.trainingPhraseUpdateList, IntentUpdate.TrainingPhraseUpdate.toBinaryWriter);
        }
        if (instance.deletedParameters && instance.deletedParameters.length) {
            writer.writeRepeatedString(3, instance.deletedParameters);
        }
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
    toObject() {
        return {
            intentDisplayName: this.intentDisplayName,
            trainingPhraseUpdateList: (this.trainingPhraseUpdateList || []).map(m => m.toObject()),
            deletedParameters: (this.deletedParameters || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (IntentUpdate) {
    class TrainingPhraseUpdate {
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhraseUpdate value
         */
        constructor(value) {
            value = value || {};
            this.trainingPhraseUpdate = value.trainingPhraseUpdate
                ? new StringUpdate(value.trainingPhraseUpdate)
                : undefined;
            this.entityUpdates = (value.entityUpdates || []).map(m => new StringUpdate(m));
            this.entitiesReannotated = (value.entitiesReannotated || []).slice();
            this.containsUpdateVariable = value.containsUpdateVariable;
            TrainingPhraseUpdate.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            TrainingPhraseUpdate.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new TrainingPhraseUpdate();
            TrainingPhraseUpdate.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.trainingPhraseUpdate =
                instance.trainingPhraseUpdate || undefined;
            instance.entityUpdates = instance.entityUpdates || [];
            instance.entitiesReannotated = instance.entitiesReannotated || [];
            instance.containsUpdateVariable =
                instance.containsUpdateVariable || false;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.trainingPhraseUpdate = new StringUpdate();
                        reader.readMessage(instance.trainingPhraseUpdate, StringUpdate.fromBinaryReader);
                        break;
                    case 2:
                        const messageInitializer2 = new StringUpdate();
                        reader.readMessage(messageInitializer2, StringUpdate.fromBinaryReader);
                        (instance.entityUpdates = instance.entityUpdates || []).push(messageInitializer2);
                        break;
                    case 3:
                        (instance.entitiesReannotated =
                            instance.entitiesReannotated || []).push(reader.readString());
                        break;
                    case 4:
                        instance.containsUpdateVariable = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            TrainingPhraseUpdate.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.trainingPhraseUpdate) {
                writer.writeMessage(1, instance.trainingPhraseUpdate, StringUpdate.toBinaryWriter);
            }
            if (instance.entityUpdates && instance.entityUpdates.length) {
                writer.writeRepeatedMessage(2, instance.entityUpdates, StringUpdate.toBinaryWriter);
            }
            if (instance.entitiesReannotated && instance.entitiesReannotated.length) {
                writer.writeRepeatedString(3, instance.entitiesReannotated);
            }
            if (instance.containsUpdateVariable) {
                writer.writeBool(4, instance.containsUpdateVariable);
            }
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
        toJSON() {
            return this.toObject();
        }
    }
    IntentUpdate.TrainingPhraseUpdate = TrainingPhraseUpdate;
})(IntentUpdate || (IntentUpdate = {}));
export class EntityTypeUpdate {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeUpdate value
     */
    constructor(value) {
        value = value || {};
        this.entityTypeName = value.entityTypeName;
        this.valuesUpdateList = (value.valuesUpdateList || []).map(m => new EntityTypeUpdate.EntityUpdate(m));
        EntityTypeUpdate.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityTypeUpdate.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityTypeUpdate();
        EntityTypeUpdate.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypeName = instance.entityTypeName || '';
        instance.valuesUpdateList = instance.valuesUpdateList || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityTypeName = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityTypeUpdate.EntityUpdate();
                    reader.readMessage(messageInitializer2, EntityTypeUpdate.EntityUpdate.fromBinaryReader);
                    (instance.valuesUpdateList = instance.valuesUpdateList || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityTypeUpdate.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypeName) {
            writer.writeString(1, instance.entityTypeName);
        }
        if (instance.valuesUpdateList && instance.valuesUpdateList.length) {
            writer.writeRepeatedMessage(2, instance.valuesUpdateList, EntityTypeUpdate.EntityUpdate.toBinaryWriter);
        }
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
    toObject() {
        return {
            entityTypeName: this.entityTypeName,
            valuesUpdateList: (this.valuesUpdateList || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EntityTypeUpdate) {
    class EntityUpdate {
        /**
         * Creates an object and applies default Protobuf values
         * @param EntityUpdate value
         */
        constructor(value) {
            value = value || {};
            this.entityValueUpdate = value.entityValueUpdate
                ? new StringUpdate(value.entityValueUpdate)
                : undefined;
            this.entitySynonymUpdates = (value.entitySynonymUpdates || []).map(m => new StringUpdate(m));
            EntityUpdate.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            EntityUpdate.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new EntityUpdate();
            EntityUpdate.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.entityValueUpdate = instance.entityValueUpdate || undefined;
            instance.entitySynonymUpdates = instance.entitySynonymUpdates || [];
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.entityValueUpdate = new StringUpdate();
                        reader.readMessage(instance.entityValueUpdate, StringUpdate.fromBinaryReader);
                        break;
                    case 2:
                        const messageInitializer2 = new StringUpdate();
                        reader.readMessage(messageInitializer2, StringUpdate.fromBinaryReader);
                        (instance.entitySynonymUpdates =
                            instance.entitySynonymUpdates || []).push(messageInitializer2);
                        break;
                    default:
                        reader.skipField();
                }
            }
            EntityUpdate.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.entityValueUpdate) {
                writer.writeMessage(1, instance.entityValueUpdate, StringUpdate.toBinaryWriter);
            }
            if (instance.entitySynonymUpdates &&
                instance.entitySynonymUpdates.length) {
                writer.writeRepeatedMessage(2, instance.entitySynonymUpdates, StringUpdate.toBinaryWriter);
            }
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
        toObject() {
            return {
                entityValueUpdate: this.entityValueUpdate
                    ? this.entityValueUpdate.toObject()
                    : undefined,
                entitySynonymUpdates: (this.entitySynonymUpdates || []).map(m => m.toObject())
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    EntityTypeUpdate.EntityUpdate = EntityUpdate;
})(EntityTypeUpdate || (EntityTypeUpdate = {}));
export class CleanAllEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllEntityTypesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.specialCharacters = value.specialCharacters;
        this.substringWhiteList = (value.substringWhiteList || []).slice();
        this.maxEntityCountUpdate = value.maxEntityCountUpdate;
        this.forbiddenEntityTypePatterns = (value.forbiddenEntityTypePatterns || []).slice();
        this.dryRun = value.dryRun;
        this.numberOfWorkers = value.numberOfWorkers;
        CleanAllEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanAllEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanAllEntityTypesRequest();
        CleanAllEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.specialCharacters = instance.specialCharacters || '';
        instance.substringWhiteList = instance.substringWhiteList || [];
        instance.maxEntityCountUpdate = instance.maxEntityCountUpdate || 0;
        instance.forbiddenEntityTypePatterns =
            instance.forbiddenEntityTypePatterns || [];
        instance.dryRun = instance.dryRun || false;
        instance.numberOfWorkers = instance.numberOfWorkers || 0;
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
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.specialCharacters = reader.readString();
                    break;
                case 4:
                    (instance.substringWhiteList =
                        instance.substringWhiteList || []).push(reader.readString());
                    break;
                case 5:
                    instance.maxEntityCountUpdate = reader.readInt32();
                    break;
                case 6:
                    (instance.forbiddenEntityTypePatterns =
                        instance.forbiddenEntityTypePatterns || []).push(reader.readString());
                    break;
                case 7:
                    instance.dryRun = reader.readBool();
                    break;
                case 8:
                    instance.numberOfWorkers = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanAllEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.specialCharacters) {
            writer.writeString(3, instance.specialCharacters);
        }
        if (instance.substringWhiteList && instance.substringWhiteList.length) {
            writer.writeRepeatedString(4, instance.substringWhiteList);
        }
        if (instance.maxEntityCountUpdate) {
            writer.writeInt32(5, instance.maxEntityCountUpdate);
        }
        if (instance.forbiddenEntityTypePatterns &&
            instance.forbiddenEntityTypePatterns.length) {
            writer.writeRepeatedString(6, instance.forbiddenEntityTypePatterns);
        }
        if (instance.dryRun) {
            writer.writeBool(7, instance.dryRun);
        }
        if (instance.numberOfWorkers) {
            writer.writeInt32(8, instance.numberOfWorkers);
        }
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
    toJSON() {
        return this.toObject();
    }
}
export class CleanAllEntityTypesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllEntityTypesResponse value
     */
    constructor(value) {
        value = value || {};
        this.cleanedEntityTypes = (value.cleanedEntityTypes || []).map(m => new ondewoNlu001.EntityType(m));
        this.deletedEntityTypes = (value.deletedEntityTypes || []).map(m => new ondewoNlu001.EntityType(m));
        this.entityTypeUpdates = (value.entityTypeUpdates || []).map(m => new EntityTypeUpdate(m));
        this.entityTypeDeletions = (value.entityTypeDeletions || []).map(m => new EntityTypeUpdate(m));
        CleanAllEntityTypesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanAllEntityTypesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanAllEntityTypesResponse();
        CleanAllEntityTypesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.cleanedEntityTypes = instance.cleanedEntityTypes || [];
        instance.deletedEntityTypes = instance.deletedEntityTypes || [];
        instance.entityTypeUpdates = instance.entityTypeUpdates || [];
        instance.entityTypeDeletions = instance.entityTypeDeletions || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ondewoNlu001.EntityType();
                    reader.readMessage(messageInitializer1, ondewoNlu001.EntityType.fromBinaryReader);
                    (instance.cleanedEntityTypes =
                        instance.cleanedEntityTypes || []).push(messageInitializer1);
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu001.EntityType();
                    reader.readMessage(messageInitializer2, ondewoNlu001.EntityType.fromBinaryReader);
                    (instance.deletedEntityTypes =
                        instance.deletedEntityTypes || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new EntityTypeUpdate();
                    reader.readMessage(messageInitializer3, EntityTypeUpdate.fromBinaryReader);
                    (instance.entityTypeUpdates = instance.entityTypeUpdates || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new EntityTypeUpdate();
                    reader.readMessage(messageInitializer4, EntityTypeUpdate.fromBinaryReader);
                    (instance.entityTypeDeletions =
                        instance.entityTypeDeletions || []).push(messageInitializer4);
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanAllEntityTypesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.cleanedEntityTypes && instance.cleanedEntityTypes.length) {
            writer.writeRepeatedMessage(1, instance.cleanedEntityTypes, ondewoNlu001.EntityType.toBinaryWriter);
        }
        if (instance.deletedEntityTypes && instance.deletedEntityTypes.length) {
            writer.writeRepeatedMessage(2, instance.deletedEntityTypes, ondewoNlu001.EntityType.toBinaryWriter);
        }
        if (instance.entityTypeUpdates && instance.entityTypeUpdates.length) {
            writer.writeRepeatedMessage(3, instance.entityTypeUpdates, EntityTypeUpdate.toBinaryWriter);
        }
        if (instance.entityTypeDeletions && instance.entityTypeDeletions.length) {
            writer.writeRepeatedMessage(4, instance.entityTypeDeletions, EntityTypeUpdate.toBinaryWriter);
        }
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
    toObject() {
        return {
            cleanedEntityTypes: (this.cleanedEntityTypes || []).map(m => m.toObject()),
            deletedEntityTypes: (this.deletedEntityTypes || []).map(m => m.toObject()),
            entityTypeUpdates: (this.entityTypeUpdates || []).map(m => m.toObject()),
            entityTypeDeletions: (this.entityTypeDeletions || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CleanEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityTypeName = value.entityTypeName;
        this.languageCode = value.languageCode;
        this.specialCharacters = value.specialCharacters;
        this.substringWhiteList = (value.substringWhiteList || []).slice();
        this.maxEntityCountUpdate = value.maxEntityCountUpdate;
        this.dryRun = value.dryRun;
        CleanEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanEntityTypeRequest();
        CleanEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityTypeName = instance.entityTypeName || '';
        instance.languageCode = instance.languageCode || '';
        instance.specialCharacters = instance.specialCharacters || '';
        instance.substringWhiteList = instance.substringWhiteList || [];
        instance.maxEntityCountUpdate = instance.maxEntityCountUpdate || 0;
        instance.dryRun = instance.dryRun || false;
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
                    instance.entityTypeName = reader.readString();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.specialCharacters = reader.readString();
                    break;
                case 5:
                    (instance.substringWhiteList =
                        instance.substringWhiteList || []).push(reader.readString());
                    break;
                case 6:
                    instance.maxEntityCountUpdate = reader.readInt32();
                    break;
                case 7:
                    instance.dryRun = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityTypeName) {
            writer.writeString(2, instance.entityTypeName);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.specialCharacters) {
            writer.writeString(4, instance.specialCharacters);
        }
        if (instance.substringWhiteList && instance.substringWhiteList.length) {
            writer.writeRepeatedString(5, instance.substringWhiteList);
        }
        if (instance.maxEntityCountUpdate) {
            writer.writeInt32(6, instance.maxEntityCountUpdate);
        }
        if (instance.dryRun) {
            writer.writeBool(7, instance.dryRun);
        }
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
    toJSON() {
        return this.toObject();
    }
}
export class CleanEntityTypeResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanEntityTypeResponse value
     */
    constructor(value) {
        value = value || {};
        this.cleanedEntityType = value.cleanedEntityType
            ? new ondewoNlu001.EntityType(value.cleanedEntityType)
            : undefined;
        this.entityTypeUpdate = value.entityTypeUpdate
            ? new EntityTypeUpdate(value.entityTypeUpdate)
            : undefined;
        CleanEntityTypeResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CleanEntityTypeResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CleanEntityTypeResponse();
        CleanEntityTypeResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.cleanedEntityType = instance.cleanedEntityType || undefined;
        instance.entityTypeUpdate = instance.entityTypeUpdate || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.cleanedEntityType = new ondewoNlu001.EntityType();
                    reader.readMessage(instance.cleanedEntityType, ondewoNlu001.EntityType.fromBinaryReader);
                    break;
                case 2:
                    instance.entityTypeUpdate = new EntityTypeUpdate();
                    reader.readMessage(instance.entityTypeUpdate, EntityTypeUpdate.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CleanEntityTypeResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.cleanedEntityType) {
            writer.writeMessage(1, instance.cleanedEntityType, ondewoNlu001.EntityType.toBinaryWriter);
        }
        if (instance.entityTypeUpdate) {
            writer.writeMessage(2, instance.entityTypeUpdate, EntityTypeUpdate.toBinaryWriter);
        }
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
    toJSON() {
        return this.toObject();
    }
}
export class AddTrainingPhrasesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.trainingPhraseList = (value.trainingPhraseList || []).map(m => new AddTrainingPhrasesRequest.TrainingPhraseForIntent(m));
        this.extractEntities = value.extractEntities;
        this.specialCharacters = value.specialCharacters;
        this.trainingPhraseCleanerOptions = value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(value.trainingPhraseCleanerOptions)
            : undefined;
        this.numberOfWorkers = value.numberOfWorkers;
        AddTrainingPhrasesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddTrainingPhrasesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddTrainingPhrasesRequest();
        AddTrainingPhrasesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.trainingPhraseList = instance.trainingPhraseList || [];
        instance.extractEntities = instance.extractEntities || false;
        instance.specialCharacters = instance.specialCharacters || '';
        instance.trainingPhraseCleanerOptions =
            instance.trainingPhraseCleanerOptions || undefined;
        instance.numberOfWorkers = instance.numberOfWorkers || 0;
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
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    const messageInitializer3 = new AddTrainingPhrasesRequest.TrainingPhraseForIntent();
                    reader.readMessage(messageInitializer3, AddTrainingPhrasesRequest.TrainingPhraseForIntent.fromBinaryReader);
                    (instance.trainingPhraseList =
                        instance.trainingPhraseList || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.extractEntities = reader.readBool();
                    break;
                case 5:
                    instance.specialCharacters = reader.readString();
                    break;
                case 6:
                    instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    reader.readMessage(instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.fromBinaryReader);
                    break;
                case 7:
                    instance.numberOfWorkers = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddTrainingPhrasesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.trainingPhraseList && instance.trainingPhraseList.length) {
            writer.writeRepeatedMessage(3, instance.trainingPhraseList, AddTrainingPhrasesRequest.TrainingPhraseForIntent.toBinaryWriter);
        }
        if (instance.extractEntities) {
            writer.writeBool(4, instance.extractEntities);
        }
        if (instance.specialCharacters) {
            writer.writeString(5, instance.specialCharacters);
        }
        if (instance.trainingPhraseCleanerOptions) {
            writer.writeMessage(6, instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.toBinaryWriter);
        }
        if (instance.numberOfWorkers) {
            writer.writeInt32(7, instance.numberOfWorkers);
        }
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
    toJSON() {
        return this.toObject();
    }
}
(function (AddTrainingPhrasesRequest) {
    class TrainingPhraseForIntent {
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhraseForIntent value
         */
        constructor(value) {
            value = value || {};
            this.trainingPhrase = value.trainingPhrase;
            this.intentDisplayName = value.intentDisplayName;
            this.entities = (value.entities || []).map(m => new ondewoNlu000.Intent.TrainingPhrase.Entity(m));
            TrainingPhraseForIntent.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            TrainingPhraseForIntent.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new TrainingPhraseForIntent();
            TrainingPhraseForIntent.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.trainingPhrase = instance.trainingPhrase || '';
            instance.intentDisplayName = instance.intentDisplayName || '';
            instance.entities = instance.entities || [];
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.trainingPhrase = reader.readString();
                        break;
                    case 2:
                        instance.intentDisplayName = reader.readString();
                        break;
                    case 3:
                        const messageInitializer3 = new ondewoNlu000.Intent.TrainingPhrase.Entity();
                        reader.readMessage(messageInitializer3, ondewoNlu000.Intent.TrainingPhrase.Entity.fromBinaryReader);
                        (instance.entities = instance.entities || []).push(messageInitializer3);
                        break;
                    default:
                        reader.skipField();
                }
            }
            TrainingPhraseForIntent.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.trainingPhrase) {
                writer.writeString(1, instance.trainingPhrase);
            }
            if (instance.intentDisplayName) {
                writer.writeString(2, instance.intentDisplayName);
            }
            if (instance.entities && instance.entities.length) {
                writer.writeRepeatedMessage(3, instance.entities, ondewoNlu000.Intent.TrainingPhrase.Entity.toBinaryWriter);
            }
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
        toObject() {
            return {
                trainingPhrase: this.trainingPhrase,
                intentDisplayName: this.intentDisplayName,
                entities: (this.entities || []).map(m => m.toObject())
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    AddTrainingPhrasesRequest.TrainingPhraseForIntent = TrainingPhraseForIntent;
})(AddTrainingPhrasesRequest || (AddTrainingPhrasesRequest = {}));
export class AddTrainingPhrasesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesResponse value
     */
    constructor(value) {
        value = value || {};
        this.errorMessages = (value.errorMessages || []).slice();
        AddTrainingPhrasesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddTrainingPhrasesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddTrainingPhrasesResponse();
        AddTrainingPhrasesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.errorMessages = instance.errorMessages || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.errorMessages = instance.errorMessages || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        AddTrainingPhrasesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.errorMessages && instance.errorMessages.length) {
            writer.writeRepeatedString(1, instance.errorMessages);
        }
    }
    get errorMessages() {
        return this._errorMessages;
    }
    set errorMessages(value) {
        this._errorMessages = value;
    }
    toObject() {
        return {
            errorMessages: (this.errorMessages || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AddTrainingPhrasesFromCSVRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesFromCSVRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.csvContents = value.csvContents;
        this.extractEntities = value.extractEntities;
        this.specialCharacters = value.specialCharacters;
        this.trainingPhraseCleanerOptions = value.trainingPhraseCleanerOptions
            ? new TrainingPhraseCleanerOptions(value.trainingPhraseCleanerOptions)
            : undefined;
        this.numberOfWorkers = value.numberOfWorkers;
        AddTrainingPhrasesFromCSVRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddTrainingPhrasesFromCSVRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddTrainingPhrasesFromCSVRequest();
        AddTrainingPhrasesFromCSVRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.csvContents = instance.csvContents || new Uint8Array();
        instance.extractEntities = instance.extractEntities || false;
        instance.specialCharacters = instance.specialCharacters || '';
        instance.trainingPhraseCleanerOptions =
            instance.trainingPhraseCleanerOptions || undefined;
        instance.numberOfWorkers = instance.numberOfWorkers || 0;
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
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.csvContents = reader.readBytes();
                    break;
                case 4:
                    instance.extractEntities = reader.readBool();
                    break;
                case 5:
                    instance.specialCharacters = reader.readString();
                    break;
                case 6:
                    instance.trainingPhraseCleanerOptions = new TrainingPhraseCleanerOptions();
                    reader.readMessage(instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.fromBinaryReader);
                    break;
                case 7:
                    instance.numberOfWorkers = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddTrainingPhrasesFromCSVRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.csvContents && instance.csvContents.length) {
            writer.writeBytes(3, instance.csvContents);
        }
        if (instance.extractEntities) {
            writer.writeBool(4, instance.extractEntities);
        }
        if (instance.specialCharacters) {
            writer.writeString(5, instance.specialCharacters);
        }
        if (instance.trainingPhraseCleanerOptions) {
            writer.writeMessage(6, instance.trainingPhraseCleanerOptions, TrainingPhraseCleanerOptions.toBinaryWriter);
        }
        if (instance.numberOfWorkers) {
            writer.writeInt32(7, instance.numberOfWorkers);
        }
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
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3V0aWxpdHkucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sS0FBSyxZQUFZLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsTUFBTSxDQUFOLElBQVkseUJBTVg7QUFORCxXQUFZLHlCQUF5QjtJQUNuQywrRkFBbUIsQ0FBQTtJQUNuQixpR0FBb0IsQ0FBQTtJQUNwQixtR0FBcUIsQ0FBQTtJQUNyQiwrR0FBMkIsQ0FBQTtJQUMzQixpSUFBb0MsQ0FBQTtBQUN0QyxDQUFDLEVBTlcseUJBQXlCLEtBQXpCLHlCQUF5QixRQU1wQztBQUNELE1BQU0sT0FBTyxvQkFBb0I7SUE0Qy9COzs7T0FHRztJQUNILFlBQVksS0FBOEM7UUFDeEQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBbkRELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBOEI7UUFDNUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FB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LENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7WUFDcEIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLDRCQUE0QjtnQkFDN0QsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlDLENBQUMsQ0FBQyxTQUFTO1lBQ2IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYic7XG5leHBvcnQgZW51bSBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHtcbiAgcmVhbm5vdGF0ZU5ldmVyID0gMCxcbiAgcmVhbm5vdGF0ZUFsd2F5cyA9IDEsXG4gIHJlYW5ub3RhdGVJZkVtcHR5ID0gMixcbiAgcmVhbm5vdGF0ZUFmdGVyRGVsZXRpb24gPSAzLFxuICByZWFubm90YXRlSWZFbXB0eU9yQWZ0ZXJEZWxldGlvbiA9IDRcbn1cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBWYWxpZGF0ZVJlZ2V4UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnJlZ2V4ID0gaW5zdGFuY2UucmVnZXggfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5yZWdleCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRlUmVnZXhSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFZhbGlkYXRlUmVnZXhSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5yZWdleCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnJlZ2V4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWdleD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFZhbGlkYXRlUmVnZXhSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVSZWdleFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJlZ2V4ID0gdmFsdWUucmVnZXg7XG4gICAgVmFsaWRhdGVSZWdleFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCByZWdleCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZWdleDtcbiAgfVxuICBzZXQgcmVnZXgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlZ2V4ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBWYWxpZGF0ZVJlZ2V4UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlUmVnZXhSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVmFsaWRhdGVSZWdleFJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZhbGlkYXRlUmVnZXhSZXNwb25zZSgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IGluc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogVmFsaWRhdGVSZWdleFJlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKGluc3RhbmNlLmVycm9yTWVzc2FnZXMgPSBpbnN0YW5jZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBWYWxpZGF0ZVJlZ2V4UmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmVycm9yTWVzc2FnZXMgJiYgaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIGluc3RhbmNlLmVycm9yTWVzc2FnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFZhbGlkYXRlUmVnZXhSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZhbGlkYXRlUmVnZXhSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9ICh2YWx1ZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIFZhbGlkYXRlUmVnZXhSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2VzO1xuICB9XG4gIHNldCBlcnJvck1lc3NhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVSZWdleFJlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCgpO1xuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlID0gaW5zdGFuY2UuZW50aXR5VHlwZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGUgPSBuZXcgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuRW50aXR5KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlLkVudGl0eS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5lbnRpdHlUeXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuRW50aXR5LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eVR5cGU/OiBvbmRld29ObHUwMDEuRW50aXR5VHlwZS5FbnRpdHk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZW50aXR5VHlwZSA9IHZhbHVlLmVudGl0eVR5cGVcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlLkVudGl0eSh2YWx1ZS5lbnRpdHlUeXBlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGUoKTogb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuRW50aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZSh2YWx1ZTogb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuRW50aXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlUeXBlOiB0aGlzLmVudGl0eVR5cGUgPyB0aGlzLmVudGl0eVR5cGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlKCk7XG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IGluc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAoaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyA9IGluc3RhbmNlLmVycm9yTWVzc2FnZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmVycm9yTWVzc2FnZXMgJiYgaW5zdGFuY2UuZXJyb3JNZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDEsIGluc3RhbmNlLmVycm9yTWVzc2FnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSAodmFsdWUuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBWYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2VzO1xuICB9XG4gIHNldCBlcnJvck1lc3NhZ2VzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JNZXNzYWdlczogKHRoaXMuZXJyb3JNZXNzYWdlcyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEludGVudHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkFsbEludGVudHNSZXF1ZXN0KCk7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyB8fCAnJztcbiAgICBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPSBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgaW5zdGFuY2UuZHJ5UnVuID0gaW5zdGFuY2UuZHJ5UnVuIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9XG4gICAgICBpbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHx8IDA7XG4gICAgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9XG4gICAgICAgICAgICBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5kcnlSdW4gPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkFsbEludGVudHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IENsZWFuQWxsSW50ZW50c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRyeVJ1bikge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg1LCBpbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDcsIGluc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig4LCBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RyeVJ1bj86IGJvb2xlYW47XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICBwcml2YXRlIF9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zPzogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZXb3JrZXJzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuQWxsSW50ZW50c1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgPSAodmFsdWUuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuZHJ5UnVuID0gdmFsdWUuZHJ5UnVuO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IHZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgID8gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnModmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IHZhbHVlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSB2YWx1ZS5udW1iZXJPZldvcmtlcnM7XG4gICAgQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxDaGFyYWN0ZXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBzcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3Vic3RyaW5nV2hpdGVMaXN0KCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0O1xuICB9XG4gIHNldCBzdWJzdHJpbmdXaGl0ZUxpc3QodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3Vic3RyaW5nV2hpdGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRyeVJ1bigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZHJ5UnVuO1xuICB9XG4gIHNldCBkcnlSdW4odmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kcnlSdW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhcbiAgICB2YWx1ZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMoKTogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM7XG4gIH1cbiAgc2V0IHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnModmFsdWU6IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG51bWJlck9mV29ya2VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZldvcmtlcnM7XG4gIH1cbiAgc2V0IG51bWJlck9mV29ya2Vycyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZXb3JrZXJzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuc3BlY2lhbENoYXJhY3RlcnMsXG4gICAgICBzdWJzdHJpbmdXaGl0ZUxpc3Q6ICh0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGRyeVJ1bjogdGhpcy5kcnlSdW4sXG4gICAgICB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zOiB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnM6IHRoaXMucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyxcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsSW50ZW50c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBDbGVhbkFsbEludGVudHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkFsbEludGVudHNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGVhbkFsbEludGVudHNSZXNwb25zZSgpO1xuICAgIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmNsZWFuZWRJbnRlbnRzID0gaW5zdGFuY2UuY2xlYW5lZEludGVudHMgfHwgW107XG4gICAgaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCA9IGluc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IG9uZGV3b05sdTAwMC5JbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgb25kZXdvTmx1MDAwLkludGVudC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuY2xlYW5lZEludGVudHMgPSBpbnN0YW5jZS5jbGVhbmVkSW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBJbnRlbnRVcGRhdGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgSW50ZW50VXBkYXRlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5pbnRlbnRVcGRhdGVMaXN0ID0gaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDbGVhbkFsbEludGVudHNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBDbGVhbkFsbEludGVudHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuY2xlYW5lZEludGVudHMgJiYgaW5zdGFuY2UuY2xlYW5lZEludGVudHMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmNsZWFuZWRJbnRlbnRzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDAwLkludGVudC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudFVwZGF0ZUxpc3QgJiYgaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuaW50ZW50VXBkYXRlTGlzdCBhcyBhbnksXG4gICAgICAgIEludGVudFVwZGF0ZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbmVkSW50ZW50cz86IG9uZGV3b05sdTAwMC5JbnRlbnRbXTtcbiAgcHJpdmF0ZSBfaW50ZW50VXBkYXRlTGlzdD86IEludGVudFVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkFsbEludGVudHNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEludGVudHMgPSAodmFsdWUuY2xlYW5lZEludGVudHMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwMC5JbnRlbnQobSlcbiAgICApO1xuICAgIHRoaXMuaW50ZW50VXBkYXRlTGlzdCA9ICh2YWx1ZS5pbnRlbnRVcGRhdGVMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnRVcGRhdGUobSlcbiAgICApO1xuICAgIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEludGVudHMoKTogb25kZXdvTmx1MDAwLkludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lZEludGVudHM7XG4gIH1cbiAgc2V0IGNsZWFuZWRJbnRlbnRzKHZhbHVlOiBvbmRld29ObHUwMDAuSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVkSW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRVcGRhdGVMaXN0KCk6IEludGVudFVwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50VXBkYXRlTGlzdDtcbiAgfVxuICBzZXQgaW50ZW50VXBkYXRlTGlzdCh2YWx1ZTogSW50ZW50VXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRVcGRhdGVMaXN0ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnRzOiAodGhpcy5jbGVhbmVkSW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGludGVudFVwZGF0ZUxpc3Q6ICh0aGlzLmludGVudFVwZGF0ZUxpc3QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsSW50ZW50c1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgQ2xlYW5JbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENsZWFuSW50ZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkludGVudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5JbnRlbnRSZXF1ZXN0KCk7XG4gICAgQ2xlYW5JbnRlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDbGVhbkludGVudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuaW50ZW50TmFtZSA9IGluc3RhbmNlLmludGVudE5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID0gaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdO1xuICAgIGluc3RhbmNlLmRyeVJ1biA9IGluc3RhbmNlLmRyeVJ1biB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID1cbiAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPVxuICAgICAgaW5zdGFuY2UucmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IENsZWFuSW50ZW50UmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5pbnRlbnROYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID1cbiAgICAgICAgICAgIGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmRyeVJ1biA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICAgICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBDbGVhbkludGVudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnROYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuaW50ZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNSwgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRyeVJ1bikge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg2LCBpbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyBhcyBhbnksXG4gICAgICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDgsIGluc3RhbmNlLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50TmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gIHByaXZhdGUgX2RyeVJ1bj86IGJvb2xlYW47XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM/OiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICBwcml2YXRlIF9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zPzogUmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIENsZWFuSW50ZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuSW50ZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuaW50ZW50TmFtZSA9IHZhbHVlLmludGVudE5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0ID0gKHZhbHVlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmRyeVJ1biA9IHZhbHVlLmRyeVJ1bjtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICA/IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKHZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgPSB2YWx1ZS5yZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuICAgIENsZWFuSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50TmFtZTtcbiAgfVxuICBzZXQgaW50ZW50TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzcGVjaWFsQ2hhcmFjdGVycygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycztcbiAgfVxuICBzZXQgc3BlY2lhbENoYXJhY3RlcnModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN1YnN0cmluZ1doaXRlTGlzdCgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YnN0cmluZ1doaXRlTGlzdDtcbiAgfVxuICBzZXQgc3Vic3RyaW5nV2hpdGVMaXN0KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N1YnN0cmluZ1doaXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkcnlSdW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyeVJ1bjtcbiAgfVxuICBzZXQgZHJ5UnVuKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZHJ5UnVuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoKTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMoXG4gICAgdmFsdWU6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCByZWFubm90YXRlRW50aXRpZXNPcHRpb25zKCk6IFJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZWFubm90YXRlRW50aXRpZXNPcHRpb25zO1xuICB9XG4gIHNldCByZWFubm90YXRlRW50aXRpZXNPcHRpb25zKHZhbHVlOiBSZWFubm90YXRlRW50aXRpZXNPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVhbm5vdGF0ZUVudGl0aWVzT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaW50ZW50TmFtZTogdGhpcy5pbnRlbnROYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgc3Vic3RyaW5nV2hpdGVMaXN0OiAodGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCksXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICByZWFubm90YXRlRW50aXRpZXNPcHRpb25zOiB0aGlzLnJlYW5ub3RhdGVFbnRpdGllc09wdGlvbnNcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuSW50ZW50UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIENsZWFuSW50ZW50UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkludGVudFJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENsZWFuSW50ZW50UmVzcG9uc2UoKTtcbiAgICBDbGVhbkludGVudFJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDbGVhbkludGVudFJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuY2xlYW5lZEludGVudCA9IGluc3RhbmNlLmNsZWFuZWRJbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmludGVudFVwZGF0ZSA9IGluc3RhbmNlLmludGVudFVwZGF0ZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQ2xlYW5JbnRlbnRSZXNwb25zZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmNsZWFuZWRJbnRlbnQgPSBuZXcgb25kZXdvTmx1MDAwLkludGVudCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmNsZWFuZWRJbnRlbnQsXG4gICAgICAgICAgICBvbmRld29ObHUwMDAuSW50ZW50LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50VXBkYXRlID0gbmV3IEludGVudFVwZGF0ZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmludGVudFVwZGF0ZSxcbiAgICAgICAgICAgIEludGVudFVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5JbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBDbGVhbkludGVudFJlc3BvbnNlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5jbGVhbmVkSW50ZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5jbGVhbmVkSW50ZW50IGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDAwLkludGVudC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudFVwZGF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuaW50ZW50VXBkYXRlIGFzIGFueSxcbiAgICAgICAgSW50ZW50VXBkYXRlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFuZWRJbnRlbnQ/OiBvbmRld29ObHUwMDAuSW50ZW50O1xuICBwcml2YXRlIF9pbnRlbnRVcGRhdGU/OiBJbnRlbnRVcGRhdGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDbGVhbkludGVudFJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5JbnRlbnRSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY2xlYW5lZEludGVudCA9IHZhbHVlLmNsZWFuZWRJbnRlbnRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwMC5JbnRlbnQodmFsdWUuY2xlYW5lZEludGVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50VXBkYXRlID0gdmFsdWUuaW50ZW50VXBkYXRlXG4gICAgICA/IG5ldyBJbnRlbnRVcGRhdGUodmFsdWUuaW50ZW50VXBkYXRlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQ2xlYW5JbnRlbnRSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNsZWFuZWRJbnRlbnQoKTogb25kZXdvTmx1MDAwLkludGVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFuZWRJbnRlbnQ7XG4gIH1cbiAgc2V0IGNsZWFuZWRJbnRlbnQodmFsdWU6IG9uZGV3b05sdTAwMC5JbnRlbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVkSW50ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFVwZGF0ZSgpOiBJbnRlbnRVcGRhdGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRVcGRhdGU7XG4gIH1cbiAgc2V0IGludGVudFVwZGF0ZSh2YWx1ZTogSW50ZW50VXBkYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50VXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFuZWRJbnRlbnQ6IHRoaXMuY2xlYW5lZEludGVudFxuICAgICAgICA/IHRoaXMuY2xlYW5lZEludGVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZW50VXBkYXRlOiB0aGlzLmludGVudFVwZGF0ZSA/IHRoaXMuaW50ZW50VXBkYXRlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuSW50ZW50UmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk7XG4gICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucykge1xuICAgIGluc3RhbmNlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMgPVxuICAgICAgaW5zdGFuY2UuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPVxuICAgICAgaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnMgPVxuICAgICAgaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxLCBpbnN0YW5jZS5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgyLCBpbnN0YW5jZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzLCBpbnN0YW5jZS5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlcyA9IHZhbHVlLmRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXM7XG4gICAgdGhpcy5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZS5kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy5kZWxldGVUcmFpbGluZ1NwZWNpYWxDaGFyYWN0ZXJzID1cbiAgICAgIHZhbHVlLmRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM7XG4gICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXM7XG4gIH1cbiAgc2V0IGRlbGV0ZVJlcGVhdGVkV2hpdGVzcGFjZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBkZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWxldGVMZWFkaW5nU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycztcbiAgfVxuICBzZXQgZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlUmVwZWF0ZWRXaGl0ZXNwYWNlczogdGhpcy5kZWxldGVSZXBlYXRlZFdoaXRlc3BhY2VzLFxuICAgICAgZGVsZXRlTGVhZGluZ1NwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLmRlbGV0ZUxlYWRpbmdTcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIGRlbGV0ZVRyYWlsaW5nU3BlY2lhbENoYXJhY3RlcnM6IHRoaXMuZGVsZXRlVHJhaWxpbmdTcGVjaWFsQ2hhcmFjdGVyc1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB7fVxuZXhwb3J0IGNsYXNzIFN0cmluZ1VwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBTdHJpbmdVcGRhdGUpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU3RyaW5nVXBkYXRlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN0cmluZ1VwZGF0ZSgpO1xuICAgIFN0cmluZ1VwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU3RyaW5nVXBkYXRlKSB7XG4gICAgaW5zdGFuY2UubmV3ID0gaW5zdGFuY2UubmV3IHx8ICcnO1xuICAgIGluc3RhbmNlLm9sZCA9IGluc3RhbmNlLm9sZCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTdHJpbmdVcGRhdGUsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5uZXcgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uub2xkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU3RyaW5nVXBkYXRlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFN0cmluZ1VwZGF0ZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmV3KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9sZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm9sZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmV3Pzogc3RyaW5nO1xuICBwcml2YXRlIF9vbGQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTdHJpbmdVcGRhdGUgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdHJpbmdVcGRhdGU+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5ldyA9IHZhbHVlLm5ldztcbiAgICB0aGlzLm9sZCA9IHZhbHVlLm9sZDtcbiAgICBTdHJpbmdVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuZXcoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV3O1xuICB9XG4gIHNldCBuZXcodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25ldyA9IHZhbHVlO1xuICB9XG4gIGdldCBvbGQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2xkO1xuICB9XG4gIHNldCBvbGQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29sZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZXc6IHRoaXMubmV3LFxuICAgICAgb2xkOiB0aGlzLm9sZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3RyaW5nVXBkYXRlIHt9XG5leHBvcnQgY2xhc3MgSW50ZW50VXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEludGVudFVwZGF0ZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBJbnRlbnRVcGRhdGUudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW50ZW50VXBkYXRlKCk7XG4gICAgSW50ZW50VXBkYXRlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBJbnRlbnRVcGRhdGUpIHtcbiAgICBpbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSA9IGluc3RhbmNlLmludGVudERpc3BsYXlOYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IGluc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCB8fCBbXTtcbiAgICBpbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyA9IGluc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEludGVudFVwZGF0ZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmludGVudERpc3BsYXlOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0ID1cbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIChpbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyA9IGluc3RhbmNlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEludGVudFVwZGF0ZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBJbnRlbnRVcGRhdGUsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmludGVudERpc3BsYXlOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QgJiZcbiAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdC5sZW5ndGhcbiAgICApIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IGFzIGFueSxcbiAgICAgICAgSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMgJiYgaW5zdGFuY2UuZGVsZXRlZFBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBpbnN0YW5jZS5kZWxldGVkUGFyYW1ldGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50RGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlVXBkYXRlTGlzdD86IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVtdO1xuICBwcml2YXRlIF9kZWxldGVkUGFyYW1ldGVycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gSW50ZW50VXBkYXRlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SW50ZW50VXBkYXRlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnREaXNwbGF5TmFtZSA9IHZhbHVlLmludGVudERpc3BsYXlOYW1lO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0ID0gKHZhbHVlLnRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSW50ZW50VXBkYXRlLlRyYWluaW5nUGhyYXNlVXBkYXRlKG0pXG4gICAgKTtcbiAgICB0aGlzLmRlbGV0ZWRQYXJhbWV0ZXJzID0gKHZhbHVlLmRlbGV0ZWRQYXJhbWV0ZXJzIHx8IFtdKS5zbGljZSgpO1xuICAgIEludGVudFVwZGF0ZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudERpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudERpc3BsYXlOYW1lO1xuICB9XG4gIHNldCBpbnRlbnREaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50RGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0KCk6XG4gICAgfCBJbnRlbnRVcGRhdGUuVHJhaW5pbmdQaHJhc2VVcGRhdGVbXVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0O1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZVVwZGF0ZUxpc3QoXG4gICAgdmFsdWU6IEludGVudFVwZGF0ZS5UcmFpbmluZ1BocmFzZVVwZGF0ZVtdIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWxldGVkUGFyYW1ldGVycygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWRQYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBkZWxldGVkUGFyYW1ldGVycyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWxldGVkUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlTGlzdDogKHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGVMaXN0IHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBkZWxldGVkUGFyYW1ldGVyczogKHRoaXMuZGVsZXRlZFBhcmFtZXRlcnMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEludGVudFVwZGF0ZSB7XG4gIGV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZVVwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlVXBkYXRlKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluaW5nUGhyYXNlVXBkYXRlKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZVVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VVcGRhdGUpIHtcbiAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlVXBkYXRlID1cbiAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgfHwgdW5kZWZpbmVkO1xuICAgICAgaW5zdGFuY2UuZW50aXR5VXBkYXRlcyA9IGluc3RhbmNlLmVudGl0eVVwZGF0ZXMgfHwgW107XG4gICAgICBpbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkID0gaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXTtcbiAgICAgIGluc3RhbmNlLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUgPVxuICAgICAgICBpbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlVXBkYXRlLFxuICAgICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUsXG4gICAgICAgICAgICAgIFN0cmluZ1VwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgICAgU3RyaW5nVXBkYXRlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoaW5zdGFuY2UuZW50aXR5VXBkYXRlcyA9IGluc3RhbmNlLmVudGl0eVVwZGF0ZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAoaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCA9XG4gICAgICAgICAgICAgIGluc3RhbmNlLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFRyYWluaW5nUGhyYXNlVXBkYXRlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgICAgaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlVXBkYXRlLFxuICAgICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZVVwZGF0ZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEsXG4gICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VVcGRhdGUgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVudGl0eVVwZGF0ZXMgJiYgaW5zdGFuY2UuZW50aXR5VXBkYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgaW5zdGFuY2UuZW50aXR5VXBkYXRlcyBhcyBhbnksXG4gICAgICAgICAgU3RyaW5nVXBkYXRlLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZW50aXRpZXNSZWFubm90YXRlZCAmJiBpbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkLmxlbmd0aCkge1xuICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBpbnN0YW5jZS5lbnRpdGllc1JlYW5ub3RhdGVkKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJvb2woNCwgaW5zdGFuY2UuY29udGFpbnNVcGRhdGVWYXJpYWJsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VVcGRhdGU/OiBTdHJpbmdVcGRhdGU7XG4gICAgcHJpdmF0ZSBfZW50aXR5VXBkYXRlcz86IFN0cmluZ1VwZGF0ZVtdO1xuICAgIHByaXZhdGUgX2VudGl0aWVzUmVhbm5vdGF0ZWQ/OiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9jb250YWluc1VwZGF0ZVZhcmlhYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIFRyYWluaW5nUGhyYXNlVXBkYXRlIHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYWluaW5nUGhyYXNlVXBkYXRlPikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMudHJhaW5pbmdQaHJhc2VVcGRhdGUgPSB2YWx1ZS50cmFpbmluZ1BocmFzZVVwZGF0ZVxuICAgICAgICA/IG5ldyBTdHJpbmdVcGRhdGUodmFsdWUudHJhaW5pbmdQaHJhc2VVcGRhdGUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5lbnRpdHlVcGRhdGVzID0gKHZhbHVlLmVudGl0eVVwZGF0ZXMgfHwgW10pLm1hcChcbiAgICAgICAgbSA9PiBuZXcgU3RyaW5nVXBkYXRlKG0pXG4gICAgICApO1xuICAgICAgdGhpcy5lbnRpdGllc1JlYW5ub3RhdGVkID0gKHZhbHVlLmVudGl0aWVzUmVhbm5vdGF0ZWQgfHwgW10pLnNsaWNlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5zVXBkYXRlVmFyaWFibGUgPSB2YWx1ZS5jb250YWluc1VwZGF0ZVZhcmlhYmxlO1xuICAgICAgVHJhaW5pbmdQaHJhc2VVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdHJhaW5pbmdQaHJhc2VVcGRhdGUoKTogU3RyaW5nVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZVVwZGF0ZTtcbiAgICB9XG4gICAgc2V0IHRyYWluaW5nUGhyYXNlVXBkYXRlKHZhbHVlOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlVXBkYXRlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdHlVcGRhdGVzKCk6IFN0cmluZ1VwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlVcGRhdGVzO1xuICAgIH1cbiAgICBzZXQgZW50aXR5VXBkYXRlcyh2YWx1ZTogU3RyaW5nVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVVwZGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0aWVzUmVhbm5vdGF0ZWQoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzUmVhbm5vdGF0ZWQ7XG4gICAgfVxuICAgIHNldCBlbnRpdGllc1JlYW5ub3RhdGVkKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXRpZXNSZWFubm90YXRlZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY29udGFpbnNVcGRhdGVWYXJpYWJsZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250YWluc1VwZGF0ZVZhcmlhYmxlO1xuICAgIH1cbiAgICBzZXQgY29udGFpbnNVcGRhdGVWYXJpYWJsZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fY29udGFpbnNVcGRhdGVWYXJpYWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWluaW5nUGhyYXNlVXBkYXRlOiB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlXG4gICAgICAgICAgPyB0aGlzLnRyYWluaW5nUGhyYXNlVXBkYXRlLnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgZW50aXR5VXBkYXRlczogKHRoaXMuZW50aXR5VXBkYXRlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgICAgZW50aXRpZXNSZWFubm90YXRlZDogKHRoaXMuZW50aXRpZXNSZWFubm90YXRlZCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgY29udGFpbnNVcGRhdGVWYXJpYWJsZTogdGhpcy5jb250YWluc1VwZGF0ZVZhcmlhYmxlXG4gICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFRyYWluaW5nUGhyYXNlVXBkYXRlIHt9XG59XG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZVVwZGF0ZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFbnRpdHlUeXBlVXBkYXRlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVudGl0eVR5cGVVcGRhdGUudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRW50aXR5VHlwZVVwZGF0ZSgpO1xuICAgIEVudGl0eVR5cGVVcGRhdGUuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUpIHtcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IGluc3RhbmNlLmVudGl0eVR5cGVOYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLnZhbHVlc1VwZGF0ZUxpc3QgPSBpbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0IHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0ID0gaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnRpdHlUeXBlVXBkYXRlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEVudGl0eVR5cGVVcGRhdGUsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudmFsdWVzVXBkYXRlTGlzdCAmJiBpbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS52YWx1ZXNVcGRhdGVMaXN0IGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5FbnRpdHlVcGRhdGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZU5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZhbHVlc1VwZGF0ZUxpc3Q/OiBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRW50aXR5VHlwZVVwZGF0ZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVR5cGVVcGRhdGU+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gdmFsdWUuZW50aXR5VHlwZU5hbWU7XG4gICAgdGhpcy52YWx1ZXNVcGRhdGVMaXN0ID0gKHZhbHVlLnZhbHVlc1VwZGF0ZUxpc3QgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlKG0pXG4gICAgKTtcbiAgICBFbnRpdHlUeXBlVXBkYXRlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZU5hbWU7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB2YWx1ZXNVcGRhdGVMaXN0KCk6IEVudGl0eVR5cGVVcGRhdGUuRW50aXR5VXBkYXRlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXNVcGRhdGVMaXN0O1xuICB9XG4gIHNldCB2YWx1ZXNVcGRhdGVMaXN0KHZhbHVlOiBFbnRpdHlUeXBlVXBkYXRlLkVudGl0eVVwZGF0ZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdmFsdWVzVXBkYXRlTGlzdCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIHZhbHVlc1VwZGF0ZUxpc3Q6ICh0aGlzLnZhbHVlc1VwZGF0ZUxpc3QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVudGl0eVR5cGVVcGRhdGUge1xuICBleHBvcnQgY2xhc3MgRW50aXR5VXBkYXRlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRW50aXR5VXBkYXRlKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBFbnRpdHlVcGRhdGUudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlVcGRhdGUoKTtcbiAgICAgIEVudGl0eVVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRW50aXR5VXBkYXRlKSB7XG4gICAgICBpbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSA9IGluc3RhbmNlLmVudGl0eVZhbHVlVXBkYXRlIHx8IHVuZGVmaW5lZDtcbiAgICAgIGluc3RhbmNlLmVudGl0eVN5bm9ueW1VcGRhdGVzID0gaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgfHwgW107XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudGl0eVVwZGF0ZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlWYWx1ZVVwZGF0ZSA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUsXG4gICAgICAgICAgICAgIFN0cmluZ1VwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBTdHJpbmdVcGRhdGUoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgICAgU3RyaW5nVXBkYXRlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgPVxuICAgICAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgRW50aXR5VXBkYXRlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnRpdHlVcGRhdGUsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuZW50aXR5VmFsdWVVcGRhdGUpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxLFxuICAgICAgICAgIGluc3RhbmNlLmVudGl0eVZhbHVlVXBkYXRlIGFzIGFueSxcbiAgICAgICAgICBTdHJpbmdVcGRhdGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgJiZcbiAgICAgICAgaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgaW5zdGFuY2UuZW50aXR5U3lub255bVVwZGF0ZXMgYXMgYW55LFxuICAgICAgICAgIFN0cmluZ1VwZGF0ZS50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2VudGl0eVZhbHVlVXBkYXRlPzogU3RyaW5nVXBkYXRlO1xuICAgIHByaXZhdGUgX2VudGl0eVN5bm9ueW1VcGRhdGVzPzogU3RyaW5nVXBkYXRlW107XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAqIEBwYXJhbSBFbnRpdHlVcGRhdGUgdmFsdWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RW50aXR5VXBkYXRlPikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZW50aXR5VmFsdWVVcGRhdGUgPSB2YWx1ZS5lbnRpdHlWYWx1ZVVwZGF0ZVxuICAgICAgICA/IG5ldyBTdHJpbmdVcGRhdGUodmFsdWUuZW50aXR5VmFsdWVVcGRhdGUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5lbnRpdHlTeW5vbnltVXBkYXRlcyA9ICh2YWx1ZS5lbnRpdHlTeW5vbnltVXBkYXRlcyB8fCBbXSkubWFwKFxuICAgICAgICBtID0+IG5ldyBTdHJpbmdVcGRhdGUobSlcbiAgICAgICk7XG4gICAgICBFbnRpdHlVcGRhdGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgZW50aXR5VmFsdWVVcGRhdGUoKTogU3RyaW5nVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlWYWx1ZVVwZGF0ZTtcbiAgICB9XG4gICAgc2V0IGVudGl0eVZhbHVlVXBkYXRlKHZhbHVlOiBTdHJpbmdVcGRhdGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVZhbHVlVXBkYXRlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdHlTeW5vbnltVXBkYXRlcygpOiBTdHJpbmdVcGRhdGVbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXR5U3lub255bVVwZGF0ZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdHlTeW5vbnltVXBkYXRlcyh2YWx1ZTogU3RyaW5nVXBkYXRlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVN5bm9ueW1VcGRhdGVzID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW50aXR5VmFsdWVVcGRhdGU6IHRoaXMuZW50aXR5VmFsdWVVcGRhdGVcbiAgICAgICAgICA/IHRoaXMuZW50aXR5VmFsdWVVcGRhdGUudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBlbnRpdHlTeW5vbnltVXBkYXRlczogKHRoaXMuZW50aXR5U3lub255bVVwZGF0ZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgICAgbS50b09iamVjdCgpXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgRW50aXR5VXBkYXRlIHt9XG59XG5leHBvcnQgY2xhc3MgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QoKTtcbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID0gaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdO1xuICAgIGluc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlID0gaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgfHwgMDtcbiAgICBpbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPVxuICAgICAgaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zIHx8IFtdO1xuICAgIGluc3RhbmNlLmRyeVJ1biA9IGluc3RhbmNlLmRyeVJ1biB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgKGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCA9XG4gICAgICAgICAgICBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIChpbnN0YW5jZS5mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPVxuICAgICAgICAgICAgaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5kcnlSdW4gPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGluc3RhbmNlLm51bWJlck9mV29ya2VycyA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgJiYgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNCwgaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig1LCBpbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyAmJlxuICAgICAgaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zLmxlbmd0aFxuICAgICkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNiwgaW5zdGFuY2UuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRyeVJ1bikge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg3LCBpbnN0YW5jZS5kcnlSdW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig4LCBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gIHByaXZhdGUgX21heEVudGl0eUNvdW50VXBkYXRlPzogbnVtYmVyO1xuICBwcml2YXRlIF9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfZHJ5UnVuPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZXb3JrZXJzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDbGVhbkFsbEVudGl0eVR5cGVzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZS5zcGVjaWFsQ2hhcmFjdGVycztcbiAgICB0aGlzLnN1YnN0cmluZ1doaXRlTGlzdCA9ICh2YWx1ZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHZhbHVlLm1heEVudGl0eUNvdW50VXBkYXRlO1xuICAgIHRoaXMuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zID0gKFxuICAgICAgdmFsdWUuZm9yYmlkZGVuRW50aXR5VHlwZVBhdHRlcm5zIHx8IFtdXG4gICAgKS5zbGljZSgpO1xuICAgIHRoaXMuZHJ5UnVuID0gdmFsdWUuZHJ5UnVuO1xuICAgIHRoaXMubnVtYmVyT2ZXb3JrZXJzID0gdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4RW50aXR5Q291bnRVcGRhdGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGU7XG4gIH1cbiAgc2V0IG1heEVudGl0eUNvdW50VXBkYXRlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnM7XG4gIH1cbiAgc2V0IGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb3JiaWRkZW5FbnRpdHlUeXBlUGF0dGVybnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJ5UnVuKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kcnlSdW47XG4gIH1cbiAgc2V0IGRyeVJ1bih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RyeVJ1biA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1iZXJPZldvcmtlcnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG4gIHNldCBudW1iZXJPZldvcmtlcnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX251bWJlck9mV29ya2VycyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgc3Vic3RyaW5nV2hpdGVMaXN0OiAodGhpcy5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW10pLnNsaWNlKCksXG4gICAgICBtYXhFbnRpdHlDb3VudFVwZGF0ZTogdGhpcy5tYXhFbnRpdHlDb3VudFVwZGF0ZSxcbiAgICAgIGZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJuczogKFxuICAgICAgICB0aGlzLmZvcmJpZGRlbkVudGl0eVR5cGVQYXR0ZXJucyB8fCBbXVxuICAgICAgKS5zbGljZSgpLFxuICAgICAgZHJ5UnVuOiB0aGlzLmRyeVJ1bixcbiAgICAgIG51bWJlck9mV29ya2VyczogdGhpcy5udW1iZXJPZldvcmtlcnNcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlKCk7XG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMgPSBpbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZXMgfHwgW107XG4gICAgaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzID0gaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdO1xuICAgIGluc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzID0gaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZXMgfHwgW107XG4gICAgaW5zdGFuY2UuZW50aXR5VHlwZURlbGV0aW9ucyA9IGluc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBvbmRld29ObHUwMDEuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBvbmRld29ObHUwMDEuRW50aXR5VHlwZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzID1cbiAgICAgICAgICAgIGluc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmRlbGV0ZWRFbnRpdHlUeXBlcyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIzID0gbmV3IEVudGl0eVR5cGVVcGRhdGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZXMgPSBpbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBFbnRpdHlUeXBlVXBkYXRlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgIEVudGl0eVR5cGVVcGRhdGUuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgPVxuICAgICAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZURlbGV0aW9ucyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzICYmIGluc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuY2xlYW5lZEVudGl0eVR5cGVzIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgJiYgaW5zdGFuY2UuZGVsZXRlZEVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5kZWxldGVkRW50aXR5VHlwZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDEuRW50aXR5VHlwZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzICYmIGluc3RhbmNlLmVudGl0eVR5cGVVcGRhdGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlcyBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGVVcGRhdGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnRpdHlUeXBlRGVsZXRpb25zICYmIGluc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVEZWxldGlvbnMgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlVXBkYXRlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFuZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlW107XG4gIHByaXZhdGUgX2RlbGV0ZWRFbnRpdHlUeXBlcz86IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlW107XG4gIHByaXZhdGUgX2VudGl0eVR5cGVVcGRhdGVzPzogRW50aXR5VHlwZVVwZGF0ZVtdO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlRGVsZXRpb25zPzogRW50aXR5VHlwZVVwZGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jbGVhbmVkRW50aXR5VHlwZXMgPSAodmFsdWUuY2xlYW5lZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDEuRW50aXR5VHlwZShtKVxuICAgICk7XG4gICAgdGhpcy5kZWxldGVkRW50aXR5VHlwZXMgPSAodmFsdWUuZGVsZXRlZEVudGl0eVR5cGVzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDEuRW50aXR5VHlwZShtKVxuICAgICk7XG4gICAgdGhpcy5lbnRpdHlUeXBlVXBkYXRlcyA9ICh2YWx1ZS5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRW50aXR5VHlwZVVwZGF0ZShtKVxuICAgICk7XG4gICAgdGhpcy5lbnRpdHlUeXBlRGVsZXRpb25zID0gKHZhbHVlLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEVudGl0eVR5cGVVcGRhdGUobSlcbiAgICApO1xuICAgIENsZWFuQWxsRW50aXR5VHlwZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNsZWFuZWRFbnRpdHlUeXBlcygpOiBvbmRld29ObHUwMDEuRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYW5lZEVudGl0eVR5cGVzO1xuICB9XG4gIHNldCBjbGVhbmVkRW50aXR5VHlwZXModmFsdWU6IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jbGVhbmVkRW50aXR5VHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVsZXRlZEVudGl0eVR5cGVzKCk6IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVkRW50aXR5VHlwZXM7XG4gIH1cbiAgc2V0IGRlbGV0ZWRFbnRpdHlUeXBlcyh2YWx1ZTogb25kZXdvTmx1MDAxLkVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlbGV0ZWRFbnRpdHlUeXBlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlVXBkYXRlcygpOiBFbnRpdHlUeXBlVXBkYXRlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlVXBkYXRlcztcbiAgfVxuICBzZXQgZW50aXR5VHlwZVVwZGF0ZXModmFsdWU6IEVudGl0eVR5cGVVcGRhdGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVVcGRhdGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVEZWxldGlvbnMoKTogRW50aXR5VHlwZVVwZGF0ZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZURlbGV0aW9ucztcbiAgfVxuICBzZXQgZW50aXR5VHlwZURlbGV0aW9ucyh2YWx1ZTogRW50aXR5VHlwZVVwZGF0ZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZURlbGV0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhbmVkRW50aXR5VHlwZXM6ICh0aGlzLmNsZWFuZWRFbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgZGVsZXRlZEVudGl0eVR5cGVzOiAodGhpcy5kZWxldGVkRW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIGVudGl0eVR5cGVVcGRhdGVzOiAodGhpcy5lbnRpdHlUeXBlVXBkYXRlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGVudGl0eVR5cGVEZWxldGlvbnM6ICh0aGlzLmVudGl0eVR5cGVEZWxldGlvbnMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCgpO1xuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IENsZWFuRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgPSBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgPSBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyB8fCAnJztcbiAgICBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgPSBpbnN0YW5jZS5zdWJzdHJpbmdXaGl0ZUxpc3QgfHwgW107XG4gICAgaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUgPSBpbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSB8fCAwO1xuICAgIGluc3RhbmNlLmRyeVJ1biA9IGluc3RhbmNlLmRyeVJ1biB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAoaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ID1cbiAgICAgICAgICAgIGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLm1heEVudGl0eUNvdW50VXBkYXRlID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UuZHJ5UnVuID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENsZWFuRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3Vic3RyaW5nV2hpdGVMaXN0ICYmIGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDUsIGluc3RhbmNlLnN1YnN0cmluZ1doaXRlTGlzdCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tYXhFbnRpdHlDb3VudFVwZGF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoNiwgaW5zdGFuY2UubWF4RW50aXR5Q291bnRVcGRhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZHJ5UnVuKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDcsIGluc3RhbmNlLmRyeVJ1bik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9lbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3Vic3RyaW5nV2hpdGVMaXN0Pzogc3RyaW5nW107XG4gIHByaXZhdGUgX21heEVudGl0eUNvdW50VXBkYXRlPzogbnVtYmVyO1xuICBwcml2YXRlIF9kcnlSdW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuRW50aXR5VHlwZVJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gdmFsdWUuZW50aXR5VHlwZU5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0ID0gKHZhbHVlLnN1YnN0cmluZ1doaXRlTGlzdCB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLm1heEVudGl0eUNvdW50VXBkYXRlID0gdmFsdWUubWF4RW50aXR5Q291bnRVcGRhdGU7XG4gICAgdGhpcy5kcnlSdW4gPSB2YWx1ZS5kcnlSdW47XG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVOYW1lO1xuICB9XG4gIHNldCBlbnRpdHlUeXBlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VHlwZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJzdHJpbmdXaGl0ZUxpc3QoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3Q7XG4gIH1cbiAgc2V0IHN1YnN0cmluZ1doaXRlTGlzdCh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdWJzdHJpbmdXaGl0ZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4RW50aXR5Q291bnRVcGRhdGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RW50aXR5Q291bnRVcGRhdGU7XG4gIH1cbiAgc2V0IG1heEVudGl0eUNvdW50VXBkYXRlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXhFbnRpdHlDb3VudFVwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkcnlSdW4oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyeVJ1bjtcbiAgfVxuICBzZXQgZHJ5UnVuKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZHJ5UnVuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHN1YnN0cmluZ1doaXRlTGlzdDogKHRoaXMuc3Vic3RyaW5nV2hpdGVMaXN0IHx8IFtdKS5zbGljZSgpLFxuICAgICAgbWF4RW50aXR5Q291bnRVcGRhdGU6IHRoaXMubWF4RW50aXR5Q291bnRVcGRhdGUsXG4gICAgICBkcnlSdW46IHRoaXMuZHJ5UnVuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDbGVhbkVudGl0eVR5cGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UoKTtcbiAgICBDbGVhbkVudGl0eVR5cGVSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSA9IGluc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlID0gaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSA9IG5ldyBvbmRld29ObHUwMDEuRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDAxLkVudGl0eVR5cGUuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlID0gbmV3IEVudGl0eVR5cGVVcGRhdGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlVXBkYXRlLFxuICAgICAgICAgICAgRW50aXR5VHlwZVVwZGF0ZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmNsZWFuZWRFbnRpdHlUeXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5jbGVhbmVkRW50aXR5VHlwZSBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZVVwZGF0ZSBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGVVcGRhdGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW5lZEVudGl0eVR5cGU/OiBvbmRld29ObHUwMDEuRW50aXR5VHlwZTtcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZVVwZGF0ZT86IEVudGl0eVR5cGVVcGRhdGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDbGVhbkVudGl0eVR5cGVSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENsZWFuRW50aXR5VHlwZVJlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jbGVhbmVkRW50aXR5VHlwZSA9IHZhbHVlLmNsZWFuZWRFbnRpdHlUeXBlXG4gICAgICA/IG5ldyBvbmRld29ObHUwMDEuRW50aXR5VHlwZSh2YWx1ZS5jbGVhbmVkRW50aXR5VHlwZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW50aXR5VHlwZVVwZGF0ZSA9IHZhbHVlLmVudGl0eVR5cGVVcGRhdGVcbiAgICAgID8gbmV3IEVudGl0eVR5cGVVcGRhdGUodmFsdWUuZW50aXR5VHlwZVVwZGF0ZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIENsZWFuRW50aXR5VHlwZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY2xlYW5lZEVudGl0eVR5cGUoKTogb25kZXdvTmx1MDAxLkVudGl0eVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGVhbmVkRW50aXR5VHlwZTtcbiAgfVxuICBzZXQgY2xlYW5lZEVudGl0eVR5cGUodmFsdWU6IG9uZGV3b05sdTAwMS5FbnRpdHlUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY2xlYW5lZEVudGl0eVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZVVwZGF0ZSgpOiBFbnRpdHlUeXBlVXBkYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZVVwZGF0ZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZVVwZGF0ZSh2YWx1ZTogRW50aXR5VHlwZVVwZGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVVcGRhdGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYW5lZEVudGl0eVR5cGU6IHRoaXMuY2xlYW5lZEVudGl0eVR5cGVcbiAgICAgICAgPyB0aGlzLmNsZWFuZWRFbnRpdHlUeXBlLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBlbnRpdHlUeXBlVXBkYXRlOiB0aGlzLmVudGl0eVR5cGVVcGRhdGVcbiAgICAgICAgPyB0aGlzLmVudGl0eVR5cGVVcGRhdGUudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0ID0gaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdO1xuICAgIGluc3RhbmNlLmV4dHJhY3RFbnRpdGllcyA9IGluc3RhbmNlLmV4dHJhY3RFbnRpdGllcyB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyA9IGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzIHx8ICcnO1xuICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPVxuICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QuVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdCA9XG4gICAgICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUxpc3QgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0ICYmIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlTGlzdC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VMaXN0IGFzIGFueSxcbiAgICAgICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmV4dHJhY3RFbnRpdGllcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg0LCBpbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGFzIGFueSxcbiAgICAgICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoNywgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VMaXN0PzogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFtdO1xuICBwcml2YXRlIF9leHRyYWN0RW50aXRpZXM/OiBib29sZWFuO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEFkZFRyYWluaW5nUGhyYXNlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUxpc3QgPSAodmFsdWUudHJhaW5pbmdQaHJhc2VMaXN0IHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBBZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LlRyYWluaW5nUGhyYXNlRm9ySW50ZW50KG0pXG4gICAgKTtcbiAgICB0aGlzLmV4dHJhY3RFbnRpdGllcyA9IHZhbHVlLmV4dHJhY3RFbnRpdGllcztcbiAgICB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWUuc3BlY2lhbENoYXJhY3RlcnM7XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gdmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgPyBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyh2YWx1ZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJPZldvcmtlcnMgPSB2YWx1ZS5udW1iZXJPZldvcmtlcnM7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYWluaW5nUGhyYXNlTGlzdCgpOlxuICAgIHwgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFtdXG4gICAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUxpc3Q7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlTGlzdChcbiAgICB2YWx1ZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5UcmFpbmluZ1BocmFzZUZvckludGVudFtdIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlTGlzdCA9IHZhbHVlO1xuICB9XG4gIGdldCBleHRyYWN0RW50aXRpZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhY3RFbnRpdGllcztcbiAgfVxuICBzZXQgZXh0cmFjdEVudGl0aWVzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXh0cmFjdEVudGl0aWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNwZWNpYWxDaGFyYWN0ZXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxDaGFyYWN0ZXJzO1xuICB9XG4gIHNldCBzcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucztcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyhcbiAgICB2YWx1ZTogVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG51bWJlck9mV29ya2VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZldvcmtlcnM7XG4gIH1cbiAgc2V0IG51bWJlck9mV29ya2Vycyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZXb3JrZXJzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgdHJhaW5pbmdQaHJhc2VMaXN0OiAodGhpcy50cmFpbmluZ1BocmFzZUxpc3QgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIGV4dHJhY3RFbnRpdGllczogdGhpcy5leHRyYWN0RW50aXRpZXMsXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyczogdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyxcbiAgICAgIHRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM6IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uc1xuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbnVtYmVyT2ZXb3JrZXJzOiB0aGlzLm51bWJlck9mV29ya2Vyc1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCB7XG4gIGV4cG9ydCBjbGFzcyBUcmFpbmluZ1BocmFzZUZvckludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlRm9ySW50ZW50KSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluaW5nUGhyYXNlRm9ySW50ZW50KCk7XG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVHJhaW5pbmdQaHJhc2VGb3JJbnRlbnQpIHtcbiAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSA9IGluc3RhbmNlLmludGVudERpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgaW5zdGFuY2UuZW50aXRpZXMgPSBpbnN0YW5jZS5lbnRpdGllcyB8fCBbXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlOiBUcmFpbmluZ1BocmFzZUZvckludGVudCxcbiAgICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW5zdGFuY2UuaW50ZW50RGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBvbmRld29ObHUwMDAuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eSgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgICBvbmRld29ObHUwMDAuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKGluc3RhbmNlLmVudGl0aWVzID0gaW5zdGFuY2UuZW50aXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgICAgaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlRm9ySW50ZW50LFxuICAgICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmludGVudERpc3BsYXlOYW1lKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5pbnRlbnREaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZW50aXRpZXMgJiYgaW5zdGFuY2UuZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgICAzLFxuICAgICAgICAgIGluc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgICBvbmRld29ObHUwMDAuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2ludGVudERpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VudGl0aWVzPzogb25kZXdvTmx1MDAwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50IHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYWluaW5nUGhyYXNlRm9ySW50ZW50Pikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMudHJhaW5pbmdQaHJhc2UgPSB2YWx1ZS50cmFpbmluZ1BocmFzZTtcbiAgICAgIHRoaXMuaW50ZW50RGlzcGxheU5hbWUgPSB2YWx1ZS5pbnRlbnREaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMuZW50aXRpZXMgPSAodmFsdWUuZW50aXRpZXMgfHwgW10pLm1hcChcbiAgICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDAwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkobSlcbiAgICAgICk7XG4gICAgICBUcmFpbmluZ1BocmFzZUZvckludGVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCB0cmFpbmluZ1BocmFzZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlO1xuICAgIH1cbiAgICBzZXQgdHJhaW5pbmdQaHJhc2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdHJhaW5pbmdQaHJhc2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGludGVudERpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZW50RGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHNldCBpbnRlbnREaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9pbnRlbnREaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW50aXRpZXMoKTogb25kZXdvTmx1MDAwLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdGllcyhcbiAgICAgIHZhbHVlOiBvbmRld29ObHUwMDAuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eVtdIHwgdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICB0aGlzLl9lbnRpdGllcyA9IHZhbHVlO1xuICAgIH1cbiAgICB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWluaW5nUGhyYXNlOiB0aGlzLnRyYWluaW5nUGhyYXNlLFxuICAgICAgICBpbnRlbnREaXNwbGF5TmFtZTogdGhpcy5pbnRlbnREaXNwbGF5TmFtZSxcbiAgICAgICAgZW50aXRpZXM6ICh0aGlzLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICB9O1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cbiAgfVxuICBleHBvcnQgbW9kdWxlIFRyYWluaW5nUGhyYXNlRm9ySW50ZW50IHt9XG59XG5leHBvcnQgY2xhc3MgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UoKTtcbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5lcnJvck1lc3NhZ2VzID0gaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyAmJiBpbnN0YW5jZS5lcnJvck1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UuZXJyb3JNZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9ICh2YWx1ZS5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZXM7XG4gIH1cbiAgc2V0IGVycm9yTWVzc2FnZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvck1lc3NhZ2VzOiAodGhpcy5lcnJvck1lc3NhZ2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZGRUcmFpbmluZ1BocmFzZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0KCk7XG4gICAgQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5jc3ZDb250ZW50cyA9IGluc3RhbmNlLmNzdkNvbnRlbnRzIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UuZXh0cmFjdEVudGl0aWVzID0gaW5zdGFuY2UuZXh0cmFjdEVudGl0aWVzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMgfHwgJyc7XG4gICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9XG4gICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgPSBpbnN0YW5jZS5udW1iZXJPZldvcmtlcnMgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuY3N2Q29udGVudHMgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5leHRyYWN0RW50aXRpZXMgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnNwZWNpYWxDaGFyYWN0ZXJzID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSBuZXcgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMsXG4gICAgICAgICAgICBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jc3ZDb250ZW50cyAmJiBpbnN0YW5jZS5jc3ZDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDMsIGluc3RhbmNlLmNzdkNvbnRlbnRzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmV4dHJhY3RFbnRpdGllcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg0LCBpbnN0YW5jZS5leHRyYWN0RW50aXRpZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3BlY2lhbENoYXJhY3RlcnMpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5zcGVjaWFsQ2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIGFzIGFueSxcbiAgICAgICAgVHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm51bWJlck9mV29ya2Vycykge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoNywgaW5zdGFuY2UubnVtYmVyT2ZXb3JrZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3N2Q29udGVudHM/OiBVaW50OEFycmF5O1xuICBwcml2YXRlIF9leHRyYWN0RW50aXRpZXM/OiBib29sZWFuO1xuICBwcml2YXRlIF9zcGVjaWFsQ2hhcmFjdGVycz86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucz86IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX251bWJlck9mV29ya2Vycz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLmNzdkNvbnRlbnRzID0gdmFsdWUuY3N2Q29udGVudHM7XG4gICAgdGhpcy5leHRyYWN0RW50aXRpZXMgPSB2YWx1ZS5leHRyYWN0RW50aXRpZXM7XG4gICAgdGhpcy5zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlLnNwZWNpYWxDaGFyYWN0ZXJzO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucyA9IHZhbHVlLnRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnNcbiAgICAgID8gbmV3IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnModmFsdWUudHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyT2ZXb3JrZXJzID0gdmFsdWUubnVtYmVyT2ZXb3JrZXJzO1xuICAgIEFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3N2Q29udGVudHMoKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdkNvbnRlbnRzO1xuICB9XG4gIHNldCBjc3ZDb250ZW50cyh2YWx1ZTogVWludDhBcnJheSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NzdkNvbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4dHJhY3RFbnRpdGllcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdEVudGl0aWVzO1xuICB9XG4gIHNldCBleHRyYWN0RW50aXRpZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9leHRyYWN0RW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3BlY2lhbENoYXJhY3RlcnMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY2lhbENoYXJhY3RlcnM7XG4gIH1cbiAgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKCk6IFRyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zKFxuICAgIHZhbHVlOiBUcmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ2xlYW5lck9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyT2ZXb3JrZXJzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlck9mV29ya2VycztcbiAgfVxuICBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBjc3ZDb250ZW50czogdGhpcy5jc3ZDb250ZW50c1xuICAgICAgICA/IHRoaXMuY3N2Q29udGVudHMuc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgZXh0cmFjdEVudGl0aWVzOiB0aGlzLmV4dHJhY3RFbnRpdGllcyxcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiB0aGlzLnNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDbGVhbmVyT3B0aW9uczogdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zXG4gICAgICAgID8gdGhpcy50cmFpbmluZ1BocmFzZUNsZWFuZXJPcHRpb25zLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBudW1iZXJPZldvcmtlcnM6IHRoaXMubnVtYmVyT2ZXb3JrZXJzXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWUmVxdWVzdCB7fVxuIl19