import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as googleProtobuf005 from '../../google/protobuf/field-mask.pb';
import * as googleProtobuf006 from '../../google/protobuf/struct.pb';
export var IntentView;
(function (IntentView) {
    IntentView[IntentView["intentViewUnspecified"] = 0] = "intentViewUnspecified";
    IntentView[IntentView["intentViewFull"] = 1] = "intentViewFull";
    IntentView[IntentView["intentViewPartial"] = 2] = "intentViewPartial";
    IntentView[IntentView["intentViewShallow"] = 3] = "intentViewShallow";
})(IntentView || (IntentView = {}));
export var IntentCategory;
(function (IntentCategory) {
    IntentCategory[IntentCategory["allIntents"] = 0] = "allIntents";
    IntentCategory[IntentCategory["defaultIntents"] = 1] = "defaultIntents";
    IntentCategory[IntentCategory["userDefinedIntents"] = 2] = "userDefinedIntents";
})(IntentCategory || (IntentCategory = {}));
export class Intent {
    /**
     * Creates an object and applies default Protobuf values
     * @param Intent value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.displayName = value.displayName;
        this.webhookState = value.webhookState;
        this.priority = value.priority;
        this.isFallback = value.isFallback;
        this.mlDisabled = value.mlDisabled;
        this.inputContextNames = (value.inputContextNames || []).slice();
        this.events = (value.events || []).slice();
        this.trainingPhrases = (value.trainingPhrases || []).map(m => new Intent.TrainingPhrase(m));
        this.action = value.action;
        this.outputContexts = (value.outputContexts || []).map(m => new ondewoNlu001.Context(m));
        this.resetContexts = value.resetContexts;
        this.parameters = (value.parameters || []).map(m => new Intent.Parameter(m));
        this.messages = (value.messages || []).map(m => new Intent.Message(m));
        this.defaultResponsePlatforms = (value.defaultResponsePlatforms || []).slice();
        this.rootFollowupIntentName = value.rootFollowupIntentName;
        this.parentFollowupIntentName = value.parentFollowupIntentName;
        this.followupIntentInfo = (value.followupIntentInfo || []).map(m => new Intent.FollowupIntentInfo(m));
        this.nextPageToken = value.nextPageToken;
        this.domainName = value.domainName;
        this.isStartOfDeviation = value.isStartOfDeviation;
        this.isEndOfDeviation = value.isEndOfDeviation;
        this.trainingPhraseCount = value.trainingPhraseCount;
        this.status = value.status;
        Intent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Intent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Intent();
        Intent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.displayName = instance.displayName || '';
        instance.webhookState = instance.webhookState || 0;
        instance.priority = instance.priority || 0;
        instance.isFallback = instance.isFallback || false;
        instance.mlDisabled = instance.mlDisabled || false;
        instance.inputContextNames = instance.inputContextNames || [];
        instance.events = instance.events || [];
        instance.trainingPhrases = instance.trainingPhrases || [];
        instance.action = instance.action || '';
        instance.outputContexts = instance.outputContexts || [];
        instance.resetContexts = instance.resetContexts || false;
        instance.parameters = instance.parameters || [];
        instance.messages = instance.messages || [];
        instance.defaultResponsePlatforms = instance.defaultResponsePlatforms || [];
        instance.rootFollowupIntentName = instance.rootFollowupIntentName || '';
        instance.parentFollowupIntentName = instance.parentFollowupIntentName || '';
        instance.followupIntentInfo = instance.followupIntentInfo || [];
        instance.nextPageToken = instance.nextPageToken || '';
        instance.domainName = instance.domainName || '';
        instance.isStartOfDeviation = instance.isStartOfDeviation || false;
        instance.isEndOfDeviation = instance.isEndOfDeviation || false;
        instance.trainingPhraseCount = instance.trainingPhraseCount || 0;
        instance.status = instance.status || 0;
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
                    instance.displayName = reader.readString();
                    break;
                case 6:
                    instance.webhookState = reader.readEnum();
                    break;
                case 3:
                    instance.priority = reader.readInt32();
                    break;
                case 4:
                    instance.isFallback = reader.readBool();
                    break;
                case 19:
                    instance.mlDisabled = reader.readBool();
                    break;
                case 7:
                    (instance.inputContextNames = instance.inputContextNames || []).push(reader.readString());
                    break;
                case 8:
                    (instance.events = instance.events || []).push(reader.readString());
                    break;
                case 9:
                    const messageInitializer9 = new Intent.TrainingPhrase();
                    reader.readMessage(messageInitializer9, Intent.TrainingPhrase.fromBinaryReader);
                    (instance.trainingPhrases = instance.trainingPhrases || []).push(messageInitializer9);
                    break;
                case 10:
                    instance.action = reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new ondewoNlu001.Context();
                    reader.readMessage(messageInitializer11, ondewoNlu001.Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer11);
                    break;
                case 12:
                    instance.resetContexts = reader.readBool();
                    break;
                case 13:
                    const messageInitializer13 = new Intent.Parameter();
                    reader.readMessage(messageInitializer13, Intent.Parameter.fromBinaryReader);
                    (instance.parameters = instance.parameters || []).push(messageInitializer13);
                    break;
                case 14:
                    const messageInitializer14 = new Intent.Message();
                    reader.readMessage(messageInitializer14, Intent.Message.fromBinaryReader);
                    (instance.messages = instance.messages || []).push(messageInitializer14);
                    break;
                case 15:
                    (instance.defaultResponsePlatforms =
                        instance.defaultResponsePlatforms || []).push(reader.readEnum());
                    break;
                case 16:
                    instance.rootFollowupIntentName = reader.readString();
                    break;
                case 17:
                    instance.parentFollowupIntentName = reader.readString();
                    break;
                case 18:
                    const messageInitializer18 = new Intent.FollowupIntentInfo();
                    reader.readMessage(messageInitializer18, Intent.FollowupIntentInfo.fromBinaryReader);
                    (instance.followupIntentInfo =
                        instance.followupIntentInfo || []).push(messageInitializer18);
                    break;
                case 30:
                    instance.nextPageToken = reader.readString();
                    break;
                case 31:
                    instance.domainName = reader.readString();
                    break;
                case 32:
                    instance.isStartOfDeviation = reader.readBool();
                    break;
                case 33:
                    instance.isEndOfDeviation = reader.readBool();
                    break;
                case 34:
                    instance.trainingPhraseCount = reader.readInt32();
                    break;
                case 35:
                    instance.status = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        Intent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.webhookState) {
            writer.writeEnum(6, instance.webhookState);
        }
        if (instance.priority) {
            writer.writeInt32(3, instance.priority);
        }
        if (instance.isFallback) {
            writer.writeBool(4, instance.isFallback);
        }
        if (instance.mlDisabled) {
            writer.writeBool(19, instance.mlDisabled);
        }
        if (instance.inputContextNames && instance.inputContextNames.length) {
            writer.writeRepeatedString(7, instance.inputContextNames);
        }
        if (instance.events && instance.events.length) {
            writer.writeRepeatedString(8, instance.events);
        }
        if (instance.trainingPhrases && instance.trainingPhrases.length) {
            writer.writeRepeatedMessage(9, instance.trainingPhrases, Intent.TrainingPhrase.toBinaryWriter);
        }
        if (instance.action) {
            writer.writeString(10, instance.action);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(11, instance.outputContexts, ondewoNlu001.Context.toBinaryWriter);
        }
        if (instance.resetContexts) {
            writer.writeBool(12, instance.resetContexts);
        }
        if (instance.parameters && instance.parameters.length) {
            writer.writeRepeatedMessage(13, instance.parameters, Intent.Parameter.toBinaryWriter);
        }
        if (instance.messages && instance.messages.length) {
            writer.writeRepeatedMessage(14, instance.messages, Intent.Message.toBinaryWriter);
        }
        if (instance.defaultResponsePlatforms &&
            instance.defaultResponsePlatforms.length) {
            writer.writeRepeatedEnum(15, instance.defaultResponsePlatforms);
        }
        if (instance.rootFollowupIntentName) {
            writer.writeString(16, instance.rootFollowupIntentName);
        }
        if (instance.parentFollowupIntentName) {
            writer.writeString(17, instance.parentFollowupIntentName);
        }
        if (instance.followupIntentInfo && instance.followupIntentInfo.length) {
            writer.writeRepeatedMessage(18, instance.followupIntentInfo, Intent.FollowupIntentInfo.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(30, instance.nextPageToken);
        }
        if (instance.domainName) {
            writer.writeString(31, instance.domainName);
        }
        if (instance.isStartOfDeviation) {
            writer.writeBool(32, instance.isStartOfDeviation);
        }
        if (instance.isEndOfDeviation) {
            writer.writeBool(33, instance.isEndOfDeviation);
        }
        if (instance.trainingPhraseCount) {
            writer.writeInt32(34, instance.trainingPhraseCount);
        }
        if (instance.status) {
            writer.writeEnum(35, instance.status);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get webhookState() {
        return this._webhookState;
    }
    set webhookState(value) {
        this._webhookState = value;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    get isFallback() {
        return this._isFallback;
    }
    set isFallback(value) {
        this._isFallback = value;
    }
    get mlDisabled() {
        return this._mlDisabled;
    }
    set mlDisabled(value) {
        this._mlDisabled = value;
    }
    get inputContextNames() {
        return this._inputContextNames;
    }
    set inputContextNames(value) {
        this._inputContextNames = value;
    }
    get events() {
        return this._events;
    }
    set events(value) {
        this._events = value;
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get resetContexts() {
        return this._resetContexts;
    }
    set resetContexts(value) {
        this._resetContexts = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get messages() {
        return this._messages;
    }
    set messages(value) {
        this._messages = value;
    }
    get defaultResponsePlatforms() {
        return this._defaultResponsePlatforms;
    }
    set defaultResponsePlatforms(value) {
        this._defaultResponsePlatforms = value;
    }
    get rootFollowupIntentName() {
        return this._rootFollowupIntentName;
    }
    set rootFollowupIntentName(value) {
        this._rootFollowupIntentName = value;
    }
    get parentFollowupIntentName() {
        return this._parentFollowupIntentName;
    }
    set parentFollowupIntentName(value) {
        this._parentFollowupIntentName = value;
    }
    get followupIntentInfo() {
        return this._followupIntentInfo;
    }
    set followupIntentInfo(value) {
        this._followupIntentInfo = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    get domainName() {
        return this._domainName;
    }
    set domainName(value) {
        this._domainName = value;
    }
    get isStartOfDeviation() {
        return this._isStartOfDeviation;
    }
    set isStartOfDeviation(value) {
        this._isStartOfDeviation = value;
    }
    get isEndOfDeviation() {
        return this._isEndOfDeviation;
    }
    set isEndOfDeviation(value) {
        this._isEndOfDeviation = value;
    }
    get trainingPhraseCount() {
        return this._trainingPhraseCount;
    }
    set trainingPhraseCount(value) {
        this._trainingPhraseCount = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    toObject() {
        return {
            name: this.name,
            displayName: this.displayName,
            webhookState: this.webhookState,
            priority: this.priority,
            isFallback: this.isFallback,
            mlDisabled: this.mlDisabled,
            inputContextNames: (this.inputContextNames || []).slice(),
            events: (this.events || []).slice(),
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject()),
            action: this.action,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            resetContexts: this.resetContexts,
            parameters: (this.parameters || []).map(m => m.toObject()),
            messages: (this.messages || []).map(m => m.toObject()),
            defaultResponsePlatforms: (this.defaultResponsePlatforms || []).slice(),
            rootFollowupIntentName: this.rootFollowupIntentName,
            parentFollowupIntentName: this.parentFollowupIntentName,
            followupIntentInfo: (this.followupIntentInfo || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken,
            domainName: this.domainName,
            isStartOfDeviation: this.isStartOfDeviation,
            isEndOfDeviation: this.isEndOfDeviation,
            trainingPhraseCount: this.trainingPhraseCount,
            status: this.status
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Intent) {
    let IntentStatus;
    (function (IntentStatus) {
        IntentStatus[IntentStatus["active"] = 0] = "active";
        IntentStatus[IntentStatus["inactive"] = 1] = "inactive";
    })(IntentStatus = Intent.IntentStatus || (Intent.IntentStatus = {}));
    let WebhookState;
    (function (WebhookState) {
        WebhookState[WebhookState["webhookStateUnspecified"] = 0] = "webhookStateUnspecified";
        WebhookState[WebhookState["webhookStateEnabled"] = 1] = "webhookStateEnabled";
        WebhookState[WebhookState["webhookStateEnabledForSlotFilling"] = 2] = "webhookStateEnabledForSlotFilling";
    })(WebhookState = Intent.WebhookState || (Intent.WebhookState = {}));
    class TrainingPhrase {
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhrase value
         */
        constructor(value) {
            value = value || {};
            this.name = value.name;
            this.type = value.type;
            this.text = value.text;
            this.entities = (value.entities || []).map(m => new Intent.TrainingPhrase.Entity(m));
            this.timesAddedCount = value.timesAddedCount;
            TrainingPhrase.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            TrainingPhrase.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new TrainingPhrase();
            TrainingPhrase.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.name = instance.name || '';
            instance.type = instance.type || 0;
            instance.text = instance.text || '';
            instance.entities = instance.entities || [];
            instance.timesAddedCount = instance.timesAddedCount || 0;
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
                        instance.type = reader.readEnum();
                        break;
                    case 3:
                        instance.text = reader.readString();
                        break;
                    case 4:
                        const messageInitializer4 = new Intent.TrainingPhrase.Entity();
                        reader.readMessage(messageInitializer4, Intent.TrainingPhrase.Entity.fromBinaryReader);
                        (instance.entities = instance.entities || []).push(messageInitializer4);
                        break;
                    case 5:
                        instance.timesAddedCount = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            TrainingPhrase.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.name) {
                writer.writeString(1, instance.name);
            }
            if (instance.type) {
                writer.writeEnum(2, instance.type);
            }
            if (instance.text) {
                writer.writeString(3, instance.text);
            }
            if (instance.entities && instance.entities.length) {
                writer.writeRepeatedMessage(4, instance.entities, Intent.TrainingPhrase.Entity.toBinaryWriter);
            }
            if (instance.timesAddedCount) {
                writer.writeInt32(5, instance.timesAddedCount);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get type() {
            return this._type;
        }
        set type(value) {
            this._type = value;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
        }
        get entities() {
            return this._entities;
        }
        set entities(value) {
            this._entities = value;
        }
        get timesAddedCount() {
            return this._timesAddedCount;
        }
        set timesAddedCount(value) {
            this._timesAddedCount = value;
        }
        toObject() {
            return {
                name: this.name,
                type: this.type,
                text: this.text,
                entities: (this.entities || []).map(m => m.toObject()),
                timesAddedCount: this.timesAddedCount
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.TrainingPhrase = TrainingPhrase;
    (function (TrainingPhrase) {
        let Type;
        (function (Type) {
            Type[Type["typeUnspecified"] = 0] = "typeUnspecified";
            Type[Type["example"] = 1] = "example";
            Type[Type["template"] = 2] = "template";
        })(Type = TrainingPhrase.Type || (TrainingPhrase.Type = {}));
        class Entity {
            /**
             * Creates an object and applies default Protobuf values
             * @param Entity value
             */
            constructor(value) {
                value = value || {};
                this.entityTypeName = value.entityTypeName;
                this.entityTypeDisplayName = value.entityTypeDisplayName;
                this.entityValueName = value.entityValueName;
                this.entityValueDisplayName = value.entityValueDisplayName;
                this.start = value.start;
                this.end = value.end;
                this.parameterName = value.parameterName;
                this.parameterDisplayName = value.parameterDisplayName;
                Entity.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Entity.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Entity();
                Entity.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.entityTypeName = instance.entityTypeName || '';
                instance.entityTypeDisplayName = instance.entityTypeDisplayName || '';
                instance.entityValueName = instance.entityValueName || '';
                instance.entityValueDisplayName = instance.entityValueDisplayName || '';
                instance.start = instance.start || 0;
                instance.end = instance.end || 0;
                instance.parameterName = instance.parameterName || '';
                instance.parameterDisplayName = instance.parameterDisplayName || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.entityTypeName = reader.readString();
                            break;
                        case 3:
                            instance.entityTypeDisplayName = reader.readString();
                            break;
                        case 4:
                            instance.entityValueName = reader.readString();
                            break;
                        case 5:
                            instance.entityValueDisplayName = reader.readString();
                            break;
                        case 6:
                            instance.start = reader.readInt32();
                            break;
                        case 7:
                            instance.end = reader.readInt32();
                            break;
                        case 8:
                            instance.parameterName = reader.readString();
                            break;
                        case 9:
                            instance.parameterDisplayName = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Entity.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.entityTypeName) {
                    writer.writeString(1, instance.entityTypeName);
                }
                if (instance.entityTypeDisplayName) {
                    writer.writeString(3, instance.entityTypeDisplayName);
                }
                if (instance.entityValueName) {
                    writer.writeString(4, instance.entityValueName);
                }
                if (instance.entityValueDisplayName) {
                    writer.writeString(5, instance.entityValueDisplayName);
                }
                if (instance.start) {
                    writer.writeInt32(6, instance.start);
                }
                if (instance.end) {
                    writer.writeInt32(7, instance.end);
                }
                if (instance.parameterName) {
                    writer.writeString(8, instance.parameterName);
                }
                if (instance.parameterDisplayName) {
                    writer.writeString(9, instance.parameterDisplayName);
                }
            }
            get entityTypeName() {
                return this._entityTypeName;
            }
            set entityTypeName(value) {
                this._entityTypeName = value;
            }
            get entityTypeDisplayName() {
                return this._entityTypeDisplayName;
            }
            set entityTypeDisplayName(value) {
                this._entityTypeDisplayName = value;
            }
            get entityValueName() {
                return this._entityValueName;
            }
            set entityValueName(value) {
                this._entityValueName = value;
            }
            get entityValueDisplayName() {
                return this._entityValueDisplayName;
            }
            set entityValueDisplayName(value) {
                this._entityValueDisplayName = value;
            }
            get start() {
                return this._start;
            }
            set start(value) {
                this._start = value;
            }
            get end() {
                return this._end;
            }
            set end(value) {
                this._end = value;
            }
            get parameterName() {
                return this._parameterName;
            }
            set parameterName(value) {
                this._parameterName = value;
            }
            get parameterDisplayName() {
                return this._parameterDisplayName;
            }
            set parameterDisplayName(value) {
                this._parameterDisplayName = value;
            }
            toObject() {
                return {
                    entityTypeName: this.entityTypeName,
                    entityTypeDisplayName: this.entityTypeDisplayName,
                    entityValueName: this.entityValueName,
                    entityValueDisplayName: this.entityValueDisplayName,
                    start: this.start,
                    end: this.end,
                    parameterName: this.parameterName,
                    parameterDisplayName: this.parameterDisplayName
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        TrainingPhrase.Entity = Entity;
    })(TrainingPhrase = Intent.TrainingPhrase || (Intent.TrainingPhrase = {}));
    class Parameter {
        /**
         * Creates an object and applies default Protobuf values
         * @param Parameter value
         */
        constructor(value) {
            value = value || {};
            this.name = value.name;
            this.displayName = value.displayName;
            this.value = value.value;
            this.defaultValue = value.defaultValue;
            this.entityTypeName = value.entityTypeName;
            this.entityTypeDisplayName = value.entityTypeDisplayName;
            this.mandatory = value.mandatory;
            this.prompts = (value.prompts || []).slice();
            this.isList = value.isList;
            Parameter.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Parameter.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Parameter();
            Parameter.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.name = instance.name || '';
            instance.displayName = instance.displayName || '';
            instance.value = instance.value || '';
            instance.defaultValue = instance.defaultValue || '';
            instance.entityTypeName = instance.entityTypeName || '';
            instance.entityTypeDisplayName = instance.entityTypeDisplayName || '';
            instance.mandatory = instance.mandatory || false;
            instance.prompts = instance.prompts || [];
            instance.isList = instance.isList || false;
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
                        instance.displayName = reader.readString();
                        break;
                    case 3:
                        instance.value = reader.readString();
                        break;
                    case 4:
                        instance.defaultValue = reader.readString();
                        break;
                    case 5:
                        instance.entityTypeName = reader.readString();
                        break;
                    case 6:
                        instance.entityTypeDisplayName = reader.readString();
                        break;
                    case 7:
                        instance.mandatory = reader.readBool();
                        break;
                    case 8:
                        (instance.prompts = instance.prompts || []).push(reader.readString());
                        break;
                    case 9:
                        instance.isList = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Parameter.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.name) {
                writer.writeString(1, instance.name);
            }
            if (instance.displayName) {
                writer.writeString(2, instance.displayName);
            }
            if (instance.value) {
                writer.writeString(3, instance.value);
            }
            if (instance.defaultValue) {
                writer.writeString(4, instance.defaultValue);
            }
            if (instance.entityTypeName) {
                writer.writeString(5, instance.entityTypeName);
            }
            if (instance.entityTypeDisplayName) {
                writer.writeString(6, instance.entityTypeDisplayName);
            }
            if (instance.mandatory) {
                writer.writeBool(7, instance.mandatory);
            }
            if (instance.prompts && instance.prompts.length) {
                writer.writeRepeatedString(8, instance.prompts);
            }
            if (instance.isList) {
                writer.writeBool(9, instance.isList);
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get defaultValue() {
            return this._defaultValue;
        }
        set defaultValue(value) {
            this._defaultValue = value;
        }
        get entityTypeName() {
            return this._entityTypeName;
        }
        set entityTypeName(value) {
            this._entityTypeName = value;
        }
        get entityTypeDisplayName() {
            return this._entityTypeDisplayName;
        }
        set entityTypeDisplayName(value) {
            this._entityTypeDisplayName = value;
        }
        get mandatory() {
            return this._mandatory;
        }
        set mandatory(value) {
            this._mandatory = value;
        }
        get prompts() {
            return this._prompts;
        }
        set prompts(value) {
            this._prompts = value;
        }
        get isList() {
            return this._isList;
        }
        set isList(value) {
            this._isList = value;
        }
        toObject() {
            return {
                name: this.name,
                displayName: this.displayName,
                value: this.value,
                defaultValue: this.defaultValue,
                entityTypeName: this.entityTypeName,
                entityTypeDisplayName: this.entityTypeDisplayName,
                mandatory: this.mandatory,
                prompts: (this.prompts || []).slice(),
                isList: this.isList
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.Parameter = Parameter;
    class Message {
        /**
         * Creates an object and applies default Protobuf values
         * @param Message value
         */
        constructor(value) {
            this._message = Message.MessageCase.none;
            value = value || {};
            this.text = value.text ? new Intent.Message.Text(value.text) : undefined;
            this.image = value.image
                ? new Intent.Message.Image(value.image)
                : undefined;
            this.quickReplies = value.quickReplies
                ? new Intent.Message.QuickReplies(value.quickReplies)
                : undefined;
            this.card = value.card ? new Intent.Message.Card(value.card) : undefined;
            this.payload = value.payload
                ? new googleProtobuf006.Struct(value.payload)
                : undefined;
            this.simpleResponses = value.simpleResponses
                ? new Intent.Message.SimpleResponses(value.simpleResponses)
                : undefined;
            this.basicCard = value.basicCard
                ? new Intent.Message.BasicCard(value.basicCard)
                : undefined;
            this.suggestions = value.suggestions
                ? new Intent.Message.Suggestions(value.suggestions)
                : undefined;
            this.linkOutSuggestion = value.linkOutSuggestion
                ? new Intent.Message.LinkOutSuggestion(value.linkOutSuggestion)
                : undefined;
            this.listSelect = value.listSelect
                ? new Intent.Message.ListSelect(value.listSelect)
                : undefined;
            this.carouselSelect = value.carouselSelect
                ? new Intent.Message.CarouselSelect(value.carouselSelect)
                : undefined;
            this.htmlText = value.htmlText
                ? new Intent.Message.HTMLText(value.htmlText)
                : undefined;
            this.video = value.video
                ? new Intent.Message.Video(value.video)
                : undefined;
            this.audio = value.audio
                ? new Intent.Message.Audio(value.audio)
                : undefined;
            this.platform = value.platform;
            Message.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Message.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Message();
            Message.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.platform = instance.platform || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.text = new Intent.Message.Text();
                        reader.readMessage(instance.text, Intent.Message.Text.fromBinaryReader);
                        break;
                    case 2:
                        instance.image = new Intent.Message.Image();
                        reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                        break;
                    case 3:
                        instance.quickReplies = new Intent.Message.QuickReplies();
                        reader.readMessage(instance.quickReplies, Intent.Message.QuickReplies.fromBinaryReader);
                        break;
                    case 4:
                        instance.card = new Intent.Message.Card();
                        reader.readMessage(instance.card, Intent.Message.Card.fromBinaryReader);
                        break;
                    case 5:
                        instance.payload = new googleProtobuf006.Struct();
                        reader.readMessage(instance.payload, googleProtobuf006.Struct.fromBinaryReader);
                        break;
                    case 7:
                        instance.simpleResponses = new Intent.Message.SimpleResponses();
                        reader.readMessage(instance.simpleResponses, Intent.Message.SimpleResponses.fromBinaryReader);
                        break;
                    case 8:
                        instance.basicCard = new Intent.Message.BasicCard();
                        reader.readMessage(instance.basicCard, Intent.Message.BasicCard.fromBinaryReader);
                        break;
                    case 9:
                        instance.suggestions = new Intent.Message.Suggestions();
                        reader.readMessage(instance.suggestions, Intent.Message.Suggestions.fromBinaryReader);
                        break;
                    case 10:
                        instance.linkOutSuggestion = new Intent.Message.LinkOutSuggestion();
                        reader.readMessage(instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.fromBinaryReader);
                        break;
                    case 11:
                        instance.listSelect = new Intent.Message.ListSelect();
                        reader.readMessage(instance.listSelect, Intent.Message.ListSelect.fromBinaryReader);
                        break;
                    case 12:
                        instance.carouselSelect = new Intent.Message.CarouselSelect();
                        reader.readMessage(instance.carouselSelect, Intent.Message.CarouselSelect.fromBinaryReader);
                        break;
                    case 13:
                        instance.htmlText = new Intent.Message.HTMLText();
                        reader.readMessage(instance.htmlText, Intent.Message.HTMLText.fromBinaryReader);
                        break;
                    case 14:
                        instance.video = new Intent.Message.Video();
                        reader.readMessage(instance.video, Intent.Message.Video.fromBinaryReader);
                        break;
                    case 15:
                        instance.audio = new Intent.Message.Audio();
                        reader.readMessage(instance.audio, Intent.Message.Audio.fromBinaryReader);
                        break;
                    case 6:
                        instance.platform = reader.readEnum();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Message.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.text) {
                writer.writeMessage(1, instance.text, Intent.Message.Text.toBinaryWriter);
            }
            if (instance.image) {
                writer.writeMessage(2, instance.image, Intent.Message.Image.toBinaryWriter);
            }
            if (instance.quickReplies) {
                writer.writeMessage(3, instance.quickReplies, Intent.Message.QuickReplies.toBinaryWriter);
            }
            if (instance.card) {
                writer.writeMessage(4, instance.card, Intent.Message.Card.toBinaryWriter);
            }
            if (instance.payload) {
                writer.writeMessage(5, instance.payload, googleProtobuf006.Struct.toBinaryWriter);
            }
            if (instance.simpleResponses) {
                writer.writeMessage(7, instance.simpleResponses, Intent.Message.SimpleResponses.toBinaryWriter);
            }
            if (instance.basicCard) {
                writer.writeMessage(8, instance.basicCard, Intent.Message.BasicCard.toBinaryWriter);
            }
            if (instance.suggestions) {
                writer.writeMessage(9, instance.suggestions, Intent.Message.Suggestions.toBinaryWriter);
            }
            if (instance.linkOutSuggestion) {
                writer.writeMessage(10, instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.toBinaryWriter);
            }
            if (instance.listSelect) {
                writer.writeMessage(11, instance.listSelect, Intent.Message.ListSelect.toBinaryWriter);
            }
            if (instance.carouselSelect) {
                writer.writeMessage(12, instance.carouselSelect, Intent.Message.CarouselSelect.toBinaryWriter);
            }
            if (instance.htmlText) {
                writer.writeMessage(13, instance.htmlText, Intent.Message.HTMLText.toBinaryWriter);
            }
            if (instance.video) {
                writer.writeMessage(14, instance.video, Intent.Message.Video.toBinaryWriter);
            }
            if (instance.audio) {
                writer.writeMessage(15, instance.audio, Intent.Message.Audio.toBinaryWriter);
            }
            if (instance.platform) {
                writer.writeEnum(6, instance.platform);
            }
        }
        get text() {
            return this._text;
        }
        set text(value) {
            if (value !== undefined && value !== null) {
                this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.text;
            }
            this._text = value;
        }
        get image() {
            return this._image;
        }
        set image(value) {
            if (value !== undefined && value !== null) {
                this._text = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.image;
            }
            this._image = value;
        }
        get quickReplies() {
            return this._quickReplies;
        }
        set quickReplies(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.quickReplies;
            }
            this._quickReplies = value;
        }
        get card() {
            return this._card;
        }
        set card(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.card;
            }
            this._card = value;
        }
        get payload() {
            return this._payload;
        }
        set payload(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.payload;
            }
            this._payload = value;
        }
        get simpleResponses() {
            return this._simpleResponses;
        }
        set simpleResponses(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.simpleResponses;
            }
            this._simpleResponses = value;
        }
        get basicCard() {
            return this._basicCard;
        }
        set basicCard(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.basicCard;
            }
            this._basicCard = value;
        }
        get suggestions() {
            return this._suggestions;
        }
        set suggestions(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.suggestions;
            }
            this._suggestions = value;
        }
        get linkOutSuggestion() {
            return this._linkOutSuggestion;
        }
        set linkOutSuggestion(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._listSelect = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.linkOutSuggestion;
            }
            this._linkOutSuggestion = value;
        }
        get listSelect() {
            return this._listSelect;
        }
        set listSelect(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._carouselSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.listSelect;
            }
            this._listSelect = value;
        }
        get carouselSelect() {
            return this._carouselSelect;
        }
        set carouselSelect(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._htmlText = this._video = this._audio = undefined;
                this._message = Message.MessageCase.carouselSelect;
            }
            this._carouselSelect = value;
        }
        get htmlText() {
            return this._htmlText;
        }
        set htmlText(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._video = this._audio = undefined;
                this._message = Message.MessageCase.htmlText;
            }
            this._htmlText = value;
        }
        get video() {
            return this._video;
        }
        set video(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._audio = undefined;
                this._message = Message.MessageCase.video;
            }
            this._video = value;
        }
        get audio() {
            return this._audio;
        }
        set audio(value) {
            if (value !== undefined && value !== null) {
                this._text = this._image = this._quickReplies = this._card = this._payload = this._simpleResponses = this._basicCard = this._suggestions = this._linkOutSuggestion = this._listSelect = this._carouselSelect = this._htmlText = this._video = undefined;
                this._message = Message.MessageCase.audio;
            }
            this._audio = value;
        }
        get platform() {
            return this._platform;
        }
        set platform(value) {
            this._platform = value;
        }
        get message() {
            return this._message;
        }
        toObject() {
            return {
                text: this.text ? this.text.toObject() : undefined,
                image: this.image ? this.image.toObject() : undefined,
                quickReplies: this.quickReplies
                    ? this.quickReplies.toObject()
                    : undefined,
                card: this.card ? this.card.toObject() : undefined,
                payload: this.payload ? this.payload.toObject() : undefined,
                simpleResponses: this.simpleResponses
                    ? this.simpleResponses.toObject()
                    : undefined,
                basicCard: this.basicCard ? this.basicCard.toObject() : undefined,
                suggestions: this.suggestions ? this.suggestions.toObject() : undefined,
                linkOutSuggestion: this.linkOutSuggestion
                    ? this.linkOutSuggestion.toObject()
                    : undefined,
                listSelect: this.listSelect ? this.listSelect.toObject() : undefined,
                carouselSelect: this.carouselSelect
                    ? this.carouselSelect.toObject()
                    : undefined,
                htmlText: this.htmlText ? this.htmlText.toObject() : undefined,
                video: this.video ? this.video.toObject() : undefined,
                audio: this.audio ? this.audio.toObject() : undefined,
                platform: this.platform
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.Message = Message;
    (function (Message) {
        let MessageCase;
        (function (MessageCase) {
            MessageCase[MessageCase["none"] = 0] = "none";
            MessageCase[MessageCase["text"] = 1] = "text";
            MessageCase[MessageCase["image"] = 2] = "image";
            MessageCase[MessageCase["quickReplies"] = 3] = "quickReplies";
            MessageCase[MessageCase["card"] = 4] = "card";
            MessageCase[MessageCase["payload"] = 5] = "payload";
            MessageCase[MessageCase["simpleResponses"] = 6] = "simpleResponses";
            MessageCase[MessageCase["basicCard"] = 7] = "basicCard";
            MessageCase[MessageCase["suggestions"] = 8] = "suggestions";
            MessageCase[MessageCase["linkOutSuggestion"] = 9] = "linkOutSuggestion";
            MessageCase[MessageCase["listSelect"] = 10] = "listSelect";
            MessageCase[MessageCase["carouselSelect"] = 11] = "carouselSelect";
            MessageCase[MessageCase["htmlText"] = 12] = "htmlText";
            MessageCase[MessageCase["video"] = 13] = "video";
            MessageCase[MessageCase["audio"] = 14] = "audio";
        })(MessageCase = Message.MessageCase || (Message.MessageCase = {}));
        let Platform;
        (function (Platform) {
            Platform[Platform["platformUnspecified"] = 0] = "platformUnspecified";
            Platform[Platform["facebook"] = 1] = "facebook";
            Platform[Platform["slack"] = 2] = "slack";
            Platform[Platform["telegram"] = 3] = "telegram";
            Platform[Platform["kik"] = 4] = "kik";
            Platform[Platform["skype"] = 5] = "skype";
            Platform[Platform["line"] = 6] = "line";
            Platform[Platform["viber"] = 7] = "viber";
            Platform[Platform["actionsOnGoogle"] = 8] = "actionsOnGoogle";
        })(Platform = Message.Platform || (Message.Platform = {}));
        class Text {
            /**
             * Creates an object and applies default Protobuf values
             * @param Text value
             */
            constructor(value) {
                value = value || {};
                this.text = (value.text || []).slice();
                Text.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Text.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Text();
                Text.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.text = instance.text || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            (instance.text = instance.text || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Text.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.text && instance.text.length) {
                    writer.writeRepeatedString(1, instance.text);
                }
            }
            get text() {
                return this._text;
            }
            set text(value) {
                this._text = value;
            }
            toObject() {
                return {
                    text: (this.text || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Text = Text;
        class Image {
            /**
             * Creates an object and applies default Protobuf values
             * @param Image value
             */
            constructor(value) {
                value = value || {};
                this.imageUri = value.imageUri;
                this.accessibilityText = value.accessibilityText;
                Image.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Image.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Image();
                Image.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.imageUri = instance.imageUri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.imageUri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Image.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.imageUri) {
                    writer.writeString(1, instance.imageUri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get imageUri() {
                return this._imageUri;
            }
            set imageUri(value) {
                this._imageUri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    imageUri: this.imageUri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Image = Image;
        class QuickReplies {
            /**
             * Creates an object and applies default Protobuf values
             * @param QuickReplies value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.quickReplies = (value.quickReplies || []).slice();
                QuickReplies.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                QuickReplies.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new QuickReplies();
                QuickReplies.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.quickReplies = instance.quickReplies || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            (instance.quickReplies = instance.quickReplies || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                QuickReplies.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.quickReplies && instance.quickReplies.length) {
                    writer.writeRepeatedString(2, instance.quickReplies);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get quickReplies() {
                return this._quickReplies;
            }
            set quickReplies(value) {
                this._quickReplies = value;
            }
            toObject() {
                return {
                    title: this.title,
                    quickReplies: (this.quickReplies || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.QuickReplies = QuickReplies;
        class Card {
            /**
             * Creates an object and applies default Protobuf values
             * @param Card value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.subtitle = value.subtitle;
                this.imageUri = value.imageUri;
                this.buttons = (value.buttons || []).map(m => new Intent.Message.Card.Button(m));
                Card.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Card.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Card();
                Card.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.subtitle = instance.subtitle || '';
                instance.imageUri = instance.imageUri || '';
                instance.buttons = instance.buttons || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            instance.subtitle = reader.readString();
                            break;
                        case 3:
                            instance.imageUri = reader.readString();
                            break;
                        case 4:
                            const messageInitializer4 = new Intent.Message.Card.Button();
                            reader.readMessage(messageInitializer4, Intent.Message.Card.Button.fromBinaryReader);
                            (instance.buttons = instance.buttons || []).push(messageInitializer4);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Card.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.subtitle) {
                    writer.writeString(2, instance.subtitle);
                }
                if (instance.imageUri) {
                    writer.writeString(3, instance.imageUri);
                }
                if (instance.buttons && instance.buttons.length) {
                    writer.writeRepeatedMessage(4, instance.buttons, Intent.Message.Card.Button.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get subtitle() {
                return this._subtitle;
            }
            set subtitle(value) {
                this._subtitle = value;
            }
            get imageUri() {
                return this._imageUri;
            }
            set imageUri(value) {
                this._imageUri = value;
            }
            get buttons() {
                return this._buttons;
            }
            set buttons(value) {
                this._buttons = value;
            }
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    imageUri: this.imageUri,
                    buttons: (this.buttons || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Card = Card;
        (function (Card) {
            class Button {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value) {
                    value = value || {};
                    this.text = value.text;
                    this.postback = value.postback;
                    Button.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Button.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Button();
                    Button.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.text = instance.text || '';
                    instance.postback = instance.postback || '';
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
                                instance.postback = reader.readString();
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Button.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.text) {
                        writer.writeString(1, instance.text);
                    }
                    if (instance.postback) {
                        writer.writeString(2, instance.postback);
                    }
                }
                get text() {
                    return this._text;
                }
                set text(value) {
                    this._text = value;
                }
                get postback() {
                    return this._postback;
                }
                set postback(value) {
                    this._postback = value;
                }
                toObject() {
                    return {
                        text: this.text,
                        postback: this.postback
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            Card.Button = Button;
        })(Card = Message.Card || (Message.Card = {}));
        class SimpleResponse {
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponse value
             */
            constructor(value) {
                value = value || {};
                this.textToSpeech = value.textToSpeech;
                this.ssml = value.ssml;
                this.displayText = value.displayText;
                SimpleResponse.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SimpleResponse.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SimpleResponse();
                SimpleResponse.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.textToSpeech = instance.textToSpeech || '';
                instance.ssml = instance.ssml || '';
                instance.displayText = instance.displayText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.textToSpeech = reader.readString();
                            break;
                        case 2:
                            instance.ssml = reader.readString();
                            break;
                        case 3:
                            instance.displayText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SimpleResponse.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.textToSpeech) {
                    writer.writeString(1, instance.textToSpeech);
                }
                if (instance.ssml) {
                    writer.writeString(2, instance.ssml);
                }
                if (instance.displayText) {
                    writer.writeString(3, instance.displayText);
                }
            }
            get textToSpeech() {
                return this._textToSpeech;
            }
            set textToSpeech(value) {
                this._textToSpeech = value;
            }
            get ssml() {
                return this._ssml;
            }
            set ssml(value) {
                this._ssml = value;
            }
            get displayText() {
                return this._displayText;
            }
            set displayText(value) {
                this._displayText = value;
            }
            toObject() {
                return {
                    textToSpeech: this.textToSpeech,
                    ssml: this.ssml,
                    displayText: this.displayText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SimpleResponse = SimpleResponse;
        class SimpleResponses {
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponses value
             */
            constructor(value) {
                value = value || {};
                this.simpleResponses = (value.simpleResponses || []).map(m => new Intent.Message.SimpleResponse(m));
                SimpleResponses.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SimpleResponses.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SimpleResponses();
                SimpleResponses.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.simpleResponses = instance.simpleResponses || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.SimpleResponse();
                            reader.readMessage(messageInitializer1, Intent.Message.SimpleResponse.fromBinaryReader);
                            (instance.simpleResponses = instance.simpleResponses || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SimpleResponses.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.simpleResponses && instance.simpleResponses.length) {
                    writer.writeRepeatedMessage(1, instance.simpleResponses, Intent.Message.SimpleResponse.toBinaryWriter);
                }
            }
            get simpleResponses() {
                return this._simpleResponses;
            }
            set simpleResponses(value) {
                this._simpleResponses = value;
            }
            toObject() {
                return {
                    simpleResponses: (this.simpleResponses || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SimpleResponses = SimpleResponses;
        class BasicCard {
            /**
             * Creates an object and applies default Protobuf values
             * @param BasicCard value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.subtitle = value.subtitle;
                this.formattedText = value.formattedText;
                this.image = value.image
                    ? new Intent.Message.Image(value.image)
                    : undefined;
                this.buttons = (value.buttons || []).map(m => new Intent.Message.BasicCard.Button(m));
                BasicCard.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                BasicCard.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new BasicCard();
                BasicCard.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.subtitle = instance.subtitle || '';
                instance.formattedText = instance.formattedText || '';
                instance.image = instance.image || undefined;
                instance.buttons = instance.buttons || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            instance.subtitle = reader.readString();
                            break;
                        case 3:
                            instance.formattedText = reader.readString();
                            break;
                        case 4:
                            instance.image = new Intent.Message.Image();
                            reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                            break;
                        case 5:
                            const messageInitializer5 = new Intent.Message.BasicCard.Button();
                            reader.readMessage(messageInitializer5, Intent.Message.BasicCard.Button.fromBinaryReader);
                            (instance.buttons = instance.buttons || []).push(messageInitializer5);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                BasicCard.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.subtitle) {
                    writer.writeString(2, instance.subtitle);
                }
                if (instance.formattedText) {
                    writer.writeString(3, instance.formattedText);
                }
                if (instance.image) {
                    writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                }
                if (instance.buttons && instance.buttons.length) {
                    writer.writeRepeatedMessage(5, instance.buttons, Intent.Message.BasicCard.Button.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get subtitle() {
                return this._subtitle;
            }
            set subtitle(value) {
                this._subtitle = value;
            }
            get formattedText() {
                return this._formattedText;
            }
            set formattedText(value) {
                this._formattedText = value;
            }
            get image() {
                return this._image;
            }
            set image(value) {
                this._image = value;
            }
            get buttons() {
                return this._buttons;
            }
            set buttons(value) {
                this._buttons = value;
            }
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    formattedText: this.formattedText,
                    image: this.image ? this.image.toObject() : undefined,
                    buttons: (this.buttons || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.BasicCard = BasicCard;
        (function (BasicCard) {
            class Button {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value) {
                    value = value || {};
                    this.title = value.title;
                    this.openUriAction = value.openUriAction
                        ? new Intent.Message.BasicCard.Button.OpenUriAction(value.openUriAction)
                        : undefined;
                    Button.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Button.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Button();
                    Button.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.title = instance.title || '';
                    instance.openUriAction = instance.openUriAction || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.title = reader.readString();
                                break;
                            case 2:
                                instance.openUriAction = new Intent.Message.BasicCard.Button.OpenUriAction();
                                reader.readMessage(instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Button.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.title) {
                        writer.writeString(1, instance.title);
                    }
                    if (instance.openUriAction) {
                        writer.writeMessage(2, instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction.toBinaryWriter);
                    }
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get openUriAction() {
                    return this._openUriAction;
                }
                set openUriAction(value) {
                    this._openUriAction = value;
                }
                toObject() {
                    return {
                        title: this.title,
                        openUriAction: this.openUriAction
                            ? this.openUriAction.toObject()
                            : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            BasicCard.Button = Button;
            (function (Button) {
                class OpenUriAction {
                    /**
                     * Creates an object and applies default Protobuf values
                     * @param OpenUriAction value
                     */
                    constructor(value) {
                        value = value || {};
                        this.uri = value.uri;
                        OpenUriAction.refineValues(this);
                    }
                    static toBinary(instance) {
                        const writer = new BinaryWriter();
                        OpenUriAction.toBinaryWriter(instance, writer);
                        return writer.getResultBuffer();
                    }
                    static fromBinary(bytes) {
                        const instance = new OpenUriAction();
                        OpenUriAction.fromBinaryReader(instance, new BinaryReader(bytes));
                        return instance;
                    }
                    static refineValues(instance) {
                        instance.uri = instance.uri || '';
                    }
                    static fromBinaryReader(instance, reader) {
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    instance.uri = reader.readString();
                                    break;
                                default:
                                    reader.skipField();
                            }
                        }
                        OpenUriAction.refineValues(instance);
                    }
                    static toBinaryWriter(instance, writer) {
                        if (instance.uri) {
                            writer.writeString(1, instance.uri);
                        }
                    }
                    get uri() {
                        return this._uri;
                    }
                    set uri(value) {
                        this._uri = value;
                    }
                    toObject() {
                        return {
                            uri: this.uri
                        };
                    }
                    toJSON() {
                        return this.toObject();
                    }
                }
                Button.OpenUriAction = OpenUriAction;
            })(Button = BasicCard.Button || (BasicCard.Button = {}));
        })(BasicCard = Message.BasicCard || (Message.BasicCard = {}));
        class Suggestion {
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestion value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                Suggestion.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Suggestion.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Suggestion();
                Suggestion.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Suggestion.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            toObject() {
                return {
                    title: this.title
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Suggestion = Suggestion;
        class Suggestions {
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestions value
             */
            constructor(value) {
                value = value || {};
                this.suggestions = (value.suggestions || []).map(m => new Intent.Message.Suggestion(m));
                Suggestions.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Suggestions.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Suggestions();
                Suggestions.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.suggestions = instance.suggestions || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.Suggestion();
                            reader.readMessage(messageInitializer1, Intent.Message.Suggestion.fromBinaryReader);
                            (instance.suggestions = instance.suggestions || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Suggestions.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.suggestions && instance.suggestions.length) {
                    writer.writeRepeatedMessage(1, instance.suggestions, Intent.Message.Suggestion.toBinaryWriter);
                }
            }
            get suggestions() {
                return this._suggestions;
            }
            set suggestions(value) {
                this._suggestions = value;
            }
            toObject() {
                return {
                    suggestions: (this.suggestions || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Suggestions = Suggestions;
        class LinkOutSuggestion {
            /**
             * Creates an object and applies default Protobuf values
             * @param LinkOutSuggestion value
             */
            constructor(value) {
                value = value || {};
                this.destinationName = value.destinationName;
                this.uri = value.uri;
                LinkOutSuggestion.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                LinkOutSuggestion.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new LinkOutSuggestion();
                LinkOutSuggestion.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.destinationName = instance.destinationName || '';
                instance.uri = instance.uri || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.destinationName = reader.readString();
                            break;
                        case 2:
                            instance.uri = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                LinkOutSuggestion.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.destinationName) {
                    writer.writeString(1, instance.destinationName);
                }
                if (instance.uri) {
                    writer.writeString(2, instance.uri);
                }
            }
            get destinationName() {
                return this._destinationName;
            }
            set destinationName(value) {
                this._destinationName = value;
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            toObject() {
                return {
                    destinationName: this.destinationName,
                    uri: this.uri
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.LinkOutSuggestion = LinkOutSuggestion;
        class ListSelect {
            /**
             * Creates an object and applies default Protobuf values
             * @param ListSelect value
             */
            constructor(value) {
                value = value || {};
                this.title = value.title;
                this.items = (value.items || []).map(m => new Intent.Message.ListSelect.Item(m));
                ListSelect.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                ListSelect.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new ListSelect();
                ListSelect.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.title = instance.title || '';
                instance.items = instance.items || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.title = reader.readString();
                            break;
                        case 2:
                            const messageInitializer2 = new Intent.Message.ListSelect.Item();
                            reader.readMessage(messageInitializer2, Intent.Message.ListSelect.Item.fromBinaryReader);
                            (instance.items = instance.items || []).push(messageInitializer2);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                ListSelect.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.title) {
                    writer.writeString(1, instance.title);
                }
                if (instance.items && instance.items.length) {
                    writer.writeRepeatedMessage(2, instance.items, Intent.Message.ListSelect.Item.toBinaryWriter);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            get items() {
                return this._items;
            }
            set items(value) {
                this._items = value;
            }
            toObject() {
                return {
                    title: this.title,
                    items: (this.items || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.ListSelect = ListSelect;
        (function (ListSelect) {
            class Item {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value) {
                    value = value || {};
                    this.info = value.info
                        ? new Intent.Message.SelectItemInfo(value.info)
                        : undefined;
                    this.title = value.title;
                    this.description = value.description;
                    this.image = value.image
                        ? new Intent.Message.Image(value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Item.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Item();
                    Item.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.info = instance.info || undefined;
                    instance.title = instance.title || '';
                    instance.description = instance.description || '';
                    instance.image = instance.image || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.info = new Intent.Message.SelectItemInfo();
                                reader.readMessage(instance.info, Intent.Message.SelectItemInfo.fromBinaryReader);
                                break;
                            case 2:
                                instance.title = reader.readString();
                                break;
                            case 3:
                                instance.description = reader.readString();
                                break;
                            case 4:
                                instance.image = new Intent.Message.Image();
                                reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Item.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.info) {
                        writer.writeMessage(1, instance.info, Intent.Message.SelectItemInfo.toBinaryWriter);
                    }
                    if (instance.title) {
                        writer.writeString(2, instance.title);
                    }
                    if (instance.description) {
                        writer.writeString(3, instance.description);
                    }
                    if (instance.image) {
                        writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                    }
                }
                get info() {
                    return this._info;
                }
                set info(value) {
                    this._info = value;
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get description() {
                    return this._description;
                }
                set description(value) {
                    this._description = value;
                }
                get image() {
                    return this._image;
                }
                set image(value) {
                    this._image = value;
                }
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            ListSelect.Item = Item;
        })(ListSelect = Message.ListSelect || (Message.ListSelect = {}));
        class CarouselSelect {
            /**
             * Creates an object and applies default Protobuf values
             * @param CarouselSelect value
             */
            constructor(value) {
                value = value || {};
                this.items = (value.items || []).map(m => new Intent.Message.CarouselSelect.Item(m));
                CarouselSelect.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                CarouselSelect.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new CarouselSelect();
                CarouselSelect.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.items = instance.items || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            const messageInitializer1 = new Intent.Message.CarouselSelect.Item();
                            reader.readMessage(messageInitializer1, Intent.Message.CarouselSelect.Item.fromBinaryReader);
                            (instance.items = instance.items || []).push(messageInitializer1);
                            break;
                        default:
                            reader.skipField();
                    }
                }
                CarouselSelect.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.items && instance.items.length) {
                    writer.writeRepeatedMessage(1, instance.items, Intent.Message.CarouselSelect.Item.toBinaryWriter);
                }
            }
            get items() {
                return this._items;
            }
            set items(value) {
                this._items = value;
            }
            toObject() {
                return {
                    items: (this.items || []).map(m => m.toObject())
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.CarouselSelect = CarouselSelect;
        (function (CarouselSelect) {
            class Item {
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value) {
                    value = value || {};
                    this.info = value.info
                        ? new Intent.Message.SelectItemInfo(value.info)
                        : undefined;
                    this.title = value.title;
                    this.description = value.description;
                    this.image = value.image
                        ? new Intent.Message.Image(value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                static toBinary(instance) {
                    const writer = new BinaryWriter();
                    Item.toBinaryWriter(instance, writer);
                    return writer.getResultBuffer();
                }
                static fromBinary(bytes) {
                    const instance = new Item();
                    Item.fromBinaryReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                static refineValues(instance) {
                    instance.info = instance.info || undefined;
                    instance.title = instance.title || '';
                    instance.description = instance.description || '';
                    instance.image = instance.image || undefined;
                }
                static fromBinaryReader(instance, reader) {
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                instance.info = new Intent.Message.SelectItemInfo();
                                reader.readMessage(instance.info, Intent.Message.SelectItemInfo.fromBinaryReader);
                                break;
                            case 2:
                                instance.title = reader.readString();
                                break;
                            case 3:
                                instance.description = reader.readString();
                                break;
                            case 4:
                                instance.image = new Intent.Message.Image();
                                reader.readMessage(instance.image, Intent.Message.Image.fromBinaryReader);
                                break;
                            default:
                                reader.skipField();
                        }
                    }
                    Item.refineValues(instance);
                }
                static toBinaryWriter(instance, writer) {
                    if (instance.info) {
                        writer.writeMessage(1, instance.info, Intent.Message.SelectItemInfo.toBinaryWriter);
                    }
                    if (instance.title) {
                        writer.writeString(2, instance.title);
                    }
                    if (instance.description) {
                        writer.writeString(3, instance.description);
                    }
                    if (instance.image) {
                        writer.writeMessage(4, instance.image, Intent.Message.Image.toBinaryWriter);
                    }
                }
                get info() {
                    return this._info;
                }
                set info(value) {
                    this._info = value;
                }
                get title() {
                    return this._title;
                }
                set title(value) {
                    this._title = value;
                }
                get description() {
                    return this._description;
                }
                set description(value) {
                    this._description = value;
                }
                get image() {
                    return this._image;
                }
                set image(value) {
                    this._image = value;
                }
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
                    };
                }
                toJSON() {
                    return this.toObject();
                }
            }
            CarouselSelect.Item = Item;
        })(CarouselSelect = Message.CarouselSelect || (Message.CarouselSelect = {}));
        class HTMLText {
            /**
             * Creates an object and applies default Protobuf values
             * @param HTMLText value
             */
            constructor(value) {
                value = value || {};
                this.text = (value.text || []).slice();
                HTMLText.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                HTMLText.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new HTMLText();
                HTMLText.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.text = instance.text || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            (instance.text = instance.text || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                HTMLText.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.text && instance.text.length) {
                    writer.writeRepeatedString(1, instance.text);
                }
            }
            get text() {
                return this._text;
            }
            set text(value) {
                this._text = value;
            }
            toObject() {
                return {
                    text: (this.text || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.HTMLText = HTMLText;
        class Video {
            /**
             * Creates an object and applies default Protobuf values
             * @param Video value
             */
            constructor(value) {
                value = value || {};
                this.uri = value.uri;
                this.accessibilityText = value.accessibilityText;
                Video.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Video.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Video();
                Video.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.uri = instance.uri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.uri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Video.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.uri) {
                    writer.writeString(1, instance.uri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Video = Video;
        class Audio {
            /**
             * Creates an object and applies default Protobuf values
             * @param Audio value
             */
            constructor(value) {
                value = value || {};
                this.uri = value.uri;
                this.accessibilityText = value.accessibilityText;
                Audio.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                Audio.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new Audio();
                Audio.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.uri = instance.uri || '';
                instance.accessibilityText = instance.accessibilityText || '';
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.uri = reader.readString();
                            break;
                        case 2:
                            instance.accessibilityText = reader.readString();
                            break;
                        default:
                            reader.skipField();
                    }
                }
                Audio.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.uri) {
                    writer.writeString(1, instance.uri);
                }
                if (instance.accessibilityText) {
                    writer.writeString(2, instance.accessibilityText);
                }
            }
            get uri() {
                return this._uri;
            }
            set uri(value) {
                this._uri = value;
            }
            get accessibilityText() {
                return this._accessibilityText;
            }
            set accessibilityText(value) {
                this._accessibilityText = value;
            }
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.Audio = Audio;
        class SelectItemInfo {
            /**
             * Creates an object and applies default Protobuf values
             * @param SelectItemInfo value
             */
            constructor(value) {
                value = value || {};
                this.key = value.key;
                this.synonyms = (value.synonyms || []).slice();
                SelectItemInfo.refineValues(this);
            }
            static toBinary(instance) {
                const writer = new BinaryWriter();
                SelectItemInfo.toBinaryWriter(instance, writer);
                return writer.getResultBuffer();
            }
            static fromBinary(bytes) {
                const instance = new SelectItemInfo();
                SelectItemInfo.fromBinaryReader(instance, new BinaryReader(bytes));
                return instance;
            }
            static refineValues(instance) {
                instance.key = instance.key || '';
                instance.synonyms = instance.synonyms || [];
            }
            static fromBinaryReader(instance, reader) {
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            instance.key = reader.readString();
                            break;
                        case 2:
                            (instance.synonyms = instance.synonyms || []).push(reader.readString());
                            break;
                        default:
                            reader.skipField();
                    }
                }
                SelectItemInfo.refineValues(instance);
            }
            static toBinaryWriter(instance, writer) {
                if (instance.key) {
                    writer.writeString(1, instance.key);
                }
                if (instance.synonyms && instance.synonyms.length) {
                    writer.writeRepeatedString(2, instance.synonyms);
                }
            }
            get key() {
                return this._key;
            }
            set key(value) {
                this._key = value;
            }
            get synonyms() {
                return this._synonyms;
            }
            set synonyms(value) {
                this._synonyms = value;
            }
            toObject() {
                return {
                    key: this.key,
                    synonyms: (this.synonyms || []).slice()
                };
            }
            toJSON() {
                return this.toObject();
            }
        }
        Message.SelectItemInfo = SelectItemInfo;
    })(Message = Intent.Message || (Intent.Message = {}));
    class FollowupIntentInfo {
        /**
         * Creates an object and applies default Protobuf values
         * @param FollowupIntentInfo value
         */
        constructor(value) {
            value = value || {};
            this.followupIntentName = value.followupIntentName;
            this.parentFollowupIntentName = value.parentFollowupIntentName;
            FollowupIntentInfo.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            FollowupIntentInfo.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new FollowupIntentInfo();
            FollowupIntentInfo.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.followupIntentName = instance.followupIntentName || '';
            instance.parentFollowupIntentName =
                instance.parentFollowupIntentName || '';
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.followupIntentName = reader.readString();
                        break;
                    case 2:
                        instance.parentFollowupIntentName = reader.readString();
                        break;
                    default:
                        reader.skipField();
                }
            }
            FollowupIntentInfo.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.followupIntentName) {
                writer.writeString(1, instance.followupIntentName);
            }
            if (instance.parentFollowupIntentName) {
                writer.writeString(2, instance.parentFollowupIntentName);
            }
        }
        get followupIntentName() {
            return this._followupIntentName;
        }
        set followupIntentName(value) {
            this._followupIntentName = value;
        }
        get parentFollowupIntentName() {
            return this._parentFollowupIntentName;
        }
        set parentFollowupIntentName(value) {
            this._parentFollowupIntentName = value;
        }
        toObject() {
            return {
                followupIntentName: this.followupIntentName,
                parentFollowupIntentName: this.parentFollowupIntentName
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    Intent.FollowupIntentInfo = FollowupIntentInfo;
})(Intent || (Intent = {}));
export class ListIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        this.pageToken = value.pageToken;
        this.filterByCategory = value.filterByCategory;
        this.sortByField = value.sortByField
            ? new IntentSorting(value.sortByField)
            : undefined;
        ListIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListIntentsRequest();
        ListIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.filterByCategory = instance.filterByCategory || 0;
        instance.sortByField = instance.sortByField || undefined;
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
                    instance.intentView = reader.readEnum();
                    break;
                case 5:
                    instance.pageToken = reader.readString();
                    break;
                case 6:
                    instance.filterByCategory = reader.readEnum();
                    break;
                case 7:
                    instance.sortByField = new IntentSorting();
                    reader.readMessage(instance.sortByField, IntentSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(3, instance.intentView);
        }
        if (instance.pageToken) {
            writer.writeString(5, instance.pageToken);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(6, instance.filterByCategory);
        }
        if (instance.sortByField) {
            writer.writeMessage(7, instance.sortByField, IntentSorting.toBinaryWriter);
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
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentView: this.intentView,
            pageToken: this.pageToken,
            filterByCategory: this.filterByCategory,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListIntentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        this.nextPageToken = value.nextPageToken;
        ListIntentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListIntentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListIntentsResponse();
        ListIntentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListIntentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        this.pageToken = value.pageToken;
        GetIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetIntentRequest();
        GetIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
        instance.pageToken = instance.pageToken || '';
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
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.intentView = reader.readEnum();
                    break;
                case 10:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(3, instance.intentView);
        }
        if (instance.pageToken) {
            writer.writeString(10, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode,
            intentView: this.intentView,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CreateIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.intent = value.intent ? new Intent(value.intent) : undefined;
        this.languageCode = value.languageCode;
        this.intentView = value.intentView;
        CreateIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateIntentRequest();
        CreateIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.intent = instance.intent || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.intentView = instance.intentView || 0;
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
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intent) {
            writer.writeMessage(2, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.intentView) {
            writer.writeEnum(4, instance.intentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.intent = value.intent ? new Intent(value.intent) : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new googleProtobuf005.FieldMask(value.updateMask)
            : undefined;
        this.intentView = value.intentView;
        UpdateIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateIntentRequest();
        UpdateIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intent = instance.intent || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
        instance.intentView = instance.intentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.intent = new Intent();
                    reader.readMessage(instance.intent, Intent.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.updateMask = new googleProtobuf005.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf005.FieldMask.fromBinaryReader);
                    break;
                case 4:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intent) {
            writer.writeMessage(1, instance.intent, Intent.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, googleProtobuf005.FieldMask.toBinaryWriter);
        }
        if (instance.intentView) {
            writer.writeEnum(4, instance.intentView);
        }
    }
    get intent() {
        return this._intent;
    }
    set intent(value) {
        this._intent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteIntentRequest();
        DeleteIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchUpdateIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsRequest value
     */
    constructor(value) {
        this._intentBatch = BatchUpdateIntentsRequest.IntentBatchCase.none;
        value = value || {};
        this.parent = value.parent;
        this.intentBatchUri = value.intentBatchUri;
        this.intentBatchInline = value.intentBatchInline
            ? new IntentBatch(value.intentBatchInline)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new googleProtobuf005.FieldMask(value.updateMask)
            : undefined;
        this.intentView = value.intentView;
        BatchUpdateIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateIntentsRequest();
        BatchUpdateIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
        instance.intentView = instance.intentView || 0;
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
                    instance.intentBatchUri = reader.readString();
                    break;
                case 3:
                    instance.intentBatchInline = new IntentBatch();
                    reader.readMessage(instance.intentBatchInline, IntentBatch.fromBinaryReader);
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new googleProtobuf005.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf005.FieldMask.fromBinaryReader);
                    break;
                case 6:
                    instance.intentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intentBatchUri || instance.intentBatchUri === '') {
            writer.writeString(2, instance.intentBatchUri);
        }
        if (instance.intentBatchInline) {
            writer.writeMessage(3, instance.intentBatchInline, IntentBatch.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, googleProtobuf005.FieldMask.toBinaryWriter);
        }
        if (instance.intentView) {
            writer.writeEnum(6, instance.intentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intentBatchUri() {
        return this._intentBatchUri;
    }
    set intentBatchUri(value) {
        if (value !== undefined && value !== null) {
            this._intentBatchInline = undefined;
            this._intentBatch =
                BatchUpdateIntentsRequest.IntentBatchCase.intentBatchUri;
        }
        this._intentBatchUri = value;
    }
    get intentBatchInline() {
        return this._intentBatchInline;
    }
    set intentBatchInline(value) {
        if (value !== undefined && value !== null) {
            this._intentBatchUri = undefined;
            this._intentBatch =
                BatchUpdateIntentsRequest.IntentBatchCase.intentBatchInline;
        }
        this._intentBatchInline = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get intentView() {
        return this._intentView;
    }
    set intentView(value) {
        this._intentView = value;
    }
    get intentBatch() {
        return this._intentBatch;
    }
    toObject() {
        return {
            parent: this.parent,
            intentBatchUri: this.intentBatchUri,
            intentBatchInline: this.intentBatchInline
                ? this.intentBatchInline.toObject()
                : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            intentView: this.intentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (BatchUpdateIntentsRequest) {
    let IntentBatchCase;
    (function (IntentBatchCase) {
        IntentBatchCase[IntentBatchCase["none"] = 0] = "none";
        IntentBatchCase[IntentBatchCase["intentBatchUri"] = 1] = "intentBatchUri";
        IntentBatchCase[IntentBatchCase["intentBatchInline"] = 2] = "intentBatchInline";
    })(IntentBatchCase = BatchUpdateIntentsRequest.IntentBatchCase || (BatchUpdateIntentsRequest.IntentBatchCase = {}));
})(BatchUpdateIntentsRequest || (BatchUpdateIntentsRequest = {}));
export class BatchUpdateIntentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        BatchUpdateIntentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateIntentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateIntentsResponse();
        BatchUpdateIntentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateIntentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchDeleteIntentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteIntentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.intents = (value.intents || []).map(m => new Intent(m));
        BatchDeleteIntentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteIntentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteIntentsRequest();
        BatchDeleteIntentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.intents = instance.intents || [];
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
                    const messageInitializer2 = new Intent();
                    reader.readMessage(messageInitializer2, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer2);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteIntentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(2, instance.intents, Intent.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            parent: this.parent,
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class IntentBatch {
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentBatch value
     */
    constructor(value) {
        value = value || {};
        this.intents = (value.intents || []).map(m => new Intent(m));
        IntentBatch.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        IntentBatch.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new IntentBatch();
        IntentBatch.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.intents = instance.intents || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Intent();
                    reader.readMessage(messageInitializer1, Intent.fromBinaryReader);
                    (instance.intents = instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        IntentBatch.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.intents && instance.intents.length) {
            writer.writeRepeatedMessage(1, instance.intents, Intent.toBinaryWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class IntentSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        IntentSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        IntentSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new IntentSorting();
        IntentSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        IntentSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (IntentSorting) {
    let IntentSortingField;
    (function (IntentSortingField) {
        IntentSortingField[IntentSortingField["noIntentSorting"] = 0] = "noIntentSorting";
        IntentSortingField[IntentSortingField["sortIntentByName"] = 1] = "sortIntentByName";
        IntentSortingField[IntentSortingField["sortIntentByCreationDate"] = 2] = "sortIntentByCreationDate";
        IntentSortingField[IntentSortingField["sortIntentByLastUpdated"] = 3] = "sortIntentByLastUpdated";
        IntentSortingField[IntentSortingField["sortIntentByUsersaysCount"] = 4] = "sortIntentByUsersaysCount";
    })(IntentSortingField = IntentSorting.IntentSortingField || (IntentSorting.IntentSortingField = {}));
})(IntentSorting || (IntentSorting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvaW50ZW50LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFFekUsT0FBTyxLQUFLLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUk1RCxPQUFPLEtBQUssaUJBQWlCLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE1BQU0sQ0FBTixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsNkVBQXlCLENBQUE7SUFDekIsK0RBQWtCLENBQUE7SUFDbEIscUVBQXFCLENBQUE7SUFDckIscUVBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUxXLFVBQVUsS0FBVixVQUFVLFFBS3JCO0FBQ0QsTUFBTSxDQUFOLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN4QiwrREFBYyxDQUFBO0lBQ2QsdUVBQWtCLENBQUE7SUFDbEIsK0VBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBQ0QsTUFBTSxPQUFPLE1BQU07SUE2UmpCOzs7T0FHRztJQUNILFlBQVksS0FBZ0M7UUFDMUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNu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YmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBHcnBjTWVzc2FnZSwgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAxIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDIgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlTG9uZ3J1bm5pbmcwMDMgZnJvbSAnLi4vLi4vZ29vZ2xlL2xvbmdydW5uaW5nL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2VtcHR5LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9maWVsZC1tYXNrLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA2IGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3QucGInO1xuZXhwb3J0IGVudW0gSW50ZW50VmlldyB7XG4gIGludGVudFZpZXdVbnNwZWNpZmllZCA9IDAsXG4gIGludGVudFZpZXdGdWxsID0gMSxcbiAgaW50ZW50Vmlld1BhcnRpYWwgPSAyLFxuICBpbnRlbnRWaWV3U2hhbGxvdyA9IDNcbn1cbmV4cG9ydCBlbnVtIEludGVudENhdGVnb3J5IHtcbiAgYWxsSW50ZW50cyA9IDAsXG4gIGRlZmF1bHRJbnRlbnRzID0gMSxcbiAgdXNlckRlZmluZWRJbnRlbnRzID0gMlxufVxuZXhwb3J0IGNsYXNzIEludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBJbnRlbnQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSW50ZW50LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEludGVudCgpO1xuICAgIEludGVudC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSW50ZW50KSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSBpbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS53ZWJob29rU3RhdGUgPSBpbnN0YW5jZS53ZWJob29rU3RhdGUgfHwgMDtcbiAgICBpbnN0YW5jZS5wcmlvcml0eSA9IGluc3RhbmNlLnByaW9yaXR5IHx8IDA7XG4gICAgaW5zdGFuY2UuaXNGYWxsYmFjayA9IGluc3RhbmNlLmlzRmFsbGJhY2sgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UubWxEaXNhYmxlZCA9IGluc3RhbmNlLm1sRGlzYWJsZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuaW5wdXRDb250ZXh0TmFtZXMgPSBpbnN0YW5jZS5pbnB1dENvbnRleHROYW1lcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBpbnN0YW5jZS5ldmVudHMgfHwgW107XG4gICAgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzID0gaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzIHx8IFtdO1xuICAgIGluc3RhbmNlLmFjdGlvbiA9IGluc3RhbmNlLmFjdGlvbiB8fCAnJztcbiAgICBpbnN0YW5jZS5vdXRwdXRDb250ZXh0cyA9IGluc3RhbmNlLm91dHB1dENvbnRleHRzIHx8IFtdO1xuICAgIGluc3RhbmNlLnJlc2V0Q29udGV4dHMgPSBpbnN0YW5jZS5yZXNldENvbnRleHRzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnBhcmFtZXRlcnMgPSBpbnN0YW5jZS5wYXJhbWV0ZXJzIHx8IFtdO1xuICAgIGluc3RhbmNlLm1lc3NhZ2VzID0gaW5zdGFuY2UubWVzc2FnZXMgfHwgW107XG4gICAgaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zID0gaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zIHx8IFtdO1xuICAgIGluc3RhbmNlLnJvb3RGb2xsb3d1cEludGVudE5hbWUgPSBpbnN0YW5jZS5yb290Rm9sbG93dXBJbnRlbnROYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSA9IGluc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5mb2xsb3d1cEludGVudEluZm8gPSBpbnN0YW5jZS5mb2xsb3d1cEludGVudEluZm8gfHwgW107XG4gICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IGluc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gICAgaW5zdGFuY2UuZG9tYWluTmFtZSA9IGluc3RhbmNlLmRvbWFpbk5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UuaXNTdGFydE9mRGV2aWF0aW9uID0gaW5zdGFuY2UuaXNTdGFydE9mRGV2aWF0aW9uIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24gPSBpbnN0YW5jZS5pc0VuZE9mRGV2aWF0aW9uIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ291bnQgPSBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNvdW50IHx8IDA7XG4gICAgaW5zdGFuY2Uuc3RhdHVzID0gaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogSW50ZW50LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS53ZWJob29rU3RhdGUgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnByaW9yaXR5ID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuaXNGYWxsYmFjayA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIGluc3RhbmNlLm1sRGlzYWJsZWQgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIChpbnN0YW5jZS5pbnB1dENvbnRleHROYW1lcyA9IGluc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAoaW5zdGFuY2UuZXZlbnRzID0gaW5zdGFuY2UuZXZlbnRzIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOSA9IG5ldyBJbnRlbnQuVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5LFxuICAgICAgICAgICAgSW50ZW50LlRyYWluaW5nUGhyYXNlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZXMgPSBpbnN0YW5jZS50cmFpbmluZ1BocmFzZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBpbnN0YW5jZS5hY3Rpb24gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjExID0gbmV3IG9uZGV3b05sdTAwMS5Db250ZXh0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTEsXG4gICAgICAgICAgICBvbmRld29ObHUwMDEuQ29udGV4dC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgPSBpbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjExXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBpbnN0YW5jZS5yZXNldENvbnRleHRzID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMTMgPSBuZXcgSW50ZW50LlBhcmFtZXRlcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEzLFxuICAgICAgICAgICAgSW50ZW50LlBhcmFtZXRlci5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UucGFyYW1ldGVycyA9IGluc3RhbmNlLnBhcmFtZXRlcnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxM1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMTQgPSBuZXcgSW50ZW50Lk1lc3NhZ2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxNCxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5tZXNzYWdlcyA9IGluc3RhbmNlLm1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIChpbnN0YW5jZS5kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMgPVxuICAgICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zIHx8IFtdKS5wdXNoKHJlYWRlci5yZWFkRW51bSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBpbnN0YW5jZS5yb290Rm9sbG93dXBJbnRlbnROYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjE4ID0gbmV3IEludGVudC5Gb2xsb3d1cEludGVudEluZm8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxOCxcbiAgICAgICAgICAgIEludGVudC5Gb2xsb3d1cEludGVudEluZm8uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mbyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5mb2xsb3d1cEludGVudEluZm8gfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMTgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIGluc3RhbmNlLmRvbWFpbk5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIGluc3RhbmNlLmlzU3RhcnRPZkRldmlhdGlvbiA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIGluc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24gPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZUNvdW50ID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgIGluc3RhbmNlLnN0YXR1cyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBJbnRlbnQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSW50ZW50LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndlYmhvb2tTdGF0ZSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg2LCBpbnN0YW5jZS53ZWJob29rU3RhdGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucHJpb3JpdHkpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDMsIGluc3RhbmNlLnByaW9yaXR5KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmlzRmFsbGJhY2spIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNCwgaW5zdGFuY2UuaXNGYWxsYmFjayk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tbERpc2FibGVkKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDE5LCBpbnN0YW5jZS5tbERpc2FibGVkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzICYmIGluc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNywgaW5zdGFuY2UuaW5wdXRDb250ZXh0TmFtZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZXZlbnRzICYmIGluc3RhbmNlLmV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDgsIGluc3RhbmNlLmV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50cmFpbmluZ1BocmFzZXMgJiYgaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBpbnN0YW5jZS50cmFpbmluZ1BocmFzZXMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuVHJhaW5pbmdQaHJhc2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5hY3Rpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxMCwgaW5zdGFuY2UuYWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm91dHB1dENvbnRleHRzICYmIGluc3RhbmNlLm91dHB1dENvbnRleHRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDEuQ29udGV4dC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc2V0Q29udGV4dHMpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMTIsIGluc3RhbmNlLnJlc2V0Q29udGV4dHMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFyYW1ldGVycyAmJiBpbnN0YW5jZS5wYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVycyBhcyBhbnksXG4gICAgICAgIEludGVudC5QYXJhbWV0ZXIudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5tZXNzYWdlcyAmJiBpbnN0YW5jZS5tZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMTQsXG4gICAgICAgIGluc3RhbmNlLm1lc3NhZ2VzIGFzIGFueSxcbiAgICAgICAgSW50ZW50Lk1lc3NhZ2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyAmJlxuICAgICAgaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zLmxlbmd0aFxuICAgICkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRFbnVtKDE1LCBpbnN0YW5jZS5kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uucm9vdEZvbGxvd3VwSW50ZW50TmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDE2LCBpbnN0YW5jZS5yb290Rm9sbG93dXBJbnRlbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDE3LCBpbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZm9sbG93dXBJbnRlbnRJbmZvICYmIGluc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mby5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMTgsXG4gICAgICAgIGluc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mbyBhcyBhbnksXG4gICAgICAgIEludGVudC5Gb2xsb3d1cEludGVudEluZm8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMzAsIGluc3RhbmNlLm5leHRQYWdlVG9rZW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZG9tYWluTmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMxLCBpbnN0YW5jZS5kb21haW5OYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmlzU3RhcnRPZkRldmlhdGlvbikge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzMiwgaW5zdGFuY2UuaXNTdGFydE9mRGV2aWF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24pIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMzMsIGluc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDb3VudCkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMzQsIGluc3RhbmNlLnRyYWluaW5nUGhyYXNlQ291bnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdHVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDM1LCBpbnN0YW5jZS5zdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF93ZWJob29rU3RhdGU/OiBJbnRlbnQuV2ViaG9va1N0YXRlO1xuICBwcml2YXRlIF9wcmlvcml0eT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNGYWxsYmFjaz86IGJvb2xlYW47XG4gIHByaXZhdGUgX21sRGlzYWJsZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9pbnB1dENvbnRleHROYW1lcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9ldmVudHM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VzPzogSW50ZW50LlRyYWluaW5nUGhyYXNlW107XG4gIHByaXZhdGUgX2FjdGlvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0cHV0Q29udGV4dHM/OiBvbmRld29ObHUwMDEuQ29udGV4dFtdO1xuICBwcml2YXRlIF9yZXNldENvbnRleHRzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcGFyYW1ldGVycz86IEludGVudC5QYXJhbWV0ZXJbXTtcbiAgcHJpdmF0ZSBfbWVzc2FnZXM/OiBJbnRlbnQuTWVzc2FnZVtdO1xuICBwcml2YXRlIF9kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXM/OiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybVtdO1xuICBwcml2YXRlIF9yb290Rm9sbG93dXBJbnRlbnROYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXJlbnRGb2xsb3d1cEludGVudE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbGxvd3VwSW50ZW50SW5mbz86IEludGVudC5Gb2xsb3d1cEludGVudEluZm9bXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZG9tYWluTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfaXNTdGFydE9mRGV2aWF0aW9uPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNFbmRPZkRldmlhdGlvbj86IGJvb2xlYW47XG4gIHByaXZhdGUgX3RyYWluaW5nUGhyYXNlQ291bnQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3N0YXR1cz86IEludGVudC5JbnRlbnRTdGF0dXM7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBJbnRlbnQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbnRlbnQ+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSB2YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLndlYmhvb2tTdGF0ZSA9IHZhbHVlLndlYmhvb2tTdGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWUucHJpb3JpdHk7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gdmFsdWUuaXNGYWxsYmFjaztcbiAgICB0aGlzLm1sRGlzYWJsZWQgPSB2YWx1ZS5tbERpc2FibGVkO1xuICAgIHRoaXMuaW5wdXRDb250ZXh0TmFtZXMgPSAodmFsdWUuaW5wdXRDb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5ldmVudHMgPSAodmFsdWUuZXZlbnRzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMudHJhaW5pbmdQaHJhc2VzID0gKHZhbHVlLnRyYWluaW5nUGhyYXNlcyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSW50ZW50LlRyYWluaW5nUGhyYXNlKG0pXG4gICAgKTtcbiAgICB0aGlzLmFjdGlvbiA9IHZhbHVlLmFjdGlvbjtcbiAgICB0aGlzLm91dHB1dENvbnRleHRzID0gKHZhbHVlLm91dHB1dENvbnRleHRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDEuQ29udGV4dChtKVxuICAgICk7XG4gICAgdGhpcy5yZXNldENvbnRleHRzID0gdmFsdWUucmVzZXRDb250ZXh0cztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSAodmFsdWUucGFyYW1ldGVycyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSW50ZW50LlBhcmFtZXRlcihtKVxuICAgICk7XG4gICAgdGhpcy5tZXNzYWdlcyA9ICh2YWx1ZS5tZXNzYWdlcyB8fCBbXSkubWFwKG0gPT4gbmV3IEludGVudC5NZXNzYWdlKG0pKTtcbiAgICB0aGlzLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyA9IChcbiAgICAgIHZhbHVlLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyB8fCBbXVxuICAgICkuc2xpY2UoKTtcbiAgICB0aGlzLnJvb3RGb2xsb3d1cEludGVudE5hbWUgPSB2YWx1ZS5yb290Rm9sbG93dXBJbnRlbnROYW1lO1xuICAgIHRoaXMucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWUucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lO1xuICAgIHRoaXMuZm9sbG93dXBJbnRlbnRJbmZvID0gKHZhbHVlLmZvbGxvd3VwSW50ZW50SW5mbyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mbyhtKVxuICAgICk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gdmFsdWUubmV4dFBhZ2VUb2tlbjtcbiAgICB0aGlzLmRvbWFpbk5hbWUgPSB2YWx1ZS5kb21haW5OYW1lO1xuICAgIHRoaXMuaXNTdGFydE9mRGV2aWF0aW9uID0gdmFsdWUuaXNTdGFydE9mRGV2aWF0aW9uO1xuICAgIHRoaXMuaXNFbmRPZkRldmlhdGlvbiA9IHZhbHVlLmlzRW5kT2ZEZXZpYXRpb247XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUNvdW50ID0gdmFsdWUudHJhaW5pbmdQaHJhc2VDb3VudDtcbiAgICB0aGlzLnN0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICBJbnRlbnQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gIH1cbiAgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB3ZWJob29rU3RhdGUoKTogSW50ZW50LldlYmhvb2tTdGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYmhvb2tTdGF0ZTtcbiAgfVxuICBzZXQgd2ViaG9va1N0YXRlKHZhbHVlOiBJbnRlbnQuV2ViaG9va1N0YXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fd2ViaG9va1N0YXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByaW9yaXR5KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG4gIHNldCBwcmlvcml0eSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNGYWxsYmFjaygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNGYWxsYmFjaztcbiAgfVxuICBzZXQgaXNGYWxsYmFjayh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzRmFsbGJhY2sgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWxEaXNhYmxlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWxEaXNhYmxlZDtcbiAgfVxuICBzZXQgbWxEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21sRGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW5wdXRDb250ZXh0TmFtZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dENvbnRleHROYW1lcztcbiAgfVxuICBzZXQgaW5wdXRDb250ZXh0TmFtZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW5wdXRDb250ZXh0TmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZXZlbnRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICB9XG4gIHNldCBldmVudHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHRyYWluaW5nUGhyYXNlcygpOiBJbnRlbnQuVHJhaW5pbmdQaHJhc2VbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlcztcbiAgfVxuICBzZXQgdHJhaW5pbmdQaHJhc2VzKHZhbHVlOiBJbnRlbnQuVHJhaW5pbmdQaHJhc2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBhY3Rpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG4gIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBvdXRwdXRDb250ZXh0cygpOiBvbmRld29ObHUwMDEuQ29udGV4dFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0Q29udGV4dHM7XG4gIH1cbiAgc2V0IG91dHB1dENvbnRleHRzKHZhbHVlOiBvbmRld29ObHUwMDEuQ29udGV4dFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3V0cHV0Q29udGV4dHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzZXRDb250ZXh0cygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXRDb250ZXh0cztcbiAgfVxuICBzZXQgcmVzZXRDb250ZXh0cyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc2V0Q29udGV4dHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyYW1ldGVycygpOiBJbnRlbnQuUGFyYW1ldGVyW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBwYXJhbWV0ZXJzKHZhbHVlOiBJbnRlbnQuUGFyYW1ldGVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VzKCk6IEludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlcztcbiAgfVxuICBzZXQgbWVzc2FnZXModmFsdWU6IEludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMoKTogSW50ZW50Lk1lc3NhZ2UuUGxhdGZvcm1bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZXNwb25zZVBsYXRmb3JtcztcbiAgfVxuICBzZXQgZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJvb3RGb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdEZvbGxvd3VwSW50ZW50TmFtZTtcbiAgfVxuICBzZXQgcm9vdEZvbGxvd3VwSW50ZW50TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcm9vdEZvbGxvd3VwSW50ZW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lO1xuICB9XG4gIHNldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudEZvbGxvd3VwSW50ZW50TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBmb2xsb3d1cEludGVudEluZm8oKTogSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mb1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9sbG93dXBJbnRlbnRJbmZvO1xuICB9XG4gIHNldCBmb2xsb3d1cEludGVudEluZm8odmFsdWU6IEludGVudC5Gb2xsb3d1cEludGVudEluZm9bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZvbGxvd3VwSW50ZW50SW5mbyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZG9tYWluTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG4gIHNldCBkb21haW5OYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlzU3RhcnRPZkRldmlhdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdGFydE9mRGV2aWF0aW9uO1xuICB9XG4gIHNldCBpc1N0YXJ0T2ZEZXZpYXRpb24odmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pc1N0YXJ0T2ZEZXZpYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNFbmRPZkRldmlhdGlvbigpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNFbmRPZkRldmlhdGlvbjtcbiAgfVxuICBzZXQgaXNFbmRPZkRldmlhdGlvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzRW5kT2ZEZXZpYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VDb3VudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmluZ1BocmFzZUNvdW50O1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZUNvdW50KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90cmFpbmluZ1BocmFzZUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXR1cygpOiBJbnRlbnQuSW50ZW50U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IEludGVudC5JbnRlbnRTdGF0dXMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICB3ZWJob29rU3RhdGU6IHRoaXMud2ViaG9va1N0YXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBpc0ZhbGxiYWNrOiB0aGlzLmlzRmFsbGJhY2ssXG4gICAgICBtbERpc2FibGVkOiB0aGlzLm1sRGlzYWJsZWQsXG4gICAgICBpbnB1dENvbnRleHROYW1lczogKHRoaXMuaW5wdXRDb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBldmVudHM6ICh0aGlzLmV2ZW50cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHRyYWluaW5nUGhyYXNlczogKHRoaXMudHJhaW5pbmdQaHJhc2VzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgIG91dHB1dENvbnRleHRzOiAodGhpcy5vdXRwdXRDb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIHJlc2V0Q29udGV4dHM6IHRoaXMucmVzZXRDb250ZXh0cyxcbiAgICAgIHBhcmFtZXRlcnM6ICh0aGlzLnBhcmFtZXRlcnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBtZXNzYWdlczogKHRoaXMubWVzc2FnZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBkZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXM6ICh0aGlzLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHJvb3RGb2xsb3d1cEludGVudE5hbWU6IHRoaXMucm9vdEZvbGxvd3VwSW50ZW50TmFtZSxcbiAgICAgIHBhcmVudEZvbGxvd3VwSW50ZW50TmFtZTogdGhpcy5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUsXG4gICAgICBmb2xsb3d1cEludGVudEluZm86ICh0aGlzLmZvbGxvd3VwSW50ZW50SW5mbyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuLFxuICAgICAgZG9tYWluTmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgaXNTdGFydE9mRGV2aWF0aW9uOiB0aGlzLmlzU3RhcnRPZkRldmlhdGlvbixcbiAgICAgIGlzRW5kT2ZEZXZpYXRpb246IHRoaXMuaXNFbmRPZkRldmlhdGlvbixcbiAgICAgIHRyYWluaW5nUGhyYXNlQ291bnQ6IHRoaXMudHJhaW5pbmdQaHJhc2VDb3VudCxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXNcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEludGVudCB7XG4gIGV4cG9ydCBlbnVtIEludGVudFN0YXR1cyB7XG4gICAgYWN0aXZlID0gMCxcbiAgICBpbmFjdGl2ZSA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBXZWJob29rU3RhdGUge1xuICAgIHdlYmhvb2tTdGF0ZVVuc3BlY2lmaWVkID0gMCxcbiAgICB3ZWJob29rU3RhdGVFbmFibGVkID0gMSxcbiAgICB3ZWJob29rU3RhdGVFbmFibGVkRm9yU2xvdEZpbGxpbmcgPSAyXG4gIH1cbiAgZXhwb3J0IGNsYXNzIFRyYWluaW5nUGhyYXNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVHJhaW5pbmdQaHJhc2UpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBUcmFpbmluZ1BocmFzZSkge1xuICAgICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS50eXBlID0gaW5zdGFuY2UudHlwZSB8fCAwO1xuICAgICAgaW5zdGFuY2UudGV4dCA9IGluc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5lbnRpdGllcyA9IGluc3RhbmNlLmVudGl0aWVzIHx8IFtdO1xuICAgICAgaW5zdGFuY2UudGltZXNBZGRlZENvdW50ID0gaW5zdGFuY2UudGltZXNBZGRlZENvdW50IHx8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW5zdGFuY2UudHlwZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaW5zdGFuY2UudGV4dCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgICAgSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgKGluc3RhbmNlLmVudGl0aWVzID0gaW5zdGFuY2UuZW50aXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBpbnN0YW5jZS50aW1lc0FkZGVkQ291bnQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFRyYWluaW5nUGhyYXNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBUcmFpbmluZ1BocmFzZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2UudHlwZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UudGV4dCkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UudGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZW50aXRpZXMgJiYgaW5zdGFuY2UuZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgICA0LFxuICAgICAgICAgIGluc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5LnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UudGltZXNBZGRlZENvdW50KSB7XG4gICAgICAgIHdyaXRlci53cml0ZUludDMyKDUsIGluc3RhbmNlLnRpbWVzQWRkZWRDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlPzogSW50ZW50LlRyYWluaW5nUGhyYXNlLlR5cGU7XG4gICAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgICBwcml2YXRlIF9lbnRpdGllcz86IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXTtcbiAgICBwcml2YXRlIF90aW1lc0FkZGVkQ291bnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAqIEBwYXJhbSBUcmFpbmluZ1BocmFzZSB2YWx1ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUcmFpbmluZ1BocmFzZT4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICAgIHRoaXMudGV4dCA9IHZhbHVlLnRleHQ7XG4gICAgICB0aGlzLmVudGl0aWVzID0gKHZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAoXG4gICAgICAgIG0gPT4gbmV3IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkobSlcbiAgICAgICk7XG4gICAgICB0aGlzLnRpbWVzQWRkZWRDb3VudCA9IHZhbHVlLnRpbWVzQWRkZWRDb3VudDtcbiAgICAgIFRyYWluaW5nUGhyYXNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB0eXBlKCk6IEludGVudC5UcmFpbmluZ1BocmFzZS5UeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBzZXQgdHlwZSh2YWx1ZTogSW50ZW50LlRyYWluaW5nUGhyYXNlLlR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgIH1cbiAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdGllcygpOiBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5W10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzO1xuICAgIH1cbiAgICBzZXQgZW50aXRpZXModmFsdWU6IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRpbWVzQWRkZWRDb3VudCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWVzQWRkZWRDb3VudDtcbiAgICB9XG4gICAgc2V0IHRpbWVzQWRkZWRDb3VudCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90aW1lc0FkZGVkQ291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdG9PYmplY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICAgIHRpbWVzQWRkZWRDb3VudDogdGhpcy50aW1lc0FkZGVkQ291bnRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgVHJhaW5pbmdQaHJhc2Uge1xuICAgIGV4cG9ydCBlbnVtIFR5cGUge1xuICAgICAgdHlwZVVuc3BlY2lmaWVkID0gMCxcbiAgICAgIGV4YW1wbGUgPSAxLFxuICAgICAgdGVtcGxhdGUgPSAyXG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBFbnRpdHkgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEVudGl0eSkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIEVudGl0eS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRW50aXR5KCk7XG4gICAgICAgIEVudGl0eS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRW50aXR5KSB7XG4gICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IGluc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2UuZW50aXR5VmFsdWVOYW1lID0gaW5zdGFuY2UuZW50aXR5VmFsdWVOYW1lIHx8ICcnO1xuICAgICAgICBpbnN0YW5jZS5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lID0gaW5zdGFuY2UuZW50aXR5VmFsdWVEaXNwbGF5TmFtZSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2Uuc3RhcnQgPSBpbnN0YW5jZS5zdGFydCB8fCAwO1xuICAgICAgICBpbnN0YW5jZS5lbmQgPSBpbnN0YW5jZS5lbmQgfHwgMDtcbiAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVyTmFtZSA9IGluc3RhbmNlLnBhcmFtZXRlck5hbWUgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLnBhcmFtZXRlckRpc3BsYXlOYW1lID0gaW5zdGFuY2UucGFyYW1ldGVyRGlzcGxheU5hbWUgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBFbnRpdHksIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlWYWx1ZU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UuZW50aXR5VmFsdWVEaXNwbGF5TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBpbnN0YW5jZS5zdGFydCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmVuZCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIGluc3RhbmNlLnBhcmFtZXRlck5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UucGFyYW1ldGVyRGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFbnRpdHkucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnRpdHksIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5lbnRpdHlWYWx1ZU5hbWUpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UuZW50aXR5VmFsdWVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2UuZW50aXR5VmFsdWVEaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhcnQpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVJbnQzMig2LCBpbnN0YW5jZS5zdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmVuZCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZUludDMyKDcsIGluc3RhbmNlLmVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLnBhcmFtZXRlck5hbWUpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoOCwgaW5zdGFuY2UucGFyYW1ldGVyTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLnBhcmFtZXRlckRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDksIGluc3RhbmNlLnBhcmFtZXRlckRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF9lbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2VudGl0eVR5cGVEaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2VudGl0eVZhbHVlTmFtZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2VudGl0eVZhbHVlRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9zdGFydD86IG51bWJlcjtcbiAgICAgIHByaXZhdGUgX2VuZD86IG51bWJlcjtcbiAgICAgIHByaXZhdGUgX3BhcmFtZXRlck5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9wYXJhbWV0ZXJEaXNwbGF5TmFtZT86IHN0cmluZztcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIEVudGl0eSB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RW50aXR5Pikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gdmFsdWUuZW50aXR5VHlwZU5hbWU7XG4gICAgICAgIHRoaXMuZW50aXR5VHlwZURpc3BsYXlOYW1lID0gdmFsdWUuZW50aXR5VHlwZURpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmVudGl0eVZhbHVlTmFtZSA9IHZhbHVlLmVudGl0eVZhbHVlTmFtZTtcbiAgICAgICAgdGhpcy5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lID0gdmFsdWUuZW50aXR5VmFsdWVEaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHZhbHVlLnN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IHZhbHVlLmVuZDtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJOYW1lID0gdmFsdWUucGFyYW1ldGVyTmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJEaXNwbGF5TmFtZSA9IHZhbHVlLnBhcmFtZXRlckRpc3BsYXlOYW1lO1xuICAgICAgICBFbnRpdHkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IGVudGl0eVR5cGVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBlbnRpdHlUeXBlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlRGlzcGxheU5hbWU7XG4gICAgICB9XG4gICAgICBzZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VHlwZURpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VmFsdWVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlWYWx1ZU5hbWU7XG4gICAgICB9XG4gICAgICBzZXQgZW50aXR5VmFsdWVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VmFsdWVOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VmFsdWVEaXNwbGF5TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5VmFsdWVEaXNwbGF5TmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBlbnRpdHlWYWx1ZURpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VmFsdWVEaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHN0YXJ0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICAgIH1cbiAgICAgIHNldCBzdGFydCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW5kKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gICAgICB9XG4gICAgICBzZXQgZW5kKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW5kID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgcGFyYW1ldGVyTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyTmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBwYXJhbWV0ZXJOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1ldGVyTmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHBhcmFtZXRlckRpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJEaXNwbGF5TmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBwYXJhbWV0ZXJEaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtZXRlckRpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgICAgICBlbnRpdHlUeXBlRGlzcGxheU5hbWU6IHRoaXMuZW50aXR5VHlwZURpc3BsYXlOYW1lLFxuICAgICAgICAgIGVudGl0eVZhbHVlTmFtZTogdGhpcy5lbnRpdHlWYWx1ZU5hbWUsXG4gICAgICAgICAgZW50aXR5VmFsdWVEaXNwbGF5TmFtZTogdGhpcy5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5lbmQsXG4gICAgICAgICAgcGFyYW1ldGVyTmFtZTogdGhpcy5wYXJhbWV0ZXJOYW1lLFxuICAgICAgICAgIHBhcmFtZXRlckRpc3BsYXlOYW1lOiB0aGlzLnBhcmFtZXRlckRpc3BsYXlOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgRW50aXR5IHt9XG4gIH1cbiAgZXhwb3J0IGNsYXNzIFBhcmFtZXRlciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFBhcmFtZXRlcikge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgUGFyYW1ldGVyLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGFyYW1ldGVyKCk7XG4gICAgICBQYXJhbWV0ZXIuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFBhcmFtZXRlcikge1xuICAgICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IGluc3RhbmNlLmRpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgaW5zdGFuY2UudmFsdWUgPSBpbnN0YW5jZS52YWx1ZSB8fCAnJztcbiAgICAgIGluc3RhbmNlLmRlZmF1bHRWYWx1ZSA9IGluc3RhbmNlLmRlZmF1bHRWYWx1ZSB8fCAnJztcbiAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUgPSBpbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5tYW5kYXRvcnkgPSBpbnN0YW5jZS5tYW5kYXRvcnkgfHwgZmFsc2U7XG4gICAgICBpbnN0YW5jZS5wcm9tcHRzID0gaW5zdGFuY2UucHJvbXB0cyB8fCBbXTtcbiAgICAgIGluc3RhbmNlLmlzTGlzdCA9IGluc3RhbmNlLmlzTGlzdCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUGFyYW1ldGVyLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaW5zdGFuY2UudmFsdWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdFZhbHVlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBpbnN0YW5jZS5tYW5kYXRvcnkgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIChpbnN0YW5jZS5wcm9tcHRzID0gaW5zdGFuY2UucHJvbXB0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGluc3RhbmNlLmlzTGlzdCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBQYXJhbWV0ZXIucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFBhcmFtZXRlciwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLnZhbHVlKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS52YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5kZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVOYW1lKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZURpc3BsYXlOYW1lKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyg2LCBpbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLm1hbmRhdG9yeSkge1xuICAgICAgICB3cml0ZXIud3JpdGVCb29sKDcsIGluc3RhbmNlLm1hbmRhdG9yeSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UucHJvbXB0cyAmJiBpbnN0YW5jZS5wcm9tcHRzLmxlbmd0aCkge1xuICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg4LCBpbnN0YW5jZS5wcm9tcHRzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5pc0xpc3QpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlQm9vbCg5LCBpbnN0YW5jZS5pc0xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VudGl0eVR5cGVOYW1lPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2VudGl0eVR5cGVEaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF9tYW5kYXRvcnk/OiBib29sZWFuO1xuICAgIHByaXZhdGUgX3Byb21wdHM/OiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIF9pc0xpc3Q/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgKiBAcGFyYW0gUGFyYW1ldGVyIHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBhcmFtZXRlcj4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHZhbHVlLmRpc3BsYXlOYW1lO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB2YWx1ZS5kZWZhdWx0VmFsdWU7XG4gICAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gdmFsdWUuZW50aXR5VHlwZU5hbWU7XG4gICAgICB0aGlzLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IHZhbHVlLmVudGl0eVR5cGVEaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMubWFuZGF0b3J5ID0gdmFsdWUubWFuZGF0b3J5O1xuICAgICAgdGhpcy5wcm9tcHRzID0gKHZhbHVlLnByb21wdHMgfHwgW10pLnNsaWNlKCk7XG4gICAgICB0aGlzLmlzTGlzdCA9IHZhbHVlLmlzTGlzdDtcbiAgICAgIFBhcmFtZXRlci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TmFtZTtcbiAgICB9XG4gICAgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0eVR5cGVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZU5hbWU7XG4gICAgfVxuICAgIHNldCBlbnRpdHlUeXBlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9lbnRpdHlUeXBlTmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZURpc3BsYXlOYW1lO1xuICAgIH1cbiAgICBzZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVR5cGVEaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFuZGF0b3J5KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX21hbmRhdG9yeTtcbiAgICB9XG4gICAgc2V0IG1hbmRhdG9yeSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbWFuZGF0b3J5ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwcm9tcHRzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9tcHRzO1xuICAgIH1cbiAgICBzZXQgcHJvbXB0cyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Byb21wdHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGlzTGlzdCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0xpc3Q7XG4gICAgfVxuICAgIHNldCBpc0xpc3QodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2lzTGlzdCA9IHZhbHVlO1xuICAgIH1cbiAgICB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgICAgZW50aXR5VHlwZURpc3BsYXlOYW1lOiB0aGlzLmVudGl0eVR5cGVEaXNwbGF5TmFtZSxcbiAgICAgICAgbWFuZGF0b3J5OiB0aGlzLm1hbmRhdG9yeSxcbiAgICAgICAgcHJvbXB0czogKHRoaXMucHJvbXB0cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgaXNMaXN0OiB0aGlzLmlzTGlzdFxuICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBQYXJhbWV0ZXIge31cbiAgZXhwb3J0IGNsYXNzIE1lc3NhZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBNZXNzYWdlKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBNZXNzYWdlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgTWVzc2FnZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTWVzc2FnZSkge1xuICAgICAgaW5zdGFuY2UucGxhdGZvcm0gPSBpbnN0YW5jZS5wbGF0Zm9ybSB8fCAwO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBNZXNzYWdlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGluc3RhbmNlLnRleHQgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuVGV4dCgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS50ZXh0LFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5UZXh0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpbnN0YW5jZS5pbWFnZSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZSgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5pbWFnZSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGluc3RhbmNlLnF1aWNrUmVwbGllcyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5RdWlja1JlcGxpZXMoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UucXVpY2tSZXBsaWVzLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5RdWlja1JlcGxpZXMuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGluc3RhbmNlLmNhcmQgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2FyZCgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5jYXJkLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5DYXJkLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBpbnN0YW5jZS5wYXlsb2FkID0gbmV3IGdvb2dsZVByb3RvYnVmMDA2LlN0cnVjdCgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5wYXlsb2FkLFxuICAgICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNi5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZXMoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZXMuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGluc3RhbmNlLmJhc2ljQ2FyZCA9IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UuYmFzaWNDYXJkLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGluc3RhbmNlLnN1Z2dlc3Rpb25zID0gbmV3IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25zKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIGluc3RhbmNlLnN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGluc3RhbmNlLmxpbmtPdXRTdWdnZXN0aW9uID0gbmV3IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIGluc3RhbmNlLmxpbmtPdXRTdWdnZXN0aW9uLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaW5rT3V0U3VnZ2VzdGlvbi5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIGluc3RhbmNlLmxpc3RTZWxlY3QgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdCgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5saXN0U2VsZWN0LFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgaW5zdGFuY2UuY2Fyb3VzZWxTZWxlY3QgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UuY2Fyb3VzZWxTZWxlY3QsXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgaW5zdGFuY2UuaHRtbFRleHQgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UuaHRtbFRleHQsXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkhUTUxUZXh0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgaW5zdGFuY2UudmlkZW8gPSBuZXcgSW50ZW50Lk1lc3NhZ2UuVmlkZW8oKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UudmlkZW8sXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlZpZGVvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgaW5zdGFuY2UuYXVkaW8gPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQXVkaW8oKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgaW5zdGFuY2UuYXVkaW8sXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkF1ZGlvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpbnN0YW5jZS5wbGF0Zm9ybSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBNZXNzYWdlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBNZXNzYWdlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgaWYgKGluc3RhbmNlLnRleHQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxLFxuICAgICAgICAgIGluc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlRleHQudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5pbWFnZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgaW5zdGFuY2UuaW1hZ2UgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UucXVpY2tSZXBsaWVzKSB7XG4gICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMyxcbiAgICAgICAgICBpbnN0YW5jZS5xdWlja1JlcGxpZXMgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcy50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmNhcmQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA0LFxuICAgICAgICAgIGluc3RhbmNlLmNhcmQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcmQudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5wYXlsb2FkKSB7XG4gICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgNSxcbiAgICAgICAgICBpbnN0YW5jZS5wYXlsb2FkIGFzIGFueSxcbiAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNi5TdHJ1Y3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5zaW1wbGVSZXNwb25zZXMpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA3LFxuICAgICAgICAgIGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2VzLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuYmFzaWNDYXJkKSB7XG4gICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgOCxcbiAgICAgICAgICBpbnN0YW5jZS5iYXNpY0NhcmQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgOSxcbiAgICAgICAgICBpbnN0YW5jZS5zdWdnZXN0aW9ucyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5saW5rT3V0U3VnZ2VzdGlvbikge1xuICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIGluc3RhbmNlLmxpbmtPdXRTdWdnZXN0aW9uIGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaW5rT3V0U3VnZ2VzdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmxpc3RTZWxlY3QpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxMSxcbiAgICAgICAgICBpbnN0YW5jZS5saXN0U2VsZWN0IGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuY2Fyb3VzZWxTZWxlY3QpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxMixcbiAgICAgICAgICBpbnN0YW5jZS5jYXJvdXNlbFNlbGVjdCBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5odG1sVGV4dCkge1xuICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIGluc3RhbmNlLmh0bWxUZXh0IGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dC50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLnZpZGVvKSB7XG4gICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgaW5zdGFuY2UudmlkZW8gYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlZpZGVvLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuYXVkaW8pIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxNSxcbiAgICAgICAgICBpbnN0YW5jZS5hdWRpbyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQXVkaW8udG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5wbGF0Zm9ybSkge1xuICAgICAgICB3cml0ZXIud3JpdGVFbnVtKDYsIGluc3RhbmNlLnBsYXRmb3JtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0PzogSW50ZW50Lk1lc3NhZ2UuVGV4dDtcbiAgICBwcml2YXRlIF9pbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlO1xuICAgIHByaXZhdGUgX3F1aWNrUmVwbGllcz86IEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcztcbiAgICBwcml2YXRlIF9jYXJkPzogSW50ZW50Lk1lc3NhZ2UuQ2FyZDtcbiAgICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMDYuU3RydWN0O1xuICAgIHByaXZhdGUgX3NpbXBsZVJlc3BvbnNlcz86IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcztcbiAgICBwcml2YXRlIF9iYXNpY0NhcmQ/OiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQ7XG4gICAgcHJpdmF0ZSBfc3VnZ2VzdGlvbnM/OiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucztcbiAgICBwcml2YXRlIF9saW5rT3V0U3VnZ2VzdGlvbj86IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uO1xuICAgIHByaXZhdGUgX2xpc3RTZWxlY3Q/OiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0O1xuICAgIHByaXZhdGUgX2Nhcm91c2VsU2VsZWN0PzogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3Q7XG4gICAgcHJpdmF0ZSBfaHRtbFRleHQ/OiBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dDtcbiAgICBwcml2YXRlIF92aWRlbz86IEludGVudC5NZXNzYWdlLlZpZGVvO1xuICAgIHByaXZhdGUgX2F1ZGlvPzogSW50ZW50Lk1lc3NhZ2UuQXVkaW87XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm0/OiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybTtcblxuICAgIHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UuTWVzc2FnZUNhc2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLm5vbmU7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgKiBAcGFyYW0gTWVzc2FnZSB2YWx1ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlPikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMudGV4dCA9IHZhbHVlLnRleHQgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuVGV4dCh2YWx1ZS50ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZS5pbWFnZVxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZSh2YWx1ZS5pbWFnZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnF1aWNrUmVwbGllcyA9IHZhbHVlLnF1aWNrUmVwbGllc1xuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5RdWlja1JlcGxpZXModmFsdWUucXVpY2tSZXBsaWVzKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY2FyZCA9IHZhbHVlLmNhcmQgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2FyZCh2YWx1ZS5jYXJkKSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucGF5bG9hZCA9IHZhbHVlLnBheWxvYWRcbiAgICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDYuU3RydWN0KHZhbHVlLnBheWxvYWQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zaW1wbGVSZXNwb25zZXMgPSB2YWx1ZS5zaW1wbGVSZXNwb25zZXNcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2VzKHZhbHVlLnNpbXBsZVJlc3BvbnNlcylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmJhc2ljQ2FyZCA9IHZhbHVlLmJhc2ljQ2FyZFxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQodmFsdWUuYmFzaWNDYXJkKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSB2YWx1ZS5zdWdnZXN0aW9uc1xuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucyh2YWx1ZS5zdWdnZXN0aW9ucylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uID0gdmFsdWUubGlua091dFN1Z2dlc3Rpb25cbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuTGlua091dFN1Z2dlc3Rpb24odmFsdWUubGlua091dFN1Z2dlc3Rpb24pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5saXN0U2VsZWN0ID0gdmFsdWUubGlzdFNlbGVjdFxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0KHZhbHVlLmxpc3RTZWxlY3QpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jYXJvdXNlbFNlbGVjdCA9IHZhbHVlLmNhcm91c2VsU2VsZWN0XG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0KHZhbHVlLmNhcm91c2VsU2VsZWN0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaHRtbFRleHQgPSB2YWx1ZS5odG1sVGV4dFxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dCh2YWx1ZS5odG1sVGV4dClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnZpZGVvID0gdmFsdWUudmlkZW9cbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuVmlkZW8odmFsdWUudmlkZW8pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5hdWRpbyA9IHZhbHVlLmF1ZGlvXG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkF1ZGlvKHZhbHVlLmF1ZGlvKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucGxhdGZvcm0gPSB2YWx1ZS5wbGF0Zm9ybTtcbiAgICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdGV4dCgpOiBJbnRlbnQuTWVzc2FnZS5UZXh0IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgIH1cbiAgICBzZXQgdGV4dCh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuVGV4dCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLnRleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBpbWFnZSgpOiBJbnRlbnQuTWVzc2FnZS5JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XG4gICAgfVxuICAgIHNldCBpbWFnZSh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLmltYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy5faW1hZ2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHF1aWNrUmVwbGllcygpOiBJbnRlbnQuTWVzc2FnZS5RdWlja1JlcGxpZXMgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3F1aWNrUmVwbGllcztcbiAgICB9XG4gICAgc2V0IHF1aWNrUmVwbGllcyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuUXVpY2tSZXBsaWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLnF1aWNrUmVwbGllcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3F1aWNrUmVwbGllcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2FyZCgpOiBJbnRlbnQuTWVzc2FnZS5DYXJkIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYXJkO1xuICAgIH1cbiAgICBzZXQgY2FyZCh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuQ2FyZCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLmNhcmQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYXJkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwYXlsb2FkKCk6IGdvb2dsZVByb3RvYnVmMDA2LlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcGF5bG9hZDtcbiAgICB9XG4gICAgc2V0IHBheWxvYWQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDA2LlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLnBheWxvYWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9wYXlsb2FkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzaW1wbGVSZXNwb25zZXMoKTogSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2VzIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaW1wbGVSZXNwb25zZXM7XG4gICAgfVxuICAgIHNldCBzaW1wbGVSZXNwb25zZXModmFsdWU6IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcyB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5zaW1wbGVSZXNwb25zZXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGJhc2ljQ2FyZCgpOiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jhc2ljQ2FyZDtcbiAgICB9XG4gICAgc2V0IGJhc2ljQ2FyZCh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLmJhc2ljQ2FyZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Jhc2ljQ2FyZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc3VnZ2VzdGlvbnMoKTogSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbnMgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1Z2dlc3Rpb25zO1xuICAgIH1cbiAgICBzZXQgc3VnZ2VzdGlvbnModmFsdWU6IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5zdWdnZXN0aW9ucztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsaW5rT3V0U3VnZ2VzdGlvbigpOiBJbnRlbnQuTWVzc2FnZS5MaW5rT3V0U3VnZ2VzdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlua091dFN1Z2dlc3Rpb247XG4gICAgfVxuICAgIHNldCBsaW5rT3V0U3VnZ2VzdGlvbih2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuTGlua091dFN1Z2dlc3Rpb24gfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9wYXlsb2FkID0gdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdGhpcy5fYmFzaWNDYXJkID0gdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLmxpbmtPdXRTdWdnZXN0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxpc3RTZWxlY3QoKTogSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdFNlbGVjdDtcbiAgICB9XG4gICAgc2V0IGxpc3RTZWxlY3QodmFsdWU6IEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9wYXlsb2FkID0gdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdGhpcy5fYmFzaWNDYXJkID0gdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLl9saW5rT3V0U3VnZ2VzdGlvbiA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5saXN0U2VsZWN0O1xuICAgICAgfVxuICAgICAgdGhpcy5fbGlzdFNlbGVjdCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2Fyb3VzZWxTZWxlY3QoKTogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nhcm91c2VsU2VsZWN0O1xuICAgIH1cbiAgICBzZXQgY2Fyb3VzZWxTZWxlY3QodmFsdWU6IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5jYXJvdXNlbFNlbGVjdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBodG1sVGV4dCgpOiBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faHRtbFRleHQ7XG4gICAgfVxuICAgIHNldCBodG1sVGV4dCh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9wYXlsb2FkID0gdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdGhpcy5fYmFzaWNDYXJkID0gdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLl9saW5rT3V0U3VnZ2VzdGlvbiA9IHRoaXMuX2xpc3RTZWxlY3QgPSB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHRoaXMuX3ZpZGVvID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLmh0bWxUZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5faHRtbFRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHZpZGVvKCk6IEludGVudC5NZXNzYWdlLlZpZGVvIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92aWRlbztcbiAgICB9XG4gICAgc2V0IHZpZGVvKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5WaWRlbyB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl9hdWRpbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2UudmlkZW87XG4gICAgICB9XG4gICAgICB0aGlzLl92aWRlbyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYXVkaW8oKTogSW50ZW50Lk1lc3NhZ2UuQXVkaW8gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvO1xuICAgIH1cbiAgICBzZXQgYXVkaW8odmFsdWU6IEludGVudC5NZXNzYWdlLkF1ZGlvIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl9odG1sVGV4dCA9IHRoaXMuX3ZpZGVvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5hdWRpbztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2F1ZGlvID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwbGF0Zm9ybSgpOiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm07XG4gICAgfVxuICAgIHNldCBwbGF0Zm9ybSh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuUGxhdGZvcm0gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BsYXRmb3JtID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlID8gdGhpcy5pbWFnZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBxdWlja1JlcGxpZXM6IHRoaXMucXVpY2tSZXBsaWVzXG4gICAgICAgICAgPyB0aGlzLnF1aWNrUmVwbGllcy50b09iamVjdCgpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGNhcmQ6IHRoaXMuY2FyZCA/IHRoaXMuY2FyZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQgPyB0aGlzLnBheWxvYWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc2ltcGxlUmVzcG9uc2VzOiB0aGlzLnNpbXBsZVJlc3BvbnNlc1xuICAgICAgICAgID8gdGhpcy5zaW1wbGVSZXNwb25zZXMudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBiYXNpY0NhcmQ6IHRoaXMuYmFzaWNDYXJkID8gdGhpcy5iYXNpY0NhcmQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3VnZ2VzdGlvbnM6IHRoaXMuc3VnZ2VzdGlvbnMgPyB0aGlzLnN1Z2dlc3Rpb25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGxpbmtPdXRTdWdnZXN0aW9uOiB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uXG4gICAgICAgICAgPyB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgbGlzdFNlbGVjdDogdGhpcy5saXN0U2VsZWN0ID8gdGhpcy5saXN0U2VsZWN0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGNhcm91c2VsU2VsZWN0OiB0aGlzLmNhcm91c2VsU2VsZWN0XG4gICAgICAgICAgPyB0aGlzLmNhcm91c2VsU2VsZWN0LnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgaHRtbFRleHQ6IHRoaXMuaHRtbFRleHQgPyB0aGlzLmh0bWxUZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvID8gdGhpcy52aWRlby50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBhdWRpbzogdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGxhdGZvcm06IHRoaXMucGxhdGZvcm1cbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgTWVzc2FnZSB7XG4gICAgZXhwb3J0IGVudW0gTWVzc2FnZUNhc2Uge1xuICAgICAgbm9uZSA9IDAsXG4gICAgICB0ZXh0ID0gMSxcbiAgICAgIGltYWdlID0gMixcbiAgICAgIHF1aWNrUmVwbGllcyA9IDMsXG4gICAgICBjYXJkID0gNCxcbiAgICAgIHBheWxvYWQgPSA1LFxuICAgICAgc2ltcGxlUmVzcG9uc2VzID0gNixcbiAgICAgIGJhc2ljQ2FyZCA9IDcsXG4gICAgICBzdWdnZXN0aW9ucyA9IDgsXG4gICAgICBsaW5rT3V0U3VnZ2VzdGlvbiA9IDksXG4gICAgICBsaXN0U2VsZWN0ID0gMTAsXG4gICAgICBjYXJvdXNlbFNlbGVjdCA9IDExLFxuICAgICAgaHRtbFRleHQgPSAxMixcbiAgICAgIHZpZGVvID0gMTMsXG4gICAgICBhdWRpbyA9IDE0XG4gICAgfVxuICAgIGV4cG9ydCBlbnVtIFBsYXRmb3JtIHtcbiAgICAgIHBsYXRmb3JtVW5zcGVjaWZpZWQgPSAwLFxuICAgICAgZmFjZWJvb2sgPSAxLFxuICAgICAgc2xhY2sgPSAyLFxuICAgICAgdGVsZWdyYW0gPSAzLFxuICAgICAga2lrID0gNCxcbiAgICAgIHNreXBlID0gNSxcbiAgICAgIGxpbmUgPSA2LFxuICAgICAgdmliZXIgPSA3LFxuICAgICAgYWN0aW9uc09uR29vZ2xlID0gOFxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVGV4dCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFRleHQudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRleHQoKTtcbiAgICAgICAgVGV4dC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVGV4dCkge1xuICAgICAgICBpbnN0YW5jZS50ZXh0ID0gaW5zdGFuY2UudGV4dCB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFRleHQsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIChpbnN0YW5jZS50ZXh0ID0gaW5zdGFuY2UudGV4dCB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgVGV4dC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFRleHQsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS50ZXh0ICYmIGluc3RhbmNlLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgaW5zdGFuY2UudGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZ1tdO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgKiBAcGFyYW0gVGV4dCB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VGV4dD4pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy50ZXh0ID0gKHZhbHVlLnRleHQgfHwgW10pLnNsaWNlKCk7XG4gICAgICAgIFRleHQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHRleHQoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiAodGhpcy50ZXh0IHx8IFtdKS5zbGljZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgVGV4dCB7fVxuICAgIGV4cG9ydCBjbGFzcyBJbWFnZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogSW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBJbWFnZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgSW1hZ2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEltYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLmltYWdlVXJpID0gaW5zdGFuY2UuaW1hZ2VVcmkgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBJbWFnZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UuaW1hZ2VVcmkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBJbWFnZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEltYWdlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UuaW1hZ2VVcmkpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuaW1hZ2VVcmkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfaW1hZ2VVcmk/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9hY2Nlc3NpYmlsaXR5VGV4dD86IHN0cmluZztcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIEltYWdlIHZhbHVlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbWFnZT4pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy5pbWFnZVVyaSA9IHZhbHVlLmltYWdlVXJpO1xuICAgICAgICB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0ID0gdmFsdWUuYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICAgIEltYWdlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCBpbWFnZVVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2VVcmk7XG4gICAgICB9XG4gICAgICBzZXQgaW1hZ2VVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9pbWFnZVVyaSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGFjY2Vzc2liaWxpdHlUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCBhY2Nlc3NpYmlsaXR5VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc2liaWxpdHlUZXh0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbWFnZVVyaTogdGhpcy5pbWFnZVVyaSxcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5VGV4dDogdGhpcy5hY2Nlc3NpYmlsaXR5VGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIEltYWdlIHt9XG4gICAgZXhwb3J0IGNsYXNzIFF1aWNrUmVwbGllcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogUXVpY2tSZXBsaWVzKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgUXVpY2tSZXBsaWVzLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBRdWlja1JlcGxpZXMoKTtcbiAgICAgICAgUXVpY2tSZXBsaWVzLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBRdWlja1JlcGxpZXMpIHtcbiAgICAgICAgaW5zdGFuY2UudGl0bGUgPSBpbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2UucXVpY2tSZXBsaWVzID0gaW5zdGFuY2UucXVpY2tSZXBsaWVzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUXVpY2tSZXBsaWVzLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAoaW5zdGFuY2UucXVpY2tSZXBsaWVzID0gaW5zdGFuY2UucXVpY2tSZXBsaWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgUXVpY2tSZXBsaWVzLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogUXVpY2tSZXBsaWVzLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5xdWlja1JlcGxpZXMgJiYgaW5zdGFuY2UucXVpY2tSZXBsaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDIsIGluc3RhbmNlLnF1aWNrUmVwbGllcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9xdWlja1JlcGxpZXM/OiBzdHJpbmdbXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIFF1aWNrUmVwbGllcyB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UXVpY2tSZXBsaWVzPikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWUudGl0bGU7XG4gICAgICAgIHRoaXMucXVpY2tSZXBsaWVzID0gKHZhbHVlLnF1aWNrUmVwbGllcyB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgUXVpY2tSZXBsaWVzLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHF1aWNrUmVwbGllcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWlja1JlcGxpZXM7XG4gICAgICB9XG4gICAgICBzZXQgcXVpY2tSZXBsaWVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9xdWlja1JlcGxpZXMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgIHF1aWNrUmVwbGllczogKHRoaXMucXVpY2tSZXBsaWVzIHx8IFtdKS5zbGljZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgUXVpY2tSZXBsaWVzIHt9XG4gICAgZXhwb3J0IGNsYXNzIENhcmQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENhcmQpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBDYXJkLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDYXJkKCk7XG4gICAgICAgIENhcmQuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IENhcmQpIHtcbiAgICAgICAgaW5zdGFuY2UudGl0bGUgPSBpbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2Uuc3VidGl0bGUgPSBpbnN0YW5jZS5zdWJ0aXRsZSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2UuaW1hZ2VVcmkgPSBpbnN0YW5jZS5pbWFnZVVyaSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2UuYnV0dG9ucyA9IGluc3RhbmNlLmJ1dHRvbnMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDYXJkLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpbnN0YW5jZS5zdWJ0aXRsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpbnN0YW5jZS5pbWFnZVVyaSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uKCk7XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKGluc3RhbmNlLmJ1dHRvbnMgPSBpbnN0YW5jZS5idXR0b25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ2FyZC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IENhcmQsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS50aXRsZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLnN1YnRpdGxlKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnN1YnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2UuaW1hZ2VVcmkpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuaW1hZ2VVcmkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5idXR0b25zICYmIGluc3RhbmNlLmJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIGluc3RhbmNlLmJ1dHRvbnMgYXMgYW55LFxuICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2FyZC5CdXR0b24udG9CaW5hcnlXcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9pbWFnZVVyaT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2J1dHRvbnM/OiBJbnRlbnQuTWVzc2FnZS5DYXJkLkJ1dHRvbltdO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgKiBAcGFyYW0gQ2FyZCB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q2FyZD4pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlLnRpdGxlO1xuICAgICAgICB0aGlzLnN1YnRpdGxlID0gdmFsdWUuc3VidGl0bGU7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmkgPSB2YWx1ZS5pbWFnZVVyaTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gKHZhbHVlLmJ1dHRvbnMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5DYXJkLkJ1dHRvbihtKVxuICAgICAgICApO1xuICAgICAgICBDYXJkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHN1YnRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJ0aXRsZTtcbiAgICAgIH1cbiAgICAgIHNldCBzdWJ0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgaW1hZ2VVcmkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJpO1xuICAgICAgfVxuICAgICAgc2V0IGltYWdlVXJpKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBidXR0b25zKCk6IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnV0dG9ucztcbiAgICAgIH1cbiAgICAgIHNldCBidXR0b25zKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5DYXJkLkJ1dHRvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLnN1YnRpdGxlLFxuICAgICAgICAgIGltYWdlVXJpOiB0aGlzLmltYWdlVXJpLFxuICAgICAgICAgIGJ1dHRvbnM6ICh0aGlzLmJ1dHRvbnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBDYXJkIHtcbiAgICAgIGV4cG9ydCBjbGFzcyBCdXR0b24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQnV0dG9uKSB7XG4gICAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICAgIEJ1dHRvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCdXR0b24oKTtcbiAgICAgICAgICBCdXR0b24uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJ1dHRvbikge1xuICAgICAgICAgIGluc3RhbmNlLnRleHQgPSBpbnN0YW5jZS50ZXh0IHx8ICcnO1xuICAgICAgICAgIGluc3RhbmNlLnBvc3RiYWNrID0gaW5zdGFuY2UucG9zdGJhY2sgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQnV0dG9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UudGV4dCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wb3N0YmFjayA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEJ1dHRvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBCdXR0b24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnRleHQpIHtcbiAgICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnBvc3RiYWNrKSB7XG4gICAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UucG9zdGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgX3Bvc3RiYWNrPzogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICAgKiBAcGFyYW0gQnV0dG9uIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QnV0dG9uPikge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgICAgdGhpcy50ZXh0ID0gdmFsdWUudGV4dDtcbiAgICAgICAgICB0aGlzLnBvc3RiYWNrID0gdmFsdWUucG9zdGJhY2s7XG4gICAgICAgICAgQnV0dG9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHBvc3RiYWNrKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3RiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHNldCBwb3N0YmFjayh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fcG9zdGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgcG9zdGJhY2s6IHRoaXMucG9zdGJhY2tcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHBvcnQgbW9kdWxlIEJ1dHRvbiB7fVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2ltcGxlUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNpbXBsZVJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgU2ltcGxlUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNpbXBsZVJlc3BvbnNlKCk7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTaW1wbGVSZXNwb25zZSkge1xuICAgICAgICBpbnN0YW5jZS50ZXh0VG9TcGVlY2ggPSBpbnN0YW5jZS50ZXh0VG9TcGVlY2ggfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLnNzbWwgPSBpbnN0YW5jZS5zc21sIHx8ICcnO1xuICAgICAgICBpbnN0YW5jZS5kaXNwbGF5VGV4dCA9IGluc3RhbmNlLmRpc3BsYXlUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU2ltcGxlUmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGluc3RhbmNlLnRleHRUb1NwZWVjaCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpbnN0YW5jZS5zc21sID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmRpc3BsYXlUZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgU2ltcGxlUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTaW1wbGVSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnRleHRUb1NwZWVjaCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS50ZXh0VG9TcGVlY2gpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5zc21sKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnNzbWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXNwbGF5VGV4dCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5kaXNwbGF5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGV4dFRvU3BlZWNoPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfc3NtbD86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2Rpc3BsYXlUZXh0Pzogc3RyaW5nO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgKiBAcGFyYW0gU2ltcGxlUmVzcG9uc2UgdmFsdWVcbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNpbXBsZVJlc3BvbnNlPikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRleHRUb1NwZWVjaCA9IHZhbHVlLnRleHRUb1NwZWVjaDtcbiAgICAgICAgdGhpcy5zc21sID0gdmFsdWUuc3NtbDtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGV4dCA9IHZhbHVlLmRpc3BsYXlUZXh0O1xuICAgICAgICBTaW1wbGVSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGV4dFRvU3BlZWNoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0VG9TcGVlY2g7XG4gICAgICB9XG4gICAgICBzZXQgdGV4dFRvU3BlZWNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGV4dFRvU3BlZWNoID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgc3NtbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NtbDtcbiAgICAgIH1cbiAgICAgIHNldCBzc21sKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc3NtbCA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGRpc3BsYXlUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5VGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCBkaXNwbGF5VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlUZXh0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0VG9TcGVlY2g6IHRoaXMudGV4dFRvU3BlZWNoLFxuICAgICAgICAgIHNzbWw6IHRoaXMuc3NtbCxcbiAgICAgICAgICBkaXNwbGF5VGV4dDogdGhpcy5kaXNwbGF5VGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIFNpbXBsZVJlc3BvbnNlIHt9XG4gICAgZXhwb3J0IGNsYXNzIFNpbXBsZVJlc3BvbnNlcyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2ltcGxlUmVzcG9uc2VzKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgU2ltcGxlUmVzcG9uc2VzLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaW1wbGVSZXNwb25zZXMoKTtcbiAgICAgICAgU2ltcGxlUmVzcG9uc2VzLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTaW1wbGVSZXNwb25zZXMpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzID0gaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU2ltcGxlUmVzcG9uc2VzLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyA9IGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFNpbXBsZVJlc3BvbnNlcy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFNpbXBsZVJlc3BvbnNlcywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyAmJiBpbnN0YW5jZS5zaW1wbGVSZXNwb25zZXMubGVuZ3RoKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGluc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyBhcyBhbnksXG4gICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZS50b0JpbmFyeVdyaXRlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfc2ltcGxlUmVzcG9uc2VzPzogSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2VbXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIFNpbXBsZVJlc3BvbnNlcyB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2ltcGxlUmVzcG9uc2VzPikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnNpbXBsZVJlc3BvbnNlcyA9ICh2YWx1ZS5zaW1wbGVSZXNwb25zZXMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZShtKVxuICAgICAgICApO1xuICAgICAgICBTaW1wbGVSZXNwb25zZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHNpbXBsZVJlc3BvbnNlcygpOiBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZVJlc3BvbnNlcztcbiAgICAgIH1cbiAgICAgIHNldCBzaW1wbGVSZXNwb25zZXModmFsdWU6IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaW1wbGVSZXNwb25zZXM6ICh0aGlzLnNpbXBsZVJlc3BvbnNlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIFNpbXBsZVJlc3BvbnNlcyB7fVxuICAgIGV4cG9ydCBjbGFzcyBCYXNpY0NhcmQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEJhc2ljQ2FyZCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIEJhc2ljQ2FyZC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmFzaWNDYXJkKCk7XG4gICAgICAgIEJhc2ljQ2FyZC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQmFzaWNDYXJkKSB7XG4gICAgICAgIGluc3RhbmNlLnRpdGxlID0gaW5zdGFuY2UudGl0bGUgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLnN1YnRpdGxlID0gaW5zdGFuY2Uuc3VidGl0bGUgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLmZvcm1hdHRlZFRleHQgPSBpbnN0YW5jZS5mb3JtYXR0ZWRUZXh0IHx8ICcnO1xuICAgICAgICBpbnN0YW5jZS5pbWFnZSA9IGluc3RhbmNlLmltYWdlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaW5zdGFuY2UuYnV0dG9ucyA9IGluc3RhbmNlLmJ1dHRvbnMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBCYXNpY0NhcmQsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGluc3RhbmNlLnRpdGxlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGluc3RhbmNlLnN1YnRpdGxlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmZvcm1hdHRlZFRleHQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaW5zdGFuY2UuaW1hZ2UgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UoKTtcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmltYWdlLFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjUgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbigpO1xuICAgICAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNSxcbiAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKGluc3RhbmNlLmJ1dHRvbnMgPSBpbnN0YW5jZS5idXR0b25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQmFzaWNDYXJkLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQmFzaWNDYXJkLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5zdWJ0aXRsZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5zdWJ0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmZvcm1hdHRlZFRleHQpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuZm9ybWF0dGVkVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmltYWdlKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBpbnN0YW5jZS5pbWFnZSBhcyBhbnksXG4gICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5JbWFnZS50b0JpbmFyeVdyaXRlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmJ1dHRvbnMgJiYgaW5zdGFuY2UuYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICA1LFxuICAgICAgICAgICAgaW5zdGFuY2UuYnV0dG9ucyBhcyBhbnksXG4gICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX3N1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfZm9ybWF0dGVkVGV4dD86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2ltYWdlPzogSW50ZW50Lk1lc3NhZ2UuSW1hZ2U7XG4gICAgICBwcml2YXRlIF9idXR0b25zPzogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbltdO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgKiBAcGFyYW0gQmFzaWNDYXJkIHZhbHVlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCYXNpY0NhcmQ+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZS50aXRsZTtcbiAgICAgICAgdGhpcy5zdWJ0aXRsZSA9IHZhbHVlLnN1YnRpdGxlO1xuICAgICAgICB0aGlzLmZvcm1hdHRlZFRleHQgPSB2YWx1ZS5mb3JtYXR0ZWRUZXh0O1xuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWUuaW1hZ2VcbiAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZSh2YWx1ZS5pbWFnZSlcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5idXR0b25zID0gKHZhbHVlLmJ1dHRvbnMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uKG0pXG4gICAgICAgICk7XG4gICAgICAgIEJhc2ljQ2FyZC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgfVxuICAgICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBzdWJ0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VidGl0bGU7XG4gICAgICB9XG4gICAgICBzZXQgc3VidGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zdWJ0aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGZvcm1hdHRlZFRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdHRlZFRleHQ7XG4gICAgICB9XG4gICAgICBzZXQgZm9ybWF0dGVkVGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdHRlZFRleHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBpbWFnZSgpOiBJbnRlbnQuTWVzc2FnZS5JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZTtcbiAgICAgIH1cbiAgICAgIHNldCBpbWFnZSh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBidXR0b25zKCk6IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b25bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICAgICAgfVxuICAgICAgc2V0IGJ1dHRvbnModmFsdWU6IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b25bXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9idXR0b25zID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICBzdWJ0aXRsZTogdGhpcy5zdWJ0aXRsZSxcbiAgICAgICAgICBmb3JtYXR0ZWRUZXh0OiB0aGlzLmZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UgPyB0aGlzLmltYWdlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgYnV0dG9uczogKHRoaXMuYnV0dG9ucyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIEJhc2ljQ2FyZCB7XG4gICAgICBleHBvcnQgY2xhc3MgQnV0dG9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEJ1dHRvbikge1xuICAgICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgICBCdXR0b24udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQnV0dG9uKCk7XG4gICAgICAgICAgQnV0dG9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBCdXR0b24pIHtcbiAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IGluc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICAgIGluc3RhbmNlLm9wZW5VcmlBY3Rpb24gPSBpbnN0YW5jZS5vcGVuVXJpQWN0aW9uIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBCdXR0b24sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5vcGVuVXJpQWN0aW9uID0gbmV3IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uT3BlblVyaUFjdGlvbigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlLm9wZW5VcmlBY3Rpb24sXG4gICAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLk9wZW5VcmlBY3Rpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEJ1dHRvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBCdXR0b24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnRpdGxlKSB7XG4gICAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5zdGFuY2Uub3BlblVyaUFjdGlvbikge1xuICAgICAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgaW5zdGFuY2Uub3BlblVyaUFjdGlvbiBhcyBhbnksXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uT3BlblVyaUFjdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBfb3BlblVyaUFjdGlvbj86IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uT3BlblVyaUFjdGlvbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAgICogQHBhcmFtIEJ1dHRvbiB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJ1dHRvbj4pIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZS50aXRsZTtcbiAgICAgICAgICB0aGlzLm9wZW5VcmlBY3Rpb24gPSB2YWx1ZS5vcGVuVXJpQWN0aW9uXG4gICAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLk9wZW5VcmlBY3Rpb24oXG4gICAgICAgICAgICAgICAgdmFsdWUub3BlblVyaUFjdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBCdXR0b24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IG9wZW5VcmlBY3Rpb24oKTpcbiAgICAgICAgICB8IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uT3BlblVyaUFjdGlvblxuICAgICAgICAgIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb3BlblVyaUFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBzZXQgb3BlblVyaUFjdGlvbihcbiAgICAgICAgICB2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uIHwgdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX29wZW5VcmlBY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvcGVuVXJpQWN0aW9uOiB0aGlzLm9wZW5VcmlBY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGlzLm9wZW5VcmlBY3Rpb24udG9PYmplY3QoKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4cG9ydCBtb2R1bGUgQnV0dG9uIHtcbiAgICAgICAgZXhwb3J0IGNsYXNzIE9wZW5VcmlBY3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICAgICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBPcGVuVXJpQWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgICAgICBPcGVuVXJpQWN0aW9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgT3BlblVyaUFjdGlvbigpO1xuICAgICAgICAgICAgT3BlblVyaUFjdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogT3BlblVyaUFjdGlvbikge1xuICAgICAgICAgICAgaW5zdGFuY2UudXJpID0gaW5zdGFuY2UudXJpIHx8ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgICAgICAgaW5zdGFuY2U6IE9wZW5VcmlBY3Rpb24sXG4gICAgICAgICAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnVyaSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9wZW5VcmlBY3Rpb24ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IE9wZW5VcmlBY3Rpb24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UudXJpKSB7XG4gICAgICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS51cmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHByaXZhdGUgX3VyaT86IHN0cmluZztcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgICAgICogQHBhcmFtIE9wZW5VcmlBY3Rpb24gdmFsdWVcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlblVyaUFjdGlvbj4pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgICAgICB0aGlzLnVyaSA9IHZhbHVlLnVyaTtcbiAgICAgICAgICAgIE9wZW5VcmlBY3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZXQgdXJpKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXQgdXJpKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHVyaTogdGhpcy51cmlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCBtb2R1bGUgT3BlblVyaUFjdGlvbiB7fVxuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU3VnZ2VzdGlvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU3VnZ2VzdGlvbikge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFN1Z2dlc3Rpb24udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN1Z2dlc3Rpb24oKTtcbiAgICAgICAgU3VnZ2VzdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU3VnZ2VzdGlvbikge1xuICAgICAgICBpbnN0YW5jZS50aXRsZSA9IGluc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU3VnZ2VzdGlvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UudGl0bGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdWdnZXN0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU3VnZ2VzdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnRpdGxlKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIFN1Z2dlc3Rpb24gdmFsdWVcbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFN1Z2dlc3Rpb24+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZS50aXRsZTtcbiAgICAgICAgU3VnZ2VzdGlvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgfVxuICAgICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgU3VnZ2VzdGlvbiB7fVxuICAgIGV4cG9ydCBjbGFzcyBTdWdnZXN0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBTdWdnZXN0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3VnZ2VzdGlvbnMoKTtcbiAgICAgICAgU3VnZ2VzdGlvbnMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIGluc3RhbmNlLnN1Z2dlc3Rpb25zID0gaW5zdGFuY2Uuc3VnZ2VzdGlvbnMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTdWdnZXN0aW9ucywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAoaW5zdGFuY2Uuc3VnZ2VzdGlvbnMgPSBpbnN0YW5jZS5zdWdnZXN0aW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFN1Z2dlc3Rpb25zLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU3VnZ2VzdGlvbnMsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5zdWdnZXN0aW9ucyAmJiBpbnN0YW5jZS5zdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgaW5zdGFuY2Uuc3VnZ2VzdGlvbnMgYXMgYW55LFxuICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfc3VnZ2VzdGlvbnM/OiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9uW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBTdWdnZXN0aW9ucyB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3VnZ2VzdGlvbnM+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSAodmFsdWUuc3VnZ2VzdGlvbnMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9uKG0pXG4gICAgICAgICk7XG4gICAgICAgIFN1Z2dlc3Rpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCBzdWdnZXN0aW9ucygpOiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9uW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VnZ2VzdGlvbnM7XG4gICAgICB9XG4gICAgICBzZXQgc3VnZ2VzdGlvbnModmFsdWU6IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdG9PYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VnZ2VzdGlvbnM6ICh0aGlzLnN1Z2dlc3Rpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgU3VnZ2VzdGlvbnMge31cbiAgICBleHBvcnQgY2xhc3MgTGlua091dFN1Z2dlc3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpbmtPdXRTdWdnZXN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgTGlua091dFN1Z2dlc3Rpb24udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpbmtPdXRTdWdnZXN0aW9uKCk7XG4gICAgICAgIExpbmtPdXRTdWdnZXN0aW9uLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaW5rT3V0U3VnZ2VzdGlvbikge1xuICAgICAgICBpbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUgPSBpbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLnVyaSA9IGluc3RhbmNlLnVyaSB8fCAnJztcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgICAgIGluc3RhbmNlOiBMaW5rT3V0U3VnZ2VzdGlvbixcbiAgICAgICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaW5zdGFuY2UudXJpID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgTGlua091dFN1Z2dlc3Rpb24ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaW5rT3V0U3VnZ2VzdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLmRlc3RpbmF0aW9uTmFtZSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5kZXN0aW5hdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS51cmkpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UudXJpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF9kZXN0aW5hdGlvbk5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF91cmk/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBMaW5rT3V0U3VnZ2VzdGlvbiB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlua091dFN1Z2dlc3Rpb24+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25OYW1lID0gdmFsdWUuZGVzdGluYXRpb25OYW1lO1xuICAgICAgICB0aGlzLnVyaSA9IHZhbHVlLnVyaTtcbiAgICAgICAgTGlua091dFN1Z2dlc3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IGRlc3RpbmF0aW9uTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25OYW1lO1xuICAgICAgfVxuICAgICAgc2V0IGRlc3RpbmF0aW9uTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uTmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgfVxuICAgICAgc2V0IHVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdG9PYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVzdGluYXRpb25OYW1lOiB0aGlzLmRlc3RpbmF0aW9uTmFtZSxcbiAgICAgICAgICB1cmk6IHRoaXMudXJpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgTGlua091dFN1Z2dlc3Rpb24ge31cbiAgICBleHBvcnQgY2xhc3MgTGlzdFNlbGVjdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFNlbGVjdCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIExpc3RTZWxlY3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZWxlY3QoKTtcbiAgICAgICAgTGlzdFNlbGVjdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFNlbGVjdCkge1xuICAgICAgICBpbnN0YW5jZS50aXRsZSA9IGluc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICBpbnN0YW5jZS5pdGVtcyA9IGluc3RhbmNlLml0ZW1zIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTGlzdFNlbGVjdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UudGl0bGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0oKTtcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5JdGVtLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKGluc3RhbmNlLml0ZW1zID0gaW5zdGFuY2UuaXRlbXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIExpc3RTZWxlY3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaXN0U2VsZWN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5pdGVtcyAmJiBpbnN0YW5jZS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgaW5zdGFuY2UuaXRlbXMgYXMgYW55LFxuICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5JdGVtLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2l0ZW1zPzogSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5JdGVtW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBMaXN0U2VsZWN0IHZhbHVlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0U2VsZWN0Pikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWUudGl0bGU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSAodmFsdWUuaXRlbXMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0obSlcbiAgICAgICAgKTtcbiAgICAgICAgTGlzdFNlbGVjdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgfVxuICAgICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBpdGVtcygpOiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW1bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICAgIH1cbiAgICAgIHNldCBpdGVtcyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5JdGVtW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgIGl0ZW1zOiAodGhpcy5pdGVtcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIExpc3RTZWxlY3Qge1xuICAgICAgZXhwb3J0IGNsYXNzIEl0ZW0gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogSXRlbSkge1xuICAgICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgICBJdGVtLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEl0ZW0oKTtcbiAgICAgICAgICBJdGVtLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBJdGVtKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaW5mbyA9IGluc3RhbmNlLmluZm8gfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGluc3RhbmNlLnRpdGxlID0gaW5zdGFuY2UudGl0bGUgfHwgJyc7XG4gICAgICAgICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBpbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgICAgICBpbnN0YW5jZS5pbWFnZSA9IGluc3RhbmNlLmltYWdlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBJdGVtLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbygpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8sXG4gICAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mby5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnRpdGxlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmltYWdlID0gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5JbWFnZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgSXRlbS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBJdGVtLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5pbmZvKSB7XG4gICAgICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICBpbnN0YW5jZS5pbmZvIGFzIGFueSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8udG9CaW5hcnlXcml0ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbnN0YW5jZS50aXRsZSkge1xuICAgICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnRpdGxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5zdGFuY2UuaW1hZ2UpIHtcbiAgICAgICAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgIGluc3RhbmNlLmltYWdlIGFzIGFueSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaW5mbz86IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvO1xuICAgICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgX2ltYWdlPzogSW50ZW50Lk1lc3NhZ2UuSW1hZ2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgICAqIEBwYXJhbSBJdGVtIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SXRlbT4pIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICAgIHRoaXMuaW5mbyA9IHZhbHVlLmluZm9cbiAgICAgICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvKHZhbHVlLmluZm8pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWUudGl0bGU7XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZS5pbWFnZVxuICAgICAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UodmFsdWUuaW1hZ2UpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBJdGVtLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaW5mbygpOiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZm87XG4gICAgICAgIH1cbiAgICAgICAgc2V0IGluZm8odmFsdWU6IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5faW5mbyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaW1hZ2UoKTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbWFnZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgaW1hZ2UodmFsdWU6IEludGVudC5NZXNzYWdlLkltYWdlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5faW1hZ2UgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5mbzogdGhpcy5pbmZvID8gdGhpcy5pbmZvLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UgPyB0aGlzLmltYWdlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHBvcnQgbW9kdWxlIEl0ZW0ge31cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIENhcm91c2VsU2VsZWN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDYXJvdXNlbFNlbGVjdCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIENhcm91c2VsU2VsZWN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDYXJvdXNlbFNlbGVjdCgpO1xuICAgICAgICBDYXJvdXNlbFNlbGVjdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ2Fyb3VzZWxTZWxlY3QpIHtcbiAgICAgICAgaW5zdGFuY2UuaXRlbXMgPSBpbnN0YW5jZS5pdGVtcyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IENhcm91c2VsU2VsZWN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW0oKTtcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIChpbnN0YW5jZS5pdGVtcyA9IGluc3RhbmNlLml0ZW1zIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDYXJvdXNlbFNlbGVjdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IENhcm91c2VsU2VsZWN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UuaXRlbXMgJiYgaW5zdGFuY2UuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGluc3RhbmNlLml0ZW1zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW0udG9CaW5hcnlXcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX2l0ZW1zPzogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbVtdO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICAgKiBAcGFyYW0gQ2Fyb3VzZWxTZWxlY3QgdmFsdWVcbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENhcm91c2VsU2VsZWN0Pikge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLml0ZW1zID0gKHZhbHVlLml0ZW1zIHx8IFtdKS5tYXAoXG4gICAgICAgICAgbSA9PiBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbShtKVxuICAgICAgICApO1xuICAgICAgICBDYXJvdXNlbFNlbGVjdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgaXRlbXMoKTogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgICAgfVxuICAgICAgc2V0IGl0ZW1zKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5DYXJvdXNlbFNlbGVjdC5JdGVtW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGl0ZW1zOiAodGhpcy5pdGVtcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIENhcm91c2VsU2VsZWN0IHtcbiAgICAgIGV4cG9ydCBjbGFzcyBJdGVtIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEl0ZW0pIHtcbiAgICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgICAgSXRlbS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJdGVtKCk7XG4gICAgICAgICAgSXRlbS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogSXRlbSkge1xuICAgICAgICAgIGluc3RhbmNlLmluZm8gPSBpbnN0YW5jZS5pbmZvIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IGluc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICAgIGluc3RhbmNlLmRlc2NyaXB0aW9uID0gaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgICAgaW5zdGFuY2UuaW1hZ2UgPSBpbnN0YW5jZS5pbWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogSXRlbSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmluZm8gPSBuZXcgSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8oKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbmZvLFxuICAgICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS50aXRsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbWFnZSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZSgpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmltYWdlLFxuICAgICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEl0ZW0ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSXRlbSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UuaW5mbykge1xuICAgICAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgaW5zdGFuY2UuaW5mbyBhcyBhbnksXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS50aXRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluc3RhbmNlLmltYWdlKSB7XG4gICAgICAgICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICBpbnN0YW5jZS5pbWFnZSBhcyBhbnksXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLnRvQmluYXJ5V3JpdGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2luZm8/OiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbztcbiAgICAgICAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBwcml2YXRlIF9pbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICAgKiBAcGFyYW0gSXRlbSB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEl0ZW0+KSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgICB0aGlzLmluZm8gPSB2YWx1ZS5pbmZvXG4gICAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbyh2YWx1ZS5pbmZvKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlLnRpdGxlO1xuICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLmltYWdlID0gdmFsdWUuaW1hZ2VcbiAgICAgICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKHZhbHVlLmltYWdlKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgSXRlbS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGluZm8oKTogSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8gfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmZvO1xuICAgICAgICB9XG4gICAgICAgIHNldCBpbmZvKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2luZm8gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGltYWdlKCk6IEludGVudC5NZXNzYWdlLkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IGltYWdlKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5JbWFnZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2ltYWdlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9PYmplY3QoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZm86IHRoaXMuaW5mbyA/IHRoaXMuaW5mby50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlID8gdGhpcy5pbWFnZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXhwb3J0IG1vZHVsZSBJdGVtIHt9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBIVE1MVGV4dCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogSFRNTFRleHQpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBIVE1MVGV4dC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSFRNTFRleHQoKTtcbiAgICAgICAgSFRNTFRleHQuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEhUTUxUZXh0KSB7XG4gICAgICAgIGluc3RhbmNlLnRleHQgPSBpbnN0YW5jZS50ZXh0IHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogSFRNTFRleHQsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIChpbnN0YW5jZS50ZXh0ID0gaW5zdGFuY2UudGV4dCB8fCBbXSkucHVzaChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgSFRNTFRleHQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBIVE1MVGV4dCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnRleHQgJiYgaW5zdGFuY2UudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90ZXh0Pzogc3RyaW5nW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBIVE1MVGV4dCB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SFRNTFRleHQ+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGV4dCA9ICh2YWx1ZS50ZXh0IHx8IFtdKS5zbGljZSgpO1xuICAgICAgICBIVE1MVGV4dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGV4dCgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgfVxuICAgICAgc2V0IHRleHQodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRvT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6ICh0aGlzLnRleHQgfHwgW10pLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBIVE1MVGV4dCB7fVxuICAgIGV4cG9ydCBjbGFzcyBWaWRlbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVmlkZW8pIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBWaWRlby50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmlkZW8oKTtcbiAgICAgICAgVmlkZW8uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFZpZGVvKSB7XG4gICAgICAgIGluc3RhbmNlLnVyaSA9IGluc3RhbmNlLnVyaSB8fCAnJztcbiAgICAgICAgaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgPSBpbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFZpZGVvLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBpbnN0YW5jZS51cmkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBWaWRlby5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFZpZGVvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UudXJpKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnVyaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0KSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF91cmk/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9hY2Nlc3NpYmlsaXR5VGV4dD86IHN0cmluZztcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAgICogQHBhcmFtIFZpZGVvIHZhbHVlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxWaWRlbz4pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy51cmkgPSB2YWx1ZS51cmk7XG4gICAgICAgIHRoaXMuYWNjZXNzaWJpbGl0eVRleHQgPSB2YWx1ZS5hY2Nlc3NpYmlsaXR5VGV4dDtcbiAgICAgICAgVmlkZW8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgfVxuICAgICAgc2V0IHVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGFjY2Vzc2liaWxpdHlUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCBhY2Nlc3NpYmlsaXR5VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc2liaWxpdHlUZXh0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmk6IHRoaXMudXJpLFxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlUZXh0OiB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgVmlkZW8ge31cbiAgICBleHBvcnQgY2xhc3MgQXVkaW8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEF1ZGlvKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgQXVkaW8udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIEF1ZGlvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBBdWRpbykge1xuICAgICAgICBpbnN0YW5jZS51cmkgPSBpbnN0YW5jZS51cmkgfHwgJyc7XG4gICAgICAgIGluc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBBdWRpbywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaW5zdGFuY2UudXJpID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQXVkaW8ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBBdWRpbywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnVyaSkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS51cmkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCkge1xuICAgICAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdXJpPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfYWNjZXNzaWJpbGl0eVRleHQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBBdWRpbyB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QXVkaW8+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudXJpID0gdmFsdWUudXJpO1xuICAgICAgICB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0ID0gdmFsdWUuYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICAgIEF1ZGlvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB1cmkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VyaTtcbiAgICAgIH1cbiAgICAgIHNldCB1cmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl91cmkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBhY2Nlc3NpYmlsaXR5VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICB9XG4gICAgICBzZXQgYWNjZXNzaWJpbGl0eVRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dCA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdG9PYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJpOiB0aGlzLnVyaSxcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5VGV4dDogdGhpcy5hY2Nlc3NpYmlsaXR5VGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIEF1ZGlvIHt9XG4gICAgZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1JbmZvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBTZWxlY3RJdGVtSW5mbykge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFNlbGVjdEl0ZW1JbmZvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZWxlY3RJdGVtSW5mbygpO1xuICAgICAgICBTZWxlY3RJdGVtSW5mby5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU2VsZWN0SXRlbUluZm8pIHtcbiAgICAgICAgaW5zdGFuY2Uua2V5ID0gaW5zdGFuY2Uua2V5IHx8ICcnO1xuICAgICAgICBpbnN0YW5jZS5zeW5vbnltcyA9IGluc3RhbmNlLnN5bm9ueW1zIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU2VsZWN0SXRlbUluZm8sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGluc3RhbmNlLmtleSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAoaW5zdGFuY2Uuc3lub255bXMgPSBpbnN0YW5jZS5zeW5vbnltcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFNlbGVjdEl0ZW1JbmZvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU2VsZWN0SXRlbUluZm8sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5rZXkpIHtcbiAgICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uua2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2Uuc3lub255bXMgJiYgaW5zdGFuY2Uuc3lub255bXMubGVuZ3RoKSB7XG4gICAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2Uuc3lub255bXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX2tleT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX3N5bm9ueW1zPzogc3RyaW5nW107XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgICAqIEBwYXJhbSBTZWxlY3RJdGVtSW5mbyB2YWx1ZVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2VsZWN0SXRlbUluZm8+KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMua2V5ID0gdmFsdWUua2V5O1xuICAgICAgICB0aGlzLnN5bm9ueW1zID0gKHZhbHVlLnN5bm9ueW1zIHx8IFtdKS5zbGljZSgpO1xuICAgICAgICBTZWxlY3RJdGVtSW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQga2V5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XG4gICAgICB9XG4gICAgICBzZXQga2V5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgc3lub255bXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3lub255bXM7XG4gICAgICB9XG4gICAgICBzZXQgc3lub255bXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N5bm9ueW1zID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0b09iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgIHN5bm9ueW1zOiAodGhpcy5zeW5vbnltcyB8fCBbXSkuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIFNlbGVjdEl0ZW1JbmZvIHt9XG4gIH1cbiAgZXhwb3J0IGNsYXNzIEZvbGxvd3VwSW50ZW50SW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEZvbGxvd3VwSW50ZW50SW5mbykge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgRm9sbG93dXBJbnRlbnRJbmZvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRm9sbG93dXBJbnRlbnRJbmZvKCk7XG4gICAgICBGb2xsb3d1cEludGVudEluZm8uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEZvbGxvd3VwSW50ZW50SW5mbykge1xuICAgICAgaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lID0gaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lIHx8ICcnO1xuICAgICAgaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID1cbiAgICAgICAgaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lIHx8ICcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2U6IEZvbGxvd3VwSW50ZW50SW5mbyxcbiAgICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGluc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRm9sbG93dXBJbnRlbnRJbmZvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgaWYgKGluc3RhbmNlLmZvbGxvd3VwSW50ZW50TmFtZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9sbG93dXBJbnRlbnROYW1lPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX3BhcmVudEZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIEZvbGxvd3VwSW50ZW50SW5mbyB2YWx1ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGb2xsb3d1cEludGVudEluZm8+KSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy5mb2xsb3d1cEludGVudE5hbWUgPSB2YWx1ZS5mb2xsb3d1cEludGVudE5hbWU7XG4gICAgICB0aGlzLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSA9IHZhbHVlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZTtcbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBmb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9mb2xsb3d1cEludGVudE5hbWU7XG4gICAgfVxuICAgIHNldCBmb2xsb3d1cEludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJlbnRGb2xsb3d1cEludGVudE5hbWU7XG4gICAgfVxuICAgIHNldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLmZvbGxvd3VwSW50ZW50TmFtZSxcbiAgICAgICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZVxuICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBGb2xsb3d1cEludGVudEluZm8ge31cbn1cbmV4cG9ydCBjbGFzcyBMaXN0SW50ZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdEludGVudHNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RJbnRlbnRzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0SW50ZW50c1JlcXVlc3QoKTtcbiAgICBMaXN0SW50ZW50c1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RJbnRlbnRzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IGluc3RhbmNlLmludGVudFZpZXcgfHwgMDtcbiAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSBpbnN0YW5jZS5wYWdlVG9rZW4gfHwgJyc7XG4gICAgaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSA9IGluc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkgfHwgMDtcbiAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCA9IGluc3RhbmNlLnNvcnRCeUZpZWxkIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBMaXN0SW50ZW50c1JlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmludGVudFZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5maWx0ZXJCeUNhdGVnb3J5ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCA9IG5ldyBJbnRlbnRTb3J0aW5nKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uuc29ydEJ5RmllbGQsXG4gICAgICAgICAgICBJbnRlbnRTb3J0aW5nLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0SW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdEludGVudHNSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMywgaW5zdGFuY2UuaW50ZW50Vmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg2LCBpbnN0YW5jZS5maWx0ZXJCeUNhdGVnb3J5KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNvcnRCeUZpZWxkKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCBhcyBhbnksXG4gICAgICAgIEludGVudFNvcnRpbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbHRlckJ5Q2F0ZWdvcnk/OiBJbnRlbnRDYXRlZ29yeTtcbiAgcHJpdmF0ZSBfc29ydEJ5RmllbGQ/OiBJbnRlbnRTb3J0aW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdEludGVudHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdEludGVudHNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5pbnRlbnRWaWV3ID0gdmFsdWUuaW50ZW50VmlldztcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IHZhbHVlLnBhZ2VUb2tlbjtcbiAgICB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkgPSB2YWx1ZS5maWx0ZXJCeUNhdGVnb3J5O1xuICAgIHRoaXMuc29ydEJ5RmllbGQgPSB2YWx1ZS5zb3J0QnlGaWVsZFxuICAgICAgPyBuZXcgSW50ZW50U29ydGluZyh2YWx1ZS5zb3J0QnlGaWVsZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIExpc3RJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpbHRlckJ5Q2F0ZWdvcnkoKTogSW50ZW50Q2F0ZWdvcnkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJCeUNhdGVnb3J5O1xuICB9XG4gIHNldCBmaWx0ZXJCeUNhdGVnb3J5KHZhbHVlOiBJbnRlbnRDYXRlZ29yeSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc29ydEJ5RmllbGQoKTogSW50ZW50U29ydGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeUZpZWxkO1xuICB9XG4gIHNldCBzb3J0QnlGaWVsZCh2YWx1ZTogSW50ZW50U29ydGluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvcnRCeUZpZWxkID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgaW50ZW50VmlldzogdGhpcy5pbnRlbnRWaWV3LFxuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlbixcbiAgICAgIGZpbHRlckJ5Q2F0ZWdvcnk6IHRoaXMuZmlsdGVyQnlDYXRlZ29yeSxcbiAgICAgIHNvcnRCeUZpZWxkOiB0aGlzLnNvcnRCeUZpZWxkID8gdGhpcy5zb3J0QnlGaWVsZC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0SW50ZW50c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0SW50ZW50c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RJbnRlbnRzUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdEludGVudHNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0SW50ZW50c1Jlc3BvbnNlKCk7XG4gICAgTGlzdEludGVudHNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdEludGVudHNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmludGVudHMgPSBpbnN0YW5jZS5pbnRlbnRzIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IExpc3RJbnRlbnRzUmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEludGVudCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBJbnRlbnQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgKGluc3RhbmNlLmludGVudHMgPSBpbnN0YW5jZS5pbnRlbnRzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdEludGVudHNSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaW50ZW50cyAmJiBpbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5pbnRlbnRzIGFzIGFueSxcbiAgICAgICAgSW50ZW50LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm5leHRQYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ludGVudHM/OiBJbnRlbnRbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RJbnRlbnRzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0SW50ZW50c1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnRzID0gKHZhbHVlLmludGVudHMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdEludGVudHNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudHMoKTogSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRzO1xuICB9XG4gIHNldCBpbnRlbnRzKHZhbHVlOiBJbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dFBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uZXh0UGFnZVRva2VuO1xuICB9XG4gIHNldCBuZXh0UGFnZVRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uZXh0UGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVudHM6ICh0aGlzLmludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RJbnRlbnRzUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBHZXRJbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdldEludGVudFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0SW50ZW50UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRJbnRlbnRSZXF1ZXN0KCk7XG4gICAgR2V0SW50ZW50UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0SW50ZW50UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS5pbnRlbnRWaWV3ID0gaW5zdGFuY2UuaW50ZW50VmlldyB8fCAwO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBHZXRJbnRlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0SW50ZW50UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMywgaW5zdGFuY2UuaW50ZW50Vmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxMCwgaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRJbnRlbnRSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0SW50ZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5pbnRlbnRWaWV3ID0gdmFsdWUuaW50ZW50VmlldztcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IHZhbHVlLnBhZ2VUb2tlbjtcbiAgICBHZXRJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBpbnRlbnRWaWV3OiB0aGlzLmludGVudFZpZXcsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRJbnRlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQ3JlYXRlSW50ZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDcmVhdGVJbnRlbnRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIENyZWF0ZUludGVudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlSW50ZW50UmVxdWVzdCgpO1xuICAgIENyZWF0ZUludGVudFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IENyZWF0ZUludGVudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuaW50ZW50ID0gaW5zdGFuY2UuaW50ZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IGluc3RhbmNlLmludGVudFZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDcmVhdGVJbnRlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmludGVudCA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UuaW50ZW50LCBJbnRlbnQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IENyZWF0ZUludGVudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMiwgaW5zdGFuY2UuaW50ZW50IGFzIGFueSwgSW50ZW50LnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnRWaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDQsIGluc3RhbmNlLmludGVudFZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50PzogSW50ZW50O1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ3JlYXRlSW50ZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENyZWF0ZUludGVudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmludGVudCA9IHZhbHVlLmludGVudCA/IG5ldyBJbnRlbnQodmFsdWUuaW50ZW50KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLmludGVudFZpZXcgPSB2YWx1ZS5pbnRlbnRWaWV3O1xuICAgIENyZWF0ZUludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnQoKTogSW50ZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50O1xuICB9XG4gIHNldCBpbnRlbnQodmFsdWU6IEludGVudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRWaWV3KCk6IEludGVudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRWaWV3O1xuICB9XG4gIHNldCBpbnRlbnRWaWV3KHZhbHVlOiBJbnRlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaW50ZW50OiB0aGlzLmludGVudCA/IHRoaXMuaW50ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgaW50ZW50VmlldzogdGhpcy5pbnRlbnRWaWV3XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVJbnRlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgVXBkYXRlSW50ZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBVcGRhdGVJbnRlbnRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZUludGVudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXBkYXRlSW50ZW50UmVxdWVzdCgpO1xuICAgIFVwZGF0ZUludGVudFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVwZGF0ZUludGVudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5pbnRlbnQgPSBpbnN0YW5jZS5pbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gaW5zdGFuY2UudXBkYXRlTWFzayB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IGluc3RhbmNlLmludGVudFZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBVcGRhdGVJbnRlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50ID0gbmV3IEludGVudCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5pbnRlbnQsIEludGVudC5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDA1LkZpZWxkTWFzaygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2ssXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNS5GaWVsZE1hc2suZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5pbnRlbnRWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVwZGF0ZUludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogVXBkYXRlSW50ZW50UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaW50ZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDEsIGluc3RhbmNlLmludGVudCBhcyBhbnksIEludGVudC50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXBkYXRlTWFzaykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDA1LkZpZWxkTWFzay50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oNCwgaW5zdGFuY2UuaW50ZW50Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50PzogSW50ZW50O1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwNS5GaWVsZE1hc2s7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gVXBkYXRlSW50ZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZUludGVudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmludGVudCA9IHZhbHVlLmludGVudCA/IG5ldyBJbnRlbnQodmFsdWUuaW50ZW50KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSB2YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwNS5GaWVsZE1hc2sodmFsdWUudXBkYXRlTWFzaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaW50ZW50VmlldyA9IHZhbHVlLmludGVudFZpZXc7XG4gICAgVXBkYXRlSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGludGVudCgpOiBJbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnQ7XG4gIH1cbiAgc2V0IGludGVudCh2YWx1ZTogSW50ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVwZGF0ZU1hc2soKTogZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlTWFzaztcbiAgfVxuICBzZXQgdXBkYXRlTWFzayh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXBkYXRlTWFzayA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRWaWV3KCk6IEludGVudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRWaWV3O1xuICB9XG4gIHNldCBpbnRlbnRWaWV3KHZhbHVlOiBJbnRlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnQ6IHRoaXMuaW50ZW50ID8gdGhpcy5pbnRlbnQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB1cGRhdGVNYXNrOiB0aGlzLnVwZGF0ZU1hc2sgPyB0aGlzLnVwZGF0ZU1hc2sudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudFZpZXc6IHRoaXMuaW50ZW50Vmlld1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXBkYXRlSW50ZW50UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIERlbGV0ZUludGVudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRGVsZXRlSW50ZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVJbnRlbnRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZUludGVudFJlcXVlc3QoKTtcbiAgICBEZWxldGVJbnRlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBEZWxldGVJbnRlbnRSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRGVsZXRlSW50ZW50UmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWxldGVJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IERlbGV0ZUludGVudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRGVsZXRlSW50ZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlbGV0ZUludGVudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIERlbGV0ZUludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVJbnRlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCgpO1xuICAgIEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG5cbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IGluc3RhbmNlLnVwZGF0ZU1hc2sgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmludGVudFZpZXcgPSBpbnN0YW5jZS5pbnRlbnRWaWV3IHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5pbnRlbnRCYXRjaFVyaSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5pbnRlbnRCYXRjaElubGluZSA9IG5ldyBJbnRlbnRCYXRjaCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmludGVudEJhdGNoSW5saW5lLFxuICAgICAgICAgICAgSW50ZW50QmF0Y2guZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwNS5GaWVsZE1hc2soKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuaW50ZW50VmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnRCYXRjaFVyaSB8fCBpbnN0YW5jZS5pbnRlbnRCYXRjaFVyaSA9PT0gJycpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5pbnRlbnRCYXRjaFVyaSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnRlbnRCYXRjaElubGluZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2UuaW50ZW50QmF0Y2hJbmxpbmUgYXMgYW55LFxuICAgICAgICBJbnRlbnRCYXRjaC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51cGRhdGVNYXNrKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaW50ZW50Vmlldykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg2LCBpbnN0YW5jZS5pbnRlbnRWaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudEJhdGNoVXJpPzogc3RyaW5nO1xuICBwcml2YXRlIF9pbnRlbnRCYXRjaElubGluZT86IEludGVudEJhdGNoO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwNS5GaWVsZE1hc2s7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuXG4gIHByaXZhdGUgX2ludGVudEJhdGNoOiBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LkludGVudEJhdGNoQ2FzZSA9XG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5JbnRlbnRCYXRjaENhc2Uubm9uZTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuaW50ZW50QmF0Y2hVcmkgPSB2YWx1ZS5pbnRlbnRCYXRjaFVyaTtcbiAgICB0aGlzLmludGVudEJhdGNoSW5saW5lID0gdmFsdWUuaW50ZW50QmF0Y2hJbmxpbmVcbiAgICAgID8gbmV3IEludGVudEJhdGNoKHZhbHVlLmludGVudEJhdGNoSW5saW5lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy51cGRhdGVNYXNrID0gdmFsdWUudXBkYXRlTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrKHZhbHVlLnVwZGF0ZU1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmludGVudFZpZXcgPSB2YWx1ZS5pbnRlbnRWaWV3O1xuICAgIEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRCYXRjaFVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRCYXRjaFVyaTtcbiAgfVxuICBzZXQgaW50ZW50QmF0Y2hVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRlbnRCYXRjaElubGluZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ludGVudEJhdGNoID1cbiAgICAgICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5JbnRlbnRCYXRjaENhc2UuaW50ZW50QmF0Y2hVcmk7XG4gICAgfVxuICAgIHRoaXMuX2ludGVudEJhdGNoVXJpID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudEJhdGNoSW5saW5lKCk6IEludGVudEJhdGNoIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50QmF0Y2hJbmxpbmU7XG4gIH1cbiAgc2V0IGludGVudEJhdGNoSW5saW5lKHZhbHVlOiBJbnRlbnRCYXRjaCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnRlbnRCYXRjaFVyaSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ludGVudEJhdGNoID1cbiAgICAgICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5JbnRlbnRCYXRjaENhc2UuaW50ZW50QmF0Y2hJbmxpbmU7XG4gICAgfVxuICAgIHRoaXMuX2ludGVudEJhdGNoSW5saW5lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVwZGF0ZU1hc2soKTogZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlTWFzaztcbiAgfVxuICBzZXQgdXBkYXRlTWFzayh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDUuRmllbGRNYXNrIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXBkYXRlTWFzayA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRWaWV3KCk6IEludGVudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRWaWV3O1xuICB9XG4gIHNldCBpbnRlbnRWaWV3KHZhbHVlOiBJbnRlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50VmlldyA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRCYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50QmF0Y2g7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBpbnRlbnRCYXRjaFVyaTogdGhpcy5pbnRlbnRCYXRjaFVyaSxcbiAgICAgIGludGVudEJhdGNoSW5saW5lOiB0aGlzLmludGVudEJhdGNoSW5saW5lXG4gICAgICAgID8gdGhpcy5pbnRlbnRCYXRjaElubGluZS50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHVwZGF0ZU1hc2s6IHRoaXMudXBkYXRlTWFzayA/IHRoaXMudXBkYXRlTWFzay50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZW50VmlldzogdGhpcy5pbnRlbnRWaWV3XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHtcbiAgZXhwb3J0IGVudW0gSW50ZW50QmF0Y2hDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICBpbnRlbnRCYXRjaFVyaSA9IDEsXG4gICAgaW50ZW50QmF0Y2hJbmxpbmUgPSAyXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSgpO1xuICAgIEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmludGVudHMgPSBpbnN0YW5jZS5pbnRlbnRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UobWVzc2FnZUluaXRpYWxpemVyMSwgSW50ZW50LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5pbnRlbnRzID0gaW5zdGFuY2UuaW50ZW50cyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmludGVudHMgJiYgaW5zdGFuY2UuaW50ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuaW50ZW50cyBhcyBhbnksXG4gICAgICAgIEludGVudC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnRzPzogSW50ZW50W107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnRzID0gKHZhbHVlLmludGVudHMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQobSkpO1xuICAgIEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaW50ZW50cygpOiBJbnRlbnRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudHM7XG4gIH1cbiAgc2V0IGludGVudHModmFsdWU6IEludGVudFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QoKTtcbiAgICBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmludGVudHMgPSBpbnN0YW5jZS5pbnRlbnRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UobWVzc2FnZUluaXRpYWxpemVyMiwgSW50ZW50LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5pbnRlbnRzID0gaW5zdGFuY2UuaW50ZW50cyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaW50ZW50cyAmJiBpbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5pbnRlbnRzIGFzIGFueSxcbiAgICAgICAgSW50ZW50LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50cz86IEludGVudFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmludGVudHMgPSAodmFsdWUuaW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbmV3IEludGVudChtKSk7XG4gICAgQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudHMoKTogSW50ZW50W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRzO1xuICB9XG4gIHNldCBpbnRlbnRzKHZhbHVlOiBJbnRlbnRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVudHMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudHM6ICh0aGlzLmludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBJbnRlbnRCYXRjaCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBJbnRlbnRCYXRjaCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBJbnRlbnRCYXRjaC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnRlbnRCYXRjaCgpO1xuICAgIEludGVudEJhdGNoLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBJbnRlbnRCYXRjaCkge1xuICAgIGluc3RhbmNlLmludGVudHMgPSBpbnN0YW5jZS5pbnRlbnRzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEludGVudEJhdGNoLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UobWVzc2FnZUluaXRpYWxpemVyMSwgSW50ZW50LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5pbnRlbnRzID0gaW5zdGFuY2UuaW50ZW50cyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSW50ZW50QmF0Y2gucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSW50ZW50QmF0Y2gsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmludGVudHMgJiYgaW5zdGFuY2UuaW50ZW50cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuaW50ZW50cyBhcyBhbnksXG4gICAgICAgIEludGVudC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnRzPzogSW50ZW50W107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBJbnRlbnRCYXRjaCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEludGVudEJhdGNoPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5pbnRlbnRzID0gKHZhbHVlLmludGVudHMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQobSkpO1xuICAgIEludGVudEJhdGNoLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaW50ZW50cygpOiBJbnRlbnRbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudHM7XG4gIH1cbiAgc2V0IGludGVudHModmFsdWU6IEludGVudFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50cyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbnRlbnRCYXRjaCB7fVxuZXhwb3J0IGNsYXNzIEludGVudFNvcnRpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogSW50ZW50U29ydGluZykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBJbnRlbnRTb3J0aW5nLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEludGVudFNvcnRpbmcoKTtcbiAgICBJbnRlbnRTb3J0aW5nLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBJbnRlbnRTb3J0aW5nKSB7XG4gICAgaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gaW5zdGFuY2Uuc29ydGluZ0ZpZWxkIHx8IDA7XG4gICAgaW5zdGFuY2Uuc29ydGluZ01vZGUgPSBpbnN0YW5jZS5zb3J0aW5nTW9kZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEludGVudFNvcnRpbmcsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zb3J0aW5nRmllbGQgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnNvcnRpbmdNb2RlID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEludGVudFNvcnRpbmcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSW50ZW50U29ydGluZywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2Uuc29ydGluZ0ZpZWxkKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDEsIGluc3RhbmNlLnNvcnRpbmdGaWVsZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zb3J0aW5nTW9kZSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgyLCBpbnN0YW5jZS5zb3J0aW5nTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc29ydGluZ0ZpZWxkPzogSW50ZW50U29ydGluZy5JbnRlbnRTb3J0aW5nRmllbGQ7XG4gIHByaXZhdGUgX3NvcnRpbmdNb2RlPzogb25kZXdvTmx1MDAyLlNvcnRpbmdNb2RlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gSW50ZW50U29ydGluZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEludGVudFNvcnRpbmc+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnNvcnRpbmdGaWVsZCA9IHZhbHVlLnNvcnRpbmdGaWVsZDtcbiAgICB0aGlzLnNvcnRpbmdNb2RlID0gdmFsdWUuc29ydGluZ01vZGU7XG4gICAgSW50ZW50U29ydGluZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNvcnRpbmdGaWVsZCgpOiBJbnRlbnRTb3J0aW5nLkludGVudFNvcnRpbmdGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdGaWVsZDtcbiAgfVxuICBzZXQgc29ydGluZ0ZpZWxkKHZhbHVlOiBJbnRlbnRTb3J0aW5nLkludGVudFNvcnRpbmdGaWVsZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvcnRpbmdGaWVsZCA9IHZhbHVlO1xuICB9XG4gIGdldCBzb3J0aW5nTW9kZSgpOiBvbmRld29ObHUwMDIuU29ydGluZ01vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3J0aW5nTW9kZTtcbiAgfVxuICBzZXQgc29ydGluZ01vZGUodmFsdWU6IG9uZGV3b05sdTAwMi5Tb3J0aW5nTW9kZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvcnRpbmdNb2RlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcnRpbmdGaWVsZDogdGhpcy5zb3J0aW5nRmllbGQsXG4gICAgICBzb3J0aW5nTW9kZTogdGhpcy5zb3J0aW5nTW9kZVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSW50ZW50U29ydGluZyB7XG4gIGV4cG9ydCBlbnVtIEludGVudFNvcnRpbmdGaWVsZCB7XG4gICAgbm9JbnRlbnRTb3J0aW5nID0gMCxcbiAgICBzb3J0SW50ZW50QnlOYW1lID0gMSxcbiAgICBzb3J0SW50ZW50QnlDcmVhdGlvbkRhdGUgPSAyLFxuICAgIHNvcnRJbnRlbnRCeUxhc3RVcGRhdGVkID0gMyxcbiAgICBzb3J0SW50ZW50QnlVc2Vyc2F5c0NvdW50ID0gNFxuICB9XG59XG4iXX0=