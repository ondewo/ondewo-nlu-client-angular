/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './entity-type.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleLongrunning006 from '../../google/longrunning/operations.pb';
import { GRPC_ENTITY_TYPES_CLIENT_SETTINGS } from './entity-type.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./entity-type.pbconf";
import * as i2 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.EntityTypes
 */
export class EntityTypesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/ListEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
             */
            listEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListEntityTypesRequest,
                    responseClass: thisProto.ListEntityTypesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/GetEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            getEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/GetEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/CreateEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            createEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/CreateEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/UpdateEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            updateEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/DeleteEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
             */
            deleteEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteEntityTypeRequest,
                    responseClass: googleProtobuf004.Empty
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleLongrunning006.Operation>>
             */
            batchUpdateEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchUpdateEntityTypesRequest,
                    responseClass: googleLongrunning006.Operation
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleLongrunning006.Operation>>
             */
            batchDeleteEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchDeleteEntityTypesRequest,
                    responseClass: googleLongrunning006.Operation
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchCreateEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchCreateEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchCreateEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchUpdateEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchUpdateEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchGetEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchGetEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchGetEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchGetEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>
             */
            batchDeleteEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchDeleteEntitiesRequest,
                    responseClass: thisProto.BatchDeleteEntitiesResponse
                });
            },
            /**
             * Unary RPC for /ondewo.nlu.EntityTypes/ListEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListEntitiesResponse>>
             */
            listEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/ListEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListEntitiesRequest,
                    responseClass: thisProto.ListEntitiesResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.EntityTypes', settings);
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/ListEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/GetEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    getEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/CreateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    createEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/UpdateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    updateEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/DeleteEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning006.Operation>
     */
    batchUpdateEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchUpdateEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleLongrunning006.Operation>
     */
    batchDeleteEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchDeleteEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchCreateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchCreateEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchCreateEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchUpdateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchUpdateEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchUpdateEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchGetEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchGetEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchGetEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/BatchDeleteEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteEntitiesResponse>
     */
    batchDeleteEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchDeleteEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC for /ondewo.nlu.EntityTypes/ListEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntitiesResponse>
     */
    listEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
EntityTypesClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntityTypesClient_Factory() { return new EntityTypesClient(i0.ɵɵinject(i1.GRPC_ENTITY_TYPES_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: EntityTypesClient, providedIn: "any" });
EntityTypesClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'any' },] }
];
EntityTypesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_ENTITY_TYPES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2VudGl0eS10eXBlLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUs5QyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxLQUFLLG9CQUFvQixNQUFNLHdDQUF3QyxDQUFDO0FBRy9FLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBQ3pFOztHQUVHO0FBRUgsTUFBTSxPQUFPLGlCQUFpQjtJQXVRNUIsWUFDeUQsUUFBYSxFQUN2QyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBdlE5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3NCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVB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LE1BQU0sU0FBQyxtQkFBbUI7WUE3UjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vZW50aXR5LXR5cGUucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvaHR0cC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDIgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMyBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBnb29nbGVScGMwMDUgZnJvbSAnLi4vLi4vZ29vZ2xlL3JwYy9zdGF0dXMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlTG9uZ3J1bm5pbmcwMDYgZnJvbSAnLi4vLi4vZ29vZ2xlL2xvbmdydW5uaW5nL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDcgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA4IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCB7IEdSUENfRU5USVRZX1RZUEVTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vZW50aXR5LXR5cGUucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuRW50aXR5VHlwZXNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIEVudGl0eVR5cGVzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0RW50aXR5VHlwZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0RW50aXR5VHlwZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvR2V0RW50aXR5VHlwZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj5cbiAgICAgKi9cbiAgICBnZXRFbnRpdHlUeXBlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEVudGl0eVR5cGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVudGl0eVR5cGU+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0dldEVudGl0eVR5cGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkVudGl0eVR5cGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9DcmVhdGVFbnRpdHlUeXBlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVudGl0eVR5cGU+PlxuICAgICAqL1xuICAgIGNyZWF0ZUVudGl0eVR5cGU6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW50aXR5VHlwZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQ3JlYXRlRW50aXR5VHlwZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRW50aXR5VHlwZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28ubmx1LkVudGl0eVR5cGVzL1VwZGF0ZUVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW50aXR5VHlwZT4+XG4gICAgICovXG4gICAgdXBkYXRlRW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9VcGRhdGVFbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FbnRpdHlUeXBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvRGVsZXRlRW50aXR5VHlwZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5Pj5cbiAgICAgKi9cbiAgICBkZWxldGVFbnRpdHlUeXBlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0RlbGV0ZUVudGl0eVR5cGUnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDQuRW1wdHlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0eVR5cGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDYuT3BlcmF0aW9uPj5cbiAgICAgKi9cbiAgICBiYXRjaFVwZGF0ZUVudGl0eVR5cGVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDYuT3BlcmF0aW9uPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0eVR5cGVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZUxvbmdydW5uaW5nMDA2Lk9wZXJhdGlvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoRGVsZXRlRW50aXR5VHlwZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwNi5PcGVyYXRpb24+PlxuICAgICAqL1xuICAgIGJhdGNoRGVsZXRlRW50aXR5VHlwZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwNi5PcGVyYXRpb24+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoRGVsZXRlRW50aXR5VHlwZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlTG9uZ3J1bm5pbmcwMDYuT3BlcmF0aW9uXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hDcmVhdGVFbnRpdGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaEVudGl0aWVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoQ3JlYXRlRW50aXRpZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaENyZWF0ZUVudGl0aWVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaEVudGl0aWVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0aWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgYmF0Y2hVcGRhdGVFbnRpdGllczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaEVudGl0aWVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoVXBkYXRlRW50aXRpZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoR2V0RW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaEdldEVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hHZXRFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoR2V0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hEZWxldGVFbnRpdGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0aWVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGJhdGNoRGVsZXRlRW50aXRpZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaERlbGV0ZUVudGl0aWVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0aWVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9MaXN0RW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdEVudGl0aWVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGxpc3RFbnRpdGllczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RFbnRpdGllc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9MaXN0RW50aXRpZXMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdEVudGl0aWVzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfRU5USVRZX1RZUEVTX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ29uZGV3by5ubHUuRW50aXR5VHlwZXMnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdEVudGl0eVR5cGVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdEVudGl0eVR5cGVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9HZXRFbnRpdHlUeXBlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkVudGl0eVR5cGU+XG4gICAqL1xuICBnZXRFbnRpdHlUeXBlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0RW50aXR5VHlwZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkVudGl0eVR5cGU+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZ2V0RW50aXR5VHlwZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQ3JlYXRlRW50aXR5VHlwZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPlxuICAgKi9cbiAgY3JlYXRlRW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNyZWF0ZUVudGl0eVR5cGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28ubmx1LkVudGl0eVR5cGVzL1VwZGF0ZUVudGl0eVR5cGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRW50aXR5VHlwZT5cbiAgICovXG4gIHVwZGF0ZUVudGl0eVR5cGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRW50aXR5VHlwZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVFbnRpdHlUeXBlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9EZWxldGVFbnRpdHlUeXBlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+XG4gICAqL1xuICBkZWxldGVFbnRpdHlUeXBlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuZGVsZXRlRW50aXR5VHlwZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDA2Lk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXR5VHlwZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwNi5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hVcGRhdGVFbnRpdHlUeXBlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDA2Lk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoRGVsZXRlRW50aXR5VHlwZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwNi5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hEZWxldGVFbnRpdHlUeXBlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hDcmVhdGVFbnRpdGllc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaEVudGl0aWVzUmVzcG9uc2U+XG4gICAqL1xuICBiYXRjaENyZWF0ZUVudGl0aWVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaENyZWF0ZUVudGl0aWVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0aWVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlRW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMgZm9yIC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoR2V0RW50aXRpZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPlxuICAgKi9cbiAgYmF0Y2hHZXRFbnRpdGllcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0RW50aXRpZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaEVudGl0aWVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYmF0Y2hHZXRFbnRpdGllcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQyBmb3IgL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hEZWxldGVFbnRpdGllc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0aWVzUmVzcG9uc2U+XG4gICAqL1xuICBiYXRjaERlbGV0ZUVudGl0aWVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5iYXRjaERlbGV0ZUVudGl0aWVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDIGZvciAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9MaXN0RW50aXRpZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEVudGl0aWVzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0RW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0RW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19