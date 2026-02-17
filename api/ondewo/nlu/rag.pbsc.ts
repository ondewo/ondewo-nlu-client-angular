/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './rag.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_RAGS_CLIENT_SETTINGS } from './rag.pbconf';
/**
 * Service client implementation for ondewo.nlu.Rags
 */
@Injectable({ providedIn: 'any' })
export class RagsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDataset>>
     */
    ragCreateDataset: (
      requestData: thisProto.RagCreateDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateDatasetRequest,
        responseClass: thisProto.RagDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDataset>>
     */
    ragUpdateDataset: (
      requestData: thisProto.RagUpdateDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateDatasetRequest,
        responseClass: thisProto.RagDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteDatasets: (
      requestData: thisProto.RagDeleteDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteDatasetsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDatasetList>>
     */
    ragListDatasets: (
      requestData: thisProto.RagListDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDatasetList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListDatasetsRequest,
        responseClass: thisProto.RagDatasetList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetKnowledgeGraph
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetKnowledgeGraphResponse>>
     */
    ragGetKnowledgeGraph: (
      requestData: thisProto.RagGetKnowledgeGraphRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetKnowledgeGraphResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetKnowledgeGraph',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetKnowledgeGraphRequest,
        responseClass: thisProto.RagGetKnowledgeGraphResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteKnowledgeGraph
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragDeleteKnowledgeGraph: (
      requestData: thisProto.RagDeleteKnowledgeGraphRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteKnowledgeGraph',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteKnowledgeGraphRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Client streaming: /ondewo.nlu.Rags/RagUploadDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocumentList>>
     */
    ragUploadDocuments: (
      requestData: Observable<thisProto.RagUploadDocumentsRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocumentList>> => {
      return this.handler.handle({
        type: GrpcCallType.clientStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUploadDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUploadDocumentsRequest,
        responseClass: thisProto.RagDocumentList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocument>>
     */
    ragUpdateDocument: (
      requestData: thisProto.RagUpdateDocumentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocument>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateDocumentRequest,
        responseClass: thisProto.RagDocument
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagDownloadDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFileChunk>>
     */
    ragDownloadDocument: (
      requestData: thisProto.RagDownloadDocumentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFileChunk>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDownloadDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDownloadDocumentRequest,
        responseClass: thisProto.RagFileChunk
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListDocumentsResponse>>
     */
    ragListDocuments: (
      requestData: thisProto.RagListDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListDocumentsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListDocumentsRequest,
        responseClass: thisProto.RagListDocumentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteDocuments: (
      requestData: thisProto.RagDeleteDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteDocumentsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagParseDocuments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragParseDocuments: (
      requestData: thisProto.RagParseDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagParseDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagParseDocumentsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStopParsing
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragStopParsing: (
      requestData: thisProto.RagStopParsingRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStopParsing',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagStopParsingRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListChunks
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListChunksResponse>>
     */
    ragListChunks: (
      requestData: thisProto.RagListChunksRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListChunksResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListChunks',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListChunksRequest,
        responseClass: thisProto.RagListChunksResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagAddChunk
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAddChunkResponse>>
     */
    ragAddChunk: (
      requestData: thisProto.RagAddChunkRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAddChunkResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAddChunk',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAddChunkRequest,
        responseClass: thisProto.RagAddChunkResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRemoveChunks
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragRemoveChunks: (
      requestData: thisProto.RagRemoveChunksRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRemoveChunks',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRemoveChunksRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateChunk
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragUpdateChunk: (
      requestData: thisProto.RagUpdateChunkRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChunk',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChunkRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRetrieval
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagRetrievalResponse>>
     */
    ragRetrieval: (
      requestData: thisProto.RagRetrievalRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagRetrievalResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRetrieval',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRetrievalRequest,
        responseClass: thisProto.RagRetrievalResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateChat
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChat>>
     */
    ragCreateChat: (
      requestData: thisProto.RagCreateChatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChat>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateChat',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateChatRequest,
        responseClass: thisProto.RagChat
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateChat
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragUpdateChat: (
      requestData: thisProto.RagUpdateChatRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChat',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChatRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteChats
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteChats: (
      requestData: thisProto.RagDeleteChatsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteChats',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteChatsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListChats
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatList>>
     */
    ragListChats: (
      requestData: thisProto.RagListChatsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListChats',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListChatsRequest,
        responseClass: thisProto.RagChatList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateChatSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatSession>>
     */
    ragCreateChatSession: (
      requestData: thisProto.RagCreateChatSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatSession>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateChatSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateChatSessionRequest,
        responseClass: thisProto.RagChatSession
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateAgentSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentSession>>
     */
    ragCreateAgentSession: (
      requestData: thisProto.RagCreateAgentSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentSession>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateAgentSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateAgentSessionRequest,
        responseClass: thisProto.RagAgentSession
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateChatSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragUpdateChatSession: (
      requestData: thisProto.RagUpdateChatSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChatSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChatSessionRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListChatSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatSessionList>>
     */
    ragListChatSessions: (
      requestData: thisProto.RagListChatSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatSessionList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListChatSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListChatSessionsRequest,
        responseClass: thisProto.RagChatSessionList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListAgentSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentSessionList>>
     */
    ragListAgentSessions: (
      requestData: thisProto.RagListAgentSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentSessionList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListAgentSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListAgentSessionsRequest,
        responseClass: thisProto.RagAgentSessionList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteChatSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteChatSessions: (
      requestData: thisProto.RagDeleteChatSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteChatSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteChatSessionsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteAgentSessions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteAgentSessions: (
      requestData: thisProto.RagDeleteAgentSessionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteAgentSessions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteAgentSessionsRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagChatCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatCompletionResponse>>
     */
    ragChatCompletion: (
      requestData: thisProto.RagChatCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagChatCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagChatCompletionRequest,
        responseClass: thisProto.RagChatCompletionResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagOpenAiChatCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagOpenAiChatCompletionResponse>>
     */
    ragOpenAiChatCompletion: (
      requestData: thisProto.RagOpenAiChatCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagOpenAiChatCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagOpenAiChatCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagOpenAiChatCompletionRequest,
        responseClass: thisProto.RagOpenAiChatCompletionResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagAgentCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentCompletionResponse>>
     */
    ragAgentCompletion: (
      requestData: thisProto.RagAgentCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAgentCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAgentCompletionRequest,
        responseClass: thisProto.RagAgentCompletionResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagOpenAiAgentCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagOpenAiChatCompletionResponse>>
     */
    ragOpenAiAgentCompletion: (
      requestData: thisProto.RagOpenAiAgentCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagOpenAiChatCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagOpenAiAgentCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagOpenAiAgentCompletionRequest,
        responseClass: thisProto.RagOpenAiChatCompletionResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragCreateAgent: (
      requestData: thisProto.RagCreateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateAgentRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragUpdateAgent: (
      requestData: thisProto.RagUpdateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateAgentRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragDeleteAgent: (
      requestData: thisProto.RagDeleteAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteAgentRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListAgents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentList>>
     */
    ragListAgents: (
      requestData: thisProto.RagListAgentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListAgents',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListAgentsRequest,
        responseClass: thisProto.RagAgentList
      });
    },
    /**
     * Client streaming: /ondewo.nlu.Rags/RagUploadFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFileList>>
     */
    ragUploadFiles: (
      requestData: Observable<thisProto.RagUploadFilesRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFileList>> => {
      return this.handler.handle({
        type: GrpcCallType.clientStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUploadFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUploadFilesRequest,
        responseClass: thisProto.RagFileList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFile>>
     */
    ragCreateFile: (
      requestData: thisProto.RagCreateFileRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFile>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateFile',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateFileRequest,
        responseClass: thisProto.RagFile
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListFilesResponse>>
     */
    ragListFiles: (
      requestData: thisProto.RagListFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListFilesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListFilesRequest,
        responseClass: thisProto.RagListFilesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetRootFolder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetRootFolderResponse>>
     */
    ragGetRootFolder: (
      requestData: thisProto.RagGetRootFolderRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetRootFolderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetRootFolder',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetRootFolderRequest,
        responseClass: thisProto.RagGetRootFolderResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetParentFolder
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetParentFolderResponse>>
     */
    ragGetParentFolder: (
      requestData: thisProto.RagGetParentFolderRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetParentFolderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetParentFolder',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetParentFolderRequest,
        responseClass: thisProto.RagGetParentFolderResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetAllParentFolders
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetAllParentFoldersResponse>>
     */
    ragGetAllParentFolders: (
      requestData: thisProto.RagGetAllParentFoldersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetAllParentFoldersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetAllParentFolders',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetAllParentFoldersRequest,
        responseClass: thisProto.RagGetAllParentFoldersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteFiles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragDeleteFiles: (
      requestData: thisProto.RagDeleteFilesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteFiles',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteFilesRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRenameFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragRenameFile: (
      requestData: thisProto.RagRenameFileRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRenameFile',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRenameFileRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagGetFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFileChunk>>
     */
    ragGetFile: (
      requestData: thisProto.RagGetFileRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFileChunk>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetFile',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetFileRequest,
        responseClass: thisProto.RagFileChunk
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagMoveFile
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    ragMoveFile: (
      requestData: thisProto.RagMoveFileRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagMoveFile',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagMoveFileRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagFileToDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagFileToDocumentList>>
     */
    ragFileToDocument: (
      requestData: thisProto.RagFileToDocumentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagFileToDocumentList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagFileToDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagFileToDocumentRequest,
        responseClass: thisProto.RagFileToDocumentList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDifyRetrieval
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDifyRecordList>>
     */
    ragDifyRetrieval: (
      requestData: thisProto.RagDifyRetrievalRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDifyRecordList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDifyRetrieval',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDifyRetrievalRequest,
        responseClass: thisProto.RagDifyRecordList
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagAsk
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAskResponse>>
     */
    ragAsk: (
      requestData: thisProto.RagAskRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAskResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAsk',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAskRequest,
        responseClass: thisProto.RagAskResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRelatedQuestions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagRelatedQuestionsResponse>>
     */
    ragRelatedQuestions: (
      requestData: thisProto.RagRelatedQuestionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagRelatedQuestionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRelatedQuestions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRelatedQuestionsRequest,
        responseClass: thisProto.RagRelatedQuestionsResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagChatbotCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatCompletionResponse>>
     */
    ragChatbotCompletion: (
      requestData: thisProto.RagChatbotCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagChatbotCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagChatbotCompletionRequest,
        responseClass: thisProto.RagChatCompletionResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagChatbotInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatbotInfoResponse>>
     */
    ragChatbotInfo: (
      requestData: thisProto.RagChatbotInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatbotInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagChatbotInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagChatbotInfoRequest,
        responseClass: thisProto.RagChatbotInfoResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagAgentbotCompletion
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentCompletionResponse>>
     */
    ragAgentbotCompletion: (
      requestData: thisProto.RagAgentbotCompletionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentCompletionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAgentbotCompletion',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAgentbotCompletionRequest,
        responseClass: thisProto.RagAgentCompletionResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagAgentbotInputs
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAgentbotInputsResponse>>
     */
    ragAgentbotInputs: (
      requestData: thisProto.RagAgentbotInputsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAgentbotInputsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAgentbotInputs',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAgentbotInputsRequest,
        responseClass: thisProto.RagAgentbotInputsResponse
      });
    },
    /**
     * Server streaming: /ondewo.nlu.Rags/RagSearchbotAsk
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagAskResponse>>
     */
    ragSearchbotAsk: (
      requestData: thisProto.RagSearchbotAskRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagAskResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagSearchbotAsk',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagSearchbotAskRequest,
        responseClass: thisProto.RagAskResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagSearchbotRetrieval
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagSearchbotRetrievalResponse>>
     */
    ragSearchbotRetrieval: (
      requestData: thisProto.RagSearchbotRetrievalRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagSearchbotRetrievalResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagSearchbotRetrieval',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagSearchbotRetrievalRequest,
        responseClass: thisProto.RagSearchbotRetrievalResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagSearchbotRelatedQuestions
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagRelatedQuestionsResponse>>
     */
    ragSearchbotRelatedQuestions: (
      requestData: thisProto.RagSearchbotRelatedQuestionsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagRelatedQuestionsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagSearchbotRelatedQuestions',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagSearchbotRelatedQuestionsRequest,
        responseClass: thisProto.RagRelatedQuestionsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagSearchbotDetail
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagSearchbotDetailResponse>>
     */
    ragSearchbotDetail: (
      requestData: thisProto.RagSearchbotDetailRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagSearchbotDetailResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagSearchbotDetail',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagSearchbotDetailRequest,
        responseClass: thisProto.RagSearchbotDetailResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagSearchbotMindmap
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Struct>>
     */
    ragSearchbotMindmap: (
      requestData: thisProto.RagSearchbotMindmapRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Struct>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagSearchbotMindmap',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagSearchbotMindmapRequest,
        responseClass: googleProtobuf001.Struct
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_RAGS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.nlu.Rags', settings);
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDataset>
   */
  ragCreateDataset(
    requestData: thisProto.RagCreateDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDataset> {
    return this.$raw
      .ragCreateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDataset>
   */
  ragUpdateDataset(
    requestData: thisProto.RagUpdateDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDataset> {
    return this.$raw
      .ragUpdateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteDatasets(
    requestData: thisProto.RagDeleteDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDatasetList>
   */
  ragListDatasets(
    requestData: thisProto.RagListDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDatasetList> {
    return this.$raw
      .ragListDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetKnowledgeGraph
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetKnowledgeGraphResponse>
   */
  ragGetKnowledgeGraph(
    requestData: thisProto.RagGetKnowledgeGraphRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetKnowledgeGraphResponse> {
    return this.$raw
      .ragGetKnowledgeGraph(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteKnowledgeGraph
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragDeleteKnowledgeGraph(
    requestData: thisProto.RagDeleteKnowledgeGraphRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragDeleteKnowledgeGraph(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Client streaming @/ondewo.nlu.Rags/RagUploadDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocumentList>
   */
  ragUploadDocuments(
    requestData: Observable<thisProto.RagUploadDocumentsRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocumentList> {
    return this.$raw
      .ragUploadDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocument>
   */
  ragUpdateDocument(
    requestData: thisProto.RagUpdateDocumentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocument> {
    return this.$raw
      .ragUpdateDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagDownloadDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFileChunk>
   */
  ragDownloadDocument(
    requestData: thisProto.RagDownloadDocumentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFileChunk> {
    return this.$raw
      .ragDownloadDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListDocumentsResponse>
   */
  ragListDocuments(
    requestData: thisProto.RagListDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListDocumentsResponse> {
    return this.$raw
      .ragListDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteDocuments(
    requestData: thisProto.RagDeleteDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagParseDocuments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragParseDocuments(
    requestData: thisProto.RagParseDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragParseDocuments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStopParsing
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragStopParsing(
    requestData: thisProto.RagStopParsingRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragStopParsing(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListChunks
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListChunksResponse>
   */
  ragListChunks(
    requestData: thisProto.RagListChunksRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListChunksResponse> {
    return this.$raw
      .ragListChunks(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagAddChunk
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAddChunkResponse>
   */
  ragAddChunk(
    requestData: thisProto.RagAddChunkRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAddChunkResponse> {
    return this.$raw
      .ragAddChunk(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRemoveChunks
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragRemoveChunks(
    requestData: thisProto.RagRemoveChunksRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragRemoveChunks(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateChunk
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragUpdateChunk(
    requestData: thisProto.RagUpdateChunkRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragUpdateChunk(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRetrieval
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagRetrievalResponse>
   */
  ragRetrieval(
    requestData: thisProto.RagRetrievalRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagRetrievalResponse> {
    return this.$raw
      .ragRetrieval(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateChat
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChat>
   */
  ragCreateChat(
    requestData: thisProto.RagCreateChatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChat> {
    return this.$raw
      .ragCreateChat(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateChat
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragUpdateChat(
    requestData: thisProto.RagUpdateChatRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragUpdateChat(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteChats
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteChats(
    requestData: thisProto.RagDeleteChatsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteChats(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListChats
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatList>
   */
  ragListChats(
    requestData: thisProto.RagListChatsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatList> {
    return this.$raw
      .ragListChats(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateChatSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatSession>
   */
  ragCreateChatSession(
    requestData: thisProto.RagCreateChatSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatSession> {
    return this.$raw
      .ragCreateChatSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateAgentSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentSession>
   */
  ragCreateAgentSession(
    requestData: thisProto.RagCreateAgentSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentSession> {
    return this.$raw
      .ragCreateAgentSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateChatSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragUpdateChatSession(
    requestData: thisProto.RagUpdateChatSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragUpdateChatSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListChatSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatSessionList>
   */
  ragListChatSessions(
    requestData: thisProto.RagListChatSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatSessionList> {
    return this.$raw
      .ragListChatSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListAgentSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentSessionList>
   */
  ragListAgentSessions(
    requestData: thisProto.RagListAgentSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentSessionList> {
    return this.$raw
      .ragListAgentSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteChatSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteChatSessions(
    requestData: thisProto.RagDeleteChatSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteChatSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteAgentSessions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteAgentSessions(
    requestData: thisProto.RagDeleteAgentSessionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteAgentSessions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagChatCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatCompletionResponse>
   */
  ragChatCompletion(
    requestData: thisProto.RagChatCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatCompletionResponse> {
    return this.$raw
      .ragChatCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagOpenAiChatCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagOpenAiChatCompletionResponse>
   */
  ragOpenAiChatCompletion(
    requestData: thisProto.RagOpenAiChatCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagOpenAiChatCompletionResponse> {
    return this.$raw
      .ragOpenAiChatCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagAgentCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentCompletionResponse>
   */
  ragAgentCompletion(
    requestData: thisProto.RagAgentCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentCompletionResponse> {
    return this.$raw
      .ragAgentCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagOpenAiAgentCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagOpenAiChatCompletionResponse>
   */
  ragOpenAiAgentCompletion(
    requestData: thisProto.RagOpenAiAgentCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagOpenAiChatCompletionResponse> {
    return this.$raw
      .ragOpenAiAgentCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragCreateAgent(
    requestData: thisProto.RagCreateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragCreateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragUpdateAgent(
    requestData: thisProto.RagUpdateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragUpdateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragDeleteAgent(
    requestData: thisProto.RagDeleteAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragDeleteAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListAgents
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentList>
   */
  ragListAgents(
    requestData: thisProto.RagListAgentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentList> {
    return this.$raw
      .ragListAgents(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Client streaming @/ondewo.nlu.Rags/RagUploadFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFileList>
   */
  ragUploadFiles(
    requestData: Observable<thisProto.RagUploadFilesRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFileList> {
    return this.$raw
      .ragUploadFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFile>
   */
  ragCreateFile(
    requestData: thisProto.RagCreateFileRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFile> {
    return this.$raw
      .ragCreateFile(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListFilesResponse>
   */
  ragListFiles(
    requestData: thisProto.RagListFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListFilesResponse> {
    return this.$raw
      .ragListFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetRootFolder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetRootFolderResponse>
   */
  ragGetRootFolder(
    requestData: thisProto.RagGetRootFolderRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetRootFolderResponse> {
    return this.$raw
      .ragGetRootFolder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetParentFolder
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetParentFolderResponse>
   */
  ragGetParentFolder(
    requestData: thisProto.RagGetParentFolderRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetParentFolderResponse> {
    return this.$raw
      .ragGetParentFolder(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetAllParentFolders
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetAllParentFoldersResponse>
   */
  ragGetAllParentFolders(
    requestData: thisProto.RagGetAllParentFoldersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetAllParentFoldersResponse> {
    return this.$raw
      .ragGetAllParentFolders(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteFiles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragDeleteFiles(
    requestData: thisProto.RagDeleteFilesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragDeleteFiles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRenameFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragRenameFile(
    requestData: thisProto.RagRenameFileRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragRenameFile(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagGetFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFileChunk>
   */
  ragGetFile(
    requestData: thisProto.RagGetFileRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFileChunk> {
    return this.$raw
      .ragGetFile(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagMoveFile
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  ragMoveFile(
    requestData: thisProto.RagMoveFileRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .ragMoveFile(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagFileToDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagFileToDocumentList>
   */
  ragFileToDocument(
    requestData: thisProto.RagFileToDocumentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagFileToDocumentList> {
    return this.$raw
      .ragFileToDocument(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDifyRetrieval
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDifyRecordList>
   */
  ragDifyRetrieval(
    requestData: thisProto.RagDifyRetrievalRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDifyRecordList> {
    return this.$raw
      .ragDifyRetrieval(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagAsk
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAskResponse>
   */
  ragAsk(
    requestData: thisProto.RagAskRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAskResponse> {
    return this.$raw
      .ragAsk(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRelatedQuestions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagRelatedQuestionsResponse>
   */
  ragRelatedQuestions(
    requestData: thisProto.RagRelatedQuestionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagRelatedQuestionsResponse> {
    return this.$raw
      .ragRelatedQuestions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagChatbotCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatCompletionResponse>
   */
  ragChatbotCompletion(
    requestData: thisProto.RagChatbotCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatCompletionResponse> {
    return this.$raw
      .ragChatbotCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagChatbotInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatbotInfoResponse>
   */
  ragChatbotInfo(
    requestData: thisProto.RagChatbotInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatbotInfoResponse> {
    return this.$raw
      .ragChatbotInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagAgentbotCompletion
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentCompletionResponse>
   */
  ragAgentbotCompletion(
    requestData: thisProto.RagAgentbotCompletionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentCompletionResponse> {
    return this.$raw
      .ragAgentbotCompletion(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagAgentbotInputs
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAgentbotInputsResponse>
   */
  ragAgentbotInputs(
    requestData: thisProto.RagAgentbotInputsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAgentbotInputsResponse> {
    return this.$raw
      .ragAgentbotInputs(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/ondewo.nlu.Rags/RagSearchbotAsk
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagAskResponse>
   */
  ragSearchbotAsk(
    requestData: thisProto.RagSearchbotAskRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagAskResponse> {
    return this.$raw
      .ragSearchbotAsk(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagSearchbotRetrieval
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagSearchbotRetrievalResponse>
   */
  ragSearchbotRetrieval(
    requestData: thisProto.RagSearchbotRetrievalRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagSearchbotRetrievalResponse> {
    return this.$raw
      .ragSearchbotRetrieval(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagSearchbotRelatedQuestions
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagRelatedQuestionsResponse>
   */
  ragSearchbotRelatedQuestions(
    requestData: thisProto.RagSearchbotRelatedQuestionsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagRelatedQuestionsResponse> {
    return this.$raw
      .ragSearchbotRelatedQuestions(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagSearchbotDetail
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagSearchbotDetailResponse>
   */
  ragSearchbotDetail(
    requestData: thisProto.RagSearchbotDetailRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagSearchbotDetailResponse> {
    return this.$raw
      .ragSearchbotDetail(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagSearchbotMindmap
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Struct>
   */
  ragSearchbotMindmap(
    requestData: thisProto.RagSearchbotMindmapRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Struct> {
    return this.$raw
      .ragSearchbotMindmap(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
