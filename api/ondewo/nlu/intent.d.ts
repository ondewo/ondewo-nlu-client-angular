import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Empty } from "../../google/protobuf/empty";
import { SortingMode } from "./common";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Struct } from "../../google/protobuf/struct";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Context } from "./context";
/**
 * Represents an intent.
 * Intents convert a number of user expressions or patterns into an action. An
 * action is an extraction of a user command or sentence semantics.
 *
 * @generated from protobuf message ondewo.nlu.Intent
 */
export interface Intent {
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically.
     * The unique identifier of this intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The name of this intent.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Required. Indicates whether webhooks are enabled for the intent.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.WebhookState webhook_state = 6;
     */
    webhookState: Intent_WebhookState;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher
     * priorities. Zero or negative numbers mean that the intent is disabled.
     *
     * @generated from protobuf field: int32 priority = 3;
     */
    priority: number;
    /**
     * Optional. Indicates whether this is a fallback intent.
     *
     * @generated from protobuf field: bool is_fallback = 4;
     */
    isFallback: boolean;
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent.
     * Note: If `ml_disabled` setting is set to true, then this intent is not
     * taken into account during inference in `ML ONLY` match mode. Also,
     * auto-markup in the UI is turned off.
     *
     * @generated from protobuf field: bool ml_disabled = 19;
     */
    mlDisabled: boolean;
    /**
     * Optional. The list of context names required for this intent to be
     * triggered.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/-/contexts/&lt;context_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string input_context_names = 7;
     */
    inputContextNames: string[];
    /**
     * Optional. The collection of event names that trigger the intent.
     * If the collection of input contexts is not empty, all of the contexts must
     * be present in the active user session for an event to trigger this intent.
     *
     * @generated from protobuf field: repeated string events = 8;
     */
    events: string[];
    /**
     * Optional. The collection of examples/templates that the agent is
     * trained on.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.TrainingPhrase training_phrases = 9;
     */
    trainingPhrases: Intent_TrainingPhrase[];
    /**
     * Optional. The name of the action associated with the intent.
     *
     * @generated from protobuf field: string action = 10;
     */
    action: string;
    /**
     * Optional. The collection of contexts that are activated when the intent
     * is matched. Context messages in this collection should not set the
     * parameters field. Setting the `lifespan_count` to 0 will reset the context
     * when the intent is matched.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/-/contexts/&lt;context_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context output_contexts = 11;
     */
    outputContexts: Context[];
    /**
     * Optional. Indicates whether to delete all contexts in the current
     * session when this intent is matched.
     *
     * @generated from protobuf field: bool reset_contexts = 12;
     */
    resetContexts: boolean;
    /**
     * Optional. The collection of parameters associated with the intent.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Parameter parameters = 13;
     */
    parameters: Intent_Parameter[];
    /**
     * Optional. The collection of rich messages corresponding to the
     * `Response` field in the Dialogflow console.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message messages = 14;
     */
    messages: Intent_Message[];
    /**
     * Optional. The list of platforms for which the first response will be
     * taken from among the messages assigned to the DEFAULT_PLATFORM.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Platform default_response_platforms = 15;
     */
    defaultResponsePlatforms: Intent_Message_Platform[];
    /**
     * The unique identifier of the root intent in the chain of followup intents.
     * It identifies the correct followup intents chain for this intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string root_followup_intent_name = 16;
     */
    rootFollowupIntentName: string;
    /**
     * The unique identifier of the parent intent in the chain of followup
     * intents.
     * It identifies the parent followup intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent_followup_intent_name = 17;
     */
    parentFollowupIntentName: string;
    /**
     * Optional. Collection of information about all followup intents that have
     * name of this intent as a root_name.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.FollowupIntentInfo followup_intent_info = 18;
     */
    followupIntentInfo: Intent_FollowupIntentInfo[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 30;
     */
    nextPageToken: string;
    /**
     * Optional. Domain to which the intent belongs
     *
     * @generated from protobuf field: string domain_name = 31;
     */
    domainName: string;
    /**
     * Optional. Indicates whether the intent starts a deviation in conversation flow
     *
     * @generated from protobuf field: bool is_start_of_deviation = 32;
     */
    isStartOfDeviation: boolean;
    /**
     * Optional. Indicates whether the intent ends a deviation in conversation flow
     *
     * @generated from protobuf field: bool is_end_of_deviation = 33;
     */
    isEndOfDeviation: boolean;
    /**
     * Optional. Total count of training phrases associated to the intent.
     *
     * @generated from protobuf field: int32 training_phrase_count = 34;
     */
    trainingPhraseCount: number;
    /**
     * Indicates whether the intent is active or not
     *
     * @generated from protobuf field: ondewo.nlu.Intent.IntentStatus status = 35;
     */
    status: Intent_IntentStatus;
    /**
     * Optional. Provides information that can be used in custom scripts
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_date = 36;
     */
    startDate?: Timestamp;
    /**
     * Optional. Provides information that can be used in custom scripts
     *
     * @generated from protobuf field: google.protobuf.Timestamp end_date = 37;
     */
    endDate?: Timestamp;
    /**
     * Optional. Adds arbitrary "categories" for which one could filter the intents
     *
     * @generated from protobuf field: repeated string tags = 38;
     */
    tags: string[];
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 39;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 40;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 41;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 42;
     */
    modifiedBy: string;
}
/**
 * Represents an example or template that the agent is trained on.
 *
 * @generated from protobuf message ondewo.nlu.Intent.TrainingPhrase
 */
export interface Intent_TrainingPhrase {
    /**
     * Required. The unique identifier of this training phrase.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/trainingPhrases/&lt;training_phrase_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The type of the training phrase.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase.Type type = 2;
     */
    type: Intent_TrainingPhrase_Type;
    /**
     * Required. The text of the training phrase.
     *
     * @generated from protobuf field: string text = 3;
     */
    text: string;
    /**
     * Optional. The collection of annotated entities in the training phrase.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.TrainingPhrase.Entity entities = 4;
     */
    entities: Intent_TrainingPhrase_Entity[];
    /**
     * Optional. Indicates how many times this example or template was added to
     * the intent. Each time a developer adds an existing sample by editing an
     * intent or training, this counter is increased.
     *
     * @generated from protobuf field: int32 times_added_count = 5;
     */
    timesAddedCount: number;
    /**
     * Optional. The language of the training phrase.
     *
     * @generated from protobuf field: string language_code = 6;
     */
    languageCode: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 8;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 9;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 10;
     */
    modifiedBy: string;
}
/**
 * Represents an entity annotation in a training phrase. The entity can be annotated on the level of
 * entity type only or both entity type and entity value.
 *
 * @generated from protobuf message ondewo.nlu.Intent.TrainingPhrase.Entity
 */
export interface Intent_TrainingPhrase_Entity {
    /**
     * Required. The unique entity type identifier in format
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;`.
     *
     * @generated from protobuf field: string entity_type_name = 1;
     */
    entityTypeName: string;
    /**
     * Optional. The entity type name.
     *
     * @generated from protobuf field: string entity_type_display_name = 3;
     */
    entityTypeDisplayName: string;
    /**
     * Optional. The unique entity value identifier in format
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     * The entity value must belong to the entity type defined in entity_type_name.
     *
     * @generated from protobuf field: string entity_value_name = 4;
     */
    entityValueName: string;
    /**
     * Optional. The entity value name.
     *
     * @generated from protobuf field: string entity_value_display_name = 5;
     */
    entityValueDisplayName: string;
    /**
     * Required. Defines a character position, where the entity starts in the training phrase text
     * (0-indexed).
     *
     * @generated from protobuf field: int32 start = 6;
     */
    start: number;
    /**
     * Required. Defines a character position + 1, where the entity ends in the training phrase.
     * Example: "Meet you tomorrow" -> Entity(entity_type_display_name="sys.date", start=9, end=17)
     *
     * @generated from protobuf field: int32 end = 7;
     */
    end: number;
    /**
     * Optional. The unique parameter identifier in format
     * `projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/parameters/&lt;parameter_uuid&gt;`
     * for the value extracted from the annotated part of the example. The parameter must be one of the
     * parameters defined in the top-level intent message.
     * Can be unset if the parameter is created in the same create/update intent request as the
     * annotation.
     *
     * @generated from protobuf field: string parameter_name = 8;
     */
    parameterName: string;
    /**
     * Optional. The parameter name.
     *
     * @generated from protobuf field: string parameter_display_name = 9;
     */
    parameterDisplayName: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 11;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 12;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 13;
     */
    modifiedBy: string;
}
/**
 * Represents different types of training phrases.
 *
 * @generated from protobuf enum ondewo.nlu.Intent.TrainingPhrase.Type
 */
export declare enum Intent_TrainingPhrase_Type {
    /**
     * Not specified. This value should never be used.
     *
     * @generated from protobuf enum value: TYPE_UNSPECIFIED = 0;
     */
    TYPE_UNSPECIFIED = 0,
    /**
     * Examples do not contain @-prefixed entity type names, but example parts
     * can be annotated with entity types.
     *
     * @generated from protobuf enum value: EXAMPLE = 1;
     */
    EXAMPLE = 1,
    /**
     * Templates are not annotated with entity types, but they can contain
     * @-prefixed entity type names as substrings.
     *
     * @generated from protobuf enum value: TEMPLATE = 2;
     */
    TEMPLATE = 2
}
/**
 * Represents intent parameters.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Parameter
 */
export interface Intent_Parameter {
    /**
     * The unique identifier of this parameter.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/parameters/&lt;parameter_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The name of the parameter.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Optional. The definition of the parameter value. It can be:
     * - a constant string,
     * - a parameter value defined as `$parameter_name`,
     * - an original parameter value defined as `$parameter_name.original`,
     * - a parameter value from some context defined as
     *   `#context_name.parameter_name`.
     *
     * @generated from protobuf field: string value = 3;
     */
    value: string;
    /**
     * Optional. The default value to use when the `value` yields an empty
     * result.
     * Default values can be extracted from contexts by using the following
     * syntax: `#context_name.parameter_name`.
     *
     * @generated from protobuf field: string default_value = 4;
     */
    defaultValue: string;
    /**
     * Optional. The unique identifier of the entity type in format
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;` that describes values
     * of the parameter. If the parameter is required, this must be provided.
     *
     * @generated from protobuf field: string entity_type_name = 5;
     */
    entityTypeName: string;
    /**
     * Optional. The name of the entity type that describes values of the parameter. If the parameter is
     * required, this must be provided.
     *
     * @generated from protobuf field: string entity_type_display_name = 6;
     */
    entityTypeDisplayName: string;
    /**
     * Optional. Indicates whether the parameter is required. That is,
     * whether the intent cannot be completed without collecting the parameter
     * value.
     *
     * @generated from protobuf field: bool mandatory = 7;
     */
    mandatory: boolean;
    /**
     * Optional. The collection of prompts that the agent can present to the
     * user in order to collect value for the parameter.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Parameter.Prompt prompts = 8;
     */
    prompts: Intent_Parameter_Prompt[];
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     *
     * @generated from protobuf field: bool is_list = 9;
     */
    isList: boolean;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 10;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 11;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 12;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 13;
     */
    modifiedBy: string;
}
/**
 * Represents the prompts in the parameters.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Parameter.Prompt
 */
export interface Intent_Parameter_Prompt {
    /**
     * The unique identifier of this prompt.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/parameters/&lt;parameter_uuid&gt;/prompts/&lt;prompt_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. Text of the prompt
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * The language of the prompts. If not specified, the default language code will be used.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 5;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 6;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 7;
     */
    modifiedBy: string;
}
/**
 * Corresponds to the `Response` field in the Dialogflow console.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message
 */
export interface Intent_Message {
    /**
     * Required. The name of the return message.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/responseMessages/&lt;message_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 16;
     */
    name: string;
    /**
     * Required. The language of the return message.
     *
     * @generated from protobuf field: string language_code = 17;
     */
    languageCode: string;
    /**
     * @generated from protobuf oneof: message
     */
    message: {
        oneofKind: "text";
        /**
         * The text response.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Text text = 1;
         */
        text: Intent_Message_Text;
    } | {
        oneofKind: "image";
        /**
         * The image response.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Image image = 2;
         */
        image: Intent_Message_Image;
    } | {
        oneofKind: "quickReplies";
        /**
         * The quick replies response.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.QuickReplies quick_replies = 3;
         */
        quickReplies: Intent_Message_QuickReplies;
    } | {
        oneofKind: "card";
        /**
         * The card response.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Card card = 4;
         */
        card: Intent_Message_Card;
    } | {
        oneofKind: "payload";
        /**
         * Returns a response containing a custom, platform-specific payload.
         * See the Intent.Message.Platform type for a description of the
         * structure that may be required for your platform.
         *
         * @generated from protobuf field: google.protobuf.Struct payload = 5;
         */
        payload: Struct;
    } | {
        oneofKind: "simpleResponses";
        /**
         * The voice and text-only responses for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.SimpleResponses simple_responses = 7;
         */
        simpleResponses: Intent_Message_SimpleResponses;
    } | {
        oneofKind: "basicCard";
        /**
         * The basic card response for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.BasicCard basic_card = 8;
         */
        basicCard: Intent_Message_BasicCard;
    } | {
        oneofKind: "suggestions";
        /**
         * The suggestion chips for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Suggestions suggestions = 9;
         */
        suggestions: Intent_Message_Suggestions;
    } | {
        oneofKind: "linkOutSuggestion";
        /**
         * The link out suggestion chip for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.LinkOutSuggestion link_out_suggestion = 10;
         */
        linkOutSuggestion: Intent_Message_LinkOutSuggestion;
    } | {
        oneofKind: "listSelect";
        /**
         * The list card response for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.ListSelect list_select = 11;
         */
        listSelect: Intent_Message_ListSelect;
    } | {
        oneofKind: "carouselSelect";
        /**
         * The carousel card response for Actions on Google.
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.CarouselSelect carousel_select = 12;
         */
        carouselSelect: Intent_Message_CarouselSelect;
    } | {
        oneofKind: "htmlText";
        /**
         * The HTML text response
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.HTMLText html_text = 13;
         */
        htmlText: Intent_Message_HTMLText;
    } | {
        oneofKind: "video";
        /**
         * The Video response
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Video video = 14;
         */
        video: Intent_Message_Video;
    } | {
        oneofKind: "audio";
        /**
         * The Audio response
         *
         * @generated from protobuf field: ondewo.nlu.Intent.Message.Audio audio = 15;
         */
        audio: Intent_Message_Audio;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional. The platform that this message is intended for.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.Platform platform = 6;
     */
    platform: Intent_Message_Platform;
    /**
     * Read-only. States if a returned message is a prompt or not.
     *
     * @generated from protobuf field: bool is_prompt = 18;
     */
    isPrompt: boolean;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 19;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 20;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 21;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 22;
     */
    modifiedBy: string;
}
/**
 * The text response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Text
 */
export interface Intent_Message_Text {
    /**
     * Optional. The collection of the agent's responses.
     *
     * @generated from protobuf field: repeated string text = 1;
     */
    text: string[];
}
/**
 * The image response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Image
 */
export interface Intent_Message_Image {
    /**
     * Optional. The public URI to an image file.
     *
     * @generated from protobuf field: string image_uri = 1;
     */
    imageUri: string;
    /**
     * Optional. A text description of the image to be used for accessibility,
     * e.g., screen readers.
     *
     * @generated from protobuf field: string accessibility_text = 2;
     */
    accessibilityText: string;
}
/**
 * The quick replies response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.QuickReplies
 */
export interface Intent_Message_QuickReplies {
    /**
     * Optional. The title of the collection of quick replies.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * Optional. The collection of quick replies.
     *
     * @generated from protobuf field: repeated string quick_replies = 2;
     */
    quickReplies: string[];
}
/**
 * The card response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Card
 */
export interface Intent_Message_Card {
    /**
     * Optional. The title of the card.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * Optional. The subtitle of the card.
     *
     * @generated from protobuf field: string subtitle = 2;
     */
    subtitle: string;
    /**
     * Optional. The public URI to an image file for the card.
     *
     * @generated from protobuf field: string image_uri = 3;
     */
    imageUri: string;
    /**
     * Optional. The collection of card buttons.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Card.Button buttons = 4;
     */
    buttons: Intent_Message_Card_Button[];
}
/**
 * Optional. Contains information about a button.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Card.Button
 */
export interface Intent_Message_Card_Button {
    /**
     * Note: One of the following is required:
     * Optional. The text to show on the button.
     *
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     *
     * @generated from protobuf field: string postback = 2;
     */
    postback: string;
}
/**
 * The simple response message containing speech or text.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.SimpleResponse
 */
export interface Intent_Message_SimpleResponse {
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the
     * speech output. Mutually exclusive with ssml.
     *
     * @generated from protobuf field: string text_to_speech = 1;
     */
    textToSpeech: string;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken
     * response to the user in the SSML format. Mutually exclusive with
     * text_to_speech.
     *
     * @generated from protobuf field: string ssml = 2;
     */
    ssml: string;
    /**
     * Optional. The text to display.
     *
     * @generated from protobuf field: string display_text = 3;
     */
    displayText: string;
}
/**
 * The collection of simple response candidates.
 * This message in `QueryResult.fulfillment_messages` and
 * `WebhookResponse.fulfillment_messages` should contain only one
 * `SimpleResponse`.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.SimpleResponses
 */
export interface Intent_Message_SimpleResponses {
    /**
     * Required. The list of simple responses.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.SimpleResponse simple_responses = 1;
     */
    simpleResponses: Intent_Message_SimpleResponse[];
}
/**
 * The basic card message. Useful for displaying information.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.BasicCard
 */
export interface Intent_Message_BasicCard {
    /**
     * Optional. The title of the card.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * Optional. The subtitle of the card.
     *
     * @generated from protobuf field: string subtitle = 2;
     */
    subtitle: string;
    /**
     * Required, unless image is present. The body text of the card.
     *
     * @generated from protobuf field: string formatted_text = 3;
     */
    formattedText: string;
    /**
     * Optional. The image for the card.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.Image image = 4;
     */
    image?: Intent_Message_Image;
    /**
     * Optional. The collection of card buttons.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.BasicCard.Button buttons = 5;
     */
    buttons: Intent_Message_BasicCard_Button[];
}
/**
 * The button object that appears at the bottom of a card.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.BasicCard.Button
 */
export interface Intent_Message_BasicCard_Button {
    /**
     * Required. The title of the button.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * Required. Action to take when a user taps on the button.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction open_uri_action = 2;
     */
    openUriAction?: Intent_Message_BasicCard_Button_OpenUriAction;
}
/**
 * Opens the given URI.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction
 */
export interface Intent_Message_BasicCard_Button_OpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     *
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
}
/**
 * The suggestion chip message that the user can tap to quickly post a reply
 * to the conversation.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Suggestion
 */
export interface Intent_Message_Suggestion {
    /**
     * Required. The text shown the in the suggestion chip.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
}
/**
 * The collection of suggestions.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Suggestions
 */
export interface Intent_Message_Suggestions {
    /**
     * Required. The list of suggested replies.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Suggestion suggestions = 1;
     */
    suggestions: Intent_Message_Suggestion[];
}
/**
 * The suggestion chip message that allows the user to jump out to the app
 * or website associated with this agent.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.LinkOutSuggestion
 */
export interface Intent_Message_LinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     *
     * @generated from protobuf field: string destination_name = 1;
     */
    destinationName: string;
    /**
     * Required. The URI of the app or site to open when the user taps the
     * suggestion chip.
     *
     * @generated from protobuf field: string uri = 2;
     */
    uri: string;
}
/**
 * The card for presenting a list of options to select from.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.ListSelect
 */
export interface Intent_Message_ListSelect {
    /**
     * Optional. The overall title of the list.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * Required. List items.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.ListSelect.Item items = 2;
     */
    items: Intent_Message_ListSelect_Item[];
}
/**
 * An item in the list.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.ListSelect.Item
 */
export interface Intent_Message_ListSelect_Item {
    /**
     * Required. Additional information about this option.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.SelectItemInfo info = 1;
     */
    info?: Intent_Message_SelectItemInfo;
    /**
     * Required. The title of the list item.
     *
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * Optional. The main text describing the item.
     *
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * Optional. The image to display.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.Image image = 4;
     */
    image?: Intent_Message_Image;
}
/**
 * The card for presenting a carousel of options to select from.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.CarouselSelect
 */
export interface Intent_Message_CarouselSelect {
    /**
     * Required. Carousel items.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.CarouselSelect.Item items = 1;
     */
    items: Intent_Message_CarouselSelect_Item[];
}
/**
 * An item in the carousel.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.CarouselSelect.Item
 */
export interface Intent_Message_CarouselSelect_Item {
    /**
     * Required. Additional info about the option item.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.SelectItemInfo info = 1;
     */
    info?: Intent_Message_SelectItemInfo;
    /**
     * Required. Title of the carousel item.
     *
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * Optional. The body text of the card.
     *
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * Optional. The image to display.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message.Image image = 4;
     */
    image?: Intent_Message_Image;
}
/**
 * This message contains HTML text
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.HTMLText
 */
export interface Intent_Message_HTMLText {
    /**
     * Collection of the agent's responses in HTML format
     *
     * @generated from protobuf field: repeated string text = 1;
     */
    text: string[];
}
/**
 * The Video response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Video
 */
export interface Intent_Message_Video {
    /**
     * Optional. The public URI to a video file.
     *
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
    /**
     * Optional. A text description of the video to be used for accessibility,
     * e.g., screen readers.
     *
     * @generated from protobuf field: string accessibility_text = 2;
     */
    accessibilityText: string;
}
/**
 * The Audio response message.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.Audio
 */
export interface Intent_Message_Audio {
    /**
     * Optional. The public URI to an audio file.
     *
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
    /**
     * Optional. A text description of the audio to be used for accessibility,
     * e.g., screen readers.
     *
     * @generated from protobuf field: string accessibility_text = 2;
     */
    accessibilityText: string;
}
/**
 * Additional info about the select item for when it is triggered in a
 * dialog.
 *
 * @generated from protobuf message ondewo.nlu.Intent.Message.SelectItemInfo
 */
export interface Intent_Message_SelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this
     * response is given.
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this
     * item in dialog.
     *
     * @generated from protobuf field: repeated string synonyms = 2;
     */
    synonyms: string[];
}
/**
 * Represents different platforms that a rich message can be intended for.
 *
 * @generated from protobuf enum ondewo.nlu.Intent.Message.Platform
 */
export declare enum Intent_Message_Platform {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: PLATFORM_UNSPECIFIED = 0;
     */
    PLATFORM_UNSPECIFIED = 0,
    /**
     * Facebook.
     *
     * @generated from protobuf enum value: FACEBOOK = 1;
     */
    FACEBOOK = 1,
    /**
     * Slack.
     *
     * @generated from protobuf enum value: SLACK = 2;
     */
    SLACK = 2,
    /**
     * Telegram.
     *
     * @generated from protobuf enum value: TELEGRAM = 3;
     */
    TELEGRAM = 3,
    /**
     * Kik.
     *
     * @generated from protobuf enum value: KIK = 4;
     */
    KIK = 4,
    /**
     * Skype.
     *
     * @generated from protobuf enum value: SKYPE = 5;
     */
    SKYPE = 5,
    /**
     * Line.
     *
     * @generated from protobuf enum value: LINE = 6;
     */
    LINE = 6,
    /**
     * Viber.
     *
     * @generated from protobuf enum value: VIBER = 7;
     */
    VIBER = 7,
    /**
     * Actions on Google.
     * When using Actions on Google, you can choose one of the specific
     * Intent.Message types that mention support for Actions on Google,
     * or you can use the advanced Intent.Message.payload field.
     * The payload field provides access to AoG features not available in the
     * specific message types.
     * If using the Intent.Message.payload field, it should have a structure
     * similar to the JSON message shown here. For more information, see
     * [Actions on Google Webhook
     * Format](https://developers.google.com/actions/dialogflow/webhook)
     * <pre>{
     *   "expectUserResponse": true,
     *   "isSsml": false,
     *   "noInputPrompts": [],
     *   "richResponse": {
     *     "items": [
     *       {
     *         "simpleResponse": {
     *           "displayText": "hi",
     *           "textToSpeech": "hello"
     *         }
     *       }
     *     ],
     *     "suggestions": [
     *       {
     *         "title": "Say this"
     *       },
     *       {
     *         "title": "or this"
     *       }
     *     ]
     *   },
     *   "systemIntent": {
     *     "data": {
     *       "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
     *       "listSelect": {
     *         "items": [
     *           {
     *             "optionInfo": {
     *               "key": "key1",
     *               "synonyms": [
     *                 "key one"
     *               ]
     *             },
     *             "title": "must not be empty, but unique"
     *           },
     *           {
     *             "optionInfo": {
     *               "key": "key2",
     *               "synonyms": [
     *                 "key two"
     *               ]
     *             },
     *             "title": "must not be empty, but unique"
     *           }
     *         ]
     *       }
     *     },
     *     "intent": "actions.intent.OPTION"
     *   }
     * }</pre>
     *
     * @generated from protobuf enum value: ACTIONS_ON_GOOGLE = 8;
     */
    ACTIONS_ON_GOOGLE = 8,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_1 = 9;
     */
    PLACEHOLDER_1 = 9,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_2 = 10;
     */
    PLACEHOLDER_2 = 10,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_3 = 11;
     */
    PLACEHOLDER_3 = 11,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_4 = 12;
     */
    PLACEHOLDER_4 = 12,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_5 = 13;
     */
    PLACEHOLDER_5 = 13,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_6 = 14;
     */
    PLACEHOLDER_6 = 14,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_7 = 15;
     */
    PLACEHOLDER_7 = 15,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_8 = 16;
     */
    PLACEHOLDER_8 = 16,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_9 = 17;
     */
    PLACEHOLDER_9 = 17,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_10 = 18;
     */
    PLACEHOLDER_10 = 18,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_11 = 19;
     */
    PLACEHOLDER_11 = 19,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_12 = 20;
     */
    PLACEHOLDER_12 = 20,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_13 = 21;
     */
    PLACEHOLDER_13 = 21,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_14 = 22;
     */
    PLACEHOLDER_14 = 22,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_15 = 23;
     */
    PLACEHOLDER_15 = 23,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_16 = 24;
     */
    PLACEHOLDER_16 = 24,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_17 = 25;
     */
    PLACEHOLDER_17 = 25,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_18 = 26;
     */
    PLACEHOLDER_18 = 26,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_19 = 27;
     */
    PLACEHOLDER_19 = 27,
    /**
     * @generated from protobuf enum value: PLACEHOLDER_20 = 28;
     */
    PLACEHOLDER_20 = 28
}
/**
 * Represents a single followup intent in the chain.
 *
 * @generated from protobuf message ondewo.nlu.Intent.FollowupIntentInfo
 */
export interface Intent_FollowupIntentInfo {
    /**
     * The unique identifier of the followup intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string followup_intent_name = 1;
     */
    followupIntentName: string;
    /**
     * The unique identifier of the followup intent parent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent_followup_intent_name = 2;
     */
    parentFollowupIntentName: string;
}
/**
 * Structure of status of an Intent
 *
 * @generated from protobuf enum ondewo.nlu.Intent.IntentStatus
 */
export declare enum Intent_IntentStatus {
    /**
     * @generated from protobuf enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * @generated from protobuf enum value: INACTIVE = 1;
     */
    INACTIVE = 1
}
/**
 * Represents the different states that webhooks can be in.
 *
 * @generated from protobuf enum ondewo.nlu.Intent.WebhookState
 */
export declare enum Intent_WebhookState {
    /**
     * Webhook is disabled in the agent and in the intent.
     *
     * @generated from protobuf enum value: WEBHOOK_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Webhook is enabled in the agent and in the intent.
     *
     * @generated from protobuf enum value: WEBHOOK_STATE_ENABLED = 1;
     */
    ENABLED = 1,
    /**
     * Webhook is enabled in the agent and in the intent. Also, each slot
     * filling prompt is forwarded to the webhook.
     *
     * @generated from protobuf enum value: WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2;
     */
    ENABLED_FOR_SLOT_FILLING = 2
}
/**
 * The request message for [Intents.ListIntents][google.cloud.dialogflow.v2.Intents.ListIntents].
 *
 * @generated from protobuf message ondewo.nlu.ListIntentsRequest
 */
export interface ListIntentsRequest {
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
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     *
     * @generated from protobuf field: ondewo.nlu.IntentView intent_view = 3;
     */
    intentView: IntentView;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 5;
     */
    pageToken: string;
    /**
     * Optional. Applies a filter to the list. Default, no filter.
     *
     * @generated from protobuf field: ondewo.nlu.IntentCategory filter_by_category = 6;
     */
    filterByCategory: IntentCategory;
    /**
     * Optional. Defines the sorting of the list. Default, no sorting.
     *
     * @generated from protobuf field: ondewo.nlu.IntentSorting sort_by_field = 7;
     */
    sortByField?: IntentSorting;
    /**
     * Optional. Applies a filter to the list by tags. Default, no filter.
     *
     * @generated from protobuf field: repeated string filter_by_tags = 8;
     */
    filterByTags: string[];
}
/**
 * The response message for [Intents.ListIntents][google.cloud.dialogflow.v2.Intents.ListIntents].
 *
 * @generated from protobuf message ondewo.nlu.ListIntentsResponse
 */
export interface ListIntentsResponse {
    /**
     * The list of agent intents. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent intents = 1;
     */
    intents: Intent[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for [Intents.GetIntent][google.cloud.dialogflow.v2.Intents.GetIntent].
 *
 * @generated from protobuf message ondewo.nlu.GetIntentRequest
 */
export interface GetIntentRequest {
    /**
     * Required. The name of the intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. The language to retrieve training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     *
     * @generated from protobuf field: ondewo.nlu.IntentView intent_view = 3;
     */
    intentView: IntentView;
    /**
     * The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 10;
     */
    pageToken: string;
}
/**
 * The request message for [Intents.CreateIntent][google.cloud.dialogflow.v2.Intents.CreateIntent].
 *
 * @generated from protobuf message ondewo.nlu.CreateIntentRequest
 */
export interface CreateIntentRequest {
    /**
     * Required. The agent to create a intent for.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The intent to create.
     *
     * @generated from protobuf field: ondewo.nlu.Intent intent = 2;
     */
    intent?: Intent;
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intent`. If not specified, the agent's default language is
     * used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. The resource view to apply to the returned intent.
     *
     * @generated from protobuf field: ondewo.nlu.IntentView intent_view = 4;
     */
    intentView: IntentView;
}
/**
 * The request message for [Intents.UpdateIntent][google.cloud.dialogflow.v2.Intents.UpdateIntent].
 *
 * @generated from protobuf message ondewo.nlu.UpdateIntentRequest
 */
export interface UpdateIntentRequest {
    /**
     * Required. The intent to update.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: ondewo.nlu.Intent intent = 1;
     */
    intent?: Intent;
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intent`. If not specified, the agent's default language is
     * used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
    /**
     * Optional. The resource view to apply to the returned intent.
     *
     * @generated from protobuf field: ondewo.nlu.IntentView intent_view = 4;
     */
    intentView: IntentView;
}
/**
 * The request message for [Intents.DeleteIntent][google.cloud.dialogflow.v2.Intents.DeleteIntent].
 *
 * @generated from protobuf message ondewo.nlu.DeleteIntentRequest
 */
export interface DeleteIntentRequest {
    /**
     * Required. The name of the intent to delete.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [Intents.BatchUpdateIntents][google.cloud.dialogflow.v2.Intents.BatchUpdateIntents].
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateIntentsRequest
 */
export interface BatchUpdateIntentsRequest {
    /**
     * Required. The name of the agent to update or create intents in.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf oneof: intent_batch
     */
    intentBatch: {
        oneofKind: "intentBatchUri";
        /**
         * The URI to a Google Cloud Storage file containing intents to update or
         * create. The file format can either be a serialized proto (of IntentBatch
         * type) or JSON object. Note: The URI must start with "gs://".
         *
         * @generated from protobuf field: string intent_batch_uri = 2;
         */
        intentBatchUri: string;
    } | {
        oneofKind: "intentBatchInline";
        /**
         * The collection of intents to update or create.
         *
         * @generated from protobuf field: ondewo.nlu.IntentBatch intent_batch_inline = 3;
         */
        intentBatchInline: IntentBatch;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional. The language of training phrases, parameters and rich messages
     * defined in `intents`. If not specified, the agent's default language is
     * used. [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 5;
     */
    updateMask?: FieldMask;
    /**
     * Optional. The resource view to apply to the returned intent.
     *
     * @generated from protobuf field: ondewo.nlu.IntentView intent_view = 6;
     */
    intentView: IntentView;
}
/**
 * The response message for [Intents.BatchUpdateIntents][google.cloud.dialogflow.v2.Intents.BatchUpdateIntents].
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateIntentsResponse
 */
export interface BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent intents = 1;
     */
    intents: Intent[];
}
/**
 * The request message for [Intents.BatchDeleteIntents][google.cloud.dialogflow.v2.Intents.BatchDeleteIntents].
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteIntentsRequest
 */
export interface BatchDeleteIntentsRequest {
    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/&lt;project_uuid&gt;/agent`.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The collection of intents to delete. Only intent `name` must be
     * filled in.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent intents = 2;
     */
    intents: Intent[];
}
/**
 * This message is a wrapper around a collection of intents.
 *
 * @generated from protobuf message ondewo.nlu.IntentBatch
 */
export interface IntentBatch {
    /**
     * A collection of intents.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent intents = 1;
     */
    intents: Intent[];
}
/**
 * This message contains sorting of an intent
 *
 * @generated from protobuf message ondewo.nlu.IntentSorting
 */
export interface IntentSorting {
    /**
     * @generated from protobuf field: ondewo.nlu.IntentSorting.IntentSortingField sorting_field = 1;
     */
    sortingField: IntentSorting_IntentSortingField;
    /**
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 2;
     */
    sortingMode: SortingMode;
}
/**
 * Structure of intent sorting field
 *
 * @generated from protobuf enum ondewo.nlu.IntentSorting.IntentSortingField
 */
export declare enum IntentSorting_IntentSortingField {
    /**
     * @generated from protobuf enum value: NO_INTENT_SORTING = 0;
     */
    NO_INTENT_SORTING = 0,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_NAME = 1;
     */
    SORT_INTENT_BY_NAME = 1,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_CREATION_DATE = 2;
     */
    SORT_INTENT_BY_CREATION_DATE = 2,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_LAST_UPDATED = 3;
     */
    SORT_INTENT_BY_LAST_UPDATED = 3,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_USERSAYS_COUNT = 4;
     */
    SORT_INTENT_BY_USERSAYS_COUNT = 4,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_START_DATE = 5;
     */
    SORT_INTENT_BY_START_DATE = 5,
    /**
     * @generated from protobuf enum value: SORT_INTENT_BY_END_DATE = 6;
     */
    SORT_INTENT_BY_END_DATE = 6
}
/**
 * This message is a request to get an intent tag
 *
 * @generated from protobuf message ondewo.nlu.IntentTagRequest
 */
export interface IntentTagRequest {
    /**
     * The path of the intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Intent tags for this intent to operate on
     *
     * @generated from protobuf field: repeated string tags = 2;
     */
    tags: string[];
}
/**
 * This message is a request to get intent tags
 *
 * @generated from protobuf message ondewo.nlu.GetIntentTagsRequest
 */
export interface GetIntentTagsRequest {
    /**
     * The path of the intent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
}
/**
 * This message is a response of getting intent tags
 *
 * @generated from protobuf message ondewo.nlu.GetIntentTagsResponse
 */
export interface GetIntentTagsResponse {
    /**
     * All the distinct intent tags sorted
     *
     * @generated from protobuf field: repeated string intent_tags = 1;
     */
    intentTags: string[];
}
/**
 * This message is a request to get all intent tags
 *
 * @generated from protobuf message ondewo.nlu.GetAllIntentTagsRequest
 */
export interface GetAllIntentTagsRequest {
    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/&lt;project_uuid&gt;/agent`.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
}
/**
 * This message is a request to update a batch of training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateTrainingPhrasesRequest
 */
export interface BatchUpdateTrainingPhrasesRequest {
    /**
     * A list of training phrases
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.TrainingPhrase training_phrases = 1;
     */
    trainingPhrases: Intent_TrainingPhrase[];
}
/**
 * This message containing the training phrases status
 *
 * @generated from protobuf message ondewo.nlu.TrainingPhraseStatus
 */
export interface TrainingPhraseStatus {
    /**
     * @generated from protobuf oneof: phrase_or_status
     */
    phraseOrStatus: {
        oneofKind: "trainingPhrase";
        /**
         * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase training_phrase = 1;
         */
        trainingPhrase: Intent_TrainingPhrase;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * This message is a response of the status of a batch of training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchTrainingPhrasesStatusResponse
 */
export interface BatchTrainingPhrasesStatusResponse {
    /**
     * A list of training phrase statuses
     *
     * @generated from protobuf field: repeated ondewo.nlu.TrainingPhraseStatus training_phrase_statuses = 1;
     */
    trainingPhraseStatuses: TrainingPhraseStatus[];
    /**
     * indicates if statuses of some of the training phrases have errors
     *
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * This message is a request of a creation of a batch of training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchCreateTrainingPhrasesRequest
 */
export interface BatchCreateTrainingPhrasesRequest {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest training_phrase_requests = 1;
     */
    trainingPhraseRequests: BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest[];
}
/**
 * @generated from protobuf message ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
 */
export interface BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest {
    /**
     * Required. The name of the intent for which to create a training phrase for.
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Required. The training phrase to create.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase training_phrase = 2;
     */
    trainingPhrase?: Intent_TrainingPhrase;
}
/**
 * This message is a request to get a batch training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchGetTrainingPhrasesRequest
 */
export interface BatchGetTrainingPhrasesRequest {
    /**
     * Required. The names of the training phrases.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/trainingPhrases/&lt;training_phrase_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * This message is a request to delete a batch of training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesRequest
 */
export interface BatchDeleteTrainingPhrasesRequest {
    /**
     * Required. The names of the training phrases.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/trainingPhrases/&lt;training_phrase_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * This message is a response of deleting a batch of training phrases
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesResponse
 */
export interface BatchDeleteTrainingPhrasesResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus delete_statuses = 1;
     */
    deleteStatuses: BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus[];
    /**
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
 */
export interface BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus {
    /**
     * @generated from protobuf oneof: delete_status
     */
    deleteStatus: {
        oneofKind: "successfullyDeleted";
        /**
         * @generated from protobuf field: google.protobuf.Empty successfully_deleted = 1;
         */
        successfullyDeleted: Empty;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The request message for TrainingPhraseRequest
 *
 * @generated from protobuf message ondewo.nlu.ListTrainingPhrasesRequest
 */
export interface ListTrainingPhrasesRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
}
/**
 * The response message for ListTrainingPhrase
 *
 * @generated from protobuf message ondewo.nlu.ListTrainingPhrasesResponse
 */
export interface ListTrainingPhrasesResponse {
    /**
     * The list of training phrases. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.TrainingPhrase training_phrases = 1;
     */
    trainingPhrases: Intent_TrainingPhrase[];
    /**
     * Token to retrieve the next page of results, or empty if there are no
     * more results in the list.
     * Format: `current_index-<CURRENT_INDEX>--page_size-<PAGE_SIZE>--sub_field-<SUB_FIELD>`
     * where <CURRENT_INDEX> and <PAGE_SIZE> are of type int, <SUB_FIELD> is of type str (example: `training_phrases`)
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * This message is a response of a batch responses of message status
 *
 * @generated from protobuf message ondewo.nlu.BatchResponseMessagesStatusResponse
 */
export interface BatchResponseMessagesStatusResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus response_message_statuses = 1;
     */
    responseMessageStatuses: BatchResponseMessagesStatusResponse_ResponseMessageStatus[];
    /**
     * indicates if statuses of some of the response messages have errors
     *
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus
 */
export interface BatchResponseMessagesStatusResponse_ResponseMessageStatus {
    /**
     * @generated from protobuf oneof: phrase_or_status
     */
    phraseOrStatus: {
        oneofKind: "responseMessage";
        /**
         * @generated from protobuf field: ondewo.nlu.Intent.Message response_message = 1;
         */
        responseMessage: Intent_Message;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request to create a list of new response messages and adds it to an intent
 *
 * @generated from protobuf message ondewo.nlu.BatchCreateResponseMessagesRequest
 */
export interface BatchCreateResponseMessagesRequest {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest response_message_requests = 1;
     */
    responseMessageRequests: BatchCreateResponseMessagesRequest_CreateResponseMessageRequest[];
}
/**
 * @generated from protobuf message ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
 */
export interface BatchCreateResponseMessagesRequest_CreateResponseMessageRequest {
    /**
     * Required. The name of the intent for which to create a response message for.
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Required. The response message.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Message response_message = 2;
     */
    responseMessage?: Intent_Message;
}
/**
 * Request to update a response message in the specified intent
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateResponseMessagesRequest
 */
export interface BatchUpdateResponseMessagesRequest {
    /**
     * The response messages to update
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message response_messages = 1;
     */
    responseMessages: Intent_Message[];
}
/**
 * Request to retrieve a response messages
 *
 * @generated from protobuf message ondewo.nlu.BatchGetResponseMessagesRequest
 */
export interface BatchGetResponseMessagesRequest {
    /**
     * Required. The names of the response messages.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/responseMessages/&lt;message_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * Request to delete response messages specified by their names
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteResponseMessagesRequest
 */
export interface BatchDeleteResponseMessagesRequest {
    /**
     * Required. The names of the  response messages.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/responseMessages/&lt;message_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * Response containing list with deleted response messages
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteResponseMessagesResponse
 */
export interface BatchDeleteResponseMessagesResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus delete_statuses = 1;
     */
    deleteStatuses: BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus[];
    /**
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
 */
export interface BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus {
    /**
     * @generated from protobuf oneof: delete_status
     */
    deleteStatus: {
        oneofKind: "successfullyDeleted";
        /**
         * @generated from protobuf field: google.protobuf.Empty successfully_deleted = 1;
         */
        successfullyDeleted: Empty;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The request message for ResponseMessageRequest
 *
 * @generated from protobuf message ondewo.nlu.ListResponseMessagesRequest
 */
export interface ListResponseMessagesRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Optional. The language to list response messages, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
}
/**
 * The response message for ListResponseMessage
 *
 * @generated from protobuf message ondewo.nlu.ListResponseMessagesResponse
 */
export interface ListResponseMessagesResponse {
    /**
     * The list of response messages. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message response_messages = 1;
     */
    responseMessages: Intent_Message[];
    /**
     * Token to retrieve the next page of results, or empty if there are no
     * more results in the list.
     * Format: `current_index-<CURRENT_INDEX>--page_size-<PAGE_SIZE>--sub_field-<SUB_FIELD>`
     * where <CURRENT_INDEX> and <PAGE_SIZE> are of type int, <SUB_FIELD> is of type str (example: `messages`)
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Response containing a batch of parameters in the specified intent
 *
 * @generated from protobuf message ondewo.nlu.BatchParametersStatusResponse
 */
export interface BatchParametersStatusResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchParametersStatusResponse.ParameterStatus parameter_statuses = 1;
     */
    parameterStatuses: BatchParametersStatusResponse_ParameterStatus[];
    /**
     * indicates if statuses of some of the parameters have errors
     *
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.BatchParametersStatusResponse.ParameterStatus
 */
export interface BatchParametersStatusResponse_ParameterStatus {
    /**
     * @generated from protobuf oneof: phrase_or_status
     */
    phraseOrStatus: {
        oneofKind: "parameter";
        /**
         * @generated from protobuf field: ondewo.nlu.Intent.Parameter parameter = 1;
         */
        parameter: Intent_Parameter;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request to create a batch of parameters in the specified intent
 *
 * @generated from protobuf message ondewo.nlu.BatchCreateParametersRequest
 */
export interface BatchCreateParametersRequest {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest parameter_requests = 1;
     */
    parameterRequests: BatchCreateParametersRequest_CreateParameterRequest[];
}
/**
 * @generated from protobuf message ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest
 */
export interface BatchCreateParametersRequest_CreateParameterRequest {
    /**
     * Required. The name of the intent for which to create a training phrase for.
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Required. The response message.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.Parameter parameter = 2;
     */
    parameter?: Intent_Parameter;
}
/**
 * Request to update parameters and adds them to an intent
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateParametersRequest
 */
export interface BatchUpdateParametersRequest {
    /**
     * The response messages to update
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Parameter parameters = 1;
     */
    parameters: Intent_Parameter[];
}
/**
 * Request to get batch of parameters in a specified intent
 *
 * @generated from protobuf message ondewo.nlu.BatchGetParametersRequest
 */
export interface BatchGetParametersRequest {
    /**
     * Required. The names of the response messages.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/parameters/&lt;parameter_uuid</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * Request to delete parameters specified by their names.
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteParametersRequest
 */
export interface BatchDeleteParametersRequest {
    /**
     * Required. The names of the  response messages.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;/parameters/&lt;parameter_uuid</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * This message contains response of deleted parameters
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteParametersResponse
 */
export interface BatchDeleteParametersResponse {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus delete_statuses = 1;
     */
    deleteStatuses: BatchDeleteParametersResponse_DeleteParameterStatus[];
    /**
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus
 */
export interface BatchDeleteParametersResponse_DeleteParameterStatus {
    /**
     * @generated from protobuf oneof: delete_status
     */
    deleteStatus: {
        oneofKind: "successfullyDeleted";
        /**
         * @generated from protobuf field: google.protobuf.Empty successfully_deleted = 1;
         */
        successfullyDeleted: Empty;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The request message for TrainingPhraseRequest
 *
 * @generated from protobuf message ondewo.nlu.ListParametersRequest
 */
export interface ListParametersRequest {
    /**
     * Required. The agent to list all intents from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/intents/&lt;intent_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string intent_name = 1;
     */
    intentName: string;
    /**
     * Optional. The language code used to filter out prompts.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
}
/**
 * The response message for ListTrainingPhrase
 *
 * @generated from protobuf message ondewo.nlu.ListParametersResponse
 */
export interface ListParametersResponse {
    /**
     * The list of parameters. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Parameter parameters = 1;
     */
    parameters: Intent_Parameter[];
    /**
     * Token to retrieve the next page of results, or empty if there are no
     * more results in the list.
     * Format: `current_index-<CURRENT_INDEX>--page_size-<PAGE_SIZE>--sub_field-<SUB_FIELD>`
     * where <CURRENT_INDEX> and <PAGE_SIZE> are of type int, <SUB_FIELD> is of type str (example: `parameters`)
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for TrainingPhraseRequest
 *
 * @generated from protobuf message ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest
 */
export interface ListTrainingPhrasesofIntentsWithEnrichmentRequest {
    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/&lt;project_uuid&gt;/agent`.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The language code used to filter out prompts.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. List of intent uuids to filter by. Only training phrases
     * that have this intent uuid will be returned
     * If not passed, returns all
     *
     * @generated from protobuf field: repeated string intent_ids = 3;
     */
    intentIds: string[];
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 4;
     */
    pageToken: string;
}
/**
 * This message contains a list of training phrases filtered by intent ids, language code and parent passed through the request
 *
 * @generated from protobuf message ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse
 */
export interface ListTrainingPhrasesofIntentsWithEnrichmentResponse {
    /**
     * List of user_says values. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated string training_phrases = 1;
     */
    trainingPhrases: string[];
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * Format: `current_index-<CURRENT_INDEX>--page_size-<PAGE_SIZE>--sub_field-<SUB_FIELD>`
     * where <CURRENT_INDEX> and <PAGE_SIZE> are of type int, <SUB_FIELD> is of type str (example: `parameters`)
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Represents the options for views of an intent.
 * An intent can be a sizable object. Therefore, we provide a resource view that
 * does not return training phrases in the response by default.
 *
 * @generated from protobuf enum ondewo.nlu.IntentView
 */
export declare enum IntentView {
    /**
     * Same as INTENT_VIEW_FULL
     *
     * @generated from protobuf enum value: INTENT_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * All fields are populated.
     *
     * @generated from protobuf enum value: INTENT_VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * The only nested structures populated are Contexts and Training phrases.
     * The Training phrases field is populated with only a few entries and no annotations.
     *
     * @generated from protobuf enum value: INTENT_VIEW_PARTIAL = 2;
     */
    PARTIAL = 2,
    /**
     * All nested structures are not populated (no training phrases, nor contexts, nor parameters, ...)
     *
     * @generated from protobuf enum value: INTENT_VIEW_SHALLOW = 3;
     */
    SHALLOW = 3,
    /**
     * Minimum view including only intent UUID and intent display name
     *
     * @generated from protobuf enum value: INTENT_VIEW_MINIMUM = 4;
     */
    MINIMUM = 4
}
/**
 * Represents the type of intents to filter by in the "List Intents" request
 *
 * @generated from protobuf enum ondewo.nlu.IntentCategory
 */
export declare enum IntentCategory {
    /**
     * represent all intents
     *
     * @generated from protobuf enum value: ALL_INTENTS = 0;
     */
    ALL_INTENTS = 0,
    /**
     * represent the default intents
     *
     * @generated from protobuf enum value: DEFAULT_INTENTS = 1;
     */
    DEFAULT_INTENTS = 1,
    /**
     * represent the user defined (custom) intents
     *
     * @generated from protobuf enum value: USER_DEFINED_INTENTS = 2;
     */
    USER_DEFINED_INTENTS = 2,
    /**
     * represents the intents that had its end_date elapsed
     *
     * @generated from protobuf enum value: DATE_EXPIRED_INTENTS = 3;
     */
    DATE_EXPIRED_INTENTS = 3,
    /**
     * represents the intents that its start_date began but had not yet expired
     *
     * @generated from protobuf enum value: DATE_ACTIVE_INTENTS = 4;
     */
    DATE_ACTIVE_INTENTS = 4,
    /**
     * represent the intents that are still expecting its start_date to begin
     *
     * @generated from protobuf enum value: DATE_UPCOMING_INTENTS = 5;
     */
    DATE_UPCOMING_INTENTS = 5
}
declare class Intent$Type extends MessageType<Intent> {
    constructor();
    create(value?: PartialMessage<Intent>): Intent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent): Intent;
    internalBinaryWrite(message: Intent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent
 */
export declare const Intent: Intent$Type;
declare class Intent_TrainingPhrase$Type extends MessageType<Intent_TrainingPhrase> {
    constructor();
    create(value?: PartialMessage<Intent_TrainingPhrase>): Intent_TrainingPhrase;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_TrainingPhrase): Intent_TrainingPhrase;
    internalBinaryWrite(message: Intent_TrainingPhrase, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.TrainingPhrase
 */
export declare const Intent_TrainingPhrase: Intent_TrainingPhrase$Type;
declare class Intent_TrainingPhrase_Entity$Type extends MessageType<Intent_TrainingPhrase_Entity> {
    constructor();
    create(value?: PartialMessage<Intent_TrainingPhrase_Entity>): Intent_TrainingPhrase_Entity;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_TrainingPhrase_Entity): Intent_TrainingPhrase_Entity;
    internalBinaryWrite(message: Intent_TrainingPhrase_Entity, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.TrainingPhrase.Entity
 */
export declare const Intent_TrainingPhrase_Entity: Intent_TrainingPhrase_Entity$Type;
declare class Intent_Parameter$Type extends MessageType<Intent_Parameter> {
    constructor();
    create(value?: PartialMessage<Intent_Parameter>): Intent_Parameter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Parameter): Intent_Parameter;
    internalBinaryWrite(message: Intent_Parameter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Parameter
 */
export declare const Intent_Parameter: Intent_Parameter$Type;
declare class Intent_Parameter_Prompt$Type extends MessageType<Intent_Parameter_Prompt> {
    constructor();
    create(value?: PartialMessage<Intent_Parameter_Prompt>): Intent_Parameter_Prompt;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Parameter_Prompt): Intent_Parameter_Prompt;
    internalBinaryWrite(message: Intent_Parameter_Prompt, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Parameter.Prompt
 */
export declare const Intent_Parameter_Prompt: Intent_Parameter_Prompt$Type;
declare class Intent_Message$Type extends MessageType<Intent_Message> {
    constructor();
    create(value?: PartialMessage<Intent_Message>): Intent_Message;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message): Intent_Message;
    internalBinaryWrite(message: Intent_Message, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message
 */
export declare const Intent_Message: Intent_Message$Type;
declare class Intent_Message_Text$Type extends MessageType<Intent_Message_Text> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Text>): Intent_Message_Text;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Text): Intent_Message_Text;
    internalBinaryWrite(message: Intent_Message_Text, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Text
 */
export declare const Intent_Message_Text: Intent_Message_Text$Type;
declare class Intent_Message_Image$Type extends MessageType<Intent_Message_Image> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Image>): Intent_Message_Image;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Image): Intent_Message_Image;
    internalBinaryWrite(message: Intent_Message_Image, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Image
 */
export declare const Intent_Message_Image: Intent_Message_Image$Type;
declare class Intent_Message_QuickReplies$Type extends MessageType<Intent_Message_QuickReplies> {
    constructor();
    create(value?: PartialMessage<Intent_Message_QuickReplies>): Intent_Message_QuickReplies;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_QuickReplies): Intent_Message_QuickReplies;
    internalBinaryWrite(message: Intent_Message_QuickReplies, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.QuickReplies
 */
export declare const Intent_Message_QuickReplies: Intent_Message_QuickReplies$Type;
declare class Intent_Message_Card$Type extends MessageType<Intent_Message_Card> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Card>): Intent_Message_Card;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Card): Intent_Message_Card;
    internalBinaryWrite(message: Intent_Message_Card, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Card
 */
export declare const Intent_Message_Card: Intent_Message_Card$Type;
declare class Intent_Message_Card_Button$Type extends MessageType<Intent_Message_Card_Button> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Card_Button>): Intent_Message_Card_Button;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Card_Button): Intent_Message_Card_Button;
    internalBinaryWrite(message: Intent_Message_Card_Button, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Card.Button
 */
export declare const Intent_Message_Card_Button: Intent_Message_Card_Button$Type;
declare class Intent_Message_SimpleResponse$Type extends MessageType<Intent_Message_SimpleResponse> {
    constructor();
    create(value?: PartialMessage<Intent_Message_SimpleResponse>): Intent_Message_SimpleResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_SimpleResponse): Intent_Message_SimpleResponse;
    internalBinaryWrite(message: Intent_Message_SimpleResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.SimpleResponse
 */
export declare const Intent_Message_SimpleResponse: Intent_Message_SimpleResponse$Type;
declare class Intent_Message_SimpleResponses$Type extends MessageType<Intent_Message_SimpleResponses> {
    constructor();
    create(value?: PartialMessage<Intent_Message_SimpleResponses>): Intent_Message_SimpleResponses;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_SimpleResponses): Intent_Message_SimpleResponses;
    internalBinaryWrite(message: Intent_Message_SimpleResponses, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.SimpleResponses
 */
export declare const Intent_Message_SimpleResponses: Intent_Message_SimpleResponses$Type;
declare class Intent_Message_BasicCard$Type extends MessageType<Intent_Message_BasicCard> {
    constructor();
    create(value?: PartialMessage<Intent_Message_BasicCard>): Intent_Message_BasicCard;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_BasicCard): Intent_Message_BasicCard;
    internalBinaryWrite(message: Intent_Message_BasicCard, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.BasicCard
 */
export declare const Intent_Message_BasicCard: Intent_Message_BasicCard$Type;
declare class Intent_Message_BasicCard_Button$Type extends MessageType<Intent_Message_BasicCard_Button> {
    constructor();
    create(value?: PartialMessage<Intent_Message_BasicCard_Button>): Intent_Message_BasicCard_Button;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_BasicCard_Button): Intent_Message_BasicCard_Button;
    internalBinaryWrite(message: Intent_Message_BasicCard_Button, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.BasicCard.Button
 */
export declare const Intent_Message_BasicCard_Button: Intent_Message_BasicCard_Button$Type;
declare class Intent_Message_BasicCard_Button_OpenUriAction$Type extends MessageType<Intent_Message_BasicCard_Button_OpenUriAction> {
    constructor();
    create(value?: PartialMessage<Intent_Message_BasicCard_Button_OpenUriAction>): Intent_Message_BasicCard_Button_OpenUriAction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_BasicCard_Button_OpenUriAction): Intent_Message_BasicCard_Button_OpenUriAction;
    internalBinaryWrite(message: Intent_Message_BasicCard_Button_OpenUriAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.BasicCard.Button.OpenUriAction
 */
export declare const Intent_Message_BasicCard_Button_OpenUriAction: Intent_Message_BasicCard_Button_OpenUriAction$Type;
declare class Intent_Message_Suggestion$Type extends MessageType<Intent_Message_Suggestion> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Suggestion>): Intent_Message_Suggestion;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Suggestion): Intent_Message_Suggestion;
    internalBinaryWrite(message: Intent_Message_Suggestion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Suggestion
 */
export declare const Intent_Message_Suggestion: Intent_Message_Suggestion$Type;
declare class Intent_Message_Suggestions$Type extends MessageType<Intent_Message_Suggestions> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Suggestions>): Intent_Message_Suggestions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Suggestions): Intent_Message_Suggestions;
    internalBinaryWrite(message: Intent_Message_Suggestions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Suggestions
 */
export declare const Intent_Message_Suggestions: Intent_Message_Suggestions$Type;
declare class Intent_Message_LinkOutSuggestion$Type extends MessageType<Intent_Message_LinkOutSuggestion> {
    constructor();
    create(value?: PartialMessage<Intent_Message_LinkOutSuggestion>): Intent_Message_LinkOutSuggestion;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_LinkOutSuggestion): Intent_Message_LinkOutSuggestion;
    internalBinaryWrite(message: Intent_Message_LinkOutSuggestion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.LinkOutSuggestion
 */
export declare const Intent_Message_LinkOutSuggestion: Intent_Message_LinkOutSuggestion$Type;
declare class Intent_Message_ListSelect$Type extends MessageType<Intent_Message_ListSelect> {
    constructor();
    create(value?: PartialMessage<Intent_Message_ListSelect>): Intent_Message_ListSelect;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_ListSelect): Intent_Message_ListSelect;
    internalBinaryWrite(message: Intent_Message_ListSelect, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.ListSelect
 */
export declare const Intent_Message_ListSelect: Intent_Message_ListSelect$Type;
declare class Intent_Message_ListSelect_Item$Type extends MessageType<Intent_Message_ListSelect_Item> {
    constructor();
    create(value?: PartialMessage<Intent_Message_ListSelect_Item>): Intent_Message_ListSelect_Item;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_ListSelect_Item): Intent_Message_ListSelect_Item;
    internalBinaryWrite(message: Intent_Message_ListSelect_Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.ListSelect.Item
 */
export declare const Intent_Message_ListSelect_Item: Intent_Message_ListSelect_Item$Type;
declare class Intent_Message_CarouselSelect$Type extends MessageType<Intent_Message_CarouselSelect> {
    constructor();
    create(value?: PartialMessage<Intent_Message_CarouselSelect>): Intent_Message_CarouselSelect;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_CarouselSelect): Intent_Message_CarouselSelect;
    internalBinaryWrite(message: Intent_Message_CarouselSelect, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.CarouselSelect
 */
export declare const Intent_Message_CarouselSelect: Intent_Message_CarouselSelect$Type;
declare class Intent_Message_CarouselSelect_Item$Type extends MessageType<Intent_Message_CarouselSelect_Item> {
    constructor();
    create(value?: PartialMessage<Intent_Message_CarouselSelect_Item>): Intent_Message_CarouselSelect_Item;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_CarouselSelect_Item): Intent_Message_CarouselSelect_Item;
    internalBinaryWrite(message: Intent_Message_CarouselSelect_Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.CarouselSelect.Item
 */
export declare const Intent_Message_CarouselSelect_Item: Intent_Message_CarouselSelect_Item$Type;
declare class Intent_Message_HTMLText$Type extends MessageType<Intent_Message_HTMLText> {
    constructor();
    create(value?: PartialMessage<Intent_Message_HTMLText>): Intent_Message_HTMLText;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_HTMLText): Intent_Message_HTMLText;
    internalBinaryWrite(message: Intent_Message_HTMLText, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.HTMLText
 */
export declare const Intent_Message_HTMLText: Intent_Message_HTMLText$Type;
declare class Intent_Message_Video$Type extends MessageType<Intent_Message_Video> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Video>): Intent_Message_Video;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Video): Intent_Message_Video;
    internalBinaryWrite(message: Intent_Message_Video, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Video
 */
export declare const Intent_Message_Video: Intent_Message_Video$Type;
declare class Intent_Message_Audio$Type extends MessageType<Intent_Message_Audio> {
    constructor();
    create(value?: PartialMessage<Intent_Message_Audio>): Intent_Message_Audio;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_Audio): Intent_Message_Audio;
    internalBinaryWrite(message: Intent_Message_Audio, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.Audio
 */
export declare const Intent_Message_Audio: Intent_Message_Audio$Type;
declare class Intent_Message_SelectItemInfo$Type extends MessageType<Intent_Message_SelectItemInfo> {
    constructor();
    create(value?: PartialMessage<Intent_Message_SelectItemInfo>): Intent_Message_SelectItemInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_Message_SelectItemInfo): Intent_Message_SelectItemInfo;
    internalBinaryWrite(message: Intent_Message_SelectItemInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.Message.SelectItemInfo
 */
export declare const Intent_Message_SelectItemInfo: Intent_Message_SelectItemInfo$Type;
declare class Intent_FollowupIntentInfo$Type extends MessageType<Intent_FollowupIntentInfo> {
    constructor();
    create(value?: PartialMessage<Intent_FollowupIntentInfo>): Intent_FollowupIntentInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Intent_FollowupIntentInfo): Intent_FollowupIntentInfo;
    internalBinaryWrite(message: Intent_FollowupIntentInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Intent.FollowupIntentInfo
 */
export declare const Intent_FollowupIntentInfo: Intent_FollowupIntentInfo$Type;
declare class ListIntentsRequest$Type extends MessageType<ListIntentsRequest> {
    constructor();
    create(value?: PartialMessage<ListIntentsRequest>): ListIntentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListIntentsRequest): ListIntentsRequest;
    internalBinaryWrite(message: ListIntentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListIntentsRequest
 */
export declare const ListIntentsRequest: ListIntentsRequest$Type;
declare class ListIntentsResponse$Type extends MessageType<ListIntentsResponse> {
    constructor();
    create(value?: PartialMessage<ListIntentsResponse>): ListIntentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListIntentsResponse): ListIntentsResponse;
    internalBinaryWrite(message: ListIntentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListIntentsResponse
 */
export declare const ListIntentsResponse: ListIntentsResponse$Type;
declare class GetIntentRequest$Type extends MessageType<GetIntentRequest> {
    constructor();
    create(value?: PartialMessage<GetIntentRequest>): GetIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetIntentRequest): GetIntentRequest;
    internalBinaryWrite(message: GetIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetIntentRequest
 */
export declare const GetIntentRequest: GetIntentRequest$Type;
declare class CreateIntentRequest$Type extends MessageType<CreateIntentRequest> {
    constructor();
    create(value?: PartialMessage<CreateIntentRequest>): CreateIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateIntentRequest): CreateIntentRequest;
    internalBinaryWrite(message: CreateIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateIntentRequest
 */
export declare const CreateIntentRequest: CreateIntentRequest$Type;
declare class UpdateIntentRequest$Type extends MessageType<UpdateIntentRequest> {
    constructor();
    create(value?: PartialMessage<UpdateIntentRequest>): UpdateIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateIntentRequest): UpdateIntentRequest;
    internalBinaryWrite(message: UpdateIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateIntentRequest
 */
export declare const UpdateIntentRequest: UpdateIntentRequest$Type;
declare class DeleteIntentRequest$Type extends MessageType<DeleteIntentRequest> {
    constructor();
    create(value?: PartialMessage<DeleteIntentRequest>): DeleteIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteIntentRequest): DeleteIntentRequest;
    internalBinaryWrite(message: DeleteIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteIntentRequest
 */
export declare const DeleteIntentRequest: DeleteIntentRequest$Type;
declare class BatchUpdateIntentsRequest$Type extends MessageType<BatchUpdateIntentsRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateIntentsRequest>): BatchUpdateIntentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateIntentsRequest): BatchUpdateIntentsRequest;
    internalBinaryWrite(message: BatchUpdateIntentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateIntentsRequest
 */
export declare const BatchUpdateIntentsRequest: BatchUpdateIntentsRequest$Type;
declare class BatchUpdateIntentsResponse$Type extends MessageType<BatchUpdateIntentsResponse> {
    constructor();
    create(value?: PartialMessage<BatchUpdateIntentsResponse>): BatchUpdateIntentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateIntentsResponse): BatchUpdateIntentsResponse;
    internalBinaryWrite(message: BatchUpdateIntentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateIntentsResponse
 */
export declare const BatchUpdateIntentsResponse: BatchUpdateIntentsResponse$Type;
declare class BatchDeleteIntentsRequest$Type extends MessageType<BatchDeleteIntentsRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteIntentsRequest>): BatchDeleteIntentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteIntentsRequest): BatchDeleteIntentsRequest;
    internalBinaryWrite(message: BatchDeleteIntentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteIntentsRequest
 */
export declare const BatchDeleteIntentsRequest: BatchDeleteIntentsRequest$Type;
declare class IntentBatch$Type extends MessageType<IntentBatch> {
    constructor();
    create(value?: PartialMessage<IntentBatch>): IntentBatch;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentBatch): IntentBatch;
    internalBinaryWrite(message: IntentBatch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentBatch
 */
export declare const IntentBatch: IntentBatch$Type;
declare class IntentSorting$Type extends MessageType<IntentSorting> {
    constructor();
    create(value?: PartialMessage<IntentSorting>): IntentSorting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentSorting): IntentSorting;
    internalBinaryWrite(message: IntentSorting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentSorting
 */
export declare const IntentSorting: IntentSorting$Type;
declare class IntentTagRequest$Type extends MessageType<IntentTagRequest> {
    constructor();
    create(value?: PartialMessage<IntentTagRequest>): IntentTagRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntentTagRequest): IntentTagRequest;
    internalBinaryWrite(message: IntentTagRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.IntentTagRequest
 */
export declare const IntentTagRequest: IntentTagRequest$Type;
declare class GetIntentTagsRequest$Type extends MessageType<GetIntentTagsRequest> {
    constructor();
    create(value?: PartialMessage<GetIntentTagsRequest>): GetIntentTagsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetIntentTagsRequest): GetIntentTagsRequest;
    internalBinaryWrite(message: GetIntentTagsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetIntentTagsRequest
 */
export declare const GetIntentTagsRequest: GetIntentTagsRequest$Type;
declare class GetIntentTagsResponse$Type extends MessageType<GetIntentTagsResponse> {
    constructor();
    create(value?: PartialMessage<GetIntentTagsResponse>): GetIntentTagsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetIntentTagsResponse): GetIntentTagsResponse;
    internalBinaryWrite(message: GetIntentTagsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetIntentTagsResponse
 */
export declare const GetIntentTagsResponse: GetIntentTagsResponse$Type;
declare class GetAllIntentTagsRequest$Type extends MessageType<GetAllIntentTagsRequest> {
    constructor();
    create(value?: PartialMessage<GetAllIntentTagsRequest>): GetAllIntentTagsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllIntentTagsRequest): GetAllIntentTagsRequest;
    internalBinaryWrite(message: GetAllIntentTagsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAllIntentTagsRequest
 */
export declare const GetAllIntentTagsRequest: GetAllIntentTagsRequest$Type;
declare class BatchUpdateTrainingPhrasesRequest$Type extends MessageType<BatchUpdateTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateTrainingPhrasesRequest>): BatchUpdateTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateTrainingPhrasesRequest): BatchUpdateTrainingPhrasesRequest;
    internalBinaryWrite(message: BatchUpdateTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateTrainingPhrasesRequest
 */
export declare const BatchUpdateTrainingPhrasesRequest: BatchUpdateTrainingPhrasesRequest$Type;
declare class TrainingPhraseStatus$Type extends MessageType<TrainingPhraseStatus> {
    constructor();
    create(value?: PartialMessage<TrainingPhraseStatus>): TrainingPhraseStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TrainingPhraseStatus): TrainingPhraseStatus;
    internalBinaryWrite(message: TrainingPhraseStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.TrainingPhraseStatus
 */
export declare const TrainingPhraseStatus: TrainingPhraseStatus$Type;
declare class BatchTrainingPhrasesStatusResponse$Type extends MessageType<BatchTrainingPhrasesStatusResponse> {
    constructor();
    create(value?: PartialMessage<BatchTrainingPhrasesStatusResponse>): BatchTrainingPhrasesStatusResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchTrainingPhrasesStatusResponse): BatchTrainingPhrasesStatusResponse;
    internalBinaryWrite(message: BatchTrainingPhrasesStatusResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchTrainingPhrasesStatusResponse
 */
export declare const BatchTrainingPhrasesStatusResponse: BatchTrainingPhrasesStatusResponse$Type;
declare class BatchCreateTrainingPhrasesRequest$Type extends MessageType<BatchCreateTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateTrainingPhrasesRequest>): BatchCreateTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateTrainingPhrasesRequest): BatchCreateTrainingPhrasesRequest;
    internalBinaryWrite(message: BatchCreateTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateTrainingPhrasesRequest
 */
export declare const BatchCreateTrainingPhrasesRequest: BatchCreateTrainingPhrasesRequest$Type;
declare class BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest$Type extends MessageType<BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest>): BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest): BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest;
    internalBinaryWrite(message: BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest
 */
export declare const BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest: BatchCreateTrainingPhrasesRequest_CreateTrainingPhraseRequest$Type;
declare class BatchGetTrainingPhrasesRequest$Type extends MessageType<BatchGetTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<BatchGetTrainingPhrasesRequest>): BatchGetTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchGetTrainingPhrasesRequest): BatchGetTrainingPhrasesRequest;
    internalBinaryWrite(message: BatchGetTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchGetTrainingPhrasesRequest
 */
export declare const BatchGetTrainingPhrasesRequest: BatchGetTrainingPhrasesRequest$Type;
declare class BatchDeleteTrainingPhrasesRequest$Type extends MessageType<BatchDeleteTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteTrainingPhrasesRequest>): BatchDeleteTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteTrainingPhrasesRequest): BatchDeleteTrainingPhrasesRequest;
    internalBinaryWrite(message: BatchDeleteTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesRequest
 */
export declare const BatchDeleteTrainingPhrasesRequest: BatchDeleteTrainingPhrasesRequest$Type;
declare class BatchDeleteTrainingPhrasesResponse$Type extends MessageType<BatchDeleteTrainingPhrasesResponse> {
    constructor();
    create(value?: PartialMessage<BatchDeleteTrainingPhrasesResponse>): BatchDeleteTrainingPhrasesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteTrainingPhrasesResponse): BatchDeleteTrainingPhrasesResponse;
    internalBinaryWrite(message: BatchDeleteTrainingPhrasesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesResponse
 */
export declare const BatchDeleteTrainingPhrasesResponse: BatchDeleteTrainingPhrasesResponse$Type;
declare class BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus$Type extends MessageType<BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus> {
    constructor();
    create(value?: PartialMessage<BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus>): BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus): BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus;
    internalBinaryWrite(message: BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus
 */
export declare const BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus: BatchDeleteTrainingPhrasesResponse_DeleteTrainingPhraseStatus$Type;
declare class ListTrainingPhrasesRequest$Type extends MessageType<ListTrainingPhrasesRequest> {
    constructor();
    create(value?: PartialMessage<ListTrainingPhrasesRequest>): ListTrainingPhrasesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTrainingPhrasesRequest): ListTrainingPhrasesRequest;
    internalBinaryWrite(message: ListTrainingPhrasesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTrainingPhrasesRequest
 */
export declare const ListTrainingPhrasesRequest: ListTrainingPhrasesRequest$Type;
declare class ListTrainingPhrasesResponse$Type extends MessageType<ListTrainingPhrasesResponse> {
    constructor();
    create(value?: PartialMessage<ListTrainingPhrasesResponse>): ListTrainingPhrasesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTrainingPhrasesResponse): ListTrainingPhrasesResponse;
    internalBinaryWrite(message: ListTrainingPhrasesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTrainingPhrasesResponse
 */
export declare const ListTrainingPhrasesResponse: ListTrainingPhrasesResponse$Type;
declare class BatchResponseMessagesStatusResponse$Type extends MessageType<BatchResponseMessagesStatusResponse> {
    constructor();
    create(value?: PartialMessage<BatchResponseMessagesStatusResponse>): BatchResponseMessagesStatusResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchResponseMessagesStatusResponse): BatchResponseMessagesStatusResponse;
    internalBinaryWrite(message: BatchResponseMessagesStatusResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchResponseMessagesStatusResponse
 */
export declare const BatchResponseMessagesStatusResponse: BatchResponseMessagesStatusResponse$Type;
declare class BatchResponseMessagesStatusResponse_ResponseMessageStatus$Type extends MessageType<BatchResponseMessagesStatusResponse_ResponseMessageStatus> {
    constructor();
    create(value?: PartialMessage<BatchResponseMessagesStatusResponse_ResponseMessageStatus>): BatchResponseMessagesStatusResponse_ResponseMessageStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchResponseMessagesStatusResponse_ResponseMessageStatus): BatchResponseMessagesStatusResponse_ResponseMessageStatus;
    internalBinaryWrite(message: BatchResponseMessagesStatusResponse_ResponseMessageStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchResponseMessagesStatusResponse.ResponseMessageStatus
 */
export declare const BatchResponseMessagesStatusResponse_ResponseMessageStatus: BatchResponseMessagesStatusResponse_ResponseMessageStatus$Type;
declare class BatchCreateResponseMessagesRequest$Type extends MessageType<BatchCreateResponseMessagesRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateResponseMessagesRequest>): BatchCreateResponseMessagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateResponseMessagesRequest): BatchCreateResponseMessagesRequest;
    internalBinaryWrite(message: BatchCreateResponseMessagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateResponseMessagesRequest
 */
export declare const BatchCreateResponseMessagesRequest: BatchCreateResponseMessagesRequest$Type;
declare class BatchCreateResponseMessagesRequest_CreateResponseMessageRequest$Type extends MessageType<BatchCreateResponseMessagesRequest_CreateResponseMessageRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateResponseMessagesRequest_CreateResponseMessageRequest>): BatchCreateResponseMessagesRequest_CreateResponseMessageRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateResponseMessagesRequest_CreateResponseMessageRequest): BatchCreateResponseMessagesRequest_CreateResponseMessageRequest;
    internalBinaryWrite(message: BatchCreateResponseMessagesRequest_CreateResponseMessageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateResponseMessagesRequest.CreateResponseMessageRequest
 */
export declare const BatchCreateResponseMessagesRequest_CreateResponseMessageRequest: BatchCreateResponseMessagesRequest_CreateResponseMessageRequest$Type;
declare class BatchUpdateResponseMessagesRequest$Type extends MessageType<BatchUpdateResponseMessagesRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateResponseMessagesRequest>): BatchUpdateResponseMessagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateResponseMessagesRequest): BatchUpdateResponseMessagesRequest;
    internalBinaryWrite(message: BatchUpdateResponseMessagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateResponseMessagesRequest
 */
export declare const BatchUpdateResponseMessagesRequest: BatchUpdateResponseMessagesRequest$Type;
declare class BatchGetResponseMessagesRequest$Type extends MessageType<BatchGetResponseMessagesRequest> {
    constructor();
    create(value?: PartialMessage<BatchGetResponseMessagesRequest>): BatchGetResponseMessagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchGetResponseMessagesRequest): BatchGetResponseMessagesRequest;
    internalBinaryWrite(message: BatchGetResponseMessagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchGetResponseMessagesRequest
 */
export declare const BatchGetResponseMessagesRequest: BatchGetResponseMessagesRequest$Type;
declare class BatchDeleteResponseMessagesRequest$Type extends MessageType<BatchDeleteResponseMessagesRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteResponseMessagesRequest>): BatchDeleteResponseMessagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteResponseMessagesRequest): BatchDeleteResponseMessagesRequest;
    internalBinaryWrite(message: BatchDeleteResponseMessagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteResponseMessagesRequest
 */
export declare const BatchDeleteResponseMessagesRequest: BatchDeleteResponseMessagesRequest$Type;
declare class BatchDeleteResponseMessagesResponse$Type extends MessageType<BatchDeleteResponseMessagesResponse> {
    constructor();
    create(value?: PartialMessage<BatchDeleteResponseMessagesResponse>): BatchDeleteResponseMessagesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteResponseMessagesResponse): BatchDeleteResponseMessagesResponse;
    internalBinaryWrite(message: BatchDeleteResponseMessagesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteResponseMessagesResponse
 */
export declare const BatchDeleteResponseMessagesResponse: BatchDeleteResponseMessagesResponse$Type;
declare class BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus$Type extends MessageType<BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus> {
    constructor();
    create(value?: PartialMessage<BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus>): BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus): BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus;
    internalBinaryWrite(message: BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus
 */
export declare const BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus: BatchDeleteResponseMessagesResponse_DeleteResponseMessageStatus$Type;
declare class ListResponseMessagesRequest$Type extends MessageType<ListResponseMessagesRequest> {
    constructor();
    create(value?: PartialMessage<ListResponseMessagesRequest>): ListResponseMessagesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListResponseMessagesRequest): ListResponseMessagesRequest;
    internalBinaryWrite(message: ListResponseMessagesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListResponseMessagesRequest
 */
export declare const ListResponseMessagesRequest: ListResponseMessagesRequest$Type;
declare class ListResponseMessagesResponse$Type extends MessageType<ListResponseMessagesResponse> {
    constructor();
    create(value?: PartialMessage<ListResponseMessagesResponse>): ListResponseMessagesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListResponseMessagesResponse): ListResponseMessagesResponse;
    internalBinaryWrite(message: ListResponseMessagesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListResponseMessagesResponse
 */
export declare const ListResponseMessagesResponse: ListResponseMessagesResponse$Type;
declare class BatchParametersStatusResponse$Type extends MessageType<BatchParametersStatusResponse> {
    constructor();
    create(value?: PartialMessage<BatchParametersStatusResponse>): BatchParametersStatusResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchParametersStatusResponse): BatchParametersStatusResponse;
    internalBinaryWrite(message: BatchParametersStatusResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchParametersStatusResponse
 */
export declare const BatchParametersStatusResponse: BatchParametersStatusResponse$Type;
declare class BatchParametersStatusResponse_ParameterStatus$Type extends MessageType<BatchParametersStatusResponse_ParameterStatus> {
    constructor();
    create(value?: PartialMessage<BatchParametersStatusResponse_ParameterStatus>): BatchParametersStatusResponse_ParameterStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchParametersStatusResponse_ParameterStatus): BatchParametersStatusResponse_ParameterStatus;
    internalBinaryWrite(message: BatchParametersStatusResponse_ParameterStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchParametersStatusResponse.ParameterStatus
 */
export declare const BatchParametersStatusResponse_ParameterStatus: BatchParametersStatusResponse_ParameterStatus$Type;
declare class BatchCreateParametersRequest$Type extends MessageType<BatchCreateParametersRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateParametersRequest>): BatchCreateParametersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateParametersRequest): BatchCreateParametersRequest;
    internalBinaryWrite(message: BatchCreateParametersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateParametersRequest
 */
export declare const BatchCreateParametersRequest: BatchCreateParametersRequest$Type;
declare class BatchCreateParametersRequest_CreateParameterRequest$Type extends MessageType<BatchCreateParametersRequest_CreateParameterRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateParametersRequest_CreateParameterRequest>): BatchCreateParametersRequest_CreateParameterRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateParametersRequest_CreateParameterRequest): BatchCreateParametersRequest_CreateParameterRequest;
    internalBinaryWrite(message: BatchCreateParametersRequest_CreateParameterRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateParametersRequest.CreateParameterRequest
 */
export declare const BatchCreateParametersRequest_CreateParameterRequest: BatchCreateParametersRequest_CreateParameterRequest$Type;
declare class BatchUpdateParametersRequest$Type extends MessageType<BatchUpdateParametersRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateParametersRequest>): BatchUpdateParametersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateParametersRequest): BatchUpdateParametersRequest;
    internalBinaryWrite(message: BatchUpdateParametersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateParametersRequest
 */
export declare const BatchUpdateParametersRequest: BatchUpdateParametersRequest$Type;
declare class BatchGetParametersRequest$Type extends MessageType<BatchGetParametersRequest> {
    constructor();
    create(value?: PartialMessage<BatchGetParametersRequest>): BatchGetParametersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchGetParametersRequest): BatchGetParametersRequest;
    internalBinaryWrite(message: BatchGetParametersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchGetParametersRequest
 */
export declare const BatchGetParametersRequest: BatchGetParametersRequest$Type;
declare class BatchDeleteParametersRequest$Type extends MessageType<BatchDeleteParametersRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteParametersRequest>): BatchDeleteParametersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteParametersRequest): BatchDeleteParametersRequest;
    internalBinaryWrite(message: BatchDeleteParametersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteParametersRequest
 */
export declare const BatchDeleteParametersRequest: BatchDeleteParametersRequest$Type;
declare class BatchDeleteParametersResponse$Type extends MessageType<BatchDeleteParametersResponse> {
    constructor();
    create(value?: PartialMessage<BatchDeleteParametersResponse>): BatchDeleteParametersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteParametersResponse): BatchDeleteParametersResponse;
    internalBinaryWrite(message: BatchDeleteParametersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteParametersResponse
 */
export declare const BatchDeleteParametersResponse: BatchDeleteParametersResponse$Type;
declare class BatchDeleteParametersResponse_DeleteParameterStatus$Type extends MessageType<BatchDeleteParametersResponse_DeleteParameterStatus> {
    constructor();
    create(value?: PartialMessage<BatchDeleteParametersResponse_DeleteParameterStatus>): BatchDeleteParametersResponse_DeleteParameterStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteParametersResponse_DeleteParameterStatus): BatchDeleteParametersResponse_DeleteParameterStatus;
    internalBinaryWrite(message: BatchDeleteParametersResponse_DeleteParameterStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteParametersResponse.DeleteParameterStatus
 */
export declare const BatchDeleteParametersResponse_DeleteParameterStatus: BatchDeleteParametersResponse_DeleteParameterStatus$Type;
declare class ListParametersRequest$Type extends MessageType<ListParametersRequest> {
    constructor();
    create(value?: PartialMessage<ListParametersRequest>): ListParametersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListParametersRequest): ListParametersRequest;
    internalBinaryWrite(message: ListParametersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListParametersRequest
 */
export declare const ListParametersRequest: ListParametersRequest$Type;
declare class ListParametersResponse$Type extends MessageType<ListParametersResponse> {
    constructor();
    create(value?: PartialMessage<ListParametersResponse>): ListParametersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListParametersResponse): ListParametersResponse;
    internalBinaryWrite(message: ListParametersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListParametersResponse
 */
export declare const ListParametersResponse: ListParametersResponse$Type;
declare class ListTrainingPhrasesofIntentsWithEnrichmentRequest$Type extends MessageType<ListTrainingPhrasesofIntentsWithEnrichmentRequest> {
    constructor();
    create(value?: PartialMessage<ListTrainingPhrasesofIntentsWithEnrichmentRequest>): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTrainingPhrasesofIntentsWithEnrichmentRequest): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
    internalBinaryWrite(message: ListTrainingPhrasesofIntentsWithEnrichmentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest
 */
export declare const ListTrainingPhrasesofIntentsWithEnrichmentRequest: ListTrainingPhrasesofIntentsWithEnrichmentRequest$Type;
declare class ListTrainingPhrasesofIntentsWithEnrichmentResponse$Type extends MessageType<ListTrainingPhrasesofIntentsWithEnrichmentResponse> {
    constructor();
    create(value?: PartialMessage<ListTrainingPhrasesofIntentsWithEnrichmentResponse>): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTrainingPhrasesofIntentsWithEnrichmentResponse): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
    internalBinaryWrite(message: ListTrainingPhrasesofIntentsWithEnrichmentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse
 */
export declare const ListTrainingPhrasesofIntentsWithEnrichmentResponse: ListTrainingPhrasesofIntentsWithEnrichmentResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Intents
 */
export declare const Intents: ServiceType;
export {};
