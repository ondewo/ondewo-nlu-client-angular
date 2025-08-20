import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DeleteAllUserPreferencesRequest } from "./user";
import type { DeleteUserPreferencesResponse } from "./user";
import type { DeleteUserPreferencesRequest } from "./user";
import type { SetUserPreferencesResponse } from "./user";
import type { SetUserPreferencesRequest } from "./user";
import type { GetUserPreferencesResponse } from "./user";
import type { GetUserPreferencesRequest } from "./user";
import type { SetNotificationsReadStatusRequest } from "./common";
import type { SetNotificationsFlaggedStatusRequest } from "./common";
import type { ListNotificationsResponse } from "./common";
import type { ListNotificationsRequest } from "./common";
import type { LoginResponse } from "./user";
import type { LoginRequest } from "./user";
import type { ListServerPermissionsResponse } from "./user";
import type { ListServerPermissionsRequest } from "./user";
import type { ListServerRolesResponse } from "./user";
import type { ListServerRolesRequest } from "./user";
import type { UpdateServerRoleRequest } from "./user";
import type { DeleteServerRoleRequest } from "./user";
import type { GetServerRoleRequest } from "./user";
import type { ServerRole } from "./user";
import type { CreateServerRoleRequest } from "./user";
import type { ListUserInfosResponse } from "./user";
import type { ListUsersResponse } from "./user";
import type { ListUsersRequest } from "./user";
import type { UpdateUserRequest } from "./user";
import type { Empty } from "../../google/protobuf/empty";
import type { UserInfo } from "./user";
import type { GetUserRequest } from "./user";
import type { User } from "./user";
import type { CreateUserRequest } from "./user";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * gRPC service for managing users and server roles.
 *
 * @generated from protobuf service ondewo.nlu.Users
 */
export interface IUsersClient {
    /**
     * Creates a user.
     *
     * @generated from protobuf rpc: CreateUser(ondewo.nlu.CreateUserRequest) returns (ondewo.nlu.User);
     */
    createUser(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, User>;
    /**
     * Retrieves a user by identifier.
     *
     * @generated from protobuf rpc: GetUser(ondewo.nlu.GetUserRequest) returns (ondewo.nlu.User);
     */
    getUser(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, User>;
    /**
     * Retrieves user information by identifier.
     *
     * @generated from protobuf rpc: GetUserInfo(ondewo.nlu.GetUserRequest) returns (ondewo.nlu.UserInfo);
     */
    getUserInfo(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, UserInfo>;
    /**
     * Deletes a user by identifier.
     *
     * @generated from protobuf rpc: DeleteUser(ondewo.nlu.GetUserRequest) returns (google.protobuf.Empty);
     */
    deleteUser(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, Empty>;
    /**
     * Updates a user.
     *
     * @generated from protobuf rpc: UpdateUser(ondewo.nlu.UpdateUserRequest) returns (ondewo.nlu.User);
     */
    updateUser(input: UpdateUserRequest, options?: RpcOptions): UnaryCall<UpdateUserRequest, User>;
    /**
     * Lists users.
     *
     * @generated from protobuf rpc: ListUsers(ondewo.nlu.ListUsersRequest) returns (ondewo.nlu.ListUsersResponse);
     */
    listUsers(input: ListUsersRequest, options?: RpcOptions): UnaryCall<ListUsersRequest, ListUsersResponse>;
    /**
     * Lists user information.
     *
     * @generated from protobuf rpc: ListUserInfos(ondewo.nlu.ListUsersRequest) returns (ondewo.nlu.ListUserInfosResponse);
     */
    listUserInfos(input: ListUsersRequest, options?: RpcOptions): UnaryCall<ListUsersRequest, ListUserInfosResponse>;
    /**
     * Creates a server role.
     *
     * @generated from protobuf rpc: CreateServerRole(ondewo.nlu.CreateServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    createServerRole(input: CreateServerRoleRequest, options?: RpcOptions): UnaryCall<CreateServerRoleRequest, ServerRole>;
    /**
     * Retrieves a server role by ID.
     *
     * @generated from protobuf rpc: GetServerRole(ondewo.nlu.GetServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    getServerRole(input: GetServerRoleRequest, options?: RpcOptions): UnaryCall<GetServerRoleRequest, ServerRole>;
    /**
     * Deletes a server role by ID.
     *
     * @generated from protobuf rpc: DeleteServerRole(ondewo.nlu.DeleteServerRoleRequest) returns (google.protobuf.Empty);
     */
    deleteServerRole(input: DeleteServerRoleRequest, options?: RpcOptions): UnaryCall<DeleteServerRoleRequest, Empty>;
    /**
     * Updates a server role.
     *
     * @generated from protobuf rpc: UpdateServerRole(ondewo.nlu.UpdateServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    updateServerRole(input: UpdateServerRoleRequest, options?: RpcOptions): UnaryCall<UpdateServerRoleRequest, ServerRole>;
    /**
     * Lists server roles.
     *
     * @generated from protobuf rpc: ListServerRoles(ondewo.nlu.ListServerRolesRequest) returns (ondewo.nlu.ListServerRolesResponse);
     */
    listServerRoles(input: ListServerRolesRequest, options?: RpcOptions): UnaryCall<ListServerRolesRequest, ListServerRolesResponse>;
    /**
     * Lists server permissions.
     *
     * @generated from protobuf rpc: ListServerPermissions(ondewo.nlu.ListServerPermissionsRequest) returns (ondewo.nlu.ListServerPermissionsResponse);
     */
    listServerPermissions(input: ListServerPermissionsRequest, options?: RpcOptions): UnaryCall<ListServerPermissionsRequest, ListServerPermissionsResponse>;
    /**
     * Requests login.
     *
     * @generated from protobuf rpc: Login(ondewo.nlu.LoginRequest) returns (ondewo.nlu.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * Checks login.
     *
     * @generated from protobuf rpc: CheckLogin(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    checkLogin(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * Lists notifications based on specified filters.
     *
     * @generated from protobuf rpc: ListNotifications(ondewo.nlu.ListNotificationsRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    listNotifications(input: ListNotificationsRequest, options?: RpcOptions): UnaryCall<ListNotificationsRequest, ListNotificationsResponse>;
    /**
     * Sets the flagged status for multiple notifications.
     *
     * @generated from protobuf rpc: SetNotificationsFlaggedStatus(ondewo.nlu.SetNotificationsFlaggedStatusRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    setNotificationsFlaggedStatus(input: SetNotificationsFlaggedStatusRequest, options?: RpcOptions): UnaryCall<SetNotificationsFlaggedStatusRequest, ListNotificationsResponse>;
    /**
     * Sets the read status for multiple notifications.
     *
     * @generated from protobuf rpc: SetNotificationsReadStatus(ondewo.nlu.SetNotificationsReadStatusRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    setNotificationsReadStatus(input: SetNotificationsReadStatusRequest, options?: RpcOptions): UnaryCall<SetNotificationsReadStatusRequest, ListNotificationsResponse>;
    /**
     * Retrieves user preferences based on the provided request.
     *
     * @generated from protobuf rpc: GetUserPreferences(ondewo.nlu.GetUserPreferencesRequest) returns (ondewo.nlu.GetUserPreferencesResponse);
     */
    getUserPreferences(input: GetUserPreferencesRequest, options?: RpcOptions): UnaryCall<GetUserPreferencesRequest, GetUserPreferencesResponse>;
    /**
     * Sets or updates user preferences based on the provided request.
     *
     * @generated from protobuf rpc: SetUserPreferences(ondewo.nlu.SetUserPreferencesRequest) returns (ondewo.nlu.SetUserPreferencesResponse);
     */
    setUserPreferences(input: SetUserPreferencesRequest, options?: RpcOptions): UnaryCall<SetUserPreferencesRequest, SetUserPreferencesResponse>;
    /**
     * Deletes specific user preferences based on the provided request.
     *
     * @generated from protobuf rpc: DeleteUserPreferences(ondewo.nlu.DeleteUserPreferencesRequest) returns (ondewo.nlu.DeleteUserPreferencesResponse);
     */
    deleteUserPreferences(input: DeleteUserPreferencesRequest, options?: RpcOptions): UnaryCall<DeleteUserPreferencesRequest, DeleteUserPreferencesResponse>;
    /**
     * Deletes all user preferences for a specific user, optionally filtered by a substring.
     *
     * @generated from protobuf rpc: DeleteAllUserPreferences(ondewo.nlu.DeleteAllUserPreferencesRequest) returns (ondewo.nlu.DeleteUserPreferencesResponse);
     */
    deleteAllUserPreferences(input: DeleteAllUserPreferencesRequest, options?: RpcOptions): UnaryCall<DeleteAllUserPreferencesRequest, DeleteUserPreferencesResponse>;
}
/**
 * gRPC service for managing users and server roles.
 *
 * @generated from protobuf service ondewo.nlu.Users
 */
export declare class UsersClient implements IUsersClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Creates a user.
     *
     * @generated from protobuf rpc: CreateUser(ondewo.nlu.CreateUserRequest) returns (ondewo.nlu.User);
     */
    createUser(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, User>;
    /**
     * Retrieves a user by identifier.
     *
     * @generated from protobuf rpc: GetUser(ondewo.nlu.GetUserRequest) returns (ondewo.nlu.User);
     */
    getUser(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, User>;
    /**
     * Retrieves user information by identifier.
     *
     * @generated from protobuf rpc: GetUserInfo(ondewo.nlu.GetUserRequest) returns (ondewo.nlu.UserInfo);
     */
    getUserInfo(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, UserInfo>;
    /**
     * Deletes a user by identifier.
     *
     * @generated from protobuf rpc: DeleteUser(ondewo.nlu.GetUserRequest) returns (google.protobuf.Empty);
     */
    deleteUser(input: GetUserRequest, options?: RpcOptions): UnaryCall<GetUserRequest, Empty>;
    /**
     * Updates a user.
     *
     * @generated from protobuf rpc: UpdateUser(ondewo.nlu.UpdateUserRequest) returns (ondewo.nlu.User);
     */
    updateUser(input: UpdateUserRequest, options?: RpcOptions): UnaryCall<UpdateUserRequest, User>;
    /**
     * Lists users.
     *
     * @generated from protobuf rpc: ListUsers(ondewo.nlu.ListUsersRequest) returns (ondewo.nlu.ListUsersResponse);
     */
    listUsers(input: ListUsersRequest, options?: RpcOptions): UnaryCall<ListUsersRequest, ListUsersResponse>;
    /**
     * Lists user information.
     *
     * @generated from protobuf rpc: ListUserInfos(ondewo.nlu.ListUsersRequest) returns (ondewo.nlu.ListUserInfosResponse);
     */
    listUserInfos(input: ListUsersRequest, options?: RpcOptions): UnaryCall<ListUsersRequest, ListUserInfosResponse>;
    /**
     * Creates a server role.
     *
     * @generated from protobuf rpc: CreateServerRole(ondewo.nlu.CreateServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    createServerRole(input: CreateServerRoleRequest, options?: RpcOptions): UnaryCall<CreateServerRoleRequest, ServerRole>;
    /**
     * Retrieves a server role by ID.
     *
     * @generated from protobuf rpc: GetServerRole(ondewo.nlu.GetServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    getServerRole(input: GetServerRoleRequest, options?: RpcOptions): UnaryCall<GetServerRoleRequest, ServerRole>;
    /**
     * Deletes a server role by ID.
     *
     * @generated from protobuf rpc: DeleteServerRole(ondewo.nlu.DeleteServerRoleRequest) returns (google.protobuf.Empty);
     */
    deleteServerRole(input: DeleteServerRoleRequest, options?: RpcOptions): UnaryCall<DeleteServerRoleRequest, Empty>;
    /**
     * Updates a server role.
     *
     * @generated from protobuf rpc: UpdateServerRole(ondewo.nlu.UpdateServerRoleRequest) returns (ondewo.nlu.ServerRole);
     */
    updateServerRole(input: UpdateServerRoleRequest, options?: RpcOptions): UnaryCall<UpdateServerRoleRequest, ServerRole>;
    /**
     * Lists server roles.
     *
     * @generated from protobuf rpc: ListServerRoles(ondewo.nlu.ListServerRolesRequest) returns (ondewo.nlu.ListServerRolesResponse);
     */
    listServerRoles(input: ListServerRolesRequest, options?: RpcOptions): UnaryCall<ListServerRolesRequest, ListServerRolesResponse>;
    /**
     * Lists server permissions.
     *
     * @generated from protobuf rpc: ListServerPermissions(ondewo.nlu.ListServerPermissionsRequest) returns (ondewo.nlu.ListServerPermissionsResponse);
     */
    listServerPermissions(input: ListServerPermissionsRequest, options?: RpcOptions): UnaryCall<ListServerPermissionsRequest, ListServerPermissionsResponse>;
    /**
     * Requests login.
     *
     * @generated from protobuf rpc: Login(ondewo.nlu.LoginRequest) returns (ondewo.nlu.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * Checks login.
     *
     * @generated from protobuf rpc: CheckLogin(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    checkLogin(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * Lists notifications based on specified filters.
     *
     * @generated from protobuf rpc: ListNotifications(ondewo.nlu.ListNotificationsRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    listNotifications(input: ListNotificationsRequest, options?: RpcOptions): UnaryCall<ListNotificationsRequest, ListNotificationsResponse>;
    /**
     * Sets the flagged status for multiple notifications.
     *
     * @generated from protobuf rpc: SetNotificationsFlaggedStatus(ondewo.nlu.SetNotificationsFlaggedStatusRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    setNotificationsFlaggedStatus(input: SetNotificationsFlaggedStatusRequest, options?: RpcOptions): UnaryCall<SetNotificationsFlaggedStatusRequest, ListNotificationsResponse>;
    /**
     * Sets the read status for multiple notifications.
     *
     * @generated from protobuf rpc: SetNotificationsReadStatus(ondewo.nlu.SetNotificationsReadStatusRequest) returns (ondewo.nlu.ListNotificationsResponse);
     */
    setNotificationsReadStatus(input: SetNotificationsReadStatusRequest, options?: RpcOptions): UnaryCall<SetNotificationsReadStatusRequest, ListNotificationsResponse>;
    /**
     * Retrieves user preferences based on the provided request.
     *
     * @generated from protobuf rpc: GetUserPreferences(ondewo.nlu.GetUserPreferencesRequest) returns (ondewo.nlu.GetUserPreferencesResponse);
     */
    getUserPreferences(input: GetUserPreferencesRequest, options?: RpcOptions): UnaryCall<GetUserPreferencesRequest, GetUserPreferencesResponse>;
    /**
     * Sets or updates user preferences based on the provided request.
     *
     * @generated from protobuf rpc: SetUserPreferences(ondewo.nlu.SetUserPreferencesRequest) returns (ondewo.nlu.SetUserPreferencesResponse);
     */
    setUserPreferences(input: SetUserPreferencesRequest, options?: RpcOptions): UnaryCall<SetUserPreferencesRequest, SetUserPreferencesResponse>;
    /**
     * Deletes specific user preferences based on the provided request.
     *
     * @generated from protobuf rpc: DeleteUserPreferences(ondewo.nlu.DeleteUserPreferencesRequest) returns (ondewo.nlu.DeleteUserPreferencesResponse);
     */
    deleteUserPreferences(input: DeleteUserPreferencesRequest, options?: RpcOptions): UnaryCall<DeleteUserPreferencesRequest, DeleteUserPreferencesResponse>;
    /**
     * Deletes all user preferences for a specific user, optionally filtered by a substring.
     *
     * @generated from protobuf rpc: DeleteAllUserPreferences(ondewo.nlu.DeleteAllUserPreferencesRequest) returns (ondewo.nlu.DeleteUserPreferencesResponse);
     */
    deleteAllUserPreferences(input: DeleteAllUserPreferencesRequest, options?: RpcOptions): UnaryCall<DeleteAllUserPreferencesRequest, DeleteUserPreferencesResponse>;
}
