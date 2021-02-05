import { GrpcClientFactory, GrpcClientSettings, GrpcEvent } from '@ngx-grpc/common';
import { GrpcHandler } from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './agent.pb';
import * as googleLongrunning001 from '../../google/longrunning/operations.pb';
import * as googleProtobuf003 from '../../google/protobuf/empty.pb';
export declare class AgentsClient {
    private handler;
    private client;
    constructor(settings: GrpcClientSettings, clientFactory: GrpcClientFactory, handler: GrpcHandler);
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.CreateAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    createAgent(requestData: thisProto.CreateAgentRequest, requestMetadata?: Metadata): Observable<thisProto.Agent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.CreateAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    createAgent$eventStream(requestData: thisProto.CreateAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Agent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.UpdateAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    updateAgent(requestData: thisProto.UpdateAgentRequest, requestMetadata?: Metadata): Observable<thisProto.Agent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.UpdateAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    updateAgent$eventStream(requestData: thisProto.UpdateAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Agent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAgentRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    getAgent(requestData: thisProto.GetAgentRequest, requestMetadata?: Metadata): Observable<thisProto.Agent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    getAgent$eventStream(requestData: thisProto.GetAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Agent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteAgent(requestData: thisProto.DeleteAgentRequest, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAgent$eventStream(requestData: thisProto.DeleteAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteAllAgents(requestData: googleProtobuf003.Empty, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteAllAgents$eventStream(requestData: googleProtobuf003.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsResponse>
     */
    listAgents(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<thisProto.ListAgentsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAgents$eventStream(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListAgentsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsOfUserResponse>
     */
    listAgentsOfUser(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<thisProto.ListAgentsOfUserResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>
     */
    listAgentsOfUser$eventStream(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListAgentsOfUserResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListAgentsResponse>
     */
    listAllAgents(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<thisProto.ListAgentsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListAgentsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListAgentsResponse>>
     */
    listAllAgents$eventStream(requestData: thisProto.ListAgentsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListAgentsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.AddUserToProjectRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    addUserToProject(requestData: thisProto.AddUserToProjectRequest, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.AddUserToProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    addUserToProject$eventStream(requestData: thisProto.AddUserToProjectRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RemoveUserFromProjectRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    removeUserFromProject(requestData: thisProto.RemoveUserFromProjectRequest, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RemoveUserFromProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    removeUserFromProject$eventStream(requestData: thisProto.RemoveUserFromProjectRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListUsersInProjectRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListUsersInProjectResponse>
     */
    listUsersInProject(requestData: thisProto.ListUsersInProjectRequest, requestMetadata?: Metadata): Observable<thisProto.ListUsersInProjectResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListUsersInProjectRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>
     */
    listUsersInProject$eventStream(requestData: thisProto.ListUsersInProjectRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListUsersInProjectResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<thisProto.GetPlatformInfoResponse>
     */
    getPlatformInfo(requestData: googleProtobuf003.Empty, requestMetadata?: Metadata): Observable<thisProto.GetPlatformInfoResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param googleProtobuf003.Empty request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>
     */
    getPlatformInfo$eventStream(requestData: googleProtobuf003.Empty, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetPlatformInfoResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ListProjectPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ListProjectPermissionsResponse>
     */
    listProjectPermissions(requestData: thisProto.ListProjectPermissionsRequest, requestMetadata?: Metadata): Observable<thisProto.ListProjectPermissionsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ListProjectPermissionsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>
     */
    listProjectPermissions$eventStream(requestData: thisProto.ListProjectPermissionsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ListProjectPermissionsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.TrainAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    trainAgent(requestData: thisProto.TrainAgentRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.TrainAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    trainAgent$eventStream(requestData: thisProto.TrainAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.BuildCacheRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    buildCache(requestData: thisProto.BuildCacheRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.BuildCacheRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    buildCache$eventStream(requestData: thisProto.BuildCacheRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExportAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    exportAgent(requestData: thisProto.ExportAgentRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExportAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    exportAgent$eventStream(requestData: thisProto.ExportAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ImportAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    importAgent(requestData: thisProto.ImportAgentRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ImportAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    importAgent$eventStream(requestData: thisProto.ImportAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.OptimizeRankingMatchRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    optimizeRankingMatch(requestData: thisProto.OptimizeRankingMatchRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.OptimizeRankingMatchRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    optimizeRankingMatch$eventStream(requestData: thisProto.OptimizeRankingMatchRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.RestoreAgentRequest request
     * @param Metadata metadata
     * @return Observable<googleLongrunning001.Operation>
     */
    restoreAgent(requestData: thisProto.RestoreAgentRequest, requestMetadata?: Metadata): Observable<googleLongrunning001.Operation>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.RestoreAgentRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleLongrunning001.Operation>>
     */
    restoreAgent$eventStream(requestData: thisProto.RestoreAgentRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleLongrunning001.Operation>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.GetAgentStatisticsRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.GetAgentStatisticsResponse>
     */
    getAgentStatistics(requestData: thisProto.GetAgentStatisticsRequest, requestMetadata?: Metadata): Observable<thisProto.GetAgentStatisticsResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.GetAgentStatisticsRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>
     */
    getAgentStatistics$eventStream(requestData: thisProto.GetAgentStatisticsRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.GetAgentStatisticsResponse>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SetAgentStatusRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.Agent>
     */
    setAgentStatus(requestData: thisProto.SetAgentStatusRequest, requestMetadata?: Metadata): Observable<thisProto.Agent>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SetAgentStatusRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.Agent>>
     */
    setAgentStatus$eventStream(requestData: thisProto.SetAgentStatusRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.Agent>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.SetResourcesRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    setResources(requestData: thisProto.SetResourcesRequest, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.SetResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    setResources$eventStream(requestData: thisProto.SetResourcesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.DeleteResourcesRequest request
     * @param Metadata metadata
     * @return Observable<googleProtobuf003.Empty>
     */
    deleteResources(requestData: thisProto.DeleteResourcesRequest, requestMetadata?: Metadata): Observable<googleProtobuf003.Empty>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.DeleteResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<googleProtobuf003.Empty>>
     */
    deleteResources$eventStream(requestData: thisProto.DeleteResourcesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<googleProtobuf003.Empty>>;
    /**
     * Unary RPC. Emits messages and throws errors on non-zero status codes
     * @param thisProto.ExportResourcesRequest request
     * @param Metadata metadata
     * @return Observable<thisProto.ExportResourcesResponse>
     */
    exportResources(requestData: thisProto.ExportResourcesRequest, requestMetadata?: Metadata): Observable<thisProto.ExportResourcesResponse>;
    /**
     * Unary RPC. Emits data and status events; does not throw errors by design
     * @param thisProto.ExportResourcesRequest request
     * @param Metadata metadata
     * @return Observable<GrpcEvent<thisProto.ExportResourcesResponse>>
     */
    exportResources$eventStream(requestData: thisProto.ExportResourcesRequest, requestMetadata?: Metadata): Observable<GrpcEvent<thisProto.ExportResourcesResponse>>;
}
