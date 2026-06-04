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
}
