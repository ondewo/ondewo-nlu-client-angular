import { GrpcClientFactory, GrpcEvent, GrpcMetadata } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './entity-type.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleLongrunning006 from '../../google/longrunning/operations.pb';
/**
 * Service client implementation for ondewo.nlu.EntityTypes
 */
export declare class EntityTypesClient {
    private handler;
    private client;
    /**
     * Raw RPC implementation for each service client method.
     * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
     * Attention: these methods do not throw errors when non-zero status codes are received.
     */
    $raw: {
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/ListEntityTypes
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
         */
        listEntityTypes: (requestData: thisProto.ListEntityTypesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/GetEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EntityType>>
         */
        getEntityType: (requestData: thisProto.GetEntityTypeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EntityType>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/CreateEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EntityType>>
         */
        createEntityType: (requestData: thisProto.CreateEntityTypeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EntityType>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/UpdateEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.EntityType>>
         */
        updateEntityType: (requestData: thisProto.UpdateEntityTypeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.EntityType>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/DeleteEntityType
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
         */
        deleteEntityType: (requestData: thisProto.DeleteEntityTypeRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleProtobuf004.Empty>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleLongrunning006.Operation>>
         */
        batchUpdateEntityTypes: (requestData: thisProto.BatchUpdateEntityTypesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleLongrunning006.Operation>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<googleLongrunning006.Operation>>
         */
        batchDeleteEntityTypes: (requestData: thisProto.BatchDeleteEntityTypesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<googleLongrunning006.Operation>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchCreateEntities
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
         */
        batchCreateEntities: (requestData: thisProto.BatchCreateEntitiesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntities
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
         */
        batchUpdateEntities: (requestData: thisProto.BatchUpdateEntitiesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchGetEntities
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
         */
        batchGetEntities: (requestData: thisProto.BatchGetEntitiesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntities
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>
         */
        batchDeleteEntities: (requestData: thisProto.BatchDeleteEntitiesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>;
        /**
         * Unary RPC for /ondewo.nlu.EntityTypes/ListEntities
         *
         * @param requestMessage Request message
         * @param requestMetadata Request metadata
         * @returns Observable<GrpcEvent<thisProto.ListEntitiesResponse>>
         */
        listEntities: (requestData: thisProto.ListEntitiesRequest, requestMetadata?: GrpcMetadata) => Observable<GrpcEvent<thisProto.ListEntitiesResponse>>;
    };
    constructor(settings: any, clientFactory: GrpcClientFactory<any>, handler: GrpcHandler);
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/ListEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData: thisProto.ListEntityTypesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListEntityTypesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/GetEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    getEntityType(requestData: thisProto.GetEntityTypeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/CreateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    createEntityType(requestData: thisProto.CreateEntityTypeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/UpdateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    updateEntityType(requestData: thisProto.UpdateEntityTypeRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.EntityType>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/DeleteEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteEntityType(requestData: thisProto.DeleteEntityTypeRequest, requestMetadata?: GrpcMetadata): Observable<googleProtobuf004.Empty>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning006.Operation>
     */
    batchUpdateEntityTypes(requestData: thisProto.BatchUpdateEntityTypesRequest, requestMetadata?: GrpcMetadata): Observable<googleLongrunning006.Operation>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning006.Operation>
     */
    batchDeleteEntityTypes(requestData: thisProto.BatchDeleteEntityTypesRequest, requestMetadata?: GrpcMetadata): Observable<googleLongrunning006.Operation>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchCreateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchCreateEntities(requestData: thisProto.BatchCreateEntitiesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchEntitiesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchUpdateEntities(requestData: thisProto.BatchUpdateEntitiesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchEntitiesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchGetEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchGetEntities(requestData: thisProto.BatchGetEntitiesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchEntitiesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteEntitiesResponse>
     */
    batchDeleteEntities(requestData: thisProto.BatchDeleteEntitiesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.BatchDeleteEntitiesResponse>;
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/ListEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntitiesResponse>
     */
    listEntities(requestData: thisProto.ListEntitiesRequest, requestMetadata?: GrpcMetadata): Observable<thisProto.ListEntitiesResponse>;
}
