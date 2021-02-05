/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './qa.pb';
import * as googleProtobuf000 from '../../google/protobuf/empty.pb';
import { GRPC_QA_CLIENT_SETTINGS } from './qa.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./qa.pbconf";
import * as i2 from "@ngx-grpc/core";
export class QAClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.qa.QA', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAnswerResponse>
     */
    getAnswer(requestData, requestMetadata = {}) {
        return this.getAnswer$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAnswerRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAnswerResponse>>
     */
    getAnswer$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/GetAnswer',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetAnswerRequest,
            responseClass: thisProto.GetAnswerResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunScraperResponse>
     */
    runScraper(requestData, requestMetadata = {}) {
        return this.runScraper$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunScraperResponse>>
     */
    runScraper$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/RunScraper',
            requestData,
            requestMetadata,
            requestClass: googleProtobuf000.Empty,
            responseClass: thisProto.RunScraperResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.RunTrainingResponse>
     */
    runTraining(requestData, requestMetadata = {}) {
        return this.runTraining$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf000.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.RunTrainingResponse>>
     */
    runTraining$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.qa.QA/RunTraining',
            requestData,
            requestMetadata,
            requestClass: googleProtobuf000.Empty,
            responseClass: thisProto.RunTrainingResponse
        });
    }
}
QAClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function QAClient_Factory() { return new QAClient(i0.ɵɵinject(i1.GRPC_QA_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: QAClient, providedIn: "root" });
QAClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
QAClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_QA_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWEucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vcWEvcWEucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUtiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sS0FBSyxTQUFTLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJdEQsTUFBTSxPQUFPLFFBQVE7SUFHbkIsWUFDK0MsUUFBNEIsRUFDNUMsYUFBZ0MsRUFDckQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUU1QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FDUCxXQUF1QyxFQUN2QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsRSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQ25CLFdBQXVDLEVBQ3ZDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7WUFDeEMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUNSLFdBQW9DLEVBQ3BDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ25FLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBb0MsRUFDcEMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsaUJBQWlCLENBQUMsS0FBSztZQUNyQyxhQUFhLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXLENBQ1QsV0FBb0MsRUFDcEMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDcEUsaUJBQWlCLEVBQUUsRUFDbkIsWUFBWSxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHVCQUF1QixDQUNyQixXQUFvQyxFQUNwQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO1lBQ3JDLGFBQWEsRUFBRSxTQUFTLENBQUMsbUJBQW1CO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUEzSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBS0ksUUFBUSxZQUFJLE1BQU0sU0FBQyx1QkFBdUI7NENBQzFDLE1BQU0sU0FBQyxtQkFBbUI7WUFuQjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNDbGllbnRTZXR0aW5ncyxcbiAgR3JwY0V2ZW50XG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdncnBjLXdlYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9xYS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvc2Vzc2lvbi5wYic7XG5pbXBvcnQgeyBHUlBDX1FBX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vcWEucGJjb25mJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFFBQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX1FBX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudCgnb25kZXdvLnFhLlFBJywgc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0QW5zd2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldEFuc3dlclJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0QW5zd2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0QW5zd2VyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QW5zd2VyUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbnN3ZXIkZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0QW5zd2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRBbnN3ZXJSZXNwb25zZT4+XG4gICAqL1xuICBnZXRBbnN3ZXIkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRBbnN3ZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0QW5zd2VyUmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLnFhLlFBL0dldEFuc3dlcicsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEFuc3dlclJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0QW5zd2VyUmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5SdW5TY3JhcGVyUmVzcG9uc2U+XG4gICAqL1xuICBydW5TY3JhcGVyKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUnVuU2NyYXBlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMucnVuU2NyYXBlciRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJ1blNjcmFwZXJSZXNwb25zZT4+XG4gICAqL1xuICBydW5TY3JhcGVyJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJ1blNjcmFwZXJSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ucWEuUUEvUnVuU2NyYXBlcicsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUnVuU2NyYXBlclJlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIGdvb2dsZVByb3RvYnVmMDAwLkVtcHR5IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUnVuVHJhaW5pbmdSZXNwb25zZT5cbiAgICovXG4gIHJ1blRyYWluaW5nKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMC5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUnVuVHJhaW5pbmdSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnJ1blRyYWluaW5nJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUnVuVHJhaW5pbmdSZXNwb25zZT4+XG4gICAqL1xuICBydW5UcmFpbmluZyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SdW5UcmFpbmluZ1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5xYS5RQS9SdW5UcmFpbmluZycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogZ29vZ2xlUHJvdG9idWYwMDAuRW1wdHksXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUnVuVHJhaW5pbmdSZXNwb25zZVxuICAgIH0pO1xuICB9XG59XG4iXX0=