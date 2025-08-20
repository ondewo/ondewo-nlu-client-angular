import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Empty } from "../../google/protobuf/empty";
import { SortingMode } from "./common";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * Represents an entity type.
 * Entity types serve as a tool for extracting parameter values from natural
 * language queries.
 *
 * @generated from protobuf message ondewo.nlu.EntityType
 */
export interface EntityType {
    /**
     * Required for all methods except `create` (`create` populates the name
     * automatically.
     * The unique identifier of the entity type. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Required. The name of the entity type.
     *
     * @generated from protobuf field: string display_name = 2;
     */
    displayName: string;
    /**
     * Required. Indicates the kind of entity type.
     *
     * @generated from protobuf field: ondewo.nlu.EntityType.Kind kind = 3;
     */
    kind: EntityType_Kind;
    /**
     * Optional. Indicates whether the entity type can be automatically
     * expanded.
     *
     * @generated from protobuf field: ondewo.nlu.EntityType.AutoExpansionMode auto_expansion_mode = 4;
     */
    autoExpansionMode: EntityType_AutoExpansionMode;
    /**
     * Optional. The collection of entities associated with the entity type.
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType.Entity entities = 6;
     */
    entities: EntityType_Entity[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 10;
     */
    nextPageToken: string;
    /**
     * Read-Only field. Total count of entity values of the entity type
     *
     * @generated from protobuf field: int32 entity_count = 11;
     */
    entityCount: number;
    /**
     * Indicates whether the entity type is active or not
     *
     * @generated from protobuf field: ondewo.nlu.EntityType.EntityTypeStatus status = 12;
     */
    status: EntityType_EntityTypeStatus;
    /**
     * Read-Only field. Total count of entity synonyms of the entity type
     *
     * @generated from protobuf field: int32 synonym_count = 13;
     */
    synonymCount: number;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 14;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 15;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 16;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 17;
     */
    modifiedBy: string;
}
/**
 * Optional. Represents an entity.
 *
 * @generated from protobuf message ondewo.nlu.EntityType.Entity
 */
export interface EntityType_Entity {
    /**
     * Required.
     * For `KIND_MAP` entity types: </br>
     *   A canonical name to be used in place of synonyms.</br>
     * For `KIND_LIST` entity types:</br>
     *   A string that can contain references to other entity types (with or without aliases). </br>
     *
     * Values can also be described as regexes with postprocessing options such as:
     *
     *   <pre><code>
     *    * regex('//1') => references the first group match of the regex defined as a synonym
     *    * regex('//2') => references the second group match of the regex defined as a synonym
     *    * regex('//1') => references the first group match of the regex defined as a synonym
     *   </code></pre>
     *
     * Values can also be described as regexes with one or more postprocessing options such as one postprocessing
     * option to remove all whitespaces <code>regex('&lt;#RW#&gt;\\1')</code> or by a combination of several
     * postprocessing options such as remove all whitespaces and lower casing
     * <code>regex('&lt;#RW#&gt;&lt;#LC#&gt;\\1') </code>.
     *
     * All processing options are:
     *
     *   <pre><code>
     *    * regex('&lt;#TW&gt;//1') => matches 1st group and trims duplicated whitespaces to one single space
     *    * regex('&lt;#RW&gt;//1') => matches 1st group and removes all whitespaces
     *    * regex('&lt;#UC&gt;//1') => matches 1st group and converts to upper case
     *    * regex('&lt;#LC&gt;//1') => matches 1st group and converts to lower case
     *    * regex('&lt;#CC&gt;//1') => matches 1st group and converts to camelCase
     *    * regex('&lt;#SC&gt;//1') => matches 1st group and converts to snake_case
     *   </code></pre>
     *
     * @generated from protobuf field: string value = 1;
     */
    value: string;
    /**
     * Required. A collection of synonyms. For `KIND_LIST` entity types this
     * must contain exactly one synonym equal to `value`.
     * Synonyms can be regex expressions, i.e. regular expressions, that are python compatible.
     * See here for supported regex: https://docs.python.org/3/library/re.html
     * Examples are:
     *
     *  <pre><code>
     *   * regex('[a-zA-Z]+') => just letters
     *   * regex('\d{1,5}') => just numbers
     *   * regex('^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') => mix of numbers, letters and dot
     *   * regex('(?i)(^|\s)(0\s{0,3}') => with matching groups and case insensitivity
     *  </code></pre>
     *
     *
     * @generated from protobuf field: repeated string synonyms = 2;
     */
    synonyms: string[];
    /**
     * The unique identifier of the entity. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * The name of the entity.
     *
     * @generated from protobuf field: string display_name = 4;
     */
    displayName: string;
    /**
     * Optional. Total count of entity synonyms
     *
     * @generated from protobuf field: int32 synonym_count = 5;
     */
    synonymCount: number;
    /**
     * Required. The language to list entity synonyms for.
     *
     * @generated from protobuf field: string language_code = 6;
     */
    languageCode: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 8;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 9;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 10;
     */
    modifiedBy: string;
}
/**
 * Represents kinds of entities.
 *
 * @generated from protobuf enum ondewo.nlu.EntityType.Kind
 */
export declare enum EntityType_Kind {
    /**
     * Not specified. This value should be never used.
     *
     * @generated from protobuf enum value: KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Map entity types allow mapping of a group of synonyms to a canonical
     * value.
     *
     * @generated from protobuf enum value: KIND_MAP = 1;
     */
    MAP = 1,
    /**
     * List entity types contain a set of entries that do not map to canonical
     * values. However, list entity types can contain references to other entity
     * types (with or without aliases).
     *
     * @generated from protobuf enum value: KIND_LIST = 2;
     */
    LIST = 2
}
/**
 * @generated from protobuf enum ondewo.nlu.EntityType.EntityTypeStatus
 */
export declare enum EntityType_EntityTypeStatus {
    /**
     * @generated from protobuf enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * @generated from protobuf enum value: INACTIVE = 1;
     */
    INACTIVE = 1
}
/**
 * Represents different entity type expansion modes. Automated expansion
 * allows an agent to recognize values that have not been explicitly listed in
 * the entity (for example, new kinds of shopping list items).
 *
 * @generated from protobuf enum ondewo.nlu.EntityType.AutoExpansionMode
 */
export declare enum EntityType_AutoExpansionMode {
    /**
     * Auto expansion disabled for the entity.
     *
     * @generated from protobuf enum value: AUTO_EXPANSION_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Allows an agent to recognize values that have not been explicitly
     * listed in the entity.
     *
     * @generated from protobuf enum value: AUTO_EXPANSION_MODE_DEFAULT = 1;
     */
    DEFAULT = 1
}
/**
 * The request message for [EntityTypes.ListEntityTypes][google.cloud.dialogflow.v2.EntityTypes.ListEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.ListEntityTypesRequest
 */
export interface ListEntityTypesRequest {
    /**
     * Required. The agent to list all entity types from.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Optional. The language to list entity synonyms for. If not specified,
     * the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * The page token to support pagination.
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
     * @generated from protobuf field: string page_token = 4;
     */
    pageToken: string;
    /**
     * Optional. The resource view to apply to the returned entity type.
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeView entity_type_view = 5;
     */
    entityTypeView: EntityTypeView;
    /**
     * Optional. Applies a filter to the list. Default, no filter.
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeCategory filter_by_category = 6;
     */
    filterByCategory: EntityTypeCategory;
    /**
     * Optional. Defines the sorting of the list. Default, no sorting.
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeSorting sort_by_field = 7;
     */
    sortByField?: EntityTypeSorting;
}
/**
 * The response message for [EntityTypes.ListEntityTypes][google.cloud.dialogflow.v2.EntityTypes.ListEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.ListEntityTypesResponse
 */
export interface ListEntityTypesResponse {
    /**
     * The list of agent entity types. There will be a maximum number of items
     * returned based on the page_token field in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType entity_types = 1;
     */
    entityTypes: EntityType[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for [EntityTypes.GetEntityType][google.cloud.dialogflow.v2.EntityTypes.GetEntityType].
 *
 * @generated from protobuf message ondewo.nlu.GetEntityTypeRequest
 */
export interface GetEntityTypeRequest {
    /**
     * Required. The name of the entity type.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Optional. The language to retrieve entity synonyms for. If not specified,
     * the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * The page token to support pagination.
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
     * @generated from protobuf field: string page_token = 5;
     */
    pageToken: string;
    /**
     * Optional. The resource view to apply to the returned Entity Type
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeView entity_type_view = 6;
     */
    entityTypeView: EntityTypeView;
}
/**
 * The request message for [EntityTypes.CreateEntityType][google.cloud.dialogflow.v2.EntityTypes.CreateEntityType].
 *
 * @generated from protobuf message ondewo.nlu.CreateEntityTypeRequest
 */
export interface CreateEntityTypeRequest {
    /**
     * Required. The agent to create a entity type for.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The entity type to create.
     *
     * @generated from protobuf field: ondewo.nlu.EntityType entity_type = 2;
     */
    entityType?: EntityType;
    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If not
     * specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 3;
     */
    languageCode: string;
    /**
     * Optional. The resource view to apply to the returned Entity Type
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeView entity_type_view = 6;
     */
    entityTypeView: EntityTypeView;
}
/**
 * The request message for [EntityTypes.UpdateEntityType][google.cloud.dialogflow.v2.EntityTypes.UpdateEntityType].
 *
 * @generated from protobuf message ondewo.nlu.UpdateEntityTypeRequest
 */
export interface UpdateEntityTypeRequest {
    /**
     * Required. The entity type to update.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: ondewo.nlu.EntityType entity_type = 1;
     */
    entityType?: EntityType;
    /**
     * Optional. The language of entity synonyms defined in `entity_type`. If not
     * specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 3;
     */
    updateMask?: FieldMask;
    /**
     * Optional. The resource view to apply to the returned Entity Type
     *
     * @generated from protobuf field: ondewo.nlu.EntityTypeView entity_type_view = 6;
     */
    entityTypeView: EntityTypeView;
}
/**
 * The request message for [EntityTypes.DeleteEntityType][google.cloud.dialogflow.v2.EntityTypes.DeleteEntityType].
 *
 * @generated from protobuf message ondewo.nlu.DeleteEntityTypeRequest
 */
export interface DeleteEntityTypeRequest {
    /**
     * Required. The name of the entity type to delete.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [EntityTypes.BatchUpdateEntityTypes][google.cloud.dialogflow.v2.EntityTypes.BatchUpdateEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateEntityTypesRequest
 */
export interface BatchUpdateEntityTypesRequest {
    /**
     * Required. The name of the agent to update or create entity types in.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent</code></pre>
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * @generated from protobuf oneof: entity_type_batch
     */
    entityTypeBatch: {
        oneofKind: "entityTypeBatchUri";
        /**
         * The URI to a Google Cloud Storage file containing entity types to update
         * or create. The file format can either be a serialized proto (of
         * EntityBatch type) or a JSON object. Note: The URI must start with
         * "gs://".
         *
         * @generated from protobuf field: string entity_type_batch_uri = 2;
         */
        entityTypeBatchUri: string;
    } | {
        oneofKind: "entityTypeBatchInline";
        /**
         * The collection of entity type to update or create.
         *
         * @generated from protobuf field: ondewo.nlu.EntityTypeBatch entity_type_batch_inline = 3;
         */
        entityTypeBatchInline: EntityTypeBatch;
    } | {
        oneofKind: undefined;
    };
    /**
     * Optional. The language of entity synonyms defined in `entity_types`. If not
     * specified, the agent's default language is used.
     * [More than a dozen
     * languages](https://dialogflow.com/docs/reference/language) are supported.
     * Note: languages must be enabled in the agent, before they can be used.
     *
     * @generated from protobuf field: string language_code = 4;
     */
    languageCode: string;
    /**
     * Optional. The mask to control which fields get updated.
     *
     * @generated from protobuf field: google.protobuf.FieldMask update_mask = 5;
     */
    updateMask?: FieldMask;
}
/**
 * The response message for [EntityTypes.BatchUpdateEntityTypes][google.cloud.dialogflow.v2.EntityTypes.BatchUpdateEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateEntityTypesResponse
 */
export interface BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType entity_types = 1;
     */
    entityTypes: EntityType[];
}
/**
 * The request message for [EntityTypes.BatchDeleteEntityTypes][google.cloud.dialogflow.v2.EntityTypes.BatchDeleteEntityTypes].
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteEntityTypesRequest
 */
export interface BatchDeleteEntityTypesRequest {
    /**
     * Required. The name of the agent to delete all entities types for. Format:
     * `projects/&lt;project_uuid&gt;/agent`.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * Required. The names entity types to delete. All names must point to the
     * same agent as `parent`.
     *
     * @generated from protobuf field: repeated string entity_type_names = 2;
     */
    entityTypeNames: string[];
}
/**
 * This message is a wrapper around a collection of entity types.
 *
 * @generated from protobuf message ondewo.nlu.EntityTypeBatch
 */
export interface EntityTypeBatch {
    /**
     * A collection of entity types.
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType entity_types = 1;
     */
    entityTypes: EntityType[];
}
/**
 * This message contains Entity type sorting
 *
 * @generated from protobuf message ondewo.nlu.EntityTypeSorting
 */
export interface EntityTypeSorting {
    /**
     * @generated from protobuf field: ondewo.nlu.EntityTypeSorting.EntityTypeSortingField sorting_field = 1;
     */
    sortingField: EntityTypeSorting_EntityTypeSortingField;
    /**
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 2;
     */
    sortingMode: SortingMode;
}
/**
 * Structure of Entity type sorting field
 *
 * @generated from protobuf enum ondewo.nlu.EntityTypeSorting.EntityTypeSortingField
 */
export declare enum EntityTypeSorting_EntityTypeSortingField {
    /**
     * @generated from protobuf enum value: NO_ENTITY_TYPE_SORTING = 0;
     */
    NO_ENTITY_TYPE_SORTING = 0,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_TYPE_BY_NAME = 1;
     */
    SORT_ENTITY_TYPE_BY_NAME = 1,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_TYPE_BY_CREATION_DATE = 2;
     */
    SORT_ENTITY_TYPE_BY_CREATION_DATE = 2,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_TYPE_BY_LAST_UPDATED = 3;
     */
    SORT_ENTITY_TYPE_BY_LAST_UPDATED = 3,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_TYPE_BY_ENTITY_VALUE_COUNT = 4;
     */
    SORT_ENTITY_TYPE_BY_ENTITY_VALUE_COUNT = 4,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_TYPE_BY_SYNONYM_COUNT = 5;
     */
    SORT_ENTITY_TYPE_BY_SYNONYM_COUNT = 5
}
/**
 * This message is for the entity status
 *
 * @generated from protobuf message ondewo.nlu.EntityStatus
 */
export interface EntityStatus {
    /**
     * @generated from protobuf oneof: entity_or_status
     */
    entityOrStatus: {
        oneofKind: "entity";
        /**
         * The entity
         *
         * @generated from protobuf field: ondewo.nlu.EntityType.Entity entity = 1;
         */
        entity: EntityType_Entity;
    } | {
        oneofKind: "errorMessage";
        /**
         * Error message
         *
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * This message is a response of batch entities
 *
 * @generated from protobuf message ondewo.nlu.BatchEntitiesResponse
 */
export interface BatchEntitiesResponse {
    /**
     * A list of entity statuses
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityStatus entity_statuses = 1;
     */
    entityStatuses: EntityStatus[];
    /**
     * indicates if statuses of some of the training phrases have errors
     *
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * @generated from protobuf message ondewo.nlu.CreateEntityRequest
 */
export interface CreateEntityRequest {
    /**
     * Required. Name of the entity type in which to create the entity value. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: string entity_type_name = 1;
     */
    entityTypeName: string;
    /**
     * The entity value to create
     *
     * @generated from protobuf field: ondewo.nlu.EntityType.Entity entity = 2;
     */
    entity?: EntityType_Entity;
}
/**
 * This message is a request to create a batch entities
 *
 * @generated from protobuf message ondewo.nlu.BatchCreateEntitiesRequest
 */
export interface BatchCreateEntitiesRequest {
    /**
     * The create entity requests in a batch
     *
     * @generated from protobuf field: repeated ondewo.nlu.CreateEntityRequest create_entity_requests = 1;
     */
    createEntityRequests: CreateEntityRequest[];
}
/**
 * This message is a request to update a batch of entities
 *
 * @generated from protobuf message ondewo.nlu.BatchUpdateEntitiesRequest
 */
export interface BatchUpdateEntitiesRequest {
    /**
     * The entities to update
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType.Entity entities = 1;
     */
    entities: EntityType_Entity[];
}
/**
 * This message is a request to update an entity
 *
 * @generated from protobuf message ondewo.nlu.UpdateEntityRequest
 */
export interface UpdateEntityRequest {
    /**
     * The entity to update
     *
     * @generated from protobuf field: ondewo.nlu.EntityType.Entity entity = 1;
     */
    entity?: EntityType_Entity;
}
/**
 * This message is a request to get a an entity
 *
 * @generated from protobuf message ondewo.nlu.GetEntityRequest
 */
export interface GetEntityRequest {
    /**
     * The unique identifiers of the entities. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * This message is a request to get a batch of entities
 *
 * @generated from protobuf message ondewo.nlu.BatchGetEntitiesRequest
 */
export interface BatchGetEntitiesRequest {
    /**
     * The unique identifiers of the entities. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * This message is a request to delete a batch of entities
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteEntitiesRequest
 */
export interface BatchDeleteEntitiesRequest {
    /**
     * The unique identifiers of the entities. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: repeated string names = 1;
     */
    names: string[];
}
/**
 * This message is a request to delete a batch of entities
 *
 * @generated from protobuf message ondewo.nlu.DeleteEntityRequest
 */
export interface DeleteEntityRequest {
    /**
     * The unique identifiers of the entities. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;/entities/&lt;entity_uuid&gt;`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * This message contains the status of an entity deletion
 *
 * @generated from protobuf message ondewo.nlu.DeleteEntityStatus
 */
export interface DeleteEntityStatus {
    /**
     * @generated from protobuf oneof: delete_status
     */
    deleteStatus: {
        oneofKind: "successfullyDeleted";
        /**
         * @generated from protobuf field: google.protobuf.Empty successfully_deleted = 1;
         */
        successfullyDeleted: Empty;
    } | {
        oneofKind: "errorMessage";
        /**
         * @generated from protobuf field: string error_message = 2;
         */
        errorMessage: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * This message is a response of deletion of a batch of entities
 *
 * @generated from protobuf message ondewo.nlu.BatchDeleteEntitiesResponse
 */
export interface BatchDeleteEntitiesResponse {
    /**
     * status of an entity deletion
     *
     * @generated from protobuf field: repeated ondewo.nlu.DeleteEntityStatus delete_statuses = 1;
     */
    deleteStatuses: DeleteEntityStatus[];
    /**
     * error messages
     *
     * @generated from protobuf field: bool has_errors = 2;
     */
    hasErrors: boolean;
}
/**
 * This message is a request to get a list of entities
 *
 * @generated from protobuf message ondewo.nlu.ListEntitiesRequest
 */
export interface ListEntitiesRequest {
    /**
     * The unique identifier of the entity type. Format:
     * `projects/&lt;project_uuid&gt;/agent/entityTypes/&lt;entity_type_uuid&gt;
     *
     * @generated from protobuf field: string entity_type_name = 1;
     */
    entityTypeName: string;
    /**
     * Optional. The language to list training phrases, parameters and rich
     * messages for. If not specified, the agent's default language is used.
     *
     * @generated from protobuf field: string language_code = 2;
     */
    languageCode: string;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     * The page token to support pagination.
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
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
    /**
     * Optional. Defines the sorting of the list. Default, no sorting.
     *
     * @generated from protobuf field: ondewo.nlu.EntityValueSorting sort_by_field = 5;
     */
    sortByField?: EntityValueSorting;
    /**
     * Optional. Defines a pattern to search for in the entity type "values" and "synonyms"
     * Example:
     *      Pattern: "dark"
     *      Results:
     *              [Entity Value]          [Entity Synonyms]
     *              Red                     red, scarlett, dark red, ...
     *              Blue                    blue, indico, dark blue, sky blue, ...
     *              Dark                    obscure, black, opaque, ...
     *
     *
     * @generated from protobuf field: string search_by_pattern = 6;
     */
    searchByPattern: string;
}
/**
 * This message is a response of listing entities
 *
 * @generated from protobuf message ondewo.nlu.ListEntitiesResponse
 */
export interface ListEntitiesResponse {
    /**
     * The list of entities
     *
     * @generated from protobuf field: repeated ondewo.nlu.EntityType.Entity entities = 1;
     */
    entities: EntityType_Entity[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * This message contains entity value sorting
 *
 * @generated from protobuf message ondewo.nlu.EntityValueSorting
 */
export interface EntityValueSorting {
    /**
     * @generated from protobuf field: ondewo.nlu.EntityValueSorting.EntityValueSortingField sorting_field = 7;
     */
    sortingField: EntityValueSorting_EntityValueSortingField;
    /**
     * @generated from protobuf field: ondewo.nlu.SortingMode sorting_mode = 8;
     */
    sortingMode: SortingMode;
}
/**
 * Structure of Entity value sorting field
 *
 * @generated from protobuf enum ondewo.nlu.EntityValueSorting.EntityValueSortingField
 */
export declare enum EntityValueSorting_EntityValueSortingField {
    /**
     * Default behaviour: Sorts by value
     *
     * @generated from protobuf enum value: NO_ENTITY_VALUE_SORTING = 0;
     */
    NO_ENTITY_VALUE_SORTING = 0,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_VALUE_BY_DISPLAY_NAME = 1;
     */
    SORT_ENTITY_VALUE_BY_DISPLAY_NAME = 1,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_VALUE_BY_VALUE = 2;
     */
    SORT_ENTITY_VALUE_BY_VALUE = 2,
    /**
     * @generated from protobuf enum value: SORT_ENTITY_VALUE_BY_SYNONYM_COUNT = 3;
     */
    SORT_ENTITY_VALUE_BY_SYNONYM_COUNT = 3
}
/**
 * Represents the options for views of an entity type.
 * An entity type can be a sizable object. Therefore, we provide a resource view that
 * does not return all values and synonyms besides the full view that is set by default.
 *
 * @generated from protobuf enum ondewo.nlu.EntityTypeView
 */
export declare enum EntityTypeView {
    /**
     * Same as ENTITY_TYPE_VIEW_FULL
     *
     * @generated from protobuf enum value: ENTITY_TYPE_VIEW_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * All fields are populated.
     *
     * @generated from protobuf enum value: ENTITY_TYPE_VIEW_FULL = 1;
     */
    FULL = 1,
    /**
     * The amount of entity values and synonyms is limited
     *
     * @generated from protobuf enum value: ENTITY_TYPE_VIEW_PARTIAL = 2;
     */
    PARTIAL = 2,
    /**
     * No entity synonyms are returned, only entity values
     *
     * @generated from protobuf enum value: ENTITY_TYPE_VIEW_SHALLOW = 3;
     */
    SHALLOW = 3,
    /**
     * Minimum view including only entity type UUID and entity type display name
     *
     * @generated from protobuf enum value: ENTITY_TYPE_VIEW_MINIMUM = 4;
     */
    MINIMUM = 4
}
/**
 * Represents the category of entity types to filter by in the "List Entity Types" request
 *
 * @generated from protobuf enum ondewo.nlu.EntityTypeCategory
 */
export declare enum EntityTypeCategory {
    /**
     * represent all entity types
     *
     * @generated from protobuf enum value: ALL_ENTITY_TYPES = 0;
     */
    ALL_ENTITY_TYPES = 0,
    /**
     * represent the default entity types
     *
     * @generated from protobuf enum value: DEFAULT_ENTITY_TYPES = 1;
     */
    DEFAULT_ENTITY_TYPES = 1,
    /**
     * represent the user defined (custom) entity types
     *
     * @generated from protobuf enum value: USER_DEFINED_ENTITY_TYPES = 2;
     */
    USER_DEFINED_ENTITY_TYPES = 2
}
declare class EntityType$Type extends MessageType<EntityType> {
    constructor();
    create(value?: PartialMessage<EntityType>): EntityType;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityType): EntityType;
    internalBinaryWrite(message: EntityType, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityType
 */
export declare const EntityType: EntityType$Type;
declare class EntityType_Entity$Type extends MessageType<EntityType_Entity> {
    constructor();
    create(value?: PartialMessage<EntityType_Entity>): EntityType_Entity;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityType_Entity): EntityType_Entity;
    internalBinaryWrite(message: EntityType_Entity, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityType.Entity
 */
export declare const EntityType_Entity: EntityType_Entity$Type;
declare class ListEntityTypesRequest$Type extends MessageType<ListEntityTypesRequest> {
    constructor();
    create(value?: PartialMessage<ListEntityTypesRequest>): ListEntityTypesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListEntityTypesRequest): ListEntityTypesRequest;
    internalBinaryWrite(message: ListEntityTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListEntityTypesRequest
 */
export declare const ListEntityTypesRequest: ListEntityTypesRequest$Type;
declare class ListEntityTypesResponse$Type extends MessageType<ListEntityTypesResponse> {
    constructor();
    create(value?: PartialMessage<ListEntityTypesResponse>): ListEntityTypesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListEntityTypesResponse): ListEntityTypesResponse;
    internalBinaryWrite(message: ListEntityTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListEntityTypesResponse
 */
export declare const ListEntityTypesResponse: ListEntityTypesResponse$Type;
declare class GetEntityTypeRequest$Type extends MessageType<GetEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<GetEntityTypeRequest>): GetEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEntityTypeRequest): GetEntityTypeRequest;
    internalBinaryWrite(message: GetEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetEntityTypeRequest
 */
export declare const GetEntityTypeRequest: GetEntityTypeRequest$Type;
declare class CreateEntityTypeRequest$Type extends MessageType<CreateEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<CreateEntityTypeRequest>): CreateEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateEntityTypeRequest): CreateEntityTypeRequest;
    internalBinaryWrite(message: CreateEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateEntityTypeRequest
 */
export declare const CreateEntityTypeRequest: CreateEntityTypeRequest$Type;
declare class UpdateEntityTypeRequest$Type extends MessageType<UpdateEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<UpdateEntityTypeRequest>): UpdateEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateEntityTypeRequest): UpdateEntityTypeRequest;
    internalBinaryWrite(message: UpdateEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateEntityTypeRequest
 */
export declare const UpdateEntityTypeRequest: UpdateEntityTypeRequest$Type;
declare class DeleteEntityTypeRequest$Type extends MessageType<DeleteEntityTypeRequest> {
    constructor();
    create(value?: PartialMessage<DeleteEntityTypeRequest>): DeleteEntityTypeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteEntityTypeRequest): DeleteEntityTypeRequest;
    internalBinaryWrite(message: DeleteEntityTypeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteEntityTypeRequest
 */
export declare const DeleteEntityTypeRequest: DeleteEntityTypeRequest$Type;
declare class BatchUpdateEntityTypesRequest$Type extends MessageType<BatchUpdateEntityTypesRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateEntityTypesRequest>): BatchUpdateEntityTypesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateEntityTypesRequest): BatchUpdateEntityTypesRequest;
    internalBinaryWrite(message: BatchUpdateEntityTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateEntityTypesRequest
 */
export declare const BatchUpdateEntityTypesRequest: BatchUpdateEntityTypesRequest$Type;
declare class BatchUpdateEntityTypesResponse$Type extends MessageType<BatchUpdateEntityTypesResponse> {
    constructor();
    create(value?: PartialMessage<BatchUpdateEntityTypesResponse>): BatchUpdateEntityTypesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateEntityTypesResponse): BatchUpdateEntityTypesResponse;
    internalBinaryWrite(message: BatchUpdateEntityTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateEntityTypesResponse
 */
export declare const BatchUpdateEntityTypesResponse: BatchUpdateEntityTypesResponse$Type;
declare class BatchDeleteEntityTypesRequest$Type extends MessageType<BatchDeleteEntityTypesRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteEntityTypesRequest>): BatchDeleteEntityTypesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteEntityTypesRequest): BatchDeleteEntityTypesRequest;
    internalBinaryWrite(message: BatchDeleteEntityTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteEntityTypesRequest
 */
export declare const BatchDeleteEntityTypesRequest: BatchDeleteEntityTypesRequest$Type;
declare class EntityTypeBatch$Type extends MessageType<EntityTypeBatch> {
    constructor();
    create(value?: PartialMessage<EntityTypeBatch>): EntityTypeBatch;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityTypeBatch): EntityTypeBatch;
    internalBinaryWrite(message: EntityTypeBatch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityTypeBatch
 */
export declare const EntityTypeBatch: EntityTypeBatch$Type;
declare class EntityTypeSorting$Type extends MessageType<EntityTypeSorting> {
    constructor();
    create(value?: PartialMessage<EntityTypeSorting>): EntityTypeSorting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityTypeSorting): EntityTypeSorting;
    internalBinaryWrite(message: EntityTypeSorting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityTypeSorting
 */
export declare const EntityTypeSorting: EntityTypeSorting$Type;
declare class EntityStatus$Type extends MessageType<EntityStatus> {
    constructor();
    create(value?: PartialMessage<EntityStatus>): EntityStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityStatus): EntityStatus;
    internalBinaryWrite(message: EntityStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityStatus
 */
export declare const EntityStatus: EntityStatus$Type;
declare class BatchEntitiesResponse$Type extends MessageType<BatchEntitiesResponse> {
    constructor();
    create(value?: PartialMessage<BatchEntitiesResponse>): BatchEntitiesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchEntitiesResponse): BatchEntitiesResponse;
    internalBinaryWrite(message: BatchEntitiesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchEntitiesResponse
 */
export declare const BatchEntitiesResponse: BatchEntitiesResponse$Type;
declare class CreateEntityRequest$Type extends MessageType<CreateEntityRequest> {
    constructor();
    create(value?: PartialMessage<CreateEntityRequest>): CreateEntityRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateEntityRequest): CreateEntityRequest;
    internalBinaryWrite(message: CreateEntityRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CreateEntityRequest
 */
export declare const CreateEntityRequest: CreateEntityRequest$Type;
declare class BatchCreateEntitiesRequest$Type extends MessageType<BatchCreateEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<BatchCreateEntitiesRequest>): BatchCreateEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchCreateEntitiesRequest): BatchCreateEntitiesRequest;
    internalBinaryWrite(message: BatchCreateEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchCreateEntitiesRequest
 */
export declare const BatchCreateEntitiesRequest: BatchCreateEntitiesRequest$Type;
declare class BatchUpdateEntitiesRequest$Type extends MessageType<BatchUpdateEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<BatchUpdateEntitiesRequest>): BatchUpdateEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchUpdateEntitiesRequest): BatchUpdateEntitiesRequest;
    internalBinaryWrite(message: BatchUpdateEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchUpdateEntitiesRequest
 */
export declare const BatchUpdateEntitiesRequest: BatchUpdateEntitiesRequest$Type;
declare class UpdateEntityRequest$Type extends MessageType<UpdateEntityRequest> {
    constructor();
    create(value?: PartialMessage<UpdateEntityRequest>): UpdateEntityRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateEntityRequest): UpdateEntityRequest;
    internalBinaryWrite(message: UpdateEntityRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.UpdateEntityRequest
 */
export declare const UpdateEntityRequest: UpdateEntityRequest$Type;
declare class GetEntityRequest$Type extends MessageType<GetEntityRequest> {
    constructor();
    create(value?: PartialMessage<GetEntityRequest>): GetEntityRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetEntityRequest): GetEntityRequest;
    internalBinaryWrite(message: GetEntityRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetEntityRequest
 */
export declare const GetEntityRequest: GetEntityRequest$Type;
declare class BatchGetEntitiesRequest$Type extends MessageType<BatchGetEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<BatchGetEntitiesRequest>): BatchGetEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchGetEntitiesRequest): BatchGetEntitiesRequest;
    internalBinaryWrite(message: BatchGetEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchGetEntitiesRequest
 */
export declare const BatchGetEntitiesRequest: BatchGetEntitiesRequest$Type;
declare class BatchDeleteEntitiesRequest$Type extends MessageType<BatchDeleteEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<BatchDeleteEntitiesRequest>): BatchDeleteEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteEntitiesRequest): BatchDeleteEntitiesRequest;
    internalBinaryWrite(message: BatchDeleteEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteEntitiesRequest
 */
export declare const BatchDeleteEntitiesRequest: BatchDeleteEntitiesRequest$Type;
declare class DeleteEntityRequest$Type extends MessageType<DeleteEntityRequest> {
    constructor();
    create(value?: PartialMessage<DeleteEntityRequest>): DeleteEntityRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteEntityRequest): DeleteEntityRequest;
    internalBinaryWrite(message: DeleteEntityRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteEntityRequest
 */
export declare const DeleteEntityRequest: DeleteEntityRequest$Type;
declare class DeleteEntityStatus$Type extends MessageType<DeleteEntityStatus> {
    constructor();
    create(value?: PartialMessage<DeleteEntityStatus>): DeleteEntityStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteEntityStatus): DeleteEntityStatus;
    internalBinaryWrite(message: DeleteEntityStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteEntityStatus
 */
export declare const DeleteEntityStatus: DeleteEntityStatus$Type;
declare class BatchDeleteEntitiesResponse$Type extends MessageType<BatchDeleteEntitiesResponse> {
    constructor();
    create(value?: PartialMessage<BatchDeleteEntitiesResponse>): BatchDeleteEntitiesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchDeleteEntitiesResponse): BatchDeleteEntitiesResponse;
    internalBinaryWrite(message: BatchDeleteEntitiesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.BatchDeleteEntitiesResponse
 */
export declare const BatchDeleteEntitiesResponse: BatchDeleteEntitiesResponse$Type;
declare class ListEntitiesRequest$Type extends MessageType<ListEntitiesRequest> {
    constructor();
    create(value?: PartialMessage<ListEntitiesRequest>): ListEntitiesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListEntitiesRequest): ListEntitiesRequest;
    internalBinaryWrite(message: ListEntitiesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListEntitiesRequest
 */
export declare const ListEntitiesRequest: ListEntitiesRequest$Type;
declare class ListEntitiesResponse$Type extends MessageType<ListEntitiesResponse> {
    constructor();
    create(value?: PartialMessage<ListEntitiesResponse>): ListEntitiesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListEntitiesResponse): ListEntitiesResponse;
    internalBinaryWrite(message: ListEntitiesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListEntitiesResponse
 */
export declare const ListEntitiesResponse: ListEntitiesResponse$Type;
declare class EntityValueSorting$Type extends MessageType<EntityValueSorting> {
    constructor();
    create(value?: PartialMessage<EntityValueSorting>): EntityValueSorting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityValueSorting): EntityValueSorting;
    internalBinaryWrite(message: EntityValueSorting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.EntityValueSorting
 */
export declare const EntityValueSorting: EntityValueSorting$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.EntityTypes
 */
export declare const EntityTypes: ServiceType;
export {};
