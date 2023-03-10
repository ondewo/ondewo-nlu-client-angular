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
        this.log = (_value.log || []).slice();
        this.logLimit = _value.logLimit;
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
        _instance.log = _instance.log || [];
        _instance.logLimit = _instance.logLimit || 0;
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
                case 17:
                    (_instance.log = _instance.log || []).push(_reader.readString());
                    break;
                case 18:
                    _instance.logLimit = _reader.readInt32();
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
        if (_instance.log && _instance.log.length) {
            _writer.writeRepeatedString(17, _instance.log);
        }
        if (_instance.logLimit) {
            _writer.writeInt32(18, _instance.logLimit);
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
    get log() {
        return this._log;
    }
    set log(value) {
        this._log = value;
    }
    get logLimit() {
        return this._logLimit;
    }
    set logLimit(value) {
        this._logLimit = value;
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
            description: this.description,
            log: (this.log || []).slice(),
            logLimit: this.logLimit
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
            description: this.description,
            log: (this.log || []).slice(),
            logLimit: this.logLimit
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLW1ldGFkYXRhLnBiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9uLW1ldGFkYXRhLnBiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQ2hFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQWtPNUI7OztPQUdHO0lBQ0gsWUFBWSxNQUFxRDtRQUMvRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVTtZQUNqQyxDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUztZQUMvQixDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUMzQixDQUFDLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxDQUFD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aURBQWUsQ0FBQTtRQUNmLG1DQUFRLENBQUE7UUFDUiw2Q0FBYSxDQUFBO1FBQ2IsdUNBQVUsQ0FBQTtJQUNaLENBQUMsRUFQVyxNQUFNLEdBQU4sd0JBQU0sS0FBTix3QkFBTSxRQU9qQjtJQUNELElBQVksYUFVWDtJQVZELFdBQVksYUFBYTtRQUN2Qiw2RkFBOEIsQ0FBQTtRQUM5QixpRUFBZ0IsQ0FBQTtRQUNoQixpRUFBZ0IsQ0FBQTtRQUNoQixpRUFBZ0IsQ0FBQTtRQUNoQixpRUFBZ0IsQ0FBQTtRQUNoQixtRUFBaUIsQ0FBQTtRQUNqQiwyRUFBcUIsQ0FBQTtRQUNyQiwrREFBZSxDQUFBO1FBQ2YscUZBQTBCLENBQUE7SUFDNUIsQ0FBQyxFQVZXLGFBQWEsR0FBYiwrQkFBYSxLQUFiLCtCQUFhLFFBVXhCO0FBQ0gsQ0FBQyxFQW5FYSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBbUU5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7XG4gIEdycGNNZXNzYWdlLFxuICBSZWN1cnNpdmVQYXJ0aWFsLFxuICBUb1Byb3RvYnVmSlNPTk9wdGlvbnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMCBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG4vKipcbiAqIE1lc3NhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG9uZGV3by5ubHUuT3BlcmF0aW9uTWV0YWRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbk1ldGFkYXRhIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgaWQgPSAnb25kZXdvLm5sdS5PcGVyYXRpb25NZXRhZGF0YSc7XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplIGJpbmFyeSBkYXRhIHRvIG1lc3NhZ2VcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wZXJhdGlvbk1ldGFkYXRhKCk7XG4gICAgT3BlcmF0aW9uTWV0YWRhdGEuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFsbCB0aGUgcHJvcGVydGllcyBhbmQgc2V0IGRlZmF1bHQgcHJvdG9idWYgdmFsdWVzIGlmIG5lY2Vzc2FyeVxuICAgKiBAcGFyYW0gX2luc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoX2luc3RhbmNlOiBPcGVyYXRpb25NZXRhZGF0YSkge1xuICAgIF9pbnN0YW5jZS5zdGF0dXMgPSBfaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gICAgX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUgPSBfaW5zdGFuY2UucGFyZW50T3BlcmF0aW9uTmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgPSBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMgfHwgW107XG4gICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUgPSBfaW5zdGFuY2UuY3JlYXRlVGltZSB8fCB1bmRlZmluZWQ7XG4gICAgX2luc3RhbmNlLnN0YXJ0VGltZSA9IF9pbnN0YW5jZS5zdGFydFRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gX2luc3RhbmNlLmVuZFRpbWUgfHwgdW5kZWZpbmVkO1xuICAgIF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9XG4gICAgICBfaW5zdGFuY2UuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgfHwgZmFsc2U7XG4gICAgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgPSBfaW5zdGFuY2UuY2FuY2VsQ29tbWFuZCB8fCAnJztcbiAgICBfaW5zdGFuY2UudXNlcklkQ3JlYXRlZCA9IF9pbnN0YW5jZS51c2VySWRDcmVhdGVkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQgPSBfaW5zdGFuY2UudXNlcklkQ2FuY2VsbGVkIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50ID0gX2luc3RhbmNlLnByb2plY3RQYXJlbnQgfHwgJyc7XG4gICAgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgPSBfaW5zdGFuY2Uub3BlcmF0aW9uVHlwZSB8fCAwO1xuICAgIF9pbnN0YW5jZS5ob3N0TmFtZSA9IF9pbnN0YW5jZS5ob3N0TmFtZSB8fCAnJztcbiAgICBfaW5zdGFuY2UubnVtUmVydW5zID0gX2luc3RhbmNlLm51bVJlcnVucyB8fCAwO1xuICAgIF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMgPSBfaW5zdGFuY2UubWF4TnVtUmVydW5zIHx8IDA7XG4gICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX2luc3RhbmNlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIF9pbnN0YW5jZS5sb2cgPSBfaW5zdGFuY2UubG9nIHx8IFtdO1xuICAgIF9pbnN0YW5jZS5sb2dMaW1pdCA9IF9pbnN0YW5jZS5sb2dMaW1pdCB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyAvIHJlYWRzIGJpbmFyeSBtZXNzYWdlIGludG8gbWVzc2FnZSBpbnN0YW5jZSB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3JlYWRlciBiaW5hcnkgcmVhZGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKFxuICAgIF9pbnN0YW5jZTogT3BlcmF0aW9uTWV0YWRhdGEsXG4gICAgX3JlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChfcmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAoX3JlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKF9yZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgX2luc3RhbmNlLnN0YXR1cyA9IF9yZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIF9pbnN0YW5jZS5wYXJlbnRPcGVyYXRpb25OYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAoX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzID1cbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkucHVzaChfcmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBfaW5zdGFuY2UuY3JlYXRlVGltZSA9IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoKTtcbiAgICAgICAgICBfcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgX2luc3RhbmNlLmNyZWF0ZVRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKCk7XG4gICAgICAgICAgX3JlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zdGFydFRpbWUsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIF9pbnN0YW5jZS5lbmRUaW1lID0gbmV3IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcCgpO1xuICAgICAgICAgIF9yZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gX3JlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgX2luc3RhbmNlLmNhbmNlbENvbW1hbmQgPSBfcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIF9pbnN0YW5jZS51c2VySWRDcmVhdGVkID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgX2luc3RhbmNlLnVzZXJJZENhbmNlbGxlZCA9IF9yZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50ID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUgPSBfcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgX2luc3RhbmNlLmhvc3ROYW1lID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgX2luc3RhbmNlLm51bVJlcnVucyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgX2luc3RhbmNlLm1heE51bVJlcnVucyA9IF9yZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgX2luc3RhbmNlLmRlc2NyaXB0aW9uID0gX3JlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgKF9pbnN0YW5jZS5sb2cgPSBfaW5zdGFuY2UubG9nIHx8IFtdKS5wdXNoKF9yZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBfaW5zdGFuY2UubG9nTGltaXQgPSBfcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIF9yZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT3BlcmF0aW9uTWV0YWRhdGEucmVmaW5lVmFsdWVzKF9pbnN0YW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhIG1lc3NhZ2UgdG8gYmluYXJ5IGZvcm1hdCB1c2luZyBwcm92aWRlZCBiaW5hcnkgcmVhZGVyXG4gICAqIEBwYXJhbSBfaW5zdGFuY2UgbWVzc2FnZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX3dyaXRlciBiaW5hcnkgd3JpdGVyIGluc3RhbmNlXG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIoXG4gICAgX2luc3RhbmNlOiBPcGVyYXRpb25NZXRhZGF0YSxcbiAgICBfd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKF9pbnN0YW5jZS5zdGF0dXMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVFbnVtKDEsIF9pbnN0YW5jZS5zdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMiwgX2luc3RhbmNlLnBhcmVudE9wZXJhdGlvbk5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnN1Yk9wZXJhdGlvbk5hbWVzICYmIF9pbnN0YW5jZS5zdWJPcGVyYXRpb25OYW1lcy5sZW5ndGgpIHtcbiAgICAgIF93cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygzLCBfaW5zdGFuY2Uuc3ViT3BlcmF0aW9uTmFtZXMpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmNyZWF0ZVRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBfaW5zdGFuY2UuY3JlYXRlVGltZSBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5zdGFydFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBfaW5zdGFuY2Uuc3RhcnRUaW1lIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmVuZFRpbWUpIHtcbiAgICAgIF93cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBfaW5zdGFuY2UuZW5kVGltZSBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCkge1xuICAgICAgX3dyaXRlci53cml0ZUJvb2woNywgX2luc3RhbmNlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDgsIF9pbnN0YW5jZS5jYW5jZWxDb21tYW5kKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWRDcmVhdGVkKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDksIF9pbnN0YW5jZS51c2VySWRDcmVhdGVkKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTAsIF9pbnN0YW5jZS51c2VySWRDYW5jZWxsZWQpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLnByb2plY3RQYXJlbnQpIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTEsIF9pbnN0YW5jZS5wcm9qZWN0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5vcGVyYXRpb25UeXBlKSB7XG4gICAgICBfd3JpdGVyLndyaXRlRW51bSgxMiwgX2luc3RhbmNlLm9wZXJhdGlvblR5cGUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmhvc3ROYW1lKSB7XG4gICAgICBfd3JpdGVyLndyaXRlU3RyaW5nKDEzLCBfaW5zdGFuY2UuaG9zdE5hbWUpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLm51bVJlcnVucykge1xuICAgICAgX3dyaXRlci53cml0ZUludDMyKDE0LCBfaW5zdGFuY2UubnVtUmVydW5zKTtcbiAgICB9XG4gICAgaWYgKF9pbnN0YW5jZS5tYXhOdW1SZXJ1bnMpIHtcbiAgICAgIF93cml0ZXIud3JpdGVJbnQzMigxNSwgX2luc3RhbmNlLm1heE51bVJlcnVucyk7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIF93cml0ZXIud3JpdGVTdHJpbmcoMTYsIF9pbnN0YW5jZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChfaW5zdGFuY2UubG9nICYmIF9pbnN0YW5jZS5sb2cubGVuZ3RoKSB7XG4gICAgICBfd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMTcsIF9pbnN0YW5jZS5sb2cpO1xuICAgIH1cbiAgICBpZiAoX2luc3RhbmNlLmxvZ0xpbWl0KSB7XG4gICAgICBfd3JpdGVyLndyaXRlSW50MzIoMTgsIF9pbnN0YW5jZS5sb2dMaW1pdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdHVzOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXM7XG4gIHByaXZhdGUgX3BhcmVudE9wZXJhdGlvbk5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3ViT3BlcmF0aW9uTmFtZXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9jcmVhdGVUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wO1xuICBwcml2YXRlIF9zdGFydFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2VuZFRpbWU/OiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXA7XG4gIHByaXZhdGUgX2lzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jYW5jZWxDb21tYW5kOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJJZENyZWF0ZWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlcklkQ2FuY2VsbGVkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Byb2plY3RQYXJlbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlcmF0aW9uVHlwZTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZTtcbiAgcHJpdmF0ZSBfaG9zdE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbnVtUmVydW5zOiBudW1iZXI7XG4gIHByaXZhdGUgX21heE51bVJlcnVuczogbnVtYmVyO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9sb2c6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9sb2dMaW1pdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGNvbnN0cnVjdG9yLiBJbml0aWFsaXplcyB0aGUgcHJvcGVydGllcyBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICogQHBhcmFtIF92YWx1ZSBpbml0aWFsIHZhbHVlcyBvYmplY3Qgb3IgaW5zdGFuY2Ugb2YgT3BlcmF0aW9uTWV0YWRhdGEgdG8gZGVlcGx5IGNsb25lIGZyb21cbiAgICovXG4gIGNvbnN0cnVjdG9yKF92YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3BlcmF0aW9uTWV0YWRhdGEuQXNPYmplY3Q+KSB7XG4gICAgX3ZhbHVlID0gX3ZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc3RhdHVzID0gX3ZhbHVlLnN0YXR1cztcbiAgICB0aGlzLnBhcmVudE9wZXJhdGlvbk5hbWUgPSBfdmFsdWUucGFyZW50T3BlcmF0aW9uTmFtZTtcbiAgICB0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzID0gKF92YWx1ZS5zdWJPcGVyYXRpb25OYW1lcyB8fCBbXSkuc2xpY2UoKTtcbiAgICB0aGlzLmNyZWF0ZVRpbWUgPSBfdmFsdWUuY3JlYXRlVGltZVxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wKF92YWx1ZS5jcmVhdGVUaW1lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBfdmFsdWUuc3RhcnRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLnN0YXJ0VGltZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kVGltZSA9IF92YWx1ZS5lbmRUaW1lXG4gICAgICA/IG5ldyBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAoX3ZhbHVlLmVuZFRpbWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gX3ZhbHVlLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkO1xuICAgIHRoaXMuY2FuY2VsQ29tbWFuZCA9IF92YWx1ZS5jYW5jZWxDb21tYW5kO1xuICAgIHRoaXMudXNlcklkQ3JlYXRlZCA9IF92YWx1ZS51c2VySWRDcmVhdGVkO1xuICAgIHRoaXMudXNlcklkQ2FuY2VsbGVkID0gX3ZhbHVlLnVzZXJJZENhbmNlbGxlZDtcbiAgICB0aGlzLnByb2plY3RQYXJlbnQgPSBfdmFsdWUucHJvamVjdFBhcmVudDtcbiAgICB0aGlzLm9wZXJhdGlvblR5cGUgPSBfdmFsdWUub3BlcmF0aW9uVHlwZTtcbiAgICB0aGlzLmhvc3ROYW1lID0gX3ZhbHVlLmhvc3ROYW1lO1xuICAgIHRoaXMubnVtUmVydW5zID0gX3ZhbHVlLm51bVJlcnVucztcbiAgICB0aGlzLm1heE51bVJlcnVucyA9IF92YWx1ZS5tYXhOdW1SZXJ1bnM7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IF92YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmxvZyA9IChfdmFsdWUubG9nIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMubG9nTGltaXQgPSBfdmFsdWUubG9nTGltaXQ7XG4gICAgT3BlcmF0aW9uTWV0YWRhdGEucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzdGF0dXMoKTogT3BlcmF0aW9uTWV0YWRhdGEuU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IE9wZXJhdGlvbk1ldGFkYXRhLlN0YXR1cykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXJlbnRPcGVyYXRpb25OYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudE9wZXJhdGlvbk5hbWU7XG4gIH1cbiAgc2V0IHBhcmVudE9wZXJhdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmVudE9wZXJhdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3ViT3BlcmF0aW9uTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zdWJPcGVyYXRpb25OYW1lcztcbiAgfVxuICBzZXQgc3ViT3BlcmF0aW9uTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3ViT3BlcmF0aW9uTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY3JlYXRlVGltZSgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVUaW1lO1xuICB9XG4gIHNldCBjcmVhdGVUaW1lKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jcmVhdGVUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN0YXJ0VGltZSgpOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cbiAgc2V0IHN0YXJ0VGltZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGVuZFRpbWUoKTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kVGltZTtcbiAgfVxuICBzZXQgZW5kVGltZSh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZW5kVGltZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ7XG4gIH1cbiAgc2V0IGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2FuY2VsQ29tbWFuZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYW5jZWxDb21tYW5kO1xuICB9XG4gIHNldCBjYW5jZWxDb21tYW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYW5jZWxDb21tYW5kID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZENyZWF0ZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkQ3JlYXRlZDtcbiAgfVxuICBzZXQgdXNlcklkQ3JlYXRlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcklkQ3JlYXRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWRDYW5jZWxsZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkQ2FuY2VsbGVkO1xuICB9XG4gIHNldCB1c2VySWRDYW5jZWxsZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJZENhbmNlbGxlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm9qZWN0UGFyZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RQYXJlbnQ7XG4gIH1cbiAgc2V0IHByb2plY3RQYXJlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2plY3RQYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3BlcmF0aW9uVHlwZSgpOiBPcGVyYXRpb25NZXRhZGF0YS5PcGVyYXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uVHlwZTtcbiAgfVxuICBzZXQgb3BlcmF0aW9uVHlwZSh2YWx1ZTogT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZSkge1xuICAgIHRoaXMuX29wZXJhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaG9zdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdE5hbWU7XG4gIH1cbiAgc2V0IGhvc3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0TmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBudW1SZXJ1bnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtUmVydW5zO1xuICB9XG4gIHNldCBudW1SZXJ1bnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bVJlcnVucyA9IHZhbHVlO1xuICB9XG4gIGdldCBtYXhOdW1SZXJ1bnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TnVtUmVydW5zO1xuICB9XG4gIHNldCBtYXhOdW1SZXJ1bnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heE51bVJlcnVucyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGxvZygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZztcbiAgfVxuICBzZXQgbG9nKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2xvZyA9IHZhbHVlO1xuICB9XG4gIGdldCBsb2dMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sb2dMaW1pdDtcbiAgfVxuICBzZXQgbG9nTGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xvZ0xpbWl0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlIG1lc3NhZ2UgaW5zdGFuY2VcbiAgICovXG4gIHNlcmlhbGl6ZUJpbmFyeSgpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgT3BlcmF0aW9uTWV0YWRhdGEuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhc3QgbWVzc2FnZSB0byBzdGFuZGFyZCBKYXZhU2NyaXB0IG9iamVjdCAoYWxsIG5vbi1wcmltaXRpdmUgdmFsdWVzIGFyZSBkZWVwbHkgY2xvbmVkKVxuICAgKi9cbiAgdG9PYmplY3QoKTogT3BlcmF0aW9uTWV0YWRhdGEuQXNPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgcGFyZW50T3BlcmF0aW9uTmFtZTogdGhpcy5wYXJlbnRPcGVyYXRpb25OYW1lLFxuICAgICAgc3ViT3BlcmF0aW9uTmFtZXM6ICh0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgY3JlYXRlVGltZTogdGhpcy5jcmVhdGVUaW1lID8gdGhpcy5jcmVhdGVUaW1lLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBzdGFydFRpbWU6IHRoaXMuc3RhcnRUaW1lID8gdGhpcy5zdGFydFRpbWUudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGVuZFRpbWU6IHRoaXMuZW5kVGltZSA/IHRoaXMuZW5kVGltZS50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHRoaXMuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQsXG4gICAgICBjYW5jZWxDb21tYW5kOiB0aGlzLmNhbmNlbENvbW1hbmQsXG4gICAgICB1c2VySWRDcmVhdGVkOiB0aGlzLnVzZXJJZENyZWF0ZWQsXG4gICAgICB1c2VySWRDYW5jZWxsZWQ6IHRoaXMudXNlcklkQ2FuY2VsbGVkLFxuICAgICAgcHJvamVjdFBhcmVudDogdGhpcy5wcm9qZWN0UGFyZW50LFxuICAgICAgb3BlcmF0aW9uVHlwZTogdGhpcy5vcGVyYXRpb25UeXBlLFxuICAgICAgaG9zdE5hbWU6IHRoaXMuaG9zdE5hbWUsXG4gICAgICBudW1SZXJ1bnM6IHRoaXMubnVtUmVydW5zLFxuICAgICAgbWF4TnVtUmVydW5zOiB0aGlzLm1heE51bVJlcnVucyxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nOiAodGhpcy5sb2cgfHwgW10pLnNsaWNlKCksXG4gICAgICBsb2dMaW1pdDogdGhpcy5sb2dMaW1pdFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHN1cHBvcnQgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIHJlcGxpY2F0ZXMgdGhlIHN0cnVjdHVyZSBvZiB0b09iamVjdCgpXG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0IG1lc3NhZ2UgdG8gSlNPTiB1c2luZyBwcm90b2J1ZiBKU09OIG5vdGF0aW9uOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9wcm90b2NvbC1idWZmZXJzL2RvY3MvcHJvdG8zI2pzb25cbiAgICogQXR0ZW50aW9uOiBvdXRwdXQgZGlmZmVycyBmcm9tIHRvT2JqZWN0KCkgZS5nLiBlbnVtcyBhcmUgcmVwcmVzZW50ZWQgYXMgbmFtZXMgYW5kIG5vdCBhcyBudW1iZXJzLCBUaW1lc3RhbXAgaXMgYW4gSVNPIERhdGUgc3RyaW5nIGZvcm1hdCBldGMuXG4gICAqIElmIHRoZSBtZXNzYWdlIGl0c2VsZiBvciBzb21lIG9mIGRlc2NlbmRhbnQgbWVzc2FnZXMgaXMgZ29vZ2xlLnByb3RvYnVmLkFueSwgeW91IE1VU1QgcHJvdmlkZSBhIG1lc3NhZ2UgcG9vbCBhcyBvcHRpb25zLiBJZiBub3QsIHRoZSBtZXNzYWdlUG9vbCBpcyBub3QgcmVxdWlyZWRcbiAgICovXG4gIHRvUHJvdG9idWZKU09OKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvcHRpb25zPzogVG9Qcm90b2J1ZkpTT05PcHRpb25zXG4gICk6IE9wZXJhdGlvbk1ldGFkYXRhLkFzUHJvdG9idWZKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOlxuICAgICAgICBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXNbXG4gICAgICAgICAgdGhpcy5zdGF0dXMgPT09IG51bGwgfHwgdGhpcy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDAgOiB0aGlzLnN0YXR1c1xuICAgICAgICBdLFxuICAgICAgcGFyZW50T3BlcmF0aW9uTmFtZTogdGhpcy5wYXJlbnRPcGVyYXRpb25OYW1lLFxuICAgICAgc3ViT3BlcmF0aW9uTmFtZXM6ICh0aGlzLnN1Yk9wZXJhdGlvbk5hbWVzIHx8IFtdKS5zbGljZSgpLFxuICAgICAgY3JlYXRlVGltZTogdGhpcy5jcmVhdGVUaW1lXG4gICAgICAgID8gdGhpcy5jcmVhdGVUaW1lLnRvUHJvdG9idWZKU09OKG9wdGlvbnMpXG4gICAgICAgIDogbnVsbCxcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5zdGFydFRpbWUgPyB0aGlzLnN0YXJ0VGltZS50b1Byb3RvYnVmSlNPTihvcHRpb25zKSA6IG51bGwsXG4gICAgICBlbmRUaW1lOiB0aGlzLmVuZFRpbWUgPyB0aGlzLmVuZFRpbWUudG9Qcm90b2J1ZkpTT04ob3B0aW9ucykgOiBudWxsLFxuICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHRoaXMuaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQsXG4gICAgICBjYW5jZWxDb21tYW5kOiB0aGlzLmNhbmNlbENvbW1hbmQsXG4gICAgICB1c2VySWRDcmVhdGVkOiB0aGlzLnVzZXJJZENyZWF0ZWQsXG4gICAgICB1c2VySWRDYW5jZWxsZWQ6IHRoaXMudXNlcklkQ2FuY2VsbGVkLFxuICAgICAgcHJvamVjdFBhcmVudDogdGhpcy5wcm9qZWN0UGFyZW50LFxuICAgICAgb3BlcmF0aW9uVHlwZTpcbiAgICAgICAgT3BlcmF0aW9uTWV0YWRhdGEuT3BlcmF0aW9uVHlwZVtcbiAgICAgICAgICB0aGlzLm9wZXJhdGlvblR5cGUgPT09IG51bGwgfHwgdGhpcy5vcGVyYXRpb25UeXBlID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiB0aGlzLm9wZXJhdGlvblR5cGVcbiAgICAgICAgXSxcbiAgICAgIGhvc3ROYW1lOiB0aGlzLmhvc3ROYW1lLFxuICAgICAgbnVtUmVydW5zOiB0aGlzLm51bVJlcnVucyxcbiAgICAgIG1heE51bVJlcnVuczogdGhpcy5tYXhOdW1SZXJ1bnMsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZzogKHRoaXMubG9nIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbG9nTGltaXQ6IHRoaXMubG9nTGltaXRcbiAgICB9O1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wZXJhdGlvbk1ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFN0YW5kYXJkIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uIGZvciBPcGVyYXRpb25NZXRhZGF0YVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc09iamVjdCB7XG4gICAgc3RhdHVzOiBPcGVyYXRpb25NZXRhZGF0YS5TdGF0dXM7XG4gICAgcGFyZW50T3BlcmF0aW9uTmFtZTogc3RyaW5nO1xuICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgICBjcmVhdGVUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIHN0YXJ0VGltZT86IGdvb2dsZVByb3RvYnVmMDAwLlRpbWVzdGFtcC5Bc09iamVjdDtcbiAgICBlbmRUaW1lPzogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzT2JqZWN0O1xuICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBib29sZWFuO1xuICAgIGNhbmNlbENvbW1hbmQ6IHN0cmluZztcbiAgICB1c2VySWRDcmVhdGVkOiBzdHJpbmc7XG4gICAgdXNlcklkQ2FuY2VsbGVkOiBzdHJpbmc7XG4gICAgcHJvamVjdFBhcmVudDogc3RyaW5nO1xuICAgIG9wZXJhdGlvblR5cGU6IE9wZXJhdGlvbk1ldGFkYXRhLk9wZXJhdGlvblR5cGU7XG4gICAgaG9zdE5hbWU6IHN0cmluZztcbiAgICBudW1SZXJ1bnM6IG51bWJlcjtcbiAgICBtYXhOdW1SZXJ1bnM6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGxvZzogc3RyaW5nW107XG4gICAgbG9nTGltaXQ6IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b2J1ZiBKU09OIHJlcHJlc2VudGF0aW9uIGZvciBPcGVyYXRpb25NZXRhZGF0YVxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBc1Byb3RvYnVmSlNPTiB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgcGFyZW50T3BlcmF0aW9uTmFtZTogc3RyaW5nO1xuICAgIHN1Yk9wZXJhdGlvbk5hbWVzOiBzdHJpbmdbXTtcbiAgICBjcmVhdGVUaW1lOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIHN0YXJ0VGltZTogZ29vZ2xlUHJvdG9idWYwMDAuVGltZXN0YW1wLkFzUHJvdG9idWZKU09OIHwgbnVsbDtcbiAgICBlbmRUaW1lOiBnb29nbGVQcm90b2J1ZjAwMC5UaW1lc3RhbXAuQXNQcm90b2J1ZkpTT04gfCBudWxsO1xuICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBib29sZWFuO1xuICAgIGNhbmNlbENvbW1hbmQ6IHN0cmluZztcbiAgICB1c2VySWRDcmVhdGVkOiBzdHJpbmc7XG4gICAgdXNlcklkQ2FuY2VsbGVkOiBzdHJpbmc7XG4gICAgcHJvamVjdFBhcmVudDogc3RyaW5nO1xuICAgIG9wZXJhdGlvblR5cGU6IHN0cmluZztcbiAgICBob3N0TmFtZTogc3RyaW5nO1xuICAgIG51bVJlcnVuczogbnVtYmVyO1xuICAgIG1heE51bVJlcnVuczogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgbG9nOiBzdHJpbmdbXTtcbiAgICBsb2dMaW1pdDogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIFN0YXR1cyB7XG4gICAgU1RBVFVTX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBOT1RfU1RBUlRFRCA9IDEsXG4gICAgSU5fUFJPR1JFU1MgPSAyLFxuICAgIERPTkUgPSAzLFxuICAgIENBTkNFTExFRCA9IDQsXG4gICAgRkFJTEVEID0gNVxuICB9XG4gIGV4cG9ydCBlbnVtIE9wZXJhdGlvblR5cGUge1xuICAgIE9QRVJBVElPTl9UWVBFX1VOU1BFQ0lGSUVEID0gMCxcbiAgICBDUkVBVEVfQUdFTlQgPSAxLFxuICAgIElNUE9SVF9BR0VOVCA9IDIsXG4gICAgRVhQT1JUX0FHRU5UID0gMyxcbiAgICBERUxFVEVfQUdFTlQgPSA0LFxuICAgIFJFU1RPUkVfQUdFTlQgPSA1LFxuICAgIEJVSUxEX0FHRU5UX0NBQ0hFID0gNixcbiAgICBUUkFJTl9BR0VOVCA9IDcsXG4gICAgRVhQT1JUX0JFTkNITUFSS19BR0VOVCA9IDhcbiAgfVxufVxuIl19