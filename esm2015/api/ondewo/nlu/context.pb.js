import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
import * as googleProtobuf003 from '../../google/protobuf/struct.pb';
export class Context {
    /**
     * Creates an object and applies default Protobuf values
     * @param Context value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.lifespanCount = value.lifespanCount;
        this.parameters = value.parameters
            ? new googleProtobuf003.Struct(value.parameters)
            : undefined;
        this.lifespanTime = value.lifespanTime;
        Context.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Context.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Context();
        Context.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.lifespanCount = instance.lifespanCount || 0;
        instance.parameters = instance.parameters || undefined;
        instance.lifespanTime = instance.lifespanTime || 0;
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
                    instance.lifespanCount = reader.readInt32();
                    break;
                case 3:
                    instance.parameters = new googleProtobuf003.Struct();
                    reader.readMessage(instance.parameters, googleProtobuf003.Struct.fromBinaryReader);
                    break;
                case 4:
                    instance.lifespanTime = reader.readFloat();
                    break;
                default:
                    reader.skipField();
            }
        }
        Context.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.lifespanCount) {
            writer.writeInt32(2, instance.lifespanCount);
        }
        if (instance.parameters) {
            writer.writeMessage(3, instance.parameters, googleProtobuf003.Struct.toBinaryWriter);
        }
        if (instance.lifespanTime) {
            writer.writeFloat(4, instance.lifespanTime);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get lifespanCount() {
        return this._lifespanCount;
    }
    set lifespanCount(value) {
        this._lifespanCount = value;
    }
    get parameters() {
        return this._parameters;
    }
    set parameters(value) {
        this._parameters = value;
    }
    get lifespanTime() {
        return this._lifespanTime;
    }
    set lifespanTime(value) {
        this._lifespanTime = value;
    }
    toObject() {
        return {
            name: this.name,
            lifespanCount: this.lifespanCount,
            parameters: this.parameters ? this.parameters.toObject() : undefined,
            lifespanTime: this.lifespanTime
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListContextsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.pageToken = value.pageToken;
        ListContextsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListContextsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListContextsRequest();
        ListContextsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 3:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListContextsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.pageToken) {
            writer.writeString(3, instance.pageToken);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListContextsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsResponse value
     */
    constructor(value) {
        value = value || {};
        this.contexts = (value.contexts || []).map(m => new Context(m));
        this.nextPageToken = value.nextPageToken;
        ListContextsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListContextsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListContextsResponse();
        ListContextsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.contexts = instance.contexts || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Context();
                    reader.readMessage(messageInitializer1, Context.fromBinaryReader);
                    (instance.contexts = instance.contexts || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListContextsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.contexts && instance.contexts.length) {
            writer.writeRepeatedMessage(1, instance.contexts, Context.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get contexts() {
        return this._contexts;
    }
    set contexts(value) {
        this._contexts = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            contexts: (this.contexts || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        GetContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetContextRequest();
        GetContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
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
        GetContextRequest.refineValues(instance);
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
export class CreateContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.context = value.context ? new Context(value.context) : undefined;
        CreateContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateContextRequest();
        CreateContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.context = instance.context || undefined;
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
                    instance.context = new Context();
                    reader.readMessage(instance.context, Context.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.context) {
            writer.writeMessage(2, instance.context, Context.toBinaryWriter);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    toObject() {
        return {
            parent: this.parent,
            context: this.context ? this.context.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.context = value.context ? new Context(value.context) : undefined;
        this.updateMask = value.updateMask
            ? new googleProtobuf002.FieldMask(value.updateMask)
            : undefined;
        UpdateContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateContextRequest();
        UpdateContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.context = instance.context || undefined;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.context = new Context();
                    reader.readMessage(instance.context, Context.fromBinaryReader);
                    break;
                case 2:
                    instance.updateMask = new googleProtobuf002.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf002.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateContextRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.context) {
            writer.writeMessage(1, instance.context, Context.toBinaryWriter);
        }
        if (instance.updateMask) {
            writer.writeMessage(2, instance.updateMask, googleProtobuf002.FieldMask.toBinaryWriter);
        }
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            context: this.context ? this.context.toObject() : undefined,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteContextRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteContextRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteContextRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteContextRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteContextRequest();
        DeleteContextRequest.fromBinaryReader(instance, new BinaryReader(bytes));
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
        DeleteContextRequest.refineValues(instance);
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
export class DeleteAllContextsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAllContextsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        DeleteAllContextsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteAllContextsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteAllContextsRequest();
        DeleteAllContextsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteAllContextsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2NvbnRleHQucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RSxPQUFPLEtBQUssaUJBQWlCLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE1BQU0sT0FBTyxPQUFPO0lBeUVsQjs7O09BR0c7SUFDSCxZQUFZLEtBQWlDO1FBQzNDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVTtZQUNoQyxDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXJGRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWlCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxP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QUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtTQUNGO1FBRUQsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUNuQixRQUFrQyxFQUNsQyxNQUFvQjtRQUVwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQWFELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBeUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgR3JwY01lc3NhZ2UsIFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICdAbmd4LWdycGMvY29tbW9uJztcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyLCBCeXRlU291cmNlIH0gZnJvbSAnZ29vZ2xlLXByb3RvYnVmJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9lbXB0eS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZmllbGQtbWFzay5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMyBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvc3RydWN0LnBiJztcbmV4cG9ydCBjbGFzcyBDb250ZXh0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENvbnRleHQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ29udGV4dC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb250ZXh0KCk7XG4gICAgQ29udGV4dC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ29udGV4dCkge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmxpZmVzcGFuQ291bnQgPSBpbnN0YW5jZS5saWZlc3BhbkNvdW50IHx8IDA7XG4gICAgaW5zdGFuY2UucGFyYW1ldGVycyA9IGluc3RhbmNlLnBhcmFtZXRlcnMgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmxpZmVzcGFuVGltZSA9IGluc3RhbmNlLmxpZmVzcGFuVGltZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IENvbnRleHQsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmxpZmVzcGFuQ291bnQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJhbWV0ZXJzID0gbmV3IGdvb2dsZVByb3RvYnVmMDAzLlN0cnVjdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMy5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5saWZlc3BhblRpbWUgPSByZWFkZXIucmVhZEZsb2F0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIENvbnRleHQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQ29udGV4dCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGlmZXNwYW5Db3VudCkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UubGlmZXNwYW5Db3VudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYXJhbWV0ZXJzKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5wYXJhbWV0ZXJzIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDMuU3RydWN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGlmZXNwYW5UaW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVGbG9hdCg0LCBpbnN0YW5jZS5saWZlc3BhblRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xpZmVzcGFuQ291bnQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3BhcmFtZXRlcnM/OiBnb29nbGVQcm90b2J1ZjAwMy5TdHJ1Y3Q7XG4gIHByaXZhdGUgX2xpZmVzcGFuVGltZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIENvbnRleHQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDb250ZXh0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLmxpZmVzcGFuQ291bnQgPSB2YWx1ZS5saWZlc3BhbkNvdW50O1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHZhbHVlLnBhcmFtZXRlcnNcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAzLlN0cnVjdCh2YWx1ZS5wYXJhbWV0ZXJzKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saWZlc3BhblRpbWUgPSB2YWx1ZS5saWZlc3BhblRpbWU7XG4gICAgQ29udGV4dC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsaWZlc3BhbkNvdW50KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVzcGFuQ291bnQ7XG4gIH1cbiAgc2V0IGxpZmVzcGFuQ291bnQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xpZmVzcGFuQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyYW1ldGVycygpOiBnb29nbGVQcm90b2J1ZjAwMy5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG4gIHNldCBwYXJhbWV0ZXJzKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMy5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxpZmVzcGFuVGltZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9saWZlc3BhblRpbWU7XG4gIH1cbiAgc2V0IGxpZmVzcGFuVGltZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGlmZXNwYW5UaW1lID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGxpZmVzcGFuQ291bnQ6IHRoaXMubGlmZXNwYW5Db3VudCxcbiAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycyA/IHRoaXMucGFyYW1ldGVycy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgbGlmZXNwYW5UaW1lOiB0aGlzLmxpZmVzcGFuVGltZVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ29udGV4dCB7fVxuZXhwb3J0IGNsYXNzIExpc3RDb250ZXh0c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdENvbnRleHRzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0Q29udGV4dHNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RDb250ZXh0c1JlcXVlc3QoKTtcbiAgICBMaXN0Q29udGV4dHNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0Q29udGV4dHNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBMaXN0Q29udGV4dHNSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RDb250ZXh0c1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdENvbnRleHRzUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLnBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0Q29udGV4dHNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdENvbnRleHRzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMucGFnZVRva2VuID0gdmFsdWUucGFnZVRva2VuO1xuICAgIExpc3RDb250ZXh0c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgcGFnZVRva2VuOiB0aGlzLnBhZ2VUb2tlblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdENvbnRleHRzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIExpc3RDb250ZXh0c1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RDb250ZXh0c1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RDb250ZXh0c1Jlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RDb250ZXh0c1Jlc3BvbnNlKCk7XG4gICAgTGlzdENvbnRleHRzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RDb250ZXh0c1Jlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuY29udGV4dHMgPSBpbnN0YW5jZS5jb250ZXh0cyB8fCBbXTtcbiAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0Q29udGV4dHNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBDb250ZXh0LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIChpbnN0YW5jZS5jb250ZXh0cyA9IGluc3RhbmNlLmNvbnRleHRzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdENvbnRleHRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdENvbnRleHRzUmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmNvbnRleHRzICYmIGluc3RhbmNlLmNvbnRleHRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5jb250ZXh0cyBhcyBhbnksXG4gICAgICAgIENvbnRleHQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29udGV4dHM/OiBDb250ZXh0W107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0Q29udGV4dHNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RDb250ZXh0c1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5jb250ZXh0cyA9ICh2YWx1ZS5jb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbmV3IENvbnRleHQobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdENvbnRleHRzUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBjb250ZXh0cygpOiBDb250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0cztcbiAgfVxuICBzZXQgY29udGV4dHModmFsdWU6IENvbnRleHRbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZXh0czogKHRoaXMuY29udGV4dHMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RDb250ZXh0c1Jlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0Q29udGV4dFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0Q29udGV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0Q29udGV4dFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0Q29udGV4dFJlcXVlc3QoKTtcbiAgICBHZXRDb250ZXh0UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0Q29udGV4dFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBHZXRDb250ZXh0UmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBHZXRDb250ZXh0UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRDb250ZXh0UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldENvbnRleHRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICBHZXRDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldENvbnRleHRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29udGV4dFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ3JlYXRlQ29udGV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQ3JlYXRlQ29udGV4dFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlQ29udGV4dFJlcXVlc3QoKTtcbiAgICBDcmVhdGVDb250ZXh0UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQ3JlYXRlQ29udGV4dFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuY29udGV4dCA9IGluc3RhbmNlLmNvbnRleHQgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IENyZWF0ZUNvbnRleHRSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmNvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5jb250ZXh0LCBDb250ZXh0LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGVDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBDcmVhdGVDb250ZXh0UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbnRleHQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMiwgaW5zdGFuY2UuY29udGV4dCBhcyBhbnksIENvbnRleHQudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29udGV4dD86IENvbnRleHQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDcmVhdGVDb250ZXh0UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENyZWF0ZUNvbnRleHRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5jb250ZXh0ID0gdmFsdWUuY29udGV4dCA/IG5ldyBDb250ZXh0KHZhbHVlLmNvbnRleHQpIDogdW5kZWZpbmVkO1xuICAgIENyZWF0ZUNvbnRleHRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29udGV4dCgpOiBDb250ZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICBzZXQgY29udGV4dCh2YWx1ZTogQ29udGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDcmVhdGVDb250ZXh0UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbnRleHRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVwZGF0ZUNvbnRleHRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVwZGF0ZUNvbnRleHRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFVwZGF0ZUNvbnRleHRSZXF1ZXN0KCk7XG4gICAgVXBkYXRlQ29udGV4dFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVwZGF0ZUNvbnRleHRSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UuY29udGV4dCA9IGluc3RhbmNlLmNvbnRleHQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnVwZGF0ZU1hc2sgPSBpbnN0YW5jZS51cGRhdGVNYXNrIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBVcGRhdGVDb250ZXh0UmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmNvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5jb250ZXh0LCBDb250ZXh0LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudXBkYXRlTWFzayA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2soKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVcGRhdGVDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBVcGRhdGVDb250ZXh0UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuY29udGV4dCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZSgxLCBpbnN0YW5jZS5jb250ZXh0IGFzIGFueSwgQ29udGV4dC50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51cGRhdGVNYXNrKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRleHQ/OiBDb250ZXh0O1xuICBwcml2YXRlIF91cGRhdGVNYXNrPzogZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gVXBkYXRlQ29udGV4dFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVcGRhdGVDb250ZXh0UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY29udGV4dCA9IHZhbHVlLmNvbnRleHQgPyBuZXcgQ29udGV4dCh2YWx1ZS5jb250ZXh0KSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZU1hc2sgPSB2YWx1ZS51cGRhdGVNYXNrXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sodmFsdWUudXBkYXRlTWFzaylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFVwZGF0ZUNvbnRleHRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY29udGV4dCgpOiBDb250ZXh0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICBzZXQgY29udGV4dCh2YWx1ZTogQ29udGV4dCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXBkYXRlTWFzaygpOiBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXNrO1xuICB9XG4gIHNldCB1cGRhdGVNYXNrKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2sgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91cGRhdGVNYXNrID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZUNvbnRleHRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlQ29udGV4dFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRGVsZXRlQ29udGV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlQ29udGV4dFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlQ29udGV4dFJlcXVlc3QoKTtcbiAgICBEZWxldGVDb250ZXh0UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGVsZXRlQ29udGV4dFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBEZWxldGVDb250ZXh0UmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWxldGVDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZWxldGVDb250ZXh0UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZWxldGVDb250ZXh0UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPERlbGV0ZUNvbnRleHRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICBEZWxldGVDb250ZXh0UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZUNvbnRleHRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IERlbGV0ZUFsbENvbnRleHRzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBEZWxldGVBbGxDb250ZXh0c1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0KCk7XG4gICAgRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBEZWxldGVBbGxDb250ZXh0c1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVsZXRlQWxsQ29udGV4dHNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IERlbGV0ZUFsbENvbnRleHRzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZWxldGVBbGxDb250ZXh0c1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxEZWxldGVBbGxDb250ZXh0c1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICBEZWxldGVBbGxDb250ZXh0c1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50XG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBEZWxldGVBbGxDb250ZXh0c1JlcXVlc3Qge31cbiJdfQ==