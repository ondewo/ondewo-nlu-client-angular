import { GrpcMessage, RecursivePartial, ToProtobufJSONOptions } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu007 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu008 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
export declare enum IntentView {
    INTENT_VIEW_UNSPECIFIED = 0,
    INTENT_VIEW_FULL = 1,
    INTENT_VIEW_PARTIAL = 2,
    INTENT_VIEW_SHALLOW = 3
}
export declare enum IntentCategory {
    ALL_INTENTS = 0,
    DEFAULT_INTENTS = 1,
    USER_DEFINED_INTENTS = 2
}
/**
 * Message implementation for ondewo.nlu.Intent
 */
export declare class Intent implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): Intent;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Intent): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: Intent, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: Intent, _writer: BinaryWriter): void;
    private _name?;
    private _displayName?;
    private _webhookState?;
    private _priority?;
    private _isFallback?;
    private _mlDisabled?;
    private _inputContextNames?;
    private _events?;
    private _trainingPhrases?;
    private _action?;
    private _outputContexts?;
    private _resetContexts?;
    private _parameters?;
    private _messages?;
    private _defaultResponsePlatforms?;
    private _rootFollowupIntentName?;
    private _parentFollowupIntentName?;
    private _followupIntentInfo?;
    private _nextPageToken?;
    private _domainName?;
    private _isStartOfDeviation?;
    private _isEndOfDeviation?;
    private _trainingPhraseCount?;
    private _status?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Intent to deeply clone from
     */
    constructor(_value?: RecursivePartial<Intent.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get webhookState(): Intent.WebhookState | undefined;
    set webhookState(value: Intent.WebhookState | undefined);
    get priority(): number | undefined;
    set priority(value: number | undefined);
    get isFallback(): boolean | undefined;
    set isFallback(value: boolean | undefined);
    get mlDisabled(): boolean | undefined;
    set mlDisabled(value: boolean | undefined);
    get inputContextNames(): string[] | undefined;
    set inputContextNames(value: string[] | undefined);
    get events(): string[] | undefined;
    set events(value: string[] | undefined);
    get trainingPhrases(): Intent.TrainingPhrase[] | undefined;
    set trainingPhrases(value: Intent.TrainingPhrase[] | undefined);
    get action(): string | undefined;
    set action(value: string | undefined);
    get outputContexts(): ondewoNlu007.Context[] | undefined;
    set outputContexts(value: ondewoNlu007.Context[] | undefined);
    get resetContexts(): boolean | undefined;
    set resetContexts(value: boolean | undefined);
    get parameters(): Intent.Parameter[] | undefined;
    set parameters(value: Intent.Parameter[] | undefined);
    get messages(): Intent.Message[] | undefined;
    set messages(value: Intent.Message[] | undefined);
    get defaultResponsePlatforms(): Intent.Message.Platform[] | undefined;
    set defaultResponsePlatforms(value: Intent.Message.Platform[] | undefined);
    get rootFollowupIntentName(): string | undefined;
    set rootFollowupIntentName(value: string | undefined);
    get parentFollowupIntentName(): string | undefined;
    set parentFollowupIntentName(value: string | undefined);
    get followupIntentInfo(): Intent.FollowupIntentInfo[] | undefined;
    set followupIntentInfo(value: Intent.FollowupIntentInfo[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    get domainName(): string | undefined;
    set domainName(value: string | undefined);
    get isStartOfDeviation(): boolean | undefined;
    set isStartOfDeviation(value: boolean | undefined);
    get isEndOfDeviation(): boolean | undefined;
    set isEndOfDeviation(value: boolean | undefined);
    get trainingPhraseCount(): number | undefined;
    set trainingPhraseCount(value: number | undefined);
    get status(): Intent.IntentStatus | undefined;
    set status(value: Intent.IntentStatus | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Intent.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): Intent.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): Intent.AsProtobufJSON;
}
export declare module Intent {
    /**
     * Standard JavaScript object representation for Intent
     */
    interface AsObject {
        name?: string;
        displayName?: string;
        webhookState?: Intent.WebhookState;
        priority?: number;
        isFallback?: boolean;
        mlDisabled?: boolean;
        inputContextNames?: string[];
        events?: string[];
        trainingPhrases?: Intent.TrainingPhrase.AsObject[];
        action?: string;
        outputContexts?: ondewoNlu007.Context.AsObject[];
        resetContexts?: boolean;
        parameters?: Intent.Parameter.AsObject[];
        messages?: Intent.Message.AsObject[];
        defaultResponsePlatforms?: Intent.Message.Platform[];
        rootFollowupIntentName?: string;
        parentFollowupIntentName?: string;
        followupIntentInfo?: Intent.FollowupIntentInfo.AsObject[];
        nextPageToken?: string;
        domainName?: string;
        isStartOfDeviation?: boolean;
        isEndOfDeviation?: boolean;
        trainingPhraseCount?: number;
        status?: Intent.IntentStatus;
    }
    /**
     * Protobuf JSON representation for Intent
     */
    interface AsProtobufJSON {
        name?: string;
        displayName?: string;
        webhookState?: string;
        priority?: number;
        isFallback?: boolean;
        mlDisabled?: boolean;
        inputContextNames?: string[];
        events?: string[];
        trainingPhrases?: Intent.TrainingPhrase.AsProtobufJSON[] | null;
        action?: string;
        outputContexts?: ondewoNlu007.Context.AsProtobufJSON[] | null;
        resetContexts?: boolean;
        parameters?: Intent.Parameter.AsProtobufJSON[] | null;
        messages?: Intent.Message.AsProtobufJSON[] | null;
        defaultResponsePlatforms?: string[];
        rootFollowupIntentName?: string;
        parentFollowupIntentName?: string;
        followupIntentInfo?: Intent.FollowupIntentInfo.AsProtobufJSON[] | null;
        nextPageToken?: string;
        domainName?: string;
        isStartOfDeviation?: boolean;
        isEndOfDeviation?: boolean;
        trainingPhraseCount?: number;
        status?: string;
    }
    enum IntentStatus {
        ACTIVE = 0,
        INACTIVE = 1
    }
    enum WebhookState {
        WEBHOOK_STATE_UNSPECIFIED = 0,
        WEBHOOK_STATE_ENABLED = 1,
        WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2
    }
    /**
     * Message implementation for ondewo.nlu.TrainingPhrase
     */
    class TrainingPhrase implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): TrainingPhrase;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: TrainingPhrase): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: TrainingPhrase, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: TrainingPhrase, _writer: BinaryWriter): void;
        private _name?;
        private _type?;
        private _text?;
        private _entities?;
        private _timesAddedCount?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of TrainingPhrase to deeply clone from
         */
        constructor(_value?: RecursivePartial<TrainingPhrase.AsObject>);
        get name(): string | undefined;
        set name(value: string | undefined);
        get type(): Intent.TrainingPhrase.Type | undefined;
        set type(value: Intent.TrainingPhrase.Type | undefined);
        get text(): string | undefined;
        set text(value: string | undefined);
        get entities(): Intent.TrainingPhrase.Entity[] | undefined;
        set entities(value: Intent.TrainingPhrase.Entity[] | undefined);
        get timesAddedCount(): number | undefined;
        set timesAddedCount(value: number | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): TrainingPhrase.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): TrainingPhrase.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): TrainingPhrase.AsProtobufJSON;
    }
    module TrainingPhrase {
        /**
         * Standard JavaScript object representation for TrainingPhrase
         */
        interface AsObject {
            name?: string;
            type?: Intent.TrainingPhrase.Type;
            text?: string;
            entities?: Intent.TrainingPhrase.Entity.AsObject[];
            timesAddedCount?: number;
        }
        /**
         * Protobuf JSON representation for TrainingPhrase
         */
        interface AsProtobufJSON {
            name?: string;
            type?: string;
            text?: string;
            entities?: Intent.TrainingPhrase.Entity.AsProtobufJSON[] | null;
            timesAddedCount?: number;
        }
        enum Type {
            TYPE_UNSPECIFIED = 0,
            EXAMPLE = 1,
            TEMPLATE = 2
        }
        /**
         * Message implementation for ondewo.nlu.Entity
         */
        class Entity implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Entity;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Entity): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Entity, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Entity, _writer: BinaryWriter): void;
            private _entityTypeName?;
            private _entityTypeDisplayName?;
            private _entityValueName?;
            private _entityValueDisplayName?;
            private _start?;
            private _end?;
            private _parameterName?;
            private _parameterDisplayName?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Entity to deeply clone from
             */
            constructor(_value?: RecursivePartial<Entity.AsObject>);
            get entityTypeName(): string | undefined;
            set entityTypeName(value: string | undefined);
            get entityTypeDisplayName(): string | undefined;
            set entityTypeDisplayName(value: string | undefined);
            get entityValueName(): string | undefined;
            set entityValueName(value: string | undefined);
            get entityValueDisplayName(): string | undefined;
            set entityValueDisplayName(value: string | undefined);
            get start(): number | undefined;
            set start(value: number | undefined);
            get end(): number | undefined;
            set end(value: number | undefined);
            get parameterName(): string | undefined;
            set parameterName(value: string | undefined);
            get parameterDisplayName(): string | undefined;
            set parameterDisplayName(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Entity.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Entity.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Entity.AsProtobufJSON;
        }
        module Entity {
            /**
             * Standard JavaScript object representation for Entity
             */
            interface AsObject {
                entityTypeName?: string;
                entityTypeDisplayName?: string;
                entityValueName?: string;
                entityValueDisplayName?: string;
                start?: number;
                end?: number;
                parameterName?: string;
                parameterDisplayName?: string;
            }
            /**
             * Protobuf JSON representation for Entity
             */
            interface AsProtobufJSON {
                entityTypeName?: string;
                entityTypeDisplayName?: string;
                entityValueName?: string;
                entityValueDisplayName?: string;
                start?: number;
                end?: number;
                parameterName?: string;
                parameterDisplayName?: string;
            }
        }
    }
    /**
     * Message implementation for ondewo.nlu.Parameter
     */
    class Parameter implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Parameter;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Parameter): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Parameter, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Parameter, _writer: BinaryWriter): void;
        private _name?;
        private _displayName?;
        private _value?;
        private _defaultValue?;
        private _entityTypeName?;
        private _entityTypeDisplayName?;
        private _mandatory?;
        private _prompts?;
        private _isList?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Parameter to deeply clone from
         */
        constructor(_value?: RecursivePartial<Parameter.AsObject>);
        get name(): string | undefined;
        set name(value: string | undefined);
        get displayName(): string | undefined;
        set displayName(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        get defaultValue(): string | undefined;
        set defaultValue(value: string | undefined);
        get entityTypeName(): string | undefined;
        set entityTypeName(value: string | undefined);
        get entityTypeDisplayName(): string | undefined;
        set entityTypeDisplayName(value: string | undefined);
        get mandatory(): boolean | undefined;
        set mandatory(value: boolean | undefined);
        get prompts(): string[] | undefined;
        set prompts(value: string[] | undefined);
        get isList(): boolean | undefined;
        set isList(value: boolean | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Parameter.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Parameter.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Parameter.AsProtobufJSON;
    }
    module Parameter {
        /**
         * Standard JavaScript object representation for Parameter
         */
        interface AsObject {
            name?: string;
            displayName?: string;
            value?: string;
            defaultValue?: string;
            entityTypeName?: string;
            entityTypeDisplayName?: string;
            mandatory?: boolean;
            prompts?: string[];
            isList?: boolean;
        }
        /**
         * Protobuf JSON representation for Parameter
         */
        interface AsProtobufJSON {
            name?: string;
            displayName?: string;
            value?: string;
            defaultValue?: string;
            entityTypeName?: string;
            entityTypeDisplayName?: string;
            mandatory?: boolean;
            prompts?: string[];
            isList?: boolean;
        }
    }
    /**
     * Message implementation for ondewo.nlu.Message
     */
    class Message implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): Message;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: Message): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: Message, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: Message, _writer: BinaryWriter): void;
        private _text?;
        private _image?;
        private _quickReplies?;
        private _card?;
        private _payload?;
        private _simpleResponses?;
        private _basicCard?;
        private _suggestions?;
        private _linkOutSuggestion?;
        private _listSelect?;
        private _carouselSelect?;
        private _htmlText?;
        private _video?;
        private _audio?;
        private _platform?;
        private _message;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Message to deeply clone from
         */
        constructor(_value?: RecursivePartial<Message.AsObject>);
        get text(): Intent.Message.Text | undefined;
        set text(value: Intent.Message.Text | undefined);
        get image(): Intent.Message.Image | undefined;
        set image(value: Intent.Message.Image | undefined);
        get quickReplies(): Intent.Message.QuickReplies | undefined;
        set quickReplies(value: Intent.Message.QuickReplies | undefined);
        get card(): Intent.Message.Card | undefined;
        set card(value: Intent.Message.Card | undefined);
        get payload(): googleProtobuf010.Struct | undefined;
        set payload(value: googleProtobuf010.Struct | undefined);
        get simpleResponses(): Intent.Message.SimpleResponses | undefined;
        set simpleResponses(value: Intent.Message.SimpleResponses | undefined);
        get basicCard(): Intent.Message.BasicCard | undefined;
        set basicCard(value: Intent.Message.BasicCard | undefined);
        get suggestions(): Intent.Message.Suggestions | undefined;
        set suggestions(value: Intent.Message.Suggestions | undefined);
        get linkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
        set linkOutSuggestion(value: Intent.Message.LinkOutSuggestion | undefined);
        get listSelect(): Intent.Message.ListSelect | undefined;
        set listSelect(value: Intent.Message.ListSelect | undefined);
        get carouselSelect(): Intent.Message.CarouselSelect | undefined;
        set carouselSelect(value: Intent.Message.CarouselSelect | undefined);
        get htmlText(): Intent.Message.HTMLText | undefined;
        set htmlText(value: Intent.Message.HTMLText | undefined);
        get video(): Intent.Message.Video | undefined;
        set video(value: Intent.Message.Video | undefined);
        get audio(): Intent.Message.Audio | undefined;
        set audio(value: Intent.Message.Audio | undefined);
        get platform(): Intent.Message.Platform | undefined;
        set platform(value: Intent.Message.Platform | undefined);
        get message(): Message.MessageCase;
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): Message.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): Message.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): Message.AsProtobufJSON;
    }
    module Message {
        /**
         * Standard JavaScript object representation for Message
         */
        interface AsObject {
            text?: Intent.Message.Text.AsObject;
            image?: Intent.Message.Image.AsObject;
            quickReplies?: Intent.Message.QuickReplies.AsObject;
            card?: Intent.Message.Card.AsObject;
            payload?: googleProtobuf010.Struct.AsObject;
            simpleResponses?: Intent.Message.SimpleResponses.AsObject;
            basicCard?: Intent.Message.BasicCard.AsObject;
            suggestions?: Intent.Message.Suggestions.AsObject;
            linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject;
            listSelect?: Intent.Message.ListSelect.AsObject;
            carouselSelect?: Intent.Message.CarouselSelect.AsObject;
            htmlText?: Intent.Message.HTMLText.AsObject;
            video?: Intent.Message.Video.AsObject;
            audio?: Intent.Message.Audio.AsObject;
            platform?: Intent.Message.Platform;
        }
        /**
         * Protobuf JSON representation for Message
         */
        interface AsProtobufJSON {
            text?: Intent.Message.Text.AsProtobufJSON | null;
            image?: Intent.Message.Image.AsProtobufJSON | null;
            quickReplies?: Intent.Message.QuickReplies.AsProtobufJSON | null;
            card?: Intent.Message.Card.AsProtobufJSON | null;
            payload?: googleProtobuf010.Struct.AsProtobufJSON | null;
            simpleResponses?: Intent.Message.SimpleResponses.AsProtobufJSON | null;
            basicCard?: Intent.Message.BasicCard.AsProtobufJSON | null;
            suggestions?: Intent.Message.Suggestions.AsProtobufJSON | null;
            linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsProtobufJSON | null;
            listSelect?: Intent.Message.ListSelect.AsProtobufJSON | null;
            carouselSelect?: Intent.Message.CarouselSelect.AsProtobufJSON | null;
            htmlText?: Intent.Message.HTMLText.AsProtobufJSON | null;
            video?: Intent.Message.Video.AsProtobufJSON | null;
            audio?: Intent.Message.Audio.AsProtobufJSON | null;
            platform?: string;
        }
        enum MessageCase {
            none = 0,
            text = 1,
            image = 2,
            quickReplies = 3,
            card = 4,
            payload = 5,
            simpleResponses = 6,
            basicCard = 7,
            suggestions = 8,
            linkOutSuggestion = 9,
            listSelect = 10,
            carouselSelect = 11,
            htmlText = 12,
            video = 13,
            audio = 14
        }
        enum Platform {
            PLATFORM_UNSPECIFIED = 0,
            FACEBOOK = 1,
            SLACK = 2,
            TELEGRAM = 3,
            KIK = 4,
            SKYPE = 5,
            LINE = 6,
            VIBER = 7,
            ACTIONS_ON_GOOGLE = 8
        }
        /**
         * Message implementation for ondewo.nlu.Text
         */
        class Text implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Text;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Text): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Text, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Text, _writer: BinaryWriter): void;
            private _text?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Text to deeply clone from
             */
            constructor(_value?: RecursivePartial<Text.AsObject>);
            get text(): string[] | undefined;
            set text(value: string[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Text.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Text.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Text.AsProtobufJSON;
        }
        module Text {
            /**
             * Standard JavaScript object representation for Text
             */
            interface AsObject {
                text?: string[];
            }
            /**
             * Protobuf JSON representation for Text
             */
            interface AsProtobufJSON {
                text?: string[];
            }
        }
        /**
         * Message implementation for ondewo.nlu.Image
         */
        class Image implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Image;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Image): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Image, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Image, _writer: BinaryWriter): void;
            private _imageUri?;
            private _accessibilityText?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Image to deeply clone from
             */
            constructor(_value?: RecursivePartial<Image.AsObject>);
            get imageUri(): string | undefined;
            set imageUri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Image.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Image.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Image.AsProtobufJSON;
        }
        module Image {
            /**
             * Standard JavaScript object representation for Image
             */
            interface AsObject {
                imageUri?: string;
                accessibilityText?: string;
            }
            /**
             * Protobuf JSON representation for Image
             */
            interface AsProtobufJSON {
                imageUri?: string;
                accessibilityText?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.QuickReplies
         */
        class QuickReplies implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): QuickReplies;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: QuickReplies): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: QuickReplies, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: QuickReplies, _writer: BinaryWriter): void;
            private _title?;
            private _quickReplies?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of QuickReplies to deeply clone from
             */
            constructor(_value?: RecursivePartial<QuickReplies.AsObject>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get quickReplies(): string[] | undefined;
            set quickReplies(value: string[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): QuickReplies.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): QuickReplies.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): QuickReplies.AsProtobufJSON;
        }
        module QuickReplies {
            /**
             * Standard JavaScript object representation for QuickReplies
             */
            interface AsObject {
                title?: string;
                quickReplies?: string[];
            }
            /**
             * Protobuf JSON representation for QuickReplies
             */
            interface AsProtobufJSON {
                title?: string;
                quickReplies?: string[];
            }
        }
        /**
         * Message implementation for ondewo.nlu.Card
         */
        class Card implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Card;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Card): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Card, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Card, _writer: BinaryWriter): void;
            private _title?;
            private _subtitle?;
            private _imageUri?;
            private _buttons?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Card to deeply clone from
             */
            constructor(_value?: RecursivePartial<Card.AsObject>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get subtitle(): string | undefined;
            set subtitle(value: string | undefined);
            get imageUri(): string | undefined;
            set imageUri(value: string | undefined);
            get buttons(): Intent.Message.Card.Button[] | undefined;
            set buttons(value: Intent.Message.Card.Button[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Card.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Card.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Card.AsProtobufJSON;
        }
        module Card {
            /**
             * Standard JavaScript object representation for Card
             */
            interface AsObject {
                title?: string;
                subtitle?: string;
                imageUri?: string;
                buttons?: Intent.Message.Card.Button.AsObject[];
            }
            /**
             * Protobuf JSON representation for Card
             */
            interface AsProtobufJSON {
                title?: string;
                subtitle?: string;
                imageUri?: string;
                buttons?: Intent.Message.Card.Button.AsProtobufJSON[] | null;
            }
            /**
             * Message implementation for ondewo.nlu.Button
             */
            class Button implements GrpcMessage {
                static id: string;
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes: ByteSource): Button;
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance: Button): void;
                /**
                 * Deserializes / reads binary message into message instance using provided binary reader
                 * @param _instance message instance
                 * @param _reader binary reader instance
                 */
                static deserializeBinaryFromReader(_instance: Button, _reader: BinaryReader): void;
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance: Button, _writer: BinaryWriter): void;
                private _text?;
                private _postback?;
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Button to deeply clone from
                 */
                constructor(_value?: RecursivePartial<Button.AsObject>);
                get text(): string | undefined;
                set text(value: string | undefined);
                get postback(): string | undefined;
                set postback(value: string | undefined);
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary(): any;
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject(): Button.AsObject;
                /**
                 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
                 */
                toJSON(): Button.AsObject;
                /**
                 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
                 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
                 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
                 */
                toProtobufJSON(options?: ToProtobufJSONOptions): Button.AsProtobufJSON;
            }
            module Button {
                /**
                 * Standard JavaScript object representation for Button
                 */
                interface AsObject {
                    text?: string;
                    postback?: string;
                }
                /**
                 * Protobuf JSON representation for Button
                 */
                interface AsProtobufJSON {
                    text?: string;
                    postback?: string;
                }
            }
        }
        /**
         * Message implementation for ondewo.nlu.SimpleResponse
         */
        class SimpleResponse implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): SimpleResponse;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: SimpleResponse): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: SimpleResponse, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: SimpleResponse, _writer: BinaryWriter): void;
            private _textToSpeech?;
            private _ssml?;
            private _displayText?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SimpleResponse to deeply clone from
             */
            constructor(_value?: RecursivePartial<SimpleResponse.AsObject>);
            get textToSpeech(): string | undefined;
            set textToSpeech(value: string | undefined);
            get ssml(): string | undefined;
            set ssml(value: string | undefined);
            get displayText(): string | undefined;
            set displayText(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): SimpleResponse.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): SimpleResponse.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): SimpleResponse.AsProtobufJSON;
        }
        module SimpleResponse {
            /**
             * Standard JavaScript object representation for SimpleResponse
             */
            interface AsObject {
                textToSpeech?: string;
                ssml?: string;
                displayText?: string;
            }
            /**
             * Protobuf JSON representation for SimpleResponse
             */
            interface AsProtobufJSON {
                textToSpeech?: string;
                ssml?: string;
                displayText?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.SimpleResponses
         */
        class SimpleResponses implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): SimpleResponses;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: SimpleResponses): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: SimpleResponses, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: SimpleResponses, _writer: BinaryWriter): void;
            private _simpleResponses?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SimpleResponses to deeply clone from
             */
            constructor(_value?: RecursivePartial<SimpleResponses.AsObject>);
            get simpleResponses(): Intent.Message.SimpleResponse[] | undefined;
            set simpleResponses(value: Intent.Message.SimpleResponse[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): SimpleResponses.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): SimpleResponses.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): SimpleResponses.AsProtobufJSON;
        }
        module SimpleResponses {
            /**
             * Standard JavaScript object representation for SimpleResponses
             */
            interface AsObject {
                simpleResponses?: Intent.Message.SimpleResponse.AsObject[];
            }
            /**
             * Protobuf JSON representation for SimpleResponses
             */
            interface AsProtobufJSON {
                simpleResponses?: Intent.Message.SimpleResponse.AsProtobufJSON[] | null;
            }
        }
        /**
         * Message implementation for ondewo.nlu.BasicCard
         */
        class BasicCard implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): BasicCard;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: BasicCard): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: BasicCard, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: BasicCard, _writer: BinaryWriter): void;
            private _title?;
            private _subtitle?;
            private _formattedText?;
            private _image?;
            private _buttons?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of BasicCard to deeply clone from
             */
            constructor(_value?: RecursivePartial<BasicCard.AsObject>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get subtitle(): string | undefined;
            set subtitle(value: string | undefined);
            get formattedText(): string | undefined;
            set formattedText(value: string | undefined);
            get image(): Intent.Message.Image | undefined;
            set image(value: Intent.Message.Image | undefined);
            get buttons(): Intent.Message.BasicCard.Button[] | undefined;
            set buttons(value: Intent.Message.BasicCard.Button[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): BasicCard.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): BasicCard.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): BasicCard.AsProtobufJSON;
        }
        module BasicCard {
            /**
             * Standard JavaScript object representation for BasicCard
             */
            interface AsObject {
                title?: string;
                subtitle?: string;
                formattedText?: string;
                image?: Intent.Message.Image.AsObject;
                buttons?: Intent.Message.BasicCard.Button.AsObject[];
            }
            /**
             * Protobuf JSON representation for BasicCard
             */
            interface AsProtobufJSON {
                title?: string;
                subtitle?: string;
                formattedText?: string;
                image?: Intent.Message.Image.AsProtobufJSON | null;
                buttons?: Intent.Message.BasicCard.Button.AsProtobufJSON[] | null;
            }
            /**
             * Message implementation for ondewo.nlu.Button
             */
            class Button implements GrpcMessage {
                static id: string;
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes: ByteSource): Button;
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance: Button): void;
                /**
                 * Deserializes / reads binary message into message instance using provided binary reader
                 * @param _instance message instance
                 * @param _reader binary reader instance
                 */
                static deserializeBinaryFromReader(_instance: Button, _reader: BinaryReader): void;
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance: Button, _writer: BinaryWriter): void;
                private _title?;
                private _openUriAction?;
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Button to deeply clone from
                 */
                constructor(_value?: RecursivePartial<Button.AsObject>);
                get title(): string | undefined;
                set title(value: string | undefined);
                get openUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
                set openUriAction(value: Intent.Message.BasicCard.Button.OpenUriAction | undefined);
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary(): any;
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject(): Button.AsObject;
                /**
                 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
                 */
                toJSON(): Button.AsObject;
                /**
                 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
                 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
                 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
                 */
                toProtobufJSON(options?: ToProtobufJSONOptions): Button.AsProtobufJSON;
            }
            module Button {
                /**
                 * Standard JavaScript object representation for Button
                 */
                interface AsObject {
                    title?: string;
                    openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject;
                }
                /**
                 * Protobuf JSON representation for Button
                 */
                interface AsProtobufJSON {
                    title?: string;
                    openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsProtobufJSON | null;
                }
                /**
                 * Message implementation for ondewo.nlu.OpenUriAction
                 */
                class OpenUriAction implements GrpcMessage {
                    static id: string;
                    /**
                     * Deserialize binary data to message
                     * @param instance message instance
                     */
                    static deserializeBinary(bytes: ByteSource): OpenUriAction;
                    /**
                     * Check all the properties and set default protobuf values if necessary
                     * @param _instance message instance
                     */
                    static refineValues(_instance: OpenUriAction): void;
                    /**
                     * Deserializes / reads binary message into message instance using provided binary reader
                     * @param _instance message instance
                     * @param _reader binary reader instance
                     */
                    static deserializeBinaryFromReader(_instance: OpenUriAction, _reader: BinaryReader): void;
                    /**
                     * Serializes a message to binary format using provided binary reader
                     * @param _instance message instance
                     * @param _writer binary writer instance
                     */
                    static serializeBinaryToWriter(_instance: OpenUriAction, _writer: BinaryWriter): void;
                    private _uri?;
                    /**
                     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                     * @param _value initial values object or instance of OpenUriAction to deeply clone from
                     */
                    constructor(_value?: RecursivePartial<OpenUriAction.AsObject>);
                    get uri(): string | undefined;
                    set uri(value: string | undefined);
                    /**
                     * Serialize message to binary data
                     * @param instance message instance
                     */
                    serializeBinary(): any;
                    /**
                     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                     */
                    toObject(): OpenUriAction.AsObject;
                    /**
                     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
                     */
                    toJSON(): OpenUriAction.AsObject;
                    /**
                     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
                     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
                     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
                     */
                    toProtobufJSON(options?: ToProtobufJSONOptions): OpenUriAction.AsProtobufJSON;
                }
                module OpenUriAction {
                    /**
                     * Standard JavaScript object representation for OpenUriAction
                     */
                    interface AsObject {
                        uri?: string;
                    }
                    /**
                     * Protobuf JSON representation for OpenUriAction
                     */
                    interface AsProtobufJSON {
                        uri?: string;
                    }
                }
            }
        }
        /**
         * Message implementation for ondewo.nlu.Suggestion
         */
        class Suggestion implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Suggestion;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Suggestion): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Suggestion, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Suggestion, _writer: BinaryWriter): void;
            private _title?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestion to deeply clone from
             */
            constructor(_value?: RecursivePartial<Suggestion.AsObject>);
            get title(): string | undefined;
            set title(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Suggestion.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Suggestion.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Suggestion.AsProtobufJSON;
        }
        module Suggestion {
            /**
             * Standard JavaScript object representation for Suggestion
             */
            interface AsObject {
                title?: string;
            }
            /**
             * Protobuf JSON representation for Suggestion
             */
            interface AsProtobufJSON {
                title?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.Suggestions
         */
        class Suggestions implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Suggestions;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Suggestions): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Suggestions, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Suggestions, _writer: BinaryWriter): void;
            private _suggestions?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Suggestions to deeply clone from
             */
            constructor(_value?: RecursivePartial<Suggestions.AsObject>);
            get suggestions(): Intent.Message.Suggestion[] | undefined;
            set suggestions(value: Intent.Message.Suggestion[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Suggestions.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Suggestions.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Suggestions.AsProtobufJSON;
        }
        module Suggestions {
            /**
             * Standard JavaScript object representation for Suggestions
             */
            interface AsObject {
                suggestions?: Intent.Message.Suggestion.AsObject[];
            }
            /**
             * Protobuf JSON representation for Suggestions
             */
            interface AsProtobufJSON {
                suggestions?: Intent.Message.Suggestion.AsProtobufJSON[] | null;
            }
        }
        /**
         * Message implementation for ondewo.nlu.LinkOutSuggestion
         */
        class LinkOutSuggestion implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): LinkOutSuggestion;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: LinkOutSuggestion): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: LinkOutSuggestion, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: LinkOutSuggestion, _writer: BinaryWriter): void;
            private _destinationName?;
            private _uri?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of LinkOutSuggestion to deeply clone from
             */
            constructor(_value?: RecursivePartial<LinkOutSuggestion.AsObject>);
            get destinationName(): string | undefined;
            set destinationName(value: string | undefined);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): LinkOutSuggestion.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): LinkOutSuggestion.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): LinkOutSuggestion.AsProtobufJSON;
        }
        module LinkOutSuggestion {
            /**
             * Standard JavaScript object representation for LinkOutSuggestion
             */
            interface AsObject {
                destinationName?: string;
                uri?: string;
            }
            /**
             * Protobuf JSON representation for LinkOutSuggestion
             */
            interface AsProtobufJSON {
                destinationName?: string;
                uri?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.ListSelect
         */
        class ListSelect implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): ListSelect;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: ListSelect): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: ListSelect, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: ListSelect, _writer: BinaryWriter): void;
            private _title?;
            private _items?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of ListSelect to deeply clone from
             */
            constructor(_value?: RecursivePartial<ListSelect.AsObject>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get items(): Intent.Message.ListSelect.Item[] | undefined;
            set items(value: Intent.Message.ListSelect.Item[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): ListSelect.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): ListSelect.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): ListSelect.AsProtobufJSON;
        }
        module ListSelect {
            /**
             * Standard JavaScript object representation for ListSelect
             */
            interface AsObject {
                title?: string;
                items?: Intent.Message.ListSelect.Item.AsObject[];
            }
            /**
             * Protobuf JSON representation for ListSelect
             */
            interface AsProtobufJSON {
                title?: string;
                items?: Intent.Message.ListSelect.Item.AsProtobufJSON[] | null;
            }
            /**
             * Message implementation for ondewo.nlu.Item
             */
            class Item implements GrpcMessage {
                static id: string;
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes: ByteSource): Item;
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance: Item): void;
                /**
                 * Deserializes / reads binary message into message instance using provided binary reader
                 * @param _instance message instance
                 * @param _reader binary reader instance
                 */
                static deserializeBinaryFromReader(_instance: Item, _reader: BinaryReader): void;
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter): void;
                private _info?;
                private _title?;
                private _description?;
                private _image?;
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Item to deeply clone from
                 */
                constructor(_value?: RecursivePartial<Item.AsObject>);
                get info(): Intent.Message.SelectItemInfo | undefined;
                set info(value: Intent.Message.SelectItemInfo | undefined);
                get title(): string | undefined;
                set title(value: string | undefined);
                get description(): string | undefined;
                set description(value: string | undefined);
                get image(): Intent.Message.Image | undefined;
                set image(value: Intent.Message.Image | undefined);
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary(): any;
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject(): Item.AsObject;
                /**
                 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
                 */
                toJSON(): Item.AsObject;
                /**
                 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
                 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
                 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
                 */
                toProtobufJSON(options?: ToProtobufJSONOptions): Item.AsProtobufJSON;
            }
            module Item {
                /**
                 * Standard JavaScript object representation for Item
                 */
                interface AsObject {
                    info?: Intent.Message.SelectItemInfo.AsObject;
                    title?: string;
                    description?: string;
                    image?: Intent.Message.Image.AsObject;
                }
                /**
                 * Protobuf JSON representation for Item
                 */
                interface AsProtobufJSON {
                    info?: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
                    title?: string;
                    description?: string;
                    image?: Intent.Message.Image.AsProtobufJSON | null;
                }
            }
        }
        /**
         * Message implementation for ondewo.nlu.CarouselSelect
         */
        class CarouselSelect implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): CarouselSelect;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: CarouselSelect): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: CarouselSelect, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: CarouselSelect, _writer: BinaryWriter): void;
            private _items?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of CarouselSelect to deeply clone from
             */
            constructor(_value?: RecursivePartial<CarouselSelect.AsObject>);
            get items(): Intent.Message.CarouselSelect.Item[] | undefined;
            set items(value: Intent.Message.CarouselSelect.Item[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): CarouselSelect.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): CarouselSelect.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): CarouselSelect.AsProtobufJSON;
        }
        module CarouselSelect {
            /**
             * Standard JavaScript object representation for CarouselSelect
             */
            interface AsObject {
                items?: Intent.Message.CarouselSelect.Item.AsObject[];
            }
            /**
             * Protobuf JSON representation for CarouselSelect
             */
            interface AsProtobufJSON {
                items?: Intent.Message.CarouselSelect.Item.AsProtobufJSON[] | null;
            }
            /**
             * Message implementation for ondewo.nlu.Item
             */
            class Item implements GrpcMessage {
                static id: string;
                /**
                 * Deserialize binary data to message
                 * @param instance message instance
                 */
                static deserializeBinary(bytes: ByteSource): Item;
                /**
                 * Check all the properties and set default protobuf values if necessary
                 * @param _instance message instance
                 */
                static refineValues(_instance: Item): void;
                /**
                 * Deserializes / reads binary message into message instance using provided binary reader
                 * @param _instance message instance
                 * @param _reader binary reader instance
                 */
                static deserializeBinaryFromReader(_instance: Item, _reader: BinaryReader): void;
                /**
                 * Serializes a message to binary format using provided binary reader
                 * @param _instance message instance
                 * @param _writer binary writer instance
                 */
                static serializeBinaryToWriter(_instance: Item, _writer: BinaryWriter): void;
                private _info?;
                private _title?;
                private _description?;
                private _image?;
                /**
                 * Message constructor. Initializes the properties and applies default Protobuf values if necessary
                 * @param _value initial values object or instance of Item to deeply clone from
                 */
                constructor(_value?: RecursivePartial<Item.AsObject>);
                get info(): Intent.Message.SelectItemInfo | undefined;
                set info(value: Intent.Message.SelectItemInfo | undefined);
                get title(): string | undefined;
                set title(value: string | undefined);
                get description(): string | undefined;
                set description(value: string | undefined);
                get image(): Intent.Message.Image | undefined;
                set image(value: Intent.Message.Image | undefined);
                /**
                 * Serialize message to binary data
                 * @param instance message instance
                 */
                serializeBinary(): any;
                /**
                 * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
                 */
                toObject(): Item.AsObject;
                /**
                 * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
                 */
                toJSON(): Item.AsObject;
                /**
                 * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
                 * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
                 * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
                 */
                toProtobufJSON(options?: ToProtobufJSONOptions): Item.AsProtobufJSON;
            }
            module Item {
                /**
                 * Standard JavaScript object representation for Item
                 */
                interface AsObject {
                    info?: Intent.Message.SelectItemInfo.AsObject;
                    title?: string;
                    description?: string;
                    image?: Intent.Message.Image.AsObject;
                }
                /**
                 * Protobuf JSON representation for Item
                 */
                interface AsProtobufJSON {
                    info?: Intent.Message.SelectItemInfo.AsProtobufJSON | null;
                    title?: string;
                    description?: string;
                    image?: Intent.Message.Image.AsProtobufJSON | null;
                }
            }
        }
        /**
         * Message implementation for ondewo.nlu.HTMLText
         */
        class HTMLText implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): HTMLText;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: HTMLText): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: HTMLText, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: HTMLText, _writer: BinaryWriter): void;
            private _text?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of HTMLText to deeply clone from
             */
            constructor(_value?: RecursivePartial<HTMLText.AsObject>);
            get text(): string[] | undefined;
            set text(value: string[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): HTMLText.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): HTMLText.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): HTMLText.AsProtobufJSON;
        }
        module HTMLText {
            /**
             * Standard JavaScript object representation for HTMLText
             */
            interface AsObject {
                text?: string[];
            }
            /**
             * Protobuf JSON representation for HTMLText
             */
            interface AsProtobufJSON {
                text?: string[];
            }
        }
        /**
         * Message implementation for ondewo.nlu.Video
         */
        class Video implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Video;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Video): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Video, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Video, _writer: BinaryWriter): void;
            private _uri?;
            private _accessibilityText?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Video to deeply clone from
             */
            constructor(_value?: RecursivePartial<Video.AsObject>);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Video.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Video.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Video.AsProtobufJSON;
        }
        module Video {
            /**
             * Standard JavaScript object representation for Video
             */
            interface AsObject {
                uri?: string;
                accessibilityText?: string;
            }
            /**
             * Protobuf JSON representation for Video
             */
            interface AsProtobufJSON {
                uri?: string;
                accessibilityText?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.Audio
         */
        class Audio implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): Audio;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: Audio): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: Audio, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: Audio, _writer: BinaryWriter): void;
            private _uri?;
            private _accessibilityText?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of Audio to deeply clone from
             */
            constructor(_value?: RecursivePartial<Audio.AsObject>);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): Audio.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): Audio.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): Audio.AsProtobufJSON;
        }
        module Audio {
            /**
             * Standard JavaScript object representation for Audio
             */
            interface AsObject {
                uri?: string;
                accessibilityText?: string;
            }
            /**
             * Protobuf JSON representation for Audio
             */
            interface AsProtobufJSON {
                uri?: string;
                accessibilityText?: string;
            }
        }
        /**
         * Message implementation for ondewo.nlu.SelectItemInfo
         */
        class SelectItemInfo implements GrpcMessage {
            static id: string;
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */
            static deserializeBinary(bytes: ByteSource): SelectItemInfo;
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */
            static refineValues(_instance: SelectItemInfo): void;
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */
            static deserializeBinaryFromReader(_instance: SelectItemInfo, _reader: BinaryReader): void;
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */
            static serializeBinaryToWriter(_instance: SelectItemInfo, _writer: BinaryWriter): void;
            private _key?;
            private _synonyms?;
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of SelectItemInfo to deeply clone from
             */
            constructor(_value?: RecursivePartial<SelectItemInfo.AsObject>);
            get key(): string | undefined;
            set key(value: string | undefined);
            get synonyms(): string[] | undefined;
            set synonyms(value: string[] | undefined);
            /**
             * Serialize message to binary data
             * @param instance message instance
             */
            serializeBinary(): any;
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */
            toObject(): SelectItemInfo.AsObject;
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */
            toJSON(): SelectItemInfo.AsObject;
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */
            toProtobufJSON(options?: ToProtobufJSONOptions): SelectItemInfo.AsProtobufJSON;
        }
        module SelectItemInfo {
            /**
             * Standard JavaScript object representation for SelectItemInfo
             */
            interface AsObject {
                key?: string;
                synonyms?: string[];
            }
            /**
             * Protobuf JSON representation for SelectItemInfo
             */
            interface AsProtobufJSON {
                key?: string;
                synonyms?: string[];
            }
        }
    }
    /**
     * Message implementation for ondewo.nlu.FollowupIntentInfo
     */
    class FollowupIntentInfo implements GrpcMessage {
        static id: string;
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */
        static deserializeBinary(bytes: ByteSource): FollowupIntentInfo;
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */
        static refineValues(_instance: FollowupIntentInfo): void;
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */
        static deserializeBinaryFromReader(_instance: FollowupIntentInfo, _reader: BinaryReader): void;
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */
        static serializeBinaryToWriter(_instance: FollowupIntentInfo, _writer: BinaryWriter): void;
        private _followupIntentName?;
        private _parentFollowupIntentName?;
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FollowupIntentInfo to deeply clone from
         */
        constructor(_value?: RecursivePartial<FollowupIntentInfo.AsObject>);
        get followupIntentName(): string | undefined;
        set followupIntentName(value: string | undefined);
        get parentFollowupIntentName(): string | undefined;
        set parentFollowupIntentName(value: string | undefined);
        /**
         * Serialize message to binary data
         * @param instance message instance
         */
        serializeBinary(): any;
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */
        toObject(): FollowupIntentInfo.AsObject;
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */
        toJSON(): FollowupIntentInfo.AsObject;
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */
        toProtobufJSON(options?: ToProtobufJSONOptions): FollowupIntentInfo.AsProtobufJSON;
    }
    module FollowupIntentInfo {
        /**
         * Standard JavaScript object representation for FollowupIntentInfo
         */
        interface AsObject {
            followupIntentName?: string;
            parentFollowupIntentName?: string;
        }
        /**
         * Protobuf JSON representation for FollowupIntentInfo
         */
        interface AsProtobufJSON {
            followupIntentName?: string;
            parentFollowupIntentName?: string;
        }
    }
}
/**
 * Message implementation for ondewo.nlu.ListIntentsRequest
 */
export declare class ListIntentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListIntentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListIntentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListIntentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListIntentsRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _intentView?;
    private _pageToken?;
    private _filterByCategory?;
    private _sortByField?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListIntentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListIntentsRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get filterByCategory(): IntentCategory | undefined;
    set filterByCategory(value: IntentCategory | undefined);
    get sortByField(): IntentSorting | undefined;
    set sortByField(value: IntentSorting | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListIntentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListIntentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListIntentsRequest.AsProtobufJSON;
}
export declare module ListIntentsRequest {
    /**
     * Standard JavaScript object representation for ListIntentsRequest
     */
    interface AsObject {
        parent?: string;
        languageCode?: string;
        intentView?: IntentView;
        pageToken?: string;
        filterByCategory?: IntentCategory;
        sortByField?: IntentSorting.AsObject;
    }
    /**
     * Protobuf JSON representation for ListIntentsRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        languageCode?: string;
        intentView?: string;
        pageToken?: string;
        filterByCategory?: string;
        sortByField?: IntentSorting.AsProtobufJSON | null;
    }
}
/**
 * Message implementation for ondewo.nlu.ListIntentsResponse
 */
export declare class ListIntentsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): ListIntentsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ListIntentsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: ListIntentsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: ListIntentsResponse, _writer: BinaryWriter): void;
    private _intents?;
    private _nextPageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ListIntentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<ListIntentsResponse.AsObject>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ListIntentsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): ListIntentsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): ListIntentsResponse.AsProtobufJSON;
}
export declare module ListIntentsResponse {
    /**
     * Standard JavaScript object representation for ListIntentsResponse
     */
    interface AsObject {
        intents?: Intent.AsObject[];
        nextPageToken?: string;
    }
    /**
     * Protobuf JSON representation for ListIntentsResponse
     */
    interface AsProtobufJSON {
        intents?: Intent.AsProtobufJSON[] | null;
        nextPageToken?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.GetIntentRequest
 */
export declare class GetIntentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): GetIntentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetIntentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: GetIntentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: GetIntentRequest, _writer: BinaryWriter): void;
    private _name?;
    private _languageCode?;
    private _intentView?;
    private _pageToken?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetIntentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetIntentRequest.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetIntentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): GetIntentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): GetIntentRequest.AsProtobufJSON;
}
export declare module GetIntentRequest {
    /**
     * Standard JavaScript object representation for GetIntentRequest
     */
    interface AsObject {
        name?: string;
        languageCode?: string;
        intentView?: IntentView;
        pageToken?: string;
    }
    /**
     * Protobuf JSON representation for GetIntentRequest
     */
    interface AsProtobufJSON {
        name?: string;
        languageCode?: string;
        intentView?: string;
        pageToken?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.CreateIntentRequest
 */
export declare class CreateIntentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): CreateIntentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: CreateIntentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: CreateIntentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: CreateIntentRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _intent?;
    private _languageCode?;
    private _intentView?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of CreateIntentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<CreateIntentRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intent(): Intent | undefined;
    set intent(value: Intent | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): CreateIntentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): CreateIntentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): CreateIntentRequest.AsProtobufJSON;
}
export declare module CreateIntentRequest {
    /**
     * Standard JavaScript object representation for CreateIntentRequest
     */
    interface AsObject {
        parent?: string;
        intent?: Intent.AsObject;
        languageCode?: string;
        intentView?: IntentView;
    }
    /**
     * Protobuf JSON representation for CreateIntentRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        intent?: Intent.AsProtobufJSON | null;
        languageCode?: string;
        intentView?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.UpdateIntentRequest
 */
export declare class UpdateIntentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): UpdateIntentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UpdateIntentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: UpdateIntentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: UpdateIntentRequest, _writer: BinaryWriter): void;
    private _intent?;
    private _languageCode?;
    private _updateMask?;
    private _intentView?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of UpdateIntentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<UpdateIntentRequest.AsObject>);
    get intent(): Intent | undefined;
    set intent(value: Intent | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf004.FieldMask | undefined;
    set updateMask(value: googleProtobuf004.FieldMask | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UpdateIntentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): UpdateIntentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): UpdateIntentRequest.AsProtobufJSON;
}
export declare module UpdateIntentRequest {
    /**
     * Standard JavaScript object representation for UpdateIntentRequest
     */
    interface AsObject {
        intent?: Intent.AsObject;
        languageCode?: string;
        updateMask?: googleProtobuf004.FieldMask.AsObject;
        intentView?: IntentView;
    }
    /**
     * Protobuf JSON representation for UpdateIntentRequest
     */
    interface AsProtobufJSON {
        intent?: Intent.AsProtobufJSON | null;
        languageCode?: string;
        updateMask?: googleProtobuf004.FieldMask.AsProtobufJSON | null;
        intentView?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.DeleteIntentRequest
 */
export declare class DeleteIntentRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): DeleteIntentRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: DeleteIntentRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: DeleteIntentRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: DeleteIntentRequest, _writer: BinaryWriter): void;
    private _name?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of DeleteIntentRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<DeleteIntentRequest.AsObject>);
    get name(): string | undefined;
    set name(value: string | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): DeleteIntentRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): DeleteIntentRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): DeleteIntentRequest.AsProtobufJSON;
}
export declare module DeleteIntentRequest {
    /**
     * Standard JavaScript object representation for DeleteIntentRequest
     */
    interface AsObject {
        name?: string;
    }
    /**
     * Protobuf JSON representation for DeleteIntentRequest
     */
    interface AsProtobufJSON {
        name?: string;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsRequest
 */
export declare class BatchUpdateIntentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateIntentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateIntentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateIntentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateIntentsRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _intentBatchUri?;
    private _intentBatchInline?;
    private _languageCode?;
    private _updateMask?;
    private _intentView?;
    private _intentBatch;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateIntentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateIntentsRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intentBatchUri(): string | undefined;
    set intentBatchUri(value: string | undefined);
    get intentBatchInline(): IntentBatch | undefined;
    set intentBatchInline(value: IntentBatch | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf004.FieldMask | undefined;
    set updateMask(value: googleProtobuf004.FieldMask | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    get intentBatch(): BatchUpdateIntentsRequest.IntentBatchCase;
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateIntentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateIntentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateIntentsRequest.AsProtobufJSON;
}
export declare module BatchUpdateIntentsRequest {
    /**
     * Standard JavaScript object representation for BatchUpdateIntentsRequest
     */
    interface AsObject {
        parent?: string;
        intentBatchUri?: string;
        intentBatchInline?: IntentBatch.AsObject;
        languageCode?: string;
        updateMask?: googleProtobuf004.FieldMask.AsObject;
        intentView?: IntentView;
    }
    /**
     * Protobuf JSON representation for BatchUpdateIntentsRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        intentBatchUri?: string | null;
        intentBatchInline?: IntentBatch.AsProtobufJSON | null;
        languageCode?: string;
        updateMask?: googleProtobuf004.FieldMask.AsProtobufJSON | null;
        intentView?: string;
    }
    enum IntentBatchCase {
        none = 0,
        intentBatchUri = 1,
        intentBatchInline = 2
    }
}
/**
 * Message implementation for ondewo.nlu.BatchUpdateIntentsResponse
 */
export declare class BatchUpdateIntentsResponse implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchUpdateIntentsResponse;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchUpdateIntentsResponse): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchUpdateIntentsResponse, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchUpdateIntentsResponse, _writer: BinaryWriter): void;
    private _intents?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchUpdateIntentsResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchUpdateIntentsResponse.AsObject>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchUpdateIntentsResponse.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchUpdateIntentsResponse.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchUpdateIntentsResponse.AsProtobufJSON;
}
export declare module BatchUpdateIntentsResponse {
    /**
     * Standard JavaScript object representation for BatchUpdateIntentsResponse
     */
    interface AsObject {
        intents?: Intent.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchUpdateIntentsResponse
     */
    interface AsProtobufJSON {
        intents?: Intent.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.BatchDeleteIntentsRequest
 */
export declare class BatchDeleteIntentsRequest implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): BatchDeleteIntentsRequest;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: BatchDeleteIntentsRequest): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: BatchDeleteIntentsRequest, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: BatchDeleteIntentsRequest, _writer: BinaryWriter): void;
    private _parent?;
    private _intents?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of BatchDeleteIntentsRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<BatchDeleteIntentsRequest.AsObject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): BatchDeleteIntentsRequest.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): BatchDeleteIntentsRequest.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): BatchDeleteIntentsRequest.AsProtobufJSON;
}
export declare module BatchDeleteIntentsRequest {
    /**
     * Standard JavaScript object representation for BatchDeleteIntentsRequest
     */
    interface AsObject {
        parent?: string;
        intents?: Intent.AsObject[];
    }
    /**
     * Protobuf JSON representation for BatchDeleteIntentsRequest
     */
    interface AsProtobufJSON {
        parent?: string;
        intents?: Intent.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.IntentBatch
 */
export declare class IntentBatch implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IntentBatch;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentBatch): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IntentBatch, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IntentBatch, _writer: BinaryWriter): void;
    private _intents?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentBatch to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentBatch.AsObject>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentBatch.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IntentBatch.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IntentBatch.AsProtobufJSON;
}
export declare module IntentBatch {
    /**
     * Standard JavaScript object representation for IntentBatch
     */
    interface AsObject {
        intents?: Intent.AsObject[];
    }
    /**
     * Protobuf JSON representation for IntentBatch
     */
    interface AsProtobufJSON {
        intents?: Intent.AsProtobufJSON[] | null;
    }
}
/**
 * Message implementation for ondewo.nlu.IntentSorting
 */
export declare class IntentSorting implements GrpcMessage {
    static id: string;
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource): IntentSorting;
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: IntentSorting): void;
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: IntentSorting, _reader: BinaryReader): void;
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: IntentSorting, _writer: BinaryWriter): void;
    private _sortingField?;
    private _sortingMode?;
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of IntentSorting to deeply clone from
     */
    constructor(_value?: RecursivePartial<IntentSorting.AsObject>);
    get sortingField(): IntentSorting.IntentSortingField | undefined;
    set sortingField(value: IntentSorting.IntentSortingField | undefined);
    get sortingMode(): ondewoNlu008.SortingMode | undefined;
    set sortingMode(value: ondewoNlu008.SortingMode | undefined);
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary(): any;
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): IntentSorting.AsObject;
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON(): IntentSorting.AsObject;
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(options?: ToProtobufJSONOptions): IntentSorting.AsProtobufJSON;
}
export declare module IntentSorting {
    /**
     * Standard JavaScript object representation for IntentSorting
     */
    interface AsObject {
        sortingField?: IntentSorting.IntentSortingField;
        sortingMode?: ondewoNlu008.SortingMode;
    }
    /**
     * Protobuf JSON representation for IntentSorting
     */
    interface AsProtobufJSON {
        sortingField?: string;
        sortingMode?: string;
    }
    enum IntentSortingField {
        NO_INTENT_SORTING = 0,
        SORT_INTENT_BY_NAME = 1,
        SORT_INTENT_BY_CREATION_DATE = 2,
        SORT_INTENT_BY_LAST_UPDATED = 3,
        SORT_INTENT_BY_USERSAYS_COUNT = 4
    }
}
