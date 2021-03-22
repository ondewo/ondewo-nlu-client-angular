import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu000 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu001 from '../../ondewo/nlu/entity-type.pb';
export declare enum ReannotateEntitiesOptions {
    reannotateNever = 0,
    reannotateAlways = 1,
    reannotateIfEmpty = 2,
    reannotateAfterDeletion = 3,
    reannotateIfEmptyOrAfterDeletion = 4
}
export declare class ValidateRegexRequest implements GrpcMessage {
    static toBinary(instance: ValidateRegexRequest): any;
    static fromBinary(bytes: ByteSource): ValidateRegexRequest;
    static refineValues(instance: ValidateRegexRequest): void;
    static fromBinaryReader(instance: ValidateRegexRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ValidateRegexRequest, writer: BinaryWriter): void;
    private _regex?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateRegexRequest value
     */
    constructor(value?: RecursivePartial<ValidateRegexRequest>);
    get regex(): string | undefined;
    set regex(value: string | undefined);
    toObject(): {
        regex: string;
    };
    toJSON(): {
        regex: string;
    };
}
export declare module ValidateRegexRequest { }
export declare class ValidateRegexResponse implements GrpcMessage {
    static toBinary(instance: ValidateRegexResponse): any;
    static fromBinary(bytes: ByteSource): ValidateRegexResponse;
    static refineValues(instance: ValidateRegexResponse): void;
    static fromBinaryReader(instance: ValidateRegexResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ValidateRegexResponse, writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateRegexResponse value
     */
    constructor(value?: RecursivePartial<ValidateRegexResponse>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    toObject(): {
        errorMessages: string[];
    };
    toJSON(): {
        errorMessages: string[];
    };
}
export declare module ValidateRegexResponse { }
export declare class ValidateEmbeddedRegexRequest implements GrpcMessage {
    static toBinary(instance: ValidateEmbeddedRegexRequest): any;
    static fromBinary(bytes: ByteSource): ValidateEmbeddedRegexRequest;
    static refineValues(instance: ValidateEmbeddedRegexRequest): void;
    static fromBinaryReader(instance: ValidateEmbeddedRegexRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ValidateEmbeddedRegexRequest, writer: BinaryWriter): void;
    private _entityType?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateEmbeddedRegexRequest value
     */
    constructor(value?: RecursivePartial<ValidateEmbeddedRegexRequest>);
    get entityType(): ondewoNlu001.EntityType.Entity | undefined;
    set entityType(value: ondewoNlu001.EntityType.Entity | undefined);
    toObject(): {
        entityType: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        };
    };
    toJSON(): {
        entityType: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        };
    };
}
export declare module ValidateEmbeddedRegexRequest { }
export declare class ValidateEmbeddedRegexResponse implements GrpcMessage {
    static toBinary(instance: ValidateEmbeddedRegexResponse): any;
    static fromBinary(bytes: ByteSource): ValidateEmbeddedRegexResponse;
    static refineValues(instance: ValidateEmbeddedRegexResponse): void;
    static fromBinaryReader(instance: ValidateEmbeddedRegexResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ValidateEmbeddedRegexResponse, writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ValidateEmbeddedRegexResponse value
     */
    constructor(value?: RecursivePartial<ValidateEmbeddedRegexResponse>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    toObject(): {
        errorMessages: string[];
    };
    toJSON(): {
        errorMessages: string[];
    };
}
export declare module ValidateEmbeddedRegexResponse { }
export declare class CleanAllIntentsRequest implements GrpcMessage {
    static toBinary(instance: CleanAllIntentsRequest): any;
    static fromBinary(bytes: ByteSource): CleanAllIntentsRequest;
    static refineValues(instance: CleanAllIntentsRequest): void;
    static fromBinaryReader(instance: CleanAllIntentsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanAllIntentsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _dryRun?;
    private _trainingPhraseCleanerOptions?;
    private _reannotateEntitiesOptions?;
    private _numberOfWorkers?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllIntentsRequest value
     */
    constructor(value?: RecursivePartial<CleanAllIntentsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get reannotateEntitiesOptions(): ReannotateEntitiesOptions | undefined;
    set reannotateEntitiesOptions(value: ReannotateEntitiesOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    toObject(): {
        parent: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        dryRun: boolean;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        reannotateEntitiesOptions: ReannotateEntitiesOptions;
        numberOfWorkers: number;
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        dryRun: boolean;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        reannotateEntitiesOptions: ReannotateEntitiesOptions;
        numberOfWorkers: number;
    };
}
export declare module CleanAllIntentsRequest { }
export declare class CleanAllIntentsResponse implements GrpcMessage {
    static toBinary(instance: CleanAllIntentsResponse): any;
    static fromBinary(bytes: ByteSource): CleanAllIntentsResponse;
    static refineValues(instance: CleanAllIntentsResponse): void;
    static fromBinaryReader(instance: CleanAllIntentsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanAllIntentsResponse, writer: BinaryWriter): void;
    private _cleanedIntents?;
    private _intentUpdateList?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllIntentsResponse value
     */
    constructor(value?: RecursivePartial<CleanAllIntentsResponse>);
    get cleanedIntents(): ondewoNlu000.Intent[] | undefined;
    set cleanedIntents(value: ondewoNlu000.Intent[] | undefined);
    get intentUpdateList(): IntentUpdate[] | undefined;
    set intentUpdateList(value: IntentUpdate[] | undefined);
    toObject(): {
        cleanedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu000.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu000.Intent.TrainingPhrase.Type;
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
                    [x: string]: import("./context.pb").Context.Parameter;
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
                platform: ondewoNlu000.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu000.Intent.Message.Platform[];
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
            status: ondewoNlu000.Intent.IntentStatus;
        }[];
        intentUpdateList: {
            intentDisplayName: string;
            trainingPhraseUpdateList: {
                trainingPhraseUpdate: {
                    new: string;
                    old: string;
                };
                entityUpdates: {
                    new: string;
                    old: string;
                }[];
                entitiesReannotated: string[];
                containsUpdateVariable: boolean;
            }[];
            deletedParameters: string[];
        }[];
    };
    toJSON(): {
        cleanedIntents: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu000.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu000.Intent.TrainingPhrase.Type;
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
                    [x: string]: import("./context.pb").Context.Parameter;
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
                platform: ondewoNlu000.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu000.Intent.Message.Platform[];
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
            status: ondewoNlu000.Intent.IntentStatus;
        }[];
        intentUpdateList: {
            intentDisplayName: string;
            trainingPhraseUpdateList: {
                trainingPhraseUpdate: {
                    new: string;
                    old: string;
                };
                entityUpdates: {
                    new: string;
                    old: string;
                }[];
                entitiesReannotated: string[];
                containsUpdateVariable: boolean;
            }[];
            deletedParameters: string[];
        }[];
    };
}
export declare module CleanAllIntentsResponse { }
export declare class CleanIntentRequest implements GrpcMessage {
    static toBinary(instance: CleanIntentRequest): any;
    static fromBinary(bytes: ByteSource): CleanIntentRequest;
    static refineValues(instance: CleanIntentRequest): void;
    static fromBinaryReader(instance: CleanIntentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanIntentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _intentName?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _dryRun?;
    private _trainingPhraseCleanerOptions?;
    private _reannotateEntitiesOptions?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanIntentRequest value
     */
    constructor(value?: RecursivePartial<CleanIntentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get intentName(): string | undefined;
    set intentName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get reannotateEntitiesOptions(): ReannotateEntitiesOptions | undefined;
    set reannotateEntitiesOptions(value: ReannotateEntitiesOptions | undefined);
    toObject(): {
        parent: string;
        intentName: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        dryRun: boolean;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        reannotateEntitiesOptions: ReannotateEntitiesOptions;
    };
    toJSON(): {
        parent: string;
        intentName: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        dryRun: boolean;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        reannotateEntitiesOptions: ReannotateEntitiesOptions;
    };
}
export declare module CleanIntentRequest { }
export declare class CleanIntentResponse implements GrpcMessage {
    static toBinary(instance: CleanIntentResponse): any;
    static fromBinary(bytes: ByteSource): CleanIntentResponse;
    static refineValues(instance: CleanIntentResponse): void;
    static fromBinaryReader(instance: CleanIntentResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanIntentResponse, writer: BinaryWriter): void;
    private _cleanedIntent?;
    private _intentUpdate?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanIntentResponse value
     */
    constructor(value?: RecursivePartial<CleanIntentResponse>);
    get cleanedIntent(): ondewoNlu000.Intent | undefined;
    set cleanedIntent(value: ondewoNlu000.Intent | undefined);
    get intentUpdate(): IntentUpdate | undefined;
    set intentUpdate(value: IntentUpdate | undefined);
    toObject(): {
        cleanedIntent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu000.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu000.Intent.TrainingPhrase.Type;
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
                    [x: string]: import("./context.pb").Context.Parameter;
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
                platform: ondewoNlu000.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu000.Intent.Message.Platform[];
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
            status: ondewoNlu000.Intent.IntentStatus;
        };
        intentUpdate: {
            intentDisplayName: string;
            trainingPhraseUpdateList: {
                trainingPhraseUpdate: {
                    new: string;
                    old: string;
                };
                entityUpdates: {
                    new: string;
                    old: string;
                }[];
                entitiesReannotated: string[];
                containsUpdateVariable: boolean;
            }[];
            deletedParameters: string[];
        };
    };
    toJSON(): {
        cleanedIntent: {
            name: string;
            displayName: string;
            webhookState: ondewoNlu000.Intent.WebhookState;
            priority: number;
            isFallback: boolean;
            mlDisabled: boolean;
            inputContextNames: string[];
            events: string[];
            trainingPhrases: {
                name: string;
                type: ondewoNlu000.Intent.TrainingPhrase.Type;
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
                    [x: string]: import("./context.pb").Context.Parameter;
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
                platform: ondewoNlu000.Intent.Message.Platform;
            }[];
            defaultResponsePlatforms: ondewoNlu000.Intent.Message.Platform[];
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
            status: ondewoNlu000.Intent.IntentStatus;
        };
        intentUpdate: {
            intentDisplayName: string;
            trainingPhraseUpdateList: {
                trainingPhraseUpdate: {
                    new: string;
                    old: string;
                };
                entityUpdates: {
                    new: string;
                    old: string;
                }[];
                entitiesReannotated: string[];
                containsUpdateVariable: boolean;
            }[];
            deletedParameters: string[];
        };
    };
}
export declare module CleanIntentResponse { }
export declare class TrainingPhraseCleanerOptions implements GrpcMessage {
    static toBinary(instance: TrainingPhraseCleanerOptions): any;
    static fromBinary(bytes: ByteSource): TrainingPhraseCleanerOptions;
    static refineValues(instance: TrainingPhraseCleanerOptions): void;
    static fromBinaryReader(instance: TrainingPhraseCleanerOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: TrainingPhraseCleanerOptions, writer: BinaryWriter): void;
    private _deleteRepeatedWhitespaces?;
    private _deleteLeadingSpecialCharacters?;
    private _deleteTrailingSpecialCharacters?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TrainingPhraseCleanerOptions value
     */
    constructor(value?: RecursivePartial<TrainingPhraseCleanerOptions>);
    get deleteRepeatedWhitespaces(): boolean | undefined;
    set deleteRepeatedWhitespaces(value: boolean | undefined);
    get deleteLeadingSpecialCharacters(): boolean | undefined;
    set deleteLeadingSpecialCharacters(value: boolean | undefined);
    get deleteTrailingSpecialCharacters(): boolean | undefined;
    set deleteTrailingSpecialCharacters(value: boolean | undefined);
    toObject(): {
        deleteRepeatedWhitespaces: boolean;
        deleteLeadingSpecialCharacters: boolean;
        deleteTrailingSpecialCharacters: boolean;
    };
    toJSON(): {
        deleteRepeatedWhitespaces: boolean;
        deleteLeadingSpecialCharacters: boolean;
        deleteTrailingSpecialCharacters: boolean;
    };
}
export declare module TrainingPhraseCleanerOptions { }
export declare class StringUpdate implements GrpcMessage {
    static toBinary(instance: StringUpdate): any;
    static fromBinary(bytes: ByteSource): StringUpdate;
    static refineValues(instance: StringUpdate): void;
    static fromBinaryReader(instance: StringUpdate, reader: BinaryReader): void;
    static toBinaryWriter(instance: StringUpdate, writer: BinaryWriter): void;
    private _new?;
    private _old?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StringUpdate value
     */
    constructor(value?: RecursivePartial<StringUpdate>);
    get new(): string | undefined;
    set new(value: string | undefined);
    get old(): string | undefined;
    set old(value: string | undefined);
    toObject(): {
        new: string;
        old: string;
    };
    toJSON(): {
        new: string;
        old: string;
    };
}
export declare module StringUpdate { }
export declare class IntentUpdate implements GrpcMessage {
    static toBinary(instance: IntentUpdate): any;
    static fromBinary(bytes: ByteSource): IntentUpdate;
    static refineValues(instance: IntentUpdate): void;
    static fromBinaryReader(instance: IntentUpdate, reader: BinaryReader): void;
    static toBinaryWriter(instance: IntentUpdate, writer: BinaryWriter): void;
    private _intentDisplayName?;
    private _trainingPhraseUpdateList?;
    private _deletedParameters?;
    /**
     * Creates an object and applies default Protobuf values
     * @param IntentUpdate value
     */
    constructor(value?: RecursivePartial<IntentUpdate>);
    get intentDisplayName(): string | undefined;
    set intentDisplayName(value: string | undefined);
    get trainingPhraseUpdateList(): IntentUpdate.TrainingPhraseUpdate[] | undefined;
    set trainingPhraseUpdateList(value: IntentUpdate.TrainingPhraseUpdate[] | undefined);
    get deletedParameters(): string[] | undefined;
    set deletedParameters(value: string[] | undefined);
    toObject(): {
        intentDisplayName: string;
        trainingPhraseUpdateList: {
            trainingPhraseUpdate: {
                new: string;
                old: string;
            };
            entityUpdates: {
                new: string;
                old: string;
            }[];
            entitiesReannotated: string[];
            containsUpdateVariable: boolean;
        }[];
        deletedParameters: string[];
    };
    toJSON(): {
        intentDisplayName: string;
        trainingPhraseUpdateList: {
            trainingPhraseUpdate: {
                new: string;
                old: string;
            };
            entityUpdates: {
                new: string;
                old: string;
            }[];
            entitiesReannotated: string[];
            containsUpdateVariable: boolean;
        }[];
        deletedParameters: string[];
    };
}
export declare module IntentUpdate {
    class TrainingPhraseUpdate implements GrpcMessage {
        static toBinary(instance: TrainingPhraseUpdate): any;
        static fromBinary(bytes: ByteSource): TrainingPhraseUpdate;
        static refineValues(instance: TrainingPhraseUpdate): void;
        static fromBinaryReader(instance: TrainingPhraseUpdate, reader: BinaryReader): void;
        static toBinaryWriter(instance: TrainingPhraseUpdate, writer: BinaryWriter): void;
        private _trainingPhraseUpdate?;
        private _entityUpdates?;
        private _entitiesReannotated?;
        private _containsUpdateVariable?;
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhraseUpdate value
         */
        constructor(value?: RecursivePartial<TrainingPhraseUpdate>);
        get trainingPhraseUpdate(): StringUpdate | undefined;
        set trainingPhraseUpdate(value: StringUpdate | undefined);
        get entityUpdates(): StringUpdate[] | undefined;
        set entityUpdates(value: StringUpdate[] | undefined);
        get entitiesReannotated(): string[] | undefined;
        set entitiesReannotated(value: string[] | undefined);
        get containsUpdateVariable(): boolean | undefined;
        set containsUpdateVariable(value: boolean | undefined);
        toObject(): {
            trainingPhraseUpdate: {
                new: string;
                old: string;
            };
            entityUpdates: {
                new: string;
                old: string;
            }[];
            entitiesReannotated: string[];
            containsUpdateVariable: boolean;
        };
        toJSON(): {
            trainingPhraseUpdate: {
                new: string;
                old: string;
            };
            entityUpdates: {
                new: string;
                old: string;
            }[];
            entitiesReannotated: string[];
            containsUpdateVariable: boolean;
        };
    }
    module TrainingPhraseUpdate { }
}
export declare class EntityTypeUpdate implements GrpcMessage {
    static toBinary(instance: EntityTypeUpdate): any;
    static fromBinary(bytes: ByteSource): EntityTypeUpdate;
    static refineValues(instance: EntityTypeUpdate): void;
    static fromBinaryReader(instance: EntityTypeUpdate, reader: BinaryReader): void;
    static toBinaryWriter(instance: EntityTypeUpdate, writer: BinaryWriter): void;
    private _entityTypeName?;
    private _valuesUpdateList?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeUpdate value
     */
    constructor(value?: RecursivePartial<EntityTypeUpdate>);
    get entityTypeName(): string | undefined;
    set entityTypeName(value: string | undefined);
    get valuesUpdateList(): EntityTypeUpdate.EntityUpdate[] | undefined;
    set valuesUpdateList(value: EntityTypeUpdate.EntityUpdate[] | undefined);
    toObject(): {
        entityTypeName: string;
        valuesUpdateList: {
            entityValueUpdate: {
                new: string;
                old: string;
            };
            entitySynonymUpdates: {
                new: string;
                old: string;
            }[];
        }[];
    };
    toJSON(): {
        entityTypeName: string;
        valuesUpdateList: {
            entityValueUpdate: {
                new: string;
                old: string;
            };
            entitySynonymUpdates: {
                new: string;
                old: string;
            }[];
        }[];
    };
}
export declare module EntityTypeUpdate {
    class EntityUpdate implements GrpcMessage {
        static toBinary(instance: EntityUpdate): any;
        static fromBinary(bytes: ByteSource): EntityUpdate;
        static refineValues(instance: EntityUpdate): void;
        static fromBinaryReader(instance: EntityUpdate, reader: BinaryReader): void;
        static toBinaryWriter(instance: EntityUpdate, writer: BinaryWriter): void;
        private _entityValueUpdate?;
        private _entitySynonymUpdates?;
        /**
         * Creates an object and applies default Protobuf values
         * @param EntityUpdate value
         */
        constructor(value?: RecursivePartial<EntityUpdate>);
        get entityValueUpdate(): StringUpdate | undefined;
        set entityValueUpdate(value: StringUpdate | undefined);
        get entitySynonymUpdates(): StringUpdate[] | undefined;
        set entitySynonymUpdates(value: StringUpdate[] | undefined);
        toObject(): {
            entityValueUpdate: {
                new: string;
                old: string;
            };
            entitySynonymUpdates: {
                new: string;
                old: string;
            }[];
        };
        toJSON(): {
            entityValueUpdate: {
                new: string;
                old: string;
            };
            entitySynonymUpdates: {
                new: string;
                old: string;
            }[];
        };
    }
    module EntityUpdate { }
}
export declare class CleanAllEntityTypesRequest implements GrpcMessage {
    static toBinary(instance: CleanAllEntityTypesRequest): any;
    static fromBinary(bytes: ByteSource): CleanAllEntityTypesRequest;
    static refineValues(instance: CleanAllEntityTypesRequest): void;
    static fromBinaryReader(instance: CleanAllEntityTypesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanAllEntityTypesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _maxEntityCountUpdate?;
    private _forbiddenEntityTypePatterns?;
    private _dryRun?;
    private _numberOfWorkers?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllEntityTypesRequest value
     */
    constructor(value?: RecursivePartial<CleanAllEntityTypesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get maxEntityCountUpdate(): number | undefined;
    set maxEntityCountUpdate(value: number | undefined);
    get forbiddenEntityTypePatterns(): string[] | undefined;
    set forbiddenEntityTypePatterns(value: string[] | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    toObject(): {
        parent: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        maxEntityCountUpdate: number;
        forbiddenEntityTypePatterns: string[];
        dryRun: boolean;
        numberOfWorkers: number;
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        maxEntityCountUpdate: number;
        forbiddenEntityTypePatterns: string[];
        dryRun: boolean;
        numberOfWorkers: number;
    };
}
export declare module CleanAllEntityTypesRequest { }
export declare class CleanAllEntityTypesResponse implements GrpcMessage {
    static toBinary(instance: CleanAllEntityTypesResponse): any;
    static fromBinary(bytes: ByteSource): CleanAllEntityTypesResponse;
    static refineValues(instance: CleanAllEntityTypesResponse): void;
    static fromBinaryReader(instance: CleanAllEntityTypesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanAllEntityTypesResponse, writer: BinaryWriter): void;
    private _cleanedEntityTypes?;
    private _deletedEntityTypes?;
    private _entityTypeUpdates?;
    private _entityTypeDeletions?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanAllEntityTypesResponse value
     */
    constructor(value?: RecursivePartial<CleanAllEntityTypesResponse>);
    get cleanedEntityTypes(): ondewoNlu001.EntityType[] | undefined;
    set cleanedEntityTypes(value: ondewoNlu001.EntityType[] | undefined);
    get deletedEntityTypes(): ondewoNlu001.EntityType[] | undefined;
    set deletedEntityTypes(value: ondewoNlu001.EntityType[] | undefined);
    get entityTypeUpdates(): EntityTypeUpdate[] | undefined;
    set entityTypeUpdates(value: EntityTypeUpdate[] | undefined);
    get entityTypeDeletions(): EntityTypeUpdate[] | undefined;
    set entityTypeDeletions(value: EntityTypeUpdate[] | undefined);
    toObject(): {
        cleanedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        deletedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        entityTypeUpdates: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        }[];
        entityTypeDeletions: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        }[];
    };
    toJSON(): {
        cleanedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        deletedEntityTypes: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        entityTypeUpdates: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        }[];
        entityTypeDeletions: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        }[];
    };
}
export declare module CleanAllEntityTypesResponse { }
export declare class CleanEntityTypeRequest implements GrpcMessage {
    static toBinary(instance: CleanEntityTypeRequest): any;
    static fromBinary(bytes: ByteSource): CleanEntityTypeRequest;
    static refineValues(instance: CleanEntityTypeRequest): void;
    static fromBinaryReader(instance: CleanEntityTypeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanEntityTypeRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeName?;
    private _languageCode?;
    private _specialCharacters?;
    private _substringWhiteList?;
    private _maxEntityCountUpdate?;
    private _dryRun?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanEntityTypeRequest value
     */
    constructor(value?: RecursivePartial<CleanEntityTypeRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeName(): string | undefined;
    set entityTypeName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get substringWhiteList(): string[] | undefined;
    set substringWhiteList(value: string[] | undefined);
    get maxEntityCountUpdate(): number | undefined;
    set maxEntityCountUpdate(value: number | undefined);
    get dryRun(): boolean | undefined;
    set dryRun(value: boolean | undefined);
    toObject(): {
        parent: string;
        entityTypeName: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        maxEntityCountUpdate: number;
        dryRun: boolean;
    };
    toJSON(): {
        parent: string;
        entityTypeName: string;
        languageCode: string;
        specialCharacters: string;
        substringWhiteList: string[];
        maxEntityCountUpdate: number;
        dryRun: boolean;
    };
}
export declare module CleanEntityTypeRequest { }
export declare class CleanEntityTypeResponse implements GrpcMessage {
    static toBinary(instance: CleanEntityTypeResponse): any;
    static fromBinary(bytes: ByteSource): CleanEntityTypeResponse;
    static refineValues(instance: CleanEntityTypeResponse): void;
    static fromBinaryReader(instance: CleanEntityTypeResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: CleanEntityTypeResponse, writer: BinaryWriter): void;
    private _cleanedEntityType?;
    private _entityTypeUpdate?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CleanEntityTypeResponse value
     */
    constructor(value?: RecursivePartial<CleanEntityTypeResponse>);
    get cleanedEntityType(): ondewoNlu001.EntityType | undefined;
    set cleanedEntityType(value: ondewoNlu001.EntityType | undefined);
    get entityTypeUpdate(): EntityTypeUpdate | undefined;
    set entityTypeUpdate(value: EntityTypeUpdate | undefined);
    toObject(): {
        cleanedEntityType: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        entityTypeUpdate: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        };
    };
    toJSON(): {
        cleanedEntityType: {
            name: string;
            displayName: string;
            kind: ondewoNlu001.EntityType.Kind;
            autoExpansionMode: ondewoNlu001.EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: ondewoNlu001.EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        entityTypeUpdate: {
            entityTypeName: string;
            valuesUpdateList: {
                entityValueUpdate: {
                    new: string;
                    old: string;
                };
                entitySynonymUpdates: {
                    new: string;
                    old: string;
                }[];
            }[];
        };
    };
}
export declare module CleanEntityTypeResponse { }
export declare class AddTrainingPhrasesRequest implements GrpcMessage {
    static toBinary(instance: AddTrainingPhrasesRequest): any;
    static fromBinary(bytes: ByteSource): AddTrainingPhrasesRequest;
    static refineValues(instance: AddTrainingPhrasesRequest): void;
    static fromBinaryReader(instance: AddTrainingPhrasesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: AddTrainingPhrasesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _trainingPhraseList?;
    private _extractEntities?;
    private _specialCharacters?;
    private _trainingPhraseCleanerOptions?;
    private _numberOfWorkers?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesRequest value
     */
    constructor(value?: RecursivePartial<AddTrainingPhrasesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get trainingPhraseList(): AddTrainingPhrasesRequest.TrainingPhraseForIntent[] | undefined;
    set trainingPhraseList(value: AddTrainingPhrasesRequest.TrainingPhraseForIntent[] | undefined);
    get extractEntities(): boolean | undefined;
    set extractEntities(value: boolean | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    toObject(): {
        parent: string;
        languageCode: string;
        trainingPhraseList: {
            trainingPhrase: string;
            intentDisplayName: string;
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
        }[];
        extractEntities: boolean;
        specialCharacters: string;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        numberOfWorkers: number;
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        trainingPhraseList: {
            trainingPhrase: string;
            intentDisplayName: string;
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
        }[];
        extractEntities: boolean;
        specialCharacters: string;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        numberOfWorkers: number;
    };
}
export declare module AddTrainingPhrasesRequest {
    class TrainingPhraseForIntent implements GrpcMessage {
        static toBinary(instance: TrainingPhraseForIntent): any;
        static fromBinary(bytes: ByteSource): TrainingPhraseForIntent;
        static refineValues(instance: TrainingPhraseForIntent): void;
        static fromBinaryReader(instance: TrainingPhraseForIntent, reader: BinaryReader): void;
        static toBinaryWriter(instance: TrainingPhraseForIntent, writer: BinaryWriter): void;
        private _trainingPhrase?;
        private _intentDisplayName?;
        private _entities?;
        /**
         * Creates an object and applies default Protobuf values
         * @param TrainingPhraseForIntent value
         */
        constructor(value?: RecursivePartial<TrainingPhraseForIntent>);
        get trainingPhrase(): string | undefined;
        set trainingPhrase(value: string | undefined);
        get intentDisplayName(): string | undefined;
        set intentDisplayName(value: string | undefined);
        get entities(): ondewoNlu000.Intent.TrainingPhrase.Entity[] | undefined;
        set entities(value: ondewoNlu000.Intent.TrainingPhrase.Entity[] | undefined);
        toObject(): {
            trainingPhrase: string;
            intentDisplayName: string;
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
        };
        toJSON(): {
            trainingPhrase: string;
            intentDisplayName: string;
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
        };
    }
    module TrainingPhraseForIntent { }
}
export declare class AddTrainingPhrasesResponse implements GrpcMessage {
    static toBinary(instance: AddTrainingPhrasesResponse): any;
    static fromBinary(bytes: ByteSource): AddTrainingPhrasesResponse;
    static refineValues(instance: AddTrainingPhrasesResponse): void;
    static fromBinaryReader(instance: AddTrainingPhrasesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: AddTrainingPhrasesResponse, writer: BinaryWriter): void;
    private _errorMessages?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesResponse value
     */
    constructor(value?: RecursivePartial<AddTrainingPhrasesResponse>);
    get errorMessages(): string[] | undefined;
    set errorMessages(value: string[] | undefined);
    toObject(): {
        errorMessages: string[];
    };
    toJSON(): {
        errorMessages: string[];
    };
}
export declare module AddTrainingPhrasesResponse { }
export declare class AddTrainingPhrasesFromCSVRequest implements GrpcMessage {
    static toBinary(instance: AddTrainingPhrasesFromCSVRequest): any;
    static fromBinary(bytes: ByteSource): AddTrainingPhrasesFromCSVRequest;
    static refineValues(instance: AddTrainingPhrasesFromCSVRequest): void;
    static fromBinaryReader(instance: AddTrainingPhrasesFromCSVRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: AddTrainingPhrasesFromCSVRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _csvContents?;
    private _extractEntities?;
    private _specialCharacters?;
    private _trainingPhraseCleanerOptions?;
    private _numberOfWorkers?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AddTrainingPhrasesFromCSVRequest value
     */
    constructor(value?: RecursivePartial<AddTrainingPhrasesFromCSVRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get csvContents(): Uint8Array | undefined;
    set csvContents(value: Uint8Array | undefined);
    get extractEntities(): boolean | undefined;
    set extractEntities(value: boolean | undefined);
    get specialCharacters(): string | undefined;
    set specialCharacters(value: string | undefined);
    get trainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
    set trainingPhraseCleanerOptions(value: TrainingPhraseCleanerOptions | undefined);
    get numberOfWorkers(): number | undefined;
    set numberOfWorkers(value: number | undefined);
    toObject(): {
        parent: string;
        languageCode: string;
        csvContents: Uint8Array;
        extractEntities: boolean;
        specialCharacters: string;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        numberOfWorkers: number;
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        csvContents: Uint8Array;
        extractEntities: boolean;
        specialCharacters: string;
        trainingPhraseCleanerOptions: {
            deleteRepeatedWhitespaces: boolean;
            deleteLeadingSpecialCharacters: boolean;
            deleteTrailingSpecialCharacters: boolean;
        };
        numberOfWorkers: number;
    };
}
export declare module AddTrainingPhrasesFromCSVRequest { }
