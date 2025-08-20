import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Intent_TrainingPhrase_Entity } from "./intent";
import { EntityType } from "./entity_type";
import { Intent } from "./intent";
import { EntityType_Entity } from "./entity_type";
/**
 * The request to validate regexes.
 *
 * @generated from protobuf message ondewo.nlu.ValidateRegexRequest
 */
export interface ValidateRegexRequest {
    /**
     * String containing the regex.
     *
     * @generated from protobuf field: string regex = 1;
     */
    regex: string;
}
/**
 * The response of the regex validation
 *
 * @generated from protobuf message ondewo.nlu.ValidateRegexResponse
 */
export interface ValidateRegexResponse {
    /**
     * Error messages
     *
     * @generated from protobuf field: repeated string error_messages = 1;
     */
    errorMessages: string[];
}
/**
 * Validation request for entity type values
 *
 * @generated from protobuf message ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export interface ValidateEmbeddedRegexRequest {
    /**
     * @generated from protobuf field: ondewo.nlu.EntityType.Entity entity_type = 1;
     */
    entityType?: EntityType_Entity;
}
/**
 * Response of the entity type validation
 *
 * @generated from protobuf message ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export interface ValidateEmbeddedRegexResponse {
    /**
     * List of error message from the validation
     *
     * @generated from protobuf field: repeated string error_messages = 1;
     */
    errorMessages: string[];
}
/**
 * The request to clean the all intents.
 *
 * @generated from protobuf message ondewo.nlu.CleanAllIntentsRequest
 */
export interface CleanAllIntentsRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. Characters to be recognized as special characters for cleaning.
     * Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 3;
     */
    specialCharacters: string;
    /**
     * Optional. List of substring that shall not be cleaned/deleted.
     * Example: ['St.', 'U.S.', 'sys.', '24.12.', 'Nr.', 'TelNr.']
     * Default = None
     *
     * @generated from protobuf field: repeated string substring_white_list = 4;
     */
    substringWhiteList: string[];
    /**
     * Required. Do not apply changes to the database if set to True
     *
     * @generated from protobuf field: bool dry_run = 5;
     */
    dryRun: boolean;
    /**
     * Optional. Options for the cleaning of the training phrases.
     *
     * @generated from protobuf field: ondewo.nlu.TrainingPhraseCleanerOptions training_phrase_cleaner_options = 6;
     */
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
    /**
     * Optional. Options for re-annotation of entities (default = REANNOTATE_NEVER)
     *
     * @generated from protobuf field: ondewo.nlu.ReannotateEntitiesOptions reannotate_entities_options = 7;
     */
    reannotateEntitiesOptions: ReannotateEntitiesOptions;
    /**
     * Optional. Number of threads used to accomplish the task
     *
     * @generated from protobuf field: int32 number_of_workers = 8;
     */
    numberOfWorkers: number;
}
/**
 * Response corresponding to the CleanAllIntents Request
 *
 * @generated from protobuf message ondewo.nlu.CleanAllIntentsResponse
 */
export interface CleanAllIntentsResponse {
    /**
     * Required. List of updates performed on intents
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent cleaned_intents = 1;
     */
    cleanedIntents: Intent[];
    /**
     * Optional. List of updates applied to intents
     *
     * @generated from protobuf field: repeated ondewo.nlu.IntentUpdate intent_update_list = 2;
     */
    intentUpdateList: IntentUpdate[];
}
/**
 * The request message to clean a single intents.
 *
 * @generated from protobuf message ondewo.nlu.CleanIntentRequest
 */
export interface CleanIntentRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The name of the intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 2;
     */
    intentName: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. Characters to be recognized as special characters for cleaning.
     * Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 4;
     */
    specialCharacters: string;
    /**
     * Optional. List of substring that shall not be cleaned/deleted.
     * Example: ['St.', 'U.S.', 'sys.', '24.12.', 'Nr.', 'TelNr.']
     * Default = None
     *
     * @generated from protobuf field: repeated string substring_white_list = 5;
     */
    substringWhiteList: string[];
    /**
     * Required. Do not apply changes to the database if set to True
     *
     * @generated from protobuf field: bool dry_run = 6;
     */
    dryRun: boolean;
    /**
     * Optional. Options for the cleaning of the training phrases.
     *
     * @generated from protobuf field: ondewo.nlu.TrainingPhraseCleanerOptions training_phrase_cleaner_options = 7;
     */
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
    /**
     * Optional. Options for re-annotation of entities (default = REANNOTATE_NEVER)
     *
     * @generated from protobuf field: ondewo.nlu.ReannotateEntitiesOptions reannotate_entities_options = 8;
     */
    reannotateEntitiesOptions: ReannotateEntitiesOptions;
}
/**
 * The response message to clean a single intents.
 *
 * @generated from protobuf message ondewo.nlu.CleanIntentResponse
 */
export interface CleanIntentResponse {
    /**
     * Required. Cleaned Intent
     *
     * @generated from protobuf field: ondewo.nlu.Intent cleaned_intent = 1;
     */
    cleanedIntent?: Intent;
    /**
     * Optional. Updates applied to intent
     *
     * @generated from protobuf field: ondewo.nlu.IntentUpdate intent_update = 2;
     */
    intentUpdate?: IntentUpdate;
}
/**
 * Options for cleaning the training phrases
 *
 * @generated from protobuf message ondewo.nlu.TrainingPhraseCleanerOptions
 */
export interface TrainingPhraseCleanerOptions {
    /**
     * Whether or not to delete repeated whitespaces
     *
     * @generated from protobuf field: bool delete_repeated_whitespaces = 1;
     */
    deleteRepeatedWhitespaces: boolean;
    /**
     * Whether of not to delete leading special characters
     *
     * @generated from protobuf field: bool delete_leading_special_characters = 2;
     */
    deleteLeadingSpecialCharacters: boolean;
    /**
     * Whether of not to delete trailing special characters
     *
     * @generated from protobuf field: bool delete_trailing_special_characters = 3;
     */
    deleteTrailingSpecialCharacters: boolean;
}
/**
 * Message to keep track of updated strings
 *
 * @generated from protobuf message ondewo.nlu.StringUpdate
 */
export interface StringUpdate {
    /**
     * New version of the string
     *
     * @generated from protobuf field: string new = 1;
     */
    new: string;
    /**
     * Old version of the string
     *
     * @generated from protobuf field: string old = 2;
     */
    old: string;
}
/**
 * Stores updates applied to an intent
 *
 * @generated from protobuf message ondewo.nlu.IntentUpdate
 */
export interface IntentUpdate {
    /**
     * The display name of the intent
     *
     * @generated from protobuf field: string intent_display_name = 1;
     */
    intentDisplayName: string;
    /**
     * List of the updated training phrases
     *
     * @generated from protobuf field: repeated ondewo.nlu.IntentUpdate.TrainingPhraseUpdate training_phrase_update_list = 2;
     */
    trainingPhraseUpdateList: IntentUpdate_TrainingPhraseUpdate[];
    /**
     * List of the deleted parameters
     *
     * @generated from protobuf field: repeated string deleted_parameters = 3;
     */
    deletedParameters: string[];
}
/**
 * Message to track the updates made to a training phrase
 *
 * @generated from protobuf message ondewo.nlu.IntentUpdate.TrainingPhraseUpdate
 */
export interface IntentUpdate_TrainingPhraseUpdate {
    /**
     * Stores updates of training phrases
     *
     * @generated from protobuf field: ondewo.nlu.StringUpdate training_phrase_update = 1;
     */
    trainingPhraseUpdate?: StringUpdate;
    /**
     * Stores updates of entity strings
     *
     * @generated from protobuf field: repeated ondewo.nlu.StringUpdate entity_updates = 2;
     */
    entityUpdates: StringUpdate[];
    /**
     * Stores re-annotated entity strings
     *
     * @generated from protobuf field: repeated string entities_reannotated = 3;
     */
    entitiesReannotated: string[];
    /**
     * Will be switched to True if at least one update has been performed
     *
     * @generated from protobuf field: bool contains_update_variable = 4;
     */
    containsUpdateVariable: boolean;
}
/**
 * Stores updates applied to an entity type
 *
 * @generated from protobuf message ondewo.nlu.EntityTypeUpdate
 */
export interface EntityTypeUpdate {
    /**
     * The entity type name
     *
     * @generated from protobuf field: string entity_type_name = 1;
     */
    entityTypeName: string;
    /**
     * List of the updated entities
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityTypeUpdate.EntityUpdate values_update_list = 2;
     */
    valuesUpdateList: EntityTypeUpdate_EntityUpdate[];
}
/**
 * Stores updates applied to an entity
 *
 * @generated from protobuf message ondewo.nlu.EntityTypeUpdate.EntityUpdate
 */
export interface EntityTypeUpdate_EntityUpdate {
    /**
     * Updates made to the entity value
     *
     * @generated from protobuf field: ondewo.nlu.StringUpdate entity_value_update = 1;
     */
    entityValueUpdate?: StringUpdate;
    /**
     * Updates made to the entity synonyms
     *
     * @generated from protobuf field: repeated ondewo.nlu.StringUpdate entity_synonym_updates = 2;
     */
    entitySynonymUpdates: StringUpdate[];
}
/**
 * Request to clean the entity types
 *
 * @generated from protobuf message ondewo.nlu.CleanAllEntityTypesRequest
 */
export interface CleanAllEntityTypesRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. Characters to be recognized as special characters for cleaning.
     * Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 3;
     */
    specialCharacters: string;
    /**
     * Optional. List of substring that shall not be cleaned/deleted.
     * Example: ['St.', 'U.S.', 'sys.', '24.12.', 'Nr.', 'TelNr.']
     *
     * @generated from protobuf field: repeated string substring_white_list = 4;
     */
    substringWhiteList: string[];
    /**
     * Optional. Entity type that contain more than max_entity_count_update entities will
     * not be cleaned. Relevant for auto-generated entity values (e.g. City Names)
     * Default = 10000
     *
     * @generated from protobuf field: int32 max_entity_count_update = 5;
     */
    maxEntityCountUpdate: number;
    /**
     * Optional. List of strings or regexes. Entity types will be deleted if their display
     * name matches an element of this list
     * Example: ['sys.ignore.'] -> would delete entity types with display names sys.ignore.*
     *
     * @generated from protobuf field: repeated string forbidden_entity_type_patterns = 6;
     */
    forbiddenEntityTypePatterns: string[];
    /**
     * Required. Do not apply changes to the database if set to True
     *
     * @generated from protobuf field: bool dry_run = 7;
     */
    dryRun: boolean;
    /**
     * Optional. Number of threads used to accomplish the task
     *
     * @generated from protobuf field: int32 number_of_workers = 8;
     */
    numberOfWorkers: number;
}
/**
 * Response from entity type cleaner
 *
 * @generated from protobuf message ondewo.nlu.CleanAllEntityTypesResponse
 */
export interface CleanAllEntityTypesResponse {
    /**
     * Required. List of updated entity types
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType cleaned_entity_types = 1;
     */
    cleanedEntityTypes: EntityType[];
    /**
     * Optional. List of updated entity types
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType deleted_entity_types = 2;
     */
    deletedEntityTypes: EntityType[];
    /**
     * Optional. List of updates performed on entity types
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityTypeUpdate entity_type_updates = 3;
     */
    entityTypeUpdates: EntityTypeUpdate[];
    /**
     * Optional. List of the deleted entity types
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityTypeUpdate entity_type_deletions = 4;
     */
    entityTypeDeletions: EntityTypeUpdate[];
}
/**
 * Request to clean a single entity type
 *
 * @generated from protobuf message ondewo.nlu.CleanEntityTypeRequest
 */
export interface CleanEntityTypeRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The name of the entity_type
     *
     * @generated from protobuf field: string entity_type_name = 2;
     */
    entityTypeName: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. Characters to be recognized as special characters for cleaning.
     * Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 4;
     */
    specialCharacters: string;
    /**
     * Optional. List of substring that shall not be cleaned/deleted.
     * Example: ['St.', 'U.S.', 'sys.', '24.12.', 'Nr.', 'TelNr.']
     *
     * @generated from protobuf field: repeated string substring_white_list = 5;
     */
    substringWhiteList: string[];
    /**
     * Optional. Entity type that contain more than max_entity_count_update entities will
     * not be cleaned. Relevant for auto-generated entity values (e.g. City Names)
     * Default = 10000
     *
     * @generated from protobuf field: int32 max_entity_count_update = 6;
     */
    maxEntityCountUpdate: number;
    /**
     * Required. Do not apply changes to the database if set to True
     *
     * @generated from protobuf field: bool dry_run = 7;
     */
    dryRun: boolean;
}
/**
 * Response from entity type cleaner
 *
 * @generated from protobuf message ondewo.nlu.CleanEntityTypeResponse
 */
export interface CleanEntityTypeResponse {
    /**
     * Required. The cleaned entity type
     *
     * @generated from protobuf field: ondewo.nlu.EntityType cleaned_entity_type = 1;
     */
    cleanedEntityType?: EntityType;
    /**
     * Optional. The updated entity type
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeUpdate entity_type_update = 2;
     */
    entityTypeUpdate?: EntityTypeUpdate;
}
/**
 * Request message to AddTrainingPhrase rpc
 *
 * @generated from protobuf message ondewo.nlu.AddTrainingPhrasesRequest
 */
export interface AddTrainingPhrasesRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Required. List of training phrases to be added to the intent
     *
     * @generated from protobuf field: repeated ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent training_phrase_list = 3;
     */
    trainingPhraseList: AddTrainingPhrasesRequest_TrainingPhraseForIntent[];
    /**
     * Optional. Whether or not to extract entities for the new training phrases
     *
     * @generated from protobuf field: bool extract_entities = 4;
     */
    extractEntities: boolean;
    /**
     * Optional. Characters to be recognized as special characters for cleaning
     * the training phrases. Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 5;
     */
    specialCharacters: string;
    /**
     * Optional. Options for the training phrase cleaner to override the default settings
     *
     * @generated from protobuf field: ondewo.nlu.TrainingPhraseCleanerOptions training_phrase_cleaner_options = 6;
     */
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
    /**
     * Optional. Number of threads used to accomplish the task
     *
     * @generated from protobuf field: int32 number_of_workers = 7;
     */
    numberOfWorkers: number;
}
/**
 * Message that contains the new training phrase, together with the intent display name
 * and, optionally the entity annotations
 *
 * @generated from protobuf message ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent
 */
export interface AddTrainingPhrasesRequest_TrainingPhraseForIntent {
    /**
     * Required. New training phrase to be added
     *
     * @generated from protobuf field: string training_phrase = 1;
     */
    trainingPhrase: string;
    /**
     * Required. Corresponding display name of the intent
     *
     * @generated from protobuf field: string intent_display_name = 2;
     */
    intentDisplayName: string;
    /**
     * Optional. Entity annotations
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.TrainingPhrase.Entity entities = 3;
     */
    entities: Intent_TrainingPhrase_Entity[];
}
/**
 * Response message to AddTrainingPhrase rpc
 *
 * @generated from protobuf message ondewo.nlu.AddTrainingPhrasesResponse
 */
export interface AddTrainingPhrasesResponse {
    /**
     * Required. If something goes wrong, error messages will be conveyed via a repeated string
     *
     * @generated from protobuf field: repeated string error_messages = 1;
     */
    errorMessages: string[];
}
/**
 * Request message to AddTrainingPhraseFromCSV rpc
 *
 * @generated from protobuf message ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export interface AddTrainingPhrasesFromCSVRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Required. Contents of the .csv file containing training phrases to be added to the intents
     *
     * @generated from protobuf field: bytes csv_contents = 3;
     */
    csvContents: Uint8Array;
    /**
     * Optional. Whether or not to extract entities for the new training phrases
     *
     * @generated from protobuf field: bool extract_entities = 4;
     */
    extractEntities: boolean;
    /**
     * Optional. Before new training phrases are added to their corresponding intent,
     * they are cleaned with cleaning scripts. These cleaning scripts remove certain special characters,
     * if they are found at the beginning of the text or if they appear in annotations.
     * Overrides the default: '.,;!?:'
     *
     * @generated from protobuf field: string special_characters = 5;
     */
    specialCharacters: string;
    /**
     * Optional. Options for the training phrase cleaner to override the default settings
     *
     * @generated from protobuf field: ondewo.nlu.TrainingPhraseCleanerOptions training_phrase_cleaner_options = 6;
     */
    trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions;
    /**
     * Optional. Number of threads used to accomplish the task
     *
     * @generated from protobuf field: int32 number_of_workers = 7;
     */
    numberOfWorkers: number;
}
/**
 * Encapsulates entity re-annotation options
 *
 * @generated from protobuf enum ondewo.nlu.ReannotateEntitiesOptions
 */
export declare enum ReannotateEntitiesOptions {
    /**
     * Never re-annotate training phrases
     *
     * @generated from protobuf enum value: REANNOTATE_NEVER = 0;
     */
    REANNOTATE_NEVER = 0,
    /**
     * Always re-annotate training phrases
     *
     * @generated from protobuf enum value: REANNOTATE_ALWAYS = 1;
     */
    REANNOTATE_ALWAYS = 1,
    /**
     * Re-annotate training phrases if there are no annotations
     *
     * @generated from protobuf enum value: REANNOTATE_IF_EMPTY = 2;
     */
    REANNOTATE_IF_EMPTY = 2,
    /**
     * Re-annotate if training phrases have been deleted
     *
     * @generated from protobuf enum value: REANNOTATE_AFTER_DELETION = 3;
     */
    REANNOTATE_AFTER_DELETION = 3,
    /**
     * Re-annotate if there are no annotations or if training phrases have been deleted
     *
     * @generated from protobuf enum value: REANNOTATE_IF_EMPTY_OR_AFTER_DELETION = 4;
     */
    REANNOTATE_IF_EMPTY_OR_AFTER_DELETION = 4
}
declare class ValidateRegexRequest$Type extends MessageType<ValidateRegexRequest> {
    constructor();
    create(value?: PartialMessage<ValidateRegexRequest>): ValidateRegexRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateRegexRequest): ValidateRegexRequest;
    internalBinaryWrite(message: ValidateRegexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ValidateRegexRequest
 */
export declare const ValidateRegexRequest: ValidateRegexRequest$Type;
declare class ValidateRegexResponse$Type extends MessageType<ValidateRegexResponse> {
    constructor();
    create(value?: PartialMessage<ValidateRegexResponse>): ValidateRegexResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateRegexResponse): ValidateRegexResponse;
    internalBinaryWrite(message: ValidateRegexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ValidateRegexResponse
 */
export declare const ValidateRegexResponse: ValidateRegexResponse$Type;
declare class ValidateEmbeddedRegexRequest$Type extends MessageType<ValidateEmbeddedRegexRequest> {
    constructor();
    create(value?: PartialMessage<ValidateEmbeddedRegexRequest>): ValidateEmbeddedRegexRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateEmbeddedRegexRequest): ValidateEmbeddedRegexRequest;
    internalBinaryWrite(message: ValidateEmbeddedRegexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ValidateEmbeddedRegexRequest
 */
export declare const ValidateEmbeddedRegexRequest: ValidateEmbeddedRegexRequest$Type;
declare class ValidateEmbeddedRegexResponse$Type extends MessageType<ValidateEmbeddedRegexResponse> {
    constructor();
    create(value?: PartialMessage<ValidateEmbeddedRegexResponse>): ValidateEmbeddedRegexResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidateEmbeddedRegexResponse): ValidateEmbeddedRegexResponse;
    internalBinaryWrite(message: ValidateEmbeddedRegexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ValidateEmbeddedRegexResponse
 */
export declare const ValidateEmbeddedRegexResponse: ValidateEmbeddedRegexResponse$Type;
declare class CleanAllIntentsRequest$Type extends MessageType<CleanAllIntentsRequest> {
    constructor();
    create(value?: PartialMessage<CleanAllIntentsRequest>): CleanAllIntentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanAllIntentsRequest): CleanAllIntentsRequest;
    internalBinaryWrite(message: CleanAllIntentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanAllIntentsRequest
 */
export declare const CleanAllIntentsRequest: CleanAllIntentsRequest$Type;
declare class CleanAllIntentsResponse$Type extends MessageType<CleanAllIntentsResponse> {
    constructor();
    create(value?: PartialMessage<CleanAllIntentsResponse>): CleanAllIntentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanAllIntentsResponse): CleanAllIntentsResponse;
    internalBinaryWrite(message: CleanAllIntentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanAllIntentsResponse
 */
export declare const CleanAllIntentsResponse: CleanAllIntentsResponse$Type;
declare class CleanIntentRequest$Type extends MessageType<CleanIntentRequest> {
    constructor();
    create(value?: PartialMessage<CleanIntentRequest>): CleanIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanIntentRequest): CleanIntentRequest;
    internalBinaryWrite(message: CleanIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanIntentRequest
 */
export declare const CleanIntentRequest: CleanIntentRequest$Type;
declare class CleanIntentResponse$Type extends MessageType<CleanIntentResponse> {
    constructor();
    create(value?: PartialMessage<CleanIntentResponse>): CleanIntentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanIntentResponse): CleanIntentResponse;
    internalBinaryWrite(message: CleanIntentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanIntentResponse
 */
export declare const CleanIntentResponse: CleanIntentResponse$Type;
declare class TrainingPhraseCleanerOptions$Type extends MessageType<TrainingPhraseCleanerOptions> {
    constructor();
    create(value?: PartialMessage<TrainingPhraseCleanerOptions>): TrainingPhraseCleanerOptions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrainingPhraseCleanerOptions): TrainingPhraseCleanerOptions;
    internalBinaryWrite(message: TrainingPhraseCleanerOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.TrainingPhraseCleanerOptions
 */
export declare const TrainingPhraseCleanerOptions: TrainingPhraseCleanerOptions$Type;
declare class StringUpdate$Type extends MessageType<StringUpdate> {
    constructor();
    create(value?: PartialMessage<StringUpdate>): StringUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StringUpdate): StringUpdate;
    internalBinaryWrite(message: StringUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StringUpdate
 */
export declare const StringUpdate: StringUpdate$Type;
declare class IntentUpdate$Type extends MessageType<IntentUpdate> {
    constructor();
    create(value?: PartialMessage<IntentUpdate>): IntentUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentUpdate): IntentUpdate;
    internalBinaryWrite(message: IntentUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentUpdate
 */
export declare const IntentUpdate: IntentUpdate$Type;
declare class IntentUpdate_TrainingPhraseUpdate$Type extends MessageType<IntentUpdate_TrainingPhraseUpdate> {
    constructor();
    create(value?: PartialMessage<IntentUpdate_TrainingPhraseUpdate>): IntentUpdate_TrainingPhraseUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentUpdate_TrainingPhraseUpdate): IntentUpdate_TrainingPhraseUpdate;
    internalBinaryWrite(message: IntentUpdate_TrainingPhraseUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentUpdate.TrainingPhraseUpdate
 */
export declare const IntentUpdate_TrainingPhraseUpdate: IntentUpdate_TrainingPhraseUpdate$Type;
declare class EntityTypeUpdate$Type extends MessageType<EntityTypeUpdate> {
    constructor();
    create(value?: PartialMessage<EntityTypeUpdate>): EntityTypeUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityTypeUpdate): EntityTypeUpdate;
    internalBinaryWrite(message: EntityTypeUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityTypeUpdate
 */
export declare const EntityTypeUpdate: EntityTypeUpdate$Type;
declare class EntityTypeUpdate_EntityUpdate$Type extends MessageType<EntityTypeUpdate_EntityUpdate> {
    constructor();
    create(value?: PartialMessage<EntityTypeUpdate_EntityUpdate>): EntityTypeUpdate_EntityUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityTypeUpdate_EntityUpdate): EntityTypeUpdate_EntityUpdate;
    internalBinaryWrite(message: EntityTypeUpdate_EntityUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityTypeUpdate.EntityUpdate
 */
export declare const EntityTypeUpdate_EntityUpdate: EntityTypeUpdate_EntityUpdate$Type;
declare class CleanAllEntityTypesRequest$Type extends MessageType<CleanAllEntityTypesRequest> {
    constructor();
    create(value?: PartialMessage<CleanAllEntityTypesRequest>): CleanAllEntityTypesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanAllEntityTypesRequest): CleanAllEntityTypesRequest;
    internalBinaryWrite(message: CleanAllEntityTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanAllEntityTypesRequest
 */
export declare const CleanAllEntityTypesRequest: CleanAllEntityTypesRequest$Type;
declare class CleanAllEntityTypesResponse$Type extends MessageType<CleanAllEntityTypesResponse> {
    constructor();
    create(value?: PartialMessage<CleanAllEntityTypesResponse>): CleanAllEntityTypesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanAllEntityTypesResponse): CleanAllEntityTypesResponse;
    internalBinaryWrite(message: CleanAllEntityTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanAllEntityTypesResponse
 */
export declare const CleanAllEntityTypesResponse: CleanAllEntityTypesResponse$Type;
declare class CleanEntityTypeRequest$Type extends MessageType<CleanEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<CleanEntityTypeRequest>): CleanEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanEntityTypeRequest): CleanEntityTypeRequest;
    internalBinaryWrite(message: CleanEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanEntityTypeRequest
 */
export declare const CleanEntityTypeRequest: CleanEntityTypeRequest$Type;
declare class CleanEntityTypeResponse$Type extends MessageType<CleanEntityTypeResponse> {
    constructor();
    create(value?: PartialMessage<CleanEntityTypeResponse>): CleanEntityTypeResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CleanEntityTypeResponse): CleanEntityTypeResponse;
    internalBinaryWrite(message: CleanEntityTypeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CleanEntityTypeResponse
 */
export declare const CleanEntityTypeResponse: CleanEntityTypeResponse$Type;
declare class AddTrainingPhrasesRequest$Type extends MessageType<AddTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<AddTrainingPhrasesRequest>): AddTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddTrainingPhrasesRequest): AddTrainingPhrasesRequest;
    internalBinaryWrite(message: AddTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddTrainingPhrasesRequest
 */
export declare const AddTrainingPhrasesRequest: AddTrainingPhrasesRequest$Type;
declare class AddTrainingPhrasesRequest_TrainingPhraseForIntent$Type extends MessageType<AddTrainingPhrasesRequest_TrainingPhraseForIntent> {
    constructor();
    create(value?: PartialMessage<AddTrainingPhrasesRequest_TrainingPhraseForIntent>): AddTrainingPhrasesRequest_TrainingPhraseForIntent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddTrainingPhrasesRequest_TrainingPhraseForIntent): AddTrainingPhrasesRequest_TrainingPhraseForIntent;
    internalBinaryWrite(message: AddTrainingPhrasesRequest_TrainingPhraseForIntent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddTrainingPhrasesRequest.TrainingPhraseForIntent
 */
export declare const AddTrainingPhrasesRequest_TrainingPhraseForIntent: AddTrainingPhrasesRequest_TrainingPhraseForIntent$Type;
declare class AddTrainingPhrasesResponse$Type extends MessageType<AddTrainingPhrasesResponse> {
    constructor();
    create(value?: PartialMessage<AddTrainingPhrasesResponse>): AddTrainingPhrasesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddTrainingPhrasesResponse): AddTrainingPhrasesResponse;
    internalBinaryWrite(message: AddTrainingPhrasesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddTrainingPhrasesResponse
 */
export declare const AddTrainingPhrasesResponse: AddTrainingPhrasesResponse$Type;
declare class AddTrainingPhrasesFromCSVRequest$Type extends MessageType<AddTrainingPhrasesFromCSVRequest> {
    constructor();
    create(value?: PartialMessage<AddTrainingPhrasesFromCSVRequest>): AddTrainingPhrasesFromCSVRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddTrainingPhrasesFromCSVRequest): AddTrainingPhrasesFromCSVRequest;
    internalBinaryWrite(message: AddTrainingPhrasesFromCSVRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddTrainingPhrasesFromCSVRequest
 */
export declare const AddTrainingPhrasesFromCSVRequest: AddTrainingPhrasesFromCSVRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Utilities
 */
export declare const Utilities: ServiceType;
export {};
