import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ListEntitiesResponse } from "./entity_type";
import type { ListEntitiesRequest } from "./entity_type";
import type { BatchDeleteEntitiesResponse } from "./entity_type";
import type { BatchDeleteEntitiesRequest } from "./entity_type";
import type { BatchGetEntitiesRequest } from "./entity_type";
import type { BatchUpdateEntitiesRequest } from "./entity_type";
import type { BatchEntitiesResponse } from "./entity_type";
import type { BatchCreateEntitiesRequest } from "./entity_type";
import type { DeleteEntityStatus } from "./entity_type";
import type { DeleteEntityRequest } from "./entity_type";
import type { UpdateEntityRequest } from "./entity_type";
import type { CreateEntityRequest } from "./entity_type";
import type { EntityType_Entity } from "./entity_type";
import type { GetEntityRequest } from "./entity_type";
import type { BatchDeleteEntityTypesRequest } from "./entity_type";
import type { Operation } from "./operations";
import type { BatchUpdateEntityTypesRequest } from "./entity_type";
import type { Empty } from "../../google/protobuf/empty";
import type { DeleteEntityTypeRequest } from "./entity_type";
import type { UpdateEntityTypeRequest } from "./entity_type";
import type { CreateEntityTypeRequest } from "./entity_type";
import type { EntityType } from "./entity_type";
import type { GetEntityTypeRequest } from "./entity_type";
import type { ListEntityTypesResponse } from "./entity_type";
import type { ListEntityTypesRequest } from "./entity_type";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Entities are extracted from user input and represent parameters that are
 * meaningful to your application. For example, a date range, a proper name
 * such as a geographic location or landmark, and so on. Entities represent
 * actionable data for your application.
 *
 * When you define an entity, you can also include synonyms that all map to
 * that entity. For example, "soft drink", "soda", "pop", and so on.
 *
 * There are three types of entities:
 *
 * *   **System** - entities that are defined by the Dialogflow API for common
 *     data types such as date, time, currency, and so on. A system entity is
 *     represented by the `EntityType` type.
 *
 * *   **Developer** - entities that are defined by you that represent
 *     actionable data that is meaningful to your application. For example,
 *     you could define a `pizza.sauce` entity for red or white pizza sauce,
 *     a `pizza.cheese` entity for the different types of cheese on a pizza,
 *     a `pizza.topping` entity for different toppings, and so on. A developer
 *     entity is represented by the `EntityType` type.
 *
 * *   **User** - entities that are built for an individual user such as
 *     favorites, preferences, playlists, and so on. A user entity is
 *     represented by the [SessionEntityType][google.cloud.dialogflow.v2.SessionEntityType] type.
 *
 * For more information about entity types, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/entities).
 *
 * @generated from protobuf service ondewo.nlu.EntityTypes
 */
export interface IEntityTypesClient {
    /**
     * Returns the list of all entity types in the specified agent.
     *
     * @generated from protobuf rpc: ListEntityTypes(ondewo.nlu.ListEntityTypesRequest) returns (ondewo.nlu.ListEntityTypesResponse);
     */
    listEntityTypes(input: ListEntityTypesRequest, options?: RpcOptions): UnaryCall<ListEntityTypesRequest, ListEntityTypesResponse>;
    /**
     * Retrieves the specified entity type.
     *
     * @generated from protobuf rpc: GetEntityType(ondewo.nlu.GetEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    getEntityType(input: GetEntityTypeRequest, options?: RpcOptions): UnaryCall<GetEntityTypeRequest, EntityType>;
    /**
     * Creates an entity type in the specified agent.
     *
     * @generated from protobuf rpc: CreateEntityType(ondewo.nlu.CreateEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    createEntityType(input: CreateEntityTypeRequest, options?: RpcOptions): UnaryCall<CreateEntityTypeRequest, EntityType>;
    /**
     * Updates the specified entity type.
     *
     * @generated from protobuf rpc: UpdateEntityType(ondewo.nlu.UpdateEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    updateEntityType(input: UpdateEntityTypeRequest, options?: RpcOptions): UnaryCall<UpdateEntityTypeRequest, EntityType>;
    /**
     * Deletes the specified entity type.
     *
     * @generated from protobuf rpc: DeleteEntityType(ondewo.nlu.DeleteEntityTypeRequest) returns (google.protobuf.Empty);
     */
    deleteEntityType(input: DeleteEntityTypeRequest, options?: RpcOptions): UnaryCall<DeleteEntityTypeRequest, Empty>;
    /**
     * Updates/Creates multiple entity types in the specified agent.
     *
     * Operation <response: [BatchUpdateEntityTypesResponse][google.cloud.dialogflow.v2.BatchUpdateEntityTypesResponse],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BatchUpdateEntityTypes(ondewo.nlu.BatchUpdateEntityTypesRequest) returns (ondewo.nlu.Operation);
     */
    batchUpdateEntityTypes(input: BatchUpdateEntityTypesRequest, options?: RpcOptions): UnaryCall<BatchUpdateEntityTypesRequest, Operation>;
    /**
     * Deletes entity types in the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BatchDeleteEntityTypes(ondewo.nlu.BatchDeleteEntityTypesRequest) returns (ondewo.nlu.Operation);
     */
    batchDeleteEntityTypes(input: BatchDeleteEntityTypesRequest, options?: RpcOptions): UnaryCall<BatchDeleteEntityTypesRequest, Operation>;
    /**
     * Retrieves the specified entity .
     *
     * @generated from protobuf rpc: GetEntity(ondewo.nlu.GetEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    getEntity(input: GetEntityRequest, options?: RpcOptions): UnaryCall<GetEntityRequest, EntityType_Entity>;
    /**
     * Creates an entity  in the specified agent.
     *
     * @generated from protobuf rpc: CreateEntity(ondewo.nlu.CreateEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    createEntity(input: CreateEntityRequest, options?: RpcOptions): UnaryCall<CreateEntityRequest, EntityType_Entity>;
    /**
     * Updates the specified entity .
     *
     * @generated from protobuf rpc: UpdateEntity(ondewo.nlu.UpdateEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    updateEntity(input: UpdateEntityRequest, options?: RpcOptions): UnaryCall<UpdateEntityRequest, EntityType_Entity>;
    /**
     * Deletes the specified entity .
     *
     * @generated from protobuf rpc: DeleteEntity(ondewo.nlu.DeleteEntityRequest) returns (ondewo.nlu.DeleteEntityStatus);
     */
    deleteEntity(input: DeleteEntityRequest, options?: RpcOptions): UnaryCall<DeleteEntityRequest, DeleteEntityStatus>;
    /**
     * Creates an entity value in an entity type.
     *
     * @generated from protobuf rpc: BatchCreateEntities(ondewo.nlu.BatchCreateEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchCreateEntities(input: BatchCreateEntitiesRequest, options?: RpcOptions): UnaryCall<BatchCreateEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Updates a specific entity value.
     *
     * @generated from protobuf rpc: BatchUpdateEntities(ondewo.nlu.BatchUpdateEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchUpdateEntities(input: BatchUpdateEntitiesRequest, options?: RpcOptions): UnaryCall<BatchUpdateEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Gets a specific entity value.
     *
     * @generated from protobuf rpc: BatchGetEntities(ondewo.nlu.BatchGetEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchGetEntities(input: BatchGetEntitiesRequest, options?: RpcOptions): UnaryCall<BatchGetEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Deletes the specified entity value.
     *
     * @generated from protobuf rpc: BatchDeleteEntities(ondewo.nlu.BatchDeleteEntitiesRequest) returns (ondewo.nlu.BatchDeleteEntitiesResponse);
     */
    batchDeleteEntities(input: BatchDeleteEntitiesRequest, options?: RpcOptions): UnaryCall<BatchDeleteEntitiesRequest, BatchDeleteEntitiesResponse>;
    /**
     * List entities of an entity type
     *
     * @generated from protobuf rpc: ListEntities(ondewo.nlu.ListEntitiesRequest) returns (ondewo.nlu.ListEntitiesResponse);
     */
    listEntities(input: ListEntitiesRequest, options?: RpcOptions): UnaryCall<ListEntitiesRequest, ListEntitiesResponse>;
}
/**
 * Entities are extracted from user input and represent parameters that are
 * meaningful to your application. For example, a date range, a proper name
 * such as a geographic location or landmark, and so on. Entities represent
 * actionable data for your application.
 *
 * When you define an entity, you can also include synonyms that all map to
 * that entity. For example, "soft drink", "soda", "pop", and so on.
 *
 * There are three types of entities:
 *
 * *   **System** - entities that are defined by the Dialogflow API for common
 *     data types such as date, time, currency, and so on. A system entity is
 *     represented by the `EntityType` type.
 *
 * *   **Developer** - entities that are defined by you that represent
 *     actionable data that is meaningful to your application. For example,
 *     you could define a `pizza.sauce` entity for red or white pizza sauce,
 *     a `pizza.cheese` entity for the different types of cheese on a pizza,
 *     a `pizza.topping` entity for different toppings, and so on. A developer
 *     entity is represented by the `EntityType` type.
 *
 * *   **User** - entities that are built for an individual user such as
 *     favorites, preferences, playlists, and so on. A user entity is
 *     represented by the [SessionEntityType][google.cloud.dialogflow.v2.SessionEntityType] type.
 *
 * For more information about entity types, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/entities).
 *
 * @generated from protobuf service ondewo.nlu.EntityTypes
 */
export declare class EntityTypesClient implements IEntityTypesClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Returns the list of all entity types in the specified agent.
     *
     * @generated from protobuf rpc: ListEntityTypes(ondewo.nlu.ListEntityTypesRequest) returns (ondewo.nlu.ListEntityTypesResponse);
     */
    listEntityTypes(input: ListEntityTypesRequest, options?: RpcOptions): UnaryCall<ListEntityTypesRequest, ListEntityTypesResponse>;
    /**
     * Retrieves the specified entity type.
     *
     * @generated from protobuf rpc: GetEntityType(ondewo.nlu.GetEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    getEntityType(input: GetEntityTypeRequest, options?: RpcOptions): UnaryCall<GetEntityTypeRequest, EntityType>;
    /**
     * Creates an entity type in the specified agent.
     *
     * @generated from protobuf rpc: CreateEntityType(ondewo.nlu.CreateEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    createEntityType(input: CreateEntityTypeRequest, options?: RpcOptions): UnaryCall<CreateEntityTypeRequest, EntityType>;
    /**
     * Updates the specified entity type.
     *
     * @generated from protobuf rpc: UpdateEntityType(ondewo.nlu.UpdateEntityTypeRequest) returns (ondewo.nlu.EntityType);
     */
    updateEntityType(input: UpdateEntityTypeRequest, options?: RpcOptions): UnaryCall<UpdateEntityTypeRequest, EntityType>;
    /**
     * Deletes the specified entity type.
     *
     * @generated from protobuf rpc: DeleteEntityType(ondewo.nlu.DeleteEntityTypeRequest) returns (google.protobuf.Empty);
     */
    deleteEntityType(input: DeleteEntityTypeRequest, options?: RpcOptions): UnaryCall<DeleteEntityTypeRequest, Empty>;
    /**
     * Updates/Creates multiple entity types in the specified agent.
     *
     * Operation <response: [BatchUpdateEntityTypesResponse][google.cloud.dialogflow.v2.BatchUpdateEntityTypesResponse],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BatchUpdateEntityTypes(ondewo.nlu.BatchUpdateEntityTypesRequest) returns (ondewo.nlu.Operation);
     */
    batchUpdateEntityTypes(input: BatchUpdateEntityTypesRequest, options?: RpcOptions): UnaryCall<BatchUpdateEntityTypesRequest, Operation>;
    /**
     * Deletes entity types in the specified agent.
     *
     * Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
     *            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
     *
     * @generated from protobuf rpc: BatchDeleteEntityTypes(ondewo.nlu.BatchDeleteEntityTypesRequest) returns (ondewo.nlu.Operation);
     */
    batchDeleteEntityTypes(input: BatchDeleteEntityTypesRequest, options?: RpcOptions): UnaryCall<BatchDeleteEntityTypesRequest, Operation>;
    /**
     * Retrieves the specified entity .
     *
     * @generated from protobuf rpc: GetEntity(ondewo.nlu.GetEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    getEntity(input: GetEntityRequest, options?: RpcOptions): UnaryCall<GetEntityRequest, EntityType_Entity>;
    /**
     * Creates an entity  in the specified agent.
     *
     * @generated from protobuf rpc: CreateEntity(ondewo.nlu.CreateEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    createEntity(input: CreateEntityRequest, options?: RpcOptions): UnaryCall<CreateEntityRequest, EntityType_Entity>;
    /**
     * Updates the specified entity .
     *
     * @generated from protobuf rpc: UpdateEntity(ondewo.nlu.UpdateEntityRequest) returns (ondewo.nlu.EntityType.Entity);
     */
    updateEntity(input: UpdateEntityRequest, options?: RpcOptions): UnaryCall<UpdateEntityRequest, EntityType_Entity>;
    /**
     * Deletes the specified entity .
     *
     * @generated from protobuf rpc: DeleteEntity(ondewo.nlu.DeleteEntityRequest) returns (ondewo.nlu.DeleteEntityStatus);
     */
    deleteEntity(input: DeleteEntityRequest, options?: RpcOptions): UnaryCall<DeleteEntityRequest, DeleteEntityStatus>;
    /**
     * Creates an entity value in an entity type.
     *
     * @generated from protobuf rpc: BatchCreateEntities(ondewo.nlu.BatchCreateEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchCreateEntities(input: BatchCreateEntitiesRequest, options?: RpcOptions): UnaryCall<BatchCreateEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Updates a specific entity value.
     *
     * @generated from protobuf rpc: BatchUpdateEntities(ondewo.nlu.BatchUpdateEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchUpdateEntities(input: BatchUpdateEntitiesRequest, options?: RpcOptions): UnaryCall<BatchUpdateEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Gets a specific entity value.
     *
     * @generated from protobuf rpc: BatchGetEntities(ondewo.nlu.BatchGetEntitiesRequest) returns (ondewo.nlu.BatchEntitiesResponse);
     */
    batchGetEntities(input: BatchGetEntitiesRequest, options?: RpcOptions): UnaryCall<BatchGetEntitiesRequest, BatchEntitiesResponse>;
    /**
     * Deletes the specified entity value.
     *
     * @generated from protobuf rpc: BatchDeleteEntities(ondewo.nlu.BatchDeleteEntitiesRequest) returns (ondewo.nlu.BatchDeleteEntitiesResponse);
     */
    batchDeleteEntities(input: BatchDeleteEntitiesRequest, options?: RpcOptions): UnaryCall<BatchDeleteEntitiesRequest, BatchDeleteEntitiesResponse>;
    /**
     * List entities of an entity type
     *
     * @generated from protobuf rpc: ListEntities(ondewo.nlu.ListEntitiesRequest) returns (ondewo.nlu.ListEntitiesResponse);
     */
    listEntities(input: ListEntitiesRequest, options?: RpcOptions): UnaryCall<ListEntitiesRequest, ListEntitiesResponse>;
}
