/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './context.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
import { GRPC_CONTEXTS_CLIENT_SETTINGS } from './context.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./context.pbconf";
import * as i2 from "@ngx-grpc/core";
export class ContextsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Contexts', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListContextsResponse>
     */
    listContexts(requestData, requestMetadata = {}) {
        return this.listContexts$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListContextsResponse>>
     */
    listContexts$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/ListContexts',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListContextsRequest,
            responseClass: thisProto.ListContextsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    getContext(requestData, requestMetadata = {}) {
        return this.getContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    getContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/GetContext',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetContextRequest,
            responseClass: thisProto.Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    createContext(requestData, requestMetadata = {}) {
        return this.createContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    createContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/CreateContext',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateContextRequest,
            responseClass: thisProto.Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Context>
     */
    updateContext(requestData, requestMetadata = {}) {
        return this.updateContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Context>>
     */
    updateContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/UpdateContext',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateContextRequest,
            responseClass: thisProto.Context
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteContext(requestData, requestMetadata = {}) {
        return this.deleteContext$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteContextRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteContext$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/DeleteContext',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteContextRequest,
            responseClass: googleProtobuf001.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteAllContexts(requestData, requestMetadata = {}) {
        return this.deleteAllContexts$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteAllContextsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteAllContexts$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Contexts/DeleteAllContexts',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteAllContextsRequest,
            responseClass: googleProtobuf001.Empty
        });
    }
}
ContextsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContextsClient_Factory() { return new ContextsClient(i0.ɵɵinject(i1.GRPC_CONTEXTS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: ContextsClient, providedIn: "root" });
ContextsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ContextsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_CONTEXTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvY29udGV4dC5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBS2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFFMUMsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdDQUFnQyxDQUFDO0FBR3BFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSWpFLE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBR0UsUUFBNEIsRUFDQyxhQUFnQyxFQUNyRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZLENBQ1YsV0FBMEMsRUFDMUMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDckUsaUJBQWlCLEVBQUUsRUFDbkIsWUFBWSxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUF3QixDQUN0QixXQUEwQyxFQUMxQyxrQkFBNEIsRUFB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aW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gIEdycGNFdmVudFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnZ3JwYy13ZWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMSBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDIgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2ZpZWxkLW1hc2sucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdC5wYic7XG5pbXBvcnQgeyBHUlBDX0NPTlRFWFRTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vY29udGV4dC5wYmNvbmYnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dHNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoR1JQQ19DT05URVhUU19DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudCgnb25kZXdvLm5sdS5Db250ZXh0cycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RDb250ZXh0c1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0Q29udGV4dHNSZXNwb25zZT5cbiAgICovXG4gIGxpc3RDb250ZXh0cyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RDb250ZXh0c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RDb250ZXh0c1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdENvbnRleHRzJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RDb250ZXh0c1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdENvbnRleHRzUmVzcG9uc2U+PlxuICAgKi9cbiAgbGlzdENvbnRleHRzJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdENvbnRleHRzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RDb250ZXh0c1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuQ29udGV4dHMvTGlzdENvbnRleHRzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdENvbnRleHRzUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0Q29udGV4dHNSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0Q29udGV4dFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PlxuICAgKi9cbiAgZ2V0Q29udGV4dChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldENvbnRleHRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRDb250ZXh0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Db250ZXh0Pj5cbiAgICovXG4gIGdldENvbnRleHQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRDb250ZXh0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNvbnRleHQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Db250ZXh0cy9HZXRDb250ZXh0JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0Q29udGV4dFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ29udGV4dFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ3JlYXRlQ29udGV4dFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PlxuICAgKi9cbiAgY3JlYXRlQ29udGV4dChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUNvbnRleHRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udGV4dCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVDb250ZXh0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Db250ZXh0Pj5cbiAgICovXG4gIGNyZWF0ZUNvbnRleHQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVDb250ZXh0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNvbnRleHQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Db250ZXh0cy9DcmVhdGVDb250ZXh0JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlQ29udGV4dFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ29udGV4dFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVXBkYXRlQ29udGV4dFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PlxuICAgKi9cbiAgdXBkYXRlQ29udGV4dChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZUNvbnRleHRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5Db250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlQ29udGV4dCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5VcGRhdGVDb250ZXh0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Db250ZXh0Pj5cbiAgICovXG4gIHVwZGF0ZUNvbnRleHQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVDb250ZXh0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNvbnRleHQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Db250ZXh0cy9VcGRhdGVDb250ZXh0JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlQ29udGV4dFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ29udGV4dFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlQ29udGV4dFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlQ29udGV4dChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZUNvbnRleHRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlQ29udGV4dCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5EZWxldGVDb250ZXh0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5Pj5cbiAgICovXG4gIGRlbGV0ZUNvbnRleHQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVDb250ZXh0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Db250ZXh0cy9EZWxldGVDb250ZXh0JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlQ29udGV4dFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMS5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZUFsbENvbnRleHRzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlQWxsQ29udGV4dHMkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PlxuICAgKi9cbiAgZGVsZXRlQWxsQ29udGV4dHMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVBbGxDb250ZXh0c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuQ29udGV4dHMvRGVsZXRlQWxsQ29udGV4dHMnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVBbGxDb250ZXh0c1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eVxuICAgIH0pO1xuICB9XG59XG4iXX0=