import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu009 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf012 from '@ngx-grpc/well-known-types';
export var IntentView;
(function (IntentView) {
    IntentView[IntentView["INTENT_VIEW_UNSPECIFIED"] = 0] = "INTENT_VIEW_UNSPECIFIED";
    IntentView[IntentView["INTENT_VIEW_FULL"] = 1] = "INTENT_VIEW_FULL";
    IntentView[IntentView["INTENT_VIEW_PARTIAL"] = 2] = "INTENT_VIEW_PARTIAL";
    IntentView[IntentView["INTENT_VIEW_SHALLOW"] = 3] = "INTENT_VIEW_SHALLOW";
    IntentView[IntentView["INTENT_VIEW_MINIMUM"] = 4] = "INTENT_VIEW_MINIMUM";
})(IntentView || (IntentView = {}));
export var IntentCategory;
(function (IntentCategory) {
    IntentCategory[IntentCategory["ALL_INTENTS"] = 0] = "ALL_INTENTS";
    IntentCategory[IntentCategory["DEFAULT_INTENTS"] = 1] = "DEFAULT_INTENTS";
    IntentCategory[IntentCategory["USER_DEFINED_INTENTS"] = 2] = "USER_DEFINED_INTENTS";
    IntentCategory[IntentCategory["DATE_EXPIRED_INTENTS"] = 3] = "DATE_EXPIRED_INTENTS";
    IntentCategory[IntentCategory["DATE_ACTIVE_INTENTS"] = 4] = "DATE_ACTIVE_INTENTS";
    IntentCategory[IntentCategory["DATE_UPCOMING_INTENTS"] = 5] = "DATE_UPCOMING_INTENTS";
})(IntentCategory || (IntentCategory = {}));
/**
 * Message implementation for ondewo.nlu.Intent
 */
export class Intent {
    static { this.id = 'ondewo.nlu.Intent'; }
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
        _instance.startDate = _instance.startDate || undefined;
        _instance.endDate = _instance.endDate || undefined;
        _instance.tags = _instance.tags || [];
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
                    const messageInitializer11 = new ondewoNlu009.Context();
                    _reader.readMessage(messageInitializer11, ondewoNlu009.Context.deserializeBinaryFromReader);
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
                case 36:
                    _instance.startDate = new googleProtobuf007.Timestamp();
                    _reader.readMessage(_instance.startDate, googleProtobuf007.Timestamp.deserializeBinaryFromReader);
                    break;
                case 37:
                    _instance.endDate = new googleProtobuf007.Timestamp();
                    _reader.readMessage(_instance.endDate, googleProtobuf007.Timestamp.deserializeBinaryFromReader);
                    break;
                case 38:
                    (_instance.tags = _instance.tags || []).push(_reader.readString());
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
            _writer.writeRepeatedMessage(11, _instance.outputContexts, ondewoNlu009.Context.serializeBinaryToWriter);
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
        if (_instance.startDate) {
            _writer.writeMessage(36, _instance.startDate, googleProtobuf007.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.endDate) {
            _writer.writeMessage(37, _instance.endDate, googleProtobuf007.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.tags && _instance.tags.length) {
            _writer.writeRepeatedString(38, _instance.tags);
        }
    }
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
        this.outputContexts = (_value.outputContexts || []).map(m => new ondewoNlu009.Context(m));
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
        this.startDate = _value.startDate
            ? new googleProtobuf007.Timestamp(_value.startDate)
            : undefined;
        this.endDate = _value.endDate
            ? new googleProtobuf007.Timestamp(_value.endDate)
            : undefined;
        this.tags = (_value.tags || []).slice();
        Intent.refineValues(this);
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
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = value;
    }
    get endDate() {
        return this._endDate;
    }
    set endDate(value) {
        this._endDate = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
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
            status: this.status,
            startDate: this.startDate ? this.startDate.toObject() : undefined,
            endDate: this.endDate ? this.endDate.toObject() : undefined,
            tags: (this.tags || []).slice()
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
            webhookState: Intent.WebhookState[this.webhookState === null || this.webhookState === undefined
                ? 0
                : this.webhookState],
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
            status: Intent.IntentStatus[this.status === null || this.status === undefined ? 0 : this.status],
            startDate: this.startDate ? this.startDate.toProtobufJSON(options) : null,
            endDate: this.endDate ? this.endDate.toProtobufJSON(options) : null,
            tags: (this.tags || []).slice()
        };
    }
}
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
     * Message implementation for ondewo.nlu.Intent.TrainingPhrase
     */
    class TrainingPhrase {
        static { this.id = 'ondewo.nlu.Intent.TrainingPhrase'; }
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
                    case 6:
                        _instance.languageCode = _reader.readString();
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
            if (_instance.languageCode) {
                _writer.writeString(6, _instance.languageCode);
            }
        }
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
            this.languageCode = _value.languageCode;
            TrainingPhrase.refineValues(this);
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
                timesAddedCount: this.timesAddedCount,
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
                type: Intent.TrainingPhrase.Type[this.type === null || this.type === undefined ? 0 : this.type],
                text: this.text,
                entities: (this.entities || []).map(m => m.toProtobufJSON(options)),
                timesAddedCount: this.timesAddedCount,
                languageCode: this.languageCode
            };
        }
    }
    Intent.TrainingPhrase = TrainingPhrase;
    (function (TrainingPhrase) {
        let Type;
        (function (Type) {
            Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
            Type[Type["EXAMPLE"] = 1] = "EXAMPLE";
            Type[Type["TEMPLATE"] = 2] = "TEMPLATE";
        })(Type = TrainingPhrase.Type || (TrainingPhrase.Type = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.TrainingPhrase.Entity
         */
        class Entity {
            static { this.id = 'ondewo.nlu.Intent.TrainingPhrase.Entity'; }
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
        TrainingPhrase.Entity = Entity;
    })(TrainingPhrase = Intent.TrainingPhrase || (Intent.TrainingPhrase = {}));
    /**
     * Message implementation for ondewo.nlu.Intent.Parameter
     */
    class Parameter {
        static { this.id = 'ondewo.nlu.Intent.Parameter'; }
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
                        const messageInitializer8 = new Intent.Parameter.Prompt();
                        _reader.readMessage(messageInitializer8, Intent.Parameter.Prompt.deserializeBinaryFromReader);
                        (_instance.prompts = _instance.prompts || []).push(messageInitializer8);
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
                _writer.writeRepeatedMessage(8, _instance.prompts, Intent.Parameter.Prompt.serializeBinaryToWriter);
            }
            if (_instance.isList) {
                _writer.writeBool(9, _instance.isList);
            }
        }
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
            this.prompts = (_value.prompts || []).map(m => new Intent.Parameter.Prompt(m));
            this.isList = _value.isList;
            Parameter.refineValues(this);
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
                prompts: (this.prompts || []).map(m => m.toObject()),
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
                prompts: (this.prompts || []).map(m => m.toProtobufJSON(options)),
                isList: this.isList
            };
        }
    }
    Intent.Parameter = Parameter;
    (function (Parameter) {
        /**
         * Message implementation for ondewo.nlu.Intent.Parameter.Prompt
         */
        class Prompt {
            static { this.id = 'ondewo.nlu.Intent.Parameter.Prompt'; }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes) {
                const instance = new Prompt();
                Prompt.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
                return instance;
            }
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance) {
                _instance.name = _instance.name || '';
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
                            _instance.name = _reader.readString();
                            break;
                        case 2:
                            _instance.text = _reader.readString();
                            break;
                        case 3:
                            _instance.languageCode = _reader.readString();
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                Prompt.refineValues(_instance);
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
                if (_instance.text) {
                    _writer.writeString(2, _instance.text);
                }
                if (_instance.languageCode) {
                    _writer.writeString(3, _instance.languageCode);
                }
            }
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Prompt to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.name = _value.name;
                this.text = _value.text;
                this.languageCode = _value.languageCode;
                Prompt.refineValues(this);
            }
            get name() {
                return this._name;
            }
            set name(value) {
                this._name = value;
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
                Prompt.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            }
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject() {
                return {
                    name: this.name,
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
                    name: this.name,
                    text: this.text,
                    languageCode: this.languageCode
                };
            }
        }
        Parameter.Prompt = Prompt;
    })(Parameter = Intent.Parameter || (Intent.Parameter = {}));
    /**
     * Message implementation for ondewo.nlu.Intent.Message
     */
    class Message {
        static { this.id = 'ondewo.nlu.Intent.Message'; }
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
            _instance.name = _instance.name || '';
            _instance.languageCode = _instance.languageCode || '';
            _instance.platform = _instance.platform || 0;
            _instance.isPrompt = _instance.isPrompt || false;
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
                    case 16:
                        _instance.name = _reader.readString();
                        break;
                    case 17:
                        _instance.languageCode = _reader.readString();
                        break;
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
                        _instance.payload = new googleProtobuf012.Struct();
                        _reader.readMessage(_instance.payload, googleProtobuf012.Struct.deserializeBinaryFromReader);
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
                    case 18:
                        _instance.isPrompt = _reader.readBool();
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
            if (_instance.name) {
                _writer.writeString(16, _instance.name);
            }
            if (_instance.languageCode) {
                _writer.writeString(17, _instance.languageCode);
            }
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
                _writer.writeMessage(5, _instance.payload, googleProtobuf012.Struct.serializeBinaryToWriter);
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
            if (_instance.isPrompt) {
                _writer.writeBool(18, _instance.isPrompt);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Message to deeply clone from
         */
        constructor(_value) {
            this._message = Message.MessageCase.none;
            _value = _value || {};
            this.name = _value.name;
            this.languageCode = _value.languageCode;
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
                ? new googleProtobuf012.Struct(_value.payload)
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
            this.isPrompt = _value.isPrompt;
            Message.refineValues(this);
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
        get isPrompt() {
            return this._isPrompt;
        }
        set isPrompt(value) {
            this._isPrompt = value;
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
                name: this.name,
                languageCode: this.languageCode,
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
                platform: this.platform,
                isPrompt: this.isPrompt
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
                languageCode: this.languageCode,
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
                platform: Intent.Message.Platform[this.platform === null || this.platform === undefined
                    ? 0
                    : this.platform],
                isPrompt: this.isPrompt
            };
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
            Platform[Platform["PLATFORM_UNSPECIFIED"] = 0] = "PLATFORM_UNSPECIFIED";
            Platform[Platform["FACEBOOK"] = 1] = "FACEBOOK";
            Platform[Platform["SLACK"] = 2] = "SLACK";
            Platform[Platform["TELEGRAM"] = 3] = "TELEGRAM";
            Platform[Platform["KIK"] = 4] = "KIK";
            Platform[Platform["SKYPE"] = 5] = "SKYPE";
            Platform[Platform["LINE"] = 6] = "LINE";
            Platform[Platform["VIBER"] = 7] = "VIBER";
            Platform[Platform["ACTIONS_ON_GOOGLE"] = 8] = "ACTIONS_ON_GOOGLE";
            Platform[Platform["PLACEHOLDER_1"] = 9] = "PLACEHOLDER_1";
            Platform[Platform["PLACEHOLDER_2"] = 10] = "PLACEHOLDER_2";
            Platform[Platform["PLACEHOLDER_3"] = 11] = "PLACEHOLDER_3";
            Platform[Platform["PLACEHOLDER_4"] = 12] = "PLACEHOLDER_4";
            Platform[Platform["PLACEHOLDER_5"] = 13] = "PLACEHOLDER_5";
            Platform[Platform["PLACEHOLDER_6"] = 14] = "PLACEHOLDER_6";
            Platform[Platform["PLACEHOLDER_7"] = 15] = "PLACEHOLDER_7";
            Platform[Platform["PLACEHOLDER_8"] = 16] = "PLACEHOLDER_8";
            Platform[Platform["PLACEHOLDER_9"] = 17] = "PLACEHOLDER_9";
            Platform[Platform["PLACEHOLDER_10"] = 18] = "PLACEHOLDER_10";
            Platform[Platform["PLACEHOLDER_11"] = 19] = "PLACEHOLDER_11";
            Platform[Platform["PLACEHOLDER_12"] = 20] = "PLACEHOLDER_12";
            Platform[Platform["PLACEHOLDER_13"] = 21] = "PLACEHOLDER_13";
            Platform[Platform["PLACEHOLDER_14"] = 22] = "PLACEHOLDER_14";
            Platform[Platform["PLACEHOLDER_15"] = 23] = "PLACEHOLDER_15";
            Platform[Platform["PLACEHOLDER_16"] = 24] = "PLACEHOLDER_16";
            Platform[Platform["PLACEHOLDER_17"] = 25] = "PLACEHOLDER_17";
            Platform[Platform["PLACEHOLDER_18"] = 26] = "PLACEHOLDER_18";
            Platform[Platform["PLACEHOLDER_19"] = 27] = "PLACEHOLDER_19";
            Platform[Platform["PLACEHOLDER_20"] = 28] = "PLACEHOLDER_20";
        })(Platform = Message.Platform || (Message.Platform = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Text
         */
        class Text {
            static { this.id = 'ondewo.nlu.Intent.Message.Text'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Text to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.text = (_value.text || []).slice();
                Text.refineValues(this);
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
        Message.Text = Text;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Image
         */
        class Image {
            static { this.id = 'ondewo.nlu.Intent.Message.Image'; }
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
        Message.Image = Image;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.QuickReplies
         */
        class QuickReplies {
            static { this.id = 'ondewo.nlu.Intent.Message.QuickReplies'; }
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
        Message.QuickReplies = QuickReplies;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Card
         */
        class Card {
            static { this.id = 'ondewo.nlu.Intent.Message.Card'; }
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
        Message.Card = Card;
        (function (Card) {
            /**
             * Message implementation for ondewo.nlu.Intent.Message.Card.Button
             */
            class Button {
                static { this.id = 'ondewo.nlu.Intent.Message.Card.Button'; }
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
            Card.Button = Button;
        })(Card = Message.Card || (Message.Card = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.Message.SimpleResponse
         */
        class SimpleResponse {
            static { this.id = 'ondewo.nlu.Intent.Message.SimpleResponse'; }
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
        Message.SimpleResponse = SimpleResponse;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.SimpleResponses
         */
        class SimpleResponses {
            static { this.id = 'ondewo.nlu.Intent.Message.SimpleResponses'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SimpleResponses to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.simpleResponses = (_value.simpleResponses || []).map(m => new Intent.Message.SimpleResponse(m));
                SimpleResponses.refineValues(this);
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
        Message.SimpleResponses = SimpleResponses;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.BasicCard
         */
        class BasicCard {
            static { this.id = 'ondewo.nlu.Intent.Message.BasicCard'; }
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
        Message.BasicCard = BasicCard;
        (function (BasicCard) {
            /**
             * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button
             */
            class Button {
                static { this.id = 'ondewo.nlu.Intent.Message.BasicCard.Button'; }
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
            BasicCard.Button = Button;
            (function (Button) {
                /**
                 * Message implementation for ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction
                 */
                class OpenUriAction {
                    static { this.id = 'ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction'; }
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
                    /**
                     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                     * @param _value initial values object or instance of OpenUriAction to deeply clone from
                     */
                    constructor(_value) {
                        _value = _value || {};
                        this.uri = _value.uri;
                        OpenUriAction.refineValues(this);
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
                Button.OpenUriAction = OpenUriAction;
            })(Button = BasicCard.Button || (BasicCard.Button = {}));
        })(BasicCard = Message.BasicCard || (Message.BasicCard = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Suggestion
         */
        class Suggestion {
            static { this.id = 'ondewo.nlu.Intent.Message.Suggestion'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestion to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.title = _value.title;
                Suggestion.refineValues(this);
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
        Message.Suggestion = Suggestion;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Suggestions
         */
        class Suggestions {
            static { this.id = 'ondewo.nlu.Intent.Message.Suggestions'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestions to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.suggestions = (_value.suggestions || []).map(m => new Intent.Message.Suggestion(m));
                Suggestions.refineValues(this);
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
        Message.Suggestions = Suggestions;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.LinkOutSuggestion
         */
        class LinkOutSuggestion {
            static { this.id = 'ondewo.nlu.Intent.Message.LinkOutSuggestion'; }
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
        Message.LinkOutSuggestion = LinkOutSuggestion;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.ListSelect
         */
        class ListSelect {
            static { this.id = 'ondewo.nlu.Intent.Message.ListSelect'; }
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
        Message.ListSelect = ListSelect;
        (function (ListSelect) {
            /**
             * Message implementation for ondewo.nlu.Intent.Message.ListSelect.Item
             */
            class Item {
                static { this.id = 'ondewo.nlu.Intent.Message.ListSelect.Item'; }
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
            ListSelect.Item = Item;
        })(ListSelect = Message.ListSelect || (Message.ListSelect = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect
         */
        class CarouselSelect {
            static { this.id = 'ondewo.nlu.Intent.Message.CarouselSelect'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of CarouselSelect to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.items = (_value.items || []).map(m => new Intent.Message.CarouselSelect.Item(m));
                CarouselSelect.refineValues(this);
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
        Message.CarouselSelect = CarouselSelect;
        (function (CarouselSelect) {
            /**
             * Message implementation for ondewo.nlu.Intent.Message.CarouselSelect.Item
             */
            class Item {
                static { this.id = 'ondewo.nlu.Intent.Message.CarouselSelect.Item'; }
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
            CarouselSelect.Item = Item;
        })(CarouselSelect = Message.CarouselSelect || (Message.CarouselSelect = {}));
        /**
         * Message implementation for ondewo.nlu.Intent.Message.HTMLText
         */
        class HTMLText {
            static { this.id = 'ondewo.nlu.Intent.Message.HTMLText'; }
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
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of HTMLText to deeply clone from
             */
            constructor(_value) {
                _value = _value || {};
                this.text = (_value.text || []).slice();
                HTMLText.refineValues(this);
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
        Message.HTMLText = HTMLText;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Video
         */
        class Video {
            static { this.id = 'ondewo.nlu.Intent.Message.Video'; }
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
        Message.Video = Video;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.Audio
         */
        class Audio {
            static { this.id = 'ondewo.nlu.Intent.Message.Audio'; }
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
        Message.Audio = Audio;
        /**
         * Message implementation for ondewo.nlu.Intent.Message.SelectItemInfo
         */
        class SelectItemInfo {
            static { this.id = 'ondewo.nlu.Intent.Message.SelectItemInfo'; }
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
        Message.SelectItemInfo = SelectItemInfo;
    })(Message = Intent.Message || (Intent.Message = {}));
    /**
     * Message implementation for ondewo.nlu.Intent.FollowupIntentInfo
     */
    class FollowupIntentInfo {
        static { this.id = 'ondewo.nlu.Intent.FollowupIntentInfo'; }
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
    Intent.FollowupIntentInfo = FollowupIntentInfo;
})(Intent || (Intent = {}));
/**
 * Message implementation for ondewo.nlu.ListIntentsRequest
 */
export class ListIntentsRequest {
    static { this.id = 'ondewo.nlu.ListIntentsRequest'; }
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
        _instance.filterByTags = _instance.filterByTags || [];
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
                case 8:
                    (_instance.filterByTags = _instance.filterByTags || []).push(_reader.readString());
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
        if (_instance.filterByTags && _instance.filterByTags.length) {
            _writer.writeRepeatedString(8, _instance.filterByTags);
        }
    }
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
        this.filterByTags = (_value.filterByTags || []).slice();
        ListIntentsRequest.refineValues(this);
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
    get filterByTags() {
        return this._filterByTags;
    }
    set filterByTags(value) {
        this._filterByTags = value;
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
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined,
            filterByTags: (this.filterByTags || []).slice()
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
            intentView: IntentView[this.intentView === null || this.intentView === undefined
                ? 0
                : this.intentView],
            pageToken: this.pageToken,
            filterByCategory: IntentCategory[this.filterByCategory === null || this.filterByCategory === undefined
                ? 0
                : this.filterByCategory],
            sortByField: this.sortByField
                ? this.sortByField.toProtobufJSON(options)
                : null,
            filterByTags: (this.filterByTags || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListIntentsResponse
 */
export class ListIntentsResponse {
    static { this.id = 'ondewo.nlu.ListIntentsResponse'; }
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
/**
 * Message implementation for ondewo.nlu.GetIntentRequest
 */
export class GetIntentRequest {
    static { this.id = 'ondewo.nlu.GetIntentRequest'; }
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
        return {
            name: this.name,
            languageCode: this.languageCode,
            intentView: IntentView[this.intentView === null || this.intentView === undefined
                ? 0
                : this.intentView],
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.CreateIntentRequest
 */
export class CreateIntentRequest {
    static { this.id = 'ondewo.nlu.CreateIntentRequest'; }
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
        return {
            parent: this.parent,
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            languageCode: this.languageCode,
            intentView: IntentView[this.intentView === null || this.intentView === undefined
                ? 0
                : this.intentView]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateIntentRequest
 */
export class UpdateIntentRequest {
    static { this.id = 'ondewo.nlu.UpdateIntentRequest'; }
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
        return {
            intent: this.intent ? this.intent.toProtobufJSON(options) : null,
            languageCode: this.languageCode,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null,
            intentView: IntentView[this.intentView === null || this.intentView === undefined
                ? 0
                : this.intentView]
        };
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteIntentRequest
 */
export class DeleteIntentRequest {
    static { this.id = 'ondewo.nlu.DeleteIntentRequest'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteIntentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        DeleteIntentRequest.refineValues(this);
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
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsRequest
 */
export class BatchUpdateIntentsRequest {
    static { this.id = 'ondewo.nlu.BatchUpdateIntentsRequest'; }
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
        return {
            parent: this.parent,
            intentBatchUri: this.intentBatchUri === null || this.intentBatchUri === undefined
                ? null
                : this.intentBatchUri,
            intentBatchInline: this.intentBatchInline
                ? this.intentBatchInline.toProtobufJSON(options)
                : null,
            languageCode: this.languageCode,
            updateMask: this.updateMask
                ? this.updateMask.toProtobufJSON(options)
                : null,
            intentView: IntentView[this.intentView === null || this.intentView === undefined
                ? 0
                : this.intentView]
        };
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
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsResponse
 */
export class BatchUpdateIntentsResponse {
    static { this.id = 'ondewo.nlu.BatchUpdateIntentsResponse'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateIntentsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intents = (_value.intents || []).map(m => new Intent(m));
        BatchUpdateIntentsResponse.refineValues(this);
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
/**
 * Message implementation for ondewo.nlu.BatchDeleteIntentsRequest
 */
export class BatchDeleteIntentsRequest {
    static { this.id = 'ondewo.nlu.BatchDeleteIntentsRequest'; }
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
/**
 * Message implementation for ondewo.nlu.IntentBatch
 */
export class IntentBatch {
    static { this.id = 'ondewo.nlu.IntentBatch'; }
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentBatch to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intents = (_value.intents || []).map(m => new Intent(m));
        IntentBatch.refineValues(this);
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
/**
 * Message implementation for ondewo.nlu.IntentSorting
 */
export class IntentSorting {
    static { this.id = 'ondewo.nlu.IntentSorting'; }
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
        return {
            sortingField: IntentSorting.IntentSortingField[this.sortingField === null || this.sortingField === undefined
                ? 0
                : this.sortingField],
            sortingMode: ondewoNlu010.SortingMode[this.sortingMode === null || this.sortingMode === undefined
                ? 0
                : this.sortingMode]
        };
    }
}
(function (IntentSorting) {
    let IntentSortingField;
    (function (IntentSortingField) {
        IntentSortingField[IntentSortingField["NO_INTENT_SORTING"] = 0] = "NO_INTENT_SORTING";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_NAME"] = 1] = "SORT_INTENT_BY_NAME";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_CREATION_DATE"] = 2] = "SORT_INTENT_BY_CREATION_DATE";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_LAST_UPDATED"] = 3] = "SORT_INTENT_BY_LAST_UPDATED";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_USERSAYS_COUNT"] = 4] = "SORT_INTENT_BY_USERSAYS_COUNT";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_START_DATE"] = 5] = "SORT_INTENT_BY_START_DATE";
        IntentSortingField[IntentSortingField["SORT_INTENT_BY_END_DATE"] = 6] = "SORT_INTENT_BY_END_DATE";
    })(IntentSortingField = IntentSorting.IntentSortingField || (IntentSorting.IntentSortingField = {}));
})(IntentSorting || (IntentSorting = {}));
/**
 * Message implementation for ondewo.nlu.IntentTagRequest
 */
export class IntentTagRequest {
    static { this.id = 'ondewo.nlu.IntentTagRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new IntentTagRequest();
        IntentTagRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentName = _instance.intentName || '';
        _instance.tags = _instance.tags || [];
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
                    (_instance.tags = _instance.tags || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        IntentTagRequest.refineValues(_instance);
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
        if (_instance.tags && _instance.tags.length) {
            _writer.writeRepeatedString(2, _instance.tags);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentTagRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        this.tags = (_value.tags || []).slice();
        IntentTagRequest.refineValues(this);
    }
    get intentName() {
        return this._intentName;
    }
    set intentName(value) {
        this._intentName = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        IntentTagRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentName: this.intentName,
            tags: (this.tags || []).slice()
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
            tags: (this.tags || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetIntentTagsRequest
 */
export class GetIntentTagsRequest {
    static { this.id = 'ondewo.nlu.GetIntentTagsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetIntentTagsRequest();
        GetIntentTagsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
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
                    _instance.intentName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetIntentTagsRequest.refineValues(_instance);
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
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIntentTagsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        GetIntentTagsRequest.refineValues(this);
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
        GetIntentTagsRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
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
            intentName: this.intentName
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetIntentTagsResponse
 */
export class GetIntentTagsResponse {
    static { this.id = 'ondewo.nlu.GetIntentTagsResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetIntentTagsResponse();
        GetIntentTagsResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentTags = _instance.intentTags || [];
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
                    (_instance.intentTags = _instance.intentTags || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        GetIntentTagsResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.intentTags && _instance.intentTags.length) {
            _writer.writeRepeatedString(1, _instance.intentTags);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIntentTagsResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentTags = (_value.intentTags || []).slice();
        GetIntentTagsResponse.refineValues(this);
    }
    get intentTags() {
        return this._intentTags;
    }
    set intentTags(value) {
        this._intentTags = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        GetIntentTagsResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentTags: (this.intentTags || []).slice()
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
            intentTags: (this.intentTags || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.GetAllIntentTagsRequest
 */
export class GetAllIntentTagsRequest {
    static { this.id = 'ondewo.nlu.GetAllIntentTagsRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new GetAllIntentTagsRequest();
        GetAllIntentTagsRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
        GetAllIntentTagsRequest.refineValues(_instance);
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
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetAllIntentTagsRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        GetAllIntentTagsRequest.refineValues(this);
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
        GetAllIntentTagsRequest.serializeBinaryToWriter(this, writer);
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
/**
 * Message implementation for ondewo.nlu.BatchUpdateTrainingPhrasesRequest
 */
export class BatchUpdateTrainingPhrasesRequest {
    static { this.id = 'ondewo.nlu.BatchUpdateTrainingPhrasesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchUpdateTrainingPhrasesRequest();
        BatchUpdateTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhrases = _instance.trainingPhrases || [];
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
                    const messageInitializer1 = new Intent.TrainingPhrase();
                    _reader.readMessage(messageInitializer1, Intent.TrainingPhrase.deserializeBinaryFromReader);
                    (_instance.trainingPhrases = _instance.trainingPhrases || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchUpdateTrainingPhrasesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
            _writer.writeRepeatedMessage(1, _instance.trainingPhrases, Intent.TrainingPhrase.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhrases = (_value.trainingPhrases || []).map(m => new Intent.TrainingPhrase(m));
        BatchUpdateTrainingPhrasesRequest.refineValues(this);
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchUpdateTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject())
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
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.TrainingPhraseStatus
 */
export class TrainingPhraseStatus {
    static { this.id = 'ondewo.nlu.TrainingPhraseStatus'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new TrainingPhraseStatus();
        TrainingPhraseStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                    _instance.trainingPhrase = new Intent.TrainingPhrase();
                    _reader.readMessage(_instance.trainingPhrase, Intent.TrainingPhrase.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.errorMessage = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        TrainingPhraseStatus.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhrase) {
            _writer.writeMessage(1, _instance.trainingPhrase, Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.errorMessage || _instance.errorMessage === '') {
            _writer.writeString(2, _instance.errorMessage);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of TrainingPhraseStatus to deeply clone from
     */
    constructor(_value) {
        this._phraseOrStatus = TrainingPhraseStatus.PhraseOrStatusCase.none;
        _value = _value || {};
        this.trainingPhrase = _value.trainingPhrase
            ? new Intent.TrainingPhrase(_value.trainingPhrase)
            : undefined;
        this.errorMessage = _value.errorMessage;
        TrainingPhraseStatus.refineValues(this);
    }
    get trainingPhrase() {
        return this._trainingPhrase;
    }
    set trainingPhrase(value) {
        if (value !== undefined && value !== null) {
            this._errorMessage = undefined;
            this._phraseOrStatus =
                TrainingPhraseStatus.PhraseOrStatusCase.trainingPhrase;
        }
        this._trainingPhrase = value;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        if (value !== undefined && value !== null) {
            this._trainingPhrase = undefined;
            this._phraseOrStatus =
                TrainingPhraseStatus.PhraseOrStatusCase.errorMessage;
        }
        this._errorMessage = value;
    }
    get phraseOrStatus() {
        return this._phraseOrStatus;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        TrainingPhraseStatus.serializeBinaryToWriter(this, writer);
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
            errorMessage: this.errorMessage
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
            errorMessage: this.errorMessage === null || this.errorMessage === undefined
                ? null
                : this.errorMessage
        };
    }
}
(function (TrainingPhraseStatus) {
    let PhraseOrStatusCase;
    (function (PhraseOrStatusCase) {
        PhraseOrStatusCase[PhraseOrStatusCase["none"] = 0] = "none";
        PhraseOrStatusCase[PhraseOrStatusCase["trainingPhrase"] = 1] = "trainingPhrase";
        PhraseOrStatusCase[PhraseOrStatusCase["errorMessage"] = 2] = "errorMessage";
    })(PhraseOrStatusCase = TrainingPhraseStatus.PhraseOrStatusCase || (TrainingPhraseStatus.PhraseOrStatusCase = {}));
})(TrainingPhraseStatus || (TrainingPhraseStatus = {}));
/**
 * Message implementation for ondewo.nlu.BatchTrainingPhrasesStatusResponse
 */
export class BatchTrainingPhrasesStatusResponse {
    static { this.id = 'ondewo.nlu.BatchTrainingPhrasesStatusResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchTrainingPhrasesStatusResponse();
        BatchTrainingPhrasesStatusResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhraseStatuses = _instance.trainingPhraseStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new TrainingPhraseStatus();
                    _reader.readMessage(messageInitializer1, TrainingPhraseStatus.deserializeBinaryFromReader);
                    (_instance.trainingPhraseStatuses =
                        _instance.trainingPhraseStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchTrainingPhrasesStatusResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhraseStatuses &&
            _instance.trainingPhraseStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.trainingPhraseStatuses, TrainingPhraseStatus.serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchTrainingPhrasesStatusResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhraseStatuses = (_value.trainingPhraseStatuses || []).map(m => new TrainingPhraseStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchTrainingPhrasesStatusResponse.refineValues(this);
    }
    get trainingPhraseStatuses() {
        return this._trainingPhraseStatuses;
    }
    set trainingPhraseStatuses(value) {
        this._trainingPhraseStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchTrainingPhrasesStatusResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhraseStatuses: (this.trainingPhraseStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            trainingPhraseStatuses: (this.trainingPhraseStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest
 */
export class BatchCreateTrainingPhrasesRequest {
    static { this.id = 'ondewo.nlu.BatchCreateTrainingPhrasesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchCreateTrainingPhrasesRequest();
        BatchCreateTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhraseRequests = _instance.trainingPhraseRequests || [];
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
                    const messageInitializer1 = new BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest();
                    _reader.readMessage(messageInitializer1, BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
                        .deserializeBinaryFromReader);
                    (_instance.trainingPhraseRequests =
                        _instance.trainingPhraseRequests || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchCreateTrainingPhrasesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhraseRequests &&
            _instance.trainingPhraseRequests.length) {
            _writer.writeRepeatedMessage(1, _instance.trainingPhraseRequests, BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
                .serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchCreateTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhraseRequests = (_value.trainingPhraseRequests || []).map(m => new BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest(m));
        BatchCreateTrainingPhrasesRequest.refineValues(this);
    }
    get trainingPhraseRequests() {
        return this._trainingPhraseRequests;
    }
    set trainingPhraseRequests(value) {
        this._trainingPhraseRequests = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchCreateTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhraseRequests: (this.trainingPhraseRequests || []).map(m => m.toObject())
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
            trainingPhraseRequests: (this.trainingPhraseRequests || []).map(m => m.toProtobufJSON(options))
        };
    }
}
(function (BatchCreateTrainingPhrasesRequest) {
    /**
     * Message implementation for ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
     */
    class CreateTrainingPhraseRequest {
        static { this.id = 'ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new CreateTrainingPhraseRequest();
            CreateTrainingPhraseRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.intentName = _instance.intentName || '';
            _instance.trainingPhrase = _instance.trainingPhrase || undefined;
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
                        _instance.trainingPhrase = new Intent.TrainingPhrase();
                        _reader.readMessage(_instance.trainingPhrase, Intent.TrainingPhrase.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CreateTrainingPhraseRequest.refineValues(_instance);
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
            if (_instance.trainingPhrase) {
                _writer.writeMessage(2, _instance.trainingPhrase, Intent.TrainingPhrase.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateTrainingPhraseRequest to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.intentName = _value.intentName;
            this.trainingPhrase = _value.trainingPhrase
                ? new Intent.TrainingPhrase(_value.trainingPhrase)
                : undefined;
            CreateTrainingPhraseRequest.refineValues(this);
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get trainingPhrase() {
            return this._trainingPhrase;
        }
        set trainingPhrase(value) {
            this._trainingPhrase = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            CreateTrainingPhraseRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                intentName: this.intentName,
                trainingPhrase: this.trainingPhrase
                    ? this.trainingPhrase.toObject()
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
                intentName: this.intentName,
                trainingPhrase: this.trainingPhrase
                    ? this.trainingPhrase.toProtobufJSON(options)
                    : null
            };
        }
    }
    BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest = CreateTrainingPhraseRequest;
})(BatchCreateTrainingPhrasesRequest || (BatchCreateTrainingPhrasesRequest = {}));
/**
 * Message implementation for ondewo.nlu.BatchGetTrainingPhrasesRequest
 */
export class BatchGetTrainingPhrasesRequest {
    static { this.id = 'ondewo.nlu.BatchGetTrainingPhrasesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchGetTrainingPhrasesRequest();
        BatchGetTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchGetTrainingPhrasesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchGetTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchGetTrainingPhrasesRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchGetTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesRequest
 */
export class BatchDeleteTrainingPhrasesRequest {
    static { this.id = 'ondewo.nlu.BatchDeleteTrainingPhrasesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteTrainingPhrasesRequest();
        BatchDeleteTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteTrainingPhrasesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchDeleteTrainingPhrasesRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse
 */
export class BatchDeleteTrainingPhrasesResponse {
    static { this.id = 'ondewo.nlu.BatchDeleteTrainingPhrasesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteTrainingPhrasesResponse();
        BatchDeleteTrainingPhrasesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.deleteStatuses = _instance.deleteStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus();
                    _reader.readMessage(messageInitializer1, BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
                        .deserializeBinaryFromReader);
                    (_instance.deleteStatuses = _instance.deleteStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteTrainingPhrasesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.deleteStatuses, BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
                .serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.deleteStatuses = (_value.deleteStatuses || []).map(m => new BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchDeleteTrainingPhrasesResponse.refineValues(this);
    }
    get deleteStatuses() {
        return this._deleteStatuses;
    }
    set deleteStatuses(value) {
        this._deleteStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
(function (BatchDeleteTrainingPhrasesResponse) {
    /**
     * Message implementation for ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
     */
    class DeleteTrainingPhraseStatus {
        static { this.id = 'ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new DeleteTrainingPhraseStatus();
            DeleteTrainingPhraseStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.successfullyDeleted = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.successfullyDeleted, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.errorMessage = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DeleteTrainingPhraseStatus.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.successfullyDeleted) {
                _writer.writeMessage(1, _instance.successfullyDeleted, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
            if (_instance.errorMessage || _instance.errorMessage === '') {
                _writer.writeString(2, _instance.errorMessage);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteTrainingPhraseStatus to deeply clone from
         */
        constructor(_value) {
            this._deleteStatus = DeleteTrainingPhraseStatus.DeleteStatusCase.none;
            _value = _value || {};
            this.successfullyDeleted = _value.successfullyDeleted
                ? new googleProtobuf003.Empty(_value.successfullyDeleted)
                : undefined;
            this.errorMessage = _value.errorMessage;
            DeleteTrainingPhraseStatus.refineValues(this);
        }
        get successfullyDeleted() {
            return this._successfullyDeleted;
        }
        set successfullyDeleted(value) {
            if (value !== undefined && value !== null) {
                this._errorMessage = undefined;
                this._deleteStatus =
                    DeleteTrainingPhraseStatus.DeleteStatusCase.successfullyDeleted;
            }
            this._successfullyDeleted = value;
        }
        get errorMessage() {
            return this._errorMessage;
        }
        set errorMessage(value) {
            if (value !== undefined && value !== null) {
                this._successfullyDeleted = undefined;
                this._deleteStatus =
                    DeleteTrainingPhraseStatus.DeleteStatusCase.errorMessage;
            }
            this._errorMessage = value;
        }
        get deleteStatus() {
            return this._deleteStatus;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            DeleteTrainingPhraseStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toObject()
                    : undefined,
                errorMessage: this.errorMessage
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
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toProtobufJSON(options)
                    : null,
                errorMessage: this.errorMessage === null || this.errorMessage === undefined
                    ? null
                    : this.errorMessage
            };
        }
    }
    BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus = DeleteTrainingPhraseStatus;
    (function (DeleteTrainingPhraseStatus) {
        let DeleteStatusCase;
        (function (DeleteStatusCase) {
            DeleteStatusCase[DeleteStatusCase["none"] = 0] = "none";
            DeleteStatusCase[DeleteStatusCase["successfullyDeleted"] = 1] = "successfullyDeleted";
            DeleteStatusCase[DeleteStatusCase["errorMessage"] = 2] = "errorMessage";
        })(DeleteStatusCase = DeleteTrainingPhraseStatus.DeleteStatusCase || (DeleteTrainingPhraseStatus.DeleteStatusCase = {}));
    })(DeleteTrainingPhraseStatus = BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus || (BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus = {}));
})(BatchDeleteTrainingPhrasesResponse || (BatchDeleteTrainingPhrasesResponse = {}));
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesRequest
 */
export class ListTrainingPhrasesRequest {
    static { this.id = 'ondewo.nlu.ListTrainingPhrasesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListTrainingPhrasesRequest();
        ListTrainingPhrasesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentName = _instance.intentName || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.intentName = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListTrainingPhrasesRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.pageToken) {
            _writer.writeString(3, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListTrainingPhrasesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        this.languageCode = _value.languageCode;
        this.pageToken = _value.pageToken;
        ListTrainingPhrasesRequest.refineValues(this);
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
        ListTrainingPhrasesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentName: this.intentName,
            languageCode: this.languageCode,
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
            intentName: this.intentName,
            languageCode: this.languageCode,
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesResponse
 */
export class ListTrainingPhrasesResponse {
    static { this.id = 'ondewo.nlu.ListTrainingPhrasesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListTrainingPhrasesResponse();
        ListTrainingPhrasesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhrases = _instance.trainingPhrases || [];
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
                    const messageInitializer1 = new Intent.TrainingPhrase();
                    _reader.readMessage(messageInitializer1, Intent.TrainingPhrase.deserializeBinaryFromReader);
                    (_instance.trainingPhrases = _instance.trainingPhrases || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListTrainingPhrasesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
            _writer.writeRepeatedMessage(1, _instance.trainingPhrases, Intent.TrainingPhrase.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListTrainingPhrasesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhrases = (_value.trainingPhrases || []).map(m => new Intent.TrainingPhrase(m));
        this.nextPageToken = _value.nextPageToken;
        ListTrainingPhrasesResponse.refineValues(this);
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
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
        ListTrainingPhrasesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toObject()),
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
            trainingPhrases: (this.trainingPhrases || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse
 */
export class BatchResponseMessagesStatusResponse {
    static { this.id = 'ondewo.nlu.BatchResponseMessagesStatusResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchResponseMessagesStatusResponse();
        BatchResponseMessagesStatusResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseMessageStatuses = _instance.responseMessageStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new BatchResponseMessagesStatusResponse.ResponseMessageStatus();
                    _reader.readMessage(messageInitializer1, BatchResponseMessagesStatusResponse.ResponseMessageStatus
                        .deserializeBinaryFromReader);
                    (_instance.responseMessageStatuses =
                        _instance.responseMessageStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchResponseMessagesStatusResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseMessageStatuses &&
            _instance.responseMessageStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.responseMessageStatuses, BatchResponseMessagesStatusResponse.ResponseMessageStatus
                .serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchResponseMessagesStatusResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseMessageStatuses = (_value.responseMessageStatuses || []).map(m => new BatchResponseMessagesStatusResponse.ResponseMessageStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchResponseMessagesStatusResponse.refineValues(this);
    }
    get responseMessageStatuses() {
        return this._responseMessageStatuses;
    }
    set responseMessageStatuses(value) {
        this._responseMessageStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchResponseMessagesStatusResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseMessageStatuses: (this.responseMessageStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            responseMessageStatuses: (this.responseMessageStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
(function (BatchResponseMessagesStatusResponse) {
    /**
     * Message implementation for ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus
     */
    class ResponseMessageStatus {
        static { this.id = 'ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ResponseMessageStatus();
            ResponseMessageStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.responseMessage = new Intent.Message();
                        _reader.readMessage(_instance.responseMessage, Intent.Message.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.errorMessage = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ResponseMessageStatus.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.responseMessage) {
                _writer.writeMessage(1, _instance.responseMessage, Intent.Message.serializeBinaryToWriter);
            }
            if (_instance.errorMessage || _instance.errorMessage === '') {
                _writer.writeString(2, _instance.errorMessage);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ResponseMessageStatus to deeply clone from
         */
        constructor(_value) {
            this._phraseOrStatus = ResponseMessageStatus.PhraseOrStatusCase.none;
            _value = _value || {};
            this.responseMessage = _value.responseMessage
                ? new Intent.Message(_value.responseMessage)
                : undefined;
            this.errorMessage = _value.errorMessage;
            ResponseMessageStatus.refineValues(this);
        }
        get responseMessage() {
            return this._responseMessage;
        }
        set responseMessage(value) {
            if (value !== undefined && value !== null) {
                this._errorMessage = undefined;
                this._phraseOrStatus =
                    ResponseMessageStatus.PhraseOrStatusCase.responseMessage;
            }
            this._responseMessage = value;
        }
        get errorMessage() {
            return this._errorMessage;
        }
        set errorMessage(value) {
            if (value !== undefined && value !== null) {
                this._responseMessage = undefined;
                this._phraseOrStatus =
                    ResponseMessageStatus.PhraseOrStatusCase.errorMessage;
            }
            this._errorMessage = value;
        }
        get phraseOrStatus() {
            return this._phraseOrStatus;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            ResponseMessageStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                responseMessage: this.responseMessage
                    ? this.responseMessage.toObject()
                    : undefined,
                errorMessage: this.errorMessage
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
                responseMessage: this.responseMessage
                    ? this.responseMessage.toProtobufJSON(options)
                    : null,
                errorMessage: this.errorMessage === null || this.errorMessage === undefined
                    ? null
                    : this.errorMessage
            };
        }
    }
    BatchResponseMessagesStatusResponse.ResponseMessageStatus = ResponseMessageStatus;
    (function (ResponseMessageStatus) {
        let PhraseOrStatusCase;
        (function (PhraseOrStatusCase) {
            PhraseOrStatusCase[PhraseOrStatusCase["none"] = 0] = "none";
            PhraseOrStatusCase[PhraseOrStatusCase["responseMessage"] = 1] = "responseMessage";
            PhraseOrStatusCase[PhraseOrStatusCase["errorMessage"] = 2] = "errorMessage";
        })(PhraseOrStatusCase = ResponseMessageStatus.PhraseOrStatusCase || (ResponseMessageStatus.PhraseOrStatusCase = {}));
    })(ResponseMessageStatus = BatchResponseMessagesStatusResponse.ResponseMessageStatus || (BatchResponseMessagesStatusResponse.ResponseMessageStatus = {}));
})(BatchResponseMessagesStatusResponse || (BatchResponseMessagesStatusResponse = {}));
/**
 * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest
 */
export class BatchCreateResponseMessagesRequest {
    static { this.id = 'ondewo.nlu.BatchCreateResponseMessagesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchCreateResponseMessagesRequest();
        BatchCreateResponseMessagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseMessageRequests = _instance.responseMessageRequests || [];
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
                    const messageInitializer1 = new BatchCreateResponseMessagesRequest.CreateResponseMessageRequest();
                    _reader.readMessage(messageInitializer1, BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
                        .deserializeBinaryFromReader);
                    (_instance.responseMessageRequests =
                        _instance.responseMessageRequests || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchCreateResponseMessagesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseMessageRequests &&
            _instance.responseMessageRequests.length) {
            _writer.writeRepeatedMessage(1, _instance.responseMessageRequests, BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
                .serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchCreateResponseMessagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseMessageRequests = (_value.responseMessageRequests || []).map(m => new BatchCreateResponseMessagesRequest.CreateResponseMessageRequest(m));
        BatchCreateResponseMessagesRequest.refineValues(this);
    }
    get responseMessageRequests() {
        return this._responseMessageRequests;
    }
    set responseMessageRequests(value) {
        this._responseMessageRequests = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchCreateResponseMessagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseMessageRequests: (this.responseMessageRequests || []).map(m => m.toObject())
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
            responseMessageRequests: (this.responseMessageRequests || []).map(m => m.toProtobufJSON(options))
        };
    }
}
(function (BatchCreateResponseMessagesRequest) {
    /**
     * Message implementation for ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
     */
    class CreateResponseMessageRequest {
        static { this.id = 'ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new CreateResponseMessageRequest();
            CreateResponseMessageRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.intentName = _instance.intentName || '';
            _instance.responseMessage = _instance.responseMessage || undefined;
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
                        _instance.responseMessage = new Intent.Message();
                        _reader.readMessage(_instance.responseMessage, Intent.Message.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CreateResponseMessageRequest.refineValues(_instance);
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
            if (_instance.responseMessage) {
                _writer.writeMessage(2, _instance.responseMessage, Intent.Message.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateResponseMessageRequest to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.intentName = _value.intentName;
            this.responseMessage = _value.responseMessage
                ? new Intent.Message(_value.responseMessage)
                : undefined;
            CreateResponseMessageRequest.refineValues(this);
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get responseMessage() {
            return this._responseMessage;
        }
        set responseMessage(value) {
            this._responseMessage = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            CreateResponseMessageRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                intentName: this.intentName,
                responseMessage: this.responseMessage
                    ? this.responseMessage.toObject()
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
                intentName: this.intentName,
                responseMessage: this.responseMessage
                    ? this.responseMessage.toProtobufJSON(options)
                    : null
            };
        }
    }
    BatchCreateResponseMessagesRequest.CreateResponseMessageRequest = CreateResponseMessageRequest;
})(BatchCreateResponseMessagesRequest || (BatchCreateResponseMessagesRequest = {}));
/**
 * Message implementation for ondewo.nlu.BatchUpdateResponseMessagesRequest
 */
export class BatchUpdateResponseMessagesRequest {
    static { this.id = 'ondewo.nlu.BatchUpdateResponseMessagesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchUpdateResponseMessagesRequest();
        BatchUpdateResponseMessagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseMessages = _instance.responseMessages || [];
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
                    const messageInitializer1 = new Intent.Message();
                    _reader.readMessage(messageInitializer1, Intent.Message.deserializeBinaryFromReader);
                    (_instance.responseMessages = _instance.responseMessages || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchUpdateResponseMessagesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseMessages && _instance.responseMessages.length) {
            _writer.writeRepeatedMessage(1, _instance.responseMessages, Intent.Message.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateResponseMessagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseMessages = (_value.responseMessages || []).map(m => new Intent.Message(m));
        BatchUpdateResponseMessagesRequest.refineValues(this);
    }
    get responseMessages() {
        return this._responseMessages;
    }
    set responseMessages(value) {
        this._responseMessages = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchUpdateResponseMessagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseMessages: (this.responseMessages || []).map(m => m.toObject())
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
            responseMessages: (this.responseMessages || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchGetResponseMessagesRequest
 */
export class BatchGetResponseMessagesRequest {
    static { this.id = 'ondewo.nlu.BatchGetResponseMessagesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchGetResponseMessagesRequest();
        BatchGetResponseMessagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchGetResponseMessagesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchGetResponseMessagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchGetResponseMessagesRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchGetResponseMessagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesRequest
 */
export class BatchDeleteResponseMessagesRequest {
    static { this.id = 'ondewo.nlu.BatchDeleteResponseMessagesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteResponseMessagesRequest();
        BatchDeleteResponseMessagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteResponseMessagesRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteResponseMessagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchDeleteResponseMessagesRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteResponseMessagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse
 */
export class BatchDeleteResponseMessagesResponse {
    static { this.id = 'ondewo.nlu.BatchDeleteResponseMessagesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteResponseMessagesResponse();
        BatchDeleteResponseMessagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.deleteStatuses = _instance.deleteStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus();
                    _reader.readMessage(messageInitializer1, BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
                        .deserializeBinaryFromReader);
                    (_instance.deleteStatuses = _instance.deleteStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteResponseMessagesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.deleteStatuses, BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
                .serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteResponseMessagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.deleteStatuses = (_value.deleteStatuses || []).map(m => new BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchDeleteResponseMessagesResponse.refineValues(this);
    }
    get deleteStatuses() {
        return this._deleteStatuses;
    }
    set deleteStatuses(value) {
        this._deleteStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteResponseMessagesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
(function (BatchDeleteResponseMessagesResponse) {
    /**
     * Message implementation for ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
     */
    class DeleteResponseMessageStatus {
        static { this.id = 'ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new DeleteResponseMessageStatus();
            DeleteResponseMessageStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.successfullyDeleted = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.successfullyDeleted, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.errorMessage = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DeleteResponseMessageStatus.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.successfullyDeleted) {
                _writer.writeMessage(1, _instance.successfullyDeleted, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
            if (_instance.errorMessage || _instance.errorMessage === '') {
                _writer.writeString(2, _instance.errorMessage);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteResponseMessageStatus to deeply clone from
         */
        constructor(_value) {
            this._deleteStatus = DeleteResponseMessageStatus.DeleteStatusCase.none;
            _value = _value || {};
            this.successfullyDeleted = _value.successfullyDeleted
                ? new googleProtobuf003.Empty(_value.successfullyDeleted)
                : undefined;
            this.errorMessage = _value.errorMessage;
            DeleteResponseMessageStatus.refineValues(this);
        }
        get successfullyDeleted() {
            return this._successfullyDeleted;
        }
        set successfullyDeleted(value) {
            if (value !== undefined && value !== null) {
                this._errorMessage = undefined;
                this._deleteStatus =
                    DeleteResponseMessageStatus.DeleteStatusCase.successfullyDeleted;
            }
            this._successfullyDeleted = value;
        }
        get errorMessage() {
            return this._errorMessage;
        }
        set errorMessage(value) {
            if (value !== undefined && value !== null) {
                this._successfullyDeleted = undefined;
                this._deleteStatus =
                    DeleteResponseMessageStatus.DeleteStatusCase.errorMessage;
            }
            this._errorMessage = value;
        }
        get deleteStatus() {
            return this._deleteStatus;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            DeleteResponseMessageStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toObject()
                    : undefined,
                errorMessage: this.errorMessage
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
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toProtobufJSON(options)
                    : null,
                errorMessage: this.errorMessage === null || this.errorMessage === undefined
                    ? null
                    : this.errorMessage
            };
        }
    }
    BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus = DeleteResponseMessageStatus;
    (function (DeleteResponseMessageStatus) {
        let DeleteStatusCase;
        (function (DeleteStatusCase) {
            DeleteStatusCase[DeleteStatusCase["none"] = 0] = "none";
            DeleteStatusCase[DeleteStatusCase["successfullyDeleted"] = 1] = "successfullyDeleted";
            DeleteStatusCase[DeleteStatusCase["errorMessage"] = 2] = "errorMessage";
        })(DeleteStatusCase = DeleteResponseMessageStatus.DeleteStatusCase || (DeleteResponseMessageStatus.DeleteStatusCase = {}));
    })(DeleteResponseMessageStatus = BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus || (BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus = {}));
})(BatchDeleteResponseMessagesResponse || (BatchDeleteResponseMessagesResponse = {}));
/**
 * Message implementation for ondewo.nlu.ListResponseMessagesRequest
 */
export class ListResponseMessagesRequest {
    static { this.id = 'ondewo.nlu.ListResponseMessagesRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListResponseMessagesRequest();
        ListResponseMessagesRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentName = _instance.intentName || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.intentName = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListResponseMessagesRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.pageToken) {
            _writer.writeString(3, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListResponseMessagesRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        this.languageCode = _value.languageCode;
        this.pageToken = _value.pageToken;
        ListResponseMessagesRequest.refineValues(this);
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
        ListResponseMessagesRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentName: this.intentName,
            languageCode: this.languageCode,
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
            intentName: this.intentName,
            languageCode: this.languageCode,
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListResponseMessagesResponse
 */
export class ListResponseMessagesResponse {
    static { this.id = 'ondewo.nlu.ListResponseMessagesResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListResponseMessagesResponse();
        ListResponseMessagesResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.responseMessages = _instance.responseMessages || [];
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
                    const messageInitializer1 = new Intent.Message();
                    _reader.readMessage(messageInitializer1, Intent.Message.deserializeBinaryFromReader);
                    (_instance.responseMessages = _instance.responseMessages || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListResponseMessagesResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.responseMessages && _instance.responseMessages.length) {
            _writer.writeRepeatedMessage(1, _instance.responseMessages, Intent.Message.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListResponseMessagesResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.responseMessages = (_value.responseMessages || []).map(m => new Intent.Message(m));
        this.nextPageToken = _value.nextPageToken;
        ListResponseMessagesResponse.refineValues(this);
    }
    get responseMessages() {
        return this._responseMessages;
    }
    set responseMessages(value) {
        this._responseMessages = value;
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
        ListResponseMessagesResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            responseMessages: (this.responseMessages || []).map(m => m.toObject()),
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
            responseMessages: (this.responseMessages || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchParametersStatusResponse
 */
export class BatchParametersStatusResponse {
    static { this.id = 'ondewo.nlu.BatchParametersStatusResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchParametersStatusResponse();
        BatchParametersStatusResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parameterStatuses = _instance.parameterStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new BatchParametersStatusResponse.ParameterStatus();
                    _reader.readMessage(messageInitializer1, BatchParametersStatusResponse.ParameterStatus
                        .deserializeBinaryFromReader);
                    (_instance.parameterStatuses =
                        _instance.parameterStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchParametersStatusResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parameterStatuses && _instance.parameterStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.parameterStatuses, BatchParametersStatusResponse.ParameterStatus.serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchParametersStatusResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parameterStatuses = (_value.parameterStatuses || []).map(m => new BatchParametersStatusResponse.ParameterStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchParametersStatusResponse.refineValues(this);
    }
    get parameterStatuses() {
        return this._parameterStatuses;
    }
    set parameterStatuses(value) {
        this._parameterStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchParametersStatusResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parameterStatuses: (this.parameterStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            parameterStatuses: (this.parameterStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
(function (BatchParametersStatusResponse) {
    /**
     * Message implementation for ondewo.nlu.BatchParametersStatusResponse.ParameterStatus
     */
    class ParameterStatus {
        static { this.id = 'ondewo.nlu.BatchParametersStatusResponse.ParameterStatus'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new ParameterStatus();
            ParameterStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.parameter = new Intent.Parameter();
                        _reader.readMessage(_instance.parameter, Intent.Parameter.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.errorMessage = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ParameterStatus.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.parameter) {
                _writer.writeMessage(1, _instance.parameter, Intent.Parameter.serializeBinaryToWriter);
            }
            if (_instance.errorMessage || _instance.errorMessage === '') {
                _writer.writeString(2, _instance.errorMessage);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ParameterStatus to deeply clone from
         */
        constructor(_value) {
            this._phraseOrStatus = ParameterStatus.PhraseOrStatusCase.none;
            _value = _value || {};
            this.parameter = _value.parameter
                ? new Intent.Parameter(_value.parameter)
                : undefined;
            this.errorMessage = _value.errorMessage;
            ParameterStatus.refineValues(this);
        }
        get parameter() {
            return this._parameter;
        }
        set parameter(value) {
            if (value !== undefined && value !== null) {
                this._errorMessage = undefined;
                this._phraseOrStatus = ParameterStatus.PhraseOrStatusCase.parameter;
            }
            this._parameter = value;
        }
        get errorMessage() {
            return this._errorMessage;
        }
        set errorMessage(value) {
            if (value !== undefined && value !== null) {
                this._parameter = undefined;
                this._phraseOrStatus = ParameterStatus.PhraseOrStatusCase.errorMessage;
            }
            this._errorMessage = value;
        }
        get phraseOrStatus() {
            return this._phraseOrStatus;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            ParameterStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                parameter: this.parameter ? this.parameter.toObject() : undefined,
                errorMessage: this.errorMessage
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
                parameter: this.parameter
                    ? this.parameter.toProtobufJSON(options)
                    : null,
                errorMessage: this.errorMessage === null || this.errorMessage === undefined
                    ? null
                    : this.errorMessage
            };
        }
    }
    BatchParametersStatusResponse.ParameterStatus = ParameterStatus;
    (function (ParameterStatus) {
        let PhraseOrStatusCase;
        (function (PhraseOrStatusCase) {
            PhraseOrStatusCase[PhraseOrStatusCase["none"] = 0] = "none";
            PhraseOrStatusCase[PhraseOrStatusCase["parameter"] = 1] = "parameter";
            PhraseOrStatusCase[PhraseOrStatusCase["errorMessage"] = 2] = "errorMessage";
        })(PhraseOrStatusCase = ParameterStatus.PhraseOrStatusCase || (ParameterStatus.PhraseOrStatusCase = {}));
    })(ParameterStatus = BatchParametersStatusResponse.ParameterStatus || (BatchParametersStatusResponse.ParameterStatus = {}));
})(BatchParametersStatusResponse || (BatchParametersStatusResponse = {}));
/**
 * Message implementation for ondewo.nlu.BatchCreateParametersRequest
 */
export class BatchCreateParametersRequest {
    static { this.id = 'ondewo.nlu.BatchCreateParametersRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchCreateParametersRequest();
        BatchCreateParametersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parameterRequests = _instance.parameterRequests || [];
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
                    const messageInitializer1 = new BatchCreateParametersRequest.CreateParameterRequest();
                    _reader.readMessage(messageInitializer1, BatchCreateParametersRequest.CreateParameterRequest
                        .deserializeBinaryFromReader);
                    (_instance.parameterRequests =
                        _instance.parameterRequests || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchCreateParametersRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parameterRequests && _instance.parameterRequests.length) {
            _writer.writeRepeatedMessage(1, _instance.parameterRequests, BatchCreateParametersRequest.CreateParameterRequest
                .serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchCreateParametersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parameterRequests = (_value.parameterRequests || []).map(m => new BatchCreateParametersRequest.CreateParameterRequest(m));
        BatchCreateParametersRequest.refineValues(this);
    }
    get parameterRequests() {
        return this._parameterRequests;
    }
    set parameterRequests(value) {
        this._parameterRequests = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchCreateParametersRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parameterRequests: (this.parameterRequests || []).map(m => m.toObject())
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
            parameterRequests: (this.parameterRequests || []).map(m => m.toProtobufJSON(options))
        };
    }
}
(function (BatchCreateParametersRequest) {
    /**
     * Message implementation for ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest
     */
    class CreateParameterRequest {
        static { this.id = 'ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new CreateParameterRequest();
            CreateParameterRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
            return instance;
        }
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance) {
            _instance.intentName = _instance.intentName || '';
            _instance.parameter = _instance.parameter || undefined;
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
                        _instance.parameter = new Intent.Parameter();
                        _reader.readMessage(_instance.parameter, Intent.Parameter.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            CreateParameterRequest.refineValues(_instance);
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
            if (_instance.parameter) {
                _writer.writeMessage(2, _instance.parameter, Intent.Parameter.serializeBinaryToWriter);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of CreateParameterRequest to deeply clone from
         */
        constructor(_value) {
            _value = _value || {};
            this.intentName = _value.intentName;
            this.parameter = _value.parameter
                ? new Intent.Parameter(_value.parameter)
                : undefined;
            CreateParameterRequest.refineValues(this);
        }
        get intentName() {
            return this._intentName;
        }
        set intentName(value) {
            this._intentName = value;
        }
        get parameter() {
            return this._parameter;
        }
        set parameter(value) {
            this._parameter = value;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            CreateParameterRequest.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                intentName: this.intentName,
                parameter: this.parameter ? this.parameter.toObject() : undefined
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
                parameter: this.parameter
                    ? this.parameter.toProtobufJSON(options)
                    : null
            };
        }
    }
    BatchCreateParametersRequest.CreateParameterRequest = CreateParameterRequest;
})(BatchCreateParametersRequest || (BatchCreateParametersRequest = {}));
/**
 * Message implementation for ondewo.nlu.BatchUpdateParametersRequest
 */
export class BatchUpdateParametersRequest {
    static { this.id = 'ondewo.nlu.BatchUpdateParametersRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchUpdateParametersRequest();
        BatchUpdateParametersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parameters = _instance.parameters || [];
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
                    const messageInitializer1 = new Intent.Parameter();
                    _reader.readMessage(messageInitializer1, Intent.Parameter.deserializeBinaryFromReader);
                    (_instance.parameters = _instance.parameters || []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchUpdateParametersRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parameters && _instance.parameters.length) {
            _writer.writeRepeatedMessage(1, _instance.parameters, Intent.Parameter.serializeBinaryToWriter);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateParametersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parameters = (_value.parameters || []).map(m => new Intent.Parameter(m));
        BatchUpdateParametersRequest.refineValues(this);
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchUpdateParametersRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parameters: (this.parameters || []).map(m => m.toObject())
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
            parameters: (this.parameters || []).map(m => m.toProtobufJSON(options))
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchGetParametersRequest
 */
export class BatchGetParametersRequest {
    static { this.id = 'ondewo.nlu.BatchGetParametersRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchGetParametersRequest();
        BatchGetParametersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchGetParametersRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchGetParametersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchGetParametersRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchGetParametersRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersRequest
 */
export class BatchDeleteParametersRequest {
    static { this.id = 'ondewo.nlu.BatchDeleteParametersRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteParametersRequest();
        BatchDeleteParametersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.names = _instance.names || [];
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
                    (_instance.names = _instance.names || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteParametersRequest.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.names && _instance.names.length) {
            _writer.writeRepeatedString(1, _instance.names);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteParametersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.names = (_value.names || []).slice();
        BatchDeleteParametersRequest.refineValues(this);
    }
    get names() {
        return this._names;
    }
    set names(value) {
        this._names = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteParametersRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            names: (this.names || []).slice()
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
            names: (this.names || []).slice()
        };
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteParametersResponse
 */
export class BatchDeleteParametersResponse {
    static { this.id = 'ondewo.nlu.BatchDeleteParametersResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new BatchDeleteParametersResponse();
        BatchDeleteParametersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.deleteStatuses = _instance.deleteStatuses || [];
        _instance.hasErrors = _instance.hasErrors || false;
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
                    const messageInitializer1 = new BatchDeleteParametersResponse.DeleteParameterStatus();
                    _reader.readMessage(messageInitializer1, BatchDeleteParametersResponse.DeleteParameterStatus
                        .deserializeBinaryFromReader);
                    (_instance.deleteStatuses = _instance.deleteStatuses || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.hasErrors = _reader.readBool();
                    break;
                default:
                    _reader.skipField();
            }
        }
        BatchDeleteParametersResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.deleteStatuses && _instance.deleteStatuses.length) {
            _writer.writeRepeatedMessage(1, _instance.deleteStatuses, BatchDeleteParametersResponse.DeleteParameterStatus
                .serializeBinaryToWriter);
        }
        if (_instance.hasErrors) {
            _writer.writeBool(2, _instance.hasErrors);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteParametersResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.deleteStatuses = (_value.deleteStatuses || []).map(m => new BatchDeleteParametersResponse.DeleteParameterStatus(m));
        this.hasErrors = _value.hasErrors;
        BatchDeleteParametersResponse.refineValues(this);
    }
    get deleteStatuses() {
        return this._deleteStatuses;
    }
    set deleteStatuses(value) {
        this._deleteStatuses = value;
    }
    get hasErrors() {
        return this._hasErrors;
    }
    set hasErrors(value) {
        this._hasErrors = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        BatchDeleteParametersResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toObject()),
            hasErrors: this.hasErrors
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
            deleteStatuses: (this.deleteStatuses || []).map(m => m.toProtobufJSON(options)),
            hasErrors: this.hasErrors
        };
    }
}
(function (BatchDeleteParametersResponse) {
    /**
     * Message implementation for ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus
     */
    class DeleteParameterStatus {
        static { this.id = 'ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus'; }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes) {
            const instance = new DeleteParameterStatus();
            DeleteParameterStatus.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
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
                        _instance.successfullyDeleted = new googleProtobuf003.Empty();
                        _reader.readMessage(_instance.successfullyDeleted, googleProtobuf003.Empty.deserializeBinaryFromReader);
                        break;
                    case 2:
                        _instance.errorMessage = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DeleteParameterStatus.refineValues(_instance);
        }
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.successfullyDeleted) {
                _writer.writeMessage(1, _instance.successfullyDeleted, googleProtobuf003.Empty.serializeBinaryToWriter);
            }
            if (_instance.errorMessage || _instance.errorMessage === '') {
                _writer.writeString(2, _instance.errorMessage);
            }
        }
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DeleteParameterStatus to deeply clone from
         */
        constructor(_value) {
            this._deleteStatus = DeleteParameterStatus.DeleteStatusCase.none;
            _value = _value || {};
            this.successfullyDeleted = _value.successfullyDeleted
                ? new googleProtobuf003.Empty(_value.successfullyDeleted)
                : undefined;
            this.errorMessage = _value.errorMessage;
            DeleteParameterStatus.refineValues(this);
        }
        get successfullyDeleted() {
            return this._successfullyDeleted;
        }
        set successfullyDeleted(value) {
            if (value !== undefined && value !== null) {
                this._errorMessage = undefined;
                this._deleteStatus =
                    DeleteParameterStatus.DeleteStatusCase.successfullyDeleted;
            }
            this._successfullyDeleted = value;
        }
        get errorMessage() {
            return this._errorMessage;
        }
        set errorMessage(value) {
            if (value !== undefined && value !== null) {
                this._successfullyDeleted = undefined;
                this._deleteStatus =
                    DeleteParameterStatus.DeleteStatusCase.errorMessage;
            }
            this._errorMessage = value;
        }
        get deleteStatus() {
            return this._deleteStatus;
        }
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary() {
            const writer = new BinaryWriter();
            DeleteParameterStatus.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject() {
            return {
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toObject()
                    : undefined,
                errorMessage: this.errorMessage
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
                successfullyDeleted: this.successfullyDeleted
                    ? this.successfullyDeleted.toProtobufJSON(options)
                    : null,
                errorMessage: this.errorMessage === null || this.errorMessage === undefined
                    ? null
                    : this.errorMessage
            };
        }
    }
    BatchDeleteParametersResponse.DeleteParameterStatus = DeleteParameterStatus;
    (function (DeleteParameterStatus) {
        let DeleteStatusCase;
        (function (DeleteStatusCase) {
            DeleteStatusCase[DeleteStatusCase["none"] = 0] = "none";
            DeleteStatusCase[DeleteStatusCase["successfullyDeleted"] = 1] = "successfullyDeleted";
            DeleteStatusCase[DeleteStatusCase["errorMessage"] = 2] = "errorMessage";
        })(DeleteStatusCase = DeleteParameterStatus.DeleteStatusCase || (DeleteParameterStatus.DeleteStatusCase = {}));
    })(DeleteParameterStatus = BatchDeleteParametersResponse.DeleteParameterStatus || (BatchDeleteParametersResponse.DeleteParameterStatus = {}));
})(BatchDeleteParametersResponse || (BatchDeleteParametersResponse = {}));
/**
 * Message implementation for ondewo.nlu.ListParametersRequest
 */
export class ListParametersRequest {
    static { this.id = 'ondewo.nlu.ListParametersRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListParametersRequest();
        ListParametersRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.intentName = _instance.intentName || '';
        _instance.languageCode = _instance.languageCode || '';
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
                    _instance.intentName = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListParametersRequest.refineValues(_instance);
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
        if (_instance.languageCode) {
            _writer.writeString(2, _instance.languageCode);
        }
        if (_instance.pageToken) {
            _writer.writeString(3, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListParametersRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.intentName = _value.intentName;
        this.languageCode = _value.languageCode;
        this.pageToken = _value.pageToken;
        ListParametersRequest.refineValues(this);
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
        ListParametersRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            intentName: this.intentName,
            languageCode: this.languageCode,
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
            intentName: this.intentName,
            languageCode: this.languageCode,
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListParametersResponse
 */
export class ListParametersResponse {
    static { this.id = 'ondewo.nlu.ListParametersResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListParametersResponse();
        ListParametersResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parameters = _instance.parameters || [];
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
                    const messageInitializer1 = new Intent.Parameter();
                    _reader.readMessage(messageInitializer1, Intent.Parameter.deserializeBinaryFromReader);
                    (_instance.parameters = _instance.parameters || []).push(messageInitializer1);
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListParametersResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.parameters && _instance.parameters.length) {
            _writer.writeRepeatedMessage(1, _instance.parameters, Intent.Parameter.serializeBinaryToWriter);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListParametersResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parameters = (_value.parameters || []).map(m => new Intent.Parameter(m));
        this.nextPageToken = _value.nextPageToken;
        ListParametersResponse.refineValues(this);
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
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
        ListParametersResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parameters: (this.parameters || []).map(m => m.toObject()),
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
            parameters: (this.parameters || []).map(m => m.toProtobufJSON(options)),
            nextPageToken: this.nextPageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest
 */
export class ListTrainingPhrasesofIntentsWithEnrichmentRequest {
    static { this.id = 'ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListTrainingPhrasesofIntentsWithEnrichmentRequest();
        ListTrainingPhrasesofIntentsWithEnrichmentRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.parent = _instance.parent || '';
        _instance.languageCode = _instance.languageCode || '';
        _instance.intentIds = _instance.intentIds || [];
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
                    _instance.parent = _reader.readString();
                    break;
                case 2:
                    _instance.languageCode = _reader.readString();
                    break;
                case 3:
                    (_instance.intentIds = _instance.intentIds || []).push(_reader.readString());
                    break;
                case 4:
                    _instance.pageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListTrainingPhrasesofIntentsWithEnrichmentRequest.refineValues(_instance);
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
        if (_instance.intentIds && _instance.intentIds.length) {
            _writer.writeRepeatedString(3, _instance.intentIds);
        }
        if (_instance.pageToken) {
            _writer.writeString(4, _instance.pageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentRequest to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.parent = _value.parent;
        this.languageCode = _value.languageCode;
        this.intentIds = (_value.intentIds || []).slice();
        this.pageToken = _value.pageToken;
        ListTrainingPhrasesofIntentsWithEnrichmentRequest.refineValues(this);
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
    get intentIds() {
        return this._intentIds;
    }
    set intentIds(value) {
        this._intentIds = value;
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
        ListTrainingPhrasesofIntentsWithEnrichmentRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            intentIds: (this.intentIds || []).slice(),
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
            parent: this.parent,
            languageCode: this.languageCode,
            intentIds: (this.intentIds || []).slice(),
            pageToken: this.pageToken
        };
    }
}
/**
 * Message implementation for ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse
 */
export class ListTrainingPhrasesofIntentsWithEnrichmentResponse {
    static { this.id = 'ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse'; }
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new ListTrainingPhrasesofIntentsWithEnrichmentResponse();
        ListTrainingPhrasesofIntentsWithEnrichmentResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.trainingPhrases = _instance.trainingPhrases || [];
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
                    (_instance.trainingPhrases = _instance.trainingPhrases || []).push(_reader.readString());
                    break;
                case 2:
                    _instance.nextPageToken = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListTrainingPhrasesofIntentsWithEnrichmentResponse.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.trainingPhrases && _instance.trainingPhrases.length) {
            _writer.writeRepeatedString(1, _instance.trainingPhrases);
        }
        if (_instance.nextPageToken) {
            _writer.writeString(2, _instance.nextPageToken);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListTrainingPhrasesofIntentsWithEnrichmentResponse to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.trainingPhrases = (_value.trainingPhrases || []).slice();
        this.nextPageToken = _value.nextPageToken;
        ListTrainingPhrasesofIntentsWithEnrichmentResponse.refineValues(this);
    }
    get trainingPhrases() {
        return this._trainingPhrases;
    }
    set trainingPhrases(value) {
        this._trainingPhrases = value;
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
        ListTrainingPhrasesofIntentsWithEnrichmentResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            trainingPhrases: (this.trainingPhrases || []).slice(),
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
            trainingPhrases: (this.trainingPhrases || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
}