import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu002 from '../../ondewo/nlu/session.pb';
export declare class GetAnswerRequest implements GrpcMessage {
    static toBinary(instance: GetAnswerRequest): any;
    static fromBinary(bytes: ByteSource): GetAnswerRequest;
    static refineValues(instance: GetAnswerRequest): void;
    static fromBinaryReader(instance: GetAnswerRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAnswerRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _text?;
    private _maxNumAnswers?;
    private _thresholdReader?;
    private _thresholdRetriever?;
    private _thresholdOverall?;
    private _readerModelName?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAnswerRequest value
     */
    constructor(value?: RecursivePartial<GetAnswerRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get text(): ondewoNlu002.TextInput | undefined;
    set text(value: ondewoNlu002.TextInput | undefined);
    get maxNumAnswers(): number | undefined;
    set maxNumAnswers(value: number | undefined);
    get thresholdReader(): number | undefined;
    set thresholdReader(value: number | undefined);
    get thresholdRetriever(): number | undefined;
    set thresholdRetriever(value: number | undefined);
    get thresholdOverall(): number | undefined;
    set thresholdOverall(value: number | undefined);
    get readerModelName(): string | undefined;
    set readerModelName(value: string | undefined);
    toObject(): {
        sessionId: string;
        text: {
            text: string;
            languageCode: string;
        };
        maxNumAnswers: number;
        thresholdReader: number;
        thresholdRetriever: number;
        thresholdOverall: number;
        readerModelName: string;
    };
    toJSON(): {
        sessionId: string;
        text: {
            text: string;
            languageCode: string;
        };
        maxNumAnswers: number;
        thresholdReader: number;
        thresholdRetriever: number;
        thresholdOverall: number;
        readerModelName: string;
    };
}
export declare module GetAnswerRequest { }
export declare class GetAnswerResponse implements GrpcMessage {
    static toBinary(instance: GetAnswerResponse): any;
    static fromBinary(bytes: ByteSource): GetAnswerResponse;
    static refineValues(instance: GetAnswerResponse): void;
    static fromBinaryReader(instance: GetAnswerResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAnswerResponse, writer: BinaryWriter): void;
    private _queryResult?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAnswerResponse value
     */
    constructor(value?: RecursivePartial<GetAnswerResponse>);
    get queryResult(): ondewoNlu002.DetectIntentResponse | undefined;
    set queryResult(value: ondewoNlu002.DetectIntentResponse | undefined);
    toObject(): {
        queryResult: {
            responseId: string;
            queryResult: {
                queryText: string;
                languageCode: string;
                speechRecognitionConfidence: number;
                action: string;
                parameters: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
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
                            [x: string]: import("../../../public-api").Value;
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
                    platform: import("../nlu/intent.pb").Intent.Message.Platform;
                }[];
                webhookSource: string;
                webhookPayload: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
                    };
                };
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: import("../nlu/context.pb").Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: import("../nlu/intent.pb").Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: import("../nlu/intent.pb").Intent.TrainingPhrase.Type;
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
                            [x: string]: import("../nlu/context.pb").Context.Parameter;
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
                                [x: string]: import("../../../public-api").Value;
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
                        platform: import("../nlu/intent.pb").Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: import("../nlu/intent.pb").Intent.Message.Platform[];
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
                    status: import("../nlu/intent.pb").Intent.IntentStatus;
                };
                intentDetectionConfidence: number;
                diagnosticInfo: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
                    };
                };
            };
            webhookStatus: {
                code: number;
                message: string;
                details: {
                    typeUrl: string;
                    value: Uint8Array;
                }[];
            };
        };
    };
    toJSON(): {
        queryResult: {
            responseId: string;
            queryResult: {
                queryText: string;
                languageCode: string;
                speechRecognitionConfidence: number;
                action: string;
                parameters: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
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
                            [x: string]: import("../../../public-api").Value;
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
                    platform: import("../nlu/intent.pb").Intent.Message.Platform;
                }[];
                webhookSource: string;
                webhookPayload: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
                    };
                };
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: import("../nlu/context.pb").Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: import("../nlu/intent.pb").Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: import("../nlu/intent.pb").Intent.TrainingPhrase.Type;
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
                            [x: string]: import("../nlu/context.pb").Context.Parameter;
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
                                [x: string]: import("../../../public-api").Value;
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
                        platform: import("../nlu/intent.pb").Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: import("../nlu/intent.pb").Intent.Message.Platform[];
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
                    status: import("../nlu/intent.pb").Intent.IntentStatus;
                };
                intentDetectionConfidence: number;
                diagnosticInfo: {
                    fields: {
                        [x: string]: import("../../../public-api").Value;
                    };
                };
            };
            webhookStatus: {
                code: number;
                message: string;
                details: {
                    typeUrl: string;
                    value: Uint8Array;
                }[];
            };
        };
    };
}
export declare module GetAnswerResponse { }
export declare class RunScraperResponse implements GrpcMessage {
    static toBinary(instance: RunScraperResponse): any;
    static fromBinary(bytes: ByteSource): RunScraperResponse;
    static refineValues(instance: RunScraperResponse): void;
    static fromBinaryReader(instance: RunScraperResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: RunScraperResponse, writer: BinaryWriter): void;
    private _containerName?;
    private _containerId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param RunScraperResponse value
     */
    constructor(value?: RecursivePartial<RunScraperResponse>);
    get containerName(): string | undefined;
    set containerName(value: string | undefined);
    get containerId(): string | undefined;
    set containerId(value: string | undefined);
    toObject(): {
        containerName: string;
        containerId: string;
    };
    toJSON(): {
        containerName: string;
        containerId: string;
    };
}
export declare module RunScraperResponse { }
export declare class RunTrainingResponse implements GrpcMessage {
    static toBinary(instance: RunTrainingResponse): any;
    static fromBinary(bytes: ByteSource): RunTrainingResponse;
    static refineValues(instance: RunTrainingResponse): void;
    static fromBinaryReader(instance: RunTrainingResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: RunTrainingResponse, writer: BinaryWriter): void;
    private _f1?;
    private _accuracy?;
    /**
     * Creates an object and applies default Protobuf values
     * @param RunTrainingResponse value
     */
    constructor(value?: RecursivePartial<RunTrainingResponse>);
    get f1(): number | undefined;
    set f1(value: number | undefined);
    get accuracy(): number | undefined;
    set accuracy(value: number | undefined);
    toObject(): {
        f1: number;
        accuracy: number;
    };
    toJSON(): {
        f1: number;
        accuracy: number;
    };
}
export declare module RunTrainingResponse { }
