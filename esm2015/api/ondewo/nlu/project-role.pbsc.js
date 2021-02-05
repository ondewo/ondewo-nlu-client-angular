/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './project-role.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
import { GRPC_PROJECT_ROLES_CLIENT_SETTINGS } from './project-role.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./project-role.pbconf";
import * as i2 from "@ngx-grpc/core";
export class ProjectRolesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.ProjectRoles', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    createProjectRole(requestData, requestMetadata = {}) {
        return this.createProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    createProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/CreateProjectRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateProjectRoleRequest,
            responseClass: thisProto.ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    getProjectRole(requestData, requestMetadata = {}) {
        return this.getProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    getProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/GetProjectRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetProjectRoleRequest,
            responseClass: thisProto.ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteProjectRole(requestData, requestMetadata = {}) {
        return this.deleteProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteProjectRoleRequest,
            responseClass: googleProtobuf002.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    updateProjectRole(requestData, requestMetadata = {}) {
        return this.updateProjectRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    updateProjectRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateProjectRoleRequest,
            responseClass: thisProto.ProjectRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListProjectRolesResponse>
     */
    listProjectRoles(requestData, requestMetadata = {}) {
        return this.listProjectRoles$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
     */
    listProjectRoles$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.ProjectRoles/ListProjectRoles',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListProjectRolesRequest,
            responseClass: thisProto.ListProjectRolesResponse
        });
    }
}
ProjectRolesClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectRolesClient_Factory() { return new ProjectRolesClient(i0.ɵɵinject(i1.GRPC_PROJECT_ROLES_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: ProjectRolesClient, providedIn: "root" });
ProjectRolesClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectRolesClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_PROJECT_ROLES_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1yb2xlLnBic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9wcm9qZWN0LXJvbGUucGJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUtiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sS0FBSyxTQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSTNFLE1BQU0sT0FBTyxrQkFBa0I7SUFHN0IsWUFHRSxRQUE0QixFQUNDLGFBQWdDLEVBQ3JELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUN0Qyx5QkFBeUIsRUFDekIsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQkFBaUIsQ0FDZixXQUErQyxFQUMvQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FDdkMsV0FBVyxFQUNYLGVBQWUsQ0FDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDZCQUE2QixDQUMzQixXQUErQyxFQUMvQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLDRDQUE0QztZQUNsRCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsd0JBQXdCO1lBQ2hELGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQ1osV0FBNEMsRUFDNUMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDdkUsaUJBQWlCLEVBQUUsRUFDbkIsWUFBWSxFQUFFLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDBCQUEwQixDQUN4QixXQUE0QyxFQUM1QyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMscUJBQXFCO1lBQzdDLGFBQWEsRUFBRSxTQUFTLENBQUMsV0FBVztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQkFBaUIsQ0FDZixXQUErQyxFQUMvQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FDdkMsV0FBVyxFQUNYLGVBQWUsQ0FDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDZCQUE2QixDQUMzQixXQUErQyxFQUMvQyxrQkFBNEIsRUFBRTtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLDRDQUE0QztZQUNsRCxXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVksRUFBRSxTQUFTLENBQUMsd0JBQXdCO1lBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO1NBQ3ZDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUNmLFdBQStDLEVBQy9DLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUN2QyxXQUFXLEVBQ1gsZUFBZSxDQUNoQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsNkJBQTZCLENBQzNCLFdBQStDLEVBQy9DLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsNENBQTRDO1lBQ2xELFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyx3QkFBd0I7WUFDaEQsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdCQUFnQixDQUNkLFdBQThDLEVBQzlDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3pFLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw0QkFBNEIsQ0FDMUIsV0FBOEMsRUFDOUMsa0JBQTRCLEVBQUU7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSwyQ0FBMkM7WUFDakQsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxDQUFDLHVCQUF1QjtZQUMvQyxhQUFhLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtTQUNsRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBMU1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUtJLFFBQVEsWUFDUixNQUFNLFNBQUMsa0NBQWtDOzRDQUV6QyxNQUFNLFNBQUMsbUJBQW1CO1lBckI3QixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHcnBjQ2FsbFR5cGUsXG4gIEdycGNDbGllbnQsXG4gIEdycGNDbGllbnRGYWN0b3J5LFxuICBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gIEdycGNFdmVudFxufSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7XG4gIEdSUENfQ0xJRU5UX0ZBQ1RPUlksXG4gIEdycGNIYW5kbGVyLFxuICB0YWtlTWVzc2FnZXMsXG4gIHRocm93U3RhdHVzRXJyb3JzXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnZ3JwYy13ZWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vcHJvamVjdC1yb2xlLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9maWVsZC1tYXNrLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgeyBHUlBDX1BST0pFQ1RfUk9MRVNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9wcm9qZWN0LXJvbGUucGJjb25mJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RSb2xlc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHUlBDX1BST0pFQ1RfUk9MRVNfQ0xJRU5UX1NFVFRJTkdTKVxuICAgIHNldHRpbmdzOiBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAnb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMnLFxuICAgICAgc2V0dGluZ3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ3JlYXRlUHJvamVjdFJvbGVSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+XG4gICAqL1xuICBjcmVhdGVQcm9qZWN0Um9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVByb2plY3RSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9qZWN0Um9sZSRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVQcm9qZWN0Um9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUHJvamVjdFJvbGU+PlxuICAgKi9cbiAgY3JlYXRlUHJvamVjdFJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Qcm9qZWN0Um9sZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlByb2plY3RSb2xlcy9DcmVhdGVQcm9qZWN0Um9sZScsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNyZWF0ZVByb2plY3RSb2xlUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Qcm9qZWN0Um9sZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0UHJvamVjdFJvbGVSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+XG4gICAqL1xuICBnZXRQcm9qZWN0Um9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFByb2plY3RSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uUHJvamVjdFJvbGU+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0Um9sZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRQcm9qZWN0Um9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUHJvamVjdFJvbGU+PlxuICAgKi9cbiAgZ2V0UHJvamVjdFJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Qcm9qZWN0Um9sZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlByb2plY3RSb2xlcy9HZXRQcm9qZWN0Um9sZScsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFByb2plY3RSb2xlUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Qcm9qZWN0Um9sZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlUHJvamVjdFJvbGVSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwMi5FbXB0eT5cbiAgICovXG4gIGRlbGV0ZVByb2plY3RSb2xlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlUHJvamVjdFJvbGUkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlUHJvamVjdFJvbGVSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDIuRW1wdHk+PlxuICAgKi9cbiAgZGVsZXRlUHJvamVjdFJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAyLkVtcHR5Pj4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICBwYXRoOiAnL29uZGV3by5ubHUuUHJvamVjdFJvbGVzL0RlbGV0ZVByb2plY3RSb2xlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogZ29vZ2xlUHJvdG9idWYwMDIuRW1wdHlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLlVwZGF0ZVByb2plY3RSb2xlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlByb2plY3RSb2xlPlxuICAgKi9cbiAgdXBkYXRlUHJvamVjdFJvbGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlByb2plY3RSb2xlPiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlUHJvamVjdFJvbGUkZXZlbnRTdHJlYW0oXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YVxuICAgICkucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVXBkYXRlUHJvamVjdFJvbGVSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlByb2plY3RSb2xlPj5cbiAgICovXG4gIHVwZGF0ZVByb2plY3RSb2xlJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlUHJvamVjdFJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uUHJvamVjdFJvbGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvVXBkYXRlUHJvamVjdFJvbGUnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVQcm9qZWN0Um9sZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uUHJvamVjdFJvbGVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFByb2plY3RSb2xlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0UHJvamVjdFJvbGVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5saXN0UHJvamVjdFJvbGVzJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXNwb25zZT4+XG4gICAqL1xuICBsaXN0UHJvamVjdFJvbGVzJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFByb2plY3RSb2xlc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0UHJvamVjdFJvbGVzUmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Qcm9qZWN0Um9sZXMvTGlzdFByb2plY3RSb2xlcycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RQcm9qZWN0Um9sZXNSZXNwb25zZVxuICAgIH0pO1xuICB9XG59XG4iXX0=