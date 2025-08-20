import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ListAudioFilesResponse } from "./session";
import type { ListAudioFilesRequest } from "./session";
import type { AudioFileResource } from "./session";
import type { GetAudioFileOfSessionRequest } from "./session";
import type { DeleteAudioFilesResponse } from "./session";
import type { DeleteAudioFilesRequest } from "./session";
import type { AddAudioFilesResponse } from "./session";
import type { AddAudioFilesRequest } from "./session";
import type { GetAudioFilesResponse } from "./session";
import type { GetAudioFilesRequest } from "./session";
import type { CreateSessionReviewRequest } from "./session";
import type { GetLatestSessionReviewRequest } from "./session";
import type { SessionReview } from "./session";
import type { GetSessionReviewRequest } from "./session";
import type { ListSessionReviewsResponse } from "./session";
import type { ListSessionReviewsRequest } from "./session";
import type { ListSessionCommentsResponse } from "./session";
import type { ListSessionCommentsRequest } from "./session";
import type { UpdateSessionCommentsRequest } from "./session";
import type { DeleteSessionCommentsRequest } from "./session";
import type { Comment } from "./common";
import type { AddSessionCommentRequest } from "./session";
import type { DeleteSessionLabelsRequest } from "./session";
import type { AddSessionLabelsRequest } from "./session";
import type { ListOriginIdsResponse } from "./session";
import type { ListOriginIdsOfAllSessionsRequest } from "./session";
import type { ListDatastreamIdsResponse } from "./session";
import type { ListDatastreamIdsOfAllSessionsRequest } from "./session";
import type { ListPropertyIdsResponse } from "./session";
import type { ListPropertyIdsOfAllSessionsRequest } from "./session";
import type { ListAccountIdsResponse } from "./session";
import type { ListAccountIdsOfAllSessionsRequest } from "./session";
import type { ListPlatformsResponse } from "./session";
import type { ListPlatformsOfAllSessionsRequest } from "./session";
import type { ListOutputContextsResponse } from "./session";
import type { ListOutputContextsOfAllSessionsRequest } from "./session";
import type { ListInputContextsResponse } from "./session";
import type { ListInputContextsOfAllSessionsRequest } from "./session";
import type { ListTagsResponse } from "./session";
import type { ListTagsOfAllSessionsRequest } from "./session";
import type { ListIdentifiedUserIdsResponse } from "./session";
import type { ListIdentifiedUserIdsOfAllSessionsRequest } from "./session";
import type { ListUserIdsResponse } from "./session";
import type { ListUserIdsOfAllSessionsRequest } from "./session";
import type { ListMatchedEntityTypesResponse } from "./session";
import type { ListMatchedEntityTypesOfAllSessionsRequest } from "./session";
import type { ListMatchedIntentsResponse } from "./session";
import type { ListMatchedIntentsOfAllSessionsRequest } from "./session";
import type { ListLanguageCodesResponse } from "./session";
import type { ListLanguageCodesOfAllSessionsRequest } from "./session";
import type { ListSessionLabelsOfAllSessionsRequest } from "./session";
import type { ListSessionLabelsResponse } from "./session";
import type { ListSessionLabelsRequest } from "./session";
import type { DeleteSessionRequest } from "./session";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteSessionStepRequest } from "./session";
import type { UpdateSessionStepRequest } from "./session";
import type { GetSessionStepRequest } from "./session";
import type { SessionStep } from "./session";
import type { CreateSessionStepRequest } from "./session";
import type { CreateSessionRequest } from "./session";
import type { Session } from "./session";
import type { GetSessionRequest } from "./session";
import type { ListSessionsResponse } from "./session";
import type { ListSessionsRequest } from "./session";
import type { StreamingDetectIntentResponse } from "./session";
import type { StreamingDetectIntentRequest } from "./session";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { DetectIntentResponse } from "./session";
import type { DetectIntentRequest } from "./session";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * A session represents an interaction with a user. You retrieve user input
 * and pass it to the [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method to determine
 * user intent and respond.
 *
 * @generated from protobuf service ondewo.nlu.Sessions
 */
export interface ISessionsClient {
    /**
     * Processes a natural language query and returns structured, actionable data
     * as a result. This method is not idempotent, because it may cause contexts
     * and session entity types to be updated, which in turn might affect
     * results of future queries.
     *
     * @generated from protobuf rpc: DetectIntent(ondewo.nlu.DetectIntentRequest) returns (ondewo.nlu.DetectIntentResponse);
     */
    detectIntent(input: DetectIntentRequest, options?: RpcOptions): UnaryCall<DetectIntentRequest, DetectIntentResponse>;
    /**
     * Processes a natural language query in audio format in a streaming fashion
     * and returns structured, actionable data as a result. This method is only
     * available via the gRPC API (not REST).
     *
     * @generated from protobuf rpc: StreamingDetectIntent(stream ondewo.nlu.StreamingDetectIntentRequest) returns (stream ondewo.nlu.StreamingDetectIntentResponse);
     */
    streamingDetectIntent(options?: RpcOptions): DuplexStreamingCall<StreamingDetectIntentRequest, StreamingDetectIntentResponse>;
    /**
     * *** SESSION RELATED ENDPOINTS *** //
     * ListSessions: returns list of sessions from ondewo-kb; by default returns only session IDs
     *
     * @generated from protobuf rpc: ListSessions(ondewo.nlu.ListSessionsRequest) returns (ondewo.nlu.ListSessionsResponse);
     */
    listSessions(input: ListSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionsRequest, ListSessionsResponse>;
    /**
     * GetSession: returns a session(=conversation) from ondewo-kb
     *
     * @generated from protobuf rpc: GetSession(ondewo.nlu.GetSessionRequest) returns (ondewo.nlu.Session);
     */
    getSession(input: GetSessionRequest, options?: RpcOptions): UnaryCall<GetSessionRequest, Session>;
    /**
     * CreateSession: creates and returns a session(=conversation) from ondewo-kb
     *
     * @generated from protobuf rpc: CreateSession(ondewo.nlu.CreateSessionRequest) returns (ondewo.nlu.Session);
     */
    createSession(input: CreateSessionRequest, options?: RpcOptions): UnaryCall<CreateSessionRequest, Session>;
    /**
     * CreateSessionStep: creates a new session step for a session
     *
     * @generated from protobuf rpc: CreateSessionStep(ondewo.nlu.CreateSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    createSessionStep(input: CreateSessionStepRequest, options?: RpcOptions): UnaryCall<CreateSessionStepRequest, SessionStep>;
    /**
     * GetSessionStep: gets an existing session step of a session
     *
     * @generated from protobuf rpc: GetSessionStep(ondewo.nlu.GetSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    getSessionStep(input: GetSessionStepRequest, options?: RpcOptions): UnaryCall<GetSessionStepRequest, SessionStep>;
    /**
     * UpdateSessionStep: updates an existing session step in a session
     *
     * @generated from protobuf rpc: UpdateSessionStep(ondewo.nlu.UpdateSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    updateSessionStep(input: UpdateSessionStepRequest, options?: RpcOptions): UnaryCall<UpdateSessionStepRequest, SessionStep>;
    /**
     * DeleteSessionStep: deletes an existing session step from the session
     *
     * @generated from protobuf rpc: DeleteSessionStep(ondewo.nlu.DeleteSessionStepRequest) returns (google.protobuf.Empty);
     */
    deleteSessionStep(input: DeleteSessionStepRequest, options?: RpcOptions): UnaryCall<DeleteSessionStepRequest, Empty>;
    /**
     * DeleteSession: delete a session(=conversation) from ondewo-kb (for testing only)
     *
     * @generated from protobuf rpc: DeleteSession(ondewo.nlu.DeleteSessionRequest) returns (google.protobuf.Empty);
     */
    deleteSession(input: DeleteSessionRequest, options?: RpcOptions): UnaryCall<DeleteSessionRequest, Empty>;
    /**
     * *** SESSION-LABEL RELATED ENDPOINTS *** //
     *
     * @generated from protobuf rpc: ListSessionLabels(ondewo.nlu.ListSessionLabelsRequest) returns (ondewo.nlu.ListSessionLabelsResponse);
     */
    listSessionLabels(input: ListSessionLabelsRequest, options?: RpcOptions): UnaryCall<ListSessionLabelsRequest, ListSessionLabelsResponse>;
    /**
     * @generated from protobuf rpc: ListSessionLabelsOfAllSessions(ondewo.nlu.ListSessionLabelsOfAllSessionsRequest) returns (ondewo.nlu.ListSessionLabelsResponse);
     */
    listSessionLabelsOfAllSessions(input: ListSessionLabelsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionLabelsOfAllSessionsRequest, ListSessionLabelsResponse>;
    /**
     * @generated from protobuf rpc: ListLanguageCodesOfAllSessions(ondewo.nlu.ListLanguageCodesOfAllSessionsRequest) returns (ondewo.nlu.ListLanguageCodesResponse);
     */
    listLanguageCodesOfAllSessions(input: ListLanguageCodesOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListLanguageCodesOfAllSessionsRequest, ListLanguageCodesResponse>;
    /**
     * @generated from protobuf rpc: ListMatchedIntentsOfAllSessions(ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest) returns (ondewo.nlu.ListMatchedIntentsResponse);
     */
    listMatchedIntentsOfAllSessions(input: ListMatchedIntentsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListMatchedIntentsOfAllSessionsRequest, ListMatchedIntentsResponse>;
    /**
     * @generated from protobuf rpc: ListMatchedEntityTypesOfAllSessions(ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest) returns (ondewo.nlu.ListMatchedEntityTypesResponse);
     */
    listMatchedEntityTypesOfAllSessions(input: ListMatchedEntityTypesOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListMatchedEntityTypesOfAllSessionsRequest, ListMatchedEntityTypesResponse>;
    /**
     * @generated from protobuf rpc: ListUserIdsOfAllSessions(ondewo.nlu.ListUserIdsOfAllSessionsRequest) returns (ondewo.nlu.ListUserIdsResponse);
     */
    listUserIdsOfAllSessions(input: ListUserIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListUserIdsOfAllSessionsRequest, ListUserIdsResponse>;
    /**
     * @generated from protobuf rpc: ListIdentifiedUserIdsOfAllSessions(ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest) returns (ondewo.nlu.ListIdentifiedUserIdsResponse);
     */
    listIdentifiedUserIdsOfAllSessions(input: ListIdentifiedUserIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListIdentifiedUserIdsOfAllSessionsRequest, ListIdentifiedUserIdsResponse>;
    /**
     * @generated from protobuf rpc: ListTagsOfAllSessions(ondewo.nlu.ListTagsOfAllSessionsRequest) returns (ondewo.nlu.ListTagsResponse);
     */
    listTagsOfAllSessions(input: ListTagsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListTagsOfAllSessionsRequest, ListTagsResponse>;
    /**
     * @generated from protobuf rpc: ListInputContextsOfAllSessions(ondewo.nlu.ListInputContextsOfAllSessionsRequest) returns (ondewo.nlu.ListInputContextsResponse);
     */
    listInputContextsOfAllSessions(input: ListInputContextsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListInputContextsOfAllSessionsRequest, ListInputContextsResponse>;
    /**
     * @generated from protobuf rpc: ListOutputContextsOfAllSessions(ondewo.nlu.ListOutputContextsOfAllSessionsRequest) returns (ondewo.nlu.ListOutputContextsResponse);
     */
    listOutputContextsOfAllSessions(input: ListOutputContextsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListOutputContextsOfAllSessionsRequest, ListOutputContextsResponse>;
    /**
     * @generated from protobuf rpc: ListPlatformsOfAllSessions(ondewo.nlu.ListPlatformsOfAllSessionsRequest) returns (ondewo.nlu.ListPlatformsResponse);
     */
    listPlatformsOfAllSessions(input: ListPlatformsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListPlatformsOfAllSessionsRequest, ListPlatformsResponse>;
    /**
     * @generated from protobuf rpc: ListAccountIdsOfAllSessions(ondewo.nlu.ListAccountIdsOfAllSessionsRequest) returns (ondewo.nlu.ListAccountIdsResponse);
     */
    listAccountIdsOfAllSessions(input: ListAccountIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListAccountIdsOfAllSessionsRequest, ListAccountIdsResponse>;
    /**
     * @generated from protobuf rpc: ListPropertyIdsOfAllSessions(ondewo.nlu.ListPropertyIdsOfAllSessionsRequest) returns (ondewo.nlu.ListPropertyIdsResponse);
     */
    listPropertyIdsOfAllSessions(input: ListPropertyIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListPropertyIdsOfAllSessionsRequest, ListPropertyIdsResponse>;
    /**
     * @generated from protobuf rpc: ListDatastreamIdsOfAllSessions(ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest) returns (ondewo.nlu.ListDatastreamIdsResponse);
     */
    listDatastreamIdsOfAllSessions(input: ListDatastreamIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListDatastreamIdsOfAllSessionsRequest, ListDatastreamIdsResponse>;
    /**
     * @generated from protobuf rpc: ListOriginIdsOfAllSessions(ondewo.nlu.ListOriginIdsOfAllSessionsRequest) returns (ondewo.nlu.ListOriginIdsResponse);
     */
    listOriginIdsOfAllSessions(input: ListOriginIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListOriginIdsOfAllSessionsRequest, ListOriginIdsResponse>;
    /**
     * @generated from protobuf rpc: AddSessionLabels(ondewo.nlu.AddSessionLabelsRequest) returns (ondewo.nlu.Session);
     */
    addSessionLabels(input: AddSessionLabelsRequest, options?: RpcOptions): UnaryCall<AddSessionLabelsRequest, Session>;
    /**
     * @generated from protobuf rpc: DeleteSessionLabels(ondewo.nlu.DeleteSessionLabelsRequest) returns (ondewo.nlu.Session);
     */
    deleteSessionLabels(input: DeleteSessionLabelsRequest, options?: RpcOptions): UnaryCall<DeleteSessionLabelsRequest, Session>;
    /**
     * @generated from protobuf rpc: AddSessionComment(ondewo.nlu.AddSessionCommentRequest) returns (ondewo.nlu.Comment);
     */
    addSessionComment(input: AddSessionCommentRequest, options?: RpcOptions): UnaryCall<AddSessionCommentRequest, Comment>;
    /**
     * @generated from protobuf rpc: DeleteSessionComments(ondewo.nlu.DeleteSessionCommentsRequest) returns (ondewo.nlu.Session);
     */
    deleteSessionComments(input: DeleteSessionCommentsRequest, options?: RpcOptions): UnaryCall<DeleteSessionCommentsRequest, Session>;
    /**
     * @generated from protobuf rpc: UpdateSessionComments(ondewo.nlu.UpdateSessionCommentsRequest) returns (ondewo.nlu.Session);
     */
    updateSessionComments(input: UpdateSessionCommentsRequest, options?: RpcOptions): UnaryCall<UpdateSessionCommentsRequest, Session>;
    /**
     * @generated from protobuf rpc: ListSessionComments(ondewo.nlu.ListSessionCommentsRequest) returns (ondewo.nlu.ListSessionCommentsResponse);
     */
    listSessionComments(input: ListSessionCommentsRequest, options?: RpcOptions): UnaryCall<ListSessionCommentsRequest, ListSessionCommentsResponse>;
    /**
     * *** SESSION-REVIEW RELATED ENDPOINTS *** //
     * ListSessionReviews:
     * returns list of session reviews from ondewo-kb; by default only returns session review IDs
     *
     * @generated from protobuf rpc: ListSessionReviews(ondewo.nlu.ListSessionReviewsRequest) returns (ondewo.nlu.ListSessionReviewsResponse);
     */
    listSessionReviews(input: ListSessionReviewsRequest, options?: RpcOptions): UnaryCall<ListSessionReviewsRequest, ListSessionReviewsResponse>;
    /**
     * GetSessionReview:
     * returns a session-review from ondewo-kb or computes the first review if none exists
     *
     * @generated from protobuf rpc: GetSessionReview(ondewo.nlu.GetSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    getSessionReview(input: GetSessionReviewRequest, options?: RpcOptions): UnaryCall<GetSessionReviewRequest, SessionReview>;
    /**
     * GetLatestSessionReview:
     * returns a session-review from ondewo-kb or computes the first review if none exists
     *
     * @generated from protobuf rpc: GetLatestSessionReview(ondewo.nlu.GetLatestSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    getLatestSessionReview(input: GetLatestSessionReviewRequest, options?: RpcOptions): UnaryCall<GetLatestSessionReviewRequest, SessionReview>;
    /**
     * CreateSessionReview:
     * persist a session review in ondewo-kb
     * as a side effect: also update training data in ondewo-cai
     *
     * @generated from protobuf rpc: CreateSessionReview(ondewo.nlu.CreateSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    createSessionReview(input: CreateSessionReviewRequest, options?: RpcOptions): UnaryCall<CreateSessionReviewRequest, SessionReview>;
    /**
     * RPC to get audio files based on specified criteria.
     * Retrieves information about audio files associated with specific sessions.
     * Returns a response containing details of the requested audio files.
     *
     * @generated from protobuf rpc: GetAudioFiles(ondewo.nlu.GetAudioFilesRequest) returns (ondewo.nlu.GetAudioFilesResponse);
     */
    getAudioFiles(input: GetAudioFilesRequest, options?: RpcOptions): UnaryCall<GetAudioFilesRequest, GetAudioFilesResponse>;
    /**
     * RPC to add audio files to a session.
     * Adds new audio files to the specified session, providing details about each file.
     * Returns a response containing information about the added audio files.
     *
     * @generated from protobuf rpc: AddAudioFiles(ondewo.nlu.AddAudioFilesRequest) returns (ondewo.nlu.AddAudioFilesResponse);
     */
    addAudioFiles(input: AddAudioFilesRequest, options?: RpcOptions): UnaryCall<AddAudioFilesRequest, AddAudioFilesResponse>;
    /**
     * RPC to delete specified audio files.
     * Deletes audio files associated with specific sessions based on unique identifiers.
     * Returns an empty response indicating the successful deletion of the specified audio files.
     *
     * @generated from protobuf rpc: DeleteAudioFiles(ondewo.nlu.DeleteAudioFilesRequest) returns (ondewo.nlu.DeleteAudioFilesResponse);
     */
    deleteAudioFiles(input: DeleteAudioFilesRequest, options?: RpcOptions): UnaryCall<DeleteAudioFilesRequest, DeleteAudioFilesResponse>;
    /**
     * RPC to get a consolidated audio file for a specific session.
     * Retrieves a single audio file that combines all audio files associated with the specified session.
     * Returns details of the consolidated audio file.
     *
     * @generated from protobuf rpc: GetAudioFileOfSession(ondewo.nlu.GetAudioFileOfSessionRequest) returns (ondewo.nlu.AudioFileResource);
     */
    getAudioFileOfSession(input: GetAudioFileOfSessionRequest, options?: RpcOptions): UnaryCall<GetAudioFileOfSessionRequest, AudioFileResource>;
    /**
     * RPC to get a list audio files for a specific session.
     * Retrieves a single audio file that combines all audio files associated with the specified session.
     *
     * @generated from protobuf rpc: ListAudioFiles(ondewo.nlu.ListAudioFilesRequest) returns (ondewo.nlu.ListAudioFilesResponse);
     */
    listAudioFiles(input: ListAudioFilesRequest, options?: RpcOptions): UnaryCall<ListAudioFilesRequest, ListAudioFilesResponse>;
}
/**
 * A session represents an interaction with a user. You retrieve user input
 * and pass it to the [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
 * [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method to determine
 * user intent and respond.
 *
 * @generated from protobuf service ondewo.nlu.Sessions
 */
export declare class SessionsClient implements ISessionsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Processes a natural language query and returns structured, actionable data
     * as a result. This method is not idempotent, because it may cause contexts
     * and session entity types to be updated, which in turn might affect
     * results of future queries.
     *
     * @generated from protobuf rpc: DetectIntent(ondewo.nlu.DetectIntentRequest) returns (ondewo.nlu.DetectIntentResponse);
     */
    detectIntent(input: DetectIntentRequest, options?: RpcOptions): UnaryCall<DetectIntentRequest, DetectIntentResponse>;
    /**
     * Processes a natural language query in audio format in a streaming fashion
     * and returns structured, actionable data as a result. This method is only
     * available via the gRPC API (not REST).
     *
     * @generated from protobuf rpc: StreamingDetectIntent(stream ondewo.nlu.StreamingDetectIntentRequest) returns (stream ondewo.nlu.StreamingDetectIntentResponse);
     */
    streamingDetectIntent(options?: RpcOptions): DuplexStreamingCall<StreamingDetectIntentRequest, StreamingDetectIntentResponse>;
    /**
     * *** SESSION RELATED ENDPOINTS *** //
     * ListSessions: returns list of sessions from ondewo-kb; by default returns only session IDs
     *
     * @generated from protobuf rpc: ListSessions(ondewo.nlu.ListSessionsRequest) returns (ondewo.nlu.ListSessionsResponse);
     */
    listSessions(input: ListSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionsRequest, ListSessionsResponse>;
    /**
     * GetSession: returns a session(=conversation) from ondewo-kb
     *
     * @generated from protobuf rpc: GetSession(ondewo.nlu.GetSessionRequest) returns (ondewo.nlu.Session);
     */
    getSession(input: GetSessionRequest, options?: RpcOptions): UnaryCall<GetSessionRequest, Session>;
    /**
     * CreateSession: creates and returns a session(=conversation) from ondewo-kb
     *
     * @generated from protobuf rpc: CreateSession(ondewo.nlu.CreateSessionRequest) returns (ondewo.nlu.Session);
     */
    createSession(input: CreateSessionRequest, options?: RpcOptions): UnaryCall<CreateSessionRequest, Session>;
    /**
     * CreateSessionStep: creates a new session step for a session
     *
     * @generated from protobuf rpc: CreateSessionStep(ondewo.nlu.CreateSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    createSessionStep(input: CreateSessionStepRequest, options?: RpcOptions): UnaryCall<CreateSessionStepRequest, SessionStep>;
    /**
     * GetSessionStep: gets an existing session step of a session
     *
     * @generated from protobuf rpc: GetSessionStep(ondewo.nlu.GetSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    getSessionStep(input: GetSessionStepRequest, options?: RpcOptions): UnaryCall<GetSessionStepRequest, SessionStep>;
    /**
     * UpdateSessionStep: updates an existing session step in a session
     *
     * @generated from protobuf rpc: UpdateSessionStep(ondewo.nlu.UpdateSessionStepRequest) returns (ondewo.nlu.SessionStep);
     */
    updateSessionStep(input: UpdateSessionStepRequest, options?: RpcOptions): UnaryCall<UpdateSessionStepRequest, SessionStep>;
    /**
     * DeleteSessionStep: deletes an existing session step from the session
     *
     * @generated from protobuf rpc: DeleteSessionStep(ondewo.nlu.DeleteSessionStepRequest) returns (google.protobuf.Empty);
     */
    deleteSessionStep(input: DeleteSessionStepRequest, options?: RpcOptions): UnaryCall<DeleteSessionStepRequest, Empty>;
    /**
     * DeleteSession: delete a session(=conversation) from ondewo-kb (for testing only)
     *
     * @generated from protobuf rpc: DeleteSession(ondewo.nlu.DeleteSessionRequest) returns (google.protobuf.Empty);
     */
    deleteSession(input: DeleteSessionRequest, options?: RpcOptions): UnaryCall<DeleteSessionRequest, Empty>;
    /**
     * *** SESSION-LABEL RELATED ENDPOINTS *** //
     *
     * @generated from protobuf rpc: ListSessionLabels(ondewo.nlu.ListSessionLabelsRequest) returns (ondewo.nlu.ListSessionLabelsResponse);
     */
    listSessionLabels(input: ListSessionLabelsRequest, options?: RpcOptions): UnaryCall<ListSessionLabelsRequest, ListSessionLabelsResponse>;
    /**
     * @generated from protobuf rpc: ListSessionLabelsOfAllSessions(ondewo.nlu.ListSessionLabelsOfAllSessionsRequest) returns (ondewo.nlu.ListSessionLabelsResponse);
     */
    listSessionLabelsOfAllSessions(input: ListSessionLabelsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionLabelsOfAllSessionsRequest, ListSessionLabelsResponse>;
    /**
     * @generated from protobuf rpc: ListLanguageCodesOfAllSessions(ondewo.nlu.ListLanguageCodesOfAllSessionsRequest) returns (ondewo.nlu.ListLanguageCodesResponse);
     */
    listLanguageCodesOfAllSessions(input: ListLanguageCodesOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListLanguageCodesOfAllSessionsRequest, ListLanguageCodesResponse>;
    /**
     * @generated from protobuf rpc: ListMatchedIntentsOfAllSessions(ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest) returns (ondewo.nlu.ListMatchedIntentsResponse);
     */
    listMatchedIntentsOfAllSessions(input: ListMatchedIntentsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListMatchedIntentsOfAllSessionsRequest, ListMatchedIntentsResponse>;
    /**
     * @generated from protobuf rpc: ListMatchedEntityTypesOfAllSessions(ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest) returns (ondewo.nlu.ListMatchedEntityTypesResponse);
     */
    listMatchedEntityTypesOfAllSessions(input: ListMatchedEntityTypesOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListMatchedEntityTypesOfAllSessionsRequest, ListMatchedEntityTypesResponse>;
    /**
     * @generated from protobuf rpc: ListUserIdsOfAllSessions(ondewo.nlu.ListUserIdsOfAllSessionsRequest) returns (ondewo.nlu.ListUserIdsResponse);
     */
    listUserIdsOfAllSessions(input: ListUserIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListUserIdsOfAllSessionsRequest, ListUserIdsResponse>;
    /**
     * @generated from protobuf rpc: ListIdentifiedUserIdsOfAllSessions(ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest) returns (ondewo.nlu.ListIdentifiedUserIdsResponse);
     */
    listIdentifiedUserIdsOfAllSessions(input: ListIdentifiedUserIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListIdentifiedUserIdsOfAllSessionsRequest, ListIdentifiedUserIdsResponse>;
    /**
     * @generated from protobuf rpc: ListTagsOfAllSessions(ondewo.nlu.ListTagsOfAllSessionsRequest) returns (ondewo.nlu.ListTagsResponse);
     */
    listTagsOfAllSessions(input: ListTagsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListTagsOfAllSessionsRequest, ListTagsResponse>;
    /**
     * @generated from protobuf rpc: ListInputContextsOfAllSessions(ondewo.nlu.ListInputContextsOfAllSessionsRequest) returns (ondewo.nlu.ListInputContextsResponse);
     */
    listInputContextsOfAllSessions(input: ListInputContextsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListInputContextsOfAllSessionsRequest, ListInputContextsResponse>;
    /**
     * @generated from protobuf rpc: ListOutputContextsOfAllSessions(ondewo.nlu.ListOutputContextsOfAllSessionsRequest) returns (ondewo.nlu.ListOutputContextsResponse);
     */
    listOutputContextsOfAllSessions(input: ListOutputContextsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListOutputContextsOfAllSessionsRequest, ListOutputContextsResponse>;
    /**
     * @generated from protobuf rpc: ListPlatformsOfAllSessions(ondewo.nlu.ListPlatformsOfAllSessionsRequest) returns (ondewo.nlu.ListPlatformsResponse);
     */
    listPlatformsOfAllSessions(input: ListPlatformsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListPlatformsOfAllSessionsRequest, ListPlatformsResponse>;
    /**
     * @generated from protobuf rpc: ListAccountIdsOfAllSessions(ondewo.nlu.ListAccountIdsOfAllSessionsRequest) returns (ondewo.nlu.ListAccountIdsResponse);
     */
    listAccountIdsOfAllSessions(input: ListAccountIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListAccountIdsOfAllSessionsRequest, ListAccountIdsResponse>;
    /**
     * @generated from protobuf rpc: ListPropertyIdsOfAllSessions(ondewo.nlu.ListPropertyIdsOfAllSessionsRequest) returns (ondewo.nlu.ListPropertyIdsResponse);
     */
    listPropertyIdsOfAllSessions(input: ListPropertyIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListPropertyIdsOfAllSessionsRequest, ListPropertyIdsResponse>;
    /**
     * @generated from protobuf rpc: ListDatastreamIdsOfAllSessions(ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest) returns (ondewo.nlu.ListDatastreamIdsResponse);
     */
    listDatastreamIdsOfAllSessions(input: ListDatastreamIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListDatastreamIdsOfAllSessionsRequest, ListDatastreamIdsResponse>;
    /**
     * @generated from protobuf rpc: ListOriginIdsOfAllSessions(ondewo.nlu.ListOriginIdsOfAllSessionsRequest) returns (ondewo.nlu.ListOriginIdsResponse);
     */
    listOriginIdsOfAllSessions(input: ListOriginIdsOfAllSessionsRequest, options?: RpcOptions): UnaryCall<ListOriginIdsOfAllSessionsRequest, ListOriginIdsResponse>;
    /**
     * @generated from protobuf rpc: AddSessionLabels(ondewo.nlu.AddSessionLabelsRequest) returns (ondewo.nlu.Session);
     */
    addSessionLabels(input: AddSessionLabelsRequest, options?: RpcOptions): UnaryCall<AddSessionLabelsRequest, Session>;
    /**
     * @generated from protobuf rpc: DeleteSessionLabels(ondewo.nlu.DeleteSessionLabelsRequest) returns (ondewo.nlu.Session);
     */
    deleteSessionLabels(input: DeleteSessionLabelsRequest, options?: RpcOptions): UnaryCall<DeleteSessionLabelsRequest, Session>;
    /**
     * @generated from protobuf rpc: AddSessionComment(ondewo.nlu.AddSessionCommentRequest) returns (ondewo.nlu.Comment);
     */
    addSessionComment(input: AddSessionCommentRequest, options?: RpcOptions): UnaryCall<AddSessionCommentRequest, Comment>;
    /**
     * @generated from protobuf rpc: DeleteSessionComments(ondewo.nlu.DeleteSessionCommentsRequest) returns (ondewo.nlu.Session);
     */
    deleteSessionComments(input: DeleteSessionCommentsRequest, options?: RpcOptions): UnaryCall<DeleteSessionCommentsRequest, Session>;
    /**
     * @generated from protobuf rpc: UpdateSessionComments(ondewo.nlu.UpdateSessionCommentsRequest) returns (ondewo.nlu.Session);
     */
    updateSessionComments(input: UpdateSessionCommentsRequest, options?: RpcOptions): UnaryCall<UpdateSessionCommentsRequest, Session>;
    /**
     * @generated from protobuf rpc: ListSessionComments(ondewo.nlu.ListSessionCommentsRequest) returns (ondewo.nlu.ListSessionCommentsResponse);
     */
    listSessionComments(input: ListSessionCommentsRequest, options?: RpcOptions): UnaryCall<ListSessionCommentsRequest, ListSessionCommentsResponse>;
    /**
     * *** SESSION-REVIEW RELATED ENDPOINTS *** //
     * ListSessionReviews:
     * returns list of session reviews from ondewo-kb; by default only returns session review IDs
     *
     * @generated from protobuf rpc: ListSessionReviews(ondewo.nlu.ListSessionReviewsRequest) returns (ondewo.nlu.ListSessionReviewsResponse);
     */
    listSessionReviews(input: ListSessionReviewsRequest, options?: RpcOptions): UnaryCall<ListSessionReviewsRequest, ListSessionReviewsResponse>;
    /**
     * GetSessionReview:
     * returns a session-review from ondewo-kb or computes the first review if none exists
     *
     * @generated from protobuf rpc: GetSessionReview(ondewo.nlu.GetSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    getSessionReview(input: GetSessionReviewRequest, options?: RpcOptions): UnaryCall<GetSessionReviewRequest, SessionReview>;
    /**
     * GetLatestSessionReview:
     * returns a session-review from ondewo-kb or computes the first review if none exists
     *
     * @generated from protobuf rpc: GetLatestSessionReview(ondewo.nlu.GetLatestSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    getLatestSessionReview(input: GetLatestSessionReviewRequest, options?: RpcOptions): UnaryCall<GetLatestSessionReviewRequest, SessionReview>;
    /**
     * CreateSessionReview:
     * persist a session review in ondewo-kb
     * as a side effect: also update training data in ondewo-cai
     *
     * @generated from protobuf rpc: CreateSessionReview(ondewo.nlu.CreateSessionReviewRequest) returns (ondewo.nlu.SessionReview);
     */
    createSessionReview(input: CreateSessionReviewRequest, options?: RpcOptions): UnaryCall<CreateSessionReviewRequest, SessionReview>;
    /**
     * RPC to get audio files based on specified criteria.
     * Retrieves information about audio files associated with specific sessions.
     * Returns a response containing details of the requested audio files.
     *
     * @generated from protobuf rpc: GetAudioFiles(ondewo.nlu.GetAudioFilesRequest) returns (ondewo.nlu.GetAudioFilesResponse);
     */
    getAudioFiles(input: GetAudioFilesRequest, options?: RpcOptions): UnaryCall<GetAudioFilesRequest, GetAudioFilesResponse>;
    /**
     * RPC to add audio files to a session.
     * Adds new audio files to the specified session, providing details about each file.
     * Returns a response containing information about the added audio files.
     *
     * @generated from protobuf rpc: AddAudioFiles(ondewo.nlu.AddAudioFilesRequest) returns (ondewo.nlu.AddAudioFilesResponse);
     */
    addAudioFiles(input: AddAudioFilesRequest, options?: RpcOptions): UnaryCall<AddAudioFilesRequest, AddAudioFilesResponse>;
    /**
     * RPC to delete specified audio files.
     * Deletes audio files associated with specific sessions based on unique identifiers.
     * Returns an empty response indicating the successful deletion of the specified audio files.
     *
     * @generated from protobuf rpc: DeleteAudioFiles(ondewo.nlu.DeleteAudioFilesRequest) returns (ondewo.nlu.DeleteAudioFilesResponse);
     */
    deleteAudioFiles(input: DeleteAudioFilesRequest, options?: RpcOptions): UnaryCall<DeleteAudioFilesRequest, DeleteAudioFilesResponse>;
    /**
     * RPC to get a consolidated audio file for a specific session.
     * Retrieves a single audio file that combines all audio files associated with the specified session.
     * Returns details of the consolidated audio file.
     *
     * @generated from protobuf rpc: GetAudioFileOfSession(ondewo.nlu.GetAudioFileOfSessionRequest) returns (ondewo.nlu.AudioFileResource);
     */
    getAudioFileOfSession(input: GetAudioFileOfSessionRequest, options?: RpcOptions): UnaryCall<GetAudioFileOfSessionRequest, AudioFileResource>;
    /**
     * RPC to get a list audio files for a specific session.
     * Retrieves a single audio file that combines all audio files associated with the specified session.
     *
     * @generated from protobuf rpc: ListAudioFiles(ondewo.nlu.ListAudioFilesRequest) returns (ondewo.nlu.ListAudioFilesResponse);
     */
    listAudioFiles(input: ListAudioFilesRequest, options?: RpcOptions): UnaryCall<ListAudioFilesRequest, ListAudioFilesResponse>;
}
