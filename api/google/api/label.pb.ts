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

/**
 * Message implementation for google.api.LabelDescriptor
 */
export class LabelDescriptor implements GrpcMessage {
  static id = 'google.api.LabelDescriptor';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LabelDescriptor();
    LabelDescriptor.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LabelDescriptor) {
    _instance.key = _instance.key || '';
    _instance.valueType = _instance.valueType || 0;
    _instance.description = _instance.description || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LabelDescriptor,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.key = _reader.readString();
          break;
        case 2:
          _instance.valueType = _reader.readEnum();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LabelDescriptor.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LabelDescriptor,
    _writer: BinaryWriter
  ) {
    if (_instance.key) {
      _writer.writeString(1, _instance.key);
    }
    if (_instance.valueType) {
      _writer.writeEnum(2, _instance.valueType);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
  }

  private _key: string;
  private _valueType: LabelDescriptor.ValueType;
  private _description: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LabelDescriptor to deeply clone from
   */
  constructor(_value?: RecursivePartial<LabelDescriptor.AsObject>) {
    _value = _value || {};
    this.key = _value.key;
    this.valueType = _value.valueType;
    this.description = _value.description;
    LabelDescriptor.refineValues(this);
  }
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
  }
  get valueType(): LabelDescriptor.ValueType {
    return this._valueType;
  }
  set valueType(value: LabelDescriptor.ValueType) {
    this._valueType = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LabelDescriptor.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LabelDescriptor.AsObject {
    return {
      key: this.key,
      valueType: this.valueType,
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
    options?: ToProtobufJSONOptions
  ): LabelDescriptor.AsProtobufJSON {
    return {
      key: this.key,
      valueType:
        LabelDescriptor.ValueType[
          this.valueType === null || this.valueType === undefined
            ? 0
            : this.valueType
        ],
      description: this.description
    };
  }
}
export module LabelDescriptor {
  /**
   * Standard JavaScript object representation for LabelDescriptor
   */
  export interface AsObject {
    key: string;
    valueType: LabelDescriptor.ValueType;
    description: string;
  }

  /**
   * Protobuf JSON representation for LabelDescriptor
   */
  export interface AsProtobufJSON {
    key: string;
    valueType: string;
    description: string;
  }
  export enum ValueType {
    STRING = 0,
    BOOL = 1,
    INT64 = 2
  }
}
