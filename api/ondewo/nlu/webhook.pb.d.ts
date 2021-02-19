import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/session.pb';
import * as googleProtobuf004 from '../../google/protobuf/struct.pb';
export declare class PingRequest implements GrpcMessage {
    static toBinary(instance: PingRequest): any;
    static fromBinary(bytes: ByteSource): PingRequest;
    static refineValues(instance: PingRequest): void;
    static fromBinaryReader(instance: PingRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: PingRequest, writer: BinaryWriter): void;
    private _session?;
    /**
     * Creates an object and applies default Protobuf values
     * @param PingRequest value
     */
    constructor(value?: RecursivePartial<PingRequest>);
    get session(): string | undefined;
    set session(value: string | undefined);
    toObject(): {
        session: string;
    };
    toJSON(): {
        session: string;
    };
}
export declare module PingRequest { }
export declare class WebhookRequest implements GrpcMessage {
    static toBinary(instance: WebhookRequest): any;
    static fromBinary(bytes: ByteSource): WebhookRequest;
    static refineValues(instance: WebhookRequest): void;
    static fromBinaryReader(instance: WebhookRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: WebhookRequest, writer: BinaryWriter): void;
    private _session?;
    private _responseId?;
    private _queryResult?;
    private _originalDetectIntentRequest?;
    private _headers?;
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookRequest value
     */
    constructor(value?: RecursivePartial<WebhookRequest>);
    get session(): string | undefined;
    set session(value: string | undefined);
    get responseId(): string | undefined;
    set responseId(value: string | undefined);
    get queryResult(): ondewoNlu003.QueryResult | undefined;
    set queryResult(value: ondewoNlu003.QueryResult | undefined);
    get originalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
    set originalDetectIntentRequest(value: OriginalDetectIntentRequest | undefined);
    get headers(): googleProtobuf004.Struct | undefined;
    set headers(value: googleProtobuf004.Struct | undefined);
    toObject(): {
        session: string;
        responseId: string;
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            allRequiredParamsPresent: boolean;
            fulfillmentText: string;
            fulfillmentMessages: {
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
                        [x: string]: googleProtobuf004.Value;
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
                platform: ondewoNlu002.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu002.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu002.Intent.TrainingPhrase.Type;
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
                            [x: string]: googleProtobuf004.Value;
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
                    platform: ondewoNlu002.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu002.Intent.Message.Platform[];
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
                status: ondewoNlu002.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        };
        originalDetectIntentRequest: {
            source: string;
            payload: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        };
        headers: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
    toJSON(): {
        session: string;
        responseId: string;
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            allRequiredParamsPresent: boolean;
            fulfillmentText: string;
            fulfillmentMessages: {
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
                        [x: string]: googleProtobuf004.Value;
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
                platform: ondewoNlu002.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu001.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu002.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu002.Intent.TrainingPhrase.Type;
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
                            [x: string]: googleProtobuf004.Value;
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
                    platform: ondewoNlu002.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu002.Intent.Message.Platform[];
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
                status: ondewoNlu002.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        };
        originalDetectIntentRequest: {
            source: string;
            payload: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        };
        headers: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
}
export declare module WebhookRequest { }
export declare class WebhookResponse implements GrpcMessage {
    static toBinary(instance: WebhookResponse): any;
    static fromBinary(bytes: ByteSource): WebhookResponse;
    static refineValues(instance: WebhookResponse): void;
    static fromBinaryReader(instance: WebhookResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: WebhookResponse, writer: BinaryWriter): void;
    private _fulfillmentText?;
    private _fulfillmentMessages?;
    private _source?;
    private _payload?;
    private _outputContexts?;
    private _followupEventInput?;
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookResponse value
     */
    constructor(value?: RecursivePartial<WebhookResponse>);
    get fulfillmentText(): string | undefined;
    set fulfillmentText(value: string | undefined);
    get fulfillmentMessages(): ondewoNlu002.Intent.Message[] | undefined;
    set fulfillmentMessages(value: ondewoNlu002.Intent.Message[] | undefined);
    get source(): string | undefined;
    set source(value: string | undefined);
    get payload(): googleProtobuf004.Struct | undefined;
    set payload(value: googleProtobuf004.Struct | undefined);
    get outputContexts(): ondewoNlu001.Context[] | undefined;
    set outputContexts(value: ondewoNlu001.Context[] | undefined);
    get followupEventInput(): ondewoNlu003.EventInput | undefined;
    set followupEventInput(value: ondewoNlu003.EventInput | undefined);
    toObject(): {
        fulfillmentText: string;
        fulfillmentMessages: {
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
                    [x: string]: googleProtobuf004.Value;
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
            platform: ondewoNlu002.Intent.Message.Platform;
        }[];
        source: string;
        payload: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu001.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        followupEventInput: {
            name: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            languageCode: string;
        };
    };
    toJSON(): {
        fulfillmentText: string;
        fulfillmentMessages: {
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
                    [x: string]: googleProtobuf004.Value;
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
            platform: ondewoNlu002.Intent.Message.Platform;
        }[];
        source: string;
        payload: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu001.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        followupEventInput: {
            name: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            languageCode: string;
        };
    };
}
export declare module WebhookResponse { }
export declare class OriginalDetectIntentRequest implements GrpcMessage {
    static toBinary(instance: OriginalDetectIntentRequest): any;
    static fromBinary(bytes: ByteSource): OriginalDetectIntentRequest;
    static refineValues(instance: OriginalDetectIntentRequest): void;
    static fromBinaryReader(instance: OriginalDetectIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: OriginalDetectIntentRequest, writer: BinaryWriter): void;
    private _source?;
    private _payload?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OriginalDetectIntentRequest value
     */
    constructor(value?: RecursivePartial<OriginalDetectIntentRequest>);
    get source(): string | undefined;
    set source(value: string | undefined);
    get payload(): googleProtobuf004.Struct | undefined;
    set payload(value: googleProtobuf004.Struct | undefined);
    toObject(): {
        source: string;
        payload: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
    toJSON(): {
        source: string;
        payload: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
}
export declare module OriginalDetectIntentRequest { }
export declare class PingResponse implements GrpcMessage {
    static toBinary(instance: PingResponse): any;
    static fromBinary(bytes: ByteSource): PingResponse;
    static refineValues(instance: PingResponse): void;
    static fromBinaryReader(instance: PingResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: PingResponse, writer: BinaryWriter): void;
    private _isReachable?;
    /**
     * Creates an object and applies default Protobuf values
     * @param PingResponse value
     */
    constructor(value?: RecursivePartial<PingResponse>);
    get isReachable(): boolean | undefined;
    set isReachable(value: boolean | undefined);
    toObject(): {
        isReachable: boolean;
    };
    toJSON(): {
        isReachable: boolean;
    };
}
export declare module PingResponse { }
