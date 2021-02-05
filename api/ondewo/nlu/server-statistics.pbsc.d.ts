import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './server-statistics.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
export declare class ServerStatisticsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getProjectCount(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getProjectCount$eventStream(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserProjectCount(requestData: thisProto.GetUserProjectCountRequest, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserProjectCount$eventStream(requestData: thisProto.GetUserProjectCountRequest, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<ondewoNlu002.StatResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<ondewoNlu002.StatResponse>>;
}
