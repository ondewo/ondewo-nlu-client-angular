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
import * as thisProto from './llm-evaluation.pb';
import * as googleApi000 from '../../google/api/annotations.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleRpc004 from '../../google/rpc/status.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/operation-metadata.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
import { GRPC_LLM_EVALUATIONS_CLIENT_SETTINGS } from './llm-evaluation.pbconf';
/**
 * Service client implementation for ondewo.nlu.LlmEvaluations
 */
@Injectable({ providedIn: 'any' })
export class LlmEvaluationsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationDataset>>
     */
    llmEvaluationCreateDataset: (
      requestData: thisProto.CreateLlmEvaluationDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationDatasetRequest,
        responseClass: thisProto.LlmEvaluationDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationDataset>>
     */
    llmEvaluationGetDataset: (
      requestData: thisProto.GetLlmEvaluationDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationDatasetRequest,
        responseClass: thisProto.LlmEvaluationDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationDatasetsResponse>>
     */
    llmEvaluationListDatasets: (
      requestData: thisProto.ListLlmEvaluationDatasetsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationDatasetsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationDatasetsRequest,
        responseClass: thisProto.ListLlmEvaluationDatasetsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationDataset>>
     */
    llmEvaluationUpdateDataset: (
      requestData: thisProto.UpdateLlmEvaluationDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationDataset>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationDatasetRequest,
        responseClass: thisProto.LlmEvaluationDataset
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteDataset: (
      requestData: thisProto.DeleteLlmEvaluationDatasetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationDatasetRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExample>>
     */
    llmEvaluationAddExample: (
      requestData: thisProto.AddLlmEvaluationExampleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExample>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddLlmEvaluationExampleRequest,
        responseClass: thisProto.LlmEvaluationExample
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AddLlmEvaluationExamplesResponse>>
     */
    llmEvaluationAddExamples: (
      requestData: thisProto.AddLlmEvaluationExamplesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AddLlmEvaluationExamplesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddLlmEvaluationExamplesRequest,
        responseClass: thisProto.AddLlmEvaluationExamplesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExample>>
     */
    llmEvaluationGetExample: (
      requestData: thisProto.GetLlmEvaluationExampleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExample>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationExampleRequest,
        responseClass: thisProto.LlmEvaluationExample
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationExamplesResponse>>
     */
    llmEvaluationListExamples: (
      requestData: thisProto.ListLlmEvaluationExamplesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationExamplesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationExamplesRequest,
        responseClass: thisProto.ListLlmEvaluationExamplesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExample>>
     */
    llmEvaluationUpdateExample: (
      requestData: thisProto.UpdateLlmEvaluationExampleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExample>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationExampleRequest,
        responseClass: thisProto.LlmEvaluationExample
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteExample: (
      requestData: thisProto.DeleteLlmEvaluationExampleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationExampleRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    llmEvaluationRunExperiment: (
      requestData: thisProto.RunLlmEvaluationExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.RunLlmEvaluationExperimentRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>>
     */
    llmEvaluationGetExperiment: (
      requestData: thisProto.GetLlmEvaluationExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationExperimentRequest,
        responseClass: thisProto.LlmEvaluationExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationExperimentsResponse>>
     */
    llmEvaluationListExperiments: (
      requestData: thisProto.ListLlmEvaluationExperimentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListLlmEvaluationExperimentsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationExperimentsRequest,
        responseClass: thisProto.ListLlmEvaluationExperimentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>>
     */
    llmEvaluationUpdateExperiment: (
      requestData: thisProto.UpdateLlmEvaluationExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationExperimentRequest,
        responseClass: thisProto.LlmEvaluationExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteExperiment: (
      requestData: thisProto.DeleteLlmEvaluationExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationExperimentRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>>
     */
    llmEvaluationCancelExperiment: (
      requestData: thisProto.CancelLlmEvaluationExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelLlmEvaluationExperimentRequest,
        responseClass: thisProto.LlmEvaluationExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationComparison>>
     */
    llmEvaluationCompareExperiments: (
      requestData: thisProto.CompareLlmEvaluationExperimentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationComparison>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments',
        requestData,
        requestMetadata,
        requestClass: thisProto.CompareLlmEvaluationExperimentsRequest,
        responseClass: thisProto.LlmEvaluationComparison
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationFeedback>>
     */
    llmEvaluationSubmitFeedback: (
      requestData: thisProto.SubmitLlmEvaluationFeedbackRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationFeedback>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback',
        requestData,
        requestMetadata,
        requestClass: thisProto.SubmitLlmEvaluationFeedbackRequest,
        responseClass: thisProto.LlmEvaluationFeedback
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationFeedbackResponse>>
     */
    llmEvaluationListFeedback: (
      requestData: thisProto.ListLlmEvaluationFeedbackRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationFeedbackResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationFeedbackRequest,
        responseClass: thisProto.ListLlmEvaluationFeedbackResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteFeedback: (
      requestData: thisProto.DeleteLlmEvaluationFeedbackRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationFeedbackRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateFeedback
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationFeedback>>
     */
    llmEvaluationUpdateFeedback: (
      requestData: thisProto.UpdateLlmEvaluationFeedbackRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationFeedback>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateFeedback',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationFeedbackRequest,
        responseClass: thisProto.LlmEvaluationFeedback
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReleaseGate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>>
     */
    llmEvaluationCreateReleaseGate: (
      requestData: thisProto.CreateLlmEvaluationReleaseGateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReleaseGate',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationReleaseGateRequest,
        responseClass: thisProto.LlmEvaluationReleaseGate
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>>
     */
    llmEvaluationGetReleaseGate: (
      requestData: thisProto.GetLlmEvaluationReleaseGateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGate',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationReleaseGateRequest,
        responseClass: thisProto.LlmEvaluationReleaseGate
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGates
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationReleaseGatesResponse>>
     */
    llmEvaluationListReleaseGates: (
      requestData: thisProto.ListLlmEvaluationReleaseGatesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListLlmEvaluationReleaseGatesResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGates',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationReleaseGatesRequest,
        responseClass: thisProto.ListLlmEvaluationReleaseGatesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateReleaseGate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>>
     */
    llmEvaluationUpdateReleaseGate: (
      requestData: thisProto.UpdateLlmEvaluationReleaseGateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGate>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateReleaseGate',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationReleaseGateRequest,
        responseClass: thisProto.LlmEvaluationReleaseGate
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReleaseGate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteReleaseGate: (
      requestData: thisProto.DeleteLlmEvaluationReleaseGateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReleaseGate',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationReleaseGateRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationRunReleaseGate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    llmEvaluationRunReleaseGate: (
      requestData: thisProto.RunLlmEvaluationReleaseGateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationRunReleaseGate',
        requestData,
        requestMetadata,
        requestClass: thisProto.RunLlmEvaluationReleaseGateRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGateRun
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGateRun>>
     */
    llmEvaluationGetReleaseGateRun: (
      requestData: thisProto.GetLlmEvaluationReleaseGateRunRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReleaseGateRun>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGateRun',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationReleaseGateRunRequest,
        responseClass: thisProto.LlmEvaluationReleaseGateRun
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGateRuns
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationReleaseGateRunsResponse>>
     */
    llmEvaluationListReleaseGateRuns: (
      requestData: thisProto.ListLlmEvaluationReleaseGateRunsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListLlmEvaluationReleaseGateRunsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGateRuns',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationReleaseGateRunsRequest,
        responseClass: thisProto.ListLlmEvaluationReleaseGateRunsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateScorecard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>>
     */
    llmEvaluationCreateScorecard: (
      requestData: thisProto.CreateLlmEvaluationScorecardRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateScorecard',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationScorecardRequest,
        responseClass: thisProto.LlmEvaluationScorecard
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetScorecard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>>
     */
    llmEvaluationGetScorecard: (
      requestData: thisProto.GetLlmEvaluationScorecardRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetScorecard',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationScorecardRequest,
        responseClass: thisProto.LlmEvaluationScorecard
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListScorecards
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationScorecardsResponse>>
     */
    llmEvaluationListScorecards: (
      requestData: thisProto.ListLlmEvaluationScorecardsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationScorecardsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListScorecards',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationScorecardsRequest,
        responseClass: thisProto.ListLlmEvaluationScorecardsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateScorecard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>>
     */
    llmEvaluationUpdateScorecard: (
      requestData: thisProto.UpdateLlmEvaluationScorecardRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationScorecard>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateScorecard',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationScorecardRequest,
        responseClass: thisProto.LlmEvaluationScorecard
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteScorecard
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteScorecard: (
      requestData: thisProto.DeleteLlmEvaluationScorecardRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteScorecard',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationScorecardRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetProjectSettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationProjectSettings>>
     */
    llmEvaluationGetProjectSettings: (
      requestData: thisProto.GetLlmEvaluationProjectSettingsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationProjectSettings>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetProjectSettings',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationProjectSettingsRequest,
        responseClass: thisProto.LlmEvaluationProjectSettings
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateProjectSettings
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationProjectSettings>>
     */
    llmEvaluationUpdateProjectSettings: (
      requestData: thisProto.UpdateLlmEvaluationProjectSettingsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationProjectSettings>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateProjectSettings',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationProjectSettingsRequest,
        responseClass: thisProto.LlmEvaluationProjectSettings
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListEvaluators
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationEvaluatorsResponse>>
     */
    llmEvaluationListEvaluators: (
      requestData: thisProto.ListLlmEvaluationEvaluatorsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationEvaluatorsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListEvaluators',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationEvaluatorsRequest,
        responseClass: thisProto.ListLlmEvaluationEvaluatorsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateExamplesFromSession
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateLlmEvaluationExamplesFromSessionResponse>>
     */
    llmEvaluationCreateExamplesFromSession: (
      requestData: thisProto.CreateLlmEvaluationExamplesFromSessionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.CreateLlmEvaluationExamplesFromSessionResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path:
          '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateExamplesFromSession',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationExamplesFromSessionRequest,
        responseClass: thisProto.CreateLlmEvaluationExamplesFromSessionResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationSimulateConversations
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<ondewoNlu008.Operation>>
     */
    llmEvaluationSimulateConversations: (
      requestData: thisProto.SimulateLlmEvaluationConversationsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<ondewoNlu008.Operation>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationSimulateConversations',
        requestData,
        requestMetadata,
        requestClass: thisProto.SimulateLlmEvaluationConversationsRequest,
        responseClass: ondewoNlu008.Operation
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateSchedule
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>>
     */
    llmEvaluationCreateSchedule: (
      requestData: thisProto.CreateLlmEvaluationScheduleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateSchedule',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationScheduleRequest,
        responseClass: thisProto.LlmEvaluationSchedule
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetSchedule
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>>
     */
    llmEvaluationGetSchedule: (
      requestData: thisProto.GetLlmEvaluationScheduleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetSchedule',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationScheduleRequest,
        responseClass: thisProto.LlmEvaluationSchedule
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListSchedules
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationSchedulesResponse>>
     */
    llmEvaluationListSchedules: (
      requestData: thisProto.ListLlmEvaluationSchedulesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationSchedulesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListSchedules',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationSchedulesRequest,
        responseClass: thisProto.ListLlmEvaluationSchedulesResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateSchedule
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>>
     */
    llmEvaluationUpdateSchedule: (
      requestData: thisProto.UpdateLlmEvaluationScheduleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationSchedule>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateSchedule',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationScheduleRequest,
        responseClass: thisProto.LlmEvaluationSchedule
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteSchedule
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteSchedule: (
      requestData: thisProto.DeleteLlmEvaluationScheduleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteSchedule',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationScheduleRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReport>>
     */
    llmEvaluationCreateReport: (
      requestData: thisProto.CreateLlmEvaluationReportRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReport>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReport',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationReportRequest,
        responseClass: thisProto.LlmEvaluationReport
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetReport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationReport>>
     */
    llmEvaluationGetReport: (
      requestData: thisProto.GetLlmEvaluationReportRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationReport>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReport',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationReportRequest,
        responseClass: thisProto.LlmEvaluationReport
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListReports
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationReportsResponse>>
     */
    llmEvaluationListReports: (
      requestData: thisProto.ListLlmEvaluationReportsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListLlmEvaluationReportsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReports',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationReportsRequest,
        responseClass: thisProto.ListLlmEvaluationReportsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReport
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteReport: (
      requestData: thisProto.DeleteLlmEvaluationReportRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReport',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationReportRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationCreateAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>>
     */
    llmEvaluationCreateAbExperiment: (
      requestData: thisProto.CreateLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateLlmEvaluationAbExperimentRequest,
        responseClass: thisProto.LlmEvaluationAbExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>>
     */
    llmEvaluationGetAbExperiment: (
      requestData: thisProto.GetLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationAbExperimentRequest,
        responseClass: thisProto.LlmEvaluationAbExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationListAbExperiments
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListLlmEvaluationAbExperimentsResponse>>
     */
    llmEvaluationListAbExperiments: (
      requestData: thisProto.ListLlmEvaluationAbExperimentsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListLlmEvaluationAbExperimentsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbExperiments',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListLlmEvaluationAbExperimentsRequest,
        responseClass: thisProto.ListLlmEvaluationAbExperimentsResponse
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>>
     */
    llmEvaluationUpdateAbExperiment: (
      requestData: thisProto.UpdateLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateLlmEvaluationAbExperimentRequest,
        responseClass: thisProto.LlmEvaluationAbExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    llmEvaluationDeleteAbExperiment: (
      requestData: thisProto.DeleteLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteLlmEvaluationAbExperimentRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationStartAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>>
     */
    llmEvaluationStartAbExperiment: (
      requestData: thisProto.StartLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationStartAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.StartLlmEvaluationAbExperimentRequest,
        responseClass: thisProto.LlmEvaluationAbExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationStopAbExperiment
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>>
     */
    llmEvaluationStopAbExperiment: (
      requestData: thisProto.StopLlmEvaluationAbExperimentRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LlmEvaluationAbExperiment>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationStopAbExperiment',
        requestData,
        requestMetadata,
        requestClass: thisProto.StopLlmEvaluationAbExperimentRequest,
        responseClass: thisProto.LlmEvaluationAbExperiment
      });
    },
    /**
     * Unary call: /ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperimentResults
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetLlmEvaluationAbExperimentResultsResponse>>
     */
    llmEvaluationGetAbExperimentResults: (
      requestData: thisProto.GetLlmEvaluationAbExperimentResultsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.GetLlmEvaluationAbExperimentResultsResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperimentResults',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetLlmEvaluationAbExperimentResultsRequest,
        responseClass: thisProto.GetLlmEvaluationAbExperimentResultsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_LLM_EVALUATIONS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'ondewo.nlu.LlmEvaluations',
      settings
    );
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationDataset>
   */
  llmEvaluationCreateDataset(
    requestData: thisProto.CreateLlmEvaluationDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationDataset> {
    return this.$raw
      .llmEvaluationCreateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationDataset>
   */
  llmEvaluationGetDataset(
    requestData: thisProto.GetLlmEvaluationDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationDataset> {
    return this.$raw
      .llmEvaluationGetDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationDatasetsResponse>
   */
  llmEvaluationListDatasets(
    requestData: thisProto.ListLlmEvaluationDatasetsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationDatasetsResponse> {
    return this.$raw
      .llmEvaluationListDatasets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationDataset>
   */
  llmEvaluationUpdateDataset(
    requestData: thisProto.UpdateLlmEvaluationDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationDataset> {
    return this.$raw
      .llmEvaluationUpdateDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteDataset(
    requestData: thisProto.DeleteLlmEvaluationDatasetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteDataset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExample>
   */
  llmEvaluationAddExample(
    requestData: thisProto.AddLlmEvaluationExampleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExample> {
    return this.$raw
      .llmEvaluationAddExample(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddLlmEvaluationExamplesResponse>
   */
  llmEvaluationAddExamples(
    requestData: thisProto.AddLlmEvaluationExamplesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AddLlmEvaluationExamplesResponse> {
    return this.$raw
      .llmEvaluationAddExamples(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExample>
   */
  llmEvaluationGetExample(
    requestData: thisProto.GetLlmEvaluationExampleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExample> {
    return this.$raw
      .llmEvaluationGetExample(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationExamplesResponse>
   */
  llmEvaluationListExamples(
    requestData: thisProto.ListLlmEvaluationExamplesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationExamplesResponse> {
    return this.$raw
      .llmEvaluationListExamples(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExample>
   */
  llmEvaluationUpdateExample(
    requestData: thisProto.UpdateLlmEvaluationExampleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExample> {
    return this.$raw
      .llmEvaluationUpdateExample(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteExample(
    requestData: thisProto.DeleteLlmEvaluationExampleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteExample(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  llmEvaluationRunExperiment(
    requestData: thisProto.RunLlmEvaluationExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .llmEvaluationRunExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExperiment>
   */
  llmEvaluationGetExperiment(
    requestData: thisProto.GetLlmEvaluationExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExperiment> {
    return this.$raw
      .llmEvaluationGetExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationExperimentsResponse>
   */
  llmEvaluationListExperiments(
    requestData: thisProto.ListLlmEvaluationExperimentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationExperimentsResponse> {
    return this.$raw
      .llmEvaluationListExperiments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExperiment>
   */
  llmEvaluationUpdateExperiment(
    requestData: thisProto.UpdateLlmEvaluationExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExperiment> {
    return this.$raw
      .llmEvaluationUpdateExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteExperiment(
    requestData: thisProto.DeleteLlmEvaluationExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationExperiment>
   */
  llmEvaluationCancelExperiment(
    requestData: thisProto.CancelLlmEvaluationExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationExperiment> {
    return this.$raw
      .llmEvaluationCancelExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationComparison>
   */
  llmEvaluationCompareExperiments(
    requestData: thisProto.CompareLlmEvaluationExperimentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationComparison> {
    return this.$raw
      .llmEvaluationCompareExperiments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationFeedback>
   */
  llmEvaluationSubmitFeedback(
    requestData: thisProto.SubmitLlmEvaluationFeedbackRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationFeedback> {
    return this.$raw
      .llmEvaluationSubmitFeedback(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationFeedbackResponse>
   */
  llmEvaluationListFeedback(
    requestData: thisProto.ListLlmEvaluationFeedbackRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationFeedbackResponse> {
    return this.$raw
      .llmEvaluationListFeedback(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteFeedback(
    requestData: thisProto.DeleteLlmEvaluationFeedbackRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteFeedback(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateFeedback
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationFeedback>
   */
  llmEvaluationUpdateFeedback(
    requestData: thisProto.UpdateLlmEvaluationFeedbackRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationFeedback> {
    return this.$raw
      .llmEvaluationUpdateFeedback(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReleaseGate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReleaseGate>
   */
  llmEvaluationCreateReleaseGate(
    requestData: thisProto.CreateLlmEvaluationReleaseGateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReleaseGate> {
    return this.$raw
      .llmEvaluationCreateReleaseGate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReleaseGate>
   */
  llmEvaluationGetReleaseGate(
    requestData: thisProto.GetLlmEvaluationReleaseGateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReleaseGate> {
    return this.$raw
      .llmEvaluationGetReleaseGate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGates
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationReleaseGatesResponse>
   */
  llmEvaluationListReleaseGates(
    requestData: thisProto.ListLlmEvaluationReleaseGatesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationReleaseGatesResponse> {
    return this.$raw
      .llmEvaluationListReleaseGates(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateReleaseGate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReleaseGate>
   */
  llmEvaluationUpdateReleaseGate(
    requestData: thisProto.UpdateLlmEvaluationReleaseGateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReleaseGate> {
    return this.$raw
      .llmEvaluationUpdateReleaseGate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReleaseGate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteReleaseGate(
    requestData: thisProto.DeleteLlmEvaluationReleaseGateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteReleaseGate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationRunReleaseGate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  llmEvaluationRunReleaseGate(
    requestData: thisProto.RunLlmEvaluationReleaseGateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .llmEvaluationRunReleaseGate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGateRun
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReleaseGateRun>
   */
  llmEvaluationGetReleaseGateRun(
    requestData: thisProto.GetLlmEvaluationReleaseGateRunRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReleaseGateRun> {
    return this.$raw
      .llmEvaluationGetReleaseGateRun(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGateRuns
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationReleaseGateRunsResponse>
   */
  llmEvaluationListReleaseGateRuns(
    requestData: thisProto.ListLlmEvaluationReleaseGateRunsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationReleaseGateRunsResponse> {
    return this.$raw
      .llmEvaluationListReleaseGateRuns(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateScorecard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationScorecard>
   */
  llmEvaluationCreateScorecard(
    requestData: thisProto.CreateLlmEvaluationScorecardRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationScorecard> {
    return this.$raw
      .llmEvaluationCreateScorecard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetScorecard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationScorecard>
   */
  llmEvaluationGetScorecard(
    requestData: thisProto.GetLlmEvaluationScorecardRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationScorecard> {
    return this.$raw
      .llmEvaluationGetScorecard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListScorecards
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationScorecardsResponse>
   */
  llmEvaluationListScorecards(
    requestData: thisProto.ListLlmEvaluationScorecardsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationScorecardsResponse> {
    return this.$raw
      .llmEvaluationListScorecards(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateScorecard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationScorecard>
   */
  llmEvaluationUpdateScorecard(
    requestData: thisProto.UpdateLlmEvaluationScorecardRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationScorecard> {
    return this.$raw
      .llmEvaluationUpdateScorecard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteScorecard
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteScorecard(
    requestData: thisProto.DeleteLlmEvaluationScorecardRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteScorecard(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetProjectSettings
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationProjectSettings>
   */
  llmEvaluationGetProjectSettings(
    requestData: thisProto.GetLlmEvaluationProjectSettingsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationProjectSettings> {
    return this.$raw
      .llmEvaluationGetProjectSettings(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateProjectSettings
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationProjectSettings>
   */
  llmEvaluationUpdateProjectSettings(
    requestData: thisProto.UpdateLlmEvaluationProjectSettingsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationProjectSettings> {
    return this.$raw
      .llmEvaluationUpdateProjectSettings(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListEvaluators
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationEvaluatorsResponse>
   */
  llmEvaluationListEvaluators(
    requestData: thisProto.ListLlmEvaluationEvaluatorsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationEvaluatorsResponse> {
    return this.$raw
      .llmEvaluationListEvaluators(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateExamplesFromSession
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateLlmEvaluationExamplesFromSessionResponse>
   */
  llmEvaluationCreateExamplesFromSession(
    requestData: thisProto.CreateLlmEvaluationExamplesFromSessionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateLlmEvaluationExamplesFromSessionResponse> {
    return this.$raw
      .llmEvaluationCreateExamplesFromSession(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationSimulateConversations
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<ondewoNlu008.Operation>
   */
  llmEvaluationSimulateConversations(
    requestData: thisProto.SimulateLlmEvaluationConversationsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<ondewoNlu008.Operation> {
    return this.$raw
      .llmEvaluationSimulateConversations(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateSchedule
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationSchedule>
   */
  llmEvaluationCreateSchedule(
    requestData: thisProto.CreateLlmEvaluationScheduleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationSchedule> {
    return this.$raw
      .llmEvaluationCreateSchedule(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetSchedule
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationSchedule>
   */
  llmEvaluationGetSchedule(
    requestData: thisProto.GetLlmEvaluationScheduleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationSchedule> {
    return this.$raw
      .llmEvaluationGetSchedule(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListSchedules
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationSchedulesResponse>
   */
  llmEvaluationListSchedules(
    requestData: thisProto.ListLlmEvaluationSchedulesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationSchedulesResponse> {
    return this.$raw
      .llmEvaluationListSchedules(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateSchedule
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationSchedule>
   */
  llmEvaluationUpdateSchedule(
    requestData: thisProto.UpdateLlmEvaluationScheduleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationSchedule> {
    return this.$raw
      .llmEvaluationUpdateSchedule(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteSchedule
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteSchedule(
    requestData: thisProto.DeleteLlmEvaluationScheduleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteSchedule(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReport>
   */
  llmEvaluationCreateReport(
    requestData: thisProto.CreateLlmEvaluationReportRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReport> {
    return this.$raw
      .llmEvaluationCreateReport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationReport>
   */
  llmEvaluationGetReport(
    requestData: thisProto.GetLlmEvaluationReportRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationReport> {
    return this.$raw
      .llmEvaluationGetReport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListReports
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationReportsResponse>
   */
  llmEvaluationListReports(
    requestData: thisProto.ListLlmEvaluationReportsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationReportsResponse> {
    return this.$raw
      .llmEvaluationListReports(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReport
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteReport(
    requestData: thisProto.DeleteLlmEvaluationReportRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteReport(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationAbExperiment>
   */
  llmEvaluationCreateAbExperiment(
    requestData: thisProto.CreateLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationAbExperiment> {
    return this.$raw
      .llmEvaluationCreateAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationAbExperiment>
   */
  llmEvaluationGetAbExperiment(
    requestData: thisProto.GetLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationAbExperiment> {
    return this.$raw
      .llmEvaluationGetAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbExperiments
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListLlmEvaluationAbExperimentsResponse>
   */
  llmEvaluationListAbExperiments(
    requestData: thisProto.ListLlmEvaluationAbExperimentsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListLlmEvaluationAbExperimentsResponse> {
    return this.$raw
      .llmEvaluationListAbExperiments(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationAbExperiment>
   */
  llmEvaluationUpdateAbExperiment(
    requestData: thisProto.UpdateLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationAbExperiment> {
    return this.$raw
      .llmEvaluationUpdateAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  llmEvaluationDeleteAbExperiment(
    requestData: thisProto.DeleteLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .llmEvaluationDeleteAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationStartAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationAbExperiment>
   */
  llmEvaluationStartAbExperiment(
    requestData: thisProto.StartLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationAbExperiment> {
    return this.$raw
      .llmEvaluationStartAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationStopAbExperiment
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LlmEvaluationAbExperiment>
   */
  llmEvaluationStopAbExperiment(
    requestData: thisProto.StopLlmEvaluationAbExperimentRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LlmEvaluationAbExperiment> {
    return this.$raw
      .llmEvaluationStopAbExperiment(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperimentResults
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetLlmEvaluationAbExperimentResultsResponse>
   */
  llmEvaluationGetAbExperimentResults(
    requestData: thisProto.GetLlmEvaluationAbExperimentResultsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetLlmEvaluationAbExperimentResultsResponse> {
    return this.$raw
      .llmEvaluationGetAbExperimentResults(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
