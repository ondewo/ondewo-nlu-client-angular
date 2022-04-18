import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './qa.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as i0 from "@angular/core";
/**
 * Service client implementation for ondewo.qa.QA
 */
export declare class QAClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary call: /ondewo.qa.QA/GetAnswer
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetAnswerResponse>>
         */
        getAnswer: (requestData: thisProto.GetAnswerRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetAnswerResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/RunScraper
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RunScraperResponse>>
         */
        runScraper: (requestData: thisProto.RunScraperRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RunScraperResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/UpdateDatabase
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.UpdateDatabaseResponse>>
         */
        updateDatabase: (requestData: thisProto.UpdateDatabaseRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.UpdateDatabaseResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/RunTraining
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.RunTrainingResponse>>
         */
        runTraining: (requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.RunTrainingResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/GetServerState
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetServerStateResponse>>
         */
        getServerState: (requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetServerStateResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/ListProjectIds
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListProjectIdsResponse>>
         */
        listProjectIds: (requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListProjectIdsResponse>>;
        /**
         * Unary call: /ondewo.qa.QA/GetProjectConfig
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.GetProjectConfigResponse>>
         */
        getProjectConfig: (requestData: thisProto.GetProjectConfigRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.GetProjectConfigResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary call @/ondewo.qa.QA/GetAnswer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAnswerResponse>
     */
    getAnswer(requestData: thisProto.GetAnswerRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetAnswerResponse>;
    /**
     * Unary call @/ondewo.qa.QA/RunScraper
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunScraperResponse>
     */
    runScraper(requestData: thisProto.RunScraperRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.RunScraperResponse>;
    /**
     * Unary call @/ondewo.qa.QA/UpdateDatabase
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateDatabaseResponse>
     */
    updateDatabase(requestData: thisProto.UpdateDatabaseRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.UpdateDatabaseResponse>;
    /**
     * Unary call @/ondewo.qa.QA/RunTraining
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunTrainingResponse>
     */
    runTraining(requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.RunTrainingResponse>;
    /**
     * Unary call @/ondewo.qa.QA/GetServerState
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetServerStateResponse>
     */
    getServerState(requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.GetServerStateResponse>;
    /**
     * Unary call @/ondewo.qa.QA/ListProjectIds
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListProjectIdsResponse>
     */
    listProjectIds(requestData: googleProtobuf003.Empty, requestMetadata?: GrpcMetadata): Observable<thisProto.ListProjectIdsResponse>;
    /**
     * Unary call @/ondewo.qa.QA/GetProjectConfig
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetProjectConfigResponse>
     */
    getProjectConfig(requestData: thisProto.GetProjectConfigRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.GetProjectConfigResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QAClient, [{ optional: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QAClient>;
}
