/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './qa.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import { GRPC_QA_CLIENT_SETTINGS } from './qa.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.qa.QA
 */
export class QAClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.qa.QA/GetAnswer
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetAnswerResponse>>
             */
            getAnswer: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/GetAnswer',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetAnswerRequest,
                    responseClass: thisProto.GetAnswerResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/RunScraper
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RunScraperResponse>>
             */
            runScraper: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/RunScraper',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.RunScraperRequest,
                    responseClass: thisProto.RunScraperResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/UpdateDatabase
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.UpdateDatabaseResponse>>
             */
            updateDatabase: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/UpdateDatabase',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateDatabaseRequest,
                    responseClass: thisProto.UpdateDatabaseResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/RunTraining
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.RunTrainingResponse>>
             */
            runTraining: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/RunTraining',
                    requestData,
                    requestMetadata,
                    requestClass: googleProtobuf003.Empty,
                    responseClass: thisProto.RunTrainingResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/GetServerState
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetServerStateResponse>>
             */
            getServerState: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/GetServerState',
                    requestData,
                    requestMetadata,
                    requestClass: googleProtobuf003.Empty,
                    responseClass: thisProto.GetServerStateResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/ListProjectIds
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListProjectIdsResponse>>
             */
            listProjectIds: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/ListProjectIds',
                    requestData,
                    requestMetadata,
                    requestClass: googleProtobuf003.Empty,
                    responseClass: thisProto.ListProjectIdsResponse
                });
            },
            /**
             * Unary call: /ondewo.qa.QA/GetProjectConfig
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.GetProjectConfigResponse>>
             */
            getProjectConfig: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.qa.QA/GetProjectConfig',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetProjectConfigRequest,
                    responseClass: thisProto.GetProjectConfigResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.qa.QA', settings);
    }
    /**
     * Unary call @/ondewo.qa.QA/GetAnswer
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetAnswerResponse>
     */
    getAnswer(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getAnswer(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/RunScraper
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunScraperResponse>
     */
    runScraper(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .runScraper(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/UpdateDatabase
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.UpdateDatabaseResponse>
     */
    updateDatabase(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateDatabase(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/RunTraining
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.RunTrainingResponse>
     */
    runTraining(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .runTraining(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/GetServerState
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetServerStateResponse>
     */
    getServerState(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getServerState(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/ListProjectIds
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListProjectIdsResponse>
     */
    listProjectIds(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listProjectIds(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.qa.QA/GetProjectConfig
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.GetProjectConfigResponse>
     */
    getProjectConfig(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getProjectConfig(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QAClient, deps: [{ token: GRPC_QA_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QAClient, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QAClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_QA_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWEucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vcWEvcWEucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLFlBQVksRUFJWixZQUFZLEVBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssU0FBUyxNQUFNLFNBQVMsQ0FBQztBQUlyQyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFXaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFDdEQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sUUFBUTtJQThKbkIsWUFDK0MsUUFBYSxFQUM3QixhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBOUo5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsU0FBUyxFQUFFLENBQ1QsV0FBdUMsRUFDdkMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ2dCLEVBQUU7Z0JBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUseUJBQXlCO29CQUMvQixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7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RTs7MEJBZ0s1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLHVCQUF1Qjs7MEJBQzFDLE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9xYS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMiBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA2IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwNyBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVUeXBlMDA4IGZyb20gJy4uLy4uL2dvb2dsZS90eXBlL2xhdGxuZy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDkgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDEwIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29udGV4dC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMTEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9pbnRlbnQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDEyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvZW50aXR5LXR5cGUucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDEzIGZyb20gJy4uLy4uL29uZGV3by9ubHUvc2Vzc2lvbi5wYic7XG5pbXBvcnQgeyBHUlBDX1FBX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vcWEucGJjb25mJztcbi8qKlxuICogU2VydmljZSBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5xYS5RQVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgUUFDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5xYS5RQS9HZXRBbnN3ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0QW5zd2VyUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldEFuc3dlcjogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRBbnN3ZXJSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldEFuc3dlclJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnFhLlFBL0dldEFuc3dlcicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldEFuc3dlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRBbnN3ZXJSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnFhLlFBL1J1blNjcmFwZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUnVuU2NyYXBlclJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBydW5TY3JhcGVyOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJ1blNjcmFwZXJSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJ1blNjcmFwZXJSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5xYS5RQS9SdW5TY3JhcGVyJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uUnVuU2NyYXBlclJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5SdW5TY3JhcGVyUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5xYS5RQS9VcGRhdGVEYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5VcGRhdGVEYXRhYmFzZVJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICB1cGRhdGVEYXRhYmFzZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVEYXRhYmFzZVJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXBkYXRlRGF0YWJhc2VSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5xYS5RQS9VcGRhdGVEYXRhYmFzZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlVwZGF0ZURhdGFiYXNlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVwZGF0ZURhdGFiYXNlUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5xYS5RQS9SdW5UcmFpbmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5SdW5UcmFpbmluZ1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBydW5UcmFpbmluZzogKFxuICAgICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlJ1blRyYWluaW5nUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ucWEuUUEvUnVuVHJhaW5pbmcnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUnVuVHJhaW5pbmdSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLnFhLlFBL0dldFNlcnZlclN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFNlcnZlclN0YXRlUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGdldFNlcnZlclN0YXRlOiAoXG4gICAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDMuRW1wdHksXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uR2V0U2VydmVyU3RhdGVSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5xYS5RQS9HZXRTZXJ2ZXJTdGF0ZScsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogZ29vZ2xlUHJvdG9idWYwMDMuRW1wdHksXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5HZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ucWEuUUEvTGlzdFByb2plY3RJZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFByb2plY3RJZHNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdFByb2plY3RJZHM6IChcbiAgICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMy5FbXB0eSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UHJvamVjdElkc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLnFhLlFBL0xpc3RQcm9qZWN0SWRzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMy5FbXB0eSxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RQcm9qZWN0SWRzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5xYS5RQS9HZXRQcm9qZWN0Q29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkdldFByb2plY3RDb25maWdSZXNwb25zZT4+XG4gICAgICovXG4gICAgZ2V0UHJvamVjdENvbmZpZzogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0Q29uZmlnUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5HZXRQcm9qZWN0Q29uZmlnUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ucWEuUUEvR2V0UHJvamVjdENvbmZpZycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFByb2plY3RDb25maWdSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX1FBX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KCdvbmRld28ucWEuUUEnLCBzZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5xYS5RQS9HZXRBbnN3ZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0QW5zd2VyUmVzcG9uc2U+XG4gICAqL1xuICBnZXRBbnN3ZXIoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRBbnN3ZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRBbnN3ZXJSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRBbnN3ZXIocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLnFhLlFBL1J1blNjcmFwZXJcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUnVuU2NyYXBlclJlc3BvbnNlPlxuICAgKi9cbiAgcnVuU2NyYXBlcihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlJ1blNjcmFwZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SdW5TY3JhcGVyUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAucnVuU2NyYXBlcihyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ucWEuUUEvVXBkYXRlRGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXBkYXRlRGF0YWJhc2VSZXNwb25zZT5cbiAgICovXG4gIHVwZGF0ZURhdGFiYXNlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlRGF0YWJhc2VSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5VcGRhdGVEYXRhYmFzZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnVwZGF0ZURhdGFiYXNlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5xYS5RQS9SdW5UcmFpbmluZ1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5SdW5UcmFpbmluZ1Jlc3BvbnNlPlxuICAgKi9cbiAgcnVuVHJhaW5pbmcoXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5SdW5UcmFpbmluZ1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnJ1blRyYWluaW5nKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5xYS5RQS9HZXRTZXJ2ZXJTdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlPlxuICAgKi9cbiAgZ2V0U2VydmVyU3RhdGUoXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5HZXRTZXJ2ZXJTdGF0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFNlcnZlclN0YXRlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5xYS5RQS9MaXN0UHJvamVjdElkc1xuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UHJvamVjdElkc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFByb2plY3RJZHMoXG4gICAgcmVxdWVzdERhdGE6IGdvb2dsZVByb3RvYnVmMDAzLkVtcHR5LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UHJvamVjdElkc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmxpc3RQcm9qZWN0SWRzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5xYS5RQS9HZXRQcm9qZWN0Q29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkdldFByb2plY3RDb25maWdSZXNwb25zZT5cbiAgICovXG4gIGdldFByb2plY3RDb25maWcoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0Q29uZmlnUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uR2V0UHJvamVjdENvbmZpZ1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldFByb2plY3RDb25maWcocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19