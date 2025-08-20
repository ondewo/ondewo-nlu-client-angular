import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { CcaiService } from "./ccai_project";
import type { GetCcaiServiceRequest } from "./ccai_project";
import type { UpdateCcaiProjectResponse } from "./ccai_project";
import type { UpdateCcaiProjectRequest } from "./ccai_project";
import type { ListCcaiProjectsResponse } from "./ccai_project";
import type { ListCcaiProjectsRequest } from "./ccai_project";
import type { DeleteCcaiProjectResponse } from "./ccai_project";
import type { DeleteCcaiProjectRequest } from "./ccai_project";
import type { CreateCcaiProjectResponse } from "./ccai_project";
import type { CreateCcaiProjectRequest } from "./ccai_project";
import type { CcaiProject } from "./ccai_project";
import type { GetCcaiProjectRequest } from "./ccai_project";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service to manage Call Center AI (CCAI service) Projects.
 *
 * @generated from protobuf service ondewo.nlu.CcaiProjects
 */
export interface ICcaiProjectsClient {
    /**
     * Retrieves information about a specific CCAI service project.
     *
     * @generated from protobuf rpc: GetCcaiProject(ondewo.nlu.GetCcaiProjectRequest) returns (ondewo.nlu.CcaiProject);
     */
    getCcaiProject(input: GetCcaiProjectRequest, options?: RpcOptions): UnaryCall<GetCcaiProjectRequest, CcaiProject>;
    /**
     * Creates a new CCAI service project based on the provided request.
     *
     * @generated from protobuf rpc: CreateCcaiProject(ondewo.nlu.CreateCcaiProjectRequest) returns (ondewo.nlu.CreateCcaiProjectResponse);
     */
    createCcaiProject(input: CreateCcaiProjectRequest, options?: RpcOptions): UnaryCall<CreateCcaiProjectRequest, CreateCcaiProjectResponse>;
    /**
     * Deletes a CCAI service project identified by the provided request.
     *
     * @generated from protobuf rpc: DeleteCcaiProject(ondewo.nlu.DeleteCcaiProjectRequest) returns (ondewo.nlu.DeleteCcaiProjectResponse);
     */
    deleteCcaiProject(input: DeleteCcaiProjectRequest, options?: RpcOptions): UnaryCall<DeleteCcaiProjectRequest, DeleteCcaiProjectResponse>;
    /**
     * Lists all CCAI service projects based on the provided request.
     *
     * @generated from protobuf rpc: ListCcaiProjects(ondewo.nlu.ListCcaiProjectsRequest) returns (ondewo.nlu.ListCcaiProjectsResponse);
     */
    listCcaiProjects(input: ListCcaiProjectsRequest, options?: RpcOptions): UnaryCall<ListCcaiProjectsRequest, ListCcaiProjectsResponse>;
    /**
     * Updates the information of an existing CCAI service project.
     *
     * @generated from protobuf rpc: UpdateCcaiProject(ondewo.nlu.UpdateCcaiProjectRequest) returns (ondewo.nlu.UpdateCcaiProjectResponse);
     */
    updateCcaiProject(input: UpdateCcaiProjectRequest, options?: RpcOptions): UnaryCall<UpdateCcaiProjectRequest, UpdateCcaiProjectResponse>;
    /**
     * Retrieves information about a specific CCAI service.
     *
     * @generated from protobuf rpc: GetCcaiService(ondewo.nlu.GetCcaiServiceRequest) returns (ondewo.nlu.CcaiService);
     */
    getCcaiService(input: GetCcaiServiceRequest, options?: RpcOptions): UnaryCall<GetCcaiServiceRequest, CcaiService>;
}
/**
 * Service to manage Call Center AI (CCAI service) Projects.
 *
 * @generated from protobuf service ondewo.nlu.CcaiProjects
 */
export declare class CcaiProjectsClient implements ICcaiProjectsClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Retrieves information about a specific CCAI service project.
     *
     * @generated from protobuf rpc: GetCcaiProject(ondewo.nlu.GetCcaiProjectRequest) returns (ondewo.nlu.CcaiProject);
     */
    getCcaiProject(input: GetCcaiProjectRequest, options?: RpcOptions): UnaryCall<GetCcaiProjectRequest, CcaiProject>;
    /**
     * Creates a new CCAI service project based on the provided request.
     *
     * @generated from protobuf rpc: CreateCcaiProject(ondewo.nlu.CreateCcaiProjectRequest) returns (ondewo.nlu.CreateCcaiProjectResponse);
     */
    createCcaiProject(input: CreateCcaiProjectRequest, options?: RpcOptions): UnaryCall<CreateCcaiProjectRequest, CreateCcaiProjectResponse>;
    /**
     * Deletes a CCAI service project identified by the provided request.
     *
     * @generated from protobuf rpc: DeleteCcaiProject(ondewo.nlu.DeleteCcaiProjectRequest) returns (ondewo.nlu.DeleteCcaiProjectResponse);
     */
    deleteCcaiProject(input: DeleteCcaiProjectRequest, options?: RpcOptions): UnaryCall<DeleteCcaiProjectRequest, DeleteCcaiProjectResponse>;
    /**
     * Lists all CCAI service projects based on the provided request.
     *
     * @generated from protobuf rpc: ListCcaiProjects(ondewo.nlu.ListCcaiProjectsRequest) returns (ondewo.nlu.ListCcaiProjectsResponse);
     */
    listCcaiProjects(input: ListCcaiProjectsRequest, options?: RpcOptions): UnaryCall<ListCcaiProjectsRequest, ListCcaiProjectsResponse>;
    /**
     * Updates the information of an existing CCAI service project.
     *
     * @generated from protobuf rpc: UpdateCcaiProject(ondewo.nlu.UpdateCcaiProjectRequest) returns (ondewo.nlu.UpdateCcaiProjectResponse);
     */
    updateCcaiProject(input: UpdateCcaiProjectRequest, options?: RpcOptions): UnaryCall<UpdateCcaiProjectRequest, UpdateCcaiProjectResponse>;
    /**
     * Retrieves information about a specific CCAI service.
     *
     * @generated from protobuf rpc: GetCcaiService(ondewo.nlu.GetCcaiServiceRequest) returns (ondewo.nlu.CcaiService);
     */
    getCcaiService(input: GetCcaiServiceRequest, options?: RpcOptions): UnaryCall<GetCcaiServiceRequest, CcaiService>;
}
