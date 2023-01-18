import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.OperationMetadata
 */
export class OperationMetadata {
    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes) {
        const instance = new OperationMetadata();
        OperationMetadata.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
        return instance;
    }
    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance) {
        _instance.status = _instance.status || 0;
        _instance.parentOperationName = _instance.parentOperationName || '';
        _instance.subOperationNames = _instance.subOperationNames || [];
        _instance.createTime = _instance.createTime || undefined;
        _instance.startTime = _instance.startTime || undefined;
        _instance.endTime = _instance.endTime || undefined;
        _instance.isCancellationRequested =
            _instance.isCancellationRequested || false;
        _instance.cancelCommand = _instance.cancelCommand || '';
        _instance.userIdCreated = _instance.userIdCreated || '';
        _instance.userIdCancelled = _instance.userIdCancelled || '';
        _instance.projectParent = _instance.projectParent || '';
        _instance.operationType = _instance.operationType || 0;
        _instance.hostName = _instance.hostName || '';
        _instance.numReruns = _instance.numReruns || 0;
        _instance.maxNumReruns = _instance.maxNumReruns || 0;
        _instance.description = _instance.description || '';
    }
    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.status = _reader.readEnum();
                    break;
                case 2:
                    _instance.parentOperationName = _reader.readString();
                    break;
                case 3:
                    (_instance.subOperationNames =
                        _instance.subOperationNames || []).push(_reader.readString());
                    break;
                case 4:
                    _instance.createTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.createTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.startTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.startTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.endTime = new googleProtobuf000.Timestamp();
                    _reader.readMessage(_instance.endTime, googleProtobuf000.Timestamp.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.isCancellationRequested = _reader.readBool();
                    break;
                case 8:
                    _instance.cancelCommand = _reader.readString();
                    break;
                case 9:
                    _instance.userIdCreated = _reader.readString();
                    break;
                case 10:
                    _instance.userIdCancelled = _reader.readString();
                    break;
                case 11:
                    _instance.projectParent = _reader.readString();
                    break;
                case 12:
                    _instance.operationType = _reader.readEnum();
                    break;
                case 13:
                    _instance.hostName = _reader.readString();
                    break;
                case 14:
                    _instance.numReruns = _reader.readInt32();
                    break;
                case 15:
                    _instance.maxNumReruns = _reader.readInt32();
                    break;
                case 16:
                    _instance.description = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        OperationMetadata.refineValues(_instance);
    }
    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.status) {
            _writer.writeEnum(1, _instance.status);
        }
        if (_instance.parentOperationName) {
            _writer.writeString(2, _instance.parentOperationName);
        }
        if (_instance.subOperationNames && _instance.subOperationNames.length) {
            _writer.writeRepeatedString(3, _instance.subOperationNames);
        }
        if (_instance.createTime) {
            _writer.writeMessage(4, _instance.createTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.startTime) {
            _writer.writeMessage(5, _instance.startTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.endTime) {
            _writer.writeMessage(6, _instance.endTime, googleProtobuf000.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.isCancellationRequested) {
            _writer.writeBool(7, _instance.isCancellationRequested);
        }
        if (_instance.cancelCommand) {
            _writer.writeString(8, _instance.cancelCommand);
        }
        if (_instance.userIdCreated) {
            _writer.writeString(9, _instance.userIdCreated);
        }
        if (_instance.userIdCancelled) {
            _writer.writeString(10, _instance.userIdCancelled);
        }
        if (_instance.projectParent) {
            _writer.writeString(11, _instance.projectParent);
        }
        if (_instance.operationType) {
            _writer.writeEnum(12, _instance.operationType);
        }
        if (_instance.hostName) {
            _writer.writeString(13, _instance.hostName);
        }
        if (_instance.numReruns) {
            _writer.writeInt32(14, _instance.numReruns);
        }
        if (_instance.maxNumReruns) {
            _writer.writeInt32(15, _instance.maxNumReruns);
        }
        if (_instance.description) {
            _writer.writeString(16, _instance.description);
        }
    }
    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of OperationMetadata to deeply clone from
     */
    constructor(_value) {
        _value = _value || {};
        this.status = _value.status;
        this.parentOperationName = _value.parentOperationName;
        this.subOperationNames = (_value.subOperationNames || []).slice();
        this.createTime = _value.createTime
            ? new googleProtobuf000.Timestamp(_value.createTime)
            : undefined;
        this.startTime = _value.startTime
            ? new googleProtobuf000.Timestamp(_value.startTime)
            : undefined;
        this.endTime = _value.endTime
            ? new googleProtobuf000.Timestamp(_value.endTime)
            : undefined;
        this.isCancellationRequested = _value.isCancellationRequested;
        this.cancelCommand = _value.cancelCommand;
        this.userIdCreated = _value.userIdCreated;
        this.userIdCancelled = _value.userIdCancelled;
        this.projectParent = _value.projectParent;
        this.operationType = _value.operationType;
        this.hostName = _value.hostName;
        this.numReruns = _value.numReruns;
        this.maxNumReruns = _value.maxNumReruns;
        this.description = _value.description;
        OperationMetadata.refineValues(this);
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get parentOperationName() {
        return this._parentOperationName;
    }
    set parentOperationName(value) {
        this._parentOperationName = value;
    }
    get subOperationNames() {
        return this._subOperationNames;
    }
    set subOperationNames(value) {
        this._subOperationNames = value;
    }
    get createTime() {
        return this._createTime;
    }
    set createTime(value) {
        this._createTime = value;
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    get isCancellationRequested() {
        return this._isCancellationRequested;
    }
    set isCancellationRequested(value) {
        this._isCancellationRequested = value;
    }
    get cancelCommand() {
        return this._cancelCommand;
    }
    set cancelCommand(value) {
        this._cancelCommand = value;
    }
    get userIdCreated() {
        return this._userIdCreated;
    }
    set userIdCreated(value) {
        this._userIdCreated = value;
    }
    get userIdCancelled() {
        return this._userIdCancelled;
    }
    set userIdCancelled(value) {
        this._userIdCancelled = value;
    }
    get projectParent() {
        return this._projectParent;
    }
    set projectParent(value) {
        this._projectParent = value;
    }
    get operationType() {
        return this._operationType;
    }
    set operationType(value) {
        this._operationType = value;
    }
    get hostName() {
        return this._hostName;
    }
    set hostName(value) {
        this._hostName = value;
    }
    get numReruns() {
        return this._numReruns;
    }
    set numReruns(value) {
        this._numReruns = value;
    }
    get maxNumReruns() {
        return this._maxNumReruns;
    }
    set maxNumReruns(value) {
        this._maxNumReruns = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
        const writer = new BinaryWriter();
        OperationMetadata.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject() {
        return {
            status: this.status,
            parentOperationName: this.parentOperationName,
            subOperationNames: (this.subOperationNames || []).slice(),
            createTime: this.createTime ? this.createTime.toObject() : undefined,
            startTime: this.startTime ? this.startTime.toObject() : undefined,
            endTime: this.endTime ? this.endTime.toObject() : undefined,
            isCancellationRequested: this.isCancellationRequested,
            cancelCommand: this.cancelCommand,
            userIdCreated: this.userIdCreated,
            userIdCancelled: this.userIdCancelled,
            projectParent: this.projectParent,
            operationType: this.operationType,
            hostName: this.hostName,
            numReruns: this.numReruns,
            maxNumReruns: this.maxNumReruns,
            description: this.description
        };
    }
    /**
     * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
     */
    toJSON() {
        return this.toObject();
    }
    /**
     * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
     * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
     * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
     */
    toProtobufJSON(
    // @ts-ignore
    options) {
        return {
            status: OperationMetadata.Status[this.status === null || this.status === undefined ? 0 : this.status],
            parentOperationName: this.parentOperationName,
            subOperationNames: (this.subOperationNames || []).slice(),
            createTime: this.createTime
                ? this.createTime.toProtobufJSON(options)
                : null,
            startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
            endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
            isCancellationRequested: this.isCancellationRequested,
            cancelCommand: this.cancelCommand,
            userIdCreated: this.userIdCreated,
            userIdCancelled: this.userIdCancelled,
            projectParent: this.projectParent,
            operationType: OperationMetadata.OperationType[this.operationType === null || this.operationType === undefined
                ? 0
                : this.operationType],
            hostName: this.hostName,
            numReruns: this.numReruns,
            maxNumReruns: this.maxNumReruns,
            description: this.description
        };
    }
}
OperationMetadata.id = 'ondewo.nlu.OperationMetadata';
(function (OperationMetadata) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
        Status[Status["NOT_STARTED"] = 1] = "NOT_STARTED";
        Status[Status["IN_PROGRESS"] = 2] = "IN_PROGRESS";
        Status[Status["DONE"] = 3] = "DONE";
        Status[Status["CANCELLED"] = 4] = "CANCELLED";
        Status[Status["FAILED"] = 5] = "FAILED";
    })(Status = OperationMetadata.Status || (OperationMetadata.Status = {}));
    let OperationType;
    (function (OperationType) {
        OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
        OperationType[OperationType["CREATE_AGENT"] = 1] = "CREATE_AGENT";
        OperationType[OperationType["IMPORT_AGENT"] = 2] = "IMPORT_AGENT";
        OperationType[OperationType["EXPORT_AGENT"] = 3] = "EXPORT_AGENT";
        OperationType[OperationType["DELETE_AGENT"] = 4] = "DELETE_AGENT";
        OperationType[OperationType["RESTORE_AGENT"] = 5] = "RESTORE_AGENT";
        OperationType[OperationType["BUILD_AGENT_CACHE"] = 6] = "BUILD_AGENT_CACHE";
        OperationType[OperationType["TRAIN_AGENT"] = 7] = "TRAIN_AGENT";
        OperationType[OperationType["EXPORT_BENCHMARK_AGENT"] = 8] = "EXPORT_BENCHMARK_AGENT";
    })(OperationType = OperationMetadata.OperationType || (OperationMetadata.OperationType = {}));
})(OperationMetadata || (OperationMetadata = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLW1ldGFkYXRhLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9uLW1ldGFkYXRhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQUc1Qjs7O09BR0c7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLGlCQUFpQixDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUE0QjtRQUM5QyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUM7UUFDekQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQztRQUN2RCxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO1FBQ25ELFNBQVMsQ0FBQyx1QkFBdUI7WUFDL0IsU0FBUyxD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aEIsbUVBQWlCLENBQUE7UUFDakIsMkVBQXFCLENBQUE7UUFDckIsK0RBQWUsQ0FBQTtRQUNmLHFGQUEwQixDQUFBO0lBQzVCLENBQUMsRUFWVyxhQUFhLEdBQWIsK0JBQWEsS0FBYiwrQkFBYSxRQVV4QjtBQUNILENBQUMsRUEvRGEsaUJBQWlCLEtBQWpCLGlCQUFpQixRQStEOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG4vL1xuLy8gVEhJUyBJUyBBIEdFTkVSQVRFRCBGSUxFXG4vLyBETyBOT1QgTU9ESUZZIElUISBZT1VSIENIQU5HRVMgV0lMTCBCRSBMT1NUXG5pbXBvcnQge1xuICBHcnBjTWVzc2FnZSxcbiAgUmVjdXJzaXZlUGFydGlhbCxcbiAgVG9Qcm90b2J1ZkpTT05PcHRpb25zXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIsIEJ5dGVTb3VyY2UgfSBmcm9tICdnb29nbGUtcHJvdG9idWYnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDAgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuLyoqXG4gKiBNZXNzYWdlIGltcGxlbWVudGF0aW9uIGZvciBvbmRld28ubmx1Lk9wZXJhdGlvbk1ldGFkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25NZXRhZGF0YSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIGlkID0gJ29uZGV3by5ubHUuT3BlcmF0aW9uTWV0YWRhdGEnO1xuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZSBiaW5hcnkgZGF0YSB0byBtZXNzYWdlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPcGVyYXRpb25NZXRhZGF0YSgpO1xuICAgIE9wZXJhdGlvbk1ldGFkYXRhLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIHNldCBkZWZhdWx0IHByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgcmVmaW5lVmFsdWVzKF9pbnN0YW5jZTogT3BlcmF0aW9uTWV0YWRhdGEpIHtcbiAgICBfaW5zdGFuY2Uuc3RhdHVzID0gX2luc3RhbmNlLnN0YXR1cyB8fCAwO1xuICAgIF9pbnN0YW5jZS5wYXJlbnRPcGVyYXRpb25OYW1lID0gX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzID0gX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lID0gX2luc3RhbmNlLmNyZWF0ZVRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgPSBfaW5zdGFuY2Uuc3RhcnRUaW1lIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuZW5kVGltZSA9IF9pbnN0YW5jZS5lbmRUaW1lIHx8IHVuZGVmaW5lZDtcbiAgICBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPVxuICAgICAgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIHx8IGZhbHNlO1xuICAgIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kID0gX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgfHwgJyc7XG4gICAgX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQgPSBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlcklkQ2FuY2VsbGVkID0gX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCB8fCAnJztcbiAgICBfaW5zdGFuY2UucHJvamVjdFBhcmVudCA9IF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50IHx8ICcnO1xuICAgIF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlID0gX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgfHwgMDtcbiAgICBfaW5zdGFuY2UuaG9zdE5hbWUgPSBfaW5zdGFuY2UuaG9zdE5hbWUgfHwgJyc7XG4gICAgX2luc3RhbmNlLm51bVJlcnVucyA9IF9pbnN0YW5jZS5udW1SZXJ1bnMgfHwgMDtcbiAgICBfaW5zdGFuY2UubWF4TnVtUmVydW5zID0gX2luc3RhbmNlLm1heE51bVJlcnVucyB8fCAwO1xuICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9pbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgLyByZWFkcyBiaW5hcnkgbWVzc2FnZSBpbnRvIG1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgcHJvdmlkZWQgYmluYXJ5IHJlYWRlclxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9yZWFkZXIgYmluYXJ5IHJlYWRlciBpbnN0YW5jZVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihcbiAgICBfaW5zdGFuY2U6IE9wZXJhdGlvbk1ldGFkYXRhLFxuICAgIF9yZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAoX3JlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKF9yZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChfcmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgKF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyA9XG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW10pLnB1c2goX3JlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmVuZFRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9IF9yZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICBfaW5zdGFuY2UucHJvamVjdFBhcmVudCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlID0gX3JlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgIF9pbnN0YW5jZS5ob3N0TmFtZSA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgIF9pbnN0YW5jZS5udW1SZXJ1bnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgIF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgIF9pbnN0YW5jZS5kZXNjcmlwdGlvbiA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT3BlcmF0aW9uTWV0YWRhdGEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBPcGVyYXRpb25NZXRhZGF0YSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zdGF0dXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5zdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzICYmIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZVRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuY3JlYXRlVGltZSBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGFydFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuZFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNywgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDgsIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWRDcmVhdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS51c2VySWRDcmVhdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTAsIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnByb2plY3RQYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTEsIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxMiwgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmhvc3ROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEzLCBfaW5zdGFuY2UuaG9zdE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bVJlcnVucykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDE0LCBfaW5zdGFuY2UubnVtUmVydW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigxNSwgX2luc3RhbmNlLm1heE51bVJlcnVucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTYsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdHVzOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXM7XG4gIHByaXZhdGUgX3BhcmVudE9wZXJhdGlvbk5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3ViT3BlcmF0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9jcmVhdGVUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9zdGFydFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2VuZFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2lzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jYW5jZWxDb21tYW5kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJJZENyZWF0ZWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlcklkQ2FuY2VsbGVkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Byb2plY3RQYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlcmF0aW9uVHlwZTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZTtcbiAgcHJpdmF0ZSBfaG9zdE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbnVtUmVydW5zOiBudW1iZXI7XG4gIHByaXZhdGUgX21heE51bVJlcnVuczogbnVtYmVyO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgT3BlcmF0aW9uTWV0YWRhdGEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlcmF0aW9uTWV0YWRhdGEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3RhdHVzID0gX3ZhbHVlLnN0YXR1cztcbiAgICB0aGlzLnBhcmVudE9wZXJhdGlvbk5hbWUgPSBfdmFsdWUucGFyZW50T3BlcmF0aW9uTmFtZTtcbiAgICB0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzID0gKF92YWx1ZS5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmNyZWF0ZVRpbWUgPSBfdmFsdWUuY3JlYXRlVGltZVxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKF92YWx1ZS5jcmVhdGVUaW1lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBfdmFsdWUuc3RhcnRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLnN0YXJ0VGltZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kVGltZSA9IF92YWx1ZS5lbmRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLmVuZFRpbWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gX3ZhbHVlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkO1xuICAgIHRoaXMuY2FuY2VsQ29tbWFuZCA9IF92YWx1ZS5jYW5jZWxDb21tYW5kO1xuICAgIHRoaXMudXNlcklkQ3JlYXRlZCA9IF92YWx1ZS51c2VySWRDcmVhdGVkO1xuICAgIHRoaXMudXNlcklkQ2FuY2VsbGVkID0gX3ZhbHVlLnVzZXJJZENhbmNlbGxlZDtcbiAgICB0aGlzLnByb2plY3RQYXJlbnQgPSBfdmFsdWUucHJvamVjdFBhcmVudDtcbiAgICB0aGlzLm9wZXJhdGlvblR5cGUgPSBfdmFsdWUub3BlcmF0aW9uVHlwZTtcbiAgICB0aGlzLmhvc3ROYW1lID0gX3ZhbHVlLmhvc3ROYW1lO1xuICAgIHRoaXMubnVtUmVydW5zID0gX3ZhbHVlLm51bVJlcnVucztcbiAgICB0aGlzLm1heE51bVJlcnVucyA9IF92YWx1ZS5tYXhOdW1SZXJ1bnM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICBPcGVyYXRpb25NZXRhZGF0YS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHN0YXR1cygpOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cbiAgc2V0IHN0YXR1cyh2YWx1ZTogT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhcmVudE9wZXJhdGlvbk5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50T3BlcmF0aW9uTmFtZTtcbiAgfVxuICBzZXQgcGFyZW50T3BlcmF0aW9uTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyZW50T3BlcmF0aW9uTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdWJPcGVyYXRpb25OYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1Yk9wZXJhdGlvbk5hbWVzO1xuICB9XG4gIHNldCBzdWJPcGVyYXRpb25OYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJPcGVyYXRpb25OYW1lcyA9IHZhbHVlO1xuICB9XG4gIGdldCBjcmVhdGVUaW1lKCk6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVRpbWU7XG4gIH1cbiAgc2V0IGNyZWF0ZVRpbWUodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NyZWF0ZVRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhcnRUaW1lKCk6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTtcbiAgfVxuICBzZXQgc3RhcnRUaW1lKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW5kVGltZSgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbmRUaW1lO1xuICB9XG4gIHNldCBlbmRUaW1lKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NhbmNlbGxhdGlvblJlcXVlc3RlZDtcbiAgfVxuICBzZXQgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBjYW5jZWxDb21tYW5kKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbENvbW1hbmQ7XG4gIH1cbiAgc2V0IGNhbmNlbENvbW1hbmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhbmNlbENvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlcklkQ3JlYXRlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWRDcmVhdGVkO1xuICB9XG4gIHNldCB1c2VySWRDcmVhdGVkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VySWRDcmVhdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZENhbmNlbGxlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VySWRDYW5jZWxsZWQ7XG4gIH1cbiAgc2V0IHVzZXJJZENhbmNlbGxlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcklkQ2FuY2VsbGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHByb2plY3RQYXJlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdFBhcmVudDtcbiAgfVxuICBzZXQgcHJvamVjdFBhcmVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvamVjdFBhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBvcGVyYXRpb25UeXBlKCk6IE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb25UeXBlO1xuICB9XG4gIHNldCBvcGVyYXRpb25UeXBlKHZhbHVlOiBPcGVyYXRpb25NZXRhZGF0YS5PcGVyYXRpb25UeXBlKSB7XG4gICAgdGhpcy5fb3BlcmF0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBob3N0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ob3N0TmFtZTtcbiAgfVxuICBzZXQgaG9zdE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG51bVJlcnVucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9udW1SZXJ1bnM7XG4gIH1cbiAgc2V0IG51bVJlcnVucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbnVtUmVydW5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1heE51bVJlcnVucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhOdW1SZXJ1bnM7XG4gIH1cbiAgc2V0IG1heE51bVJlcnVucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4TnVtUmVydW5zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKi9cbiAgc2VyaWFsaXplQmluYXJ5KCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBPcGVyYXRpb25NZXRhZGF0YS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIHN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IChhbGwgbm9uLXByaW1pdGl2ZSB2YWx1ZXMgYXJlIGRlZXBseSBjbG9uZWQpXG4gICAqL1xuICB0b09iamVjdCgpOiBPcGVyYXRpb25NZXRhZGF0YS5Bc09iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBwYXJlbnRPcGVyYXRpb25OYW1lOiB0aGlzLnBhcmVudE9wZXJhdGlvbk5hbWUsXG4gICAgICBzdWJPcGVyYXRpb25OYW1lczogKHRoaXMuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBjcmVhdGVUaW1lOiB0aGlzLmNyZWF0ZVRpbWUgPyB0aGlzLmNyZWF0ZVRpbWUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUgPyB0aGlzLnN0YXJ0VGltZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgZW5kVGltZTogdGhpcy5lbmRUaW1lID8gdGhpcy5lbmRUaW1lLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogdGhpcy5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCxcbiAgICAgIGNhbmNlbENvbW1hbmQ6IHRoaXMuY2FuY2VsQ29tbWFuZCxcbiAgICAgIHVzZXJJZENyZWF0ZWQ6IHRoaXMudXNlcklkQ3JlYXRlZCxcbiAgICAgIHVzZXJJZENhbmNlbGxlZDogdGhpcy51c2VySWRDYW5jZWxsZWQsXG4gICAgICBwcm9qZWN0UGFyZW50OiB0aGlzLnByb2plY3RQYXJlbnQsXG4gICAgICBvcGVyYXRpb25UeXBlOiB0aGlzLm9wZXJhdGlvblR5cGUsXG4gICAgICBob3N0TmFtZTogdGhpcy5ob3N0TmFtZSxcbiAgICAgIG51bVJlcnVuczogdGhpcy5udW1SZXJ1bnMsXG4gICAgICBtYXhOdW1SZXJ1bnM6IHRoaXMubWF4TnVtUmVydW5zLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBzdXBwb3J0IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCByZXBsaWNhdGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdG9PYmplY3QoKVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FzdCBtZXNzYWdlIHRvIEpTT04gdXNpbmcgcHJvdG9idWYgSlNPTiBub3RhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vcHJvdG9jb2wtYnVmZmVycy9kb2NzL3Byb3RvMyNqc29uXG4gICAqIEF0dGVudGlvbjogb3V0cHV0IGRpZmZlcnMgZnJvbSB0b09iamVjdCgpIGUuZy4gZW51bXMgYXJlIHJlcHJlc2VudGVkIGFzIG5hbWVzIGFuZCBub3QgYXMgbnVtYmVycywgVGltZXN0YW1wIGlzIGFuIElTTyBEYXRlIHN0cmluZyBmb3JtYXQgZXRjLlxuICAgKiBJZiB0aGUgbWVzc2FnZSBpdHNlbGYgb3Igc29tZSBvZiBkZXNjZW5kYW50IG1lc3NhZ2VzIGlzIGdvb2dsZS5wcm90b2J1Zi5BbnksIHlvdSBNVVNUIHByb3ZpZGUgYSBtZXNzYWdlIHBvb2wgYXMgb3B0aW9ucy4gSWYgbm90LCB0aGUgbWVzc2FnZVBvb2wgaXMgbm90IHJlcXVpcmVkXG4gICAqL1xuICB0b1Byb3RvYnVmSlNPTihcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3B0aW9ucz86IFRvUHJvdG9idWZKU09OT3B0aW9uc1xuICApOiBPcGVyYXRpb25NZXRhZGF0YS5Bc1Byb3RvYnVmSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czpcbiAgICAgICAgT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzW1xuICAgICAgICAgIHRoaXMuc3RhdHVzID09PSBudWxsIHx8IHRoaXMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAwIDogdGhpcy5zdGF0dXNcbiAgICAgICAgXSxcbiAgICAgIHBhcmVudE9wZXJhdGlvbk5hbWU6IHRoaXMucGFyZW50T3BlcmF0aW9uTmFtZSxcbiAgICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiAodGhpcy5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGNyZWF0ZVRpbWU6IHRoaXMuY3JlYXRlVGltZVxuICAgICAgICA/IHRoaXMuY3JlYXRlVGltZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKVxuICAgICAgICA6IG51bGwsXG4gICAgICBzdGFydFRpbWU6IHRoaXMuc3RhcnRUaW1lID8gdGhpcy5zdGFydFRpbWUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgZW5kVGltZTogdGhpcy5lbmRUaW1lID8gdGhpcy5lbmRUaW1lLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpIDogbnVsbCxcbiAgICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkLFxuICAgICAgY2FuY2VsQ29tbWFuZDogdGhpcy5jYW5jZWxDb21tYW5kLFxuICAgICAgdXNlcklkQ3JlYXRlZDogdGhpcy51c2VySWRDcmVhdGVkLFxuICAgICAgdXNlcklkQ2FuY2VsbGVkOiB0aGlzLnVzZXJJZENhbmNlbGxlZCxcbiAgICAgIHByb2plY3RQYXJlbnQ6IHRoaXMucHJvamVjdFBhcmVudCxcbiAgICAgIG9wZXJhdGlvblR5cGU6XG4gICAgICAgIE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGVbXG4gICAgICAgICAgdGhpcy5vcGVyYXRpb25UeXBlID09PSBudWxsIHx8IHRoaXMub3BlcmF0aW9uVHlwZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogdGhpcy5vcGVyYXRpb25UeXBlXG4gICAgICAgIF0sXG4gICAgICBob3N0TmFtZTogdGhpcy5ob3N0TmFtZSxcbiAgICAgIG51bVJlcnVuczogdGhpcy5udW1SZXJ1bnMsXG4gICAgICBtYXhOdW1SZXJ1bnM6IHRoaXMubWF4TnVtUmVydW5zLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wZXJhdGlvbk1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBPcGVyYXRpb25NZXRhZGF0YVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3RhdHVzOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXM7XG4gICAgcGFyZW50T3BlcmF0aW9uTmFtZTogc3RyaW5nO1xuICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgICBjcmVhdGVUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIHN0YXJ0VGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBlbmRUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBib29sZWFuO1xuICAgIGNhbmNlbENvbW1hbmQ6IHN0cmluZztcbiAgICB1c2VySWRDcmVhdGVkOiBzdHJpbmc7XG4gICAgdXNlcklkQ2FuY2VsbGVkOiBzdHJpbmc7XG4gICAgcHJvamVjdFBhcmVudDogc3RyaW5nO1xuICAgIG9wZXJhdGlvblR5cGU6IE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGU7XG4gICAgaG9zdE5hbWU6IHN0cmluZztcbiAgICBudW1SZXJ1bnM6IG51bWJlcjtcbiAgICBtYXhOdW1SZXJ1bnM6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvYnVmIEpTT04gcmVwcmVzZW50YXRpb24gZm9yIE9wZXJhdGlvbk1ldGFkYXRhXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzUHJvdG9idWZKU09OIHtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBwYXJlbnRPcGVyYXRpb25OYW1lOiBzdHJpbmc7XG4gICAgc3ViT3BlcmF0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICAgIGNyZWF0ZVRpbWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgc3RhcnRUaW1lOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGVuZFRpbWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGJvb2xlYW47XG4gICAgY2FuY2VsQ29tbWFuZDogc3RyaW5nO1xuICAgIHVzZXJJZENyZWF0ZWQ6IHN0cmluZztcbiAgICB1c2VySWRDYW5jZWxsZWQ6IHN0cmluZztcbiAgICBwcm9qZWN0UGFyZW50OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uVHlwZTogc3RyaW5nO1xuICAgIGhvc3ROYW1lOiBzdHJpbmc7XG4gICAgbnVtUmVydW5zOiBudW1iZXI7XG4gICAgbWF4TnVtUmVydW5zOiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBTdGF0dXMge1xuICAgIFNUQVRVU19VTlNQRUNJRklFRCA9IDAsXG4gICAgTk9UX1NUQVJURUQgPSAxLFxuICAgIElOX1BST0dSRVNTID0gMixcbiAgICBET05FID0gMyxcbiAgICBDQU5DRUxMRUQgPSA0LFxuICAgIEZBSUxFRCA9IDVcbiAgfVxuICBleHBvcnQgZW51bSBPcGVyYXRpb25UeXBlIHtcbiAgICBPUEVSQVRJT05fVFlQRV9VTlNQRUNJRklFRCA9IDAsXG4gICAgQ1JFQVRFX0FHRU5UID0gMSxcbiAgICBJTVBPUlRfQUdFTlQgPSAyLFxuICAgIEVYUE9SVF9BR0VOVCA9IDMsXG4gICAgREVMRVRFX0FHRU5UID0gNCxcbiAgICBSRVNUT1JFX0FHRU5UID0gNSxcbiAgICBCVUlMRF9BR0VOVF9DQUNIRSA9IDYsXG4gICAgVFJBSU5fQUdFTlQgPSA3LFxuICAgIEVYUE9SVF9CRU5DSE1BUktfQUdFTlQgPSA4XG4gIH1cbn1cbiJdfQ==