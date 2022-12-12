import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for ondewo.nlu.OperationMetadata
 */
export class OperationMetadata {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLW1ldGFkYXRhLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9uLW1ldGFkYXRhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQWtONUI7OztPQUdHO0lBQ0gsWUFBWSxNQUFxRDtRQUMvRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVTtZQUNqQyxDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUztZQUMvQixDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUMzQixDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxDQUFD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QUNoQixtRUFBaUIsQ0FBQTtRQUNqQiwyRUFBcUIsQ0FBQTtRQUNyQiwrREFBZSxDQUFBO1FBQ2YscUZBQTBCLENBQUE7SUFDNUIsQ0FBQyxFQVZXLGFBQWEsR0FBYiwrQkFBYSxLQUFiLCtCQUFhLFFBVXhCO0FBQ0gsQ0FBQyxFQS9EYSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBK0Q5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuT3BlcmF0aW9uTWV0YWRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbk1ldGFkYXRhIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5PcGVyYXRpb25NZXRhZGF0YSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wZXJhdGlvbk1ldGFkYXRhKCk7XG4gICAgT3BlcmF0aW9uTWV0YWRhdGEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBPcGVyYXRpb25NZXRhZGF0YSkge1xuICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUgPSBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgPSBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUgPSBfaW5zdGFuY2UuY3JlYXRlVGltZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnN0YXJ0VGltZSA9IF9pbnN0YW5jZS5zdGFydFRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gX2luc3RhbmNlLmVuZFRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9XG4gICAgICBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgPSBfaW5zdGFuY2UuY2FuY2VsQ29tbWFuZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCA9IF9pbnN0YW5jZS51c2VySWRDcmVhdGVkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQgPSBfaW5zdGFuY2UudXNlcklkQ2FuY2VsbGVkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50ID0gX2luc3RhbmNlLnByb2plY3RQYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgPSBfaW5zdGFuY2Uub3BlcmF0aW9uVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5ob3N0TmFtZSA9IF9pbnN0YW5jZS5ob3N0TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubnVtUmVydW5zID0gX2luc3RhbmNlLm51bVJlcnVucyB8fCAwO1xuICAgIF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMgPSBfaW5zdGFuY2UubWF4TnVtUmVydW5zIHx8IDA7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogT3BlcmF0aW9uTWV0YWRhdGEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnRPcGVyYXRpb25OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlVGltZSA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VySWRDcmVhdGVkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLmhvc3ROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLm51bVJlcnVucyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLm1heE51bVJlcnVucyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgX3JlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPcGVyYXRpb25NZXRhZGF0YS5yZWZpbmVWYWx1ZXMoX2luc3RhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWVzc2FnZSB0byBiaW5hcnkgZm9ybWF0IHVzaW5nIHByb3ZpZGVkIGJpbmFyeSByZWFkZXJcbiAgICogQHBhcmFtIF9pbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqIEBwYXJhbSBfd3JpdGVyIGJpbmFyeSB3cml0ZXIgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemVCaW5hcnlUb1dyaXRlcihcbiAgICBfaW5zdGFuY2U6IE9wZXJhdGlvbk1ldGFkYXRhLFxuICAgIF93cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoX2luc3RhbmNlLnN0YXR1cykge1xuICAgICAgX3dyaXRlci53cml0ZUVudW0oMSwgX2luc3RhbmNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygyLCBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgJiYgX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzLmxlbmd0aCkge1xuICAgICAgX3dyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDMsIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuY3JlYXRlVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIF9pbnN0YW5jZS5jcmVhdGVUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN0YXJ0VGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZW5kVGltZSkge1xuICAgICAgX3dyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIF9pbnN0YW5jZS5lbmRUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlQm9vbCg3LCBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNhbmNlbENvbW1hbmQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOCwgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoOSwgX2luc3RhbmNlLnVzZXJJZENyZWF0ZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMCwgX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UucHJvamVjdFBhcmVudCkge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxMSwgX2luc3RhbmNlLnByb2plY3RQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm9wZXJhdGlvblR5cGUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEyLCBfaW5zdGFuY2Uub3BlcmF0aW9uVHlwZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuaG9zdE5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTMsIF9pbnN0YW5jZS5ob3N0TmFtZSk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubnVtUmVydW5zKSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMTQsIF9pbnN0YW5jZS5udW1SZXJ1bnMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm1heE51bVJlcnVucykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDE1LCBfaW5zdGFuY2UubWF4TnVtUmVydW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5kZXNjcmlwdGlvbikge1xuICAgICAgX3dyaXRlci53cml0ZVN0cmluZygxNiwgX2luc3RhbmNlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGF0dXM6IE9wZXJhdGlvbk1ldGFkYXRhLlN0YXR1cztcbiAgcHJpdmF0ZSBfcGFyZW50T3BlcmF0aW9uTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9zdWJPcGVyYXRpb25OYW1lczogc3RyaW5nW107XG4gIHByaXZhdGUgX2NyZWF0ZVRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX3N0YXJ0VGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfZW5kVGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcDtcbiAgcHJpdmF0ZSBfaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbmNlbENvbW1hbmQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlcklkQ3JlYXRlZDogc3RyaW5nO1xuICBwcml2YXRlIF91c2VySWRDYW5jZWxsZWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJvamVjdFBhcmVudDogc3RyaW5nO1xuICBwcml2YXRlIF9vcGVyYXRpb25UeXBlOiBPcGVyYXRpb25NZXRhZGF0YS5PcGVyYXRpb25UeXBlO1xuICBwcml2YXRlIF9ob3N0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9udW1SZXJ1bnM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4TnVtUmVydW5zOiBudW1iZXI7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgY29uc3RydWN0b3IuIEluaXRpYWxpemVzIHRoZSBwcm9wZXJ0aWVzIGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX3ZhbHVlIGluaXRpYWwgdmFsdWVzIG9iamVjdCBvciBpbnN0YW5jZSBvZiBPcGVyYXRpb25NZXRhZGF0YSB0byBkZWVwbHkgY2xvbmUgZnJvbVxuICAgKi9cbiAgY29uc3RydWN0b3IoX3ZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxPcGVyYXRpb25NZXRhZGF0YS5Bc09iamVjdD4pIHtcbiAgICBfdmFsdWUgPSBfdmFsdWUgfHwge307XG4gICAgdGhpcy5zdGF0dXMgPSBfdmFsdWUuc3RhdHVzO1xuICAgIHRoaXMucGFyZW50T3BlcmF0aW9uTmFtZSA9IF92YWx1ZS5wYXJlbnRPcGVyYXRpb25OYW1lO1xuICAgIHRoaXMuc3ViT3BlcmF0aW9uTmFtZXMgPSAoX3ZhbHVlLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMuY3JlYXRlVGltZSA9IF92YWx1ZS5jcmVhdGVUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLmNyZWF0ZVRpbWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IF92YWx1ZS5zdGFydFRpbWVcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcChfdmFsdWUuc3RhcnRUaW1lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmRUaW1lID0gX3ZhbHVlLmVuZFRpbWVcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcChfdmFsdWUuZW5kVGltZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPSBfdmFsdWUuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ7XG4gICAgdGhpcy5jYW5jZWxDb21tYW5kID0gX3ZhbHVlLmNhbmNlbENvbW1hbmQ7XG4gICAgdGhpcy51c2VySWRDcmVhdGVkID0gX3ZhbHVlLnVzZXJJZENyZWF0ZWQ7XG4gICAgdGhpcy51c2VySWRDYW5jZWxsZWQgPSBfdmFsdWUudXNlcklkQ2FuY2VsbGVkO1xuICAgIHRoaXMucHJvamVjdFBhcmVudCA9IF92YWx1ZS5wcm9qZWN0UGFyZW50O1xuICAgIHRoaXMub3BlcmF0aW9uVHlwZSA9IF92YWx1ZS5vcGVyYXRpb25UeXBlO1xuICAgIHRoaXMuaG9zdE5hbWUgPSBfdmFsdWUuaG9zdE5hbWU7XG4gICAgdGhpcy5udW1SZXJ1bnMgPSBfdmFsdWUubnVtUmVydW5zO1xuICAgIHRoaXMubWF4TnVtUmVydW5zID0gX3ZhbHVlLm1heE51bVJlcnVucztcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gX3ZhbHVlLmRlc2NyaXB0aW9uO1xuICAgIE9wZXJhdGlvbk1ldGFkYXRhLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgc3RhdHVzKCk6IE9wZXJhdGlvbk1ldGFkYXRhLlN0YXR1cyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuICBzZXQgc3RhdHVzKHZhbHVlOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXMpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFyZW50T3BlcmF0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRPcGVyYXRpb25OYW1lO1xuICB9XG4gIHNldCBwYXJlbnRPcGVyYXRpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnRPcGVyYXRpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN1Yk9wZXJhdGlvbk5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fc3ViT3BlcmF0aW9uTmFtZXM7XG4gIH1cbiAgc2V0IHN1Yk9wZXJhdGlvbk5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Yk9wZXJhdGlvbk5hbWVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNyZWF0ZVRpbWUoKTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlVGltZTtcbiAgfVxuICBzZXQgY3JlYXRlVGltZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY3JlYXRlVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdGFydFRpbWUoKTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuICB9XG4gIHNldCBzdGFydFRpbWUodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbmRUaW1lKCk6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRpbWU7XG4gIH1cbiAgc2V0IGVuZFRpbWUodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VuZFRpbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkO1xuICB9XG4gIHNldCBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhbmNlbENvbW1hbmQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsQ29tbWFuZDtcbiAgfVxuICBzZXQgY2FuY2VsQ29tbWFuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FuY2VsQ29tbWFuZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRDcmVhdGVkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZENyZWF0ZWQ7XG4gIH1cbiAgc2V0IHVzZXJJZENyZWF0ZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJZENyZWF0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlcklkQ2FuY2VsbGVkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJZENhbmNlbGxlZDtcbiAgfVxuICBzZXQgdXNlcklkQ2FuY2VsbGVkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VySWRDYW5jZWxsZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHJvamVjdFBhcmVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0UGFyZW50O1xuICB9XG4gIHNldCBwcm9qZWN0UGFyZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9qZWN0UGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wZXJhdGlvblR5cGUoKTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvblR5cGU7XG4gIH1cbiAgc2V0IG9wZXJhdGlvblR5cGUodmFsdWU6IE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGUpIHtcbiAgICB0aGlzLl9vcGVyYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGhvc3ROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3ROYW1lO1xuICB9XG4gIHNldCBob3N0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtUmVydW5zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX251bVJlcnVucztcbiAgfVxuICBzZXQgbnVtUmVydW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1SZXJ1bnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWF4TnVtUmVydW5zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heE51bVJlcnVucztcbiAgfVxuICBzZXQgbWF4TnVtUmVydW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhOdW1SZXJ1bnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBtZXNzYWdlIGluc3RhbmNlXG4gICAqL1xuICBzZXJpYWxpemVCaW5hcnkoKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE9wZXJhdGlvbk1ldGFkYXRhLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gc3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgKGFsbCBub24tcHJpbWl0aXZlIHZhbHVlcyBhcmUgZGVlcGx5IGNsb25lZClcbiAgICovXG4gIHRvT2JqZWN0KCk6IE9wZXJhdGlvbk1ldGFkYXRhLkFzT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHBhcmVudE9wZXJhdGlvbk5hbWU6IHRoaXMucGFyZW50T3BlcmF0aW9uTmFtZSxcbiAgICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiAodGhpcy5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIGNyZWF0ZVRpbWU6IHRoaXMuY3JlYXRlVGltZSA/IHRoaXMuY3JlYXRlVGltZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgc3RhcnRUaW1lOiB0aGlzLnN0YXJ0VGltZSA/IHRoaXMuc3RhcnRUaW1lLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBlbmRUaW1lOiB0aGlzLmVuZFRpbWUgPyB0aGlzLmVuZFRpbWUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkLFxuICAgICAgY2FuY2VsQ29tbWFuZDogdGhpcy5jYW5jZWxDb21tYW5kLFxuICAgICAgdXNlcklkQ3JlYXRlZDogdGhpcy51c2VySWRDcmVhdGVkLFxuICAgICAgdXNlcklkQ2FuY2VsbGVkOiB0aGlzLnVzZXJJZENhbmNlbGxlZCxcbiAgICAgIHByb2plY3RQYXJlbnQ6IHRoaXMucHJvamVjdFBhcmVudCxcbiAgICAgIG9wZXJhdGlvblR5cGU6IHRoaXMub3BlcmF0aW9uVHlwZSxcbiAgICAgIGhvc3ROYW1lOiB0aGlzLmhvc3ROYW1lLFxuICAgICAgbnVtUmVydW5zOiB0aGlzLm51bVJlcnVucyxcbiAgICAgIG1heE51bVJlcnVuczogdGhpcy5tYXhOdW1SZXJ1bnMsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE9wZXJhdGlvbk1ldGFkYXRhLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOlxuICAgICAgICBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXNbXG4gICAgICAgICAgdGhpcy5zdGF0dXMgPT09IG51bGwgfHwgdGhpcy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnN0YXR1c1xuICAgICAgICBdLFxuICAgICAgcGFyZW50T3BlcmF0aW9uTmFtZTogdGhpcy5wYXJlbnRPcGVyYXRpb25OYW1lLFxuICAgICAgc3ViT3BlcmF0aW9uTmFtZXM6ICh0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgY3JlYXRlVGltZTogdGhpcy5jcmVhdGVUaW1lXG4gICAgICAgID8gdGhpcy5jcmVhdGVUaW1lLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUgPyB0aGlzLnN0YXJ0VGltZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBlbmRUaW1lOiB0aGlzLmVuZFRpbWUgPyB0aGlzLmVuZFRpbWUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHRoaXMuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQsXG4gICAgICBjYW5jZWxDb21tYW5kOiB0aGlzLmNhbmNlbENvbW1hbmQsXG4gICAgICB1c2VySWRDcmVhdGVkOiB0aGlzLnVzZXJJZENyZWF0ZWQsXG4gICAgICB1c2VySWRDYW5jZWxsZWQ6IHRoaXMudXNlcklkQ2FuY2VsbGVkLFxuICAgICAgcHJvamVjdFBhcmVudDogdGhpcy5wcm9qZWN0UGFyZW50LFxuICAgICAgb3BlcmF0aW9uVHlwZTpcbiAgICAgICAgT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZVtcbiAgICAgICAgICB0aGlzLm9wZXJhdGlvblR5cGUgPT09IG51bGwgfHwgdGhpcy5vcGVyYXRpb25UeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm9wZXJhdGlvblR5cGVcbiAgICAgICAgXSxcbiAgICAgIGhvc3ROYW1lOiB0aGlzLmhvc3ROYW1lLFxuICAgICAgbnVtUmVydW5zOiB0aGlzLm51bVJlcnVucyxcbiAgICAgIG1heE51bVJlcnVuczogdGhpcy5tYXhOdW1SZXJ1bnMsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgT3BlcmF0aW9uTWV0YWRhdGEge1xuICAvKipcbiAgICogU3RhbmRhcmQgSmF2YVNjcmlwdCBvYmplY3QgcmVwcmVzZW50YXRpb24gZm9yIE9wZXJhdGlvbk1ldGFkYXRhXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFzT2JqZWN0IHtcbiAgICBzdGF0dXM6IE9wZXJhdGlvbk1ldGFkYXRhLlN0YXR1cztcbiAgICBwYXJlbnRPcGVyYXRpb25OYW1lOiBzdHJpbmc7XG4gICAgc3ViT3BlcmF0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICAgIGNyZWF0ZVRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgc3RhcnRUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIGVuZFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNPYmplY3Q7XG4gICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGJvb2xlYW47XG4gICAgY2FuY2VsQ29tbWFuZDogc3RyaW5nO1xuICAgIHVzZXJJZENyZWF0ZWQ6IHN0cmluZztcbiAgICB1c2VySWRDYW5jZWxsZWQ6IHN0cmluZztcbiAgICBwcm9qZWN0UGFyZW50OiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uVHlwZTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZTtcbiAgICBob3N0TmFtZTogc3RyaW5nO1xuICAgIG51bVJlcnVuczogbnVtYmVyO1xuICAgIG1heE51bVJlcnVuczogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG9idWYgSlNPTiByZXByZXNlbnRhdGlvbiBmb3IgT3BlcmF0aW9uTWV0YWRhdGFcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXNQcm90b2J1ZkpTT04ge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHBhcmVudE9wZXJhdGlvbk5hbWU6IHN0cmluZztcbiAgICBzdWJPcGVyYXRpb25OYW1lczogc3RyaW5nW107XG4gICAgY3JlYXRlVGltZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBzdGFydFRpbWU6IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc1Byb3RvYnVmSlNPTiB8IG51bGw7XG4gICAgZW5kVGltZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogYm9vbGVhbjtcbiAgICBjYW5jZWxDb21tYW5kOiBzdHJpbmc7XG4gICAgdXNlcklkQ3JlYXRlZDogc3RyaW5nO1xuICAgIHVzZXJJZENhbmNlbGxlZDogc3RyaW5nO1xuICAgIHByb2plY3RQYXJlbnQ6IHN0cmluZztcbiAgICBvcGVyYXRpb25UeXBlOiBzdHJpbmc7XG4gICAgaG9zdE5hbWU6IHN0cmluZztcbiAgICBudW1SZXJ1bnM6IG51bWJlcjtcbiAgICBtYXhOdW1SZXJ1bnM6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFN0YXR1cyB7XG4gICAgU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBOT1RfU1RBUlRFRCA9IDEsXG4gICAgSU5fUFJPR1JFU1MgPSAyLFxuICAgIERPTkUgPSAzLFxuICAgIENBTkNFTExFRCA9IDQsXG4gICAgRkFJTEVEID0gNVxuICB9XG4gIGV4cG9ydCBlbnVtIE9wZXJhdGlvblR5cGUge1xuICAgIE9QRVJBVElPTl9UWVBFX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBDUkVBVEVfQUdFTlQgPSAxLFxuICAgIElNUE9SVF9BR0VOVCA9IDIsXG4gICAgRVhQT1JUX0FHRU5UID0gMyxcbiAgICBERUxFVEVfQUdFTlQgPSA0LFxuICAgIFJFU1RPUkVfQUdFTlQgPSA1LFxuICAgIEJVSUxEX0FHRU5UX0NBQ0hFID0gNixcbiAgICBUUkFJTl9BR0VOVCA9IDcsXG4gICAgRVhQT1JUX0JFTkNITUFSS19BR0VOVCA9IDhcbiAgfVxufVxuIl19