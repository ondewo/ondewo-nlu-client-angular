/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './project-statistics.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/common.pb';
import { GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS } from './project-statistics.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./project-statistics.pbconf";
import * as i2 from "@ngx-grpc/core";
export class ProjectStatisticsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ProjectStatistics', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getIntentCount(requestData, requestMetadata = {}) {
        return this.getIntentCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetIntentCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getIntentCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetIntentCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetIntentCountRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityTypeCount(requestData, requestMetadata = {}) {
        return this.getEntityTypeCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetEntityTypeCountRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityTypeCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetEntityTypeCountRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getUserCount(requestData, requestMetadata = {}) {
        return this.getUserCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getUserCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetUserCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getSessionCount(requestData, requestMetadata = {}) {
        return this.getSessionCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getSessionCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetSessionCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getTrainingPhraseCount(requestData, requestMetadata = {}) {
        return this.getTrainingPhraseCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getTrainingPhraseCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectElementStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getResponseCount(requestData, requestMetadata = {}) {
        return this.getResponseCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getResponseCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetResponseCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectElementStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntityValueCount(requestData, requestMetadata = {}) {
        return this.getEntityValueCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntityValueCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectElementStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<ondewoNlu002.StatResponse>
     */
    getEntitySynonymCount(requestData, requestMetadata = {}) {
        return this.getEntitySynonymCount$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectElementStatRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<ondewoNlu002.StatResponse>>
     */
    getEntitySynonymCount$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectElementStatRequest,
            responseClass: ondewoNlu002.StatResponse
        });
    }
}
ProjectStatisticsClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectStatisticsClient_Factory() { return new ProjectStatisticsClient(i0.ɵɵinject(i1.GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: ProjectStatisticsClient, providedIn: "root" });
ProjectStatisticsClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectStatisticsClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_PROJECT_STATISTICS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1zdGF0aXN0aWNzLnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9wcm9qZWN0LXN0YXRpc3RpY3MucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUtiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sS0FBSyxTQUFTLE1BQU0seUJBQXlCLENBQUM7QUFHckQsT0FBTyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUl0RixNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBR0UsUUFBNEIsRUFDQyxhQUFnQyxFQUNyRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FDdEMsOEJBQThCLEVBQzlCLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUNaLFdBQTRDLEVBQzVDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3ZFLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwwQkFBMEIsQ0FDeEIsV0FBNEMsRUFDNUMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSw4Q0FBOEM7WUFDcEQsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHFCQUFxQjtZQUM3QyxhQUFhLEVBQUUsWUFBWSxDQUFDLFlBQVk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsa0JBQWtCLENBQ2hCLFdBQWdELEVBQ2hELGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUN4QyxXQUFXLEVBQ1gsZUFBZSxDQUNoQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsOEJBQThCLENBQzVCLFdBQWdELEVBQ2hELGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsa0RBQWtEO1lBQ3hELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyx5QkFBeUI7WUFDakQsYUFBYSxFQUFFLFlBQVksQ0FBQyxZQUFZO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVksQ0FDVixXQUE0QyxFQUM1QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNyRSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQXdCLENBQ3RCLFdBQTRDLEVBQzVDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsNENBQTRDO1lBQ2xELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxxQkFBcUI7WUFDN0MsYUFBYSxFQUFFLFlBQVksQ0FBQyxZQUFZO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FDYixXQUE0QyxFQUM1QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN4RSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkJBQTJCLENBQ3pCLFdBQTRDLEVBQzVDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsK0NBQStDO1lBQ3JELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxxQkFBcUI7WUFDN0MsYUFBYSxFQUFFLFlBQVksQ0FBQyxZQUFZO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHNCQUFzQixDQUNwQixXQUFtRCxFQUNuRCxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxrQ0FBa0MsQ0FDNUMsV0FBVyxFQUNYLGVBQWUsQ0FDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtDQUFrQyxDQUNoQyxXQUFtRCxFQUNuRCxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLHNEQUFzRDtZQUM1RCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsNEJBQTRCO1lBQ3BELGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FDZCxXQUFtRCxFQUNuRCxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUN6RSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsNEJBQTRCLENBQzFCLFdBQW1ELEVBQ25ELGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsZ0RBQWdEO1lBQ3RELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyw0QkFBNEI7WUFDcEQsYUFBYSxFQUFFLFlBQVksQ0FBQyxZQUFZO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1CQUFtQixDQUNqQixXQUFtRCxFQUNuRCxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FDekMsV0FBVyxFQUNYLGVBQWUsQ0FDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILCtCQUErQixDQUM3QixXQUFtRCxFQUNuRCxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLG1EQUFtRDtZQUN6RCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsNEJBQTRCO1lBQ3BELGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxxQkFBcUIsQ0FDbkIsV0FBbUQsRUFDbkQsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQzNDLFdBQVcsRUFDWCxlQUFlLENBQ2hCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQ0FBaUMsQ0FDL0IsV0FBbUQsRUFDbkQsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxxREFBcUQ7WUFDM0QsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLDRCQUE0QjtZQUNwRCxhQUFhLEVBQUUsWUFBWSxDQUFDLFlBQVk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXpURixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FLSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLHVDQUF1Qzs0Q0FFOUMsTUFBTSxTQUFDLG1CQUFtQjtZQXRCN0IsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0NsaWVudFNldHRpbmdzLFxuICBHcnBjRXZlbnRcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ2dycGMtd2ViJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHRoaXNQcm90byBmcm9tICcuL3Byb2plY3Qtc3RhdGlzdGljcy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9pbnRlbnQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L2VudGl0eS10eXBlLnBiJztcbmltcG9ydCB7IEdSUENfUFJPSkVDVF9TVEFUSVNUSUNTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vcHJvamVjdC1zdGF0aXN0aWNzLnBiY29uZic7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U3RhdGlzdGljc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUlBDX1BST0pFQ1RfU1RBVElTVElDU19DTElFTlRfU0VUVElOR1MpXG4gICAgc2V0dGluZ3M6IEdycGNDbGllbnRTZXR0aW5ncyxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5LFxuICAgIHByaXZhdGUgaGFuZGxlcjogR3JwY0hhbmRsZXJcbiAgKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnRGYWN0b3J5LmNyZWF0ZUNsaWVudChcbiAgICAgICdvbmRld28ubmx1LlByb2plY3RTdGF0aXN0aWNzJyxcbiAgICAgIHNldHRpbmdzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldEludGVudENvdW50UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT5cbiAgICovXG4gIGdldEludGVudENvdW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SW50ZW50Q291bnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnRlbnRDb3VudCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRJbnRlbnRDb3VudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj5cbiAgICovXG4gIGdldEludGVudENvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0SW50ZW50Q291bnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuUHJvamVjdFN0YXRpc3RpY3MvR2V0SW50ZW50Q291bnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRJbnRlbnRDb3VudFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRFbnRpdHlUeXBlQ291bnRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0RW50aXR5VHlwZUNvdW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0RW50aXR5VHlwZUNvdW50UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5VHlwZUNvdW50JGV2ZW50U3RyZWFtKFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGFcbiAgICApLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldEVudGl0eVR5cGVDb3VudFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj5cbiAgICovXG4gIGdldEVudGl0eVR5cGVDb3VudCRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEVudGl0eVR5cGVDb3VudFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0U3RhdGlzdGljcy9HZXRFbnRpdHlUeXBlQ291bnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRFbnRpdHlUeXBlQ291bnRSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogb25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdFN0YXRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0VXNlckNvdW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0UHJvamVjdFN0YXRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyQ291bnQkZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdFN0YXRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+XG4gICAqL1xuICBnZXRVc2VyQ291bnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0U3RhdFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0U3RhdGlzdGljcy9HZXRVc2VyQ291bnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRQcm9qZWN0U3RhdFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRQcm9qZWN0U3RhdFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+XG4gICAqL1xuICBnZXRTZXNzaW9uQ291bnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0U3RhdFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlc3Npb25Db3VudCRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRQcm9qZWN0U3RhdFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj5cbiAgICovXG4gIGdldFNlc3Npb25Db3VudCRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFByb2plY3RTdGF0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlByb2plY3RTdGF0aXN0aWNzL0dldFNlc3Npb25Db3VudCcsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFByb2plY3RTdGF0UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+XG4gICAqL1xuICBnZXRUcmFpbmluZ1BocmFzZUNvdW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhaW5pbmdQaHJhc2VDb3VudCRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+XG4gICAqL1xuICBnZXRUcmFpbmluZ1BocmFzZUNvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlByb2plY3RTdGF0aXN0aWNzL0dldFRyYWluaW5nUGhyYXNlQ291bnQnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogb25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT5cbiAgICovXG4gIGdldFJlc3BvbnNlQ291bnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZXNwb25zZUNvdW50JGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj5cbiAgICovXG4gIGdldFJlc3BvbnNlQ291bnQkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuUHJvamVjdFN0YXRpc3RpY3MvR2V0UmVzcG9uc2VDb3VudCcsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0RW50aXR5VmFsdWVDb3VudChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmdldEVudGl0eVZhbHVlQ291bnQkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PlxuICAgKi9cbiAgZ2V0RW50aXR5VmFsdWVDb3VudCRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0U3RhdGlzdGljcy9HZXRFbnRpdHlWYWx1ZUNvdW50JyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+XG4gICAqL1xuICBnZXRFbnRpdHlTeW5vbnltQ291bnQoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0RWxlbWVudFN0YXRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlTeW5vbnltQ291bnQkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PG9uZGV3b05sdTAwMi5TdGF0UmVzcG9uc2U+PlxuICAgKi9cbiAgZ2V0RW50aXR5U3lub255bUNvdW50JGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0UHJvamVjdEVsZW1lbnRTdGF0UmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDAyLlN0YXRSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlByb2plY3RTdGF0aXN0aWNzL0dldEVudGl0eVN5bm9ueW1Db3VudCcsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFByb2plY3RFbGVtZW50U3RhdFJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMDIuU3RhdFJlc3BvbnNlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==