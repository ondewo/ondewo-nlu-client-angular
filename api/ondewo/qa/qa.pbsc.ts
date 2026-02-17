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
import * as thisProto from './qa.pb';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleRpc007 from '../../google/rpc/status.pb';
import * as googleType008 from '../../google/type/latlng.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/session.pb';
import { GRPC_QA_CLIENT_SETTINGS } from './qa.pbconf';
/**
 * Service client implementation for ondewo.qa.QA
 */
@Injectable({ providedIn: 'any' })
export class QAClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /ondewo.qa.QA/GetAnswer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAnswerResponse>>
     */
    getAnswer: (
      requestData: thisProto.GetAnswerRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAnswerResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/GetAnswer',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAnswerRequest,
        responseClass: thisProto.GetAnswerResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/RunScraper
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RunScraperResponse>>
     */
    runScraper: (
      requestData: thisProto.RunScraperRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RunScraperResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/RunScraper',
        requestData,
        requestMetadata,
        requestClass: thisProto.RunScraperRequest,
        responseClass: thisProto.RunScraperResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/UpdateDatabase
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UpdateDatabaseResponse>>
     */
    updateDatabase: (
      requestData: thisProto.UpdateDatabaseRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UpdateDatabaseResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/UpdateDatabase',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateDatabaseRequest,
        responseClass: thisProto.UpdateDatabaseResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/RunTraining
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RunTrainingResponse>>
     */
    runTraining: (
      requestData: googleProtobuf003.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RunTrainingResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/RunTraining',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf003.Empty,
        responseClass: thisProto.RunTrainingResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/GetServerState
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetServerStateResponse>>
     */
    getServerState: (
      requestData: googleProtobuf003.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetServerStateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/GetServerState',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf003.Empty,
        responseClass: thisProto.GetServerStateResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/ListProjectIds
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListProjectIdsResponse>>
     */
    listProjectIds: (
      requestData: googleProtobuf003.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListProjectIdsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/ListProjectIds',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf003.Empty,
        responseClass: thisProto.ListProjectIdsResponse
      });
    },
    /**
     * Unary call: /ondewo.qa.QA/GetProjectConfig
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetProjectConfigResponse>>
     */
    getProjectConfig: (
      requestData: thisProto.GetProjectConfigRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetProjectConfigResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/ondewo.qa.QA/GetProjectConfig',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProjectConfigRequest,
        responseClass: thisProto.GetProjectConfigResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_QA_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('ondewo.qa.QA', settings);
  }

  /**
   * Unary call @/ondewo.qa.QA/GetAnswer
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAnswerResponse>
   */
  getAnswer(
    requestData: thisProto.GetAnswerRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAnswerResponse> {
    return this.$raw
      .getAnswer(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/RunScraper
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RunScraperResponse>
   */
  runScraper(
    requestData: thisProto.RunScraperRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RunScraperResponse> {
    return this.$raw
      .runScraper(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/UpdateDatabase
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UpdateDatabaseResponse>
   */
  updateDatabase(
    requestData: thisProto.UpdateDatabaseRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UpdateDatabaseResponse> {
    return this.$raw
      .updateDatabase(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/RunTraining
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RunTrainingResponse>
   */
  runTraining(
    requestData: googleProtobuf003.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RunTrainingResponse> {
    return this.$raw
      .runTraining(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/GetServerState
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetServerStateResponse>
   */
  getServerState(
    requestData: googleProtobuf003.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetServerStateResponse> {
    return this.$raw
      .getServerState(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/ListProjectIds
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListProjectIdsResponse>
   */
  listProjectIds(
    requestData: googleProtobuf003.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListProjectIdsResponse> {
    return this.$raw
      .listProjectIds(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/ondewo.qa.QA/GetProjectConfig
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetProjectConfigResponse>
   */
  getProjectConfig(
    requestData: thisProto.GetProjectConfigRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetProjectConfigResponse> {
    return this.$raw
      .getProjectConfig(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
