import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ListProjectRolesResponse } from "./project_role";
import type { ListProjectRolesRequest } from "./project_role";
import type { UpdateProjectRoleRequest } from "./project_role";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteProjectRoleRequest } from "./project_role";
import type { GetProjectRoleRequest } from "./project_role";
import type { ProjectRole } from "./project_role";
import type { CreateProjectRoleRequest } from "./project_role";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Project roles
 *
 * @generated from protobuf service ondewo.nlu.ProjectRoles
 */
export interface IProjectRolesClient {
    /**
     * Creates a project role by creating the knowledge base master
     *
     * @generated from protobuf rpc: CreateProjectRole(ondewo.nlu.CreateProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    createProjectRole(input: CreateProjectRoleRequest, options?: RpcOptions): UnaryCall<CreateProjectRoleRequest, ProjectRole>;
    /**
     * Creates a project role by getting the knowledge base master
     *
     * @generated from protobuf rpc: GetProjectRole(ondewo.nlu.GetProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    getProjectRole(input: GetProjectRoleRequest, options?: RpcOptions): UnaryCall<GetProjectRoleRequest, ProjectRole>;
    /**
     * Deletes project role
     *
     * @generated from protobuf rpc: DeleteProjectRole(ondewo.nlu.DeleteProjectRoleRequest) returns (google.protobuf.Empty);
     */
    deleteProjectRole(input: DeleteProjectRoleRequest, options?: RpcOptions): UnaryCall<DeleteProjectRoleRequest, Empty>;
    /**
     * Updates project role
     *
     * @generated from protobuf rpc: UpdateProjectRole(ondewo.nlu.UpdateProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    updateProjectRole(input: UpdateProjectRoleRequest, options?: RpcOptions): UnaryCall<UpdateProjectRoleRequest, ProjectRole>;
    /**
     * List project roles
     *
     * @generated from protobuf rpc: ListProjectRoles(ondewo.nlu.ListProjectRolesRequest) returns (ondewo.nlu.ListProjectRolesResponse);
     */
    listProjectRoles(input: ListProjectRolesRequest, options?: RpcOptions): UnaryCall<ListProjectRolesRequest, ListProjectRolesResponse>;
}
/**
 * Project roles
 *
 * @generated from protobuf service ondewo.nlu.ProjectRoles
 */
export declare class ProjectRolesClient implements IProjectRolesClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Creates a project role by creating the knowledge base master
     *
     * @generated from protobuf rpc: CreateProjectRole(ondewo.nlu.CreateProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    createProjectRole(input: CreateProjectRoleRequest, options?: RpcOptions): UnaryCall<CreateProjectRoleRequest, ProjectRole>;
    /**
     * Creates a project role by getting the knowledge base master
     *
     * @generated from protobuf rpc: GetProjectRole(ondewo.nlu.GetProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    getProjectRole(input: GetProjectRoleRequest, options?: RpcOptions): UnaryCall<GetProjectRoleRequest, ProjectRole>;
    /**
     * Deletes project role
     *
     * @generated from protobuf rpc: DeleteProjectRole(ondewo.nlu.DeleteProjectRoleRequest) returns (google.protobuf.Empty);
     */
    deleteProjectRole(input: DeleteProjectRoleRequest, options?: RpcOptions): UnaryCall<DeleteProjectRoleRequest, Empty>;
    /**
     * Updates project role
     *
     * @generated from protobuf rpc: UpdateProjectRole(ondewo.nlu.UpdateProjectRoleRequest) returns (ondewo.nlu.ProjectRole);
     */
    updateProjectRole(input: UpdateProjectRoleRequest, options?: RpcOptions): UnaryCall<UpdateProjectRoleRequest, ProjectRole>;
    /**
     * List project roles
     *
     * @generated from protobuf rpc: ListProjectRoles(ondewo.nlu.ListProjectRolesRequest) returns (ondewo.nlu.ListProjectRolesResponse);
     */
    listProjectRoles(input: ListProjectRolesRequest, options?: RpcOptions): UnaryCall<ListProjectRolesRequest, ListProjectRolesResponse>;
}
