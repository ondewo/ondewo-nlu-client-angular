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
import * as googleApi000 from '../../google/api/label.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for google.api.MonitoredResourceDescriptor
 */
export class MonitoredResourceDescriptor implements GrpcMessage {
  static id = 'google.api.MonitoredResourceDescriptor';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MonitoredResourceDescriptor();
    MonitoredResourceDescriptor.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MonitoredResourceDescriptor) {
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.labels = _instance.labels || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MonitoredResourceDescriptor,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 5:
          _instance.name = _reader.readString();
          break;
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new googleApi000.LabelDescriptor();
          _reader.readMessage(
            messageInitializer4,
            googleApi000.LabelDescriptor.deserializeBinaryFromReader
          );
          (_instance.labels = _instance.labels || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    MonitoredResourceDescriptor.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MonitoredResourceDescriptor,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(5, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.labels as any,
        googleApi000.LabelDescriptor.serializeBinaryToWriter
      );
    }
  }

  private _name: string;
  private _type: string;
  private _displayName: string;
  private _description: string;
  private _labels?: googleApi000.LabelDescriptor[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MonitoredResourceDescriptor to deeply clone from
   */
  constructor(_value?: RecursivePartial<MonitoredResourceDescriptor.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.type = _value.type;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.labels = (_value.labels || []).map(
      m => new googleApi000.LabelDescriptor(m)
    );
    MonitoredResourceDescriptor.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get labels(): googleApi000.LabelDescriptor[] | undefined {
    return this._labels;
  }
  set labels(value: googleApi000.LabelDescriptor[] | undefined) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MonitoredResourceDescriptor.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MonitoredResourceDescriptor.AsObject {
    return {
      name: this.name,
      type: this.type,
      displayName: this.displayName,
      description: this.description,
      labels: (this.labels || []).map(m => m.toObject())
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
  ): MonitoredResourceDescriptor.AsProtobufJSON {
    return {
      name: this.name,
      type: this.type,
      displayName: this.displayName,
      description: this.description,
      labels: (this.labels || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module MonitoredResourceDescriptor {
  /**
   * Standard JavaScript object representation for MonitoredResourceDescriptor
   */
  export interface AsObject {
    name: string;
    type: string;
    displayName: string;
    description: string;
    labels?: googleApi000.LabelDescriptor.AsObject[];
  }

  /**
   * Protobuf JSON representation for MonitoredResourceDescriptor
   */
  export interface AsProtobufJSON {
    name: string;
    type: string;
    displayName: string;
    description: string;
    labels: googleApi000.LabelDescriptor.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for google.api.MonitoredResource
 */
export class MonitoredResource implements GrpcMessage {
  static id = 'google.api.MonitoredResource';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MonitoredResource();
    MonitoredResource.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MonitoredResource) {
    _instance.type = _instance.type || '';
    _instance.labels = _instance.labels || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MonitoredResource,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readString();
          break;
        case 2:
          const msg_2 = {} as any;
          _reader.readMessage(
            msg_2,
            MonitoredResource.LabelsEntry.deserializeBinaryFromReader
          );
          _instance.labels = _instance.labels || {};
          _instance.labels[msg_2.key] = msg_2.value;
          break;
        default:
          _reader.skipField();
      }
    }

    MonitoredResource.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MonitoredResource,
    _writer: BinaryWriter
  ) {
    if (_instance.type) {
      _writer.writeString(1, _instance.type);
    }
    if (!!_instance.labels) {
      const keys_2 = Object.keys(_instance.labels as any);

      if (keys_2.length) {
        const repeated_2 = keys_2
          .map(key => ({ key: key, value: (_instance.labels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          2,
          repeated_2,
          MonitoredResource.LabelsEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _type: string;
  private _labels: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MonitoredResource to deeply clone from
   */
  constructor(_value?: RecursivePartial<MonitoredResource.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    (this.labels = _value!.labels
      ? Object.keys(_value!.labels).reduce(
          (r, k) => ({ ...r, [k]: _value!.labels![k] }),
          {}
        )
      : {}),
      MonitoredResource.refineValues(this);
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get labels(): { [prop: string]: string } {
    return this._labels;
  }
  set labels(value: { [prop: string]: string }) {
    this._labels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MonitoredResource.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MonitoredResource.AsObject {
    return {
      type: this.type,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {}
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
  ): MonitoredResource.AsProtobufJSON {
    return {
      type: this.type,
      labels: this.labels
        ? Object.keys(this.labels).reduce(
            (r, k) => ({ ...r, [k]: this.labels![k] }),
            {}
          )
        : {}
    };
  }
}
export module MonitoredResource {
  /**
   * Standard JavaScript object representation for MonitoredResource
   */
  export interface AsObject {
    type: string;
    labels: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for MonitoredResource
   */
  export interface AsProtobufJSON {
    type: string;
    labels: { [prop: string]: string };
  }

  /**
   * Message implementation for google.api.MonitoredResource.LabelsEntry
   */
  export class LabelsEntry implements GrpcMessage {
    static id = 'google.api.MonitoredResource.LabelsEntry';

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
 * Message implementation for google.api.MonitoredResourceMetadata
 */
export class MonitoredResourceMetadata implements GrpcMessage {
  static id = 'google.api.MonitoredResourceMetadata';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MonitoredResourceMetadata();
    MonitoredResourceMetadata.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MonitoredResourceMetadata) {
    _instance.systemLabels = _instance.systemLabels || undefined;
    _instance.userLabels = _instance.userLabels || {};
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MonitoredResourceMetadata,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.systemLabels = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.systemLabels,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          const msg_2 = {} as any;
          _reader.readMessage(
            msg_2,
            MonitoredResourceMetadata.UserLabelsEntry
              .deserializeBinaryFromReader
          );
          _instance.userLabels = _instance.userLabels || {};
          _instance.userLabels[msg_2.key] = msg_2.value;
          break;
        default:
          _reader.skipField();
      }
    }

    MonitoredResourceMetadata.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MonitoredResourceMetadata,
    _writer: BinaryWriter
  ) {
    if (_instance.systemLabels) {
      _writer.writeMessage(
        1,
        _instance.systemLabels as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (!!_instance.userLabels) {
      const keys_2 = Object.keys(_instance.userLabels as any);

      if (keys_2.length) {
        const repeated_2 = keys_2
          .map(key => ({ key: key, value: (_instance.userLabels as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(
          2,
          repeated_2,
          MonitoredResourceMetadata.UserLabelsEntry.serializeBinaryToWriter
        );
      }
    }
  }

  private _systemLabels?: googleProtobuf001.Struct;
  private _userLabels: { [prop: string]: string };

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MonitoredResourceMetadata to deeply clone from
   */
  constructor(_value?: RecursivePartial<MonitoredResourceMetadata.AsObject>) {
    _value = _value || {};
    this.systemLabels = _value.systemLabels
      ? new googleProtobuf001.Struct(_value.systemLabels)
      : undefined;
    (this.userLabels = _value!.userLabels
      ? Object.keys(_value!.userLabels).reduce(
          (r, k) => ({ ...r, [k]: _value!.userLabels![k] }),
          {}
        )
      : {}),
      MonitoredResourceMetadata.refineValues(this);
  }
  get systemLabels(): googleProtobuf001.Struct | undefined {
    return this._systemLabels;
  }
  set systemLabels(value: googleProtobuf001.Struct | undefined) {
    this._systemLabels = value;
  }
  get userLabels(): { [prop: string]: string } {
    return this._userLabels;
  }
  set userLabels(value: { [prop: string]: string }) {
    this._userLabels = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MonitoredResourceMetadata.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MonitoredResourceMetadata.AsObject {
    return {
      systemLabels: this.systemLabels
        ? this.systemLabels.toObject()
        : undefined,
      userLabels: this.userLabels
        ? Object.keys(this.userLabels).reduce(
            (r, k) => ({ ...r, [k]: this.userLabels![k] }),
            {}
          )
        : {}
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
  ): MonitoredResourceMetadata.AsProtobufJSON {
    return {
      systemLabels: this.systemLabels
        ? this.systemLabels.toProtobufJSON(options)
        : null,
      userLabels: this.userLabels
        ? Object.keys(this.userLabels).reduce(
            (r, k) => ({ ...r, [k]: this.userLabels![k] }),
            {}
          )
        : {}
    };
  }
}
export module MonitoredResourceMetadata {
  /**
   * Standard JavaScript object representation for MonitoredResourceMetadata
   */
  export interface AsObject {
    systemLabels?: googleProtobuf001.Struct.AsObject;
    userLabels: { [prop: string]: string };
  }

  /**
   * Protobuf JSON representation for MonitoredResourceMetadata
   */
  export interface AsProtobufJSON {
    systemLabels: googleProtobuf001.Struct.AsProtobufJSON | null;
    userLabels: { [prop: string]: string };
  }

  /**
   * Message implementation for google.api.MonitoredResourceMetadata.UserLabelsEntry
   */
  export class UserLabelsEntry implements GrpcMessage {
    static id = 'google.api.MonitoredResourceMetadata.UserLabelsEntry';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new UserLabelsEntry();
      UserLabelsEntry.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: UserLabelsEntry) {
      _instance.key = _instance.key || '';
      _instance.value = _instance.value || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: UserLabelsEntry,
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

      UserLabelsEntry.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: UserLabelsEntry,
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
     * @param _value initial values object or instance of UserLabelsEntry to deeply clone from
     */
    constructor(_value?: RecursivePartial<UserLabelsEntry.AsObject>) {
      _value = _value || {};
      this.key = _value.key;
      this.value = _value.value;
      UserLabelsEntry.refineValues(this);
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
      UserLabelsEntry.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): UserLabelsEntry.AsObject {
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
    ): UserLabelsEntry.AsProtobufJSON {
      return {
        key: this.key,
        value: this.value
      };
    }
  }
  export module UserLabelsEntry {
    /**
     * Standard JavaScript object representation for UserLabelsEntry
     */
    export interface AsObject {
      key: string;
      value: string;
    }

    /**
     * Protobuf JSON representation for UserLabelsEntry
     */
    export interface AsProtobufJSON {
      key: string;
      value: string;
    }
  }
}
