import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/intent.pb';
export declare class ExtractEntitiesRequest implements GrpcMessage {
    static toBinary(instance: ExtractEntitiesRequest): any;
    static fromBinary(bytes: ByteSource): ExtractEntitiesRequest;
    static refineValues(instance: ExtractEntitiesRequest): void;
    static fromBinaryReader(instance: ExtractEntitiesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExtractEntitiesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _text?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesRequest value
     */
    constructor(value?: RecursivePartial<ExtractEntitiesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        text: string;
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        text: string;
        languageCode: string;
    };
}
export declare module ExtractEntitiesRequest { }
export declare class ExtractEntitiesResponse implements GrpcMessage {
    static toBinary(instance: ExtractEntitiesResponse): any;
    static fromBinary(bytes: ByteSource): ExtractEntitiesResponse;
    static refineValues(instance: ExtractEntitiesResponse): void;
    static fromBinaryReader(instance: ExtractEntitiesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExtractEntitiesResponse, writer: BinaryWriter): void;
    private _entities?;
    private _text?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtractEntitiesResponse value
     */
    constructor(value?: RecursivePartial<ExtractEntitiesResponse>);
    get entities(): ondewoNlu001.Intent.TrainingPhrase.Entity[] | undefined;
    set entities(value: ondewoNlu001.Intent.TrainingPhrase.Entity[] | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    toObject(): {
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
        text: string;
    };
    toJSON(): {
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
        text: string;
    };
}
export declare module ExtractEntitiesResponse { }
export declare class GetAlternativeSentencesRequest implements GrpcMessage {
    static toBinary(instance: GetAlternativeSentencesRequest): any;
    static fromBinary(bytes: ByteSource): GetAlternativeSentencesRequest;
    static refineValues(instance: GetAlternativeSentencesRequest): void;
    static fromBinaryReader(instance: GetAlternativeSentencesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAlternativeSentencesRequest, writer: BinaryWriter): void;
    private _config?;
    private _sentence?;
    private _languageCode?;
    private _parent?;
    private _protectedWords?;
    private _wordsToChange?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesRequest value
     */
    constructor(value?: RecursivePartial<GetAlternativeSentencesRequest>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get sentence(): string | undefined;
    set sentence(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get protectedWords(): string[] | undefined;
    set protectedWords(value: string[] | undefined);
    get wordsToChange(): string[] | undefined;
    set wordsToChange(value: string[] | undefined);
    toObject(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        sentence: string;
        languageCode: string;
        parent: string;
        protectedWords: string[];
        wordsToChange: string[];
    };
    toJSON(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        sentence: string;
        languageCode: string;
        parent: string;
        protectedWords: string[];
        wordsToChange: string[];
    };
}
export declare module GetAlternativeSentencesRequest { }
export declare class GenerateUserSaysRequest implements GrpcMessage {
    static toBinary(instance: GenerateUserSaysRequest): any;
    static fromBinary(bytes: ByteSource): GenerateUserSaysRequest;
    static refineValues(instance: GenerateUserSaysRequest): void;
    static fromBinaryReader(instance: GenerateUserSaysRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GenerateUserSaysRequest, writer: BinaryWriter): void;
    private _languageCode?;
    private _parent?;
    private _nRepeatSynonym?;
    private _branch?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysRequest value
     */
    constructor(value?: RecursivePartial<GenerateUserSaysRequest>);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get nRepeatSynonym(): number | undefined;
    set nRepeatSynonym(value: number | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    toObject(): {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
    };
    toJSON(): {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
    };
}
export declare module GenerateUserSaysRequest { }
export declare class GenerateResponsesRequest implements GrpcMessage {
    static toBinary(instance: GenerateResponsesRequest): any;
    static fromBinary(bytes: ByteSource): GenerateResponsesRequest;
    static refineValues(instance: GenerateResponsesRequest): void;
    static fromBinaryReader(instance: GenerateResponsesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GenerateResponsesRequest, writer: BinaryWriter): void;
    private _languageCode?;
    private _parent?;
    private _nRepeatSynonym?;
    private _branch?;
    private _dropUnknownParameters?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesRequest value
     */
    constructor(value?: RecursivePartial<GenerateResponsesRequest>);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get nRepeatSynonym(): number | undefined;
    set nRepeatSynonym(value: number | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    get dropUnknownParameters(): boolean | undefined;
    set dropUnknownParameters(value: boolean | undefined);
    toObject(): {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        dropUnknownParameters: boolean;
    };
    toJSON(): {
        languageCode: string;
        parent: string;
        nRepeatSynonym: number;
        branch: string;
        dropUnknownParameters: boolean;
    };
}
export declare module GenerateResponsesRequest { }
export declare class GetAlternativeTrainingPhrasesRequest implements GrpcMessage {
    static toBinary(instance: GetAlternativeTrainingPhrasesRequest): any;
    static fromBinary(bytes: ByteSource): GetAlternativeTrainingPhrasesRequest;
    static refineValues(instance: GetAlternativeTrainingPhrasesRequest): void;
    static fromBinaryReader(instance: GetAlternativeTrainingPhrasesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAlternativeTrainingPhrasesRequest, writer: BinaryWriter): void;
    private _config?;
    private _trainingPhrase?;
    private _intentName?;
    private _languageCode?;
    private _parent?;
    private _detectEntities?;
    private _similarityThreshold?;
    private _protectedWords?;
    private _wordsToChange?;
    private _branch?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesRequest value
     */
    constructor(value?: RecursivePartial<GetAlternativeTrainingPhrasesRequest>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get trainingPhrase(): ondewoNlu001.Intent.TrainingPhrase | undefined;
    set trainingPhrase(value: ondewoNlu001.Intent.TrainingPhrase | undefined);
    get intentName(): string | undefined;
    set intentName(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get detectEntities(): boolean | undefined;
    set detectEntities(value: boolean | undefined);
    get similarityThreshold(): number | undefined;
    set similarityThreshold(value: number | undefined);
    get protectedWords(): string[] | undefined;
    set protectedWords(value: string[] | undefined);
    get wordsToChange(): string[] | undefined;
    set wordsToChange(value: string[] | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    toObject(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        trainingPhrase: {
            name: string;
            type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
        intentName: string;
        languageCode: string;
        parent: string;
        detectEntities: boolean;
        similarityThreshold: number;
        protectedWords: string[];
        wordsToChange: string[];
        branch: string;
    };
    toJSON(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        trainingPhrase: {
            name: string;
            type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
        intentName: string;
        languageCode: string;
        parent: string;
        detectEntities: boolean;
        similarityThreshold: number;
        protectedWords: string[];
        wordsToChange: string[];
        branch: string;
    };
}
export declare module GetAlternativeTrainingPhrasesRequest { }
export declare class GetSynonymsRequest implements GrpcMessage {
    static toBinary(instance: GetSynonymsRequest): any;
    static fromBinary(bytes: ByteSource): GetSynonymsRequest;
    static refineValues(instance: GetSynonymsRequest): void;
    static fromBinaryReader(instance: GetSynonymsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetSynonymsRequest, writer: BinaryWriter): void;
    private _config?;
    private _word?;
    private _languageCode?;
    private _parent?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsRequest value
     */
    constructor(value?: RecursivePartial<GetSynonymsRequest>);
    get config(): DataEnrichmentConfig | undefined;
    set config(value: DataEnrichmentConfig | undefined);
    get word(): string | undefined;
    set word(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    toObject(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        word: string;
        languageCode: string;
        parent: string;
    };
    toJSON(): {
        config: {
            entityEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            thesaurusEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            word2vecEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            wordNetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gpt2Enrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            gloveEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            fasttextEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            bertEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
            xlnetEnrichment: {
                isActive: boolean;
                enrichmentFactor: number;
                executionOrder: number;
            };
        };
        word: string;
        languageCode: string;
        parent: string;
    };
}
export declare module GetSynonymsRequest { }
export declare class GetSynonymsResponse implements GrpcMessage {
    static toBinary(instance: GetSynonymsResponse): any;
    static fromBinary(bytes: ByteSource): GetSynonymsResponse;
    static refineValues(instance: GetSynonymsResponse): void;
    static fromBinaryReader(instance: GetSynonymsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetSynonymsResponse, writer: BinaryWriter): void;
    private _synonyms?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetSynonymsResponse value
     */
    constructor(value?: RecursivePartial<GetSynonymsResponse>);
    get synonyms(): Synonym[] | undefined;
    set synonyms(value: Synonym[] | undefined);
    toObject(): {
        synonyms: {
            synonym: string;
            score: number;
        }[];
    };
    toJSON(): {
        synonyms: {
            synonym: string;
            score: number;
        }[];
    };
}
export declare module GetSynonymsResponse { }
export declare class Synonym implements GrpcMessage {
    static toBinary(instance: Synonym): any;
    static fromBinary(bytes: ByteSource): Synonym;
    static refineValues(instance: Synonym): void;
    static fromBinaryReader(instance: Synonym, reader: BinaryReader): void;
    static toBinaryWriter(instance: Synonym, writer: BinaryWriter): void;
    private _synonym?;
    private _score?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Synonym value
     */
    constructor(value?: RecursivePartial<Synonym>);
    get synonym(): string | undefined;
    set synonym(value: string | undefined);
    get score(): number | undefined;
    set score(value: number | undefined);
    toObject(): {
        synonym: string;
        score: number;
    };
    toJSON(): {
        synonym: string;
        score: number;
    };
}
export declare module Synonym { }
export declare class GetAlternativeSentencesResponse implements GrpcMessage {
    static toBinary(instance: GetAlternativeSentencesResponse): any;
    static fromBinary(bytes: ByteSource): GetAlternativeSentencesResponse;
    static refineValues(instance: GetAlternativeSentencesResponse): void;
    static fromBinaryReader(instance: GetAlternativeSentencesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAlternativeSentencesResponse, writer: BinaryWriter): void;
    private _alternativeSentences?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeSentencesResponse value
     */
    constructor(value?: RecursivePartial<GetAlternativeSentencesResponse>);
    get alternativeSentences(): AltSentence[] | undefined;
    set alternativeSentences(value: AltSentence[] | undefined);
    toObject(): {
        alternativeSentences: {
            sentence: string;
            score: number;
        }[];
    };
    toJSON(): {
        alternativeSentences: {
            sentence: string;
            score: number;
        }[];
    };
}
export declare module GetAlternativeSentencesResponse { }
export declare class GenerateResponsesResponse implements GrpcMessage {
    static toBinary(instance: GenerateResponsesResponse): any;
    static fromBinary(bytes: ByteSource): GenerateResponsesResponse;
    static refineValues(instance: GenerateResponsesResponse): void;
    static fromBinaryReader(instance: GenerateResponsesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GenerateResponsesResponse, writer: BinaryWriter): void;
    private _responses?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateResponsesResponse value
     */
    constructor(value?: RecursivePartial<GenerateResponsesResponse>);
    get responses(): string[] | undefined;
    set responses(value: string[] | undefined);
    toObject(): {
        responses: string[];
    };
    toJSON(): {
        responses: string[];
    };
}
export declare module GenerateResponsesResponse { }
export declare class GenerateUserSaysResponse implements GrpcMessage {
    static toBinary(instance: GenerateUserSaysResponse): any;
    static fromBinary(bytes: ByteSource): GenerateUserSaysResponse;
    static refineValues(instance: GenerateUserSaysResponse): void;
    static fromBinaryReader(instance: GenerateUserSaysResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GenerateUserSaysResponse, writer: BinaryWriter): void;
    private _userSays?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GenerateUserSaysResponse value
     */
    constructor(value?: RecursivePartial<GenerateUserSaysResponse>);
    get userSays(): string[] | undefined;
    set userSays(value: string[] | undefined);
    toObject(): {
        userSays: string[];
    };
    toJSON(): {
        userSays: string[];
    };
}
export declare module GenerateUserSaysResponse { }
export declare class GetAlternativeTrainingPhrasesResponse implements GrpcMessage {
    static toBinary(instance: GetAlternativeTrainingPhrasesResponse): any;
    static fromBinary(bytes: ByteSource): GetAlternativeTrainingPhrasesResponse;
    static refineValues(instance: GetAlternativeTrainingPhrasesResponse): void;
    static fromBinaryReader(instance: GetAlternativeTrainingPhrasesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAlternativeTrainingPhrasesResponse, writer: BinaryWriter): void;
    private _alternativeTrainingPhrases?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAlternativeTrainingPhrasesResponse value
     */
    constructor(value?: RecursivePartial<GetAlternativeTrainingPhrasesResponse>);
    get alternativeTrainingPhrases(): AltTrainingPhrase[] | undefined;
    set alternativeTrainingPhrases(value: AltTrainingPhrase[] | undefined);
    toObject(): {
        alternativeTrainingPhrases: {
            trainingPhrase: {
                name: string;
                type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
            score: number;
        }[];
    };
    toJSON(): {
        alternativeTrainingPhrases: {
            trainingPhrase: {
                name: string;
                type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
            score: number;
        }[];
    };
}
export declare module GetAlternativeTrainingPhrasesResponse { }
export declare class AltSentence implements GrpcMessage {
    static toBinary(instance: AltSentence): any;
    static fromBinary(bytes: ByteSource): AltSentence;
    static refineValues(instance: AltSentence): void;
    static fromBinaryReader(instance: AltSentence, reader: BinaryReader): void;
    static toBinaryWriter(instance: AltSentence, writer: BinaryWriter): void;
    private _sentence?;
    private _score?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AltSentence value
     */
    constructor(value?: RecursivePartial<AltSentence>);
    get sentence(): string | undefined;
    set sentence(value: string | undefined);
    get score(): number | undefined;
    set score(value: number | undefined);
    toObject(): {
        sentence: string;
        score: number;
    };
    toJSON(): {
        sentence: string;
        score: number;
    };
}
export declare module AltSentence { }
export declare class AltTrainingPhrase implements GrpcMessage {
    static toBinary(instance: AltTrainingPhrase): any;
    static fromBinary(bytes: ByteSource): AltTrainingPhrase;
    static refineValues(instance: AltTrainingPhrase): void;
    static fromBinaryReader(instance: AltTrainingPhrase, reader: BinaryReader): void;
    static toBinaryWriter(instance: AltTrainingPhrase, writer: BinaryWriter): void;
    private _trainingPhrase?;
    private _score?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AltTrainingPhrase value
     */
    constructor(value?: RecursivePartial<AltTrainingPhrase>);
    get trainingPhrase(): ondewoNlu001.Intent.TrainingPhrase | undefined;
    set trainingPhrase(value: ondewoNlu001.Intent.TrainingPhrase | undefined);
    get score(): number | undefined;
    set score(value: number | undefined);
    toObject(): {
        trainingPhrase: {
            name: string;
            type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
        score: number;
    };
    toJSON(): {
        trainingPhrase: {
            name: string;
            type: ondewoNlu001.Intent.TrainingPhrase.Type;
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
        score: number;
    };
}
export declare module AltTrainingPhrase { }
export declare class DataEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: DataEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): DataEnrichmentConfig;
    static refineValues(instance: DataEnrichmentConfig): void;
    static fromBinaryReader(instance: DataEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: DataEnrichmentConfig, writer: BinaryWriter): void;
    private _entityEnrichment?;
    private _thesaurusEnrichment?;
    private _word2vecEnrichment?;
    private _wordNetEnrichment?;
    private _gpt2Enrichment?;
    private _gloveEnrichment?;
    private _fasttextEnrichment?;
    private _bertEnrichment?;
    private _xlnetEnrichment?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DataEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<DataEnrichmentConfig>);
    get entityEnrichment(): EntityEnrichmentConfig | undefined;
    set entityEnrichment(value: EntityEnrichmentConfig | undefined);
    get thesaurusEnrichment(): ThesaurusEnrichmentConfig | undefined;
    set thesaurusEnrichment(value: ThesaurusEnrichmentConfig | undefined);
    get word2vecEnrichment(): Word2VecEnrichmentConfig | undefined;
    set word2vecEnrichment(value: Word2VecEnrichmentConfig | undefined);
    get wordNetEnrichment(): WordNetAugEnrichmentConfig | undefined;
    set wordNetEnrichment(value: WordNetAugEnrichmentConfig | undefined);
    get gpt2Enrichment(): GPT2EnrichmentConfig | undefined;
    set gpt2Enrichment(value: GPT2EnrichmentConfig | undefined);
    get gloveEnrichment(): GloVeEnrichmentConfig | undefined;
    set gloveEnrichment(value: GloVeEnrichmentConfig | undefined);
    get fasttextEnrichment(): FastTextEnrichmentConfig | undefined;
    set fasttextEnrichment(value: FastTextEnrichmentConfig | undefined);
    get bertEnrichment(): BertAugEnrichmentConfig | undefined;
    set bertEnrichment(value: BertAugEnrichmentConfig | undefined);
    get xlnetEnrichment(): XLNetAugEnrichmentConfig | undefined;
    set xlnetEnrichment(value: XLNetAugEnrichmentConfig | undefined);
    toObject(): {
        entityEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        thesaurusEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        word2vecEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        wordNetEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        gpt2Enrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        gloveEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        fasttextEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        bertEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        xlnetEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
    };
    toJSON(): {
        entityEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        thesaurusEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        word2vecEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        wordNetEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        gpt2Enrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        gloveEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        fasttextEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        bertEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
        xlnetEnrichment: {
            isActive: boolean;
            enrichmentFactor: number;
            executionOrder: number;
        };
    };
}
export declare module DataEnrichmentConfig { }
export declare class EntityEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: EntityEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): EntityEnrichmentConfig;
    static refineValues(instance: EntityEnrichmentConfig): void;
    static fromBinaryReader(instance: EntityEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: EntityEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<EntityEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module EntityEnrichmentConfig { }
export declare class ThesaurusEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: ThesaurusEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): ThesaurusEnrichmentConfig;
    static refineValues(instance: ThesaurusEnrichmentConfig): void;
    static fromBinaryReader(instance: ThesaurusEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: ThesaurusEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ThesaurusEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<ThesaurusEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module ThesaurusEnrichmentConfig { }
export declare class FastTextEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: FastTextEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): FastTextEnrichmentConfig;
    static refineValues(instance: FastTextEnrichmentConfig): void;
    static fromBinaryReader(instance: FastTextEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: FastTextEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FastTextEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<FastTextEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module FastTextEnrichmentConfig { }
export declare class BertAugEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: BertAugEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): BertAugEnrichmentConfig;
    static refineValues(instance: BertAugEnrichmentConfig): void;
    static fromBinaryReader(instance: BertAugEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: BertAugEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BertAugEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<BertAugEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module BertAugEnrichmentConfig { }
export declare class GloVeEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: GloVeEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): GloVeEnrichmentConfig;
    static refineValues(instance: GloVeEnrichmentConfig): void;
    static fromBinaryReader(instance: GloVeEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: GloVeEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GloVeEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<GloVeEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module GloVeEnrichmentConfig { }
export declare class GPT2EnrichmentConfig implements GrpcMessage {
    static toBinary(instance: GPT2EnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): GPT2EnrichmentConfig;
    static refineValues(instance: GPT2EnrichmentConfig): void;
    static fromBinaryReader(instance: GPT2EnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: GPT2EnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GPT2EnrichmentConfig value
     */
    constructor(value?: RecursivePartial<GPT2EnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module GPT2EnrichmentConfig { }
export declare class Word2VecEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: Word2VecEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): Word2VecEnrichmentConfig;
    static refineValues(instance: Word2VecEnrichmentConfig): void;
    static fromBinaryReader(instance: Word2VecEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: Word2VecEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Word2VecEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<Word2VecEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module Word2VecEnrichmentConfig { }
export declare class WordNetAugEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: WordNetAugEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): WordNetAugEnrichmentConfig;
    static refineValues(instance: WordNetAugEnrichmentConfig): void;
    static fromBinaryReader(instance: WordNetAugEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: WordNetAugEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param WordNetAugEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<WordNetAugEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module WordNetAugEnrichmentConfig { }
export declare class XLNetAugEnrichmentConfig implements GrpcMessage {
    static toBinary(instance: XLNetAugEnrichmentConfig): any;
    static fromBinary(bytes: ByteSource): XLNetAugEnrichmentConfig;
    static refineValues(instance: XLNetAugEnrichmentConfig): void;
    static fromBinaryReader(instance: XLNetAugEnrichmentConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: XLNetAugEnrichmentConfig, writer: BinaryWriter): void;
    private _isActive?;
    private _enrichmentFactor?;
    private _executionOrder?;
    /**
     * Creates an object and applies default Protobuf values
     * @param XLNetAugEnrichmentConfig value
     */
    constructor(value?: RecursivePartial<XLNetAugEnrichmentConfig>);
    get isActive(): boolean | undefined;
    set isActive(value: boolean | undefined);
    get enrichmentFactor(): number | undefined;
    set enrichmentFactor(value: number | undefined);
    get executionOrder(): number | undefined;
    set executionOrder(value: number | undefined);
    toObject(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
    toJSON(): {
        isActive: boolean;
        enrichmentFactor: number;
        executionOrder: number;
    };
}
export declare module XLNetAugEnrichmentConfig { }
