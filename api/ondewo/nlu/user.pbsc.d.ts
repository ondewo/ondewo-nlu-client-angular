import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './user.pb';
import * as googleProtobuf001 from '../../google/protobuf/empty.pb';
export declare class UsersClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    createUser(requestData: thisProto.CreateUserRequest, requestMetadata?: Metadata): Observable<thisProto.User>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    createUser$eventStream(requestData: thisProto.CreateUserRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.User>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    getUser(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<thisProto.User>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    getUser$eventStream(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.User>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.UserInfo>
     */
    getUserInfo(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<thisProto.UserInfo>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.UserInfo>>
     */
    getUserInfo$eventStream(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.UserInfo>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteUser(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteUser$eventStream(requestData: thisProto.GetUserRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.User>
     */
    updateUser(requestData: thisProto.UpdateUserRequest, requestMetadata?: Metadata): Observable<thisProto.User>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateUserRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.User>>
     */
    updateUser$eventStream(requestData: thisProto.UpdateUserRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.User>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUsersResponse>
     */
    listUsers(requestData: thisProto.ListUsersRequest, requestMetadata?: Metadata): Observable<thisProto.ListUsersResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUsersResponse>>
     */
    listUsers$eventStream(requestData: thisProto.ListUsersRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListUsersResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUserInfosResponse>
     */
    listUserInfos(requestData: thisProto.ListUsersRequest, requestMetadata?: Metadata): Observable<thisProto.ListUserInfosResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUserInfosResponse>>
     */
    listUserInfos$eventStream(requestData: thisProto.ListUsersRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListUserInfosResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    createServerRole(requestData: thisProto.CreateServerRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ServerRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    createServerRole$eventStream(requestData: thisProto.CreateServerRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ServerRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    getServerRole(requestData: thisProto.GetServerRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ServerRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    getServerRole$eventStream(requestData: thisProto.GetServerRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ServerRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    deleteServerRole(requestData: thisProto.DeleteServerRoleRequest, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    deleteServerRole$eventStream(requestData: thisProto.DeleteServerRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ServerRole>
     */
    updateServerRole(requestData: thisProto.UpdateServerRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ServerRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateServerRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ServerRole>>
     */
    updateServerRole$eventStream(requestData: thisProto.UpdateServerRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ServerRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerRolesResponse>
     */
    listServerRoles(requestData: thisProto.ListServerRolesRequest, requestMetadata?: Metadata): Observable<thisProto.ListServerRolesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerRolesResponse>>
     */
    listServerRoles$eventStream(requestData: thisProto.ListServerRolesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListServerRolesResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListServerPermissionsResponse>
     */
    listServerPermissions(requestData: thisProto.ListServerPermissionsRequest, requestMetadata?: Metadata): Observable<thisProto.ListServerPermissionsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListServerPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>
     */
    listServerPermissions$eventStream(requestData: thisProto.ListServerPermissionsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListServerPermissionsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.LoginResponse>
     */
    login(requestData: thisProto.LoginRequest, requestMetadata?: Metadata): Observable<thisProto.LoginResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.LoginRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login$eventStream(requestData: thisProto.LoginRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.LoginResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<googleProtobuf001.Empty>
     */
    checkLogin(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<googleProtobuf001.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf001.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    checkLogin$eventStream(requestData: googleProtobuf001.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf001.Empty>>;
}
