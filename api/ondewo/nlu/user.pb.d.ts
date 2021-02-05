import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/project-role.pb';
export declare enum DefaultServerRole {
    serverUnspecified = 0,
    serverUser = 1,
    serverManager = 2,
    serverAdmin = 3,
    serverInactive = 4
}
export declare class User implements GrpcMessage {
    static toBinary(instance: User): any;
    static fromBinary(bytes: ByteSource): User;
    static refineValues(instance: User): void;
    static fromBinaryReader(instance: User, reader: BinaryReader): void;
    static toBinaryWriter(instance: User, writer: BinaryWriter): void;
    private _userId?;
    private _displayName?;
    private _serverRoleId?;
    private _userEmail?;
    /**
     * Creates an object and applies default Protobuf values
     * @param User value
     */
    constructor(value?: RecursivePartial<User>);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get serverRoleId(): number | undefined;
    set serverRoleId(value: number | undefined);
    get userEmail(): string | undefined;
    set userEmail(value: string | undefined);
    toObject(): {
        userId: string;
        displayName: string;
        serverRoleId: number;
        userEmail: string;
    };
    toJSON(): {
        userId: string;
        displayName: string;
        serverRoleId: number;
        userEmail: string;
    };
}
export declare module User { }
export declare class UserInfo implements GrpcMessage {
    static toBinary(instance: UserInfo): any;
    static fromBinary(bytes: ByteSource): UserInfo;
    static refineValues(instance: UserInfo): void;
    static fromBinaryReader(instance: UserInfo, reader: BinaryReader): void;
    static toBinaryWriter(instance: UserInfo, writer: BinaryWriter): void;
    private _user?;
    private _projectRoles?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInfo value
     */
    constructor(value?: RecursivePartial<UserInfo>);
    get user(): User | undefined;
    set user(value: User | undefined);
    get projectRoles(): {
        [prop: string]: ondewoNlu003.ProjectRole;
    } | undefined;
    set projectRoles(value: {
        [prop: string]: ondewoNlu003.ProjectRole;
    } | undefined);
    toObject(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        projectRoles: {
            [x: string]: ondewoNlu003.ProjectRole;
        };
    };
    toJSON(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        projectRoles: {
            [x: string]: ondewoNlu003.ProjectRole;
        };
    };
}
export declare module UserInfo {
    class ProjectRolesEntry implements GrpcMessage {
        static toBinary(instance: ProjectRolesEntry): any;
        static fromBinary(bytes: ByteSource): ProjectRolesEntry;
        static refineValues(instance: ProjectRolesEntry): void;
        static fromBinaryReader(instance: ProjectRolesEntry, reader: BinaryReader): void;
        static toBinaryWriter(instance: ProjectRolesEntry, writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Creates an object and applies default Protobuf values
         * @param ProjectRolesEntry value
         */
        constructor(value?: RecursivePartial<ProjectRolesEntry>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): ondewoNlu003.ProjectRole | undefined;
        set value(value: ondewoNlu003.ProjectRole | undefined);
        toObject(): {
            key: string;
            value: {
                roleId: number;
                name: string;
                permissions: string[];
            };
        };
        toJSON(): {
            key: string;
            value: {
                roleId: number;
                name: string;
                permissions: string[];
            };
        };
    }
    module ProjectRolesEntry { }
}
export declare class CreateUserRequest implements GrpcMessage {
    static toBinary(instance: CreateUserRequest): any;
    static fromBinary(bytes: ByteSource): CreateUserRequest;
    static refineValues(instance: CreateUserRequest): void;
    static fromBinaryReader(instance: CreateUserRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateUserRequest, writer: BinaryWriter): void;
    private _user?;
    private _password?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateUserRequest value
     */
    constructor(value?: RecursivePartial<CreateUserRequest>);
    get user(): User | undefined;
    set user(value: User | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    toObject(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        password: string;
    };
    toJSON(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        password: string;
    };
}
export declare module CreateUserRequest { }
export declare class UpdateUserRequest implements GrpcMessage {
    static toBinary(instance: UpdateUserRequest): any;
    static fromBinary(bytes: ByteSource): UpdateUserRequest;
    static refineValues(instance: UpdateUserRequest): void;
    static fromBinaryReader(instance: UpdateUserRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateUserRequest, writer: BinaryWriter): void;
    private _user?;
    private _password?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateUserRequest value
     */
    constructor(value?: RecursivePartial<UpdateUserRequest>);
    get user(): User | undefined;
    set user(value: User | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    toObject(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        password: string;
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        password: string;
        updateMask: {
            paths: string[];
        };
    };
}
export declare module UpdateUserRequest { }
export declare class GetUserRequest implements GrpcMessage {
    static toBinary(instance: GetUserRequest): any;
    static fromBinary(bytes: ByteSource): GetUserRequest;
    static refineValues(instance: GetUserRequest): void;
    static fromBinaryReader(instance: GetUserRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetUserRequest, writer: BinaryWriter): void;
    private _userId?;
    private _userEmail?;
    private _userIdentifier;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetUserRequest value
     */
    constructor(value?: RecursivePartial<GetUserRequest>);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    get userEmail(): string | undefined;
    set userEmail(value: string | undefined);
    get userIdentifier(): GetUserRequest.UserIdentifierCase;
    toObject(): {
        userId: string;
        userEmail: string;
    };
    toJSON(): {
        userId: string;
        userEmail: string;
    };
}
export declare module GetUserRequest {
    enum UserIdentifierCase {
        none = 0,
        userId = 1,
        userEmail = 2
    }
}
export declare class DeleteUserRequest implements GrpcMessage {
    static toBinary(instance: DeleteUserRequest): any;
    static fromBinary(bytes: ByteSource): DeleteUserRequest;
    static refineValues(instance: DeleteUserRequest): void;
    static fromBinaryReader(instance: DeleteUserRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteUserRequest, writer: BinaryWriter): void;
    private _userId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteUserRequest value
     */
    constructor(value?: RecursivePartial<DeleteUserRequest>);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    toObject(): {
        userId: string;
    };
    toJSON(): {
        userId: string;
    };
}
export declare module DeleteUserRequest { }
export declare class ListUsersRequest implements GrpcMessage {
    static toBinary(instance: ListUsersRequest): any;
    static fromBinary(bytes: ByteSource): ListUsersRequest;
    static refineValues(instance: ListUsersRequest): void;
    static fromBinaryReader(instance: ListUsersRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListUsersRequest, writer: BinaryWriter): void;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersRequest value
     */
    constructor(value?: RecursivePartial<ListUsersRequest>);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        pageToken: string;
    };
    toJSON(): {
        pageToken: string;
    };
}
export declare module ListUsersRequest { }
export declare class ListUsersResponse implements GrpcMessage {
    static toBinary(instance: ListUsersResponse): any;
    static fromBinary(bytes: ByteSource): ListUsersResponse;
    static refineValues(instance: ListUsersResponse): void;
    static fromBinaryReader(instance: ListUsersResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListUsersResponse, writer: BinaryWriter): void;
    private _users?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersResponse value
     */
    constructor(value?: RecursivePartial<ListUsersResponse>);
    get users(): User[] | undefined;
    set users(value: User[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        users: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        users: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        }[];
        nextPageToken: string;
    };
}
export declare module ListUsersResponse { }
export declare class ListUserInfosResponse implements GrpcMessage {
    static toBinary(instance: ListUserInfosResponse): any;
    static fromBinary(bytes: ByteSource): ListUserInfosResponse;
    static refineValues(instance: ListUserInfosResponse): void;
    static fromBinaryReader(instance: ListUserInfosResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListUserInfosResponse, writer: BinaryWriter): void;
    private _users?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUserInfosResponse value
     */
    constructor(value?: RecursivePartial<ListUserInfosResponse>);
    get users(): UserInfo[] | undefined;
    set users(value: UserInfo[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        users: {
            user: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
            projectRoles: {
                [x: string]: ondewoNlu003.ProjectRole;
            };
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        users: {
            user: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
            projectRoles: {
                [x: string]: ondewoNlu003.ProjectRole;
            };
        }[];
        nextPageToken: string;
    };
}
export declare module ListUserInfosResponse { }
export declare class ServerRole implements GrpcMessage {
    static toBinary(instance: ServerRole): any;
    static fromBinary(bytes: ByteSource): ServerRole;
    static refineValues(instance: ServerRole): void;
    static fromBinaryReader(instance: ServerRole, reader: BinaryReader): void;
    static toBinaryWriter(instance: ServerRole, writer: BinaryWriter): void;
    private _roleId?;
    private _name?;
    private _permissions?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ServerRole value
     */
    constructor(value?: RecursivePartial<ServerRole>);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get permissions(): string[] | undefined;
    set permissions(value: string[] | undefined);
    toObject(): {
        roleId: number;
        name: string;
        permissions: string[];
    };
    toJSON(): {
        roleId: number;
        name: string;
        permissions: string[];
    };
}
export declare module ServerRole { }
export declare class CreateServerRoleRequest implements GrpcMessage {
    static toBinary(instance: CreateServerRoleRequest): any;
    static fromBinary(bytes: ByteSource): CreateServerRoleRequest;
    static refineValues(instance: CreateServerRoleRequest): void;
    static fromBinaryReader(instance: CreateServerRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateServerRoleRequest, writer: BinaryWriter): void;
    private _role?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateServerRoleRequest value
     */
    constructor(value?: RecursivePartial<CreateServerRoleRequest>);
    get role(): ServerRole | undefined;
    set role(value: ServerRole | undefined);
    toObject(): {
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
    };
    toJSON(): {
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
    };
}
export declare module CreateServerRoleRequest { }
export declare class UpdateServerRoleRequest implements GrpcMessage {
    static toBinary(instance: UpdateServerRoleRequest): any;
    static fromBinary(bytes: ByteSource): UpdateServerRoleRequest;
    static refineValues(instance: UpdateServerRoleRequest): void;
    static fromBinaryReader(instance: UpdateServerRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateServerRoleRequest, writer: BinaryWriter): void;
    private _role?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateServerRoleRequest value
     */
    constructor(value?: RecursivePartial<UpdateServerRoleRequest>);
    get role(): ServerRole | undefined;
    set role(value: ServerRole | undefined);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    toObject(): {
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        updateMask: {
            paths: string[];
        };
    };
}
export declare module UpdateServerRoleRequest { }
export declare class DeleteServerRoleRequest implements GrpcMessage {
    static toBinary(instance: DeleteServerRoleRequest): any;
    static fromBinary(bytes: ByteSource): DeleteServerRoleRequest;
    static refineValues(instance: DeleteServerRoleRequest): void;
    static fromBinaryReader(instance: DeleteServerRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteServerRoleRequest, writer: BinaryWriter): void;
    private _roleId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteServerRoleRequest value
     */
    constructor(value?: RecursivePartial<DeleteServerRoleRequest>);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    toObject(): {
        roleId: number;
    };
    toJSON(): {
        roleId: number;
    };
}
export declare module DeleteServerRoleRequest { }
export declare class GetServerRoleRequest implements GrpcMessage {
    static toBinary(instance: GetServerRoleRequest): any;
    static fromBinary(bytes: ByteSource): GetServerRoleRequest;
    static refineValues(instance: GetServerRoleRequest): void;
    static fromBinaryReader(instance: GetServerRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetServerRoleRequest, writer: BinaryWriter): void;
    private _roleId?;
    private _roleName?;
    private _serverRoleIdentifier;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetServerRoleRequest value
     */
    constructor(value?: RecursivePartial<GetServerRoleRequest>);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    get roleName(): string | undefined;
    set roleName(value: string | undefined);
    get serverRoleIdentifier(): GetServerRoleRequest.ServerRoleIdentifierCase;
    toObject(): {
        roleId: number;
        roleName: string;
    };
    toJSON(): {
        roleId: number;
        roleName: string;
    };
}
export declare module GetServerRoleRequest {
    enum ServerRoleIdentifierCase {
        none = 0,
        roleId = 1,
        roleName = 2
    }
}
export declare class ListServerRolesRequest implements GrpcMessage {
    static toBinary(instance: ListServerRolesRequest): any;
    static fromBinary(bytes: ByteSource): ListServerRolesRequest;
    static refineValues(instance: ListServerRolesRequest): void;
    static fromBinaryReader(instance: ListServerRolesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListServerRolesRequest, writer: BinaryWriter): void;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesRequest value
     */
    constructor(value?: RecursivePartial<ListServerRolesRequest>);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        pageToken: string;
    };
    toJSON(): {
        pageToken: string;
    };
}
export declare module ListServerRolesRequest { }
export declare class ListServerRolesResponse implements GrpcMessage {
    static toBinary(instance: ListServerRolesResponse): any;
    static fromBinary(bytes: ByteSource): ListServerRolesResponse;
    static refineValues(instance: ListServerRolesResponse): void;
    static fromBinaryReader(instance: ListServerRolesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListServerRolesResponse, writer: BinaryWriter): void;
    private _serverRoles?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesResponse value
     */
    constructor(value?: RecursivePartial<ListServerRolesResponse>);
    get serverRoles(): ServerRole[] | undefined;
    set serverRoles(value: ServerRole[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        serverRoles: {
            roleId: number;
            name: string;
            permissions: string[];
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        serverRoles: {
            roleId: number;
            name: string;
            permissions: string[];
        }[];
        nextPageToken: string;
    };
}
export declare module ListServerRolesResponse { }
export declare class ListServerPermissionsRequest implements GrpcMessage {
    static toBinary(instance: ListServerPermissionsRequest): any;
    static fromBinary(bytes: ByteSource): ListServerPermissionsRequest;
    static refineValues(instance: ListServerPermissionsRequest): void;
    static fromBinaryReader(instance: ListServerPermissionsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListServerPermissionsRequest, writer: BinaryWriter): void;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsRequest value
     */
    constructor(value?: RecursivePartial<ListServerPermissionsRequest>);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        pageToken: string;
    };
    toJSON(): {
        pageToken: string;
    };
}
export declare module ListServerPermissionsRequest { }
export declare class ListServerPermissionsResponse implements GrpcMessage {
    static toBinary(instance: ListServerPermissionsResponse): any;
    static fromBinary(bytes: ByteSource): ListServerPermissionsResponse;
    static refineValues(instance: ListServerPermissionsResponse): void;
    static fromBinaryReader(instance: ListServerPermissionsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListServerPermissionsResponse, writer: BinaryWriter): void;
    private _permissions?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsResponse value
     */
    constructor(value?: RecursivePartial<ListServerPermissionsResponse>);
    get permissions(): string[] | undefined;
    set permissions(value: string[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        permissions: string[];
        nextPageToken: string;
    };
    toJSON(): {
        permissions: string[];
        nextPageToken: string;
    };
}
export declare module ListServerPermissionsResponse { }
export declare class LoginRequest implements GrpcMessage {
    static toBinary(instance: LoginRequest): any;
    static fromBinary(bytes: ByteSource): LoginRequest;
    static refineValues(instance: LoginRequest): void;
    static fromBinaryReader(instance: LoginRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: LoginRequest, writer: BinaryWriter): void;
    private _userEmail?;
    private _password?;
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginRequest value
     */
    constructor(value?: RecursivePartial<LoginRequest>);
    get userEmail(): string | undefined;
    set userEmail(value: string | undefined);
    get password(): string | undefined;
    set password(value: string | undefined);
    toObject(): {
        userEmail: string;
        password: string;
    };
    toJSON(): {
        userEmail: string;
        password: string;
    };
}
export declare module LoginRequest { }
export declare class LoginResponse implements GrpcMessage {
    static toBinary(instance: LoginResponse): any;
    static fromBinary(bytes: ByteSource): LoginResponse;
    static refineValues(instance: LoginResponse): void;
    static fromBinaryReader(instance: LoginResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: LoginResponse, writer: BinaryWriter): void;
    private _user?;
    private _authToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginResponse value
     */
    constructor(value?: RecursivePartial<LoginResponse>);
    get user(): User | undefined;
    set user(value: User | undefined);
    get authToken(): string | undefined;
    set authToken(value: string | undefined);
    toObject(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        authToken: string;
    };
    toJSON(): {
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        authToken: string;
    };
}
export declare module LoginResponse { }
