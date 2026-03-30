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
import * as googleApi001 from '../../google/api/annotations.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleRpc005 from '../../google/rpc/status.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/operation-metadata.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleType008 from '../../google/type/latlng.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/operations.pb';
import * as ondewoNlu014 from '../../ondewo/nlu/session.pb';
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
      requestData: thisProto.RagDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteRequest,
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
     * Client streaming: /ondewo.nlu.Rags/RagUploadDocument
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDocument>>
     */
    ragUploadDocument: (
      requestData: Observable<thisProto.RagUploadDocumentRequest>,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocument>> => {
      return this.handler.handle({
        type: GrpcCallType.clientStream,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUploadDocument',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUploadDocumentRequest,
        responseClass: thisProto.RagDocument
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
     * @returns Observable<GrpcEvent<thisProto.RagDocumentList>>
     */
    ragListDocuments: (
      requestData: thisProto.RagListDocumentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDocumentList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListDocuments',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListDocumentsRequest,
        responseClass: thisProto.RagDocumentList
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
     * Unary call: /ondewo.nlu.Rags/RagGetKnowledgeGraph
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetKnowledgeGraphResponse>>
     */
    ragGetKnowledgeGraph: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetKnowledgeGraphResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetKnowledgeGraph',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: thisProto.RagGetKnowledgeGraphResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteKnowledgeGraph
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragDeleteKnowledgeGraph: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteKnowledgeGraph',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagConstructKnowledgeGraph
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagConstructKnowledgeGraphResponse>>
     */
    ragConstructKnowledgeGraph: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagConstructKnowledgeGraphResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagConstructKnowledgeGraph',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: thisProto.RagConstructKnowledgeGraphResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagKnowledgeGraphStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagTaskStatus>>
     */
    ragKnowledgeGraphStatus: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagTaskStatus>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagKnowledgeGraphStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: thisProto.RagTaskStatus
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagConstructRaptor
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagConstructRaptorResponse>>
     */
    ragConstructRaptor: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagConstructRaptorResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagConstructRaptor',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: thisProto.RagConstructRaptorResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRaptorStatus
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagTaskStatus>>
     */
    ragRaptorStatus: (
      requestData: thisProto.RagDatasetIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagTaskStatus>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRaptorStatus',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDatasetIdRequest,
        responseClass: thisProto.RagTaskStatus
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
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragUpdateChunk: (
      requestData: thisProto.RagUpdateChunkRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChunk',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChunkRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateChatAssistant
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatAssistant>>
     */
    ragCreateChatAssistant: (
      requestData: thisProto.RagCreateChatAssistantRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatAssistant>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateChatAssistant',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateChatAssistantRequest,
        responseClass: thisProto.RagChatAssistant
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateChatAssistant
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragUpdateChatAssistant: (
      requestData: thisProto.RagUpdateChatAssistantRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChatAssistant',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChatAssistantRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteChatAssistants
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagPartialSuccess>>
     */
    ragDeleteChatAssistants: (
      requestData: thisProto.RagDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagPartialSuccess>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteChatAssistants',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteRequest,
        responseClass: thisProto.RagPartialSuccess
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListChatAssistants
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagChatAssistantList>>
     */
    ragListChatAssistants: (
      requestData: thisProto.RagListChatAssistantsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagChatAssistantList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListChatAssistants',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListChatAssistantsRequest,
        responseClass: thisProto.RagChatAssistantList
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagCreateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragCreateAgent: (
      requestData: thisProto.RagCreateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateAgentRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragUpdateAgent: (
      requestData: thisProto.RagUpdateAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateAgentRequest,
        responseClass: googleProtobuf003.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteAgent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragDeleteAgent: (
      requestData: thisProto.RagDeleteAgentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteAgent',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteAgentRequest,
        responseClass: googleProtobuf003.Empty
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
     * Unary call: /ondewo.nlu.Rags/RagUpdateChatSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    ragUpdateChatSession: (
      requestData: thisProto.RagUpdateChatSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf003.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateChatSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateChatSessionRequest,
        responseClass: googleProtobuf003.Empty
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
     * Unary call: /ondewo.nlu.Rags/RagCreateCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragCreateCrawler: (
      requestData: thisProto.RagCreateCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagCreateCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagCreateCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragGetCrawler: (
      requestData: thisProto.RagGetCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListCrawlers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListCrawlersResponse>>
     */
    ragListCrawlers: (
      requestData: thisProto.RagListCrawlersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListCrawlersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListCrawlers',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListCrawlersRequest,
        responseClass: thisProto.RagListCrawlersResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagUpdateCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawler>>
     */
    ragUpdateCrawler: (
      requestData: thisProto.RagUpdateCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawler>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagUpdateCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagUpdateCrawlerRequest,
        responseClass: thisProto.RagCrawler
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlerResponse>>
     */
    ragDeleteCrawler: (
      requestData: thisProto.RagDeleteCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlerRequest,
        responseClass: thisProto.RagDeleteCrawlerResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStartCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu013.Operation>>
     */
    ragStartCrawler: (
      requestData: thisProto.RagStartCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu013.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStartCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagStartCrawlerRequest,
        responseClass: ondewoNlu013.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagStopCrawler
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagStopCrawlerResponse>>
     */
    ragStopCrawler: (
      requestData: thisProto.RagStopCrawlerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagStopCrawlerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagStopCrawler',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagStopCrawlerRequest,
        responseClass: thisProto.RagStopCrawlerResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerRun
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu013.Operation>>
     */
    ragGetCrawlerRun: (
      requestData: thisProto.RagGetCrawlerRunRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu013.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerRun',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerRunRequest,
        responseClass: ondewoNlu013.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagListCrawlerRuns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagListCrawlerRunsResponse>>
     */
    ragListCrawlerRuns: (
      requestData: thisProto.RagListCrawlerRunsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagListCrawlerRunsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagListCrawlerRuns',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagListCrawlerRunsRequest,
        responseClass: thisProto.RagListCrawlerRunsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawlerRuns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlerRunsResponse>>
     */
    ragDeleteCrawlerRuns: (
      requestData: thisProto.RagDeleteCrawlerRunsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlerRunsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawlerRuns',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlerRunsRequest,
        responseClass: thisProto.RagDeleteCrawlerRunsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerResult
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagCrawlerResult>>
     */
    ragGetCrawlerResult: (
      requestData: thisProto.RagGetCrawlerResultRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagCrawlerResult>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerResult',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerResultRequest,
        responseClass: thisProto.RagCrawlerResult
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerResults
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetCrawlerResultsResponse>>
     */
    ragGetCrawlerResults: (
      requestData: thisProto.RagGetCrawlerResultsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagGetCrawlerResultsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerResults',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerResultsRequest,
        responseClass: thisProto.RagGetCrawlerResultsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu013.Operation>>
     */
    ragAddCrawlerResultsToDatasets: (
      requestData: thisProto.RagAddCrawlerResultsToDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu013.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagAddCrawlerResultsToDatasetsRequest,
        responseClass: ondewoNlu013.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu013.Operation>>
     */
    ragRemoveCrawlerResultsFromDatasets: (
      requestData: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu013.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
        responseClass: ondewoNlu013.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagGetCrawlerAttachedDatasetsResponse>>
     */
    ragGetCrawlerAttachedDatasets: (
      requestData: thisProto.RagGetCrawlerAttachedDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.RagGetCrawlerAttachedDatasetsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagGetCrawlerAttachedDatasetsRequest,
        responseClass: thisProto.RagGetCrawlerAttachedDatasetsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.Rags/RagDeleteCrawlers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RagDeleteCrawlersResponse>>
     */
    ragDeleteCrawlers: (
      requestData: thisProto.RagDeleteCrawlersRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RagDeleteCrawlersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.Rags/RagDeleteCrawlers',
        requestData,
        requestMetadata,
        requestClass: thisProto.RagDeleteCrawlersRequest,
        responseClass: thisProto.RagDeleteCrawlersResponse
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
    requestData: thisProto.RagDeleteRequest,
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
   * Client streaming @/ondewo.nlu.Rags/RagUploadDocument
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDocument>
   */
  ragUploadDocument(
    requestData: Observable<thisProto.RagUploadDocumentRequest>,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocument> {
    return this.$raw
      .ragUploadDocument(requestData, requestMetadata)
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
   * @returns Observable<thisProto.RagDocumentList>
   */
  ragListDocuments(
    requestData: thisProto.RagListDocumentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDocumentList> {
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
   * Unary call @/ondewo.nlu.Rags/RagGetKnowledgeGraph
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetKnowledgeGraphResponse>
   */
  ragGetKnowledgeGraph(
    requestData: thisProto.RagDatasetIdRequest,
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
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragDeleteKnowledgeGraph(
    requestData: thisProto.RagDatasetIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .ragDeleteKnowledgeGraph(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagConstructKnowledgeGraph
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagConstructKnowledgeGraphResponse>
   */
  ragConstructKnowledgeGraph(
    requestData: thisProto.RagDatasetIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagConstructKnowledgeGraphResponse> {
    return this.$raw
      .ragConstructKnowledgeGraph(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagKnowledgeGraphStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagTaskStatus>
   */
  ragKnowledgeGraphStatus(
    requestData: thisProto.RagDatasetIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagTaskStatus> {
    return this.$raw
      .ragKnowledgeGraphStatus(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagConstructRaptor
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagConstructRaptorResponse>
   */
  ragConstructRaptor(
    requestData: thisProto.RagDatasetIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagConstructRaptorResponse> {
    return this.$raw
      .ragConstructRaptor(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRaptorStatus
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagTaskStatus>
   */
  ragRaptorStatus(
    requestData: thisProto.RagDatasetIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagTaskStatus> {
    return this.$raw
      .ragRaptorStatus(requestData, requestMetadata)
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
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragUpdateChunk(
    requestData: thisProto.RagUpdateChunkRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .ragUpdateChunk(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateChatAssistant
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatAssistant>
   */
  ragCreateChatAssistant(
    requestData: thisProto.RagCreateChatAssistantRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatAssistant> {
    return this.$raw
      .ragCreateChatAssistant(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateChatAssistant
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragUpdateChatAssistant(
    requestData: thisProto.RagUpdateChatAssistantRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .ragUpdateChatAssistant(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteChatAssistants
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagPartialSuccess>
   */
  ragDeleteChatAssistants(
    requestData: thisProto.RagDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagPartialSuccess> {
    return this.$raw
      .ragDeleteChatAssistants(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListChatAssistants
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagChatAssistantList>
   */
  ragListChatAssistants(
    requestData: thisProto.RagListChatAssistantsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagChatAssistantList> {
    return this.$raw
      .ragListChatAssistants(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagCreateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragCreateAgent(
    requestData: thisProto.RagCreateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .ragCreateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragUpdateAgent(
    requestData: thisProto.RagUpdateAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
    return this.$raw
      .ragUpdateAgent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteAgent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragDeleteAgent(
    requestData: thisProto.RagDeleteAgentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
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
   * Unary call @/ondewo.nlu.Rags/RagUpdateChatSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf003.Empty>
   */
  ragUpdateChatSession(
    requestData: thisProto.RagUpdateChatSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf003.Empty> {
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
   * Unary call @/ondewo.nlu.Rags/RagCreateCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragCreateCrawler(
    requestData: thisProto.RagCreateCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragCreateCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragGetCrawler(
    requestData: thisProto.RagGetCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragGetCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListCrawlers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListCrawlersResponse>
   */
  ragListCrawlers(
    requestData: thisProto.RagListCrawlersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListCrawlersResponse> {
    return this.$raw
      .ragListCrawlers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagUpdateCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawler>
   */
  ragUpdateCrawler(
    requestData: thisProto.RagUpdateCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawler> {
    return this.$raw
      .ragUpdateCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlerResponse>
   */
  ragDeleteCrawler(
    requestData: thisProto.RagDeleteCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlerResponse> {
    return this.$raw
      .ragDeleteCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStartCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu013.Operation>
   */
  ragStartCrawler(
    requestData: thisProto.RagStartCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu013.Operation> {
    return this.$raw
      .ragStartCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagStopCrawler
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagStopCrawlerResponse>
   */
  ragStopCrawler(
    requestData: thisProto.RagStopCrawlerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagStopCrawlerResponse> {
    return this.$raw
      .ragStopCrawler(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerRun
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu013.Operation>
   */
  ragGetCrawlerRun(
    requestData: thisProto.RagGetCrawlerRunRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu013.Operation> {
    return this.$raw
      .ragGetCrawlerRun(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagListCrawlerRuns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagListCrawlerRunsResponse>
   */
  ragListCrawlerRuns(
    requestData: thisProto.RagListCrawlerRunsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagListCrawlerRunsResponse> {
    return this.$raw
      .ragListCrawlerRuns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawlerRuns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlerRunsResponse>
   */
  ragDeleteCrawlerRuns(
    requestData: thisProto.RagDeleteCrawlerRunsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlerRunsResponse> {
    return this.$raw
      .ragDeleteCrawlerRuns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerResult
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagCrawlerResult>
   */
  ragGetCrawlerResult(
    requestData: thisProto.RagGetCrawlerResultRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagCrawlerResult> {
    return this.$raw
      .ragGetCrawlerResult(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerResults
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetCrawlerResultsResponse>
   */
  ragGetCrawlerResults(
    requestData: thisProto.RagGetCrawlerResultsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetCrawlerResultsResponse> {
    return this.$raw
      .ragGetCrawlerResults(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu013.Operation>
   */
  ragAddCrawlerResultsToDatasets(
    requestData: thisProto.RagAddCrawlerResultsToDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu013.Operation> {
    return this.$raw
      .ragAddCrawlerResultsToDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu013.Operation>
   */
  ragRemoveCrawlerResultsFromDatasets(
    requestData: thisProto.RagRemoveCrawlerResultsFromDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu013.Operation> {
    return this.$raw
      .ragRemoveCrawlerResultsFromDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagGetCrawlerAttachedDatasetsResponse>
   */
  ragGetCrawlerAttachedDatasets(
    requestData: thisProto.RagGetCrawlerAttachedDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagGetCrawlerAttachedDatasetsResponse> {
    return this.$raw
      .ragGetCrawlerAttachedDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.Rags/RagDeleteCrawlers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RagDeleteCrawlersResponse>
   */
  ragDeleteCrawlers(
    requestData: thisProto.RagDeleteCrawlersRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RagDeleteCrawlersResponse> {
    return this.$raw
      .ragDeleteCrawlers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
