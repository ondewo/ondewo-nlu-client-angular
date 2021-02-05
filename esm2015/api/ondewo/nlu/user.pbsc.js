/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './user.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
import { GRPC_USERS_CLIENT_SETTINGS } from './user.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "./user.pbconf";
import * as i2 from "@ngx-grpc/core";
export class UsersClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        this.client = clientFactory.createClient('ondewo.nlu.Users', settings);
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    createUser(requestData, requestMetadata = {}) {
        return this.createUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    createUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CreateUser',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateUserRequest,
            responseClass: thisProto.User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    getUser(requestData, requestMetadata = {}) {
        return this.getUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    getUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetUser',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetUserRequest,
            responseClass: thisProto.User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.UserInfo>
     */
    getUserInfo(requestData, requestMetadata = {}) {
        return this.getUserInfo$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.UserInfo>>
     */
    getUserInfo$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetUserInfo',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetUserRequest,
            responseClass: thisProto.UserInfo
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteUser(requestData, requestMetadata = {}) {
        return this.deleteUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/DeleteUser',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetUserRequest,
            responseClass: googleProtobuf001.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    updateUser(requestData, requestMetadata = {}) {
        return this.updateUser$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    updateUser$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/UpdateUser',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateUserRequest,
            responseClass: thisProto.User
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUsersResponse>
     */
    listUsers(requestData, requestMetadata = {}) {
        return this.listUsers$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUsersResponse>>
     */
    listUsers$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListUsers',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListUsersRequest,
            responseClass: thisProto.ListUsersResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUserInfosResponse>
     */
    listUserInfos(requestData, requestMetadata = {}) {
        return this.listUserInfos$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUserInfosResponse>>
     */
    listUserInfos$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListUserInfos',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListUsersRequest,
            responseClass: thisProto.ListUserInfosResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    createServerRole(requestData, requestMetadata = {}) {
        return this.createServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    createServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CreateServerRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.CreateServerRoleRequest,
            responseClass: thisProto.ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    getServerRole(requestData, requestMetadata = {}) {
        return this.getServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    getServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/GetServerRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.GetServerRoleRequest,
            responseClass: thisProto.ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteServerRole(requestData, requestMetadata = {}) {
        return this.deleteServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/DeleteServerRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.DeleteServerRoleRequest,
            responseClass: googleProtobuf001.Empty
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    updateServerRole(requestData, requestMetadata = {}) {
        return this.updateServerRole$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    updateServerRole$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/UpdateServerRole',
            requestData,
            requestMetadata,
            requestClass: thisProto.UpdateServerRoleRequest,
            responseClass: thisProto.ServerRole
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerRolesResponse>
     */
    listServerRoles(requestData, requestMetadata = {}) {
        return this.listServerRoles$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerRolesResponse>>
     */
    listServerRoles$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListServerRoles',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListServerRolesRequest,
            responseClass: thisProto.ListServerRolesResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerPermissionsResponse>
     */
    listServerPermissions(requestData, requestMetadata = {}) {
        return this.listServerPermissions$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>
     */
    listServerPermissions$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/ListServerPermissions',
            requestData,
            requestMetadata,
            requestClass: thisProto.ListServerPermissionsRequest,
            responseClass: thisProto.ListServerPermissionsResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.LoginResponse>
     */
    login(requestData, requestMetadata = {}) {
        return this.login$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/Login',
            requestData,
            requestMetadata,
            requestClass: thisProto.LoginRequest,
            responseClass: thisProto.LoginResponse
        });
    }
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    checkLogin(requestData, requestMetadata = {}) {
        return this.checkLogin$eventStream(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    checkLogin$eventStream(requestData, requestMetadata = {}) {
        return this.handler.handle({
            type: GrpcCallType.unary,
            client: this.client,
            path: '/ondewo.nlu.Users/CheckLogin',
            requestData,
            requestMetadata,
            requestClass: googleProtobuf001.Empty,
            responseClass: googleProtobuf001.Empty
        });
    }
}
UsersClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function UsersClient_Factory() { return new UsersClient(i0.ɵɵinject(i1.GRPC_USERS_CLIENT_SETTINGS, 8), i0.ɵɵinject(i2.GRPC_CLIENT_FACTORY), i0.ɵɵinject(i2.GrpcHandler)); }, token: UsersClient, providedIn: "root" });
UsersClient.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UsersClient.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GRPC_USERS_CLIENT_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [GRPC_CLIENT_FACTORY,] }] },
    { type: GrpcHandler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvdXNlci5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBS2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxXQUFXLENBQUM7QUFFdkMsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdDQUFnQyxDQUFDO0FBR3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzRCxNQUFNLE9BQU8sV0FBVztJQUd0QixZQUdFLFFBQTRCLEVBQ0MsYUFBZ0MsRUFDckQsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUU1QixJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUNSLFdBQXdDLEVBQ3hDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ25FLGlCQUFpQixFQUFFLEVBQ25CLFlBQVksRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBd0MsRUFDeEMsa0JBQTRCLEVBQUU7UUFFOUIs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RTtRQUU5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNuRSxpQkFBaUIsRUFBRSxFQUNuQixZQUFZLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0JBQXNCLENBQ3BCLFdBQW9DLEVBQ3BDLGtCQUE0QixFQUFFO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsOEJBQThCO1lBQ3BDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWSxFQUFFLGlCQUFpQixDQUFDLEtBQUs7WUFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLEtBQUs7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXpqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBS0ksUUFBUSxZQUNSLE1BQU0sU0FBQywwQkFBMEI7NENBRWpDLE1BQU0sU0FBQyxtQkFBbUI7WUF0QjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNDbGllbnRTZXR0aW5ncyxcbiAgR3JwY0V2ZW50XG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdncnBjLXdlYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi91c2VyLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZmllbGQtbWFzay5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9wcm9qZWN0LXJvbGUucGInO1xuaW1wb3J0IHsgR1JQQ19VU0VSU19DTElFTlRfU0VUVElOR1MgfSBmcm9tICcuL3VzZXIucGJjb25mJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSUENfVVNFUlNfQ0xJRU5UX1NFVFRJTkdTKVxuICAgIHNldHRpbmdzOiBHcnBjQ2xpZW50U2V0dGluZ3MsXG4gICAgQEluamVjdChHUlBDX0NMSUVOVF9GQUNUT1JZKSBjbGllbnRGYWN0b3J5OiBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuVXNlcnMnLCBzZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+XG4gICAqL1xuICBjcmVhdGVVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlVXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVVc2VyJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkNyZWF0ZVVzZXJSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVzZXI+PlxuICAgKi9cbiAgY3JlYXRlVXNlciRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0NyZWF0ZVVzZXInLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5DcmVhdGVVc2VyUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+XG4gICAqL1xuICBnZXRVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVzZXI+PlxuICAgKi9cbiAgZ2V0VXNlciRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0dldFVzZXInLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXJJbmZvPlxuICAgKi9cbiAgZ2V0VXNlckluZm8oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uVXNlckluZm8+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VySW5mbyRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Vc2VySW5mbz4+XG4gICAqL1xuICBnZXRVc2VySW5mbyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlckluZm8+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9HZXRVc2VySW5mbycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlVzZXJJbmZvXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+XG4gICAqL1xuICBkZWxldGVVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uR2V0VXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy5kZWxldGVVc2VyJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PlxuICAgKi9cbiAgZGVsZXRlVXNlciRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMS5FbXB0eT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0RlbGV0ZVVzZXInLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5HZXRVc2VyUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5VcGRhdGVVc2VyUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+XG4gICAqL1xuICB1cGRhdGVVc2VyKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVXBkYXRlVXNlclJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVVc2VyJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLlVwZGF0ZVVzZXJSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlVzZXI+PlxuICAgKi9cbiAgdXBkYXRlVXNlciRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVVzZXJSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL1VwZGF0ZVVzZXInLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5VcGRhdGVVc2VyUmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5Vc2VyXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFVzZXJzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VXNlcnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VXNlcnNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RVc2VycyRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RVc2Vyc1Jlc3BvbnNlPj5cbiAgICovXG4gIGxpc3RVc2VycyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0VXNlcnNSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xpc3RVc2VycycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFVzZXJzUmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxpc3RVc2Vyc1JlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0VXNlckluZm9zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0VXNlckluZm9zKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFVzZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFVzZXJJbmZvc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFVzZXJJbmZvcyRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RVc2VySW5mb3NSZXNwb25zZT4+XG4gICAqL1xuICBsaXN0VXNlckluZm9zJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFVzZXJzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RVc2VySW5mb3NSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xpc3RVc2VySW5mb3MnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0VXNlcnNSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RVc2VySW5mb3NSZXNwb25zZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPlxuICAgKi9cbiAgY3JlYXRlU2VydmVyUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNyZWF0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU2VydmVyUm9sZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5DcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICovXG4gIGNyZWF0ZVNlcnZlclJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9DcmVhdGVTZXJ2ZXJSb2xlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VydmVyUm9sZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uR2V0U2VydmVyUm9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPlxuICAgKi9cbiAgZ2V0U2VydmVyUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldFNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmVyUm9sZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5HZXRTZXJ2ZXJSb2xlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICovXG4gIGdldFNlcnZlclJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9HZXRTZXJ2ZXJSb2xlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0U2VydmVyUm9sZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VydmVyUm9sZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlU2VydmVyUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlU2VydmVyUm9sZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5EZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5Pj5cbiAgICovXG4gIGRlbGV0ZVNlcnZlclJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9EZWxldGVTZXJ2ZXJSb2xlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uVXBkYXRlU2VydmVyUm9sZVJlcXVlc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPlxuICAgKi9cbiAgdXBkYXRlU2VydmVyUm9sZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5TZXJ2ZXJSb2xlPiB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlU2VydmVyUm9sZSRldmVudFN0cmVhbShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKS5waXBlKFxuICAgICAgdGhyb3dTdGF0dXNFcnJvcnMoKSxcbiAgICAgIHRha2VNZXNzYWdlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5VcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5TZXJ2ZXJSb2xlPj5cbiAgICovXG4gIHVwZGF0ZVNlcnZlclJvbGUkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlNlcnZlclJvbGU+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9VcGRhdGVTZXJ2ZXJSb2xlJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uU2VydmVyUm9sZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgbWVzc2FnZXMgYW5kIHRocm93cyBlcnJvcnMgb24gbm9uLXplcm8gc3RhdHVzIGNvZGVzXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdFNlcnZlclJvbGVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5saXN0U2VydmVyUm9sZXMkZXZlbnRTdHJlYW0ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSkucGlwZShcbiAgICAgIHRocm93U3RhdHVzRXJyb3JzKCksXG4gICAgICB0YWtlTWVzc2FnZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBkYXRhIGFuZCBzdGF0dXMgZXZlbnRzOyBkb2VzIG5vdCB0aHJvdyBlcnJvcnMgYnkgZGVzaWduXG4gICAqIEBwYXJhbSB0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2VydmVyUm9sZXNSZXNwb25zZT4+XG4gICAqL1xuICBsaXN0U2VydmVyUm9sZXMkZXZlbnRTdHJlYW0oXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2VydmVyUm9sZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdFNlcnZlclJvbGVzUmVzcG9uc2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9MaXN0U2VydmVyUm9sZXMnLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0U2VydmVyUm9sZXNSZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgUlBDLiBFbWl0cyBtZXNzYWdlcyBhbmQgdGhyb3dzIGVycm9ycyBvbiBub24temVybyBzdGF0dXMgY29kZXNcbiAgICogQHBhcmFtIHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0U2VydmVyUGVybWlzc2lvbnMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RTZXJ2ZXJQZXJtaXNzaW9ucyRldmVudFN0cmVhbShcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhXG4gICAgKS5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIGRhdGEgYW5kIHN0YXR1cyBldmVudHM7IGRvZXMgbm90IHRocm93IGVycm9ycyBieSBkZXNpZ25cbiAgICogQHBhcmFtIHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0IHJlcXVlc3RcbiAgICogQHBhcmFtIE1ldGFkYXRhIG1ldGFkYXRhXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1Jlc3BvbnNlPj5cbiAgICovXG4gIGxpc3RTZXJ2ZXJQZXJtaXNzaW9ucyRldmVudFN0cmVhbShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xpc3RTZXJ2ZXJQZXJtaXNzaW9ucycsXG4gICAgICByZXF1ZXN0RGF0YSxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QsXG4gICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxvZ2luUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8dGhpc1Byb3RvLkxvZ2luUmVzcG9uc2U+XG4gICAqL1xuICBsb2dpbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxvZ2luUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmxvZ2luJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gdGhpc1Byb3RvLkxvZ2luUmVxdWVzdCByZXF1ZXN0XG4gICAqIEBwYXJhbSBNZXRhZGF0YSBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5Mb2dpblJlc3BvbnNlPj5cbiAgICovXG4gIGxvZ2luJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTG9naW5SZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YTogTWV0YWRhdGEgPSB7fVxuICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTG9naW5SZXNwb25zZT4+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgcGF0aDogJy9vbmRld28ubmx1LlVzZXJzL0xvZ2luJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTG9naW5SZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxvZ2luUmVzcG9uc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBSUEMuIEVtaXRzIG1lc3NhZ2VzIGFuZCB0aHJvd3MgZXJyb3JzIG9uIG5vbi16ZXJvIHN0YXR1cyBjb2Rlc1xuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDEuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5PlxuICAgKi9cbiAgY2hlY2tMb2dpbihcbiAgICByZXF1ZXN0RGF0YTogZ29vZ2xlUHJvdG9idWYwMDEuRW1wdHksXG4gICAgcmVxdWVzdE1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG4gICk6IE9ic2VydmFibGU8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xvZ2luJGV2ZW50U3RyZWFtKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpLnBpcGUoXG4gICAgICB0aHJvd1N0YXR1c0Vycm9ycygpLFxuICAgICAgdGFrZU1lc3NhZ2VzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IFJQQy4gRW1pdHMgZGF0YSBhbmQgc3RhdHVzIGV2ZW50czsgZG9lcyBub3QgdGhyb3cgZXJyb3JzIGJ5IGRlc2lnblxuICAgKiBAcGFyYW0gZ29vZ2xlUHJvdG9idWYwMDEuRW1wdHkgcmVxdWVzdFxuICAgKiBAcGFyYW0gTWV0YWRhdGEgbWV0YWRhdGFcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwMS5FbXB0eT4+XG4gICAqL1xuICBjaGVja0xvZ2luJGV2ZW50U3RyZWFtKFxuICAgIHJlcXVlc3REYXRhOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICByZXF1ZXN0TWV0YWRhdGE6IE1ldGFkYXRhID0ge31cbiAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8Z29vZ2xlUHJvdG9idWYwMDEuRW1wdHk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5Vc2Vycy9DaGVja0xvZ2luJyxcbiAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgcmVxdWVzdENsYXNzOiBnb29nbGVQcm90b2J1ZjAwMS5FbXB0eSxcbiAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDAxLkVtcHR5XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==