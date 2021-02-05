import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './qa.pb';
import * as googleProtobuf000 from '../../google/protobuf/empty.pb';
export declare class QAClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAnswerResponse>
     */
    getAnswer(requestData: thisProto.GetAnswerRequest, requestMetadata?: Metadata): Observable<thisProto.GetAnswerResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAnswerResponse>>
     */
    getAnswer$eventStream(requestData: thisProto.GetAnswerRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetAnswerResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunScraperResponse>
     */
    runScraper(requestData: googleProtobuf000.Empty, requestMetadata?: Metadata): Observable<thisProto.RunScraperResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunScraperResponse>>
     */
    runScraper$eventStream(requestData: googleProtobuf000.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.RunScraperResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunTrainingResponse>
     */
    runTraining(requestData: googleProtobuf000.Empty, requestMetadata?: Metadata): Observable<thisProto.RunTrainingResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunTrainingResponse>>
     */
    runTraining$eventStream(requestData: googleProtobuf000.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.RunTrainingResponse>>;
}
