import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf003 from '../../google/protobuf/field-mask.pb';
export var EntityTypeView;
(function (EntityTypeView) {
    EntityTypeView[EntityTypeView["entityTypeViewUnspecified"] = 0] = "entityTypeViewUnspecified";
    EntityTypeView[EntityTypeView["entityTypeViewFull"] = 1] = "entityTypeViewFull";
    EntityTypeView[EntityTypeView["entityTypeViewPartial"] = 2] = "entityTypeViewPartial";
    EntityTypeView[EntityTypeView["entityTypeViewShallow"] = 3] = "entityTypeViewShallow";
})(EntityTypeView || (EntityTypeView = {}));
export var EntityTypeCategory;
(function (EntityTypeCategory) {
    EntityTypeCategory[EntityTypeCategory["allEntityTypes"] = 0] = "allEntityTypes";
    EntityTypeCategory[EntityTypeCategory["defaultEntityTypes"] = 1] = "defaultEntityTypes";
    EntityTypeCategory[EntityTypeCategory["userDefinedEntityTypes"] = 2] = "userDefinedEntityTypes";
})(EntityTypeCategory || (EntityTypeCategory = {}));
export class EntityType {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityType value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.displayName = value.displayName;
        this.kind = value.kind;
        this.autoExpansionMode = value.autoExpansionMode;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.nextPageToken = value.nextPageToken;
        this.entityCount = value.entityCount;
        this.status = value.status;
        this.synonymCount = value.synonymCount;
        EntityType.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityType.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityType();
        EntityType.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.displayName = instance.displayName || '';
        instance.kind = instance.kind || 0;
        instance.autoExpansionMode = instance.autoExpansionMode || 0;
        instance.entities = instance.entities || [];
        instance.nextPageToken = instance.nextPageToken || '';
        instance.entityCount = instance.entityCount || 0;
        instance.status = instance.status || 0;
        instance.synonymCount = instance.synonymCount || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.displayName = reader.readString();
                    break;
                case 3:
                    instance.kind = reader.readEnum();
                    break;
                case 4:
                    instance.autoExpansionMode = reader.readEnum();
                    break;
                case 6:
                    const messageInitializer6 = new EntityType.Entity();
                    reader.readMessage(messageInitializer6, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer6);
                    break;
                case 10:
                    instance.nextPageToken = reader.readString();
                    break;
                case 11:
                    instance.entityCount = reader.readInt32();
                    break;
                case 12:
                    instance.status = reader.readEnum();
                    break;
                case 13:
                    instance.synonymCount = reader.readInt32();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityType.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.kind) {
            writer.writeEnum(3, instance.kind);
        }
        if (instance.autoExpansionMode) {
            writer.writeEnum(4, instance.autoExpansionMode);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(6, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(10, instance.nextPageToken);
        }
        if (instance.entityCount) {
            writer.writeInt32(11, instance.entityCount);
        }
        if (instance.status) {
            writer.writeEnum(12, instance.status);
        }
        if (instance.synonymCount) {
            writer.writeInt32(13, instance.synonymCount);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get autoExpansionMode() {
        return this._autoExpansionMode;
    }
    set autoExpansionMode(value) {
        this._autoExpansionMode = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    get entityCount() {
        return this._entityCount;
    }
    set entityCount(value) {
        this._entityCount = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get synonymCount() {
        return this._synonymCount;
    }
    set synonymCount(value) {
        this._synonymCount = value;
    }
    toObject() {
        return {
            name: this.name,
            displayName: this.displayName,
            kind: this.kind,
            autoExpansionMode: this.autoExpansionMode,
            entities: (this.entities || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken,
            entityCount: this.entityCount,
            status: this.status,
            synonymCount: this.synonymCount
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EntityType) {
    let Kind;
    (function (Kind) {
        Kind[Kind["kindUnspecified"] = 0] = "kindUnspecified";
        Kind[Kind["kindMap"] = 1] = "kindMap";
        Kind[Kind["kindList"] = 2] = "kindList";
    })(Kind = EntityType.Kind || (EntityType.Kind = {}));
    let EntityTypeStatus;
    (function (EntityTypeStatus) {
        EntityTypeStatus[EntityTypeStatus["active"] = 0] = "active";
        EntityTypeStatus[EntityTypeStatus["inactive"] = 1] = "inactive";
    })(EntityTypeStatus = EntityType.EntityTypeStatus || (EntityType.EntityTypeStatus = {}));
    let AutoExpansionMode;
    (function (AutoExpansionMode) {
        AutoExpansionMode[AutoExpansionMode["autoExpansionModeUnspecified"] = 0] = "autoExpansionModeUnspecified";
        AutoExpansionMode[AutoExpansionMode["autoExpansionModeDefault"] = 1] = "autoExpansionModeDefault";
    })(AutoExpansionMode = EntityType.AutoExpansionMode || (EntityType.AutoExpansionMode = {}));
    class Entity {
        /**
         * Creates an object and applies default Protobuf values
         * @param Entity value
         */
        constructor(value) {
            value = value || {};
            this.value = value.value;
            this.synonyms = (value.synonyms || []).slice();
            this.name = value.name;
            this.displayName = value.displayName;
            this.synonymCount = value.synonymCount;
            Entity.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Entity.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Entity();
            Entity.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.value = instance.value || '';
            instance.synonyms = instance.synonyms || [];
            instance.name = instance.name || '';
            instance.displayName = instance.displayName || '';
            instance.synonymCount = instance.synonymCount || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.value = reader.readString();
                        break;
                    case 2:
                        (instance.synonyms = instance.synonyms || []).push(reader.readString());
                        break;
                    case 3:
                        instance.name = reader.readString();
                        break;
                    case 4:
                        instance.displayName = reader.readString();
                        break;
                    case 5:
                        instance.synonymCount = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Entity.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.value) {
                writer.writeString(1, instance.value);
            }
            if (instance.synonyms && instance.synonyms.length) {
                writer.writeRepeatedString(2, instance.synonyms);
            }
            if (instance.name) {
                writer.writeString(3, instance.name);
            }
            if (instance.displayName) {
                writer.writeString(4, instance.displayName);
            }
            if (instance.synonymCount) {
                writer.writeInt32(5, instance.synonymCount);
            }
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        get synonyms() {
            return this._synonyms;
        }
        set synonyms(value) {
            this._synonyms = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get displayName() {
            return this._displayName;
        }
        set displayName(value) {
            this._displayName = value;
        }
        get synonymCount() {
            return this._synonymCount;
        }
        set synonymCount(value) {
            this._synonymCount = value;
        }
        toObject() {
            return {
                value: this.value,
                synonyms: (this.synonyms || []).slice(),
                name: this.name,
                displayName: this.displayName,
                synonymCount: this.synonymCount
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    EntityType.Entity = Entity;
})(EntityType || (EntityType = {}));
export class ListEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCode = value.languageCode;
        this.pageToken = value.pageToken;
        this.entityTypeView = value.entityTypeView;
        this.filterByCategory = value.filterByCategory;
        this.sortByField = value.sortByField
            ? new EntityTypeSorting(value.sortByField)
            : undefined;
        ListEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListEntityTypesRequest();
        ListEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.pageToken = instance.pageToken || '';
        instance.entityTypeView = instance.entityTypeView || 0;
        instance.filterByCategory = instance.filterByCategory || 0;
        instance.sortByField = instance.sortByField || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.pageToken = reader.readString();
                    break;
                case 5:
                    instance.entityTypeView = reader.readEnum();
                    break;
                case 6:
                    instance.filterByCategory = reader.readEnum();
                    break;
                case 7:
                    instance.sortByField = new EntityTypeSorting();
                    reader.readMessage(instance.sortByField, EntityTypeSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.pageToken) {
            writer.writeString(4, instance.pageToken);
        }
        if (instance.entityTypeView) {
            writer.writeEnum(5, instance.entityTypeView);
        }
        if (instance.filterByCategory) {
            writer.writeEnum(6, instance.filterByCategory);
        }
        if (instance.sortByField) {
            writer.writeMessage(7, instance.sortByField, EntityTypeSorting.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get entityTypeView() {
        return this._entityTypeView;
    }
    set entityTypeView(value) {
        this._entityTypeView = value;
    }
    get filterByCategory() {
        return this._filterByCategory;
    }
    set filterByCategory(value) {
        this._filterByCategory = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCode: this.languageCode,
            pageToken: this.pageToken,
            entityTypeView: this.entityTypeView,
            filterByCategory: this.filterByCategory,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListEntityTypesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListEntityTypesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        this.nextPageToken = value.nextPageToken;
        ListEntityTypesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListEntityTypesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListEntityTypesResponse();
        ListEntityTypesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListEntityTypesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.languageCode = value.languageCode;
        this.pageToken = value.pageToken;
        GetEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetEntityTypeRequest();
        GetEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.languageCode = instance.languageCode || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.pageToken) {
            writer.writeString(5, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            name: this.name,
            languageCode: this.languageCode,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CreateEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityType = value.entityType
            ? new EntityType(value.entityType)
            : undefined;
        this.languageCode = value.languageCode;
        CreateEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateEntityTypeRequest();
        CreateEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityType = instance.entityType || undefined;
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.entityType = new EntityType();
                    reader.readMessage(instance.entityType, EntityType.fromBinaryReader);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityType) {
            writer.writeMessage(2, instance.entityType, EntityType.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityType: this.entityType ? this.entityType.toObject() : undefined,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.entityType = value.entityType
            ? new EntityType(value.entityType)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new googleProtobuf003.FieldMask(value.updateMask)
            : undefined;
        UpdateEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateEntityTypeRequest();
        UpdateEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityType = instance.entityType || undefined;
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.entityType = new EntityType();
                    reader.readMessage(instance.entityType, EntityType.fromBinaryReader);
                    break;
                case 2:
                    instance.languageCode = reader.readString();
                    break;
                case 3:
                    instance.updateMask = new googleProtobuf003.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf003.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityType) {
            writer.writeMessage(1, instance.entityType, EntityType.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(2, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, googleProtobuf003.FieldMask.toBinaryWriter);
        }
    }
    get entityType() {
        return this._entityType;
    }
    set entityType(value) {
        this._entityType = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            entityType: this.entityType ? this.entityType.toObject() : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteEntityTypeRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteEntityTypeRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteEntityTypeRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteEntityTypeRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteEntityTypeRequest();
        DeleteEntityTypeRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteEntityTypeRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toObject() {
        return {
            name: this.name
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchUpdateEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesRequest value
     */
    constructor(value) {
        this._entityTypeBatch = BatchUpdateEntityTypesRequest.EntityTypeBatchCase.none;
        value = value || {};
        this.parent = value.parent;
        this.entityTypeBatchUri = value.entityTypeBatchUri;
        this.entityTypeBatchInline = value.entityTypeBatchInline
            ? new EntityTypeBatch(value.entityTypeBatchInline)
            : undefined;
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new googleProtobuf003.FieldMask(value.updateMask)
            : undefined;
        BatchUpdateEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntityTypesRequest();
        BatchUpdateEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.entityTypeBatchUri = reader.readString();
                    break;
                case 3:
                    instance.entityTypeBatchInline = new EntityTypeBatch();
                    reader.readMessage(instance.entityTypeBatchInline, EntityTypeBatch.fromBinaryReader);
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.updateMask = new googleProtobuf003.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf003.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityTypeBatchUri || instance.entityTypeBatchUri === '') {
            writer.writeString(2, instance.entityTypeBatchUri);
        }
        if (instance.entityTypeBatchInline) {
            writer.writeMessage(3, instance.entityTypeBatchInline, EntityTypeBatch.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(5, instance.updateMask, googleProtobuf003.FieldMask.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityTypeBatchUri() {
        return this._entityTypeBatchUri;
    }
    set entityTypeBatchUri(value) {
        if (value !== undefined && value !== null) {
            this._entityTypeBatchInline = undefined;
            this._entityTypeBatch =
                BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchUri;
        }
        this._entityTypeBatchUri = value;
    }
    get entityTypeBatchInline() {
        return this._entityTypeBatchInline;
    }
    set entityTypeBatchInline(value) {
        if (value !== undefined && value !== null) {
            this._entityTypeBatchUri = undefined;
            this._entityTypeBatch =
                BatchUpdateEntityTypesRequest.EntityTypeBatchCase.entityTypeBatchInline;
        }
        this._entityTypeBatchInline = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    get entityTypeBatch() {
        return this._entityTypeBatch;
    }
    toObject() {
        return {
            parent: this.parent,
            entityTypeBatchUri: this.entityTypeBatchUri,
            entityTypeBatchInline: this.entityTypeBatchInline
                ? this.entityTypeBatchInline.toObject()
                : undefined,
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (BatchUpdateEntityTypesRequest) {
    let EntityTypeBatchCase;
    (function (EntityTypeBatchCase) {
        EntityTypeBatchCase[EntityTypeBatchCase["none"] = 0] = "none";
        EntityTypeBatchCase[EntityTypeBatchCase["entityTypeBatchUri"] = 1] = "entityTypeBatchUri";
        EntityTypeBatchCase[EntityTypeBatchCase["entityTypeBatchInline"] = 2] = "entityTypeBatchInline";
    })(EntityTypeBatchCase = BatchUpdateEntityTypesRequest.EntityTypeBatchCase || (BatchUpdateEntityTypesRequest.EntityTypeBatchCase = {}));
})(BatchUpdateEntityTypesRequest || (BatchUpdateEntityTypesRequest = {}));
export class BatchUpdateEntityTypesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntityTypesResponse value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        BatchUpdateEntityTypesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntityTypesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntityTypesResponse();
        BatchUpdateEntityTypesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntityTypesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchDeleteEntityTypesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntityTypesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityTypeNames = (value.entityTypeNames || []).slice();
        BatchDeleteEntityTypesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteEntityTypesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteEntityTypesRequest();
        BatchDeleteEntityTypesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityTypeNames = instance.entityTypeNames || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.entityTypeNames = instance.entityTypeNames || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteEntityTypesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityTypeNames && instance.entityTypeNames.length) {
            writer.writeRepeatedString(2, instance.entityTypeNames);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityTypeNames() {
        return this._entityTypeNames;
    }
    set entityTypeNames(value) {
        this._entityTypeNames = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityTypeNames: (this.entityTypeNames || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchCreateEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchCreateEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.languageCode = value.languageCode;
        BatchCreateEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchCreateEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchCreateEntitiesRequest();
        BatchCreateEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entities = instance.entities || [];
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityType.Entity();
                    reader.readMessage(messageInitializer2, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchCreateEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(2, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entities: (this.entities || []).map(m => m.toObject()),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchUpdateEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchUpdateEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entities = (value.entities || []).map(m => new EntityType.Entity(m));
        this.languageCode = value.languageCode;
        this.updateMask = value.updateMask
            ? new googleProtobuf003.FieldMask(value.updateMask)
            : undefined;
        BatchUpdateEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchUpdateEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchUpdateEntitiesRequest();
        BatchUpdateEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entities = instance.entities || [];
        instance.languageCode = instance.languageCode || '';
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EntityType.Entity();
                    reader.readMessage(messageInitializer2, EntityType.Entity.fromBinaryReader);
                    (instance.entities = instance.entities || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.updateMask = new googleProtobuf003.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf003.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchUpdateEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entities && instance.entities.length) {
            writer.writeRepeatedMessage(2, instance.entities, EntityType.Entity.toBinaryWriter);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.updateMask) {
            writer.writeMessage(4, instance.updateMask, googleProtobuf003.FieldMask.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entities() {
        return this._entities;
    }
    set entities(value) {
        this._entities = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entities: (this.entities || []).map(m => m.toObject()),
            languageCode: this.languageCode,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BatchDeleteEntitiesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BatchDeleteEntitiesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.entityValues = (value.entityValues || []).slice();
        this.languageCode = value.languageCode;
        BatchDeleteEntitiesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BatchDeleteEntitiesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BatchDeleteEntitiesRequest();
        BatchDeleteEntitiesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.entityValues = instance.entityValues || [];
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.entityValues = instance.entityValues || []).push(reader.readString());
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BatchDeleteEntitiesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.entityValues && instance.entityValues.length) {
            writer.writeRepeatedString(2, instance.entityValues);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get entityValues() {
        return this._entityValues;
    }
    set entityValues(value) {
        this._entityValues = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            entityValues: (this.entityValues || []).slice(),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EntityTypeBatch {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeBatch value
     */
    constructor(value) {
        value = value || {};
        this.entityTypes = (value.entityTypes || []).map(m => new EntityType(m));
        EntityTypeBatch.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityTypeBatch.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityTypeBatch();
        EntityTypeBatch.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.entityTypes = instance.entityTypes || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new EntityType();
                    reader.readMessage(messageInitializer1, EntityType.fromBinaryReader);
                    (instance.entityTypes = instance.entityTypes || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityTypeBatch.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.entityTypes && instance.entityTypes.length) {
            writer.writeRepeatedMessage(1, instance.entityTypes, EntityType.toBinaryWriter);
        }
    }
    get entityTypes() {
        return this._entityTypes;
    }
    set entityTypes(value) {
        this._entityTypes = value;
    }
    toObject() {
        return {
            entityTypes: (this.entityTypes || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EntityTypeSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param EntityTypeSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        EntityTypeSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EntityTypeSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EntityTypeSorting();
        EntityTypeSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        EntityTypeSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EntityTypeSorting) {
    let EntityTypeSortingField;
    (function (EntityTypeSortingField) {
        EntityTypeSortingField[EntityTypeSortingField["noEntityTypeSorting"] = 0] = "noEntityTypeSorting";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByName"] = 1] = "sortEntityTypeByName";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByCreationDate"] = 2] = "sortEntityTypeByCreationDate";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByLastUpdated"] = 3] = "sortEntityTypeByLastUpdated";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeByEntityValueCount"] = 4] = "sortEntityTypeByEntityValueCount";
        EntityTypeSortingField[EntityTypeSortingField["sortEntityTypeBySynonymCount"] = 5] = "sortEntityTypeBySynonymCount";
    })(EntityTypeSortingField = EntityTypeSorting.EntityTypeSortingField || (EntityTypeSorting.EntityTypeSortingField = {}));
})(EntityTypeSorting || (EntityTypeSorting = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9lbnRpdHktdHlwZS5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBSXpFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUV6RSxNQUFNLENBQU4sSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLDZGQUE2QixDQUFBO0lBQzdCLCtFQUFzQixDQUFBO0lBQ3RCLHFGQUF5QixDQUFBO0lBQ3pCLHFGQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQUNELE1BQU0sQ0FBTixJQUFZLGtCQUlYO0FBSkQsV0FBWSxrQkFBa0I7SUFDNUIsK0VBQWtCLENBQUE7SUFDbEIsdUZBQXNCLENBQUE7SUFDdEIsK0ZBQTBCLENBQUE7QUFDNUIsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFDRCxNQUFNLE9BQU8sVUFBVTtJQW9IckI7OztPQUdHO0lBQ0gsWUFBWSxLQUFvQztRQUM5QyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksVUFB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LyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEdycGNNZXNzYWdlLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVMb25ncnVubmluZzAwMSBmcm9tICcuLi8uLi9nb29nbGUvbG9uZ3J1bm5pbmcvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDMgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2ZpZWxkLW1hc2sucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA0IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmV4cG9ydCBlbnVtIEVudGl0eVR5cGVWaWV3IHtcbiAgZW50aXR5VHlwZVZpZXdVbnNwZWNpZmllZCA9IDAsXG4gIGVudGl0eVR5cGVWaWV3RnVsbCA9IDEsXG4gIGVudGl0eVR5cGVWaWV3UGFydGlhbCA9IDIsXG4gIGVudGl0eVR5cGVWaWV3U2hhbGxvdyA9IDNcbn1cbmV4cG9ydCBlbnVtIEVudGl0eVR5cGVDYXRlZ29yeSB7XG4gIGFsbEVudGl0eVR5cGVzID0gMCxcbiAgZGVmYXVsdEVudGl0eVR5cGVzID0gMSxcbiAgdXNlckRlZmluZWRFbnRpdHlUeXBlcyA9IDJcbn1cbmV4cG9ydCBjbGFzcyBFbnRpdHlUeXBlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEVudGl0eVR5cGUpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRW50aXR5VHlwZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnRpdHlUeXBlKCk7XG4gICAgRW50aXR5VHlwZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRW50aXR5VHlwZSkge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmRpc3BsYXlOYW1lID0gaW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2Uua2luZCA9IGluc3RhbmNlLmtpbmQgfHwgMDtcbiAgICBpbnN0YW5jZS5hdXRvRXhwYW5zaW9uTW9kZSA9IGluc3RhbmNlLmF1dG9FeHBhbnNpb25Nb2RlIHx8IDA7XG4gICAgaW5zdGFuY2UuZW50aXRpZXMgPSBpbnN0YW5jZS5lbnRpdGllcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiB8fCAnJztcbiAgICBpbnN0YW5jZS5lbnRpdHlDb3VudCA9IGluc3RhbmNlLmVudGl0eUNvdW50IHx8IDA7XG4gICAgaW5zdGFuY2Uuc3RhdHVzID0gaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gICAgaW5zdGFuY2Uuc3lub255bUNvdW50ID0gaW5zdGFuY2Uuc3lub255bUNvdW50IHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRW50aXR5VHlwZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uua2luZCA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuYXV0b0V4cGFuc2lvbk1vZGUgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjYgPSBuZXcgRW50aXR5VHlwZS5FbnRpdHkoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI2LFxuICAgICAgICAgICAgRW50aXR5VHlwZS5FbnRpdHkuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmVudGl0aWVzID0gaW5zdGFuY2UuZW50aXRpZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI2XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlDb3VudCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0dXMgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBpbnN0YW5jZS5zeW5vbnltQ291bnQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVudGl0eVR5cGUucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRW50aXR5VHlwZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGlzcGxheU5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5kaXNwbGF5TmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5raW5kKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLmtpbmQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYXV0b0V4cGFuc2lvbk1vZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oNCwgaW5zdGFuY2UuYXV0b0V4cGFuc2lvbk1vZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXRpZXMgJiYgaW5zdGFuY2UuZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIGluc3RhbmNlLmVudGl0aWVzIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZS5FbnRpdHkudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTAsIGluc3RhbmNlLm5leHRQYWdlVG9rZW4pO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5Q291bnQpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDExLCBpbnN0YW5jZS5lbnRpdHlDb3VudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdGF0dXMpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMTIsIGluc3RhbmNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zeW5vbnltQ291bnQpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDEzLCBpbnN0YW5jZS5zeW5vbnltQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9raW5kPzogRW50aXR5VHlwZS5LaW5kO1xuICBwcml2YXRlIF9hdXRvRXhwYW5zaW9uTW9kZT86IEVudGl0eVR5cGUuQXV0b0V4cGFuc2lvbk1vZGU7XG4gIHByaXZhdGUgX2VudGl0aWVzPzogRW50aXR5VHlwZS5FbnRpdHlbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZW50aXR5Q291bnQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3N0YXR1cz86IEVudGl0eVR5cGUuRW50aXR5VHlwZVN0YXR1cztcbiAgcHJpdmF0ZSBfc3lub255bUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRW50aXR5VHlwZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVR5cGU+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSB2YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLmtpbmQgPSB2YWx1ZS5raW5kO1xuICAgIHRoaXMuYXV0b0V4cGFuc2lvbk1vZGUgPSB2YWx1ZS5hdXRvRXhwYW5zaW9uTW9kZTtcbiAgICB0aGlzLmVudGl0aWVzID0gKHZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBuZXcgRW50aXR5VHlwZS5FbnRpdHkobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgdGhpcy5lbnRpdHlDb3VudCA9IHZhbHVlLmVudGl0eUNvdW50O1xuICAgIHRoaXMuc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgIHRoaXMuc3lub255bUNvdW50ID0gdmFsdWUuc3lub255bUNvdW50O1xuICAgIEVudGl0eVR5cGUucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gIH1cbiAgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBraW5kKCk6IEVudGl0eVR5cGUuS2luZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gIH1cbiAgc2V0IGtpbmQodmFsdWU6IEVudGl0eVR5cGUuS2luZCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2tpbmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYXV0b0V4cGFuc2lvbk1vZGUoKTogRW50aXR5VHlwZS5BdXRvRXhwYW5zaW9uTW9kZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9FeHBhbnNpb25Nb2RlO1xuICB9XG4gIHNldCBhdXRvRXhwYW5zaW9uTW9kZSh2YWx1ZTogRW50aXR5VHlwZS5BdXRvRXhwYW5zaW9uTW9kZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2F1dG9FeHBhbnNpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0aWVzKCk6IEVudGl0eVR5cGUuRW50aXR5W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcztcbiAgfVxuICBzZXQgZW50aXRpZXModmFsdWU6IEVudGl0eVR5cGUuRW50aXR5W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdGllcyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5Q291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5Q291bnQ7XG4gIH1cbiAgc2V0IGVudGl0eUNvdW50KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlDb3VudCA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGF0dXMoKTogRW50aXR5VHlwZS5FbnRpdHlUeXBlU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IEVudGl0eVR5cGUuRW50aXR5VHlwZVN0YXR1cyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBzeW5vbnltQ291bnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3lub255bUNvdW50O1xuICB9XG4gIHNldCBzeW5vbnltQ291bnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N5bm9ueW1Db3VudCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIGF1dG9FeHBhbnNpb25Nb2RlOiB0aGlzLmF1dG9FeHBhbnNpb25Nb2RlLFxuICAgICAgZW50aXRpZXM6ICh0aGlzLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuLFxuICAgICAgZW50aXR5Q291bnQ6IHRoaXMuZW50aXR5Q291bnQsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3lub255bUNvdW50OiB0aGlzLnN5bm9ueW1Db3VudFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRW50aXR5VHlwZSB7XG4gIGV4cG9ydCBlbnVtIEtpbmQge1xuICAgIGtpbmRVbnNwZWNpZmllZCA9IDAsXG4gICAga2luZE1hcCA9IDEsXG4gICAga2luZExpc3QgPSAyXG4gIH1cbiAgZXhwb3J0IGVudW0gRW50aXR5VHlwZVN0YXR1cyB7XG4gICAgYWN0aXZlID0gMCxcbiAgICBpbmFjdGl2ZSA9IDFcbiAgfVxuICBleHBvcnQgZW51bSBBdXRvRXhwYW5zaW9uTW9kZSB7XG4gICAgYXV0b0V4cGFuc2lvbk1vZGVVbnNwZWNpZmllZCA9IDAsXG4gICAgYXV0b0V4cGFuc2lvbk1vZGVEZWZhdWx0ID0gMVxuICB9XG4gIGV4cG9ydCBjbGFzcyBFbnRpdHkgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFbnRpdHkpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIEVudGl0eS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudGl0eSgpO1xuICAgICAgRW50aXR5LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnRpdHkpIHtcbiAgICAgIGluc3RhbmNlLnZhbHVlID0gaW5zdGFuY2UudmFsdWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5zeW5vbnltcyA9IGluc3RhbmNlLnN5bm9ueW1zIHx8IFtdO1xuICAgICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IGluc3RhbmNlLmRpc3BsYXlOYW1lIHx8ICcnO1xuICAgICAgaW5zdGFuY2Uuc3lub255bUNvdW50ID0gaW5zdGFuY2Uuc3lub255bUNvdW50IHx8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudGl0eSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAoaW5zdGFuY2Uuc3lub255bXMgPSBpbnN0YW5jZS5zeW5vbnltcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaW5zdGFuY2UuZGlzcGxheU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaW5zdGFuY2Uuc3lub255bUNvdW50ID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBFbnRpdHkucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEVudGl0eSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS52YWx1ZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLnN5bm9ueW1zICYmIGluc3RhbmNlLnN5bm9ueW1zLmxlbmd0aCkge1xuICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBpbnN0YW5jZS5zeW5vbnltcyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS5zeW5vbnltQ291bnQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlSW50MzIoNSwgaW5zdGFuY2Uuc3lub255bUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF92YWx1ZT86IHN0cmluZztcbiAgICBwcml2YXRlIF9zeW5vbnltcz86IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc3lub255bUNvdW50PzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgKiBAcGFyYW0gRW50aXR5IHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eT4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgICB0aGlzLnN5bm9ueW1zID0gKHZhbHVlLnN5bm9ueW1zIHx8IFtdKS5zbGljZSgpO1xuICAgICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSB2YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICAgIHRoaXMuc3lub255bUNvdW50ID0gdmFsdWUuc3lub255bUNvdW50O1xuICAgICAgRW50aXR5LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc3lub255bXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX3N5bm9ueW1zO1xuICAgIH1cbiAgICBzZXQgc3lub255bXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zeW5vbnltcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHNldCBkaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc3lub255bUNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fc3lub255bUNvdW50O1xuICAgIH1cbiAgICBzZXQgc3lub255bUNvdW50KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N5bm9ueW1Db3VudCA9IHZhbHVlO1xuICAgIH1cbiAgICB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBzeW5vbnltczogKHRoaXMuc3lub255bXMgfHwgW10pLnNsaWNlKCksXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgIHN5bm9ueW1Db3VudDogdGhpcy5zeW5vbnltQ291bnRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgRW50aXR5IHt9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVudGl0eVR5cGVzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0RW50aXR5VHlwZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RFbnRpdHlUeXBlc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdEVudGl0eVR5cGVzUmVxdWVzdCgpO1xuICAgIExpc3RFbnRpdHlUeXBlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlVmlldyA9IGluc3RhbmNlLmVudGl0eVR5cGVWaWV3IHx8IDA7XG4gICAgaW5zdGFuY2UuZmlsdGVyQnlDYXRlZ29yeSA9IGluc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkgfHwgMDtcbiAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCA9IGluc3RhbmNlLnNvcnRCeUZpZWxkIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0RW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZVZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnNvcnRCeUZpZWxkID0gbmV3IEVudGl0eVR5cGVTb3J0aW5nKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uuc29ydEJ5RmllbGQsXG4gICAgICAgICAgICBFbnRpdHlUeXBlU29ydGluZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdEVudGl0eVR5cGVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0RW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnRpdHlUeXBlVmlldykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg1LCBpbnN0YW5jZS5lbnRpdHlUeXBlVmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5maWx0ZXJCeUNhdGVnb3J5KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDYsIGluc3RhbmNlLmZpbHRlckJ5Q2F0ZWdvcnkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc29ydEJ5RmllbGQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIGluc3RhbmNlLnNvcnRCeUZpZWxkIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZVNvcnRpbmcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZVZpZXc/OiBFbnRpdHlUeXBlVmlldztcbiAgcHJpdmF0ZSBfZmlsdGVyQnlDYXRlZ29yeT86IEVudGl0eVR5cGVDYXRlZ29yeTtcbiAgcHJpdmF0ZSBfc29ydEJ5RmllbGQ/OiBFbnRpdHlUeXBlU29ydGluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RFbnRpdHlUeXBlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0RW50aXR5VHlwZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYWdlVG9rZW4gPSB2YWx1ZS5wYWdlVG9rZW47XG4gICAgdGhpcy5lbnRpdHlUeXBlVmlldyA9IHZhbHVlLmVudGl0eVR5cGVWaWV3O1xuICAgIHRoaXMuZmlsdGVyQnlDYXRlZ29yeSA9IHZhbHVlLmZpbHRlckJ5Q2F0ZWdvcnk7XG4gICAgdGhpcy5zb3J0QnlGaWVsZCA9IHZhbHVlLnNvcnRCeUZpZWxkXG4gICAgICA/IG5ldyBFbnRpdHlUeXBlU29ydGluZyh2YWx1ZS5zb3J0QnlGaWVsZClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIExpc3RFbnRpdHlUeXBlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlVmlldygpOiBFbnRpdHlUeXBlVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVWaWV3O1xuICB9XG4gIHNldCBlbnRpdHlUeXBlVmlldyh2YWx1ZTogRW50aXR5VHlwZVZpZXcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlVmlldyA9IHZhbHVlO1xuICB9XG4gIGdldCBmaWx0ZXJCeUNhdGVnb3J5KCk6IEVudGl0eVR5cGVDYXRlZ29yeSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcnk7XG4gIH1cbiAgc2V0IGZpbHRlckJ5Q2F0ZWdvcnkodmFsdWU6IEVudGl0eVR5cGVDYXRlZ29yeSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcnkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc29ydEJ5RmllbGQoKTogRW50aXR5VHlwZVNvcnRpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3J0QnlGaWVsZDtcbiAgfVxuICBzZXQgc29ydEJ5RmllbGQodmFsdWU6IEVudGl0eVR5cGVTb3J0aW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc29ydEJ5RmllbGQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuLFxuICAgICAgZW50aXR5VHlwZVZpZXc6IHRoaXMuZW50aXR5VHlwZVZpZXcsXG4gICAgICBmaWx0ZXJCeUNhdGVnb3J5OiB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnksXG4gICAgICBzb3J0QnlGaWVsZDogdGhpcy5zb3J0QnlGaWVsZCA/IHRoaXMuc29ydEJ5RmllbGQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdEVudGl0eVR5cGVzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlKCk7XG4gICAgTGlzdEVudGl0eVR5cGVzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuZW50aXR5VHlwZXMgPSBpbnN0YW5jZS5lbnRpdHlUeXBlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0RW50aXR5VHlwZXNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBFbnRpdHlUeXBlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5lbnRpdHlUeXBlcyA9IGluc3RhbmNlLmVudGl0eVR5cGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdEVudGl0eVR5cGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdEVudGl0eVR5cGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVzICYmIGluc3RhbmNlLmVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlcyBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZXM/OiBFbnRpdHlUeXBlW107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0RW50aXR5VHlwZXNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5lbnRpdHlUeXBlcyA9ICh2YWx1ZS5lbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT4gbmV3IEVudGl0eVR5cGUobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdEVudGl0eVR5cGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlcygpOiBFbnRpdHlUeXBlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlcztcbiAgfVxuICBzZXQgZW50aXR5VHlwZXModmFsdWU6IEVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlUeXBlczogKHRoaXMuZW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0RW50aXR5VHlwZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0RW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0RW50aXR5VHlwZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0RW50aXR5VHlwZVJlcXVlc3QoKTtcbiAgICBHZXRFbnRpdHlUeXBlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0RW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucGFnZVRva2VuID0gaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdldEVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UucGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0RW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0RW50aXR5VHlwZVJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0RW50aXR5VHlwZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRFbnRpdHlUeXBlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy5wYWdlVG9rZW4gPSB2YWx1ZS5wYWdlVG9rZW47XG4gICAgR2V0RW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VUb2tlbjtcbiAgfVxuICBzZXQgcGFnZVRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEVudGl0eVR5cGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QoKTtcbiAgICBDcmVhdGVFbnRpdHlUeXBlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW50aXR5VHlwZSA9IGluc3RhbmNlLmVudGl0eVR5cGUgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBDcmVhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlID0gbmV3IEVudGl0eVR5cGUoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UuZW50aXR5VHlwZSwgRW50aXR5VHlwZS5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IENyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZSBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZT86IEVudGl0eVR5cGU7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIENyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8Q3JlYXRlRW50aXR5VHlwZVJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmVudGl0eVR5cGUgPSB2YWx1ZS5lbnRpdHlUeXBlXG4gICAgICA/IG5ldyBFbnRpdHlUeXBlKHZhbHVlLmVudGl0eVR5cGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICBDcmVhdGVFbnRpdHlUeXBlUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGUoKTogRW50aXR5VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGU7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGUodmFsdWU6IEVudGl0eVR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlOiB0aGlzLmVudGl0eVR5cGUgPyB0aGlzLmVudGl0eVR5cGUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIENyZWF0ZUVudGl0eVR5cGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QoKTtcbiAgICBVcGRhdGVFbnRpdHlUeXBlUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlID0gaW5zdGFuY2UuZW50aXR5VHlwZSB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBpbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBVcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGUgPSBuZXcgRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5lbnRpdHlUeXBlLCBFbnRpdHlUeXBlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDMuRmllbGRNYXNrKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzay5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGUgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVwZGF0ZU1hc2spIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZT86IEVudGl0eVR5cGU7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzaztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFVwZGF0ZUVudGl0eVR5cGVSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8VXBkYXRlRW50aXR5VHlwZVJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0eVR5cGUgPSB2YWx1ZS5lbnRpdHlUeXBlXG4gICAgICA/IG5ldyBFbnRpdHlUeXBlKHZhbHVlLmVudGl0eVR5cGUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSB2YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sodmFsdWUudXBkYXRlTWFzaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFVwZGF0ZUVudGl0eVR5cGVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZSgpOiBFbnRpdHlUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZSh2YWx1ZTogRW50aXR5VHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eVR5cGU6IHRoaXMuZW50aXR5VHlwZSA/IHRoaXMuZW50aXR5VHlwZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHVwZGF0ZU1hc2s6IHRoaXMudXBkYXRlTWFzayA/IHRoaXMudXBkYXRlTWFzay50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIERlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IERlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0KCk7XG4gICAgRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IERlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVFbnRpdHlUeXBlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVFbnRpdHlUeXBlUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0KCk7XG4gICAgQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuXG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBpbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlQmF0Y2hVcmkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZW50aXR5VHlwZUJhdGNoSW5saW5lID0gbmV3IEVudGl0eVR5cGVCYXRjaCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVCYXRjaElubGluZSxcbiAgICAgICAgICAgIEVudGl0eVR5cGVCYXRjaC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzaygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2ssXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2suZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZUJhdGNoVXJpIHx8IGluc3RhbmNlLmVudGl0eVR5cGVCYXRjaFVyaSA9PT0gJycpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5lbnRpdHlUeXBlQmF0Y2hVcmkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZUJhdGNoSW5saW5lKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlQmF0Y2hJbmxpbmUgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlQmF0Y2gudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXBkYXRlTWFzaykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzay50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2VudGl0eVR5cGVCYXRjaFVyaT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZW50aXR5VHlwZUJhdGNoSW5saW5lPzogRW50aXR5VHlwZUJhdGNoO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VwZGF0ZU1hc2s/OiBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2s7XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZUJhdGNoOiBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdC5FbnRpdHlUeXBlQmF0Y2hDYXNlID1cbiAgICBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdC5FbnRpdHlUeXBlQmF0Y2hDYXNlLm5vbmU7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuZW50aXR5VHlwZUJhdGNoVXJpID0gdmFsdWUuZW50aXR5VHlwZUJhdGNoVXJpO1xuICAgIHRoaXMuZW50aXR5VHlwZUJhdGNoSW5saW5lID0gdmFsdWUuZW50aXR5VHlwZUJhdGNoSW5saW5lXG4gICAgICA/IG5ldyBFbnRpdHlUeXBlQmF0Y2godmFsdWUuZW50aXR5VHlwZUJhdGNoSW5saW5lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgdGhpcy51cGRhdGVNYXNrID0gdmFsdWUudXBkYXRlTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDMuRmllbGRNYXNrKHZhbHVlLnVwZGF0ZU1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVCYXRjaFVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlQmF0Y2hVcmk7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGVCYXRjaFVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2VudGl0eVR5cGVCYXRjaElubGluZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VudGl0eVR5cGVCYXRjaCA9XG4gICAgICAgIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LkVudGl0eVR5cGVCYXRjaENhc2UuZW50aXR5VHlwZUJhdGNoVXJpO1xuICAgIH1cbiAgICB0aGlzLl9lbnRpdHlUeXBlQmF0Y2hVcmkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZUJhdGNoSW5saW5lKCk6IEVudGl0eVR5cGVCYXRjaCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVCYXRjaElubGluZTtcbiAgfVxuICBzZXQgZW50aXR5VHlwZUJhdGNoSW5saW5lKHZhbHVlOiBFbnRpdHlUeXBlQmF0Y2ggfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW50aXR5VHlwZUJhdGNoVXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW50aXR5VHlwZUJhdGNoID1cbiAgICAgICAgQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1JlcXVlc3QuRW50aXR5VHlwZUJhdGNoQ2FzZS5lbnRpdHlUeXBlQmF0Y2hJbmxpbmU7XG4gICAgfVxuICAgIHRoaXMuX2VudGl0eVR5cGVCYXRjaElubGluZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCB1cGRhdGVNYXNrKCk6IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZU1hc2s7XG4gIH1cbiAgc2V0IHVwZGF0ZU1hc2sodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzayB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VwZGF0ZU1hc2sgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZUJhdGNoKCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlQmF0Y2g7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlUeXBlQmF0Y2hVcmk6IHRoaXMuZW50aXR5VHlwZUJhdGNoVXJpLFxuICAgICAgZW50aXR5VHlwZUJhdGNoSW5saW5lOiB0aGlzLmVudGl0eVR5cGVCYXRjaElubGluZVxuICAgICAgICA/IHRoaXMuZW50aXR5VHlwZUJhdGNoSW5saW5lLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0IHtcbiAgZXhwb3J0IGVudW0gRW50aXR5VHlwZUJhdGNoQ2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgZW50aXR5VHlwZUJhdGNoVXJpID0gMSxcbiAgICBlbnRpdHlUeXBlQmF0Y2hJbmxpbmUgPSAyXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVzcG9uc2UoKTtcbiAgICBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmVudGl0eVR5cGVzID0gaW5zdGFuY2UuZW50aXR5VHlwZXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1Jlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBFbnRpdHlUeXBlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKG1lc3NhZ2VJbml0aWFsaXplcjEsIEVudGl0eVR5cGUuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgKGluc3RhbmNlLmVudGl0eVR5cGVzID0gaW5zdGFuY2UuZW50aXR5VHlwZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UuZW50aXR5VHlwZXMgJiYgaW5zdGFuY2UuZW50aXR5VHlwZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmVudGl0eVR5cGVzIGFzIGFueSxcbiAgICAgICAgRW50aXR5VHlwZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlUeXBlcz86IEVudGl0eVR5cGVbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuZW50aXR5VHlwZXMgPSAodmFsdWUuZW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+IG5ldyBFbnRpdHlUeXBlKG0pKTtcbiAgICBCYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBlbnRpdHlUeXBlcygpOiBFbnRpdHlUeXBlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdHlUeXBlcztcbiAgfVxuICBzZXQgZW50aXR5VHlwZXModmFsdWU6IEVudGl0eVR5cGVbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eVR5cGVzOiAodGhpcy5lbnRpdHlUeXBlcyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQmF0Y2hVcGRhdGVFbnRpdHlUeXBlc1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QoKTtcbiAgICBCYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWVzID0gaW5zdGFuY2UuZW50aXR5VHlwZU5hbWVzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIChpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZXMgPSBpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnRpdHlUeXBlTmFtZXMgJiYgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UuZW50aXR5VHlwZU5hbWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2VudGl0eVR5cGVOYW1lcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQmF0Y2hEZWxldGVFbnRpdHlUeXBlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuZW50aXR5VHlwZU5hbWVzID0gKHZhbHVlLmVudGl0eVR5cGVOYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICBCYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVudGl0eVR5cGVOYW1lcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eVR5cGVOYW1lcztcbiAgfVxuICBzZXQgZW50aXR5VHlwZU5hbWVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0eVR5cGVOYW1lcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgZW50aXR5VHlwZU5hbWVzOiAodGhpcy5lbnRpdHlUeXBlTmFtZXMgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QoKTtcbiAgICBCYXRjaENyZWF0ZUVudGl0aWVzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW50aXRpZXMgPSBpbnN0YW5jZS5lbnRpdGllcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBFbnRpdHlUeXBlLkVudGl0eSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBFbnRpdHlUeXBlLkVudGl0eS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZW50aXRpZXMgPSBpbnN0YW5jZS5lbnRpdGllcyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnRpdGllcyAmJiBpbnN0YW5jZS5lbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UuZW50aXRpZXMgYXMgYW55LFxuICAgICAgICBFbnRpdHlUeXBlLkVudGl0eS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9lbnRpdGllcz86IEVudGl0eVR5cGUuRW50aXR5W107XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEJhdGNoQ3JlYXRlRW50aXRpZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hDcmVhdGVFbnRpdGllc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmVudGl0aWVzID0gKHZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBuZXcgRW50aXR5VHlwZS5FbnRpdHkobSkpO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIEJhdGNoQ3JlYXRlRW50aXRpZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXRpZXMoKTogRW50aXR5VHlwZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzO1xuICB9XG4gIHNldCBlbnRpdGllcyh2YWx1ZTogRW50aXR5VHlwZS5FbnRpdHlbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudGl0aWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBCYXRjaENyZWF0ZUVudGl0aWVzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0KCk7XG4gICAgQmF0Y2hVcGRhdGVFbnRpdGllc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmVudGl0aWVzID0gaW5zdGFuY2UuZW50aXRpZXMgfHwgW107XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBpbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIyID0gbmV3IEVudGl0eVR5cGUuRW50aXR5KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEVudGl0eVR5cGUuRW50aXR5LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5lbnRpdGllcyA9IGluc3RhbmNlLmVudGl0aWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2soKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDMuRmllbGRNYXNrLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmVudGl0aWVzICYmIGluc3RhbmNlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdGllcyBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGUuRW50aXR5LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVwZGF0ZU1hc2spIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9lbnRpdGllcz86IEVudGl0eVR5cGUuRW50aXR5W107XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzaztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QmF0Y2hVcGRhdGVFbnRpdGllc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmVudGl0aWVzID0gKHZhbHVlLmVudGl0aWVzIHx8IFtdKS5tYXAobSA9PiBuZXcgRW50aXR5VHlwZS5FbnRpdHkobSkpO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMudXBkYXRlTWFzayA9IHZhbHVlLnVwZGF0ZU1hc2tcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAzLkZpZWxkTWFzayh2YWx1ZS51cGRhdGVNYXNrKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQmF0Y2hVcGRhdGVFbnRpdGllc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnRpdGllcygpOiBFbnRpdHlUeXBlLkVudGl0eVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXRpZXM7XG4gIH1cbiAgc2V0IGVudGl0aWVzKHZhbHVlOiBFbnRpdHlUeXBlLkVudGl0eVtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMy5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdGllczogKHRoaXMuZW50aXRpZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QoKTtcbiAgICBCYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQmF0Y2hEZWxldGVFbnRpdGllc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuZW50aXR5VmFsdWVzID0gaW5zdGFuY2UuZW50aXR5VmFsdWVzIHx8IFtdO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoaW5zdGFuY2UuZW50aXR5VmFsdWVzID0gaW5zdGFuY2UuZW50aXR5VmFsdWVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBCYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBCYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVZhbHVlcyAmJiBpbnN0YW5jZS5lbnRpdHlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygyLCBpbnN0YW5jZS5lbnRpdHlWYWx1ZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2VudGl0eVZhbHVlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBCYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5lbnRpdHlWYWx1ZXMgPSAodmFsdWUuZW50aXR5VmFsdWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIEJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW50aXR5VmFsdWVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VmFsdWVzO1xuICB9XG4gIHNldCBlbnRpdHlWYWx1ZXModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW50aXR5VmFsdWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBlbnRpdHlWYWx1ZXM6ICh0aGlzLmVudGl0eVZhbHVlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZUJhdGNoIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEVudGl0eVR5cGVCYXRjaCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFbnRpdHlUeXBlQmF0Y2gudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRW50aXR5VHlwZUJhdGNoKCk7XG4gICAgRW50aXR5VHlwZUJhdGNoLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnRpdHlUeXBlQmF0Y2gpIHtcbiAgICBpbnN0YW5jZS5lbnRpdHlUeXBlcyA9IGluc3RhbmNlLmVudGl0eVR5cGVzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudGl0eVR5cGVCYXRjaCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgRW50aXR5VHlwZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBFbnRpdHlUeXBlLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5lbnRpdHlUeXBlcyA9IGluc3RhbmNlLmVudGl0eVR5cGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVudGl0eVR5cGVCYXRjaC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnRpdHlUeXBlQmF0Y2gsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmVudGl0eVR5cGVzICYmIGluc3RhbmNlLmVudGl0eVR5cGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5lbnRpdHlUeXBlcyBhcyBhbnksXG4gICAgICAgIEVudGl0eVR5cGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VHlwZXM/OiBFbnRpdHlUeXBlW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBFbnRpdHlUeXBlQmF0Y2ggdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnRpdHlUeXBlQmF0Y2g+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmVudGl0eVR5cGVzID0gKHZhbHVlLmVudGl0eVR5cGVzIHx8IFtdKS5tYXAobSA9PiBuZXcgRW50aXR5VHlwZShtKSk7XG4gICAgRW50aXR5VHlwZUJhdGNoLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZW50aXR5VHlwZXMoKTogRW50aXR5VHlwZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZXM7XG4gIH1cbiAgc2V0IGVudGl0eVR5cGVzKHZhbHVlOiBFbnRpdHlUeXBlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnRpdHlUeXBlcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlUeXBlczogKHRoaXMuZW50aXR5VHlwZXMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVudGl0eVR5cGVCYXRjaCB7fVxuZXhwb3J0IGNsYXNzIEVudGl0eVR5cGVTb3J0aW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEVudGl0eVR5cGVTb3J0aW5nKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVudGl0eVR5cGVTb3J0aW5nLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudGl0eVR5cGVTb3J0aW5nKCk7XG4gICAgRW50aXR5VHlwZVNvcnRpbmcuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEVudGl0eVR5cGVTb3J0aW5nKSB7XG4gICAgaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gaW5zdGFuY2Uuc29ydGluZ0ZpZWxkIHx8IDA7XG4gICAgaW5zdGFuY2Uuc29ydGluZ01vZGUgPSBpbnN0YW5jZS5zb3J0aW5nTW9kZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudGl0eVR5cGVTb3J0aW5nLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zb3J0aW5nTW9kZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnRpdHlUeXBlU29ydGluZy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnRpdHlUeXBlU29ydGluZywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2Uuc29ydGluZ0ZpZWxkKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDEsIGluc3RhbmNlLnNvcnRpbmdGaWVsZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zb3J0aW5nTW9kZSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgyLCBpbnN0YW5jZS5zb3J0aW5nTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc29ydGluZ0ZpZWxkPzogRW50aXR5VHlwZVNvcnRpbmcuRW50aXR5VHlwZVNvcnRpbmdGaWVsZDtcbiAgcHJpdmF0ZSBfc29ydGluZ01vZGU/OiBvbmRld29ObHUwMDQuU29ydGluZ01vZGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBFbnRpdHlUeXBlU29ydGluZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudGl0eVR5cGVTb3J0aW5nPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zb3J0aW5nRmllbGQgPSB2YWx1ZS5zb3J0aW5nRmllbGQ7XG4gICAgdGhpcy5zb3J0aW5nTW9kZSA9IHZhbHVlLnNvcnRpbmdNb2RlO1xuICAgIEVudGl0eVR5cGVTb3J0aW5nLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc29ydGluZ0ZpZWxkKCk6IEVudGl0eVR5cGVTb3J0aW5nLkVudGl0eVR5cGVTb3J0aW5nRmllbGQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3J0aW5nRmllbGQ7XG4gIH1cbiAgc2V0IHNvcnRpbmdGaWVsZChcbiAgICB2YWx1ZTogRW50aXR5VHlwZVNvcnRpbmcuRW50aXR5VHlwZVNvcnRpbmdGaWVsZCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9zb3J0aW5nRmllbGQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc29ydGluZ01vZGUoKTogb25kZXdvTmx1MDA0LlNvcnRpbmdNb2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydGluZ01vZGU7XG4gIH1cbiAgc2V0IHNvcnRpbmdNb2RlKHZhbHVlOiBvbmRld29ObHUwMDQuU29ydGluZ01vZGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zb3J0aW5nTW9kZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb3J0aW5nRmllbGQ6IHRoaXMuc29ydGluZ0ZpZWxkLFxuICAgICAgc29ydGluZ01vZGU6IHRoaXMuc29ydGluZ01vZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEVudGl0eVR5cGVTb3J0aW5nIHtcbiAgZXhwb3J0IGVudW0gRW50aXR5VHlwZVNvcnRpbmdGaWVsZCB7XG4gICAgbm9FbnRpdHlUeXBlU29ydGluZyA9IDAsXG4gICAgc29ydEVudGl0eVR5cGVCeU5hbWUgPSAxLFxuICAgIHNvcnRFbnRpdHlUeXBlQnlDcmVhdGlvbkRhdGUgPSAyLFxuICAgIHNvcnRFbnRpdHlUeXBlQnlMYXN0VXBkYXRlZCA9IDMsXG4gICAgc29ydEVudGl0eVR5cGVCeUVudGl0eVZhbHVlQ291bnQgPSA0LFxuICAgIHNvcnRFbnRpdHlUeXBlQnlTeW5vbnltQ291bnQgPSA1XG4gIH1cbn1cbiJdfQ==