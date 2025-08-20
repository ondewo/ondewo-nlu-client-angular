import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ListTrainingPhrasesofIntentsWithEnrichmentResponse } from "./intent";
import type { ListTrainingPhrasesofIntentsWithEnrichmentRequest } from "./intent";
import type { ListParametersResponse } from "./intent";
import type { ListParametersRequest } from "./intent";
import type { BatchDeleteParametersResponse } from "./intent";
import type { BatchDeleteParametersRequest } from "./intent";
import type { BatchUpdateParametersRequest } from "./intent";
import type { BatchGetParametersRequest } from "./intent";
import type { BatchParametersStatusResponse } from "./intent";
import type { BatchCreateParametersRequest } from "./intent";
import type { ListResponseMessagesResponse } from "./intent";
import type { ListResponseMessagesRequest } from "./intent";
import type { BatchDeleteResponseMessagesResponse } from "./intent";
import type { BatchDeleteResponseMessagesRequest } from "./intent";
import type { BatchUpdateResponseMessagesRequest } from "./intent";
import type { BatchGetResponseMessagesRequest } from "./intent";
import type { BatchResponseMessagesStatusResponse } from "./intent";
import type { BatchCreateResponseMessagesRequest } from "./intent";
import type { ListTrainingPhrasesResponse } from "./intent";
import type { ListTrainingPhrasesRequest } from "./intent";
import type { BatchDeleteTrainingPhrasesResponse } from "./intent";
import type { BatchDeleteTrainingPhrasesRequest } from "./intent";
import type { BatchUpdateTrainingPhrasesRequest } from "./intent";
import type { BatchGetTrainingPhrasesRequest } from "./intent";
import type { BatchTrainingPhrasesStatusResponse } from "./intent";
import type { BatchCreateTrainingPhrasesRequest } from "./intent";
import type { GetAllIntentTagsRequest } from "./intent";
import type { GetIntentTagsResponse } from "./intent";
import type { GetIntentTagsRequest } from "./intent";
import type { IntentTagRequest } from "./intent";
import type { Operation } from "./operations";
import type { BatchDeleteIntentsRequest } from "./intent";
import type { BatchUpdateIntentsResponse } from "./intent";
import type { BatchUpdateIntentsRequest } from "./intent";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteIntentRequest } from "./intent";
import type { UpdateIntentRequest } from "./intent";
import type { CreateIntentRequest } from "./intent";
import type { Intent } from "./intent";
import type { GetIntentRequest } from "./intent";
import type { ListIntentsResponse } from "./intent";
import type { ListIntentsRequest } from "./intent";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * An intent represents a mapping between input from a user and an action to
 * be taken by your application. When you pass user input to the
 * [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method, the
 * Dialogflow API analyzes the input and searches
 * for a matching intent. If no match is found, the Dialogflow API returns a
 * fallback intent (`is_fallback` = true).
 *
 * You can provide additional information for the Dialogflow API to use to
 * match user input to an intent by adding the following to your intent.
 *
 * *   **Contexts** - provide additional context for intent analysis. For
 *     example, if an intent is related to an object in your application that
 *     plays music, you can provide a context to determine when to match the
 *     intent if the user input is “turn it off”.  You can include a context
 *     that matches the intent when there is previous user input of
 *     "play music", and not when there is previous user input of
 *     "turn on the light".
 *
 * *   **Events** - allow for matching an intent by using an event name
 *     instead of user input. Your application can provide an event name and
 *     related parameters to the Dialogflow API to match an intent. For
 *     example, when your application starts, you can send a welcome event
 *     with a user name parameter to the Dialogflow API to match an intent with
 *     a personalized welcome message for the user.
 *
 * *   **Training phrases** - provide examples of user input to train the
 *     Dialogflow API agent to better match intents.
 *
 * For more information about intents, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/intents).
 *
 * @generated from protobuf service ondewo.nlu.Intents
 */
export interface IIntentsClient {
    /**
     * Returns the list of all intents in the specified agent.
     *
     * @generated from protobuf rpc: ListIntents(ondewo.nlu.ListIntentsRequest) returns (ondewo.nlu.ListIntentsResponse);
     */
    listIntents(input: ListIntentsRequest, options?: RpcOptions): UnaryCall<ListIntentsRequest, ListIntentsResponse>;
    /**
     * Retrieves the specified intent.
     *
     * @generated from protobuf rpc: GetIntent(ondewo.nlu.GetIntentRequest) returns (ondewo.nlu.Intent);
     */
    getIntent(input: GetIntentRequest, options?: RpcOptions): UnaryCall<GetIntentRequest, Intent>;
    /**
     * Creates an intent in the specified agent.
     *
     * @generated from protobuf rpc: CreateIntent(ondewo.nlu.CreateIntentRequest) returns (ondewo.nlu.Intent);
     */
    createIntent(input: CreateIntentRequest, options?: RpcOptions): UnaryCall<CreateIntentRequest, Intent>;
    /**
     * Updates the specified intent.
     *
     * @generated from protobuf rpc: UpdateIntent(ondewo.nlu.UpdateIntentRequest) returns (ondewo.nlu.Intent);
     */
    updateIntent(input: UpdateIntentRequest, options?: RpcOptions): UnaryCall<UpdateIntentRequest, Intent>;
    /**
     * Deletes the specified intent.
     *
     * @generated from protobuf rpc: DeleteIntent(ondewo.nlu.DeleteIntentRequest) returns (google.protobuf.Empty);
     */
    deleteIntent(input: DeleteIntentRequest, options?: RpcOptions): UnaryCall<DeleteIntentRequest, Empty>;
    /**
     * Updates/Creates multiple intents in the specified agent.
     *
     * Operation <response: [BatchUpdateIntentsResponse][google.cloud.dialogflow.v2.BatchUpdateIntentsResponse]>
     *
     * @generated from protobuf rpc: BatchUpdateIntents(ondewo.nlu.BatchUpdateIntentsRequest) returns (ondewo.nlu.BatchUpdateIntentsResponse);
     */
    batchUpdateIntents(input: BatchUpdateIntentsRequest, options?: RpcOptions): UnaryCall<BatchUpdateIntentsRequest, BatchUpdateIntentsResponse>;
    /**
     * Deletes intents in the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
     *
     * @generated from protobuf rpc: BatchDeleteIntents(ondewo.nlu.BatchDeleteIntentsRequest) returns (ondewo.nlu.Operation);
     */
    batchDeleteIntents(input: BatchDeleteIntentsRequest, options?: RpcOptions): UnaryCall<BatchDeleteIntentsRequest, Operation>;
    /**
     * Tags a specific intent with tag(s)
     *
     * @generated from protobuf rpc: TagIntent(ondewo.nlu.IntentTagRequest) returns (google.protobuf.Empty);
     */
    tagIntent(input: IntentTagRequest, options?: RpcOptions): UnaryCall<IntentTagRequest, Empty>;
    /**
     * Deletes tag(s) for a specific intent
     *
     * @generated from protobuf rpc: DeleteIntentTag(ondewo.nlu.IntentTagRequest) returns (google.protobuf.Empty);
     */
    deleteIntentTag(input: IntentTagRequest, options?: RpcOptions): UnaryCall<IntentTagRequest, Empty>;
    /**
     * Gets all the tags for a specific intent
     *
     * @generated from protobuf rpc: GetIntentTags(ondewo.nlu.GetIntentTagsRequest) returns (ondewo.nlu.GetIntentTagsResponse);
     */
    getIntentTags(input: GetIntentTagsRequest, options?: RpcOptions): UnaryCall<GetIntentTagsRequest, GetIntentTagsResponse>;
    /**
     * Gets all the tags for all the intents
     *
     * @generated from protobuf rpc: GetAllIntentTags(ondewo.nlu.GetAllIntentTagsRequest) returns (ondewo.nlu.GetIntentTagsResponse);
     */
    getAllIntentTags(input: GetAllIntentTagsRequest, options?: RpcOptions): UnaryCall<GetAllIntentTagsRequest, GetIntentTagsResponse>;
    /**
     * Creates batch of training phrases
     *
     * @generated from protobuf rpc: BatchCreateTrainingPhrases(ondewo.nlu.BatchCreateTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchCreateTrainingPhrases(input: BatchCreateTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchCreateTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Retrieve a training phrases batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetTrainingPhrases(ondewo.nlu.BatchGetTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchGetTrainingPhrases(input: BatchGetTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchGetTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Updates batch of training phrases
     *
     * @generated from protobuf rpc: BatchUpdateTrainingPhrases(ondewo.nlu.BatchUpdateTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchUpdateTrainingPhrases(input: BatchUpdateTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchUpdateTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Delete a training phrases batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteTrainingPhrases(ondewo.nlu.BatchDeleteTrainingPhrasesRequest) returns (ondewo.nlu.BatchDeleteTrainingPhrasesResponse);
     */
    batchDeleteTrainingPhrases(input: BatchDeleteTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchDeleteTrainingPhrasesRequest, BatchDeleteTrainingPhrasesResponse>;
    /**
     * List training phrases (of a specific intent).
     *
     * @generated from protobuf rpc: ListTrainingPhrases(ondewo.nlu.ListTrainingPhrasesRequest) returns (ondewo.nlu.ListTrainingPhrasesResponse);
     */
    listTrainingPhrases(input: ListTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<ListTrainingPhrasesRequest, ListTrainingPhrasesResponse>;
    /**
     * Creates batch of intent messages
     *
     * @generated from protobuf rpc: BatchCreateResponseMessages(ondewo.nlu.BatchCreateResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchCreateResponseMessages(input: BatchCreateResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchCreateResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Retrieve a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetResponseMessages(ondewo.nlu.BatchGetResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchGetResponseMessages(input: BatchGetResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchGetResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Updates batch of intent messages
     *
     * @generated from protobuf rpc: BatchUpdateResponseMessages(ondewo.nlu.BatchUpdateResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchUpdateResponseMessages(input: BatchUpdateResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchUpdateResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Delete a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteResponseMessages(ondewo.nlu.BatchDeleteResponseMessagesRequest) returns (ondewo.nlu.BatchDeleteResponseMessagesResponse);
     */
    batchDeleteResponseMessages(input: BatchDeleteResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchDeleteResponseMessagesRequest, BatchDeleteResponseMessagesResponse>;
    /**
     * List messages (of a specific intent).
     *
     * @generated from protobuf rpc: ListResponseMessages(ondewo.nlu.ListResponseMessagesRequest) returns (ondewo.nlu.ListResponseMessagesResponse);
     */
    listResponseMessages(input: ListResponseMessagesRequest, options?: RpcOptions): UnaryCall<ListResponseMessagesRequest, ListResponseMessagesResponse>;
    /**
     * Creates batch of intent messages
     *
     * @generated from protobuf rpc: BatchCreateParameters(ondewo.nlu.BatchCreateParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchCreateParameters(input: BatchCreateParametersRequest, options?: RpcOptions): UnaryCall<BatchCreateParametersRequest, BatchParametersStatusResponse>;
    /**
     * Retrieve a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetParameters(ondewo.nlu.BatchGetParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchGetParameters(input: BatchGetParametersRequest, options?: RpcOptions): UnaryCall<BatchGetParametersRequest, BatchParametersStatusResponse>;
    /**
     * Updates batch of intent messages
     *
     * @generated from protobuf rpc: BatchUpdateParameters(ondewo.nlu.BatchUpdateParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchUpdateParameters(input: BatchUpdateParametersRequest, options?: RpcOptions): UnaryCall<BatchUpdateParametersRequest, BatchParametersStatusResponse>;
    /**
     * Delete a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteParameters(ondewo.nlu.BatchDeleteParametersRequest) returns (ondewo.nlu.BatchDeleteParametersResponse);
     */
    batchDeleteParameters(input: BatchDeleteParametersRequest, options?: RpcOptions): UnaryCall<BatchDeleteParametersRequest, BatchDeleteParametersResponse>;
    /**
     * List messages (of a specific intent).
     *
     * @generated from protobuf rpc: ListParameters(ondewo.nlu.ListParametersRequest) returns (ondewo.nlu.ListParametersResponse);
     */
    listParameters(input: ListParametersRequest, options?: RpcOptions): UnaryCall<ListParametersRequest, ListParametersResponse>;
    /**
     * List Training phrases (of a specific intent).
     *
     * @generated from protobuf rpc: ListTrainingPhrasesofIntentsWithEnrichment(ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest) returns (ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse);
     */
    listTrainingPhrasesofIntentsWithEnrichment(input: ListTrainingPhrasesofIntentsWithEnrichmentRequest, options?: RpcOptions): UnaryCall<ListTrainingPhrasesofIntentsWithEnrichmentRequest, ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
}
/**
 * An intent represents a mapping between input from a user and an action to
 * be taken by your application. When you pass user input to the
 * [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method, the
 * Dialogflow API analyzes the input and searches
 * for a matching intent. If no match is found, the Dialogflow API returns a
 * fallback intent (`is_fallback` = true).
 *
 * You can provide additional information for the Dialogflow API to use to
 * match user input to an intent by adding the following to your intent.
 *
 * *   **Contexts** - provide additional context for intent analysis. For
 *     example, if an intent is related to an object in your application that
 *     plays music, you can provide a context to determine when to match the
 *     intent if the user input is “turn it off”.  You can include a context
 *     that matches the intent when there is previous user input of
 *     "play music", and not when there is previous user input of
 *     "turn on the light".
 *
 * *   **Events** - allow for matching an intent by using an event name
 *     instead of user input. Your application can provide an event name and
 *     related parameters to the Dialogflow API to match an intent. For
 *     example, when your application starts, you can send a welcome event
 *     with a user name parameter to the Dialogflow API to match an intent with
 *     a personalized welcome message for the user.
 *
 * *   **Training phrases** - provide examples of user input to train the
 *     Dialogflow API agent to better match intents.
 *
 * For more information about intents, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/intents).
 *
 * @generated from protobuf service ondewo.nlu.Intents
 */
export declare class IntentsClient implements IIntentsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Returns the list of all intents in the specified agent.
     *
     * @generated from protobuf rpc: ListIntents(ondewo.nlu.ListIntentsRequest) returns (ondewo.nlu.ListIntentsResponse);
     */
    listIntents(input: ListIntentsRequest, options?: RpcOptions): UnaryCall<ListIntentsRequest, ListIntentsResponse>;
    /**
     * Retrieves the specified intent.
     *
     * @generated from protobuf rpc: GetIntent(ondewo.nlu.GetIntentRequest) returns (ondewo.nlu.Intent);
     */
    getIntent(input: GetIntentRequest, options?: RpcOptions): UnaryCall<GetIntentRequest, Intent>;
    /**
     * Creates an intent in the specified agent.
     *
     * @generated from protobuf rpc: CreateIntent(ondewo.nlu.CreateIntentRequest) returns (ondewo.nlu.Intent);
     */
    createIntent(input: CreateIntentRequest, options?: RpcOptions): UnaryCall<CreateIntentRequest, Intent>;
    /**
     * Updates the specified intent.
     *
     * @generated from protobuf rpc: UpdateIntent(ondewo.nlu.UpdateIntentRequest) returns (ondewo.nlu.Intent);
     */
    updateIntent(input: UpdateIntentRequest, options?: RpcOptions): UnaryCall<UpdateIntentRequest, Intent>;
    /**
     * Deletes the specified intent.
     *
     * @generated from protobuf rpc: DeleteIntent(ondewo.nlu.DeleteIntentRequest) returns (google.protobuf.Empty);
     */
    deleteIntent(input: DeleteIntentRequest, options?: RpcOptions): UnaryCall<DeleteIntentRequest, Empty>;
    /**
     * Updates/Creates multiple intents in the specified agent.
     *
     * Operation <response: [BatchUpdateIntentsResponse][google.cloud.dialogflow.v2.BatchUpdateIntentsResponse]>
     *
     * @generated from protobuf rpc: BatchUpdateIntents(ondewo.nlu.BatchUpdateIntentsRequest) returns (ondewo.nlu.BatchUpdateIntentsResponse);
     */
    batchUpdateIntents(input: BatchUpdateIntentsRequest, options?: RpcOptions): UnaryCall<BatchUpdateIntentsRequest, BatchUpdateIntentsResponse>;
    /**
     * Deletes intents in the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
     *
     * @generated from protobuf rpc: BatchDeleteIntents(ondewo.nlu.BatchDeleteIntentsRequest) returns (ondewo.nlu.Operation);
     */
    batchDeleteIntents(input: BatchDeleteIntentsRequest, options?: RpcOptions): UnaryCall<BatchDeleteIntentsRequest, Operation>;
    /**
     * Tags a specific intent with tag(s)
     *
     * @generated from protobuf rpc: TagIntent(ondewo.nlu.IntentTagRequest) returns (google.protobuf.Empty);
     */
    tagIntent(input: IntentTagRequest, options?: RpcOptions): UnaryCall<IntentTagRequest, Empty>;
    /**
     * Deletes tag(s) for a specific intent
     *
     * @generated from protobuf rpc: DeleteIntentTag(ondewo.nlu.IntentTagRequest) returns (google.protobuf.Empty);
     */
    deleteIntentTag(input: IntentTagRequest, options?: RpcOptions): UnaryCall<IntentTagRequest, Empty>;
    /**
     * Gets all the tags for a specific intent
     *
     * @generated from protobuf rpc: GetIntentTags(ondewo.nlu.GetIntentTagsRequest) returns (ondewo.nlu.GetIntentTagsResponse);
     */
    getIntentTags(input: GetIntentTagsRequest, options?: RpcOptions): UnaryCall<GetIntentTagsRequest, GetIntentTagsResponse>;
    /**
     * Gets all the tags for all the intents
     *
     * @generated from protobuf rpc: GetAllIntentTags(ondewo.nlu.GetAllIntentTagsRequest) returns (ondewo.nlu.GetIntentTagsResponse);
     */
    getAllIntentTags(input: GetAllIntentTagsRequest, options?: RpcOptions): UnaryCall<GetAllIntentTagsRequest, GetIntentTagsResponse>;
    /**
     * Creates batch of training phrases
     *
     * @generated from protobuf rpc: BatchCreateTrainingPhrases(ondewo.nlu.BatchCreateTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchCreateTrainingPhrases(input: BatchCreateTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchCreateTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Retrieve a training phrases batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetTrainingPhrases(ondewo.nlu.BatchGetTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchGetTrainingPhrases(input: BatchGetTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchGetTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Updates batch of training phrases
     *
     * @generated from protobuf rpc: BatchUpdateTrainingPhrases(ondewo.nlu.BatchUpdateTrainingPhrasesRequest) returns (ondewo.nlu.BatchTrainingPhrasesStatusResponse);
     */
    batchUpdateTrainingPhrases(input: BatchUpdateTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchUpdateTrainingPhrasesRequest, BatchTrainingPhrasesStatusResponse>;
    /**
     * Delete a training phrases batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteTrainingPhrases(ondewo.nlu.BatchDeleteTrainingPhrasesRequest) returns (ondewo.nlu.BatchDeleteTrainingPhrasesResponse);
     */
    batchDeleteTrainingPhrases(input: BatchDeleteTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<BatchDeleteTrainingPhrasesRequest, BatchDeleteTrainingPhrasesResponse>;
    /**
     * List training phrases (of a specific intent).
     *
     * @generated from protobuf rpc: ListTrainingPhrases(ondewo.nlu.ListTrainingPhrasesRequest) returns (ondewo.nlu.ListTrainingPhrasesResponse);
     */
    listTrainingPhrases(input: ListTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<ListTrainingPhrasesRequest, ListTrainingPhrasesResponse>;
    /**
     * Creates batch of intent messages
     *
     * @generated from protobuf rpc: BatchCreateResponseMessages(ondewo.nlu.BatchCreateResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchCreateResponseMessages(input: BatchCreateResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchCreateResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Retrieve a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetResponseMessages(ondewo.nlu.BatchGetResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchGetResponseMessages(input: BatchGetResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchGetResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Updates batch of intent messages
     *
     * @generated from protobuf rpc: BatchUpdateResponseMessages(ondewo.nlu.BatchUpdateResponseMessagesRequest) returns (ondewo.nlu.BatchResponseMessagesStatusResponse);
     */
    batchUpdateResponseMessages(input: BatchUpdateResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchUpdateResponseMessagesRequest, BatchResponseMessagesStatusResponse>;
    /**
     * Delete a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteResponseMessages(ondewo.nlu.BatchDeleteResponseMessagesRequest) returns (ondewo.nlu.BatchDeleteResponseMessagesResponse);
     */
    batchDeleteResponseMessages(input: BatchDeleteResponseMessagesRequest, options?: RpcOptions): UnaryCall<BatchDeleteResponseMessagesRequest, BatchDeleteResponseMessagesResponse>;
    /**
     * List messages (of a specific intent).
     *
     * @generated from protobuf rpc: ListResponseMessages(ondewo.nlu.ListResponseMessagesRequest) returns (ondewo.nlu.ListResponseMessagesResponse);
     */
    listResponseMessages(input: ListResponseMessagesRequest, options?: RpcOptions): UnaryCall<ListResponseMessagesRequest, ListResponseMessagesResponse>;
    /**
     * Creates batch of intent messages
     *
     * @generated from protobuf rpc: BatchCreateParameters(ondewo.nlu.BatchCreateParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchCreateParameters(input: BatchCreateParametersRequest, options?: RpcOptions): UnaryCall<BatchCreateParametersRequest, BatchParametersStatusResponse>;
    /**
     * Retrieve a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchGetParameters(ondewo.nlu.BatchGetParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchGetParameters(input: BatchGetParametersRequest, options?: RpcOptions): UnaryCall<BatchGetParametersRequest, BatchParametersStatusResponse>;
    /**
     * Updates batch of intent messages
     *
     * @generated from protobuf rpc: BatchUpdateParameters(ondewo.nlu.BatchUpdateParametersRequest) returns (ondewo.nlu.BatchParametersStatusResponse);
     */
    batchUpdateParameters(input: BatchUpdateParametersRequest, options?: RpcOptions): UnaryCall<BatchUpdateParametersRequest, BatchParametersStatusResponse>;
    /**
     * Delete a intent messages batch of the specified names.
     *
     * @generated from protobuf rpc: BatchDeleteParameters(ondewo.nlu.BatchDeleteParametersRequest) returns (ondewo.nlu.BatchDeleteParametersResponse);
     */
    batchDeleteParameters(input: BatchDeleteParametersRequest, options?: RpcOptions): UnaryCall<BatchDeleteParametersRequest, BatchDeleteParametersResponse>;
    /**
     * List messages (of a specific intent).
     *
     * @generated from protobuf rpc: ListParameters(ondewo.nlu.ListParametersRequest) returns (ondewo.nlu.ListParametersResponse);
     */
    listParameters(input: ListParametersRequest, options?: RpcOptions): UnaryCall<ListParametersRequest, ListParametersResponse>;
    /**
     * List Training phrases (of a specific intent).
     *
     * @generated from protobuf rpc: ListTrainingPhrasesofIntentsWithEnrichment(ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest) returns (ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse);
     */
    listTrainingPhrasesofIntentsWithEnrichment(input: ListTrainingPhrasesofIntentsWithEnrichmentRequest, options?: RpcOptions): UnaryCall<ListTrainingPhrasesofIntentsWithEnrichmentRequest, ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
}
