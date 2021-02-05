import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf003 from '../../google/protobuf/field-mask.pb';
import * as ondewoNlu004 from '../../ondewo/nlu/common.pb';
export declare enum EntityTypeView {
    entityTypeViewUnspecified = 0,
    entityTypeViewFull = 1,
    entityTypeViewPartial = 2,
    entityTypeViewShallow = 3
}
export declare enum EntityTypeCategory {
    allEntityTypes = 0,
    defaultEntityTypes = 1,
    userDefinedEntityTypes = 2
}
export declare class EntityType implements GrpcMessage {
    static toBinary(instance: EntityType): any;
    static fromBinary(bytes: ByteSource): EntityType;
    static refineValues(instance: EntityType): void;
    static fromBinaryReader(instance: EntityType, reader: BinaryReader): void;
    static toBinaryWriter(instance: EntityType, writer: BinaryWriter): void;
    private _name?;
    private _displayName?;
    private _kind?;
    private _autoExpansionMode?;
    private _entities?;
    private _nextPageToken?;
    private _entityCount?;
    private _status?;
    private _synonymCount?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityType value
     */
    constructor(value?: RecursivePartial<EntityType>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get kind(): EntityType.Kind | undefined;
    set kind(value: EntityType.Kind | undefined);
    get autoExpansionMode(): EntityType.AutoExpansionMode | undefined;
    set autoExpansionMode(value: EntityType.AutoExpansionMode | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    get entityCount(): number | undefined;
    set entityCount(value: number | undefined);
    get status(): EntityType.EntityTypeStatus | undefined;
    set status(value: EntityType.EntityTypeStatus | undefined);
    get synonymCount(): number | undefined;
    set synonymCount(value: number | undefined);
    toObject(): {
        name: string;
        displayName: string;
        kind: EntityType.Kind;
        autoExpansionMode: EntityType.AutoExpansionMode;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        nextPageToken: string;
        entityCount: number;
        status: EntityType.EntityTypeStatus;
        synonymCount: number;
    };
    toJSON(): {
        name: string;
        displayName: string;
        kind: EntityType.Kind;
        autoExpansionMode: EntityType.AutoExpansionMode;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        nextPageToken: string;
        entityCount: number;
        status: EntityType.EntityTypeStatus;
        synonymCount: number;
    };
}
export declare module EntityType {
    enum Kind {
        kindUnspecified = 0,
        kindMap = 1,
        kindList = 2
    }
    enum EntityTypeStatus {
        active = 0,
        inactive = 1
    }
    enum AutoExpansionMode {
        autoExpansionModeUnspecified = 0,
        autoExpansionModeDefault = 1
    }
    class Entity implements GrpcMessage {
        static toBinary(instance: Entity): any;
        static fromBinary(bytes: ByteSource): Entity;
        static refineValues(instance: Entity): void;
        static fromBinaryReader(instance: Entity, reader: BinaryReader): void;
        static toBinaryWriter(instance: Entity, writer: BinaryWriter): void;
        private _value?;
        private _synonyms?;
        private _name?;
        private _displayName?;
        private _synonymCount?;
        /**
         * Creates an object and applies default Protobuf values
         * @param Entity value
         */
        constructor(value?: RecursivePartial<Entity>);
        get value(): string | undefined;
        set value(value: string | undefined);
        get synonyms(): string[] | undefined;
        set synonyms(value: string[] | undefined);
        get name(): string | undefined;
        set name(value: string | undefined);
        get displayName(): string | undefined;
        set displayName(value: string | undefined);
        get synonymCount(): number | undefined;
        set synonymCount(value: number | undefined);
        toObject(): {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        };
        toJSON(): {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        };
    }
    module Entity { }
}
export declare class ListEntityTypesRequest implements GrpcMessage {
    static toBinary(instance: ListEntityTypesRequest): any;
    static fromBinary(bytes: ByteSource): ListEntityTypesRequest;
    static refineValues(instance: ListEntityTypesRequest): void;
    static fromBinaryReader(instance: ListEntityTypesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListEntityTypesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCode?;
    private _pageToken?;
    private _entityTypeView?;
    private _filterByCategory?;
    private _sortByField?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesRequest value
     */
    constructor(value?: RecursivePartial<ListEntityTypesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get entityTypeView(): EntityTypeView | undefined;
    set entityTypeView(value: EntityTypeView | undefined);
    get filterByCategory(): EntityTypeCategory | undefined;
    set filterByCategory(value: EntityTypeCategory | undefined);
    get sortByField(): EntityTypeSorting | undefined;
    set sortByField(value: EntityTypeSorting | undefined);
    toObject(): {
        parent: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: EntityTypeView;
        filterByCategory: EntityTypeCategory;
        sortByField: {
            sortingField: EntityTypeSorting.EntityTypeSortingField;
            sortingMode: ondewoNlu004.SortingMode;
        };
    };
    toJSON(): {
        parent: string;
        languageCode: string;
        pageToken: string;
        entityTypeView: EntityTypeView;
        filterByCategory: EntityTypeCategory;
        sortByField: {
            sortingField: EntityTypeSorting.EntityTypeSortingField;
            sortingMode: ondewoNlu004.SortingMode;
        };
    };
}
export declare module ListEntityTypesRequest { }
export declare class ListEntityTypesResponse implements GrpcMessage {
    static toBinary(instance: ListEntityTypesResponse): any;
    static fromBinary(bytes: ByteSource): ListEntityTypesResponse;
    static refineValues(instance: ListEntityTypesResponse): void;
    static fromBinaryReader(instance: ListEntityTypesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListEntityTypesResponse, writer: BinaryWriter): void;
    private _entityTypes?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesResponse value
     */
    constructor(value?: RecursivePartial<ListEntityTypesResponse>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
        nextPageToken: string;
    };
}
export declare module ListEntityTypesResponse { }
export declare class GetEntityTypeRequest implements GrpcMessage {
    static toBinary(instance: GetEntityTypeRequest): any;
    static fromBinary(bytes: ByteSource): GetEntityTypeRequest;
    static refineValues(instance: GetEntityTypeRequest): void;
    static fromBinaryReader(instance: GetEntityTypeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetEntityTypeRequest, writer: BinaryWriter): void;
    private _name?;
    private _languageCode?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetEntityTypeRequest value
     */
    constructor(value?: RecursivePartial<GetEntityTypeRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        name: string;
        languageCode: string;
        pageToken: string;
    };
    toJSON(): {
        name: string;
        languageCode: string;
        pageToken: string;
    };
}
export declare module GetEntityTypeRequest { }
export declare class CreateEntityTypeRequest implements GrpcMessage {
    static toBinary(instance: CreateEntityTypeRequest): any;
    static fromBinary(bytes: ByteSource): CreateEntityTypeRequest;
    static refineValues(instance: CreateEntityTypeRequest): void;
    static fromBinaryReader(instance: CreateEntityTypeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateEntityTypeRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entityType?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateEntityTypeRequest value
     */
    constructor(value?: RecursivePartial<CreateEntityTypeRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        entityType: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        entityType: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        languageCode: string;
    };
}
export declare module CreateEntityTypeRequest { }
export declare class UpdateEntityTypeRequest implements GrpcMessage {
    static toBinary(instance: UpdateEntityTypeRequest): any;
    static fromBinary(bytes: ByteSource): UpdateEntityTypeRequest;
    static refineValues(instance: UpdateEntityTypeRequest): void;
    static fromBinaryReader(instance: UpdateEntityTypeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateEntityTypeRequest, writer: BinaryWriter): void;
    private _entityType?;
    private _languageCode?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateEntityTypeRequest value
     */
    constructor(value?: RecursivePartial<UpdateEntityTypeRequest>);
    get entityType(): EntityType | undefined;
    set entityType(value: EntityType | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf003.FieldMask | undefined;
    set updateMask(value: googleProtobuf003.FieldMask | undefined);
    toObject(): {
        entityType: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        entityType: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
}
export declare module UpdateEntityTypeRequest { }
export declare class DeleteEntityTypeRequest implements GrpcMessage {
    static toBinary(instance: DeleteEntityTypeRequest): any;
    static fromBinary(bytes: ByteSource): DeleteEntityTypeRequest;
    static refineValues(instance: DeleteEntityTypeRequest): void;
    static fromBinaryReader(instance: DeleteEntityTypeRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteEntityTypeRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteEntityTypeRequest value
     */
    constructor(value?: RecursivePartial<DeleteEntityTypeRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module DeleteEntityTypeRequest { }
export declare class BatchUpdateEntityTypesRequest implements GrpcMessage {
    static toBinary(instance: BatchUpdateEntityTypesRequest): any;
    static fromBinary(bytes: ByteSource): BatchUpdateEntityTypesRequest;
    static refineValues(instance: BatchUpdateEntityTypesRequest): void;
    static fromBinaryReader(instance: BatchUpdateEntityTypesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchUpdateEntityTypesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeBatchUri?;
    private _entityTypeBatchInline?;
    private _languageCode?;
    private _updateMask?;
    private _entityTypeBatch;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesRequest value
     */
    constructor(value?: RecursivePartial<BatchUpdateEntityTypesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeBatchUri(): string | undefined;
    set entityTypeBatchUri(value: string | undefined);
    get entityTypeBatchInline(): EntityTypeBatch | undefined;
    set entityTypeBatchInline(value: EntityTypeBatch | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf003.FieldMask | undefined;
    set updateMask(value: googleProtobuf003.FieldMask | undefined);
    get entityTypeBatch(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;
    toObject(): {
        parent: string;
        entityTypeBatchUri: string;
        entityTypeBatchInline: {
            entityTypes: {
                name: string;
                displayName: string;
                kind: EntityType.Kind;
                autoExpansionMode: EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        parent: string;
        entityTypeBatchUri: string;
        entityTypeBatchInline: {
            entityTypes: {
                name: string;
                displayName: string;
                kind: EntityType.Kind;
                autoExpansionMode: EntityType.AutoExpansionMode;
                entities: {
                    value: string;
                    synonyms: string[];
                    name: string;
                    displayName: string;
                    synonymCount: number;
                }[];
                nextPageToken: string;
                entityCount: number;
                status: EntityType.EntityTypeStatus;
                synonymCount: number;
            }[];
        };
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
}
export declare module BatchUpdateEntityTypesRequest {
    enum EntityTypeBatchCase {
        none = 0,
        entityTypeBatchUri = 1,
        entityTypeBatchInline = 2
    }
}
export declare class BatchUpdateEntityTypesResponse implements GrpcMessage {
    static toBinary(instance: BatchUpdateEntityTypesResponse): any;
    static fromBinary(bytes: ByteSource): BatchUpdateEntityTypesResponse;
    static refineValues(instance: BatchUpdateEntityTypesResponse): void;
    static fromBinaryReader(instance: BatchUpdateEntityTypesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchUpdateEntityTypesResponse, writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesResponse value
     */
    constructor(value?: RecursivePartial<BatchUpdateEntityTypesResponse>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    toObject(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
    };
    toJSON(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
    };
}
export declare module BatchUpdateEntityTypesResponse { }
export declare class BatchDeleteEntityTypesRequest implements GrpcMessage {
    static toBinary(instance: BatchDeleteEntityTypesRequest): any;
    static fromBinary(bytes: ByteSource): BatchDeleteEntityTypesRequest;
    static refineValues(instance: BatchDeleteEntityTypesRequest): void;
    static fromBinaryReader(instance: BatchDeleteEntityTypesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchDeleteEntityTypesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entityTypeNames?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntityTypesRequest value
     */
    constructor(value?: RecursivePartial<BatchDeleteEntityTypesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityTypeNames(): string[] | undefined;
    set entityTypeNames(value: string[] | undefined);
    toObject(): {
        parent: string;
        entityTypeNames: string[];
    };
    toJSON(): {
        parent: string;
        entityTypeNames: string[];
    };
}
export declare module BatchDeleteEntityTypesRequest { }
export declare class BatchCreateEntitiesRequest implements GrpcMessage {
    static toBinary(instance: BatchCreateEntitiesRequest): any;
    static fromBinary(bytes: ByteSource): BatchCreateEntitiesRequest;
    static refineValues(instance: BatchCreateEntitiesRequest): void;
    static fromBinaryReader(instance: BatchCreateEntitiesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchCreateEntitiesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entities?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchCreateEntitiesRequest value
     */
    constructor(value?: RecursivePartial<BatchCreateEntitiesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        languageCode: string;
    };
}
export declare module BatchCreateEntitiesRequest { }
export declare class BatchUpdateEntitiesRequest implements GrpcMessage {
    static toBinary(instance: BatchUpdateEntitiesRequest): any;
    static fromBinary(bytes: ByteSource): BatchUpdateEntitiesRequest;
    static refineValues(instance: BatchUpdateEntitiesRequest): void;
    static fromBinaryReader(instance: BatchUpdateEntitiesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchUpdateEntitiesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entities?;
    private _languageCode?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntitiesRequest value
     */
    constructor(value?: RecursivePartial<BatchUpdateEntitiesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entities(): EntityType.Entity[] | undefined;
    set entities(value: EntityType.Entity[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get updateMask(): googleProtobuf003.FieldMask | undefined;
    set updateMask(value: googleProtobuf003.FieldMask | undefined);
    toObject(): {
        parent: string;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        parent: string;
        entities: {
            value: string;
            synonyms: string[];
            name: string;
            displayName: string;
            synonymCount: number;
        }[];
        languageCode: string;
        updateMask: {
            paths: string[];
        };
    };
}
export declare module BatchUpdateEntitiesRequest { }
export declare class BatchDeleteEntitiesRequest implements GrpcMessage {
    static toBinary(instance: BatchDeleteEntitiesRequest): any;
    static fromBinary(bytes: ByteSource): BatchDeleteEntitiesRequest;
    static refineValues(instance: BatchDeleteEntitiesRequest): void;
    static fromBinaryReader(instance: BatchDeleteEntitiesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BatchDeleteEntitiesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _entityValues?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntitiesRequest value
     */
    constructor(value?: RecursivePartial<BatchDeleteEntitiesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get entityValues(): string[] | undefined;
    set entityValues(value: string[] | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        entityValues: string[];
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        entityValues: string[];
        languageCode: string;
    };
}
export declare module BatchDeleteEntitiesRequest { }
export declare class EntityTypeBatch implements GrpcMessage {
    static toBinary(instance: EntityTypeBatch): any;
    static fromBinary(bytes: ByteSource): EntityTypeBatch;
    static refineValues(instance: EntityTypeBatch): void;
    static fromBinaryReader(instance: EntityTypeBatch, reader: BinaryReader): void;
    static toBinaryWriter(instance: EntityTypeBatch, writer: BinaryWriter): void;
    private _entityTypes?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeBatch value
     */
    constructor(value?: RecursivePartial<EntityTypeBatch>);
    get entityTypes(): EntityType[] | undefined;
    set entityTypes(value: EntityType[] | undefined);
    toObject(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
    };
    toJSON(): {
        entityTypes: {
            name: string;
            displayName: string;
            kind: EntityType.Kind;
            autoExpansionMode: EntityType.AutoExpansionMode;
            entities: {
                value: string;
                synonyms: string[];
                name: string;
                displayName: string;
                synonymCount: number;
            }[];
            nextPageToken: string;
            entityCount: number;
            status: EntityType.EntityTypeStatus;
            synonymCount: number;
        }[];
    };
}
export declare module EntityTypeBatch { }
export declare class EntityTypeSorting implements GrpcMessage {
    static toBinary(instance: EntityTypeSorting): any;
    static fromBinary(bytes: ByteSource): EntityTypeSorting;
    static refineValues(instance: EntityTypeSorting): void;
    static fromBinaryReader(instance: EntityTypeSorting, reader: BinaryReader): void;
    static toBinaryWriter(instance: EntityTypeSorting, writer: BinaryWriter): void;
    private _sortingField?;
    private _sortingMode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeSorting value
     */
    constructor(value?: RecursivePartial<EntityTypeSorting>);
    get sortingField(): EntityTypeSorting.EntityTypeSortingField | undefined;
    set sortingField(value: EntityTypeSorting.EntityTypeSortingField | undefined);
    get sortingMode(): ondewoNlu004.SortingMode | undefined;
    set sortingMode(value: ondewoNlu004.SortingMode | undefined);
    toObject(): {
        sortingField: EntityTypeSorting.EntityTypeSortingField;
        sortingMode: ondewoNlu004.SortingMode;
    };
    toJSON(): {
        sortingField: EntityTypeSorting.EntityTypeSortingField;
        sortingMode: ondewoNlu004.SortingMode;
    };
}
export declare module EntityTypeSorting {
    enum EntityTypeSortingField {
        noEntityTypeSorting = 0,
        sortEntityTypeByName = 1,
        sortEntityTypeByCreationDate = 2,
        sortEntityTypeByLastUpdated = 3,
        sortEntityTypeByEntityValueCount = 4,
        sortEntityTypeBySynonymCount = 5
    }
}
