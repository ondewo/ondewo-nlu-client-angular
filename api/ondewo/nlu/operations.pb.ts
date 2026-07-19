/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleApi000 from '../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleApi006 from '../../google/api/annotations.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as googleRpc008 from '../../google/rpc/status.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/operation-metadata.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/common.pb';
export enum RemoteOperationContainerLifecycleState {
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_UNSPECIFIED = 0,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_NOT_FOUND = 1,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_CREATED = 2,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RUNNING = 3,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_PAUSED = 4,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RESTARTING = 5,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_EXITED = 6,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_DEAD = 7
}
/**
 * Message implementation for ondewo.nlu.Operation
 */
export class Operation implements GrpcMessage {
  static id = 'ondewo.nlu.Operation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Operation();
    Operation.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Operation) {
    _instance.name = _instance.name || '';
    _instance.metadata = _instance.metadata || undefined;
    _instance.done = _instance.done || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Operation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.metadata = new ondewoNlu009.OperationMetadata();
          _reader.readMessage(
            _instance.metadata,
            ondewoNlu009.OperationMetadata.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.done = _reader.readBool();
          break;
        case 4:
          _instance.error = new googleRpc008.Status();
          _reader.readMessage(
            _instance.error,
            googleRpc008.Status.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.response = new googleProtobuf002.Any();
          _reader.readMessage(
            _instance.response,
            googleProtobuf002.Any.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Operation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Operation, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        2,
        _instance.metadata as any,
        ondewoNlu009.OperationMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.done) {
      _writer.writeBool(3, _instance.done);
    }
    if (_instance.error) {
      _writer.writeMessage(
        4,
        _instance.error as any,
        googleRpc008.Status.serializeBinaryToWriter
      );
    }
    if (_instance.response) {
      _writer.writeMessage(
        5,
        _instance.response as any,
        googleProtobuf002.Any.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _metadata?: ondewoNlu009.OperationMetadata;
  private _done: boolean;
  private _error?: googleRpc008.Status;
  private _response?: googleProtobuf002.Any;

  private _result: Operation.ResultCase = Operation.ResultCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Operation to deeply clone from
   */
  constructor(_value?: RecursivePartial<Operation.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.metadata = _value.metadata
      ? new ondewoNlu009.OperationMetadata(_value.metadata)
      : undefined;
    this.done = _value.done;
    this.error = _value.error
      ? new googleRpc008.Status(_value.error)
      : undefined;
    this.response = _value.response
      ? new googleProtobuf002.Any(_value.response)
      : undefined;
    Operation.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get metadata(): ondewoNlu009.OperationMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: ondewoNlu009.OperationMetadata | undefined) {
    this._metadata = value;
  }
  get done(): boolean {
    return this._done;
  }
  set done(value: boolean) {
    this._done = value;
  }
  get error(): googleRpc008.Status | undefined {
    return this._error;
  }
  set error(value: googleRpc008.Status | undefined) {
    if (value !== undefined && value !== null) {
      this._response = undefined;
      this._result = Operation.ResultCase.error;
    }
    this._error = value;
  }
  get response(): googleProtobuf002.Any | undefined {
    return this._response;
  }
  set response(value: googleProtobuf002.Any | undefined) {
    if (value !== undefined && value !== null) {
      this._error = undefined;
      this._result = Operation.ResultCase.response;
    }
    this._response = value;
  }
  get result() {
    return this._result;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Operation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Operation.AsObject {
    return {
      name: this.name,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      done: this.done,
      error: this.error ? this.error.toObject() : undefined,
      response: this.response ? this.response.toObject() : undefined
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
    options?: ToProtobufJSONOptions
  ): Operation.AsProtobufJSON {
    return {
      name: this.name,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      done: this.done,
      error: this.error ? this.error.toProtobufJSON(options) : null,
      response: this.response ? this.response.toProtobufJSON(options) : null
    };
  }
}
export module Operation {
  /**
   * Standard JavaScript object representation for Operation
   */
  export interface AsObject {
    name: string;
    metadata?: ondewoNlu009.OperationMetadata.AsObject;
    done: boolean;
    error?: googleRpc008.Status.AsObject;
    response?: googleProtobuf002.Any.AsObject;
  }

  /**
   * Protobuf JSON representation for Operation
   */
  export interface AsProtobufJSON {
    name: string;
    metadata: ondewoNlu009.OperationMetadata.AsProtobufJSON | null;
    done: boolean;
    error: googleRpc008.Status.AsProtobufJSON | null;
    response: googleProtobuf002.Any.AsProtobufJSON | null;
  }
  export enum ResultCase {
    none = 0,
    error = 1,
    response = 2
  }
}

/**
 * Message implementation for ondewo.nlu.GetOperationRequest
 */
export class GetOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetOperationRequest();
    GetOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetOperationRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetOperationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    GetOperationRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetOperationRequest.AsObject {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
    options?: ToProtobufJSONOptions
  ): GetOperationRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module GetOperationRequest {
  /**
   * Standard JavaScript object representation for GetOperationRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for GetOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListOperationsRequest
 */
export class ListOperationsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListOperationsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOperationsRequest();
    ListOperationsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOperationsRequest) {
    _instance.name = _instance.name || '';
    _instance.filter = _instance.filter || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.pageToken = _instance.pageToken || '';
    _instance.operationFilter = _instance.operationFilter || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOperationsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.name = _reader.readString();
          break;
        case 1:
          _instance.filter = _reader.readString();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        case 5:
          _instance.operationFilter = new OperationFilter();
          _reader.readMessage(
            _instance.operationFilter,
            OperationFilter.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.fieldMask = new googleProtobuf004.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf004.FieldMask.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOperationsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOperationsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.filter) {
      _writer.writeString(1, _instance.filter);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
    if (_instance.operationFilter) {
      _writer.writeMessage(
        5,
        _instance.operationFilter as any,
        OperationFilter.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        6,
        _instance.fieldMask as any,
        googleProtobuf004.FieldMask.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _filter: string;
  private _pageSize: number;
  private _pageToken: string;
  private _operationFilter?: OperationFilter;
  private _fieldMask?: googleProtobuf004.FieldMask;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOperationsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOperationsRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.filter = _value.filter;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    this.operationFilter = _value.operationFilter
      ? new OperationFilter(_value.operationFilter)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf004.FieldMask(_value.fieldMask)
      : undefined;
    ListOperationsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get operationFilter(): OperationFilter | undefined {
    return this._operationFilter;
  }
  set operationFilter(value: OperationFilter | undefined) {
    this._operationFilter = value;
  }
  get fieldMask(): googleProtobuf004.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf004.FieldMask | undefined) {
    this._fieldMask = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOperationsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOperationsRequest.AsObject {
    return {
      name: this.name,
      filter: this.filter,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      operationFilter: this.operationFilter
        ? this.operationFilter.toObject()
        : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined
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
    options?: ToProtobufJSONOptions
  ): ListOperationsRequest.AsProtobufJSON {
    return {
      name: this.name,
      filter: this.filter,
      pageSize: this.pageSize,
      pageToken: this.pageToken,
      operationFilter: this.operationFilter
        ? this.operationFilter.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null
    };
  }
}
export module ListOperationsRequest {
  /**
   * Standard JavaScript object representation for ListOperationsRequest
   */
  export interface AsObject {
    name: string;
    filter: string;
    pageSize: number;
    pageToken: string;
    operationFilter?: OperationFilter.AsObject;
    fieldMask?: googleProtobuf004.FieldMask.AsObject;
  }

  /**
   * Protobuf JSON representation for ListOperationsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    filter: string;
    pageSize: number;
    pageToken: string;
    operationFilter: OperationFilter.AsProtobufJSON | null;
    fieldMask: googleProtobuf004.FieldMask.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.OperationFilter
 */
export class OperationFilter implements GrpcMessage {
  static id = 'ondewo.nlu.OperationFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OperationFilter();
    OperationFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OperationFilter) {
    _instance.projectParents = _instance.projectParents || [];
    _instance.statuses = _instance.statuses || [];
    _instance.types = _instance.types || [];

    _instance.userIds = _instance.userIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OperationFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.projectParents = _instance.projectParents || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _reader.readPackableEnumInto(
            (_instance.statuses = _instance.statuses || [])
          );
          break;
        case 3:
          _reader.readPackableEnumInto(
            (_instance.types = _instance.types || [])
          );
          break;
        case 4:
          _instance.startTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.endTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          (_instance.userIds = _instance.userIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    OperationFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OperationFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.projectParents && _instance.projectParents.length) {
      _writer.writeRepeatedString(1, _instance.projectParents);
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedEnum(2, _instance.statuses);
    }
    if (_instance.types && _instance.types.length) {
      _writer.writePackedEnum(3, _instance.types);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        4,
        _instance.startTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        5,
        _instance.endTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.userIds && _instance.userIds.length) {
      _writer.writeRepeatedString(6, _instance.userIds);
    }
  }

  private _projectParents: string[];
  private _statuses: ondewoNlu009.OperationMetadata.Status[];
  private _types: ondewoNlu009.OperationMetadata.OperationType[];
  private _startTime?: googleProtobuf003.Timestamp;
  private _endTime?: googleProtobuf003.Timestamp;
  private _userIds: string[];

  private _startTimeOneof: OperationFilter.StartTimeOneofCase =
    OperationFilter.StartTimeOneofCase.none;
  private _endTimeOneof: OperationFilter.EndTimeOneofCase =
    OperationFilter.EndTimeOneofCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OperationFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<OperationFilter.AsObject>) {
    _value = _value || {};
    this.projectParents = (_value.projectParents || []).slice();
    this.statuses = (_value.statuses || []).slice();
    this.types = (_value.types || []).slice();
    this.startTime = _value.startTime
      ? new googleProtobuf003.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf003.Timestamp(_value.endTime)
      : undefined;
    this.userIds = (_value.userIds || []).slice();
    OperationFilter.refineValues(this);
  }
  get projectParents(): string[] {
    return this._projectParents;
  }
  set projectParents(value: string[]) {
    this._projectParents = value;
  }
  get statuses(): ondewoNlu009.OperationMetadata.Status[] {
    return this._statuses;
  }
  set statuses(value: ondewoNlu009.OperationMetadata.Status[]) {
    this._statuses = value;
  }
  get types(): ondewoNlu009.OperationMetadata.OperationType[] {
    return this._types;
  }
  set types(value: ondewoNlu009.OperationMetadata.OperationType[]) {
    this._types = value;
  }
  get startTime(): googleProtobuf003.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf003.Timestamp | undefined) {
    if (value !== undefined && value !== null) {
      this._startTimeOneof = OperationFilter.StartTimeOneofCase.startTime;
    }
    this._startTime = value;
  }
  get endTime(): googleProtobuf003.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf003.Timestamp | undefined) {
    if (value !== undefined && value !== null) {
      this._endTimeOneof = OperationFilter.EndTimeOneofCase.endTime;
    }
    this._endTime = value;
  }
  get userIds(): string[] {
    return this._userIds;
  }
  set userIds(value: string[]) {
    this._userIds = value;
  }
  get startTimeOneof() {
    return this._startTimeOneof;
  }
  get endTimeOneof() {
    return this._endTimeOneof;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OperationFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OperationFilter.AsObject {
    return {
      projectParents: (this.projectParents || []).slice(),
      statuses: (this.statuses || []).slice(),
      types: (this.types || []).slice(),
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      userIds: (this.userIds || []).slice()
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
    options?: ToProtobufJSONOptions
  ): OperationFilter.AsProtobufJSON {
    return {
      projectParents: (this.projectParents || []).slice(),
      statuses: (this.statuses || []).map(
        v => ondewoNlu009.OperationMetadata.Status[v]
      ),
      types: (this.types || []).map(
        v => ondewoNlu009.OperationMetadata.OperationType[v]
      ),
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      userIds: (this.userIds || []).slice()
    };
  }
}
export module OperationFilter {
  /**
   * Standard JavaScript object representation for OperationFilter
   */
  export interface AsObject {
    projectParents: string[];
    statuses: ondewoNlu009.OperationMetadata.Status[];
    types: ondewoNlu009.OperationMetadata.OperationType[];
    startTime?: googleProtobuf003.Timestamp.AsObject;
    endTime?: googleProtobuf003.Timestamp.AsObject;
    userIds: string[];
  }

  /**
   * Protobuf JSON representation for OperationFilter
   */
  export interface AsProtobufJSON {
    projectParents: string[];
    statuses: string[];
    types: string[];
    startTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    userIds: string[];
  }
  export enum StartTimeOneofCase {
    none = 0,
    startTime = 1
  }
  export enum EndTimeOneofCase {
    none = 0,
    endTime = 1
  }
}

/**
 * Message implementation for ondewo.nlu.ListOperationsResponse
 */
export class ListOperationsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListOperationsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOperationsResponse();
    ListOperationsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOperationsResponse) {
    _instance.operations = _instance.operations || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOperationsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Operation();
          _reader.readMessage(
            messageInitializer1,
            Operation.deserializeBinaryFromReader
          );
          (_instance.operations = _instance.operations || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListOperationsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOperationsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.operations && _instance.operations.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.operations as any,
        Operation.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _operations?: Operation[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOperationsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOperationsResponse.AsObject>) {
    _value = _value || {};
    this.operations = (_value.operations || []).map(m => new Operation(m));
    this.nextPageToken = _value.nextPageToken;
    ListOperationsResponse.refineValues(this);
  }
  get operations(): Operation[] | undefined {
    return this._operations;
  }
  set operations(value: Operation[] | undefined) {
    this._operations = value;
  }
  get nextPageToken(): string {
    return this._nextPageToken;
  }
  set nextPageToken(value: string) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOperationsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOperationsResponse.AsObject {
    return {
      operations: (this.operations || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
    options?: ToProtobufJSONOptions
  ): ListOperationsResponse.AsProtobufJSON {
    return {
      operations: (this.operations || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListOperationsResponse {
  /**
   * Standard JavaScript object representation for ListOperationsResponse
   */
  export interface AsObject {
    operations?: Operation.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListOperationsResponse
   */
  export interface AsProtobufJSON {
    operations: Operation.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CancelOperationRequest
 */
export class CancelOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CancelOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelOperationRequest();
    CancelOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelOperationRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelOperationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CancelOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    CancelOperationRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelOperationRequest.AsObject {
    return {
      name: this.name
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
    options?: ToProtobufJSONOptions
  ): CancelOperationRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module CancelOperationRequest {
  /**
   * Standard JavaScript object representation for CancelOperationRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for CancelOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteOperationRequest
 */
export class DeleteOperationRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteOperationRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteOperationRequest();
    DeleteOperationRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteOperationRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteOperationRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteOperationRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteOperationRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteOperationRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteOperationRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteOperationRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteOperationRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteOperationRequest.AsObject {
    return {
      name: this.name
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
    options?: ToProtobufJSONOptions
  ): DeleteOperationRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteOperationRequest {
  /**
   * Standard JavaScript object representation for DeleteOperationRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for DeleteOperationRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.StreamRemoteOperationContainerLogsRequest
 */
export class StreamRemoteOperationContainerLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.StreamRemoteOperationContainerLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StreamRemoteOperationContainerLogsRequest();
    StreamRemoteOperationContainerLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StreamRemoteOperationContainerLogsRequest) {
    _instance.name = _instance.name || '';
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.tailLines = _instance.tailLines || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StreamRemoteOperationContainerLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 3:
          _instance.tailLines = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StreamRemoteOperationContainerLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StreamRemoteOperationContainerLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(2, _instance.minLogLevel);
    }
    if (_instance.tailLines) {
      _writer.writeInt32(3, _instance.tailLines);
    }
  }

  private _name: string;
  private _minLogLevel: ondewoNlu010.LogSeverity;
  private _tailLines: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StreamRemoteOperationContainerLogsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<
      StreamRemoteOperationContainerLogsRequest.AsObject
    >
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.minLogLevel = _value.minLogLevel;
    this.tailLines = _value.tailLines;
    StreamRemoteOperationContainerLogsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get minLogLevel(): ondewoNlu010.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu010.LogSeverity) {
    this._minLogLevel = value;
  }
  get tailLines(): number {
    return this._tailLines;
  }
  set tailLines(value: number) {
    this._tailLines = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StreamRemoteOperationContainerLogsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StreamRemoteOperationContainerLogsRequest.AsObject {
    return {
      name: this.name,
      minLogLevel: this.minLogLevel,
      tailLines: this.tailLines
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
    options?: ToProtobufJSONOptions
  ): StreamRemoteOperationContainerLogsRequest.AsProtobufJSON {
    return {
      name: this.name,
      minLogLevel:
        ondewoNlu010.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      tailLines: this.tailLines
    };
  }
}
export module StreamRemoteOperationContainerLogsRequest {
  /**
   * Standard JavaScript object representation for StreamRemoteOperationContainerLogsRequest
   */
  export interface AsObject {
    name: string;
    minLogLevel: ondewoNlu010.LogSeverity;
    tailLines: number;
  }

  /**
   * Protobuf JSON representation for StreamRemoteOperationContainerLogsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    minLogLevel: string;
    tailLines: number;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerLogsRequest
 */
export class GetRemoteOperationContainerLogsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerLogsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerLogsRequest();
    GetRemoteOperationContainerLogsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerLogsRequest) {
    _instance.name = _instance.name || '';
    _instance.minLogLevel = _instance.minLogLevel || 0;
    _instance.startTime = _instance.startTime || undefined;
    _instance.endTime = _instance.endTime || undefined;
    _instance.maxLines = _instance.maxLines || 0;
    _instance.regex = _instance.regex || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerLogsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.minLogLevel = _reader.readEnum();
          break;
        case 3:
          _instance.startTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.endTime = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.endTime,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.maxLines = _reader.readInt32();
          break;
        case 6:
          _instance.regex = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerLogsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerLogsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.minLogLevel) {
      _writer.writeEnum(2, _instance.minLogLevel);
    }
    if (_instance.startTime) {
      _writer.writeMessage(
        3,
        _instance.startTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.endTime) {
      _writer.writeMessage(
        4,
        _instance.endTime as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.maxLines) {
      _writer.writeInt32(5, _instance.maxLines);
    }
    if (_instance.regex) {
      _writer.writeString(6, _instance.regex);
    }
  }

  private _name: string;
  private _minLogLevel: ondewoNlu010.LogSeverity;
  private _startTime?: googleProtobuf003.Timestamp;
  private _endTime?: googleProtobuf003.Timestamp;
  private _maxLines: number;
  private _regex: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerLogsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerLogsRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.minLogLevel = _value.minLogLevel;
    this.startTime = _value.startTime
      ? new googleProtobuf003.Timestamp(_value.startTime)
      : undefined;
    this.endTime = _value.endTime
      ? new googleProtobuf003.Timestamp(_value.endTime)
      : undefined;
    this.maxLines = _value.maxLines;
    this.regex = _value.regex;
    GetRemoteOperationContainerLogsRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get minLogLevel(): ondewoNlu010.LogSeverity {
    return this._minLogLevel;
  }
  set minLogLevel(value: ondewoNlu010.LogSeverity) {
    this._minLogLevel = value;
  }
  get startTime(): googleProtobuf003.Timestamp | undefined {
    return this._startTime;
  }
  set startTime(value: googleProtobuf003.Timestamp | undefined) {
    this._startTime = value;
  }
  get endTime(): googleProtobuf003.Timestamp | undefined {
    return this._endTime;
  }
  set endTime(value: googleProtobuf003.Timestamp | undefined) {
    this._endTime = value;
  }
  get maxLines(): number {
    return this._maxLines;
  }
  set maxLines(value: number) {
    this._maxLines = value;
  }
  get regex(): string {
    return this._regex;
  }
  set regex(value: string) {
    this._regex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerLogsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerLogsRequest.AsObject {
    return {
      name: this.name,
      minLogLevel: this.minLogLevel,
      startTime: this.startTime ? this.startTime.toObject() : undefined,
      endTime: this.endTime ? this.endTime.toObject() : undefined,
      maxLines: this.maxLines,
      regex: this.regex
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
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerLogsRequest.AsProtobufJSON {
    return {
      name: this.name,
      minLogLevel:
        ondewoNlu010.LogSeverity[
          this.minLogLevel === null || this.minLogLevel === undefined
            ? 0
            : this.minLogLevel
        ],
      startTime: this.startTime ? this.startTime.toProtobufJSON(options) : null,
      endTime: this.endTime ? this.endTime.toProtobufJSON(options) : null,
      maxLines: this.maxLines,
      regex: this.regex
    };
  }
}
export module GetRemoteOperationContainerLogsRequest {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerLogsRequest
   */
  export interface AsObject {
    name: string;
    minLogLevel: ondewoNlu010.LogSeverity;
    startTime?: googleProtobuf003.Timestamp.AsObject;
    endTime?: googleProtobuf003.Timestamp.AsObject;
    maxLines: number;
    regex: string;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerLogsRequest
   */
  export interface AsProtobufJSON {
    name: string;
    minLogLevel: string;
    startTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    endTime: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    maxLines: number;
    regex: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerLogsResponse
 */
export class GetRemoteOperationContainerLogsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerLogsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerLogsResponse();
    GetRemoteOperationContainerLogsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerLogsResponse) {
    _instance.logLines = _instance.logLines || [];
    _instance.truncated = _instance.truncated || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerLogsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RemoteOperationContainerLogLine();
          _reader.readMessage(
            messageInitializer1,
            RemoteOperationContainerLogLine.deserializeBinaryFromReader
          );
          (_instance.logLines = _instance.logLines || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.truncated = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerLogsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerLogsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.logLines && _instance.logLines.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.logLines as any,
        RemoteOperationContainerLogLine.serializeBinaryToWriter
      );
    }
    if (_instance.truncated) {
      _writer.writeBool(2, _instance.truncated);
    }
  }

  private _logLines?: RemoteOperationContainerLogLine[];
  private _truncated: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerLogsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerLogsResponse.AsObject>
  ) {
    _value = _value || {};
    this.logLines = (_value.logLines || []).map(
      m => new RemoteOperationContainerLogLine(m)
    );
    this.truncated = _value.truncated;
    GetRemoteOperationContainerLogsResponse.refineValues(this);
  }
  get logLines(): RemoteOperationContainerLogLine[] | undefined {
    return this._logLines;
  }
  set logLines(value: RemoteOperationContainerLogLine[] | undefined) {
    this._logLines = value;
  }
  get truncated(): boolean {
    return this._truncated;
  }
  set truncated(value: boolean) {
    this._truncated = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerLogsResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerLogsResponse.AsObject {
    return {
      logLines: (this.logLines || []).map(m => m.toObject()),
      truncated: this.truncated
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
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerLogsResponse.AsProtobufJSON {
    return {
      logLines: (this.logLines || []).map(m => m.toProtobufJSON(options)),
      truncated: this.truncated
    };
  }
}
export module GetRemoteOperationContainerLogsResponse {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerLogsResponse
   */
  export interface AsObject {
    logLines?: RemoteOperationContainerLogLine.AsObject[];
    truncated: boolean;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerLogsResponse
   */
  export interface AsProtobufJSON {
    logLines: RemoteOperationContainerLogLine.AsProtobufJSON[] | null;
    truncated: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RemoteOperationContainerLogLine
 */
export class RemoteOperationContainerLogLine implements GrpcMessage {
  static id = 'ondewo.nlu.RemoteOperationContainerLogLine';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoteOperationContainerLogLine();
    RemoteOperationContainerLogLine.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoteOperationContainerLogLine) {
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.level = _instance.level || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoteOperationContainerLogLine,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.timestamp = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.level = _reader.readEnum();
          break;
        case 3:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RemoteOperationContainerLogLine.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoteOperationContainerLogLine,
    _writer: BinaryWriter
  ) {
    if (_instance.timestamp) {
      _writer.writeMessage(
        1,
        _instance.timestamp as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.level) {
      _writer.writeEnum(2, _instance.level);
    }
    if (_instance.message) {
      _writer.writeString(3, _instance.message);
    }
  }

  private _timestamp?: googleProtobuf003.Timestamp;
  private _level: ondewoNlu010.LogSeverity;
  private _message: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoteOperationContainerLogLine to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoteOperationContainerLogLine.AsObject>
  ) {
    _value = _value || {};
    this.timestamp = _value.timestamp
      ? new googleProtobuf003.Timestamp(_value.timestamp)
      : undefined;
    this.level = _value.level;
    this.message = _value.message;
    RemoteOperationContainerLogLine.refineValues(this);
  }
  get timestamp(): googleProtobuf003.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf003.Timestamp | undefined) {
    this._timestamp = value;
  }
  get level(): ondewoNlu010.LogSeverity {
    return this._level;
  }
  set level(value: ondewoNlu010.LogSeverity) {
    this._level = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoteOperationContainerLogLine.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoteOperationContainerLogLine.AsObject {
    return {
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      level: this.level,
      message: this.message
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
    options?: ToProtobufJSONOptions
  ): RemoteOperationContainerLogLine.AsProtobufJSON {
    return {
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      level:
        ondewoNlu010.LogSeverity[
          this.level === null || this.level === undefined ? 0 : this.level
        ],
      message: this.message
    };
  }
}
export module RemoteOperationContainerLogLine {
  /**
   * Standard JavaScript object representation for RemoteOperationContainerLogLine
   */
  export interface AsObject {
    timestamp?: googleProtobuf003.Timestamp.AsObject;
    level: ondewoNlu010.LogSeverity;
    message: string;
  }

  /**
   * Protobuf JSON representation for RemoteOperationContainerLogLine
   */
  export interface AsProtobufJSON {
    timestamp: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    level: string;
    message: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetRemoteOperationContainerStatusRequest
 */
export class GetRemoteOperationContainerStatusRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetRemoteOperationContainerStatusRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRemoteOperationContainerStatusRequest();
    GetRemoteOperationContainerStatusRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRemoteOperationContainerStatusRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRemoteOperationContainerStatusRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRemoteOperationContainerStatusRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRemoteOperationContainerStatusRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRemoteOperationContainerStatusRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRemoteOperationContainerStatusRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    GetRemoteOperationContainerStatusRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRemoteOperationContainerStatusRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRemoteOperationContainerStatusRequest.AsObject {
    return {
      name: this.name
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
    options?: ToProtobufJSONOptions
  ): GetRemoteOperationContainerStatusRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetRemoteOperationContainerStatusRequest {
  /**
   * Standard JavaScript object representation for GetRemoteOperationContainerStatusRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for GetRemoteOperationContainerStatusRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RemoteOperationContainerStatus
 */
export class RemoteOperationContainerStatus implements GrpcMessage {
  static id = 'ondewo.nlu.RemoteOperationContainerStatus';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RemoteOperationContainerStatus();
    RemoteOperationContainerStatus.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RemoteOperationContainerStatus) {
    _instance.name = _instance.name || '';
    _instance.lifecycleState = _instance.lifecycleState || 0;
    _instance.hostName = _instance.hostName || '';
    _instance.containerName = _instance.containerName || '';
    _instance.exitCode = _instance.exitCode || 0;
    _instance.oomKilled = _instance.oomKilled || false;
    _instance.healthStatus = _instance.healthStatus || '';
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
    _instance.observedAt = _instance.observedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RemoteOperationContainerStatus,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.lifecycleState = _reader.readEnum();
          break;
        case 3:
          _instance.hostName = _reader.readString();
          break;
        case 4:
          _instance.containerName = _reader.readString();
          break;
        case 5:
          _instance.exitCode = _reader.readInt32();
          break;
        case 6:
          _instance.oomKilled = _reader.readBool();
          break;
        case 7:
          _instance.healthStatus = _reader.readString();
          break;
        case 8:
          _instance.startedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.finishedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.observedAt = new googleProtobuf003.Timestamp();
          _reader.readMessage(
            _instance.observedAt,
            googleProtobuf003.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RemoteOperationContainerStatus.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RemoteOperationContainerStatus,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.lifecycleState) {
      _writer.writeEnum(2, _instance.lifecycleState);
    }
    if (_instance.hostName) {
      _writer.writeString(3, _instance.hostName);
    }
    if (_instance.containerName) {
      _writer.writeString(4, _instance.containerName);
    }
    if (_instance.exitCode) {
      _writer.writeInt32(5, _instance.exitCode);
    }
    if (_instance.oomKilled) {
      _writer.writeBool(6, _instance.oomKilled);
    }
    if (_instance.healthStatus) {
      _writer.writeString(7, _instance.healthStatus);
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        8,
        _instance.startedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        9,
        _instance.finishedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.observedAt) {
      _writer.writeMessage(
        10,
        _instance.observedAt as any,
        googleProtobuf003.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _lifecycleState: RemoteOperationContainerLifecycleState;
  private _hostName: string;
  private _containerName: string;
  private _exitCode: number;
  private _oomKilled: boolean;
  private _healthStatus: string;
  private _startedAt?: googleProtobuf003.Timestamp;
  private _finishedAt?: googleProtobuf003.Timestamp;
  private _observedAt?: googleProtobuf003.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RemoteOperationContainerStatus to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RemoteOperationContainerStatus.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.lifecycleState = _value.lifecycleState;
    this.hostName = _value.hostName;
    this.containerName = _value.containerName;
    this.exitCode = _value.exitCode;
    this.oomKilled = _value.oomKilled;
    this.healthStatus = _value.healthStatus;
    this.startedAt = _value.startedAt
      ? new googleProtobuf003.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf003.Timestamp(_value.finishedAt)
      : undefined;
    this.observedAt = _value.observedAt
      ? new googleProtobuf003.Timestamp(_value.observedAt)
      : undefined;
    RemoteOperationContainerStatus.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get lifecycleState(): RemoteOperationContainerLifecycleState {
    return this._lifecycleState;
  }
  set lifecycleState(value: RemoteOperationContainerLifecycleState) {
    this._lifecycleState = value;
  }
  get hostName(): string {
    return this._hostName;
  }
  set hostName(value: string) {
    this._hostName = value;
  }
  get containerName(): string {
    return this._containerName;
  }
  set containerName(value: string) {
    this._containerName = value;
  }
  get exitCode(): number {
    return this._exitCode;
  }
  set exitCode(value: number) {
    this._exitCode = value;
  }
  get oomKilled(): boolean {
    return this._oomKilled;
  }
  set oomKilled(value: boolean) {
    this._oomKilled = value;
  }
  get healthStatus(): string {
    return this._healthStatus;
  }
  set healthStatus(value: string) {
    this._healthStatus = value;
  }
  get startedAt(): googleProtobuf003.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf003.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._finishedAt = value;
  }
  get observedAt(): googleProtobuf003.Timestamp | undefined {
    return this._observedAt;
  }
  set observedAt(value: googleProtobuf003.Timestamp | undefined) {
    this._observedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RemoteOperationContainerStatus.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RemoteOperationContainerStatus.AsObject {
    return {
      name: this.name,
      lifecycleState: this.lifecycleState,
      hostName: this.hostName,
      containerName: this.containerName,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      healthStatus: this.healthStatus,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined,
      observedAt: this.observedAt ? this.observedAt.toObject() : undefined
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
    options?: ToProtobufJSONOptions
  ): RemoteOperationContainerStatus.AsProtobufJSON {
    return {
      name: this.name,
      lifecycleState:
        RemoteOperationContainerLifecycleState[
          this.lifecycleState === null || this.lifecycleState === undefined
            ? 0
            : this.lifecycleState
        ],
      hostName: this.hostName,
      containerName: this.containerName,
      exitCode: this.exitCode,
      oomKilled: this.oomKilled,
      healthStatus: this.healthStatus,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null,
      observedAt: this.observedAt
        ? this.observedAt.toProtobufJSON(options)
        : null
    };
  }
}
export module RemoteOperationContainerStatus {
  /**
   * Standard JavaScript object representation for RemoteOperationContainerStatus
   */
  export interface AsObject {
    name: string;
    lifecycleState: RemoteOperationContainerLifecycleState;
    hostName: string;
    containerName: string;
    exitCode: number;
    oomKilled: boolean;
    healthStatus: string;
    startedAt?: googleProtobuf003.Timestamp.AsObject;
    finishedAt?: googleProtobuf003.Timestamp.AsObject;
    observedAt?: googleProtobuf003.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RemoteOperationContainerStatus
   */
  export interface AsProtobufJSON {
    name: string;
    lifecycleState: string;
    hostName: string;
    containerName: string;
    exitCode: number;
    oomKilled: boolean;
    healthStatus: string;
    startedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
    observedAt: googleProtobuf003.Timestamp.AsProtobufJSON | null;
  }
}
