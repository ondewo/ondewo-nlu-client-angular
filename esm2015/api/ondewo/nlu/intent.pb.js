import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
export var IntentView;
(function (IntentView) {
    IntentView[IntentView["INTENT_VIEW_UNSPECIFIED"] = 0] = "INTENT_VIEW_UNSPECIFIED";
    IntentView[IntentView["INTENT_VIEW_FULL"] = 1] = "INTENT_VIEW_FULL";
    IntentView[IntentView["INTENT_VIEW_PARTIAL"] = 2] = "INTENT_VIEW_PARTIAL";
    IntentView[IntentView["INTENT_VIEW_SHALLOW"] = 3] = "INTENT_VIEW_SHALLOW";
})(IntentView || (IntentView = {}));
export var IntentCategory;
(function (IntentCategory) {
    IntentCategory[IntentCategory["ALL_INTENTS"] = 0] = "ALL_INTENTS";
    IntentCategory[IntentCategory["DEFAULT_INTENTS"] = 1] = "DEFAULT_INTENTS";
    IntentCategory[IntentCategory["USER_DEFINED_INTENTS"] = 2] = "USER_DEFINED_INTENTS";
})(IntentCategory || (IntentCategory = {}));
/**
 * Message implementation for ondewo.nlu.Intent
 */
export class Intent {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Intent to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.displayName = _value.displayName;
        this.webhookState = _value.webhookState;
        this.priority = _value.priority;
        this.isFallback = _value.isFallback;
        this.mlDisabled = _value.mlDisabled;
        this.inputContextNames = (_value.inputContextNames || []).slice();
        this.events = (_value.events || []).slice();
        this.trainingPhrases = (_value.trainingPhrases || []).map(m => new Intent.TrainingPhrase(m));
        this.action = _value.action;
        this.outputContexts = (_value.outputContexts || []).map(m => new ondewoNlu007.Context(m));
        this.resetContexts = _value.resetContexts;
        this.parameters = (_value.parameters || []).map(m => new Intent.Parameter(m));
        this.messages = (_value.messages || []).map(m => new Intent.Message(m));
        this.defaultResponsePlatforms = (_value.defaultResponsePlatforms || []).slice();
        this.rootFollowupIntentName = _value.rootFollowupIntentName;
        this.parentFollowupIntentName = _value.parentFollowupIntentName;
        this.followupIntentInfo = (_value.followupIntentInfo || []).map(m => new Intent.FollowupIntentInfo(m));
        this.nextPageToken = _value.nextPageToken;
        this.domainName = _value.domainName;
        this.isStartOfDeviation = _value.isStartOfDeviation;
        this.isEndOfDeviation = _value.isEndOfDeviation;
        this.trainingPhraseCount = _value.trainingPhraseCount;
        this.status = _value.status;
        Intent.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new Intent();
        Intent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.displayName = _instance.displayName || '';
        _instance.webhookState = _instance.webhookState || 0;
        _instance.priority = _instance.priority || 0;
        _instance.isFallback = _instance.isFallback || false;
        _instance.mlDisabled = _instance.mlDisabled || false;
        _instance.inputContextNames = _instance.inputContextNames || [];
        _instance.events = _instance.events || [];
        _instance.trainingPhrases = _instance.trainingPhrases || [];
        _instance.action = _instance.action || '';
        _instance.outputContexts = _instance.outputContexts || [];
        _instance.resetContexts = _instance.resetContexts || false;
        _instance.parameters = _instance.parameters || [];
        _instance.messages = _instance.messages || [];
        _instance.defaultResponsePlatforms =
            _instance.defaultResponsePlatforms || [];
        _instance.rootFollowupIntentName = _instance.rootFollowupIntentName || '';
        _instance.parentFollowupIntentName =
            _instance.parentFollowupIntentName || '';
        _instance.followupIntentInfo = _instance.followupIntentInfo || [];
        _instance.nextPageToken = _instance.nextPageToken || '';
        _instance.domainName = _instance.domainName || '';
        _instance.isStartOfDeviation = _instance.isStartOfDeviation || false;
        _instance.isEndOfDeviation = _instance.isEndOfDeviation || false;
        _instance.trainingPhraseCount = _instance.trainingPhraseCount || 0;
        _instance.status = _instance.status || 0;
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
                    _instance.displayName = _reader.readString();
                    break;
                case 6:
                    _instance.webhookState = _reader.readEnum();
                    break;
                case 3:
                    _instance.priority = _reader.readInt32();
                    break;
                case 4:
                    _instance.isFallback = _reader.readBool();
                    break;
                case 19:
                    _instance.mlDisabled = _reader.readBool();
                    break;
                case 7:
                    (_instance.inputContextNames =
                        _instance.inputContextNames || []).push(_reader.readString());
                    break;
                case 8:
                    (_instance.events = _instance.events || []).push(_reader.readString());
                    break;
                case 9:
                    const messageInitializer9 = new Intent.TrainingPhrase();
                    _reader.readMessage(messageInitializer9, Intent.TrainingPhrase.deserializeBinaryFromReader);
                    (_instance.trainingPhrases = _instance.trainingPhrases || []).push(messageInitializer9);
                    break;
                case 10:
                    _instance.action = _reader.readString();
                    break;
                case 11:
                    const messageInitializer11 = new ondewoNlu007.Context();
                    _reader.readMessage(messageInitializer11, ondewoNlu007.Context.deserializeBinaryFromReader);
                    (_instance.outputContexts = _instance.outputContexts || []).push(messageInitializer11);
                    break;
                case 12:
                    _instance.resetContexts = _reader.readBool();
                    break;
                case 13:
                    const messageInitializer13 = new Intent.Parameter();
                    _reader.readMessage(messageInitializer13, Intent.Parameter.deserializeBinaryFromReader);
                    (_instance.parameters = _instance.parameters || []).push(messageInitializer13);
                    break;
                case 14:
                    const messageInitializer14 = new Intent.Message();
                    _reader.readMessage(messageInitializer14, Intent.Message.deserializeBinaryFromReader);
                    (_instance.messages = _instance.messages || []).push(messageInitializer14);
                    break;
                case 15:
                    (_instance.defaultResponsePlatforms =
                        _instance.defaultResponsePlatforms || []).push(...(_reader.readPackedEnum() || []));
                    break;
                case 16:
                    _instance.rootFollowupIntentName = _reader.readString();
                    break;
                case 17:
                    _instance.parentFollowupIntentName = _reader.readString();
                    break;
                case 18:
                    const messageInitializer18 = new Intent.FollowupIntentInfo();
                    _reader.readMessage(messageInitializer18, Intent.FollowupIntentInfo.deserializeBinaryFromReader);
                    (_instance.followupIntentInfo =
                        _instance.followupIntentInfo || []).push(messageInitializer18);
                    break;
                case 30:
                    _instance.nextPageToken = _reader.readString();
                    break;
                case 31:
                    _instance.domainName = _reader.readString();
                    break;
                case 32:
                    _instance.isStartOfDeviation = _reader.readBool();
                    break;
                case 33:
                    _instance.isEndOfDeviation = _reader.readBool();
                    break;
                case 34:
                    _instance.trainingPhraseCount = _reader.readInt32();
                    break;
                case 35:
                    _instance.status = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Intent.refineValues(_instance);
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
        if (_instance.displayName) {
            _writer.writeString(2, _instance.displayName);
        }
        if (_instance.webhookState) {
            _writer.writeEnum(6, _instance.webhookState);
        }
        if (_instance.priority) {
            _writer.writeInt32(3, _instance.priority);
        }
        if (_instance.isFallback) {
            _writer.writeBool(4, _instance.isFallback);
        }
        if (_instance.mlDisabled) {
            _writer.writeBool(19, _instance.mlDisabled);
        }
        if (_instance.inputContextNames && _instance.inputContextNames.length) {
            _writer.writeRepeatedString(7, _instance.inputContextNames);
        }
        if (_instance.events && _instance.events.length) {
            _writer.writeRepeatedString(8, _instance.events);
        }
        if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
            _writer.writeRepeatedMessage(9, _instance.trainingPhrases, Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.action) {
            _writer.writeString(10, _instance.action);
        }
        if (_instance.outputContexts && _instance.outputContexts.length) {
            _writer.writeRepeatedMessage(11, _instance.outputContexts, ondewoNlu007.Context.serializeBinaryToWriter);
        }
        if (_instance.resetContexts) {
            _writer.writeBool(12, _instance.resetContexts);
        }
        if (_instance.parameters && _instance.parameters.length) {
            _writer.writeRepeatedMessage(13, _instance.parameters, Intent.Parameter.serializeBinaryToWriter);
        }
        if (_instance.messages && _instance.messages.length) {
            _writer.writeRepeatedMessage(14, _instance.messages, Intent.Message.serializeBinaryToWriter);
        }
        if (_instance.defaultResponsePlatforms &&
            _instance.defaultResponsePlatforms.length) {
            _writer.writePackedEnum(15, _instance.defaultResponsePlatforms);
        }
        if (_instance.rootFollowupIntentName) {
            _writer.writeString(16, _instance.rootFollowupIntentName);
        }
        if (_instance.parentFollowupIntentName) {
            _writer.writeString(17, _instance.parentFollowupIntentName);
        }
        if (_instance.followupIntentInfo && _instance.followupIntentInfo.length) {
            _writer.writeRepeatedMessage(18, _instance.followupIntentInfo, Intent.FollowupIntentInfo.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(30, _instance.nextPageToken);
        }
        if (_instance.domainName) {
            _writer.writeString(31, _instance.domainName);
        }
        if (_instance.isStartOfDeviation) {
            _writer.writeBool(32, _instance.isStartOfDeviation);
        }
        if (_instance.isEndOfDeviation) {
            _writer.writeBool(33, _instance.isEndOfDeviation);
        }
        if (_instance.trainingPhraseCount) {
            _writer.writeInt32(34, _instance.trainingPhraseCount);
        }
        if (_instance.status) {
            _writer.writeEnum(35, _instance.status);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        Intent.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
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
        var _a, _b;
        return {
            name: this.name,
            displayName: this.displayName,
            webhookState: Intent.WebhookState[(_a = this.webhookState) !== null && _a !== void 0 ? _a : 0],
            priority: this.priority,
            isFallback: this.isFallback,
            mlDisabled: this.mlDisabled,
            inputContextNames: (this.inputContextNames || []).slice(),
            events: (this.events || []).slice(),
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toProtobufJSON(options)),
            action: this.action,
            outputContexts: (this.outputContexts || []).map(m => m.toProtobufJSON(options)),
            resetContexts: this.resetContexts,
            parameters: (this.parameters || []).map(m => m.toProtobufJSON(options)),
            messages: (this.messages || []).map(m => m.toProtobufJSON(options)),
            defaultResponsePlatforms: (this.defaultResponsePlatforms || []).map(v => Intent.Message.Platform[v]),
            rootFollowupIntentName: this.rootFollowupIntentName,
            parentFollowupIntentName: this.parentFollowupIntentName,
            followupIntentInfo: (this.followupIntentInfo || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken,
            domainName: this.domainName,
            isStartOfDeviation: this.isStartOfDeviation,
            isEndOfDeviation: this.isEndOfDeviation,
            trainingPhraseCount: this.trainingPhraseCount,
            status: Intent.IntentStatus[(_b = this.status) !== null && _b !== void 0 ? _b : 0]
        };
    }
}
Intent.id = 'ondewo.nlu.Intent';
(function (Intent) {
    let IntentStatus;
    (function (IntentStatus) {
        IntentStatus[IntentStatus["ACTIVE"] = 0] = "ACTIVE";
        IntentStatus[IntentStatus["INACTIVE"] = 1] = "INACTIVE";
    })(IntentStatus = Intent.IntentStatus || (Intent.IntentStatus = {}));
    let WebhookState;
    (function (WebhookState) {
        WebhookState[WebhookState["WEBHOOK_STATE_UNSPECIFIED"] = 0] = "WEBHOOK_STATE_UNSPECIFIED";
        WebhookState[WebhookState["WEBHOOK_STATE_ENABLED"] = 1] = "WEBHOOK_STATE_ENABLED";
        WebhookState[WebhookState["WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"] = 2] = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING";
    })(WebhookState = Intent.WebhookState || (Intent.WebhookState = {}));
    /**
     * Message implementation for ondewo.nlu.TrainingPhrase
     */
    class TrainingPhrase {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhrase to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.type = _value.type;
            this.text = _value.text;
            this.entities = (_value.entities || []).map(m => new Intent.TrainingPhrase.Entity(m));
            this.timesAddedCount = _value.timesAddedCount;
            TrainingPhrase.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new TrainingPhrase();
            TrainingPhrase.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.type = _instance.type || 0;
            _instance.text = _instance.text || '';
            _instance.entities = _instance.entities || [];
            _instance.timesAddedCount = _instance.timesAddedCount || 0;
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
                        _instance.type = _reader.readEnum();
                        break;
                    case 3:
                        _instance.text = _reader.readString();
                        break;
                    case 4:
                        const messageInitializer4 = new Intent.TrainingPhrase.Entity();
                        _reader.readMessage(messageInitializer4, Intent.TrainingPhrase.Entity.deserializeBinaryFromReader);
                        (_instance.entities = _instance.entities || []).push(messageInitializer4);
                        break;
                    case 5:
                        _instance.timesAddedCount = _reader.readInt32();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            TrainingPhrase.refineValues(_instance);
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
            if (_instance.type) {
                _writer.writeEnum(2, _instance.type);
            }
            if (_instance.text) {
                _writer.writeString(3, _instance.text);
            }
            if (_instance.entities && _instance.entities.length) {
                _writer.writeRepeatedMessage(4, _instance.entities, Intent.TrainingPhrase.Entity.serializeBinaryToWriter);
            }
            if (_instance.timesAddedCount) {
                _writer.writeInt32(5, _instance.timesAddedCount);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            TrainingPhrase.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                name: this.name,
                type: this.type,
                text: this.text,
                entities: (this.entities || []).map(m => m.toObject()),
                timesAddedCount: this.timesAddedCount
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
            var _a;
            return {
                name: this.name,
                type: Intent.TrainingPhrase.Type[(_a = this.type) !== null && _a !== void 0 ? _a : 0],
                text: this.text,
                entities: (this.entities || []).map(m => m.toProtobufJSON(options)),
                timesAddedCount: this.timesAddedCount
            };
        }
    }
    TrainingPhrase.id = 'ondewo.nlu.TrainingPhrase';
    Intent.TrainingPhrase = TrainingPhrase;
    (function (TrainingPhrase) {
        let Type;
        (function (Type) {
            Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
            Type[Type["EXAMPLE"] = 1] = "EXAMPLE";
            Type[Type["TEMPLATE"] = 2] = "TEMPLATE";
        })(Type = TrainingPhrase.Type || (TrainingPhrase.Type = {}));
        /**
         * Message implementation for ondewo.nlu.Entity
         */
        class Entity {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Entity to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.entityTypeName = _value.entityTypeName;
                this.entityTypeDisplayName = _value.entityTypeDisplayName;
                this.entityValueName = _value.entityValueName;
                this.entityValueDisplayName = _value.entityValueDisplayName;
                this.start = _value.start;
                this.end = _value.end;
                this.parameterName = _value.parameterName;
                this.parameterDisplayName = _value.parameterDisplayName;
                Entity.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Entity();
                Entity.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.entityTypeName = _instance.entityTypeName || '';
                _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
                _instance.entityValueName = _instance.entityValueName || '';
                _instance.entityValueDisplayName =
                    _instance.entityValueDisplayName || '';
                _instance.start = _instance.start || 0;
                _instance.end = _instance.end || 0;
                _instance.parameterName = _instance.parameterName || '';
                _instance.parameterDisplayName = _instance.parameterDisplayName || '';
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
                        case 3:
                            _instance.entityTypeDisplayName = _reader.readString();
                            break;
                        case 4:
                            _instance.entityValueName = _reader.readString();
                            break;
                        case 5:
                            _instance.entityValueDisplayName = _reader.readString();
                            break;
                        case 6:
                            _instance.start = _reader.readInt32();
                            break;
                        case 7:
                            _instance.end = _reader.readInt32();
                            break;
                        case 8:
                            _instance.parameterName = _reader.readString();
                            break;
                        case 9:
                            _instance.parameterDisplayName = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Entity.refineValues(_instance);
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
                if (_instance.entityTypeDisplayName) {
                    _writer.writeString(3, _instance.entityTypeDisplayName);
                }
                if (_instance.entityValueName) {
                    _writer.writeString(4, _instance.entityValueName);
                }
                if (_instance.entityValueDisplayName) {
                    _writer.writeString(5, _instance.entityValueDisplayName);
                }
                if (_instance.start) {
                    _writer.writeInt32(6, _instance.start);
                }
                if (_instance.end) {
                    _writer.writeInt32(7, _instance.end);
                }
                if (_instance.parameterName) {
                    _writer.writeString(8, _instance.parameterName);
                }
                if (_instance.parameterDisplayName) {
                    _writer.writeString(9, _instance.parameterDisplayName);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Entity.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
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
                    entityTypeDisplayName: this.entityTypeDisplayName,
                    entityValueName: this.entityValueName,
                    entityValueDisplayName: this.entityValueDisplayName,
                    start: this.start,
                    end: this.end,
                    parameterName: this.parameterName,
                    parameterDisplayName: this.parameterDisplayName
                };
            }
        }
        Entity.id = 'ondewo.nlu.Entity';
        TrainingPhrase.Entity = Entity;
    })(TrainingPhrase = Intent.TrainingPhrase || (Intent.TrainingPhrase = {}));
    /**
     * Message implementation for ondewo.nlu.Parameter
     */
    class Parameter {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Parameter to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.name = _value.name;
            this.displayName = _value.displayName;
            this.value = _value.value;
            this.defaultValue = _value.defaultValue;
            this.entityTypeName = _value.entityTypeName;
            this.entityTypeDisplayName = _value.entityTypeDisplayName;
            this.mandatory = _value.mandatory;
            this.prompts = (_value.prompts || []).slice();
            this.isList = _value.isList;
            Parameter.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new Parameter();
            Parameter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.name = _instance.name || '';
            _instance.displayName = _instance.displayName || '';
            _instance.value = _instance.value || '';
            _instance.defaultValue = _instance.defaultValue || '';
            _instance.entityTypeName = _instance.entityTypeName || '';
            _instance.entityTypeDisplayName = _instance.entityTypeDisplayName || '';
            _instance.mandatory = _instance.mandatory || false;
            _instance.prompts = _instance.prompts || [];
            _instance.isList = _instance.isList || false;
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
                        _instance.displayName = _reader.readString();
                        break;
                    case 3:
                        _instance.value = _reader.readString();
                        break;
                    case 4:
                        _instance.defaultValue = _reader.readString();
                        break;
                    case 5:
                        _instance.entityTypeName = _reader.readString();
                        break;
                    case 6:
                        _instance.entityTypeDisplayName = _reader.readString();
                        break;
                    case 7:
                        _instance.mandatory = _reader.readBool();
                        break;
                    case 8:
                        (_instance.prompts = _instance.prompts || []).push(_reader.readString());
                        break;
                    case 9:
                        _instance.isList = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Parameter.refineValues(_instance);
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
            if (_instance.displayName) {
                _writer.writeString(2, _instance.displayName);
            }
            if (_instance.value) {
                _writer.writeString(3, _instance.value);
            }
            if (_instance.defaultValue) {
                _writer.writeString(4, _instance.defaultValue);
            }
            if (_instance.entityTypeName) {
                _writer.writeString(5, _instance.entityTypeName);
            }
            if (_instance.entityTypeDisplayName) {
                _writer.writeString(6, _instance.entityTypeDisplayName);
            }
            if (_instance.mandatory) {
                _writer.writeBool(7, _instance.mandatory);
            }
            if (_instance.prompts && _instance.prompts.length) {
                _writer.writeRepeatedString(8, _instance.prompts);
            }
            if (_instance.isList) {
                _writer.writeBool(9, _instance.isList);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            Parameter.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
    }
    Parameter.id = 'ondewo.nlu.Parameter';
    Intent.Parameter = Parameter;
    /**
     * Message implementation for ondewo.nlu.Message
     */
    class Message {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Message to deeply clone from
         */
        constructor(_value) {
            this._message = Message.MessageCase.none;
            _value = _value || {};
            this.text = _value.text
                ? new Intent.Message.Text(_value.text)
                : undefined;
            this.image = _value.image
                ? new Intent.Message.Image(_value.image)
                : undefined;
            this.quickReplies = _value.quickReplies
                ? new Intent.Message.QuickReplies(_value.quickReplies)
                : undefined;
            this.card = _value.card
                ? new Intent.Message.Card(_value.card)
                : undefined;
            this.payload = _value.payload
                ? new googleProtobuf010.Struct(_value.payload)
                : undefined;
            this.simpleResponses = _value.simpleResponses
                ? new Intent.Message.SimpleResponses(_value.simpleResponses)
                : undefined;
            this.basicCard = _value.basicCard
                ? new Intent.Message.BasicCard(_value.basicCard)
                : undefined;
            this.suggestions = _value.suggestions
                ? new Intent.Message.Suggestions(_value.suggestions)
                : undefined;
            this.linkOutSuggestion = _value.linkOutSuggestion
                ? new Intent.Message.LinkOutSuggestion(_value.linkOutSuggestion)
                : undefined;
            this.listSelect = _value.listSelect
                ? new Intent.Message.ListSelect(_value.listSelect)
                : undefined;
            this.carouselSelect = _value.carouselSelect
                ? new Intent.Message.CarouselSelect(_value.carouselSelect)
                : undefined;
            this.htmlText = _value.htmlText
                ? new Intent.Message.HTMLText(_value.htmlText)
                : undefined;
            this.video = _value.video
                ? new Intent.Message.Video(_value.video)
                : undefined;
            this.audio = _value.audio
                ? new Intent.Message.Audio(_value.audio)
                : undefined;
            this.platform = _value.platform;
            Message.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new Message();
            Message.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.platform = _instance.platform || 0;
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
                        _instance.text = new Intent.Message.Text();
                        _reader.readMessage(_instance.text, Intent.Message.Text.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.image = new Intent.Message.Image();
                        _reader.readMessage(_instance.image, Intent.Message.Image.deserializeBinaryFromReader);
                        break;
                    case 3:
                        _instance.quickReplies = new Intent.Message.QuickReplies();
                        _reader.readMessage(_instance.quickReplies, Intent.Message.QuickReplies.deserializeBinaryFromReader);
                        break;
                    case 4:
                        _instance.card = new Intent.Message.Card();
                        _reader.readMessage(_instance.card, Intent.Message.Card.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.payload = new googleProtobuf010.Struct();
                        _reader.readMessage(_instance.payload, googleProtobuf010.Struct.deserializeBinaryFromReader);
                        break;
                    case 7:
                        _instance.simpleResponses = new Intent.Message.SimpleResponses();
                        _reader.readMessage(_instance.simpleResponses, Intent.Message.SimpleResponses.deserializeBinaryFromReader);
                        break;
                    case 8:
                        _instance.basicCard = new Intent.Message.BasicCard();
                        _reader.readMessage(_instance.basicCard, Intent.Message.BasicCard.deserializeBinaryFromReader);
                        break;
                    case 9:
                        _instance.suggestions = new Intent.Message.Suggestions();
                        _reader.readMessage(_instance.suggestions, Intent.Message.Suggestions.deserializeBinaryFromReader);
                        break;
                    case 10:
                        _instance.linkOutSuggestion = new Intent.Message.LinkOutSuggestion();
                        _reader.readMessage(_instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader);
                        break;
                    case 11:
                        _instance.listSelect = new Intent.Message.ListSelect();
                        _reader.readMessage(_instance.listSelect, Intent.Message.ListSelect.deserializeBinaryFromReader);
                        break;
                    case 12:
                        _instance.carouselSelect = new Intent.Message.CarouselSelect();
                        _reader.readMessage(_instance.carouselSelect, Intent.Message.CarouselSelect.deserializeBinaryFromReader);
                        break;
                    case 13:
                        _instance.htmlText = new Intent.Message.HTMLText();
                        _reader.readMessage(_instance.htmlText, Intent.Message.HTMLText.deserializeBinaryFromReader);
                        break;
                    case 14:
                        _instance.video = new Intent.Message.Video();
                        _reader.readMessage(_instance.video, Intent.Message.Video.deserializeBinaryFromReader);
                        break;
                    case 15:
                        _instance.audio = new Intent.Message.Audio();
                        _reader.readMessage(_instance.audio, Intent.Message.Audio.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.platform = _reader.readEnum();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Message.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.text) {
                _writer.writeMessage(1, _instance.text, Intent.Message.Text.serializeBinaryToWriter);
            }
            if (_instance.image) {
                _writer.writeMessage(2, _instance.image, Intent.Message.Image.serializeBinaryToWriter);
            }
            if (_instance.quickReplies) {
                _writer.writeMessage(3, _instance.quickReplies, Intent.Message.QuickReplies.serializeBinaryToWriter);
            }
            if (_instance.card) {
                _writer.writeMessage(4, _instance.card, Intent.Message.Card.serializeBinaryToWriter);
            }
            if (_instance.payload) {
                _writer.writeMessage(5, _instance.payload, googleProtobuf010.Struct.serializeBinaryToWriter);
            }
            if (_instance.simpleResponses) {
                _writer.writeMessage(7, _instance.simpleResponses, Intent.Message.SimpleResponses.serializeBinaryToWriter);
            }
            if (_instance.basicCard) {
                _writer.writeMessage(8, _instance.basicCard, Intent.Message.BasicCard.serializeBinaryToWriter);
            }
            if (_instance.suggestions) {
                _writer.writeMessage(9, _instance.suggestions, Intent.Message.Suggestions.serializeBinaryToWriter);
            }
            if (_instance.linkOutSuggestion) {
                _writer.writeMessage(10, _instance.linkOutSuggestion, Intent.Message.LinkOutSuggestion.serializeBinaryToWriter);
            }
            if (_instance.listSelect) {
                _writer.writeMessage(11, _instance.listSelect, Intent.Message.ListSelect.serializeBinaryToWriter);
            }
            if (_instance.carouselSelect) {
                _writer.writeMessage(12, _instance.carouselSelect, Intent.Message.CarouselSelect.serializeBinaryToWriter);
            }
            if (_instance.htmlText) {
                _writer.writeMessage(13, _instance.htmlText, Intent.Message.HTMLText.serializeBinaryToWriter);
            }
            if (_instance.video) {
                _writer.writeMessage(14, _instance.video, Intent.Message.Video.serializeBinaryToWriter);
            }
            if (_instance.audio) {
                _writer.writeMessage(15, _instance.audio, Intent.Message.Audio.serializeBinaryToWriter);
            }
            if (_instance.platform) {
                _writer.writeEnum(6, _instance.platform);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            Message.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
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
            var _a;
            return {
                text: this.text ? this.text.toProtobufJSON(options) : null,
                image: this.image ? this.image.toProtobufJSON(options) : null,
                quickReplies: this.quickReplies
                    ? this.quickReplies.toProtobufJSON(options)
                    : null,
                card: this.card ? this.card.toProtobufJSON(options) : null,
                payload: this.payload ? this.payload.toProtobufJSON(options) : null,
                simpleResponses: this.simpleResponses
                    ? this.simpleResponses.toProtobufJSON(options)
                    : null,
                basicCard: this.basicCard
                    ? this.basicCard.toProtobufJSON(options)
                    : null,
                suggestions: this.suggestions
                    ? this.suggestions.toProtobufJSON(options)
                    : null,
                linkOutSuggestion: this.linkOutSuggestion
                    ? this.linkOutSuggestion.toProtobufJSON(options)
                    : null,
                listSelect: this.listSelect
                    ? this.listSelect.toProtobufJSON(options)
                    : null,
                carouselSelect: this.carouselSelect
                    ? this.carouselSelect.toProtobufJSON(options)
                    : null,
                htmlText: this.htmlText ? this.htmlText.toProtobufJSON(options) : null,
                video: this.video ? this.video.toProtobufJSON(options) : null,
                audio: this.audio ? this.audio.toProtobufJSON(options) : null,
                platform: Intent.Message.Platform[(_a = this.platform) !== null && _a !== void 0 ? _a : 0]
            };
        }
    }
    Message.id = 'ondewo.nlu.Message';
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
            Platform[Platform["PLATFORM_UNSPECIFIED"] = 0] = "PLATFORM_UNSPECIFIED";
            Platform[Platform["FACEBOOK"] = 1] = "FACEBOOK";
            Platform[Platform["SLACK"] = 2] = "SLACK";
            Platform[Platform["TELEGRAM"] = 3] = "TELEGRAM";
            Platform[Platform["KIK"] = 4] = "KIK";
            Platform[Platform["SKYPE"] = 5] = "SKYPE";
            Platform[Platform["LINE"] = 6] = "LINE";
            Platform[Platform["VIBER"] = 7] = "VIBER";
            Platform[Platform["ACTIONS_ON_GOOGLE"] = 8] = "ACTIONS_ON_GOOGLE";
        })(Platform = Message.Platform || (Message.Platform = {}));
        /**
         * Message implementation for ondewo.nlu.Text
         */
        class Text {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Text to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.text = (_value.text || []).slice();
                Text.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Text();
                Text.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.text = _instance.text || [];
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
                            (_instance.text = _instance.text || []).push(_reader.readString());
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Text.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.text && _instance.text.length) {
                    _writer.writeRepeatedString(1, _instance.text);
                }
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
                Text.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    text: (this.text || []).slice()
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
                    text: (this.text || []).slice()
                };
            }
        }
        Text.id = 'ondewo.nlu.Text';
        Message.Text = Text;
        /**
         * Message implementation for ondewo.nlu.Image
         */
        class Image {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Image to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.imageUri = _value.imageUri;
                this.accessibilityText = _value.accessibilityText;
                Image.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Image();
                Image.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.imageUri = _instance.imageUri || '';
                _instance.accessibilityText = _instance.accessibilityText || '';
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
                            _instance.imageUri = _reader.readString();
                            break;
                        case 2:
                            _instance.accessibilityText = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Image.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.imageUri) {
                    _writer.writeString(1, _instance.imageUri);
                }
                if (_instance.accessibilityText) {
                    _writer.writeString(2, _instance.accessibilityText);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Image.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    imageUri: this.imageUri,
                    accessibilityText: this.accessibilityText
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
                    imageUri: this.imageUri,
                    accessibilityText: this.accessibilityText
                };
            }
        }
        Image.id = 'ondewo.nlu.Image';
        Message.Image = Image;
        /**
         * Message implementation for ondewo.nlu.QuickReplies
         */
        class QuickReplies {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of QuickReplies to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                this.quickReplies = (_value.quickReplies || []).slice();
                QuickReplies.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new QuickReplies();
                QuickReplies.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.title = _instance.title || '';
                _instance.quickReplies = _instance.quickReplies || [];
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
                            _instance.title = _reader.readString();
                            break;
                        case 2:
                            (_instance.quickReplies = _instance.quickReplies || []).push(_reader.readString());
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                QuickReplies.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.title) {
                    _writer.writeString(1, _instance.title);
                }
                if (_instance.quickReplies && _instance.quickReplies.length) {
                    _writer.writeRepeatedString(2, _instance.quickReplies);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                QuickReplies.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    title: this.title,
                    quickReplies: (this.quickReplies || []).slice()
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
                    title: this.title,
                    quickReplies: (this.quickReplies || []).slice()
                };
            }
        }
        QuickReplies.id = 'ondewo.nlu.QuickReplies';
        Message.QuickReplies = QuickReplies;
        /**
         * Message implementation for ondewo.nlu.Card
         */
        class Card {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Card to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                this.subtitle = _value.subtitle;
                this.imageUri = _value.imageUri;
                this.buttons = (_value.buttons || []).map(m => new Intent.Message.Card.Button(m));
                Card.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Card();
                Card.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.title = _instance.title || '';
                _instance.subtitle = _instance.subtitle || '';
                _instance.imageUri = _instance.imageUri || '';
                _instance.buttons = _instance.buttons || [];
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
                            _instance.title = _reader.readString();
                            break;
                        case 2:
                            _instance.subtitle = _reader.readString();
                            break;
                        case 3:
                            _instance.imageUri = _reader.readString();
                            break;
                        case 4:
                            const messageInitializer4 = new Intent.Message.Card.Button();
                            _reader.readMessage(messageInitializer4, Intent.Message.Card.Button.deserializeBinaryFromReader);
                            (_instance.buttons = _instance.buttons || []).push(messageInitializer4);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Card.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.title) {
                    _writer.writeString(1, _instance.title);
                }
                if (_instance.subtitle) {
                    _writer.writeString(2, _instance.subtitle);
                }
                if (_instance.imageUri) {
                    _writer.writeString(3, _instance.imageUri);
                }
                if (_instance.buttons && _instance.buttons.length) {
                    _writer.writeRepeatedMessage(4, _instance.buttons, Intent.Message.Card.Button.serializeBinaryToWriter);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Card.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    imageUri: this.imageUri,
                    buttons: (this.buttons || []).map(m => m.toObject())
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
                    title: this.title,
                    subtitle: this.subtitle,
                    imageUri: this.imageUri,
                    buttons: (this.buttons || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        Card.id = 'ondewo.nlu.Card';
        Message.Card = Card;
        (function (Card) {
            /**
             * Message implementation for ondewo.nlu.Button
             */
            class Button {
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Button to deeply clone from
                 */
                constructor(_value) {
                    _value = _value || {};
                    this.text = _value.text;
                    this.postback = _value.postback;
                    Button.refineValues(this);
                }
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes) {
                    const instance = new Button();
                    Button.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance) {
                    _instance.text = _instance.text || '';
                    _instance.postback = _instance.postback || '';
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
                                _instance.postback = _reader.readString();
                                break;
                            default:
                                _reader.skipField();
                        }
                    }
                    Button.refineValues(_instance);
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
                    if (_instance.postback) {
                        _writer.writeString(2, _instance.postback);
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
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary() {
                    const writer = new BinaryWriter();
                    Button.serializeBinaryToWriter(this, writer);
                    return writer.getResultBuffer();
                }
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject() {
                    return {
                        text: this.text,
                        postback: this.postback
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
                        postback: this.postback
                    };
                }
            }
            Button.id = 'ondewo.nlu.Button';
            Card.Button = Button;
        })(Card = Message.Card || (Message.Card = {}));
        /**
         * Message implementation for ondewo.nlu.SimpleResponse
         */
        class SimpleResponse {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SimpleResponse to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.textToSpeech = _value.textToSpeech;
                this.ssml = _value.ssml;
                this.displayText = _value.displayText;
                SimpleResponse.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new SimpleResponse();
                SimpleResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.textToSpeech = _instance.textToSpeech || '';
                _instance.ssml = _instance.ssml || '';
                _instance.displayText = _instance.displayText || '';
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
                            _instance.textToSpeech = _reader.readString();
                            break;
                        case 2:
                            _instance.ssml = _reader.readString();
                            break;
                        case 3:
                            _instance.displayText = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                SimpleResponse.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.textToSpeech) {
                    _writer.writeString(1, _instance.textToSpeech);
                }
                if (_instance.ssml) {
                    _writer.writeString(2, _instance.ssml);
                }
                if (_instance.displayText) {
                    _writer.writeString(3, _instance.displayText);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                SimpleResponse.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    textToSpeech: this.textToSpeech,
                    ssml: this.ssml,
                    displayText: this.displayText
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
                    textToSpeech: this.textToSpeech,
                    ssml: this.ssml,
                    displayText: this.displayText
                };
            }
        }
        SimpleResponse.id = 'ondewo.nlu.SimpleResponse';
        Message.SimpleResponse = SimpleResponse;
        /**
         * Message implementation for ondewo.nlu.SimpleResponses
         */
        class SimpleResponses {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SimpleResponses to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.simpleResponses = (_value.simpleResponses || []).map(m => new Intent.Message.SimpleResponse(m));
                SimpleResponses.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new SimpleResponses();
                SimpleResponses.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.simpleResponses = _instance.simpleResponses || [];
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
                            const messageInitializer1 = new Intent.Message.SimpleResponse();
                            _reader.readMessage(messageInitializer1, Intent.Message.SimpleResponse.deserializeBinaryFromReader);
                            (_instance.simpleResponses =
                                _instance.simpleResponses || []).push(messageInitializer1);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                SimpleResponses.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.simpleResponses && _instance.simpleResponses.length) {
                    _writer.writeRepeatedMessage(1, _instance.simpleResponses, Intent.Message.SimpleResponse.serializeBinaryToWriter);
                }
            }
            get simpleResponses() {
                return this._simpleResponses;
            }
            set simpleResponses(value) {
                this._simpleResponses = value;
            }
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                SimpleResponses.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    simpleResponses: (this.simpleResponses || []).map(m => m.toObject())
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
                    simpleResponses: (this.simpleResponses || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        SimpleResponses.id = 'ondewo.nlu.SimpleResponses';
        Message.SimpleResponses = SimpleResponses;
        /**
         * Message implementation for ondewo.nlu.BasicCard
         */
        class BasicCard {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of BasicCard to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                this.subtitle = _value.subtitle;
                this.formattedText = _value.formattedText;
                this.image = _value.image
                    ? new Intent.Message.Image(_value.image)
                    : undefined;
                this.buttons = (_value.buttons || []).map(m => new Intent.Message.BasicCard.Button(m));
                BasicCard.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new BasicCard();
                BasicCard.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.title = _instance.title || '';
                _instance.subtitle = _instance.subtitle || '';
                _instance.formattedText = _instance.formattedText || '';
                _instance.image = _instance.image || undefined;
                _instance.buttons = _instance.buttons || [];
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
                            _instance.title = _reader.readString();
                            break;
                        case 2:
                            _instance.subtitle = _reader.readString();
                            break;
                        case 3:
                            _instance.formattedText = _reader.readString();
                            break;
                        case 4:
                            _instance.image = new Intent.Message.Image();
                            _reader.readMessage(_instance.image, Intent.Message.Image.deserializeBinaryFromReader);
                            break;
                        case 5:
                            const messageInitializer5 = new Intent.Message.BasicCard.Button();
                            _reader.readMessage(messageInitializer5, Intent.Message.BasicCard.Button.deserializeBinaryFromReader);
                            (_instance.buttons = _instance.buttons || []).push(messageInitializer5);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                BasicCard.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.title) {
                    _writer.writeString(1, _instance.title);
                }
                if (_instance.subtitle) {
                    _writer.writeString(2, _instance.subtitle);
                }
                if (_instance.formattedText) {
                    _writer.writeString(3, _instance.formattedText);
                }
                if (_instance.image) {
                    _writer.writeMessage(4, _instance.image, Intent.Message.Image.serializeBinaryToWriter);
                }
                if (_instance.buttons && _instance.buttons.length) {
                    _writer.writeRepeatedMessage(5, _instance.buttons, Intent.Message.BasicCard.Button.serializeBinaryToWriter);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                BasicCard.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    title: this.title,
                    subtitle: this.subtitle,
                    formattedText: this.formattedText,
                    image: this.image ? this.image.toObject() : undefined,
                    buttons: (this.buttons || []).map(m => m.toObject())
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
                    title: this.title,
                    subtitle: this.subtitle,
                    formattedText: this.formattedText,
                    image: this.image ? this.image.toProtobufJSON(options) : null,
                    buttons: (this.buttons || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        BasicCard.id = 'ondewo.nlu.BasicCard';
        Message.BasicCard = BasicCard;
        (function (BasicCard) {
            /**
             * Message implementation for ondewo.nlu.Button
             */
            class Button {
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Button to deeply clone from
                 */
                constructor(_value) {
                    _value = _value || {};
                    this.title = _value.title;
                    this.openUriAction = _value.openUriAction
                        ? new Intent.Message.BasicCard.Button.OpenUriAction(_value.openUriAction)
                        : undefined;
                    Button.refineValues(this);
                }
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes) {
                    const instance = new Button();
                    Button.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance) {
                    _instance.title = _instance.title || '';
                    _instance.openUriAction = _instance.openUriAction || undefined;
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
                                _instance.title = _reader.readString();
                                break;
                            case 2:
                                _instance.openUriAction = new Intent.Message.BasicCard.Button.OpenUriAction();
                                _reader.readMessage(_instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction
                                    .deserializeBinaryFromReader);
                                break;
                            default:
                                _reader.skipField();
                        }
                    }
                    Button.refineValues(_instance);
                }
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance, _writer) {
                    if (_instance.title) {
                        _writer.writeString(1, _instance.title);
                    }
                    if (_instance.openUriAction) {
                        _writer.writeMessage(2, _instance.openUriAction, Intent.Message.BasicCard.Button.OpenUriAction
                            .serializeBinaryToWriter);
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
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary() {
                    const writer = new BinaryWriter();
                    Button.serializeBinaryToWriter(this, writer);
                    return writer.getResultBuffer();
                }
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject() {
                    return {
                        title: this.title,
                        openUriAction: this.openUriAction
                            ? this.openUriAction.toObject()
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
                        title: this.title,
                        openUriAction: this.openUriAction
                            ? this.openUriAction.toProtobufJSON(options)
                            : null
                    };
                }
            }
            Button.id = 'ondewo.nlu.Button';
            BasicCard.Button = Button;
            (function (Button) {
                /**
                 * Message implementation for ondewo.nlu.OpenUriAction
                 */
                class OpenUriAction {
                    /**
                     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                     * @param _value initial values object or instance of OpenUriAction to deeply clone from
                     */
                    constructor(_value) {
                        _value = _value || {};
                        this.uri = _value.uri;
                        OpenUriAction.refineValues(this);
                    }
                    /**
                     * Deserialize binary data to message
                     * @param instance message instance
                     */
                    static deserializeBinary(bytes) {
                        const instance = new OpenUriAction();
                        OpenUriAction.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                        return instance;
                    }
                    /**
                     * Check all the properties and set default protobuf values if necessary
                     * @param _instance message instance
                     */
                    static refineValues(_instance) {
                        _instance.uri = _instance.uri || '';
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
                                    _instance.uri = _reader.readString();
                                    break;
                                default:
                                    _reader.skipField();
                            }
                        }
                        OpenUriAction.refineValues(_instance);
                    }
                    /**
                     * Serializes a message to binary format using provided binary reader
                     * @param _instance message instance
                     * @param _writer binary writer instance
                     */
                    static serializeBinaryToWriter(_instance, _writer) {
                        if (_instance.uri) {
                            _writer.writeString(1, _instance.uri);
                        }
                    }
                    get uri() {
                        return this._uri;
                    }
                    set uri(value) {
                        this._uri = value;
                    }
                    /**
                     * Serialize message to binary data
                     * @param instance message instance
                     */
                    serializeBinary() {
                        const writer = new BinaryWriter();
                        OpenUriAction.serializeBinaryToWriter(this, writer);
                        return writer.getResultBuffer();
                    }
                    /**
                     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                     */
                    toObject() {
                        return {
                            uri: this.uri
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
                            uri: this.uri
                        };
                    }
                }
                OpenUriAction.id = 'ondewo.nlu.OpenUriAction';
                Button.OpenUriAction = OpenUriAction;
            })(Button = BasicCard.Button || (BasicCard.Button = {}));
        })(BasicCard = Message.BasicCard || (Message.BasicCard = {}));
        /**
         * Message implementation for ondewo.nlu.Suggestion
         */
        class Suggestion {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestion to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                Suggestion.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Suggestion();
                Suggestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.title = _instance.title || '';
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
                            _instance.title = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Suggestion.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.title) {
                    _writer.writeString(1, _instance.title);
                }
            }
            get title() {
                return this._title;
            }
            set title(value) {
                this._title = value;
            }
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Suggestion.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    title: this.title
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
                    title: this.title
                };
            }
        }
        Suggestion.id = 'ondewo.nlu.Suggestion';
        Message.Suggestion = Suggestion;
        /**
         * Message implementation for ondewo.nlu.Suggestions
         */
        class Suggestions {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestions to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.suggestions = (_value.suggestions || []).map(m => new Intent.Message.Suggestion(m));
                Suggestions.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Suggestions();
                Suggestions.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.suggestions = _instance.suggestions || [];
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
                            const messageInitializer1 = new Intent.Message.Suggestion();
                            _reader.readMessage(messageInitializer1, Intent.Message.Suggestion.deserializeBinaryFromReader);
                            (_instance.suggestions = _instance.suggestions || []).push(messageInitializer1);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Suggestions.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.suggestions && _instance.suggestions.length) {
                    _writer.writeRepeatedMessage(1, _instance.suggestions, Intent.Message.Suggestion.serializeBinaryToWriter);
                }
            }
            get suggestions() {
                return this._suggestions;
            }
            set suggestions(value) {
                this._suggestions = value;
            }
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Suggestions.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    suggestions: (this.suggestions || []).map(m => m.toObject())
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
                    suggestions: (this.suggestions || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        Suggestions.id = 'ondewo.nlu.Suggestions';
        Message.Suggestions = Suggestions;
        /**
         * Message implementation for ondewo.nlu.LinkOutSuggestion
         */
        class LinkOutSuggestion {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of LinkOutSuggestion to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.destinationName = _value.destinationName;
                this.uri = _value.uri;
                LinkOutSuggestion.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new LinkOutSuggestion();
                LinkOutSuggestion.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.destinationName = _instance.destinationName || '';
                _instance.uri = _instance.uri || '';
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
                            _instance.destinationName = _reader.readString();
                            break;
                        case 2:
                            _instance.uri = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                LinkOutSuggestion.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.destinationName) {
                    _writer.writeString(1, _instance.destinationName);
                }
                if (_instance.uri) {
                    _writer.writeString(2, _instance.uri);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                LinkOutSuggestion.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    destinationName: this.destinationName,
                    uri: this.uri
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
                    destinationName: this.destinationName,
                    uri: this.uri
                };
            }
        }
        LinkOutSuggestion.id = 'ondewo.nlu.LinkOutSuggestion';
        Message.LinkOutSuggestion = LinkOutSuggestion;
        /**
         * Message implementation for ondewo.nlu.ListSelect
         */
        class ListSelect {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of ListSelect to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                this.items = (_value.items || []).map(m => new Intent.Message.ListSelect.Item(m));
                ListSelect.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new ListSelect();
                ListSelect.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.title = _instance.title || '';
                _instance.items = _instance.items || [];
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
                            _instance.title = _reader.readString();
                            break;
                        case 2:
                            const messageInitializer2 = new Intent.Message.ListSelect.Item();
                            _reader.readMessage(messageInitializer2, Intent.Message.ListSelect.Item.deserializeBinaryFromReader);
                            (_instance.items = _instance.items || []).push(messageInitializer2);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                ListSelect.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.title) {
                    _writer.writeString(1, _instance.title);
                }
                if (_instance.items && _instance.items.length) {
                    _writer.writeRepeatedMessage(2, _instance.items, Intent.Message.ListSelect.Item.serializeBinaryToWriter);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                ListSelect.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    title: this.title,
                    items: (this.items || []).map(m => m.toObject())
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
                    title: this.title,
                    items: (this.items || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        ListSelect.id = 'ondewo.nlu.ListSelect';
        Message.ListSelect = ListSelect;
        (function (ListSelect) {
            /**
             * Message implementation for ondewo.nlu.Item
             */
            class Item {
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Item to deeply clone from
                 */
                constructor(_value) {
                    _value = _value || {};
                    this.info = _value.info
                        ? new Intent.Message.SelectItemInfo(_value.info)
                        : undefined;
                    this.title = _value.title;
                    this.description = _value.description;
                    this.image = _value.image
                        ? new Intent.Message.Image(_value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes) {
                    const instance = new Item();
                    Item.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance) {
                    _instance.info = _instance.info || undefined;
                    _instance.title = _instance.title || '';
                    _instance.description = _instance.description || '';
                    _instance.image = _instance.image || undefined;
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
                                _instance.info = new Intent.Message.SelectItemInfo();
                                _reader.readMessage(_instance.info, Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
                                break;
                            case 2:
                                _instance.title = _reader.readString();
                                break;
                            case 3:
                                _instance.description = _reader.readString();
                                break;
                            case 4:
                                _instance.image = new Intent.Message.Image();
                                _reader.readMessage(_instance.image, Intent.Message.Image.deserializeBinaryFromReader);
                                break;
                            default:
                                _reader.skipField();
                        }
                    }
                    Item.refineValues(_instance);
                }
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance, _writer) {
                    if (_instance.info) {
                        _writer.writeMessage(1, _instance.info, Intent.Message.SelectItemInfo.serializeBinaryToWriter);
                    }
                    if (_instance.title) {
                        _writer.writeString(2, _instance.title);
                    }
                    if (_instance.description) {
                        _writer.writeString(3, _instance.description);
                    }
                    if (_instance.image) {
                        _writer.writeMessage(4, _instance.image, Intent.Message.Image.serializeBinaryToWriter);
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
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary() {
                    const writer = new BinaryWriter();
                    Item.serializeBinaryToWriter(this, writer);
                    return writer.getResultBuffer();
                }
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
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
                        info: this.info ? this.info.toProtobufJSON(options) : null,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toProtobufJSON(options) : null
                    };
                }
            }
            Item.id = 'ondewo.nlu.Item';
            ListSelect.Item = Item;
        })(ListSelect = Message.ListSelect || (Message.ListSelect = {}));
        /**
         * Message implementation for ondewo.nlu.CarouselSelect
         */
        class CarouselSelect {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of CarouselSelect to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.items = (_value.items || []).map(m => new Intent.Message.CarouselSelect.Item(m));
                CarouselSelect.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new CarouselSelect();
                CarouselSelect.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.items = _instance.items || [];
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
                            const messageInitializer1 = new Intent.Message.CarouselSelect.Item();
                            _reader.readMessage(messageInitializer1, Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader);
                            (_instance.items = _instance.items || []).push(messageInitializer1);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                CarouselSelect.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.items && _instance.items.length) {
                    _writer.writeRepeatedMessage(1, _instance.items, Intent.Message.CarouselSelect.Item.serializeBinaryToWriter);
                }
            }
            get items() {
                return this._items;
            }
            set items(value) {
                this._items = value;
            }
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                CarouselSelect.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    items: (this.items || []).map(m => m.toObject())
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
                    items: (this.items || []).map(m => m.toProtobufJSON(options))
                };
            }
        }
        CarouselSelect.id = 'ondewo.nlu.CarouselSelect';
        Message.CarouselSelect = CarouselSelect;
        (function (CarouselSelect) {
            /**
             * Message implementation for ondewo.nlu.Item
             */
            class Item {
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Item to deeply clone from
                 */
                constructor(_value) {
                    _value = _value || {};
                    this.info = _value.info
                        ? new Intent.Message.SelectItemInfo(_value.info)
                        : undefined;
                    this.title = _value.title;
                    this.description = _value.description;
                    this.image = _value.image
                        ? new Intent.Message.Image(_value.image)
                        : undefined;
                    Item.refineValues(this);
                }
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes) {
                    const instance = new Item();
                    Item.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                    return instance;
                }
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance) {
                    _instance.info = _instance.info || undefined;
                    _instance.title = _instance.title || '';
                    _instance.description = _instance.description || '';
                    _instance.image = _instance.image || undefined;
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
                                _instance.info = new Intent.Message.SelectItemInfo();
                                _reader.readMessage(_instance.info, Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
                                break;
                            case 2:
                                _instance.title = _reader.readString();
                                break;
                            case 3:
                                _instance.description = _reader.readString();
                                break;
                            case 4:
                                _instance.image = new Intent.Message.Image();
                                _reader.readMessage(_instance.image, Intent.Message.Image.deserializeBinaryFromReader);
                                break;
                            default:
                                _reader.skipField();
                        }
                    }
                    Item.refineValues(_instance);
                }
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance, _writer) {
                    if (_instance.info) {
                        _writer.writeMessage(1, _instance.info, Intent.Message.SelectItemInfo.serializeBinaryToWriter);
                    }
                    if (_instance.title) {
                        _writer.writeString(2, _instance.title);
                    }
                    if (_instance.description) {
                        _writer.writeString(3, _instance.description);
                    }
                    if (_instance.image) {
                        _writer.writeMessage(4, _instance.image, Intent.Message.Image.serializeBinaryToWriter);
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
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary() {
                    const writer = new BinaryWriter();
                    Item.serializeBinaryToWriter(this, writer);
                    return writer.getResultBuffer();
                }
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject() {
                    return {
                        info: this.info ? this.info.toObject() : undefined,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toObject() : undefined
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
                        info: this.info ? this.info.toProtobufJSON(options) : null,
                        title: this.title,
                        description: this.description,
                        image: this.image ? this.image.toProtobufJSON(options) : null
                    };
                }
            }
            Item.id = 'ondewo.nlu.Item';
            CarouselSelect.Item = Item;
        })(CarouselSelect = Message.CarouselSelect || (Message.CarouselSelect = {}));
        /**
         * Message implementation for ondewo.nlu.HTMLText
         */
        class HTMLText {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of HTMLText to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.text = (_value.text || []).slice();
                HTMLText.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new HTMLText();
                HTMLText.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.text = _instance.text || [];
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
                            (_instance.text = _instance.text || []).push(_reader.readString());
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                HTMLText.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.text && _instance.text.length) {
                    _writer.writeRepeatedString(1, _instance.text);
                }
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
                HTMLText.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    text: (this.text || []).slice()
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
                    text: (this.text || []).slice()
                };
            }
        }
        HTMLText.id = 'ondewo.nlu.HTMLText';
        Message.HTMLText = HTMLText;
        /**
         * Message implementation for ondewo.nlu.Video
         */
        class Video {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Video to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.uri = _value.uri;
                this.accessibilityText = _value.accessibilityText;
                Video.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Video();
                Video.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.uri = _instance.uri || '';
                _instance.accessibilityText = _instance.accessibilityText || '';
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
                            _instance.uri = _reader.readString();
                            break;
                        case 2:
                            _instance.accessibilityText = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Video.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.uri) {
                    _writer.writeString(1, _instance.uri);
                }
                if (_instance.accessibilityText) {
                    _writer.writeString(2, _instance.accessibilityText);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Video.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
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
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
        }
        Video.id = 'ondewo.nlu.Video';
        Message.Video = Video;
        /**
         * Message implementation for ondewo.nlu.Audio
         */
        class Audio {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Audio to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.uri = _value.uri;
                this.accessibilityText = _value.accessibilityText;
                Audio.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Audio();
                Audio.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.uri = _instance.uri || '';
                _instance.accessibilityText = _instance.accessibilityText || '';
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
                            _instance.uri = _reader.readString();
                            break;
                        case 2:
                            _instance.accessibilityText = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Audio.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.uri) {
                    _writer.writeString(1, _instance.uri);
                }
                if (_instance.accessibilityText) {
                    _writer.writeString(2, _instance.accessibilityText);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                Audio.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
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
                    uri: this.uri,
                    accessibilityText: this.accessibilityText
                };
            }
        }
        Audio.id = 'ondewo.nlu.Audio';
        Message.Audio = Audio;
        /**
         * Message implementation for ondewo.nlu.SelectItemInfo
         */
        class SelectItemInfo {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SelectItemInfo to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.key = _value.key;
                this.synonyms = (_value.synonyms || []).slice();
                SelectItemInfo.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new SelectItemInfo();
                SelectItemInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.key = _instance.key || '';
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
                            _instance.key = _reader.readString();
                            break;
                        case 2:
                            (_instance.synonyms = _instance.synonyms || []).push(_reader.readString());
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                SelectItemInfo.refineValues(_instance);
            }
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance, _writer) {
                if (_instance.key) {
                    _writer.writeString(1, _instance.key);
                }
                if (_instance.synonyms && _instance.synonyms.length) {
                    _writer.writeRepeatedString(2, _instance.synonyms);
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
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary() {
                const writer = new BinaryWriter();
                SelectItemInfo.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    key: this.key,
                    synonyms: (this.synonyms || []).slice()
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
                    key: this.key,
                    synonyms: (this.synonyms || []).slice()
                };
            }
        }
        SelectItemInfo.id = 'ondewo.nlu.SelectItemInfo';
        Message.SelectItemInfo = SelectItemInfo;
    })(Message = Intent.Message || (Intent.Message = {}));
    /**
     * Message implementation for ondewo.nlu.FollowupIntentInfo
     */
    class FollowupIntentInfo {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FollowupIntentInfo to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.followupIntentName = _value.followupIntentName;
            this.parentFollowupIntentName = _value.parentFollowupIntentName;
            FollowupIntentInfo.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new FollowupIntentInfo();
            FollowupIntentInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.followupIntentName = _instance.followupIntentName || '';
            _instance.parentFollowupIntentName =
                _instance.parentFollowupIntentName || '';
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
                        _instance.followupIntentName = _reader.readString();
                        break;
                    case 2:
                        _instance.parentFollowupIntentName = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            FollowupIntentInfo.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.followupIntentName) {
                _writer.writeString(1, _instance.followupIntentName);
            }
            if (_instance.parentFollowupIntentName) {
                _writer.writeString(2, _instance.parentFollowupIntentName);
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
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            FollowupIntentInfo.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                followupIntentName: this.followupIntentName,
                parentFollowupIntentName: this.parentFollowupIntentName
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
                followupIntentName: this.followupIntentName,
                parentFollowupIntentName: this.parentFollowupIntentName
            };
        }
    }
    FollowupIntentInfo.id = 'ondewo.nlu.FollowupIntentInfo';
    Intent.FollowupIntentInfo = FollowupIntentInfo;
})(Intent || (Intent = {}));
/**
 * Message implementation for ondewo.nlu.ListIntentsRequest
 */
export class ListIntentsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListIntentsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentView = _value.intentView;
        this.pageToken = _value.pageToken;
        this.filterByCategory = _value.filterByCategory;
        this.sortByField = _value.sortByField
            ? new IntentSorting(_value.sortByField)
            : undefined;
        ListIntentsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListIntentsRequest();
        ListIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentView = _instance.intentView || 0;
        _instance.pageToken = _instance.pageToken || '';
        _instance.filterByCategory = _instance.filterByCategory || 0;
        _instance.sortByField = _instance.sortByField || undefined;
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
                    _instance.intentView = _reader.readEnum();
                    break;
                case 5:
                    _instance.pageToken = _reader.readString();
                    break;
                case 6:
                    _instance.filterByCategory = _reader.readEnum();
                    break;
                case 7:
                    _instance.sortByField = new IntentSorting();
                    _reader.readMessage(_instance.sortByField, IntentSorting.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListIntentsRequest.refineValues(_instance);
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
        if (_instance.intentView) {
            _writer.writeEnum(3, _instance.intentView);
        }
        if (_instance.pageToken) {
            _writer.writeString(5, _instance.pageToken);
        }
        if (_instance.filterByCategory) {
            _writer.writeEnum(6, _instance.filterByCategory);
        }
        if (_instance.sortByField) {
            _writer.writeMessage(7, _instance.sortByField, IntentSorting.serializeBinaryToWriter);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListIntentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
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
        var _a, _b;
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentView: IntentView[(_a = this.intentView) !== null && _a !== void 0 ? _a : 0],
            pageToken: this.pageToken,
            filterByCategory: IntentCategory[(_b = this.filterByCategory) !== null && _b !== void 0 ? _b : 0],
            sortByField: this.sortByField
                ? this.sortByField.toProtobufJSON(options)
                : null
        };
    }
}
ListIntentsRequest.id = 'ondewo.nlu.ListIntentsRequest';
/**
 * Message implementation for ondewo.nlu.ListIntentsResponse
 */
export class ListIntentsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListIntentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intents = (_value.intents || []).map(m => new Intent(m));
        this.nextPageToken = _value.nextPageToken;
        ListIntentsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListIntentsResponse();
        ListIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intents = _instance.intents || [];
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
                    const messageInitializer1 = new Intent();
                    _reader.readMessage(messageInitializer1, Intent.deserializeBinaryFromReader);
                    (_instance.intents = _instance.intents || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListIntentsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intents && _instance.intents.length) {
            _writer.writeRepeatedMessage(1, _instance.intents, Intent.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        ListIntentsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject()),
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
            intents: (this.intents || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
ListIntentsResponse.id = 'ondewo.nlu.ListIntentsResponse';
/**
 * Message implementation for ondewo.nlu.GetIntentRequest
 */
export class GetIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.languageCode = _value.languageCode;
        this.intentView = _value.intentView;
        this.pageToken = _value.pageToken;
        GetIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetIntentRequest();
        GetIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentView = _instance.intentView || 0;
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
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.intentView = _reader.readEnum();
                    break;
                case 10:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetIntentRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.intentView) {
            _writer.writeEnum(3, _instance.intentView);
        }
        if (_instance.pageToken) {
            _writer.writeString(10, _instance.pageToken);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode,
            intentView: this.intentView,
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
        var _a;
        return {
            name: this.name,
            languageCode: this.languageCode,
            intentView: IntentView[(_a = this.intentView) !== null && _a !== void 0 ? _a : 0],
            pageToken: this.pageToken
        };
    }
}
GetIntentRequest.id = 'ondewo.nlu.GetIntentRequest';
/**
 * Message implementation for ondewo.nlu.CreateIntentRequest
 */
export class CreateIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.intent = _value.intent ? new Intent(_value.intent) : undefined;
        this.languageCode = _value.languageCode;
        this.intentView = _value.intentView;
        CreateIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new CreateIntentRequest();
        CreateIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.intent = _instance.intent || undefined;
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentView = _instance.intentView || 0;
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
                    _instance.intent = new Intent();
                    _reader.readMessage(_instance.intent, Intent.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.languageCode = _reader.readString();
                    break;
                case 4:
                    _instance.intentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        CreateIntentRequest.refineValues(_instance);
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
        if (_instance.intent) {
            _writer.writeMessage(2, _instance.intent, Intent.serializeBinaryToWriter);
        }
        if (_instance.languageCode) {
            _writer.writeString(3, _instance.languageCode);
        }
        if (_instance.intentView) {
            _writer.writeEnum(4, _instance.intentView);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        CreateIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            intentView: this.intentView
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
        var _a;
        return {
            parent: this.parent,
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            languageCode: this.languageCode,
            intentView: IntentView[(_a = this.intentView) !== null && _a !== void 0 ? _a : 0]
        };
    }
}
CreateIntentRequest.id = 'ondewo.nlu.CreateIntentRequest';
/**
 * Message implementation for ondewo.nlu.UpdateIntentRequest
 */
export class UpdateIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intent = _value.intent ? new Intent(_value.intent) : undefined;
        this.languageCode = _value.languageCode;
        this.updateMask = _value.updateMask
            ? new googleProtobuf004.FieldMask(_value.updateMask)
            : undefined;
        this.intentView = _value.intentView;
        UpdateIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new UpdateIntentRequest();
        UpdateIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intent = _instance.intent || undefined;
        _instance.languageCode = _instance.languageCode || '';
        _instance.updateMask = _instance.updateMask || undefined;
        _instance.intentView = _instance.intentView || 0;
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
                    _instance.intent = new Intent();
                    _reader.readMessage(_instance.intent, Intent.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.updateMask = new googleProtobuf004.FieldMask();
                    _reader.readMessage(_instance.updateMask, googleProtobuf004.FieldMask.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.intentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        UpdateIntentRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intent) {
            _writer.writeMessage(1, _instance.intent, Intent.serializeBinaryToWriter);
        }
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(3, _instance.updateMask, googleProtobuf004.FieldMask.serializeBinaryToWriter);
        }
        if (_instance.intentView) {
            _writer.writeEnum(4, _instance.intentView);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        UpdateIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intent: this.intent ? this.intent.toObject() : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
            intentView: this.intentView
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
        var _a;
        return {
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            languageCode: this.languageCode,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null,
            intentView: IntentView[(_a = this.intentView) !== null && _a !== void 0 ? _a : 0]
        };
    }
}
UpdateIntentRequest.id = 'ondewo.nlu.UpdateIntentRequest';
/**
 * Message implementation for ondewo.nlu.DeleteIntentRequest
 */
export class DeleteIntentRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        DeleteIntentRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new DeleteIntentRequest();
        DeleteIntentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
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
                default:
                    _reader.skipField();
            }
        }
        DeleteIntentRequest.refineValues(_instance);
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
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        DeleteIntentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            name: this.name
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
            name: this.name
        };
    }
}
DeleteIntentRequest.id = 'ondewo.nlu.DeleteIntentRequest';
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsRequest
 */
export class BatchUpdateIntentsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateIntentsRequest to deeply clone from
     */
    constructor(_value) {
        this._intentBatch = BatchUpdateIntentsRequest.IntentBatchCase.none;
        _value = _value || {};
        this.parent = _value.parent;
        this.intentBatchUri = _value.intentBatchUri;
        this.intentBatchInline = _value.intentBatchInline
            ? new IntentBatch(_value.intentBatchInline)
            : undefined;
        this.languageCode = _value.languageCode;
        this.updateMask = _value.updateMask
            ? new googleProtobuf004.FieldMask(_value.updateMask)
            : undefined;
        this.intentView = _value.intentView;
        BatchUpdateIntentsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchUpdateIntentsRequest();
        BatchUpdateIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.updateMask = _instance.updateMask || undefined;
        _instance.intentView = _instance.intentView || 0;
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
                    _instance.intentBatchUri = _reader.readString();
                    break;
                case 3:
                    _instance.intentBatchInline = new IntentBatch();
                    _reader.readMessage(_instance.intentBatchInline, IntentBatch.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.languageCode = _reader.readString();
                    break;
                case 5:
                    _instance.updateMask = new googleProtobuf004.FieldMask();
                    _reader.readMessage(_instance.updateMask, googleProtobuf004.FieldMask.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.intentView = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchUpdateIntentsRequest.refineValues(_instance);
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
        if (_instance.intentBatchUri || _instance.intentBatchUri === '') {
            _writer.writeString(2, _instance.intentBatchUri);
        }
        if (_instance.intentBatchInline) {
            _writer.writeMessage(3, _instance.intentBatchInline, IntentBatch.serializeBinaryToWriter);
        }
        if (_instance.languageCode) {
            _writer.writeString(4, _instance.languageCode);
        }
        if (_instance.updateMask) {
            _writer.writeMessage(5, _instance.updateMask, googleProtobuf004.FieldMask.serializeBinaryToWriter);
        }
        if (_instance.intentView) {
            _writer.writeEnum(6, _instance.intentView);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchUpdateIntentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
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
        var _a, _b;
        return {
            parent: this.parent,
            intentBatchUri: (_a = this.intentBatchUri) !== null && _a !== void 0 ? _a : null,
            intentBatchInline: this.intentBatchInline
                ? this.intentBatchInline.toProtobufJSON(options)
                : null,
            languageCode: this.languageCode,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null,
            intentView: IntentView[(_b = this.intentView) !== null && _b !== void 0 ? _b : 0]
        };
    }
}
BatchUpdateIntentsRequest.id = 'ondewo.nlu.BatchUpdateIntentsRequest';
(function (BatchUpdateIntentsRequest) {
    let IntentBatchCase;
    (function (IntentBatchCase) {
        IntentBatchCase[IntentBatchCase["none"] = 0] = "none";
        IntentBatchCase[IntentBatchCase["intentBatchUri"] = 1] = "intentBatchUri";
        IntentBatchCase[IntentBatchCase["intentBatchInline"] = 2] = "intentBatchInline";
    })(IntentBatchCase = BatchUpdateIntentsRequest.IntentBatchCase || (BatchUpdateIntentsRequest.IntentBatchCase = {}));
})(BatchUpdateIntentsRequest || (BatchUpdateIntentsRequest = {}));
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsResponse
 */
export class BatchUpdateIntentsResponse {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateIntentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intents = (_value.intents || []).map(m => new Intent(m));
        BatchUpdateIntentsResponse.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchUpdateIntentsResponse();
        BatchUpdateIntentsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intents = _instance.intents || [];
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
                    const messageInitializer1 = new Intent();
                    _reader.readMessage(messageInitializer1, Intent.deserializeBinaryFromReader);
                    (_instance.intents = _instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchUpdateIntentsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intents && _instance.intents.length) {
            _writer.writeRepeatedMessage(1, _instance.intents, Intent.serializeBinaryToWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchUpdateIntentsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
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
            intents: (this.intents || []).map(m => m.toProtobufJSON(options))
        };
    }
}
BatchUpdateIntentsResponse.id = 'ondewo.nlu.BatchUpdateIntentsResponse';
/**
 * Message implementation for ondewo.nlu.BatchDeleteIntentsRequest
 */
export class BatchDeleteIntentsRequest {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteIntentsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.intents = (_value.intents || []).map(m => new Intent(m));
        BatchDeleteIntentsRequest.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteIntentsRequest();
        BatchDeleteIntentsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.intents = _instance.intents || [];
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
                    const messageInitializer2 = new Intent();
                    _reader.readMessage(messageInitializer2, Intent.deserializeBinaryFromReader);
                    (_instance.intents = _instance.intents || []).push(messageInitializer2);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteIntentsRequest.refineValues(_instance);
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
        if (_instance.intents && _instance.intents.length) {
            _writer.writeRepeatedMessage(2, _instance.intents, Intent.serializeBinaryToWriter);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteIntentsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            intents: (this.intents || []).map(m => m.toObject())
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
            intents: (this.intents || []).map(m => m.toProtobufJSON(options))
        };
    }
}
BatchDeleteIntentsRequest.id = 'ondewo.nlu.BatchDeleteIntentsRequest';
/**
 * Message implementation for ondewo.nlu.IntentBatch
 */
export class IntentBatch {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentBatch to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intents = (_value.intents || []).map(m => new Intent(m));
        IntentBatch.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new IntentBatch();
        IntentBatch.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intents = _instance.intents || [];
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
                    const messageInitializer1 = new Intent();
                    _reader.readMessage(messageInitializer1, Intent.deserializeBinaryFromReader);
                    (_instance.intents = _instance.intents || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        IntentBatch.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intents && _instance.intents.length) {
            _writer.writeRepeatedMessage(1, _instance.intents, Intent.serializeBinaryToWriter);
        }
    }
    get intents() {
        return this._intents;
    }
    set intents(value) {
        this._intents = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        IntentBatch.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intents: (this.intents || []).map(m => m.toObject())
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
            intents: (this.intents || []).map(m => m.toProtobufJSON(options))
        };
    }
}
IntentBatch.id = 'ondewo.nlu.IntentBatch';
/**
 * Message implementation for ondewo.nlu.IntentSorting
 */
export class IntentSorting {
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentSorting to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.sortingField = _value.sortingField;
        this.sortingMode = _value.sortingMode;
        IntentSorting.refineValues(this);
    }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new IntentSorting();
        IntentSorting.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.sortingField = _instance.sortingField || 0;
        _instance.sortingMode = _instance.sortingMode || 0;
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
                    _instance.sortingField = _reader.readEnum();
                    break;
                case 2:
                    _instance.sortingMode = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        IntentSorting.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.sortingField) {
            _writer.writeEnum(1, _instance.sortingField);
        }
        if (_instance.sortingMode) {
            _writer.writeEnum(2, _instance.sortingMode);
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
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        IntentSorting.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
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
        var _a, _b;
        return {
            sortingField: IntentSorting.IntentSortingField[(_a = this.sortingField) !== null && _a !== void 0 ? _a : 0],
            sortingMode: ondewoNlu008.SortingMode[(_b = this.sortingMode) !== null && _b !== void 0 ? _b : 0]
        };
    }
}
IntentSorting.id = 'ondewo.nlu.IntentSorting';
(function (IntentSorting) {
    let IntentSortingField;
    (function (IntentSortingField) {
        IntentSortingField[IntentSortingField["NO_INTENT_SORTING"] = 0] = "NO_INTENT_SORTING";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_NAME"] = 1] = "SORT_INTENT_BY_NAME";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_CREATION_DATE"] = 2] = "SORT_INTENT_BY_CREATION_DATE";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_LAST_UPDATED"] = 3] = "SORT_INTENT_BY_LAST_UPDATED";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_USERSAYS_COUNT"] = 4] = "SORT_INTENT_BY_USERSAYS_COUNT";
    })(IntentSortingField = IntentSorting.IntentSortingField || (IntentSorting.IntentSortingField = {}));
})(IntentSorting || (IntentSorting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50LnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvaW50ZW50LnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFLekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sS0FBSyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsTUFBTSxDQUFOLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQixpRkFBMkIsQ0FBQTtJQUMzQixtRUFBb0IsQ0FBQTtJQUNwQix5RUFBdUIsQ0FBQTtJQUN2Qix5RUFBdUIsQ0FBQTtBQUN6QixDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFDRCxNQUFNLENBQU4sSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLGlFQUFlLENBQUE7SUFDZix5RUFBbUIsQ0FBQTtJQUNuQixtRkFBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFDRDs7R0FFRztBQUNILE1BQU0sT0FBTyxNQUFNO0lBZ1RqQjs7O09BR0c7SUFDSCxZQUFZLE1BQTBDO1FBQ3BELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztR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ZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO0lBQ1osYUFBYTtJQUNiLE9BQStCOztRQUUvQixPQUFPO1lBQ0wsWUFBWSxFQUFFLGFBQWEsQ0FBQyxrQkFBa0IsT0FBQyxJQUFJLENBQUMsWUFBWSxtQ0FBSSxDQUFDLENBQUM7WUFDdEUsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLE9BQUMsSUFBSSxDQUFDLFdBQVcsbUNBQUksQ0FBQyxDQUFDO1NBQzdELENBQUM7SUFDSixDQUFDOztBQXRJTSxnQkFBRSxHQUFHLDBCQUEwQixDQUFDO0FBd0l6QyxXQUFjLGFBQWE7SUFnQnpCLElBQVksa0JBTVg7SUFORCxXQUFZLGtCQUFrQjtRQUM1QixxRkFBcUIsQ0FBQTtRQUNyQix5RkFBdUIsQ0FBQTtRQUN2QiwyR0FBZ0MsQ0FBQTtRQUNoQyx5R0FBK0IsQ0FBQTtRQUMvQiw2R0FBaUMsQ0FBQTtJQUNuQyxDQUFDLEVBTlcsa0JBQWtCLEdBQWxCLGdDQUFrQixLQUFsQixnQ0FBa0IsUUFNN0I7QUFDSCxDQUFDLEVBdkJhLGFBQWEsS0FBYixhQUFhLFFBdUIxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHtcbiAgR3JwY01lc3NhZ2UsXG4gIFJlY3Vyc2l2ZVBhcnRpYWwsXG4gIFRvUHJvdG9idWZKU09OT3B0aW9uc1xufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2h0dHAucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDUgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUnBjMDA2IGZyb20gJy4uLy4uL2dvb2dsZS9ycGMvc3RhdHVzLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNyBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbnRleHQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA4IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUxvbmdydW5uaW5nMDA5IGZyb20gJy4uLy4uL2dvb2dsZS9sb25ncnVubmluZy9vcGVyYXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDEwIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmV4cG9ydCBlbnVtIEludGVudFZpZXcge1xuICBJTlRFTlRfVklFV19VTlNQRUNJRklFRCA9IDAsXG4gIElOVEVOVF9WSUVXX0ZVTEwgPSAxLFxuICBJTlRFTlRfVklFV19QQVJUSUFMID0gMixcbiAgSU5URU5UX1ZJRVdfU0hBTExPVyA9IDNcbn1cbmV4cG9ydCBlbnVtIEludGVudENhdGVnb3J5IHtcbiAgQUxMX0lOVEVOVFMgPSAwLFxuICBERUZBVUxUX0lOVEVOVFMgPSAxLFxuICBVU0VSX0RFRklORURfSU5URU5UUyA9IDJcbn1cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnRlbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuSW50ZW50JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW50ZW50KCk7XG4gICAgSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSW50ZW50KSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZGlzcGxheU5hbWUgPSBfaW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLndlYmhvb2tTdGF0ZSA9IF9pbnN0YW5jZS53ZWJob29rU3RhdGUgfHwgMDtcbiAgICBfaW5zdGFuY2UucHJpb3JpdHkgPSBfaW5zdGFuY2UucHJpb3JpdHkgfHwgMDtcbiAgICBfaW5zdGFuY2UuaXNGYWxsYmFjayA9IF9pbnN0YW5jZS5pc0ZhbGxiYWNrIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5tbERpc2FibGVkID0gX2luc3RhbmNlLm1sRGlzYWJsZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzID0gX2luc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5ldmVudHMgPSBfaW5zdGFuY2UuZXZlbnRzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZXMgPSBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5hY3Rpb24gPSBfaW5zdGFuY2UuYWN0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyA9IF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UucmVzZXRDb250ZXh0cyA9IF9pbnN0YW5jZS5yZXNldENvbnRleHRzIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJzID0gX2luc3RhbmNlLnBhcmFtZXRlcnMgfHwgW107XG4gICAgX2luc3RhbmNlLm1lc3NhZ2VzID0gX2luc3RhbmNlLm1lc3NhZ2VzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMgPVxuICAgICAgX2luc3RhbmNlLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyB8fCBbXTtcbiAgICBfaW5zdGFuY2Uucm9vdEZvbGxvd3VwSW50ZW50TmFtZSA9IF9pbnN0YW5jZS5yb290Rm9sbG93dXBJbnRlbnROYW1lIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUgPVxuICAgICAgX2luc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuZm9sbG93dXBJbnRlbnRJbmZvID0gX2luc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mbyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5kb21haW5OYW1lID0gX2luc3RhbmNlLmRvbWFpbk5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmlzU3RhcnRPZkRldmlhdGlvbiA9IF9pbnN0YW5jZS5pc1N0YXJ0T2ZEZXZpYXRpb24gfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24gPSBfaW5zdGFuY2UuaXNFbmRPZkRldmlhdGlvbiB8fCBmYWxzZTtcbiAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDb3VudCA9IF9pbnN0YW5jZS50cmFpbmluZ1BocmFzZUNvdW50IHx8IDA7XG4gICAgX2luc3RhbmNlLnN0YXR1cyA9IF9pbnN0YW5jZS5zdGF0dXMgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihfaW5zdGFuY2U6IEludGVudCwgX3JlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmRpc3BsYXlOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2Uud2ViaG9va1N0YXRlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLnByaW9yaXR5ID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0ZhbGxiYWNrID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgIF9pbnN0YW5jZS5tbERpc2FibGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgKF9pbnN0YW5jZS5pbnB1dENvbnRleHROYW1lcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuaW5wdXRDb250ZXh0TmFtZXMgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgKF9pbnN0YW5jZS5ldmVudHMgPSBfaW5zdGFuY2UuZXZlbnRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOSA9IG5ldyBJbnRlbnQuVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyOSxcbiAgICAgICAgICAgIEludGVudC5UcmFpbmluZ1BocmFzZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzID0gX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS5hY3Rpb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxMSA9IG5ldyBvbmRld29ObHUwMDcuQ29udGV4dCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxMSxcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNy5Db250ZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyA9IF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjExXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBfaW5zdGFuY2UucmVzZXRDb250ZXh0cyA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxMyA9IG5ldyBJbnRlbnQuUGFyYW1ldGVyKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEzLFxuICAgICAgICAgICAgSW50ZW50LlBhcmFtZXRlci5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChfaW5zdGFuY2UucGFyYW1ldGVycyA9IF9pbnN0YW5jZS5wYXJhbWV0ZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjE0ID0gbmV3IEludGVudC5NZXNzYWdlKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjE0LFxuICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLm1lc3NhZ2VzID0gX2luc3RhbmNlLm1lc3NhZ2VzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMTRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIChfaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAuLi4oX3JlYWRlci5yZWFkUGFja2VkRW51bSgpIHx8IFtdKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgX2luc3RhbmNlLnJvb3RGb2xsb3d1cEludGVudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMTggPSBuZXcgSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mbygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxOCxcbiAgICAgICAgICAgIEludGVudC5Gb2xsb3d1cEludGVudEluZm8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mbyA9XG4gICAgICAgICAgICBfaW5zdGFuY2UuZm9sbG93dXBJbnRlbnRJbmZvIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjE4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgIF9pbnN0YW5jZS5kb21haW5OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgX2luc3RhbmNlLmlzU3RhcnRPZkRldmlhdGlvbiA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICBfaW5zdGFuY2UuaXNFbmRPZkRldmlhdGlvbiA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDb3VudCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgX2luc3RhbmNlLnN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEludGVudC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IEludGVudCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLndlYmhvb2tTdGF0ZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLndlYmhvb2tTdGF0ZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJpb3JpdHkpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigzLCBfaW5zdGFuY2UucHJpb3JpdHkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzRmFsbGJhY2spIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDQsIF9pbnN0YW5jZS5pc0ZhbGxiYWNrKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tbERpc2FibGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxOSwgX2luc3RhbmNlLm1sRGlzYWJsZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlucHV0Q29udGV4dE5hbWVzICYmIF9pbnN0YW5jZS5pbnB1dENvbnRleHROYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZyg3LCBfaW5zdGFuY2UuaW5wdXRDb250ZXh0TmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmV2ZW50cyAmJiBfaW5zdGFuY2UuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDgsIF9pbnN0YW5jZS5ldmVudHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlcyAmJiBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgX2luc3RhbmNlLnRyYWluaW5nUGhyYXNlcyBhcyBhbnksXG4gICAgICAgIEludGVudC5UcmFpbmluZ1BocmFzZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5hY3Rpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTAsIF9pbnN0YW5jZS5hY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm91dHB1dENvbnRleHRzICYmIF9pbnN0YW5jZS5vdXRwdXRDb250ZXh0cy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDExLFxuICAgICAgICBfaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDcuQ29udGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yZXNldENvbnRleHRzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCgxMiwgX2luc3RhbmNlLnJlc2V0Q29udGV4dHMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmFtZXRlcnMgJiYgX2luc3RhbmNlLnBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxMyxcbiAgICAgICAgX2luc3RhbmNlLnBhcmFtZXRlcnMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuUGFyYW1ldGVyLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1lc3NhZ2VzICYmIF9pbnN0YW5jZS5tZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDE0LFxuICAgICAgICBfaW5zdGFuY2UubWVzc2FnZXMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuTWVzc2FnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgX2luc3RhbmNlLmRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcyAmJlxuICAgICAgX2luc3RhbmNlLmRlZmF1bHRSZXNwb25zZVBsYXRmb3Jtcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIF93cml0ZXIud3JpdGVQYWNrZWRFbnVtKDE1LCBfaW5zdGFuY2UuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5yb290Rm9sbG93dXBJbnRlbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDE2LCBfaW5zdGFuY2Uucm9vdEZvbGxvd3VwSW50ZW50TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDE3LCBfaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5mb2xsb3d1cEludGVudEluZm8gJiYgX2luc3RhbmNlLmZvbGxvd3VwSW50ZW50SW5mby5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDE4LFxuICAgICAgICBfaW5zdGFuY2UuZm9sbG93dXBJbnRlbnRJbmZvIGFzIGFueSxcbiAgICAgICAgSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mby5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMwLCBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZG9tYWluTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzMSwgX2luc3RhbmNlLmRvbWFpbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzU3RhcnRPZkRldmlhdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woMzIsIF9pbnN0YW5jZS5pc1N0YXJ0T2ZEZXZpYXRpb24pO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzRW5kT2ZEZXZpYXRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVCb29sKDMzLCBfaW5zdGFuY2UuaXNFbmRPZkRldmlhdGlvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDb3VudCkge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDM0LCBfaW5zdGFuY2UudHJhaW5pbmdQaHJhc2VDb3VudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3RhdHVzKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgzNSwgX2luc3RhbmNlLnN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3dlYmhvb2tTdGF0ZT86IEludGVudC5XZWJob29rU3RhdGU7XG4gIHByaXZhdGUgX3ByaW9yaXR5PzogbnVtYmVyO1xuICBwcml2YXRlIF9pc0ZhbGxiYWNrPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbWxEaXNhYmxlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2lucHV0Q29udGV4dE5hbWVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX2V2ZW50cz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF90cmFpbmluZ1BocmFzZXM/OiBJbnRlbnQuVHJhaW5pbmdQaHJhc2VbXTtcbiAgcHJpdmF0ZSBfYWN0aW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRwdXRDb250ZXh0cz86IG9uZGV3b05sdTAwNy5Db250ZXh0W107XG4gIHByaXZhdGUgX3Jlc2V0Q29udGV4dHM/OiBib29sZWFuO1xuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogSW50ZW50LlBhcmFtZXRlcltdO1xuICBwcml2YXRlIF9tZXNzYWdlcz86IEludGVudC5NZXNzYWdlW107XG4gIHByaXZhdGUgX2RlZmF1bHRSZXNwb25zZVBsYXRmb3Jtcz86IEludGVudC5NZXNzYWdlLlBsYXRmb3JtW107XG4gIHByaXZhdGUgX3Jvb3RGb2xsb3d1cEludGVudE5hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudEZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9sbG93dXBJbnRlbnRJbmZvPzogSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mb1tdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9pc1N0YXJ0T2ZEZXZpYXRpb24/OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0VuZE9mRGV2aWF0aW9uPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdHJhaW5pbmdQaHJhc2VDb3VudD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3RhdHVzPzogSW50ZW50LkludGVudFN0YXR1cztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEludGVudCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbnRlbnQuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBfdmFsdWUuZGlzcGxheU5hbWU7XG4gICAgdGhpcy53ZWJob29rU3RhdGUgPSBfdmFsdWUud2ViaG9va1N0YXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBfdmFsdWUucHJpb3JpdHk7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gX3ZhbHVlLmlzRmFsbGJhY2s7XG4gICAgdGhpcy5tbERpc2FibGVkID0gX3ZhbHVlLm1sRGlzYWJsZWQ7XG4gICAgdGhpcy5pbnB1dENvbnRleHROYW1lcyA9IChfdmFsdWUuaW5wdXRDb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5ldmVudHMgPSAoX3ZhbHVlLmV2ZW50cyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLnRyYWluaW5nUGhyYXNlcyA9IChfdmFsdWUudHJhaW5pbmdQaHJhc2VzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnQuVHJhaW5pbmdQaHJhc2UobSlcbiAgICApO1xuICAgIHRoaXMuYWN0aW9uID0gX3ZhbHVlLmFjdGlvbjtcbiAgICB0aGlzLm91dHB1dENvbnRleHRzID0gKF92YWx1ZS5vdXRwdXRDb250ZXh0cyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgb25kZXdvTmx1MDA3LkNvbnRleHQobSlcbiAgICApO1xuICAgIHRoaXMucmVzZXRDb250ZXh0cyA9IF92YWx1ZS5yZXNldENvbnRleHRzO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IChfdmFsdWUucGFyYW1ldGVycyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgSW50ZW50LlBhcmFtZXRlcihtKVxuICAgICk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IChfdmFsdWUubWVzc2FnZXMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQuTWVzc2FnZShtKSk7XG4gICAgdGhpcy5kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMgPSAoXG4gICAgICBfdmFsdWUuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zIHx8IFtdXG4gICAgKS5zbGljZSgpO1xuICAgIHRoaXMucm9vdEZvbGxvd3VwSW50ZW50TmFtZSA9IF92YWx1ZS5yb290Rm9sbG93dXBJbnRlbnROYW1lO1xuICAgIHRoaXMucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gX3ZhbHVlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZTtcbiAgICB0aGlzLmZvbGxvd3VwSW50ZW50SW5mbyA9IChfdmFsdWUuZm9sbG93dXBJbnRlbnRJbmZvIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBJbnRlbnQuRm9sbG93dXBJbnRlbnRJbmZvKG0pXG4gICAgKTtcbiAgICB0aGlzLm5leHRQYWdlVG9rZW4gPSBfdmFsdWUubmV4dFBhZ2VUb2tlbjtcbiAgICB0aGlzLmRvbWFpbk5hbWUgPSBfdmFsdWUuZG9tYWluTmFtZTtcbiAgICB0aGlzLmlzU3RhcnRPZkRldmlhdGlvbiA9IF92YWx1ZS5pc1N0YXJ0T2ZEZXZpYXRpb247XG4gICAgdGhpcy5pc0VuZE9mRGV2aWF0aW9uID0gX3ZhbHVlLmlzRW5kT2ZEZXZpYXRpb247XG4gICAgdGhpcy50cmFpbmluZ1BocmFzZUNvdW50ID0gX3ZhbHVlLnRyYWluaW5nUGhyYXNlQ291bnQ7XG4gICAgdGhpcy5zdGF0dXMgPSBfdmFsdWUuc3RhdHVzO1xuICAgIEludGVudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBkaXNwbGF5TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TmFtZTtcbiAgfVxuICBzZXQgZGlzcGxheU5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHdlYmhvb2tTdGF0ZSgpOiBJbnRlbnQuV2ViaG9va1N0YXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViaG9va1N0YXRlO1xuICB9XG4gIHNldCB3ZWJob29rU3RhdGUodmFsdWU6IEludGVudC5XZWJob29rU3RhdGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93ZWJob29rU3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJpb3JpdHkoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cbiAgc2V0IHByaW9yaXR5KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0ZhbGxiYWNrKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc0ZhbGxiYWNrO1xuICB9XG4gIHNldCBpc0ZhbGxiYWNrKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNGYWxsYmFjayA9IHZhbHVlO1xuICB9XG4gIGdldCBtbERpc2FibGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tbERpc2FibGVkO1xuICB9XG4gIHNldCBtbERpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWxEaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnB1dENvbnRleHROYW1lcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0Q29udGV4dE5hbWVzO1xuICB9XG4gIHNldCBpbnB1dENvbnRleHROYW1lcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnB1dENvbnRleHROYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBldmVudHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gIH1cbiAgc2V0IGV2ZW50cyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHJhaW5pbmdQaHJhc2VzKCk6IEludGVudC5UcmFpbmluZ1BocmFzZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaW5pbmdQaHJhc2VzO1xuICB9XG4gIHNldCB0cmFpbmluZ1BocmFzZXModmFsdWU6IEludGVudC5UcmFpbmluZ1BocmFzZVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHJhaW5pbmdQaHJhc2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFjdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gIH1cbiAgc2V0IGFjdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG91dHB1dENvbnRleHRzKCk6IG9uZGV3b05sdTAwNy5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRDb250ZXh0cztcbiAgfVxuICBzZXQgb3V0cHV0Q29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwNy5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vdXRwdXRDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCByZXNldENvbnRleHRzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXNldENvbnRleHRzO1xuICB9XG4gIHNldCByZXNldENvbnRleHRzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzZXRDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJhbWV0ZXJzKCk6IEludGVudC5QYXJhbWV0ZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnM7XG4gIH1cbiAgc2V0IHBhcmFtZXRlcnModmFsdWU6IEludGVudC5QYXJhbWV0ZXJbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWVzc2FnZXMoKTogSW50ZW50Lk1lc3NhZ2VbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzO1xuICB9XG4gIHNldCBtZXNzYWdlcyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlZmF1bHRSZXNwb25zZVBsYXRmb3JtcygpOiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zO1xuICB9XG4gIHNldCBkZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXModmFsdWU6IEludGVudC5NZXNzYWdlLlBsYXRmb3JtW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcm9vdEZvbGxvd3VwSW50ZW50TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb290Rm9sbG93dXBJbnRlbnROYW1lO1xuICB9XG4gIHNldCByb290Rm9sbG93dXBJbnRlbnROYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yb290Rm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGb2xsb3d1cEludGVudE5hbWU7XG4gIH1cbiAgc2V0IHBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvbGxvd3VwSW50ZW50SW5mbygpOiBJbnRlbnQuRm9sbG93dXBJbnRlbnRJbmZvW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb2xsb3d1cEludGVudEluZm87XG4gIH1cbiAgc2V0IGZvbGxvd3VwSW50ZW50SW5mbyh2YWx1ZTogSW50ZW50LkZvbGxvd3VwSW50ZW50SW5mb1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9sbG93dXBJbnRlbnRJbmZvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBkb21haW5OYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWU7XG4gIH1cbiAgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNTdGFydE9mRGV2aWF0aW9uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc1N0YXJ0T2ZEZXZpYXRpb247XG4gIH1cbiAgc2V0IGlzU3RhcnRPZkRldmlhdGlvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lzU3RhcnRPZkRldmlhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0VuZE9mRGV2aWF0aW9uKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pc0VuZE9mRGV2aWF0aW9uO1xuICB9XG4gIHNldCBpc0VuZE9mRGV2aWF0aW9uKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNFbmRPZkRldmlhdGlvbiA9IHZhbHVlO1xuICB9XG4gIGdldCB0cmFpbmluZ1BocmFzZUNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWluaW5nUGhyYXNlQ291bnQ7XG4gIH1cbiAgc2V0IHRyYWluaW5nUGhyYXNlQ291bnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3RyYWluaW5nUGhyYXNlQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhdHVzKCk6IEludGVudC5JbnRlbnRTdGF0dXMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbiAgc2V0IHN0YXR1cyh2YWx1ZTogSW50ZW50LkludGVudFN0YXR1cyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBJbnRlbnQuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgIHdlYmhvb2tTdGF0ZTogdGhpcy53ZWJob29rU3RhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIGlzRmFsbGJhY2s6IHRoaXMuaXNGYWxsYmFjayxcbiAgICAgIG1sRGlzYWJsZWQ6IHRoaXMubWxEaXNhYmxlZCxcbiAgICAgIGlucHV0Q29udGV4dE5hbWVzOiAodGhpcy5pbnB1dENvbnRleHROYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGV2ZW50czogKHRoaXMuZXZlbnRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgdHJhaW5pbmdQaHJhc2VzOiAodGhpcy50cmFpbmluZ1BocmFzZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgb3V0cHV0Q29udGV4dHM6ICh0aGlzLm91dHB1dENvbnRleHRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgcmVzZXRDb250ZXh0czogdGhpcy5yZXNldENvbnRleHRzLFxuICAgICAgcGFyYW1ldGVyczogKHRoaXMucGFyYW1ldGVycyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG1lc3NhZ2VzOiAodGhpcy5tZXNzYWdlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGRlZmF1bHRSZXNwb25zZVBsYXRmb3JtczogKHRoaXMuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgcm9vdEZvbGxvd3VwSW50ZW50TmFtZTogdGhpcy5yb290Rm9sbG93dXBJbnRlbnROYW1lLFxuICAgICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSxcbiAgICAgIGZvbGxvd3VwSW50ZW50SW5mbzogKHRoaXMuZm9sbG93dXBJbnRlbnRJbmZvIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW4sXG4gICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICBpc1N0YXJ0T2ZEZXZpYXRpb246IHRoaXMuaXNTdGFydE9mRGV2aWF0aW9uLFxuICAgICAgaXNFbmRPZkRldmlhdGlvbjogdGhpcy5pc0VuZE9mRGV2aWF0aW9uLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDb3VudDogdGhpcy50cmFpbmluZ1BocmFzZUNvdW50LFxuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEludGVudC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgd2ViaG9va1N0YXRlOiBJbnRlbnQuV2ViaG9va1N0YXRlW3RoaXMud2ViaG9va1N0YXRlID8/IDBdLFxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICBpc0ZhbGxiYWNrOiB0aGlzLmlzRmFsbGJhY2ssXG4gICAgICBtbERpc2FibGVkOiB0aGlzLm1sRGlzYWJsZWQsXG4gICAgICBpbnB1dENvbnRleHROYW1lczogKHRoaXMuaW5wdXRDb250ZXh0TmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBldmVudHM6ICh0aGlzLmV2ZW50cyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHRyYWluaW5nUGhyYXNlczogKHRoaXMudHJhaW5pbmdQaHJhc2VzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICApLFxuICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgIG91dHB1dENvbnRleHRzOiAodGhpcy5vdXRwdXRDb250ZXh0cyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgKSxcbiAgICAgIHJlc2V0Q29udGV4dHM6IHRoaXMucmVzZXRDb250ZXh0cyxcbiAgICAgIHBhcmFtZXRlcnM6ICh0aGlzLnBhcmFtZXRlcnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpLFxuICAgICAgbWVzc2FnZXM6ICh0aGlzLm1lc3NhZ2VzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgIGRlZmF1bHRSZXNwb25zZVBsYXRmb3JtczogKHRoaXMuZGVmYXVsdFJlc3BvbnNlUGxhdGZvcm1zIHx8IFtdKS5tYXAoXG4gICAgICAgIHYgPT4gSW50ZW50Lk1lc3NhZ2UuUGxhdGZvcm1bdl1cbiAgICAgICksXG4gICAgICByb290Rm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLnJvb3RGb2xsb3d1cEludGVudE5hbWUsXG4gICAgICBwYXJlbnRGb2xsb3d1cEludGVudE5hbWU6IHRoaXMucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lLFxuICAgICAgZm9sbG93dXBJbnRlbnRJbmZvOiAodGhpcy5mb2xsb3d1cEludGVudEluZm8gfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW4sXG4gICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICBpc1N0YXJ0T2ZEZXZpYXRpb246IHRoaXMuaXNTdGFydE9mRGV2aWF0aW9uLFxuICAgICAgaXNFbmRPZkRldmlhdGlvbjogdGhpcy5pc0VuZE9mRGV2aWF0aW9uLFxuICAgICAgdHJhaW5pbmdQaHJhc2VDb3VudDogdGhpcy50cmFpbmluZ1BocmFzZUNvdW50LFxuICAgICAgc3RhdHVzOiBJbnRlbnQuSW50ZW50U3RhdHVzW3RoaXMuc3RhdHVzID8/IDBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbnRlbnQge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEludGVudFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICB3ZWJob29rU3RhdGU/OiBJbnRlbnQuV2ViaG9va1N0YXRlO1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICAgIGlzRmFsbGJhY2s/OiBib29sZWFuO1xuICAgIG1sRGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIGlucHV0Q29udGV4dE5hbWVzPzogc3RyaW5nW107XG4gICAgZXZlbnRzPzogc3RyaW5nW107XG4gICAgdHJhaW5pbmdQaHJhc2VzPzogSW50ZW50LlRyYWluaW5nUGhyYXNlLkFzT2JqZWN0W107XG4gICAgYWN0aW9uPzogc3RyaW5nO1xuICAgIG91dHB1dENvbnRleHRzPzogb25kZXdvTmx1MDA3LkNvbnRleHQuQXNPYmplY3RbXTtcbiAgICByZXNldENvbnRleHRzPzogYm9vbGVhbjtcbiAgICBwYXJhbWV0ZXJzPzogSW50ZW50LlBhcmFtZXRlci5Bc09iamVjdFtdO1xuICAgIG1lc3NhZ2VzPzogSW50ZW50Lk1lc3NhZ2UuQXNPYmplY3RbXTtcbiAgICBkZWZhdWx0UmVzcG9uc2VQbGF0Zm9ybXM/OiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybVtdO1xuICAgIHJvb3RGb2xsb3d1cEludGVudE5hbWU/OiBzdHJpbmc7XG4gICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lPzogc3RyaW5nO1xuICAgIGZvbGxvd3VwSW50ZW50SW5mbz86IEludGVudC5Gb2xsb3d1cEludGVudEluZm8uQXNPYmplY3RbXTtcbiAgICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICAgIGRvbWFpbk5hbWU/OiBzdHJpbmc7XG4gICAgaXNTdGFydE9mRGV2aWF0aW9uPzogYm9vbGVhbjtcbiAgICBpc0VuZE9mRGV2aWF0aW9uPzogYm9vbGVhbjtcbiAgICB0cmFpbmluZ1BocmFzZUNvdW50PzogbnVtYmVyO1xuICAgIHN0YXR1cz86IEludGVudC5JbnRlbnRTdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSW50ZW50XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIHdlYmhvb2tTdGF0ZT86IHN0cmluZztcbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICBpc0ZhbGxiYWNrPzogYm9vbGVhbjtcbiAgICBtbERpc2FibGVkPzogYm9vbGVhbjtcbiAgICBpbnB1dENvbnRleHROYW1lcz86IHN0cmluZ1tdO1xuICAgIGV2ZW50cz86IHN0cmluZ1tdO1xuICAgIHRyYWluaW5nUGhyYXNlcz86IEludGVudC5UcmFpbmluZ1BocmFzZS5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBhY3Rpb24/OiBzdHJpbmc7XG4gICAgb3V0cHV0Q29udGV4dHM/OiBvbmRld29ObHUwMDcuQ29udGV4dC5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICByZXNldENvbnRleHRzPzogYm9vbGVhbjtcbiAgICBwYXJhbWV0ZXJzPzogSW50ZW50LlBhcmFtZXRlci5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICBtZXNzYWdlcz86IEludGVudC5NZXNzYWdlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgIGRlZmF1bHRSZXNwb25zZVBsYXRmb3Jtcz86IHN0cmluZ1tdO1xuICAgIHJvb3RGb2xsb3d1cEludGVudE5hbWU/OiBzdHJpbmc7XG4gICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lPzogc3RyaW5nO1xuICAgIGZvbGxvd3VwSW50ZW50SW5mbz86IEludGVudC5Gb2xsb3d1cEludGVudEluZm8uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgICBkb21haW5OYW1lPzogc3RyaW5nO1xuICAgIGlzU3RhcnRPZkRldmlhdGlvbj86IGJvb2xlYW47XG4gICAgaXNFbmRPZkRldmlhdGlvbj86IGJvb2xlYW47XG4gICAgdHJhaW5pbmdQaHJhc2VDb3VudD86IG51bWJlcjtcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gSW50ZW50U3RhdHVzIHtcbiAgICBBQ1RJVkUgPSAwLFxuICAgIElOQUNUSVZFID0gMVxuICB9XG4gIGV4cG9ydCBlbnVtIFdlYmhvb2tTdGF0ZSB7XG4gICAgV0VCSE9PS19TVEFURV9VTlNQRUNJRklFRCA9IDAsXG4gICAgV0VCSE9PS19TVEFURV9FTkFCTEVEID0gMSxcbiAgICBXRUJIT09LX1NUQVRFX0VOQUJMRURfRk9SX1NMT1RfRklMTElORyA9IDJcbiAgfVxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5UcmFpbmluZ1BocmFzZVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFRyYWluaW5nUGhyYXNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlRyYWluaW5nUGhyYXNlJztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVHJhaW5pbmdQaHJhc2UoKTtcbiAgICAgIFRyYWluaW5nUGhyYXNlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICApO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZSkge1xuICAgICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS50eXBlID0gX2luc3RhbmNlLnR5cGUgfHwgMDtcbiAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UuZW50aXRpZXMgPSBfaW5zdGFuY2UuZW50aXRpZXMgfHwgW107XG4gICAgICBfaW5zdGFuY2UudGltZXNBZGRlZENvdW50ID0gX2luc3RhbmNlLnRpbWVzQWRkZWRDb3VudCB8fCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IFRyYWluaW5nUGhyYXNlLFxuICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgKSB7XG4gICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS50eXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjQgPSBuZXcgSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eSgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgICAgSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAoX2luc3RhbmNlLmVudGl0aWVzID0gX2luc3RhbmNlLmVudGl0aWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgX2luc3RhbmNlLnRpbWVzQWRkZWRDb3VudCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBUcmFpbmluZ1BocmFzZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBUcmFpbmluZ1BocmFzZSxcbiAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICkge1xuICAgICAgaWYgKF9pbnN0YW5jZS5uYW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS50eXBlKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVFbnVtKDIsIF9pbnN0YW5jZS50eXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudGV4dCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZW50aXRpZXMgJiYgX2luc3RhbmNlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgX2luc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnRpbWVzQWRkZWRDb3VudCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlSW50MzIoNSwgX2luc3RhbmNlLnRpbWVzQWRkZWRDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlPzogSW50ZW50LlRyYWluaW5nUGhyYXNlLlR5cGU7XG4gICAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZztcbiAgICBwcml2YXRlIF9lbnRpdGllcz86IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXTtcbiAgICBwcml2YXRlIF90aW1lc0FkZGVkQ291bnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBUcmFpbmluZ1BocmFzZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VHJhaW5pbmdQaHJhc2UuQXNPYmplY3Q+KSB7XG4gICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICB0aGlzLm5hbWUgPSBfdmFsdWUubmFtZTtcbiAgICAgIHRoaXMudHlwZSA9IF92YWx1ZS50eXBlO1xuICAgICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgICB0aGlzLmVudGl0aWVzID0gKF92YWx1ZS5lbnRpdGllcyB8fCBbXSkubWFwKFxuICAgICAgICBtID0+IG5ldyBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuRW50aXR5KG0pXG4gICAgICApO1xuICAgICAgdGhpcy50aW1lc0FkZGVkQ291bnQgPSBfdmFsdWUudGltZXNBZGRlZENvdW50O1xuICAgICAgVHJhaW5pbmdQaHJhc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHR5cGUoKTogSW50ZW50LlRyYWluaW5nUGhyYXNlLlR5cGUgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHNldCB0eXBlKHZhbHVlOiBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgfVxuICAgIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGVudGl0aWVzKCk6IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW50aXRpZXM7XG4gICAgfVxuICAgIHNldCBlbnRpdGllcyh2YWx1ZTogSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9lbnRpdGllcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdGltZXNBZGRlZENvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZXNBZGRlZENvdW50O1xuICAgIH1cbiAgICBzZXQgdGltZXNBZGRlZENvdW50KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RpbWVzQWRkZWRDb3VudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBUcmFpbmluZ1BocmFzZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBUcmFpbmluZ1BocmFzZS5Bc09iamVjdCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICAgIHRpbWVzQWRkZWRDb3VudDogdGhpcy50aW1lc0FkZGVkQ291bnRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogVHJhaW5pbmdQaHJhc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB0eXBlOiBJbnRlbnQuVHJhaW5pbmdQaHJhc2UuVHlwZVt0aGlzLnR5cGUgPz8gMF0sXG4gICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgZW50aXRpZXM6ICh0aGlzLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKSxcbiAgICAgICAgdGltZXNBZGRlZENvdW50OiB0aGlzLnRpbWVzQWRkZWRDb3VudFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBUcmFpbmluZ1BocmFzZSB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgdHlwZT86IEludGVudC5UcmFpbmluZ1BocmFzZS5UeXBlO1xuICAgICAgdGV4dD86IHN0cmluZztcbiAgICAgIGVudGl0aWVzPzogSW50ZW50LlRyYWluaW5nUGhyYXNlLkVudGl0eS5Bc09iamVjdFtdO1xuICAgICAgdGltZXNBZGRlZENvdW50PzogbnVtYmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRyYWluaW5nUGhyYXNlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICBlbnRpdGllcz86IEludGVudC5UcmFpbmluZ1BocmFzZS5FbnRpdHkuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgICB0aW1lc0FkZGVkQ291bnQ/OiBudW1iZXI7XG4gICAgfVxuICAgIGV4cG9ydCBlbnVtIFR5cGUge1xuICAgICAgVFlQRV9VTlNQRUNJRklFRCA9IDAsXG4gICAgICBFWEFNUExFID0gMSxcbiAgICAgIFRFTVBMQVRFID0gMlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkVudGl0eVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBFbnRpdHkgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5FbnRpdHknO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHkoKTtcbiAgICAgICAgRW50aXR5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEVudGl0eSkge1xuICAgICAgICBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgPSBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUgfHwgJyc7XG4gICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUgPSBfaW5zdGFuY2UuZW50aXR5VHlwZURpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UuZW50aXR5VmFsdWVOYW1lID0gX2luc3RhbmNlLmVudGl0eVZhbHVlTmFtZSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLmVudGl0eVZhbHVlRGlzcGxheU5hbWUgPVxuICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2Uuc3RhcnQgPSBfaW5zdGFuY2Uuc3RhcnQgfHwgMDtcbiAgICAgICAgX2luc3RhbmNlLmVuZCA9IF9pbnN0YW5jZS5lbmQgfHwgMDtcbiAgICAgICAgX2luc3RhbmNlLnBhcmFtZXRlck5hbWUgPSBfaW5zdGFuY2UucGFyYW1ldGVyTmFtZSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLnBhcmFtZXRlckRpc3BsYXlOYW1lID0gX2luc3RhbmNlLnBhcmFtZXRlckRpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBFbnRpdHksXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVZhbHVlTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVZhbHVlRGlzcGxheU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5zdGFydCA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBfaW5zdGFuY2UuZW5kID0gX3JlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5wYXJhbWV0ZXJOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBfaW5zdGFuY2UucGFyYW1ldGVyRGlzcGxheU5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEVudGl0eS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBFbnRpdHksIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICBpZiAoX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZURpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuZW50aXR5VHlwZURpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luc3RhbmNlLmVudGl0eVZhbHVlTmFtZSkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNCwgX2luc3RhbmNlLmVudGl0eVZhbHVlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuZW50aXR5VmFsdWVEaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5zdGFydCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVJbnQzMig2LCBfaW5zdGFuY2Uuc3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuZW5kKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZUludDMyKDcsIF9pbnN0YW5jZS5lbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UucGFyYW1ldGVyTmFtZSkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLnBhcmFtZXRlck5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UucGFyYW1ldGVyRGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS5wYXJhbWV0ZXJEaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfZW50aXR5VHlwZU5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9lbnRpdHlUeXBlRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9lbnRpdHlWYWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9lbnRpdHlWYWx1ZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfc3RhcnQ/OiBudW1iZXI7XG4gICAgICBwcml2YXRlIF9lbmQ/OiBudW1iZXI7XG4gICAgICBwcml2YXRlIF9wYXJhbWV0ZXJOYW1lPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVyRGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBFbnRpdHkgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnRpdHkuQXNPYmplY3Q+KSB7XG4gICAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy5lbnRpdHlUeXBlTmFtZSA9IF92YWx1ZS5lbnRpdHlUeXBlTmFtZTtcbiAgICAgICAgdGhpcy5lbnRpdHlUeXBlRGlzcGxheU5hbWUgPSBfdmFsdWUuZW50aXR5VHlwZURpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmVudGl0eVZhbHVlTmFtZSA9IF92YWx1ZS5lbnRpdHlWYWx1ZU5hbWU7XG4gICAgICAgIHRoaXMuZW50aXR5VmFsdWVEaXNwbGF5TmFtZSA9IF92YWx1ZS5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gX3ZhbHVlLnN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IF92YWx1ZS5lbmQ7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyTmFtZSA9IF92YWx1ZS5wYXJhbWV0ZXJOYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlckRpc3BsYXlOYW1lID0gX3ZhbHVlLnBhcmFtZXRlckRpc3BsYXlOYW1lO1xuICAgICAgICBFbnRpdHkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IGVudGl0eVR5cGVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBlbnRpdHlUeXBlTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlRGlzcGxheU5hbWU7XG4gICAgICB9XG4gICAgICBzZXQgZW50aXR5VHlwZURpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VHlwZURpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VmFsdWVOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlWYWx1ZU5hbWU7XG4gICAgICB9XG4gICAgICBzZXQgZW50aXR5VmFsdWVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VmFsdWVOYW1lID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW50aXR5VmFsdWVEaXNwbGF5TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5VmFsdWVEaXNwbGF5TmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBlbnRpdHlWYWx1ZURpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5VmFsdWVEaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHN0YXJ0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICAgIH1cbiAgICAgIHNldCBzdGFydCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZW5kKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gICAgICB9XG4gICAgICBzZXQgZW5kKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZW5kID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgcGFyYW1ldGVyTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyTmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBwYXJhbWV0ZXJOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1ldGVyTmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHBhcmFtZXRlckRpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJEaXNwbGF5TmFtZTtcbiAgICAgIH1cbiAgICAgIHNldCBwYXJhbWV0ZXJEaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3BhcmFtZXRlckRpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBFbnRpdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogRW50aXR5LkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbnRpdHlUeXBlTmFtZTogdGhpcy5lbnRpdHlUeXBlTmFtZSxcbiAgICAgICAgICBlbnRpdHlUeXBlRGlzcGxheU5hbWU6IHRoaXMuZW50aXR5VHlwZURpc3BsYXlOYW1lLFxuICAgICAgICAgIGVudGl0eVZhbHVlTmFtZTogdGhpcy5lbnRpdHlWYWx1ZU5hbWUsXG4gICAgICAgICAgZW50aXR5VmFsdWVEaXNwbGF5TmFtZTogdGhpcy5lbnRpdHlWYWx1ZURpc3BsYXlOYW1lLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5lbmQsXG4gICAgICAgICAgcGFyYW1ldGVyTmFtZTogdGhpcy5wYXJhbWV0ZXJOYW1lLFxuICAgICAgICAgIHBhcmFtZXRlckRpc3BsYXlOYW1lOiB0aGlzLnBhcmFtZXRlckRpc3BsYXlOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBFbnRpdHkuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVudGl0eVR5cGVOYW1lOiB0aGlzLmVudGl0eVR5cGVOYW1lLFxuICAgICAgICAgIGVudGl0eVR5cGVEaXNwbGF5TmFtZTogdGhpcy5lbnRpdHlUeXBlRGlzcGxheU5hbWUsXG4gICAgICAgICAgZW50aXR5VmFsdWVOYW1lOiB0aGlzLmVudGl0eVZhbHVlTmFtZSxcbiAgICAgICAgICBlbnRpdHlWYWx1ZURpc3BsYXlOYW1lOiB0aGlzLmVudGl0eVZhbHVlRGlzcGxheU5hbWUsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVuZCxcbiAgICAgICAgICBwYXJhbWV0ZXJOYW1lOiB0aGlzLnBhcmFtZXRlck5hbWUsXG4gICAgICAgICAgcGFyYW1ldGVyRGlzcGxheU5hbWU6IHRoaXMucGFyYW1ldGVyRGlzcGxheU5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBFbnRpdHkge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgRW50aXR5XG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICBlbnRpdHlUeXBlTmFtZT86IHN0cmluZztcbiAgICAgICAgZW50aXR5VHlwZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgICBlbnRpdHlWYWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIGVudGl0eVZhbHVlRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIHN0YXJ0PzogbnVtYmVyO1xuICAgICAgICBlbmQ/OiBudW1iZXI7XG4gICAgICAgIHBhcmFtZXRlck5hbWU/OiBzdHJpbmc7XG4gICAgICAgIHBhcmFtZXRlckRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEVudGl0eVxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgZW50aXR5VHlwZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIGVudGl0eVR5cGVEaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAgICAgZW50aXR5VmFsdWVOYW1lPzogc3RyaW5nO1xuICAgICAgICBlbnRpdHlWYWx1ZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgICBzdGFydD86IG51bWJlcjtcbiAgICAgICAgZW5kPzogbnVtYmVyO1xuICAgICAgICBwYXJhbWV0ZXJOYW1lPzogc3RyaW5nO1xuICAgICAgICBwYXJhbWV0ZXJEaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5QYXJhbWV0ZXJcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBQYXJhbWV0ZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuUGFyYW1ldGVyJztcblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUGFyYW1ldGVyKCk7XG4gICAgICBQYXJhbWV0ZXIuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFBhcmFtZXRlcikge1xuICAgICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IF9pbnN0YW5jZS5kaXNwbGF5TmFtZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS52YWx1ZSA9IF9pbnN0YW5jZS52YWx1ZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS5kZWZhdWx0VmFsdWUgPSBfaW5zdGFuY2UuZGVmYXVsdFZhbHVlIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lID0gX2luc3RhbmNlLmVudGl0eVR5cGVOYW1lIHx8ICcnO1xuICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IF9pbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUgfHwgJyc7XG4gICAgICBfaW5zdGFuY2UubWFuZGF0b3J5ID0gX2luc3RhbmNlLm1hbmRhdG9yeSB8fCBmYWxzZTtcbiAgICAgIF9pbnN0YW5jZS5wcm9tcHRzID0gX2luc3RhbmNlLnByb21wdHMgfHwgW107XG4gICAgICBfaW5zdGFuY2UuaXNMaXN0ID0gX2luc3RhbmNlLmlzTGlzdCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgX2luc3RhbmNlOiBQYXJhbWV0ZXIsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgX2luc3RhbmNlLmRpc3BsYXlOYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBfaW5zdGFuY2UudmFsdWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5kZWZhdWx0VmFsdWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5lbnRpdHlUeXBlTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgX2luc3RhbmNlLmVudGl0eVR5cGVEaXNwbGF5TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgX2luc3RhbmNlLm1hbmRhdG9yeSA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIChfaW5zdGFuY2UucHJvbXB0cyA9IF9pbnN0YW5jZS5wcm9tcHRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5pc0xpc3QgPSBfcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBQYXJhbWV0ZXIucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgIF9pbnN0YW5jZTogUGFyYW1ldGVyLFxuICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgKSB7XG4gICAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UudmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg0LCBfaW5zdGFuY2UuZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg1LCBfaW5zdGFuY2UuZW50aXR5VHlwZU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5lbnRpdHlUeXBlRGlzcGxheU5hbWUpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZyg2LCBfaW5zdGFuY2UuZW50aXR5VHlwZURpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubWFuZGF0b3J5KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVCb29sKDcsIF9pbnN0YW5jZS5tYW5kYXRvcnkpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5wcm9tcHRzICYmIF9pbnN0YW5jZS5wcm9tcHRzLmxlbmd0aCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoOCwgX2luc3RhbmNlLnByb21wdHMpO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5pc0xpc3QpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZUJvb2woOSwgX2luc3RhbmNlLmlzTGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF9kaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF92YWx1ZT86IHN0cmluZztcbiAgICBwcml2YXRlIF9kZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZW50aXR5VHlwZU5hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZW50aXR5VHlwZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX21hbmRhdG9yeT86IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfcHJvbXB0cz86IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX2lzTGlzdD86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBQYXJhbWV0ZXIgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBhcmFtZXRlci5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IF92YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMudmFsdWUgPSBfdmFsdWUudmFsdWU7XG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IF92YWx1ZS5kZWZhdWx0VmFsdWU7XG4gICAgICB0aGlzLmVudGl0eVR5cGVOYW1lID0gX3ZhbHVlLmVudGl0eVR5cGVOYW1lO1xuICAgICAgdGhpcy5lbnRpdHlUeXBlRGlzcGxheU5hbWUgPSBfdmFsdWUuZW50aXR5VHlwZURpc3BsYXlOYW1lO1xuICAgICAgdGhpcy5tYW5kYXRvcnkgPSBfdmFsdWUubWFuZGF0b3J5O1xuICAgICAgdGhpcy5wcm9tcHRzID0gKF92YWx1ZS5wcm9tcHRzIHx8IFtdKS5zbGljZSgpO1xuICAgICAgdGhpcy5pc0xpc3QgPSBfdmFsdWUuaXNMaXN0O1xuICAgICAgUGFyYW1ldGVyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5TmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlOYW1lO1xuICAgIH1cbiAgICBzZXQgZGlzcGxheU5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGVmYXVsdFZhbHVlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW50aXR5VHlwZU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlTmFtZTtcbiAgICB9XG4gICAgc2V0IGVudGl0eVR5cGVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbnRpdHlUeXBlRGlzcGxheU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlRGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHNldCBlbnRpdHlUeXBlRGlzcGxheU5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW50aXR5VHlwZURpc3BsYXlOYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYW5kYXRvcnkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFuZGF0b3J5O1xuICAgIH1cbiAgICBzZXQgbWFuZGF0b3J5KHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tYW5kYXRvcnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHByb21wdHMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3Byb21wdHM7XG4gICAgfVxuICAgIHNldCBwcm9tcHRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcHJvbXB0cyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaXNMaXN0KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzTGlzdDtcbiAgICB9XG4gICAgc2V0IGlzTGlzdCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faXNMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIFBhcmFtZXRlci5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBQYXJhbWV0ZXIuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGVudGl0eVR5cGVOYW1lOiB0aGlzLmVudGl0eVR5cGVOYW1lLFxuICAgICAgICBlbnRpdHlUeXBlRGlzcGxheU5hbWU6IHRoaXMuZW50aXR5VHlwZURpc3BsYXlOYW1lLFxuICAgICAgICBtYW5kYXRvcnk6IHRoaXMubWFuZGF0b3J5LFxuICAgICAgICBwcm9tcHRzOiAodGhpcy5wcm9tcHRzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgICBpc0xpc3Q6IHRoaXMuaXNMaXN0XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAqL1xuICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICk6IFBhcmFtZXRlci5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgZW50aXR5VHlwZU5hbWU6IHRoaXMuZW50aXR5VHlwZU5hbWUsXG4gICAgICAgIGVudGl0eVR5cGVEaXNwbGF5TmFtZTogdGhpcy5lbnRpdHlUeXBlRGlzcGxheU5hbWUsXG4gICAgICAgIG1hbmRhdG9yeTogdGhpcy5tYW5kYXRvcnksXG4gICAgICAgIHByb21wdHM6ICh0aGlzLnByb21wdHMgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIGlzTGlzdDogdGhpcy5pc0xpc3RcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgUGFyYW1ldGVyIHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUGFyYW1ldGVyXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IHN0cmluZztcbiAgICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICAgIGVudGl0eVR5cGVOYW1lPzogc3RyaW5nO1xuICAgICAgZW50aXR5VHlwZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgbWFuZGF0b3J5PzogYm9vbGVhbjtcbiAgICAgIHByb21wdHM/OiBzdHJpbmdbXTtcbiAgICAgIGlzTGlzdD86IGJvb2xlYW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUGFyYW1ldGVyXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IHN0cmluZztcbiAgICAgIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICAgIGVudGl0eVR5cGVOYW1lPzogc3RyaW5nO1xuICAgICAgZW50aXR5VHlwZURpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgICAgbWFuZGF0b3J5PzogYm9vbGVhbjtcbiAgICAgIHByb21wdHM/OiBzdHJpbmdbXTtcbiAgICAgIGlzTGlzdD86IGJvb2xlYW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuTWVzc2FnZVxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIE1lc3NhZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTWVzc2FnZSc7XG5cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgIE1lc3NhZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE1lc3NhZ2UpIHtcbiAgICAgIF9pbnN0YW5jZS5wbGF0Zm9ybSA9IF9pbnN0YW5jZS5wbGF0Zm9ybSB8fCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IE1lc3NhZ2UsXG4gICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICApIHtcbiAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBfaW5zdGFuY2UudGV4dCA9IG5ldyBJbnRlbnQuTWVzc2FnZS5UZXh0KCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UudGV4dCxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5pbWFnZSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgX2luc3RhbmNlLnF1aWNrUmVwbGllcyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5RdWlja1JlcGxpZXMoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5xdWlja1JlcGxpZXMsXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBfaW5zdGFuY2UuY2FyZCA9IG5ldyBJbnRlbnQuTWVzc2FnZS5DYXJkKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UuY2FyZCxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2FyZC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBfaW5zdGFuY2UucGF5bG9hZCA9IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5wYXlsb2FkLFxuICAgICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgX2luc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZXMoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5zaW1wbGVSZXNwb25zZXMsXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBfaW5zdGFuY2UuYmFzaWNDYXJkID0gbmV3IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZCgpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmJhc2ljQ2FyZCxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdWdnZXN0aW9ucyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucygpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgX2luc3RhbmNlLmxpbmtPdXRTdWdnZXN0aW9uID0gbmV3IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UubGlua091dFN1Z2dlc3Rpb24sXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBfaW5zdGFuY2UubGlzdFNlbGVjdCA9IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0KCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UubGlzdFNlbGVjdCxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgX2luc3RhbmNlLmNhcm91c2VsU2VsZWN0ID0gbmV3IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0KCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UuY2Fyb3VzZWxTZWxlY3QsXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBfaW5zdGFuY2UuaHRtbFRleHQgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQoKTtcbiAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5odG1sVGV4dCxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIF9pbnN0YW5jZS52aWRlbyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5WaWRlbygpO1xuICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnZpZGVvLFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5WaWRlby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgX2luc3RhbmNlLmF1ZGlvID0gbmV3IEludGVudC5NZXNzYWdlLkF1ZGlvKCk7XG4gICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBfaW5zdGFuY2UuYXVkaW8sXG4gICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkF1ZGlvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wbGF0Zm9ybSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE1lc3NhZ2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IE1lc3NhZ2UsIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEsXG4gICAgICAgICAgX2luc3RhbmNlLnRleHQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuaW1hZ2UpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMixcbiAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnF1aWNrUmVwbGllcykge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAzLFxuICAgICAgICAgIF9pbnN0YW5jZS5xdWlja1JlcGxpZXMgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5jYXJkKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDQsXG4gICAgICAgICAgX2luc3RhbmNlLmNhcmQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcmQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UucGF5bG9hZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA1LFxuICAgICAgICAgIF9pbnN0YW5jZS5wYXlsb2FkIGFzIGFueSxcbiAgICAgICAgICBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDcsXG4gICAgICAgICAgX2luc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2VzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmJhc2ljQ2FyZCkge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA4LFxuICAgICAgICAgIF9pbnN0YW5jZS5iYXNpY0NhcmQgYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5zdWdnZXN0aW9ucykge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICA5LFxuICAgICAgICAgIF9pbnN0YW5jZS5zdWdnZXN0aW9ucyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbnMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UubGlua091dFN1Z2dlc3Rpb24pIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgX2luc3RhbmNlLmxpbmtPdXRTdWdnZXN0aW9uIGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaW5rT3V0U3VnZ2VzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS5saXN0U2VsZWN0KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDExLFxuICAgICAgICAgIF9pbnN0YW5jZS5saXN0U2VsZWN0IGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmNhcm91c2VsU2VsZWN0KSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIF9pbnN0YW5jZS5jYXJvdXNlbFNlbGVjdCBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UuaHRtbFRleHQpIHtcbiAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgX2luc3RhbmNlLmh0bWxUZXh0IGFzIGFueSxcbiAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9pbnN0YW5jZS52aWRlbykge1xuICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAxNCxcbiAgICAgICAgICBfaW5zdGFuY2UudmlkZW8gYXMgYW55LFxuICAgICAgICAgIEludGVudC5NZXNzYWdlLlZpZGVvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLmF1ZGlvKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIF9pbnN0YW5jZS5hdWRpbyBhcyBhbnksXG4gICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQXVkaW8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfaW5zdGFuY2UucGxhdGZvcm0pIHtcbiAgICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLnBsYXRmb3JtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0PzogSW50ZW50Lk1lc3NhZ2UuVGV4dDtcbiAgICBwcml2YXRlIF9pbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlO1xuICAgIHByaXZhdGUgX3F1aWNrUmVwbGllcz86IEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcztcbiAgICBwcml2YXRlIF9jYXJkPzogSW50ZW50Lk1lc3NhZ2UuQ2FyZDtcbiAgICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0O1xuICAgIHByaXZhdGUgX3NpbXBsZVJlc3BvbnNlcz86IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcztcbiAgICBwcml2YXRlIF9iYXNpY0NhcmQ/OiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQ7XG4gICAgcHJpdmF0ZSBfc3VnZ2VzdGlvbnM/OiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucztcbiAgICBwcml2YXRlIF9saW5rT3V0U3VnZ2VzdGlvbj86IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uO1xuICAgIHByaXZhdGUgX2xpc3RTZWxlY3Q/OiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0O1xuICAgIHByaXZhdGUgX2Nhcm91c2VsU2VsZWN0PzogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3Q7XG4gICAgcHJpdmF0ZSBfaHRtbFRleHQ/OiBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dDtcbiAgICBwcml2YXRlIF92aWRlbz86IEludGVudC5NZXNzYWdlLlZpZGVvO1xuICAgIHByaXZhdGUgX2F1ZGlvPzogSW50ZW50Lk1lc3NhZ2UuQXVkaW87XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm0/OiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybTtcblxuICAgIHByaXZhdGUgX21lc3NhZ2U6IE1lc3NhZ2UuTWVzc2FnZUNhc2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLm5vbmU7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBNZXNzYWdlIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXNzYWdlLkFzT2JqZWN0Pikge1xuICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHRcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuVGV4dChfdmFsdWUudGV4dClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmltYWdlID0gX3ZhbHVlLmltYWdlXG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKF92YWx1ZS5pbWFnZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnF1aWNrUmVwbGllcyA9IF92YWx1ZS5xdWlja1JlcGxpZXNcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuUXVpY2tSZXBsaWVzKF92YWx1ZS5xdWlja1JlcGxpZXMpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jYXJkID0gX3ZhbHVlLmNhcmRcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2FyZChfdmFsdWUuY2FyZClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnBheWxvYWQgPSBfdmFsdWUucGF5bG9hZFxuICAgICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QoX3ZhbHVlLnBheWxvYWQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zaW1wbGVSZXNwb25zZXMgPSBfdmFsdWUuc2ltcGxlUmVzcG9uc2VzXG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcyhfdmFsdWUuc2ltcGxlUmVzcG9uc2VzKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYmFzaWNDYXJkID0gX3ZhbHVlLmJhc2ljQ2FyZFxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQoX3ZhbHVlLmJhc2ljQ2FyZClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gX3ZhbHVlLnN1Z2dlc3Rpb25zXG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25zKF92YWx1ZS5zdWdnZXN0aW9ucylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uID0gX3ZhbHVlLmxpbmtPdXRTdWdnZXN0aW9uXG4gICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uKF92YWx1ZS5saW5rT3V0U3VnZ2VzdGlvbilcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmxpc3RTZWxlY3QgPSBfdmFsdWUubGlzdFNlbGVjdFxuICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0KF92YWx1ZS5saXN0U2VsZWN0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY2Fyb3VzZWxTZWxlY3QgPSBfdmFsdWUuY2Fyb3VzZWxTZWxlY3RcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QoX3ZhbHVlLmNhcm91c2VsU2VsZWN0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaHRtbFRleHQgPSBfdmFsdWUuaHRtbFRleHRcbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQoX3ZhbHVlLmh0bWxUZXh0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudmlkZW8gPSBfdmFsdWUudmlkZW9cbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuVmlkZW8oX3ZhbHVlLnZpZGVvKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYXVkaW8gPSBfdmFsdWUuYXVkaW9cbiAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuQXVkaW8oX3ZhbHVlLmF1ZGlvKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMucGxhdGZvcm0gPSBfdmFsdWUucGxhdGZvcm07XG4gICAgICBNZXNzYWdlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHRleHQoKTogSW50ZW50Lk1lc3NhZ2UuVGV4dCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICB9XG4gICAgc2V0IHRleHQodmFsdWU6IEludGVudC5NZXNzYWdlLlRleHQgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS50ZXh0O1xuICAgICAgfVxuICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaW1hZ2UoKTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xuICAgIH1cbiAgICBzZXQgaW1hZ2UodmFsdWU6IEludGVudC5NZXNzYWdlLkltYWdlIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5pbWFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltYWdlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBxdWlja1JlcGxpZXMoKTogSW50ZW50Lk1lc3NhZ2UuUXVpY2tSZXBsaWVzIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9xdWlja1JlcGxpZXM7XG4gICAgfVxuICAgIHNldCBxdWlja1JlcGxpZXModmFsdWU6IEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcyB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5xdWlja1JlcGxpZXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9xdWlja1JlcGxpZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhcmQoKTogSW50ZW50Lk1lc3NhZ2UuQ2FyZCB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FyZDtcbiAgICB9XG4gICAgc2V0IGNhcmQodmFsdWU6IEludGVudC5NZXNzYWdlLkNhcmQgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5jYXJkO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FyZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGF5bG9hZCgpOiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3BheWxvYWQ7XG4gICAgfVxuICAgIHNldCBwYXlsb2FkKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAxMC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5wYXlsb2FkO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGF5bG9hZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc2ltcGxlUmVzcG9uc2VzKCk6IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fc2ltcGxlUmVzcG9uc2VzO1xuICAgIH1cbiAgICBzZXQgc2ltcGxlUmVzcG9uc2VzKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZXMgfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9wYXlsb2FkID0gdGhpcy5fYmFzaWNDYXJkID0gdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLl9saW5rT3V0U3VnZ2VzdGlvbiA9IHRoaXMuX2xpc3RTZWxlY3QgPSB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHRoaXMuX2h0bWxUZXh0ID0gdGhpcy5fdmlkZW8gPSB0aGlzLl9hdWRpbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2Uuc2ltcGxlUmVzcG9uc2VzO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBiYXNpY0NhcmQoKTogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9iYXNpY0NhcmQ7XG4gICAgfVxuICAgIHNldCBiYXNpY0NhcmQodmFsdWU6IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5iYXNpY0NhcmQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9iYXNpY0NhcmQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHN1Z2dlc3Rpb25zKCk6IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25zIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWdnZXN0aW9ucztcbiAgICB9XG4gICAgc2V0IHN1Z2dlc3Rpb25zKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9saW5rT3V0U3VnZ2VzdGlvbiA9IHRoaXMuX2xpc3RTZWxlY3QgPSB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHRoaXMuX2h0bWxUZXh0ID0gdGhpcy5fdmlkZW8gPSB0aGlzLl9hdWRpbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2Uuc3VnZ2VzdGlvbnM7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdWdnZXN0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbGlua091dFN1Z2dlc3Rpb24oKTogSW50ZW50Lk1lc3NhZ2UuTGlua091dFN1Z2dlc3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uO1xuICAgIH1cbiAgICBzZXQgbGlua091dFN1Z2dlc3Rpb24odmFsdWU6IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5saW5rT3V0U3VnZ2VzdGlvbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsaXN0U2VsZWN0KCk6IEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3RTZWxlY3Q7XG4gICAgfVxuICAgIHNldCBsaXN0U2VsZWN0KHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHRoaXMuX2h0bWxUZXh0ID0gdGhpcy5fdmlkZW8gPSB0aGlzLl9hdWRpbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2UubGlzdFNlbGVjdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xpc3RTZWxlY3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhcm91c2VsU2VsZWN0KCk6IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYXJvdXNlbFNlbGVjdDtcbiAgICB9XG4gICAgc2V0IGNhcm91c2VsU2VsZWN0KHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5DYXJvdXNlbFNlbGVjdCB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2h0bWxUZXh0ID0gdGhpcy5fdmlkZW8gPSB0aGlzLl9hdWRpbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2UuY2Fyb3VzZWxTZWxlY3Q7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaHRtbFRleHQoKTogSW50ZW50Lk1lc3NhZ2UuSFRNTFRleHQgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2h0bWxUZXh0O1xuICAgIH1cbiAgICBzZXQgaHRtbFRleHQodmFsdWU6IEludGVudC5NZXNzYWdlLkhUTUxUZXh0IHwgdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5faW1hZ2UgPSB0aGlzLl9xdWlja1JlcGxpZXMgPSB0aGlzLl9jYXJkID0gdGhpcy5fcGF5bG9hZCA9IHRoaXMuX3NpbXBsZVJlc3BvbnNlcyA9IHRoaXMuX2Jhc2ljQ2FyZCA9IHRoaXMuX3N1Z2dlc3Rpb25zID0gdGhpcy5fbGlua091dFN1Z2dlc3Rpb24gPSB0aGlzLl9saXN0U2VsZWN0ID0gdGhpcy5fY2Fyb3VzZWxTZWxlY3QgPSB0aGlzLl92aWRlbyA9IHRoaXMuX2F1ZGlvID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gTWVzc2FnZS5NZXNzYWdlQ2FzZS5odG1sVGV4dDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2h0bWxUZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB2aWRlbygpOiBJbnRlbnQuTWVzc2FnZS5WaWRlbyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlkZW87XG4gICAgfVxuICAgIHNldCB2aWRlbyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuVmlkZW8gfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLl9pbWFnZSA9IHRoaXMuX3F1aWNrUmVwbGllcyA9IHRoaXMuX2NhcmQgPSB0aGlzLl9wYXlsb2FkID0gdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdGhpcy5fYmFzaWNDYXJkID0gdGhpcy5fc3VnZ2VzdGlvbnMgPSB0aGlzLl9saW5rT3V0U3VnZ2VzdGlvbiA9IHRoaXMuX2xpc3RTZWxlY3QgPSB0aGlzLl9jYXJvdXNlbFNlbGVjdCA9IHRoaXMuX2h0bWxUZXh0ID0gdGhpcy5fYXVkaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBNZXNzYWdlLk1lc3NhZ2VDYXNlLnZpZGVvO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmlkZW8gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGF1ZGlvKCk6IEludGVudC5NZXNzYWdlLkF1ZGlvIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdWRpbztcbiAgICB9XG4gICAgc2V0IGF1ZGlvKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5BdWRpbyB8IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuX2ltYWdlID0gdGhpcy5fcXVpY2tSZXBsaWVzID0gdGhpcy5fY2FyZCA9IHRoaXMuX3BheWxvYWQgPSB0aGlzLl9zaW1wbGVSZXNwb25zZXMgPSB0aGlzLl9iYXNpY0NhcmQgPSB0aGlzLl9zdWdnZXN0aW9ucyA9IHRoaXMuX2xpbmtPdXRTdWdnZXN0aW9uID0gdGhpcy5fbGlzdFNlbGVjdCA9IHRoaXMuX2Nhcm91c2VsU2VsZWN0ID0gdGhpcy5faHRtbFRleHQgPSB0aGlzLl92aWRlbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IE1lc3NhZ2UuTWVzc2FnZUNhc2UuYXVkaW87XG4gICAgICB9XG4gICAgICB0aGlzLl9hdWRpbyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGxhdGZvcm0oKTogSW50ZW50Lk1lc3NhZ2UuUGxhdGZvcm0gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtO1xuICAgIH1cbiAgICBzZXQgcGxhdGZvcm0odmFsdWU6IEludGVudC5NZXNzYWdlLlBsYXRmb3JtIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wbGF0Zm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBNZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCk6IE1lc3NhZ2UuQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0ID8gdGhpcy50ZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGltYWdlOiB0aGlzLmltYWdlID8gdGhpcy5pbWFnZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBxdWlja1JlcGxpZXM6IHRoaXMucXVpY2tSZXBsaWVzXG4gICAgICAgICAgPyB0aGlzLnF1aWNrUmVwbGllcy50b09iamVjdCgpXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIGNhcmQ6IHRoaXMuY2FyZCA/IHRoaXMuY2FyZC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQgPyB0aGlzLnBheWxvYWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc2ltcGxlUmVzcG9uc2VzOiB0aGlzLnNpbXBsZVJlc3BvbnNlc1xuICAgICAgICAgID8gdGhpcy5zaW1wbGVSZXNwb25zZXMudG9PYmplY3QoKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBiYXNpY0NhcmQ6IHRoaXMuYmFzaWNDYXJkID8gdGhpcy5iYXNpY0NhcmQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3VnZ2VzdGlvbnM6IHRoaXMuc3VnZ2VzdGlvbnMgPyB0aGlzLnN1Z2dlc3Rpb25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGxpbmtPdXRTdWdnZXN0aW9uOiB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uXG4gICAgICAgICAgPyB0aGlzLmxpbmtPdXRTdWdnZXN0aW9uLnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgbGlzdFNlbGVjdDogdGhpcy5saXN0U2VsZWN0ID8gdGhpcy5saXN0U2VsZWN0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGNhcm91c2VsU2VsZWN0OiB0aGlzLmNhcm91c2VsU2VsZWN0XG4gICAgICAgICAgPyB0aGlzLmNhcm91c2VsU2VsZWN0LnRvT2JqZWN0KClcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgaHRtbFRleHQ6IHRoaXMuaHRtbFRleHQgPyB0aGlzLmh0bWxUZXh0LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHZpZGVvOiB0aGlzLnZpZGVvID8gdGhpcy52aWRlby50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICBhdWRpbzogdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgcGxhdGZvcm06IHRoaXMucGxhdGZvcm1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICovXG4gICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgKTogTWVzc2FnZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiB0aGlzLnRleHQgPyB0aGlzLnRleHQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSA/IHRoaXMuaW1hZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgICBxdWlja1JlcGxpZXM6IHRoaXMucXVpY2tSZXBsaWVzXG4gICAgICAgICAgPyB0aGlzLnF1aWNrUmVwbGllcy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgY2FyZDogdGhpcy5jYXJkID8gdGhpcy5jYXJkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkID8gdGhpcy5wYXlsb2FkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgICAgc2ltcGxlUmVzcG9uc2VzOiB0aGlzLnNpbXBsZVJlc3BvbnNlc1xuICAgICAgICAgID8gdGhpcy5zaW1wbGVSZXNwb25zZXMudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGJhc2ljQ2FyZDogdGhpcy5iYXNpY0NhcmRcbiAgICAgICAgICA/IHRoaXMuYmFzaWNDYXJkLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBzdWdnZXN0aW9uczogdGhpcy5zdWdnZXN0aW9uc1xuICAgICAgICAgID8gdGhpcy5zdWdnZXN0aW9ucy50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgbGlua091dFN1Z2dlc3Rpb246IHRoaXMubGlua091dFN1Z2dlc3Rpb25cbiAgICAgICAgICA/IHRoaXMubGlua091dFN1Z2dlc3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGxpc3RTZWxlY3Q6IHRoaXMubGlzdFNlbGVjdFxuICAgICAgICAgID8gdGhpcy5saXN0U2VsZWN0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBjYXJvdXNlbFNlbGVjdDogdGhpcy5jYXJvdXNlbFNlbGVjdFxuICAgICAgICAgID8gdGhpcy5jYXJvdXNlbFNlbGVjdC50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgaHRtbFRleHQ6IHRoaXMuaHRtbFRleHQgPyB0aGlzLmh0bWxUZXh0LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgICAgdmlkZW86IHRoaXMudmlkZW8gPyB0aGlzLnZpZGVvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgICAgYXVkaW86IHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgICAgcGxhdGZvcm06IEludGVudC5NZXNzYWdlLlBsYXRmb3JtW3RoaXMucGxhdGZvcm0gPz8gMF1cbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgTWVzc2FnZSB7XG4gICAgLyoqXG4gICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIHRleHQ/OiBJbnRlbnQuTWVzc2FnZS5UZXh0LkFzT2JqZWN0O1xuICAgICAgaW1hZ2U/OiBJbnRlbnQuTWVzc2FnZS5JbWFnZS5Bc09iamVjdDtcbiAgICAgIHF1aWNrUmVwbGllcz86IEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcy5Bc09iamVjdDtcbiAgICAgIGNhcmQ/OiBJbnRlbnQuTWVzc2FnZS5DYXJkLkFzT2JqZWN0O1xuICAgICAgcGF5bG9hZD86IGdvb2dsZVByb3RvYnVmMDEwLlN0cnVjdC5Bc09iamVjdDtcbiAgICAgIHNpbXBsZVJlc3BvbnNlcz86IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcy5Bc09iamVjdDtcbiAgICAgIGJhc2ljQ2FyZD86IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5Bc09iamVjdDtcbiAgICAgIHN1Z2dlc3Rpb25zPzogSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbnMuQXNPYmplY3Q7XG4gICAgICBsaW5rT3V0U3VnZ2VzdGlvbj86IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uLkFzT2JqZWN0O1xuICAgICAgbGlzdFNlbGVjdD86IEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QuQXNPYmplY3Q7XG4gICAgICBjYXJvdXNlbFNlbGVjdD86IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0LkFzT2JqZWN0O1xuICAgICAgaHRtbFRleHQ/OiBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dC5Bc09iamVjdDtcbiAgICAgIHZpZGVvPzogSW50ZW50Lk1lc3NhZ2UuVmlkZW8uQXNPYmplY3Q7XG4gICAgICBhdWRpbz86IEludGVudC5NZXNzYWdlLkF1ZGlvLkFzT2JqZWN0O1xuICAgICAgcGxhdGZvcm0/OiBJbnRlbnQuTWVzc2FnZS5QbGF0Zm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBNZXNzYWdlXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICB0ZXh0PzogSW50ZW50Lk1lc3NhZ2UuVGV4dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBpbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIHF1aWNrUmVwbGllcz86IEludGVudC5NZXNzYWdlLlF1aWNrUmVwbGllcy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBjYXJkPzogSW50ZW50Lk1lc3NhZ2UuQ2FyZC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBwYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMTAuU3RydWN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIHNpbXBsZVJlc3BvbnNlcz86IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlcy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBiYXNpY0NhcmQ/OiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgc3VnZ2VzdGlvbnM/OiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9ucy5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICBsaW5rT3V0U3VnZ2VzdGlvbj86IEludGVudC5NZXNzYWdlLkxpbmtPdXRTdWdnZXN0aW9uLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIGxpc3RTZWxlY3Q/OiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0LkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIGNhcm91c2VsU2VsZWN0PzogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgaHRtbFRleHQ/OiBJbnRlbnQuTWVzc2FnZS5IVE1MVGV4dC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICB2aWRlbz86IEludGVudC5NZXNzYWdlLlZpZGVvLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgIGF1ZGlvPzogSW50ZW50Lk1lc3NhZ2UuQXVkaW8uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgcGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgfVxuICAgIGV4cG9ydCBlbnVtIE1lc3NhZ2VDYXNlIHtcbiAgICAgIG5vbmUgPSAwLFxuICAgICAgdGV4dCA9IDEsXG4gICAgICBpbWFnZSA9IDIsXG4gICAgICBxdWlja1JlcGxpZXMgPSAzLFxuICAgICAgY2FyZCA9IDQsXG4gICAgICBwYXlsb2FkID0gNSxcbiAgICAgIHNpbXBsZVJlc3BvbnNlcyA9IDYsXG4gICAgICBiYXNpY0NhcmQgPSA3LFxuICAgICAgc3VnZ2VzdGlvbnMgPSA4LFxuICAgICAgbGlua091dFN1Z2dlc3Rpb24gPSA5LFxuICAgICAgbGlzdFNlbGVjdCA9IDEwLFxuICAgICAgY2Fyb3VzZWxTZWxlY3QgPSAxMSxcbiAgICAgIGh0bWxUZXh0ID0gMTIsXG4gICAgICB2aWRlbyA9IDEzLFxuICAgICAgYXVkaW8gPSAxNFxuICAgIH1cbiAgICBleHBvcnQgZW51bSBQbGF0Zm9ybSB7XG4gICAgICBQTEFURk9STV9VTlNQRUNJRklFRCA9IDAsXG4gICAgICBGQUNFQk9PSyA9IDEsXG4gICAgICBTTEFDSyA9IDIsXG4gICAgICBURUxFR1JBTSA9IDMsXG4gICAgICBLSUsgPSA0LFxuICAgICAgU0tZUEUgPSA1LFxuICAgICAgTElORSA9IDYsXG4gICAgICBWSUJFUiA9IDcsXG4gICAgICBBQ1RJT05TX09OX0dPT0dMRSA9IDhcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5UZXh0XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIFRleHQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5UZXh0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGV4dCgpO1xuICAgICAgICBUZXh0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFRleHQpIHtcbiAgICAgICAgX2luc3RhbmNlLnRleHQgPSBfaW5zdGFuY2UudGV4dCB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogVGV4dCxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgKF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFRleHQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogVGV4dCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UudGV4dCAmJiBfaW5zdGFuY2UudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMSwgX2luc3RhbmNlLnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX3RleHQ/OiBzdHJpbmdbXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFRleHQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxUZXh0LkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGV4dCA9IChfdmFsdWUudGV4dCB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgVGV4dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGV4dCgpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgfVxuICAgICAgc2V0IHRleHQodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogVGV4dC5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogKHRoaXMudGV4dCB8fCBbXSkuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogVGV4dC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogKHRoaXMudGV4dCB8fCBbXSkuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIFRleHQge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgVGV4dFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgdGV4dD86IHN0cmluZ1tdO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFRleHRcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHRleHQ/OiBzdHJpbmdbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkltYWdlXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEltYWdlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuSW1hZ2UnO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBJbWFnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBJbWFnZSkge1xuICAgICAgICBfaW5zdGFuY2UuaW1hZ2VVcmkgPSBfaW5zdGFuY2UuaW1hZ2VVcmkgfHwgJyc7XG4gICAgICAgIF9pbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCA9IF9pbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogSW1hZ2UsXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5pbWFnZVVyaSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBJbWFnZS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBJbWFnZSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UuaW1hZ2VVcmkpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5pbWFnZVVyaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF9pbWFnZVVyaT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2FjY2Vzc2liaWxpdHlUZXh0Pzogc3RyaW5nO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSW1hZ2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxJbWFnZS5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLmltYWdlVXJpID0gX3ZhbHVlLmltYWdlVXJpO1xuICAgICAgICB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0ID0gX3ZhbHVlLmFjY2Vzc2liaWxpdHlUZXh0O1xuICAgICAgICBJbWFnZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgaW1hZ2VVcmkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJpO1xuICAgICAgfVxuICAgICAgc2V0IGltYWdlVXJpKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBhY2Nlc3NpYmlsaXR5VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICB9XG4gICAgICBzZXQgYWNjZXNzaWJpbGl0eVRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgSW1hZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogSW1hZ2UuQXNPYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGltYWdlVXJpOiB0aGlzLmltYWdlVXJpLFxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlUZXh0OiB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBJbWFnZS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW1hZ2VVcmk6IHRoaXMuaW1hZ2VVcmksXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ6IHRoaXMuYWNjZXNzaWJpbGl0eVRleHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBJbWFnZSB7XG4gICAgICAvKipcbiAgICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBJbWFnZVxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgaW1hZ2VVcmk/OiBzdHJpbmc7XG4gICAgICAgIGFjY2Vzc2liaWxpdHlUZXh0Pzogc3RyaW5nO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEltYWdlXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICBpbWFnZVVyaT86IHN0cmluZztcbiAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ/OiBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5RdWlja1JlcGxpZXNcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgUXVpY2tSZXBsaWVzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuUXVpY2tSZXBsaWVzJztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUXVpY2tSZXBsaWVzKCk7XG4gICAgICAgIFF1aWNrUmVwbGllcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBRdWlja1JlcGxpZXMpIHtcbiAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UucXVpY2tSZXBsaWVzID0gX2luc3RhbmNlLnF1aWNrUmVwbGllcyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogUXVpY2tSZXBsaWVzLFxuICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIChfaW5zdGFuY2UucXVpY2tSZXBsaWVzID0gX2luc3RhbmNlLnF1aWNrUmVwbGllcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgUXVpY2tSZXBsaWVzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgX2luc3RhbmNlOiBRdWlja1JlcGxpZXMsXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5xdWlja1JlcGxpZXMgJiYgX2luc3RhbmNlLnF1aWNrUmVwbGllcy5sZW5ndGgpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgX2luc3RhbmNlLnF1aWNrUmVwbGllcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9xdWlja1JlcGxpZXM/OiBzdHJpbmdbXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIFF1aWNrUmVwbGllcyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFF1aWNrUmVwbGllcy5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRpdGxlID0gX3ZhbHVlLnRpdGxlO1xuICAgICAgICB0aGlzLnF1aWNrUmVwbGllcyA9IChfdmFsdWUucXVpY2tSZXBsaWVzIHx8IFtdKS5zbGljZSgpO1xuICAgICAgICBRdWlja1JlcGxpZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICAgIH1cbiAgICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgcXVpY2tSZXBsaWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1aWNrUmVwbGllcztcbiAgICAgIH1cbiAgICAgIHNldCBxdWlja1JlcGxpZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3F1aWNrUmVwbGllcyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgUXVpY2tSZXBsaWVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICAgKi9cbiAgICAgIHRvT2JqZWN0KCk6IFF1aWNrUmVwbGllcy5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgcXVpY2tSZXBsaWVzOiAodGhpcy5xdWlja1JlcGxpZXMgfHwgW10pLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAqL1xuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICAgKi9cbiAgICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICk6IFF1aWNrUmVwbGllcy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgcXVpY2tSZXBsaWVzOiAodGhpcy5xdWlja1JlcGxpZXMgfHwgW10pLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBRdWlja1JlcGxpZXMge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgUXVpY2tSZXBsaWVzXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgcXVpY2tSZXBsaWVzPzogc3RyaW5nW107XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgUXVpY2tSZXBsaWVzXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgcXVpY2tSZXBsaWVzPzogc3RyaW5nW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DYXJkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIENhcmQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DYXJkJztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2FyZCgpO1xuICAgICAgICBDYXJkLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENhcmQpIHtcbiAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2Uuc3VidGl0bGUgPSBfaW5zdGFuY2Uuc3VidGl0bGUgfHwgJyc7XG4gICAgICAgIF9pbnN0YW5jZS5pbWFnZVVyaSA9IF9pbnN0YW5jZS5pbWFnZVVyaSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLmJ1dHRvbnMgPSBfaW5zdGFuY2UuYnV0dG9ucyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogQ2FyZCxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBfaW5zdGFuY2Uuc3VidGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5pbWFnZVVyaSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBJbnRlbnQuTWVzc2FnZS5DYXJkLkJ1dHRvbigpO1xuICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjQsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2FyZC5CdXR0b24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIChfaW5zdGFuY2UuYnV0dG9ucyA9IF9pbnN0YW5jZS5idXR0b25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENhcmQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogQ2FyZCwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5zdWJ0aXRsZSkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnN1YnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luc3RhbmNlLmltYWdlVXJpKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuaW1hZ2VVcmkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucyAmJiBfaW5zdGFuY2UuYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX3N1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfaW1hZ2VVcmk/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9idXR0b25zPzogSW50ZW50Lk1lc3NhZ2UuQ2FyZC5CdXR0b25bXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIENhcmQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDYXJkLkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgICAgIHRoaXMuc3VidGl0bGUgPSBfdmFsdWUuc3VidGl0bGU7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmkgPSBfdmFsdWUuaW1hZ2VVcmk7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IChfdmFsdWUuYnV0dG9ucyB8fCBbXSkubWFwKFxuICAgICAgICAgIG0gPT4gbmV3IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uKG0pXG4gICAgICAgICk7XG4gICAgICAgIENhcmQucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICAgIH1cbiAgICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgc3VidGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnRpdGxlO1xuICAgICAgfVxuICAgICAgc2V0IHN1YnRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc3VidGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBpbWFnZVVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2VVcmk7XG4gICAgICB9XG4gICAgICBzZXQgaW1hZ2VVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9pbWFnZVVyaSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGJ1dHRvbnMoKTogSW50ZW50Lk1lc3NhZ2UuQ2FyZC5CdXR0b25bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICAgICAgfVxuICAgICAgc2V0IGJ1dHRvbnModmFsdWU6IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYnV0dG9ucyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgQ2FyZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBDYXJkLkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICBzdWJ0aXRsZTogdGhpcy5zdWJ0aXRsZSxcbiAgICAgICAgICBpbWFnZVVyaTogdGhpcy5pbWFnZVVyaSxcbiAgICAgICAgICBidXR0b25zOiAodGhpcy5idXR0b25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBDYXJkLkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICBzdWJ0aXRsZTogdGhpcy5zdWJ0aXRsZSxcbiAgICAgICAgICBpbWFnZVVyaTogdGhpcy5pbWFnZVVyaSxcbiAgICAgICAgICBidXR0b25zOiAodGhpcy5idXR0b25zIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIENhcmQge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ2FyZFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgICBpbWFnZVVyaT86IHN0cmluZztcbiAgICAgICAgYnV0dG9ucz86IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uLkFzT2JqZWN0W107XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ2FyZFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgICBpbWFnZVVyaT86IHN0cmluZztcbiAgICAgICAgYnV0dG9ucz86IEludGVudC5NZXNzYWdlLkNhcmQuQnV0dG9uLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQnV0dG9uXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBjbGFzcyBCdXR0b24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICAgIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJ1dHRvbic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJ1dHRvbigpO1xuICAgICAgICAgIEJ1dHRvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJ1dHRvbikge1xuICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgJyc7XG4gICAgICAgICAgX2luc3RhbmNlLnBvc3RiYWNrID0gX2luc3RhbmNlLnBvc3RiYWNrIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgIF9pbnN0YW5jZTogQnV0dG9uLFxuICAgICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgICApIHtcbiAgICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9pbnN0YW5jZS50ZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2UucG9zdGJhY2sgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEJ1dHRvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgICBfaW5zdGFuY2U6IEJ1dHRvbixcbiAgICAgICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKF9pbnN0YW5jZS50ZXh0KSB7XG4gICAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9pbnN0YW5jZS5wb3N0YmFjaykge1xuICAgICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucG9zdGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX3RleHQ/OiBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgX3Bvc3RiYWNrPzogc3RyaW5nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQnV0dG9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJ1dHRvbi5Bc09iamVjdD4pIHtcbiAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgICAgdGhpcy50ZXh0ID0gX3ZhbHVlLnRleHQ7XG4gICAgICAgICAgdGhpcy5wb3N0YmFjayA9IF92YWx1ZS5wb3N0YmFjaztcbiAgICAgICAgICBCdXR0b24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0ZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgcG9zdGJhY2soKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zdGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHBvc3RiYWNrKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9wb3N0YmFjayA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICAgIEJ1dHRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICAgICAqL1xuICAgICAgICB0b09iamVjdCgpOiBCdXR0b24uQXNPYmplY3Qge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgICBwb3N0YmFjazogdGhpcy5wb3N0YmFja1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgICAqL1xuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICovXG4gICAgICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICAgICk6IEJ1dHRvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHBvc3RiYWNrOiB0aGlzLnBvc3RiYWNrXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXhwb3J0IG1vZHVsZSBCdXR0b24ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJ1dHRvblxuICAgICAgICAgKi9cbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgICAgdGV4dD86IHN0cmluZztcbiAgICAgICAgICBwb3N0YmFjaz86IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBCdXR0b25cbiAgICAgICAgICovXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICAgICAgcG9zdGJhY2s/OiBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlNpbXBsZVJlc3BvbnNlXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIFNpbXBsZVJlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU2ltcGxlUmVzcG9uc2UnO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTaW1wbGVSZXNwb25zZSgpO1xuICAgICAgICBTaW1wbGVSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTaW1wbGVSZXNwb25zZSkge1xuICAgICAgICBfaW5zdGFuY2UudGV4dFRvU3BlZWNoID0gX2luc3RhbmNlLnRleHRUb1NwZWVjaCB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLnNzbWwgPSBfaW5zdGFuY2Uuc3NtbCB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLmRpc3BsYXlUZXh0ID0gX2luc3RhbmNlLmRpc3BsYXlUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBTaW1wbGVSZXNwb25zZSxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnRleHRUb1NwZWVjaCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnNzbWwgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5kaXNwbGF5VGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgU2ltcGxlUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgICBfaW5zdGFuY2U6IFNpbXBsZVJlc3BvbnNlLFxuICAgICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICAgICkge1xuICAgICAgICBpZiAoX2luc3RhbmNlLnRleHRUb1NwZWVjaCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRleHRUb1NwZWVjaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5zc21sKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc3NtbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnN0YW5jZS5kaXNwbGF5VGV4dCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmRpc3BsYXlUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF90ZXh0VG9TcGVlY2g/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9zc21sPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfZGlzcGxheVRleHQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTaW1wbGVSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNpbXBsZVJlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudGV4dFRvU3BlZWNoID0gX3ZhbHVlLnRleHRUb1NwZWVjaDtcbiAgICAgICAgdGhpcy5zc21sID0gX3ZhbHVlLnNzbWw7XG4gICAgICAgIHRoaXMuZGlzcGxheVRleHQgPSBfdmFsdWUuZGlzcGxheVRleHQ7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0ZXh0VG9TcGVlY2goKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRUb1NwZWVjaDtcbiAgICAgIH1cbiAgICAgIHNldCB0ZXh0VG9TcGVlY2godmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90ZXh0VG9TcGVlY2ggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBzc21sKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zc21sO1xuICAgICAgfVxuICAgICAgc2V0IHNzbWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zc21sID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZGlzcGxheVRleHQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlUZXh0O1xuICAgICAgfVxuICAgICAgc2V0IGRpc3BsYXlUZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheVRleHQgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICAgKi9cbiAgICAgIHRvT2JqZWN0KCk6IFNpbXBsZVJlc3BvbnNlLkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0VG9TcGVlY2g6IHRoaXMudGV4dFRvU3BlZWNoLFxuICAgICAgICAgIHNzbWw6IHRoaXMuc3NtbCxcbiAgICAgICAgICBkaXNwbGF5VGV4dDogdGhpcy5kaXNwbGF5VGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogU2ltcGxlUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHRUb1NwZWVjaDogdGhpcy50ZXh0VG9TcGVlY2gsXG4gICAgICAgICAgc3NtbDogdGhpcy5zc21sLFxuICAgICAgICAgIGRpc3BsYXlUZXh0OiB0aGlzLmRpc3BsYXlUZXh0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgU2ltcGxlUmVzcG9uc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2ltcGxlUmVzcG9uc2VcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgIHRleHRUb1NwZWVjaD86IHN0cmluZztcbiAgICAgICAgc3NtbD86IHN0cmluZztcbiAgICAgICAgZGlzcGxheVRleHQ/OiBzdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU2ltcGxlUmVzcG9uc2VcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHRleHRUb1NwZWVjaD86IHN0cmluZztcbiAgICAgICAgc3NtbD86IHN0cmluZztcbiAgICAgICAgZGlzcGxheVRleHQ/OiBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TaW1wbGVSZXNwb25zZXNcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgU2ltcGxlUmVzcG9uc2VzIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuU2ltcGxlUmVzcG9uc2VzJztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2ltcGxlUmVzcG9uc2VzKCk7XG4gICAgICAgIFNpbXBsZVJlc3BvbnNlcy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBTaW1wbGVSZXNwb25zZXMpIHtcbiAgICAgICAgX2luc3RhbmNlLnNpbXBsZVJlc3BvbnNlcyA9IF9pbnN0YW5jZS5zaW1wbGVSZXNwb25zZXMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBfaW5zdGFuY2U6IFNpbXBsZVJlc3BvbnNlcyxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZSgpO1xuICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIChfaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzID1cbiAgICAgICAgICAgICAgICBfaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgU2ltcGxlUmVzcG9uc2VzLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgX2luc3RhbmNlOiBTaW1wbGVSZXNwb25zZXMsXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzICYmIF9pbnN0YW5jZS5zaW1wbGVSZXNwb25zZXMubGVuZ3RoKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2ltcGxlUmVzcG9uc2VzIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlIF9zaW1wbGVSZXNwb25zZXM/OiBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZVtdO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU2ltcGxlUmVzcG9uc2VzIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2ltcGxlUmVzcG9uc2VzLkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMuc2ltcGxlUmVzcG9uc2VzID0gKF92YWx1ZS5zaW1wbGVSZXNwb25zZXMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZShtKVxuICAgICAgICApO1xuICAgICAgICBTaW1wbGVSZXNwb25zZXMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHNpbXBsZVJlc3BvbnNlcygpOiBJbnRlbnQuTWVzc2FnZS5TaW1wbGVSZXNwb25zZVtdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZVJlc3BvbnNlcztcbiAgICAgIH1cbiAgICAgIHNldCBzaW1wbGVSZXNwb25zZXModmFsdWU6IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2ltcGxlUmVzcG9uc2VzID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBTaW1wbGVSZXNwb25zZXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogU2ltcGxlUmVzcG9uc2VzLkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaW1wbGVSZXNwb25zZXM6ICh0aGlzLnNpbXBsZVJlc3BvbnNlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogU2ltcGxlUmVzcG9uc2VzLkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaW1wbGVSZXNwb25zZXM6ICh0aGlzLnNpbXBsZVJlc3BvbnNlcyB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgICAgIG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgU2ltcGxlUmVzcG9uc2VzIHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFNpbXBsZVJlc3BvbnNlc1xuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgc2ltcGxlUmVzcG9uc2VzPzogSW50ZW50Lk1lc3NhZ2UuU2ltcGxlUmVzcG9uc2UuQXNPYmplY3RbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTaW1wbGVSZXNwb25zZXNcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHNpbXBsZVJlc3BvbnNlcz86IEludGVudC5NZXNzYWdlLlNpbXBsZVJlc3BvbnNlLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQmFzaWNDYXJkXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEJhc2ljQ2FyZCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJhc2ljQ2FyZCc7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhc2ljQ2FyZCgpO1xuICAgICAgICBCYXNpY0NhcmQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQmFzaWNDYXJkKSB7XG4gICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLnN1YnRpdGxlID0gX2luc3RhbmNlLnN1YnRpdGxlIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UuZm9ybWF0dGVkVGV4dCA9IF9pbnN0YW5jZS5mb3JtYXR0ZWRUZXh0IHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgPSBfaW5zdGFuY2UuaW1hZ2UgfHwgdW5kZWZpbmVkO1xuICAgICAgICBfaW5zdGFuY2UuYnV0dG9ucyA9IF9pbnN0YW5jZS5idXR0b25zIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBCYXNpY0NhcmQsXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnN1YnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UuZm9ybWF0dGVkVGV4dCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmltYWdlID0gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKCk7XG4gICAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLmltYWdlLFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uKCk7XG4gICAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNSxcbiAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAoX2luc3RhbmNlLmJ1dHRvbnMgPSBfaW5zdGFuY2UuYnV0dG9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI1XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBCYXNpY0NhcmQucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgICBfaW5zdGFuY2U6IEJhc2ljQ2FyZCxcbiAgICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgICApIHtcbiAgICAgICAgaWYgKF9pbnN0YW5jZS50aXRsZSkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luc3RhbmNlLnN1YnRpdGxlKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2Uuc3VidGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuZm9ybWF0dGVkVGV4dCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmZvcm1hdHRlZFRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuaW1hZ2UpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgYXMgYW55LFxuICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuYnV0dG9ucyAmJiBfaW5zdGFuY2UuYnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgICAgNSxcbiAgICAgICAgICAgIF9pbnN0YW5jZS5idXR0b25zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9mb3JtYXR0ZWRUZXh0Pzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfaW1hZ2U/OiBJbnRlbnQuTWVzc2FnZS5JbWFnZTtcbiAgICAgIHByaXZhdGUgX2J1dHRvbnM/OiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uW107XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYXNpY0NhcmQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCYXNpY0NhcmQuQXNPYmplY3Q+KSB7XG4gICAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICAgICAgdGhpcy5zdWJ0aXRsZSA9IF92YWx1ZS5zdWJ0aXRsZTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZWRUZXh0ID0gX3ZhbHVlLmZvcm1hdHRlZFRleHQ7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBfdmFsdWUuaW1hZ2VcbiAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZShfdmFsdWUuaW1hZ2UpXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IChfdmFsdWUuYnV0dG9ucyB8fCBbXSkubWFwKFxuICAgICAgICAgIG0gPT4gbmV3IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24obSlcbiAgICAgICAgKTtcbiAgICAgICAgQmFzaWNDYXJkLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHN1YnRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJ0aXRsZTtcbiAgICAgIH1cbiAgICAgIHNldCBzdWJ0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N1YnRpdGxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBnZXQgZm9ybWF0dGVkVGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkVGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCBmb3JtYXR0ZWRUZXh0KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZm9ybWF0dGVkVGV4dCA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGltYWdlKCk6IEludGVudC5NZXNzYWdlLkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xuICAgICAgfVxuICAgICAgc2V0IGltYWdlKHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5JbWFnZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGJ1dHRvbnMoKTogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbltdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1dHRvbnM7XG4gICAgICB9XG4gICAgICBzZXQgYnV0dG9ucyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbnMgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIEJhc2ljQ2FyZC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBCYXNpY0NhcmQuQXNPYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLnN1YnRpdGxlLFxuICAgICAgICAgIGZvcm1hdHRlZFRleHQ6IHRoaXMuZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSA/IHRoaXMuaW1hZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBidXR0b25zOiAodGhpcy5idXR0b25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBCYXNpY0NhcmQuQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgIHN1YnRpdGxlOiB0aGlzLnN1YnRpdGxlLFxuICAgICAgICAgIGZvcm1hdHRlZFRleHQ6IHRoaXMuZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSA/IHRoaXMuaW1hZ2UudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgICAgIGJ1dHRvbnM6ICh0aGlzLmJ1dHRvbnMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgQmFzaWNDYXJkIHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJhc2ljQ2FyZFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgICBmb3JtYXR0ZWRUZXh0Pzogc3RyaW5nO1xuICAgICAgICBpbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlLkFzT2JqZWN0O1xuICAgICAgICBidXR0b25zPzogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5Bc09iamVjdFtdO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJhc2ljQ2FyZFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgICAgICBmb3JtYXR0ZWRUZXh0Pzogc3RyaW5nO1xuICAgICAgICBpbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgICAgYnV0dG9ucz86IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5CdXR0b25cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGNsYXNzIEJ1dHRvbiBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQnV0dG9uJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQnV0dG9uKCk7XG4gICAgICAgICAgQnV0dG9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogQnV0dG9uKSB7XG4gICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICAgIF9pbnN0YW5jZS5vcGVuVXJpQWN0aW9uID0gX2luc3RhbmNlLm9wZW5VcmlBY3Rpb24gfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgIF9pbnN0YW5jZTogQnV0dG9uLFxuICAgICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgICApIHtcbiAgICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLm9wZW5VcmlBY3Rpb24gPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIF9pbnN0YW5jZS5vcGVuVXJpQWN0aW9uLFxuICAgICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQnV0dG9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgICAgIF9pbnN0YW5jZTogQnV0dG9uLFxuICAgICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoX2luc3RhbmNlLnRpdGxlKSB7XG4gICAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfaW5zdGFuY2Uub3BlblVyaUFjdGlvbikge1xuICAgICAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5vcGVuVXJpQWN0aW9uIGFzIGFueSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uXG4gICAgICAgICAgICAgICAgLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICAgICAgICBwcml2YXRlIF9vcGVuVXJpQWN0aW9uPzogSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQnV0dG9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJ1dHRvbi5Bc09iamVjdD4pIHtcbiAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICAgICAgICB0aGlzLm9wZW5VcmlBY3Rpb24gPSBfdmFsdWUub3BlblVyaUFjdGlvblxuICAgICAgICAgICAgPyBuZXcgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uKFxuICAgICAgICAgICAgICAgIF92YWx1ZS5vcGVuVXJpQWN0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgIEJ1dHRvbi5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgb3BlblVyaUFjdGlvbigpOlxuICAgICAgICAgIHwgSW50ZW50Lk1lc3NhZ2UuQmFzaWNDYXJkLkJ1dHRvbi5PcGVuVXJpQWN0aW9uXG4gICAgICAgICAgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vcGVuVXJpQWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNldCBvcGVuVXJpQWN0aW9uKFxuICAgICAgICAgIHZhbHVlOiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLk9wZW5VcmlBY3Rpb24gfCB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fb3BlblVyaUFjdGlvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICAgIEJ1dHRvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICAgICAqL1xuICAgICAgICB0b09iamVjdCgpOiBCdXR0b24uQXNPYmplY3Qge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIG9wZW5VcmlBY3Rpb246IHRoaXMub3BlblVyaUFjdGlvblxuICAgICAgICAgICAgICA/IHRoaXMub3BlblVyaUFjdGlvbi50b09iamVjdCgpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAgICovXG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICAgKTogQnV0dG9uLkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBvcGVuVXJpQWN0aW9uOiB0aGlzLm9wZW5VcmlBY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGlzLm9wZW5VcmlBY3Rpb24udG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXhwb3J0IG1vZHVsZSBCdXR0b24ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJ1dHRvblxuICAgICAgICAgKi9cbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgICAgb3BlblVyaUFjdGlvbj86IEludGVudC5NZXNzYWdlLkJhc2ljQ2FyZC5CdXR0b24uT3BlblVyaUFjdGlvbi5Bc09iamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBCdXR0b25cbiAgICAgICAgICovXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIG9wZW5VcmlBY3Rpb24/OiBJbnRlbnQuTWVzc2FnZS5CYXNpY0NhcmQuQnV0dG9uLk9wZW5VcmlBY3Rpb24uQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuT3BlblVyaUFjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgZXhwb3J0IGNsYXNzIE9wZW5VcmlBY3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuT3BlblVyaUFjdGlvbic7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wZW5VcmlBY3Rpb24oKTtcbiAgICAgICAgICAgIE9wZW5VcmlBY3Rpb24uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAgICovXG4gICAgICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IE9wZW5VcmlBY3Rpb24pIHtcbiAgICAgICAgICAgIF9pbnN0YW5jZS51cmkgPSBfaW5zdGFuY2UudXJpIHx8ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgICAgICBfaW5zdGFuY2U6IE9wZW5VcmlBY3Rpb24sXG4gICAgICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICBfaW5zdGFuY2UudXJpID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPcGVuVXJpQWN0aW9uLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICAgICAgICBfaW5zdGFuY2U6IE9wZW5VcmlBY3Rpb24sXG4gICAgICAgICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChfaW5zdGFuY2UudXJpKSB7XG4gICAgICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnVyaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJpdmF0ZSBfdXJpPzogc3RyaW5nO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgT3BlblVyaUFjdGlvbiB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlblVyaUFjdGlvbi5Bc09iamVjdD4pIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXJpID0gX3ZhbHVlLnVyaTtcbiAgICAgICAgICAgIE9wZW5VcmlBY3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZXQgdXJpKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXQgdXJpKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgICAgICBPcGVuVXJpQWN0aW9uLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRvT2JqZWN0KCk6IE9wZW5VcmlBY3Rpb24uQXNPYmplY3Qge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdXJpOiB0aGlzLnVyaVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICAgICApOiBPcGVuVXJpQWN0aW9uLkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHVyaTogdGhpcy51cmlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCBtb2R1bGUgT3BlblVyaUFjdGlvbiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE9wZW5VcmlBY3Rpb25cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgICAgIHVyaT86IHN0cmluZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBPcGVuVXJpQWN0aW9uXG4gICAgICAgICAgICovXG4gICAgICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgICAgICB1cmk/OiBzdHJpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TdWdnZXN0aW9uXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIFN1Z2dlc3Rpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TdWdnZXN0aW9uJztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU3VnZ2VzdGlvbigpO1xuICAgICAgICBTdWdnZXN0aW9uLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN1Z2dlc3Rpb24pIHtcbiAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBTdWdnZXN0aW9uLFxuICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFN1Z2dlc3Rpb24ucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgICBfaW5zdGFuY2U6IFN1Z2dlc3Rpb24sXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTdWdnZXN0aW9uIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICAgKi9cbiAgICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U3VnZ2VzdGlvbi5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRpdGxlID0gX3ZhbHVlLnRpdGxlO1xuICAgICAgICBTdWdnZXN0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgU3VnZ2VzdGlvbi5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBTdWdnZXN0aW9uLkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogU3VnZ2VzdGlvbi5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBTdWdnZXN0aW9uIHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFN1Z2dlc3Rpb25cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIFN1Z2dlc3Rpb25cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuU3VnZ2VzdGlvbnNcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgU3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5TdWdnZXN0aW9ucyc7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFN1Z2dlc3Rpb25zKCk7XG4gICAgICAgIFN1Z2dlc3Rpb25zLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIF9pbnN0YW5jZS5zdWdnZXN0aW9ucyA9IF9pbnN0YW5jZS5zdWdnZXN0aW9ucyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogU3VnZ2VzdGlvbnMsXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbigpO1xuICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKF9pbnN0YW5jZS5zdWdnZXN0aW9ucyA9IF9pbnN0YW5jZS5zdWdnZXN0aW9ucyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdWdnZXN0aW9ucy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICAgIF9pbnN0YW5jZTogU3VnZ2VzdGlvbnMsXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2Uuc3VnZ2VzdGlvbnMgJiYgX2luc3RhbmNlLnN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgX2luc3RhbmNlLnN1Z2dlc3Rpb25zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX3N1Z2dlc3Rpb25zPzogSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbltdO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgU3VnZ2VzdGlvbnMgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTdWdnZXN0aW9ucy5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gKF92YWx1ZS5zdWdnZXN0aW9ucyB8fCBbXSkubWFwKFxuICAgICAgICAgIG0gPT4gbmV3IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb24obSlcbiAgICAgICAgKTtcbiAgICAgICAgU3VnZ2VzdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHN1Z2dlc3Rpb25zKCk6IEludGVudC5NZXNzYWdlLlN1Z2dlc3Rpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWdnZXN0aW9ucztcbiAgICAgIH1cbiAgICAgIHNldCBzdWdnZXN0aW9ucyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBTdWdnZXN0aW9ucy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBTdWdnZXN0aW9ucy5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VnZ2VzdGlvbnM6ICh0aGlzLnN1Z2dlc3Rpb25zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBTdWdnZXN0aW9ucy5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VnZ2VzdGlvbnM6ICh0aGlzLnN1Z2dlc3Rpb25zIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICAgICAgbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBTdWdnZXN0aW9ucyB7XG4gICAgICAvKipcbiAgICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBTdWdnZXN0aW9uc1xuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgc3VnZ2VzdGlvbnM/OiBJbnRlbnQuTWVzc2FnZS5TdWdnZXN0aW9uLkFzT2JqZWN0W107XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgU3VnZ2VzdGlvbnNcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHN1Z2dlc3Rpb25zPzogSW50ZW50Lk1lc3NhZ2UuU3VnZ2VzdGlvbi5Bc1Byb3RvYnVmSlNPTltdIHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkxpbmtPdXRTdWdnZXN0aW9uXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIExpbmtPdXRTdWdnZXN0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuTGlua091dFN1Z2dlc3Rpb24nO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaW5rT3V0U3VnZ2VzdGlvbigpO1xuICAgICAgICBMaW5rT3V0U3VnZ2VzdGlvbi5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaW5rT3V0U3VnZ2VzdGlvbikge1xuICAgICAgICBfaW5zdGFuY2UuZGVzdGluYXRpb25OYW1lID0gX2luc3RhbmNlLmRlc3RpbmF0aW9uTmFtZSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLnVyaSA9IF9pbnN0YW5jZS51cmkgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBfaW5zdGFuY2U6IExpbmtPdXRTdWdnZXN0aW9uLFxuICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UuZGVzdGluYXRpb25OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UudXJpID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBMaW5rT3V0U3VnZ2VzdGlvbi5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICAgIF9pbnN0YW5jZTogTGlua091dFN1Z2dlc3Rpb24sXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UuZGVzdGluYXRpb25OYW1lKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UuZGVzdGluYXRpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luc3RhbmNlLnVyaSkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnVyaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfZGVzdGluYXRpb25OYW1lPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfdXJpPzogc3RyaW5nO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlua091dFN1Z2dlc3Rpb24gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaW5rT3V0U3VnZ2VzdGlvbi5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uTmFtZSA9IF92YWx1ZS5kZXN0aW5hdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudXJpID0gX3ZhbHVlLnVyaTtcbiAgICAgICAgTGlua091dFN1Z2dlc3Rpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IGRlc3RpbmF0aW9uTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25OYW1lO1xuICAgICAgfVxuICAgICAgc2V0IGRlc3RpbmF0aW9uTmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uTmFtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IHVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgfVxuICAgICAgc2V0IHVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgTGlua091dFN1Z2dlc3Rpb24uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogTGlua091dFN1Z2dlc3Rpb24uQXNPYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRlc3RpbmF0aW9uTmFtZTogdGhpcy5kZXN0aW5hdGlvbk5hbWUsXG4gICAgICAgICAgdXJpOiB0aGlzLnVyaVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogTGlua091dFN1Z2dlc3Rpb24uQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRlc3RpbmF0aW9uTmFtZTogdGhpcy5kZXN0aW5hdGlvbk5hbWUsXG4gICAgICAgICAgdXJpOiB0aGlzLnVyaVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIExpbmtPdXRTdWdnZXN0aW9uIHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpbmtPdXRTdWdnZXN0aW9uXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICBkZXN0aW5hdGlvbk5hbWU/OiBzdHJpbmc7XG4gICAgICAgIHVyaT86IHN0cmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaW5rT3V0U3VnZ2VzdGlvblxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgZGVzdGluYXRpb25OYW1lPzogc3RyaW5nO1xuICAgICAgICB1cmk/OiBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5MaXN0U2VsZWN0XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIExpc3RTZWxlY3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0U2VsZWN0JztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlbGVjdCgpO1xuICAgICAgICBMaXN0U2VsZWN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IExpc3RTZWxlY3QpIHtcbiAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UuaXRlbXMgPSBfaW5zdGFuY2UuaXRlbXMgfHwgW107XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBfaW5zdGFuY2U6IExpc3RTZWxlY3QsXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0oKTtcbiAgICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QuSXRlbS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKF9pbnN0YW5jZS5pdGVtcyA9IF9pbnN0YW5jZS5pdGVtcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBMaXN0U2VsZWN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgX2luc3RhbmNlOiBMaXN0U2VsZWN0LFxuICAgICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICAgICkge1xuICAgICAgICBpZiAoX2luc3RhbmNlLnRpdGxlKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuaXRlbXMgJiYgX2luc3RhbmNlLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgX2luc3RhbmNlLml0ZW1zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QuSXRlbS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGl0bGU/OiBzdHJpbmc7XG4gICAgICBwcml2YXRlIF9pdGVtcz86IEludGVudC5NZXNzYWdlLkxpc3RTZWxlY3QuSXRlbVtdO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdFNlbGVjdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZWxlY3QuQXNPYmplY3Q+KSB7XG4gICAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IChfdmFsdWUuaXRlbXMgfHwgW10pLm1hcChcbiAgICAgICAgICBtID0+IG5ldyBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0obSlcbiAgICAgICAgKTtcbiAgICAgICAgTGlzdFNlbGVjdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgICB9XG4gICAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgfVxuICAgICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBpdGVtcygpOiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW1bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICAgIH1cbiAgICAgIHNldCBpdGVtcyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuTGlzdFNlbGVjdC5JdGVtW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIExpc3RTZWxlY3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogTGlzdFNlbGVjdC5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgaXRlbXM6ICh0aGlzLml0ZW1zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBMaXN0U2VsZWN0LkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICBpdGVtczogKHRoaXMuaXRlbXMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgTGlzdFNlbGVjdCB7XG4gICAgICAvKipcbiAgICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U2VsZWN0XG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgaXRlbXM/OiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0uQXNPYmplY3RbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0U2VsZWN0XG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgaXRlbXM/OiBJbnRlbnQuTWVzc2FnZS5MaXN0U2VsZWN0Lkl0ZW0uQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JdGVtXG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBjbGFzcyBJdGVtIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5JdGVtJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSXRlbSgpO1xuICAgICAgICAgIEl0ZW0uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBJdGVtKSB7XG4gICAgICAgICAgX2luc3RhbmNlLmluZm8gPSBfaW5zdGFuY2UuaW5mbyB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX2luc3RhbmNlLnRpdGxlIHx8ICcnO1xuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgPSBfaW5zdGFuY2UuaW1hZ2UgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgIF9pbnN0YW5jZTogSXRlbSxcbiAgICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2UuaW5mbyA9IG5ldyBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbygpO1xuICAgICAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICBfaW5zdGFuY2UuaW5mbyxcbiAgICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2UudGl0bGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLmltYWdlID0gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKCk7XG4gICAgICAgICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgIF9pbnN0YW5jZS5pbWFnZSxcbiAgICAgICAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkltYWdlLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBJdGVtLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKF9pbnN0YW5jZTogSXRlbSwgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgICAgaWYgKF9pbnN0YW5jZS5pbmZvKSB7XG4gICAgICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmluZm8gYXMgYW55LFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mby5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9pbnN0YW5jZS50aXRsZSkge1xuICAgICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UudGl0bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX2luc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDMsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfaW5zdGFuY2UuaW1hZ2UpIHtcbiAgICAgICAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UgYXMgYW55LFxuICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5JbWFnZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF9pbmZvPzogSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm87XG4gICAgICAgIHByaXZhdGUgX3RpdGxlPzogc3RyaW5nO1xuICAgICAgICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBfaW1hZ2U/OiBJbnRlbnQuTWVzc2FnZS5JbWFnZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEl0ZW0gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SXRlbS5Bc09iamVjdD4pIHtcbiAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgICAgdGhpcy5pbmZvID0gX3ZhbHVlLmluZm9cbiAgICAgICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvKF92YWx1ZS5pbmZvKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IF92YWx1ZS50aXRsZTtcbiAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gX3ZhbHVlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHRoaXMuaW1hZ2UgPSBfdmFsdWUuaW1hZ2VcbiAgICAgICAgICAgID8gbmV3IEludGVudC5NZXNzYWdlLkltYWdlKF92YWx1ZS5pbWFnZSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgIEl0ZW0ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBpbmZvKCk6IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5mbztcbiAgICAgICAgfVxuICAgICAgICBzZXQgaW5mbyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9pbmZvID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGdldCBpbWFnZSgpOiBJbnRlbnQuTWVzc2FnZS5JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlO1xuICAgICAgICB9XG4gICAgICAgIHNldCBpbWFnZSh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICAgIEl0ZW0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICAgKi9cbiAgICAgICAgdG9PYmplY3QoKTogSXRlbS5Bc09iamVjdCB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZm86IHRoaXMuaW5mbyA/IHRoaXMuaW5mby50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlID8gdGhpcy5pbWFnZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAgICovXG4gICAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICAgKTogSXRlbS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZm86IHRoaXMuaW5mbyA/IHRoaXMuaW5mby50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UgPyB0aGlzLmltYWdlLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV4cG9ydCBtb2R1bGUgSXRlbSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSXRlbVxuICAgICAgICAgKi9cbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgICAgaW5mbz86IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvLkFzT2JqZWN0O1xuICAgICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgIGltYWdlPzogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UuQXNPYmplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSXRlbVxuICAgICAgICAgKi9cbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgICAgaW5mbz86IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICBpbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuQ2Fyb3VzZWxTZWxlY3RcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZWxlY3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DYXJvdXNlbFNlbGVjdCc7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENhcm91c2VsU2VsZWN0KCk7XG4gICAgICAgIENhcm91c2VsU2VsZWN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IENhcm91c2VsU2VsZWN0KSB7XG4gICAgICAgIF9pbnN0YW5jZS5pdGVtcyA9IF9pbnN0YW5jZS5pdGVtcyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogQ2Fyb3VzZWxTZWxlY3QsXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbSgpO1xuICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgKF9pbnN0YW5jZS5pdGVtcyA9IF9pbnN0YW5jZS5pdGVtcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDYXJvdXNlbFNlbGVjdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgICAgIF9pbnN0YW5jZTogQ2Fyb3VzZWxTZWxlY3QsXG4gICAgICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICAgICAgKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UuaXRlbXMgJiYgX2luc3RhbmNlLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgX2luc3RhbmNlLml0ZW1zIGFzIGFueSxcbiAgICAgICAgICAgIEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW0uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX2l0ZW1zPzogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbVtdO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ2Fyb3VzZWxTZWxlY3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDYXJvdXNlbFNlbGVjdC5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLml0ZW1zID0gKF92YWx1ZS5pdGVtcyB8fCBbXSkubWFwKFxuICAgICAgICAgIG0gPT4gbmV3IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW0obSlcbiAgICAgICAgKTtcbiAgICAgICAgQ2Fyb3VzZWxTZWxlY3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IGl0ZW1zKCk6IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW1bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICAgIH1cbiAgICAgIHNldCBpdGVtcyh2YWx1ZTogSW50ZW50Lk1lc3NhZ2UuQ2Fyb3VzZWxTZWxlY3QuSXRlbVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBDYXJvdXNlbFNlbGVjdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBDYXJvdXNlbFNlbGVjdC5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXRlbXM6ICh0aGlzLml0ZW1zIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgKi9cbiAgICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgICAgICovXG4gICAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICApOiBDYXJvdXNlbFNlbGVjdC5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXRlbXM6ICh0aGlzLml0ZW1zIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgbW9kdWxlIENhcm91c2VsU2VsZWN0IHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIENhcm91c2VsU2VsZWN0XG4gICAgICAgKi9cbiAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICBpdGVtcz86IEludGVudC5NZXNzYWdlLkNhcm91c2VsU2VsZWN0Lkl0ZW0uQXNPYmplY3RbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBDYXJvdXNlbFNlbGVjdFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgaXRlbXM/OiBJbnRlbnQuTWVzc2FnZS5DYXJvdXNlbFNlbGVjdC5JdGVtLkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuSXRlbVxuICAgICAgICovXG4gICAgICBleHBvcnQgY2xhc3MgSXRlbSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuSXRlbSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEl0ZW0oKTtcbiAgICAgICAgICBJdGVtLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogSXRlbSkge1xuICAgICAgICAgIF9pbnN0YW5jZS5pbmZvID0gX2luc3RhbmNlLmluZm8gfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIF9pbnN0YW5jZS50aXRsZSA9IF9pbnN0YW5jZS50aXRsZSB8fCAnJztcbiAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfaW5zdGFuY2UuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgICAgX2luc3RhbmNlLmltYWdlID0gX2luc3RhbmNlLmltYWdlIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgICBfaW5zdGFuY2U6IEl0ZW0sXG4gICAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICAgICkge1xuICAgICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLmluZm8gPSBuZXcgSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8oKTtcbiAgICAgICAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgX2luc3RhbmNlLmluZm8sXG4gICAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLnRpdGxlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9pbnN0YW5jZS5pbWFnZSA9IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZSgpO1xuICAgICAgICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICBfaW5zdGFuY2UuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICBJbnRlbnQuTWVzc2FnZS5JbWFnZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgSXRlbS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IEl0ZW0sIF93cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgICAgICAgIGlmIChfaW5zdGFuY2UuaW5mbykge1xuICAgICAgICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5pbmZvIGFzIGFueSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuU2VsZWN0SXRlbUluZm8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfaW5zdGFuY2UudGl0bGUpIHtcbiAgICAgICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnRpdGxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygzLCBfaW5zdGFuY2UuZGVzY3JpcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX2luc3RhbmNlLmltYWdlKSB7XG4gICAgICAgICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmltYWdlIGFzIGFueSxcbiAgICAgICAgICAgICAgSW50ZW50Lk1lc3NhZ2UuSW1hZ2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaW5mbz86IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvO1xuICAgICAgICBwcml2YXRlIF90aXRsZT86IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIHByaXZhdGUgX2ltYWdlPzogSW50ZW50Lk1lc3NhZ2UuSW1hZ2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBJdGVtIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEl0ZW0uQXNPYmplY3Q+KSB7XG4gICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICAgIHRoaXMuaW5mbyA9IF92YWx1ZS5pbmZvXG4gICAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbyhfdmFsdWUuaW5mbylcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMudGl0bGUgPSBfdmFsdWUudGl0bGU7XG4gICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICB0aGlzLmltYWdlID0gX3ZhbHVlLmltYWdlXG4gICAgICAgICAgICA/IG5ldyBJbnRlbnQuTWVzc2FnZS5JbWFnZShfdmFsdWUuaW1hZ2UpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBJdGVtLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaW5mbygpOiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZm87XG4gICAgICAgIH1cbiAgICAgICAgc2V0IGluZm8odmFsdWU6IEludGVudC5NZXNzYWdlLlNlbGVjdEl0ZW1JbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5faW5mbyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgaW1hZ2UoKTogSW50ZW50Lk1lc3NhZ2UuSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbWFnZTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgaW1hZ2UodmFsdWU6IEludGVudC5NZXNzYWdlLkltYWdlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5faW1hZ2UgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgICBJdGVtLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAgICovXG4gICAgICAgIHRvT2JqZWN0KCk6IEl0ZW0uQXNPYmplY3Qge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvOiB0aGlzLmluZm8gPyB0aGlzLmluZm8udG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSA/IHRoaXMuaW1hZ2UudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAgICAgICAqL1xuICAgICAgICB0b0pTT04oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICAgICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAgICovXG4gICAgICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICAgICAgICk6IEl0ZW0uQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvOiB0aGlzLmluZm8gPyB0aGlzLmluZm8udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlID8gdGhpcy5pbWFnZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBleHBvcnQgbW9kdWxlIEl0ZW0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEl0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgICAgICAgIGluZm8/OiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mby5Bc09iamVjdDtcbiAgICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICBpbWFnZT86IEludGVudC5NZXNzYWdlLkltYWdlLkFzT2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEl0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICAgIGluZm8/OiBJbnRlbnQuTWVzc2FnZS5TZWxlY3RJdGVtSW5mby5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgaW1hZ2U/OiBJbnRlbnQuTWVzc2FnZS5JbWFnZS5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkhUTUxUZXh0XG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEhUTUxUZXh0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuSFRNTFRleHQnO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIVE1MVGV4dCgpO1xuICAgICAgICBIVE1MVGV4dC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBIVE1MVGV4dCkge1xuICAgICAgICBfaW5zdGFuY2UudGV4dCA9IF9pbnN0YW5jZS50ZXh0IHx8IFtdO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBIVE1MVGV4dCxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgKF9pbnN0YW5jZS50ZXh0ID0gX2luc3RhbmNlLnRleHQgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEhUTUxUZXh0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgX2luc3RhbmNlOiBIVE1MVGV4dCxcbiAgICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgICApIHtcbiAgICAgICAgaWYgKF9pbnN0YW5jZS50ZXh0ICYmIF9pbnN0YW5jZS50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBfaW5zdGFuY2UudGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdGV4dD86IHN0cmluZ1tdO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSFRNTFRleHQgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxIVE1MVGV4dC5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnRleHQgPSAoX3ZhbHVlLnRleHQgfHwgW10pLnNsaWNlKCk7XG4gICAgICAgIEhUTUxUZXh0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB0ZXh0KCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICB9XG4gICAgICBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgSFRNTFRleHQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogSFRNTFRleHQuQXNPYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6ICh0aGlzLnRleHQgfHwgW10pLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAqL1xuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICAgKi9cbiAgICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICk6IEhUTUxUZXh0LkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiAodGhpcy50ZXh0IHx8IFtdKS5zbGljZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgSFRNTFRleHQge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgSFRNTFRleHRcbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgIHRleHQ/OiBzdHJpbmdbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBIVE1MVGV4dFxuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgdGV4dD86IHN0cmluZ1tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuVmlkZW9cbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgVmlkZW8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5WaWRlbyc7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZpZGVvKCk7XG4gICAgICAgIFZpZGVvLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFZpZGVvKSB7XG4gICAgICAgIF9pbnN0YW5jZS51cmkgPSBfaW5zdGFuY2UudXJpIHx8ICcnO1xuICAgICAgICBfaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgPSBfaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICBfaW5zdGFuY2U6IFZpZGVvLFxuICAgICAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UudXJpID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBfaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFZpZGVvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihfaW5zdGFuY2U6IFZpZGVvLCBfd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgICAgaWYgKF9pbnN0YW5jZS51cmkpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS51cmkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5hY2Nlc3NpYmlsaXR5VGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZSBfdXJpPzogc3RyaW5nO1xuICAgICAgcHJpdmF0ZSBfYWNjZXNzaWJpbGl0eVRleHQ/OiBzdHJpbmc7XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBWaWRlbyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFZpZGVvLkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMudXJpID0gX3ZhbHVlLnVyaTtcbiAgICAgICAgdGhpcy5hY2Nlc3NpYmlsaXR5VGV4dCA9IF92YWx1ZS5hY2Nlc3NpYmlsaXR5VGV4dDtcbiAgICAgICAgVmlkZW8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgICAgfVxuICAgICAgZ2V0IHVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgfVxuICAgICAgc2V0IHVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZ2V0IGFjY2Vzc2liaWxpdHlUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dDtcbiAgICAgIH1cbiAgICAgIHNldCBhY2Nlc3NpYmlsaXR5VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc2liaWxpdHlUZXh0ID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgICBWaWRlby5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgICAgICovXG4gICAgICB0b09iamVjdCgpOiBWaWRlby5Bc09iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJpOiB0aGlzLnVyaSxcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5VGV4dDogdGhpcy5hY2Nlc3NpYmlsaXR5VGV4dFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogVmlkZW8uQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVyaTogdGhpcy51cmksXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ6IHRoaXMuYWNjZXNzaWJpbGl0eVRleHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IG1vZHVsZSBWaWRlbyB7XG4gICAgICAvKipcbiAgICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBWaWRlb1xuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgICAgdXJpPzogc3RyaW5nO1xuICAgICAgICBhY2Nlc3NpYmlsaXR5VGV4dD86IHN0cmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBWaWRlb1xuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgdXJpPzogc3RyaW5nO1xuICAgICAgICBhY2Nlc3NpYmlsaXR5VGV4dD86IHN0cmluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkF1ZGlvXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEF1ZGlvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgICAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuQXVkaW8nO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBdWRpbygpO1xuICAgICAgICBBdWRpby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBBdWRpbykge1xuICAgICAgICBfaW5zdGFuY2UudXJpID0gX2luc3RhbmNlLnVyaSB8fCAnJztcbiAgICAgICAgX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgICAgX2luc3RhbmNlOiBBdWRpbyxcbiAgICAgICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICAgICApIHtcbiAgICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLnVyaSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBBdWRpby5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoX2luc3RhbmNlOiBBdWRpbywgX3dyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICAgIGlmIChfaW5zdGFuY2UudXJpKSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UudXJpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2luc3RhbmNlLmFjY2Vzc2liaWxpdHlUZXh0KSB7XG4gICAgICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuYWNjZXNzaWJpbGl0eVRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX3VyaT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX2FjY2Vzc2liaWxpdHlUZXh0Pzogc3RyaW5nO1xuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQXVkaW8gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgICAqL1xuICAgICAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBdWRpby5Bc09iamVjdD4pIHtcbiAgICAgICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgICAgICB0aGlzLnVyaSA9IF92YWx1ZS51cmk7XG4gICAgICAgIHRoaXMuYWNjZXNzaWJpbGl0eVRleHQgPSBfdmFsdWUuYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICAgIEF1ZGlvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCB1cmkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VyaTtcbiAgICAgIH1cbiAgICAgIHNldCB1cmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl91cmkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBhY2Nlc3NpYmlsaXR5VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWNjZXNzaWJpbGl0eVRleHQ7XG4gICAgICB9XG4gICAgICBzZXQgYWNjZXNzaWJpbGl0eVRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NpYmlsaXR5VGV4dCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgICAgQXVkaW8uc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgICAqL1xuICAgICAgdG9PYmplY3QoKTogQXVkaW8uQXNPYmplY3Qge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVyaTogdGhpcy51cmksXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ6IHRoaXMuYWNjZXNzaWJpbGl0eVRleHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgICAqL1xuICAgICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAgICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAgICAgKi9cbiAgICAgIHRvUHJvdG9idWZKU09OKFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICAgICk6IEF1ZGlvLkFzUHJvdG9idWZKU09OIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmk6IHRoaXMudXJpLFxuICAgICAgICAgIGFjY2Vzc2liaWxpdHlUZXh0OiB0aGlzLmFjY2Vzc2liaWxpdHlUZXh0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgQXVkaW8ge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQXVkaW9cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgIHVyaT86IHN0cmluZztcbiAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ/OiBzdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQXVkaW9cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgICAgIHVyaT86IHN0cmluZztcbiAgICAgICAgYWNjZXNzaWJpbGl0eVRleHQ/OiBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5TZWxlY3RJdGVtSW5mb1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtSW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICAgIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlNlbGVjdEl0ZW1JbmZvJztcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2VsZWN0SXRlbUluZm8oKTtcbiAgICAgICAgU2VsZWN0SXRlbUluZm8uZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogU2VsZWN0SXRlbUluZm8pIHtcbiAgICAgICAgX2luc3RhbmNlLmtleSA9IF9pbnN0YW5jZS5rZXkgfHwgJyc7XG4gICAgICAgIF9pbnN0YW5jZS5zeW5vbnltcyA9IF9pbnN0YW5jZS5zeW5vbnltcyB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIF9pbnN0YW5jZTogU2VsZWN0SXRlbUluZm8sXG4gICAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICAgKSB7XG4gICAgICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIF9pbnN0YW5jZS5rZXkgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIChfaW5zdGFuY2Uuc3lub255bXMgPSBfaW5zdGFuY2Uuc3lub255bXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICAgICAgX3JlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFNlbGVjdEl0ZW1JbmZvLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICAgICAgX2luc3RhbmNlOiBTZWxlY3RJdGVtSW5mbyxcbiAgICAgICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICAgICApIHtcbiAgICAgICAgaWYgKF9pbnN0YW5jZS5rZXkpIHtcbiAgICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEsIF9pbnN0YW5jZS5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5zdGFuY2Uuc3lub255bXMgJiYgX2luc3RhbmNlLnN5bm9ueW1zLmxlbmd0aCkge1xuICAgICAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBfaW5zdGFuY2Uuc3lub255bXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGUgX2tleT86IHN0cmluZztcbiAgICAgIHByaXZhdGUgX3N5bm9ueW1zPzogc3RyaW5nW107XG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBTZWxlY3RJdGVtSW5mbyB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgICAgICovXG4gICAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlbGVjdEl0ZW1JbmZvLkFzT2JqZWN0Pikge1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgICAgIHRoaXMua2V5ID0gX3ZhbHVlLmtleTtcbiAgICAgICAgdGhpcy5zeW5vbnltcyA9IChfdmFsdWUuc3lub255bXMgfHwgW10pLnNsaWNlKCk7XG4gICAgICAgIFNlbGVjdEl0ZW1JbmZvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGdldCBrZXkoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleTtcbiAgICAgIH1cbiAgICAgIHNldCBrZXkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGdldCBzeW5vbnltcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW5vbnltcztcbiAgICAgIH1cbiAgICAgIHNldCBzeW5vbnltcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc3lub255bXMgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgICAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICAgIFNlbGVjdEl0ZW1JbmZvLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAgICAgKi9cbiAgICAgIHRvT2JqZWN0KCk6IFNlbGVjdEl0ZW1JbmZvLkFzT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgIHN5bm9ueW1zOiAodGhpcy5zeW5vbnltcyB8fCBbXSkuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgICAgICovXG4gICAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAgICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgICAqL1xuICAgICAgdG9Qcm90b2J1ZkpTT04oXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICAgICAgKTogU2VsZWN0SXRlbUluZm8uQXNQcm90b2J1ZkpTT04ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgc3lub255bXM6ICh0aGlzLnN5bm9ueW1zIHx8IFtdKS5zbGljZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBtb2R1bGUgU2VsZWN0SXRlbUluZm8ge1xuICAgICAgLyoqXG4gICAgICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgU2VsZWN0SXRlbUluZm9cbiAgICAgICAqL1xuICAgICAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgICAgIGtleT86IHN0cmluZztcbiAgICAgICAgc3lub255bXM/OiBzdHJpbmdbXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBTZWxlY3RJdGVtSW5mb1xuICAgICAgICovXG4gICAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgICAga2V5Pzogc3RyaW5nO1xuICAgICAgICBzeW5vbnltcz86IHN0cmluZ1tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkZvbGxvd3VwSW50ZW50SW5mb1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEZvbGxvd3VwSW50ZW50SW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5Gb2xsb3d1cEludGVudEluZm8nO1xuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBGb2xsb3d1cEludGVudEluZm8oKTtcbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogRm9sbG93dXBJbnRlbnRJbmZvKSB7XG4gICAgICBfaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lID0gX2luc3RhbmNlLmZvbGxvd3VwSW50ZW50TmFtZSB8fCAnJztcbiAgICAgIF9pbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUgPVxuICAgICAgICBfaW5zdGFuY2UucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBfaW5zdGFuY2U6IEZvbGxvd3VwSW50ZW50SW5mbyxcbiAgICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICAgICkge1xuICAgICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5mb2xsb3d1cEludGVudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgICAgX2luc3RhbmNlOiBGb2xsb3d1cEludGVudEluZm8sXG4gICAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgICApIHtcbiAgICAgIGlmIChfaW5zdGFuY2UuZm9sbG93dXBJbnRlbnROYW1lKSB7XG4gICAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLmZvbGxvd3VwSW50ZW50TmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoX2luc3RhbmNlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZSkge1xuICAgICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5wYXJlbnRGb2xsb3d1cEludGVudE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2ZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgICBwcml2YXRlIF9wYXJlbnRGb2xsb3d1cEludGVudE5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBGb2xsb3d1cEludGVudEluZm8gdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEZvbGxvd3VwSW50ZW50SW5mby5Bc09iamVjdD4pIHtcbiAgICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuZm9sbG93dXBJbnRlbnROYW1lID0gX3ZhbHVlLmZvbGxvd3VwSW50ZW50TmFtZTtcbiAgICAgIHRoaXMucGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gX3ZhbHVlLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZTtcbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5yZWZpbmVWYWx1ZXModGhpcyk7XG4gICAgfVxuICAgIGdldCBmb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9mb2xsb3d1cEludGVudE5hbWU7XG4gICAgfVxuICAgIHNldCBmb2xsb3d1cEludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJlbnRGb2xsb3d1cEludGVudE5hbWU7XG4gICAgfVxuICAgIHNldCBwYXJlbnRGb2xsb3d1cEludGVudE5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIEZvbGxvd3VwSW50ZW50SW5mby5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICAgKi9cbiAgICB0b09iamVjdCgpOiBGb2xsb3d1cEludGVudEluZm8uQXNPYmplY3Qge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLmZvbGxvd3VwSW50ZW50TmFtZSxcbiAgICAgICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICAgKi9cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICAgKi9cbiAgICB0b1Byb3RvYnVmSlNPTihcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgICApOiBGb2xsb3d1cEludGVudEluZm8uQXNQcm90b2J1ZkpTT04ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLmZvbGxvd3VwSW50ZW50TmFtZSxcbiAgICAgICAgcGFyZW50Rm9sbG93dXBJbnRlbnROYW1lOiB0aGlzLnBhcmVudEZvbGxvd3VwSW50ZW50TmFtZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBGb2xsb3d1cEludGVudEluZm8ge1xuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBGb2xsb3d1cEludGVudEluZm9cbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICAgIGZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgICAgIHBhcmVudEZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBGb2xsb3d1cEludGVudEluZm9cbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICAgIGZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgICAgIHBhcmVudEZvbGxvd3VwSW50ZW50TmFtZT86IHN0cmluZztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lkxpc3RJbnRlbnRzUmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgTGlzdEludGVudHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0SW50ZW50c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0SW50ZW50c1JlcXVlc3QoKTtcbiAgICBMaXN0SW50ZW50c1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0SW50ZW50c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX2luc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBfaW5zdGFuY2UuaW50ZW50VmlldyA9IF9pbnN0YW5jZS5pbnRlbnRWaWV3IHx8IDA7XG4gICAgX2luc3RhbmNlLnBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5wYWdlVG9rZW4gfHwgJyc7XG4gICAgX2luc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkgPSBfaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSB8fCAwO1xuICAgIF9pbnN0YW5jZS5zb3J0QnlGaWVsZCA9IF9pbnN0YW5jZS5zb3J0QnlGaWVsZCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIC8gcmVhZHMgYmluYXJ5IG1lc3NhZ2UgaW50byBtZXNzYWdlIGluc3RhbmNlIHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfcmVhZGVyIGJpbmFyeSByZWFkZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgX2luc3RhbmNlOiBMaXN0SW50ZW50c1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFnZVRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5zb3J0QnlGaWVsZCA9IG5ldyBJbnRlbnRTb3J0aW5nKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zb3J0QnlGaWVsZCxcbiAgICAgICAgICAgIEludGVudFNvcnRpbmcuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IExpc3RJbnRlbnRzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDMsIF9pbnN0YW5jZS5pbnRlbnRWaWV3KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoNSwgX2luc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNiwgX2luc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnNvcnRCeUZpZWxkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNyxcbiAgICAgICAgX2luc3RhbmNlLnNvcnRCeUZpZWxkIGFzIGFueSxcbiAgICAgICAgSW50ZW50U29ydGluZy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50Vmlldz86IEludGVudFZpZXc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsdGVyQnlDYXRlZ29yeT86IEludGVudENhdGVnb3J5O1xuICBwcml2YXRlIF9zb3J0QnlGaWVsZD86IEludGVudFNvcnRpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBMaXN0SW50ZW50c1JlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdEludGVudHNSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuaW50ZW50VmlldyA9IF92YWx1ZS5pbnRlbnRWaWV3O1xuICAgIHRoaXMucGFnZVRva2VuID0gX3ZhbHVlLnBhZ2VUb2tlbjtcbiAgICB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkgPSBfdmFsdWUuZmlsdGVyQnlDYXRlZ29yeTtcbiAgICB0aGlzLnNvcnRCeUZpZWxkID0gX3ZhbHVlLnNvcnRCeUZpZWxkXG4gICAgICA/IG5ldyBJbnRlbnRTb3J0aW5nKF92YWx1ZS5zb3J0QnlGaWVsZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIExpc3RJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpbHRlckJ5Q2F0ZWdvcnkoKTogSW50ZW50Q2F0ZWdvcnkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJCeUNhdGVnb3J5O1xuICB9XG4gIHNldCBmaWx0ZXJCeUNhdGVnb3J5KHZhbHVlOiBJbnRlbnRDYXRlZ29yeSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc29ydEJ5RmllbGQoKTogSW50ZW50U29ydGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeUZpZWxkO1xuICB9XG4gIHNldCBzb3J0QnlGaWVsZCh2YWx1ZTogSW50ZW50U29ydGluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvcnRCeUZpZWxkID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdEludGVudHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IExpc3RJbnRlbnRzUmVxdWVzdC5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgaW50ZW50VmlldzogdGhpcy5pbnRlbnRWaWV3LFxuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlbixcbiAgICAgIGZpbHRlckJ5Q2F0ZWdvcnk6IHRoaXMuZmlsdGVyQnlDYXRlZ29yeSxcbiAgICAgIHNvcnRCeUZpZWxkOiB0aGlzLnNvcnRCeUZpZWxkID8gdGhpcy5zb3J0QnlGaWVsZC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogTGlzdEludGVudHNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBpbnRlbnRWaWV3OiBJbnRlbnRWaWV3W3RoaXMuaW50ZW50VmlldyA/PyAwXSxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBmaWx0ZXJCeUNhdGVnb3J5OiBJbnRlbnRDYXRlZ29yeVt0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkgPz8gMF0sXG4gICAgICBzb3J0QnlGaWVsZDogdGhpcy5zb3J0QnlGaWVsZFxuICAgICAgICA/IHRoaXMuc29ydEJ5RmllbGQudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0SW50ZW50c1JlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RJbnRlbnRzUmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICBpbnRlbnRWaWV3PzogSW50ZW50VmlldztcbiAgICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gICAgZmlsdGVyQnlDYXRlZ29yeT86IEludGVudENhdGVnb3J5O1xuICAgIHNvcnRCeUZpZWxkPzogSW50ZW50U29ydGluZy5Bc09iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBMaXN0SW50ZW50c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgaW50ZW50Vmlldz86IHN0cmluZztcbiAgICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gICAgZmlsdGVyQnlDYXRlZ29yeT86IHN0cmluZztcbiAgICBzb3J0QnlGaWVsZD86IEludGVudFNvcnRpbmcuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5MaXN0SW50ZW50c1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0SW50ZW50c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5MaXN0SW50ZW50c1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdEludGVudHNSZXNwb25zZSgpO1xuICAgIExpc3RJbnRlbnRzUmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBMaXN0SW50ZW50c1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmludGVudHMgPSBfaW5zdGFuY2UuaW50ZW50cyB8fCBbXTtcbiAgICBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdEludGVudHNSZXNwb25zZSxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IEludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5pbnRlbnRzID0gX2luc3RhbmNlLmludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0SW50ZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogTGlzdEludGVudHNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRzICYmIF9pbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmludGVudHMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50cz86IEludGVudFtdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgTGlzdEludGVudHNSZXNwb25zZSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0SW50ZW50c1Jlc3BvbnNlLkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmludGVudHMgPSAoX3ZhbHVlLmludGVudHMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IF92YWx1ZS5uZXh0UGFnZVRva2VuO1xuICAgIExpc3RJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpbnRlbnRzKCk6IEludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50cztcbiAgfVxuICBzZXQgaW50ZW50cyh2YWx1ZTogSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RJbnRlbnRzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogTGlzdEludGVudHNSZXNwb25zZS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVudHM6ICh0aGlzLmludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBMaXN0SW50ZW50c1Jlc3BvbnNlLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZW50czogKHRoaXMuaW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RJbnRlbnRzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIExpc3RJbnRlbnRzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGludGVudHM/OiBJbnRlbnQuQXNPYmplY3RbXTtcbiAgICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIExpc3RJbnRlbnRzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudHM/OiBJbnRlbnQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gICAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgfVxufVxuXG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuR2V0SW50ZW50UmVxdWVzdFxuICovXG5leHBvcnQgY2xhc3MgR2V0SW50ZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuR2V0SW50ZW50UmVxdWVzdCc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEludGVudFJlcXVlc3QoKTtcbiAgICBHZXRJbnRlbnRSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogR2V0SW50ZW50UmVxdWVzdCkge1xuICAgIF9pbnN0YW5jZS5uYW1lID0gX2luc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfaW5zdGFuY2UuaW50ZW50VmlldyB8fCAwO1xuICAgIF9pbnN0YW5jZS5wYWdlVG9rZW4gPSBfaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogR2V0SW50ZW50UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UubmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLnBhZ2VUb2tlbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0SW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEdldEludGVudFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UubmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDIsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDMsIF9pbnN0YW5jZS5pbnRlbnRWaWV3KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTAsIF9pbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50Vmlldz86IEludGVudFZpZXc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBjb25zdHJ1Y3Rvci4gSW5pdGlhbGl6ZXMgdGhlIHByb3BlcnRpZXMgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfdmFsdWUgaW5pdGlhbCB2YWx1ZXMgb2JqZWN0IG9yIGluc3RhbmNlIG9mIEdldEludGVudFJlcXVlc3QgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0SW50ZW50UmVxdWVzdC5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gX3ZhbHVlLm5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuaW50ZW50VmlldyA9IF92YWx1ZS5pbnRlbnRWaWV3O1xuICAgIHRoaXMucGFnZVRva2VuID0gX3ZhbHVlLnBhZ2VUb2tlbjtcbiAgICBHZXRJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0SW50ZW50UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBHZXRJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIGludGVudFZpZXc6IHRoaXMuaW50ZW50VmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBHZXRJbnRlbnRSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIGludGVudFZpZXc6IEludGVudFZpZXdbdGhpcy5pbnRlbnRWaWV3ID8/IDBdLFxuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0SW50ZW50UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgR2V0SW50ZW50UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgaW50ZW50Vmlldz86IEludGVudFZpZXc7XG4gICAgcGFnZVRva2VuPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEdldEludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIGludGVudFZpZXc/OiBzdHJpbmc7XG4gICAgcGFnZVRva2VuPzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5DcmVhdGVJbnRlbnRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVJbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5DcmVhdGVJbnRlbnRSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlSW50ZW50UmVxdWVzdCgpO1xuICAgIENyZWF0ZUludGVudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBDcmVhdGVJbnRlbnRSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLnBhcmVudCA9IF9pbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLmludGVudCA9IF9pbnN0YW5jZS5pbnRlbnQgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5pbnRlbnRWaWV3ID0gX2luc3RhbmNlLmludGVudFZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IENyZWF0ZUludGVudFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudCA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmludGVudCxcbiAgICAgICAgICAgIEludGVudC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQ3JlYXRlSW50ZW50UmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmludGVudCBhcyBhbnksXG4gICAgICAgIEludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMywgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50Vmlldykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oNCwgX2luc3RhbmNlLmludGVudFZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50PzogSW50ZW50O1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ludGVudFZpZXc/OiBJbnRlbnRWaWV3O1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQ3JlYXRlSW50ZW50UmVxdWVzdCB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDcmVhdGVJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0Pikge1xuICAgIF92YWx1ZSA9IF92YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IF92YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5pbnRlbnQgPSBfdmFsdWUuaW50ZW50ID8gbmV3IEludGVudChfdmFsdWUuaW50ZW50KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IF92YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5pbnRlbnRWaWV3ID0gX3ZhbHVlLmludGVudFZpZXc7XG4gICAgQ3JlYXRlSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudCgpOiBJbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnQ7XG4gIH1cbiAgc2V0IGludGVudCh2YWx1ZTogSW50ZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faW50ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlSW50ZW50UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBDcmVhdGVJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudDogdGhpcy5pbnRlbnQgPyB0aGlzLmludGVudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIGludGVudFZpZXc6IHRoaXMuaW50ZW50Vmlld1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IENyZWF0ZUludGVudFJlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaW50ZW50OiB0aGlzLmludGVudCA/IHRoaXMuaW50ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBpbnRlbnRWaWV3OiBJbnRlbnRWaWV3W3RoaXMuaW50ZW50VmlldyA/PyAwXVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3JlYXRlSW50ZW50UmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlSW50ZW50UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGludGVudD86IEludGVudC5Bc09iamVjdDtcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgaW50ZW50Vmlldz86IEludGVudFZpZXc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQ3JlYXRlSW50ZW50UmVxdWVzdFxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICAgIGludGVudD86IEludGVudC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICAgIGludGVudFZpZXc/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LlVwZGF0ZUludGVudFJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZUludGVudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LlVwZGF0ZUludGVudFJlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVcGRhdGVJbnRlbnRSZXF1ZXN0KCk7XG4gICAgVXBkYXRlSW50ZW50UmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IFVwZGF0ZUludGVudFJlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UuaW50ZW50ID0gX2luc3RhbmNlLmludGVudCB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSA9IF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnVwZGF0ZU1hc2sgPSBfaW5zdGFuY2UudXBkYXRlTWFzayB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfaW5zdGFuY2UuaW50ZW50VmlldyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogVXBkYXRlSW50ZW50UmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50ID0gbmV3IEludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50LFxuICAgICAgICAgICAgSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2soKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLnVwZGF0ZU1hc2ssXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2suZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5pbnRlbnRWaWV3ID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlSW50ZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IFVwZGF0ZUludGVudFJlcXVlc3QsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50KSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmludGVudCBhcyBhbnksXG4gICAgICAgIEludGVudC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UudXBkYXRlTWFzaykge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIF9pbnN0YW5jZS51cGRhdGVNYXNrIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudFZpZXcpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDQsIF9pbnN0YW5jZS5pbnRlbnRWaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbnRlbnQ/OiBJbnRlbnQ7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzaztcbiAgcHJpdmF0ZSBfaW50ZW50Vmlldz86IEludGVudFZpZXc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBVcGRhdGVJbnRlbnRSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZUludGVudFJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaW50ZW50ID0gX3ZhbHVlLmludGVudCA/IG5ldyBJbnRlbnQoX3ZhbHVlLmludGVudCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSBfdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMudXBkYXRlTWFzayA9IF92YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2soX3ZhbHVlLnVwZGF0ZU1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmludGVudFZpZXcgPSBfdmFsdWUuaW50ZW50VmlldztcbiAgICBVcGRhdGVJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgaW50ZW50KCk6IEludGVudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudDtcbiAgfVxuICBzZXQgaW50ZW50KHZhbHVlOiBJbnRlbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXBkYXRlSW50ZW50UmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBVcGRhdGVJbnRlbnRSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZW50OiB0aGlzLmludGVudCA/IHRoaXMuaW50ZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpbnRlbnRWaWV3OiB0aGlzLmludGVudFZpZXdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBVcGRhdGVJbnRlbnRSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50ZW50OiB0aGlzLmludGVudCA/IHRoaXMuaW50ZW50LnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB1cGRhdGVNYXNrOiB0aGlzLnVwZGF0ZU1hc2tcbiAgICAgICAgPyB0aGlzLnVwZGF0ZU1hc2sudG9Qcm90b2J1ZkpTT04ob3B0aW9ucylcbiAgICAgICAgOiBudWxsLFxuICAgICAgaW50ZW50VmlldzogSW50ZW50Vmlld1t0aGlzLmludGVudFZpZXcgPz8gMF1cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZUludGVudFJlcXVlc3Qge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIFVwZGF0ZUludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNPYmplY3Qge1xuICAgIGludGVudD86IEludGVudC5Bc09iamVjdDtcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5Bc09iamVjdDtcbiAgICBpbnRlbnRWaWV3PzogSW50ZW50VmlldztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBVcGRhdGVJbnRlbnRSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBpbnRlbnQ/OiBJbnRlbnQuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICB1cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpbnRlbnRWaWV3Pzogc3RyaW5nO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5EZWxldGVJbnRlbnRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVJbnRlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5EZWxldGVJbnRlbnRSZXF1ZXN0JztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlSW50ZW50UmVxdWVzdCgpO1xuICAgIERlbGV0ZUludGVudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBEZWxldGVJbnRlbnRSZXF1ZXN0KSB7XG4gICAgX2luc3RhbmNlLm5hbWUgPSBfaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IERlbGV0ZUludGVudFJlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLm5hbWUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZUludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBEZWxldGVJbnRlbnRSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLm5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBEZWxldGVJbnRlbnRSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlbGV0ZUludGVudFJlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IF92YWx1ZS5uYW1lO1xuICAgIERlbGV0ZUludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVJbnRlbnRSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IERlbGV0ZUludGVudFJlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBEZWxldGVJbnRlbnRSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVJbnRlbnRSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBEZWxldGVJbnRlbnRSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIERlbGV0ZUludGVudFJlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0KCk7XG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcblxuICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51cGRhdGVNYXNrID0gX2luc3RhbmNlLnVwZGF0ZU1hc2sgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pbnRlbnRWaWV3ID0gX2luc3RhbmNlLmludGVudFZpZXcgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudEJhdGNoVXJpID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBfaW5zdGFuY2UuaW50ZW50QmF0Y2hJbmxpbmUgPSBuZXcgSW50ZW50QmF0Y2goKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmludGVudEJhdGNoSW5saW5lLFxuICAgICAgICAgICAgSW50ZW50QmF0Y2guZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzaygpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgX2luc3RhbmNlLmludGVudFZpZXcgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhfaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBtZXNzYWdlIHRvIGJpbmFyeSBmb3JtYXQgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF93cml0ZXIgYmluYXJ5IHdyaXRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKFxuICAgIF9pbnN0YW5jZTogQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMSwgX2luc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaW50ZW50QmF0Y2hVcmkgfHwgX2luc3RhbmNlLmludGVudEJhdGNoVXJpID09PSAnJykge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UuaW50ZW50QmF0Y2hVcmkpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmludGVudEJhdGNoSW5saW5lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgX2luc3RhbmNlLmludGVudEJhdGNoSW5saW5lIGFzIGFueSxcbiAgICAgICAgSW50ZW50QmF0Y2guc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDQsIF9pbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVwZGF0ZU1hc2spIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2UudXBkYXRlTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRWaWV3KSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSg2LCBfaW5zdGFuY2UuaW50ZW50Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9pbnRlbnRCYXRjaFVyaT86IHN0cmluZztcbiAgcHJpdmF0ZSBfaW50ZW50QmF0Y2hJbmxpbmU/OiBJbnRlbnRCYXRjaDtcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF91cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrO1xuICBwcml2YXRlIF9pbnRlbnRWaWV3PzogSW50ZW50VmlldztcblxuICBwcml2YXRlIF9pbnRlbnRCYXRjaDogQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5JbnRlbnRCYXRjaENhc2UgPVxuICAgIEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QuSW50ZW50QmF0Y2hDYXNlLm5vbmU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gX3ZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmludGVudEJhdGNoVXJpID0gX3ZhbHVlLmludGVudEJhdGNoVXJpO1xuICAgIHRoaXMuaW50ZW50QmF0Y2hJbmxpbmUgPSBfdmFsdWUuaW50ZW50QmF0Y2hJbmxpbmVcbiAgICAgID8gbmV3IEludGVudEJhdGNoKF92YWx1ZS5pbnRlbnRCYXRjaElubGluZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gX3ZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSBfdmFsdWUudXBkYXRlTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrKF92YWx1ZS51cGRhdGVNYXNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbnRlbnRWaWV3ID0gX3ZhbHVlLmludGVudFZpZXc7XG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudEJhdGNoVXJpKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudEJhdGNoVXJpO1xuICB9XG4gIHNldCBpbnRlbnRCYXRjaFVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ludGVudEJhdGNoSW5saW5lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZW50QmF0Y2ggPVxuICAgICAgICBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LkludGVudEJhdGNoQ2FzZS5pbnRlbnRCYXRjaFVyaTtcbiAgICB9XG4gICAgdGhpcy5faW50ZW50QmF0Y2hVcmkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW50ZW50QmF0Y2hJbmxpbmUoKTogSW50ZW50QmF0Y2ggfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRCYXRjaElubGluZTtcbiAgfVxuICBzZXQgaW50ZW50QmF0Y2hJbmxpbmUodmFsdWU6IEludGVudEJhdGNoIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2ludGVudEJhdGNoVXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZW50QmF0Y2ggPVxuICAgICAgICBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LkludGVudEJhdGNoQ2FzZS5pbnRlbnRCYXRjaElubGluZTtcbiAgICB9XG4gICAgdGhpcy5faW50ZW50QmF0Y2hJbmxpbmUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudFZpZXcoKTogSW50ZW50VmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVudFZpZXc7XG4gIH1cbiAgc2V0IGludGVudFZpZXcodmFsdWU6IEludGVudFZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGludGVudEJhdGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnRCYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaW50ZW50QmF0Y2hVcmk6IHRoaXMuaW50ZW50QmF0Y2hVcmksXG4gICAgICBpbnRlbnRCYXRjaElubGluZTogdGhpcy5pbnRlbnRCYXRjaElubGluZVxuICAgICAgICA/IHRoaXMuaW50ZW50QmF0Y2hJbmxpbmUudG9PYmplY3QoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB1cGRhdGVNYXNrOiB0aGlzLnVwZGF0ZU1hc2sgPyB0aGlzLnVwZGF0ZU1hc2sudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGludGVudFZpZXc6IHRoaXMuaW50ZW50Vmlld1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaW50ZW50QmF0Y2hVcmk6IHRoaXMuaW50ZW50QmF0Y2hVcmkgPz8gbnVsbCxcbiAgICAgIGludGVudEJhdGNoSW5saW5lOiB0aGlzLmludGVudEJhdGNoSW5saW5lXG4gICAgICAgID8gdGhpcy5pbnRlbnRCYXRjaElubGluZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrXG4gICAgICAgID8gdGhpcy51cGRhdGVNYXNrLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIGludGVudFZpZXc6IEludGVudFZpZXdbdGhpcy5pbnRlbnRWaWV3ID8/IDBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgaW50ZW50QmF0Y2hVcmk/OiBzdHJpbmc7XG4gICAgaW50ZW50QmF0Y2hJbmxpbmU/OiBJbnRlbnRCYXRjaC5Bc09iamVjdDtcbiAgICBsYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gICAgdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDA0LkZpZWxkTWFzay5Bc09iamVjdDtcbiAgICBpbnRlbnRWaWV3PzogSW50ZW50VmlldztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBCYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgaW50ZW50QmF0Y2hVcmk/OiBzdHJpbmcgfCBudWxsO1xuICAgIGludGVudEJhdGNoSW5saW5lPzogSW50ZW50QmF0Y2guQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGxhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgICB1cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDQuRmllbGRNYXNrLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpbnRlbnRWaWV3Pzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIEludGVudEJhdGNoQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgaW50ZW50QmF0Y2hVcmkgPSAxLFxuICAgIGludGVudEJhdGNoSW5saW5lID0gMlxuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5CYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UoKTtcbiAgICBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlKSB7XG4gICAgX2luc3RhbmNlLmludGVudHMgPSBfaW5zdGFuY2UuaW50ZW50cyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgSW50ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBJbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmludGVudHMgPSBfaW5zdGFuY2UuaW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBCYXRjaFVwZGF0ZUludGVudHNSZXNwb25zZSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRzICYmIF9pbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmludGVudHMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50cz86IEludGVudFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaW50ZW50cyA9IChfdmFsdWUuaW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbmV3IEludGVudChtKSk7XG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpbnRlbnRzKCk6IEludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50cztcbiAgfVxuICBzZXQgaW50ZW50cyh2YWx1ZTogSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2UuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoVXBkYXRlSW50ZW50c1Jlc3BvbnNlXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpbnRlbnRzPzogSW50ZW50LkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgQmF0Y2hVcGRhdGVJbnRlbnRzUmVzcG9uc2VcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudHM/OiBJbnRlbnQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0KCk7XG4gICAgQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QpIHtcbiAgICBfaW5zdGFuY2UucGFyZW50ID0gX2luc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBfaW5zdGFuY2UuaW50ZW50cyA9IF9pbnN0YW5jZS5pbnRlbnRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEludGVudCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgSW50ZW50LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKF9pbnN0YW5jZS5pbnRlbnRzID0gX2luc3RhbmNlLmludGVudHMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBfcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxLCBfaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRzICYmIF9pbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgX2luc3RhbmNlLmludGVudHMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9pbnRlbnRzPzogSW50ZW50W107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0IHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gX3ZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmludGVudHMgPSAoX3ZhbHVlLmludGVudHMgfHwgW10pLm1hcChtID0+IG5ldyBJbnRlbnQobSkpO1xuICAgIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnRlbnRzKCk6IEludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50cztcbiAgfVxuICBzZXQgaW50ZW50cyh2YWx1ZTogSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudHM6ICh0aGlzLmludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGludGVudHM6ICh0aGlzLmludGVudHMgfHwgW10pLm1hcChtID0+IG0udG9Qcm90b2J1ZkpTT04ob3B0aW9ucykpXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBCYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gICAgaW50ZW50cz86IEludGVudC5Bc09iamVjdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIEJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3RcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgICBpbnRlbnRzPzogSW50ZW50LkFzUHJvdG9idWZKU09OW10gfCBudWxsO1xuICB9XG59XG5cbi8qKlxuICogTWVzc2FnZSBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5JbnRlbnRCYXRjaFxuICovXG5leHBvcnQgY2xhc3MgSW50ZW50QmF0Y2ggaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkludGVudEJhdGNoJztcblxuICAvKipcbiAgICogRGVzZXJpYWxpemUgYmluYXJ5IGRhdGEgdG8gbWVzc2FnZVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW50ZW50QmF0Y2goKTtcbiAgICBJbnRlbnRCYXRjaC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEludGVudEJhdGNoKSB7XG4gICAgX2luc3RhbmNlLmludGVudHMgPSBfaW5zdGFuY2UuaW50ZW50cyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IEludGVudEJhdGNoLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgSW50ZW50KCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBJbnRlbnQuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoX2luc3RhbmNlLmludGVudHMgPSBfaW5zdGFuY2UuaW50ZW50cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjFcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSW50ZW50QmF0Y2gucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBJbnRlbnRCYXRjaCxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5pbnRlbnRzICYmIF9pbnN0YW5jZS5pbnRlbnRzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgX2luc3RhbmNlLmludGVudHMgYXMgYW55LFxuICAgICAgICBJbnRlbnQuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZW50cz86IEludGVudFtdO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgSW50ZW50QmF0Y2ggdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8SW50ZW50QmF0Y2guQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaW50ZW50cyA9IChfdmFsdWUuaW50ZW50cyB8fCBbXSkubWFwKG0gPT4gbmV3IEludGVudChtKSk7XG4gICAgSW50ZW50QmF0Y2gucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpbnRlbnRzKCk6IEludGVudFtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW50cztcbiAgfVxuICBzZXQgaW50ZW50cyh2YWx1ZTogSW50ZW50W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbnRlbnRzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgSW50ZW50QmF0Y2guc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSW50ZW50QmF0Y2guQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gc3VwcG9ydCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgcmVwbGljYXRlcyB0aGUgc3RydWN0dXJlIG9mIHRvT2JqZWN0KClcbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBKU09OIHVzaW5nIHByb3RvYnVmIEpTT04gbm90YXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Byb3RvY29sLWJ1ZmZlcnMvZG9jcy9wcm90bzMjanNvblxuICAgKiBBdHRlbnRpb246IG91dHB1dCBkaWZmZXJzIGZyb20gdG9PYmplY3QoKSBlLmcuIGVudW1zIGFyZSByZXByZXNlbnRlZCBhcyBuYW1lcyBhbmQgbm90IGFzIG51bWJlcnMsIFRpbWVzdGFtcCBpcyBhbiBJU08gRGF0ZSBzdHJpbmcgZm9ybWF0IGV0Yy5cbiAgICogSWYgdGhlIG1lc3NhZ2UgaXRzZWxmIG9yIHNvbWUgb2YgZGVzY2VuZGFudCBtZXNzYWdlcyBpcyBnb29nbGUucHJvdG9idWYuQW55LCB5b3UgTVVTVCBwcm92aWRlIGEgbWVzc2FnZSBwb29sIGFzIG9wdGlvbnMuIElmIG5vdCwgdGhlIG1lc3NhZ2VQb29sIGlzIG5vdCByZXF1aXJlZFxuICAgKi9cbiAgdG9Qcm90b2J1ZkpTT04oXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG9wdGlvbnM/OiBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbiAgKTogSW50ZW50QmF0Y2guQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlbnRzOiAodGhpcy5pbnRlbnRzIHx8IFtdKS5tYXAobSA9PiBtLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpKVxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgSW50ZW50QmF0Y2gge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIEludGVudEJhdGNoXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBpbnRlbnRzPzogSW50ZW50LkFzT2JqZWN0W107XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgSW50ZW50QmF0Y2hcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIGludGVudHM/OiBJbnRlbnQuQXNQcm90b2J1ZkpTT05bXSB8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1LkludGVudFNvcnRpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVudFNvcnRpbmcgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyBpZCA9ICdvbmRld28ubmx1LkludGVudFNvcnRpbmcnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnRlbnRTb3J0aW5nKCk7XG4gICAgSW50ZW50U29ydGluZy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBzZXQgZGVmYXVsdCBwcm90b2J1ZiB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhfaW5zdGFuY2U6IEludGVudFNvcnRpbmcpIHtcbiAgICBfaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gX2luc3RhbmNlLnNvcnRpbmdGaWVsZCB8fCAwO1xuICAgIF9pbnN0YW5jZS5zb3J0aW5nTW9kZSA9IF9pbnN0YW5jZS5zb3J0aW5nTW9kZSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogSW50ZW50U29ydGluZyxcbiAgICBfcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKF9yZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChfcmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAoX3JlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgX2luc3RhbmNlLnNvcnRpbmdNb2RlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgSW50ZW50U29ydGluZy5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IEludGVudFNvcnRpbmcsXG4gICAgX3dyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChfaW5zdGFuY2Uuc29ydGluZ0ZpZWxkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxLCBfaW5zdGFuY2Uuc29ydGluZ0ZpZWxkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zb3J0aW5nTW9kZSkge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMiwgX2luc3RhbmNlLnNvcnRpbmdNb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zb3J0aW5nRmllbGQ/OiBJbnRlbnRTb3J0aW5nLkludGVudFNvcnRpbmdGaWVsZDtcbiAgcHJpdmF0ZSBfc29ydGluZ01vZGU/OiBvbmRld29ObHUwMDguU29ydGluZ01vZGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBJbnRlbnRTb3J0aW5nIHRvIGRlZXBseSBjbG9uZSBmcm9tXG4gICAqL1xuICBjb25zdHJ1Y3RvcihfdmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEludGVudFNvcnRpbmcuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc29ydGluZ0ZpZWxkID0gX3ZhbHVlLnNvcnRpbmdGaWVsZDtcbiAgICB0aGlzLnNvcnRpbmdNb2RlID0gX3ZhbHVlLnNvcnRpbmdNb2RlO1xuICAgIEludGVudFNvcnRpbmcucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzb3J0aW5nRmllbGQoKTogSW50ZW50U29ydGluZy5JbnRlbnRTb3J0aW5nRmllbGQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3J0aW5nRmllbGQ7XG4gIH1cbiAgc2V0IHNvcnRpbmdGaWVsZCh2YWx1ZTogSW50ZW50U29ydGluZy5JbnRlbnRTb3J0aW5nRmllbGQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zb3J0aW5nRmllbGQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc29ydGluZ01vZGUoKTogb25kZXdvTmx1MDA4LlNvcnRpbmdNb2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGluZ01vZGU7XG4gIH1cbiAgc2V0IHNvcnRpbmdNb2RlKHZhbHVlOiBvbmRld29ObHUwMDguU29ydGluZ01vZGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zb3J0aW5nTW9kZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEludGVudFNvcnRpbmcuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogSW50ZW50U29ydGluZy5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcnRpbmdGaWVsZDogdGhpcy5zb3J0aW5nRmllbGQsXG4gICAgICBzb3J0aW5nTW9kZTogdGhpcy5zb3J0aW5nTW9kZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IEludGVudFNvcnRpbmcuQXNQcm90b2J1ZkpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBzb3J0aW5nRmllbGQ6IEludGVudFNvcnRpbmcuSW50ZW50U29ydGluZ0ZpZWxkW3RoaXMuc29ydGluZ0ZpZWxkID8/IDBdLFxuICAgICAgc29ydGluZ01vZGU6IG9uZGV3b05sdTAwOC5Tb3J0aW5nTW9kZVt0aGlzLnNvcnRpbmdNb2RlID8/IDBdXG4gICAgfTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbnRlbnRTb3J0aW5nIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBJbnRlbnRTb3J0aW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzb3J0aW5nRmllbGQ/OiBJbnRlbnRTb3J0aW5nLkludGVudFNvcnRpbmdGaWVsZDtcbiAgICBzb3J0aW5nTW9kZT86IG9uZGV3b05sdTAwOC5Tb3J0aW5nTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBJbnRlbnRTb3J0aW5nXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzb3J0aW5nRmllbGQ/OiBzdHJpbmc7XG4gICAgc29ydGluZ01vZGU/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gSW50ZW50U29ydGluZ0ZpZWxkIHtcbiAgICBOT19JTlRFTlRfU09SVElORyA9IDAsXG4gICAgU09SVF9JTlRFTlRfQllfTkFNRSA9IDEsXG4gICAgU09SVF9JTlRFTlRfQllfQ1JFQVRJT05fREFURSA9IDIsXG4gICAgU09SVF9JTlRFTlRfQllfTEFTVF9VUERBVEVEID0gMyxcbiAgICBTT1JUX0lOVEVOVF9CWV9VU0VSU0FZU19DT1VOVCA9IDRcbiAgfVxufVxuIl19