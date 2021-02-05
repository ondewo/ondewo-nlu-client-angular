import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './context.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
export declare class ContextsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListContextsResponse>
     */
    listContexts(requestData: thisProto.ListContextsRequest, requestMetadata?: Metadata): Observable<thisProto.ListContextsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListContextsResponse>>
     */
    listContexts$eventStream(requestData: thisProto.ListContextsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListContextsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    getContext(requestData: thisProto.GetContextRequest, requestMetadata?: Metadata): Observable<thisProto.Context>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    getContext$eventStream(requestData: thisProto.GetContextRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Context>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    createContext(requestData: thisProto.CreateContextRequest, requestMetadata?: Metadata): Observable<thisProto.Context>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    createContext$eventStream(requestData: thisProto.CreateContextRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Context>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    updateContext(requestData: thisProto.UpdateContextRequest, requestMetadata?: Metadata): Observable<thisProto.Context>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    updateContext$eventStream(requestData: thisProto.UpdateContextRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Context>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteContext(requestData: thisProto.DeleteContextRequest, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteContext$eventStream(requestData: thisProto.DeleteContextRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteAllContexts(requestData: thisProto.DeleteAllContextsRequest, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteAllContexts$eventStream(requestData: thisProto.DeleteAllContextsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
}
