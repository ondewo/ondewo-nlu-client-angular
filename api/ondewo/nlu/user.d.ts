import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { KeyValuePair } from "./common";
import { FieldMask } from "../../google/protobuf/field_mask";
import { ProjectRole } from "./project_role";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * this message contains all the fields that required for user db
 *
 * @generated from protobuf message ondewo.nlu.User
 */
export interface User {
    /**
     * when creating user user_id is empty, then it will be generated on creation time on backend
     *
     * @generated from protobuf field: string user_id = 2;
     */
    userId: string;
    /**
     * Optional field display_name is the name that will be used on the frontend to interact with the user
     * it shouldn't be unique. If not provided user_name will also be used as display name
     *
     * @generated from protobuf field: string display_name = 3;
     */
    displayName: string;
    /**
     * server role type of the given user. If nothing is provided, the user is set to USER (minimum access)
     *
     * @generated from protobuf field: uint32 server_role_id = 6;
     */
    serverRoleId: number;
    /**
     * user e-mail should be a valid e-mail and unique
     *
     * @generated from protobuf field: string user_email = 7;
     */
    userEmail: string;
    /**
     * user profile picture
     *
     * @generated from protobuf field: bytes user_profile_picture = 8;
     */
    userProfilePicture: Uint8Array;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 10;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 11;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 12;
     */
    modifiedBy: string;
}
/**
 * This message contains information about user
 *
 * @generated from protobuf message ondewo.nlu.UserInfo
 */
export interface UserInfo {
    /**
     * user object
     *
     * @generated from protobuf field: ondewo.nlu.User user = 1;
     */
    user?: User;
    /**
     * If in GetUser, ListUser requests UserView is FULL, then the mapping is additionally provided
     * of parent of the project and corresponding ProjectRole of the user
     *
     * @generated from protobuf field: map<string, ondewo.nlu.ProjectRole> project_roles = 2;
     */
    projectRoles: {
        [key: string]: ProjectRole;
    };
}
/**
 * Request to create user
 *
 * @generated from protobuf message ondewo.nlu.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * user_id in the User message should be given, if empty will throw an error in the backend
     *
     * @generated from protobuf field: ondewo.nlu.User user = 1;
     */
    user?: User;
    /**
     * password
     *
     * @generated from protobuf field: string password = 3;
     */
    password: string;
}
/**
 * Request to update user
 *
 * @generated from protobuf message ondewo.nlu.UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * user_id in the User message should be given, if empty will throw an error in the backend
     * password and other fields in the User are optional. Only the fields to be updated should be provided
     *
     * @generated from protobuf field: ondewo.nlu.User user = 1;
     */
    user?: User;
    /**
     * Password of the user
     *
     * @generated from protobuf field: string password = 4;
     */
    password: string;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 5;
     */
    updateMask?: FieldMask;
}
/**
 * Request to get user
 *
 * @generated from protobuf message ondewo.nlu.GetUserRequest
 */
export interface GetUserRequest {
    /**
     * @generated from protobuf oneof: user_identifier
     */
    userIdentifier: {
        oneofKind: "userId";
        /**
         * the user is identified by user id
         *
         * @generated from protobuf field: string user_id = 1;
         */
        userId: string;
    } | {
        oneofKind: "userEmail";
        /**
         * the user can identified by their email
         *
         * @generated from protobuf field: string user_email = 3;
         */
        userEmail: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request to delete user
 *
 * @generated from protobuf message ondewo.nlu.DeleteUserRequest
 */
export interface DeleteUserRequest {
    /**
     * user is identified by user id, if empty will throw an error in the backend
     *
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
}
/**
 * Request to list user
 *
 * @generated from protobuf message ondewo.nlu.ListUsersRequest
 */
export interface ListUsersRequest {
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 1;
     */
    pageToken: string;
}
/**
 * Response containing list of users
 *
 * @generated from protobuf message ondewo.nlu.ListUsersResponse
 */
export interface ListUsersResponse {
    /**
     * The list of users. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.User users = 1;
     */
    users: User[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Response containing list of users
 *
 * @generated from protobuf message ondewo.nlu.ListUserInfosResponse
 */
export interface ListUserInfosResponse {
    /**
     * The list of server roles. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.UserInfo users = 1;
     */
    users: UserInfo[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Server Role messages
 *
 * @generated from protobuf message ondewo.nlu.ServerRole
 */
export interface ServerRole {
    /**
     * unique identifier of the role
     *
     * @generated from protobuf field: uint32 role_id = 1;
     */
    roleId: number;
    /**
     * unique name of the role
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * defines the permissions for the given role (the strings can be gotten from the ListServerPermissions)
     *
     * @generated from protobuf field: repeated string permissions = 3;
     */
    permissions: string[];
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 5;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 6;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 7;
     */
    modifiedBy: string;
}
/**
 * Request to create server role
 *
 * @generated from protobuf message ondewo.nlu.CreateServerRoleRequest
 */
export interface CreateServerRoleRequest {
    /**
     * If the role_id is not provided, an incremental value will be assigned
     * The "name" and "role_type" are mandatory values
     * The permissions all default to False if not provided specifically
     *
     * @generated from protobuf field: ondewo.nlu.ServerRole role = 1;
     */
    role?: ServerRole;
}
/**
 * Request to update server role
 *
 * @generated from protobuf message ondewo.nlu.UpdateServerRoleRequest
 */
export interface UpdateServerRoleRequest {
    /**
     * role_id in the Role message should be given, if empty will throw an error in the backend
     * other fields in the Role are optional. Only the fields to be updated should be provided
     *
     * @generated from protobuf field: ondewo.nlu.ServerRole role = 1;
     */
    role?: ServerRole;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
}
/**
 * Request to delete server role
 *
 * @generated from protobuf message ondewo.nlu.DeleteServerRoleRequest
 */
export interface DeleteServerRoleRequest {
    /**
     * role is identified by role id, if empty will throw an error in the backend
     *
     * @generated from protobuf field: uint32 role_id = 1;
     */
    roleId: number;
}
/**
 * Request to get server role
 *
 * @generated from protobuf message ondewo.nlu.GetServerRoleRequest
 */
export interface GetServerRoleRequest {
    /**
     * @generated from protobuf oneof: server_role_identifier
     */
    serverRoleIdentifier: {
        oneofKind: "roleId";
        /**
         * role is identified by role id
         *
         * @generated from protobuf field: uint32 role_id = 1;
         */
        roleId: number;
    } | {
        oneofKind: "roleName";
        /**
         * role can also be uniquely identified by its name
         *
         * @generated from protobuf field: string role_name = 2;
         */
        roleName: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Request to list server roles
 *
 * @generated from protobuf message ondewo.nlu.ListServerRolesRequest
 */
export interface ListServerRolesRequest {
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 1;
     */
    pageToken: string;
}
/**
 * Response containing list of server roles
 *
 * @generated from protobuf message ondewo.nlu.ListServerRolesResponse
 */
export interface ListServerRolesResponse {
    /**
     * The list of server roles. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.ServerRole server_roles = 1;
     */
    serverRoles: ServerRole[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Server permissions
 *
 * @generated from protobuf message ondewo.nlu.ListServerPermissionsRequest
 */
export interface ListServerPermissionsRequest {
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 1;
     */
    pageToken: string;
}
/**
 * Response containing list of server permissions
 *
 * @generated from protobuf message ondewo.nlu.ListServerPermissionsResponse
 */
export interface ListServerPermissionsResponse {
    /**
     * The list of server permissions. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated string permissions = 1;
     */
    permissions: string[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Authentication messages
 *
 * @generated from protobuf message ondewo.nlu.LoginRequest
 */
export interface LoginRequest {
    /**
     * user email
     *
     * @generated from protobuf field: string user_email = 1;
     */
    userEmail: string;
    /**
     * user password
     *
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * This message is a response of logging
 *
 * @generated from protobuf message ondewo.nlu.LoginResponse
 */
export interface LoginResponse {
    /**
     * user object - user_id must be there
     *
     * @generated from protobuf field: ondewo.nlu.User user = 1;
     */
    user?: User;
    /**
     * authentication token after successful login of the user to access NLU services
     *
     * @generated from protobuf field: string auth_token = 2;
     */
    authToken: string;
}
/**
 * Request to get user preferences.
 *
 * @generated from protobuf message ondewo.nlu.GetUserPreferencesRequest
 */
export interface GetUserPreferencesRequest {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * Specific keys to retrieve from user preferences.
     * If keys are specified multiple times then only one KeyValue pair is returned
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
    /**
     * Optional: In addition to the keys specified also include all <pre>keys</pre> that match the provided
     * <pre>regex_include</pre> regular expression.
     * If user does not add regex_filter, then only the keys specified in the keys field are returned.
     * If both, a key in the keys field and in the regex_include will be matched than only a single
     * <pre>KeyValuePair</pre> is returned.
     *
     * @generated from protobuf field: string regex_include = 3;
     */
    regexInclude: string;
}
/**
 * Response containing user preferences.
 *
 * @generated from protobuf message ondewo.nlu.GetUserPreferencesResponse
 */
export interface GetUserPreferencesResponse {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of key-value pairs representing user preferences.
     *
     * @generated from protobuf field: repeated ondewo.nlu.KeyValuePair key_value_pairs = 2;
     */
    keyValuePairs: KeyValuePair[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
/**
 * Request to set or update user preferences.
 *
 * @generated from protobuf message ondewo.nlu.SetUserPreferencesRequest
 */
export interface SetUserPreferencesRequest {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of key-value pairs to set or update.
     *
     * @generated from protobuf field: repeated ondewo.nlu.KeyValuePair key_value_pairs = 2;
     */
    keyValuePairs: KeyValuePair[];
}
/**
 * Response to set or update user preferences.
 *
 * @generated from protobuf message ondewo.nlu.SetUserPreferencesResponse
 */
export interface SetUserPreferencesResponse {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of keys to delete from user preferences.
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
/**
 * Request to delete specific user preferences.
 *
 * @generated from protobuf message ondewo.nlu.DeleteUserPreferencesRequest
 */
export interface DeleteUserPreferencesRequest {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of keys to delete from user preferences.
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
    /**
     * Optional: In addition to the keys specified also include all <pre>keys</pre> that match the provided
     * <pre>regex_include</pre> regular expression.
     * If user does not add regex_filter, then only the keys specified in the keys field are deleted.
     * If both, a key in the keys field and in the regex_include is matched then the key is deleted without raising an error.
     *
     * @generated from protobuf field: string regex_include = 3;
     */
    regexInclude: string;
}
/**
 * Response to delete specific user preferences.
 *
 * @generated from protobuf message ondewo.nlu.DeleteUserPreferencesResponse
 */
export interface DeleteUserPreferencesResponse {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of keys to delete from user preferences.
     *
     * @generated from protobuf field: repeated string keys = 2;
     */
    keys: string[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
/**
 * Request to delete all user preferences with an filter substring.
 *
 * @generated from protobuf message ondewo.nlu.DeleteAllUserPreferencesRequest
 */
export interface DeleteAllUserPreferencesRequest {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * Optional: Only delete keys that match the provided regular expression.
     * If user does not add regex_filter, then all user preferences will be deleted
     * Example:
     * Only delete keys starting with DE: <code>^DE_</code>
     * Only delete keys matching: <code>.*user.*</code>
     *
     * @generated from protobuf field: string regex_filter = 2;
     */
    regexFilter: string;
}
/**
 * Request to list all user preferences for a specific user.
 *
 * @generated from protobuf message ondewo.nlu.ListUserPreferencesRequest
 */
export interface ListUserPreferencesRequest {
    /**
     * The name of the user.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * Optional: Only list keys that match the provided regular expression
     *
     * @generated from protobuf field: string regex_filter = 2;
     */
    regexFilter: string;
}
/**
 * Response containing a list of user preferences for a specific user with an filter substring.
 *
 * @generated from protobuf message ondewo.nlu.ListUserPreferencesResponse
 */
export interface ListUserPreferencesResponse {
    /**
     * The name of the user.
     *
     * @generated from protobuf field: string user_name = 1;
     */
    userName: string;
    /**
     * List of key-value pairs representing user preferences.
     *
     * @generated from protobuf field: repeated ondewo.nlu.KeyValuePair key_value_pairs = 2;
     */
    keyValuePairs: KeyValuePair[];
    /**
     * error message if there are any.
     *
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
/**
 * Structure of server role
 *
 * @generated from protobuf enum ondewo.nlu.DefaultServerRole
 */
export declare enum DefaultServerRole {
    /**
     * unspecified server role
     *
     * @generated from protobuf enum value: SERVER_UNSPECIFIED = 0;
     */
    SERVER_UNSPECIFIED = 0,
    /**
     * read-only access
     *
     * @generated from protobuf enum value: SERVER_USER = 1;
     */
    SERVER_USER = 1,
    /**
     * SERVER_USER's permissions + CRUD of projects and Users
     *
     * @generated from protobuf enum value: SERVER_MANAGER = 2;
     */
    SERVER_MANAGER = 2,
    /**
     * this role can do everything
     *
     * @generated from protobuf enum value: SERVER_ADMIN = 3;
     */
    SERVER_ADMIN = 3,
    /**
     * this role can do nothing. Used to set a user as inactive in the server.
     *
     * @generated from protobuf enum value: SERVER_INACTIVE = 4;
     */
    SERVER_INACTIVE = 4
}
declare class User$Type extends MessageType<User> {
    constructor();
    create(value?: PartialMessage<User>): User;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User;
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.User
 */
export declare const User: User$Type;
declare class UserInfo$Type extends MessageType<UserInfo> {
    constructor();
    create(value?: PartialMessage<UserInfo>): UserInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserInfo): UserInfo;
    private binaryReadMap2;
    internalBinaryWrite(message: UserInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UserInfo
 */
export declare const UserInfo: UserInfo$Type;
declare class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor();
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest;
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateUserRequest
 */
export declare const CreateUserRequest: CreateUserRequest$Type;
declare class UpdateUserRequest$Type extends MessageType<UpdateUserRequest> {
    constructor();
    create(value?: PartialMessage<UpdateUserRequest>): UpdateUserRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateUserRequest): UpdateUserRequest;
    internalBinaryWrite(message: UpdateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateUserRequest
 */
export declare const UpdateUserRequest: UpdateUserRequest$Type;
declare class GetUserRequest$Type extends MessageType<GetUserRequest> {
    constructor();
    create(value?: PartialMessage<GetUserRequest>): GetUserRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserRequest): GetUserRequest;
    internalBinaryWrite(message: GetUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetUserRequest
 */
export declare const GetUserRequest: GetUserRequest$Type;
declare class DeleteUserRequest$Type extends MessageType<DeleteUserRequest> {
    constructor();
    create(value?: PartialMessage<DeleteUserRequest>): DeleteUserRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserRequest): DeleteUserRequest;
    internalBinaryWrite(message: DeleteUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteUserRequest
 */
export declare const DeleteUserRequest: DeleteUserRequest$Type;
declare class ListUsersRequest$Type extends MessageType<ListUsersRequest> {
    constructor();
    create(value?: PartialMessage<ListUsersRequest>): ListUsersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersRequest): ListUsersRequest;
    internalBinaryWrite(message: ListUsersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUsersRequest
 */
export declare const ListUsersRequest: ListUsersRequest$Type;
declare class ListUsersResponse$Type extends MessageType<ListUsersResponse> {
    constructor();
    create(value?: PartialMessage<ListUsersResponse>): ListUsersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUsersResponse): ListUsersResponse;
    internalBinaryWrite(message: ListUsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUsersResponse
 */
export declare const ListUsersResponse: ListUsersResponse$Type;
declare class ListUserInfosResponse$Type extends MessageType<ListUserInfosResponse> {
    constructor();
    create(value?: PartialMessage<ListUserInfosResponse>): ListUserInfosResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUserInfosResponse): ListUserInfosResponse;
    internalBinaryWrite(message: ListUserInfosResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUserInfosResponse
 */
export declare const ListUserInfosResponse: ListUserInfosResponse$Type;
declare class ServerRole$Type extends MessageType<ServerRole> {
    constructor();
    create(value?: PartialMessage<ServerRole>): ServerRole;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServerRole): ServerRole;
    internalBinaryWrite(message: ServerRole, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ServerRole
 */
export declare const ServerRole: ServerRole$Type;
declare class CreateServerRoleRequest$Type extends MessageType<CreateServerRoleRequest> {
    constructor();
    create(value?: PartialMessage<CreateServerRoleRequest>): CreateServerRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateServerRoleRequest): CreateServerRoleRequest;
    internalBinaryWrite(message: CreateServerRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateServerRoleRequest
 */
export declare const CreateServerRoleRequest: CreateServerRoleRequest$Type;
declare class UpdateServerRoleRequest$Type extends MessageType<UpdateServerRoleRequest> {
    constructor();
    create(value?: PartialMessage<UpdateServerRoleRequest>): UpdateServerRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateServerRoleRequest): UpdateServerRoleRequest;
    internalBinaryWrite(message: UpdateServerRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateServerRoleRequest
 */
export declare const UpdateServerRoleRequest: UpdateServerRoleRequest$Type;
declare class DeleteServerRoleRequest$Type extends MessageType<DeleteServerRoleRequest> {
    constructor();
    create(value?: PartialMessage<DeleteServerRoleRequest>): DeleteServerRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteServerRoleRequest): DeleteServerRoleRequest;
    internalBinaryWrite(message: DeleteServerRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteServerRoleRequest
 */
export declare const DeleteServerRoleRequest: DeleteServerRoleRequest$Type;
declare class GetServerRoleRequest$Type extends MessageType<GetServerRoleRequest> {
    constructor();
    create(value?: PartialMessage<GetServerRoleRequest>): GetServerRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetServerRoleRequest): GetServerRoleRequest;
    internalBinaryWrite(message: GetServerRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetServerRoleRequest
 */
export declare const GetServerRoleRequest: GetServerRoleRequest$Type;
declare class ListServerRolesRequest$Type extends MessageType<ListServerRolesRequest> {
    constructor();
    create(value?: PartialMessage<ListServerRolesRequest>): ListServerRolesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListServerRolesRequest): ListServerRolesRequest;
    internalBinaryWrite(message: ListServerRolesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListServerRolesRequest
 */
export declare const ListServerRolesRequest: ListServerRolesRequest$Type;
declare class ListServerRolesResponse$Type extends MessageType<ListServerRolesResponse> {
    constructor();
    create(value?: PartialMessage<ListServerRolesResponse>): ListServerRolesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListServerRolesResponse): ListServerRolesResponse;
    internalBinaryWrite(message: ListServerRolesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListServerRolesResponse
 */
export declare const ListServerRolesResponse: ListServerRolesResponse$Type;
declare class ListServerPermissionsRequest$Type extends MessageType<ListServerPermissionsRequest> {
    constructor();
    create(value?: PartialMessage<ListServerPermissionsRequest>): ListServerPermissionsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListServerPermissionsRequest): ListServerPermissionsRequest;
    internalBinaryWrite(message: ListServerPermissionsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListServerPermissionsRequest
 */
export declare const ListServerPermissionsRequest: ListServerPermissionsRequest$Type;
declare class ListServerPermissionsResponse$Type extends MessageType<ListServerPermissionsResponse> {
    constructor();
    create(value?: PartialMessage<ListServerPermissionsResponse>): ListServerPermissionsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListServerPermissionsResponse): ListServerPermissionsResponse;
    internalBinaryWrite(message: ListServerPermissionsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListServerPermissionsResponse
 */
export declare const ListServerPermissionsResponse: ListServerPermissionsResponse$Type;
declare class LoginRequest$Type extends MessageType<LoginRequest> {
    constructor();
    create(value?: PartialMessage<LoginRequest>): LoginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginRequest): LoginRequest;
    internalBinaryWrite(message: LoginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LoginRequest
 */
export declare const LoginRequest: LoginRequest$Type;
declare class LoginResponse$Type extends MessageType<LoginResponse> {
    constructor();
    create(value?: PartialMessage<LoginResponse>): LoginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginResponse): LoginResponse;
    internalBinaryWrite(message: LoginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.LoginResponse
 */
export declare const LoginResponse: LoginResponse$Type;
declare class GetUserPreferencesRequest$Type extends MessageType<GetUserPreferencesRequest> {
    constructor();
    create(value?: PartialMessage<GetUserPreferencesRequest>): GetUserPreferencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserPreferencesRequest): GetUserPreferencesRequest;
    internalBinaryWrite(message: GetUserPreferencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetUserPreferencesRequest
 */
export declare const GetUserPreferencesRequest: GetUserPreferencesRequest$Type;
declare class GetUserPreferencesResponse$Type extends MessageType<GetUserPreferencesResponse> {
    constructor();
    create(value?: PartialMessage<GetUserPreferencesResponse>): GetUserPreferencesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserPreferencesResponse): GetUserPreferencesResponse;
    internalBinaryWrite(message: GetUserPreferencesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetUserPreferencesResponse
 */
export declare const GetUserPreferencesResponse: GetUserPreferencesResponse$Type;
declare class SetUserPreferencesRequest$Type extends MessageType<SetUserPreferencesRequest> {
    constructor();
    create(value?: PartialMessage<SetUserPreferencesRequest>): SetUserPreferencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetUserPreferencesRequest): SetUserPreferencesRequest;
    internalBinaryWrite(message: SetUserPreferencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetUserPreferencesRequest
 */
export declare const SetUserPreferencesRequest: SetUserPreferencesRequest$Type;
declare class SetUserPreferencesResponse$Type extends MessageType<SetUserPreferencesResponse> {
    constructor();
    create(value?: PartialMessage<SetUserPreferencesResponse>): SetUserPreferencesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetUserPreferencesResponse): SetUserPreferencesResponse;
    internalBinaryWrite(message: SetUserPreferencesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetUserPreferencesResponse
 */
export declare const SetUserPreferencesResponse: SetUserPreferencesResponse$Type;
declare class DeleteUserPreferencesRequest$Type extends MessageType<DeleteUserPreferencesRequest> {
    constructor();
    create(value?: PartialMessage<DeleteUserPreferencesRequest>): DeleteUserPreferencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserPreferencesRequest): DeleteUserPreferencesRequest;
    internalBinaryWrite(message: DeleteUserPreferencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteUserPreferencesRequest
 */
export declare const DeleteUserPreferencesRequest: DeleteUserPreferencesRequest$Type;
declare class DeleteUserPreferencesResponse$Type extends MessageType<DeleteUserPreferencesResponse> {
    constructor();
    create(value?: PartialMessage<DeleteUserPreferencesResponse>): DeleteUserPreferencesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteUserPreferencesResponse): DeleteUserPreferencesResponse;
    internalBinaryWrite(message: DeleteUserPreferencesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteUserPreferencesResponse
 */
export declare const DeleteUserPreferencesResponse: DeleteUserPreferencesResponse$Type;
declare class DeleteAllUserPreferencesRequest$Type extends MessageType<DeleteAllUserPreferencesRequest> {
    constructor();
    create(value?: PartialMessage<DeleteAllUserPreferencesRequest>): DeleteAllUserPreferencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteAllUserPreferencesRequest): DeleteAllUserPreferencesRequest;
    internalBinaryWrite(message: DeleteAllUserPreferencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteAllUserPreferencesRequest
 */
export declare const DeleteAllUserPreferencesRequest: DeleteAllUserPreferencesRequest$Type;
declare class ListUserPreferencesRequest$Type extends MessageType<ListUserPreferencesRequest> {
    constructor();
    create(value?: PartialMessage<ListUserPreferencesRequest>): ListUserPreferencesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUserPreferencesRequest): ListUserPreferencesRequest;
    internalBinaryWrite(message: ListUserPreferencesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUserPreferencesRequest
 */
export declare const ListUserPreferencesRequest: ListUserPreferencesRequest$Type;
declare class ListUserPreferencesResponse$Type extends MessageType<ListUserPreferencesResponse> {
    constructor();
    create(value?: PartialMessage<ListUserPreferencesResponse>): ListUserPreferencesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListUserPreferencesResponse): ListUserPreferencesResponse;
    internalBinaryWrite(message: ListUserPreferencesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListUserPreferencesResponse
 */
export declare const ListUserPreferencesResponse: ListUserPreferencesResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Users
 */
export declare const Users: ServiceType;
export {};
