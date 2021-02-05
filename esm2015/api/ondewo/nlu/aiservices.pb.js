import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/intent.pb';
export class ExtractEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.text = value.text;
        this.languageCode = value.languageCode;
        ExtractEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtractEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtractEntitiesRequest();
        ExtractEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.text = instance.text || '';
        instance.languageCode = instance.languageCode || '';
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
                    instance.text = reader.readString();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtractEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.text) {
            writer.writeString(2, instance.text);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
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
    toObject() {
        return {
            parent: this.parent,
            text: this.text,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ExtractEntitiesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entities = (value.entities || []).map(m => new ondewoNlu001.Intent.TrainingPhrase.Entity(m));
        this.text = value.text;
        ExtractEntitiesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtractEntitiesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtractEntitiesResponse();
        ExtractEntitiesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entities = instance.entities || [];
        instance.text = instance.text || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ondewoNlu001.Intent.TrainingPhrase.Entity();
                    reader.readMessage(messageInitializer1, ondewoNlu001.Intent.TrainingPhrase.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.text = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtractEntitiesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(1, instance.entities, ondewoNlu001.Intent.TrainingPhrase.Entity.toBinaryWriter);
        }
        if (instance.text) {
            writer.writeString(2, instance.text);
        }
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    toObject() {
        return {
            entities: (this.entities || []).map(m => m.toObject()),
            text: this.text
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAlternativeSentencesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.sentence = value.sentence;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.protectedWords = (value.protectedWords || []).slice();
        this.wordsToChange = (value.wordsToChange || []).slice();
        GetAlternativeSentencesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeSentencesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeSentencesRequest();
        GetAlternativeSentencesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.sentence = instance.sentence || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.protectedWords = instance.protectedWords || [];
        instance.wordsToChange = instance.wordsToChange || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.sentence = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    (instance.protectedWords = instance.protectedWords || []).push(reader.readString());
                    break;
                case 7:
                    (instance.wordsToChange = instance.wordsToChange || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeSentencesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.sentence) {
            writer.writeString(2, instance.sentence);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.protectedWords && instance.protectedWords.length) {
            writer.writeRepeatedString(6, instance.protectedWords);
        }
        if (instance.wordsToChange && instance.wordsToChange.length) {
            writer.writeRepeatedString(7, instance.wordsToChange);
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
    toJSON() {
        return this.toObject();
    }
}
export class GenerateUserSaysRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysRequest value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.nRepeatSynonym = value.nRepeatSynonym;
        this.branch = value.branch;
        GenerateUserSaysRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateUserSaysRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateUserSaysRequest();
        GenerateUserSaysRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.nRepeatSynonym = instance.nRepeatSynonym || 0;
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    instance.nRepeatSynonym = reader.readInt32();
                    break;
                case 8:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateUserSaysRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.nRepeatSynonym) {
            writer.writeInt32(6, instance.nRepeatSynonym);
        }
        if (instance.branch) {
            writer.writeString(8, instance.branch);
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
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GenerateResponsesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesRequest value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.nRepeatSynonym = value.nRepeatSynonym;
        this.branch = value.branch;
        this.dropUnknownParameters = value.dropUnknownParameters;
        GenerateResponsesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateResponsesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateResponsesRequest();
        GenerateResponsesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.nRepeatSynonym = instance.nRepeatSynonym || 0;
        instance.branch = instance.branch || '';
        instance.dropUnknownParameters = instance.dropUnknownParameters || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 7:
                    instance.nRepeatSynonym = reader.readInt32();
                    break;
                case 8:
                    instance.branch = reader.readString();
                    break;
                case 9:
                    instance.dropUnknownParameters = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateResponsesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.nRepeatSynonym) {
            writer.writeInt32(7, instance.nRepeatSynonym);
        }
        if (instance.branch) {
            writer.writeString(8, instance.branch);
        }
        if (instance.dropUnknownParameters) {
            writer.writeBool(9, instance.dropUnknownParameters);
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
    toObject() {
        return {
            languageCode: this.languageCode,
            parent: this.parent,
            nRepeatSynonym: this.nRepeatSynonym,
            branch: this.branch,
            dropUnknownParameters: this.dropUnknownParameters
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAlternativeTrainingPhrasesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.trainingPhrase = value.trainingPhrase
            ? new ondewoNlu001.Intent.TrainingPhrase(value.trainingPhrase)
            : undefined;
        this.intentName = value.intentName;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        this.detectEntities = value.detectEntities;
        this.similarityThreshold = value.similarityThreshold;
        this.protectedWords = (value.protectedWords || []).slice();
        this.wordsToChange = (value.wordsToChange || []).slice();
        this.branch = value.branch;
        GetAlternativeTrainingPhrasesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesRequest();
        GetAlternativeTrainingPhrasesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.trainingPhrase = instance.trainingPhrase || undefined;
        instance.intentName = instance.intentName || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
        instance.detectEntities = instance.detectEntities || false;
        instance.similarityThreshold = instance.similarityThreshold || 0;
        instance.protectedWords = instance.protectedWords || [];
        instance.wordsToChange = instance.wordsToChange || [];
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.trainingPhrase = new ondewoNlu001.Intent.TrainingPhrase();
                    reader.readMessage(instance.trainingPhrase, ondewoNlu001.Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 3:
                    instance.intentName = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                case 6:
                    instance.detectEntities = reader.readBool();
                    break;
                case 7:
                    instance.similarityThreshold = reader.readFloat();
                    break;
                case 8:
                    (instance.protectedWords = instance.protectedWords || []).push(reader.readString());
                    break;
                case 9:
                    (instance.wordsToChange = instance.wordsToChange || []).push(reader.readString());
                    break;
                case 10:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.trainingPhrase) {
            writer.writeMessage(2, instance.trainingPhrase, ondewoNlu001.Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.intentName) {
            writer.writeString(3, instance.intentName);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
        }
        if (instance.detectEntities) {
            writer.writeBool(6, instance.detectEntities);
        }
        if (instance.similarityThreshold) {
            writer.writeFloat(7, instance.similarityThreshold);
        }
        if (instance.protectedWords && instance.protectedWords.length) {
            writer.writeRepeatedString(8, instance.protectedWords);
        }
        if (instance.wordsToChange && instance.wordsToChange.length) {
            writer.writeRepeatedString(9, instance.wordsToChange);
        }
        if (instance.branch) {
            writer.writeString(10, instance.branch);
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
    toJSON() {
        return this.toObject();
    }
}
export class GetSynonymsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsRequest value
     */
    constructor(value) {
        value = value || {};
        this.config = value.config
            ? new DataEnrichmentConfig(value.config)
            : undefined;
        this.word = value.word;
        this.languageCode = value.languageCode;
        this.parent = value.parent;
        GetSynonymsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSynonymsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSynonymsRequest();
        GetSynonymsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.config = instance.config || undefined;
        instance.word = instance.word || '';
        instance.languageCode = instance.languageCode || '';
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.config = new DataEnrichmentConfig();
                    reader.readMessage(instance.config, DataEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.word = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSynonymsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.config) {
            writer.writeMessage(1, instance.config, DataEnrichmentConfig.toBinaryWriter);
        }
        if (instance.word) {
            writer.writeString(2, instance.word);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.parent) {
            writer.writeString(5, instance.parent);
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
    toObject() {
        return {
            config: this.config ? this.config.toObject() : undefined,
            word: this.word,
            languageCode: this.languageCode,
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetSynonymsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsResponse value
     */
    constructor(value) {
        value = value || {};
        this.synonyms = (value.synonyms || []).map(m => new Synonym(m));
        GetSynonymsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetSynonymsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetSynonymsResponse();
        GetSynonymsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.synonyms = instance.synonyms || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Synonym();
                    reader.readMessage(messageInitializer1, Synonym.fromBinaryReader);
                    (instance.synonyms = instance.synonyms || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetSynonymsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.synonyms && instance.synonyms.length) {
            writer.writeRepeatedMessage(1, instance.synonyms, Synonym.toBinaryWriter);
        }
    }
    get synonyms() {
        return this._synonyms;
    }
    set synonyms(value) {
        this._synonyms = value;
    }
    toObject() {
        return {
            synonyms: (this.synonyms || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class Synonym {
    /**
     * Creates an object and applies default Protobuf values
     * @param Synonym value
     */
    constructor(value) {
        value = value || {};
        this.synonym = value.synonym;
        this.score = value.score;
        Synonym.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Synonym.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Synonym();
        Synonym.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.synonym = instance.synonym || '';
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.synonym = reader.readString();
                    break;
                case 2:
                    instance.score = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        Synonym.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.synonym) {
            writer.writeString(1, instance.synonym);
        }
        if (instance.score) {
            writer.writeInt32(2, instance.score);
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
    toObject() {
        return {
            synonym: this.synonym,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAlternativeSentencesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesResponse value
     */
    constructor(value) {
        value = value || {};
        this.alternativeSentences = (value.alternativeSentences || []).map(m => new AltSentence(m));
        GetAlternativeSentencesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeSentencesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeSentencesResponse();
        GetAlternativeSentencesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.alternativeSentences = instance.alternativeSentences || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AltSentence();
                    reader.readMessage(messageInitializer1, AltSentence.fromBinaryReader);
                    (instance.alternativeSentences =
                        instance.alternativeSentences || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeSentencesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.alternativeSentences && instance.alternativeSentences.length) {
            writer.writeRepeatedMessage(1, instance.alternativeSentences, AltSentence.toBinaryWriter);
        }
    }
    get alternativeSentences() {
        return this._alternativeSentences;
    }
    set alternativeSentences(value) {
        this._alternativeSentences = value;
    }
    toObject() {
        return {
            alternativeSentences: (this.alternativeSentences || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GenerateResponsesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesResponse value
     */
    constructor(value) {
        value = value || {};
        this.responses = (value.responses || []).slice();
        GenerateResponsesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateResponsesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateResponsesResponse();
        GenerateResponsesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.responses = instance.responses || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    (instance.responses = instance.responses || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateResponsesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.responses && instance.responses.length) {
            writer.writeRepeatedString(2, instance.responses);
        }
    }
    get responses() {
        return this._responses;
    }
    set responses(value) {
        this._responses = value;
    }
    toObject() {
        return {
            responses: (this.responses || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GenerateUserSaysResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysResponse value
     */
    constructor(value) {
        value = value || {};
        this.userSays = (value.userSays || []).slice();
        GenerateUserSaysResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GenerateUserSaysResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GenerateUserSaysResponse();
        GenerateUserSaysResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userSays = instance.userSays || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    (instance.userSays = instance.userSays || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        GenerateUserSaysResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userSays && instance.userSays.length) {
            writer.writeRepeatedString(2, instance.userSays);
        }
    }
    get userSays() {
        return this._userSays;
    }
    set userSays(value) {
        this._userSays = value;
    }
    toObject() {
        return {
            userSays: (this.userSays || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAlternativeTrainingPhrasesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesResponse value
     */
    constructor(value) {
        value = value || {};
        this.alternativeTrainingPhrases = (value.alternativeTrainingPhrases || []).map(m => new AltTrainingPhrase(m));
        GetAlternativeTrainingPhrasesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAlternativeTrainingPhrasesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAlternativeTrainingPhrasesResponse();
        GetAlternativeTrainingPhrasesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.alternativeTrainingPhrases =
            instance.alternativeTrainingPhrases || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AltTrainingPhrase();
                    reader.readMessage(messageInitializer1, AltTrainingPhrase.fromBinaryReader);
                    (instance.alternativeTrainingPhrases =
                        instance.alternativeTrainingPhrases || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAlternativeTrainingPhrasesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.alternativeTrainingPhrases &&
            instance.alternativeTrainingPhrases.length) {
            writer.writeRepeatedMessage(1, instance.alternativeTrainingPhrases, AltTrainingPhrase.toBinaryWriter);
        }
    }
    get alternativeTrainingPhrases() {
        return this._alternativeTrainingPhrases;
    }
    set alternativeTrainingPhrases(value) {
        this._alternativeTrainingPhrases = value;
    }
    toObject() {
        return {
            alternativeTrainingPhrases: (this.alternativeTrainingPhrases || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AltSentence {
    /**
     * Creates an object and applies default Protobuf values
     * @param AltSentence value
     */
    constructor(value) {
        value = value || {};
        this.sentence = value.sentence;
        this.score = value.score;
        AltSentence.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AltSentence.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AltSentence();
        AltSentence.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sentence = instance.sentence || '';
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sentence = reader.readString();
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        AltSentence.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sentence) {
            writer.writeString(1, instance.sentence);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
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
    toObject() {
        return {
            sentence: this.sentence,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AltTrainingPhrase {
    /**
     * Creates an object and applies default Protobuf values
     * @param AltTrainingPhrase value
     */
    constructor(value) {
        value = value || {};
        this.trainingPhrase = value.trainingPhrase
            ? new ondewoNlu001.Intent.TrainingPhrase(value.trainingPhrase)
            : undefined;
        this.score = value.score;
        AltTrainingPhrase.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AltTrainingPhrase.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AltTrainingPhrase();
        AltTrainingPhrase.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.trainingPhrase = instance.trainingPhrase || undefined;
        instance.score = instance.score || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.trainingPhrase = new ondewoNlu001.Intent.TrainingPhrase();
                    reader.readMessage(instance.trainingPhrase, ondewoNlu001.Intent.TrainingPhrase.fromBinaryReader);
                    break;
                case 2:
                    instance.score = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        AltTrainingPhrase.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.trainingPhrase) {
            writer.writeMessage(1, instance.trainingPhrase, ondewoNlu001.Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.score) {
            writer.writeFloat(2, instance.score);
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
    toObject() {
        return {
            trainingPhrase: this.trainingPhrase
                ? this.trainingPhrase.toObject()
                : undefined,
            score: this.score
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DataEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param DataEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.entityEnrichment = value.entityEnrichment
            ? new EntityEnrichmentConfig(value.entityEnrichment)
            : undefined;
        this.thesaurusEnrichment = value.thesaurusEnrichment
            ? new ThesaurusEnrichmentConfig(value.thesaurusEnrichment)
            : undefined;
        this.word2vecEnrichment = value.word2vecEnrichment
            ? new Word2VecEnrichmentConfig(value.word2vecEnrichment)
            : undefined;
        this.wordNetEnrichment = value.wordNetEnrichment
            ? new WordNetAugEnrichmentConfig(value.wordNetEnrichment)
            : undefined;
        this.gpt2Enrichment = value.gpt2Enrichment
            ? new GPT2EnrichmentConfig(value.gpt2Enrichment)
            : undefined;
        this.gloveEnrichment = value.gloveEnrichment
            ? new GloVeEnrichmentConfig(value.gloveEnrichment)
            : undefined;
        this.fasttextEnrichment = value.fasttextEnrichment
            ? new FastTextEnrichmentConfig(value.fasttextEnrichment)
            : undefined;
        this.bertEnrichment = value.bertEnrichment
            ? new BertAugEnrichmentConfig(value.bertEnrichment)
            : undefined;
        this.xlnetEnrichment = value.xlnetEnrichment
            ? new XLNetAugEnrichmentConfig(value.xlnetEnrichment)
            : undefined;
        DataEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DataEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DataEnrichmentConfig();
        DataEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityEnrichment = instance.entityEnrichment || undefined;
        instance.thesaurusEnrichment = instance.thesaurusEnrichment || undefined;
        instance.word2vecEnrichment = instance.word2vecEnrichment || undefined;
        instance.wordNetEnrichment = instance.wordNetEnrichment || undefined;
        instance.gpt2Enrichment = instance.gpt2Enrichment || undefined;
        instance.gloveEnrichment = instance.gloveEnrichment || undefined;
        instance.fasttextEnrichment = instance.fasttextEnrichment || undefined;
        instance.bertEnrichment = instance.bertEnrichment || undefined;
        instance.xlnetEnrichment = instance.xlnetEnrichment || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityEnrichment = new EntityEnrichmentConfig();
                    reader.readMessage(instance.entityEnrichment, EntityEnrichmentConfig.fromBinaryReader);
                    break;
                case 2:
                    instance.thesaurusEnrichment = new ThesaurusEnrichmentConfig();
                    reader.readMessage(instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.fromBinaryReader);
                    break;
                case 3:
                    instance.word2vecEnrichment = new Word2VecEnrichmentConfig();
                    reader.readMessage(instance.word2vecEnrichment, Word2VecEnrichmentConfig.fromBinaryReader);
                    break;
                case 4:
                    instance.wordNetEnrichment = new WordNetAugEnrichmentConfig();
                    reader.readMessage(instance.wordNetEnrichment, WordNetAugEnrichmentConfig.fromBinaryReader);
                    break;
                case 5:
                    instance.gpt2Enrichment = new GPT2EnrichmentConfig();
                    reader.readMessage(instance.gpt2Enrichment, GPT2EnrichmentConfig.fromBinaryReader);
                    break;
                case 6:
                    instance.gloveEnrichment = new GloVeEnrichmentConfig();
                    reader.readMessage(instance.gloveEnrichment, GloVeEnrichmentConfig.fromBinaryReader);
                    break;
                case 7:
                    instance.fasttextEnrichment = new FastTextEnrichmentConfig();
                    reader.readMessage(instance.fasttextEnrichment, FastTextEnrichmentConfig.fromBinaryReader);
                    break;
                case 8:
                    instance.bertEnrichment = new BertAugEnrichmentConfig();
                    reader.readMessage(instance.bertEnrichment, BertAugEnrichmentConfig.fromBinaryReader);
                    break;
                case 9:
                    instance.xlnetEnrichment = new XLNetAugEnrichmentConfig();
                    reader.readMessage(instance.xlnetEnrichment, XLNetAugEnrichmentConfig.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        DataEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityEnrichment) {
            writer.writeMessage(1, instance.entityEnrichment, EntityEnrichmentConfig.toBinaryWriter);
        }
        if (instance.thesaurusEnrichment) {
            writer.writeMessage(2, instance.thesaurusEnrichment, ThesaurusEnrichmentConfig.toBinaryWriter);
        }
        if (instance.word2vecEnrichment) {
            writer.writeMessage(3, instance.word2vecEnrichment, Word2VecEnrichmentConfig.toBinaryWriter);
        }
        if (instance.wordNetEnrichment) {
            writer.writeMessage(4, instance.wordNetEnrichment, WordNetAugEnrichmentConfig.toBinaryWriter);
        }
        if (instance.gpt2Enrichment) {
            writer.writeMessage(5, instance.gpt2Enrichment, GPT2EnrichmentConfig.toBinaryWriter);
        }
        if (instance.gloveEnrichment) {
            writer.writeMessage(6, instance.gloveEnrichment, GloVeEnrichmentConfig.toBinaryWriter);
        }
        if (instance.fasttextEnrichment) {
            writer.writeMessage(7, instance.fasttextEnrichment, FastTextEnrichmentConfig.toBinaryWriter);
        }
        if (instance.bertEnrichment) {
            writer.writeMessage(8, instance.bertEnrichment, BertAugEnrichmentConfig.toBinaryWriter);
        }
        if (instance.xlnetEnrichment) {
            writer.writeMessage(9, instance.xlnetEnrichment, XLNetAugEnrichmentConfig.toBinaryWriter);
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
    get fasttextEnrichment() {
        return this._fasttextEnrichment;
    }
    set fasttextEnrichment(value) {
        this._fasttextEnrichment = value;
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
            fasttextEnrichment: this.fasttextEnrichment
                ? this.fasttextEnrichment.toObject()
                : undefined,
            bertEnrichment: this.bertEnrichment
                ? this.bertEnrichment.toObject()
                : undefined,
            xlnetEnrichment: this.xlnetEnrichment
                ? this.xlnetEnrichment.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EntityEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        EntityEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityEnrichmentConfig();
        EntityEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ThesaurusEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param ThesaurusEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        ThesaurusEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ThesaurusEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ThesaurusEnrichmentConfig();
        ThesaurusEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        ThesaurusEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class FastTextEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param FastTextEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        FastTextEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FastTextEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FastTextEnrichmentConfig();
        FastTextEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        FastTextEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BertAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param BertAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        BertAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BertAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BertAugEnrichmentConfig();
        BertAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        BertAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GloVeEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param GloVeEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        GloVeEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GloVeEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GloVeEnrichmentConfig();
        GloVeEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        GloVeEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GPT2EnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param GPT2EnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        GPT2EnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GPT2EnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GPT2EnrichmentConfig();
        GPT2EnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        GPT2EnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class Word2VecEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param Word2VecEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        Word2VecEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Word2VecEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Word2VecEnrichmentConfig();
        Word2VecEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        Word2VecEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class WordNetAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param WordNetAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        WordNetAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WordNetAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WordNetAugEnrichmentConfig();
        WordNetAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        WordNetAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class XLNetAugEnrichmentConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param XLNetAugEnrichmentConfig value
     */
    constructor(value) {
        value = value || {};
        this.isActive = value.isActive;
        this.enrichmentFactor = value.enrichmentFactor;
        this.executionOrder = value.executionOrder;
        XLNetAugEnrichmentConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        XLNetAugEnrichmentConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new XLNetAugEnrichmentConfig();
        XLNetAugEnrichmentConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isActive = instance.isActive || false;
        instance.enrichmentFactor = instance.enrichmentFactor || 0;
        instance.executionOrder = instance.executionOrder || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isActive = reader.readBool();
                    break;
                case 2:
                    instance.enrichmentFactor = reader.readInt32();
                    break;
                case 3:
                    instance.executionOrder = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        XLNetAugEnrichmentConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isActive) {
            writer.writeBool(1, instance.isActive);
        }
        if (instance.enrichmentFactor) {
            writer.writeInt32(2, instance.enrichmentFactor);
        }
        if (instance.executionOrder) {
            writer.writeInt32(3, instance.executionOrder);
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
    toObject() {
        return {
            isActive: this.isActive,
            enrichmentFactor: this.enrichmentFactor,
            executionOrder: this.executionOrder
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlzZXJ2aWNlcy5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2Fpc2VydmljZXMucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE1BQU0sT0FBTyxzQkFBc0I7SUErRGpDOzs7T0FHRztJQUNILFlBQVksS0FBZ0Q7UUFDMUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF4RUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFnQztRQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQzlDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWdDO1FBQ2xE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QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksZ0JBQWdCLENBQUMsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5leHBvcnQgY2xhc3MgRXh0cmFjdEVudGl0aWVzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEV4dHJhY3RFbnRpdGllc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXh0cmFjdEVudGl0aWVzUmVxdWVzdCgpO1xuICAgIEV4dHJhY3RFbnRpdGllc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UudGV4dCA9IGluc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudGV4dCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFeHRyYWN0RW50aXRpZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEV4dHJhY3RFbnRpdGllc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50ZXh0KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UudGV4dCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRXh0cmFjdEVudGl0aWVzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4dHJhY3RFbnRpdGllc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZS50ZXh0O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIEV4dHJhY3RFbnRpdGllc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4dHJhY3RFbnRpdGllc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBFeHRyYWN0RW50aXRpZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFeHRyYWN0RW50aXRpZXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHRyYWN0RW50aXRpZXNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFeHRyYWN0RW50aXRpZXNSZXNwb25zZSgpO1xuICAgIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFeHRyYWN0RW50aXRpZXNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmVudGl0aWVzID0gaW5zdGFuY2UuZW50aXRpZXMgfHwgW107XG4gICAgaW5zdGFuY2UudGV4dCA9IGluc3RhbmNlLnRleHQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5lbnRpdGllcyA9IGluc3RhbmNlLmVudGl0aWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS50ZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRXh0cmFjdEVudGl0aWVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmVudGl0aWVzICYmIGluc3RhbmNlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdGllcyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudGV4dCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0aWVzPzogb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXTtcbiAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEV4dHJhY3RFbnRpdGllc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXh0cmFjdEVudGl0aWVzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0aWVzID0gKHZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDEuSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eShtKVxuICAgICk7XG4gICAgdGhpcy50ZXh0ID0gdmFsdWUudGV4dDtcbiAgICBFeHRyYWN0RW50aXRpZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0aWVzKCk6IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcztcbiAgfVxuICBzZXQgZW50aXRpZXModmFsdWU6IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cbiAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXRpZXM6ICh0aGlzLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgdGV4dDogdGhpcy50ZXh0XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFeHRyYWN0RW50aXRpZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdCgpO1xuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UuY29uZmlnID0gaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5zZW50ZW5jZSA9IGluc3RhbmNlLnNlbnRlbmNlIHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UucHJvdGVjdGVkV29yZHMgPSBpbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXTtcbiAgICBpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlID0gaW5zdGFuY2Uud29yZHNUb0NoYW5nZSB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWcgPSBuZXcgRGF0YUVucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5jb25maWcsXG4gICAgICAgICAgICBEYXRhRW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNlbnRlbmNlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgKGluc3RhbmNlLnByb3RlY3RlZFdvcmRzID0gaW5zdGFuY2UucHJvdGVjdGVkV29yZHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIChpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlID0gaW5zdGFuY2Uud29yZHNUb0NoYW5nZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIERhdGFFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2VudGVuY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5zZW50ZW5jZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnByb3RlY3RlZFdvcmRzICYmIGluc3RhbmNlLnByb3RlY3RlZFdvcmRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNiwgaW5zdGFuY2UucHJvdGVjdGVkV29yZHMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uud29yZHNUb0NoYW5nZSAmJiBpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNywgaW5zdGFuY2Uud29yZHNUb0NoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnPzogRGF0YUVucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3NlbnRlbmNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJvdGVjdGVkV29yZHM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd29yZHNUb0NoYW5nZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jb25maWcgPSB2YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKHZhbHVlLmNvbmZpZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VudGVuY2UgPSB2YWx1ZS5zZW50ZW5jZTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLnByb3RlY3RlZFdvcmRzID0gKHZhbHVlLnByb3RlY3RlZFdvcmRzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMud29yZHNUb0NoYW5nZSA9ICh2YWx1ZS53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5zbGljZSgpO1xuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbHVlOiBEYXRhRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIGdldCBzZW50ZW5jZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZW50ZW5jZTtcbiAgfVxuICBzZXQgc2VudGVuY2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NlbnRlbmNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByb3RlY3RlZFdvcmRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdGVjdGVkV29yZHM7XG4gIH1cbiAgc2V0IHByb3RlY3RlZFdvcmRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Byb3RlY3RlZFdvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmRzVG9DaGFuZ2UoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jkc1RvQ2hhbmdlO1xuICB9XG4gIHNldCB3b3Jkc1RvQ2hhbmdlKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dvcmRzVG9DaGFuZ2UgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzZW50ZW5jZTogdGhpcy5zZW50ZW5jZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgcHJvdGVjdGVkV29yZHM6ICh0aGlzLnByb3RlY3RlZFdvcmRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgd29yZHNUb0NoYW5nZTogKHRoaXMud29yZHNUb0NoYW5nZSB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QoKTtcbiAgICBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLm5SZXBlYXRTeW5vbnltID0gaW5zdGFuY2UublJlcGVhdFN5bm9ueW0gfHwgMDtcbiAgICBpbnN0YW5jZS5icmFuY2ggPSBpbnN0YW5jZS5icmFuY2ggfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLm5SZXBlYXRTeW5vbnltID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaW5zdGFuY2UuYnJhbmNoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDYsIGluc3RhbmNlLm5SZXBlYXRTeW5vbnltKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmJyYW5jaCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDgsIGluc3RhbmNlLmJyYW5jaCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX25SZXBlYXRTeW5vbnltPzogbnVtYmVyO1xuICBwcml2YXRlIF9icmFuY2g/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZW5lcmF0ZVVzZXJTYXlzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5uUmVwZWF0U3lub255bSA9IHZhbHVlLm5SZXBlYXRTeW5vbnltO1xuICAgIHRoaXMuYnJhbmNoID0gdmFsdWUuYnJhbmNoO1xuICAgIEdlbmVyYXRlVXNlclNheXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgblJlcGVhdFN5bm9ueW0oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fblJlcGVhdFN5bm9ueW07XG4gIH1cbiAgc2V0IG5SZXBlYXRTeW5vbnltKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uUmVwZWF0U3lub255bSA9IHZhbHVlO1xuICB9XG4gIGdldCBicmFuY2goKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmNoO1xuICB9XG4gIHNldCBicmFuY2godmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JyYW5jaCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5SZXBlYXRTeW5vbnltOiB0aGlzLm5SZXBlYXRTeW5vbnltLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2VuZXJhdGVVc2VyU2F5c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QoKTtcbiAgICBHZW5lcmF0ZVJlc3BvbnNlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UublJlcGVhdFN5bm9ueW0gPSBpbnN0YW5jZS5uUmVwZWF0U3lub255bSB8fCAwO1xuICAgIGluc3RhbmNlLmJyYW5jaCA9IGluc3RhbmNlLmJyYW5jaCB8fCAnJztcbiAgICBpbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMgPSBpbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5uUmVwZWF0U3lub255bSA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGluc3RhbmNlLmJyYW5jaCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBpbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDUsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uUmVwZWF0U3lub255bSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoNywgaW5zdGFuY2UublJlcGVhdFN5bm9ueW0pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYnJhbmNoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoOCwgaW5zdGFuY2UuYnJhbmNoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRyb3BVbmtub3duUGFyYW1ldGVycykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg5LCBpbnN0YW5jZS5kcm9wVW5rbm93blBhcmFtZXRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9uUmVwZWF0U3lub255bT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfYnJhbmNoPzogc3RyaW5nO1xuICBwcml2YXRlIF9kcm9wVW5rbm93blBhcmFtZXRlcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2VuZXJhdGVSZXNwb25zZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5uUmVwZWF0U3lub255bSA9IHZhbHVlLm5SZXBlYXRTeW5vbnltO1xuICAgIHRoaXMuYnJhbmNoID0gdmFsdWUuYnJhbmNoO1xuICAgIHRoaXMuZHJvcFVua25vd25QYXJhbWV0ZXJzID0gdmFsdWUuZHJvcFVua25vd25QYXJhbWV0ZXJzO1xuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5SZXBlYXRTeW5vbnltKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25SZXBlYXRTeW5vbnltO1xuICB9XG4gIHNldCBuUmVwZWF0U3lub255bSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fblJlcGVhdFN5bm9ueW0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnJhbmNoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaDtcbiAgfVxuICBzZXQgYnJhbmNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9icmFuY2ggPSB2YWx1ZTtcbiAgfVxuICBnZXQgZHJvcFVua25vd25QYXJhbWV0ZXJzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kcm9wVW5rbm93blBhcmFtZXRlcnM7XG4gIH1cbiAgc2V0IGRyb3BVbmtub3duUGFyYW1ldGVycyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Ryb3BVbmtub3duUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5SZXBlYXRTeW5vbnltOiB0aGlzLm5SZXBlYXRTeW5vbnltLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaCxcbiAgICAgIGRyb3BVbmtub3duUGFyYW1ldGVyczogdGhpcy5kcm9wVW5rbm93blBhcmFtZXRlcnNcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdlbmVyYXRlUmVzcG9uc2VzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCgpO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UuY29uZmlnID0gaW5zdGFuY2UuY29uZmlnIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZSA9IGluc3RhbmNlLnRyYWluaW5nUGhyYXNlIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5pbnRlbnROYW1lID0gaW5zdGFuY2UuaW50ZW50TmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmRldGVjdEVudGl0aWVzID0gaW5zdGFuY2UuZGV0ZWN0RW50aXRpZXMgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2Uuc2ltaWxhcml0eVRocmVzaG9sZCA9IGluc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQgfHwgMDtcbiAgICBpbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyA9IGluc3RhbmNlLnByb3RlY3RlZFdvcmRzIHx8IFtdO1xuICAgIGluc3RhbmNlLndvcmRzVG9DaGFuZ2UgPSBpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlIHx8IFtdO1xuICAgIGluc3RhbmNlLmJyYW5jaCA9IGluc3RhbmNlLmJyYW5jaCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWcgPSBuZXcgRGF0YUVucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5jb25maWcsXG4gICAgICAgICAgICBEYXRhRW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlID0gbmV3IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5pbnRlbnROYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuZGV0ZWN0RW50aXRpZXMgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAoaW5zdGFuY2UucHJvdGVjdGVkV29yZHMgPSBpbnN0YW5jZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgKGluc3RhbmNlLndvcmRzVG9DaGFuZ2UgPSBpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgaW5zdGFuY2UuYnJhbmNoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuY29uZmlnKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5jb25maWcgYXMgYW55LFxuICAgICAgICBEYXRhRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRyYWluaW5nUGhyYXNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZSBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnROYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuaW50ZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRldGVjdEVudGl0aWVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDYsIGluc3RhbmNlLmRldGVjdEVudGl0aWVzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDcsIGluc3RhbmNlLnNpbWlsYXJpdHlUaHJlc2hvbGQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucHJvdGVjdGVkV29yZHMgJiYgaW5zdGFuY2UucHJvdGVjdGVkV29yZHMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg4LCBpbnN0YW5jZS5wcm90ZWN0ZWRXb3Jkcyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlICYmIGluc3RhbmNlLndvcmRzVG9DaGFuZ2UubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg5LCBpbnN0YW5jZS53b3Jkc1RvQ2hhbmdlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmJyYW5jaCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEwLCBpbnN0YW5jZS5icmFuY2gpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZz86IERhdGFFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZT86IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2U7XG4gIHByaXZhdGUgX2ludGVudE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9kZXRlY3RFbnRpdGllcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX3NpbWlsYXJpdHlUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3Byb3RlY3RlZFdvcmRzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3dvcmRzVG9DaGFuZ2U/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfYnJhbmNoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jb25maWcgPSB2YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKHZhbHVlLmNvbmZpZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2UgPSB2YWx1ZS50cmFpbmluZ1BocmFzZVxuICAgICAgPyBuZXcgb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZSh2YWx1ZS50cmFpbmluZ1BocmFzZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50TmFtZSA9IHZhbHVlLmludGVudE5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5kZXRlY3RFbnRpdGllcyA9IHZhbHVlLmRldGVjdEVudGl0aWVzO1xuICAgIHRoaXMuc2ltaWxhcml0eVRocmVzaG9sZCA9IHZhbHVlLnNpbWlsYXJpdHlUaHJlc2hvbGQ7XG4gICAgdGhpcy5wcm90ZWN0ZWRXb3JkcyA9ICh2YWx1ZS5wcm90ZWN0ZWRXb3JkcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLndvcmRzVG9DaGFuZ2UgPSAodmFsdWUud29yZHNUb0NoYW5nZSB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmJyYW5jaCA9IHZhbHVlLmJyYW5jaDtcbiAgICBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjb25maWcoKTogRGF0YUVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWx1ZTogRGF0YUVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2UoKTogb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZSh2YWx1ZTogb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50TmFtZTtcbiAgfVxuICBzZXQgaW50ZW50TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXRlY3RFbnRpdGllcygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGV0ZWN0RW50aXRpZXM7XG4gIH1cbiAgc2V0IGRldGVjdEVudGl0aWVzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGV0ZWN0RW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2ltaWxhcml0eVRocmVzaG9sZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zaW1pbGFyaXR5VGhyZXNob2xkO1xuICB9XG4gIHNldCBzaW1pbGFyaXR5VGhyZXNob2xkKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaW1pbGFyaXR5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByb3RlY3RlZFdvcmRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdGVjdGVkV29yZHM7XG4gIH1cbiAgc2V0IHByb3RlY3RlZFdvcmRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Byb3RlY3RlZFdvcmRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmRzVG9DaGFuZ2UoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3Jkc1RvQ2hhbmdlO1xuICB9XG4gIHNldCB3b3Jkc1RvQ2hhbmdlKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dvcmRzVG9DaGFuZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnJhbmNoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaDtcbiAgfVxuICBzZXQgYnJhbmNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9icmFuY2ggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICB0cmFpbmluZ1BocmFzZTogdGhpcy50cmFpbmluZ1BocmFzZVxuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudE5hbWU6IHRoaXMuaW50ZW50TmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgZGV0ZWN0RW50aXRpZXM6IHRoaXMuZGV0ZWN0RW50aXRpZXMsXG4gICAgICBzaW1pbGFyaXR5VGhyZXNob2xkOiB0aGlzLnNpbWlsYXJpdHlUaHJlc2hvbGQsXG4gICAgICBwcm90ZWN0ZWRXb3JkczogKHRoaXMucHJvdGVjdGVkV29yZHMgfHwgW10pLnNsaWNlKCksXG4gICAgICB3b3Jkc1RvQ2hhbmdlOiAodGhpcy53b3Jkc1RvQ2hhbmdlIHx8IFtdKS5zbGljZSgpLFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgR2V0U3lub255bXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRTeW5vbnltc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0U3lub255bXNSZXF1ZXN0KCk7XG4gICAgR2V0U3lub255bXNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRTeW5vbnltc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5jb25maWcgPSBpbnN0YW5jZS5jb25maWcgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLndvcmQgPSBpbnN0YW5jZS53b3JkIHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2V0U3lub255bXNSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuY29uZmlnID0gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuY29uZmlnLFxuICAgICAgICAgICAgRGF0YUVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS53b3JkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRTeW5vbnltc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0U3lub255bXNSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5jb25maWcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmNvbmZpZyBhcyBhbnksXG4gICAgICAgIERhdGFFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uud29yZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLndvcmQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDUsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnPzogRGF0YUVucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3dvcmQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0U3lub255bXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0U3lub255bXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jb25maWcgPSB2YWx1ZS5jb25maWdcbiAgICAgID8gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKHZhbHVlLmNvbmZpZylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMud29yZCA9IHZhbHVlLndvcmQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgR2V0U3lub255bXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29uZmlnKCk6IERhdGFFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IERhdGFFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZDtcbiAgfVxuICBzZXQgd29yZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd29yZCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHdvcmQ6IHRoaXMud29yZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTeW5vbnltc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBHZXRTeW5vbnltc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdldFN5bm9ueW1zUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0U3lub255bXNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRTeW5vbnltc1Jlc3BvbnNlKCk7XG4gICAgR2V0U3lub255bXNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0U3lub255bXNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnN5bm9ueW1zID0gaW5zdGFuY2Uuc3lub255bXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2V0U3lub255bXNSZXNwb25zZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgU3lub255bSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBTeW5vbnltLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5zeW5vbnltcyA9IGluc3RhbmNlLnN5bm9ueW1zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFN5bm9ueW1zUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0U3lub255bXNSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2Uuc3lub255bXMgJiYgaW5zdGFuY2Uuc3lub255bXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLnN5bm9ueW1zIGFzIGFueSxcbiAgICAgICAgU3lub255bS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zeW5vbnltcz86IFN5bm9ueW1bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEdldFN5bm9ueW1zUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRTeW5vbnltc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zeW5vbnltcyA9ICh2YWx1ZS5zeW5vbnltcyB8fCBbXSkubWFwKG0gPT4gbmV3IFN5bm9ueW0obSkpO1xuICAgIEdldFN5bm9ueW1zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW5vbnltcygpOiBTeW5vbnltW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zeW5vbnltcztcbiAgfVxuICBzZXQgc3lub255bXModmFsdWU6IFN5bm9ueW1bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N5bm9ueW1zID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5bm9ueW1zOiAodGhpcy5zeW5vbnltcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0U3lub255bXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFN5bm9ueW0gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU3lub255bSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTeW5vbnltLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN5bm9ueW0oKTtcbiAgICBTeW5vbnltLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTeW5vbnltKSB7XG4gICAgaW5zdGFuY2Uuc3lub255bSA9IGluc3RhbmNlLnN5bm9ueW0gfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2NvcmUgPSBpbnN0YW5jZS5zY29yZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFN5bm9ueW0sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zeW5vbnltID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNjb3JlID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTeW5vbnltLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFN5bm9ueW0sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnN5bm9ueW0pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zeW5vbnltKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNjb3JlKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5zY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3lub255bT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NvcmU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTeW5vbnltIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3lub255bT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3lub255bSA9IHZhbHVlLnN5bm9ueW07XG4gICAgdGhpcy5zY29yZSA9IHZhbHVlLnNjb3JlO1xuICAgIFN5bm9ueW0ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzeW5vbnltKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bm9ueW07XG4gIH1cbiAgc2V0IHN5bm9ueW0odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N5bm9ueW0gPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzeW5vbnltOiB0aGlzLnN5bm9ueW0sXG4gICAgICBzY29yZTogdGhpcy5zY29yZVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU3lub255bSB7fVxuZXhwb3J0IGNsYXNzIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UoKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgPSBpbnN0YW5jZS5hbHRlcm5hdGl2ZVNlbnRlbmNlcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVNlbnRlbmNlc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBBbHRTZW50ZW5jZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBBbHRTZW50ZW5jZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICAoaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgPVxuICAgICAgICAgICAgaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgJiYgaW5zdGFuY2UuYWx0ZXJuYXRpdmVTZW50ZW5jZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmFsdGVybmF0aXZlU2VudGVuY2VzIGFzIGFueSxcbiAgICAgICAgQWx0U2VudGVuY2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWx0ZXJuYXRpdmVTZW50ZW5jZXM/OiBBbHRTZW50ZW5jZVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldEFsdGVybmF0aXZlU2VudGVuY2VzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFsdGVybmF0aXZlU2VudGVuY2VzID0gKHZhbHVlLmFsdGVybmF0aXZlU2VudGVuY2VzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBBbHRTZW50ZW5jZShtKVxuICAgICk7XG4gICAgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFsdGVybmF0aXZlU2VudGVuY2VzKCk6IEFsdFNlbnRlbmNlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbHRlcm5hdGl2ZVNlbnRlbmNlcztcbiAgfVxuICBzZXQgYWx0ZXJuYXRpdmVTZW50ZW5jZXModmFsdWU6IEFsdFNlbnRlbmNlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbHRlcm5hdGl2ZVNlbnRlbmNlcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbHRlcm5hdGl2ZVNlbnRlbmNlczogKHRoaXMuYWx0ZXJuYXRpdmVTZW50ZW5jZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWx0ZXJuYXRpdmVTZW50ZW5jZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UoKTtcbiAgICBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UucmVzcG9uc2VzID0gaW5zdGFuY2UucmVzcG9uc2VzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoaW5zdGFuY2UucmVzcG9uc2VzID0gaW5zdGFuY2UucmVzcG9uc2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdlbmVyYXRlUmVzcG9uc2VzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogR2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucmVzcG9uc2VzICYmIGluc3RhbmNlLnJlc3BvbnNlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIGluc3RhbmNlLnJlc3BvbnNlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzcG9uc2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2VuZXJhdGVSZXNwb25zZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmVzcG9uc2VzID0gKHZhbHVlLnJlc3BvbnNlcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcmVzcG9uc2VzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VzO1xuICB9XG4gIHNldCByZXNwb25zZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlczogKHRoaXMucmVzcG9uc2VzIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZW5lcmF0ZVJlc3BvbnNlc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlKCk7XG4gICAgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS51c2VyU2F5cyA9IGluc3RhbmNlLnVzZXJTYXlzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdlbmVyYXRlVXNlclNheXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS51c2VyU2F5cyA9IGluc3RhbmNlLnVzZXJTYXlzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnVzZXJTYXlzICYmIGluc3RhbmNlLnVzZXJTYXlzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UudXNlclNheXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJTYXlzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZW5lcmF0ZVVzZXJTYXlzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXJTYXlzID0gKHZhbHVlLnVzZXJTYXlzIHx8IFtdKS5zbGljZSgpO1xuICAgIEdlbmVyYXRlVXNlclNheXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZXJTYXlzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclNheXM7XG4gIH1cbiAgc2V0IHVzZXJTYXlzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXJTYXlzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJTYXlzOiAodGhpcy51c2VyU2F5cyB8fCBbXSkuc2xpY2UoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2VuZXJhdGVVc2VyU2F5c1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSgpO1xuICAgIEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEdldEFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyA9XG4gICAgICBpbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBBbHRUcmFpbmluZ1BocmFzZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBBbHRUcmFpbmluZ1BocmFzZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgPVxuICAgICAgICAgICAgaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLmFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzICYmXG4gICAgICBpbnN0YW5jZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgYXMgYW55LFxuICAgICAgICBBbHRUcmFpbmluZ1BocmFzZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcz86IEFsdFRyYWluaW5nUGhyYXNlW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgPSAoXG4gICAgICB2YWx1ZS5hbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyB8fCBbXVxuICAgICkubWFwKG0gPT4gbmV3IEFsdFRyYWluaW5nUGhyYXNlKG0pKTtcbiAgICBHZXRBbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMoKTogQWx0VHJhaW5pbmdQaHJhc2VbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzO1xuICB9XG4gIHNldCBhbHRlcm5hdGl2ZVRyYWluaW5nUGhyYXNlcyh2YWx1ZTogQWx0VHJhaW5pbmdQaHJhc2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsdGVybmF0aXZlVHJhaW5pbmdQaHJhc2VzOiAoXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXMgfHwgW11cbiAgICAgICkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWx0ZXJuYXRpdmVUcmFpbmluZ1BocmFzZXNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEFsdFNlbnRlbmNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFsdFNlbnRlbmNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFsdFNlbnRlbmNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFsdFNlbnRlbmNlKCk7XG4gICAgQWx0U2VudGVuY2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEFsdFNlbnRlbmNlKSB7XG4gICAgaW5zdGFuY2Uuc2VudGVuY2UgPSBpbnN0YW5jZS5zZW50ZW5jZSB8fCAnJztcbiAgICBpbnN0YW5jZS5zY29yZSA9IGluc3RhbmNlLnNjb3JlIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQWx0U2VudGVuY2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zZW50ZW5jZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zY29yZSA9IHJlYWRlci5yZWFkRmxvYXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWx0U2VudGVuY2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQWx0U2VudGVuY2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlbnRlbmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uuc2VudGVuY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2NvcmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUZsb2F0KDIsIGluc3RhbmNlLnNjb3JlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZW50ZW5jZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2NvcmU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBBbHRTZW50ZW5jZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFsdFNlbnRlbmNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZW50ZW5jZSA9IHZhbHVlLnNlbnRlbmNlO1xuICAgIHRoaXMuc2NvcmUgPSB2YWx1ZS5zY29yZTtcbiAgICBBbHRTZW50ZW5jZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlbnRlbmNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbnRlbmNlO1xuICB9XG4gIHNldCBzZW50ZW5jZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2VudGVuY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZW50ZW5jZTogdGhpcy5zZW50ZW5jZSxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbHRTZW50ZW5jZSB7fVxuZXhwb3J0IGNsYXNzIEFsdFRyYWluaW5nUGhyYXNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFsdFRyYWluaW5nUGhyYXNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFsdFRyYWluaW5nUGhyYXNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFsdFRyYWluaW5nUGhyYXNlKCk7XG4gICAgQWx0VHJhaW5pbmdQaHJhc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEFsdFRyYWluaW5nUGhyYXNlKSB7XG4gICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgPSBpbnN0YW5jZS50cmFpbmluZ1BocmFzZSB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uuc2NvcmUgPSBpbnN0YW5jZS5zY29yZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEFsdFRyYWluaW5nUGhyYXNlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UgPSBuZXcgb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNjb3JlID0gcmVhZGVyLnJlYWRGbG9hdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBbHRUcmFpbmluZ1BocmFzZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBBbHRUcmFpbmluZ1BocmFzZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2UpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlIGFzIGFueSxcbiAgICAgICAgb25kZXdvTmx1MDAxLkludGVudC5UcmFpbmluZ1BocmFzZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNjb3JlKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCgyLCBpbnN0YW5jZS5zY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2U/OiBvbmRld29ObHUwMDEuSW50ZW50LlRyYWluaW5nUGhyYXNlO1xuICBwcml2YXRlIF9zY29yZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEFsdFRyYWluaW5nUGhyYXNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWx0VHJhaW5pbmdQaHJhc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlID0gdmFsdWUudHJhaW5pbmdQaHJhc2VcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwMS5JbnRlbnQuVHJhaW5pbmdQaHJhc2UodmFsdWUudHJhaW5pbmdQaHJhc2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjb3JlID0gdmFsdWUuc2NvcmU7XG4gICAgQWx0VHJhaW5pbmdQaHJhc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZSgpOiBvbmRld29ObHUwMDEuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2U7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlKHZhbHVlOiBvbmRld29ObHUwMDEuSW50ZW50LlRyYWluaW5nUGhyYXNlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cbiAgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zY29yZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFpbmluZ1BocmFzZTogdGhpcy50cmFpbmluZ1BocmFzZVxuICAgICAgICA/IHRoaXMudHJhaW5pbmdQaHJhc2UudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBbHRUcmFpbmluZ1BocmFzZSB7fVxuZXhwb3J0IGNsYXNzIERhdGFFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IERhdGFFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERhdGFFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERhdGFFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgRGF0YUVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IERhdGFFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgaW5zdGFuY2UuZW50aXR5RW5yaWNobWVudCA9IGluc3RhbmNlLmVudGl0eUVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnRoZXNhdXJ1c0VucmljaG1lbnQgPSBpbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQgPSBpbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLndvcmROZXRFbnJpY2htZW50ID0gaW5zdGFuY2Uud29yZE5ldEVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmdwdDJFbnJpY2htZW50ID0gaW5zdGFuY2UuZ3B0MkVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmdsb3ZlRW5yaWNobWVudCA9IGluc3RhbmNlLmdsb3ZlRW5yaWNobWVudCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuZmFzdHRleHRFbnJpY2htZW50ID0gaW5zdGFuY2UuZmFzdHRleHRFbnJpY2htZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5iZXJ0RW5yaWNobWVudCA9IGluc3RhbmNlLmJlcnRFbnJpY2htZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS54bG5ldEVucmljaG1lbnQgPSBpbnN0YW5jZS54bG5ldEVucmljaG1lbnQgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IERhdGFFbnJpY2htZW50Q29uZmlnLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuZW50aXR5RW5yaWNobWVudCA9IG5ldyBFbnRpdHlFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZW50aXR5RW5yaWNobWVudCxcbiAgICAgICAgICAgIEVudGl0eUVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50ID0gbmV3IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS50aGVzYXVydXNFbnJpY2htZW50LFxuICAgICAgICAgICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLndvcmQydmVjRW5yaWNobWVudCA9IG5ldyBXb3JkMlZlY0VucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQsXG4gICAgICAgICAgICBXb3JkMlZlY0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS53b3JkTmV0RW5yaWNobWVudCA9IG5ldyBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLndvcmROZXRFbnJpY2htZW50LFxuICAgICAgICAgICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5ncHQyRW5yaWNobWVudCA9IG5ldyBHUFQyRW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmdwdDJFbnJpY2htZW50LFxuICAgICAgICAgICAgR1BUMkVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5nbG92ZUVucmljaG1lbnQgPSBuZXcgR2xvVmVFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZ2xvdmVFbnJpY2htZW50LFxuICAgICAgICAgICAgR2xvVmVFbnJpY2htZW50Q29uZmlnLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UuZmFzdHRleHRFbnJpY2htZW50ID0gbmV3IEZhc3RUZXh0RW5yaWNobWVudENvbmZpZygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmZhc3R0ZXh0RW5yaWNobWVudCxcbiAgICAgICAgICAgIEZhc3RUZXh0RW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIGluc3RhbmNlLmJlcnRFbnJpY2htZW50ID0gbmV3IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuYmVydEVucmljaG1lbnQsXG4gICAgICAgICAgICBCZXJ0QXVnRW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGluc3RhbmNlLnhsbmV0RW5yaWNobWVudCA9IG5ldyBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS54bG5ldEVucmljaG1lbnQsXG4gICAgICAgICAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERhdGFFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IERhdGFFbnJpY2htZW50Q29uZmlnLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5lbnRpdHlFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlFbnJpY2htZW50IGFzIGFueSxcbiAgICAgICAgRW50aXR5RW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnRoZXNhdXJ1c0VucmljaG1lbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnRoZXNhdXJ1c0VucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uud29yZDJ2ZWNFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS53b3JkMnZlY0VucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBXb3JkMlZlY0VucmljaG1lbnRDb25maWcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53b3JkTmV0RW5yaWNobWVudCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2Uud29yZE5ldEVucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmdwdDJFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBpbnN0YW5jZS5ncHQyRW5yaWNobWVudCBhcyBhbnksXG4gICAgICAgIEdQVDJFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZ2xvdmVFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBpbnN0YW5jZS5nbG92ZUVucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBHbG9WZUVucmljaG1lbnRDb25maWcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5mYXN0dGV4dEVucmljaG1lbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIGluc3RhbmNlLmZhc3R0ZXh0RW5yaWNobWVudCBhcyBhbnksXG4gICAgICAgIEZhc3RUZXh0RW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmJlcnRFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA4LFxuICAgICAgICBpbnN0YW5jZS5iZXJ0RW5yaWNobWVudCBhcyBhbnksXG4gICAgICAgIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UueGxuZXRFbnJpY2htZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBpbnN0YW5jZS54bG5ldEVucmljaG1lbnQgYXMgYW55LFxuICAgICAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5RW5yaWNobWVudD86IEVudGl0eUVucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3RoZXNhdXJ1c0VucmljaG1lbnQ/OiBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF93b3JkMnZlY0VucmljaG1lbnQ/OiBXb3JkMlZlY0VucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX3dvcmROZXRFbnJpY2htZW50PzogV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX2dwdDJFbnJpY2htZW50PzogR1BUMkVucmljaG1lbnRDb25maWc7XG4gIHByaXZhdGUgX2dsb3ZlRW5yaWNobWVudD86IEdsb1ZlRW5yaWNobWVudENvbmZpZztcbiAgcHJpdmF0ZSBfZmFzdHRleHRFbnJpY2htZW50PzogRmFzdFRleHRFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF9iZXJ0RW5yaWNobWVudD86IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnO1xuICBwcml2YXRlIF94bG5ldEVucmljaG1lbnQ/OiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEYXRhRW5yaWNobWVudENvbmZpZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERhdGFFbnJpY2htZW50Q29uZmlnPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5lbnRpdHlFbnJpY2htZW50ID0gdmFsdWUuZW50aXR5RW5yaWNobWVudFxuICAgICAgPyBuZXcgRW50aXR5RW5yaWNobWVudENvbmZpZyh2YWx1ZS5lbnRpdHlFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50aGVzYXVydXNFbnJpY2htZW50ID0gdmFsdWUudGhlc2F1cnVzRW5yaWNobWVudFxuICAgICAgPyBuZXcgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyh2YWx1ZS50aGVzYXVydXNFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy53b3JkMnZlY0VucmljaG1lbnQgPSB2YWx1ZS53b3JkMnZlY0VucmljaG1lbnRcbiAgICAgID8gbmV3IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyh2YWx1ZS53b3JkMnZlY0VucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLndvcmROZXRFbnJpY2htZW50ID0gdmFsdWUud29yZE5ldEVucmljaG1lbnRcbiAgICAgID8gbmV3IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnKHZhbHVlLndvcmROZXRFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncHQyRW5yaWNobWVudCA9IHZhbHVlLmdwdDJFbnJpY2htZW50XG4gICAgICA/IG5ldyBHUFQyRW5yaWNobWVudENvbmZpZyh2YWx1ZS5ncHQyRW5yaWNobWVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZ2xvdmVFbnJpY2htZW50ID0gdmFsdWUuZ2xvdmVFbnJpY2htZW50XG4gICAgICA/IG5ldyBHbG9WZUVucmljaG1lbnRDb25maWcodmFsdWUuZ2xvdmVFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5mYXN0dGV4dEVucmljaG1lbnQgPSB2YWx1ZS5mYXN0dGV4dEVucmljaG1lbnRcbiAgICAgID8gbmV3IEZhc3RUZXh0RW5yaWNobWVudENvbmZpZyh2YWx1ZS5mYXN0dGV4dEVucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJlcnRFbnJpY2htZW50ID0gdmFsdWUuYmVydEVucmljaG1lbnRcbiAgICAgID8gbmV3IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKHZhbHVlLmJlcnRFbnJpY2htZW50KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy54bG5ldEVucmljaG1lbnQgPSB2YWx1ZS54bG5ldEVucmljaG1lbnRcbiAgICAgID8gbmV3IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyh2YWx1ZS54bG5ldEVucmljaG1lbnQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBEYXRhRW5yaWNobWVudENvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGVudGl0eUVucmljaG1lbnQoKTogRW50aXR5RW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eUVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IGVudGl0eUVucmljaG1lbnQodmFsdWU6IEVudGl0eUVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRoZXNhdXJ1c0VucmljaG1lbnQoKTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZXNhdXJ1c0VucmljaG1lbnQ7XG4gIH1cbiAgc2V0IHRoZXNhdXJ1c0VucmljaG1lbnQodmFsdWU6IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aGVzYXVydXNFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmQydmVjRW5yaWNobWVudCgpOiBXb3JkMlZlY0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93b3JkMnZlY0VucmljaG1lbnQ7XG4gIH1cbiAgc2V0IHdvcmQydmVjRW5yaWNobWVudCh2YWx1ZTogV29yZDJWZWNFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd29yZDJ2ZWNFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdvcmROZXRFbnJpY2htZW50KCk6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd29yZE5ldEVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IHdvcmROZXRFbnJpY2htZW50KHZhbHVlOiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dvcmROZXRFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdwdDJFbnJpY2htZW50KCk6IEdQVDJFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZ3B0MkVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IGdwdDJFbnJpY2htZW50KHZhbHVlOiBHUFQyRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2dwdDJFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGdsb3ZlRW5yaWNobWVudCgpOiBHbG9WZUVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9nbG92ZUVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IGdsb3ZlRW5yaWNobWVudCh2YWx1ZTogR2xvVmVFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZ2xvdmVFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZhc3R0ZXh0RW5yaWNobWVudCgpOiBGYXN0VGV4dEVucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mYXN0dGV4dEVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IGZhc3R0ZXh0RW5yaWNobWVudCh2YWx1ZTogRmFzdFRleHRFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZmFzdHRleHRFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGJlcnRFbnJpY2htZW50KCk6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYmVydEVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IGJlcnRFbnJpY2htZW50KHZhbHVlOiBCZXJ0QXVnRW5yaWNobWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JlcnRFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHhsbmV0RW5yaWNobWVudCgpOiBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl94bG5ldEVucmljaG1lbnQ7XG4gIH1cbiAgc2V0IHhsbmV0RW5yaWNobWVudCh2YWx1ZTogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5feGxuZXRFbnJpY2htZW50ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eUVucmljaG1lbnQ6IHRoaXMuZW50aXR5RW5yaWNobWVudFxuICAgICAgICA/IHRoaXMuZW50aXR5RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgdGhlc2F1cnVzRW5yaWNobWVudDogdGhpcy50aGVzYXVydXNFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy50aGVzYXVydXNFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB3b3JkMnZlY0VucmljaG1lbnQ6IHRoaXMud29yZDJ2ZWNFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy53b3JkMnZlY0VucmljaG1lbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHdvcmROZXRFbnJpY2htZW50OiB0aGlzLndvcmROZXRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy53b3JkTmV0RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgZ3B0MkVucmljaG1lbnQ6IHRoaXMuZ3B0MkVucmljaG1lbnRcbiAgICAgICAgPyB0aGlzLmdwdDJFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBnbG92ZUVucmljaG1lbnQ6IHRoaXMuZ2xvdmVFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy5nbG92ZUVucmljaG1lbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGZhc3R0ZXh0RW5yaWNobWVudDogdGhpcy5mYXN0dGV4dEVucmljaG1lbnRcbiAgICAgICAgPyB0aGlzLmZhc3R0ZXh0RW5yaWNobWVudC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgYmVydEVucmljaG1lbnQ6IHRoaXMuYmVydEVucmljaG1lbnRcbiAgICAgICAgPyB0aGlzLmJlcnRFbnJpY2htZW50LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB4bG5ldEVucmljaG1lbnQ6IHRoaXMueGxuZXRFbnJpY2htZW50XG4gICAgICAgID8gdGhpcy54bG5ldEVucmljaG1lbnQudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRGF0YUVucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBFbnRpdHlFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEVudGl0eUVucmljaG1lbnRDb25maWcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRW50aXR5RW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgRW50aXR5RW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRW50aXR5RW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRW50aXR5RW5yaWNobWVudENvbmZpZyxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlzQWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVudGl0eUVucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRW50aXR5RW5yaWNobWVudENvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBFbnRpdHlFbnJpY2htZW50Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RW50aXR5RW5yaWNobWVudENvbmZpZz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBY3RpdmUgPSB2YWx1ZS5pc0FjdGl2ZTtcbiAgICB0aGlzLmVucmljaG1lbnRGYWN0b3IgPSB2YWx1ZS5lbnJpY2htZW50RmFjdG9yO1xuICAgIHRoaXMuZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZS5leGVjdXRpb25PcmRlcjtcbiAgICBFbnRpdHlFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVudGl0eUVucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZy5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlzQWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogVGhlc2F1cnVzRW5yaWNobWVudENvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGhlc2F1cnVzRW5yaWNobWVudENvbmZpZz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNBY3RpdmUgPSB2YWx1ZS5pc0FjdGl2ZTtcbiAgICB0aGlzLmVucmljaG1lbnRGYWN0b3IgPSB2YWx1ZS5lbnJpY2htZW50RmFjdG9yO1xuICAgIHRoaXMuZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZS5leGVjdXRpb25PcmRlcjtcbiAgICBUaGVzYXVydXNFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFRoZXNhdXJ1c0VucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBGYXN0VGV4dEVucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRmFzdFRleHRFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEZhc3RUZXh0RW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBGYXN0VGV4dEVucmljaG1lbnRDb25maWcoKTtcbiAgICBGYXN0VGV4dEVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEZhc3RUZXh0RW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRmFzdFRleHRFbnJpY2htZW50Q29uZmlnLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaXNBY3RpdmUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRmFzdFRleHRFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEZhc3RUZXh0RW5yaWNobWVudENvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBGYXN0VGV4dEVucmljaG1lbnRDb25maWcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGYXN0VGV4dEVucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgRmFzdFRleHRFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEZhc3RUZXh0RW5yaWNobWVudENvbmZpZyB7fVxuZXhwb3J0IGNsYXNzIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgQmVydEF1Z0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgaW5zdGFuY2UuaXNBY3RpdmUgPSBpbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBCZXJ0QXVnRW5yaWNobWVudENvbmZpZyxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlzQWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEJlcnRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxLCBpbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigzLCBpbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9lbnJpY2htZW50RmFjdG9yPzogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcj86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEJlcnRBdWdFbnJpY2htZW50Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmVydEF1Z0VucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgQmVydEF1Z0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQmVydEF1Z0VucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBHbG9WZUVucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2xvVmVFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdsb1ZlRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHbG9WZUVucmljaG1lbnRDb25maWcoKTtcbiAgICBHbG9WZUVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEdsb1ZlRW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogR2xvVmVFbnJpY2htZW50Q29uZmlnLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaXNBY3RpdmUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2xvVmVFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdsb1ZlRW5yaWNobWVudENvbmZpZywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHbG9WZUVucmljaG1lbnRDb25maWcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHbG9WZUVucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgR2xvVmVFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdsb1ZlRW5yaWNobWVudENvbmZpZyB7fVxuZXhwb3J0IGNsYXNzIEdQVDJFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdQVDJFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdQVDJFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdQVDJFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgR1BUMkVucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEdQVDJFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgaW5zdGFuY2UuaXNBY3RpdmUgPSBpbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHUFQyRW5yaWNobWVudENvbmZpZyxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlzQWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdQVDJFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdQVDJFbnJpY2htZW50Q29uZmlnLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxLCBpbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigzLCBpbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9lbnJpY2htZW50RmFjdG9yPzogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcj86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEdQVDJFbnJpY2htZW50Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R1BUMkVucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgR1BUMkVucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR1BUMkVucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBXb3JkMlZlY0VucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogV29yZDJWZWNFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdvcmQyVmVjRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXb3JkMlZlY0VucmljaG1lbnRDb25maWcoKTtcbiAgICBXb3JkMlZlY0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaXNBY3RpdmUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBXb3JkMlZlY0VucmljaG1lbnRDb25maWcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXb3JkMlZlY0VucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgV29yZDJWZWNFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFdvcmQyVmVjRW5yaWNobWVudENvbmZpZyB7fVxuZXhwb3J0IGNsYXNzIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnKCk7XG4gICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgaW5zdGFuY2UuaXNBY3RpdmUgPSBpbnN0YW5jZS5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciB8fCAwO1xuICAgIGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyID0gaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBXb3JkTmV0QXVnRW5yaWNobWVudENvbmZpZyxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmlzQWN0aXZlID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5pc0FjdGl2ZSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxLCBpbnN0YW5jZS5pc0FjdGl2ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbnJpY2htZW50RmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyKSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMigzLCBpbnN0YW5jZS5leGVjdXRpb25PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNBY3RpdmU/OiBib29sZWFuO1xuICBwcml2YXRlIF9lbnJpY2htZW50RmFjdG9yPzogbnVtYmVyO1xuICBwcml2YXRlIF9leGVjdXRpb25PcmRlcj86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFdvcmROZXRBdWdFbnJpY2htZW50Q29uZmlnIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V29yZE5ldEF1Z0VucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5yaWNobWVudEZhY3RvcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnJpY2htZW50RmFjdG9yO1xuICB9XG4gIHNldCBlbnJpY2htZW50RmFjdG9yKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnJpY2htZW50RmFjdG9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGV4ZWN1dGlvbk9yZGVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbk9yZGVyO1xuICB9XG4gIHNldCBleGVjdXRpb25PcmRlcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uT3JkZXIgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUsXG4gICAgICBlbnJpY2htZW50RmFjdG9yOiB0aGlzLmVucmljaG1lbnRGYWN0b3IsXG4gICAgICBleGVjdXRpb25PcmRlcjogdGhpcy5leGVjdXRpb25PcmRlclxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV29yZE5ldEF1Z0VucmljaG1lbnRDb25maWcge31cbmV4cG9ydCBjbGFzcyBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFhMTmV0QXVnRW5yaWNobWVudENvbmZpZy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcoKTtcbiAgICBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZykge1xuICAgIGluc3RhbmNlLmlzQWN0aXZlID0gaW5zdGFuY2UuaXNBY3RpdmUgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZW5yaWNobWVudEZhY3RvciA9IGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgfHwgMDtcbiAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IGluc3RhbmNlLmV4ZWN1dGlvbk9yZGVyIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaXNBY3RpdmUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmVucmljaG1lbnRGYWN0b3IgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5leGVjdXRpb25PcmRlciA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNBY3RpdmUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UuZW5yaWNobWVudEZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leGVjdXRpb25PcmRlcikge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuZXhlY3V0aW9uT3JkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzQWN0aXZlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZW5yaWNobWVudEZhY3Rvcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBYTE5ldEF1Z0VucmljaG1lbnRDb25maWcgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxYTE5ldEF1Z0VucmljaG1lbnRDb25maWc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWUuaXNBY3RpdmU7XG4gICAgdGhpcy5lbnJpY2htZW50RmFjdG9yID0gdmFsdWUuZW5yaWNobWVudEZhY3RvcjtcbiAgICB0aGlzLmV4ZWN1dGlvbk9yZGVyID0gdmFsdWUuZXhlY3V0aW9uT3JkZXI7XG4gICAgWExOZXRBdWdFbnJpY2htZW50Q29uZmlnLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVucmljaG1lbnRGYWN0b3IoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5yaWNobWVudEZhY3RvcjtcbiAgfVxuICBzZXQgZW5yaWNobWVudEZhY3Rvcih2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5yaWNobWVudEZhY3RvciA9IHZhbHVlO1xuICB9XG4gIGdldCBleGVjdXRpb25PcmRlcigpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25PcmRlcjtcbiAgfVxuICBzZXQgZXhlY3V0aW9uT3JkZXIodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4ZWN1dGlvbk9yZGVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZlOiB0aGlzLmlzQWN0aXZlLFxuICAgICAgZW5yaWNobWVudEZhY3RvcjogdGhpcy5lbnJpY2htZW50RmFjdG9yLFxuICAgICAgZXhlY3V0aW9uT3JkZXI6IHRoaXMuZXhlY3V0aW9uT3JkZXJcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFhMTmV0QXVnRW5yaWNobWVudENvbmZpZyB7fVxuIl19