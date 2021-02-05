/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './operations.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
import { GRPC_OPERATIONS_CLIENT_SETTINGS } from './operations.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./operations.pbconf";
import * as i2 from "@ngx-grpc/core";
export class OperationsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('google.longrunning.Operations', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData, requestMetadata = {}) {
        return this.listOperations$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListOperationsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListOperationsResponse>>
     */
    listOperations$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/ListOperations',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListOperationsRequest,
            responseClass: thisProto.ListOperationsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Operation>
     */
    getOperation(requestData, requestMetadata = {}) {
        return this.getOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Operation>>
     */
    getOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/GetOperation',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetOperationRequest,
            responseClass: thisProto.Operation
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteOperation(requestData, requestMetadata = {}) {
        return this.deleteOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/DeleteOperation',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteOperationRequest,
            responseClass: googleProtobuf002.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    cancelOperation(requestData, requestMetadata = {}) {
        return this.cancelOperation$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CancelOperationRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    cancelOperation$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/google.longrunning.Operations/CancelOperation',
            requestData,
            requestMetadata,
            requestClass: thisProto.CancelOperationRequest,
            responseClass: googleProtobuf002.Empty
        });
    }
}
OperationsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function OperationsClient_Factory() { return new OperationsClient(i0.ɵɵinject(i1.GRPC_OPERATIONS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: OperationsClient, providedIn: "root" });
OperationsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OperationsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_OPERATIONS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL2dvb2dsZS9sb25ncnVubmluZy9vcGVyYXRpb25zLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFLYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEtBQUssU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUl0RSxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBR0UsUUFBNEIsRUFDQyxhQUFnQyxFQUNyRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FDdEMsK0JBQStCLEVBQy9CLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUNaLFdBQTRDLEVBQzVDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3ZFLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwwQkFBMEIsQ0FDeEIsV0FB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YmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0NsaWVudFNldHRpbmdzLFxuICBHcnBjRXZlbnRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ2dycGMtd2ViJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2FueS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUnBjMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9ycGMvc3RhdHVzLnBiJztcbmltcG9ydCB7IEdSUENfT1BFUkFUSU9OU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL29wZXJhdGlvbnMucGJjb25mJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbnNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoR1JQQ19PUEVSQVRJT05TX0NMSUVOVF9TRVRUSU5HUylcbiAgICBzZXR0aW5nczogR3JwY0NsaWVudFNldHRpbmdzLFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3RvcnksXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KFxuICAgICAgJ2dvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb25zJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0T3BlcmF0aW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RPcGVyYXRpb25zJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlPj5cbiAgICovXG4gIGxpc3RPcGVyYXRpb25zJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9nb29nbGUubG9uZ3J1bm5pbmcuT3BlcmF0aW9ucy9MaXN0T3BlcmF0aW9ucycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRPcGVyYXRpb25SZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uT3BlcmF0aW9uPlxuICAgKi9cbiAgZ2V0T3BlcmF0aW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0T3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uT3BlcmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3BlcmF0aW9uJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldE9wZXJhdGlvblJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uT3BlcmF0aW9uPj5cbiAgICovXG4gIGdldE9wZXJhdGlvbiRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5PcGVyYXRpb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbnMvR2V0T3BlcmF0aW9uJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0T3BlcmF0aW9uUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5PcGVyYXRpb25cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkRlbGV0ZU9wZXJhdGlvblJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlT3BlcmF0aW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMi5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLmRlbGV0ZU9wZXJhdGlvbiRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5EZWxldGVPcGVyYXRpb25SZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDIuRW1wdHk+PlxuICAgKi9cbiAgZGVsZXRlT3BlcmF0aW9uJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDIuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvZ29vZ2xlLmxvbmdydW5uaW5nLk9wZXJhdGlvbnMvRGVsZXRlT3BlcmF0aW9uJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5DYW5jZWxPcGVyYXRpb25SZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMi5FbXB0eT5cbiAgICovXG4gIGNhbmNlbE9wZXJhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDIuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy5jYW5jZWxPcGVyYXRpb24kZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5Pj5cbiAgICovXG4gIGNhbmNlbE9wZXJhdGlvbiRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL2dvb2dsZS5sb25ncnVubmluZy5PcGVyYXRpb25zL0NhbmNlbE9wZXJhdGlvbicsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMi5FbXB0eVxuICAgIH0pO1xuICB9XG59XG4iXX0=