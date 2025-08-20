import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * Project Role messages
 *
 * @generated from protobuf message ondewo.nlu.ProjectRole
 */
export interface ProjectRole {
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
     * defines the permissions for the given role (the strings can be gotten from the ListProjectPermissions)
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
 * This message is a request to create project role
 *
 * @generated from protobuf message ondewo.nlu.CreateProjectRoleRequest
 */
export interface CreateProjectRoleRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * If the role_id is not provided, an incremental value will be assigned
     * The "name" and "role_type" are mandatory values
     * The permissions all default to False if not provided specifically
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRole role = 2;
     */
    role?: ProjectRole;
    /**
     * Optional. specify the view of the created project role, PROJECT_ROLE_VIEW_FULL by default
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRoleView project_role_view = 3;
     */
    projectRoleView: ProjectRoleView;
}
/**
 * This message is a request to update project role
 *
 * @generated from protobuf message ondewo.nlu.UpdateProjectRoleRequest
 */
export interface UpdateProjectRoleRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * role_id in the Role message should be given, if empty will throw an error in the backend
     * other fields in the Role are optional. Only the fields to be updated should be provided
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRole role = 2;
     */
    role?: ProjectRole;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
    /**
     * Optional. specify the view of the updated project role, PROJECT_ROLE_VIEW_FULL by default
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRoleView project_role_view = 4;
     */
    projectRoleView: ProjectRoleView;
}
/**
 * This message is a request to get project role
 *
 * @generated from protobuf message ondewo.nlu.GetProjectRoleRequest
 */
export interface GetProjectRoleRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf oneof: project_role_identifier
     */
    projectRoleIdentifier: {
        oneofKind: "roleId";
        /**
         * role is identified by role id
         *
         * @generated from protobuf field: uint32 role_id = 2;
         */
        roleId: number;
    } | {
        oneofKind: "roleName";
        /**
         * role can also be uniquely identified by its name
         *
         * @generated from protobuf field: string role_name = 3;
         */
        roleName: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional. specify the view of the project role, PROJECT_ROLE_VIEW_FULL by default
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRoleView project_role_view = 4;
     */
    projectRoleView: ProjectRoleView;
}
/**
 * This message is a request to delete project role
 *
 * @generated from protobuf message ondewo.nlu.DeleteProjectRoleRequest
 */
export interface DeleteProjectRoleRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * role is identified by role id, if empty will throw an error in the backend
     *
     * @generated from protobuf field: uint32 role_id = 2;
     */
    roleId: number;
}
/**
 * This message is a request to list project role
 *
 * @generated from protobuf message ondewo.nlu.ListProjectRolesRequest
 */
export interface ListProjectRolesRequest {
    /**
     * Required. The project that the agent to fetch is associated with.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agents</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
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
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
    /**
     * Optional. specify the view of the project roles, PROJECT_ROLE_VIEW_FULL by default
     *
     * @generated from protobuf field: ondewo.nlu.ProjectRoleView project_role_view = 3;
     */
    projectRoleView: ProjectRoleView;
}
/**
 * This message is a response of listing project role
 *
 * @generated from protobuf message ondewo.nlu.ListProjectRolesResponse
 */
export interface ListProjectRolesResponse {
    /**
     * The list of project roles. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.ProjectRole project_roles = 1;
     */
    projectRoles: ProjectRole[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * Structure of project role
 *
 * @generated from protobuf enum ondewo.nlu.DefaultProjectRole
 */
export declare enum DefaultProjectRole {
    /**
     * These roles have permissions valid only on a specific project unspecified, default value depends on endpoint
     *
     * @generated from protobuf enum value: PROJECT_UNSPECIFIED = 0;
     */
    PROJECT_UNSPECIFIED = 0,
    /**
     * read-only access
     *
     * @generated from protobuf enum value: PROJECT_USER = 1;
     */
    PROJECT_USER = 1,
    /**
     * permissions of PROJECT_USER + execution rights (detect intent, extract entities, train, etc)
     *
     * @generated from protobuf enum value: PROJECT_EXECUTOR = 2;
     */
    PROJECT_EXECUTOR = 2,
    /**
     * permissions of PROJECT_EXECUTOR + CRUD rights
     *
     * @generated from protobuf enum value: PROJECT_DEVELOPER = 3;
     */
    PROJECT_DEVELOPER = 3,
    /**
     * this role can do everything. The creator of a project is set automatically as PROJECT_ADMIN of it.
     *
     * @generated from protobuf enum value: PROJECT_ADMIN = 4;
     */
    PROJECT_ADMIN = 4,
    /**
     * This role can do nothing.  Used to set a user as inactive inside a project
     *
     * @generated from protobuf enum value: PROJECT_INACTIVE = 5;
     */
    PROJECT_INACTIVE = 5
}
/**
 * Structure of project role view
 *
 * @generated from protobuf enum ondewo.nlu.ProjectRoleView
 */
export declare enum ProjectRoleView {
    /**
     * The view depends on the endpoint:
     * * CreateProjectRole: FULL
     * * GetProjectRole: FULL
     * * UpdateProjectRole: FULL
     * * ListProjectRoles: FULL
     *
     * @generated from protobuf enum value: PROJECT_ROLE_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * only role ID and name fields are populated
     *
     * @generated from protobuf enum value: PROJECT_ROLE_VIEW_SHALLOW = 1;
     */
    SHALLOW = 1,
    /**
     * all fields including permissions are populated
     *
     * @generated from protobuf enum value: PROJECT_ROLE_VIEW_FULL = 2;
     */
    FULL = 2
}
declare class ProjectRole$Type extends MessageType<ProjectRole> {
    constructor();
    create(value?: PartialMessage<ProjectRole>): ProjectRole;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProjectRole): ProjectRole;
    internalBinaryWrite(message: ProjectRole, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ProjectRole
 */
export declare const ProjectRole: ProjectRole$Type;
declare class CreateProjectRoleRequest$Type extends MessageType<CreateProjectRoleRequest> {
    constructor();
    create(value?: PartialMessage<CreateProjectRoleRequest>): CreateProjectRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateProjectRoleRequest): CreateProjectRoleRequest;
    internalBinaryWrite(message: CreateProjectRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateProjectRoleRequest
 */
export declare const CreateProjectRoleRequest: CreateProjectRoleRequest$Type;
declare class UpdateProjectRoleRequest$Type extends MessageType<UpdateProjectRoleRequest> {
    constructor();
    create(value?: PartialMessage<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateProjectRoleRequest): UpdateProjectRoleRequest;
    internalBinaryWrite(message: UpdateProjectRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateProjectRoleRequest
 */
export declare const UpdateProjectRoleRequest: UpdateProjectRoleRequest$Type;
declare class GetProjectRoleRequest$Type extends MessageType<GetProjectRoleRequest> {
    constructor();
    create(value?: PartialMessage<GetProjectRoleRequest>): GetProjectRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetProjectRoleRequest): GetProjectRoleRequest;
    internalBinaryWrite(message: GetProjectRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetProjectRoleRequest
 */
export declare const GetProjectRoleRequest: GetProjectRoleRequest$Type;
declare class DeleteProjectRoleRequest$Type extends MessageType<DeleteProjectRoleRequest> {
    constructor();
    create(value?: PartialMessage<DeleteProjectRoleRequest>): DeleteProjectRoleRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteProjectRoleRequest): DeleteProjectRoleRequest;
    internalBinaryWrite(message: DeleteProjectRoleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteProjectRoleRequest
 */
export declare const DeleteProjectRoleRequest: DeleteProjectRoleRequest$Type;
declare class ListProjectRolesRequest$Type extends MessageType<ListProjectRolesRequest> {
    constructor();
    create(value?: PartialMessage<ListProjectRolesRequest>): ListProjectRolesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListProjectRolesRequest): ListProjectRolesRequest;
    internalBinaryWrite(message: ListProjectRolesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListProjectRolesRequest
 */
export declare const ListProjectRolesRequest: ListProjectRolesRequest$Type;
declare class ListProjectRolesResponse$Type extends MessageType<ListProjectRolesResponse> {
    constructor();
    create(value?: PartialMessage<ListProjectRolesResponse>): ListProjectRolesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListProjectRolesResponse): ListProjectRolesResponse;
    internalBinaryWrite(message: ListProjectRolesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListProjectRolesResponse
 */
export declare const ListProjectRolesResponse: ListProjectRolesResponse$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.ProjectRoles
 */
export declare const ProjectRoles: ServiceType;
export {};
