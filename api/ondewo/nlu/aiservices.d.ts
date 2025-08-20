import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Intent_TrainingPhrase } from "./intent";
import { Intent_TrainingPhrase_Entity } from "./intent";
import { EntityType } from "./entity_type";
import { FileResource } from "./session";
import { Struct } from "../../google/protobuf/struct";
import { CcaiServiceProvider } from "./ccai_project";
/**
 * The request message to list available LLM models for a specified CCAI service.
 *
 * @generated from protobuf message ondewo.nlu.ListLlmModelsRequest
 */
export interface ListLlmModelsRequest {
    /**
     * The CCAI service for which to list models.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/ccai/services/&lt;service_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string ccai_service_name = 1;
     */
    ccaiServiceName: string;
}
/**
 * The response message containing a list of available LLM models.
 *
 * @generated from protobuf message ondewo.nlu.ListLlmModelsResponse
 */
export interface ListLlmModelsResponse {
    /**
     * A list of LLM models associated with the specified CCAI service.
     * Each model in this list represents an individual language model that can
     * be used within the service, including details such as name, provider, and description.
     *
     * @generated from protobuf field: repeated ondewo.nlu.LlmModel llm_models = 1;
     */
    llmModels: LlmModel[];
}
/**
 * Represents an individual LLM model available within a CCAI service.
 *
 * @generated from protobuf message ondewo.nlu.LlmModel
 */
export interface LlmModel {
    /**
     * The resource name of the model.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/ccai/services/&lt;service_uuid&gt;/model/&lt;model_uuid&gt;</code></pre>
     * This is a unique identifier for the model, specifying its project, service, and model ID.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The display name of the model.
     * This is a human-readable name used for identifying the model in other requests,
     * such as <pre><code>LlmGenerateRequest</code></pre> and <pre><code>StreamingLlmGenerateRequest</code></pre>.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * The description of the model.
     * Provides additional details about the model, such as its purpose, architecture, or any other relevant information.
     *
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * The resource name of the CCAI service to which the model belongs.
     * This field links the model to its service context, helping clients understand
     * which service hosts the model.
     *
     * @generated from protobuf field: string ccai_service_name = 4;
     */
    ccaiServiceName: string;
    /**
     * The provider of the CCAI service that offers this model.
     * Specifies the LLM provider (e.g., Ollama, OpenAI, Google, etc.), indicating the origin or vendor of the model.
     *
     * @generated from protobuf field: ondewo.nlu.CcaiServiceProvider ccai_service_provider = 5;
     */
    ccaiServiceProvider: CcaiServiceProvider;
}
/**
 * The request message to generate a response from a Large Language Model (LLM).
 *
 * @generated from protobuf message ondewo.nlu.LlmGenerateRequest
 */
export interface LlmGenerateRequest {
    /**
     * The request payload for the LLM, structured according to the specific
     * requirements of the large language model provider.
     * The payload must fit the format expected by the specified LLM provider,
     * as defined by <pre><code>CcaiServiceProvider</code></pre>.
     *
     * @generated from protobuf field: google.protobuf.Struct llm_generation_request = 1;
     */
    llmGenerationRequest?: Struct;
    /**
     * The CCAI service to be used for processing the request.
     * This specifies which large language model provider and model settings will handle the request.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/ccai/services/&lt;service_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string ccai_service_name = 2;
     */
    ccaiServiceName: string;
    /**
     * Files as input for the generation request
     *
     * @generated from protobuf field: repeated ondewo.nlu.FileResource file_resources = 3;
     */
    fileResources: FileResource[];
}
/**
 * The response message containing the generated output from a Large Language Model (LLM).
 *
 * @generated from protobuf message ondewo.nlu.LlmGenerateResponse
 */
export interface LlmGenerateResponse {
    /**
     * The response data from the LLM, returned as a structured payload.
     * This can contain the text generation, embeddings, or other outputs
     * based on the specific request made to the LLM provider.
     *
     * @generated from protobuf field: google.protobuf.Struct llm_generation_response = 1;
     */
    llmGenerationResponse?: Struct;
    /**
     * Files as input for the generation request, e.g., generated pictures, audio or video
     *
     * @generated from protobuf field: repeated ondewo.nlu.FileResource file_resources = 2;
     */
    fileResources: FileResource[];
}
/**
 * The response message for streaming generation from a Large Language Model (LLM).
 *
 * @generated from protobuf message ondewo.nlu.StreamingLlmGenerateResponse
 */
export interface StreamingLlmGenerateResponse {
    /**
     * The response data from the LLM in a streaming format, returned as a structured payload.
     * This response is part of a continuous stream of data from the LLM, allowing
     * incremental results to be sent as they are generated.
     *
     * @generated from protobuf field: google.protobuf.Struct llm_generation_stream_response = 1;
     */
    llmGenerationStreamResponse?: Struct;
}
/**
 * The request to detect parameters.
 *
 * @generated from protobuf message ondewo.nlu.ExtractEntitiesRequest
 */
export interface ExtractEntitiesRequest {
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * the input text
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * the input language
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. The name of the relevant intent. Used to establish preference
     * hierarchy for entities that correspond to intent parameters
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 4;
     */
    intentName: string;
}
/**
 * This message is a request to extract entities with Fuzzy Entity Recognizer
 *
 * @generated from protobuf message ondewo.nlu.ExtractEntitiesFuzzyRequest
 */
export interface ExtractEntitiesFuzzyRequest {
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The text to be analyzed
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * Potential entities to be extracted from the text with entity-specific configs
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityTypeFuzzyNerConfig potential_entities = 3;
     */
    potentialEntities: EntityTypeFuzzyNerConfig[];
    /**
     * Minimal similarity score to consider entity as "matched"
     *
     * @generated from protobuf field: float minimal_score = 4;
     */
    minimalScore: number;
    /**
     * Optional. Whether or not entities are allowed to overlap.
     *
     * @generated from protobuf field: bool allow_overlaps = 5;
     */
    allowOverlaps: boolean;
}
/**
 * Configuration for Fuzzy Entity Recognizer
 *
 * @generated from protobuf message ondewo.nlu.EntityTypeFuzzyNerConfig
 */
export interface EntityTypeFuzzyNerConfig {
    /**
     * The Entity Type
     *
     * @generated from protobuf field: ondewo.nlu.EntityType entity_type = 1;
     */
    entityType?: EntityType;
    /**
     * Optional. Overrides the minimal score in ExtractEntitiesFuzzyRequest.
     *
     * @generated from protobuf field: float minimal_score = 2;
     */
    minimalScore: number;
    /**
     * Optional. If defined, only entity value from this list are considered.
     *
     * @generated from protobuf field: repeated string entity_values = 3;
     */
    entityValues: string[];
    /**
     * Optional. Specify the Fuzzy Ner algorithm
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm algorithm = 4;
     */
    algorithm: EntityTypeFuzzyNerConfig_FuzzyNerAlgorithm;
    /**
     * Should not use allow_overlaps here, since its default value is False
     *
     * @generated from protobuf field: bool allow_overlaps = 5;
     */
    allowOverlaps: boolean;
}
/**
 * Enum of fuzzy ner algorithms
 *
 * @generated from protobuf enum ondewo.nlu.EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm
 */
export declare enum EntityTypeFuzzyNerConfig_FuzzyNerAlgorithm {
    /**
     * Levenshtein algorithm for fuzzy ner matching
     *
     * @generated from protobuf enum value: PREFILTER_LEVENSHTEIN = 0;
     */
    PREFILTER_LEVENSHTEIN = 0,
    /**
     * local maximum
     *
     * @generated from protobuf enum value: LOCAL_MAXIMUM = 1;
     */
    LOCAL_MAXIMUM = 1
}
/**
 * This message contains the entity detected
 *
 * @generated from protobuf message ondewo.nlu.EntityDetected
 */
export interface EntityDetected {
    /**
     * The entity name that is detected
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase.Entity entity = 1;
     */
    entity?: Intent_TrainingPhrase_Entity;
    /**
     * The extractor name, e.g. SpacyNer
     *
     * @generated from protobuf field: string extraction_method = 2;
     */
    extractionMethod: string;
    /**
     * The confidence score of the detected entity
     *
     * @generated from protobuf field: float score = 3;
     */
    score: number;
}
/**
 * This message is a response of extracting entities
 *
 * @generated from protobuf message ondewo.nlu.ExtractEntitiesResponse
 */
export interface ExtractEntitiesResponse {
    /**
     * A list of entities detected
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityDetected entities_detected = 1;
     */
    entitiesDetected: EntityDetected[];
    /**
     * The text containing the entities detected
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
}
/**
 * Request to get alternative sentences
 *
 * @generated from protobuf message ondewo.nlu.GetAlternativeSentencesRequest
 */
export interface GetAlternativeSentencesRequest {
    /**
     * Configuration type of the enricher
     *
     * @generated from protobuf field: ondewo.nlu.DataEnrichmentConfig config = 1;
     */
    config?: DataEnrichmentConfig;
    /**
     * The sentence from which it is desired to get alternative sentences
     *
     * @generated from protobuf field: string sentence = 2;
     */
    sentence: string;
    /**
     * Language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
    /**
     * Protected words in the augmentation process
     *
     * @generated from protobuf field: repeated string protected_words = 6;
     */
    protectedWords: string[];
    /**
     * Words to be changed in the augmentation process
     *
     * @generated from protobuf field: repeated string words_to_change = 7;
     */
    wordsToChange: string[];
}
/**
 * Request to generate user sentences
 *
 * @generated from protobuf message ondewo.nlu.GenerateUserSaysRequest
 */
export interface GenerateUserSaysRequest {
    /**
     * language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
    /**
     * The number of synonyms desired
     *
     * @generated from protobuf field: int32 n_repeat_synonym = 6;
     */
    nRepeatSynonym: number;
    /**
     * Git branch
     *
     * @generated from protobuf field: string branch = 8;
     */
    branch: string;
}
/**
 * Request to generate responses
 *
 * @generated from protobuf message ondewo.nlu.GenerateResponsesRequest
 */
export interface GenerateResponsesRequest {
    /**
     * language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
    /**
     * The number of synonyms desired
     *
     * @generated from protobuf field: int32 n_repeat_synonym = 7;
     */
    nRepeatSynonym: number;
    /**
     * Git branch
     *
     * @generated from protobuf field: string branch = 8;
     */
    branch: string;
    /**
     * @generated from protobuf field: bool drop_unknown_parameters = 9;
     */
    dropUnknownParameters: boolean;
}
/**
 * Request to get alternative training phrases
 *
 * @generated from protobuf message ondewo.nlu.GetAlternativeTrainingPhrasesRequest
 */
export interface GetAlternativeTrainingPhrasesRequest {
    /**
     * Configuration of the enricher
     *
     * @generated from protobuf field: ondewo.nlu.DataEnrichmentConfig config = 1;
     */
    config?: DataEnrichmentConfig;
    /**
     * Training phrase from which an alternative one is got
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase training_phrase = 2;
     */
    trainingPhrase?: Intent_TrainingPhrase;
    /**
     * The intent tag attached to the training phrase
     *
     * @generated from protobuf field: string intent_name = 3;
     */
    intentName: string;
    /**
     * language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
    /**
     * Flag to determine whether entities must or not be detected
     *
     * @generated from protobuf field: bool detect_entities = 6;
     */
    detectEntities: boolean;
    /**
     * similarity threshold defines how similar sentences should be to drop generated training phrase
     * as duplicate. Meaningful values of similarity_threshold are between 0.95 and 1.0
     *
     * @generated from protobuf field: float similarity_threshold = 7;
     */
    similarityThreshold: number;
    /**
     * Protected words in the augmentation process
     *
     * @generated from protobuf field: repeated string protected_words = 8;
     */
    protectedWords: string[];
    /**
     * Words to be changed in the augmentation process
     *
     * @generated from protobuf field: repeated string words_to_change = 9;
     */
    wordsToChange: string[];
    /**
     * Git branch
     *
     * @generated from protobuf field: string branch = 10;
     */
    branch: string;
}
/**
 * Request to get synonyms
 *
 * @generated from protobuf message ondewo.nlu.GetSynonymsRequest
 */
export interface GetSynonymsRequest {
    /**
     * Configuration of the enricher
     *
     * @generated from protobuf field: ondewo.nlu.DataEnrichmentConfig config = 1;
     */
    config?: DataEnrichmentConfig;
    /**
     * Word from which a synonym is got
     *
     * @generated from protobuf field: string word = 2;
     */
    word: string;
    /**
     * language code specifies the language of the request in IETF BCP 47 language tag format, e.g. de-DE, en-US, etc.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the parent of the request
     * Format: <pre><code>projects/&lt;project_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent = 5;
     */
    parent: string;
}
/**
 * Response containing synonyms
 *
 * @generated from protobuf message ondewo.nlu.GetSynonymsResponse
 */
export interface GetSynonymsResponse {
    /**
     * A list of synonyms
     *
     * @generated from protobuf field: repeated ondewo.nlu.Synonym synonyms = 1;
     */
    synonyms: Synonym[];
}
/**
 * This message contains a Synonym
 *
 * @generated from protobuf message ondewo.nlu.Synonym
 */
export interface Synonym {
    /**
     * Synonym word
     *
     * @generated from protobuf field: string synonym = 1;
     */
    synonym: string;
    /**
     * Score associated to the synonym resulted
     *
     * @generated from protobuf field: int32 score = 2;
     */
    score: number;
}
/**
 * Response containing alternative sentences
 *
 * @generated from protobuf message ondewo.nlu.GetAlternativeSentencesResponse
 */
export interface GetAlternativeSentencesResponse {
    /**
     * A list of alternative sentences
     *
     * @generated from protobuf field: repeated ondewo.nlu.AltSentence alternative_sentences = 1;
     */
    alternativeSentences: AltSentence[];
}
/**
 * Response containing responses
 *
 * @generated from protobuf message ondewo.nlu.GenerateResponsesResponse
 */
export interface GenerateResponsesResponse {
    /**
     * A list of responses
     *
     * @generated from protobuf field: repeated string responses = 1;
     */
    responses: string[];
}
/**
 * Response containing user sentences
 *
 * @generated from protobuf message ondewo.nlu.GenerateUserSaysResponse
 */
export interface GenerateUserSaysResponse {
    /**
     * A list of sampled sentences
     *
     * @generated from protobuf field: repeated string user_says = 1;
     */
    userSays: string[];
}
/**
 * Response containing alternative training phrases
 *
 * @generated from protobuf message ondewo.nlu.GetAlternativeTrainingPhrasesResponse
 */
export interface GetAlternativeTrainingPhrasesResponse {
    /**
     * A list of alternative training phrases
     *
     * @generated from protobuf field: repeated ondewo.nlu.AltTrainingPhrase alternative_training_phrases = 1;
     */
    alternativeTrainingPhrases: AltTrainingPhrase[];
}
/**
 * This message contains an alternative sentence
 *
 * @generated from protobuf message ondewo.nlu.AltSentence
 */
export interface AltSentence {
    /**
     * Alternative sentence
     *
     * @generated from protobuf field: string sentence = 1;
     */
    sentence: string;
    /**
     * Score associated to the alternative sentence resulted
     *
     * @generated from protobuf field: float score = 2;
     */
    score: number;
}
/**
 * This message contains an alternative training phrase
 *
 * @generated from protobuf message ondewo.nlu.AltTrainingPhrase
 */
export interface AltTrainingPhrase {
    /**
     * Alternative training phrase
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase training_phrase = 1;
     */
    trainingPhrase?: Intent_TrainingPhrase;
    /**
     * Score associated to training_phrase
     *
     * @generated from protobuf field: float score = 2;
     */
    score: number;
}
/**
 * This message contains the configuration of data enrichment
 *
 * @generated from protobuf message ondewo.nlu.DataEnrichmentConfig
 */
export interface DataEnrichmentConfig {
    /**
     * Entity augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.EntityEnrichmentConfig entity_enrichment = 1;
     */
    entityEnrichment?: EntityEnrichmentConfig;
    /**
     * Thesaurus augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.ThesaurusEnrichmentConfig thesaurus_enrichment = 2;
     */
    thesaurusEnrichment?: ThesaurusEnrichmentConfig;
    /**
     * Word2Vec augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.Word2VecEnrichmentConfig word2vec_enrichment = 3 [json_name = "word2vecEnrichment"];
     */
    word2VecEnrichment?: Word2VecEnrichmentConfig;
    /**
     * WordNet augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.WordNetAugEnrichmentConfig word_net_enrichment = 4;
     */
    wordNetEnrichment?: WordNetAugEnrichmentConfig;
    /**
     * GPT2 augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.GPT2EnrichmentConfig gpt2_enrichment = 5;
     */
    gpt2Enrichment?: GPT2EnrichmentConfig;
    /**
     * GloVe augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.GloVeEnrichmentConfig glove_enrichment = 6;
     */
    gloveEnrichment?: GloVeEnrichmentConfig;
    /**
     * BERT augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.BertAugEnrichmentConfig bert_enrichment = 8;
     */
    bertEnrichment?: BertAugEnrichmentConfig;
    /**
     * XLNet augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.XLNetAugEnrichmentConfig xlnet_enrichment = 9;
     */
    xlnetEnrichment?: XLNetAugEnrichmentConfig;
    /**
     * Large language model (LLM) augmenter configuration
     *
     * @generated from protobuf field: ondewo.nlu.LlmEnrichmentConfig llm_enrichment = 10;
     */
    llmEnrichment?: LlmEnrichmentConfig;
}
/**
 * Configuration for Entity enrichment
 *
 * @generated from protobuf message ondewo.nlu.EntityEnrichmentConfig
 */
export interface EntityEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for Thesaurus enrichment
 *
 * @generated from protobuf message ondewo.nlu.ThesaurusEnrichmentConfig
 */
export interface ThesaurusEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for BERT augmenter enrichment
 *
 * @generated from protobuf message ondewo.nlu.BertAugEnrichmentConfig
 */
export interface BertAugEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for GloVe enrichment
 *
 * @generated from protobuf message ondewo.nlu.GloVeEnrichmentConfig
 */
export interface GloVeEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for GPT2 enrichment
 *
 * @generated from protobuf message ondewo.nlu.GPT2EnrichmentConfig
 */
export interface GPT2EnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for Word2Vec enrichment
 *
 * @generated from protobuf message ondewo.nlu.Word2VecEnrichmentConfig
 */
export interface Word2VecEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for WordNet augmenter enrichment
 *
 * @generated from protobuf message ondewo.nlu.WordNetAugEnrichmentConfig
 */
export interface WordNetAugEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for XLNet enrichment
 *
 * @generated from protobuf message ondewo.nlu.XLNetAugEnrichmentConfig
 */
export interface XLNetAugEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
}
/**
 * Configuration for large language model (LLM) enrichment
 *
 * @generated from protobuf message ondewo.nlu.LlmEnrichmentConfig
 */
export interface LlmEnrichmentConfig {
    /**
     * Activation flag
     *
     * @generated from protobuf field: bool is_active = 1;
     */
    isActive: boolean;
    /**
     * Factor of enrichment
     *
     * @generated from protobuf field: int32 enrichment_factor = 2;
     */
    enrichmentFactor: number;
    /**
     * Order of augmenter execution
     *
     * @generated from protobuf field: int32 execution_order = 3;
     */
    executionOrder: number;
    /**
     * The CCAI service to be used to enrich
     * This specifies which large language model provider and model settings will handle the request.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/ccai/services/&lt;service_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string ccai_service_name = 4;
     */
    ccaiServiceName: string;
}
/**
 * The request for intent classification.
 *
 * @generated from protobuf message ondewo.nlu.ClassifyIntentsRequest
 */
export interface ClassifyIntentsRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * the input text
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * the input language
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional: if restrict classification result with input contexts listed in the field `context_names`
     *
     * @generated from protobuf field: bool active_contexts = 4;
     */
    activeContexts: boolean;
    /**
     * Optional: names of the input contexts to restrict the classification result with.
     * Intents can only be classified if the intent's input context set is the subset of the given context set.
     *
     * @generated from protobuf field: repeated string context_names = 5;
     */
    contextNames: string[];
    /**
     * Optional: Which mode to use:
     * EXCLUSIVE - skip algorithms listed in `algorithms` field,
     * INCLUSIVE - run ONLY algorithms listed in `algorithms` field,
     * UNSPECIFIED - default mode, described in agent config
     *
     * @generated from protobuf field: ondewo.nlu.Mode mode = 6;
     */
    mode: Mode;
    /**
     * Optional: Algorithm list
     *
     * @generated from protobuf field: repeated ondewo.nlu.IntentAlgorithms algorithms = 7;
     */
    algorithms: IntentAlgorithms[];
}
/**
 * Intent classified by a certain intent classifier
 *
 * @generated from protobuf message ondewo.nlu.IntentClassified
 */
export interface IntentClassified {
    /**
     * The unique identifier of this intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * The name of the intent.
     *
     * @generated from protobuf field: string intent_display_name = 2;
     */
    intentDisplayName: string;
    /**
     * The name of the classifier that detected the intent
     *
     * @generated from protobuf field: string classifier = 3;
     */
    classifier: string;
    /**
     * Score associated to the detection of the intent by the classifier
     *
     * @generated from protobuf field: float score = 4;
     */
    score: number;
}
/**
 * Response containing the intents classified in a sentence
 *
 * @generated from protobuf message ondewo.nlu.ClassifyIntentsResponse
 */
export interface ClassifyIntentsResponse {
    /**
     * A list of intents detected
     *
     * @generated from protobuf field: repeated ondewo.nlu.IntentClassified intents_classified = 1;
     */
    intentsClassified: IntentClassified[];
    /**
     * The text containing from which the intents were detected
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * Flag that enables the context through the conversation
     *
     * @generated from protobuf field: bool active_contexts = 3;
     */
    activeContexts: boolean;
    /**
     * The context tags associated to the intents
     *
     * @generated from protobuf field: repeated string context_names = 4;
     */
    contextNames: string[];
}
/**
 * Type of mode
 *
 * @generated from protobuf enum ondewo.nlu.Mode
 */
export declare enum Mode {
    /**
     * default mode, described in agent config
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * skip algorithms listed in `algorithms` field,
     *
     * @generated from protobuf enum value: EXCLUSIVE = 1;
     */
    EXCLUSIVE = 1,
    /**
     * run ONLY algorithms listed in `algorithms` field
     *
     * @generated from protobuf enum value: INCLUSIVE = 2;
     */
    INCLUSIVE = 2
}
/**
 * Type of Intent algorithm.
 *
 * @generated from protobuf enum ondewo.nlu.IntentAlgorithms
 */
export declare enum IntentAlgorithms {
    /**
     * By enabling this, a specific intent is triggered if the context and the intent name in the user says is
     * matched. This can be used for directly triggering 'quick reply' button clicks confidence is always '1.0'.
     *
     * @generated from protobuf enum value: OndewoIntentExactContextDetector = 0;
     */
    OndewoIntentExactContextDetector = 0,
    /**
     * exact matching' of user input to user says is used to detect the intent. Confidence is always '1.0' if an
     * 'exact match' is found.
     *
     * @generated from protobuf enum value: OndewoIntentExactMatch = 1;
     */
    OndewoIntentExactMatch = 1,
    /**
     * the entity synonym in the user says text is replaced by the entity and 'exact matching' of user says text
     * is performed. Confidence is always '1.0'.
     *
     * @generated from protobuf enum value: OndewoIntentNamedExactMatch = 2;
     */
    OndewoIntentNamedExactMatch = 2,
    /**
     * the algorithm computes the similarity of the user input to all user says of all intents.
     *
     * @generated from protobuf enum value: OndewoIntentSimilarityMatch = 3;
     */
    OndewoIntentSimilarityMatch = 3,
    /**
     * the entity synonyms in the user says are replaced by their Entity. Text similarity algorithms are then
     * used to detect the intent.
     *
     * @generated from protobuf enum value: OndewoIntentNamedSimilarityMatch = 4;
     */
    OndewoIntentNamedSimilarityMatch = 4,
    /**
     * new language representation model called BERT, which stands for Bidirectional Encoder Representations
     * from Transformers.BERT is designed to pre-train deep bidirectional representations by jointly conditioning
     * on both left and right context in all layers. As a result, the pre-trained BERT representations can be
     * fine-tuned for multi-class intent detection. For details see https://arxiv.org/abs/1810.04805
     *
     * @generated from protobuf enum value: OndewoIntentBertClassifier = 7;
     */
    OndewoIntentBertClassifier = 7,
    /**
     * @generated from protobuf enum value: OndewoIntentMetaClassifier = 8;
     */
    OndewoIntentMetaClassifier = 8,
    /**
     * Maximum number of repeated fallbacks before this algorithm exists the conversation and resets contexts
     *
     * @generated from protobuf enum value: IntentExitDetector = 10;
     */
    IntentExitDetector = 10,
    /**
     * Algorithm to improve the interplay of the other algorithms
     *
     * @generated from protobuf enum value: OndewoIntentRankingMatch = 11;
     */
    OndewoIntentRankingMatch = 11,
    /**
     * Ensemble calculation of used algorithms
     *
     * @generated from protobuf enum value: OndewoWeightedEnsemble = 13;
     */
    OndewoWeightedEnsemble = 13,
    /**
     * Maximum number of repeated fallbacks before this algorithm exists the conversation and resets contexts
     *
     * @generated from protobuf enum value: OndewoIntentExitDetector = 14;
     */
    OndewoIntentExitDetector = 14,
    /**
     * Matches the intent based on the parameter constellation and the current user context
     *
     * @generated from protobuf enum value: OndewoIntentParameterMatch = 15;
     */
    OndewoIntentParameterMatch = 15
}
declare class ListLlmModelsRequest$Type extends MessageType<ListLlmModelsRequest> {
    constructor();
    create(value?: PartialMessage<ListLlmModelsRequest>): ListLlmModelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListLlmModelsRequest): ListLlmModelsRequest;
    internalBinaryWrite(message: ListLlmModelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListLlmModelsRequest
 */
export declare const ListLlmModelsRequest: ListLlmModelsRequest$Type;
declare class ListLlmModelsResponse$Type extends MessageType<ListLlmModelsResponse> {
    constructor();
    create(value?: PartialMessage<ListLlmModelsResponse>): ListLlmModelsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListLlmModelsResponse): ListLlmModelsResponse;
    internalBinaryWrite(message: ListLlmModelsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListLlmModelsResponse
 */
export declare const ListLlmModelsResponse: ListLlmModelsResponse$Type;
declare class LlmModel$Type extends MessageType<LlmModel> {
    constructor();
    create(value?: PartialMessage<LlmModel>): LlmModel;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LlmModel): LlmModel;
    internalBinaryWrite(message: LlmModel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LlmModel
 */
export declare const LlmModel: LlmModel$Type;
declare class LlmGenerateRequest$Type extends MessageType<LlmGenerateRequest> {
    constructor();
    create(value?: PartialMessage<LlmGenerateRequest>): LlmGenerateRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LlmGenerateRequest): LlmGenerateRequest;
    internalBinaryWrite(message: LlmGenerateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LlmGenerateRequest
 */
export declare const LlmGenerateRequest: LlmGenerateRequest$Type;
declare class LlmGenerateResponse$Type extends MessageType<LlmGenerateResponse> {
    constructor();
    create(value?: PartialMessage<LlmGenerateResponse>): LlmGenerateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LlmGenerateResponse): LlmGenerateResponse;
    internalBinaryWrite(message: LlmGenerateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LlmGenerateResponse
 */
export declare const LlmGenerateResponse: LlmGenerateResponse$Type;
declare class StreamingLlmGenerateResponse$Type extends MessageType<StreamingLlmGenerateResponse> {
    constructor();
    create(value?: PartialMessage<StreamingLlmGenerateResponse>): StreamingLlmGenerateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamingLlmGenerateResponse): StreamingLlmGenerateResponse;
    internalBinaryWrite(message: StreamingLlmGenerateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StreamingLlmGenerateResponse
 */
export declare const StreamingLlmGenerateResponse: StreamingLlmGenerateResponse$Type;
declare class ExtractEntitiesRequest$Type extends MessageType<ExtractEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<ExtractEntitiesRequest>): ExtractEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtractEntitiesRequest): ExtractEntitiesRequest;
    internalBinaryWrite(message: ExtractEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExtractEntitiesRequest
 */
export declare const ExtractEntitiesRequest: ExtractEntitiesRequest$Type;
declare class ExtractEntitiesFuzzyRequest$Type extends MessageType<ExtractEntitiesFuzzyRequest> {
    constructor();
    create(value?: PartialMessage<ExtractEntitiesFuzzyRequest>): ExtractEntitiesFuzzyRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtractEntitiesFuzzyRequest): ExtractEntitiesFuzzyRequest;
    internalBinaryWrite(message: ExtractEntitiesFuzzyRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExtractEntitiesFuzzyRequest
 */
export declare const ExtractEntitiesFuzzyRequest: ExtractEntitiesFuzzyRequest$Type;
declare class EntityTypeFuzzyNerConfig$Type extends MessageType<EntityTypeFuzzyNerConfig> {
    constructor();
    create(value?: PartialMessage<EntityTypeFuzzyNerConfig>): EntityTypeFuzzyNerConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityTypeFuzzyNerConfig): EntityTypeFuzzyNerConfig;
    internalBinaryWrite(message: EntityTypeFuzzyNerConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityTypeFuzzyNerConfig
 */
export declare const EntityTypeFuzzyNerConfig: EntityTypeFuzzyNerConfig$Type;
declare class EntityDetected$Type extends MessageType<EntityDetected> {
    constructor();
    create(value?: PartialMessage<EntityDetected>): EntityDetected;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityDetected): EntityDetected;
    internalBinaryWrite(message: EntityDetected, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityDetected
 */
export declare const EntityDetected: EntityDetected$Type;
declare class ExtractEntitiesResponse$Type extends MessageType<ExtractEntitiesResponse> {
    constructor();
    create(value?: PartialMessage<ExtractEntitiesResponse>): ExtractEntitiesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtractEntitiesResponse): ExtractEntitiesResponse;
    internalBinaryWrite(message: ExtractEntitiesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ExtractEntitiesResponse
 */
export declare const ExtractEntitiesResponse: ExtractEntitiesResponse$Type;
declare class GetAlternativeSentencesRequest$Type extends MessageType<GetAlternativeSentencesRequest> {
    constructor();
    create(value?: PartialMessage<GetAlternativeSentencesRequest>): GetAlternativeSentencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAlternativeSentencesRequest): GetAlternativeSentencesRequest;
    internalBinaryWrite(message: GetAlternativeSentencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAlternativeSentencesRequest
 */
export declare const GetAlternativeSentencesRequest: GetAlternativeSentencesRequest$Type;
declare class GenerateUserSaysRequest$Type extends MessageType<GenerateUserSaysRequest> {
    constructor();
    create(value?: PartialMessage<GenerateUserSaysRequest>): GenerateUserSaysRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateUserSaysRequest): GenerateUserSaysRequest;
    internalBinaryWrite(message: GenerateUserSaysRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GenerateUserSaysRequest
 */
export declare const GenerateUserSaysRequest: GenerateUserSaysRequest$Type;
declare class GenerateResponsesRequest$Type extends MessageType<GenerateResponsesRequest> {
    constructor();
    create(value?: PartialMessage<GenerateResponsesRequest>): GenerateResponsesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateResponsesRequest): GenerateResponsesRequest;
    internalBinaryWrite(message: GenerateResponsesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GenerateResponsesRequest
 */
export declare const GenerateResponsesRequest: GenerateResponsesRequest$Type;
declare class GetAlternativeTrainingPhrasesRequest$Type extends MessageType<GetAlternativeTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<GetAlternativeTrainingPhrasesRequest>): GetAlternativeTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAlternativeTrainingPhrasesRequest): GetAlternativeTrainingPhrasesRequest;
    internalBinaryWrite(message: GetAlternativeTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAlternativeTrainingPhrasesRequest
 */
export declare const GetAlternativeTrainingPhrasesRequest: GetAlternativeTrainingPhrasesRequest$Type;
declare class GetSynonymsRequest$Type extends MessageType<GetSynonymsRequest> {
    constructor();
    create(value?: PartialMessage<GetSynonymsRequest>): GetSynonymsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSynonymsRequest): GetSynonymsRequest;
    internalBinaryWrite(message: GetSynonymsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSynonymsRequest
 */
export declare const GetSynonymsRequest: GetSynonymsRequest$Type;
declare class GetSynonymsResponse$Type extends MessageType<GetSynonymsResponse> {
    constructor();
    create(value?: PartialMessage<GetSynonymsResponse>): GetSynonymsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSynonymsResponse): GetSynonymsResponse;
    internalBinaryWrite(message: GetSynonymsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSynonymsResponse
 */
export declare const GetSynonymsResponse: GetSynonymsResponse$Type;
declare class Synonym$Type extends MessageType<Synonym> {
    constructor();
    create(value?: PartialMessage<Synonym>): Synonym;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Synonym): Synonym;
    internalBinaryWrite(message: Synonym, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Synonym
 */
export declare const Synonym: Synonym$Type;
declare class GetAlternativeSentencesResponse$Type extends MessageType<GetAlternativeSentencesResponse> {
    constructor();
    create(value?: PartialMessage<GetAlternativeSentencesResponse>): GetAlternativeSentencesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAlternativeSentencesResponse): GetAlternativeSentencesResponse;
    internalBinaryWrite(message: GetAlternativeSentencesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAlternativeSentencesResponse
 */
export declare const GetAlternativeSentencesResponse: GetAlternativeSentencesResponse$Type;
declare class GenerateResponsesResponse$Type extends MessageType<GenerateResponsesResponse> {
    constructor();
    create(value?: PartialMessage<GenerateResponsesResponse>): GenerateResponsesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateResponsesResponse): GenerateResponsesResponse;
    internalBinaryWrite(message: GenerateResponsesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GenerateResponsesResponse
 */
export declare const GenerateResponsesResponse: GenerateResponsesResponse$Type;
declare class GenerateUserSaysResponse$Type extends MessageType<GenerateUserSaysResponse> {
    constructor();
    create(value?: PartialMessage<GenerateUserSaysResponse>): GenerateUserSaysResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenerateUserSaysResponse): GenerateUserSaysResponse;
    internalBinaryWrite(message: GenerateUserSaysResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GenerateUserSaysResponse
 */
export declare const GenerateUserSaysResponse: GenerateUserSaysResponse$Type;
declare class GetAlternativeTrainingPhrasesResponse$Type extends MessageType<GetAlternativeTrainingPhrasesResponse> {
    constructor();
    create(value?: PartialMessage<GetAlternativeTrainingPhrasesResponse>): GetAlternativeTrainingPhrasesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAlternativeTrainingPhrasesResponse): GetAlternativeTrainingPhrasesResponse;
    internalBinaryWrite(message: GetAlternativeTrainingPhrasesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAlternativeTrainingPhrasesResponse
 */
export declare const GetAlternativeTrainingPhrasesResponse: GetAlternativeTrainingPhrasesResponse$Type;
declare class AltSentence$Type extends MessageType<AltSentence> {
    constructor();
    create(value?: PartialMessage<AltSentence>): AltSentence;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AltSentence): AltSentence;
    internalBinaryWrite(message: AltSentence, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AltSentence
 */
export declare const AltSentence: AltSentence$Type;
declare class AltTrainingPhrase$Type extends MessageType<AltTrainingPhrase> {
    constructor();
    create(value?: PartialMessage<AltTrainingPhrase>): AltTrainingPhrase;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AltTrainingPhrase): AltTrainingPhrase;
    internalBinaryWrite(message: AltTrainingPhrase, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AltTrainingPhrase
 */
export declare const AltTrainingPhrase: AltTrainingPhrase$Type;
declare class DataEnrichmentConfig$Type extends MessageType<DataEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<DataEnrichmentConfig>): DataEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DataEnrichmentConfig): DataEnrichmentConfig;
    internalBinaryWrite(message: DataEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DataEnrichmentConfig
 */
export declare const DataEnrichmentConfig: DataEnrichmentConfig$Type;
declare class EntityEnrichmentConfig$Type extends MessageType<EntityEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<EntityEnrichmentConfig>): EntityEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityEnrichmentConfig): EntityEnrichmentConfig;
    internalBinaryWrite(message: EntityEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityEnrichmentConfig
 */
export declare const EntityEnrichmentConfig: EntityEnrichmentConfig$Type;
declare class ThesaurusEnrichmentConfig$Type extends MessageType<ThesaurusEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<ThesaurusEnrichmentConfig>): ThesaurusEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ThesaurusEnrichmentConfig): ThesaurusEnrichmentConfig;
    internalBinaryWrite(message: ThesaurusEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ThesaurusEnrichmentConfig
 */
export declare const ThesaurusEnrichmentConfig: ThesaurusEnrichmentConfig$Type;
declare class BertAugEnrichmentConfig$Type extends MessageType<BertAugEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<BertAugEnrichmentConfig>): BertAugEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BertAugEnrichmentConfig): BertAugEnrichmentConfig;
    internalBinaryWrite(message: BertAugEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BertAugEnrichmentConfig
 */
export declare const BertAugEnrichmentConfig: BertAugEnrichmentConfig$Type;
declare class GloVeEnrichmentConfig$Type extends MessageType<GloVeEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<GloVeEnrichmentConfig>): GloVeEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GloVeEnrichmentConfig): GloVeEnrichmentConfig;
    internalBinaryWrite(message: GloVeEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GloVeEnrichmentConfig
 */
export declare const GloVeEnrichmentConfig: GloVeEnrichmentConfig$Type;
declare class GPT2EnrichmentConfig$Type extends MessageType<GPT2EnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<GPT2EnrichmentConfig>): GPT2EnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GPT2EnrichmentConfig): GPT2EnrichmentConfig;
    internalBinaryWrite(message: GPT2EnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GPT2EnrichmentConfig
 */
export declare const GPT2EnrichmentConfig: GPT2EnrichmentConfig$Type;
declare class Word2VecEnrichmentConfig$Type extends MessageType<Word2VecEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<Word2VecEnrichmentConfig>): Word2VecEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Word2VecEnrichmentConfig): Word2VecEnrichmentConfig;
    internalBinaryWrite(message: Word2VecEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Word2VecEnrichmentConfig
 */
export declare const Word2VecEnrichmentConfig: Word2VecEnrichmentConfig$Type;
declare class WordNetAugEnrichmentConfig$Type extends MessageType<WordNetAugEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<WordNetAugEnrichmentConfig>): WordNetAugEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WordNetAugEnrichmentConfig): WordNetAugEnrichmentConfig;
    internalBinaryWrite(message: WordNetAugEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.WordNetAugEnrichmentConfig
 */
export declare const WordNetAugEnrichmentConfig: WordNetAugEnrichmentConfig$Type;
declare class XLNetAugEnrichmentConfig$Type extends MessageType<XLNetAugEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<XLNetAugEnrichmentConfig>): XLNetAugEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: XLNetAugEnrichmentConfig): XLNetAugEnrichmentConfig;
    internalBinaryWrite(message: XLNetAugEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.XLNetAugEnrichmentConfig
 */
export declare const XLNetAugEnrichmentConfig: XLNetAugEnrichmentConfig$Type;
declare class LlmEnrichmentConfig$Type extends MessageType<LlmEnrichmentConfig> {
    constructor();
    create(value?: PartialMessage<LlmEnrichmentConfig>): LlmEnrichmentConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LlmEnrichmentConfig): LlmEnrichmentConfig;
    internalBinaryWrite(message: LlmEnrichmentConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LlmEnrichmentConfig
 */
export declare const LlmEnrichmentConfig: LlmEnrichmentConfig$Type;
declare class ClassifyIntentsRequest$Type extends MessageType<ClassifyIntentsRequest> {
    constructor();
    create(value?: PartialMessage<ClassifyIntentsRequest>): ClassifyIntentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClassifyIntentsRequest): ClassifyIntentsRequest;
    internalBinaryWrite(message: ClassifyIntentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ClassifyIntentsRequest
 */
export declare const ClassifyIntentsRequest: ClassifyIntentsRequest$Type;
declare class IntentClassified$Type extends MessageType<IntentClassified> {
    constructor();
    create(value?: PartialMessage<IntentClassified>): IntentClassified;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentClassified): IntentClassified;
    internalBinaryWrite(message: IntentClassified, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentClassified
 */
export declare const IntentClassified: IntentClassified$Type;
declare class ClassifyIntentsResponse$Type extends MessageType<ClassifyIntentsResponse> {
    constructor();
    create(value?: PartialMessage<ClassifyIntentsResponse>): ClassifyIntentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClassifyIntentsResponse): ClassifyIntentsResponse;
    internalBinaryWrite(message: ClassifyIntentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ClassifyIntentsResponse
 */
export declare const ClassifyIntentsResponse: ClassifyIntentsResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.AiServices
 */
export declare const AiServices: ServiceType;
export {};
