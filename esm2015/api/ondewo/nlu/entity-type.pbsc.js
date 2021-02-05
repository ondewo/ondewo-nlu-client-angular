/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './entity-type.pb';
import * as googleLongrunning001 from '../../google/longrunning/operations.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
import { GRPC_ENTITY_TYPES_CLIENT_SETTINGS } from './entity-type.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./entity-type.pbconf";
import * as i2 from "@ngx-grpc/core";
export class EntityTypesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.EntityTypes', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData, requestMetadata = {}) {
        return this.listEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
     */
    listEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListEntityTypesRequest,
            responseClass: thisProto.ListEntityTypesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    getEntityType(requestData, requestMetadata = {}) {
        return this.getEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    getEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/GetEntityType',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetEntityTypeRequest,
            responseClass: thisProto.EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    createEntityType(requestData, requestMetadata = {}) {
        return this.createEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    createEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/CreateEntityType',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateEntityTypeRequest,
            responseClass: thisProto.EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.EntityType>
     */
    updateEntityType(requestData, requestMetadata = {}) {
        return this.updateEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.EntityType>>
     */
    updateEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateEntityTypeRequest,
            responseClass: thisProto.EntityType
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteEntityType(requestData, requestMetadata = {}) {
        return this.deleteEntityType$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteEntityTypeRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteEntityType$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteEntityTypeRequest,
            responseClass: googleProtobuf002.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntityTypes(requestData, requestMetadata = {}) {
        return this.batchUpdateEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchUpdateEntityTypesRequest,
            responseClass: googleLongrunning001.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntityTypes(requestData, requestMetadata = {}) {
        return this.batchDeleteEntityTypes$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntityTypesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntityTypes$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchDeleteEntityTypesRequest,
            responseClass: googleLongrunning001.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchCreateEntities(requestData, requestMetadata = {}) {
        return this.batchCreateEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchCreateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchCreateEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchCreateEntitiesRequest,
            responseClass: googleLongrunning001.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchUpdateEntities(requestData, requestMetadata = {}) {
        return this.batchUpdateEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchUpdateEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchUpdateEntitiesRequest,
            responseClass: googleLongrunning001.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    batchDeleteEntities(requestData, requestMetadata = {}) {
        return this.batchDeleteEntities$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteEntitiesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    batchDeleteEntities$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchDeleteEntitiesRequest,
            responseClass: googleLongrunning001.Operation
        });
    }
}
EntityTypesClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntityTypesClient_Factory() { return new EntityTypesClient(i0.ɵɵinject(i1.GRPC_ENTITY_TYPES_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: EntityTypesClient, providedIn: "root" });
EntityTypesClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EntityTypesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_ENTITY_TYPES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2VudGl0eS10eXBlLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFLYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEtBQUssU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBRTlDLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEtBQUssaUJBQWlCLE1BQU0sZ0NBQWdDLENBQUM7QUFHcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFJekUsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUdFLFFBQTRCLEVBQ0MsYUFBZ0MsRUFDckQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUU1QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQ3RDLHdCQUF3QixFQUN4QixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FDYixXQUE2QyxFQUM3QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN4RSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJ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QVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUtJLFFBQVEsWUFDUixNQUFNLFNBQUMsaUNBQWlDOzRDQUV4QyxNQUFNLFNBQUMsbUJBQW1CO1lBdkI3QixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gIEdycGNFdmVudFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnZ3JwYy13ZWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vZW50aXR5LXR5cGUucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlTG9uZ3J1bm5pbmcwMDEgZnJvbSAnLi4vLi4vZ29vZ2xlL2xvbmdydW5uaW5nL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDIgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2VtcHR5LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9maWVsZC1tYXNrLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwNCBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbW1vbi5wYic7XG5pbXBvcnQgeyBHUlBDX0VOVElUWV9UWVBFU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL2VudGl0eS10eXBlLnBiY29uZic7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUlBDX0VOVElUWV9UWVBFU19DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdvbmRld28ubmx1LkVudGl0eVR5cGVzJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0RW50aXR5VHlwZXNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RFbnRpdHlUeXBlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdEVudGl0eVR5cGVzJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVzcG9uc2U+PlxuICAgKi9cbiAgbGlzdEVudGl0eVR5cGVzJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0RW50aXR5VHlwZXNSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0RW50aXR5VHlwZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPlxuICAgKi9cbiAgZ2V0RW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5VHlwZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRFbnRpdHlUeXBlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj5cbiAgICovXG4gIGdldEVudGl0eVR5cGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVudGl0eVR5cGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9HZXRFbnRpdHlUeXBlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0RW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRW50aXR5VHlwZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPlxuICAgKi9cbiAgY3JlYXRlRW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRW50aXR5VHlwZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVFbnRpdHlUeXBlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj5cbiAgICovXG4gIGNyZWF0ZUVudGl0eVR5cGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVudGl0eVR5cGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9DcmVhdGVFbnRpdHlUeXBlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRW50aXR5VHlwZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPlxuICAgKi9cbiAgdXBkYXRlRW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRW50aXR5VHlwZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj5cbiAgICovXG4gIHVwZGF0ZUVudGl0eVR5cGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkVudGl0eVR5cGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9VcGRhdGVFbnRpdHlUeXBlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uRW50aXR5VHlwZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlRW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlRW50aXR5VHlwZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5EZWxldGVFbnRpdHlUeXBlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5Pj5cbiAgICovXG4gIGRlbGV0ZUVudGl0eVR5cGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDIuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9EZWxldGVFbnRpdHlUeXBlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMi5FbXB0eVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXR5VHlwZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5iYXRjaFVwZGF0ZUVudGl0eVR5cGVzJGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXR5VHlwZXMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hVcGRhdGVFbnRpdHlUeXBlcycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPlxuICAgKi9cbiAgYmF0Y2hEZWxldGVFbnRpdHlUeXBlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmJhdGNoRGVsZXRlRW50aXR5VHlwZXMkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+PlxuICAgKi9cbiAgYmF0Y2hEZWxldGVFbnRpdHlUeXBlcyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaERlbGV0ZUVudGl0eVR5cGVzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb25cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkJhdGNoQ3JlYXRlRW50aXRpZXNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+XG4gICAqL1xuICBiYXRjaENyZWF0ZUVudGl0aWVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuYmF0Y2hDcmVhdGVFbnRpdGllcyRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5CYXRjaENyZWF0ZUVudGl0aWVzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj4+XG4gICAqL1xuICBiYXRjaENyZWF0ZUVudGl0aWVzJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoQ3JlYXRlRW50aXRpZXMnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5CYXRjaENyZWF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVFbnRpdGllc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5iYXRjaFVwZGF0ZUVudGl0aWVzJGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXRpZXMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hVcGRhdGVFbnRpdGllcycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8Z29vZ2xlTG9uZ3J1bm5pbmcwMDEuT3BlcmF0aW9uPlxuICAgKi9cbiAgYmF0Y2hEZWxldGVFbnRpdGllcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDAxLk9wZXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmJhdGNoRGVsZXRlRW50aXRpZXMkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+PlxuICAgKi9cbiAgYmF0Y2hEZWxldGVFbnRpdGllcyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaERlbGV0ZUVudGl0aWVzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVMb25ncnVubmluZzAwMS5PcGVyYXRpb25cbiAgICB9KTtcbiAgfVxufVxuIl19