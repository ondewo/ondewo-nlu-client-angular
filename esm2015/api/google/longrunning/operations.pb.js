import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf001 from '../../google/protobuf/any.pb';
import * as googleRpc003 from '../../google/rpc/status.pb';
export class Operation {
    /**
     * Creates an object and applies default Protobuf values
     * @param Operation value
     */
    constructor(value) {
        this._result = Operation.ResultCase.none;
        value = value || {};
        this.name = value.name;
        this.metadata = value.metadata
            ? new googleProtobuf001.Any(value.metadata)
            : undefined;
        this.done = value.done;
        this.error = value.error ? new googleRpc003.Status(value.error) : undefined;
        this.response = value.response
            ? new googleProtobuf001.Any(value.response)
            : undefined;
        Operation.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Operation.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Operation();
        Operation.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.metadata = instance.metadata || undefined;
        instance.done = instance.done || false;
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
                    instance.metadata = new googleProtobuf001.Any();
                    reader.readMessage(instance.metadata, googleProtobuf001.Any.fromBinaryReader);
                    break;
                case 3:
                    instance.done = reader.readBool();
                    break;
                case 4:
                    instance.error = new googleRpc003.Status();
                    reader.readMessage(instance.error, googleRpc003.Status.fromBinaryReader);
                    break;
                case 5:
                    instance.response = new googleProtobuf001.Any();
                    reader.readMessage(instance.response, googleProtobuf001.Any.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        Operation.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.metadata) {
            writer.writeMessage(2, instance.metadata, googleProtobuf001.Any.toBinaryWriter);
        }
        if (instance.done) {
            writer.writeBool(3, instance.done);
        }
        if (instance.error) {
            writer.writeMessage(4, instance.error, googleRpc003.Status.toBinaryWriter);
        }
        if (instance.response) {
            writer.writeMessage(5, instance.response, googleProtobuf001.Any.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get metadata() {
        return this._metadata;
    }
    set metadata(value) {
        this._metadata = value;
    }
    get done() {
        return this._done;
    }
    set done(value) {
        this._done = value;
    }
    get error() {
        return this._error;
    }
    set error(value) {
        if (value !== undefined && value !== null) {
            this._response = undefined;
            this._result = Operation.ResultCase.error;
        }
        this._error = value;
    }
    get response() {
        return this._response;
    }
    set response(value) {
        if (value !== undefined && value !== null) {
            this._error = undefined;
            this._result = Operation.ResultCase.response;
        }
        this._response = value;
    }
    get result() {
        return this._result;
    }
    toObject() {
        return {
            name: this.name,
            metadata: this.metadata ? this.metadata.toObject() : undefined,
            done: this.done,
            error: this.error ? this.error.toObject() : undefined,
            response: this.response ? this.response.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (Operation) {
    let ResultCase;
    (function (ResultCase) {
        ResultCase[ResultCase["none"] = 0] = "none";
        ResultCase[ResultCase["error"] = 1] = "error";
        ResultCase[ResultCase["response"] = 2] = "response";
    })(ResultCase = Operation.ResultCase || (Operation.ResultCase = {}));
})(Operation || (Operation = {}));
export class GetOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        GetOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetOperationRequest();
        GetOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
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
        GetOperationRequest.refineValues(instance);
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
export class ListOperationsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.filter = value.filter;
        this.pageSize = value.pageSize;
        this.pageToken = value.pageToken;
        ListOperationsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListOperationsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListOperationsRequest();
        ListOperationsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.filter = instance.filter || '';
        instance.pageSize = instance.pageSize || 0;
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.name = reader.readString();
                    break;
                case 1:
                    instance.filter = reader.readString();
                    break;
                case 2:
                    instance.pageSize = reader.readInt32();
                    break;
                case 3:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListOperationsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(4, instance.name);
        }
        if (instance.filter) {
            writer.writeString(1, instance.filter);
        }
        if (instance.pageSize) {
            writer.writeInt32(2, instance.pageSize);
        }
        if (instance.pageToken) {
            writer.writeString(3, instance.pageToken);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter = value;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(value) {
        this._pageSize = value;
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
            filter: this.filter,
            pageSize: this.pageSize,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListOperationsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsResponse value
     */
    constructor(value) {
        value = value || {};
        this.operations = (value.operations || []).map(m => new Operation(m));
        this.nextPageToken = value.nextPageToken;
        ListOperationsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListOperationsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListOperationsResponse();
        ListOperationsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.operations = instance.operations || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Operation();
                    reader.readMessage(messageInitializer1, Operation.fromBinaryReader);
                    (instance.operations = instance.operations || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListOperationsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.operations && instance.operations.length) {
            writer.writeRepeatedMessage(1, instance.operations, Operation.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get operations() {
        return this._operations;
    }
    set operations(value) {
        this._operations = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            operations: (this.operations || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CancelOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CancelOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        CancelOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CancelOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CancelOperationRequest();
        CancelOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
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
        CancelOperationRequest.refineValues(instance);
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
export class DeleteOperationRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteOperationRequest value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        DeleteOperationRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteOperationRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteOperationRequest();
        DeleteOperationRequest.fromBinaryReader(instance, new BinaryReader(bytes));
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
        DeleteOperationRequest.refineValues(instance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9nb29nbGUvbG9uZ3J1bm5pbmcvb3BlcmF0aW9ucy5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRXpFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE1BQU0sT0FBTyxTQUFTO0lBZ0dwQjs7O09BR0c7SUFDSCxZQUFZLEtBQW1DO1FBTHZDLFlBQU8sR0FBeUIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFNaEUsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDNUIsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRO1lBQzVCLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDZCxTQUFTLENB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LENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBYUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQgeyBHcnBjTWVzc2FnZSwgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlQXBpMDAwIGZyb20gJy4uLy4uL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDEgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL2FueS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUnBjMDAzIGZyb20gJy4uLy4uL2dvb2dsZS9ycGMvc3RhdHVzLnBiJztcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogT3BlcmF0aW9uKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE9wZXJhdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPcGVyYXRpb24oKTtcbiAgICBPcGVyYXRpb24uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IE9wZXJhdGlvbikge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm1ldGFkYXRhID0gaW5zdGFuY2UubWV0YWRhdGEgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLmRvbmUgPSBpbnN0YW5jZS5kb25lIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IE9wZXJhdGlvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubWV0YWRhdGEgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuQW55KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UubWV0YWRhdGEsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5BbnkuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5kb25lID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5lcnJvciA9IG5ldyBnb29nbGVScGMwMDMuU3RhdHVzKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZXJyb3IsXG4gICAgICAgICAgICBnb29nbGVScGMwMDMuU3RhdHVzLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UucmVzcG9uc2UgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuQW55KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucmVzcG9uc2UsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMS5BbnkuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9wZXJhdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBPcGVyYXRpb24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1ldGFkYXRhKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5tZXRhZGF0YSBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAxLkFueS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRvbmUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMywgaW5zdGFuY2UuZG9uZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lcnJvcikge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UuZXJyb3IgYXMgYW55LFxuICAgICAgICBnb29nbGVScGMwMDMuU3RhdHVzLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucmVzcG9uc2UpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLnJlc3BvbnNlIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDEuQW55LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX21ldGFkYXRhPzogZ29vZ2xlUHJvdG9idWYwMDEuQW55O1xuICBwcml2YXRlIF9kb25lPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3I/OiBnb29nbGVScGMwMDMuU3RhdHVzO1xuICBwcml2YXRlIF9yZXNwb25zZT86IGdvb2dsZVByb3RvYnVmMDAxLkFueTtcblxuICBwcml2YXRlIF9yZXN1bHQ6IE9wZXJhdGlvbi5SZXN1bHRDYXNlID0gT3BlcmF0aW9uLlJlc3VsdENhc2Uubm9uZTtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBPcGVyYXRpb24gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxPcGVyYXRpb24+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMubWV0YWRhdGEgPSB2YWx1ZS5tZXRhZGF0YVxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDEuQW55KHZhbHVlLm1ldGFkYXRhKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5kb25lID0gdmFsdWUuZG9uZTtcbiAgICB0aGlzLmVycm9yID0gdmFsdWUuZXJyb3IgPyBuZXcgZ29vZ2xlUnBjMDAzLlN0YXR1cyh2YWx1ZS5lcnJvcikgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXNwb25zZSA9IHZhbHVlLnJlc3BvbnNlXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMS5BbnkodmFsdWUucmVzcG9uc2UpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBPcGVyYXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWV0YWRhdGEoKTogZ29vZ2xlUHJvdG9idWYwMDEuQW55IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGE7XG4gIH1cbiAgc2V0IG1ldGFkYXRhKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMS5BbnkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXRhZGF0YSA9IHZhbHVlO1xuICB9XG4gIGdldCBkb25lKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kb25lO1xuICB9XG4gIHNldCBkb25lKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZG9uZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlcnJvcigpOiBnb29nbGVScGMwMDMuU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gIH1cbiAgc2V0IGVycm9yKHZhbHVlOiBnb29nbGVScGMwMDMuU3RhdHVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gT3BlcmF0aW9uLlJlc3VsdENhc2UuZXJyb3I7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc3BvbnNlKCk6IGdvb2dsZVByb3RvYnVmMDAxLkFueSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlO1xuICB9XG4gIHNldCByZXNwb25zZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDEuQW55IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gT3BlcmF0aW9uLlJlc3VsdENhc2UucmVzcG9uc2U7XG4gICAgfVxuICAgIHRoaXMuX3Jlc3BvbnNlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSA/IHRoaXMubWV0YWRhdGEudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6IHRoaXMuZG9uZSxcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yID8gdGhpcy5lcnJvci50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmVzcG9uc2U6IHRoaXMucmVzcG9uc2UgPyB0aGlzLnJlc3BvbnNlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wZXJhdGlvbiB7XG4gIGV4cG9ydCBlbnVtIFJlc3VsdENhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIGVycm9yID0gMSxcbiAgICByZXNwb25zZSA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEdldE9wZXJhdGlvblJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0T3BlcmF0aW9uUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRPcGVyYXRpb25SZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldE9wZXJhdGlvblJlcXVlc3QoKTtcbiAgICBHZXRPcGVyYXRpb25SZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRPcGVyYXRpb25SZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2V0T3BlcmF0aW9uUmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRPcGVyYXRpb25SZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdldE9wZXJhdGlvblJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0T3BlcmF0aW9uUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldE9wZXJhdGlvblJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIEdldE9wZXJhdGlvblJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRPcGVyYXRpb25SZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdE9wZXJhdGlvbnNSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RPcGVyYXRpb25zUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0T3BlcmF0aW9uc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdE9wZXJhdGlvbnNSZXF1ZXN0KCk7XG4gICAgTGlzdE9wZXJhdGlvbnNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0T3BlcmF0aW9uc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5maWx0ZXIgPSBpbnN0YW5jZS5maWx0ZXIgfHwgJyc7XG4gICAgaW5zdGFuY2UucGFnZVNpemUgPSBpbnN0YW5jZS5wYWdlU2l6ZSB8fCAwO1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0T3BlcmF0aW9uc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmZpbHRlciA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5wYWdlU2l6ZSA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RPcGVyYXRpb25zUmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMaXN0T3BlcmF0aW9uc1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmZpbHRlcikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmZpbHRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWdlU2l6ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMiwgaW5zdGFuY2UucGFnZVNpemUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9maWx0ZXI/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhZ2VTaXplPzogbnVtYmVyO1xuICBwcml2YXRlIF9wYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0T3BlcmF0aW9uc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0T3BlcmF0aW9uc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMuZmlsdGVyID0gdmFsdWUuZmlsdGVyO1xuICAgIHRoaXMucGFnZVNpemUgPSB2YWx1ZS5wYWdlU2l6ZTtcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IHZhbHVlLnBhZ2VUb2tlbjtcbiAgICBMaXN0T3BlcmF0aW9uc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZmlsdGVyKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcjtcbiAgfVxuICBzZXQgZmlsdGVyKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgc2V0IHBhZ2VTaXplKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRva2VuO1xuICB9XG4gIHNldCBwYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0T3BlcmF0aW9uc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0T3BlcmF0aW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RPcGVyYXRpb25zUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdE9wZXJhdGlvbnNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0T3BlcmF0aW9uc1Jlc3BvbnNlKCk7XG4gICAgTGlzdE9wZXJhdGlvbnNSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdE9wZXJhdGlvbnNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLm9wZXJhdGlvbnMgPSBpbnN0YW5jZS5vcGVyYXRpb25zIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RPcGVyYXRpb25zUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IE9wZXJhdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShtZXNzYWdlSW5pdGlhbGl6ZXIxLCBPcGVyYXRpb24uZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgKGluc3RhbmNlLm9wZXJhdGlvbnMgPSBpbnN0YW5jZS5vcGVyYXRpb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdE9wZXJhdGlvbnNSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0T3BlcmF0aW9uc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5vcGVyYXRpb25zICYmIGluc3RhbmNlLm9wZXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLm9wZXJhdGlvbnMgYXMgYW55LFxuICAgICAgICBPcGVyYXRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlcmF0aW9ucz86IE9wZXJhdGlvbltdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdE9wZXJhdGlvbnNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RPcGVyYXRpb25zUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSAodmFsdWUub3BlcmF0aW9ucyB8fCBbXSkubWFwKG0gPT4gbmV3IE9wZXJhdGlvbihtKSk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gdmFsdWUubmV4dFBhZ2VUb2tlbjtcbiAgICBMaXN0T3BlcmF0aW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgb3BlcmF0aW9ucygpOiBPcGVyYXRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbnM7XG4gIH1cbiAgc2V0IG9wZXJhdGlvbnModmFsdWU6IE9wZXJhdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3BlcmF0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlcmF0aW9uczogKHRoaXMub3BlcmF0aW9ucyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG5leHRQYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdE9wZXJhdGlvbnNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIENhbmNlbE9wZXJhdGlvblJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDYW5jZWxPcGVyYXRpb25SZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENhbmNlbE9wZXJhdGlvblJlcXVlc3QoKTtcbiAgICBDYW5jZWxPcGVyYXRpb25SZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDYW5jZWxPcGVyYXRpb25SZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDYW5jZWxPcGVyYXRpb25SZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IENhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPENhbmNlbE9wZXJhdGlvblJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIENhbmNlbE9wZXJhdGlvblJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBDYW5jZWxPcGVyYXRpb25SZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZWxldGVPcGVyYXRpb25SZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERlbGV0ZU9wZXJhdGlvblJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCgpO1xuICAgIERlbGV0ZU9wZXJhdGlvblJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IERlbGV0ZU9wZXJhdGlvblJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBEZWxldGVPcGVyYXRpb25SZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZU9wZXJhdGlvblJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZWxldGVPcGVyYXRpb25SZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlT3BlcmF0aW9uUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgRGVsZXRlT3BlcmF0aW9uUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlbGV0ZU9wZXJhdGlvblJlcXVlc3Qge31cbiJdfQ==