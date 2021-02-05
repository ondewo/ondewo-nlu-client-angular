import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './project-role.pb';
import * as googleProtobuf002 from '../../google/protobuf/empty.pb';
export declare class ProjectRolesClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    createProjectRole(requestData: thisProto.CreateProjectRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    createProjectRole$eventStream(requestData: thisProto.CreateProjectRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ProjectRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    getProjectRole(requestData: thisProto.GetProjectRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    getProjectRole$eventStream(requestData: thisProto.GetProjectRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ProjectRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf002.Empty>
     */
    deleteProjectRole(requestData: thisProto.DeleteProjectRoleRequest, requestMetadata?: Metadata): Observable<googleProtobuf002.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteProjectRole$eventStream(requestData: thisProto.DeleteProjectRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf002.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ProjectRole>
     */
    updateProjectRole(requestData: thisProto.UpdateProjectRoleRequest, requestMetadata?: Metadata): Observable<thisProto.ProjectRole>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateProjectRoleRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ProjectRole>>
     */
    updateProjectRole$eventStream(requestData: thisProto.UpdateProjectRoleRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ProjectRole>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListProjectRolesResponse>
     */
    listProjectRoles(requestData: thisProto.ListProjectRolesRequest, requestMetadata?: Metadata): Observable<thisProto.ListProjectRolesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListProjectRolesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>
     */
    listProjectRoles$eventStream(requestData: thisProto.ListProjectRolesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListProjectRolesResponse>>;
}
