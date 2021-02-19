import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import * as googleProtobuf005 from '../../google/protobuf/field-mask.pb';
import * as googleProtobuf006 from '../../google/protobuf/struct.pb';
export declare enum IntentView {
    intentViewUnspecified = 0,
    intentViewFull = 1,
    intentViewPartial = 2,
    intentViewShallow = 3
}
export declare enum IntentCategory {
    allIntents = 0,
    defaultIntents = 1,
    userDefinedIntents = 2
}
export declare class Intent implements GrpcMessage {
    static toBinary(instance: Intent): any;
    static fromBinary(bytes: ByteSource): Intent;
    static refineValues(instance: Intent): void;
    static fromBinaryReader(instance: Intent, reader: BinaryReader): void;
    static toBinaryWriter(instance: Intent, writer: BinaryWriter): void;
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
     * Creates an object and applies default Protobuf values
     * @param Intent value
     */
    constructor(value?: RecursivePartial<Intent>);
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
    get outputContexts(): ondewoNlu001.Context[] | undefined;
    set outputContexts(value: ondewoNlu001.Context[] | undefined);
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
    toObject(): {
        name: string;
        displayName: string;
        webhookState: Intent.WebhookState;
        priority: number;
        isFallback: boolean;
        mlDisabled: boolean;
        inputContextNames: string[];
        events: string[];
        trainingPhrases: {
            name: string;
            type: Intent.TrainingPhrase.Type;
            text: string;
            entities: {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            }[];
            timesAddedCount: number;
        }[];
        action: string;
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu001.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        resetContexts: boolean;
        parameters: {
            name: string;
            displayName: string;
            value: string;
            defaultValue: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            mandatory: boolean;
            prompts: string[];
            isList: boolean;
        }[];
        messages: {
            text: {
                text: string[];
            };
            image: {
                imageUri: string;
                accessibilityText: string;
            };
            quickReplies: {
                title: string;
                quickReplies: string[];
            };
            card: {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
            payload: {
                fields: {
                    [x: string]: googleProtobuf006.Value;
                };
            };
            simpleResponses: {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
            basicCard: {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
            suggestions: {
                suggestions: {
                    title: string;
                }[];
            };
            linkOutSuggestion: {
                destinationName: string;
                uri: string;
            };
            listSelect: {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            carouselSelect: {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            htmlText: {
                text: string[];
            };
            video: {
                uri: string;
                accessibilityText: string;
            };
            audio: {
                uri: string;
                accessibilityText: string;
            };
            platform: Intent.Message.Platform;
        }[];
        defaultResponsePlatforms: Intent.Message.Platform[];
        rootFollowupIntentName: string;
        parentFollowupIntentName: string;
        followupIntentInfo: {
            followupIntentName: string;
            parentFollowupIntentName: string;
        }[];
        nextPageToken: string;
        domainName: string;
        isStartOfDeviation: boolean;
        isEndOfDeviation: boolean;
        trainingPhraseCount: number;
        status: Intent.IntentStatus;
    };
    toJSON(): {
        name: string;
        displayName: string;
        webhookState: Intent.WebhookState;
        priority: number;
        isFallback: boolean;
        mlDisabled: boolean;
        inputContextNames: string[];
        events: string[];
        trainingPhrases: {
            name: string;
            type: Intent.TrainingPhrase.Type;
            text: string;
            entities: {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            }[];
            timesAddedCount: number;
        }[];
        action: string;
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu001.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        resetContexts: boolean;
        parameters: {
            name: string;
            displayName: string;
            value: string;
            defaultValue: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            mandatory: boolean;
            prompts: string[];
            isList: boolean;
        }[];
        messages: {
            text: {
                text: string[];
            };
            image: {
                imageUri: string;
                accessibilityText: string;
            };
            quickReplies: {
                title: string;
                quickReplies: string[];
            };
            card: {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
            payload: {
                fields: {
                    [x: string]: googleProtobuf006.Value;
                };
            };
            simpleResponses: {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
            basicCard: {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
            suggestions: {
                suggestions: {
                    title: string;
                }[];
            };
            linkOutSuggestion: {
                destinationName: string;
                uri: string;
            };
            listSelect: {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            carouselSelect: {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            htmlText: {
                text: string[];
            };
            video: {
                uri: string;
                accessibilityText: string;
            };
            audio: {
                uri: string;
                accessibilityText: string;
            };
            platform: Intent.Message.Platform;
        }[];
        defaultResponsePlatforms: Intent.Message.Platform[];
        rootFollowupIntentName: string;
        parentFollowupIntentName: string;
        followupIntentInfo: {
            followupIntentName: string;
            parentFollowupIntentName: string;
        }[];
        nextPageToken: string;
        domainName: string;
        isStartOfDeviation: boolean;
        isEndOfDeviation: boolean;
        trainingPhraseCount: number;
        status: Intent.IntentStatus;
    };
}
export declare module Intent {
    enum IntentStatus {
        active = 0,
        inactive = 1
    }
    enum WebhookState {
        webhookStateUnspecified = 0,
        webhookStateEnabled = 1,
        webhookStateEnabledForSlotFilling = 2
    }
    class TrainingPhrase implements GrpcMessage {
        static toBinary(instance: TrainingPhrase): any;
        static fromBinary(bytes: ByteSource): TrainingPhrase;
        static refineValues(instance: TrainingPhrase): void;
        static fromBinaryReader(instance: TrainingPhrase, reader: BinaryReader): void;
        static toBinaryWriter(instance: TrainingPhrase, writer: BinaryWriter): void;
        private _name?;
        private _type?;
        private _text?;
        private _entities?;
        private _timesAddedCount?;
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhrase value
         */
        constructor(value?: RecursivePartial<TrainingPhrase>);
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
        toObject(): {
            name: string;
            type: TrainingPhrase.Type;
            text: string;
            entities: {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            }[];
            timesAddedCount: number;
        };
        toJSON(): {
            name: string;
            type: TrainingPhrase.Type;
            text: string;
            entities: {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            }[];
            timesAddedCount: number;
        };
    }
    module TrainingPhrase {
        enum Type {
            typeUnspecified = 0,
            example = 1,
            template = 2
        }
        class Entity implements GrpcMessage {
            static toBinary(instance: Entity): any;
            static fromBinary(bytes: ByteSource): Entity;
            static refineValues(instance: Entity): void;
            static fromBinaryReader(instance: Entity, reader: BinaryReader): void;
            static toBinaryWriter(instance: Entity, writer: BinaryWriter): void;
            private _entityTypeName?;
            private _entityTypeDisplayName?;
            private _entityValueName?;
            private _entityValueDisplayName?;
            private _start?;
            private _end?;
            private _parameterName?;
            private _parameterDisplayName?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Entity value
             */
            constructor(value?: RecursivePartial<Entity>);
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
            toObject(): {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            };
            toJSON(): {
                entityTypeName: string;
                entityTypeDisplayName: string;
                entityValueName: string;
                entityValueDisplayName: string;
                start: number;
                end: number;
                parameterName: string;
                parameterDisplayName: string;
            };
        }
        module Entity { }
    }
    class Parameter implements GrpcMessage {
        static toBinary(instance: Parameter): any;
        static fromBinary(bytes: ByteSource): Parameter;
        static refineValues(instance: Parameter): void;
        static fromBinaryReader(instance: Parameter, reader: BinaryReader): void;
        static toBinaryWriter(instance: Parameter, writer: BinaryWriter): void;
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
         * Creates an object and applies default Protobuf values
         * @param Parameter value
         */
        constructor(value?: RecursivePartial<Parameter>);
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
        toObject(): {
            name: string;
            displayName: string;
            value: string;
            defaultValue: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            mandatory: boolean;
            prompts: string[];
            isList: boolean;
        };
        toJSON(): {
            name: string;
            displayName: string;
            value: string;
            defaultValue: string;
            entityTypeName: string;
            entityTypeDisplayName: string;
            mandatory: boolean;
            prompts: string[];
            isList: boolean;
        };
    }
    module Parameter { }
    class Message implements GrpcMessage {
        static toBinary(instance: Message): any;
        static fromBinary(bytes: ByteSource): Message;
        static refineValues(instance: Message): void;
        static fromBinaryReader(instance: Message, reader: BinaryReader): void;
        static toBinaryWriter(instance: Message, writer: BinaryWriter): void;
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
         * Creates an object and applies default Protobuf values
         * @param Message value
         */
        constructor(value?: RecursivePartial<Message>);
        get text(): Intent.Message.Text | undefined;
        set text(value: Intent.Message.Text | undefined);
        get image(): Intent.Message.Image | undefined;
        set image(value: Intent.Message.Image | undefined);
        get quickReplies(): Intent.Message.QuickReplies | undefined;
        set quickReplies(value: Intent.Message.QuickReplies | undefined);
        get card(): Intent.Message.Card | undefined;
        set card(value: Intent.Message.Card | undefined);
        get payload(): googleProtobuf006.Struct | undefined;
        set payload(value: googleProtobuf006.Struct | undefined);
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
        toObject(): {
            text: {
                text: string[];
            };
            image: {
                imageUri: string;
                accessibilityText: string;
            };
            quickReplies: {
                title: string;
                quickReplies: string[];
            };
            card: {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
            payload: {
                fields: {
                    [x: string]: googleProtobuf006.Value;
                };
            };
            simpleResponses: {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
            basicCard: {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
            suggestions: {
                suggestions: {
                    title: string;
                }[];
            };
            linkOutSuggestion: {
                destinationName: string;
                uri: string;
            };
            listSelect: {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            carouselSelect: {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            htmlText: {
                text: string[];
            };
            video: {
                uri: string;
                accessibilityText: string;
            };
            audio: {
                uri: string;
                accessibilityText: string;
            };
            platform: Message.Platform;
        };
        toJSON(): {
            text: {
                text: string[];
            };
            image: {
                imageUri: string;
                accessibilityText: string;
            };
            quickReplies: {
                title: string;
                quickReplies: string[];
            };
            card: {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
            payload: {
                fields: {
                    [x: string]: googleProtobuf006.Value;
                };
            };
            simpleResponses: {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
            basicCard: {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
            suggestions: {
                suggestions: {
                    title: string;
                }[];
            };
            linkOutSuggestion: {
                destinationName: string;
                uri: string;
            };
            listSelect: {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            carouselSelect: {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            htmlText: {
                text: string[];
            };
            video: {
                uri: string;
                accessibilityText: string;
            };
            audio: {
                uri: string;
                accessibilityText: string;
            };
            platform: Message.Platform;
        };
    }
    module Message {
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
            platformUnspecified = 0,
            facebook = 1,
            slack = 2,
            telegram = 3,
            kik = 4,
            skype = 5,
            line = 6,
            viber = 7,
            actionsOnGoogle = 8
        }
        class Text implements GrpcMessage {
            static toBinary(instance: Text): any;
            static fromBinary(bytes: ByteSource): Text;
            static refineValues(instance: Text): void;
            static fromBinaryReader(instance: Text, reader: BinaryReader): void;
            static toBinaryWriter(instance: Text, writer: BinaryWriter): void;
            private _text?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Text value
             */
            constructor(value?: RecursivePartial<Text>);
            get text(): string[] | undefined;
            set text(value: string[] | undefined);
            toObject(): {
                text: string[];
            };
            toJSON(): {
                text: string[];
            };
        }
        module Text { }
        class Image implements GrpcMessage {
            static toBinary(instance: Image): any;
            static fromBinary(bytes: ByteSource): Image;
            static refineValues(instance: Image): void;
            static fromBinaryReader(instance: Image, reader: BinaryReader): void;
            static toBinaryWriter(instance: Image, writer: BinaryWriter): void;
            private _imageUri?;
            private _accessibilityText?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Image value
             */
            constructor(value?: RecursivePartial<Image>);
            get imageUri(): string | undefined;
            set imageUri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            toObject(): {
                imageUri: string;
                accessibilityText: string;
            };
            toJSON(): {
                imageUri: string;
                accessibilityText: string;
            };
        }
        module Image { }
        class QuickReplies implements GrpcMessage {
            static toBinary(instance: QuickReplies): any;
            static fromBinary(bytes: ByteSource): QuickReplies;
            static refineValues(instance: QuickReplies): void;
            static fromBinaryReader(instance: QuickReplies, reader: BinaryReader): void;
            static toBinaryWriter(instance: QuickReplies, writer: BinaryWriter): void;
            private _title?;
            private _quickReplies?;
            /**
             * Creates an object and applies default Protobuf values
             * @param QuickReplies value
             */
            constructor(value?: RecursivePartial<QuickReplies>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get quickReplies(): string[] | undefined;
            set quickReplies(value: string[] | undefined);
            toObject(): {
                title: string;
                quickReplies: string[];
            };
            toJSON(): {
                title: string;
                quickReplies: string[];
            };
        }
        module QuickReplies { }
        class Card implements GrpcMessage {
            static toBinary(instance: Card): any;
            static fromBinary(bytes: ByteSource): Card;
            static refineValues(instance: Card): void;
            static fromBinaryReader(instance: Card, reader: BinaryReader): void;
            static toBinaryWriter(instance: Card, writer: BinaryWriter): void;
            private _title?;
            private _subtitle?;
            private _imageUri?;
            private _buttons?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Card value
             */
            constructor(value?: RecursivePartial<Card>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get subtitle(): string | undefined;
            set subtitle(value: string | undefined);
            get imageUri(): string | undefined;
            set imageUri(value: string | undefined);
            get buttons(): Intent.Message.Card.Button[] | undefined;
            set buttons(value: Intent.Message.Card.Button[] | undefined);
            toObject(): {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
            toJSON(): {
                title: string;
                subtitle: string;
                imageUri: string;
                buttons: {
                    text: string;
                    postback: string;
                }[];
            };
        }
        module Card {
            class Button implements GrpcMessage {
                static toBinary(instance: Button): any;
                static fromBinary(bytes: ByteSource): Button;
                static refineValues(instance: Button): void;
                static fromBinaryReader(instance: Button, reader: BinaryReader): void;
                static toBinaryWriter(instance: Button, writer: BinaryWriter): void;
                private _text?;
                private _postback?;
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value?: RecursivePartial<Button>);
                get text(): string | undefined;
                set text(value: string | undefined);
                get postback(): string | undefined;
                set postback(value: string | undefined);
                toObject(): {
                    text: string;
                    postback: string;
                };
                toJSON(): {
                    text: string;
                    postback: string;
                };
            }
            module Button { }
        }
        class SimpleResponse implements GrpcMessage {
            static toBinary(instance: SimpleResponse): any;
            static fromBinary(bytes: ByteSource): SimpleResponse;
            static refineValues(instance: SimpleResponse): void;
            static fromBinaryReader(instance: SimpleResponse, reader: BinaryReader): void;
            static toBinaryWriter(instance: SimpleResponse, writer: BinaryWriter): void;
            private _textToSpeech?;
            private _ssml?;
            private _displayText?;
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponse value
             */
            constructor(value?: RecursivePartial<SimpleResponse>);
            get textToSpeech(): string | undefined;
            set textToSpeech(value: string | undefined);
            get ssml(): string | undefined;
            set ssml(value: string | undefined);
            get displayText(): string | undefined;
            set displayText(value: string | undefined);
            toObject(): {
                textToSpeech: string;
                ssml: string;
                displayText: string;
            };
            toJSON(): {
                textToSpeech: string;
                ssml: string;
                displayText: string;
            };
        }
        module SimpleResponse { }
        class SimpleResponses implements GrpcMessage {
            static toBinary(instance: SimpleResponses): any;
            static fromBinary(bytes: ByteSource): SimpleResponses;
            static refineValues(instance: SimpleResponses): void;
            static fromBinaryReader(instance: SimpleResponses, reader: BinaryReader): void;
            static toBinaryWriter(instance: SimpleResponses, writer: BinaryWriter): void;
            private _simpleResponses?;
            /**
             * Creates an object and applies default Protobuf values
             * @param SimpleResponses value
             */
            constructor(value?: RecursivePartial<SimpleResponses>);
            get simpleResponses(): Intent.Message.SimpleResponse[] | undefined;
            set simpleResponses(value: Intent.Message.SimpleResponse[] | undefined);
            toObject(): {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
            toJSON(): {
                simpleResponses: {
                    textToSpeech: string;
                    ssml: string;
                    displayText: string;
                }[];
            };
        }
        module SimpleResponses { }
        class BasicCard implements GrpcMessage {
            static toBinary(instance: BasicCard): any;
            static fromBinary(bytes: ByteSource): BasicCard;
            static refineValues(instance: BasicCard): void;
            static fromBinaryReader(instance: BasicCard, reader: BinaryReader): void;
            static toBinaryWriter(instance: BasicCard, writer: BinaryWriter): void;
            private _title?;
            private _subtitle?;
            private _formattedText?;
            private _image?;
            private _buttons?;
            /**
             * Creates an object and applies default Protobuf values
             * @param BasicCard value
             */
            constructor(value?: RecursivePartial<BasicCard>);
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
            toObject(): {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
            toJSON(): {
                title: string;
                subtitle: string;
                formattedText: string;
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                buttons: {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                }[];
            };
        }
        module BasicCard {
            class Button implements GrpcMessage {
                static toBinary(instance: Button): any;
                static fromBinary(bytes: ByteSource): Button;
                static refineValues(instance: Button): void;
                static fromBinaryReader(instance: Button, reader: BinaryReader): void;
                static toBinaryWriter(instance: Button, writer: BinaryWriter): void;
                private _title?;
                private _openUriAction?;
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Button value
                 */
                constructor(value?: RecursivePartial<Button>);
                get title(): string | undefined;
                set title(value: string | undefined);
                get openUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
                set openUriAction(value: Intent.Message.BasicCard.Button.OpenUriAction | undefined);
                toObject(): {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                };
                toJSON(): {
                    title: string;
                    openUriAction: {
                        uri: string;
                    };
                };
            }
            module Button {
                class OpenUriAction implements GrpcMessage {
                    static toBinary(instance: OpenUriAction): any;
                    static fromBinary(bytes: ByteSource): OpenUriAction;
                    static refineValues(instance: OpenUriAction): void;
                    static fromBinaryReader(instance: OpenUriAction, reader: BinaryReader): void;
                    static toBinaryWriter(instance: OpenUriAction, writer: BinaryWriter): void;
                    private _uri?;
                    /**
                     * Creates an object and applies default Protobuf values
                     * @param OpenUriAction value
                     */
                    constructor(value?: RecursivePartial<OpenUriAction>);
                    get uri(): string | undefined;
                    set uri(value: string | undefined);
                    toObject(): {
                        uri: string;
                    };
                    toJSON(): {
                        uri: string;
                    };
                }
                module OpenUriAction { }
            }
        }
        class Suggestion implements GrpcMessage {
            static toBinary(instance: Suggestion): any;
            static fromBinary(bytes: ByteSource): Suggestion;
            static refineValues(instance: Suggestion): void;
            static fromBinaryReader(instance: Suggestion, reader: BinaryReader): void;
            static toBinaryWriter(instance: Suggestion, writer: BinaryWriter): void;
            private _title?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestion value
             */
            constructor(value?: RecursivePartial<Suggestion>);
            get title(): string | undefined;
            set title(value: string | undefined);
            toObject(): {
                title: string;
            };
            toJSON(): {
                title: string;
            };
        }
        module Suggestion { }
        class Suggestions implements GrpcMessage {
            static toBinary(instance: Suggestions): any;
            static fromBinary(bytes: ByteSource): Suggestions;
            static refineValues(instance: Suggestions): void;
            static fromBinaryReader(instance: Suggestions, reader: BinaryReader): void;
            static toBinaryWriter(instance: Suggestions, writer: BinaryWriter): void;
            private _suggestions?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Suggestions value
             */
            constructor(value?: RecursivePartial<Suggestions>);
            get suggestions(): Intent.Message.Suggestion[] | undefined;
            set suggestions(value: Intent.Message.Suggestion[] | undefined);
            toObject(): {
                suggestions: {
                    title: string;
                }[];
            };
            toJSON(): {
                suggestions: {
                    title: string;
                }[];
            };
        }
        module Suggestions { }
        class LinkOutSuggestion implements GrpcMessage {
            static toBinary(instance: LinkOutSuggestion): any;
            static fromBinary(bytes: ByteSource): LinkOutSuggestion;
            static refineValues(instance: LinkOutSuggestion): void;
            static fromBinaryReader(instance: LinkOutSuggestion, reader: BinaryReader): void;
            static toBinaryWriter(instance: LinkOutSuggestion, writer: BinaryWriter): void;
            private _destinationName?;
            private _uri?;
            /**
             * Creates an object and applies default Protobuf values
             * @param LinkOutSuggestion value
             */
            constructor(value?: RecursivePartial<LinkOutSuggestion>);
            get destinationName(): string | undefined;
            set destinationName(value: string | undefined);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            toObject(): {
                destinationName: string;
                uri: string;
            };
            toJSON(): {
                destinationName: string;
                uri: string;
            };
        }
        module LinkOutSuggestion { }
        class ListSelect implements GrpcMessage {
            static toBinary(instance: ListSelect): any;
            static fromBinary(bytes: ByteSource): ListSelect;
            static refineValues(instance: ListSelect): void;
            static fromBinaryReader(instance: ListSelect, reader: BinaryReader): void;
            static toBinaryWriter(instance: ListSelect, writer: BinaryWriter): void;
            private _title?;
            private _items?;
            /**
             * Creates an object and applies default Protobuf values
             * @param ListSelect value
             */
            constructor(value?: RecursivePartial<ListSelect>);
            get title(): string | undefined;
            set title(value: string | undefined);
            get items(): Intent.Message.ListSelect.Item[] | undefined;
            set items(value: Intent.Message.ListSelect.Item[] | undefined);
            toObject(): {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            toJSON(): {
                title: string;
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
        }
        module ListSelect {
            class Item implements GrpcMessage {
                static toBinary(instance: Item): any;
                static fromBinary(bytes: ByteSource): Item;
                static refineValues(instance: Item): void;
                static fromBinaryReader(instance: Item, reader: BinaryReader): void;
                static toBinaryWriter(instance: Item, writer: BinaryWriter): void;
                private _info?;
                private _title?;
                private _description?;
                private _image?;
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value?: RecursivePartial<Item>);
                get info(): Intent.Message.SelectItemInfo | undefined;
                set info(value: Intent.Message.SelectItemInfo | undefined);
                get title(): string | undefined;
                set title(value: string | undefined);
                get description(): string | undefined;
                set description(value: string | undefined);
                get image(): Intent.Message.Image | undefined;
                set image(value: Intent.Message.Image | undefined);
                toObject(): {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                };
                toJSON(): {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                };
            }
            module Item { }
        }
        class CarouselSelect implements GrpcMessage {
            static toBinary(instance: CarouselSelect): any;
            static fromBinary(bytes: ByteSource): CarouselSelect;
            static refineValues(instance: CarouselSelect): void;
            static fromBinaryReader(instance: CarouselSelect, reader: BinaryReader): void;
            static toBinaryWriter(instance: CarouselSelect, writer: BinaryWriter): void;
            private _items?;
            /**
             * Creates an object and applies default Protobuf values
             * @param CarouselSelect value
             */
            constructor(value?: RecursivePartial<CarouselSelect>);
            get items(): Intent.Message.CarouselSelect.Item[] | undefined;
            set items(value: Intent.Message.CarouselSelect.Item[] | undefined);
            toObject(): {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
            toJSON(): {
                items: {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                }[];
            };
        }
        module CarouselSelect {
            class Item implements GrpcMessage {
                static toBinary(instance: Item): any;
                static fromBinary(bytes: ByteSource): Item;
                static refineValues(instance: Item): void;
                static fromBinaryReader(instance: Item, reader: BinaryReader): void;
                static toBinaryWriter(instance: Item, writer: BinaryWriter): void;
                private _info?;
                private _title?;
                private _description?;
                private _image?;
                /**
                 * Creates an object and applies default Protobuf values
                 * @param Item value
                 */
                constructor(value?: RecursivePartial<Item>);
                get info(): Intent.Message.SelectItemInfo | undefined;
                set info(value: Intent.Message.SelectItemInfo | undefined);
                get title(): string | undefined;
                set title(value: string | undefined);
                get description(): string | undefined;
                set description(value: string | undefined);
                get image(): Intent.Message.Image | undefined;
                set image(value: Intent.Message.Image | undefined);
                toObject(): {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                };
                toJSON(): {
                    info: {
                        key: string;
                        synonyms: string[];
                    };
                    title: string;
                    description: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                };
            }
            module Item { }
        }
        class HTMLText implements GrpcMessage {
            static toBinary(instance: HTMLText): any;
            static fromBinary(bytes: ByteSource): HTMLText;
            static refineValues(instance: HTMLText): void;
            static fromBinaryReader(instance: HTMLText, reader: BinaryReader): void;
            static toBinaryWriter(instance: HTMLText, writer: BinaryWriter): void;
            private _text?;
            /**
             * Creates an object and applies default Protobuf values
             * @param HTMLText value
             */
            constructor(value?: RecursivePartial<HTMLText>);
            get text(): string[] | undefined;
            set text(value: string[] | undefined);
            toObject(): {
                text: string[];
            };
            toJSON(): {
                text: string[];
            };
        }
        module HTMLText { }
        class Video implements GrpcMessage {
            static toBinary(instance: Video): any;
            static fromBinary(bytes: ByteSource): Video;
            static refineValues(instance: Video): void;
            static fromBinaryReader(instance: Video, reader: BinaryReader): void;
            static toBinaryWriter(instance: Video, writer: BinaryWriter): void;
            private _uri?;
            private _accessibilityText?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Video value
             */
            constructor(value?: RecursivePartial<Video>);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            toObject(): {
                uri: string;
                accessibilityText: string;
            };
            toJSON(): {
                uri: string;
                accessibilityText: string;
            };
        }
        module Video { }
        class Audio implements GrpcMessage {
            static toBinary(instance: Audio): any;
            static fromBinary(bytes: ByteSource): Audio;
            static refineValues(instance: Audio): void;
            static fromBinaryReader(instance: Audio, reader: BinaryReader): void;
            static toBinaryWriter(instance: Audio, writer: BinaryWriter): void;
            private _uri?;
            private _accessibilityText?;
            /**
             * Creates an object and applies default Protobuf values
             * @param Audio value
             */
            constructor(value?: RecursivePartial<Audio>);
            get uri(): string | undefined;
            set uri(value: string | undefined);
            get accessibilityText(): string | undefined;
            set accessibilityText(value: string | undefined);
            toObject(): {
                uri: string;
                accessibilityText: string;
            };
            toJSON(): {
                uri: string;
                accessibilityText: string;
            };
        }
        module Audio { }
        class SelectItemInfo implements GrpcMessage {
            static toBinary(instance: SelectItemInfo): any;
            static fromBinary(bytes: ByteSource): SelectItemInfo;
            static refineValues(instance: SelectItemInfo): void;
            static fromBinaryReader(instance: SelectItemInfo, reader: BinaryReader): void;
            static toBinaryWriter(instance: SelectItemInfo, writer: BinaryWriter): void;
            private _key?;
            private _synonyms?;
            /**
             * Creates an object and applies default Protobuf values
             * @param SelectItemInfo value
             */
            constructor(value?: RecursivePartial<SelectItemInfo>);
            get key(): string | undefined;
            set key(value: string | undefined);
            get synonyms(): string[] | undefined;
            set synonyms(value: string[] | undefined);
            toObject(): {
                key: string;
                synonyms: string[];
            };
            toJSON(): {
                key: string;
                synonyms: string[];
            };
        }
        module SelectItemInfo { }
    }
    class FollowupIntentInfo implements GrpcMessage {
        static toBinary(instance: FollowupIntentInfo): any;
        static fromBinary(bytes: ByteSource): FollowupIntentInfo;
        static refineValues(instance: FollowupIntentInfo): void;
        static fromBinaryReader(instance: FollowupIntentInfo, reader: BinaryReader): void;
        static toBinaryWriter(instance: FollowupIntentInfo, writer: BinaryWriter): void;
        private _followupIntentName?;
        private _parentFollowupIntentName?;
        /**
         * Creates an object and applies default Protobuf values
         * @param FollowupIntentInfo value
         */
        constructor(value?: RecursivePartial<FollowupIntentInfo>);
        get followupIntentName(): string | undefined;
        set followupIntentName(value: string | undefined);
        get parentFollowupIntentName(): string | undefined;
        set parentFollowupIntentName(value: string | undefined);
        toObject(): {
            followupIntentName: string;
            parentFollowupIntentName: string;
        };
        toJSON(): {
            followupIntentName: string;
            parentFollowupIntentName: string;
        };
    }
    module FollowupIntentInfo { }
}
export declare class ListIntentsRequest implements GrpcMessage {
    static toBinary(instance: ListIntentsRequest): any;
    static fromBinary(bytes: ByteSource): ListIntentsRequest;
    static refineValues(instance: ListIntentsRequest): void;
    static fromBinaryReader(instance: ListIntentsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListIntentsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _intentView?;
    private _pageToken?;
    private _filterByCategory?;
    private _sortByField?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsRequest value
     */
    constructor(value?: RecursivePartial<ListIntentsRequest>);
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
    toObject(): {
        parent: string;
        languageCode: string;
        intentView: IntentView;
        pageToken: string;
        filterByCategory: IntentCategory;
        sortByField: {
            sortingField: IntentSorting.IntentSortingField;
            sortingMode: ondewoNlu002.SortingMode;
        };
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        intentView: IntentView;
        pageToken: string;
        filterByCategory: IntentCategory;
        sortByField: {
            sortingField: IntentSorting.IntentSortingField;
            sortingMode: ondewoNlu002.SortingMode;
        };
    };
}
export declare module ListIntentsRequest { }
export declare class ListIntentsResponse implements GrpcMessage {
    static toBinary(instance: ListIntentsResponse): any;
    static fromBinary(bytes: ByteSource): ListIntentsResponse;
    static refineValues(instance: ListIntentsResponse): void;
    static fromBinaryReader(instance: ListIntentsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListIntentsResponse, writer: BinaryWriter): void;
    private _intents?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListIntentsResponse value
     */
    constructor(value?: RecursivePartial<ListIntentsResponse>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
        nextPageToken: string;
    };
}
export declare module ListIntentsResponse { }
export declare class GetIntentRequest implements GrpcMessage {
    static toBinary(instance: GetIntentRequest): any;
    static fromBinary(bytes: ByteSource): GetIntentRequest;
    static refineValues(instance: GetIntentRequest): void;
    static fromBinaryReader(instance: GetIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetIntentRequest, writer: BinaryWriter): void;
    private _name?;
    private _languageCode?;
    private _intentView?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetIntentRequest value
     */
    constructor(value?: RecursivePartial<GetIntentRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        name: string;
        languageCode: string;
        intentView: IntentView;
        pageToken: string;
    };
    toJSON(): {
        name: string;
        languageCode: string;
        intentView: IntentView;
        pageToken: string;
    };
}
export declare module GetIntentRequest { }
export declare class CreateIntentRequest implements GrpcMessage {
    static toBinary(instance: CreateIntentRequest): any;
    static fromBinary(bytes: ByteSource): CreateIntentRequest;
    static refineValues(instance: CreateIntentRequest): void;
    static fromBinaryReader(instance: CreateIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateIntentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _intent?;
    private _languageCode?;
    private _intentView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateIntentRequest value
     */
    constructor(value?: RecursivePartial<CreateIntentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intent(): Intent | undefined;
    set intent(value: Intent | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    toObject(): {
        parent: string;
        intent: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        };
        languageCode: string;
        intentView: IntentView;
    };
    toJSON(): {
        parent: string;
        intent: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        };
        languageCode: string;
        intentView: IntentView;
    };
}
export declare module CreateIntentRequest { }
export declare class UpdateIntentRequest implements GrpcMessage {
    static toBinary(instance: UpdateIntentRequest): any;
    static fromBinary(bytes: ByteSource): UpdateIntentRequest;
    static refineValues(instance: UpdateIntentRequest): void;
    static fromBinaryReader(instance: UpdateIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateIntentRequest, writer: BinaryWriter): void;
    private _intent?;
    private _languageCode?;
    private _updateMask?;
    private _intentView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateIntentRequest value
     */
    constructor(value?: RecursivePartial<UpdateIntentRequest>);
    get intent(): Intent | undefined;
    set intent(value: Intent | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf005.FieldMask | undefined;
    set updateMask(value: googleProtobuf005.FieldMask | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    toObject(): {
        intent: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
        intentView: IntentView;
    };
    toJSON(): {
        intent: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
        intentView: IntentView;
    };
}
export declare module UpdateIntentRequest { }
export declare class DeleteIntentRequest implements GrpcMessage {
    static toBinary(instance: DeleteIntentRequest): any;
    static fromBinary(bytes: ByteSource): DeleteIntentRequest;
    static refineValues(instance: DeleteIntentRequest): void;
    static fromBinaryReader(instance: DeleteIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteIntentRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteIntentRequest value
     */
    constructor(value?: RecursivePartial<DeleteIntentRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module DeleteIntentRequest { }
export declare class BatchUpdateIntentsRequest implements GrpcMessage {
    static toBinary(instance: BatchUpdateIntentsRequest): any;
    static fromBinary(bytes: ByteSource): BatchUpdateIntentsRequest;
    static refineValues(instance: BatchUpdateIntentsRequest): void;
    static fromBinaryReader(instance: BatchUpdateIntentsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchUpdateIntentsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _intentBatchUri?;
    private _intentBatchInline?;
    private _languageCode?;
    private _updateMask?;
    private _intentView?;
    private _intentBatch;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsRequest value
     */
    constructor(value?: RecursivePartial<BatchUpdateIntentsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intentBatchUri(): string | undefined;
    set intentBatchUri(value: string | undefined);
    get intentBatchInline(): IntentBatch | undefined;
    set intentBatchInline(value: IntentBatch | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf005.FieldMask | undefined;
    set updateMask(value: googleProtobuf005.FieldMask | undefined);
    get intentView(): IntentView | undefined;
    set intentView(value: IntentView | undefined);
    get intentBatch(): BatchUpdateIntentsRequest.IntentBatchCase;
    toObject(): {
        parent: string;
        intentBatchUri: string;
        intentBatchInline: {
            intents: {
                name: string;
                displayName: string;
                webhookState: Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: Intent.TrainingPhrase.Type;
                    text: string;
                    entities: {
                        entityTypeName: string;
                        entityTypeDisplayName: string;
                        entityValueName: string;
                        entityValueDisplayName: string;
                        start: number;
                        end: number;
                        parameterName: string;
                        parameterDisplayName: string;
                    }[];
                    timesAddedCount: number;
                }[];
                action: string;
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu001.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                resetContexts: boolean;
                parameters: {
                    name: string;
                    displayName: string;
                    value: string;
                    defaultValue: string;
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    mandatory: boolean;
                    prompts: string[];
                    isList: boolean;
                }[];
                messages: {
                    text: {
                        text: string[];
                    };
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    quickReplies: {
                        title: string;
                        quickReplies: string[];
                    };
                    card: {
                        title: string;
                        subtitle: string;
                        imageUri: string;
                        buttons: {
                            text: string;
                            postback: string;
                        }[];
                    };
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf006.Value;
                        };
                    };
                    simpleResponses: {
                        simpleResponses: {
                            textToSpeech: string;
                            ssml: string;
                            displayText: string;
                        }[];
                    };
                    basicCard: {
                        title: string;
                        subtitle: string;
                        formattedText: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                        buttons: {
                            title: string;
                            openUriAction: {
                                uri: string;
                            };
                        }[];
                    };
                    suggestions: {
                        suggestions: {
                            title: string;
                        }[];
                    };
                    linkOutSuggestion: {
                        destinationName: string;
                        uri: string;
                    };
                    listSelect: {
                        title: string;
                        items: {
                            info: {
                                key: string;
                                synonyms: string[];
                            };
                            title: string;
                            description: string;
                            image: {
                                imageUri: string;
                                accessibilityText: string;
                            };
                        }[];
                    };
                    carouselSelect: {
                        items: {
                            info: {
                                key: string;
                                synonyms: string[];
                            };
                            title: string;
                            description: string;
                            image: {
                                imageUri: string;
                                accessibilityText: string;
                            };
                        }[];
                    };
                    htmlText: {
                        text: string[];
                    };
                    video: {
                        uri: string;
                        accessibilityText: string;
                    };
                    audio: {
                        uri: string;
                        accessibilityText: string;
                    };
                    platform: Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: Intent.Message.Platform[];
                rootFollowupIntentName: string;
                parentFollowupIntentName: string;
                followupIntentInfo: {
                    followupIntentName: string;
                    parentFollowupIntentName: string;
                }[];
                nextPageToken: string;
                domainName: string;
                isStartOfDeviation: boolean;
                isEndOfDeviation: boolean;
                trainingPhraseCount: number;
                status: Intent.IntentStatus;
            }[];
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
        intentView: IntentView;
    };
    toJSON(): {
        parent: string;
        intentBatchUri: string;
        intentBatchInline: {
            intents: {
                name: string;
                displayName: string;
                webhookState: Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: Intent.TrainingPhrase.Type;
                    text: string;
                    entities: {
                        entityTypeName: string;
                        entityTypeDisplayName: string;
                        entityValueName: string;
                        entityValueDisplayName: string;
                        start: number;
                        end: number;
                        parameterName: string;
                        parameterDisplayName: string;
                    }[];
                    timesAddedCount: number;
                }[];
                action: string;
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu001.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                resetContexts: boolean;
                parameters: {
                    name: string;
                    displayName: string;
                    value: string;
                    defaultValue: string;
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    mandatory: boolean;
                    prompts: string[];
                    isList: boolean;
                }[];
                messages: {
                    text: {
                        text: string[];
                    };
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    quickReplies: {
                        title: string;
                        quickReplies: string[];
                    };
                    card: {
                        title: string;
                        subtitle: string;
                        imageUri: string;
                        buttons: {
                            text: string;
                            postback: string;
                        }[];
                    };
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf006.Value;
                        };
                    };
                    simpleResponses: {
                        simpleResponses: {
                            textToSpeech: string;
                            ssml: string;
                            displayText: string;
                        }[];
                    };
                    basicCard: {
                        title: string;
                        subtitle: string;
                        formattedText: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                        buttons: {
                            title: string;
                            openUriAction: {
                                uri: string;
                            };
                        }[];
                    };
                    suggestions: {
                        suggestions: {
                            title: string;
                        }[];
                    };
                    linkOutSuggestion: {
                        destinationName: string;
                        uri: string;
                    };
                    listSelect: {
                        title: string;
                        items: {
                            info: {
                                key: string;
                                synonyms: string[];
                            };
                            title: string;
                            description: string;
                            image: {
                                imageUri: string;
                                accessibilityText: string;
                            };
                        }[];
                    };
                    carouselSelect: {
                        items: {
                            info: {
                                key: string;
                                synonyms: string[];
                            };
                            title: string;
                            description: string;
                            image: {
                                imageUri: string;
                                accessibilityText: string;
                            };
                        }[];
                    };
                    htmlText: {
                        text: string[];
                    };
                    video: {
                        uri: string;
                        accessibilityText: string;
                    };
                    audio: {
                        uri: string;
                        accessibilityText: string;
                    };
                    platform: Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: Intent.Message.Platform[];
                rootFollowupIntentName: string;
                parentFollowupIntentName: string;
                followupIntentInfo: {
                    followupIntentName: string;
                    parentFollowupIntentName: string;
                }[];
                nextPageToken: string;
                domainName: string;
                isStartOfDeviation: boolean;
                isEndOfDeviation: boolean;
                trainingPhraseCount: number;
                status: Intent.IntentStatus;
            }[];
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
        intentView: IntentView;
    };
}
export declare module BatchUpdateIntentsRequest {
    enum IntentBatchCase {
        none = 0,
        intentBatchUri = 1,
        intentBatchInline = 2
    }
}
export declare class BatchUpdateIntentsResponse implements GrpcMessage {
    static toBinary(instance: BatchUpdateIntentsResponse): any;
    static fromBinary(bytes: ByteSource): BatchUpdateIntentsResponse;
    static refineValues(instance: BatchUpdateIntentsResponse): void;
    static fromBinaryReader(instance: BatchUpdateIntentsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchUpdateIntentsResponse, writer: BinaryWriter): void;
    private _intents?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateIntentsResponse value
     */
    constructor(value?: RecursivePartial<BatchUpdateIntentsResponse>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    toObject(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
    toJSON(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
}
export declare module BatchUpdateIntentsResponse { }
export declare class BatchDeleteIntentsRequest implements GrpcMessage {
    static toBinary(instance: BatchDeleteIntentsRequest): any;
    static fromBinary(bytes: ByteSource): BatchDeleteIntentsRequest;
    static refineValues(instance: BatchDeleteIntentsRequest): void;
    static fromBinaryReader(instance: BatchDeleteIntentsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchDeleteIntentsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _intents?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteIntentsRequest value
     */
    constructor(value?: RecursivePartial<BatchDeleteIntentsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    toObject(): {
        parent: string;
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
    toJSON(): {
        parent: string;
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
}
export declare module BatchDeleteIntentsRequest { }
export declare class IntentBatch implements GrpcMessage {
    static toBinary(instance: IntentBatch): any;
    static fromBinary(bytes: ByteSource): IntentBatch;
    static refineValues(instance: IntentBatch): void;
    static fromBinaryReader(instance: IntentBatch, reader: BinaryReader): void;
    static toBinaryWriter(instance: IntentBatch, writer: BinaryWriter): void;
    private _intents?;
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentBatch value
     */
    constructor(value?: RecursivePartial<IntentBatch>);
    get intents(): Intent[] | undefined;
    set intents(value: Intent[] | undefined);
    toObject(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
    toJSON(): {
        intents: {
            name: string;
            displayName: string;
            webhookState: Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: Intent.TrainingPhrase.Type;
                text: string;
                entities: {
                    entityTypeName: string;
                    entityTypeDisplayName: string;
                    entityValueName: string;
                    entityValueDisplayName: string;
                    start: number;
                    end: number;
                    parameterName: string;
                    parameterDisplayName: string;
                }[];
                timesAddedCount: number;
            }[];
            action: string;
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            parameters: {
                name: string;
                displayName: string;
                value: string;
                defaultValue: string;
                entityTypeName: string;
                entityTypeDisplayName: string;
                mandatory: boolean;
                prompts: string[];
                isList: boolean;
            }[];
            messages: {
                text: {
                    text: string[];
                };
                image: {
                    imageUri: string;
                    accessibilityText: string;
                };
                quickReplies: {
                    title: string;
                    quickReplies: string[];
                };
                card: {
                    title: string;
                    subtitle: string;
                    imageUri: string;
                    buttons: {
                        text: string;
                        postback: string;
                    }[];
                };
                payload: {
                    fields: {
                        [x: string]: googleProtobuf006.Value;
                    };
                };
                simpleResponses: {
                    simpleResponses: {
                        textToSpeech: string;
                        ssml: string;
                        displayText: string;
                    }[];
                };
                basicCard: {
                    title: string;
                    subtitle: string;
                    formattedText: string;
                    image: {
                        imageUri: string;
                        accessibilityText: string;
                    };
                    buttons: {
                        title: string;
                        openUriAction: {
                            uri: string;
                        };
                    }[];
                };
                suggestions: {
                    suggestions: {
                        title: string;
                    }[];
                };
                linkOutSuggestion: {
                    destinationName: string;
                    uri: string;
                };
                listSelect: {
                    title: string;
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                carouselSelect: {
                    items: {
                        info: {
                            key: string;
                            synonyms: string[];
                        };
                        title: string;
                        description: string;
                        image: {
                            imageUri: string;
                            accessibilityText: string;
                        };
                    }[];
                };
                htmlText: {
                    text: string[];
                };
                video: {
                    uri: string;
                    accessibilityText: string;
                };
                audio: {
                    uri: string;
                    accessibilityText: string;
                };
                platform: Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: Intent.Message.Platform[];
            rootFollowupIntentName: string;
            parentFollowupIntentName: string;
            followupIntentInfo: {
                followupIntentName: string;
                parentFollowupIntentName: string;
            }[];
            nextPageToken: string;
            domainName: string;
            isStartOfDeviation: boolean;
            isEndOfDeviation: boolean;
            trainingPhraseCount: number;
            status: Intent.IntentStatus;
        }[];
    };
}
export declare module IntentBatch { }
export declare class IntentSorting implements GrpcMessage {
    static toBinary(instance: IntentSorting): any;
    static fromBinary(bytes: ByteSource): IntentSorting;
    static refineValues(instance: IntentSorting): void;
    static fromBinaryReader(instance: IntentSorting, reader: BinaryReader): void;
    static toBinaryWriter(instance: IntentSorting, writer: BinaryWriter): void;
    private _sortingField?;
    private _sortingMode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentSorting value
     */
    constructor(value?: RecursivePartial<IntentSorting>);
    get sortingField(): IntentSorting.IntentSortingField | undefined;
    set sortingField(value: IntentSorting.IntentSortingField | undefined);
    get sortingMode(): ondewoNlu002.SortingMode | undefined;
    set sortingMode(value: ondewoNlu002.SortingMode | undefined);
    toObject(): {
        sortingField: IntentSorting.IntentSortingField;
        sortingMode: ondewoNlu002.SortingMode;
    };
    toJSON(): {
        sortingField: IntentSorting.IntentSortingField;
        sortingMode: ondewoNlu002.SortingMode;
    };
}
export declare module IntentSorting {
    enum IntentSortingField {
        noIntentSorting = 0,
        sortIntentByName = 1,
        sortIntentByCreationDate = 2,
        sortIntentByLastUpdated = 3,
        sortIntentByUsersaysCount = 4
    }
}
