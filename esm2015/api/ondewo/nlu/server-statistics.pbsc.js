/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './server-statistics.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import { GRPC_SERVER_STATISTICS_CLIENT_SETTINGS } from './server-statistics.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./server-statistics.pbconf";
import * as i2 from "@ngx-grpc/core";
export class ServerStatisticsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ServerStatistics', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getProjectCount(requestData, requestMetadata = {}) {
        return this.getProjectCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getProjectCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetProjectCount',
            requestData,
            requestMetadata,
            requestClass: googleProtobuf001.Empty,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserProjectCount(requestData, requestMetadata = {}) {
        return this.getUserProjectCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserProjectCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserProjectCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetUserProjectCountRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData, requestMetadata = {}) {
        return this.getUserCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ServerStatistics/GetUserCount',
            requestData,
            requestMetadata,
            requestClass: googleProtobuf001.Empty,
            responseClass: ondewoNlu002.StatResponse
        });
    }
}
ServerStatisticsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServerStatisticsClient_Factory() { return new ServerStatisticsClient(i0.ɵɵinject(i1.GRPC_SERVER_STATISTICS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: ServerStatisticsClient, providedIn: "root" });
ServerStatisticsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ServerStatisticsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_SERVER_STATISTICS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXN0YXRpc3RpY3MucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3NlcnZlci1zdGF0aXN0aWNzLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFLYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEtBQUssU0FBUyxNQUFNLHdCQUF3QixDQUFDO0FBRXBELE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBSXBGLE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsWUFHRSxRQUE0QixFQUNDLGFBQWdDLEVBQ3JELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUN0Qyw2QkFBNkIsRUFDN0IsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxlQUFlLENBQ2IsV0FBb0MsRUFDcEMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDeEUsaUJBQWlCLEVBQUUsRUFDbkIsWUFBWSxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJCQUEyQixDQUN6QixXQUFvQyxFQUNwQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLDhDQUE4QztZQUNwRCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO1lBQ3JDLGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQkFBbUIsQ0FDakIsV0FBaUQsRUFDakQsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsK0JBQStCLENBQ3pDLFdBQVcsRUFDWCxlQUFlLENBQ2hCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwrQkFBK0IsQ0FDN0IsV0FBaUQsRUFDakQsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxrREFBa0Q7WUFDeEQsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLDBCQUEwQjtZQUNsRCxhQUFhLEVBQUUsWUFBWSxDQUFDLFlBQVk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUNWLFdBQW9DLEVBQ3BDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3JFLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx3QkFBd0IsQ0FDdEIsV0FBb0MsRUFDcEMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSwyQ0FBMkM7WUFDakQsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsaUJBQWlCLENBQUMsS0FBSztZQUNyQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFlBQVk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQWhJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FLSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLHNDQUFzQzs0Q0FFN0MsTUFBTSxTQUFDLG1CQUFtQjtZQXJCN0IsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0NsaWVudFNldHRpbmdzLFxuICBHcnBjRXZlbnRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ2dycGMtd2ViJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL3NlcnZlci1zdGF0aXN0aWNzLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDIgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0IHsgR1JQQ19TRVJWRVJfU1RBVElTVElDU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL3NlcnZlci1zdGF0aXN0aWNzLnBiY29uZic7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdGF0aXN0aWNzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSUENfU0VSVkVSX1NUQVRJU1RJQ1NfQ0xJRU5UX1NFVFRJTkdTKVxuICAgIHNldHRpbmdzOiBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAnb25kZXdvLm5sdS5TZXJ2ZXJTdGF0aXN0aWNzJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDEuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+XG4gICAqL1xuICBnZXRQcm9qZWN0Q291bnQoXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0Q291bnQkZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PlxuICAgKi9cbiAgZ2V0UHJvamVjdENvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlcnZlclN0YXRpc3RpY3MvR2V0UHJvamVjdENvdW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFVzZXJQcm9qZWN0Q291bnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0VXNlclByb2plY3RDb3VudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJQcm9qZWN0Q291bnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyUHJvamVjdENvdW50JGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFVzZXJQcm9qZWN0Q291bnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+XG4gICAqL1xuICBnZXRVc2VyUHJvamVjdENvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclByb2plY3RDb3VudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5TZXJ2ZXJTdGF0aXN0aWNzL0dldFVzZXJQcm9qZWN0Q291bnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUHJvamVjdENvdW50UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDEuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+XG4gICAqL1xuICBnZXRVc2VyQ291bnQoXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyQ291bnQkZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PlxuICAgKi9cbiAgZ2V0VXNlckNvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlNlcnZlclN0YXRpc3RpY3MvR2V0VXNlckNvdW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxufVxuIl19