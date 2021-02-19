import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/struct.pb';
import * as googleRpc003 from '../../google/rpc/status.pb';
import * as googleType004 from '../../google/type/latlng.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/entity-type.pb';
export declare enum AudioEncoding {
    audioEncodingUnspecified = 0,
    audioEncodingLinear16 = 1,
    audioEncodingFlac = 2,
    audioEncodingMulaw = 3,
    audioEncodingAmr = 4,
    audioEncodingAmrWb = 5,
    audioEncodingOggOpus = 6,
    audioEncodingSpeexWithHeaderByte = 7
}
export declare class DetectIntentRequest implements GrpcMessage {
    static toBinary(instance: DetectIntentRequest): any;
    static fromBinary(bytes: ByteSource): DetectIntentRequest;
    static refineValues(instance: DetectIntentRequest): void;
    static fromBinaryReader(instance: DetectIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DetectIntentRequest, writer: BinaryWriter): void;
    private _session?;
    private _queryParams?;
    private _queryInput?;
    private _inputAudio?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentRequest value
     */
    constructor(value?: RecursivePartial<DetectIntentRequest>);
    get session(): string | undefined;
    set session(value: string | undefined);
    get queryParams(): QueryParameters | undefined;
    set queryParams(value: QueryParameters | undefined);
    get queryInput(): QueryInput | undefined;
    set queryInput(value: QueryInput | undefined);
    get inputAudio(): Uint8Array | undefined;
    set inputAudio(value: Uint8Array | undefined);
    toObject(): {
        session: string;
        queryParams: {
            timeZone: string;
            geoLocation: {
                latitude: number;
                longitude: number;
            };
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            payload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
        };
        queryInput: {
            audioConfig: {
                audioEncoding: AudioEncoding;
                sampleRateHertz: number;
                languageCode: string;
                phraseHints: string[];
            };
            text: {
                text: string;
                languageCode: string;
            };
            event: {
                name: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                languageCode: string;
            };
        };
        inputAudio: Uint8Array;
    };
    toJSON(): {
        session: string;
        queryParams: {
            timeZone: string;
            geoLocation: {
                latitude: number;
                longitude: number;
            };
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            payload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
        };
        queryInput: {
            audioConfig: {
                audioEncoding: AudioEncoding;
                sampleRateHertz: number;
                languageCode: string;
                phraseHints: string[];
            };
            text: {
                text: string;
                languageCode: string;
            };
            event: {
                name: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                languageCode: string;
            };
        };
        inputAudio: Uint8Array;
    };
}
export declare module DetectIntentRequest { }
export declare class DetectIntentResponse implements GrpcMessage {
    static toBinary(instance: DetectIntentResponse): any;
    static fromBinary(bytes: ByteSource): DetectIntentResponse;
    static refineValues(instance: DetectIntentResponse): void;
    static fromBinaryReader(instance: DetectIntentResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: DetectIntentResponse, writer: BinaryWriter): void;
    private _responseId?;
    private _queryResult?;
    private _webhookStatus?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectIntentResponse value
     */
    constructor(value?: RecursivePartial<DetectIntentResponse>);
    get responseId(): string | undefined;
    set responseId(value: string | undefined);
    get queryResult(): QueryResult | undefined;
    set queryResult(value: QueryResult | undefined);
    get webhookStatus(): googleRpc003.Status | undefined;
    set webhookStatus(value: googleRpc003.Status | undefined);
    toObject(): {
        responseId: string;
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
    toJSON(): {
        responseId: string;
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
}
export declare module DetectIntentResponse { }
export declare class QueryParameters implements GrpcMessage {
    static toBinary(instance: QueryParameters): any;
    static fromBinary(bytes: ByteSource): QueryParameters;
    static refineValues(instance: QueryParameters): void;
    static fromBinaryReader(instance: QueryParameters, reader: BinaryReader): void;
    static toBinaryWriter(instance: QueryParameters, writer: BinaryWriter): void;
    private _timeZone?;
    private _geoLocation?;
    private _contexts?;
    private _resetContexts?;
    private _payload?;
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryParameters value
     */
    constructor(value?: RecursivePartial<QueryParameters>);
    get timeZone(): string | undefined;
    set timeZone(value: string | undefined);
    get geoLocation(): googleType004.LatLng | undefined;
    set geoLocation(value: googleType004.LatLng | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    get resetContexts(): boolean | undefined;
    set resetContexts(value: boolean | undefined);
    get payload(): googleProtobuf002.Struct | undefined;
    set payload(value: googleProtobuf002.Struct | undefined);
    toObject(): {
        timeZone: string;
        geoLocation: {
            latitude: number;
            longitude: number;
        };
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        resetContexts: boolean;
        payload: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
    };
    toJSON(): {
        timeZone: string;
        geoLocation: {
            latitude: number;
            longitude: number;
        };
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        resetContexts: boolean;
        payload: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
    };
}
export declare module QueryParameters { }
export declare class QueryInput implements GrpcMessage {
    static toBinary(instance: QueryInput): any;
    static fromBinary(bytes: ByteSource): QueryInput;
    static refineValues(instance: QueryInput): void;
    static fromBinaryReader(instance: QueryInput, reader: BinaryReader): void;
    static toBinaryWriter(instance: QueryInput, writer: BinaryWriter): void;
    private _audioConfig?;
    private _text?;
    private _event?;
    private _input;
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryInput value
     */
    constructor(value?: RecursivePartial<QueryInput>);
    get audioConfig(): InputAudioConfig | undefined;
    set audioConfig(value: InputAudioConfig | undefined);
    get text(): TextInput | undefined;
    set text(value: TextInput | undefined);
    get event(): EventInput | undefined;
    set event(value: EventInput | undefined);
    get input(): QueryInput.InputCase;
    toObject(): {
        audioConfig: {
            audioEncoding: AudioEncoding;
            sampleRateHertz: number;
            languageCode: string;
            phraseHints: string[];
        };
        text: {
            text: string;
            languageCode: string;
        };
        event: {
            name: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            languageCode: string;
        };
    };
    toJSON(): {
        audioConfig: {
            audioEncoding: AudioEncoding;
            sampleRateHertz: number;
            languageCode: string;
            phraseHints: string[];
        };
        text: {
            text: string;
            languageCode: string;
        };
        event: {
            name: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            languageCode: string;
        };
    };
}
export declare module QueryInput {
    enum InputCase {
        none = 0,
        audioConfig = 1,
        text = 2,
        event = 3
    }
}
export declare class QueryResult implements GrpcMessage {
    static toBinary(instance: QueryResult): any;
    static fromBinary(bytes: ByteSource): QueryResult;
    static refineValues(instance: QueryResult): void;
    static fromBinaryReader(instance: QueryResult, reader: BinaryReader): void;
    static toBinaryWriter(instance: QueryResult, writer: BinaryWriter): void;
    private _queryText?;
    private _languageCode?;
    private _speechRecognitionConfidence?;
    private _action?;
    private _parameters?;
    private _allRequiredParamsPresent?;
    private _fulfillmentText?;
    private _fulfillmentMessages?;
    private _webhookSource?;
    private _webhookPayload?;
    private _outputContexts?;
    private _intent?;
    private _intentDetectionConfidence?;
    private _diagnosticInfo?;
    /**
     * Creates an object and applies default Protobuf values
     * @param QueryResult value
     */
    constructor(value?: RecursivePartial<QueryResult>);
    get queryText(): string | undefined;
    set queryText(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get speechRecognitionConfidence(): number | undefined;
    set speechRecognitionConfidence(value: number | undefined);
    get action(): string | undefined;
    set action(value: string | undefined);
    get parameters(): googleProtobuf002.Struct | undefined;
    set parameters(value: googleProtobuf002.Struct | undefined);
    get allRequiredParamsPresent(): boolean | undefined;
    set allRequiredParamsPresent(value: boolean | undefined);
    get fulfillmentText(): string | undefined;
    set fulfillmentText(value: string | undefined);
    get fulfillmentMessages(): ondewoNlu006.Intent.Message[] | undefined;
    set fulfillmentMessages(value: ondewoNlu006.Intent.Message[] | undefined);
    get webhookSource(): string | undefined;
    set webhookSource(value: string | undefined);
    get webhookPayload(): googleProtobuf002.Struct | undefined;
    set webhookPayload(value: googleProtobuf002.Struct | undefined);
    get outputContexts(): ondewoNlu005.Context[] | undefined;
    set outputContexts(value: ondewoNlu005.Context[] | undefined);
    get intent(): ondewoNlu006.Intent | undefined;
    set intent(value: ondewoNlu006.Intent | undefined);
    get intentDetectionConfidence(): number | undefined;
    set intentDetectionConfidence(value: number | undefined);
    get diagnosticInfo(): googleProtobuf002.Struct | undefined;
    set diagnosticInfo(value: googleProtobuf002.Struct | undefined);
    toObject(): {
        queryText: string;
        languageCode: string;
        speechRecognitionConfidence: number;
        action: string;
        parameters: {
            fields: {
                [x: string]: googleProtobuf002.Value;
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
                    [x: string]: googleProtobuf002.Value;
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
            platform: ondewoNlu006.Intent.Message.Platform;
        }[];
        webhookSource: string;
        webhookPayload: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        intent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        };
        intentDetectionConfidence: number;
        diagnosticInfo: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
    };
    toJSON(): {
        queryText: string;
        languageCode: string;
        speechRecognitionConfidence: number;
        action: string;
        parameters: {
            fields: {
                [x: string]: googleProtobuf002.Value;
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
                    [x: string]: googleProtobuf002.Value;
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
            platform: ondewoNlu006.Intent.Message.Platform;
        }[];
        webhookSource: string;
        webhookPayload: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
        outputContexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
        intent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        };
        intentDetectionConfidence: number;
        diagnosticInfo: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
    };
}
export declare module QueryResult { }
export declare class StreamingDetectIntentRequest implements GrpcMessage {
    static toBinary(instance: StreamingDetectIntentRequest): any;
    static fromBinary(bytes: ByteSource): StreamingDetectIntentRequest;
    static refineValues(instance: StreamingDetectIntentRequest): void;
    static fromBinaryReader(instance: StreamingDetectIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: StreamingDetectIntentRequest, writer: BinaryWriter): void;
    private _session?;
    private _queryParams?;
    private _queryInput?;
    private _singleUtterance?;
    private _inputAudio?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentRequest value
     */
    constructor(value?: RecursivePartial<StreamingDetectIntentRequest>);
    get session(): string | undefined;
    set session(value: string | undefined);
    get queryParams(): QueryParameters | undefined;
    set queryParams(value: QueryParameters | undefined);
    get queryInput(): QueryInput | undefined;
    set queryInput(value: QueryInput | undefined);
    get singleUtterance(): boolean | undefined;
    set singleUtterance(value: boolean | undefined);
    get inputAudio(): Uint8Array | undefined;
    set inputAudio(value: Uint8Array | undefined);
    toObject(): {
        session: string;
        queryParams: {
            timeZone: string;
            geoLocation: {
                latitude: number;
                longitude: number;
            };
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            payload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
        };
        queryInput: {
            audioConfig: {
                audioEncoding: AudioEncoding;
                sampleRateHertz: number;
                languageCode: string;
                phraseHints: string[];
            };
            text: {
                text: string;
                languageCode: string;
            };
            event: {
                name: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                languageCode: string;
            };
        };
        singleUtterance: boolean;
        inputAudio: Uint8Array;
    };
    toJSON(): {
        session: string;
        queryParams: {
            timeZone: string;
            geoLocation: {
                latitude: number;
                longitude: number;
            };
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            resetContexts: boolean;
            payload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
        };
        queryInput: {
            audioConfig: {
                audioEncoding: AudioEncoding;
                sampleRateHertz: number;
                languageCode: string;
                phraseHints: string[];
            };
            text: {
                text: string;
                languageCode: string;
            };
            event: {
                name: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                languageCode: string;
            };
        };
        singleUtterance: boolean;
        inputAudio: Uint8Array;
    };
}
export declare module StreamingDetectIntentRequest { }
export declare class StreamingDetectIntentResponse implements GrpcMessage {
    static toBinary(instance: StreamingDetectIntentResponse): any;
    static fromBinary(bytes: ByteSource): StreamingDetectIntentResponse;
    static refineValues(instance: StreamingDetectIntentResponse): void;
    static fromBinaryReader(instance: StreamingDetectIntentResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: StreamingDetectIntentResponse, writer: BinaryWriter): void;
    private _responseId?;
    private _recognitionResult?;
    private _queryResult?;
    private _webhookStatus?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingDetectIntentResponse value
     */
    constructor(value?: RecursivePartial<StreamingDetectIntentResponse>);
    get responseId(): string | undefined;
    set responseId(value: string | undefined);
    get recognitionResult(): StreamingRecognitionResult | undefined;
    set recognitionResult(value: StreamingRecognitionResult | undefined);
    get queryResult(): QueryResult | undefined;
    set queryResult(value: QueryResult | undefined);
    get webhookStatus(): googleRpc003.Status | undefined;
    set webhookStatus(value: googleRpc003.Status | undefined);
    toObject(): {
        responseId: string;
        recognitionResult: {
            messageType: StreamingRecognitionResult.MessageType;
            transcript: string;
            isFinal: boolean;
            confidence: number;
        };
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
    toJSON(): {
        responseId: string;
        recognitionResult: {
            messageType: StreamingRecognitionResult.MessageType;
            transcript: string;
            isFinal: boolean;
            confidence: number;
        };
        queryResult: {
            queryText: string;
            languageCode: string;
            speechRecognitionConfidence: number;
            action: string;
            parameters: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            webhookSource: string;
            webhookPayload: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
                };
            };
            outputContexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            intentDetectionConfidence: number;
            diagnosticInfo: {
                fields: {
                    [x: string]: googleProtobuf002.Value;
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
}
export declare module StreamingDetectIntentResponse { }
export declare class StreamingRecognitionResult implements GrpcMessage {
    static toBinary(instance: StreamingRecognitionResult): any;
    static fromBinary(bytes: ByteSource): StreamingRecognitionResult;
    static refineValues(instance: StreamingRecognitionResult): void;
    static fromBinaryReader(instance: StreamingRecognitionResult, reader: BinaryReader): void;
    static toBinaryWriter(instance: StreamingRecognitionResult, writer: BinaryWriter): void;
    private _messageType?;
    private _transcript?;
    private _isFinal?;
    private _confidence?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StreamingRecognitionResult value
     */
    constructor(value?: RecursivePartial<StreamingRecognitionResult>);
    get messageType(): StreamingRecognitionResult.MessageType | undefined;
    set messageType(value: StreamingRecognitionResult.MessageType | undefined);
    get transcript(): string | undefined;
    set transcript(value: string | undefined);
    get isFinal(): boolean | undefined;
    set isFinal(value: boolean | undefined);
    get confidence(): number | undefined;
    set confidence(value: number | undefined);
    toObject(): {
        messageType: StreamingRecognitionResult.MessageType;
        transcript: string;
        isFinal: boolean;
        confidence: number;
    };
    toJSON(): {
        messageType: StreamingRecognitionResult.MessageType;
        transcript: string;
        isFinal: boolean;
        confidence: number;
    };
}
export declare module StreamingRecognitionResult {
    enum MessageType {
        messageTypeUnspecified = 0,
        transcript = 1,
        endOfSingleUtterance = 2
    }
}
export declare class InputAudioConfig implements GrpcMessage {
    static toBinary(instance: InputAudioConfig): any;
    static fromBinary(bytes: ByteSource): InputAudioConfig;
    static refineValues(instance: InputAudioConfig): void;
    static fromBinaryReader(instance: InputAudioConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: InputAudioConfig, writer: BinaryWriter): void;
    private _audioEncoding?;
    private _sampleRateHertz?;
    private _languageCode?;
    private _phraseHints?;
    /**
     * Creates an object and applies default Protobuf values
     * @param InputAudioConfig value
     */
    constructor(value?: RecursivePartial<InputAudioConfig>);
    get audioEncoding(): AudioEncoding | undefined;
    set audioEncoding(value: AudioEncoding | undefined);
    get sampleRateHertz(): number | undefined;
    set sampleRateHertz(value: number | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get phraseHints(): string[] | undefined;
    set phraseHints(value: string[] | undefined);
    toObject(): {
        audioEncoding: AudioEncoding;
        sampleRateHertz: number;
        languageCode: string;
        phraseHints: string[];
    };
    toJSON(): {
        audioEncoding: AudioEncoding;
        sampleRateHertz: number;
        languageCode: string;
        phraseHints: string[];
    };
}
export declare module InputAudioConfig { }
export declare class TextInput implements GrpcMessage {
    static toBinary(instance: TextInput): any;
    static fromBinary(bytes: ByteSource): TextInput;
    static refineValues(instance: TextInput): void;
    static fromBinaryReader(instance: TextInput, reader: BinaryReader): void;
    static toBinaryWriter(instance: TextInput, writer: BinaryWriter): void;
    private _text?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TextInput value
     */
    constructor(value?: RecursivePartial<TextInput>);
    get text(): string | undefined;
    set text(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        text: string;
        languageCode: string;
    };
    toJSON(): {
        text: string;
        languageCode: string;
    };
}
export declare module TextInput { }
export declare class EventInput implements GrpcMessage {
    static toBinary(instance: EventInput): any;
    static fromBinary(bytes: ByteSource): EventInput;
    static refineValues(instance: EventInput): void;
    static fromBinaryReader(instance: EventInput, reader: BinaryReader): void;
    static toBinaryWriter(instance: EventInput, writer: BinaryWriter): void;
    private _name?;
    private _parameters?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EventInput value
     */
    constructor(value?: RecursivePartial<EventInput>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get parameters(): googleProtobuf002.Struct | undefined;
    set parameters(value: googleProtobuf002.Struct | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        name: string;
        parameters: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
        languageCode: string;
    };
    toJSON(): {
        name: string;
        parameters: {
            fields: {
                [x: string]: googleProtobuf002.Value;
            };
        };
        languageCode: string;
    };
}
export declare module EventInput { }
export declare class Session implements GrpcMessage {
    static toBinary(instance: Session): any;
    static fromBinary(bytes: ByteSource): Session;
    static refineValues(instance: Session): void;
    static fromBinaryReader(instance: Session, reader: BinaryReader): void;
    static toBinaryWriter(instance: Session, writer: BinaryWriter): void;
    private _sessionId?;
    private _sessionSteps?;
    private _sessionInfo?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Session value
     */
    constructor(value?: RecursivePartial<Session>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get sessionSteps(): SessionStep[] | undefined;
    set sessionSteps(value: SessionStep[] | undefined);
    get sessionInfo(): SessionInfo | undefined;
    set sessionInfo(value: SessionInfo | undefined);
    toObject(): {
        sessionId: string;
        sessionSteps: {
            detectIntentRequest: {
                session: string;
                queryParams: {
                    timeZone: string;
                    geoLocation: {
                        latitude: number;
                        longitude: number;
                    };
                    contexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    resetContexts: boolean;
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                };
                queryInput: {
                    audioConfig: {
                        audioEncoding: AudioEncoding;
                        sampleRateHertz: number;
                        languageCode: string;
                        phraseHints: string[];
                    };
                    text: {
                        text: string;
                        languageCode: string;
                    };
                    event: {
                        name: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        languageCode: string;
                    };
                };
                inputAudio: Uint8Array;
            };
            detectIntentResponse: {
                responseId: string;
                queryResult: {
                    queryText: string;
                    languageCode: string;
                    speechRecognitionConfidence: number;
                    action: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    webhookSource: string;
                    webhookPayload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    outputContexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    intentDetectionConfidence: number;
                    diagnosticInfo: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        }[];
        sessionInfo: {
            languageCodes: string[];
            matchedIntents: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            }[];
            matchedEntityTypes: {
                name: string;
                displayName: string;
                kind: ondewoNlu007.EntityType.Kind;
                autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: ondewoNlu007.EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
            minIntentsConfidence: number;
            minEntityTypesConfidence: number;
            earliest: number;
            latest: number;
            numberTurns: number;
            labels: string[];
            userIds: string[];
        };
    };
    toJSON(): {
        sessionId: string;
        sessionSteps: {
            detectIntentRequest: {
                session: string;
                queryParams: {
                    timeZone: string;
                    geoLocation: {
                        latitude: number;
                        longitude: number;
                    };
                    contexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    resetContexts: boolean;
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                };
                queryInput: {
                    audioConfig: {
                        audioEncoding: AudioEncoding;
                        sampleRateHertz: number;
                        languageCode: string;
                        phraseHints: string[];
                    };
                    text: {
                        text: string;
                        languageCode: string;
                    };
                    event: {
                        name: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        languageCode: string;
                    };
                };
                inputAudio: Uint8Array;
            };
            detectIntentResponse: {
                responseId: string;
                queryResult: {
                    queryText: string;
                    languageCode: string;
                    speechRecognitionConfidence: number;
                    action: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    webhookSource: string;
                    webhookPayload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    outputContexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    intentDetectionConfidence: number;
                    diagnosticInfo: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        }[];
        sessionInfo: {
            languageCodes: string[];
            matchedIntents: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            }[];
            matchedEntityTypes: {
                name: string;
                displayName: string;
                kind: ondewoNlu007.EntityType.Kind;
                autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: ondewoNlu007.EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
            minIntentsConfidence: number;
            minEntityTypesConfidence: number;
            earliest: number;
            latest: number;
            numberTurns: number;
            labels: string[];
            userIds: string[];
        };
    };
}
export declare module Session {
    enum View {
        viewUnspecified = 0,
        viewFull = 1,
        viewSparse = 2
    }
}
export declare class SessionStep implements GrpcMessage {
    static toBinary(instance: SessionStep): any;
    static fromBinary(bytes: ByteSource): SessionStep;
    static refineValues(instance: SessionStep): void;
    static fromBinaryReader(instance: SessionStep, reader: BinaryReader): void;
    static toBinaryWriter(instance: SessionStep, writer: BinaryWriter): void;
    private _detectIntentRequest?;
    private _detectIntentResponse?;
    private _contexts?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionStep value
     */
    constructor(value?: RecursivePartial<SessionStep>);
    get detectIntentRequest(): DetectIntentRequest | undefined;
    set detectIntentRequest(value: DetectIntentRequest | undefined);
    get detectIntentResponse(): DetectIntentResponse | undefined;
    set detectIntentResponse(value: DetectIntentResponse | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    toObject(): {
        detectIntentRequest: {
            session: string;
            queryParams: {
                timeZone: string;
                geoLocation: {
                    latitude: number;
                    longitude: number;
                };
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                resetContexts: boolean;
                payload: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
            };
            queryInput: {
                audioConfig: {
                    audioEncoding: AudioEncoding;
                    sampleRateHertz: number;
                    languageCode: string;
                    phraseHints: string[];
                };
                text: {
                    text: string;
                    languageCode: string;
                };
                event: {
                    name: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    languageCode: string;
                };
            };
            inputAudio: Uint8Array;
        };
        detectIntentResponse: {
            responseId: string;
            queryResult: {
                queryText: string;
                languageCode: string;
                speechRecognitionConfidence: number;
                action: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                webhookSource: string;
                webhookPayload: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                };
                intentDetectionConfidence: number;
                diagnosticInfo: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
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
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
    };
    toJSON(): {
        detectIntentRequest: {
            session: string;
            queryParams: {
                timeZone: string;
                geoLocation: {
                    latitude: number;
                    longitude: number;
                };
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                resetContexts: boolean;
                payload: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
            };
            queryInput: {
                audioConfig: {
                    audioEncoding: AudioEncoding;
                    sampleRateHertz: number;
                    languageCode: string;
                    phraseHints: string[];
                };
                text: {
                    text: string;
                    languageCode: string;
                };
                event: {
                    name: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    languageCode: string;
                };
            };
            inputAudio: Uint8Array;
        };
        detectIntentResponse: {
            responseId: string;
            queryResult: {
                queryText: string;
                languageCode: string;
                speechRecognitionConfidence: number;
                action: string;
                parameters: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                webhookSource: string;
                webhookPayload: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
                    };
                };
                outputContexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                };
                intentDetectionConfidence: number;
                diagnosticInfo: {
                    fields: {
                        [x: string]: googleProtobuf002.Value;
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
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
    };
}
export declare module SessionStep { }
export declare class TrackSessionStepRequest implements GrpcMessage {
    static toBinary(instance: TrackSessionStepRequest): any;
    static fromBinary(bytes: ByteSource): TrackSessionStepRequest;
    static refineValues(instance: TrackSessionStepRequest): void;
    static fromBinaryReader(instance: TrackSessionStepRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: TrackSessionStepRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _sessionStep?;
    private _sessionView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TrackSessionStepRequest value
     */
    constructor(value?: RecursivePartial<TrackSessionStepRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get sessionStep(): SessionStep | undefined;
    set sessionStep(value: SessionStep | undefined);
    get sessionView(): Session.View | undefined;
    set sessionView(value: Session.View | undefined);
    toObject(): {
        sessionId: string;
        sessionStep: {
            detectIntentRequest: {
                session: string;
                queryParams: {
                    timeZone: string;
                    geoLocation: {
                        latitude: number;
                        longitude: number;
                    };
                    contexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    resetContexts: boolean;
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                };
                queryInput: {
                    audioConfig: {
                        audioEncoding: AudioEncoding;
                        sampleRateHertz: number;
                        languageCode: string;
                        phraseHints: string[];
                    };
                    text: {
                        text: string;
                        languageCode: string;
                    };
                    event: {
                        name: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        languageCode: string;
                    };
                };
                inputAudio: Uint8Array;
            };
            detectIntentResponse: {
                responseId: string;
                queryResult: {
                    queryText: string;
                    languageCode: string;
                    speechRecognitionConfidence: number;
                    action: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    webhookSource: string;
                    webhookPayload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    outputContexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    intentDetectionConfidence: number;
                    diagnosticInfo: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        };
        sessionView: Session.View;
    };
    toJSON(): {
        sessionId: string;
        sessionStep: {
            detectIntentRequest: {
                session: string;
                queryParams: {
                    timeZone: string;
                    geoLocation: {
                        latitude: number;
                        longitude: number;
                    };
                    contexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    resetContexts: boolean;
                    payload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                };
                queryInput: {
                    audioConfig: {
                        audioEncoding: AudioEncoding;
                        sampleRateHertz: number;
                        languageCode: string;
                        phraseHints: string[];
                    };
                    text: {
                        text: string;
                        languageCode: string;
                    };
                    event: {
                        name: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        languageCode: string;
                    };
                };
                inputAudio: Uint8Array;
            };
            detectIntentResponse: {
                responseId: string;
                queryResult: {
                    queryText: string;
                    languageCode: string;
                    speechRecognitionConfidence: number;
                    action: string;
                    parameters: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    webhookSource: string;
                    webhookPayload: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
                        };
                    };
                    outputContexts: {
                        name: string;
                        lifespanCount: number;
                        parameters: {
                            [x: string]: ondewoNlu005.Context.Parameter;
                        };
                        lifespanTime: number;
                    }[];
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    intentDetectionConfidence: number;
                    diagnosticInfo: {
                        fields: {
                            [x: string]: googleProtobuf002.Value;
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
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        };
        sessionView: Session.View;
    };
}
export declare module TrackSessionStepRequest { }
export declare class ListSessionsRequest implements GrpcMessage {
    static toBinary(instance: ListSessionsRequest): any;
    static fromBinary(bytes: ByteSource): ListSessionsRequest;
    static refineValues(instance: ListSessionsRequest): void;
    static fromBinaryReader(instance: ListSessionsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _sessionView?;
    private _pageToken?;
    private _sessionFilter?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsRequest value
     */
    constructor(value?: RecursivePartial<ListSessionsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get sessionView(): Session.View | undefined;
    set sessionView(value: Session.View | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get sessionFilter(): SessionFilter | undefined;
    set sessionFilter(value: SessionFilter | undefined);
    toObject(): {
        parent: string;
        sessionView: Session.View;
        pageToken: string;
        sessionFilter: {
            languageCodes: string[];
            matchedIntents: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            }[];
            matchedEntityTypes: {
                name: string;
                displayName: string;
                kind: ondewoNlu007.EntityType.Kind;
                autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: ondewoNlu007.EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
            minIntentsConfidenceMin: number;
            minIntentsConfidenceMax: number;
            minEntityTypesConfidenceMin: number;
            minEntityTypesConfidenceMax: number;
            earliest: number;
            latest: number;
            minNumberTurns: number;
            maxNumberTurns: number;
            labels: string[];
            userIds: string[];
        };
    };
    toJSON(): {
        parent: string;
        sessionView: Session.View;
        pageToken: string;
        sessionFilter: {
            languageCodes: string[];
            matchedIntents: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            }[];
            matchedEntityTypes: {
                name: string;
                displayName: string;
                kind: ondewoNlu007.EntityType.Kind;
                autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: ondewoNlu007.EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
            minIntentsConfidenceMin: number;
            minIntentsConfidenceMax: number;
            minEntityTypesConfidenceMin: number;
            minEntityTypesConfidenceMax: number;
            earliest: number;
            latest: number;
            minNumberTurns: number;
            maxNumberTurns: number;
            labels: string[];
            userIds: string[];
        };
    };
}
export declare module ListSessionsRequest { }
export declare class SessionFilter implements GrpcMessage {
    static toBinary(instance: SessionFilter): any;
    static fromBinary(bytes: ByteSource): SessionFilter;
    static refineValues(instance: SessionFilter): void;
    static fromBinaryReader(instance: SessionFilter, reader: BinaryReader): void;
    static toBinaryWriter(instance: SessionFilter, writer: BinaryWriter): void;
    private _languageCodes?;
    private _matchedIntents?;
    private _matchedEntityTypes?;
    private _minIntentsConfidenceMin?;
    private _minIntentsConfidenceMax?;
    private _minEntityTypesConfidenceMin?;
    private _minEntityTypesConfidenceMax?;
    private _earliest?;
    private _latest?;
    private _minNumberTurns?;
    private _maxNumberTurns?;
    private _labels?;
    private _userIds?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionFilter value
     */
    constructor(value?: RecursivePartial<SessionFilter>);
    get languageCodes(): string[] | undefined;
    set languageCodes(value: string[] | undefined);
    get matchedIntents(): ondewoNlu006.Intent[] | undefined;
    set matchedIntents(value: ondewoNlu006.Intent[] | undefined);
    get matchedEntityTypes(): ondewoNlu007.EntityType[] | undefined;
    set matchedEntityTypes(value: ondewoNlu007.EntityType[] | undefined);
    get minIntentsConfidenceMin(): number | undefined;
    set minIntentsConfidenceMin(value: number | undefined);
    get minIntentsConfidenceMax(): number | undefined;
    set minIntentsConfidenceMax(value: number | undefined);
    get minEntityTypesConfidenceMin(): number | undefined;
    set minEntityTypesConfidenceMin(value: number | undefined);
    get minEntityTypesConfidenceMax(): number | undefined;
    set minEntityTypesConfidenceMax(value: number | undefined);
    get earliest(): number | undefined;
    set earliest(value: number | undefined);
    get latest(): number | undefined;
    set latest(value: number | undefined);
    get minNumberTurns(): number | undefined;
    set minNumberTurns(value: number | undefined);
    get maxNumberTurns(): number | undefined;
    set maxNumberTurns(value: number | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    get userIds(): string[] | undefined;
    set userIds(value: string[] | undefined);
    toObject(): {
        languageCodes: string[];
        matchedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        }[];
        matchedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu007.EntityType.Kind;
            autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu007.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        minIntentsConfidenceMin: number;
        minIntentsConfidenceMax: number;
        minEntityTypesConfidenceMin: number;
        minEntityTypesConfidenceMax: number;
        earliest: number;
        latest: number;
        minNumberTurns: number;
        maxNumberTurns: number;
        labels: string[];
        userIds: string[];
    };
    toJSON(): {
        languageCodes: string[];
        matchedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        }[];
        matchedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu007.EntityType.Kind;
            autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu007.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        minIntentsConfidenceMin: number;
        minIntentsConfidenceMax: number;
        minEntityTypesConfidenceMin: number;
        minEntityTypesConfidenceMax: number;
        earliest: number;
        latest: number;
        minNumberTurns: number;
        maxNumberTurns: number;
        labels: string[];
        userIds: string[];
    };
}
export declare module SessionFilter { }
export declare class SessionInfo implements GrpcMessage {
    static toBinary(instance: SessionInfo): any;
    static fromBinary(bytes: ByteSource): SessionInfo;
    static refineValues(instance: SessionInfo): void;
    static fromBinaryReader(instance: SessionInfo, reader: BinaryReader): void;
    static toBinaryWriter(instance: SessionInfo, writer: BinaryWriter): void;
    private _languageCodes?;
    private _matchedIntents?;
    private _matchedEntityTypes?;
    private _minIntentsConfidence?;
    private _minEntityTypesConfidence?;
    private _earliest?;
    private _latest?;
    private _numberTurns?;
    private _labels?;
    private _userIds?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionInfo value
     */
    constructor(value?: RecursivePartial<SessionInfo>);
    get languageCodes(): string[] | undefined;
    set languageCodes(value: string[] | undefined);
    get matchedIntents(): ondewoNlu006.Intent[] | undefined;
    set matchedIntents(value: ondewoNlu006.Intent[] | undefined);
    get matchedEntityTypes(): ondewoNlu007.EntityType[] | undefined;
    set matchedEntityTypes(value: ondewoNlu007.EntityType[] | undefined);
    get minIntentsConfidence(): number | undefined;
    set minIntentsConfidence(value: number | undefined);
    get minEntityTypesConfidence(): number | undefined;
    set minEntityTypesConfidence(value: number | undefined);
    get earliest(): number | undefined;
    set earliest(value: number | undefined);
    get latest(): number | undefined;
    set latest(value: number | undefined);
    get numberTurns(): number | undefined;
    set numberTurns(value: number | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    get userIds(): string[] | undefined;
    set userIds(value: string[] | undefined);
    toObject(): {
        languageCodes: string[];
        matchedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        }[];
        matchedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu007.EntityType.Kind;
            autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu007.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        minIntentsConfidence: number;
        minEntityTypesConfidence: number;
        earliest: number;
        latest: number;
        numberTurns: number;
        labels: string[];
        userIds: string[];
    };
    toJSON(): {
        languageCodes: string[];
        matchedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        }[];
        matchedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu007.EntityType.Kind;
            autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu007.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        minIntentsConfidence: number;
        minEntityTypesConfidence: number;
        earliest: number;
        latest: number;
        numberTurns: number;
        labels: string[];
        userIds: string[];
    };
}
export declare module SessionInfo { }
export declare class ListSessionsResponse implements GrpcMessage {
    static toBinary(instance: ListSessionsResponse): any;
    static fromBinary(bytes: ByteSource): ListSessionsResponse;
    static refineValues(instance: ListSessionsResponse): void;
    static fromBinaryReader(instance: ListSessionsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionsResponse, writer: BinaryWriter): void;
    private _sessions?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionsResponse value
     */
    constructor(value?: RecursivePartial<ListSessionsResponse>);
    get sessions(): Session[] | undefined;
    set sessions(value: Session[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        sessions: {
            sessionId: string;
            sessionSteps: {
                detectIntentRequest: {
                    session: string;
                    queryParams: {
                        timeZone: string;
                        geoLocation: {
                            latitude: number;
                            longitude: number;
                        };
                        contexts: {
                            name: string;
                            lifespanCount: number;
                            parameters: {
                                [x: string]: ondewoNlu005.Context.Parameter;
                            };
                            lifespanTime: number;
                        }[];
                        resetContexts: boolean;
                        payload: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                    };
                    queryInput: {
                        audioConfig: {
                            audioEncoding: AudioEncoding;
                            sampleRateHertz: number;
                            languageCode: string;
                            phraseHints: string[];
                        };
                        text: {
                            text: string;
                            languageCode: string;
                        };
                        event: {
                            name: string;
                            parameters: {
                                fields: {
                                    [x: string]: googleProtobuf002.Value;
                                };
                            };
                            languageCode: string;
                        };
                    };
                    inputAudio: Uint8Array;
                };
                detectIntentResponse: {
                    responseId: string;
                    queryResult: {
                        queryText: string;
                        languageCode: string;
                        speechRecognitionConfidence: number;
                        action: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        webhookSource: string;
                        webhookPayload: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        outputContexts: {
                            name: string;
                            lifespanCount: number;
                            parameters: {
                                [x: string]: ondewoNlu005.Context.Parameter;
                            };
                            lifespanTime: number;
                        }[];
                        intent: {
                            name: string;
                            displayName: string;
                            webhookState: ondewoNlu006.Intent.WebhookState;
                            priority: number;
                            isFallback: boolean;
                            mlDisabled: boolean;
                            inputContextNames: string[];
                            events: string[];
                            trainingPhrases: {
                                name: string;
                                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                    [x: string]: ondewoNlu005.Context.Parameter;
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
                                        [x: string]: googleProtobuf002.Value;
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
                                platform: ondewoNlu006.Intent.Message.Platform;
                            }[];
                            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                            status: ondewoNlu006.Intent.IntentStatus;
                        };
                        intentDetectionConfidence: number;
                        diagnosticInfo: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
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
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
            sessionInfo: {
                languageCodes: string[];
                matchedIntents: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                }[];
                matchedEntityTypes: {
                    name: string;
                    displayName: string;
                    kind: ondewoNlu007.EntityType.Kind;
                    autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                    entities: {
                        value: string;
                        synonyms: string[];
                        name: string;
                        displayName: string;
                        synonymCount: number;
                    }[];
                    nextPageToken: string;
                    entityCount: number;
                    status: ondewoNlu007.EntityType.EntityTypeStatus;
                    synonymCount: number;
                }[];
                minIntentsConfidence: number;
                minEntityTypesConfidence: number;
                earliest: number;
                latest: number;
                numberTurns: number;
                labels: string[];
                userIds: string[];
            };
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        sessions: {
            sessionId: string;
            sessionSteps: {
                detectIntentRequest: {
                    session: string;
                    queryParams: {
                        timeZone: string;
                        geoLocation: {
                            latitude: number;
                            longitude: number;
                        };
                        contexts: {
                            name: string;
                            lifespanCount: number;
                            parameters: {
                                [x: string]: ondewoNlu005.Context.Parameter;
                            };
                            lifespanTime: number;
                        }[];
                        resetContexts: boolean;
                        payload: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                    };
                    queryInput: {
                        audioConfig: {
                            audioEncoding: AudioEncoding;
                            sampleRateHertz: number;
                            languageCode: string;
                            phraseHints: string[];
                        };
                        text: {
                            text: string;
                            languageCode: string;
                        };
                        event: {
                            name: string;
                            parameters: {
                                fields: {
                                    [x: string]: googleProtobuf002.Value;
                                };
                            };
                            languageCode: string;
                        };
                    };
                    inputAudio: Uint8Array;
                };
                detectIntentResponse: {
                    responseId: string;
                    queryResult: {
                        queryText: string;
                        languageCode: string;
                        speechRecognitionConfidence: number;
                        action: string;
                        parameters: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        webhookSource: string;
                        webhookPayload: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
                            };
                        };
                        outputContexts: {
                            name: string;
                            lifespanCount: number;
                            parameters: {
                                [x: string]: ondewoNlu005.Context.Parameter;
                            };
                            lifespanTime: number;
                        }[];
                        intent: {
                            name: string;
                            displayName: string;
                            webhookState: ondewoNlu006.Intent.WebhookState;
                            priority: number;
                            isFallback: boolean;
                            mlDisabled: boolean;
                            inputContextNames: string[];
                            events: string[];
                            trainingPhrases: {
                                name: string;
                                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                    [x: string]: ondewoNlu005.Context.Parameter;
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
                                        [x: string]: googleProtobuf002.Value;
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
                                platform: ondewoNlu006.Intent.Message.Platform;
                            }[];
                            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                            status: ondewoNlu006.Intent.IntentStatus;
                        };
                        intentDetectionConfidence: number;
                        diagnosticInfo: {
                            fields: {
                                [x: string]: googleProtobuf002.Value;
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
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
            sessionInfo: {
                languageCodes: string[];
                matchedIntents: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                }[];
                matchedEntityTypes: {
                    name: string;
                    displayName: string;
                    kind: ondewoNlu007.EntityType.Kind;
                    autoExpansionMode: ondewoNlu007.EntityType.AutoExpansionMode;
                    entities: {
                        value: string;
                        synonyms: string[];
                        name: string;
                        displayName: string;
                        synonymCount: number;
                    }[];
                    nextPageToken: string;
                    entityCount: number;
                    status: ondewoNlu007.EntityType.EntityTypeStatus;
                    synonymCount: number;
                }[];
                minIntentsConfidence: number;
                minEntityTypesConfidence: number;
                earliest: number;
                latest: number;
                numberTurns: number;
                labels: string[];
                userIds: string[];
            };
        }[];
        nextPageToken: string;
    };
}
export declare module ListSessionsResponse { }
export declare class GetSessionRequest implements GrpcMessage {
    static toBinary(instance: GetSessionRequest): any;
    static fromBinary(bytes: ByteSource): GetSessionRequest;
    static refineValues(instance: GetSessionRequest): void;
    static fromBinaryReader(instance: GetSessionRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetSessionRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _sessionView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionRequest value
     */
    constructor(value?: RecursivePartial<GetSessionRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get sessionView(): Session.View | undefined;
    set sessionView(value: Session.View | undefined);
    toObject(): {
        sessionId: string;
        sessionView: Session.View;
    };
    toJSON(): {
        sessionId: string;
        sessionView: Session.View;
    };
}
export declare module GetSessionRequest { }
export declare class DeleteSessionRequest implements GrpcMessage {
    static toBinary(instance: DeleteSessionRequest): any;
    static fromBinary(bytes: ByteSource): DeleteSessionRequest;
    static refineValues(instance: DeleteSessionRequest): void;
    static fromBinaryReader(instance: DeleteSessionRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteSessionRequest, writer: BinaryWriter): void;
    private _sessionId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteSessionRequest value
     */
    constructor(value?: RecursivePartial<DeleteSessionRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    toObject(): {
        sessionId: string;
    };
    toJSON(): {
        sessionId: string;
    };
}
export declare module DeleteSessionRequest { }
export declare class CreateSessionReviewRequest implements GrpcMessage {
    static toBinary(instance: CreateSessionReviewRequest): any;
    static fromBinary(bytes: ByteSource): CreateSessionReviewRequest;
    static refineValues(instance: CreateSessionReviewRequest): void;
    static fromBinaryReader(instance: CreateSessionReviewRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateSessionReviewRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _parentReviewId?;
    private _sessionReview?;
    private _sessionReviewView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateSessionReviewRequest value
     */
    constructor(value?: RecursivePartial<CreateSessionReviewRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get parentReviewId(): string | undefined;
    set parentReviewId(value: string | undefined);
    get sessionReview(): SessionReview | undefined;
    set sessionReview(value: SessionReview | undefined);
    get sessionReviewView(): SessionReview.View | undefined;
    set sessionReviewView(value: SessionReview.View | undefined);
    toObject(): {
        sessionId: string;
        parentReviewId: string;
        sessionReview: {
            sessionReviewId: string;
            sessionReviewSteps: {
                annotatedUsersays: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                languageCode: string;
                detectedIntents: {
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    score: number;
                    algorithm: string;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    requiredParamMissing: boolean;
                }[];
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
        };
        sessionReviewView: SessionReview.View;
    };
    toJSON(): {
        sessionId: string;
        parentReviewId: string;
        sessionReview: {
            sessionReviewId: string;
            sessionReviewSteps: {
                annotatedUsersays: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                languageCode: string;
                detectedIntents: {
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    score: number;
                    algorithm: string;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    requiredParamMissing: boolean;
                }[];
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
        };
        sessionReviewView: SessionReview.View;
    };
}
export declare module CreateSessionReviewRequest { }
export declare class SessionReview implements GrpcMessage {
    static toBinary(instance: SessionReview): any;
    static fromBinary(bytes: ByteSource): SessionReview;
    static refineValues(instance: SessionReview): void;
    static fromBinaryReader(instance: SessionReview, reader: BinaryReader): void;
    static toBinaryWriter(instance: SessionReview, writer: BinaryWriter): void;
    private _sessionReviewId?;
    private _sessionReviewSteps?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReview value
     */
    constructor(value?: RecursivePartial<SessionReview>);
    get sessionReviewId(): string | undefined;
    set sessionReviewId(value: string | undefined);
    get sessionReviewSteps(): SessionReviewStep[] | undefined;
    set sessionReviewSteps(value: SessionReviewStep[] | undefined);
    toObject(): {
        sessionReviewId: string;
        sessionReviewSteps: {
            annotatedUsersays: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
            languageCode: string;
            detectedIntents: {
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                };
                score: number;
                algorithm: string;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                requiredParamMissing: boolean;
            }[];
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        }[];
    };
    toJSON(): {
        sessionReviewId: string;
        sessionReviewSteps: {
            annotatedUsersays: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
            languageCode: string;
            detectedIntents: {
                intent: {
                    name: string;
                    displayName: string;
                    webhookState: ondewoNlu006.Intent.WebhookState;
                    priority: number;
                    isFallback: boolean;
                    mlDisabled: boolean;
                    inputContextNames: string[];
                    events: string[];
                    trainingPhrases: {
                        name: string;
                        type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                            [x: string]: ondewoNlu005.Context.Parameter;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                    status: ondewoNlu006.Intent.IntentStatus;
                };
                score: number;
                algorithm: string;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                requiredParamMissing: boolean;
            }[];
            contexts: {
                name: string;
                lifespanCount: number;
                parameters: {
                    [x: string]: ondewoNlu005.Context.Parameter;
                };
                lifespanTime: number;
            }[];
        }[];
    };
}
export declare module SessionReview {
    enum View {
        viewUnspecified = 0,
        viewFull = 1,
        viewSparse = 2
    }
}
export declare class SessionReviewStep implements GrpcMessage {
    static toBinary(instance: SessionReviewStep): any;
    static fromBinary(bytes: ByteSource): SessionReviewStep;
    static refineValues(instance: SessionReviewStep): void;
    static fromBinaryReader(instance: SessionReviewStep, reader: BinaryReader): void;
    static toBinaryWriter(instance: SessionReviewStep, writer: BinaryWriter): void;
    private _annotatedUsersays?;
    private _languageCode?;
    private _detectedIntents?;
    private _contexts?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SessionReviewStep value
     */
    constructor(value?: RecursivePartial<SessionReviewStep>);
    get annotatedUsersays(): ondewoNlu006.Intent.TrainingPhrase | undefined;
    set annotatedUsersays(value: ondewoNlu006.Intent.TrainingPhrase | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get detectedIntents(): DetectedIntent[] | undefined;
    set detectedIntents(value: DetectedIntent[] | undefined);
    get contexts(): ondewoNlu005.Context[] | undefined;
    set contexts(value: ondewoNlu005.Context[] | undefined);
    toObject(): {
        annotatedUsersays: {
            name: string;
            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
        languageCode: string;
        detectedIntents: {
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            score: number;
            algorithm: string;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            requiredParamMissing: boolean;
        }[];
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
    };
    toJSON(): {
        annotatedUsersays: {
            name: string;
            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
        languageCode: string;
        detectedIntents: {
            intent: {
                name: string;
                displayName: string;
                webhookState: ondewoNlu006.Intent.WebhookState;
                priority: number;
                isFallback: boolean;
                mlDisabled: boolean;
                inputContextNames: string[];
                events: string[];
                trainingPhrases: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                        [x: string]: ondewoNlu005.Context.Parameter;
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
                            [x: string]: googleProtobuf002.Value;
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
                    platform: ondewoNlu006.Intent.Message.Platform;
                }[];
                defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                status: ondewoNlu006.Intent.IntentStatus;
            };
            score: number;
            algorithm: string;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            requiredParamMissing: boolean;
        }[];
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: ondewoNlu005.Context.Parameter;
            };
            lifespanTime: number;
        }[];
    };
}
export declare module SessionReviewStep { }
export declare class DetectedIntent implements GrpcMessage {
    static toBinary(instance: DetectedIntent): any;
    static fromBinary(bytes: ByteSource): DetectedIntent;
    static refineValues(instance: DetectedIntent): void;
    static fromBinaryReader(instance: DetectedIntent, reader: BinaryReader): void;
    static toBinaryWriter(instance: DetectedIntent, writer: BinaryWriter): void;
    private _intent?;
    private _score?;
    private _algorithm?;
    private _fulfillmentMessages?;
    private _requiredParamMissing?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DetectedIntent value
     */
    constructor(value?: RecursivePartial<DetectedIntent>);
    get intent(): ondewoNlu006.Intent | undefined;
    set intent(value: ondewoNlu006.Intent | undefined);
    get score(): number | undefined;
    set score(value: number | undefined);
    get algorithm(): string | undefined;
    set algorithm(value: string | undefined);
    get fulfillmentMessages(): ondewoNlu006.Intent.Message[] | undefined;
    set fulfillmentMessages(value: ondewoNlu006.Intent.Message[] | undefined);
    get requiredParamMissing(): boolean | undefined;
    set requiredParamMissing(value: boolean | undefined);
    toObject(): {
        intent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        };
        score: number;
        algorithm: string;
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
                    [x: string]: googleProtobuf002.Value;
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
            platform: ondewoNlu006.Intent.Message.Platform;
        }[];
        requiredParamMissing: boolean;
    };
    toJSON(): {
        intent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu006.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                    [x: string]: ondewoNlu005.Context.Parameter;
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
                        [x: string]: googleProtobuf002.Value;
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
                platform: ondewoNlu006.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
            status: ondewoNlu006.Intent.IntentStatus;
        };
        score: number;
        algorithm: string;
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
                    [x: string]: googleProtobuf002.Value;
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
            platform: ondewoNlu006.Intent.Message.Platform;
        }[];
        requiredParamMissing: boolean;
    };
}
export declare module DetectedIntent { }
export declare class ListSessionLabelsRequest implements GrpcMessage {
    static toBinary(instance: ListSessionLabelsRequest): any;
    static fromBinary(bytes: ByteSource): ListSessionLabelsRequest;
    static refineValues(instance: ListSessionLabelsRequest): void;
    static fromBinaryReader(instance: ListSessionLabelsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionLabelsRequest, writer: BinaryWriter): void;
    private _parent?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsRequest value
     */
    constructor(value?: RecursivePartial<ListSessionLabelsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    toObject(): {
        parent: string;
    };
    toJSON(): {
        parent: string;
    };
}
export declare module ListSessionLabelsRequest { }
export declare class ListSessionLabelsResponse implements GrpcMessage {
    static toBinary(instance: ListSessionLabelsResponse): any;
    static fromBinary(bytes: ByteSource): ListSessionLabelsResponse;
    static refineValues(instance: ListSessionLabelsResponse): void;
    static fromBinaryReader(instance: ListSessionLabelsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionLabelsResponse, writer: BinaryWriter): void;
    private _labels?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionLabelsResponse value
     */
    constructor(value?: RecursivePartial<ListSessionLabelsResponse>);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    toObject(): {
        labels: string[];
    };
    toJSON(): {
        labels: string[];
    };
}
export declare module ListSessionLabelsResponse { }
export declare class AddSessionLabelsRequest implements GrpcMessage {
    static toBinary(instance: AddSessionLabelsRequest): any;
    static fromBinary(bytes: ByteSource): AddSessionLabelsRequest;
    static refineValues(instance: AddSessionLabelsRequest): void;
    static fromBinaryReader(instance: AddSessionLabelsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: AddSessionLabelsRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _labels?;
    private _sessionView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AddSessionLabelsRequest value
     */
    constructor(value?: RecursivePartial<AddSessionLabelsRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    get sessionView(): Session.View | undefined;
    set sessionView(value: Session.View | undefined);
    toObject(): {
        sessionId: string;
        labels: string[];
        sessionView: Session.View;
    };
    toJSON(): {
        sessionId: string;
        labels: string[];
        sessionView: Session.View;
    };
}
export declare module AddSessionLabelsRequest { }
export declare class RemoveSessionLabelsRequest implements GrpcMessage {
    static toBinary(instance: RemoveSessionLabelsRequest): any;
    static fromBinary(bytes: ByteSource): RemoveSessionLabelsRequest;
    static refineValues(instance: RemoveSessionLabelsRequest): void;
    static fromBinaryReader(instance: RemoveSessionLabelsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: RemoveSessionLabelsRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _labels?;
    private _sessionView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveSessionLabelsRequest value
     */
    constructor(value?: RecursivePartial<RemoveSessionLabelsRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get labels(): string[] | undefined;
    set labels(value: string[] | undefined);
    get sessionView(): Session.View | undefined;
    set sessionView(value: Session.View | undefined);
    toObject(): {
        sessionId: string;
        labels: string[];
        sessionView: Session.View;
    };
    toJSON(): {
        sessionId: string;
        labels: string[];
        sessionView: Session.View;
    };
}
export declare module RemoveSessionLabelsRequest { }
export declare class ListSessionReviewsRequest implements GrpcMessage {
    static toBinary(instance: ListSessionReviewsRequest): any;
    static fromBinary(bytes: ByteSource): ListSessionReviewsRequest;
    static refineValues(instance: ListSessionReviewsRequest): void;
    static fromBinaryReader(instance: ListSessionReviewsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionReviewsRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _sessionReviewView?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsRequest value
     */
    constructor(value?: RecursivePartial<ListSessionReviewsRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get sessionReviewView(): SessionReview.View | undefined;
    set sessionReviewView(value: SessionReview.View | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        sessionId: string;
        sessionReviewView: SessionReview.View;
        pageToken: string;
    };
    toJSON(): {
        sessionId: string;
        sessionReviewView: SessionReview.View;
        pageToken: string;
    };
}
export declare module ListSessionReviewsRequest { }
export declare class ListSessionReviewsResponse implements GrpcMessage {
    static toBinary(instance: ListSessionReviewsResponse): any;
    static fromBinary(bytes: ByteSource): ListSessionReviewsResponse;
    static refineValues(instance: ListSessionReviewsResponse): void;
    static fromBinaryReader(instance: ListSessionReviewsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListSessionReviewsResponse, writer: BinaryWriter): void;
    private _sessionReviews?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListSessionReviewsResponse value
     */
    constructor(value?: RecursivePartial<ListSessionReviewsResponse>);
    get sessionReviews(): SessionReview[] | undefined;
    set sessionReviews(value: SessionReview[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        sessionReviews: {
            sessionReviewId: string;
            sessionReviewSteps: {
                annotatedUsersays: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                languageCode: string;
                detectedIntents: {
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    score: number;
                    algorithm: string;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    requiredParamMissing: boolean;
                }[];
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        sessionReviews: {
            sessionReviewId: string;
            sessionReviewSteps: {
                annotatedUsersays: {
                    name: string;
                    type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                languageCode: string;
                detectedIntents: {
                    intent: {
                        name: string;
                        displayName: string;
                        webhookState: ondewoNlu006.Intent.WebhookState;
                        priority: number;
                        isFallback: boolean;
                        mlDisabled: boolean;
                        inputContextNames: string[];
                        events: string[];
                        trainingPhrases: {
                            name: string;
                            type: ondewoNlu006.Intent.TrainingPhrase.Type;
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
                                [x: string]: ondewoNlu005.Context.Parameter;
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
                                    [x: string]: googleProtobuf002.Value;
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
                            platform: ondewoNlu006.Intent.Message.Platform;
                        }[];
                        defaultResponsePlatforms: ondewoNlu006.Intent.Message.Platform[];
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
                        status: ondewoNlu006.Intent.IntentStatus;
                    };
                    score: number;
                    algorithm: string;
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
                                [x: string]: googleProtobuf002.Value;
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
                        platform: ondewoNlu006.Intent.Message.Platform;
                    }[];
                    requiredParamMissing: boolean;
                }[];
                contexts: {
                    name: string;
                    lifespanCount: number;
                    parameters: {
                        [x: string]: ondewoNlu005.Context.Parameter;
                    };
                    lifespanTime: number;
                }[];
            }[];
        }[];
        nextPageToken: string;
    };
}
export declare module ListSessionReviewsResponse { }
export declare class GetSessionReviewRequest implements GrpcMessage {
    static toBinary(instance: GetSessionReviewRequest): any;
    static fromBinary(bytes: ByteSource): GetSessionReviewRequest;
    static refineValues(instance: GetSessionReviewRequest): void;
    static fromBinaryReader(instance: GetSessionReviewRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetSessionReviewRequest, writer: BinaryWriter): void;
    private _sessionReviewId?;
    private _sessionReviewView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSessionReviewRequest value
     */
    constructor(value?: RecursivePartial<GetSessionReviewRequest>);
    get sessionReviewId(): string | undefined;
    set sessionReviewId(value: string | undefined);
    get sessionReviewView(): SessionReview.View | undefined;
    set sessionReviewView(value: SessionReview.View | undefined);
    toObject(): {
        sessionReviewId: string;
        sessionReviewView: SessionReview.View;
    };
    toJSON(): {
        sessionReviewId: string;
        sessionReviewView: SessionReview.View;
    };
}
export declare module GetSessionReviewRequest { }
export declare class GetLatestSessionReviewRequest implements GrpcMessage {
    static toBinary(instance: GetLatestSessionReviewRequest): any;
    static fromBinary(bytes: ByteSource): GetLatestSessionReviewRequest;
    static refineValues(instance: GetLatestSessionReviewRequest): void;
    static fromBinaryReader(instance: GetLatestSessionReviewRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetLatestSessionReviewRequest, writer: BinaryWriter): void;
    private _sessionId?;
    private _sessionReviewView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetLatestSessionReviewRequest value
     */
    constructor(value?: RecursivePartial<GetLatestSessionReviewRequest>);
    get sessionId(): string | undefined;
    set sessionId(value: string | undefined);
    get sessionReviewView(): SessionReview.View | undefined;
    set sessionReviewView(value: SessionReview.View | undefined);
    toObject(): {
        sessionId: string;
        sessionReviewView: SessionReview.View;
    };
    toJSON(): {
        sessionId: string;
        sessionReviewView: SessionReview.View;
    };
}
export declare module GetLatestSessionReviewRequest { }
