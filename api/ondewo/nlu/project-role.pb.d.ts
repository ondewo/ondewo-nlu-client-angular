import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '../../google/protobuf/field-mask.pb';
export declare enum DefaultProjectRole {
    projectUnspecified = 0,
    projectUser = 1,
    projectExecutor = 2,
    projectDeveloper = 3,
    projectAdmin = 4,
    projectInactive = 5
}
export declare enum ProjectRoleView {
    projectRoleViewUnspecified = 0,
    projectRoleViewShallow = 1,
    projectRoleViewFull = 2
}
export declare class ProjectRole implements GrpcMessage {
    static toBinary(instance: ProjectRole): any;
    static fromBinary(bytes: ByteSource): ProjectRole;
    static refineValues(instance: ProjectRole): void;
    static fromBinaryReader(instance: ProjectRole, reader: BinaryReader): void;
    static toBinaryWriter(instance: ProjectRole, writer: BinaryWriter): void;
    private _roleId?;
    private _name?;
    private _permissions?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ProjectRole value
     */
    constructor(value?: RecursivePartial<ProjectRole>);
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
export declare module ProjectRole { }
export declare class CreateProjectRoleRequest implements GrpcMessage {
    static toBinary(instance: CreateProjectRoleRequest): any;
    static fromBinary(bytes: ByteSource): CreateProjectRoleRequest;
    static refineValues(instance: CreateProjectRoleRequest): void;
    static fromBinaryReader(instance: CreateProjectRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateProjectRoleRequest, writer: BinaryWriter): void;
    private _parent?;
    private _role?;
    private _projectRoleView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateProjectRoleRequest value
     */
    constructor(value?: RecursivePartial<CreateProjectRoleRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get role(): ProjectRole | undefined;
    set role(value: ProjectRole | undefined);
    get projectRoleView(): ProjectRoleView | undefined;
    set projectRoleView(value: ProjectRoleView | undefined);
    toObject(): {
        parent: string;
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        projectRoleView: ProjectRoleView;
    };
    toJSON(): {
        parent: string;
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        projectRoleView: ProjectRoleView;
    };
}
export declare module CreateProjectRoleRequest { }
export declare class UpdateProjectRoleRequest implements GrpcMessage {
    static toBinary(instance: UpdateProjectRoleRequest): any;
    static fromBinary(bytes: ByteSource): UpdateProjectRoleRequest;
    static refineValues(instance: UpdateProjectRoleRequest): void;
    static fromBinaryReader(instance: UpdateProjectRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateProjectRoleRequest, writer: BinaryWriter): void;
    private _parent?;
    private _role?;
    private _updateMask?;
    private _projectRoleView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateProjectRoleRequest value
     */
    constructor(value?: RecursivePartial<UpdateProjectRoleRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get role(): ProjectRole | undefined;
    set role(value: ProjectRole | undefined);
    get updateMask(): googleProtobuf001.FieldMask | undefined;
    set updateMask(value: googleProtobuf001.FieldMask | undefined);
    get projectRoleView(): ProjectRoleView | undefined;
    set projectRoleView(value: ProjectRoleView | undefined);
    toObject(): {
        parent: string;
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        updateMask: {
            paths: string[];
        };
        projectRoleView: ProjectRoleView;
    };
    toJSON(): {
        parent: string;
        role: {
            roleId: number;
            name: string;
            permissions: string[];
        };
        updateMask: {
            paths: string[];
        };
        projectRoleView: ProjectRoleView;
    };
}
export declare module UpdateProjectRoleRequest { }
export declare class GetProjectRoleRequest implements GrpcMessage {
    static toBinary(instance: GetProjectRoleRequest): any;
    static fromBinary(bytes: ByteSource): GetProjectRoleRequest;
    static refineValues(instance: GetProjectRoleRequest): void;
    static fromBinaryReader(instance: GetProjectRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetProjectRoleRequest, writer: BinaryWriter): void;
    private _parent?;
    private _roleId?;
    private _roleName?;
    private _projectRoleView?;
    private _projectRoleIdentifier;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectRoleRequest value
     */
    constructor(value?: RecursivePartial<GetProjectRoleRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    get roleName(): string | undefined;
    set roleName(value: string | undefined);
    get projectRoleView(): ProjectRoleView | undefined;
    set projectRoleView(value: ProjectRoleView | undefined);
    get projectRoleIdentifier(): GetProjectRoleRequest.ProjectRoleIdentifierCase;
    toObject(): {
        parent: string;
        roleId: number;
        roleName: string;
        projectRoleView: ProjectRoleView;
    };
    toJSON(): {
        parent: string;
        roleId: number;
        roleName: string;
        projectRoleView: ProjectRoleView;
    };
}
export declare module GetProjectRoleRequest {
    enum ProjectRoleIdentifierCase {
        none = 0,
        roleId = 1,
        roleName = 2
    }
}
export declare class DeleteProjectRoleRequest implements GrpcMessage {
    static toBinary(instance: DeleteProjectRoleRequest): any;
    static fromBinary(bytes: ByteSource): DeleteProjectRoleRequest;
    static refineValues(instance: DeleteProjectRoleRequest): void;
    static fromBinaryReader(instance: DeleteProjectRoleRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteProjectRoleRequest, writer: BinaryWriter): void;
    private _parent?;
    private _roleId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteProjectRoleRequest value
     */
    constructor(value?: RecursivePartial<DeleteProjectRoleRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    toObject(): {
        parent: string;
        roleId: number;
    };
    toJSON(): {
        parent: string;
        roleId: number;
    };
}
export declare module DeleteProjectRoleRequest { }
export declare class ListProjectRolesRequest implements GrpcMessage {
    static toBinary(instance: ListProjectRolesRequest): any;
    static fromBinary(bytes: ByteSource): ListProjectRolesRequest;
    static refineValues(instance: ListProjectRolesRequest): void;
    static fromBinaryReader(instance: ListProjectRolesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListProjectRolesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _pageToken?;
    private _projectRoleView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectRolesRequest value
     */
    constructor(value?: RecursivePartial<ListProjectRolesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get projectRoleView(): ProjectRoleView | undefined;
    set projectRoleView(value: ProjectRoleView | undefined);
    toObject(): {
        parent: string;
        pageToken: string;
        projectRoleView: ProjectRoleView;
    };
    toJSON(): {
        parent: string;
        pageToken: string;
        projectRoleView: ProjectRoleView;
    };
}
export declare module ListProjectRolesRequest { }
export declare class ListProjectRolesResponse implements GrpcMessage {
    static toBinary(instance: ListProjectRolesResponse): any;
    static fromBinary(bytes: ByteSource): ListProjectRolesResponse;
    static refineValues(instance: ListProjectRolesResponse): void;
    static fromBinaryReader(instance: ListProjectRolesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListProjectRolesResponse, writer: BinaryWriter): void;
    private _projectRoles?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectRolesResponse value
     */
    constructor(value?: RecursivePartial<ListProjectRolesResponse>);
    get projectRoles(): ProjectRole[] | undefined;
    set projectRoles(value: ProjectRole[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        projectRoles: {
            roleId: number;
            name: string;
            permissions: string[];
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        projectRoles: {
            roleId: number;
            name: string;
            permissions: string[];
        }[];
        nextPageToken: string;
    };
}
export declare module ListProjectRolesResponse { }
