import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './entity-type.pb';
import * as googleLongrunning001 from '../../google/longrunning/operations.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
export declare class EntityTypesClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData: thisProto.ListEntityTypesRequest, requestMetadata?: Metadata): Observable<thisProto.ListEntityTypesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
     */
    listEntityTypes$eventStream(requestData: thisProto.ListEntityTypesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    getEntityType(requestData: thisProto.GetEntityTypeRequest, requestMetadata?: Metadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    getEntityType$eventStream(requestData: thisProto.GetEntityTypeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.EntityType>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    createEntityType(requestData: thisProto.CreateEntityTypeRequest, requestMetadata?: Metadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    createEntityType$eventStream(requestData: thisProto.CreateEntityTypeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.EntityType>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    updateEntityType(requestData: thisProto.UpdateEntityTypeRequest, requestMetadata?: Metadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    updateEntityType$eventStream(requestData: thisProto.UpdateEntityTypeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.EntityType>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteEntityType(requestData: thisProto.DeleteEntityTypeRequest, requestMetadata?: Metadata): Observable<googleProtobuf002.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteEntityType$eventStream(requestData: thisProto.DeleteEntityTypeRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf002.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntityTypes(requestData: thisProto.BatchUpdateEntityTypesRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntityTypes$eventStream(requestData: thisProto.BatchUpdateEntityTypesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntityTypes(requestData: thisProto.BatchDeleteEntityTypesRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntityTypes$eventStream(requestData: thisProto.BatchDeleteEntityTypesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchCreateEntities(requestData: thisProto.BatchCreateEntitiesRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchCreateEntities$eventStream(requestData: thisProto.BatchCreateEntitiesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntities(requestData: thisProto.BatchUpdateEntitiesRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntities$eventStream(requestData: thisProto.BatchUpdateEntitiesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntities(requestData: thisProto.BatchDeleteEntitiesRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntities$eventStream(requestData: thisProto.BatchDeleteEntitiesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
}
