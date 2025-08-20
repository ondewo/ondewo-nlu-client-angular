import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { SortingMode } from "./common";
import { Intent_TrainingPhrase } from "./intent";
import { Comment } from "./common";
import { EntityType } from "./entity_type";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Intent } from "./intent";
import { Intent_Message } from "./intent";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Intent_Message_Platform } from "./intent";
import { Struct } from "../../google/protobuf/struct";
import { Context } from "./context";
import { LatLng } from "../../google/type/latlng";
import { Status } from "../../google/rpc/status";
/**
 * The request to detect user's intent.
 *
 * @generated from protobuf message ondewo.nlu.DetectIntentRequest
 */
export interface DetectIntentRequest {
    /**
     * Required. The name of the session this query is sent to. Format:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;`. It's up to the API
     * caller to choose an appropriate session ID. It can be a random number or
     * some type of user identifier (preferably hashed). The length of the session
     * ID must not exceed 36 bytes.
     *
     * @generated from protobuf field: string session = 1;
     */
    session: string;
    /**
     * Optional. The parameters of this query.
     *
     * @generated from protobuf field: ondewo.nlu.QueryParameters query_params = 2;
     */
    queryParams?: QueryParameters;
    /**
     * Required. The input specification. It can be set to:
     *
     * 1.  an audio config
     *     which instructs the speech recognizer how to process the speech audio,
     *
     * 2.  a conversational query in the form of text, or
     *
     * 3.  an event that specifies which intent to trigger.
     *
     * @generated from protobuf field: ondewo.nlu.QueryInput query_input = 3;
     */
    queryInput?: QueryInput;
    /**
     * Optional. The natural language speech audio to be processed. This field
     * should be populated iff `query_input` is set to an input audio config.
     * A single request can contain up to 1 minute of speech audio data.
     *
     * @generated from protobuf field: bytes input_audio = 5;
     */
    inputAudio: Uint8Array;
}
/**
 * The message returned from the DetectIntent method.
 *
 * @generated from protobuf message ondewo.nlu.DetectIntentResponse
 */
export interface DetectIntentResponse {
    /**
     * The unique identifier of the response. It can be used to
     * locate a response in the training example set or for reporting issues.
     *
     * @generated from protobuf field: string response_id = 1;
     */
    responseId: string;
    /**
     * The results of the conversational query or event processing.
     *
     * @generated from protobuf field: ondewo.nlu.QueryResult query_result = 2;
     */
    queryResult?: QueryResult;
    /**
     * Specifies the status of the webhook request. `webhook_status`
     * is never populated in webhook requests.
     *
     * @generated from protobuf field: google.rpc.Status webhook_status = 3;
     */
    webhookStatus?: Status;
}
/**
 * Represents the parameters of the conversational query.
 *
 * @generated from protobuf message ondewo.nlu.QueryParameters
 */
export interface QueryParameters {
    /**
     * Optional. The time zone of this conversational query from the
     * [time zone database](https://www.iana.org/time-zones), e.g.,
     * America/New_York, Europe/Paris. If not provided, the time zone specified in
     * agent settings is used.
     *
     * @generated from protobuf field: string time_zone = 1;
     */
    timeZone: string;
    /**
     * Optional. The geo location of this conversational query.
     *
     * @generated from protobuf field: google.type.LatLng geo_location = 2;
     */
    geoLocation?: LatLng;
    /**
     * Optional. The collection of contexts to be activated before this query is
     * executed.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 3;
     */
    contexts: Context[];
    /**
     * Optional. Specifies whether to delete all contexts in the current session
     * before the new ones are activated.
     *
     * @generated from protobuf field: bool reset_contexts = 4;
     */
    resetContexts: boolean;
    /**
     * Optional. This field can be used to pass custom data into the webhook
     * associated with the agent. Arbitrary JSON objects are supported.
     * key:<pre>language=LanguageCode.de.value</pre>
     * key:<pre>timestamp=time.time()</pre>
     * key:<pre>source='https://ondewo.com'</pre>
     * key:<pre>configuration='config_example_123'</pre>
     *
     * @generated from protobuf field: google.protobuf.Struct payload = 6;
     */
    payload?: Struct;
    /**
     * labels associated to this request
     *
     * @generated from protobuf field: repeated string labels = 7;
     */
    labels: string[];
    /**
     * Only messages for the specified Intent.Message.Platform platforms are sent to the user in the
     * <code>DetectIntentResponse</code>
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Platform platforms = 8;
     */
    platforms: Intent_Message_Platform[];
    /**
     * Id of the account, e.g. Company Ondewo
     *
     * @generated from protobuf field: string account_id = 9;
     */
    accountId: string;
    /**
     * Id of the property of the account, e.g. Domain ondewo.com
     * This field can also be used for a customized tracking id or tag id
     *
     * @generated from protobuf field: string property_id = 10;
     */
    propertyId: string;
    /**
     * Id of the datastream of the property of the account, e.g. Subdomain sub1.ondewo.com or sub2.ondewo.com
     * This field can also be used for a customized tracking id or tag id
     *
     * @generated from protobuf field: string datastream_id = 11;
     */
    datastreamId: string;
    /**
     * Id of the the origin of the user request
     *
     * For a phone bot, this is the phone number +123456789 the user called (Note: This is not the user's phone number)
     * For a chatbot or voicebot on the web, this is the URL on which the bo, e.g. https://ondewo.com/webchat
     * For a voice assistant device, this is the device-id or the app id
     * This field can also be used for a customized tracking id or tag id
     *
     * @generated from protobuf field: string origin_id = 12;
     */
    originId: string;
    /**
     * Id of the "identified user" e.g. for a chatbot the email address or for a phone bot the phone number of the user
     * This field can also be used for a customized tracking id or tag id
     *
     * @generated from protobuf field: string identified_user_id = 13;
     */
    identifiedUserId: string;
    /**
     * transcriptions of the user input sorted by score
     *
     * @generated from protobuf field: repeated ondewo.nlu.S2tTranscription transcriptions = 14;
     */
    transcriptions: S2tTranscription[];
}
/**
 * Represents a speech-to-text transcription.
 *
 * @generated from protobuf message ondewo.nlu.S2tTranscription
 */
export interface S2tTranscription {
    /**
     * resource name of the transcription
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The transcribed text content.
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * Optional. A confidence score associated with the transcription.
     * The score indicates the level of confidence in the accuracy of the transcription.
     * It is a floating-point number, typically ranging from 0.0 (low confidence) to 1.0 (high confidence).
     *
     * @generated from protobuf field: float score = 3;
     */
    score: number;
    /**
     * Optional. The detected language of the transcription.
     * The language is represented by a string following language codes (e.g., "en" for English, "es" for Spanish).
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * the resource name of the audio file of the transcription
     *
     * @generated from protobuf field: string audio_resource_name = 5;
     */
    audioResourceName: string;
    /**
     * Optional. pipeline used for transcription. A pipeline ID. Example: "pipeline_1"
     *
     * @generated from protobuf field: string pipeline_id = 6;
     */
    pipelineId: string;
    /**
     * Optional. Duration in seconds for transcription
     *
     * @generated from protobuf field: float duration_in_s = 7;
     */
    durationInS: number;
    /**
     * Whether a speech-to-text engine or a human has transcribed the audio
     *
     * @generated from protobuf field: ondewo.nlu.TranscriptionType transcription_type = 8;
     */
    transcriptionType: TranscriptionType;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 10;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 11;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 12;
     */
    modifiedBy: string;
}
/**
 * Represents the query input. It can contain either:
 *
 * 1.  An audio config which
 *     instructs the speech recognizer how to process the speech audio.
 *
 * 2.  A conversational query in the form of text,.
 *
 * 3.  An event that specifies which intent to trigger.
 *
 * @generated from protobuf message ondewo.nlu.QueryInput
 */
export interface QueryInput {
    /**
     * @generated from protobuf oneof: input
     */
    input: {
        oneofKind: "audioConfig";
        /**
         * Instructs the speech recognizer how to process the speech audio.
         *
         * @generated from protobuf field: ondewo.nlu.InputAudioConfig audio_config = 1;
         */
        audioConfig: InputAudioConfig;
    } | {
        oneofKind: "text";
        /**
         * The natural language text to be processed.
         *
         * @generated from protobuf field: ondewo.nlu.TextInput text = 2;
         */
        text: TextInput;
    } | {
        oneofKind: "event";
        /**
         * The event to be processed.
         *
         * @generated from protobuf field: ondewo.nlu.EventInput event = 3;
         */
        event: EventInput;
    } | {
        oneofKind: undefined;
    };
    /**
     * Files as input for the detect intent request, e.g., image, document, audio, video etc.
     *
     * @generated from protobuf field: repeated ondewo.nlu.FileResource file_resources = 4;
     */
    fileResources: FileResource[];
}
/**
 * Represents the result of conversational query or event processing.
 *
 * @generated from protobuf message ondewo.nlu.QueryResult
 */
export interface QueryResult {
    /**
     * The original conversational query text:
     * - If natural language text was provided as input, `query_text` contains
     *   a copy of the input.
     * - If natural language speech audio was provided as input, `query_text`
     *   contains the speech recognition result. If speech recognizer produced
     *   multiple alternatives, a particular one is picked.
     * - If an event was provided as input, `query_text` is not set.
     *
     * @generated from protobuf field: string query_text = 1;
     */
    queryText: string;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number
     * indicates an estimated greater likelihood that the recognized words are
     * correct. The default of 0.0 is a sentinel value indicating that confidence
     * was not set.
     *
     * You should not rely on this field as it isn't guaranteed to be accurate, or
     * even set. In particular this field isn't set in Webhook calls and for
     * StreamingDetectIntent since the streaming endpoint has separate confidence
     * estimates per portion of the audio in StreamingRecognitionResult.
     *
     * @generated from protobuf field: float speech_recognition_confidence = 2;
     */
    speechRecognitionConfidence: number;
    /**
     * The action name from the matched intent.
     *
     * @generated from protobuf field: string action = 3;
     */
    action: string;
    /**
     * The collection of extracted parameters.
     *
     * @generated from protobuf field: google.protobuf.Struct parameters = 4;
     */
    parameters?: Struct;
    /**
     * This field is set to:
     * - `false` if the matched intent has required parameters and not all of
     *    the required parameter values have been collected.
     * - `true` if all required parameter values have been collected, or if the
     *    matched intent doesn't contain any required parameters.
     *
     * @generated from protobuf field: bool all_required_params_present = 5;
     */
    allRequiredParamsPresent: boolean;
    /**
     * The text to be pronounced to the user or shown on the screen.
     *
     * @generated from protobuf field: string fulfillment_text = 6;
     */
    fulfillmentText: string;
    /**
     * The collection of rich messages to present to the user.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message fulfillment_messages = 7;
     */
    fulfillmentMessages: Intent_Message[];
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `source` field returned in the webhook response.
     *
     * @generated from protobuf field: string webhook_source = 8;
     */
    webhookSource: string;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the
     * value of the `payload` field returned in the webhook response.
     *
     * @generated from protobuf field: google.protobuf.Struct webhook_payload = 9;
     */
    webhookPayload?: Struct;
    /**
     * The collection of output contexts. If applicable,
     * `output_contexts.parameters` contains entries with name
     * `<parameter name>.original` containing the original parameter values
     * before the query.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context output_contexts = 10;
     */
    outputContexts: Context[];
    /**
     * The intent that matched the conversational query. Some, not
     * all fields are filled in this message, including but not limited to:
     * `name`, `display_name` and `webhook_state`.
     *
     * @generated from protobuf field: ondewo.nlu.Intent intent = 11;
     */
    intent?: Intent;
    /**
     * The intent detection confidence. Values range from 0.0
     * (completely uncertain) to 1.0 (completely certain).
     *
     * @generated from protobuf field: float intent_detection_confidence = 12;
     */
    intentDetectionConfidence: number;
    /**
     * The user input gets pre-processed by spelling correction, stop word removal etc. This property holds
     * the string that is passed to the entity recognition and intent detection
     *
     * @generated from protobuf field: string query_text_original = 13;
     */
    queryTextOriginal: string;
    /**
     * The free-form diagnostic info. For example, this field
     * could contain webhook call latency.
     *
     * @generated from protobuf field: google.protobuf.Struct diagnostic_info = 14;
     */
    diagnosticInfo?: Struct;
    /**
     * The language that was triggered during intent detection.
     * See [Language Support](https://dialogflow.com/docs/reference/language)
     * for a list of the currently supported language codes.
     *
     * @generated from protobuf field: string language_code = 15;
     */
    languageCode: string;
    /**
     * Generated or attached files, e.g., llm generates a picture or file attachment
     *
     * @generated from protobuf field: repeated ondewo.nlu.FileResource file_resources = 16;
     */
    fileResources: FileResource[];
}
/**
 * The top-level message sent by the client to the
 * `StreamingDetectIntent` method.
 *
 * Multiple request messages should be sent in order:
 *
 * 1.  The first message must contain `session`, `query_input` plus optionally
 *     `query_params` and/or `single_utterance`. The message must not contain `input_audio`.
 *
 * 2.  If `query_input` was set to a streaming input audio config,
 *     all subsequent messages must contain only `input_audio`.
 *     Otherwise, finish the request stream.
 *
 * @generated from protobuf message ondewo.nlu.StreamingDetectIntentRequest
 */
export interface StreamingDetectIntentRequest {
    /**
     * Required. The name of the session the query is sent to.
     * Format of the session name:
     * `projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;`. It’s up to the API
     * caller to choose an appropriate &lt;session_uuid&gt;. It can be a random number or
     * some type of user identifier (preferably hashed). The length of the session
     * ID must not exceed 36 characters.
     *
     * @generated from protobuf field: string session = 1;
     */
    session: string;
    /**
     * Optional. The parameters of this query.
     *
     * @generated from protobuf field: ondewo.nlu.QueryParameters query_params = 2;
     */
    queryParams?: QueryParameters;
    /**
     * Required. The input specification. It can be set to:
     *
     * 1.  an audio config which instructs the speech recognizer how to process
     *     the speech audio,
     *
     * 2.  a conversational query in the form of text, or
     *
     * 3.  an event that specifies which intent to trigger.
     *
     * @generated from protobuf field: ondewo.nlu.QueryInput query_input = 3;
     */
    queryInput?: QueryInput;
    /**
     * Optional. If `false` (default), recognition does not cease until the
     * client closes the stream.
     * If `true`, the recognizer will detect a single spoken utterance in input
     * audio. Recognition ceases when it detects the audio's voice has
     * stopped or paused. In this case, once a detected intent is received, the
     * client should close the stream and start a new request with a new stream as
     * needed.
     * This setting is ignored when `query_input` is a piece of text or an event.
     *
     * @generated from protobuf field: bool single_utterance = 4;
     */
    singleUtterance: boolean;
    /**
     * Optional. The input audio content to be recognized. Must be sent if
     * `query_input` was set to a streaming input audio config. The complete audio
     * over all streaming messages must not exceed 1 minute.
     *
     * @generated from protobuf field: bytes input_audio = 6;
     */
    inputAudio: Uint8Array;
}
/**
 * The top-level message returned from the
 * `StreamingDetectIntent` method.
 *
 * Multiple response messages can be returned in order:
 *
 * 1.  If the input was set to streaming audio, the first one or more messages
 *     contain `recognition_result`. Each `recognition_result` represents a more
 *     complete transcript of what the user said. The last `recognition_result`
 *     has `is_final` set to `true`.
 *
 * 2.  The next message contains `response_id`, `query_result`
 *     and optionally `webhook_status` if a WebHook was called.
 *
 * @generated from protobuf message ondewo.nlu.StreamingDetectIntentResponse
 */
export interface StreamingDetectIntentResponse {
    /**
     * The unique identifier of the response. It can be used to
     * locate a response in the training example set or for reporting issues.
     *
     * @generated from protobuf field: string response_id = 1;
     */
    responseId: string;
    /**
     * The result of speech recognition.
     *
     * @generated from protobuf field: ondewo.nlu.StreamingRecognitionResult recognition_result = 2;
     */
    recognitionResult?: StreamingRecognitionResult;
    /**
     * The result of the conversational query or event processing.
     *
     * @generated from protobuf field: ondewo.nlu.QueryResult query_result = 3;
     */
    queryResult?: QueryResult;
    /**
     * Specifies the status of the webhook request.
     *
     * @generated from protobuf field: google.rpc.Status webhook_status = 4;
     */
    webhookStatus?: Status;
}
/**
 * Contains a speech recognition result corresponding to a portion of the audio
 * that is currently being processed or an indication that this is the end
 * of the single requested utterance.
 *
 * Example:
 *
 * 1.  transcript: "tube"
 *
 * 2.  transcript: "to be a"
 *
 * 3.  transcript: "to be"
 *
 * 4.  transcript: "to be or not to be"
 *     is_final: true
 *
 * 5.  transcript: " that's"
 *
 * 6.  transcript: " that is"
 *
 * 7.  recognition_event_type: `RECOGNITION_EVENT_END_OF_SINGLE_UTTERANCE`
 *
 * 8.  transcript: " that is the question"
 *     is_final: true
 *
 * Only two of the responses contain final results (#4 and #8 indicated by
 * `is_final: true`). Concatenating these generates the full transcript: "to be
 * or not to be that is the question".
 *
 * In each response we populate:
 *
 * *  for `MESSAGE_TYPE_TRANSCRIPT`: `transcript` and possibly `is_final`.
 *
 * *  for `MESSAGE_TYPE_END_OF_SINGLE_UTTERANCE`: only `event_type`.
 *
 * @generated from protobuf message ondewo.nlu.StreamingRecognitionResult
 */
export interface StreamingRecognitionResult {
    /**
     * Type of the result message.
     *
     * @generated from protobuf field: ondewo.nlu.StreamingRecognitionResult.MessageType message_type = 1;
     */
    messageType: StreamingRecognitionResult_MessageType;
    /**
     * Transcript text representing the words that the user spoke.
     * Populated if and only if `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
     *
     * @generated from protobuf field: string transcript = 2;
     */
    transcript: string;
    /**
     * The default of 0.0 is a sentinel value indicating `confidence` was not set.
     * If `false`, the `StreamingRecognitionResult` represents an
     * interim result that may change. If `true`, the recognizer will not return
     * any further hypotheses about this piece of the audio. May only be populated
     * for `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
     *
     * @generated from protobuf field: bool is_final = 3;
     */
    isFinal: boolean;
    /**
     * The Speech confidence between 0.0 and 1.0 for the current portion of audio.
     * A higher number indicates an estimated greater likelihood that the
     * recognized words are correct. The default of 0.0 is a sentinel value
     * indicating that confidence was not set.
     *
     * This field is typically only provided if `is_final` is true and you should
     * not rely on it being accurate or even set.
     *
     * @generated from protobuf field: float confidence = 4;
     */
    confidence: number;
}
/**
 * Type of the response message.
 *
 * @generated from protobuf enum ondewo.nlu.StreamingRecognitionResult.MessageType
 */
export declare enum StreamingRecognitionResult_MessageType {
    /**
     * Not specified. Should never be used.
     *
     * @generated from protobuf enum value: MESSAGE_TYPE_UNSPECIFIED = 0;
     */
    MESSAGE_TYPE_UNSPECIFIED = 0,
    /**
     * Message contains a (possibly partial) transcript.
     *
     * @generated from protobuf enum value: TRANSCRIPT = 1;
     */
    TRANSCRIPT = 1,
    /**
     * Event indicates that the server has detected the end of the user's speech
     * utterance and expects no additional speech. Therefore, the server will
     * not process additional audio (although it may subsequently return
     * additional results). The client should stop sending additional audio
     * data, half-close the gRPC connection, and wait for any additional results
     * until the server closes the gRPC connection. This message is only sent if
     * `single_utterance` was set to `true`, and is not used otherwise.
     *
     * @generated from protobuf enum value: END_OF_SINGLE_UTTERANCE = 2;
     */
    END_OF_SINGLE_UTTERANCE = 2
}
/**
 * Instructs the speech recognizer how to process the audio content.
 *
 * @generated from protobuf message ondewo.nlu.InputAudioConfig
 */
export interface InputAudioConfig {
    /**
     * Required. Audio encoding of the audio content to process.
     *
     * @generated from protobuf field: ondewo.nlu.AudioEncoding audio_encoding = 1;
     */
    audioEncoding: AudioEncoding;
    /**
     * Required. Sample rate (in Hertz) of the audio content sent in the query.
     * Refer to [Cloud Speech API documentation](/speech/docs/basics) for more
     * details.
     *
     * @generated from protobuf field: int32 sample_rate_hertz = 2;
     */
    sampleRateHertz: number;
    /**
     * Required. The language of the supplied audio. Dialogflow does not do
     * translations. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. The collection of phrase hints which are used to boost accuracy
     * of speech recognition.
     * Refer to [Cloud Speech API documentation](/speech/docs/basics#phrase-hints)
     * for more details.
     *
     * @generated from protobuf field: repeated string phrase_hints = 4;
     */
    phraseHints: string[];
}
/**
 * Represents the natural language text to be processed.
 *
 * @generated from protobuf message ondewo.nlu.TextInput
 */
export interface TextInput {
    /**
     * Required. The UTF-8 encoded natural language text to be processed.
     * Text length must not exceed 256 bytes.
     *
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * Required. The language of this conversational query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
}
/**
 * Events allow for matching intents by event name instead of the natural
 * language input. For instance, input `<event: { name: “welcome_event”,
 * parameters: { name: “Sam” } }>` can trigger a personalized welcome response.
 * The parameter `name` may be used by the agent in the response:
 * `“Hello #welcome_event.name! What can I do for you today?”`.
 *
 * @generated from protobuf message ondewo.nlu.EventInput
 */
export interface EventInput {
    /**
     * Required. The unique identifier of the event.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. The collection of parameters associated with the event.
     *
     * @generated from protobuf field: google.protobuf.Struct parameters = 2;
     */
    parameters?: Struct;
    /**
     * Required. The language of this query. See [Language
     * Support](https://dialogflow.com/docs/languages) for a list of the
     * currently supported language codes. Note that queries in the same session
     * do not necessarily need to specify the same language.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
}
/**
 * Session of a user interaction
 *
 * @generated from protobuf message ondewo.nlu.Session
 */
export interface Session {
    /**
     * The unique identifier of the session
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The list of all the steps of the session
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionStep session_steps = 2;
     */
    sessionSteps: SessionStep[];
    /**
     * session information
     *
     * @generated from protobuf field: ondewo.nlu.SessionInfo session_info = 3;
     */
    sessionInfo?: SessionInfo;
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
 * Represents the options for views of a session.
 * A session can be a sizable object. Therefore, we provide a resource view that
 * does not return all data
 *
 * @generated from protobuf enum ondewo.nlu.Session.View
 */
export declare enum Session_View {
    /**
     * Endpoints decide whether to return the full or the sparse view
     *
     * @generated from protobuf enum value: VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * All fields are populated.
     *
     * @generated from protobuf enum value: VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * Only some fields are populated in the response.
     *
     * @generated from protobuf enum value: VIEW_SPARSE = 2;
     */
    SPARSE = 2
}
/**
 * SessionStep is a single user interaction as part of a session
 *
 * @generated from protobuf message ondewo.nlu.SessionStep
 */
export interface SessionStep {
    /**
     * The unique identifier for the given review
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/sessionsteps/&lt;session_step_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The detect intent request of the session step
     *
     * @generated from protobuf field: ondewo.nlu.DetectIntentRequest detect_intent_request = 2;
     */
    detectIntentRequest?: DetectIntentRequest;
    /**
     * The detect intent response  of the session step
     *
     * @generated from protobuf field: ondewo.nlu.DetectIntentResponse detect_intent_response = 3;
     */
    detectIntentResponse?: DetectIntentResponse;
    /**
     * The contexts which were active at the beginning of this step
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 4;
     */
    contexts: Context[];
    /**
     * Timestamp of session step
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
    /**
     * audio file resources associated with the session step
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_file_resources = 10;
     */
    audioFileResources: AudioFileResource[];
}
/**
 * This message is a request to get a session step
 *
 * @generated from protobuf message ondewo.nlu.GetSessionStepRequest
 */
export interface GetSessionStepRequest {
    /**
     * The unique identifier for the given session step
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/sessionsteps/&lt;session_step_uuid&gt;
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. The mask to control which fields will be filled with data.
     * Example: path=["session_step.detect_intent_response.query_result.fulfillment_messages"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 2;
     */
    fieldMask?: FieldMask;
}
/**
 * UpdateSessionStepRequest stores a session step into the session
 *
 * @generated from protobuf message ondewo.nlu.UpdateSessionStepRequest
 */
export interface UpdateSessionStepRequest {
    /**
     * The session step to be updated
     *
     * @generated from protobuf field: ondewo.nlu.SessionStep session_step = 1;
     */
    sessionStep?: SessionStep;
    /**
     * Optional. The mask to control which fields will be updated.
     * Example: path=["session_step.detect_intent_response.query_result.fulfillment_messages"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
    /**
     * Optional. The mask to control which fields will be filled with data.
     * Example: path=["session_step.detect_intent_response.query_result.fulfillment_messages"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 3;
     */
    fieldMask?: FieldMask;
}
/**
 * This message is a request to delete a session step of a session
 *
 * @generated from protobuf message ondewo.nlu.DeleteSessionStepRequest
 */
export interface DeleteSessionStepRequest {
    /**
     * The unique identifier for the given session step
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/sessionsteps/&lt;session_step_uuid&gt;</code></pre>.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * CreateSessionStepRequest stores a session step into the session
 *
 * @generated from protobuf message ondewo.nlu.CreateSessionStepRequest
 */
export interface CreateSessionStepRequest {
    /**
     * The unique identifier for the given review
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/sessionsteps/&lt;session_step_uuid&gt;</code></pre>.
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The session step to be added
     *
     * @generated from protobuf field: ondewo.nlu.SessionStep session_step = 2;
     */
    sessionStep?: SessionStep;
    /**
     * field mask specifying what the request should return, e.g. only name, created_at etc.
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 3;
     */
    fieldMask?: FieldMask;
}
/**
 * This message is a request to list sessions
 *
 * @generated from protobuf message ondewo.nlu.ListSessionsRequest
 */
export interface ListSessionsRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * An enum specifying the amount of information to be returned per session
     *
     * @generated from protobuf field: ondewo.nlu.Session.View session_view = 2;
     */
    sessionView: Session_View;
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
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 5;
     */
    sessionFilter?: SessionFilter;
    /**
     * Optional. The mask to control which fields will be filled with data.
     * Example: path=["session_info.duration_in_s_min"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 6;
     */
    fieldMask?: FieldMask;
}
/**
 * Message used to filter sessions based on contextual information
 *
 * @generated from protobuf message ondewo.nlu.ContextFilter
 */
export interface ContextFilter {
    /**
     * name of the context
     *
     * @generated from protobuf field: string context_name = 1;
     */
    contextName: string;
    /**
     * name of the key of the context parameter
     *
     * @generated from protobuf field: string key = 2;
     */
    key: string;
    /**
     * value of the parameter
     *
     * @generated from protobuf field: string value = 3;
     */
    value: string;
    /**
     * @generated from protobuf field: ondewo.nlu.ComparisonOperator operator = 4;
     */
    operator: ComparisonOperator;
}
/**
 * This message contains a session filter
 *
 * @generated from protobuf message ondewo.nlu.SessionFilter
 */
export interface SessionFilter {
    /**
     * A SessionFilter can be used in some requests to return only sessions matching certain filter conditions.
     * All fields below are optional. Multiple fields specified at the same time are chained via AND.
     * Match only sessions with all of the following language_codes
     *
     * @generated from protobuf field: repeated string language_codes = 1;
     */
    languageCodes: string[];
    /**
     * Match only sessions during which all of the following intents were detected
     * NOTE: only name and display name fields are used for comparison
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent matched_intents = 2;
     */
    matchedIntents: Intent[];
    /**
     * Match only sessions during which all of the following entity types were recognized
     * NOTE: only name and display name fields are used for comparison
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType matched_entity_types = 3;
     */
    matchedEntityTypes: EntityType[];
    /**
     * Match only sessions where the minimum confidence for intent detection along the session falls
     * in the following range. Defaults to -1 if not set.
     *
     * @generated from protobuf field: float min_intents_confidence_min = 4;
     */
    minIntentsConfidenceMin: number;
    /**
     * Match only sessions where the minimum confidence for intent detection along the session falls
     * in the following range. Defaults to +1 if not set.
     *
     * @generated from protobuf field: float min_intents_confidence_max = 5;
     */
    minIntentsConfidenceMax: number;
    /**
     * Match only sessions where the minimum confidence for entity recognition along the session falls
     *  in the following range. Defaults to -1 if not set.
     *
     * @generated from protobuf field: float min_entity_types_confidence_min = 6;
     */
    minEntityTypesConfidenceMin: number;
    /**
     * Match only sessions where the minimum confidence for entity recognition along the session falls
     *  in the following range. Defaults to +1 if not set.
     *
     * @generated from protobuf field: float min_entity_types_confidence_max = 7;
     */
    minEntityTypesConfidenceMax: number;
    /**
     * Match only sessions whose time range falls within the following range (in UNIX epochs).
     * Defaults to 0 if not set.
     *
     * @generated from protobuf field: double earliest = 8;
     */
    earliest: number;
    /**
     * Match only sessions whose time range falls within the following range (in UNIX epochs).
     * Defaults to current epoch if not set
     *
     * @generated from protobuf field: double latest = 9;
     */
    latest: number;
    /**
     * Match only sessions for which the number of turns (interaction steps) falls in the following range
     * Defaults to 0 if not set.
     *
     * @generated from protobuf field: int32 min_number_turns = 10;
     */
    minNumberTurns: number;
    /**
     * Match only sessions for which the number of turns (interaction steps) falls in the following range
     * Defaults to MAXINT if not set.
     *
     * @generated from protobuf field: int32 max_number_turns = 11;
     */
    maxNumberTurns: number;
    /**
     * Match only session which have all of the following labels assigned
     *
     * @generated from protobuf field: repeated string labels = 12;
     */
    labels: string[];
    /**
     * Match only session which had all of the following user_ids interacting with them.
     *
     * @generated from protobuf field: repeated string user_ids = 13;
     */
    userIds: string[];
    /**
     * Match only session which have all of the following intent tags assigned
     *
     * @generated from protobuf field: repeated string intent_tags = 14;
     */
    intentTags: string[];
    /**
     * Match only sessions whose IDs are specified here
     *
     * @generated from protobuf field: repeated string session_ids = 15;
     */
    sessionIds: string[];
    /**
     * Match only sessions whose session info contains at least one step having all the contexts specified here
     * The input contexts are pre-conditions for detecting intents
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context input_contexts = 16;
     */
    inputContexts: Context[];
    /**
     * The output contexts are the result of the intent matching and track the contextual state of a conversation
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context output_contexts = 17;
     */
    outputContexts: Context[];
    /**
     * Match only sessions for which the duration in seconds are larger or equal
     *
     * @generated from protobuf field: float duration_in_s_min = 18;
     */
    durationInSMin: number;
    /**
     * Match only sessions for which the duration in seconds are smaller or equal
     *
     * @generated from protobuf field: float duration_in_s_max = 19;
     */
    durationInSMax: number;
    /**
     * Match only sessions for which the duration in minutes are larger or equal
     *
     * @generated from protobuf field: float duration_in_m_min = 20;
     */
    durationInMMin: number;
    /**
     * Match only sessions for which the duration in minutes are smaller or equal
     *
     * @generated from protobuf field: float duration_in_m_max = 21;
     */
    durationInMMax: number;
    /**
     * Match only sessions for which the duration in minutes rounded are larger or equal
     *
     * @generated from protobuf field: float duration_in_m_rounded_min = 22;
     */
    durationInMRoundedMin: number;
    /**
     * Match only sessions for which the duration in minutes rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_in_m_rounded_max = 23;
     */
    durationInMRoundedMax: number;
    /**
     * Match only sessions for which the duration in 15 seconds rounded are larger or equal
     *
     * @generated from protobuf field: float duration_interval_15s_rounded_min = 24 [json_name = "durationInterval15sRoundedMin"];
     */
    durationInterval15SRoundedMin: number;
    /**
     * Match only sessions for which the duration in 15 seconds rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_interval_15s_rounded_max = 25 [json_name = "durationInterval15sRoundedMax"];
     */
    durationInterval15SRoundedMax: number;
    /**
     * Match only sessions for which the duration in 30 seconds rounded are larger or equal
     *
     * @generated from protobuf field: float duration_interval_30s_rounded_min = 26 [json_name = "durationInterval30sRoundedMin"];
     */
    durationInterval30SRoundedMin: number;
    /**
     * Match only sessions for which the duration in 30 seconds rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_interval_30s_rounded_max = 27 [json_name = "durationInterval30sRoundedMax"];
     */
    durationInterval30SRoundedMax: number;
    /**
     * Match only sessions for which the duration in 45 seconds rounded are larger or equal
     *
     * @generated from protobuf field: float duration_interval_45s_rounded_min = 28 [json_name = "durationInterval45sRoundedMin"];
     */
    durationInterval45SRoundedMin: number;
    /**
     * Match only sessions for which the duration in 45 seconds rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_interval_45s_rounded_max = 29 [json_name = "durationInterval45sRoundedMax"];
     */
    durationInterval45SRoundedMax: number;
    /**
     * Match only sessions for which the started_time_slot_per_hour (e.g. 08:00) are larger or equal
     *
     * @generated from protobuf field: string started_time_slot_per_hour_min = 30;
     */
    startedTimeSlotPerHourMin: string;
    /**
     * Match only sessions for which the started_time_slot_per_hour (e.g. 14:00) are smaller or equal
     *
     * @generated from protobuf field: string started_time_slot_per_hour_max = 31;
     */
    startedTimeSlotPerHourMax: string;
    /**
     * Match only sessions for which the started_time_slot_per_quarter_hour (e.g. 08:00) are larger or equal
     *
     * @generated from protobuf field: string started_time_slot_per_quarter_hour_min = 32;
     */
    startedTimeSlotPerQuarterHourMin: string;
    /**
     * Match only sessions for which the started_time_slot_per_quarter_hour (e.g. 14:00) are smaller or equal
     *
     * @generated from protobuf field: string started_time_slot_per_quarter_hour_max = 33;
     */
    startedTimeSlotPerQuarterHourMax: string;
    /**
     * Match only sessions for which the started_time_slot_per_half_hour (e.g. 08:00) are larger or equal
     *
     * @generated from protobuf field: string started_time_slot_per_half_hour_min = 34;
     */
    startedTimeSlotPerHalfHourMin: string;
    /**
     * Match only sessions for which the started_time_slot_per_half_hour (e.g. 14:00) are smaller or equal
     *
     * @generated from protobuf field: string started_time_slot_per_half_hour_max = 35;
     */
    startedTimeSlotPerHalfHourMax: string;
    /**
     * Match only sessions for which the started_time_slot_per_day_phase (e.g. 08:00) are larger or equal
     *
     * @generated from protobuf field: string started_time_slot_per_day_phase_min = 36;
     */
    startedTimeSlotPerDayPhaseMin: string;
    /**
     * Match only sessions for which the started_time_slot_per_day_phase (e.g. 14:00) are smaller or equal
     *
     * @generated from protobuf field: string started_time_slot_per_day_phase_max = 37;
     */
    startedTimeSlotPerDayPhaseMax: string;
    /**
     * Match only sessions for which the started_time_slot_per_minute (e.g. 08:00) are larger or equal
     *
     * @generated from protobuf field: string started_time_slot_per_minute_min = 38;
     */
    startedTimeSlotPerMinuteMin: string;
    /**
     * Match only sessions for which the started_time_slot_per_minute (e.g. 14:00) are smaller or equal
     *
     * @generated from protobuf field: string started_time_slot_per_minute_max = 39;
     */
    startedTimeSlotPerMinuteMax: string;
    /**
     * Match only sessions for which the duration in seconds rounded are larger or equal
     *
     * @generated from protobuf field: float duration_in_s_rounded_min = 40;
     */
    durationInSRoundedMin: number;
    /**
     * Match only sessions for which the duration in seconds rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_in_s_rounded_max = 41;
     */
    durationInSRoundedMax: number;
    /**
     * Messages for each of the Intent.Message.Platform were sent to the user
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Platform platforms = 42;
     */
    platforms: Intent_Message_Platform[];
    /**
     * Ids of the account, e.g. Company Ondewo,
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string account_ids = 43;
     */
    accountIds: string[];
    /**
     * Ids of the property of the account, e.g. Domain ondewo.com
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string property_ids = 44;
     */
    propertyIds: string[];
    /**
     * Ids of the datastream of the property of the account, e.g. Subdomain sub1.ondewo.com or sub2.ondewo.com
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string datastream_ids = 45;
     */
    datastreamIds: string[];
    /**
     * Ids of the the origin of the user request
     *
     * For a phone bot, this is the phone number +123456789 the user called (Note: This is not the user's phone number)
     * For a chatbot or voicebot on the web, this is the URL on which the bo, e.g. https://ondewo.com/webchat
     * For a voice assistant device, this is the device-id or the app id
     *
     * @generated from protobuf field: repeated string origin_ids = 46;
     */
    originIds: string[];
    /**
     * Ids of the "identified user" e.g. for a chatbot the email address or for a phone bot the phone number of the user
     *
     * @generated from protobuf field: repeated string identified_user_ids = 47;
     */
    identifiedUserIds: string[];
    /**
     * Match only sessions for which the duration in 60 seconds rounded are larger or equal
     *
     * @generated from protobuf field: float duration_interval_60s_rounded_min = 48 [json_name = "durationInterval60sRoundedMin"];
     */
    durationInterval60SRoundedMin: number;
    /**
     * Match only sessions for which the duration in 60 seconds rounded are smaller or equal
     *
     * @generated from protobuf field: float duration_interval_60s_rounded_max = 49 [json_name = "durationInterval60sRoundedMax"];
     */
    durationInterval60SRoundedMax: number;
}
/**
 * This message contains information about session
 *
 * @generated from protobuf message ondewo.nlu.SessionInfo
 */
export interface SessionInfo {
    /**
     * A SessionInfo contains some general information about a session.
     *
     * This information can be returned inside a Session object for consumption by a client.
     * Or it can be used by the backend to check whether the Session matches a given SessionFilter.
     *
     * All fields below are optional. Multiple fields specified at the same time are chained
     * The language codes used in the given session.
     *
     * @generated from protobuf field: repeated string language_codes = 1;
     */
    languageCodes: string[];
    /**
     * A list of intents which have been matched
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent matched_intents = 2;
     */
    matchedIntents: Intent[];
    /**
     * A list of entity types which have been matched
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType matched_entity_types = 3;
     */
    matchedEntityTypes: EntityType[];
    /**
     * The minimum confidence for intent recognition along the session
     *
     * @generated from protobuf field: float min_intents_confidence = 4;
     */
    minIntentsConfidence: number;
    /**
     * The minimum confidence for entity recognition along the session
     *
     * @generated from protobuf field: float min_entity_types_confidence = 5;
     */
    minEntityTypesConfidence: number;
    /**
     * The earliest date of the given session (in UNIX epochs), i.e. the time of the first interaction of a user
     * in the given session
     *
     * @generated from protobuf field: double earliest = 6;
     */
    earliest: number;
    /**
     * The latest date of the given session (in UNIX epochs), i.e. the time of the last interaction of a user
     * in the given session
     *
     * @generated from protobuf field: double latest = 7;
     */
    latest: number;
    /**
     * The number of turns (interaction steps) in the given session
     *
     * @generated from protobuf field: int32 number_turns = 8;
     */
    numberTurns: number;
    /**
     * The list of labels of the given session
     *
     * @generated from protobuf field: repeated string labels = 9;
     */
    labels: string[];
    /**
     * The user_ids of the users which were interacting within the given session
     *
     * @generated from protobuf field: repeated string user_ids = 10;
     */
    userIds: string[];
    /**
     * The list of intent tags in the given session
     *
     * @generated from protobuf field: repeated string intent_tags = 11;
     */
    intentTags: string[];
    /**
     * The input contexts that are matched in the given session. The name of the context here is the short name
     * and not the full URL name including the project parent
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionInfo.ContextSteps input_context_steps = 12;
     */
    inputContextSteps: SessionInfo_ContextSteps[];
    /**
     * The output contexts that are matched in the given session. The name of the context here is the short name
     * and not the full URL name including the project parent
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionInfo.ContextSteps output_context_steps = 13;
     */
    outputContextSteps: SessionInfo_ContextSteps[];
    /**
     *  duration in seconds
     *
     * @generated from protobuf field: float duration_in_s = 14;
     */
    durationInS: number;
    /**
     * duration in minutes
     *
     * @generated from protobuf field: float duration_in_m = 15;
     */
    durationInM: number;
    /**
     * duration in minutes rounded
     *
     * @generated from protobuf field: float duration_in_m_rounded = 16;
     */
    durationInMRounded: number;
    /**
     * duration in 15 seconds intervals rounded
     *
     * @generated from protobuf field: float duration_interval_15s_rounded = 17 [json_name = "durationInterval15sRounded"];
     */
    durationInterval15SRounded: number;
    /**
     * duration in 30 seconds intervals rounded
     *
     * @generated from protobuf field: float duration_interval_30s_rounded = 18 [json_name = "durationInterval30sRounded"];
     */
    durationInterval30SRounded: number;
    /**
     * duration in 45 seconds intervals rounded
     *
     * @generated from protobuf field: float duration_interval_45s_rounded = 19 [json_name = "durationInterval45sRounded"];
     */
    durationInterval45SRounded: number;
    /**
     * started_time_slot_per_hour (e.g. 08:00)
     *
     * @generated from protobuf field: string started_time_slot_per_hour = 20;
     */
    startedTimeSlotPerHour: string;
    /**
     * started_time_slot_per_quarter_hour (e.g. 08:00)
     *
     * @generated from protobuf field: string started_time_slot_per_quarter_hour = 21;
     */
    startedTimeSlotPerQuarterHour: string;
    /**
     * started_time_slot_per_half_hour (e.g. 08:00)
     *
     * @generated from protobuf field: string started_time_slot_per_half_hour = 22;
     */
    startedTimeSlotPerHalfHour: string;
    /**
     * started_time_slot_per_day_phase (e.g. 14:00)
     *
     * @generated from protobuf field: string started_time_slot_per_day_phase = 23;
     */
    startedTimeSlotPerDayPhase: string;
    /**
     * started_time_slot_per_minute (e.g. 14:00)
     *
     * @generated from protobuf field: string started_time_slot_per_minute = 24;
     */
    startedTimeSlotPerMinute: string;
    /**
     * duration in seconds rounded
     *
     * @generated from protobuf field: float duration_in_s_rounded = 25;
     */
    durationInSRounded: number;
    /**
     * Messages for each of the Intent.Message.Platform were sent to the user
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Platform platforms = 26;
     */
    platforms: Intent_Message_Platform[];
    /**
     * Ids of the account, e.g. Company Ondewo,
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string account_ids = 27;
     */
    accountIds: string[];
    /**
     * Ids of the property of the account, e.g. Domain ondewo.com
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string property_ids = 28;
     */
    propertyIds: string[];
    /**
     * Ids of the datastream of the property of the account, e.g. Subdomain sub1.ondewo.com or sub2.ondewo.com
     * This field can also be used for customized tracking ids or tag ids
     *
     * @generated from protobuf field: repeated string datastream_ids = 29;
     */
    datastreamIds: string[];
    /**
     * Ids of the the origin of the user request
     *
     * For a phone bot, this is the phone number +123456789 the user called (Note: This is not the user's phone number)
     * For a chatbot or voicebot on the web, this is the URL on which the bo, e.g. https://ondewo.com/webchat
     * For a voice assistant device, this is the device-id or the app id
     *
     * @generated from protobuf field: repeated string origin_ids = 30;
     */
    originIds: string[];
    /**
     * Ids of the "identified user" e.g. for a chatbot the email address or for a phone bot the phone number of the user
     *
     * @generated from protobuf field: repeated string identified_user_ids = 31;
     */
    identifiedUserIds: string[];
    /**
     * duration in 60 seconds intervals rounded
     *
     * @generated from protobuf field: float duration_interval_60s_rounded = 32 [json_name = "durationInterval60sRounded"];
     */
    durationInterval60SRounded: number;
    /**
     * comments about a session
     *
     * @generated from protobuf field: repeated ondewo.nlu.Comment parent_comment = 33;
     */
    parentComment: Comment[];
}
/**
 * The list of contexts of each step collected in an outer list
 *
 * @generated from protobuf message ondewo.nlu.SessionInfo.ContextSteps
 */
export interface SessionInfo_ContextSteps {
    /**
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 1;
     */
    contexts: Context[];
}
/**
 * This message is a response including the listing of sessions
 *
 * @generated from protobuf message ondewo.nlu.ListSessionsResponse
 */
export interface ListSessionsResponse {
    /**
     * The requested sessions
     *
     * @generated from protobuf field: repeated ondewo.nlu.Session sessions = 1;
     */
    sessions: Session[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * This message is a request to get a session
 *
 * @generated from protobuf message ondewo.nlu.GetSessionRequest
 */
export interface GetSessionRequest {
    /**
     * The session to be returned
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * whether to return a full or sparse view; if unspecified full view is returned
     *
     * @generated from protobuf field: ondewo.nlu.Session.View session_view = 2;
     */
    sessionView: Session_View;
    /**
     * Optional. The mask to control which fields will be filled with data.
     * Example: path=["session_info.duration_in_s_min"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 6;
     */
    fieldMask?: FieldMask;
}
/**
 * This message is a request to create a session
 *
 * @generated from protobuf message ondewo.nlu.CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The unique UUID of a Session
     * Format: UUID Version 4, e.g. 2f59fad2-06bc-4730-9920-d3148f28f357
     *
     * @generated from protobuf field: string session_uuid = 2;
     */
    sessionUuid: string;
    /**
     * Optional. labels for the session.
     *
     * @generated from protobuf field: repeated string labels = 3;
     */
    labels: string[];
    /**
     * Optional. The collection of contexts to be activated before this query is executed.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 4;
     */
    contexts: Context[];
}
/**
 * This message is a request to delete a session
 *
 * @generated from protobuf message ondewo.nlu.DeleteSessionRequest
 */
export interface DeleteSessionRequest {
    /**
     * Required. The session to be deleted
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
}
/**
 * *** SESSION-REVIEW RELATED MESSAGES *** //
 *
 * @generated from protobuf message ondewo.nlu.CreateSessionReviewRequest
 */
export interface CreateSessionReviewRequest {
    /**
     * The unique identifier for the session under review
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Optional: The unique identifier of the parent review
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/reviews/&lt;session_review_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string parent_review_id = 2;
     */
    parentReviewId: string;
    /**
     * The reviews for all steps in the session
     *
     * @generated from protobuf field: ondewo.nlu.SessionReview session_review = 3;
     */
    sessionReview?: SessionReview;
    /**
     * @generated from protobuf field: ondewo.nlu.SessionReview.View session_review_view = 4;
     */
    sessionReviewView: SessionReview_View;
}
/**
 * This message contains a session review
 *
 * @generated from protobuf message ondewo.nlu.SessionReview
 */
export interface SessionReview {
    /**
     * The unique identifier for the given review
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/reviews/&lt;session_review_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The reviews for all steps in the session
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionReviewStep session_review_steps = 2;
     */
    sessionReviewSteps: SessionReviewStep[];
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 4;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 5;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 6;
     */
    modifiedBy: string;
}
/**
 * Represents the options for views of a session_review.
 * A session_review can be a sizable object. Therefore, we provide a resource view that
 * does not return all data
 *
 * @generated from protobuf enum ondewo.nlu.SessionReview.View
 */
export declare enum SessionReview_View {
    /**
     * Endpoints decide whether to return the full or the sparse view
     *
     * @generated from protobuf enum value: VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * All fields are populated.
     *
     * @generated from protobuf enum value: VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * Only some fields are populated in the response.
     *
     * @generated from protobuf enum value: VIEW_SPARSE = 2;
     */
    SPARSE = 2
}
/**
 * This message contains a session review step
 *
 * @generated from protobuf message ondewo.nlu.SessionReviewStep
 */
export interface SessionReviewStep {
    /**
     * The unique identifier for the given review step
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/reviews/&lt;review_uuid&gt;/sessionreviewsteps/&lt;session_review_step_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The user says with markup of the detected entity types after the preprocessing such as spelling correction,
     * stopword removal etc. has been applied.
     *
     * This string represents what has been passed to the entity recognition and intent detection algorithms.
     *
     * @generated from protobuf field: ondewo.nlu.Intent.TrainingPhrase annotated_usersays = 2;
     */
    annotatedUsersays?: Intent_TrainingPhrase;
    /**
     * The language code
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Unique detected intents ordered by descending confidence
     *
     * @generated from protobuf field: repeated ondewo.nlu.DetectedIntent detected_intents = 4;
     */
    detectedIntents: DetectedIntent[];
    /**
     * The contexts which were active at the beginning of this step
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts = 5;
     */
    contexts: Context[];
    /**
     * The output contexts of this step
     *
     * @generated from protobuf field: repeated ondewo.nlu.Context contexts_out = 6;
     */
    contextsOut: Context[];
    /**
     * User input without any pre-processing applied
     *
     * @generated from protobuf field: string query_text_original = 7;
     */
    queryTextOriginal: string;
    /**
     * Messages for each of the Intent.Message.Platform were sent to the user
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message.Platform platforms = 8;
     */
    platforms: Intent_Message_Platform[];
    /**
     * Timestamp of session review step
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 9;
     */
    timestamp?: Timestamp;
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
    /**
     * audio file resources associated with the session review step
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_file_resources = 14;
     */
    audioFileResources: AudioFileResource[];
}
/**
 * This message contains a detected intent
 *
 * @generated from protobuf message ondewo.nlu.DetectedIntent
 */
export interface DetectedIntent {
    /**
     * intent
     *
     * @generated from protobuf field: ondewo.nlu.Intent intent = 1;
     */
    intent?: Intent;
    /**
     * score of intent detection
     *
     * @generated from protobuf field: float score = 2;
     */
    score: number;
    /**
     * intent detection algorithm
     *
     * @generated from protobuf field: string algorithm = 3;
     */
    algorithm: string;
    /**
     * collection of rich messages to present to the user
     * This field is set only for the first detected intent. For the rest of the intents the messages are not
     *   resolved and the raw messages for the current language code are available in self.intent.messages
     *
     * @generated from protobuf field: repeated ondewo.nlu.Intent.Message fulfillment_messages = 4;
     */
    fulfillmentMessages: Intent_Message[];
    /**
     * This field is set to:
     * - `true` if the matched intent has required parameters and not all of
     *    the required parameter values have been collected.
     * - `false` if all required parameter values have been collected, or if the
     *    matched intent doesn't contain any required parameters.
     *
     * @generated from protobuf field: bool required_param_missing = 5;
     */
    requiredParamMissing: boolean;
}
/**
 * This message is a request to list session labels
 *
 * @generated from protobuf message ondewo.nlu.ListSessionLabelsRequest
 */
export interface ListSessionLabelsRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
}
/**
 * request to list all labels of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListSessionLabelsOfAllSessionsRequest
 */
export interface ListSessionLabelsOfAllSessionsRequest {
    /**
     * The parent for which the labels for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session labels
 *
 * @generated from protobuf message ondewo.nlu.ListSessionLabelsResponse
 */
export interface ListSessionLabelsResponse {
    /**
     * The labels of the session
     *
     * @generated from protobuf field: repeated string labels = 1;
     */
    labels: string[];
}
/**
 * request to list all language codes of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListLanguageCodesOfAllSessionsRequest
 */
export interface ListLanguageCodesOfAllSessionsRequest {
    /**
     * The parent for which the language_codes for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session language_codes
 *
 * @generated from protobuf message ondewo.nlu.ListLanguageCodesResponse
 */
export interface ListLanguageCodesResponse {
    /**
     * The language_codes of the session
     *
     * @generated from protobuf field: repeated string language_codes = 1;
     */
    languageCodes: string[];
}
/**
 * request to list all matched_intents of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest
 */
export interface ListMatchedIntentsOfAllSessionsRequest {
    /**
     * The parent for which the matched_intents for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session matched_intents
 *
 * @generated from protobuf message ondewo.nlu.ListMatchedIntentsResponse
 */
export interface ListMatchedIntentsResponse {
    /**
     * The matched_intents of the session
     *
     * @generated from protobuf field: repeated string matched_intents = 1;
     */
    matchedIntents: string[];
}
/**
 * request to list all matched_entity_types of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest
 */
export interface ListMatchedEntityTypesOfAllSessionsRequest {
    /**
     * The parent for which the matched_entity_types for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session matched_entity_types
 *
 * @generated from protobuf message ondewo.nlu.ListMatchedEntityTypesResponse
 */
export interface ListMatchedEntityTypesResponse {
    /**
     * The matched_entity_types of the session
     *
     * @generated from protobuf field: repeated string matched_entity_types = 1;
     */
    matchedEntityTypes: string[];
}
/**
 * request to list all user_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListUserIdsOfAllSessionsRequest
 */
export interface ListUserIdsOfAllSessionsRequest {
    /**
     * The parent for which the user_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session user_ids
 *
 * @generated from protobuf message ondewo.nlu.ListUserIdsResponse
 */
export interface ListUserIdsResponse {
    /**
     * The user_ids of the session
     *
     * @generated from protobuf field: repeated string user_ids = 1;
     */
    userIds: string[];
}
/**
 * request to list all identified_user_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest
 */
export interface ListIdentifiedUserIdsOfAllSessionsRequest {
    /**
     * The parent for which the identified_user_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session identified_user_ids
 *
 * @generated from protobuf message ondewo.nlu.ListIdentifiedUserIdsResponse
 */
export interface ListIdentifiedUserIdsResponse {
    /**
     * The identified_user_ids of the session
     *
     * @generated from protobuf field: repeated string identified_user_ids = 1;
     */
    identifiedUserIds: string[];
}
/**
 * request to list all tags of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListTagsOfAllSessionsRequest
 */
export interface ListTagsOfAllSessionsRequest {
    /**
     * The parent for which the tags for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session tags
 *
 * @generated from protobuf message ondewo.nlu.ListTagsResponse
 */
export interface ListTagsResponse {
    /**
     * The tags of the session
     *
     * @generated from protobuf field: repeated string tags = 1;
     */
    tags: string[];
}
/**
 * request to list all input_contexts of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListInputContextsOfAllSessionsRequest
 */
export interface ListInputContextsOfAllSessionsRequest {
    /**
     * The parent for which the input_contexts for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session input_contexts
 *
 * @generated from protobuf message ondewo.nlu.ListInputContextsResponse
 */
export interface ListInputContextsResponse {
    /**
     * The input_contexts ids of the session
     *
     * @generated from protobuf field: repeated string input_contexts = 1;
     */
    inputContexts: string[];
}
/**
 * request to list all output_contexts of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListOutputContextsOfAllSessionsRequest
 */
export interface ListOutputContextsOfAllSessionsRequest {
    /**
     * The parent for which the output_contexts for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session output_contexts
 *
 * @generated from protobuf message ondewo.nlu.ListOutputContextsResponse
 */
export interface ListOutputContextsResponse {
    /**
     * The output_contexts ids of the session
     *
     * @generated from protobuf field: repeated string output_contexts = 1;
     */
    outputContexts: string[];
}
/**
 * request to list all labels of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListPlatformsOfAllSessionsRequest
 */
export interface ListPlatformsOfAllSessionsRequest {
    /**
     * The parent for which the platforms for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session platforms
 *
 * @generated from protobuf message ondewo.nlu.ListPlatformsResponse
 */
export interface ListPlatformsResponse {
    /**
     * The platforms of the session
     *
     * @generated from protobuf field: repeated string platforms = 1;
     */
    platforms: string[];
}
/**
 * request to list all account_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListAccountIdsOfAllSessionsRequest
 */
export interface ListAccountIdsOfAllSessionsRequest {
    /**
     * The parent for which the account_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session account_ids
 *
 * @generated from protobuf message ondewo.nlu.ListAccountIdsResponse
 */
export interface ListAccountIdsResponse {
    /**
     * The account_ids of the session
     *
     * @generated from protobuf field: repeated string account_ids = 1;
     */
    accountIds: string[];
}
/**
 * request to list all property_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListPropertyIdsOfAllSessionsRequest
 */
export interface ListPropertyIdsOfAllSessionsRequest {
    /**
     * The parent for which the property_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session property_ids
 *
 * @generated from protobuf message ondewo.nlu.ListPropertyIdsResponse
 */
export interface ListPropertyIdsResponse {
    /**
     * The property_ids of the session
     *
     * @generated from protobuf field: repeated string property_ids = 1;
     */
    propertyIds: string[];
}
/**
 * request to list all datastream_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest
 */
export interface ListDatastreamIdsOfAllSessionsRequest {
    /**
     * The parent for which the datastream_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session datastream_ids
 *
 * @generated from protobuf message ondewo.nlu.ListDatastreamIdsResponse
 */
export interface ListDatastreamIdsResponse {
    /**
     * The datastream_ids of the session
     *
     * @generated from protobuf field: repeated string datastream_ids = 1;
     */
    datastreamIds: string[];
}
/**
 * request to list all origin_ids of all sessions
 *
 * @generated from protobuf message ondewo.nlu.ListOriginIdsOfAllSessionsRequest
 */
export interface ListOriginIdsOfAllSessionsRequest {
    /**
     * The parent for which the origin_ids for all sessions should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. A filter to narrow the response down to sessions of interest.
     *
     * @generated from protobuf field: ondewo.nlu.SessionFilter session_filter = 2;
     */
    sessionFilter?: SessionFilter;
}
/**
 * This message is a response of listing session origin_ids
 *
 * @generated from protobuf message ondewo.nlu.ListOriginIdsResponse
 */
export interface ListOriginIdsResponse {
    /**
     * The origin_ids of the session
     *
     * @generated from protobuf field: repeated string origin_ids = 1;
     */
    originIds: string[];
}
/**
 * This message is a request to add session labels
 *
 * @generated from protobuf message ondewo.nlu.AddSessionLabelsRequest
 */
export interface AddSessionLabelsRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The labels to add to the session
     *
     * @generated from protobuf field: repeated string labels = 2;
     */
    labels: string[];
}
/**
 * This message is a request to delete session labels
 *
 * @generated from protobuf message ondewo.nlu.DeleteSessionLabelsRequest
 */
export interface DeleteSessionLabelsRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The labels to delete from the session
     *
     * @generated from protobuf field: repeated string labels = 2;
     */
    labels: string[];
}
/**
 * This message is a request to add a comment to a session
 *
 * @generated from protobuf message ondewo.nlu.AddSessionCommentRequest
 */
export interface AddSessionCommentRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The comment to add to the session
     *
     * @generated from protobuf field: ondewo.nlu.Comment comment = 2;
     */
    comment?: Comment;
}
/**
 * This message is a request to delete a session comment
 *
 * @generated from protobuf message ondewo.nlu.DeleteSessionCommentsRequest
 */
export interface DeleteSessionCommentsRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The comment names to delete from the session
     *
     * @generated from protobuf field: repeated string comment_names = 2;
     */
    commentNames: string[];
}
/**
 * This message is a request to update a session comment
 *
 * @generated from protobuf message ondewo.nlu.UpdateSessionCommentsRequest
 */
export interface UpdateSessionCommentsRequest {
    /**
     * The id of the session
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * The comment of a session to be updated
     *
     * @generated from protobuf field: ondewo.nlu.Comment comment = 2;
     */
    comment?: Comment;
}
/**
 * This message is a request to list comments of a session
 *
 * @generated from protobuf message ondewo.nlu.ListSessionCommentsRequest
 */
export interface ListSessionCommentsRequest {
    /**
     * The unique identifier for the session for which reviews should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
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
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
}
/**
 * This message is a request to list comments of a session
 *
 * @generated from protobuf message ondewo.nlu.ListSessionCommentsResponse
 */
export interface ListSessionCommentsResponse {
    /**
     * The comments of a specific session
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/comments/&lt;comment_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated ondewo.nlu.Comment comment = 1;
     */
    comment: Comment[];
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
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
}
/**
 * This message is a request to list session reviews
 *
 * @generated from protobuf message ondewo.nlu.ListSessionReviewsRequest
 */
export interface ListSessionReviewsRequest {
    /**
     * The unique identifier for the session for which reviews should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * An enum specifying the amount of information to be returned per session review
     *
     * @generated from protobuf field: ondewo.nlu.SessionReview.View session_review_view = 2;
     */
    sessionReviewView: SessionReview_View;
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
 * This message is a response of listing session reviews
 *
 * @generated from protobuf message ondewo.nlu.ListSessionReviewsResponse
 */
export interface ListSessionReviewsResponse {
    /**
     * The requested session reviews
     *
     * @generated from protobuf field: repeated ondewo.nlu.SessionReview session_reviews = 1;
     */
    sessionReviews: SessionReview[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * This message is a request to get session review
 *
 * @generated from protobuf message ondewo.nlu.GetSessionReviewRequest
 */
export interface GetSessionReviewRequest {
    /**
     * The unique identifier of the session review to be returned
     *
     * @generated from protobuf field: string session_review_id = 1;
     */
    sessionReviewId: string;
    /**
     * @generated from protobuf field: ondewo.nlu.SessionReview.View session_review_view = 2;
     */
    sessionReviewView: SessionReview_View;
}
/**
 * This message is a request to get latest session review
 *
 * @generated from protobuf message ondewo.nlu.GetLatestSessionReviewRequest
 */
export interface GetLatestSessionReviewRequest {
    /**
     * The unique identifier of the session for which the latest review should be returned
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string session_id = 1;
     */
    sessionId: string;
    /**
     * An enum specifying the amount of information to be returned for the desired session review
     *
     * @generated from protobuf field: ondewo.nlu.SessionReview.View session_review_view = 2;
     */
    sessionReviewView: SessionReview_View;
}
/**
 * Represents a file resource that can either be an image, audio, document, or video file.
 *
 * @generated from protobuf message ondewo.nlu.FileResource
 */
export interface FileResource {
    /**
     * @generated from protobuf oneof: file_resource
     */
    fileResource: {
        oneofKind: "documentFileResource";
        /**
         * Document file resource (e.g., markdown, text, word, powerpoint, pdf, excel etc.).
         *
         * @generated from protobuf field: ondewo.nlu.DocumentFileResource document_file_resource = 1;
         */
        documentFileResource: DocumentFileResource;
    } | {
        oneofKind: "audioFileResource";
        /**
         * An audio file resource, such as a recording or sound file.
         *
         * @generated from protobuf field: ondewo.nlu.AudioFileResource audio_file_resource = 2;
         */
        audioFileResource: AudioFileResource;
    } | {
        oneofKind: "imageFileResource";
        /**
         * An image file resource, such as a JPEG, PNG, etc.
         *
         * @generated from protobuf field: ondewo.nlu.ImageFileResource image_file_resource = 3;
         */
        imageFileResource: ImageFileResource;
    } | {
        oneofKind: "videoFileResource";
        /**
         * A video file resource, such as an MP4 or AVI file.
         *
         * @generated from protobuf field: ondewo.nlu.VideoFileResource video_file_resource = 4;
         */
        videoFileResource: VideoFileResource;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Represents a document file resource (e.g., text, markdown, PDF, DOCX).
 *
 * @generated from protobuf message ondewo.nlu.DocumentFileResource
 */
export interface DocumentFileResource {
    /**
     * The unique identifier for the document file resource.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/documents/&lt;document_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The display name of the document file, which can be the file name (e.g., "report.pdf")
     * or a user-assigned name.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * The raw bytes of the document file (e.g., PDF, DOCX, TXT).
     *
     * @generated from protobuf field: bytes bytes = 3;
     */
    bytes: Uint8Array;
    /**
     * Creation date and time of the document file. This is a read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * The last modification date and time of the document file. This is a read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 5;
     */
    modifiedAt?: Timestamp;
    /**
     * The UUID of the user who created the document file.
     *
     * @generated from protobuf field: string created_by = 6;
     */
    createdBy: string;
    /**
     * The UUID of the user who last modified the document file.
     *
     * @generated from protobuf field: string modified_by = 7;
     */
    modifiedBy: string;
}
/**
 * @generated from protobuf message ondewo.nlu.ImageFileResource
 */
export interface ImageFileResource {
    /**
     * The unique identifier of the session for which the latest review should be returned
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/images/&lt;image_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * File name of the image, e.g., MyPicture.jpg, or a user assigned display name
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Bytes of the audio file
     *
     * @generated from protobuf field: bytes bytes = 3;
     */
    bytes: Uint8Array;
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
 * @generated from protobuf message ondewo.nlu.AudioFileResource
 */
export interface AudioFileResource {
    /**
     * The unique identifier of the session for which the latest review should be returned
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Bytes of the audio file
     *
     * @generated from protobuf field: bytes bytes = 2;
     */
    bytes: Uint8Array;
    /**
     * Language of the audio file
     *
     * @generated from protobuf field: string language = 3;
     */
    language: string;
    /**
     * Duration in seconds and milliseconds of the audio file
     *
     * @generated from protobuf field: float duration_in_s = 4;
     */
    durationInS: number;
    /**
     * sample rate of the audio
     *
     * @generated from protobuf field: int32 sample_rate = 5;
     */
    sampleRate: number;
    /**
     * File type of an audio resource
     *
     * @generated from protobuf field: ondewo.nlu.AudioFileResourceType audio_file_resource_type = 6;
     */
    audioFileResourceType: AudioFileResourceType;
    /**
     * transcriptions of the user input sorted by score.
     * A transcription can be from a speech-to-text system or a human
     *
     * @generated from protobuf field: repeated ondewo.nlu.S2tTranscription transcriptions = 7;
     */
    transcriptions: S2tTranscription[];
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 8;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 9;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 10;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 11;
     */
    modifiedBy: string;
    /**
     * Bytes of the audio file
     *
     * @generated from protobuf field: string display_name = 12;
     */
    displayName: string;
}
/**
 * Represents a video file resource (e.g., MP4, AVI).
 *
 * @generated from protobuf message ondewo.nlu.VideoFileResource
 */
export interface VideoFileResource {
    /**
     * The unique identifier for the video file resource.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/videos/&lt;video_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The display name of the video file, which can be a user-assigned label.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * The raw bytes representing the video file (e.g., MP4, AVI).
     *
     * @generated from protobuf field: bytes bytes = 3;
     */
    bytes: Uint8Array;
    /**
     * The duration of the video file in seconds.
     *
     * @generated from protobuf field: float duration_in_s = 4;
     */
    durationInS: number;
    /**
     * The resolution of the video (e.g., "1920x1080" for Full HD).
     *
     * @generated from protobuf field: string resolution = 5;
     */
    resolution: string;
    /**
     * The frame rate of the video (e.g., 30 fps).
     *
     * @generated from protobuf field: float frame_rate = 6;
     */
    frameRate: number;
    /**
     * Creation date and time of the video file. This is a read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * The last modification date and time of the video file. This is a read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 8;
     */
    modifiedAt?: Timestamp;
    /**
     * The UUID of the user who created the video file.
     *
     * @generated from protobuf field: string created_by = 9;
     */
    createdBy: string;
    /**
     * The UUID of the user who last modified the video file.
     *
     * @generated from protobuf field: string modified_by = 10;
     */
    modifiedBy: string;
}
/**
 * This message is a request to get audio files specified
 *
 * @generated from protobuf message ondewo.nlu.GetAudioFilesRequest
 */
export interface GetAudioFilesRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The unique identifier of the audio file of the specific session
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 2;
     */
    names: string[];
    /**
     * Represents the options for views of resources
     *
     * @generated from protobuf field: ondewo.nlu.ResourceView resource_view = 3;
     */
    resourceView: ResourceView;
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
    /**
     * sorting mode
     *
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 5;
     */
    sortingMode: SortingMode;
}
/**
 * This message is a request to retrieve the audio files specified
 *
 * @generated from protobuf message ondewo.nlu.GetAudioFilesResponse
 */
export interface GetAudioFilesResponse {
    /**
     * The unique identifier of the audio file for a specific session.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_files = 1;
     */
    audioFiles: AudioFileResource[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 3;
     */
    nextPageToken: string;
}
/**
 * This message is a request to add the audio files specified
 *
 * @generated from protobuf message ondewo.nlu.AddAudioFilesRequest
 */
export interface AddAudioFilesRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The unique identifier of the session for which the audio files should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/&lt</code></pre>
     *
     * @generated from protobuf field: string session_id = 2;
     */
    sessionId: string;
    /**
     * AudioFileResources to be added
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_file_resources = 3;
     */
    audioFileResources: AudioFileResource[];
    /**
     * The unique identifier of the session step for which the audio files should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/sessionsteps/&lt;session_step_uuid&gt;/&lt</code></pre>
     *
     * @generated from protobuf field: string session_step_id = 4;
     */
    sessionStepId: string;
}
/**
 * This message is a request to add the audio files specified
 *
 * @generated from protobuf message ondewo.nlu.AddAudioFilesResponse
 */
export interface AddAudioFilesResponse {
    /**
     * The unique identifier of the audio files for a specific session.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_file_resources = 1;
     */
    audioFileResources: AudioFileResource[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
/**
 * This message is a request to the delete audio files specified
 *
 * @generated from protobuf message ondewo.nlu.DeleteAudioFilesRequest
 */
export interface DeleteAudioFilesRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The unique identifier of the audio file of the specific session
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 2;
     */
    names: string[];
}
/**
 * This message is a request to the delete audio files specified
 *
 * @generated from protobuf message ondewo.nlu.DeleteAudioFilesResponse
 */
export interface DeleteAudioFilesResponse {
    /**
     * The unique identifier of the audio file of the specific session
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
/**
 * This message is a request to list all available audio files of a session
 *
 * @generated from protobuf message ondewo.nlu.ListAudioFilesRequest
 */
export interface ListAudioFilesRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional: The unique identifier of the session for which the audio files should be listed
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/&lt</code></pre>
     *
     * @generated from protobuf field: string session_id = 2;
     */
    sessionId: string;
    /**
     * Represents the options for views of resources
     *
     * @generated from protobuf field: ondewo.nlu.ResourceView resource_view = 3;
     */
    resourceView: ResourceView;
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
    /**
     * sorting mode
     *
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 5;
     */
    sortingMode: SortingMode;
}
/**
 * This message is a request to retrieve the audio files specified
 *
 * @generated from protobuf message ondewo.nlu.ListAudioFilesResponse
 */
export interface ListAudioFilesResponse {
    /**
     * The requested audio files .
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/audios/&lt;audio_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: repeated ondewo.nlu.AudioFileResource audio_files = 1;
     */
    audioFiles: AudioFileResource[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
/**
 * This message is a request to get one one file combining all audios of a specific session
 *
 * @generated from protobuf message ondewo.nlu.GetAudioFileOfSessionRequest
 */
export interface GetAudioFileOfSessionRequest {
    /**
     * Required. The project of this agent.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The unique identifier of the session for which the audio files should be combined
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/sessions/&lt;session_uuid&gt;/&lt</code></pre>
     *
     * @generated from protobuf field: string session_id = 2;
     */
    sessionId: string;
    /**
     * Represents the options for views of resources
     *
     * @generated from protobuf field: ondewo.nlu.ResourceView resource_view = 3;
     */
    resourceView: ResourceView;
}
/**
 * @generated from protobuf enum ondewo.nlu.TranscriptionType
 */
export declare enum TranscriptionType {
    /**
     * unspecified
     *
     * @generated from protobuf enum value: TRANSCRIPTION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Automatic transcription by a speech to text system
     *
     * @generated from protobuf enum value: TRANSCRIPTION_TYPE_S2T = 1;
     */
    S2T = 1,
    /**
     * Manual human transcription
     *
     * @generated from protobuf enum value: TRANSCRIPTION_TYPE_HUMAN = 2;
     */
    HUMAN = 2
}
/**
 * Audio encoding of the audio content sent in the conversational query request.
 * Refer to the [Cloud Speech API documentation](/speech/docs/basics) for more
 * details.
 *
 * @generated from protobuf enum ondewo.nlu.AudioEncoding
 */
export declare enum AudioEncoding {
    /**
     * Not specified.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Uncompressed 16-bit signed little-endian samples (Linear PCM).
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_LINEAR_16 = 1;
     */
    LINEAR_16 = 1,
    /**
     * [`FLAC`](https://xiph.org/flac/documentation.html) (Free Lossless Audio
     * Codec) is the recommended encoding because it is lossless (therefore
     * recognition is not compromised) and requires only about half the
     * bandwidth of `LINEAR16`. `FLAC` stream encoding supports 16-bit and
     * 24-bit samples, however, not all fields in `STREAMINFO` are supported.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_FLAC = 2;
     */
    FLAC = 2,
    /**
     * 8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_MULAW = 3;
     */
    MULAW = 3,
    /**
     * Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_AMR = 4;
     */
    AMR = 4,
    /**
     * Adaptive Multi-Rate wideband codec. `sample_rate_hertz` must be 16000.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_AMR_WB = 5;
     */
    AMR_WB = 5,
    /**
     * Opus encoded audio frames in Ogg container
     * ([OggOpus](https://wiki.xiph.org/OggOpus)).
     * `sample_rate_hertz` must be 16000.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_OGG_OPUS = 6;
     */
    OGG_OPUS = 6,
    /**
     * Although the use of lossy encodings is not recommended, if a very low
     * bitrate encoding is required, `OGG_OPUS` is highly preferred over
     * Speex encoding. The [Speex](https://speex.org/) encoding supported by
     * Dialogflow API has a header byte in each block, as in MIME type
     * `audio/x-speex-with-header-byte`.
     * It is a variant of the RTP Speex encoding defined in
     * [RFC 5574](https://tools.ietf.org/html/rfc5574).
     * The stream is a sequence of blocks, one block per RTP packet. Each block
     * starts with a byte containing the length of the block, in bytes, followed
     * by one or more frames of Speex data, padded to an integral number of
     * bytes (octets) as specified in RFC 5574. In other words, each RTP header
     * is replaced with a single byte containing the block length. Only Speex
     * wideband is supported. `sample_rate_hertz` must be 16000.
     *
     * @generated from protobuf enum value: AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7;
     */
    SPEEX_WITH_HEADER_BYTE = 7
}
/**
 * Type of operator to compare
 *
 * @generated from protobuf enum ondewo.nlu.ComparisonOperator
 */
export declare enum ComparisonOperator {
    /**
     * equal operator
     *
     * @generated from protobuf enum value: EQUAL = 0;
     */
    EQUAL = 0,
    /**
     * greater operator, e.g. for numbers, dates, and strings
     *
     * @generated from protobuf enum value: GREATER = 1;
     */
    GREATER = 1,
    /**
     * greater or equal operator, e.g. for numbers, dates, and strings
     *
     * @generated from protobuf enum value: GREATER_OR_EQUAL = 2;
     */
    GREATER_OR_EQUAL = 2,
    /**
     * less or equal operator, e.g. for numbers, dates, and strings
     *
     * @generated from protobuf enum value: LESS_OR_EQUAL = 3;
     */
    LESS_OR_EQUAL = 3,
    /**
     * contains operator, e.g. part of string, or one of the elements in an iterable such as set or list
     *
     * @generated from protobuf enum value: CONTAINS = 4;
     */
    CONTAINS = 4,
    /**
     * starts with operator for string comparison only
     *
     * @generated from protobuf enum value: STARTS_WITH = 5;
     */
    STARTS_WITH = 5,
    /**
     * ends with operator for string comparison only
     *
     * @generated from protobuf enum value: ENDS_WITH = 6;
     */
    ENDS_WITH = 6
}
/**
 * Represents the options for views of resources.
 *
 * @generated from protobuf enum ondewo.nlu.ResourceView
 */
export declare enum ResourceView {
    /**
     * Resource view not specified
     *
     * @generated from protobuf enum value: RESOURCE_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * All fields are populated including bytes e.g., for audio files
     *
     * @generated from protobuf enum value: RESOURCE_VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * Fields include metadata but no bytes
     *
     * @generated from protobuf enum value: RESOURCE_VIEW_PARTIAL = 2;
     */
    PARTIAL = 2,
    /**
     * Minimum view only without bytes and metadata
     *
     * @generated from protobuf enum value: RESOURCE_VIEW_MINIMUM = 3;
     */
    MINIMUM = 3
}
/**
 * File type of an audio resource
 *
 * @generated from protobuf enum ondewo.nlu.AudioFileResourceType
 */
export declare enum AudioFileResourceType {
    /**
     * Unspecified audio file type
     *
     * @generated from protobuf enum value: AUDIO_FILE_RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Audio file from text to speech
     *
     * @generated from protobuf enum value: AUDIO_FILE_RESOURCE_TYPE_T2S = 1;
     */
    T2S = 1,
    /**
     * Audio file from speech to text
     *
     * @generated from protobuf enum value: AUDIO_FILE_RESOURCE_TYPE_S2T = 2;
     */
    S2T = 2,
    /**
     * Audio file from speech to text and text to speech
     *
     * @generated from protobuf enum value: AUDIO_FILE_RESOURCE_TYPE_S2T_AND_T2S = 3;
     */
    S2T_AND_T2S = 3
}
declare class DetectIntentRequest$Type extends MessageType<DetectIntentRequest> {
    constructor();
    create(value?: PartialMessage<DetectIntentRequest>): DetectIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DetectIntentRequest): DetectIntentRequest;
    internalBinaryWrite(message: DetectIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DetectIntentRequest
 */
export declare const DetectIntentRequest: DetectIntentRequest$Type;
declare class DetectIntentResponse$Type extends MessageType<DetectIntentResponse> {
    constructor();
    create(value?: PartialMessage<DetectIntentResponse>): DetectIntentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DetectIntentResponse): DetectIntentResponse;
    internalBinaryWrite(message: DetectIntentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DetectIntentResponse
 */
export declare const DetectIntentResponse: DetectIntentResponse$Type;
declare class QueryParameters$Type extends MessageType<QueryParameters> {
    constructor();
    create(value?: PartialMessage<QueryParameters>): QueryParameters;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParameters): QueryParameters;
    internalBinaryWrite(message: QueryParameters, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.QueryParameters
 */
export declare const QueryParameters: QueryParameters$Type;
declare class S2tTranscription$Type extends MessageType<S2tTranscription> {
    constructor();
    create(value?: PartialMessage<S2tTranscription>): S2tTranscription;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: S2tTranscription): S2tTranscription;
    internalBinaryWrite(message: S2tTranscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.S2tTranscription
 */
export declare const S2tTranscription: S2tTranscription$Type;
declare class QueryInput$Type extends MessageType<QueryInput> {
    constructor();
    create(value?: PartialMessage<QueryInput>): QueryInput;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryInput): QueryInput;
    internalBinaryWrite(message: QueryInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.QueryInput
 */
export declare const QueryInput: QueryInput$Type;
declare class QueryResult$Type extends MessageType<QueryResult> {
    constructor();
    create(value?: PartialMessage<QueryResult>): QueryResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResult): QueryResult;
    internalBinaryWrite(message: QueryResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.QueryResult
 */
export declare const QueryResult: QueryResult$Type;
declare class StreamingDetectIntentRequest$Type extends MessageType<StreamingDetectIntentRequest> {
    constructor();
    create(value?: PartialMessage<StreamingDetectIntentRequest>): StreamingDetectIntentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamingDetectIntentRequest): StreamingDetectIntentRequest;
    internalBinaryWrite(message: StreamingDetectIntentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StreamingDetectIntentRequest
 */
export declare const StreamingDetectIntentRequest: StreamingDetectIntentRequest$Type;
declare class StreamingDetectIntentResponse$Type extends MessageType<StreamingDetectIntentResponse> {
    constructor();
    create(value?: PartialMessage<StreamingDetectIntentResponse>): StreamingDetectIntentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamingDetectIntentResponse): StreamingDetectIntentResponse;
    internalBinaryWrite(message: StreamingDetectIntentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StreamingDetectIntentResponse
 */
export declare const StreamingDetectIntentResponse: StreamingDetectIntentResponse$Type;
declare class StreamingRecognitionResult$Type extends MessageType<StreamingRecognitionResult> {
    constructor();
    create(value?: PartialMessage<StreamingRecognitionResult>): StreamingRecognitionResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamingRecognitionResult): StreamingRecognitionResult;
    internalBinaryWrite(message: StreamingRecognitionResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StreamingRecognitionResult
 */
export declare const StreamingRecognitionResult: StreamingRecognitionResult$Type;
declare class InputAudioConfig$Type extends MessageType<InputAudioConfig> {
    constructor();
    create(value?: PartialMessage<InputAudioConfig>): InputAudioConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InputAudioConfig): InputAudioConfig;
    internalBinaryWrite(message: InputAudioConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.InputAudioConfig
 */
export declare const InputAudioConfig: InputAudioConfig$Type;
declare class TextInput$Type extends MessageType<TextInput> {
    constructor();
    create(value?: PartialMessage<TextInput>): TextInput;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TextInput): TextInput;
    internalBinaryWrite(message: TextInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.TextInput
 */
export declare const TextInput: TextInput$Type;
declare class EventInput$Type extends MessageType<EventInput> {
    constructor();
    create(value?: PartialMessage<EventInput>): EventInput;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EventInput): EventInput;
    internalBinaryWrite(message: EventInput, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EventInput
 */
export declare const EventInput: EventInput$Type;
declare class Session$Type extends MessageType<Session> {
    constructor();
    create(value?: PartialMessage<Session>): Session;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Session): Session;
    internalBinaryWrite(message: Session, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Session
 */
export declare const Session: Session$Type;
declare class SessionStep$Type extends MessageType<SessionStep> {
    constructor();
    create(value?: PartialMessage<SessionStep>): SessionStep;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionStep): SessionStep;
    internalBinaryWrite(message: SessionStep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionStep
 */
export declare const SessionStep: SessionStep$Type;
declare class GetSessionStepRequest$Type extends MessageType<GetSessionStepRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionStepRequest>): GetSessionStepRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionStepRequest): GetSessionStepRequest;
    internalBinaryWrite(message: GetSessionStepRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionStepRequest
 */
export declare const GetSessionStepRequest: GetSessionStepRequest$Type;
declare class UpdateSessionStepRequest$Type extends MessageType<UpdateSessionStepRequest> {
    constructor();
    create(value?: PartialMessage<UpdateSessionStepRequest>): UpdateSessionStepRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSessionStepRequest): UpdateSessionStepRequest;
    internalBinaryWrite(message: UpdateSessionStepRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateSessionStepRequest
 */
export declare const UpdateSessionStepRequest: UpdateSessionStepRequest$Type;
declare class DeleteSessionStepRequest$Type extends MessageType<DeleteSessionStepRequest> {
    constructor();
    create(value?: PartialMessage<DeleteSessionStepRequest>): DeleteSessionStepRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteSessionStepRequest): DeleteSessionStepRequest;
    internalBinaryWrite(message: DeleteSessionStepRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteSessionStepRequest
 */
export declare const DeleteSessionStepRequest: DeleteSessionStepRequest$Type;
declare class CreateSessionStepRequest$Type extends MessageType<CreateSessionStepRequest> {
    constructor();
    create(value?: PartialMessage<CreateSessionStepRequest>): CreateSessionStepRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateSessionStepRequest): CreateSessionStepRequest;
    internalBinaryWrite(message: CreateSessionStepRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateSessionStepRequest
 */
export declare const CreateSessionStepRequest: CreateSessionStepRequest$Type;
declare class ListSessionsRequest$Type extends MessageType<ListSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionsRequest>): ListSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionsRequest): ListSessionsRequest;
    internalBinaryWrite(message: ListSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionsRequest
 */
export declare const ListSessionsRequest: ListSessionsRequest$Type;
declare class ContextFilter$Type extends MessageType<ContextFilter> {
    constructor();
    create(value?: PartialMessage<ContextFilter>): ContextFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContextFilter): ContextFilter;
    internalBinaryWrite(message: ContextFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ContextFilter
 */
export declare const ContextFilter: ContextFilter$Type;
declare class SessionFilter$Type extends MessageType<SessionFilter> {
    constructor();
    create(value?: PartialMessage<SessionFilter>): SessionFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionFilter): SessionFilter;
    internalBinaryWrite(message: SessionFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionFilter
 */
export declare const SessionFilter: SessionFilter$Type;
declare class SessionInfo$Type extends MessageType<SessionInfo> {
    constructor();
    create(value?: PartialMessage<SessionInfo>): SessionInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionInfo): SessionInfo;
    internalBinaryWrite(message: SessionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionInfo
 */
export declare const SessionInfo: SessionInfo$Type;
declare class SessionInfo_ContextSteps$Type extends MessageType<SessionInfo_ContextSteps> {
    constructor();
    create(value?: PartialMessage<SessionInfo_ContextSteps>): SessionInfo_ContextSteps;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionInfo_ContextSteps): SessionInfo_ContextSteps;
    internalBinaryWrite(message: SessionInfo_ContextSteps, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionInfo.ContextSteps
 */
export declare const SessionInfo_ContextSteps: SessionInfo_ContextSteps$Type;
declare class ListSessionsResponse$Type extends MessageType<ListSessionsResponse> {
    constructor();
    create(value?: PartialMessage<ListSessionsResponse>): ListSessionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionsResponse): ListSessionsResponse;
    internalBinaryWrite(message: ListSessionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionsResponse
 */
export declare const ListSessionsResponse: ListSessionsResponse$Type;
declare class GetSessionRequest$Type extends MessageType<GetSessionRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionRequest>): GetSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionRequest): GetSessionRequest;
    internalBinaryWrite(message: GetSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionRequest
 */
export declare const GetSessionRequest: GetSessionRequest$Type;
declare class CreateSessionRequest$Type extends MessageType<CreateSessionRequest> {
    constructor();
    create(value?: PartialMessage<CreateSessionRequest>): CreateSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateSessionRequest): CreateSessionRequest;
    internalBinaryWrite(message: CreateSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateSessionRequest
 */
export declare const CreateSessionRequest: CreateSessionRequest$Type;
declare class DeleteSessionRequest$Type extends MessageType<DeleteSessionRequest> {
    constructor();
    create(value?: PartialMessage<DeleteSessionRequest>): DeleteSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteSessionRequest): DeleteSessionRequest;
    internalBinaryWrite(message: DeleteSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteSessionRequest
 */
export declare const DeleteSessionRequest: DeleteSessionRequest$Type;
declare class CreateSessionReviewRequest$Type extends MessageType<CreateSessionReviewRequest> {
    constructor();
    create(value?: PartialMessage<CreateSessionReviewRequest>): CreateSessionReviewRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateSessionReviewRequest): CreateSessionReviewRequest;
    internalBinaryWrite(message: CreateSessionReviewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateSessionReviewRequest
 */
export declare const CreateSessionReviewRequest: CreateSessionReviewRequest$Type;
declare class SessionReview$Type extends MessageType<SessionReview> {
    constructor();
    create(value?: PartialMessage<SessionReview>): SessionReview;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionReview): SessionReview;
    internalBinaryWrite(message: SessionReview, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionReview
 */
export declare const SessionReview: SessionReview$Type;
declare class SessionReviewStep$Type extends MessageType<SessionReviewStep> {
    constructor();
    create(value?: PartialMessage<SessionReviewStep>): SessionReviewStep;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionReviewStep): SessionReviewStep;
    internalBinaryWrite(message: SessionReviewStep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SessionReviewStep
 */
export declare const SessionReviewStep: SessionReviewStep$Type;
declare class DetectedIntent$Type extends MessageType<DetectedIntent> {
    constructor();
    create(value?: PartialMessage<DetectedIntent>): DetectedIntent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DetectedIntent): DetectedIntent;
    internalBinaryWrite(message: DetectedIntent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DetectedIntent
 */
export declare const DetectedIntent: DetectedIntent$Type;
declare class ListSessionLabelsRequest$Type extends MessageType<ListSessionLabelsRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionLabelsRequest>): ListSessionLabelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionLabelsRequest): ListSessionLabelsRequest;
    internalBinaryWrite(message: ListSessionLabelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionLabelsRequest
 */
export declare const ListSessionLabelsRequest: ListSessionLabelsRequest$Type;
declare class ListSessionLabelsOfAllSessionsRequest$Type extends MessageType<ListSessionLabelsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionLabelsOfAllSessionsRequest>): ListSessionLabelsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionLabelsOfAllSessionsRequest): ListSessionLabelsOfAllSessionsRequest;
    internalBinaryWrite(message: ListSessionLabelsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionLabelsOfAllSessionsRequest
 */
export declare const ListSessionLabelsOfAllSessionsRequest: ListSessionLabelsOfAllSessionsRequest$Type;
declare class ListSessionLabelsResponse$Type extends MessageType<ListSessionLabelsResponse> {
    constructor();
    create(value?: PartialMessage<ListSessionLabelsResponse>): ListSessionLabelsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionLabelsResponse): ListSessionLabelsResponse;
    internalBinaryWrite(message: ListSessionLabelsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionLabelsResponse
 */
export declare const ListSessionLabelsResponse: ListSessionLabelsResponse$Type;
declare class ListLanguageCodesOfAllSessionsRequest$Type extends MessageType<ListLanguageCodesOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListLanguageCodesOfAllSessionsRequest>): ListLanguageCodesOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListLanguageCodesOfAllSessionsRequest): ListLanguageCodesOfAllSessionsRequest;
    internalBinaryWrite(message: ListLanguageCodesOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListLanguageCodesOfAllSessionsRequest
 */
export declare const ListLanguageCodesOfAllSessionsRequest: ListLanguageCodesOfAllSessionsRequest$Type;
declare class ListLanguageCodesResponse$Type extends MessageType<ListLanguageCodesResponse> {
    constructor();
    create(value?: PartialMessage<ListLanguageCodesResponse>): ListLanguageCodesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListLanguageCodesResponse): ListLanguageCodesResponse;
    internalBinaryWrite(message: ListLanguageCodesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListLanguageCodesResponse
 */
export declare const ListLanguageCodesResponse: ListLanguageCodesResponse$Type;
declare class ListMatchedIntentsOfAllSessionsRequest$Type extends MessageType<ListMatchedIntentsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListMatchedIntentsOfAllSessionsRequest>): ListMatchedIntentsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMatchedIntentsOfAllSessionsRequest): ListMatchedIntentsOfAllSessionsRequest;
    internalBinaryWrite(message: ListMatchedIntentsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest
 */
export declare const ListMatchedIntentsOfAllSessionsRequest: ListMatchedIntentsOfAllSessionsRequest$Type;
declare class ListMatchedIntentsResponse$Type extends MessageType<ListMatchedIntentsResponse> {
    constructor();
    create(value?: PartialMessage<ListMatchedIntentsResponse>): ListMatchedIntentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMatchedIntentsResponse): ListMatchedIntentsResponse;
    internalBinaryWrite(message: ListMatchedIntentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListMatchedIntentsResponse
 */
export declare const ListMatchedIntentsResponse: ListMatchedIntentsResponse$Type;
declare class ListMatchedEntityTypesOfAllSessionsRequest$Type extends MessageType<ListMatchedEntityTypesOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListMatchedEntityTypesOfAllSessionsRequest>): ListMatchedEntityTypesOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMatchedEntityTypesOfAllSessionsRequest): ListMatchedEntityTypesOfAllSessionsRequest;
    internalBinaryWrite(message: ListMatchedEntityTypesOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest
 */
export declare const ListMatchedEntityTypesOfAllSessionsRequest: ListMatchedEntityTypesOfAllSessionsRequest$Type;
declare class ListMatchedEntityTypesResponse$Type extends MessageType<ListMatchedEntityTypesResponse> {
    constructor();
    create(value?: PartialMessage<ListMatchedEntityTypesResponse>): ListMatchedEntityTypesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListMatchedEntityTypesResponse): ListMatchedEntityTypesResponse;
    internalBinaryWrite(message: ListMatchedEntityTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListMatchedEntityTypesResponse
 */
export declare const ListMatchedEntityTypesResponse: ListMatchedEntityTypesResponse$Type;
declare class ListUserIdsOfAllSessionsRequest$Type extends MessageType<ListUserIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListUserIdsOfAllSessionsRequest>): ListUserIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUserIdsOfAllSessionsRequest): ListUserIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListUserIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUserIdsOfAllSessionsRequest
 */
export declare const ListUserIdsOfAllSessionsRequest: ListUserIdsOfAllSessionsRequest$Type;
declare class ListUserIdsResponse$Type extends MessageType<ListUserIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListUserIdsResponse>): ListUserIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUserIdsResponse): ListUserIdsResponse;
    internalBinaryWrite(message: ListUserIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUserIdsResponse
 */
export declare const ListUserIdsResponse: ListUserIdsResponse$Type;
declare class ListIdentifiedUserIdsOfAllSessionsRequest$Type extends MessageType<ListIdentifiedUserIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListIdentifiedUserIdsOfAllSessionsRequest>): ListIdentifiedUserIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListIdentifiedUserIdsOfAllSessionsRequest): ListIdentifiedUserIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListIdentifiedUserIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest
 */
export declare const ListIdentifiedUserIdsOfAllSessionsRequest: ListIdentifiedUserIdsOfAllSessionsRequest$Type;
declare class ListIdentifiedUserIdsResponse$Type extends MessageType<ListIdentifiedUserIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListIdentifiedUserIdsResponse>): ListIdentifiedUserIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListIdentifiedUserIdsResponse): ListIdentifiedUserIdsResponse;
    internalBinaryWrite(message: ListIdentifiedUserIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListIdentifiedUserIdsResponse
 */
export declare const ListIdentifiedUserIdsResponse: ListIdentifiedUserIdsResponse$Type;
declare class ListTagsOfAllSessionsRequest$Type extends MessageType<ListTagsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListTagsOfAllSessionsRequest>): ListTagsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTagsOfAllSessionsRequest): ListTagsOfAllSessionsRequest;
    internalBinaryWrite(message: ListTagsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTagsOfAllSessionsRequest
 */
export declare const ListTagsOfAllSessionsRequest: ListTagsOfAllSessionsRequest$Type;
declare class ListTagsResponse$Type extends MessageType<ListTagsResponse> {
    constructor();
    create(value?: PartialMessage<ListTagsResponse>): ListTagsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTagsResponse): ListTagsResponse;
    internalBinaryWrite(message: ListTagsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListTagsResponse
 */
export declare const ListTagsResponse: ListTagsResponse$Type;
declare class ListInputContextsOfAllSessionsRequest$Type extends MessageType<ListInputContextsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListInputContextsOfAllSessionsRequest>): ListInputContextsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListInputContextsOfAllSessionsRequest): ListInputContextsOfAllSessionsRequest;
    internalBinaryWrite(message: ListInputContextsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListInputContextsOfAllSessionsRequest
 */
export declare const ListInputContextsOfAllSessionsRequest: ListInputContextsOfAllSessionsRequest$Type;
declare class ListInputContextsResponse$Type extends MessageType<ListInputContextsResponse> {
    constructor();
    create(value?: PartialMessage<ListInputContextsResponse>): ListInputContextsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListInputContextsResponse): ListInputContextsResponse;
    internalBinaryWrite(message: ListInputContextsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListInputContextsResponse
 */
export declare const ListInputContextsResponse: ListInputContextsResponse$Type;
declare class ListOutputContextsOfAllSessionsRequest$Type extends MessageType<ListOutputContextsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListOutputContextsOfAllSessionsRequest>): ListOutputContextsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOutputContextsOfAllSessionsRequest): ListOutputContextsOfAllSessionsRequest;
    internalBinaryWrite(message: ListOutputContextsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOutputContextsOfAllSessionsRequest
 */
export declare const ListOutputContextsOfAllSessionsRequest: ListOutputContextsOfAllSessionsRequest$Type;
declare class ListOutputContextsResponse$Type extends MessageType<ListOutputContextsResponse> {
    constructor();
    create(value?: PartialMessage<ListOutputContextsResponse>): ListOutputContextsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOutputContextsResponse): ListOutputContextsResponse;
    internalBinaryWrite(message: ListOutputContextsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOutputContextsResponse
 */
export declare const ListOutputContextsResponse: ListOutputContextsResponse$Type;
declare class ListPlatformsOfAllSessionsRequest$Type extends MessageType<ListPlatformsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListPlatformsOfAllSessionsRequest>): ListPlatformsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPlatformsOfAllSessionsRequest): ListPlatformsOfAllSessionsRequest;
    internalBinaryWrite(message: ListPlatformsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListPlatformsOfAllSessionsRequest
 */
export declare const ListPlatformsOfAllSessionsRequest: ListPlatformsOfAllSessionsRequest$Type;
declare class ListPlatformsResponse$Type extends MessageType<ListPlatformsResponse> {
    constructor();
    create(value?: PartialMessage<ListPlatformsResponse>): ListPlatformsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPlatformsResponse): ListPlatformsResponse;
    internalBinaryWrite(message: ListPlatformsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListPlatformsResponse
 */
export declare const ListPlatformsResponse: ListPlatformsResponse$Type;
declare class ListAccountIdsOfAllSessionsRequest$Type extends MessageType<ListAccountIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListAccountIdsOfAllSessionsRequest>): ListAccountIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAccountIdsOfAllSessionsRequest): ListAccountIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListAccountIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAccountIdsOfAllSessionsRequest
 */
export declare const ListAccountIdsOfAllSessionsRequest: ListAccountIdsOfAllSessionsRequest$Type;
declare class ListAccountIdsResponse$Type extends MessageType<ListAccountIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListAccountIdsResponse>): ListAccountIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAccountIdsResponse): ListAccountIdsResponse;
    internalBinaryWrite(message: ListAccountIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAccountIdsResponse
 */
export declare const ListAccountIdsResponse: ListAccountIdsResponse$Type;
declare class ListPropertyIdsOfAllSessionsRequest$Type extends MessageType<ListPropertyIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListPropertyIdsOfAllSessionsRequest>): ListPropertyIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPropertyIdsOfAllSessionsRequest): ListPropertyIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListPropertyIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListPropertyIdsOfAllSessionsRequest
 */
export declare const ListPropertyIdsOfAllSessionsRequest: ListPropertyIdsOfAllSessionsRequest$Type;
declare class ListPropertyIdsResponse$Type extends MessageType<ListPropertyIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListPropertyIdsResponse>): ListPropertyIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListPropertyIdsResponse): ListPropertyIdsResponse;
    internalBinaryWrite(message: ListPropertyIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListPropertyIdsResponse
 */
export declare const ListPropertyIdsResponse: ListPropertyIdsResponse$Type;
declare class ListDatastreamIdsOfAllSessionsRequest$Type extends MessageType<ListDatastreamIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListDatastreamIdsOfAllSessionsRequest>): ListDatastreamIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListDatastreamIdsOfAllSessionsRequest): ListDatastreamIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListDatastreamIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest
 */
export declare const ListDatastreamIdsOfAllSessionsRequest: ListDatastreamIdsOfAllSessionsRequest$Type;
declare class ListDatastreamIdsResponse$Type extends MessageType<ListDatastreamIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListDatastreamIdsResponse>): ListDatastreamIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListDatastreamIdsResponse): ListDatastreamIdsResponse;
    internalBinaryWrite(message: ListDatastreamIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListDatastreamIdsResponse
 */
export declare const ListDatastreamIdsResponse: ListDatastreamIdsResponse$Type;
declare class ListOriginIdsOfAllSessionsRequest$Type extends MessageType<ListOriginIdsOfAllSessionsRequest> {
    constructor();
    create(value?: PartialMessage<ListOriginIdsOfAllSessionsRequest>): ListOriginIdsOfAllSessionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOriginIdsOfAllSessionsRequest): ListOriginIdsOfAllSessionsRequest;
    internalBinaryWrite(message: ListOriginIdsOfAllSessionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOriginIdsOfAllSessionsRequest
 */
export declare const ListOriginIdsOfAllSessionsRequest: ListOriginIdsOfAllSessionsRequest$Type;
declare class ListOriginIdsResponse$Type extends MessageType<ListOriginIdsResponse> {
    constructor();
    create(value?: PartialMessage<ListOriginIdsResponse>): ListOriginIdsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOriginIdsResponse): ListOriginIdsResponse;
    internalBinaryWrite(message: ListOriginIdsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOriginIdsResponse
 */
export declare const ListOriginIdsResponse: ListOriginIdsResponse$Type;
declare class AddSessionLabelsRequest$Type extends MessageType<AddSessionLabelsRequest> {
    constructor();
    create(value?: PartialMessage<AddSessionLabelsRequest>): AddSessionLabelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddSessionLabelsRequest): AddSessionLabelsRequest;
    internalBinaryWrite(message: AddSessionLabelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddSessionLabelsRequest
 */
export declare const AddSessionLabelsRequest: AddSessionLabelsRequest$Type;
declare class DeleteSessionLabelsRequest$Type extends MessageType<DeleteSessionLabelsRequest> {
    constructor();
    create(value?: PartialMessage<DeleteSessionLabelsRequest>): DeleteSessionLabelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteSessionLabelsRequest): DeleteSessionLabelsRequest;
    internalBinaryWrite(message: DeleteSessionLabelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteSessionLabelsRequest
 */
export declare const DeleteSessionLabelsRequest: DeleteSessionLabelsRequest$Type;
declare class AddSessionCommentRequest$Type extends MessageType<AddSessionCommentRequest> {
    constructor();
    create(value?: PartialMessage<AddSessionCommentRequest>): AddSessionCommentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddSessionCommentRequest): AddSessionCommentRequest;
    internalBinaryWrite(message: AddSessionCommentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddSessionCommentRequest
 */
export declare const AddSessionCommentRequest: AddSessionCommentRequest$Type;
declare class DeleteSessionCommentsRequest$Type extends MessageType<DeleteSessionCommentsRequest> {
    constructor();
    create(value?: PartialMessage<DeleteSessionCommentsRequest>): DeleteSessionCommentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteSessionCommentsRequest): DeleteSessionCommentsRequest;
    internalBinaryWrite(message: DeleteSessionCommentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteSessionCommentsRequest
 */
export declare const DeleteSessionCommentsRequest: DeleteSessionCommentsRequest$Type;
declare class UpdateSessionCommentsRequest$Type extends MessageType<UpdateSessionCommentsRequest> {
    constructor();
    create(value?: PartialMessage<UpdateSessionCommentsRequest>): UpdateSessionCommentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSessionCommentsRequest): UpdateSessionCommentsRequest;
    internalBinaryWrite(message: UpdateSessionCommentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateSessionCommentsRequest
 */
export declare const UpdateSessionCommentsRequest: UpdateSessionCommentsRequest$Type;
declare class ListSessionCommentsRequest$Type extends MessageType<ListSessionCommentsRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionCommentsRequest>): ListSessionCommentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionCommentsRequest): ListSessionCommentsRequest;
    internalBinaryWrite(message: ListSessionCommentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionCommentsRequest
 */
export declare const ListSessionCommentsRequest: ListSessionCommentsRequest$Type;
declare class ListSessionCommentsResponse$Type extends MessageType<ListSessionCommentsResponse> {
    constructor();
    create(value?: PartialMessage<ListSessionCommentsResponse>): ListSessionCommentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionCommentsResponse): ListSessionCommentsResponse;
    internalBinaryWrite(message: ListSessionCommentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionCommentsResponse
 */
export declare const ListSessionCommentsResponse: ListSessionCommentsResponse$Type;
declare class ListSessionReviewsRequest$Type extends MessageType<ListSessionReviewsRequest> {
    constructor();
    create(value?: PartialMessage<ListSessionReviewsRequest>): ListSessionReviewsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionReviewsRequest): ListSessionReviewsRequest;
    internalBinaryWrite(message: ListSessionReviewsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionReviewsRequest
 */
export declare const ListSessionReviewsRequest: ListSessionReviewsRequest$Type;
declare class ListSessionReviewsResponse$Type extends MessageType<ListSessionReviewsResponse> {
    constructor();
    create(value?: PartialMessage<ListSessionReviewsResponse>): ListSessionReviewsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListSessionReviewsResponse): ListSessionReviewsResponse;
    internalBinaryWrite(message: ListSessionReviewsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListSessionReviewsResponse
 */
export declare const ListSessionReviewsResponse: ListSessionReviewsResponse$Type;
declare class GetSessionReviewRequest$Type extends MessageType<GetSessionReviewRequest> {
    constructor();
    create(value?: PartialMessage<GetSessionReviewRequest>): GetSessionReviewRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionReviewRequest): GetSessionReviewRequest;
    internalBinaryWrite(message: GetSessionReviewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetSessionReviewRequest
 */
export declare const GetSessionReviewRequest: GetSessionReviewRequest$Type;
declare class GetLatestSessionReviewRequest$Type extends MessageType<GetLatestSessionReviewRequest> {
    constructor();
    create(value?: PartialMessage<GetLatestSessionReviewRequest>): GetLatestSessionReviewRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLatestSessionReviewRequest): GetLatestSessionReviewRequest;
    internalBinaryWrite(message: GetLatestSessionReviewRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetLatestSessionReviewRequest
 */
export declare const GetLatestSessionReviewRequest: GetLatestSessionReviewRequest$Type;
declare class FileResource$Type extends MessageType<FileResource> {
    constructor();
    create(value?: PartialMessage<FileResource>): FileResource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FileResource): FileResource;
    internalBinaryWrite(message: FileResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.FileResource
 */
export declare const FileResource: FileResource$Type;
declare class DocumentFileResource$Type extends MessageType<DocumentFileResource> {
    constructor();
    create(value?: PartialMessage<DocumentFileResource>): DocumentFileResource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DocumentFileResource): DocumentFileResource;
    internalBinaryWrite(message: DocumentFileResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DocumentFileResource
 */
export declare const DocumentFileResource: DocumentFileResource$Type;
declare class ImageFileResource$Type extends MessageType<ImageFileResource> {
    constructor();
    create(value?: PartialMessage<ImageFileResource>): ImageFileResource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ImageFileResource): ImageFileResource;
    internalBinaryWrite(message: ImageFileResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ImageFileResource
 */
export declare const ImageFileResource: ImageFileResource$Type;
declare class AudioFileResource$Type extends MessageType<AudioFileResource> {
    constructor();
    create(value?: PartialMessage<AudioFileResource>): AudioFileResource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AudioFileResource): AudioFileResource;
    internalBinaryWrite(message: AudioFileResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AudioFileResource
 */
export declare const AudioFileResource: AudioFileResource$Type;
declare class VideoFileResource$Type extends MessageType<VideoFileResource> {
    constructor();
    create(value?: PartialMessage<VideoFileResource>): VideoFileResource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VideoFileResource): VideoFileResource;
    internalBinaryWrite(message: VideoFileResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.VideoFileResource
 */
export declare const VideoFileResource: VideoFileResource$Type;
declare class GetAudioFilesRequest$Type extends MessageType<GetAudioFilesRequest> {
    constructor();
    create(value?: PartialMessage<GetAudioFilesRequest>): GetAudioFilesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAudioFilesRequest): GetAudioFilesRequest;
    internalBinaryWrite(message: GetAudioFilesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAudioFilesRequest
 */
export declare const GetAudioFilesRequest: GetAudioFilesRequest$Type;
declare class GetAudioFilesResponse$Type extends MessageType<GetAudioFilesResponse> {
    constructor();
    create(value?: PartialMessage<GetAudioFilesResponse>): GetAudioFilesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAudioFilesResponse): GetAudioFilesResponse;
    internalBinaryWrite(message: GetAudioFilesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAudioFilesResponse
 */
export declare const GetAudioFilesResponse: GetAudioFilesResponse$Type;
declare class AddAudioFilesRequest$Type extends MessageType<AddAudioFilesRequest> {
    constructor();
    create(value?: PartialMessage<AddAudioFilesRequest>): AddAudioFilesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddAudioFilesRequest): AddAudioFilesRequest;
    internalBinaryWrite(message: AddAudioFilesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddAudioFilesRequest
 */
export declare const AddAudioFilesRequest: AddAudioFilesRequest$Type;
declare class AddAudioFilesResponse$Type extends MessageType<AddAudioFilesResponse> {
    constructor();
    create(value?: PartialMessage<AddAudioFilesResponse>): AddAudioFilesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddAudioFilesResponse): AddAudioFilesResponse;
    internalBinaryWrite(message: AddAudioFilesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddAudioFilesResponse
 */
export declare const AddAudioFilesResponse: AddAudioFilesResponse$Type;
declare class DeleteAudioFilesRequest$Type extends MessageType<DeleteAudioFilesRequest> {
    constructor();
    create(value?: PartialMessage<DeleteAudioFilesRequest>): DeleteAudioFilesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteAudioFilesRequest): DeleteAudioFilesRequest;
    internalBinaryWrite(message: DeleteAudioFilesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteAudioFilesRequest
 */
export declare const DeleteAudioFilesRequest: DeleteAudioFilesRequest$Type;
declare class DeleteAudioFilesResponse$Type extends MessageType<DeleteAudioFilesResponse> {
    constructor();
    create(value?: PartialMessage<DeleteAudioFilesResponse>): DeleteAudioFilesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteAudioFilesResponse): DeleteAudioFilesResponse;
    internalBinaryWrite(message: DeleteAudioFilesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteAudioFilesResponse
 */
export declare const DeleteAudioFilesResponse: DeleteAudioFilesResponse$Type;
declare class ListAudioFilesRequest$Type extends MessageType<ListAudioFilesRequest> {
    constructor();
    create(value?: PartialMessage<ListAudioFilesRequest>): ListAudioFilesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAudioFilesRequest): ListAudioFilesRequest;
    internalBinaryWrite(message: ListAudioFilesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAudioFilesRequest
 */
export declare const ListAudioFilesRequest: ListAudioFilesRequest$Type;
declare class ListAudioFilesResponse$Type extends MessageType<ListAudioFilesResponse> {
    constructor();
    create(value?: PartialMessage<ListAudioFilesResponse>): ListAudioFilesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAudioFilesResponse): ListAudioFilesResponse;
    internalBinaryWrite(message: ListAudioFilesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListAudioFilesResponse
 */
export declare const ListAudioFilesResponse: ListAudioFilesResponse$Type;
declare class GetAudioFileOfSessionRequest$Type extends MessageType<GetAudioFileOfSessionRequest> {
    constructor();
    create(value?: PartialMessage<GetAudioFileOfSessionRequest>): GetAudioFileOfSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAudioFileOfSessionRequest): GetAudioFileOfSessionRequest;
    internalBinaryWrite(message: GetAudioFileOfSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetAudioFileOfSessionRequest
 */
export declare const GetAudioFileOfSessionRequest: GetAudioFileOfSessionRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Sessions
 */
export declare const Sessions: ServiceType;
export {};
