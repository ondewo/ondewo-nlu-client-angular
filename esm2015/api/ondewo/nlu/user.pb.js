import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/project-role.pb';
export var DefaultServerRole;
(function (DefaultServerRole) {
    DefaultServerRole[DefaultServerRole["serverUnspecified"] = 0] = "serverUnspecified";
    DefaultServerRole[DefaultServerRole["serverUser"] = 1] = "serverUser";
    DefaultServerRole[DefaultServerRole["serverManager"] = 2] = "serverManager";
    DefaultServerRole[DefaultServerRole["serverAdmin"] = 3] = "serverAdmin";
    DefaultServerRole[DefaultServerRole["serverInactive"] = 4] = "serverInactive";
})(DefaultServerRole || (DefaultServerRole = {}));
export class User {
    /**
     * Creates an object and applies default Protobuf values
     * @param User value
     */
    constructor(value) {
        value = value || {};
        this.userId = value.userId;
        this.displayName = value.displayName;
        this.serverRoleId = value.serverRoleId;
        this.userEmail = value.userEmail;
        User.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        User.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new User();
        User.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userId = instance.userId || '';
        instance.displayName = instance.displayName || '';
        instance.serverRoleId = instance.serverRoleId || 0;
        instance.userEmail = instance.userEmail || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    instance.userId = reader.readString();
                    break;
                case 3:
                    instance.displayName = reader.readString();
                    break;
                case 6:
                    instance.serverRoleId = reader.readUint32();
                    break;
                case 7:
                    instance.userEmail = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        User.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
        if (instance.displayName) {
            writer.writeString(3, instance.displayName);
        }
        if (instance.serverRoleId) {
            writer.writeUint32(6, instance.serverRoleId);
        }
        if (instance.userEmail) {
            writer.writeString(7, instance.userEmail);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get serverRoleId() {
        return this._serverRoleId;
    }
    set serverRoleId(value) {
        this._serverRoleId = value;
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        this._userEmail = value;
    }
    toObject() {
        return {
            userId: this.userId,
            displayName: this.displayName,
            serverRoleId: this.serverRoleId,
            userEmail: this.userEmail
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UserInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInfo value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.projectRoles = Object.assign({}, (value.projectRoles || {}));
        UserInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UserInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UserInfo();
        UserInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.projectRoles = instance.projectRoles || {};
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 2:
                    const msg_2 = {};
                    reader.readMessage(msg_2, UserInfo.ProjectRolesEntry.fromBinaryReader);
                    instance.projectRoles = instance.projectRoles || {};
                    instance.projectRoles[msg_2.key] = msg_2.value;
                    break;
                default:
                    reader.skipField();
            }
        }
        UserInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (!!instance.projectRoles) {
            const keys_2 = Object.keys(instance.projectRoles);
            if (keys_2.length) {
                const repeated_2 = keys_2
                    .map(key => ({
                    key: key,
                    value: instance.projectRoles[key]
                }))
                    .reduce((r, v) => [...r, v], []);
                writer.writeRepeatedMessage(2, repeated_2, UserInfo.ProjectRolesEntry.toBinaryWriter);
            }
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get projectRoles() {
        return this._projectRoles;
    }
    set projectRoles(value) {
        this._projectRoles = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            projectRoles: Object.assign({}, (this.projectRoles || {}))
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (UserInfo) {
    class ProjectRolesEntry {
        /**
         * Creates an object and applies default Protobuf values
         * @param ProjectRolesEntry value
         */
        constructor(value) {
            value = value || {};
            this.key = value.key;
            this.value = value.value
                ? new ondewoNlu003.ProjectRole(value.value)
                : undefined;
            ProjectRolesEntry.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ProjectRolesEntry.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ProjectRolesEntry();
            ProjectRolesEntry.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.key = instance.key || '';
            instance.value = instance.value || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.key = reader.readString();
                        break;
                    case 2:
                        instance.value = new ondewoNlu003.ProjectRole();
                        reader.readMessage(instance.value, ondewoNlu003.ProjectRole.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ProjectRolesEntry.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.key) {
                writer.writeString(1, instance.key);
            }
            if (instance.value) {
                writer.writeMessage(2, instance.value, ondewoNlu003.ProjectRole.toBinaryWriter);
            }
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    UserInfo.ProjectRolesEntry = ProjectRolesEntry;
})(UserInfo || (UserInfo = {}));
export class CreateUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.password = value.password;
        CreateUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateUserRequest();
        CreateUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.password = instance.password || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 3:
                    instance.password = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.password) {
            writer.writeString(3, instance.password);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            password: this.password
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.password = value.password;
        this.updateMask = value.updateMask
            ? new googleProtobuf002.FieldMask(value.updateMask)
            : undefined;
        UpdateUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateUserRequest();
        UpdateUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.password = instance.password || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 4:
                    instance.password = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new googleProtobuf002.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf002.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.password) {
            writer.writeString(4, instance.password);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, googleProtobuf002.FieldMask.toBinaryWriter);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            password: this.password,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetUserRequest value
     */
    constructor(value) {
        this._userIdentifier = GetUserRequest.UserIdentifierCase.none;
        value = value || {};
        this.userId = value.userId;
        this.userEmail = value.userEmail;
        GetUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetUserRequest();
        GetUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userId = reader.readString();
                    break;
                case 3:
                    instance.userEmail = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId || instance.userId === '') {
            writer.writeString(1, instance.userId);
        }
        if (instance.userEmail || instance.userEmail === '') {
            writer.writeString(3, instance.userEmail);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        if (value !== undefined && value !== null) {
            this._userEmail = undefined;
            this._userIdentifier = GetUserRequest.UserIdentifierCase.userId;
        }
        this._userId = value;
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        if (value !== undefined && value !== null) {
            this._userId = undefined;
            this._userIdentifier = GetUserRequest.UserIdentifierCase.userEmail;
        }
        this._userEmail = value;
    }
    get userIdentifier() {
        return this._userIdentifier;
    }
    toObject() {
        return {
            userId: this.userId,
            userEmail: this.userEmail
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GetUserRequest) {
    let UserIdentifierCase;
    (function (UserIdentifierCase) {
        UserIdentifierCase[UserIdentifierCase["none"] = 0] = "none";
        UserIdentifierCase[UserIdentifierCase["userId"] = 1] = "userId";
        UserIdentifierCase[UserIdentifierCase["userEmail"] = 2] = "userEmail";
    })(UserIdentifierCase = GetUserRequest.UserIdentifierCase || (GetUserRequest.UserIdentifierCase = {}));
})(GetUserRequest || (GetUserRequest = {}));
export class DeleteUserRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteUserRequest value
     */
    constructor(value) {
        value = value || {};
        this.userId = value.userId;
        DeleteUserRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteUserRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteUserRequest();
        DeleteUserRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userId = instance.userId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteUserRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userId) {
            writer.writeString(1, instance.userId);
        }
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    toObject() {
        return {
            userId: this.userId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListUsersRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListUsersRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersRequest();
        ListUsersRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListUsersResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new User(m));
        this.nextPageToken = value.nextPageToken;
        ListUsersResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersResponse();
        ListUsersResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new User();
                    reader.readMessage(messageInitializer1, User.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, User.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListUserInfosResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUserInfosResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new UserInfo(m));
        this.nextPageToken = value.nextPageToken;
        ListUserInfosResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUserInfosResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUserInfosResponse();
        ListUserInfosResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new UserInfo();
                    reader.readMessage(messageInitializer1, UserInfo.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUserInfosResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, UserInfo.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ServerRole {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServerRole value
     */
    constructor(value) {
        value = value || {};
        this.roleId = value.roleId;
        this.name = value.name;
        this.permissions = (value.permissions || []).slice();
        ServerRole.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServerRole.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServerRole();
        ServerRole.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.roleId = instance.roleId || 0;
        instance.name = instance.name || '';
        instance.permissions = instance.permissions || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        ServerRole.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId) {
            writer.writeUint32(1, instance.roleId);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(3, instance.permissions);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    toObject() {
        return {
            roleId: this.roleId,
            name: this.name,
            permissions: (this.permissions || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CreateServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.role = value.role ? new ServerRole(value.role) : undefined;
        CreateServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateServerRoleRequest();
        CreateServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.role = instance.role || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.role = new ServerRole();
                    reader.readMessage(instance.role, ServerRole.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.role) {
            writer.writeMessage(1, instance.role, ServerRole.toBinaryWriter);
        }
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    toObject() {
        return {
            role: this.role ? this.role.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.role = value.role ? new ServerRole(value.role) : undefined;
        this.updateMask = value.updateMask
            ? new googleProtobuf002.FieldMask(value.updateMask)
            : undefined;
        UpdateServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateServerRoleRequest();
        UpdateServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.role = instance.role || undefined;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.role = new ServerRole();
                    reader.readMessage(instance.role, ServerRole.fromBinaryReader);
                    break;
                case 2:
                    instance.updateMask = new googleProtobuf002.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf002.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.role) {
            writer.writeMessage(1, instance.role, ServerRole.toBinaryWriter);
        }
        if (instance.updateMask) {
            writer.writeMessage(2, instance.updateMask, googleProtobuf002.FieldMask.toBinaryWriter);
        }
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            role: this.role ? this.role.toObject() : undefined,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteServerRoleRequest value
     */
    constructor(value) {
        value = value || {};
        this.roleId = value.roleId;
        DeleteServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteServerRoleRequest();
        DeleteServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.roleId = instance.roleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId) {
            writer.writeUint32(1, instance.roleId);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    toObject() {
        return {
            roleId: this.roleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetServerRoleRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetServerRoleRequest value
     */
    constructor(value) {
        this._serverRoleIdentifier = GetServerRoleRequest.ServerRoleIdentifierCase.none;
        value = value || {};
        this.roleId = value.roleId;
        this.roleName = value.roleName;
        GetServerRoleRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetServerRoleRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetServerRoleRequest();
        GetServerRoleRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.roleId = reader.readUint32();
                    break;
                case 2:
                    instance.roleName = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetServerRoleRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.roleId || instance.roleId === 0) {
            writer.writeUint32(1, instance.roleId);
        }
        if (instance.roleName || instance.roleName === '') {
            writer.writeString(2, instance.roleName);
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        if (value !== undefined && value !== null) {
            this._roleName = undefined;
            this._serverRoleIdentifier =
                GetServerRoleRequest.ServerRoleIdentifierCase.roleId;
        }
        this._roleId = value;
    }
    get roleName() {
        return this._roleName;
    }
    set roleName(value) {
        if (value !== undefined && value !== null) {
            this._roleId = undefined;
            this._serverRoleIdentifier =
                GetServerRoleRequest.ServerRoleIdentifierCase.roleName;
        }
        this._roleName = value;
    }
    get serverRoleIdentifier() {
        return this._serverRoleIdentifier;
    }
    toObject() {
        return {
            roleId: this.roleId,
            roleName: this.roleName
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GetServerRoleRequest) {
    let ServerRoleIdentifierCase;
    (function (ServerRoleIdentifierCase) {
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["none"] = 0] = "none";
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["roleId"] = 1] = "roleId";
        ServerRoleIdentifierCase[ServerRoleIdentifierCase["roleName"] = 2] = "roleName";
    })(ServerRoleIdentifierCase = GetServerRoleRequest.ServerRoleIdentifierCase || (GetServerRoleRequest.ServerRoleIdentifierCase = {}));
})(GetServerRoleRequest || (GetServerRoleRequest = {}));
export class ListServerRolesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListServerRolesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerRolesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerRolesRequest();
        ListServerRolesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerRolesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListServerRolesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerRolesResponse value
     */
    constructor(value) {
        value = value || {};
        this.serverRoles = (value.serverRoles || []).map(m => new ServerRole(m));
        this.nextPageToken = value.nextPageToken;
        ListServerRolesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerRolesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerRolesResponse();
        ListServerRolesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.serverRoles = instance.serverRoles || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new ServerRole();
                    reader.readMessage(messageInitializer1, ServerRole.fromBinaryReader);
                    (instance.serverRoles = instance.serverRoles || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerRolesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.serverRoles && instance.serverRoles.length) {
            writer.writeRepeatedMessage(1, instance.serverRoles, ServerRole.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get serverRoles() {
        return this._serverRoles;
    }
    set serverRoles(value) {
        this._serverRoles = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            serverRoles: (this.serverRoles || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListServerPermissionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListServerPermissionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerPermissionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerPermissionsRequest();
        ListServerPermissionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerPermissionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListServerPermissionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListServerPermissionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.permissions = (value.permissions || []).slice();
        this.nextPageToken = value.nextPageToken;
        ListServerPermissionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListServerPermissionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListServerPermissionsResponse();
        ListServerPermissionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.permissions = instance.permissions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListServerPermissionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(1, instance.permissions);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            permissions: (this.permissions || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class LoginRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginRequest value
     */
    constructor(value) {
        value = value || {};
        this.userEmail = value.userEmail;
        this.password = value.password;
        LoginRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LoginRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LoginRequest();
        LoginRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.userEmail = instance.userEmail || '';
        instance.password = instance.password || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.userEmail = reader.readString();
                    break;
                case 2:
                    instance.password = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        LoginRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.userEmail) {
            writer.writeString(1, instance.userEmail);
        }
        if (instance.password) {
            writer.writeString(2, instance.password);
        }
    }
    get userEmail() {
        return this._userEmail;
    }
    set userEmail(value) {
        this._userEmail = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    toObject() {
        return {
            userEmail: this.userEmail,
            password: this.password
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class LoginResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param LoginResponse value
     */
    constructor(value) {
        value = value || {};
        this.user = value.user ? new User(value.user) : undefined;
        this.authToken = value.authToken;
        LoginResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        LoginResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new LoginResponse();
        LoginResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.user = instance.user || undefined;
        instance.authToken = instance.authToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.user = new User();
                    reader.readMessage(instance.user, User.fromBinaryReader);
                    break;
                case 2:
                    instance.authToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        LoginResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.user) {
            writer.writeMessage(1, instance.user, User.toBinaryWriter);
        }
        if (instance.authToken) {
            writer.writeString(2, instance.authToken);
        }
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get authToken() {
        return this._authToken;
    }
    set authToken(value) {
        this._authToken = value;
    }
    toObject() {
        return {
            user: this.user ? this.user.toObject() : undefined,
            authToken: this.authToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3VzZXIucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RSxPQUFPLEtBQUssaUJBQWlCLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxLQUFLLFlBQVksTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxNQUFNLENBQU4sSUFBWSxpQkFNWDtBQU5ELFdBQVksaUJBQWlCO0lBQzNCLG1GQUFxQixDQUFBO0lBQ3JCLHFFQUFjLENBQUE7SUFDZCwyRUFBaUIsQ0FBQTtJQUNqQix1RUFBZSxDQUFBO0lBQ2YsNkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLGlCQUFpQixLQUFqQixpQkFBaUIsUUFNNUI7QUFDRCxNQUFNLE9BQU8sSUFBSTtJQWlFZjs7O09BR0c7SUFDSCxZQUFZLEtBQThCO1FBQ3hDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUEzRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFjO1FBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxNQUFNLENBQUMsZUFBZSxF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QyxDQUFDLENBQUMsU0FBUztZQUNsRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBHcnBjTWVzc2FnZSwgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2VtcHR5LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAyIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9maWVsZC1tYXNrLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L3Byb2plY3Qtcm9sZS5wYic7XG5leHBvcnQgZW51bSBEZWZhdWx0U2VydmVyUm9sZSB7XG4gIHNlcnZlclVuc3BlY2lmaWVkID0gMCxcbiAgc2VydmVyVXNlciA9IDEsXG4gIHNlcnZlck1hbmFnZXIgPSAyLFxuICBzZXJ2ZXJBZG1pbiA9IDMsXG4gIHNlcnZlckluYWN0aXZlID0gNFxufVxuZXhwb3J0IGNsYXNzIFVzZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVXNlcikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVc2VyLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVzZXIoKTtcbiAgICBVc2VyLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBVc2VyKSB7XG4gICAgaW5zdGFuY2UudXNlcklkID0gaW5zdGFuY2UudXNlcklkIHx8ICcnO1xuICAgIGluc3RhbmNlLmRpc3BsYXlOYW1lID0gaW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc2VydmVyUm9sZUlkID0gaW5zdGFuY2Uuc2VydmVyUm9sZUlkIHx8IDA7XG4gICAgaW5zdGFuY2UudXNlckVtYWlsID0gaW5zdGFuY2UudXNlckVtYWlsIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFVzZXIsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS51c2VySWQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2Uuc2VydmVyUm9sZUlkID0gcmVhZGVyLnJlYWRVaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnVzZXJFbWFpbCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVzZXIucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogVXNlciwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudXNlcklkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UudXNlcklkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRpc3BsYXlOYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UuZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2VydmVyUm9sZUlkKSB7XG4gICAgICB3cml0ZXIud3JpdGVVaW50MzIoNiwgaW5zdGFuY2Uuc2VydmVyUm9sZUlkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVzZXJFbWFpbCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDcsIGluc3RhbmNlLnVzZXJFbWFpbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXNlcklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNwbGF5TmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VydmVyUm9sZUlkPzogbnVtYmVyO1xuICBwcml2YXRlIF91c2VyRW1haWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBVc2VyIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VXNlcj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudXNlcklkID0gdmFsdWUudXNlcklkO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSB2YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLnNlcnZlclJvbGVJZCA9IHZhbHVlLnNlcnZlclJvbGVJZDtcbiAgICB0aGlzLnVzZXJFbWFpbCA9IHZhbHVlLnVzZXJFbWFpbDtcbiAgICBVc2VyLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuICBzZXQgdXNlcklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VySWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gIH1cbiAgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXJ2ZXJSb2xlSWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyUm9sZUlkO1xuICB9XG4gIHNldCBzZXJ2ZXJSb2xlSWQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NlcnZlclJvbGVJZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VyRW1haWwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckVtYWlsO1xuICB9XG4gIHNldCB1c2VyRW1haWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXJFbWFpbCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICBzZXJ2ZXJSb2xlSWQ6IHRoaXMuc2VydmVyUm9sZUlkLFxuICAgICAgdXNlckVtYWlsOiB0aGlzLnVzZXJFbWFpbFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXNlciB7fVxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVzZXJJbmZvKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVzZXJJbmZvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVzZXJJbmZvKCk7XG4gICAgVXNlckluZm8uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVzZXJJbmZvKSB7XG4gICAgaW5zdGFuY2UudXNlciA9IGluc3RhbmNlLnVzZXIgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnByb2plY3RSb2xlcyA9IGluc3RhbmNlLnByb2plY3RSb2xlcyB8fCB7fTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBVc2VySW5mbywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS51c2VyLCBVc2VyLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbXNnXzIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbXNnXzIsXG4gICAgICAgICAgICBVc2VySW5mby5Qcm9qZWN0Um9sZXNFbnRyeS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpbnN0YW5jZS5wcm9qZWN0Um9sZXMgPSBpbnN0YW5jZS5wcm9qZWN0Um9sZXMgfHwge307XG4gICAgICAgICAgaW5zdGFuY2UucHJvamVjdFJvbGVzW21zZ18yLmtleV0gPSBtc2dfMi52YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXNlckluZm8ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogVXNlckluZm8sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnVzZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMSwgaW5zdGFuY2UudXNlciBhcyBhbnksIFVzZXIudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgICBpZiAoISFpbnN0YW5jZS5wcm9qZWN0Um9sZXMpIHtcbiAgICAgIGNvbnN0IGtleXNfMiA9IE9iamVjdC5rZXlzKGluc3RhbmNlLnByb2plY3RSb2xlcyBhcyBhbnkpO1xuXG4gICAgICBpZiAoa2V5c18yLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByZXBlYXRlZF8yID0ga2V5c18yXG4gICAgICAgICAgLm1hcChrZXkgPT4gKHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IChpbnN0YW5jZS5wcm9qZWN0Um9sZXMgYXMgYW55KVtrZXldXG4gICAgICAgICAgfSkpXG4gICAgICAgICAgLnJlZHVjZSgociwgdikgPT4gWy4uLnIsIHZdLCBbXSBhcyBhbnlbXSk7XG5cbiAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAgIDIsXG4gICAgICAgICAgcmVwZWF0ZWRfMixcbiAgICAgICAgICBVc2VySW5mby5Qcm9qZWN0Um9sZXNFbnRyeS50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXI/OiBVc2VyO1xuICBwcml2YXRlIF9wcm9qZWN0Um9sZXM/OiB7IFtwcm9wOiBzdHJpbmddOiBvbmRld29ObHUwMDMuUHJvamVjdFJvbGUgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFVzZXJJbmZvIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VXNlckluZm8+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXIgPSB2YWx1ZS51c2VyID8gbmV3IFVzZXIodmFsdWUudXNlcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcm9qZWN0Um9sZXMgPSB7IC4uLih2YWx1ZS5wcm9qZWN0Um9sZXMgfHwge30pIH07XG4gICAgVXNlckluZm8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1c2VyKCk6IFVzZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG4gIHNldCB1c2VyKHZhbHVlOiBVc2VyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm9qZWN0Um9sZXMoKTogeyBbcHJvcDogc3RyaW5nXTogb25kZXdvTmx1MDAzLlByb2plY3RSb2xlIH0gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0Um9sZXM7XG4gIH1cbiAgc2V0IHByb2plY3RSb2xlcyhcbiAgICB2YWx1ZTogeyBbcHJvcDogc3RyaW5nXTogb25kZXdvTmx1MDAzLlByb2plY3RSb2xlIH0gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fcHJvamVjdFJvbGVzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlciA/IHRoaXMudXNlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcHJvamVjdFJvbGVzOiB7IC4uLih0aGlzLnByb2plY3RSb2xlcyB8fCB7fSkgfVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVXNlckluZm8ge1xuICBleHBvcnQgY2xhc3MgUHJvamVjdFJvbGVzRW50cnkgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBQcm9qZWN0Um9sZXNFbnRyeSkge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgUHJvamVjdFJvbGVzRW50cnkudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQcm9qZWN0Um9sZXNFbnRyeSgpO1xuICAgICAgUHJvamVjdFJvbGVzRW50cnkuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFByb2plY3RSb2xlc0VudHJ5KSB7XG4gICAgICBpbnN0YW5jZS5rZXkgPSBpbnN0YW5jZS5rZXkgfHwgJyc7XG4gICAgICBpbnN0YW5jZS52YWx1ZSA9IGluc3RhbmNlLnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUHJvamVjdFJvbGVzRW50cnksIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW5zdGFuY2Uua2V5ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGluc3RhbmNlLnZhbHVlID0gbmV3IG9uZGV3b05sdTAwMy5Qcm9qZWN0Um9sZSgpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgICBpbnN0YW5jZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25kZXdvTmx1MDAzLlByb2plY3RSb2xlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFByb2plY3RSb2xlc0VudHJ5LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBQcm9qZWN0Um9sZXNFbnRyeSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5rZXkpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmtleSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UudmFsdWUpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAyLFxuICAgICAgICAgIGluc3RhbmNlLnZhbHVlIGFzIGFueSxcbiAgICAgICAgICBvbmRld29ObHUwMDMuUHJvamVjdFJvbGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9rZXk/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdmFsdWU/OiBvbmRld29ObHUwMDMuUHJvamVjdFJvbGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgICAqIEBwYXJhbSBQcm9qZWN0Um9sZXNFbnRyeSB2YWx1ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQcm9qZWN0Um9sZXNFbnRyeT4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLmtleSA9IHZhbHVlLmtleTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZS52YWx1ZVxuICAgICAgICA/IG5ldyBvbmRld29ObHUwMDMuUHJvamVjdFJvbGUodmFsdWUudmFsdWUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgUHJvamVjdFJvbGVzRW50cnkucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQga2V5KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBzZXQga2V5KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogb25kZXdvTmx1MDAzLlByb2plY3RSb2xlIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBvbmRld29ObHUwMDMuUHJvamVjdFJvbGUgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgUHJvamVjdFJvbGVzRW50cnkge31cbn1cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VyUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBDcmVhdGVVc2VyUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVVc2VyUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDcmVhdGVVc2VyUmVxdWVzdCgpO1xuICAgIENyZWF0ZVVzZXJSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDcmVhdGVVc2VyUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnVzZXIgPSBpbnN0YW5jZS51c2VyIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5wYXNzd29yZCA9IGluc3RhbmNlLnBhc3N3b3JkIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IENyZWF0ZVVzZXJSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnVzZXIsIFVzZXIuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5wYXNzd29yZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZVVzZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IENyZWF0ZVVzZXJSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS51c2VyKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDEsIGluc3RhbmNlLnVzZXIgYXMgYW55LCBVc2VyLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhc3N3b3JkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UucGFzc3dvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXI/OiBVc2VyO1xuICBwcml2YXRlIF9wYXNzd29yZD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIENyZWF0ZVVzZXJSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlVXNlclJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXIgPSB2YWx1ZS51c2VyID8gbmV3IFVzZXIodmFsdWUudXNlcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IHZhbHVlLnBhc3N3b3JkO1xuICAgIENyZWF0ZVVzZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlcigpOiBVc2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuICBzZXQgdXNlcih2YWx1ZTogVXNlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cbiAgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB0aGlzLnVzZXIgPyB0aGlzLnVzZXIudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVVc2VyUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVwZGF0ZVVzZXJSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZVVzZXJSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVwZGF0ZVVzZXJSZXF1ZXN0KCk7XG4gICAgVXBkYXRlVXNlclJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVwZGF0ZVVzZXJSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UudXNlciA9IGluc3RhbmNlLnVzZXIgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnBhc3N3b3JkID0gaW5zdGFuY2UucGFzc3dvcmQgfHwgJyc7XG4gICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IGluc3RhbmNlLnVwZGF0ZU1hc2sgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFVwZGF0ZVVzZXJSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnVzZXIsIFVzZXIuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5wYXNzd29yZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzaygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2ssXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2suZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVwZGF0ZVVzZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFVwZGF0ZVVzZXJSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS51c2VyKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDEsIGluc3RhbmNlLnVzZXIgYXMgYW55LCBVc2VyLnRvQmluYXJ5V3JpdGVyKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhc3N3b3JkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UucGFzc3dvcmQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXBkYXRlTWFzaykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzay50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91c2VyPzogVXNlcjtcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2s7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBVcGRhdGVVc2VyUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZVVzZXJSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy51c2VyID0gdmFsdWUudXNlciA/IG5ldyBVc2VyKHZhbHVlLnVzZXIpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucGFzc3dvcmQgPSB2YWx1ZS5wYXNzd29yZDtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSB2YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sodmFsdWUudXBkYXRlTWFzaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFVwZGF0ZVVzZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlcigpOiBVc2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuICBzZXQgdXNlcih2YWx1ZTogVXNlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cbiAgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1cGRhdGVNYXNrKCk6IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZU1hc2s7XG4gIH1cbiAgc2V0IHVwZGF0ZU1hc2sodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzayB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VwZGF0ZU1hc2sgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogdGhpcy51c2VyID8gdGhpcy51c2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgIHVwZGF0ZU1hc2s6IHRoaXMudXBkYXRlTWFzayA/IHRoaXMudXBkYXRlTWFzay50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVcGRhdGVVc2VyUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIEdldFVzZXJSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdldFVzZXJSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEdldFVzZXJSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldFVzZXJSZXF1ZXN0KCk7XG4gICAgR2V0VXNlclJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEdldFVzZXJSZXF1ZXN0KSB7fVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBHZXRVc2VyUmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnVzZXJJZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS51c2VyRW1haWwgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRVc2VyUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBHZXRVc2VyUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudXNlcklkIHx8IGluc3RhbmNlLnVzZXJJZCA9PT0gJycpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS51c2VySWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXNlckVtYWlsIHx8IGluc3RhbmNlLnVzZXJFbWFpbCA9PT0gJycpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS51c2VyRW1haWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlckVtYWlsPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3VzZXJJZGVudGlmaWVyOiBHZXRVc2VyUmVxdWVzdC5Vc2VySWRlbnRpZmllckNhc2UgPVxuICAgIEdldFVzZXJSZXF1ZXN0LlVzZXJJZGVudGlmaWVyQ2FzZS5ub25lO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEdldFVzZXJSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0VXNlclJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXJJZCA9IHZhbHVlLnVzZXJJZDtcbiAgICB0aGlzLnVzZXJFbWFpbCA9IHZhbHVlLnVzZXJFbWFpbDtcbiAgICBHZXRVc2VyUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cbiAgc2V0IHVzZXJJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3VzZXJFbWFpbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJJZGVudGlmaWVyID0gR2V0VXNlclJlcXVlc3QuVXNlcklkZW50aWZpZXJDYXNlLnVzZXJJZDtcbiAgICB9XG4gICAgdGhpcy5fdXNlcklkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJFbWFpbCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VyRW1haWw7XG4gIH1cbiAgc2V0IHVzZXJFbWFpbCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3VzZXJJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJJZGVudGlmaWVyID0gR2V0VXNlclJlcXVlc3QuVXNlcklkZW50aWZpZXJDYXNlLnVzZXJFbWFpbDtcbiAgICB9XG4gICAgdGhpcy5fdXNlckVtYWlsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VySWRlbnRpZmllcjtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgIHVzZXJFbWFpbDogdGhpcy51c2VyRW1haWxcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldFVzZXJSZXF1ZXN0IHtcbiAgZXhwb3J0IGVudW0gVXNlcklkZW50aWZpZXJDYXNlIHtcbiAgICBub25lID0gMCxcbiAgICB1c2VySWQgPSAxLFxuICAgIHVzZXJFbWFpbCA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IERlbGV0ZVVzZXJSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERlbGV0ZVVzZXJSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZVVzZXJSZXF1ZXN0KCk7XG4gICAgRGVsZXRlVXNlclJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IERlbGV0ZVVzZXJSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UudXNlcklkID0gaW5zdGFuY2UudXNlcklkIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IERlbGV0ZVVzZXJSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlcklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlVXNlclJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRGVsZXRlVXNlclJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnVzZXJJZCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnVzZXJJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXNlcklkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRGVsZXRlVXNlclJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVVc2VyUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudXNlcklkID0gdmFsdWUudXNlcklkO1xuICAgIERlbGV0ZVVzZXJSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlcklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgfVxuICBzZXQgdXNlcklkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VySWQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRGVsZXRlVXNlclJlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0VXNlcnNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RVc2Vyc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFVzZXJzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0VXNlcnNSZXF1ZXN0KCk7XG4gICAgTGlzdFVzZXJzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFVzZXJzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBMaXN0VXNlcnNSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFVzZXJzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaXN0VXNlcnNSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RVc2Vyc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VXNlcnNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYWdlVG9rZW4gPSB2YWx1ZS5wYWdlVG9rZW47XG4gICAgTGlzdFVzZXJzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RVc2Vyc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0VXNlcnNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0VXNlcnNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0VXNlcnNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0VXNlcnNSZXNwb25zZSgpO1xuICAgIExpc3RVc2Vyc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0VXNlcnNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnVzZXJzID0gaW5zdGFuY2UudXNlcnMgfHwgW107XG4gICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IGluc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTGlzdFVzZXJzUmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UobWVzc2FnZUluaXRpYWxpemVyMSwgVXNlci5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICAoaW5zdGFuY2UudXNlcnMgPSBpbnN0YW5jZS51c2VycyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VXNlcnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaXN0VXNlcnNSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudXNlcnMgJiYgaW5zdGFuY2UudXNlcnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLnVzZXJzIGFzIGFueSxcbiAgICAgICAgVXNlci50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5leHRQYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5uZXh0UGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91c2Vycz86IFVzZXJbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RVc2Vyc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFVzZXJzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXJzID0gKHZhbHVlLnVzZXJzIHx8IFtdKS5tYXAobSA9PiBuZXcgVXNlcihtKSk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gdmFsdWUubmV4dFBhZ2VUb2tlbjtcbiAgICBMaXN0VXNlcnNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZXJzKCk6IFVzZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJzO1xuICB9XG4gIHNldCB1c2Vycyh2YWx1ZTogVXNlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dFBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uZXh0UGFnZVRva2VuO1xuICB9XG4gIHNldCBuZXh0UGFnZVRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uZXh0UGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJzOiAodGhpcy51c2VycyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFVzZXJzUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBMaXN0VXNlckluZm9zUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFVzZXJJbmZvc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RVc2VySW5mb3NSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0VXNlckluZm9zUmVzcG9uc2UoKTtcbiAgICBMaXN0VXNlckluZm9zUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RVc2VySW5mb3NSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnVzZXJzID0gaW5zdGFuY2UudXNlcnMgfHwgW107XG4gICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IGluc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdFVzZXJJbmZvc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBVc2VySW5mbygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBVc2VySW5mby5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICAoaW5zdGFuY2UudXNlcnMgPSBpbnN0YW5jZS51c2VycyB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0VXNlckluZm9zUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdFVzZXJJbmZvc1Jlc3BvbnNlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS51c2VycyAmJiBpbnN0YW5jZS51c2Vycy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UudXNlcnMgYXMgYW55LFxuICAgICAgICBVc2VySW5mby50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5leHRQYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5uZXh0UGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91c2Vycz86IFVzZXJJbmZvW107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0VXNlckluZm9zUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VXNlckluZm9zUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXJzID0gKHZhbHVlLnVzZXJzIHx8IFtdKS5tYXAobSA9PiBuZXcgVXNlckluZm8obSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFVzZXJJbmZvc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlcnMoKTogVXNlckluZm9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJzO1xuICB9XG4gIHNldCB1c2Vycyh2YWx1ZTogVXNlckluZm9bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyczogKHRoaXMudXNlcnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RVc2VySW5mb3NSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFNlcnZlclJvbGUgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2VydmVyUm9sZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTZXJ2ZXJSb2xlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlcnZlclJvbGUoKTtcbiAgICBTZXJ2ZXJSb2xlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTZXJ2ZXJSb2xlKSB7XG4gICAgaW5zdGFuY2Uucm9sZUlkID0gaW5zdGFuY2Uucm9sZUlkIHx8IDA7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UucGVybWlzc2lvbnMgPSBpbnN0YW5jZS5wZXJtaXNzaW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBTZXJ2ZXJSb2xlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uucm9sZUlkID0gcmVhZGVyLnJlYWRVaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKGluc3RhbmNlLnBlcm1pc3Npb25zID0gaW5zdGFuY2UucGVybWlzc2lvbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VydmVyUm9sZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXJ2ZXJSb2xlLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5yb2xlSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVVpbnQzMigxLCBpbnN0YW5jZS5yb2xlSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGVybWlzc2lvbnMgJiYgaW5zdGFuY2UucGVybWlzc2lvbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBpbnN0YW5jZS5wZXJtaXNzaW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcm9sZUlkPzogbnVtYmVyO1xuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9wZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU2VydmVyUm9sZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlcnZlclJvbGU+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJvbGVJZCA9IHZhbHVlLnJvbGVJZDtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSAodmFsdWUucGVybWlzc2lvbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgU2VydmVyUm9sZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJvbGVJZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb2xlSWQ7XG4gIH1cbiAgc2V0IHJvbGVJZCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcm9sZUlkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG4gIHNldCBwZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByb2xlSWQ6IHRoaXMucm9sZUlkLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcGVybWlzc2lvbnM6ICh0aGlzLnBlcm1pc3Npb25zIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXJ2ZXJSb2xlIHt9XG5leHBvcnQgY2xhc3MgQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QoKTtcbiAgICBDcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5yb2xlID0gaW5zdGFuY2Uucm9sZSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5yb2xlID0gbmV3IFNlcnZlclJvbGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uucm9sZSwgU2VydmVyUm9sZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnJvbGUpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMSwgaW5zdGFuY2Uucm9sZSBhcyBhbnksIFNlcnZlclJvbGUudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JvbGU/OiBTZXJ2ZXJSb2xlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ3JlYXRlU2VydmVyUm9sZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucm9sZSA9IHZhbHVlLnJvbGUgPyBuZXcgU2VydmVyUm9sZSh2YWx1ZS5yb2xlKSA6IHVuZGVmaW5lZDtcbiAgICBDcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJvbGUoKTogU2VydmVyUm9sZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGU7XG4gIH1cbiAgc2V0IHJvbGUodmFsdWU6IFNlcnZlclJvbGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yb2xlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGU6IHRoaXMucm9sZSA/IHRoaXMucm9sZS50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVTZXJ2ZXJSb2xlUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0KCk7XG4gICAgVXBkYXRlU2VydmVyUm9sZVJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uucm9sZSA9IGluc3RhbmNlLnJvbGUgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBpbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBVcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnJvbGUgPSBuZXcgU2VydmVyUm9sZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5yb2xlLCBTZXJ2ZXJSb2xlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2soKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBVcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2Uucm9sZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgxLCBpbnN0YW5jZS5yb2xlIGFzIGFueSwgU2VydmVyUm9sZS50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51cGRhdGVNYXNrKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JvbGU/OiBTZXJ2ZXJSb2xlO1xuICBwcml2YXRlIF91cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gVXBkYXRlU2VydmVyUm9sZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVcGRhdGVTZXJ2ZXJSb2xlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucm9sZSA9IHZhbHVlLnJvbGUgPyBuZXcgU2VydmVyUm9sZSh2YWx1ZS5yb2xlKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSB2YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sodmFsdWUudXBkYXRlTWFzaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcm9sZSgpOiBTZXJ2ZXJSb2xlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZTtcbiAgfVxuICBzZXQgcm9sZSh2YWx1ZTogU2VydmVyUm9sZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JvbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGU6IHRoaXMucm9sZSA/IHRoaXMucm9sZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZVNlcnZlclJvbGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QoKTtcbiAgICBEZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGVsZXRlU2VydmVyUm9sZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5yb2xlSWQgPSBpbnN0YW5jZS5yb2xlSWQgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBEZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnJvbGVJZCA9IHJlYWRlci5yZWFkVWludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IERlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5yb2xlSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVVpbnQzMigxLCBpbnN0YW5jZS5yb2xlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JvbGVJZD86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIERlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlU2VydmVyUm9sZVJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnJvbGVJZCA9IHZhbHVlLnJvbGVJZDtcbiAgICBEZWxldGVTZXJ2ZXJSb2xlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJvbGVJZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb2xlSWQ7XG4gIH1cbiAgc2V0IHJvbGVJZCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcm9sZUlkID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGVJZDogdGhpcy5yb2xlSWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZVNlcnZlclJvbGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgR2V0U2VydmVyUm9sZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0U2VydmVyUm9sZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0U2VydmVyUm9sZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0U2VydmVyUm9sZVJlcXVlc3QoKTtcbiAgICBHZXRTZXJ2ZXJSb2xlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0U2VydmVyUm9sZVJlcXVlc3QpIHt9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdldFNlcnZlclJvbGVSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uucm9sZUlkID0gcmVhZGVyLnJlYWRVaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnJvbGVOYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0U2VydmVyUm9sZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0U2VydmVyUm9sZVJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnJvbGVJZCB8fCBpbnN0YW5jZS5yb2xlSWQgPT09IDApIHtcbiAgICAgIHdyaXRlci53cml0ZVVpbnQzMigxLCBpbnN0YW5jZS5yb2xlSWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uucm9sZU5hbWUgfHwgaW5zdGFuY2Uucm9sZU5hbWUgPT09ICcnKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2Uucm9sZU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JvbGVJZD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcm9sZU5hbWU/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfc2VydmVyUm9sZUlkZW50aWZpZXI6IEdldFNlcnZlclJvbGVSZXF1ZXN0LlNlcnZlclJvbGVJZGVudGlmaWVyQ2FzZSA9XG4gICAgR2V0U2VydmVyUm9sZVJlcXVlc3QuU2VydmVyUm9sZUlkZW50aWZpZXJDYXNlLm5vbmU7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0U2VydmVyUm9sZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRTZXJ2ZXJSb2xlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucm9sZUlkID0gdmFsdWUucm9sZUlkO1xuICAgIHRoaXMucm9sZU5hbWUgPSB2YWx1ZS5yb2xlTmFtZTtcbiAgICBHZXRTZXJ2ZXJSb2xlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJvbGVJZCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yb2xlSWQ7XG4gIH1cbiAgc2V0IHJvbGVJZCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3JvbGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmVyUm9sZUlkZW50aWZpZXIgPVxuICAgICAgICBHZXRTZXJ2ZXJSb2xlUmVxdWVzdC5TZXJ2ZXJSb2xlSWRlbnRpZmllckNhc2Uucm9sZUlkO1xuICAgIH1cbiAgICB0aGlzLl9yb2xlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcm9sZU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZU5hbWU7XG4gIH1cbiAgc2V0IHJvbGVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcm9sZUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmVyUm9sZUlkZW50aWZpZXIgPVxuICAgICAgICBHZXRTZXJ2ZXJSb2xlUmVxdWVzdC5TZXJ2ZXJSb2xlSWRlbnRpZmllckNhc2Uucm9sZU5hbWU7XG4gICAgfVxuICAgIHRoaXMuX3JvbGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlcnZlclJvbGVJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJSb2xlSWRlbnRpZmllcjtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZUlkOiB0aGlzLnJvbGVJZCxcbiAgICAgIHJvbGVOYW1lOiB0aGlzLnJvbGVOYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRTZXJ2ZXJSb2xlUmVxdWVzdCB7XG4gIGV4cG9ydCBlbnVtIFNlcnZlclJvbGVJZGVudGlmaWVyQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgcm9sZUlkID0gMSxcbiAgICByb2xlTmFtZSA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RTZXJ2ZXJSb2xlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFNlcnZlclJvbGVzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0U2VydmVyUm9sZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXJ2ZXJSb2xlc1JlcXVlc3QoKTtcbiAgICBMaXN0U2VydmVyUm9sZXNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0U2VydmVyUm9sZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFnZVRva2VuID0gaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXJ2ZXJSb2xlc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0U2VydmVyUm9sZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXJ2ZXJSb2xlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdFNlcnZlclJvbGVzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXJ2ZXJSb2xlc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IHZhbHVlLnBhZ2VUb2tlbjtcbiAgICBMaXN0U2VydmVyUm9sZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VUb2tlbjtcbiAgfVxuICBzZXQgcGFnZVRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdFNlcnZlclJvbGVzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFNlcnZlclJvbGVzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2Uuc2VydmVyUm9sZXMgPSBpbnN0YW5jZS5zZXJ2ZXJSb2xlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0U2VydmVyUm9sZXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgU2VydmVyUm9sZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBTZXJ2ZXJSb2xlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5zZXJ2ZXJSb2xlcyA9IGluc3RhbmNlLnNlcnZlclJvbGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFNlcnZlclJvbGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlcnZlclJvbGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlcnZlclJvbGVzICYmIGluc3RhbmNlLnNlcnZlclJvbGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5zZXJ2ZXJSb2xlcyBhcyBhbnksXG4gICAgICAgIFNlcnZlclJvbGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VydmVyUm9sZXM/OiBTZXJ2ZXJSb2xlW107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0U2VydmVyUm9sZXNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zZXJ2ZXJSb2xlcyA9ICh2YWx1ZS5zZXJ2ZXJSb2xlcyB8fCBbXSkubWFwKG0gPT4gbmV3IFNlcnZlclJvbGUobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFNlcnZlclJvbGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXJ2ZXJSb2xlcygpOiBTZXJ2ZXJSb2xlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJSb2xlcztcbiAgfVxuICBzZXQgc2VydmVyUm9sZXModmFsdWU6IFNlcnZlclJvbGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NlcnZlclJvbGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJ2ZXJSb2xlczogKHRoaXMuc2VydmVyUm9sZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RTZXJ2ZXJSb2xlc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVxdWVzdCgpO1xuICAgIExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSBpbnN0YW5jZS5wYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlcnZlclBlcm1pc3Npb25zUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdFNlcnZlclBlcm1pc3Npb25zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFNlcnZlclBlcm1pc3Npb25zUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFnZVRva2VuID0gdmFsdWUucGFnZVRva2VuO1xuICAgIExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UoKTtcbiAgICBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5wZXJtaXNzaW9ucyA9IGluc3RhbmNlLnBlcm1pc3Npb25zIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgKGluc3RhbmNlLnBlcm1pc3Npb25zID0gaW5zdGFuY2UucGVybWlzc2lvbnMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGVybWlzc2lvbnMgJiYgaW5zdGFuY2UucGVybWlzc2lvbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5wZXJtaXNzaW9ucyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RTZXJ2ZXJQZXJtaXNzaW9uc1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gKHZhbHVlLnBlcm1pc3Npb25zIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFNlcnZlclBlcm1pc3Npb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG4gIHNldCBwZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVybWlzc2lvbnM6ICh0aGlzLnBlcm1pc3Npb25zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0U2VydmVyUGVybWlzc2lvbnNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIExvZ2luUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMb2dpblJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTG9naW5SZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExvZ2luUmVxdWVzdCgpO1xuICAgIExvZ2luUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTG9naW5SZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UudXNlckVtYWlsID0gaW5zdGFuY2UudXNlckVtYWlsIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhc3N3b3JkID0gaW5zdGFuY2UucGFzc3dvcmQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTG9naW5SZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlckVtYWlsID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnBhc3N3b3JkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9naW5SZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IExvZ2luUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UudXNlckVtYWlsKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudXNlckVtYWlsKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhc3N3b3JkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UucGFzc3dvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJFbWFpbD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMb2dpblJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMb2dpblJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXJFbWFpbCA9IHZhbHVlLnVzZXJFbWFpbDtcbiAgICB0aGlzLnBhc3N3b3JkID0gdmFsdWUucGFzc3dvcmQ7XG4gICAgTG9naW5SZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgdXNlckVtYWlsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJFbWFpbDtcbiAgfVxuICBzZXQgdXNlckVtYWlsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VyRW1haWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cbiAgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyRW1haWw6IHRoaXMudXNlckVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExvZ2luUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExvZ2luUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTG9naW5SZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMb2dpblJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExvZ2luUmVzcG9uc2UoKTtcbiAgICBMb2dpblJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMb2dpblJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UudXNlciA9IGluc3RhbmNlLnVzZXIgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmF1dGhUb2tlbiA9IGluc3RhbmNlLmF1dGhUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBMb2dpblJlc3BvbnNlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLnVzZXIsIFVzZXIuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5hdXRoVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMb2dpblJlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IExvZ2luUmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnVzZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMSwgaW5zdGFuY2UudXNlciBhcyBhbnksIFVzZXIudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYXV0aFRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuYXV0aFRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91c2VyPzogVXNlcjtcbiAgcHJpdmF0ZSBfYXV0aFRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTG9naW5SZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvZ2luUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnVzZXIgPSB2YWx1ZS51c2VyID8gbmV3IFVzZXIodmFsdWUudXNlcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hdXRoVG9rZW4gPSB2YWx1ZS5hdXRoVG9rZW47XG4gICAgTG9naW5SZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHVzZXIoKTogVXNlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cbiAgc2V0IHVzZXIodmFsdWU6IFVzZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGF1dGhUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hdXRoVG9rZW47XG4gIH1cbiAgc2V0IGF1dGhUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYXV0aFRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlciA/IHRoaXMudXNlci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYXV0aFRva2VuOiB0aGlzLmF1dGhUb2tlblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTG9naW5SZXNwb25zZSB7fVxuIl19