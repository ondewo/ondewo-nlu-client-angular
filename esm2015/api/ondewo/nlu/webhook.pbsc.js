/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './webhook.pb';
import { GRPC_WEBHOOK_CLIENT_SETTINGS } from './webhook.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./webhook.pbconf";
import * as i2 from "@ngx-grpc/core";
export class WebhookClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Webhook', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    responseRefinement(requestData, requestMetadata = {}) {
        return this.responseRefinement$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    responseRefinement$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/ResponseRefinement',
            requestData,
            requestMetadata,
            requestClass: thisProto.WebhookRequest,
            responseClass: thisProto.WebhookResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.WebhookResponse>
     */
    slotFilling(requestData, requestMetadata = {}) {
        return this.slotFilling$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.WebhookRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.WebhookResponse>>
     */
    slotFilling$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/SlotFilling',
            requestData,
            requestMetadata,
            requestClass: thisProto.WebhookRequest,
            responseClass: thisProto.WebhookResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.PingResponse>
     */
    ping(requestData, requestMetadata = {}) {
        return this.ping$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.PingRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.PingResponse>>
     */
    ping$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Webhook/Ping',
            requestData,
            requestMetadata,
            requestClass: thisProto.PingRequest,
            responseClass: thisProto.PingResponse
        });
    }
}
WebhookClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebhookClient_Factory() { return new WebhookClient(i0.ɵɵinject(i1.GRPC_WEBHOOK_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: WebhookClient, providedIn: "root" });
WebhookClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
WebhookClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_WEBHOOK_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9vay5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvd2ViaG9vay5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBS2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFNMUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFJaEUsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFHRSxRQUE0QixFQUNDLGFBQWdDLEVBQ3JELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtCQUFrQixDQUNoQixXQUFxQyxFQUNyQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FDeEMsV0FBVyxFQUNYLGVBQWUsQ0FDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhCQUE4QixDQUM1QixXQUFxQyxFQUNyQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsY0FBYztZQUN0QyxhQUFhLEVBQUUsU0FBUyxDQUFDLGVBQWU7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUNULFdBQXFDLEVBQ3JDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3BFLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx1QkFBdUIsQ0FDckIsV0FBcUMsRUFDckMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxpQ0FBaUM7WUFDdkMsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLGNBQWM7WUFDdEMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxlQUFlO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUksQ0FDRixXQUFrQyxFQUNsQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUM3RCxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQ2QsV0FBa0MsRUFDbEMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLFdBQVc7WUFDbkMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxZQUFZO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUE3SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBS0ksUUFBUSxZQUNSLE1BQU0sU0FBQyw0QkFBNEI7NENBRW5DLE1BQU0sU0FBQyxtQkFBbUI7WUF2QjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNDbGllbnRTZXR0aW5ncyxcbiAgR3JwY0V2ZW50XG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdncnBjLXdlYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi93ZWJob29rLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbnRleHQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvaW50ZW50LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L3Nlc3Npb24ucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdC5wYic7XG5pbXBvcnQgeyBHUlBDX1dFQkhPT0tfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi93ZWJob29rLnBiY29uZic7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXZWJob29rQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSUENfV0VCSE9PS19DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudCgnb25kZXdvLm5sdS5XZWJob29rJywgc2V0dGluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uV2ViaG9va1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5XZWJob29rUmVzcG9uc2U+XG4gICAqL1xuICByZXNwb25zZVJlZmluZW1lbnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5XZWJob29rUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uV2ViaG9va1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2VSZWZpbmVtZW50JGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLldlYmhvb2tSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZT4+XG4gICAqL1xuICByZXNwb25zZVJlZmluZW1lbnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5XZWJob29rUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LldlYmhvb2svUmVzcG9uc2VSZWZpbmVtZW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uV2ViaG9va1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uV2ViaG9va1Jlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5XZWJob29rUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZT5cbiAgICovXG4gIHNsb3RGaWxsaW5nKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uV2ViaG9va1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnNsb3RGaWxsaW5nJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLldlYmhvb2tSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZT4+XG4gICAqL1xuICBzbG90RmlsbGluZyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLldlYmhvb2tSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uV2ViaG9va1Jlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuV2ViaG9vay9TbG90RmlsbGluZycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLldlYmhvb2tSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLldlYmhvb2tSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uUGluZ1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5QaW5nUmVzcG9uc2U+XG4gICAqL1xuICBwaW5nKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uUGluZ1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlBpbmdSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnBpbmckZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uUGluZ1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUGluZ1Jlc3BvbnNlPj5cbiAgICovXG4gIHBpbmckZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5QaW5nUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlBpbmdSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LldlYmhvb2svUGluZycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlBpbmdSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlBpbmdSZXNwb25zZVxuICAgIH0pO1xuICB9XG59XG4iXX0=