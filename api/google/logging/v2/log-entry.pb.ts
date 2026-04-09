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
import * as googleApi000 from '../../../google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from '../../../google/api/label.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleApi004 from '../../../google/api/annotations.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleApi006 from '../../../google/api/monitored-resource.pb';
import * as googleLoggingType007 from '../../../google/logging/type/http-request.pb';
import * as googleLoggingType008 from '../../../google/logging/type/log-severity.pb';
import * as googleProtobuf009 from '@ngx-grpc/well-known-types';
import * as googleProtobuf010 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for google.logging.v2.LogEntry
 */
export class LogEntry implements GrpcMessage {
  static id = 'google.logging.v2.LogEntry';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LogEntry();
    LogEntry.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LogEntry) {
    _instance.logName = _instance.logName || '';
    _instance.resource = _instance.resource || undefined;

    _instance.timestamp = _instance.timestamp || undefined;
    _instance.receiveTimestamp = _instance.receiveTimestamp || undefined;
    _instance.severity = _instance.severity || 0;
    _instance.insertId = _instance.insertId || '';
    _instance.httpRequest = _instance.httpRequest || undefined;
    _instance.labels = _instance.labels || {};
    _instance.metadata = _instance.metadata || undefined;
    _instance.operation = _instance.operation || undefined;
    _instance.trace = _instance.trace || '';
    _instance.spanId = _instance.spanId || '';
    _instance.sourceLocation = _instance.sourceLocation || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LogEntry,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 12:
          _instance.logName = _reader.readString();
          break;
        case 8:
          _instance.resource = new googleApi006.MonitoredResource();
          _reader.readMessage(
            _instance.resource,
            googleApi006.MonitoredResource.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.protoPayload = new googleProtobuf009.Any();
          _reader.readMessage(
            _instance.protoPayload,
            googleProtobuf009.Any.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.textPayload = _reader.readString();
          break;
        case 6:
          _instance.jsonPayload = new googleProtobuf003.Struct();
          _reader.readMessage(
            _instance.jsonPayload,
            googleProtobuf003.Struct.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.timestamp = new googleProtobuf010.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf010.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 24:
          _instance.receiveTimestamp = new googleProtobuf010.Timestamp();
          _reader.readMessage(
            _instance.receiveTimestamp,
            googleProtobuf010.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.severity = _reader.readEnum();
          break;
        case 4:
          _instance.insertId = _reader.readString();
          break;
        case 7:
          _instance.httpRequest = new googleLoggingType007.HttpRequest();
          _reader.readMessage(
            _instance.httpRequest,
            googleLoggingType007.HttpRequest.deserializeBinaryFromReader
          );
          break;
        case 11:
          const msg_11 = {} as any;
          _reader.readMessage(
            msg_11,
            LogEntry.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_11.key] = msg_11.value;
          break;
        case 25:
          _instance.metadata = new googleApi006.MonitoredResourceMetadata();
          _reader.readMessage(
            _instance.metadata,
            googleApi006.MonitoredResourceMetadata.deserializeBinaryFromReader
          );
          break;
        case 15:
          _instance.operation = new LogEntryOperation();
          _reader.readMessage(
            _instance.operation,
            LogEntryOperation.deserializeBinaryFromReader
          );
          break;
        case 22:
          _instance.trace = _reader.readString();
          break;
        case 27:
          _instance.spanId = _reader.readString();
          break;
        case 23:
          _instance.sourceLocation = new LogEntrySourceLocation();
          _reader.readMessage(
            _instance.sourceLocation,
            LogEntrySourceLocation.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    LogEntry.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: LogEntry, _writer: BinaryWriter) {
    if (_instance.logName) {
      _writer.writeString(12, _instance.logName);
    }
    if (_instance.resource) {
      _writer.writeMessage(
        8,
        _instance.resource as any,
        googleApi006.MonitoredResource.serializeBinaryToWriter
      );
    }
    if (_instance.protoPayload) {
      _writer.writeMessage(
        2,
        _instance.protoPayload as any,
        googleProtobuf009.Any.serializeBinaryToWriter
      );
    }
    if (_instance.textPayload || _instance.textPayload === '') {
      _writer.writeString(3, _instance.textPayload);
    }
    if (_instance.jsonPayload) {
      _writer.writeMessage(
        6,
        _instance.jsonPayload as any,
        googleProtobuf003.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        9,
        _instance.timestamp as any,
        googleProtobuf010.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.receiveTimestamp) {
      _writer.writeMessage(
        24,
        _instance.receiveTimestamp as any,
        googleProtobuf010.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.severity) {
      _writer.writeEnum(10, _instance.severity);
    }
    if (_instance.insertId) {
      _writer.writeString(4, _instance.insertId);
    }
    if (_instance.httpRequest) {
      _writer.writeMessage(
        7,
        _instance.httpRequest as any,
        googleLoggingType007.HttpRequest.serializeBinaryToWriter
      );
    }
    if (!!_instance.labels) {
      const keys_11 = Object.keys(_instance.labels as any);

      if (keys_11.length) {
        const repeated_11 = keys_11
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          11,
          repeated_11,
          LogEntry.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        25,
        _instance.metadata as any,
        googleApi006.MonitoredResourceMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.operation) {
      _writer.writeMessage(
        15,
        _instance.operation as any,
        LogEntryOperation.serializeBinaryToWriter
      );
    }
    if (_instance.trace) {
      _writer.writeString(22, _instance.trace);
    }
    if (_instance.spanId) {
      _writer.writeString(27, _instance.spanId);
    }
    if (_instance.sourceLocation) {
      _writer.writeMessage(
        23,
        _instance.sourceLocation as any,
        LogEntrySourceLocation.serializeBinaryToWriter
      );
    }
  }

  private _logName: string;
  private _resource?: googleApi006.MonitoredResource;
  private _protoPayload?: googleProtobuf009.Any;
  private _textPayload: string;
  private _jsonPayload?: googleProtobuf003.Struct;
  private _timestamp?: googleProtobuf010.Timestamp;
  private _receiveTimestamp?: googleProtobuf010.Timestamp;
  private _severity: googleLoggingType008.LogSeverity;
  private _insertId: string;
  private _httpRequest?: googleLoggingType007.HttpRequest;
  private _labels: { [prop: string]: string };
  private _metadata?: googleApi006.MonitoredResourceMetadata;
  private _operation?: LogEntryOperation;
  private _trace: string;
  private _spanId: string;
  private _sourceLocation?: LogEntrySourceLocation;

  private _payload: LogEntry.PayloadCase = LogEntry.PayloadCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LogEntry to deeply clone from
   */
  constructor(_value?: RecursivePartial<LogEntry.AsObject>) {
    _value = _value || {};
    this.logName = _value.logName;
    this.resource = _value.resource
      ? new googleApi006.MonitoredResource(_value.resource)
      : undefined;
    this.protoPayload = _value.protoPayload
      ? new googleProtobuf009.Any(_value.protoPayload)
      : undefined;
    this.textPayload = _value.textPayload;
    this.jsonPayload = _value.jsonPayload
      ? new googleProtobuf003.Struct(_value.jsonPayload)
      : undefined;
    this.timestamp = _value.timestamp
      ? new googleProtobuf010.Timestamp(_value.timestamp)
      : undefined;
    this.receiveTimestamp = _value.receiveTimestamp
      ? new googleProtobuf010.Timestamp(_value.receiveTimestamp)
      : undefined;
    this.severity = _value.severity;
    this.insertId = _value.insertId;
    this.httpRequest = _value.httpRequest
      ? new googleLoggingType007.HttpRequest(_value.httpRequest)
      : undefined;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      (this.metadata = _value.metadata
        ? new googleApi006.MonitoredResourceMetadata(_value.metadata)
        : undefined);
    this.operation = _value.operation
      ? new LogEntryOperation(_value.operation)
      : undefined;
    this.trace = _value.trace;
    this.spanId = _value.spanId;
    this.sourceLocation = _value.sourceLocation
      ? new LogEntrySourceLocation(_value.sourceLocation)
      : undefined;
    LogEntry.refineValues(this);
  }
  get logName(): string {
    return this._logName;
  }
  set logName(value: string) {
    this._logName = value;
  }
  get resource(): googleApi006.MonitoredResource | undefined {
    return this._resource;
  }
  set resource(value: googleApi006.MonitoredResource | undefined) {
    this._resource = value;
  }
  get protoPayload(): googleProtobuf009.Any | undefined {
    return this._protoPayload;
  }
  set protoPayload(value: googleProtobuf009.Any | undefined) {
    if (value !== undefined && value !== null) {
      this._textPayload = this._jsonPayload = undefined;
      this._payload = LogEntry.PayloadCase.protoPayload;
    }
    this._protoPayload = value;
  }
  get textPayload(): string {
    return this._textPayload;
  }
  set textPayload(value: string) {
    if (value !== undefined && value !== null) {
      this._protoPayload = this._jsonPayload = undefined;
      this._payload = LogEntry.PayloadCase.textPayload;
    }
    this._textPayload = value;
  }
  get jsonPayload(): googleProtobuf003.Struct | undefined {
    return this._jsonPayload;
  }
  set jsonPayload(value: googleProtobuf003.Struct | undefined) {
    if (value !== undefined && value !== null) {
      this._protoPayload = this._textPayload = undefined;
      this._payload = LogEntry.PayloadCase.jsonPayload;
    }
    this._jsonPayload = value;
  }
  get timestamp(): googleProtobuf010.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf010.Timestamp | undefined) {
    this._timestamp = value;
  }
  get receiveTimestamp(): googleProtobuf010.Timestamp | undefined {
    return this._receiveTimestamp;
  }
  set receiveTimestamp(value: googleProtobuf010.Timestamp | undefined) {
    this._receiveTimestamp = value;
  }
  get severity(): googleLoggingType008.LogSeverity {
    return this._severity;
  }
  set severity(value: googleLoggingType008.LogSeverity) {
    this._severity = value;
  }
  get insertId(): string {
    return this._insertId;
  }
  set insertId(value: string) {
    this._insertId = value;
  }
  get httpRequest(): googleLoggingType007.HttpRequest | undefined {
    return this._httpRequest;
  }
  set httpRequest(value: googleLoggingType007.HttpRequest | undefined) {
    this._httpRequest = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }
  get metadata(): googleApi006.MonitoredResourceMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: googleApi006.MonitoredResourceMetadata | undefined) {
    this._metadata = value;
  }
  get operation(): LogEntryOperation | undefined {
    return this._operation;
  }
  set operation(value: LogEntryOperation | undefined) {
    this._operation = value;
  }
  get trace(): string {
    return this._trace;
  }
  set trace(value: string) {
    this._trace = value;
  }
  get spanId(): string {
    return this._spanId;
  }
  set spanId(value: string) {
    this._spanId = value;
  }
  get sourceLocation(): LogEntrySourceLocation | undefined {
    return this._sourceLocation;
  }
  set sourceLocation(value: LogEntrySourceLocation | undefined) {
    this._sourceLocation = value;
  }
  get payload() {
    return this._payload;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LogEntry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LogEntry.AsObject {
    return {
      logName: this.logName,
      resource: this.resource ? this.resource.toObject() : undefined,
      protoPayload: this.protoPayload
        ? this.protoPayload.toObject()
        : undefined,
      textPayload: this.textPayload,
      jsonPayload: this.jsonPayload ? this.jsonPayload.toObject() : undefined,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      receiveTimestamp: this.receiveTimestamp
        ? this.receiveTimestamp.toObject()
        : undefined,
      severity: this.severity,
      insertId: this.insertId,
      httpRequest: this.httpRequest ? this.httpRequest.toObject() : undefined,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      operation: this.operation ? this.operation.toObject() : undefined,
      trace: this.trace,
      spanId: this.spanId,
      sourceLocation: this.sourceLocation
        ? this.sourceLocation.toObject()
        : undefined
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
  ): LogEntry.AsProtobufJSON {
    return {
      logName: this.logName,
      resource: this.resource ? this.resource.toProtobufJSON(options) : null,
      protoPayload: this.protoPayload
        ? this.protoPayload.toProtobufJSON(options)
        : null,
      textPayload:
        this.textPayload === null || this.textPayload === undefined
          ? null
          : this.textPayload,
      jsonPayload: this.jsonPayload
        ? this.jsonPayload.toProtobufJSON(options)
        : null,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      receiveTimestamp: this.receiveTimestamp
        ? this.receiveTimestamp.toProtobufJSON(options)
        : null,
      severity:
        googleLoggingType008.LogSeverity[
          this.severity === null || this.severity === undefined
            ? 0
            : this.severity
        ],
      insertId: this.insertId,
      httpRequest: this.httpRequest
        ? this.httpRequest.toProtobufJSON(options)
        : null,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {},
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      operation: this.operation ? this.operation.toProtobufJSON(options) : null,
      trace: this.trace,
      spanId: this.spanId,
      sourceLocation: this.sourceLocation
        ? this.sourceLocation.toProtobufJSON(options)
        : null
    };
  }
}
export module LogEntry {
  /**
   * Standard JavaScript object representation for LogEntry
   */
  export interface AsObject {
    logName: string;
    resource?: googleApi006.MonitoredResource.AsObject;
    protoPayload?: googleProtobuf009.Any.AsObject;
    textPayload: string;
    jsonPayload?: googleProtobuf003.Struct.AsObject;
    timestamp?: googleProtobuf010.Timestamp.AsObject;
    receiveTimestamp?: googleProtobuf010.Timestamp.AsObject;
    severity: googleLoggingType008.LogSeverity;
    insertId: string;
    httpRequest?: googleLoggingType007.HttpRequest.AsObject;
    labels: { [prop: string]: string };
    metadata?: googleApi006.MonitoredResourceMetadata.AsObject;
    operation?: LogEntryOperation.AsObject;
    trace: string;
    spanId: string;
    sourceLocation?: LogEntrySourceLocation.AsObject;
  }

  /**
   * Protobuf JSON representation for LogEntry
   */
  export interface AsProtobufJSON {
    logName: string;
    resource: googleApi006.MonitoredResource.AsProtobufJSON | null;
    protoPayload: googleProtobuf009.Any.AsProtobufJSON | null;
    textPayload: string | null;
    jsonPayload: googleProtobuf003.Struct.AsProtobufJSON | null;
    timestamp: googleProtobuf010.Timestamp.AsProtobufJSON | null;
    receiveTimestamp: googleProtobuf010.Timestamp.AsProtobufJSON | null;
    severity: string;
    insertId: string;
    httpRequest: googleLoggingType007.HttpRequest.AsProtobufJSON | null;
    labels: { [prop: string]: string };
    metadata: googleApi006.MonitoredResourceMetadata.AsProtobufJSON | null;
    operation: LogEntryOperation.AsProtobufJSON | null;
    trace: string;
    spanId: string;
    sourceLocation: LogEntrySourceLocation.AsProtobufJSON | null;
  }
  export enum PayloadCase {
    none = 0,
    protoPayload = 1,
    textPayload = 2,
    jsonPayload = 3
  }
  /**
   * Message implementation for google.logging.v2.LogEntry.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'google.logging.v2.LogEntry.LabelsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new LabelsEntry();
      LabelsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: LabelsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: LabelsEntry,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.key = _reader.readString();
            break;
          case 2:
            _instance.value = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      LabelsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: LabelsEntry,
      _writer: BinaryWriter
    ) {
      if (_instance.key) {
        _writer.writeString(1, _instance.key);
      }
      if (_instance.value) {
        _writer.writeString(2, _instance.value);
      }
    }

    private _key: string;
    private _value: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of LabelsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<LabelsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      LabelsEntry.refineValues(this);
    }
    get key(): string {
      return this._key;
    }
    set key(value: string) {
      this._key = value;
    }
    get value(): string {
      return this._value;
    }
    set value(value: string) {
      this._value = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      LabelsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): LabelsEntry.AsObject {
      return {
        key: this.key,
        value: this.value
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
    ): LabelsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module LabelsEntry {
    /**
     * Standard JavaScript object representation for LabelsEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for LabelsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}

/**
 * Message implementation for google.logging.v2.LogEntryOperation
 */
export class LogEntryOperation implements GrpcMessage {
  static id = 'google.logging.v2.LogEntryOperation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LogEntryOperation();
    LogEntryOperation.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LogEntryOperation) {
    _instance.id = _instance.id || '';
    _instance.producer = _instance.producer || '';
    _instance.first = _instance.first || false;
    _instance.last = _instance.last || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LogEntryOperation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.producer = _reader.readString();
          break;
        case 3:
          _instance.first = _reader.readBool();
          break;
        case 4:
          _instance.last = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    LogEntryOperation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LogEntryOperation,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.producer) {
      _writer.writeString(2, _instance.producer);
    }
    if (_instance.first) {
      _writer.writeBool(3, _instance.first);
    }
    if (_instance.last) {
      _writer.writeBool(4, _instance.last);
    }
  }

  private _id: string;
  private _producer: string;
  private _first: boolean;
  private _last: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LogEntryOperation to deeply clone from
   */
  constructor(_value?: RecursivePartial<LogEntryOperation.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.producer = _value.producer;
    this.first = _value.first;
    this.last = _value.last;
    LogEntryOperation.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get producer(): string {
    return this._producer;
  }
  set producer(value: string) {
    this._producer = value;
  }
  get first(): boolean {
    return this._first;
  }
  set first(value: boolean) {
    this._first = value;
  }
  get last(): boolean {
    return this._last;
  }
  set last(value: boolean) {
    this._last = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LogEntryOperation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LogEntryOperation.AsObject {
    return {
      id: this.id,
      producer: this.producer,
      first: this.first,
      last: this.last
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
  ): LogEntryOperation.AsProtobufJSON {
    return {
      id: this.id,
      producer: this.producer,
      first: this.first,
      last: this.last
    };
  }
}
export module LogEntryOperation {
  /**
   * Standard JavaScript object representation for LogEntryOperation
   */
  export interface AsObject {
    id: string;
    producer: string;
    first: boolean;
    last: boolean;
  }

  /**
   * Protobuf JSON representation for LogEntryOperation
   */
  export interface AsProtobufJSON {
    id: string;
    producer: string;
    first: boolean;
    last: boolean;
  }
}

/**
 * Message implementation for google.logging.v2.LogEntrySourceLocation
 */
export class LogEntrySourceLocation implements GrpcMessage {
  static id = 'google.logging.v2.LogEntrySourceLocation';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LogEntrySourceLocation();
    LogEntrySourceLocation.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LogEntrySourceLocation) {
    _instance.file = _instance.file || '';
    _instance.line = _instance.line || '0';
    _instance.pbFunction = _instance.pbFunction || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LogEntrySourceLocation,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.file = _reader.readString();
          break;
        case 2:
          _instance.line = _reader.readInt64String();
          break;
        case 3:
          _instance.pbFunction = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LogEntrySourceLocation.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LogEntrySourceLocation,
    _writer: BinaryWriter
  ) {
    if (_instance.file) {
      _writer.writeString(1, _instance.file);
    }
    if (_instance.line) {
      _writer.writeInt64String(2, _instance.line);
    }
    if (_instance.pbFunction) {
      _writer.writeString(3, _instance.pbFunction);
    }
  }

  private _file: string;
  private _line: string;
  private _pbFunction: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LogEntrySourceLocation to deeply clone from
   */
  constructor(_value?: RecursivePartial<LogEntrySourceLocation.AsObject>) {
    _value = _value || {};
    this.file = _value.file;
    this.line = _value.line;
    this.pbFunction = _value.pbFunction;
    LogEntrySourceLocation.refineValues(this);
  }
  get file(): string {
    return this._file;
  }
  set file(value: string) {
    this._file = value;
  }
  get line(): string {
    return this._line;
  }
  set line(value: string) {
    this._line = value;
  }
  get pbFunction(): string {
    return this._pbFunction;
  }
  set pbFunction(value: string) {
    this._pbFunction = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LogEntrySourceLocation.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LogEntrySourceLocation.AsObject {
    return {
      file: this.file,
      line: this.line,
      pbFunction: this.pbFunction
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
  ): LogEntrySourceLocation.AsProtobufJSON {
    return {
      file: this.file,
      line: this.line,
      pbFunction: this.pbFunction
    };
  }
}
export module LogEntrySourceLocation {
  /**
   * Standard JavaScript object representation for LogEntrySourceLocation
   */
  export interface AsObject {
    file: string;
    line: string;
    pbFunction: string;
  }

  /**
   * Protobuf JSON representation for LogEntrySourceLocation
   */
  export interface AsProtobufJSON {
    file: string;
    line: string;
    pbFunction: string;
  }
}
