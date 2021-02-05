/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './intent.pb';
import * as googleLongrunning003 from '../../google/longrunning/operations.pb';
import * as googleProtobuf004 from '../../google/protobuf/empty.pb';
import { GRPC_INTENTS_CLIENT_SETTINGS } from './intent.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./intent.pbconf";
import * as i2 from "@ngx-grpc/core";
export class IntentsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Intents', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListIntentsResponse>
     */
    listIntents(requestData, requestMetadata = {}) {
        return this.listIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListIntentsResponse>>
     */
    listIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/ListIntents',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListIntentsRequest,
            responseClass: thisProto.ListIntentsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    getIntent(requestData, requestMetadata = {}) {
        return this.getIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    getIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/GetIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetIntentRequest,
            responseClass: thisProto.Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    createIntent(requestData, requestMetadata = {}) {
        return this.createIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    createIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/CreateIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateIntentRequest,
            responseClass: thisProto.Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Intent>
     */
    updateIntent(requestData, requestMetadata = {}) {
        return this.updateIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Intent>>
     */
    updateIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/UpdateIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateIntentRequest,
            responseClass: thisProto.Intent
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf004.Empty>
     */
    deleteIntent(requestData, requestMetadata = {}) {
        return this.deleteIntent$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteIntentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf004.Empty>>
     */
    deleteIntent$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/DeleteIntent',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteIntentRequest,
            responseClass: googleProtobuf004.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchUpdateIntents(requestData, requestMetadata = {}) {
        return this.batchUpdateIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchUpdateIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchUpdateIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/BatchUpdateIntents',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchUpdateIntentsRequest,
            responseClass: googleLongrunning003.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning003.Operation>
     */
    batchDeleteIntents(requestData, requestMetadata = {}) {
        return this.batchDeleteIntents$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BatchDeleteIntentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning003.Operation>>
     */
    batchDeleteIntents$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Intents/BatchDeleteIntents',
            requestData,
            requestMetadata,
            requestClass: thisProto.BatchDeleteIntentsRequest,
            responseClass: googleLongrunning003.Operation
        });
    }
}
IntentsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function IntentsClient_Factory() { return new IntentsClient(i0.ɵɵinject(i1.GRPC_INTENTS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: IntentsClient, providedIn: "root" });
IntentsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
IntentsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_INTENTS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50LnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9pbnRlbnQucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUtiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sS0FBSyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBSXpDLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEtBQUssaUJBQWlCLE1BQU0sZ0NBQWdDLENBQUM7QUFHcEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFJL0QsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFHRSxRQUE0QixFQUNDLGFBQWdDLEVBQ3JELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVcsQ0FDVCxXQUF5QyxFQUN6QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNwRSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lB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LENBQ2hCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4QkFBOEIsQ0FDNUIsV0FBZ0QsRUFDaEQsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHlCQUF5QjtZQUNqRCxhQUFhLEVBQUUsb0JBQW9CLENBQUMsU0FBUztTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBalJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUtJLFFBQVEsWUFDUixNQUFNLFNBQUMsNEJBQTRCOzRDQUVuQyxNQUFNLFNBQUMsbUJBQW1CO1lBekI3QixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gIEdycGNFdmVudFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnZ3JwYy13ZWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vaW50ZW50LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbnRleHQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUxvbmdydW5uaW5nMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9sb25ncnVubmluZy9vcGVyYXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNSBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZmllbGQtbWFzay5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvc3RydWN0LnBiJztcbmltcG9ydCB7IEdSUENfSU5URU5UU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL2ludGVudC5wYmNvbmYnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZW50c0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUlBDX0lOVEVOVFNfQ0xJRU5UX1NFVFRJTkdTKVxuICAgIHNldHRpbmdzOiBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuSW50ZW50cycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0SW50ZW50cyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEludGVudHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RJbnRlbnRzJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RJbnRlbnRzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0SW50ZW50c1Jlc3BvbnNlPj5cbiAgICovXG4gIGxpc3RJbnRlbnRzJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEludGVudHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdEludGVudHNSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvTGlzdEludGVudHMnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0SW50ZW50c1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdEludGVudHNSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0SW50ZW50UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD5cbiAgICovXG4gIGdldEludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD4ge1xuICAgIHJldHVybiB0aGlzLmdldEludGVudCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRJbnRlbnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkludGVudD4+XG4gICAqL1xuICBnZXRJbnRlbnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSW50ZW50Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9HZXRJbnRlbnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRJbnRlbnRSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkludGVudFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ3JlYXRlSW50ZW50UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD5cbiAgICovXG4gIGNyZWF0ZUludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZUludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUludGVudCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVJbnRlbnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkludGVudD4+XG4gICAqL1xuICBjcmVhdGVJbnRlbnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSW50ZW50Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9DcmVhdGVJbnRlbnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVJbnRlbnRSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkludGVudFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVXBkYXRlSW50ZW50UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD5cbiAgICovXG4gIHVwZGF0ZUludGVudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZUludGVudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkludGVudD4ge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUludGVudCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5VcGRhdGVJbnRlbnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkludGVudD4+XG4gICAqL1xuICB1cGRhdGVJbnRlbnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uSW50ZW50Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuSW50ZW50cy9VcGRhdGVJbnRlbnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVJbnRlbnRSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkludGVudFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlSW50ZW50UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDQuRW1wdHk+XG4gICAqL1xuICBkZWxldGVJbnRlbnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlSW50ZW50JGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkRlbGV0ZUludGVudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT4+XG4gICAqL1xuICBkZWxldGVJbnRlbnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVJbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvRGVsZXRlSW50ZW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlSW50ZW50UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5CYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwMy5PcGVyYXRpb24+XG4gICAqL1xuICBiYXRjaFVwZGF0ZUludGVudHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZUxvbmdydW5uaW5nMDAzLk9wZXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmJhdGNoVXBkYXRlSW50ZW50cyRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5CYXRjaFVwZGF0ZUludGVudHNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlTG9uZ3J1bm5pbmcwMDMuT3BlcmF0aW9uPj5cbiAgICovXG4gIGJhdGNoVXBkYXRlSW50ZW50cyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlSW50ZW50c1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZUxvbmdydW5uaW5nMDAzLk9wZXJhdGlvbj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LkludGVudHMvQmF0Y2hVcGRhdGVJbnRlbnRzJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQmF0Y2hVcGRhdGVJbnRlbnRzUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZUxvbmdydW5uaW5nMDAzLk9wZXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8Z29vZ2xlTG9uZ3J1bm5pbmcwMDMuT3BlcmF0aW9uPlxuICAgKi9cbiAgYmF0Y2hEZWxldGVJbnRlbnRzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVMb25ncnVubmluZzAwMy5PcGVyYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5iYXRjaERlbGV0ZUludGVudHMkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQmF0Y2hEZWxldGVJbnRlbnRzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZUxvbmdydW5uaW5nMDAzLk9wZXJhdGlvbj4+XG4gICAqL1xuICBiYXRjaERlbGV0ZUludGVudHMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZUludGVudHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVMb25ncnVubmluZzAwMy5PcGVyYXRpb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5JbnRlbnRzL0JhdGNoRGVsZXRlSW50ZW50cycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoRGVsZXRlSW50ZW50c1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVMb25ncnVubmluZzAwMy5PcGVyYXRpb25cbiAgICB9KTtcbiAgfVxufVxuIl19